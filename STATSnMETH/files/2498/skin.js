var originalSelectLabel = 'Select';

/** Creates a non-modal dialog (or popup) triggered by a momentary hover over an element.
 * The popup is positioned above the triggering element. It also adds an element which is styled
 * suitably for positioning below the triggering element which is hidden by default. Subclasses can override.
 */
document.observe("dom:loaded", function() {

    var selectElement = $$('.openSpecialization').first();
    if (selectElement != undefined) {
        originalSelectLabel = selectElement.innerHTML;
    }

    Cookie.init({name: 'appdata'});
	addAbstractAndKeywordsPlusHandler();
	addFrontMatterCollapse();
	addBookFrontMatterCollapse();
	// norlov: #139 LH Nav TOCs on Articles - Design inadequate
    addTocCollapse();
	
	// set initial browse nav state
	if(typeof Cookie.getData("taxonomyNavHidden") === "undefined") {		
		$('navDrop').getStyle('display') == 'none' ? Cookie.setData('taxonomyNavHidden', true) : Cookie.setData('taxonomyNavHidden', false);
	}
	
	$$('.closeNav').invoke("observe","click", hideTaxonomyNav);
	$$('.showTaxonomyNav').invoke("observe","click", showTaxonomyNav);

	$$('.toggle-sharing').invoke("observe","click", toggleSharingNav);

	
	addSpecializeSubMenuHandlers();
	$$('.clearAll').invoke("observe","click", function(event) {setSpecialMenu(false, false)});

	// #101 removing 'Search' text from $('q') field:
	$('q').stopObserving('focus');
	$('q').stopObserving('blur');
	$('q').value = '';

	updateSelectLabel();

	// setting widths on entry images (only if on .bookDetail page)
	if(document.body.className.indexOf('bookDetail') > -1) {
//		document.body.className = document.body.className + ' expandedImages';
		$$('.articleimage img').each(function(el, i) {
			el = $(el);
			imgLoaded(el, function() {
				// console.log(el.getWidth(), i)
			});
		});
//		$$('.articleimage img').invoke('observe', 'load' function(evt) {
//			el = $(evt.target);
////			console.log(el.down('img').getWidth());
//			console.log(el);
//		});
	}

});

//function imgLoaded(img) {
//	if(img.nodeType === 1 && img.tagName.toLowerCase() === 'img' && img.src !== '') {
//		if (this.complete || this.readyState === 4) {
//			return true;
//		} else {
//			return false;
//		}
//	}
//}
//function adjustInlineImage() {
//	console.log("the image finally loaded");
//}

function imgLoaded(img, callback) {
	if(img.nodeType === 1 && img.tagName.toLowerCase() === 'img' && img.src !== '') {
		if (this.complete || this.readyState === 4) {
			callback();
		} else {
			if(img.addEventListener) {
				img.addEventListener('load', callback, false);
			} else if(img.attachEvent) {
				img.attachEvent('onload', callback);
			}
		}
	}
}


	
function hideOtherTaxonomyNavs(taxonomyId) {
    ['Specialty', 'Career', 'Series'].each(function(element, index, array) {
        if(taxonomyId!=element) { hideTaxonomyNav(element, false); }
    });
}

function hideTaxonomyNav(evt) {
	$('navDrop').slideUp({ duration: 0.4 });
	$('navDrop').fade({ duration: 0.4 });
	
	// remove the on class
	$$('#homenav .on').invoke('removeClassName', 'on');
	
	Cookie.removeData('taxonomyNavHidden');
	Cookie.setData('taxonomyNavHidden', true);
	evt.stop();
}

