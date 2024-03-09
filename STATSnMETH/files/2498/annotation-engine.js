/**
 * Annotation engine javascript
 */
(function ($, window, document, $proto) {
	/**
	 * Private members and functions
	 * only accessible within this sandbox
	 */
	var $ae = {}; // initially this is private; later we make this a namespaced global (see below)
	var _personalizationSupport = false; // default not logged in
	var _isIe = false; // hacky workaround for bug/ticket #3559

	/**
	 * Public members and functions
	 * Accessible via global ANNOTATION_ENGINE namespaced object (see below)
	 */
	$ae.selection = null;
	$ae.ROOTID = 'contentRoot';
	$ae.ROOT = null;
	$ae.BUTTON = null;
	$ae.POPUP = null;
	$ae.buttonVisible = false;
	$ae.popupActivated = false;
	$ae.options = null;
	$ae.skipNextPositioning = false;
	$ae.isTouchMoving = false;

	// initialize the engine
	$ae.init = function (options) {
		var htmlTag = $('html');
		var options = options || {};

		//Defaults
		if (!options.loginBoxHeight) {
			options.loginBoxHeight = '250';
		}
		if (!options.loginBoxWidth) {
			options.loginBoxWidth = '550';
		}
		if (options.contentRoot) {
			$ae.ROOTID = options.contentRoot;
		}

		var localStoredAnnotation = localStorage.getItem('annotation');
		localStorage.removeItem('annotation');

		if (options.personalizationSupport) {
			_personalizationSupport = true;
		}

		if (
			htmlTag.hasClass('ie9') ||
			htmlTag.hasClass('lt-ie9') ||
			(htmlTag.attr('data-useragent') &&
				htmlTag.attr('data-useragent').indexOf('Edge') !== -1) ||
			(htmlTag.attr('data-useragent') &&
				htmlTag.attr('data-useragent').indexOf('MSIE') !== -1) ||
			(htmlTag.attr('data-useragent') &&
				htmlTag.attr('data-useragent').indexOf('Trident/7.0') !== -1)
		) {
			_isIe = true;
		} // hacky workaround for bug/ticket #3559

		var root, button, popup;

		$ae.ROOT = $('#' + $ae.ROOTID);
		$ae.BUTTON = $('#createAnnotation');
		$ae.POPUP = $('#annotationsPopup');

		root = $ae.ROOT;
		button = $ae.BUTTON;
		popup = $ae.POPUP;
		counter = popup.find('.count');

		/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >>> ANNOTATION SELECTION SETUP */

		// Make sure everything is reset on page load/reload
		$ae.assignValues(['', '', '', '']);

		$(document.body).on('mousedown touchstart', function (event) {
			if ($ae.buttonVisible && event.target.parentNode.id !== 'createAnnotation') {
				$ae.hideAnnotateButton(); // just make sure it's gone;
			}
		});

		root.on('mousedown touchstart', function () {
			if (_personalizationSupport) {
				if ($ae.hasSelectionSupport()) {
					// this is a temporary fix
					//vvirtanen: probably disables text multi-select capabilities?
					$ae.getFixedSelection().removeAllRanges();
				}
			}
		});
		root.on('mouseup touchend touchcancel', function (event) {
			// if can get selection object...
			if ($ae.hasSelectionSupport() && !$ae.popupActivated) {
				$ae.getSelection(function () {
					// hacky workaround for bug/ticket #3559
					if (_isIe === true) {
						setTimeout(function () {
							$ae.showAnnotateButton(event);
						}, 0);
					} else {
						$ae.showAnnotateButton(event);
					}
				});
			}
		});

		/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >>> POPUP SETUP */

		button.on('touchend', function (event) {
			if (_personalizationSupport) {
				$ae.getSelection(function () {
					$ae.showPopup('create');
				});
			} else {
				$ae.showLoginToPersonalizationBox();
			}
			event.preventDefault();
		});

		button.on('click', function (event) {
			if (_personalizationSupport) {
				$ae.showPopup('create');
			} else {
				var redirectUrl = $ae.BUTTON.children('button').data().redirect;
				if (redirectUrl) {
					window.open(redirectUrl, '_self');
				} else {
					window.location.replace('/login');
				}
			}
		});

		if (_personalizationSupport) {
			popup.on('click touchend', '.close, .cancel', function () {
				POPUP_ENGINE.hidePopup(popup);
				$ae.popupActivated = false;
				return false;
			});
			popup.on('keyup', '.comment', function () {
				var length = this.value.length;
				if (length >= 500) {
					length = 500;
					this.value = this.value.substring(0, 500);
				}
				counter.text(500 - length);
			});

			/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >>> ANNOTATION INTERACTION */

			root.on('touchstart', '.annot', function (event) {
				$ae.isTouchMoving = false;
			});
			root.on('touchmove', function (event) {
				$ae.isTouchMoving = true;
			});
			root.on('touchend', '.annot', function (event) {
				if (!$ae.isTouchMoving) {
					$(event.target).click();
					event.preventDefault();
				}
			});

			root.on('click', '.annot', function () {
				// TODO: future annotation work ticket #3419
				// "Click state of links within annotations"
				var link = $(this).closest('a', $ae.ROOT),
					annotationIds,
					annotationIdsInput;
				if (link.length) {
					return true;
				} else {
					if ($ae.hasSelectionSupport() && $ae.getFixedSelection().isCollapsed) {
						annotationIdsInput = $('#viewAnnotationForm input[name="annotationIds"]');
						annotationIds = $(this).data().ids;
						if (
							!$ae.popupActivated ||
							String(annotationIdsInput.val()) !== String(annotationIds)
						) {
							annotationIdsInput.val(annotationIds);
							// SUBMIT FORM
							$proto('viewAnnotationForm').fire(Tapestry.FORM_PROCESS_SUBMIT_EVENT);
						}
						return false;
					}
				}
			});

			/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >>> POPUP INTERACTION */

			popup.on('touchend click', '.edit', function () {
				$ae.skipNextPositioning = true;
				$ae.showPopup('edit', $(this).closest('.annotation'));
				return false;
			});
			// TODO: this "hack" workaround for actionlinks needs to be fixed
			// SEE: https://trac.pubfactory.com/pubfactory/ticket/3412#comment:2
			popup.on('touchend click', '.delete', function () {
				// SEE: http://api.jquery.com/trigger/#comment-48277488 for this little snippet
				$(this)
					.prev('.deleteLink')
					.on('click', function () {
						window.location.href = this.href;
						return false;
					})
					.trigger('click');
				return false;
			});
			$proto('viewAnnotationZone').observe(Tapestry.ZONE_UPDATED_EVENT, function (event) {
				$ae.showPopup('view');
			});

			/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >>> (rerouted from) MY ANNOTATIONS ACTIONS */

			if (options.showPopup && options.annotationIds) {
				$ae.updateZoneContent(options);
			}
		}

		if (options.draggable) {
			POPUP_ENGINE.enableUserDrag($ae.POPUP, $ae.POPUP.find('.popupHeader'));
		}
		if (options.resizable) {
			POPUP_ENGINE.enableUserResize($ae.POPUP);
		}

		$ae.options = options; //Store options for later use.
	};

	$ae.showLoginToPersonalizationBox = function () {
		var annotationButton = $ae.BUTTON.children('button'),
			message,
			url;
		message = annotationButton.data().signinmessage;
		url = '/app/login?message=';
		if (message) {
			url = url + message;
		} else {
			url = url + 'Please sign in to create annotations.';
		}
		// TODO: replace with new lightbox, when we finish that
		// see https://trac.pubfactory.com/pubfactory/ticket/290
		showLightbox(url, $ae.options.loginBoxWidth, $ae.options.loginBoxHeight, '&amp;nbsp;', "aeLogin", "Please log in to create an annotation.");
	};

	$ae.updateZoneContent = function (options) {
		if (_personalizationSupport) {
			var length = options.annotationIds.length;
			var ids = '';
			var i;
			// FIXME: this solution is terrible, but I don't know how to process the event AFTER the Tapestry.init...
			// throwing in a fail-safety iterator, so it doesn't just loop endlessly...
			var processSubmitEventIterator = 0;
			var processSubmitEvent = function () {
				if ($ae.POPUP.css('display') === 'none') {
					if (processSubmitEventIterator === 0) {
						if (options.showPopup === 'edit') {
							// TODO: there's a FOUC glitch in hiding it this way -- is there a better way to show/hide while it goes to edit mode?
							$ae.POPUP.fadeTo(0, 0);
						}
						$proto('viewAnnotationForm').fire(Tapestry.FORM_PROCESS_SUBMIT_EVENT);
					}
					if (processSubmitEventIterator < 1000) {
						processSubmitEventIterator += 1;
						setTimeout(processSubmitEvent, 1);
					}
				} else {
					// IF 'edit' SHOW EDIT POPUP (default is 'view' by nature of Tapestry.FORM_PROCESS_SUBMIT_EVENT)
					if (options.showPopup === 'edit') {
						$('#viewAnnotationZone .edit').click();
					}
				}
			};
			for (i = 0; i < length; i++) {
				if (i === 0) {
					ids += options.annotationIds[i];
				} else {
					ids += ',' + options.annotationIds[i];
				}
			}
			$('#viewAnnotationForm input[name="annotationIds"]').val(ids);
			setTimeout(processSubmitEvent, 1);
		}
	};

	$ae.getSelection = function (callback) {
		var selection,
			startElement,
			endElement,
			tempElement,
			start,
			end,
			tempStart,
			reversedPosition,
			reversePosition = function () {
				tempElement = startElement;
				tempStart = start;
				startElement = endElement;
				endElement = tempElement;
				start = end;
				end = tempStart;
			},
			startXPath,
			endXPath;

		selection = $ae.selection = $ae.getFixedSelection();

		if (!selection.isCollapsed) {
			if (_personalizationSupport) {
				startElement = selection.anchorNode;
				endElement = selection.focusNode;
				start = selection.anchorOffset;
				end = selection.focusOffset;

				// invert the selection if necessary
				reversedPosition =
					$ae.comparePosition(startElement, endElement) ===
					Node.DOCUMENT_POSITION_PRECEDING;
				if (reversedPosition) {
					reversePosition();
				} else if (startElement === endElement && start > end) {
					reversePosition();
				}

				//OUP-2348:  AMAMOS:  Annotate Option Doesn't Always Work
				if (end === 0 || $(endElement).text().length === 0) {
					var candidates = document
						.getElementById('contentRoot')
						.getElementsByTagName('*');
					for (i = 0; i < candidates.length; i++) {
						if (
							$.trim(candidates[i].innerHTML).length > 0 &&
							selection.containsNode(candidates[i], false)
						) {
							if (
								$.trim(selection.toString()).indexOf(
									$.trim($(candidates[i]).text())
								) >
								$.trim(selection.toString()).indexOf($.trim($(endElement).text()))
							) {
								endElement = candidates[i];
							}
						}
					}
				}

				startXPath = $ae.getXPath(startElement);
				endXPath = $ae.getXPath(endElement);

				$ae.assignValues([startXPath, endXPath, start, end], selection.toString());
			}
			if (callback) {
				return callback();
			}
		}
	};

	$ae.getXPath = function (node) {
		if (_personalizationSupport) {
			var textNode = node,
				nodeId,
				nodeClass,
				nodeName,
				paths = [],
				sib,
				i;

			// find which text node it is within immediate parent
			for (i = 0; textNode; textNode = textNode.previousSibling) {
				if (textNode.nodeType === 3) {
					i++;
				}
			}

			//OUP-2348:  AMAMOS:  Annotate Option Doesn't Always Work
			if (i > 0) {
				paths.unshift('text()[' + i + ']');
			} else {
				paths.unshift('text()[1]');
			}

			var outsideROOT = true;

			// find all the parents
			node = $(node).parent();
			for (; node.length; node = $(node).parent()) {
				(nodeId = node.attr('id')),
					(nodeClass = node.attr('class')),
					(nodeName = node[0].nodeName.toLowerCase());

				/**
				 * Robert - do not enable element classes, they fail for some reason. Only ids and indexes.
				 * @eugene
				 **/

				if (nodeId !== undefined && nodeId !== '') {
					if (nodeId === $ae.ROOTID) {
						/** it may happen that ROOTID is not a parent of the node */
						outsideROOT = false;
						break;
					}
					paths.unshift(nodeName + "[@id='" + nodeId + "']");
				} else {
					for (i = 1, sib = node.prev(); sib.length; sib = sib.prev()) {
						//Updated for OUP-2348:  AMAMOS:  Annotate Option Doesn't Always Work
						if (
							sib[0].nodeName.toLowerCase() === nodeName &&
							(nodeName !== 'p' || !$(sib[0]).is(':empty'))
						) {
							i++;
						}
					}
					paths.unshift(nodeName + '[' + i + ']');
				}
			}

			/**
			 * in case when a node is outside the ROOT we return empty string
			 * this is for TRAC#3617
			 * ask @eugene if you have questions
			 */
			if (outsideROOT) return '';

			return paths.length ? '/' + paths.join('/') : null;
		}
	};

	$ae.assignValues = function (valuesArray, selectionText) {
		if (_personalizationSupport) {
			// FIXME: this array thing is a bit of a hackish workaround to get things right.
			// maybe should actually belong to $ae object...
			$('#annotationsForm input[name="selectionStartXPath"]').val(valuesArray[0]);
			$('#annotationsForm input[name="selectionEndXPath"]').val(valuesArray[1]);
			$('#annotationsForm input[name="selectionStart"]').val(valuesArray[2]);
			$('#annotationsForm input[name="selectionEnd"]').val(valuesArray[3]);
			//Updated for OUP-2348:  AMAMOS:  Annotate Option Doesn't Always Work
			$('#annotationsForm .annotatedText').text($.trim(selectionText));
			$('#annotationsForm .annotatedTextarea').text($.trim(selectionText));
		}
	};

	/**
	 * Returns the selection and uses rangy if it is available.
	 */
	$ae.getFixedSelection = function () {
		if (window.getSelection) {
			return window.getSelection();
		} else if (rangy && rangy.getSelection) {
			rangy.init(); //Cheap, initialized only once.
			return rangy.getSelection();
		}
	};

	/**
	 * Returns true if the browser has required selection capabilities, either provided by rangy or
	 * native.
	 */
	$ae.hasSelectionSupport = function () {
		return (window.rangy && rangy.getSelection) || window.getSelection ? true : false;
	};

	/**
	 * Provides the
	 * Compare Position - MIT Licensed, John Resig, http://ejohn.org/blog/comparing-document-position/
	 */
	$ae.comparePosition = function (a, b) {
		if (a.compareDocumentPosition) {
			return a.compareDocumentPosition(b);
		}
		return a.contains
			? (a != b && a.contains(b) && 16) +
			(a != b && b.contains(a) && 8) +
			(a.sourceIndex >= 0 && b.sourceIndex >= 0
				? (a.sourceIndex < b.sourceIndex && 4) +
				(a.sourceIndex > b.sourceIndex && 2)
				: 1) +
			0
			: 0;
	};

	$ae.showAnnotateButton = function (event) {
		if (window.POPUP_ENGINE) {
			$ae.BUTTON.css({
				left: POPUP_ENGINE.getPageX(event) + 'px',
				top: POPUP_ENGINE.getPageY(event) + 'px',
			}).removeClass('hidden');
		} else {
			$ae.BUTTON.css({
				left: event.pageX + 'px',
				top: event.pageY + 'px',
			}).removeClass('hidden');
		}
		$ae.buttonVisible = true;
	};

	$ae.hideAnnotateButton = function () {
		$ae.BUTTON.addClass('hidden');
		$ae.buttonVisible = false;
	};

	$ae.showPopup = function (state, annotation) {
		if (_personalizationSupport) {
			var popup = $ae.POPUP,
				width = popup.outerWidth(),
				height = popup.outerHeight(),
				margin = '-' + height / 2 + 'px 0 0 -' + width / 2 + 'px';

			$ae.hideAnnotateButton();
			if (state === 'create') {
				$('#annotationsForm').removeClass('hidden');
				// $('#annotationsForm .comment').focus();
				$('#annotationsForm .comment').val('');
				$('#viewAnnotationZone').addClass('hidden');
				$('#editAnnotationForm').addClass('hidden');
			} else if (state === 'edit') {
				if (annotation) {
					var text = annotation.find('.annotatedText').text(),
						annoId = annotation.find('.annotationId').text(),
						comment = $.trim(annotation.find('blockquote').text());
					deleteLink = annotation.find('.deleteLink').clone();
					$('#editAnnotationForm input[name="annotationId"]').val(annoId);
					$('#editAnnotationForm .annotatedText').text(text);
					$('#editAnnotationForm .annotatedTextarea').val(text);
					$('#editAnnotationForm .comment').val(comment);
					$('#editAnnotationForm .deleteLink').remove();
					$('#editAnnotationForm .delete').before(deleteLink);
				}
				$('#editAnnotationForm').removeClass('hidden');
				//	$('#editAnnotationForm .comment').focus();
				$('#viewAnnotationZone').addClass('hidden');
				$('#annotationsForm').addClass('hidden');
				popup.fadeTo(0, 1); // this is only if you've come from my annotation page
			} else {
				// 'view' is default
				$('#viewAnnotationZone').removeClass('hidden');
				$('#annotationsForm').addClass('hidden');
				$('#editAnnotationForm').addClass('hidden');
			}

			if ($ae.options.draggable) {
				POPUP_ENGINE.showPopup(popup, !$ae.skipNextPositioning);
				POPUP_ENGINE.keepPopupInSightWhenResizingWindow(popup);
			} else {
				var undef = void 0;
				POPUP_ENGINE.showPopup(popup, !$ae.skipNextPositioning, undef, margin);
			}

			if ($ae.options.autoResizeHeightOnOpen) {
				POPUP_ENGINE.autoResizeHeight(popup);
			}

			$ae.skipNextPositioning = false;
			$ae.popupActivated = true;

			$('.annotatedText').ellipsis({ row: 7 });
		}
	};

	// make object global
	window.ANNOTATION_ENGINE = $ae;
})(jQuery, window, document, $);

