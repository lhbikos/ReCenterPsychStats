(function($, w, d) {

    $oupapp = {

        support: {
            placeholder: false
        },

        init: function() {

            this.setupTocs();
            this.placeholderFix();
            this.setupCollapsible();
            this.setupHitHighlightingToggle();
            this.addLoginFormExpandCollapse();
            this.addLibraryLoginEnable();
            this.showSupersededAlert();
            this.setupFilterVisiblity();
            document.body.addEventListener("click", this.closeFtr, true);
        },
        
        setupTocs: function() {

            // <a class="toggle plustoggle"><span>toggle</span></a>
            var plustoggle = $('<a/>').addClass('toggle plustoggle').text('toggle');
            var minustoggle = $('<a/>').addClass('toggle minustoggle').text('toggle');
            $('.toc .expandable').not('.expanded').prepend(plustoggle);
            $('.toc .expanded').prepend(minustoggle);

            $('.toc .currentParent, .toc .current').children('.toggle').removeClass('plustoggle').addClass('minustoggle');
            $('.toc .expandable').not('.current, .currentParent, .expanded').addClass('shut');

            $('.toc').on('click', '.toggle', function(event) {
                var toggle = $(this),
                li = toggle.parent('li');

                if(li.hasClass('shut')) {
                    toggle.removeClass('plustoggle');
                    toggle.addClass('minustoggle');
                } else {
                    toggle.addClass('plustoggle');
                    toggle.removeClass('minustoggle');
                }
                li.children('ul').slideToggle(function() {
                    $(this).parent('li').toggleClass('shut');
                });

                return false;
            });

            $('.toc').on('click', '.rootexpandable > h3', function() {
                $(this).next('ul').toggleClass('hidden');
                return false;
            });

        },

        placeholderFix: function() {

            this.support.placeholder = 'placeholder' in document.createElement('input');

            // Placeholder fix
            // Use Modernizr in the future
            if(!this.support.placeholder) {
                $('[placeholder]').focus(function() {
                    var input = $(this);
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                        input.removeClass('placeholder');
                    }
                }).blur(function() {
                    var input = $(this);
                    if (input.val() == '' || input.val() == input.attr('placeholder')) {
                        input.addClass('placeholder');
                        input.val(input.attr('placeholder'));
                    }
                })
                .blur();
                $('[placeholder]').parents('form').submit(function() {
                    $(this).find('[placeholder]').each(function() {
                        var input = $(this);
                        if (input.val() == input.attr('placeholder')) {
                            input.val('');
                        }
                    });
                });
            }

        },
        
        setupFilterVisiblity: function() {
            $('.facetModule').each(function() {
                var filter = $(this),
                    toggle = filter.find('.facetToggle'),
                    cookieName = 'facetModule_' + filter.attr('id'),
                    cookieValue = $j.cookies.get(cookieName),
                    collapsed = cookieValue == 'collapsed' ? true : false;
                if (collapsed) {
                	processToggle(toggle);
                    toggle.parent().toggleClass("expanded collapsed");
                    toggle.closest('.facet').removeClass("open");
                    toggle.closest('.facet').addClass("shut");
                    if (toggle.hasClass("facetLabel"))
                    {
                    	toggle.attr({"aria-expanded": "false", "aria-pressed": "false"});
                    }
                    else
                    {
                    	toggle.find('.facetLabel').attr({"aria-expanded": "false", "aria-pressed": "false"});
                    }
                    toggle.find('.facetValues').attr({"aria-hidden": "true"});
                }
                
                toggle.click(function() {
                	processToggle(toggle);
                    var collapsed = filter.closest(".facet").hasClass('shut');
                    toggle.closest("facetValues").toggleClass("expanded collapsed");
                    
                    // the conditional below may look backwards but remember we've flipped the collapsed state within this method
                    $j.cookies.set(cookieName, collapsed ? 'open' : 'collapsed');
                });

            });
        },

        createCookie: function(name, value, days) {
            var expires = '';
            if(days) {
                var date = new Date();
                date.setTime(date.getTime() + (days*24*60*60*1000));
                expires = '; expires=' + date.toGMTString();
            }
            document.cookie = name + '=' + value + expires + '; path=/';
        },

        readCookie: function(name) {
            var nameEQ = name + '=';
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
            }
            return null;
        },

        eraseCookie: function(name) {
            $remedy.createCookie(name,'',-1);
        },

        showLightboxWithCustomTopClass: function(url, width, height, title, topClassName, caption) {
            // don't specify an id or we get errors on opening new one's too eagerly
            var win = new Window({
                minimizable : false,
                maximizable : false,
                draggable : true,
                destroyOnClose: true,
                width : width,
                height : height,
                url : url,
                recenterAuto: false,
                title: title,
                zIndex: 10000,
                setWindowHeight: true
            });

            $('#' + win.getId()).addClass(topClassName);
            // include image and caption
            win.setHTMLContent("<img style=\"-webkit-user-select: none\" src=\"" + url + "\">" +
                    "<div class='lightboxCaptionWrapper'><span class='lightboxCaption'>" + caption + "</span></div>");
            currentLightbox = win;
            win.showCenter(true, 80);
        },
        
        //Ticket: OUP-1011; This is designed to be the pop-up, based on the fullImage pop-up, for FTR (find this resource)
        closeFtr: function() {
            var popUps = document.getElementsByClassName("ftr-pop-up");
            for (i = 0; i < popUps.length; i++)
            {
            	popUps[i].style.display = "none";
            }
        },
        
        //Ticket: OUP-1011; This is designed to be the pop-up, based on the fullImage pop-up, for FTR (find this resource)
        showFtr: function(popUpId) {
            this.closeFtr();
            document.getElementById(popUpId).style.visibility = "hidden";
            document.getElementById(popUpId).style.display = "block";
            document.getElementById(popUpId).style.top = -1 * (document.getElementById(popUpId).offsetHeight + 4) + "px";
            document.getElementById(popUpId).style.left = -1 * (document.getElementById(popUpId).offsetWidth / 2 - 7) + "px";
			document.getElementById(popUpId).style.visibility = "visible";
        },

        setupCollapsible: function () {
            $('.collapsibleShut').each( function() {
                $(this).find('h1,h2,h3,h4,h5,h6').first().prepend($('<a/>').addClass('collapsibleToggle open').text('toggle'));
            });
            $('.collapsibleOpen').each(function() {
                $(this).find('h1,h2,h3,h4,h5,h6').first().prepend($('<a/>').addClass('collapsibleToggle shut').text('toggle'));
            });
            
            $('.mainBase').not('.printPreview .mainBase').on('click', '.collapsibleToggle' , function(event) {
                
                if ($(this).hasClass('open')) {
                    $(this).parents('.collapsibleShut').children('p,div,ul,ol,table').fadeIn('fast', function() {
                        $(this).parents('.collapsibleShut').removeClass('collapsibleShut').addClass('collapsibleOpen');
                    });
                    $(this).removeClass('open');
                    $(this).addClass('shut');
                } else {
                    $(this).parents('.collapsibleOpen').children('p,div,ul,ol,table').fadeOut('fast', function() {
                        $(this).parents('.collapsibleOpen').removeClass('collapsibleOpen').addClass('collapsibleShut');
                    });
                    $(this).addClass('open');
                    $(this).removeClass('shut');
                }
                        
                return false;
            });
        },

        /*
         * set up hit highlighting toggle. Code taken directly from LPF skin.js.
         */
        setupHitHighlightingToggle: function () {
            // initialise state of hit highlighting toggle (according to current cookie)
            if ($j('*.hi').length > 0 && $j('#readPanel').length > 0){
                $j('#hhToggleForm').removeClass('hidden');
            }
            var isSearch = $j('.searchPage').length > 0;
            var hh_cookie = null;
            if ($j.cookies !== undefined) {
                hh_cookie = $j.cookies.get('oupbase_hh');
            }
            if (hh_cookie !== null) {
                if (hh_cookie == 0 && !isSearch) {
                    $j('#pageBody').addClass('hhOff');
                    $j('body').addClass('hhOff');
                    $j('#hitHighlightToggle').removeAttr('checked');
                } else {
                    $j('#pageBody').removeClass('hhOff');
                    $j('body').removeClass('hhOff');
                    $j('#hitHighlightToggle').attr('checked','checked');
                }
            } else {
                // no cookie - default to highlighting enabled
                $j('#readPanel').removeClass('hhOff');
                $j('body').removeClass('hhOff');
                $j('#hitHighlightToggle').attr('checked','checked');
            }
            
            // hit highlighting toggle
            $j('#hitHighlightToggle').on('click', function(event) {
                $j('#pageBody').toggleClass('hhOff');
                $j('body').toggleClass('hhOff');
                // maintain state (in browser session cookie)
                if ($j('#pageBody').hasClass('hhOff')) {
                    $j.cookies.set('oupbase_hh', 0); // off
                } else {
                    $j.cookies.set('oupbase_hh', 1); // on (default)
                }
            });

        },
        
        /*
         * Adds the expand/collapse toggle to the 'sign in' link when in multi auth mode.
         */
        addLoginFormExpandCollapse: function () {
            $j('#signInExpandControls').bind('click', function(e) {
                $j(this).toggleClass("expanded-panel");
                $j('#loginPanel').toggleClass("expanded-login");
                e.stopPropagation();
                return false;
            });
        },

        /*
         * Adds logic to disable the library login button unless there is text in the box.
         */
        addLibraryLoginEnable: function() {
            $j('#libcardSubmit').click(function(e) {
                if($('#lcnum').val() == '') {
                   e.stopPropagation();
                   return false; 
                }
            });
        },
        

        
        /*
         * Sets up the version/edition alert modal if on the page.
         */
        showSupersededAlert: function() {
            var versionAlert = $('.version-alert'),
                editionAlert = $('.edition-alert'),
                body = $('body'),
                win = $(window),
                container = $('#columnWrapper'),
                overlay = $('<div class="modal-overlay"></div>'),
                close = $('<span class="close"></span>'),
                versionCookie = this.readCookie('acknowledged-version-alerts'),
                editionCookie = this.readCookie('acknowledged-edition-alerts'),
                versionCookieData = versionCookie != null ? JSON.parse(versionCookie) : new Array(),
                editionCookieData = editionCookie != null ? JSON.parse(editionCookie) : new Array(),
                app = this;

            if (editionAlert.size() > 0 && editionCookieData.indexOf(editionAlert.data('uri')) == -1) {
                close.click(function() {
                    overlay.fadeOut();
                    editionAlert.fadeOut();
                    editionCookieData.push(editionAlert.data('uri'));
                    app.createCookie('acknowledged-edition-alerts', JSON.stringify(editionCookieData));
                });
                editionAlert.find('a').click(function() {
                    editionCookieData.push(editionAlert.data('uri'));
                    app.createCookie('acknowledged-edition-alerts', JSON.stringify(editionCookieData));
                });
                editionAlert.prepend(close);
                overlay.height(body.height() + 'px');
                body.prepend(overlay);
                editionAlert.css('left', Math.abs(container.width() - editionAlert.outerWidth()) / 2 + 'px');
                editionAlert.css('top', Math.abs(win.height() - editionAlert.outerHeight()) / 2 - 100 + 'px');
                overlay.fadeIn();
                editionAlert.fadeIn();
            }

            else if (versionAlert.size() > 0 && versionCookieData.indexOf(versionAlert.data('uri')) == -1) {
                close.click(function() {
                    overlay.fadeOut();
                    versionAlert.fadeOut();
                    versionCookieData.push(versionAlert.data('uri'));
                    app.createCookie('acknowledged-version-alerts', JSON.stringify(versionCookieData));
                });
                versionAlert.find('a').click(function() {
                    versionCookieData.push(versionAlert.data('uri'));
                    app.createCookie('acknowledged-version-alerts', JSON.stringify(versionCookieData));
                });
                versionAlert.prepend(close);
                overlay.height(body.height() + 'px');
                body.prepend(overlay);
                versionAlert.css('left', (container.width() - versionAlert.outerWidth()) / 2 + 'px');
                versionAlert.css('top', (win.height() - versionAlert.outerHeight()) / 2 - 100 + 'px');
                overlay.fadeIn();
                versionAlert.fadeIn();
            }
        }
    };

    // scoping global
    window.$oupapp = $oupapp;

    // on dom ready
    $(function() {
        $oupapp.init();

        $j('.findthisresourcehead').click(function() {
            $j(this).toggleClass("expanded");
            $j('.' + $(this).parent().attr('id')).toggle();
        });

    });

})
(jQuery, window, document);