function showTaxonomyNav(evt) {
	
	var a = $(this);
	var parentUl = a.up('ul');

	if(evt.type == "click") {
		if (jQuery(this).attr('aria-expanded') == 'false'){
			jQuery(parentUl).find('a.showTaxonomyNav').attr('aria-expanded', 'false');
			jQuery(this).attr('aria-expanded', 'true');
		} else {
			jQuery(this).attr('aria-expanded', 'false');
		}
	} else {
		jQuery(parentUl).find('a.showTaxonomyNav').attr('aria-expanded', 'false');
	}


    /*if (a.up('li').hasClassName('on') && !$('navDrop').visible()) {
    	a.up('li').removeClassName('on')
    }
	
	// norlov: Platform change according to http://trac.ifactory.com/omo/ticket/566
    if (a.up('li').hasClassName('on')) {
        hideTaxonomyNav(evt);
        return;
    }

	$$('#homenav .on').invoke('removeClassName', 'on');	
	a.up('li').addClassName('on');

	$$('#navDrop .taxonomyNavigation').invoke('hide');
	$(a.readAttribute('data-body')).show();
	
	if (!$('navDrop').visible()) {
		$('navDrop').slideDown({ duration: 0.4 });
		$('navDrop').appear({ duration: 0.4 });
	}
	
	Cookie.removeData('taxonomyNavHidden');
	Cookie.setData('taxonomyNavHidden', a.readAttribute('data-body'));*/
	
	evt.stop();	
}

function toggleSharingNav(evt) {
	
	var a = $(this);

	if(evt.type == "click") {
		if (jQuery(this).attr('aria-expanded') == 'false'){
			jQuery(this).attr('aria-expanded', 'true');
		} else {
			jQuery(this).attr('aria-expanded', 'false');
		}
	}

	evt.stop();
}

/*- On click outside hide taxonomy menu & add this menu -*/
jQuery(document).on('click', function(event) {
  	if (!jQuery(event.target).closest('#pageLinks .share').length) {
    	jQuery('.toggle-sharing').attr('aria-expanded', 'false');
  	}
	jQuery(document).keyup(function(e) {
	    if (e.keyCode == 27) { // escape key maps to keycode `27`
	        jQuery("#navigation li.browseNav > a[aria-expanded='true']").attr("aria-expanded", "false");
	    }
	});
  	if (!jQuery(event.target).closest('#homenav').length) {
    	jQuery('.showTaxonomyNav').attr('aria-expanded', 'false');
  	}
});

// Wait till page loads to add the blur event to the main navigation
window.onload=function() {
	jQuery('#navigation .browseNav li.column:last-of-type li:last-of-type > a, li.browse-group a').keydown(function(event) {
        if(event.keyCode == 9 && !(event.shiftKey && event.keyCode == 9)) {
			jQuery(this).closest('.expandable').children('a').attr('aria-expanded', false);
		}
    });
	jQuery(document).keyup(function(e) {
	    if (e.keyCode == 27) { // escape key maps to keycode `27`
	    	jQuery("#navigation li.browseNav > a[aria-expanded='true']").attr("aria-expanded", "false");
	    }
	});
    // On keypress of shift and tab close the menus 
    jQuery('#homenav .browseNav > a').keydown(function(event) {
	    if(event.shiftKey && event.keyCode == 9 && jQuery(this).attr('aria-expanded') == 'true') { 
		  	jQuery(this).attr('aria-expanded', 'false');
		}
	});
    /*- On focus of sharing menu set blur event of last menu item -*/
    jQuery('#pageLinks li.share > a').on('focus.addThis', function(){
        // Hide elements from screen reader (hack to fix poor add this standard functionality)
        jQuery('#addThisMenu span.at-icon-wrapper, #addThisMenu span.at-label').attr('aria-hidden', 'true');
        // Remove focus event so it doesn't trigger again
        jQuery('#pageLinks li.share > a').off('focus.addThis');
    });
}

function addAbstractAndKeywordsPlusHandler() {
	$$('.abstractMinus').invoke("observe","click", function(event){
		showHideFullAbstractAndKeywords( event.findElement());
		event.stop();
	});
}

function showHideFullAbstractAndKeywords(el) {
	if (el.hasClassName("abstractPlus")) {
		el.removeClassName("abstractPlus");
		el.addClassName("abstractMinus");
		$$('.abstract, .keywords').each(function(el){
			el.style.display = "";
		});
	} else {
		el.removeClassName("abstractMinus");
		el.addClassName("abstractPlus");
		$$('.abstract, .keywords').each(function(el){
			el.style.display = "none";
		});
	}
}


