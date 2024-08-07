/*!
 * clipboard.js v1.5.12
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t,e,n;return function t(e,n,o){function i(a,c){if(!n[a]){if(!e[a]){var s="function"==typeof require&&require;if(!c&&s)return s(a,!0);if(r)return r(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){var n=e[a][1][t];return i(n?n:t)},u,u.exports,t,e,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(t,e,n){var o=t("matches-selector");e.exports=function(t,e,n){for(var i=n?t:t.parentNode;i&&i!==document;){if(o(i,e))return i;i=i.parentNode}}},{"matches-selector":5}],2:[function(t,e,n){function o(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e,!0),n.delegateTarget&&o.call(t,n)}}var r=t("closest");e.exports=o},{closest:1}],3:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},{}],4:[function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return i(t,e,n);if(c.nodeList(t))return r(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function r(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return s(document.body,t,e,n)}var c=t("./is"),s=t("delegate");e.exports=o},{"./is":3,delegate:2}],5:[function(t,e,n){function o(t,e){if(r)return r.call(t,e);for(var n=t.parentNode.querySelectorAll(e),o=0;o<n.length;++o)if(n[o]==t)return!0;return!1}var i=Element.prototype,r=i.matchesSelector||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector;e.exports=o},{}],6:[function(t,e,n){function o(t){var e;if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName)t.focus(),t.setSelectionRange(0,t.value.length),e=t.value;else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),o=document.createRange();o.selectNodeContents(t),n.removeAllRanges(),n.addRange(o),e=n.toString()}return e}e.exports=o},{}],7:[function(t,e,n){function o(){}o.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){i.off(t,o),e.apply(n,arguments)}var i=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;for(o;i>o;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,a=o.length;a>r;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}},e.exports=o},{}],8:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","select"],r);else if("undefined"!=typeof o)r(n,e("select"));else{var a={exports:{}};r(a,i.select),i.clipboardAction=a.exports}}(this,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return t.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action=e.action,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""},t.prototype.initSelection=function t(){this.text?this.selectFake():this.target&&this.selectTarget()},t.prototype.selectFake=function t(){var e=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px",this.fakeElem.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()},t.prototype.removeFake=function t(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)},t.prototype.selectTarget=function t(){this.selectedText=(0,i.default)(this.target),this.copyText()},t.prototype.copyText=function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(n){e=!1}this.handleResult(e)},t.prototype.handleResult=function t(e){e?this.emitter.emit("success",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)}):this.emitter.emit("error",{action:this.action,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})},t.prototype.clearSelection=function t(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()},t.prototype.destroy=function t(){this.removeFake()},a(t,[{key:"action",set:function t(){var e=arguments.length<=0||void 0===arguments[0]?"copy":arguments[0];if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function t(){return this._action}},{key:"target",set:function t(e){if(void 0!==e){if(!e||"object"!==("undefined"==typeof e?"undefined":r(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function t(){return this._target}}]),t}();t.exports=c})},{select:6}],9:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof o)r(n,e("./clipboard-action"),e("tiny-emitter"),e("good-listener"));else{var a={exports:{}};r(a,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=a.exports}}(this,function(t,e,n,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=i(e),u=i(n),f=i(o),d=function(t){function e(n,o){r(this,e);var i=a(this,t.call(this));return i.resolveOptions(o),i.listenClick(n),i}return c(e,t),e.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText},e.prototype.listenClick=function t(e){var n=this;this.listener=(0,f.default)(e,"click",function(t){return n.onClick(t)})},e.prototype.onClick=function t(e){var n=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})},e.prototype.defaultAction=function t(e){return s("action",e)},e.prototype.defaultTarget=function t(e){var n=s("target",e);return n?document.querySelector(n):void 0},e.prototype.defaultText=function t(e){return s("text",e)},e.prototype.destroy=function t(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)},e}(u.default);t.exports=d})},{"./clipboard-action":8,"good-listener":4,"tiny-emitter":7}]},{},[9])(9)});;/**/
(function(t){Drupal.behaviors.clipboardjs={attach:function(e,o){Drupal.clipboard=new Clipboard('button.clipboardjs-button');Drupal.clipboard.on('success',function(e){var i=t(e.trigger).data('clipboard-alert-style'),r=t(e.trigger).data('clipboard-alert-text'),a=e.trigger;if(i==='alert'){alert(r)}
else if(i==='tooltip'){var o=t(a);o.prop('title',r);o.tooltip({placement:'bottom',}).click();o.tooltip('open');setTimeout(function(){o.prop('title','')},3000)}});Drupal.clipboard.on('error',function(e){var i=t(e.trigger).data('clipboard-alert-style'),r=e.trigger,o=t(r);o.prop('title',function(t){var e='',o=(t==='cut'?'X':'C');if(/iPhone|iPad/i.test(navigator.userAgent)){e='This device does not support HTML5 Clipboard Copying. Please copy manually.'}
else if(/android/i.test(navigator.userAgent)){e='Please copy manually.'}
else{if(/Mac/i.test(navigator.userAgent)){e='Press ⌘-'+o+' to '+t}
else{e='Press Ctrl-'+o+' to '+t}};return e}(e.action));o.tooltip({placement:'bottom',}).click();o.tooltip('open');setTimeout(function(){o.prop('title','')},3000)})}}}(jQuery));(function(t){Drupal.behaviors.articleAuthorPopup={attach:function(o,e){var i=!!jQuery.fn.qtip;if(!i){if(window.console){console.error("HW's qTip behavior is called without the qTip library loaded. Please investigate.")};return};var a=(e.instances!=undefined)?t.parseJSON(e.instances):{};t("body",o).delegate(".has-author-tooltip span.highwire-citation-author:not(.hasTooltip):not(.noTooltip)","mouseenter",function(o){var e=t(this),u=e.data("delta"),s=e.parents(".highwire-article-citation"),p=s.attr("id"),n=t("#hw-article-author-popups-"+p+" .author-tooltip-"+u,s),r=e.data("hw-author-tooltip-instance")?e.data("hw-author-tooltip-instance"):"highwire_author_tooltip",i=(a[r]!=undefined)?a[r]:"";if(!i||n.length<=0){e.addClass("noTooltip");return};var h={show:{ready:!0,},position:{viewport:t(window),},events:{show:function(t,o){var e=!0;if(Drupal.highwireResponsive){var a=Drupal.highwireResponsive.getCurrentLayout();e=a!=="mobile"?!0:!1};return e},focus:function(t,o){o.elements.target.addClass("author-popup-hover")},blur:function(t,o){o.elements.target.removeClass("author-popup-hover")},},content:{text:n,}};t.extend(!0,i,h);e.qtip(i,o).addClass("has-tooltip hasTooltip");o.preventDefault()})}}})(jQuery);(function(i){Drupal.behaviors.minipanel_dialog_link={attach:function(n,a){var t=function(){var n=i(window).width();if(n>=Drupal.settings.highwire.modal_window_width){return Drupal.settings.highwire.modal_window_width}
else{return'90%'}};i('.minipanel-dialog-link-trigger',n,a).once('minipanel-dialog-link-trigger',function(){if(i(this).attr('title')!='<blank>'){var a=i(this).attr('title')}
else{var a=''};var n=i(this).parent().parent().find('.minipanel-dialog-link-mini');n.dialog({'modal':!0,'draggable':!1,'title':a,'resizable':!1,'autoOpen':!1});i(this).click(function(){n.dialog({'width':t()});n.dialog('open');return!1})})}}}(jQuery));(function(l){if(!Drupal.CTools){Drupal.CTools={}};Drupal.CTools.Collapsible={state:{},stateLoaded:!1,stateChanged:!1,cookieString:'ctools-collapsible-state=',getState:function(l){if(!this.stateLoaded){this.loadCookie()};return this.state[l]},setState:function(o,s){if(!this.stateLoaded){this.loadCookie()};this.state[o]=s;if(!this.stateChanged){this.stateChanged=!0;l(window).unload(this.unload)}},loadCookie:function(){if(document.cookie.length>0){offset=document.cookie.indexOf(this.cookieString);if(offset!=-1){offset+=this.cookieString.length;var l=document.cookie.indexOf(';',offset);if(l==-1){l=document.cookie.length};var s=unescape(document.cookie.substring(offset,l));if(s!=''){var e=s.split(',');for(var o=0;o<e.length;o++){var t=e[o].split(':');this.state[t[0]]=t[1]}}}};this.stateLoaded=!0},storeCookie:function(){var l='';for(i in this.state){if(l!=''){l+=','};l+=i+':'+this.state[i]};document.cookie=this.cookieString+escape(l)+';path=/'},unload:function(){Drupal.CTools.Collapsible.storeCookie()}};Drupal.CTools.CollapsibleCallbacks=[];Drupal.CTools.CollapsibleCallbacksAfterToggle=[];Drupal.CTools.bindCollapsible=function(){var o=l(this);if(o.hasClass('ctools-no-container')&&o.attr('id')){var t=o,s=l('#'+o.attr('id')+'-content')}
else{var t=o.children('.ctools-collapsible-handle'),s=o.children('div.ctools-collapsible-content')};if(s.length){var e=l('<span class="ctools-toggle"></span>');t.before(e);if(o.hasClass('ctools-collapsible-remember')&&o.attr('id')){var c=Drupal.CTools.Collapsible.getState(o.attr('id'));if(c==1){o.removeClass('ctools-collapsed')}
else if(c==-1){o.addClass('ctools-collapsed')}};if(o.hasClass('ctools-collapsed')){e.toggleClass('ctools-toggle-collapsed');s.hide()};var n=function(){if(Drupal.CTools.CollapsibleCallbacksAfterToggle){for(i in Drupal.CTools.CollapsibleCallbacksAfterToggle){Drupal.CTools.CollapsibleCallbacksAfterToggle[i](o,t,s,e)}}},a=function(){if(Drupal.CTools.CollapsibleCallbacks){for(i in Drupal.CTools.CollapsibleCallbacks){Drupal.CTools.CollapsibleCallbacks[i](o,t,s,e)}};if(o.is('table')){s.toggle(0,n)}
else{s.slideToggle(100,n)};o.toggleClass('ctools-collapsed');e.toggleClass('ctools-toggle-collapsed');if(o.hasClass('ctools-collapsible-remember')&&o.attr('id')){var l=e.hasClass('ctools-toggle-collapsed')?-1:1;Drupal.CTools.Collapsible.setState(o.attr('id'),l)};return!1};e.click(a);t.click(a)}};Drupal.behaviors.CToolsCollapsible={attach:function(o){l('.ctools-collapsible-container',o).once('ctools-collapsible',Drupal.CTools.bindCollapsible)}}})(jQuery);(function(o){Drupal.behaviors.jnl_sci_social_icons={attach:function(t,c){$URL=location.href;o.getJSON('https://graph.facebook.com/?id='+$URL,function(t){o('.facebook__count').text(_sci_social_count_format(t.share.share_count))})}}})(jQuery);function _sci_social_count_format(o){o=isNaN(o)?0:parseInt(o);return(o>=1000?(o>=1000000?Math.round(o/10000)/100+'m':Math.round(o/10)/100+'k'):o)};(function(e){Drupal.googleanalytics={};e(document).ready(function(){e(document.body).bind("mousedown keyup touchstart",function(t){e(t.target).closest("a,area").each(function(){if(Drupal.googleanalytics.isInternal(this.href)){if(e(this).is(".colorbox")&&(Drupal.settings.googleanalytics.trackColorbox)){}
else if(Drupal.settings.googleanalytics.trackDownload&&Drupal.googleanalytics.isDownload(this.href)){ga("send",{"hitType":"event","eventCategory":"Downloads","eventAction":Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(),"eventLabel":Drupal.googleanalytics.getPageUrl(this.href),"transport":"beacon"})}
else if(Drupal.googleanalytics.isInternalSpecial(this.href)){ga("send",{"hitType":"pageview","page":Drupal.googleanalytics.getPageUrl(this.href),"transport":"beacon"})}}
else{if(Drupal.settings.googleanalytics.trackMailto&&e(this).is("a[href^='mailto:'],area[href^='mailto:']")){ga("send",{"hitType":"event","eventCategory":"Mails","eventAction":"Click","eventLabel":this.href.substring(7),"transport":"beacon"})}
else if(Drupal.settings.googleanalytics.trackOutbound&&this.href.match(/^\w+:\/\//i)){if(Drupal.settings.googleanalytics.trackDomainMode!==2||(Drupal.settings.googleanalytics.trackDomainMode===2&&!Drupal.googleanalytics.isCrossDomain(this.hostname,Drupal.settings.googleanalytics.trackCrossDomains))){ga("send",{"hitType":"event","eventCategory":"Outbound links","eventAction":"Click","eventLabel":this.href,"transport":"beacon"})}}}})});if(Drupal.settings.googleanalytics.trackUrlFragments){window.onhashchange=function(){ga("send",{"hitType":"pageview","page":location.pathname+location.search+location.hash})}};if(Drupal.settings.googleanalytics.trackColorbox){e(document).bind("cbox_complete",function(){var t=e.colorbox.element().attr("href");if(t){ga("send",{"hitType":"pageview","page":Drupal.googleanalytics.getPageUrl(t)})}})}});Drupal.googleanalytics.isCrossDomain=function(t,a){if(!a){return!1}
else{return e.inArray(t,a)>-1?!0:!1}};Drupal.googleanalytics.isDownload=function(e){var t=new RegExp("\\.("+Drupal.settings.googleanalytics.trackDownloadExtensions+")([\?#].*)?$","i");return t.test(e)};Drupal.googleanalytics.isInternal=function(e){var t=new RegExp("^(https?):\/\/"+window.location.host,"i");return t.test(e)};Drupal.googleanalytics.isInternalSpecial=function(e){var t=new RegExp("(\/go\/.*)$","i");return t.test(e)};Drupal.googleanalytics.getPageUrl=function(e){var t=new RegExp("^(https?):\/\/"+window.location.host,"i");return e.replace(t,"")};Drupal.googleanalytics.getDownloadExtension=function(e){var a=new RegExp("\\.("+Drupal.settings.googleanalytics.trackDownloadExtensions+")([\?#].*)?$","i"),t=a.exec(e);return(t===null)?"":t[1]}})(jQuery);