function resetExpandYourSearchForm() {
	 var expandYourSearchForm = $j('#expandYourSearchForm');
	    if (expandYourSearchForm !== null)
	    {
	    	expandYourSearchForm.className = expandYourSearchForm.removeClass("js-form-submitted");
	    }
		
}

function addAutoSubmitToSelect(parentForm, accessibleSelect)
{
    accessibleSelect.onclick = function() {this.readyToSubmit = true;};
    accessibleSelect.onkeydown = function(e) { if (e.keyCode == 13) {this.readyToSubmit = true; parentForm.submit();} else { if (e.keyCode == 38 || e.keyCode == 40) { this.readyToSubmit = false; } } };
    accessibleSelect.onchange = function() {if (accessibleSelect.readyToSubmit == true || typeof accessibleSelect.readyToSubmit === "undefined") {parentForm.submit();}};
}

function processToggle(toggle) {
	if (toggle.parent()[0].nodeName == "LEGEND")
	{
		toggle.parent().siblings().slideToggle('fast');
		toggle.closest("fieldset").siblings().slideToggle('fast');
		toggle.closest(".field-sets").siblings().slideToggle('fast');
		//publication date filter
		if (toggle.find("fieldset").length == 0 && toggle.closest(".facet").find("fieldset").length > 1)
		{
			toggle.closest("fieldset").parent().siblings().slideToggle('fast');
			toggle.closest(".date-query-rows").siblings().slideToggle('fast');
		}
	}
	else
	{
		toggle.siblings().slideToggle('fast');
	}
}