function addFrontMatterCollapse() {
	$$('#frontMatterCollapseTool').invoke("observe","click", function(event){
		toggleFrontMatterCollapse( event.findElement());
		event.stop();
	});
	
	$$('#tailMatterCollapseTool').invoke("observe","click", function(event){
		toggleTailMatterCollapse( event.findElement());
		event.stop();
	});
	
}

function toggleFrontMatterCollapse(el) {
	
	if (el.hasClassName("frontMatterCollapsed")) {
		el.removeClassName("frontMatterCollapsed");
		el.addClassName("frontMatterExpanded");
		$$('.collapsefront').each(function(item) {
			item.removeClassName('collapsefront');
			item.addClassName('collapsefrontexpanded');
		});
		
	} else {
		el.removeClassName("frontMatterExpanded");
		el.addClassName("frontMatterCollapsed");
		$$('.collapsefrontexpanded').each(function(item) {
			item.removeClassName('collapsefrontexpanded');
			item.addClassName('collapsefront');
		});
		
	}
}

function toggleTailMatterCollapse(el) {
	
	if (el.hasClassName("tailMatterCollapsed")) {
		el.removeClassName("tailMatterCollapsed");
		el.addClassName("tailMatterExpanded");
		$$('.collapsetail').each(function(item) {
			item.removeClassName('collapsetail');
			item.addClassName('collapsetailexpanded');
		});
		
	} else {
		el.removeClassName("tailMatterExpanded");
		el.addClassName("tailMatterCollapsed");
		$$('.collapsetailexpanded').each(function(item) {
			item.removeClassName('collapsetailexpanded');
			item.addClassName('collapsetail');
		});
		
	}
}

function addBookFrontMatterCollapse() {
	$$('#bookFrontMatterCollapseTool').invoke("observe","click", function(event){
		toggleBookFrontMatterCollapse( event.findElement());
		event.stop();
	});
	
	$$('#bookTailMatterCollapseTool').invoke("observe","click", function(event){
		toggleBookTailMatterCollapse( event.findElement());
		event.stop();
	});
	
}

function toggleBookFrontMatterCollapse(el) {
	
	if (el.hasClassName("bookFrontMatterCollapsed")) {
		el.removeClassName("bookFrontMatterCollapsed");
		el.addClassName("bookFrontMatterExpanded");
		$$('.bookcollapsefront').each(function(item) {
			item.removeClassName('bookcollapsefront');
			item.addClassName('bookcollapsefrontexpanded');
		});
		
	} else {
		el.removeClassName("bookFrontMatterExpanded");
		el.addClassName("bookFrontMatterCollapsed");
		$$('.bookcollapsefrontexpanded').each(function(item) {
			item.removeClassName('bookCollapsefrontexpanded');
			item.addClassName('bookcollapsefront');
		});
		
	}
}

function toggleBookTailMatterCollapse(el) {
	
	if (el.hasClassName("bookTailMatterCollapsed")) {
		el.removeClassName("bookTailMatterCollapsed");
		el.addClassName("bookTailMatterExpanded");
		$$('.bookcollapsetail').each(function(item) {
			item.removeClassName('bookcollapsetail');
			item.addClassName('bookcollapsetailexpanded');
		});
		
	} else {
		el.removeClassName("bookTailMatterExpanded");
		el.addClassName("bookTailMatterCollapsed");
		$$('.bookcollapsetailexpanded').each(function(item) {
			item.removeClassName('bookcollapsetailexpanded');
			item.addClassName('bookcollapsetail');
		});
		
	}
}

function addTocCollapse() {
    $$('span.tocCollapsed,span.tocExpanded').invoke("observe", "click", function(event){
        toggleTocCollapse(event.findElement());
		event.stop();
	});
}