/**
 * Javascript that can be used to enable user drag.
 */
(function ($, window, document) {
	var $de = {};

	$de.options = null;
	$de.touchEnabled = 'ontouchend' in document;

	$de.setDefaults = function () {
		var options = {};

		//Setting defaults
		//The amound of pixels that the popup remains visible, ie user can't place the dialog totally outside of viewport.
		options.dragTresholdInBrowserEdges = 100;
		options.popupMinimumHeight = 200;
		options.popupMaximumHeight = 500;
		options.popupMinimumWidth = 200;
		options.popupMaximumWidth = 500;
		options.signature = 'defaults';

		$de.options = options;
	};

	//Registers a mousedown/touchdown listener to the popup header.
	//on mouse down it registers the mouse move and mouse up listeners
	//mouse move is used to do the actual work, mouse up to remove all
	//listeners registered during mouse down.
	$de.enableUserDrag = function (popup, dragHandle, options) {
		var options = options || $de.options;
		dragHandle.on('mousedown touchstart', function (e) {
			var win = $(window),
				doc = $(document),
				minLeft = options.dragTresholdInBrowserEdges - popup.outerWidth(),
				maxLeft = win.width() - options.dragTresholdInBrowserEdges,
				maxTop = win.height() - options.dragTresholdInBrowserEdges,
				startX = $de.getPageX(e),
				startY = $de.getPageY(e),
				originalTop = popup.offset().top - doc.scrollTop(),
				originalLeft = popup.offset().left - doc.scrollLeft();

			popup.css({
				top: originalTop + 'px',
				left: originalLeft + 'px',
				opacity: '.5',
				margin: '0',
			});

			doc.on('mouseup.remove_dragannot touchend.remove_dragannot', function () {
				$de.stopDrag(popup);
			});

			doc.on('mousemove.dragannot touchmove.dragannot', function (e) {
				if ($de.touchEnabled && e.originalEvent.touches.length > 1) {
					//Stop if user uses multiple fingers.
					$de.stopDrag(popup);
					e.preventDefault();
					return false;
				}
				var newTop = originalTop + ($de.getPageY(e) - startY);
				var newLeft = originalLeft + ($de.getPageX(e) - startX);
				$de.movePopup(popup, newTop, 0, maxTop, newLeft, minLeft, maxLeft);
				e.preventDefault();
			});
			e.preventDefault();
		});
	};

	$de.getPageY = function (e) {
		if ($de.touchEnabled) {
			return e.originalEvent.changedTouches[0].pageY;
		} else {
			return e.pageY;
		}
	};

	$de.getPageX = function (e) {
		if ($de.touchEnabled) {
			return e.originalEvent.changedTouches[0].pageX;
		} else {
			return e.pageX;
		}
	};

	$de.stopDrag = function (popup) {
		$(document).off(
			'mousemove.dragannot touchmove.dragannot mouseup.remove_dragannot touchend.remove_dragannot'
		);
		popup.css('opacity', '1');
	};

	$de.keepPopupInSightWhenResizingWindow = function (popup, options) {
		var options = options || $de.options;
		$(window).on('resize.dragannot' + popup.attr('id'), function (e) {
			var doc = $(document);
			var win = $(window);
			var originalTop = popup.offset().top - doc.scrollTop();
			var originalLeft = popup.offset().left - doc.scrollLeft();
			$de.movePopup(
				popup,
				originalTop,
				0,
				win.height() - options.dragTresholdInBrowserEdges,
				originalLeft,
				options.dragTresholdInBrowserEdges - popup.outerWidth(),
				win.width() - options.dragTresholdInBrowserEdges
			);
		});
	};

	$de.movePopup = function (popup, newTop, minTop, maxTop, newLeft, minLeft, maxLeft) {
		if (newTop < minTop) {
			newTop = minTop;
		}
		if (newTop > maxTop) {
			newTop = maxTop;
		}
		if (newLeft < minLeft) {
			newLeft = minLeft;
		}
		if (newLeft > maxLeft) {
			newLeft = maxLeft;
		}
		popup.css({ top: newTop + 'px', left: newLeft + 'px' });
	};

	$de.hidePopup = function (popup) {
		$(window).off('resize.dragannot' + popup.attr('id'));
		if (popup[0]) {
			popup[0].setStyle('display: none');
		}
		popup.addClass('hidden');
	};

	$de.showPopup = function (popup, reposition, options, margin) {
		var options = options || $de.options;
		if (reposition) {
			if (margin) {
				popup.css({ margin: margin });
			} else {
				popup.css({ top: '50px', left: '50px' });
			}
		}
		// adding this logic since we are hard coding the style when hide it so it will need to be set "block on show function"
		if (popup[0]) {
			popup[0].setStyle('display: block');
		}

		popup.removeClass('hidden');
	};

	/**
	 * Method moves the element above the given nearTo parameter (which should be jQuery element)
	 * and to the left of the given param. (The bottom of the popup is 20 pixels higher than the top of the param
	 * and the right edge of the popup is 20 pixels more left than the left edge of the param.)
	 * If the popup does not fit above the parameter in the view port then the top of the popup is placed 20 pixels
	 * below the parameter bottom edge. If the popup does not fit to left side then it's left edge is placed 20 pixels
	 * after the right edge of the nearTo parameter.
	 */
	$de.movePopupNearElement = function (popup, nearTo, options) {
		var options = options || $de.options,
			doc = $(document),
			win = $(window),
			topOffset = doc.scrollTop(),
			leftOffset = doc.scrollLeft(),
			minTop = 5,
			maxTop = win.height() - options.dragTresholdInBrowserEdges,
			minLeft = 5,
			maxLeft = win.width() - options.dragTresholdInBrowserEdges,
			spaceAbove = nearTo.offset().top - doc.scrollTop(),
			spaceBelow = win.height() - spaceAbove - nearTo.outerHeight(),
			spaceLeft = nearTo.offset().left - doc.scrollLeft(),
			spaceRight = win.width() - spaceLeft - nearTo.outerWidth(),
			fitsAbove = spaceAbove > popup.outerHeight(),
			fitsLeft = spaceLeft > popup.outerWidth(),
			newLeft = nearTo.offset().left - doc.scrollLeft() - popup.outerWidth() - 20,
			newTop = nearTo.offset().top - doc.scrollTop() - popup.outerHeight() - 20;

		if (!fitsAbove) {
			newTop = spaceAbove + nearTo.outerHeight() + 20;
		}

		if (!fitsLeft) {
			newLeft = spaceLeft + nearTo.outerWidth() + 20;
		}

		$de.movePopup(popup, newTop, minTop, maxTop, newLeft, minLeft, maxLeft);
	};

	$de.center = function (popup) {
		var win = $(window),
			that = $(popup);
		popup.css('top', Math.max(0, (win.height() - that.outerHeight()) / 2) + 'px');
		popup.css('left', Math.max(0, (win.width() - that.outerWidth()) / 2) + 'px');
	};

	$de.autoResizeHeight = function (popup, options) {
		var options = options || $de.options;
		popup.css('height', 'auto');

		var margin = popup.outerHeight(false) - popup.innerHeight(),
			height = popup.height() + margin;

		if (height > options.popupMaximumHeight) {
			height = options.popupMaximumHeight;
		}
		if (height < options.popupMinimumHeight) {
			height = options.popupMinimumHeight;
		}
		popup.css('height', height + 'px');
	};

	$de.autoResizeBoth = function (popup, options) {
		popup.css('width', 'auto');
		popup.css('height', 'auto');
		$de.autoResizeWidth(popup, options);
		$de.autoResizeHeight(popup, options);
	};

	$de.autoResizeWidth = function (popup, options) {
		var options = options || $de.options;
		popup.css('width', 'auto');

		var margin = popup.outerWidth(false) - popup.innerWidth(),
			width = popup.width() + margin;

		if (width > options.popupMaximumWidth) {
			width = options.popupMaximumWidth;
		}
		if (width < options.popupMinimumWidth) {
			width = options.popupMinimumWidth;
		}
		popup.css('width', width + 'px');
	};

	$de.isCursorInViewPort = function (cursorY, cursorX) {
		var doc = $(document),
			win = $(window),
			topOffset = doc.scrollTop(),
			leftOffset = doc.scrollLeft();
		return (
			cursorY >= topOffset &&
			cursorY <= win.height() + topOffset &&
			(cursorX >= leftOffset && cursorX <= win.width() + leftOffset)
		);
	};

	//Registers a mousedown listener to the popup resize handle.
	//on mouse down it registers the mouse move and mouse up listeners
	//mouse move is used to do the actual work, mouse up to remove all
	//listeners registered during mouse down.
	$de.enableUserResize = function (popup, options) {
		var options = options || $de.options;
		popup.find('#annotationsPopupResizeHandle').on('mousedown touchstart', function (e) {
			var startX = $de.getPageX(e),
				doc = $(document),
				startY = $de.getPageY(e),
				originalHeight = popup.height(),
				originalWidth = popup.width();
			doc.on('mouseup.remove_resizeannot touchend.remove_resizeannot', function () {
				$de.stopResize();
			});
			doc.on('mousemove.resizeannot touchmove.resizeannot', function (e) {
				//Stop resize if the cursor is outside the viewport.
				if ($de.isCursorInViewPort($de.getPageY(e), $de.getPageX(e))) {
					var newHeight = originalHeight + ($de.getPageY(e) - startY);
					var newWidth = originalWidth + ($de.getPageX(e) - startX);
					if (newWidth < options.popupMinimumWidth) {
						newWidth = options.popupMinimumWidth;
					}
					if (newWidth > options.popupMaximumWidth) {
						newWidth = options.popupMaximumWidth;
					}
					if (newHeight < options.popupMinimumHeight) {
						newHeight = options.popupMinimumHeight;
					}
					if (newHeight > options.popupMaximumHeight) {
						newHeight = options.popupMaximumHeight;
					}
					popup.css('height', newHeight + 'px').css('width', newWidth + 'px');
				}
				e.preventDefault();
			});
			e.preventDefault();
		});
	};

	$de.stopResize = function () {
		$(document).off(
			'mousemove.resizeannot mouseup.remove_resizeannot touchmove.resizeannot touchend.remove_resizeannot'
		);
	};

	// make object global
	window.POPUP_ENGINE = $de;
})(jQuery, window, document);

POPUP_ENGINE.setDefaults();

function scrollToAnnotation(annotId) {
	// data-ids is a comma-separated list of annotation IDs, so we have to check if the list
	// contains our target annotation ID
	var target = $j('.annot[data-ids]').filter(function () {
		var ids = $j(this)
			.attr('data-ids')
			.split(',');
		var index = ids.indexOf(annotId);
		return index > -1;
	});

	if (target.length == 0) {
		return; // annotation not found
	}

	var newTop = target.offset().top;
	if (newTop != null && $j(window).height() < newTop) {
		$j('html, body').animate({ scrollTop: newTop - 400 }, 'slow');
	}
}