document.observe("dom:loaded", function() {
    if ($j('#footerAccounts #institutioninfo img').length == 0) {
        $j('#footerAccounts #institutioninfo span.institutionName').show();    
    }
    $j('#footerAccounts #institutioninfo img').error(function() {
        $j('#footerAccounts #institutioninfo img').remove();
        $j('#footerAccounts #institutioninfo span.institutionName').show();
    });
	
	var pageSizeForm = document.getElementById("pageSizeForm");
	var sizeSelect = document.getElementById("pageSize");
	var pageSizeFormZero = document.getElementById("pageSizeForm_0");
	var sizeSelectZero = document.getElementById("pageSize_0");
	if (pageSizeForm !== null && sizeSelect !== null)
	{
	    addAutoSubmitToSelect(pageSizeForm, sizeSelect);
	}
	if (pageSizeFormZero !== null && sizeSelectZero !== null)
	{
	    addAutoSubmitToSelect(pageSizeFormZero, sizeSelectZero);
	}
	
	var sortControlForm = document.getElementById("sortControlForm");
	var sortSelect = document.getElementById("sortBy");
	var sortControlFormZero = document.getElementById("sortControlForm_0");
	var sortSelectZero = document.getElementById("sortBy_0");
	if (sortControlForm !== null && sortSelect !== null)
	{
	    addAutoSubmitToSelect(sortControlForm, sortSelect);
	}
	if (sortControlFormZero !== null && sortSelectZero !== null)
	{
	    addAutoSubmitToSelect(sortControlFormZero, sortSelectZero);
	}
	
});