function toggleTocCollapse(el) {
    if (el.hasClassName("tocCollapsed")) {
        el.removeClassName('tocCollapsed');
        el.addClassName('tocExpanded');
        var ulTocCollapsed = el.down('ul.tocCollapsed')
        if (ulTocCollapsed) {
            ulTocCollapsed.removeClassName('tocCollapsed');
            ulTocCollapsed.addClassName('tocExpanded');
        }
    } else if (el.hasClassName("tocExpanded")) {
        el.removeClassName('tocExpanded');
        el.addClassName('tocCollapsed');
        var ulTocExpanded = el.down('ul.tocExpanded')
        if (ulTocExpanded) {
            ulTocExpanded.removeClassName('tocExpanded');
            ulTocExpanded.addClassName('tocCollapsed');
        }
    }
}


function setSpecialMenu(value, isLoading) {
	var checkboxArray1 = $$('.specialCheckbox');
	checkboxArray1.each(function(box){
		if ((value == false) || (!box.hasClassName('specialSubCheckbox'))) {
			box.checked = value;
		}
	});
	if (value == true) {
		var checkboxSubArray = $$('.specialSubCheckbox');
		checkboxSubArray.each(function(box){
				box.checked = false;
		});
	}
	if (!isLoading) {
		updateSpecializeCheckboxOnServer('ALL_CHECKBOXES',value);
	}
	updateSelectLabel();
}
function addSpecializeSubMenuHandlers() {
	$$('.specializePlus').invoke("observe","click", function(event){
		showSpecialSubMenu( event.findElement());
		event.stop();
	});
	$$('.specialSelectNone').invoke("observe","click", function(event) {setSpecialMenu(false, false)});
	$$('.specialSelectAll').invoke("observe","click", function(event) {setSpecialMenu(true, false)});
	$$('.openSpecializationArea').invoke("observe","click", function(event) {
		initSpecialMenuView();
		jQuery('#specializations').show();
		window.specious = $('specializations');
	});
	$$('.closeSpecializationArea').invoke("observe","click", function(event) {
		jQuery('#specializations').hide();
	});

	
	
	setSpecialMenu(false, true);
	$$('.specialCheckbox').invoke("observe","click",function(event) {
		if (this.id && this.id.length > 17) {
			updateSpecializeCheckboxOnServer(this.id.substring(16),this.checked);
			updateSelectLabel();
			clickOnSubChoices(this.id.substring(16),this.checked);
			var specialSearchOptionElem = $('specialSearchOption');
			if (specialSearchOptionElem.checked == false) {
				$('specialSearchOption').click();	
			}
			if (this.hasClassName('specialSubCheckbox') && this.checked) {
				var upperElem = this.up(1);
				if (upperElem && upperElem.id && upperElem.id.length > 11) {
					var superId = upperElem.id.substring(11);
					var superCheckbox = $('specialSubCheck_' + superId);
					if (superCheckbox && superCheckbox.checked) {
						superCheckbox.click();
					}
				} 
			}
		}
	});
	// Refine by Subject Taxonomy Facet on Results Pages
	$$('.showTaxonomyFilterExpand').invoke("observe","click", function(event){
		showTaxonomyFilter( event.findElement());
		event.stop();
	});
	
	var aSavedChoices = $$('.specializeSavedSelection');
	for (var i = 0; i < aSavedChoices.length; i++) {
		var choice = aSavedChoices[i].id;
		if (choice.length > 12) {
			choice = choice.substring(11);
		}
		var ssc = $('specialSubCheck_' + choice);
		if (ssc) {
			ssc.checked = true;
		}
	}

	
	$$('#specialSearchOption').invoke("observe","click",function(event) {
		updateSearchBySpecializationOnServer(this.checked);
	});
}

function clickOnSubChoices(topic, checked) {
	var aSubChecks = $$("#specialSub_" + topic + " li input");
	for (var i = 0; i< aSubChecks.length; i++) {
		if (checked && (aSubChecks[i].checked == true)) {
			aSubChecks[i].click();
		}
	}
}

function updateSelectLabel() {
	var selectLabel = '';
	var limitLenForLink = 25;
	for (var i=0; i<10; i++) {
		var elem = 'ul.specialMenuCol'+i;
		if ($$(elem).length != 0) {
			for(var j=0; j < $$(elem).first().childNodes.length; j++) {
				var catElem = $($$(elem).first().childNodes[j]);
				selectLabel = appendSelectedCategory(selectLabel, catElem);

				if (catElem.nodeType == Node.ELEMENT_NODE) {
					var subcatList = catElem.down('ul');
					if (subcatList !== undefined) {
						var subcatElems = subcatList.childNodes;
						for(var t=0; t < subcatElems.length; t++){
							var subcatElem = $(subcatElems[t]);
							selectLabel = appendSelectedCategory(selectLabel, subcatElem);
						}
					}
				}
			}
		}
	}
	if (selectLabel.length >= limitLenForLink) {
		selectLabel = selectLabel.substring(0, limitLenForLink);
	}
	var elToUpdate = $$('.openSpecialization').first();
	if (elToUpdate != undefined) {
		if (selectLabel != '') {
			elToUpdate.innerHTML = selectLabel;
		} else {
            elToUpdate.innerHTML = originalSelectLabel;
		}
	}
}

function appendSelectedCategory(label, catElem) {
	var selectLabel = label;
	if (catElem.nodeType == Node.ELEMENT_NODE && catElem.down('input').checked == true) {
		if (selectLabel != '') { 
			selectLabel += ", ";
		}
		selectLabel += catElem.down('label').innerHTML;
	}
	return selectLabel;
}
function initSpecialMenuView() {
	for (var i=0; i<10; i++) {
		var elem = 'ul.specialMenuCol'+i;
		if ($$(elem).length != 0) {
			$$(elem).first().childElements().each(function(el) {processSpecialMenuItem(el);}); 
		}
	}
}
function processSpecialMenuItem(catElem) {
	var expandControlElement = catElem.down('span');
	var needToExpand = false;
	var subcatList = catElem.down('ul');
	if (subcatList !== undefined) {
		var subcatElems = subcatList.childNodes;
		for(var i=0; i < subcatElems.length; i++){
			var subcatElem = $(subcatElems[i]);
			if(subcatElem.nodeType == Node.ELEMENT_NODE && subcatElem.down('input').checked == true) {
				needToExpand = true;
				break;
			}
		}
	}
	if (expandControlElement === undefined) { return; }
	if ((needToExpand && expandControlElement.hasClassName("specializePlus"))
			|| (!needToExpand && !expandControlElement.hasClassName("specializePlus"))) {
		showSpecialSubMenu(expandControlElement);
	}
}
function showSpecialSubMenu(el) {
	var topic;
	var subMenuElem;
	if (el.id.length > 6) {
		topic = el.id.substring(6);
		subMenuElem = $("specialSub_" + topic);
	}
	if (el.hasClassName("specializePlus")) {
		el.removeClassName("specializePlus");
		el.addClassName("specializeMinus");
		if (subMenuElem) {
			subMenuElem.removeClassName("specialSubMenuHidden");
			subMenuElem.addClassName("specialSubMenu");
		}
	} else {
		el.removeClassName("specializeMinus");
		el.addClassName("specializePlus");
		if (subMenuElem) {
			subMenuElem.removeClassName("specialSubMenu");
			subMenuElem.addClassName("specialSubMenuHidden");
		}
	}
}

function showTaxonomyFilter(el) {
	var catnum;
	var subcatlistelem;
	if (el.id.length > 19) {
		catnum = el.id.substring(19);
		subcatlistelem = $$("#taxonomycat_" + catnum + " ul");
	}
	if (el.hasClassName("showTaxonomyFilterExpand")) {
		el.removeClassName("showTaxonomyFilterExpand");
		el.addClassName("showTaxonomyFilterContract");
		if (subcatlistelem) {
			subcatlistelem[0].removeClassName("taxonomyFilterHidden");
		}
	} else {
		el.removeClassName("showTaxonomyFilterContract");
		el.addClassName("showTaxonomyFilterExpand");
		if (subcatlistelem) {
			subcatlistelem[0].addClassName("taxonomyFilterHidden");
		}
	}
}

function showAbstractPopup(el, ev) {
	var contentElem = $(el.id + "_content");
	var content = contentElem.innerHTML;
	var t_el = $(el);
	var abstractPopup = $T(t_el).abstractPopup;
	if (! abstractPopup) {
		abstractPopup = new Popup(t_el, contentElem, popupOptions);
		$T(t_el).abstractPopup = abstractPopup;
	}
	abstractPopup.show(ev);
	abstractPopup.reposition(ev);

}

function showAbstractPopupSrc(el, ev) {
	var hrefElem = $(el.id + "_href");
	var content = hrefElem.href;
	var t_el = $(el);
	var abstractPopup = $T(t_el).abstractPopup;
	if (! abstractPopup) {
		abstractPopup = new Popup(t_el, content, popupOptions);
		$T(t_el).abstractPopup = abstractPopup;
	}
	
	abstractPopup.show(ev);
	abstractPopup.reposition(ev);

}
	
var linkToFocusOnClose = null;
var currentCloseLink = null;
var currentLastLink = null;

var popupOptions = {showOnClick:false, linkOnDblClick:false, showOnMouseOver:true,//hideHover:true, 
		xAxisOffset: 0, yAxisOffset: 0, noCloseButton : true, dontFocusTargetOnClose : true};

var Popup = Class.create({
	/** content may be either an element or id which will be displayed in the popup or an absolute url to load via ajax. */
	initialize: function(target, content, options) {
		this.options = {
			delay: 25,		// mouseover delay in seconds
			title: null		// popup window title. defaults to the content of the trigger element.
		};
		
		this.target = $(target);
		
		if(!options.dontFocusTargetOnClose)
			linkToFocusOnClose = $(target);
		
		this.ajax = false;
		if (Object.isString(content) && (content.startsWith('http') || content.startsWith('/'))) {
			this.ajax = true;
			this.url = content;
		} else {
			this.content = content = $(content);
		}
		
		if (options)
			this.options = Object.extend(this.options, options);
		
		// only show popup if hovering for a certain delay
		var inst = this;
				
	if (!options.hideHover){//only For CrossReferencePopup
			var outEvent = null;
			var closeFunction = function(event) {
				
				function closePopupFunction() {
					var event = outEvent;
					if (!event) var event = window.event;
					var reltg = event.relatedTarget;
					if (reltg && reltg.nodeName == 'DIV' 
						&& (reltg.getAttribute('class') == 'popContent' 
							|| reltg.getAttribute('class') == 'top' 
							|| reltg.getAttribute('class') == 'bottom' 
							|| reltg.getAttribute('class') == 'popup')) return;
					
					inst.clearTimeout();
					if (!options.hideHover) {//only For CrossReferencePopup
						inst.close();
					}
					isShowCrossReferencePopup = false;
				}
				outEvent = event;
				var appjsPopupTimer = setTimeout(closePopupFunction, 500);				
			}
			
			target.observe('mouseout', closeFunction);
			target.observe('blur', closeFunction);
		}
		
		Event.observe(document.onresize ? document : window, "resize", function() {
			if (window._active_popup)
				window._active_popup.reposition(null);
		});
	},
	
	clearTimeout: function() {
		
		// the following lines fail in ie6
		if(typeof document.body.style.minWidth == "undefined") { return false; }
		
		if ($T(this.target).handle)
			window.clearTimeout($T(this.target).handle);
		$T(this.target).handle = null;
		
	},

	/** Creates (if necessary) and displays the popup. */
	show: function(event) {
		
		this.clearTimeout();	// allows showing the popup manually rather than just on hover
		
		if (!this.popup) {
			// REFACTOR could probably build all the html at once and then update afterwards
			
			var popup = this.popup = new Element('div', {style:'left: -9999px; position: absolute; z-index: 99997;'});//window._active_popup.close();
			// Because of IE, class must be set with className property
			this.popup.className = 'popup';

			$$('body').first().insert(popup);	// won't display (or give you a height) if it's not in the document
			
			var title = this.options.title;
			if (!title)
				title = this.target.innerHTML;
			//by default, don't display the top arrow; switching between above and below the target is left up to subclasses.
			//popup.insert('<div class="top"><h2>' + title + '</h2><span class="balloonArrow2" style="display:none"></span></div>');
			
			if (!this.options.noCloseButton) {
				var closeLink = new Element('a', {'class': 'close', onclick:'return false;', href:'#'});
			
				closeLink.update('<span>close</span>');
				closeLink.observe('click', this.close.bindAsEventListener(this));
				popup.insert(closeLink);
			}	

			//popup.insert('<div class="popupWindow"><div class="popupContent"></div></div><div class="bot"><span class="balloonArrow"></span></div>');
			//var popupContent = popup.down('.popupContent');
			var popupContent = popup; 
	
			if (this.content) {
				popupContent.update(this.content.innerHTML);
			} else {
				popupContent.update('<span class="loadingIcon"><span>Loading...</span></span>');
				// TODO hide the popup if the response came back in error
				var success = function(transport) {

					if(transport.responseJSON)
						popupContent.update(transport.responseJSON.content);
					
					else
						popupContent.update(transport.responseText);
						
					this.reposition(event);
				}.bind(this);
				Tapestry.ajaxRequest(this.url, success);
			}
			if (!this.options.hideHover){//only For CrossReferencePopup
				var inst = this;
				var outEvent = null;
				var options = this.options; 
				var closeFunction = function(event) {
					
					function closePopupFunction() {
						var event = outEvent;
						if (!event) var event = window.event;
						var tg = (window.event) ? event.srcElement : event.target;
						if (tg.nodeName != 'DIV' 
							|| (tg.getAttribute('class') != 'popContent' 
								&& tg.getAttribute('class') != 'top' 
								&& tg.getAttribute('class') != 'bottom')) return;
						var reltg = event.relatedTarget;
						while (reltg && reltg != tg.parentNode && reltg.nodeName != 'BODY')
							reltg= reltg.parentNode
						if (reltg == tg.parentNode) return;

						
						inst.clearTimeout();
						if (!options.hideHover) {//only For CrossReferencePopup
							inst.close();
						}
						isShowCrossReferencePopup = false;
					}
					outEvent = event;
					var appjsPopupTimer = setTimeout(closePopupFunction, 500);				
				}
				popup.observe('mouseout', closeFunction);
				popup.observe('blur', closeFunction);
			}
		}
		
		// only one popup is allowed at a time
		if (window._active_popup)
			window._active_popup.close();
		window._active_popup = this;

		this.popup.setStyle({'left': '-9999px'});
					
		this.popup.show();
			
		this.reposition(event);
		
		if (this.options.hideHover) { // not for cross ref popups
			
			currentCloseLink = $(this.popup).down("a.close");

			if (currentCloseLink) {
				currentCloseLink.focus();
			}

			var links = $(this.popup).select("a");
			
			if (links.length >= 2) {
			  
				currentLastLink = links[links.length - 2];
				currentLastLink.observe("keydown", function(event) {
					if(event.keyCode == Event.KEY_TAB && !event.shiftKey) {
						event.stop();
						currentCloseLink.focus();	
					}
				});
				 
			}
			
			if (currentCloseLink) {
				currentCloseLink.observe("keydown", function(event) {
					if(event.keyCode == Event.KEY_TAB && event.shiftKey) {
						event.stop();
						currentLastLink.focus();	
					}
				});
			}
		}
			
	},
	
	/** Repositions the popup. Should be called after content is updated.
	 * By default, positions the popup so the lower-left is directly above where
	 * the user triggered.
	 * event is the mouse event that trigger the popup to display.
	 */
	reposition: function(event) {
		var height = this.popup.getHeight();
		var targetOffset = this.target.cumulativeOffset();
		
		// ensure that popups are on-screen as much as possible
		var halfHeight = height = 0 ? height : height / 2;
		var top = targetOffset.top - halfHeight;
		var viewportOffset = this.popup.viewportOffset();
		var portionMissingOffTop = 0 - this.popup.viewportOffset().top;
		if (portionMissingOffTop > 0) {
			top = top + portionMissingOffTop;
		}
		if (event) {
			if (event.clientY < getHeight()/2) {
				this.popup.className = 'popup2';
				top = targetOffset.top + 10;
			} else {
				top = targetOffset.top - this.popup.getHeight();
				this.popup.className = 'popup';
			}
		}
		this.popup.setStyle({'top': '' + top + 'px', 'left': '' + (targetOffset.left) + 'px'});
	},
	
	/** Hides the popup and returns focus to the link that opened it. */
	close: function() {
		if (window._active_popup == this)
			window._active_popup = null;
		
		if (this.popup)
			this.popup.hide();
		
		if (this.options.hideHover && linkToFocusOnClose) { 
			// not for cross ref popups
			$(linkToFocusOnClose).focus();
		}
	}
});

function updateSpecializeCheckboxOnServer(topic, checked) {
	var url = $('updateSpecializationLink').href;
	new Ajax.Request(url, {
		  method: 'get',
		  parameters: { "topicName" : topic ,
		  "topicStatus" : checked },
		  onException: Tapestry.ajaxFailureHandler,
		  onFailure: Tapestry.ajaxFailureHandler,
		  onSuccess : function (transport) {
		    // nothing to do
		  }
	});
}
function updateSearchBySpecializationOnServer(checked) {
	var url = $('updateSearchBySpecializationsLink').href;
	new Ajax.Request(url, {
		  method: 'get',
		  parameters: { "searchStatus" : checked },
		  onException: Tapestry.ajaxFailureHandler,
		  onFailure: Tapestry.ajaxFailureHandler,
		  onSuccess : function (transport) {
		    // nothing to do
		  }
	});
}
function getHeight() {
	var y = 0;
	if (self.innerHeight) {
		y = self.innerHeight;
	} else if (document.documentElement
			&& document.documentElement.clientHeight) {
		y = document.documentElement.clientHeight;
	} else if (document.body) {
		y = document.body.clientHeight;
	}
	return y;
}

function doBookToggle(type) {
	var url = $('bookToggleLink').href;
	window.location = url;
}

$j(document).ready(function() {

	
	
	/* Do not toggle modules
	$j('.module .moduleToggle').click(function() {
		var elem = $j(this);
		elem.siblings().slideToggle('fast');
		elem.parent().toggleClass("expanded collapsed");
		
	});
	*/
	// Toggle In This Entry List
	$j('.inThisEntryModule .toggle').click(function() {
		var elem = $j(this);
		elem.siblings().slideToggle('fast');
		elem.toggleClass("minustoggle plustoggle");
		elem.parent().toggleClass("expanded collapsed");
		
	});

	
	/* Toggle TOC Navigation for Timelines */
	$j('#toc .rootexpandable').addClass("expanded");
	$j('#toc').addClass("expanded");
	
	$j('#toc .rootexpandable h3 a').click(function() {
		var elem = $j(this);
		elem.parent().siblings().slideToggle('fast');
		elem.parent().parent().toggleClass("expanded collapsed");
		return false;
	});
	
	$j('.rootexpandable .module h3').click(function() {
		var elem = $j(this);
		elem.siblings().slideToggle('fast');
		elem.parent().toggleClass("expanded collapsed");
		
	});

	/* --------------------------------- 
	 TABS
	 --------------------------------- */
	
	var tabs = $j('ul.tabs');
	
	tabs.each(function(i) {
		//Get all tabs
		var tab = $j(this).children('li').children('a');
		tab.click(function(e) {
			
			//Get Location of tab's content
			var contentLocation = $j(this).attr("href")
			
			//Let go if not a hashed one
			if(contentLocation.charAt(0)=="#") {
			
				e.preventDefault();
			
				//Make Tab Active
				tab.parent().removeClass('active');
				$j(this).parent().addClass('active');
				
				//Show Tab Content
				$j(contentLocation).parent().children('div.tabContent').css({"display":"none"});
				$j(contentLocation).css({"display":"block"});
				
			} 
		});
	});
	
});
