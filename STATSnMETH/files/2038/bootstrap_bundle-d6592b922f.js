var bootstrap_app=function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=41)}([function(t,n,e){var r=e(22),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,n){var e=Array.isArray;t.exports=e},function(t,n,e){function r(t,n){var e=i(t,n);return o(e)?e:void 0}var o=e(51),i=e(57);t.exports=r},function(t,n,e){function r(t){return null==t?void 0===t?c:u:f&&f in Object(t)?i(t):a(t)}var o=e(6),i=e(53),a=e(54),u="[object Null]",c="[object Undefined]",f=o?o.toStringTag:void 0;t.exports=r},function(t,n){function e(t){return null!=t&&"object"==typeof t}t.exports=e},function(t,n,e){var r=e(2),o=r(Object,"create");t.exports=o},function(t,n,e){var r=e(0),o=r.Symbol;t.exports=o},function(t,n,e){function r(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}var o=e(62),i=e(63),a=e(64),u=e(65),c=e(66);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=c,t.exports=r},function(t,n,e){function r(t,n){for(var e=t.length;e--;)if(o(t[e][0],n))return e;return-1}var o=e(24);t.exports=r},function(t,n,e){function r(t,n){var e=t.__data__;return o(n)?e["string"==typeof n?"string":"hash"]:e.map}var o=e(68);t.exports=r},function(t,n,e){function r(t){if("string"==typeof t||o(t))return t;var n=t+"";return"0"==n&&1/t==-i?"-0":n}var o=e(18),i=1/0;t.exports=r},function(t,n,e){function r(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}var o=e(48),i=e(67),a=e(69),u=e(70),c=e(71);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=c,t.exports=r},function(t,n){function e(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}t.exports=e},function(t,n,e){var r=e(2),o=e(0),i=r(o,"Map");t.exports=i},function(t,n){function e(t){var n=-1,e=Array(t.size);return t.forEach(function(t){e[++n]=t}),e}t.exports=e},function(t,n,e){function r(t){return a(t)?o(t):i(t)}var o=e(92),i=e(99),a=e(32);t.exports=r},function(t,n){function e(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}var r=9007199254740991;t.exports=e},function(t,n,e){function r(t,n){if(o(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!i(t))||(u.test(t)||!a.test(t)||null!=n&&t in Object(n))}var o=e(1),i=e(18),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/;t.exports=r},function(t,n,e){function r(t){return"symbol"==typeof t||i(t)&&o(t)==a}var o=e(3),i=e(4),a="[object Symbol]";t.exports=r},function(t,n){t.exports=angular},function(t,n,e){function r(t){var n=-1,e=null==t?0:t.length;for(this.__data__=new o;++n<e;)this.add(t[n])}var o=e(11),i=e(72),a=e(73);r.prototype.add=r.prototype.push=i,r.prototype.has=a,t.exports=r},function(t,n,e){function r(t){if(!i(t))return!1;var n=o(t);return n==u||n==c||n==a||n==f}var o=e(3),i=e(12),a="[object AsyncFunction]",u="[object Function]",c="[object GeneratorFunction]",f="[object Proxy]";t.exports=r},function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(n,e(52))},function(t,n){function e(t){if(null!=t){try{return o.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var r=Function.prototype,o=r.toString;t.exports=e},function(t,n){function e(t,n){return t===n||t!==t&&n!==n}t.exports=e},function(t,n){function e(t,n){return t.has(n)}t.exports=e},function(t,n,e){var r=e(2),o=e(0),i=r(o,"Set");t.exports=i},function(t,n,e){var r=e(94),o=e(4),i=Object.prototype,a=i.hasOwnProperty,u=i.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(t){return o(t)&&a.call(t,"callee")&&!u.call(t,"callee")};t.exports=c},function(t,n,e){(function(t){var r=e(0),o=e(95),i="object"==typeof n&&n&&!n.nodeType&&n,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,u=a&&a.exports===i,c=u?r.Buffer:void 0,f=c?c.isBuffer:void 0,s=f||o;t.exports=s}).call(n,e(29)(t))},function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,n){function e(t,n){var e=typeof t;return n=null==n?r:n,!!n&&("number"==e||"symbol"!=e&&o.test(t))&&t>-1&&t%1==0&&t<n}var r=9007199254740991,o=/^(?:0|[1-9]\d*)$/;t.exports=e},function(t,n,e){var r=e(96),o=e(97),i=e(98),a=i&&i.isTypedArray,u=a?o(a):r;t.exports=u},function(t,n,e){function r(t){return null!=t&&i(t.length)&&!o(t)}var o=e(21),i=e(16);t.exports=r},function(t,n,e){function r(t){var n=this.__data__=new o(t);this.size=n.size}var o=e(7),i=e(107),a=e(108),u=e(109),c=e(110),f=e(111);r.prototype.clear=i,r.prototype.delete=a,r.prototype.get=u,r.prototype.has=c,r.prototype.set=f,t.exports=r},function(t,n,e){function r(t,n,e,a,u){return t===n||(null==t||null==n||!i(t)&&!i(n)?t!==t&&n!==n:o(t,n,e,a,r,u))}var o=e(112),i=e(4);t.exports=r},function(t,n,e){function r(t,n,e,r,f,s){var p=e&u,l=t.length,g=n.length;if(l!=g&&!(p&&g>l))return!1;var d=s.get(t);if(d&&s.get(n))return d==n;var v=-1,w=!0,h=e&c?new o:void 0;for(s.set(t,n),s.set(n,t);++v<l;){var y=t[v],m=n[v];if(r)var b=p?r(m,y,v,n,t,s):r(y,m,v,t,n,s);if(void 0!==b){if(b)continue;w=!1;break}if(h){if(!i(n,function(t,n){if(!a(h,n)&&(y===t||f(y,t,e,r,s)))return h.push(n)})){w=!1;break}}else if(y!==m&&!f(y,m,e,r,s)){w=!1;break}}return s.delete(t),s.delete(n),w}var o=e(20),i=e(113),a=e(25),u=1,c=2;t.exports=r},function(t,n,e){function r(t){return t===t&&!o(t)}var o=e(12);t.exports=r},function(t,n){function e(t,n){return function(e){return null!=e&&(e[t]===n&&(void 0!==n||t in Object(e)))}}t.exports=e},function(t,n,e){function r(t,n,e){var r=null==t?void 0:o(t,n);return void 0===r?e:r}var o=e(39);t.exports=r},function(t,n,e){function r(t,n){n=o(n,t);for(var e=0,r=n.length;null!=t&&e<r;)t=t[i(n[e++])];return e&&e==r?t:void 0}var o=e(40),i=e(10);t.exports=r},function(t,n,e){function r(t,n){return o(t)?t:i(t,n)?[t]:a(u(t))}var o=e(1),i=e(17),a=e(130),u=e(133);t.exports=r},function(t,n,e){t.exports=e(42)},function(t,n,e){"use strict";function r(){var t=w();if(!t&&window.location.pathname.indexOf("openurl")!==-1&&window.location.href.indexOf("&amp;vid=")!==-1){var n=window.location.href.replace(/&amp;/g,"&");window.location.assign(n)}t||window.location.pathname.indexOf("fulldisplay")===-1||(t=h()),t||window.location.pathname.indexOf("delivery")===-1||(t=a());var e=u(window.location.hostname),r=O(function(n,r){t?n(t):p(e).then(function(t){n(t.data.vid)})});return r.then(function(n){t=n;var e=d(t);if(t&&e){window.appPerformance.timeStamps["before configuration api"]=Date.now();var r=O(function(t,n){window.resolveConfigurationPromise=t,window.appConfig&&0!=Object.keys(window.appConfig).length?t(window.appConfig):p(e).then(function(n){t(n.data)})});return r.then(function(n){window.appConfig=n,window.appConfig.vid=t,window.appPerformance.timeStamps["after configuration api"]=Date.now()}).then(function(){return window.location.search.indexOf("noCustomization=true")>-1?l():c()})}})}function o(){return P}function i(t){return j.get(t)}function a(){if(isNaN(Number(window.location.pathname.split("/")[3])))return window.location.pathname?window.location.pathname.split("/")[3]:""}function u(t){var n="/primo_library/libweb/webservices/rest/v1/configuration/",e="/primaws/rest/pub/defaultvid/",r="suprima"===C.getBackendSystem()?e:n;return window.location.protocol+"//"+window.location.host+r+t}function c(){var t=s(),n=g();return O.all([t,n]).then(function(){return t})}function f(t){var n=O(function(n){t?_.loadScript(t).then(function(){return n(!0)},function(){return n(!1)}):n(!1)});return n}function s(){var t=m.getCentralJs(),n=f(t),e=m.getViewJs(),r=f(e);return O.all([n,r])}function p(t){return i(t)}function l(){return _.loadCSS(b)}function g(){try{var t=m.getColorCss(),n=m.getCentralCss(),e=m.getViewCss(),r=[];t?r.push(_.loadCSS(t)):r.push(l()),n&&r.push(_.loadCSS(n)),e&&r.push(_.loadCSS(e));var o=m.getFavIcon();if(o){var i=document.getElementById("viewCustomerFavIcon");i.href=o}var a=m.getHomeScreenIcon();if(a){var u=document.getElementById("viewHomeScreenCustomerIconAndroid");u.href=a;var c=document.getElementById("viewHomeScreenCustomerIconIos");c.href=a}var f=y();if(f){var s=document.getElementById("canonicalFullDisplay");s.href=f}return O.all(r)}catch(t){}}function d(t){var n="/primo_library/libweb/webservices/rest/v1/configuration/",e="/primaws/rest/pub/configuration/vid/",r="suprima"===C.getBackendSystem()?e:n;return window.location.protocol+"//"+window.location.host+r+t}function v(t,n){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var e=new RegExp("[\\?&]"+t+"=([^&#]*)"),r=e.exec(n);return null===r?"":decodeURIComponent(r[1].replace(/\+/g," "))}function w(){return v("vid",window.location.search)||v("vid",window.location.hash)}function h(){return window.location.pathname&&5===window.location.pathname.split("/").length?window.location.pathname.split("/")[4]:""}function y(){if(!(window.location.href.indexOf("/fulldisplay")<0)){if(window.location.href.indexOf("docid=")<0||window.location.href.indexOf("vid=")<0)return window.location.href.split("?")[0];var t=window.location.href.split("docid=")[1].split("&")[0],n=window.location.href.split("vid=")[1].split("&")[0];return window.location.origin+window.location.pathname+"/"+t+"/"+n}}Object.defineProperty(n,"__esModule",{value:!0});var m=e(43),b="lib/app-colors-4979da4ff9.css",_=e(44),x=e(19),C=e(45),S=x.injector(["ng"]),j=S.get("$http"),O=S.get("$q"),P=r();n.bootstrapConfiguration=o,n.customizeApplication=c,n.loadDefaultColorsCss=l},function(t,n,e){"use strict";function r(){return w||(w=window.appConfig.customization||{}),w}function o(){return r().viewCss}function i(){return r().resourceIcons}function a(){return r().libraryLogo}function u(){return r().libraryLogoClickableURL}function c(){return r().centralCss}function f(){return r().centralJs}function s(){return r().colorCss}function p(){return r().favIcon}function l(){return r().homeScreenIcon}function g(){return r().viewJs}function d(){return r().viewSvg}function v(){return r().staticHtml}Object.defineProperty(n,"__esModule",{value:!0});var w;n.getViewCss=o,n.getResouceTypeImages=i,n.getLibraryLogo=a,n.getLibraryLogoClickableURL=u,n.getCentralCss=c,n.getCentralJs=f,n.getColorCss=s,n.getFavIcon=p,n.getHomeScreenIcon=l,n.getViewJs=g,n.getViewSvg=d,n.getStaticHtml=v},function(t,n,e){"use strict";function r(t){var n={};return function(e){if("undefined"==typeof n[e]){var r=t(e),o=i(function(t,n){r.onload=r.onreadystatechange=function(n){r.readyState&&"complete"!==r.readyState&&"loaded"!==r.readyState||window.setTimeout(function(){t(n)})},r.onerror=function(t){window.setTimeout(function(){n(t)})}});n[e]=o}return n[e]}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(19),i=o.injector(["ng"]).get("$q"),a=window.document;n.loadScript=r(function(t){var n=a.createElement("script");return n.src=t,a.body.appendChild(n),n}),n.loadCSS=r(function(t){var n=a.createElement("link");return n.rel="stylesheet",n.type="text/css",n.href=t,a.head.appendChild(n),n})},function(t,n,e){"use strict";function r(){var t=window.appConfig.authentication.map(function(t,n,e){return new kt(t["authentication-system"],t["profile-name"],n)});return t}function o(){return window.appConfig.tiles.ResultTileInterface}function i(){return window.appConfig.tiles.FacetTileInterface}function a(){return window.appConfig.tiles.LocationsTileInterface}function u(){return window.appConfig.tiles.MainMenuTileInterface}function c(){return window.appConfig.tiles.ResultFullTileInterface}function f(){return window.appConfig["bx-enable"]}function s(){return window.appConfig["syndeticunbound-enable"]}function p(){return window.appConfig["syndeticunbound-id"]}function l(){return window.appConfig["system-configuration"]}function g(){return window.appConfig["primo-view"].institution["institution-code"]}function d(){return window.appConfig["primo-view"].institution["newspapers-search"]}function v(){return L().displayNewspapersLink}function w(){return L().refEntryActive}function h(){return L().displayFeaturedNewspapers}function y(){return window.appConfig["primo-view"].institution.id}function m(){return window.appConfig.beacon["alternative-institution-code"]}function b(){return window.appConfig["primo-view"].showFindInDbPerTabs}function _(){function t(t){return t["scope-id"]}var n=window.appConfig["primo-view"].scopes.map(t);return At(n)}function x(){return window.appConfig.tiles.SearchTileInterface}function C(){return window.appConfig.queryTerms}function S(t){return window.appConfig["tab-to-tiles"][t]}function j(){return window.appConfig.UIComponents}function O(){return window.appConfig["base-urls"]}function P(){return window.appConfig["primo-view"].scopes}function A(){return _().indexOf("default_scope")!==-1?"default_scope":_()[0]}function I(){return window.location.href.includes("/collectionDiscovery")||(window.location.href.includes("/jsearch")||window.location.href.includes("/dbsearch"))&&"suprima"!==H()?20:parseInt(window.appConfig["system-configuration"]["FE UI – Scrolling Threshold"]||"10")}function T(){return parseInt(window.appConfig["system-configuration"]["Show More (replaces scrolling) Threshold"]||"50")}function L(){return window.appConfig["primo-view"]["attributes-map"]}function k(t){var n=window.appConfig.authentication.filter(function(n){return n["profile-name"]&&t==n["profile-name"]});return n[0]&&n[0]["redirect-only"]?n[0]["redirect-only"]:"false"}function M(t){var n=window.appConfig.authentication.filter(function(n){return n["profile-name"]&&t==n["profile-name"]});return n[0]&&n[0]["authentication-system"]?"SAML"===n[0]["authentication-system"]:"false"}function E(){return{userSessionTimeout:parseInt(window.appConfig["system-configuration"]["Session Timeout"],10),guestSessionTimeout:parseInt(window.appConfig["primo-view"].timeout["guest-ui-timeout"],10),sessionTimeoutURL:L().sessionTimeoutURL,warningTime:120}}function F(){var t={isActiveCapcha:window.appConfig["system-configuration"]["Activate Captcha [Y/N]"],public_key:window.appConfig["system-configuration"]["Public Captcha Key"]};return t}function U(){return window.appConfig.vid}function D(){return window.location.href.includes("searchCDI=true")}function B(){return window.appConfig["primo-view"]["available-tabs"]}function R(t){var n="default_tab";"suprima"===H()&&(n=window.appConfig["primo-view"].scopes[0]["tab-id-for-scope-matching"]);var e=window.appConfig["primo-view"].scopes.filter(function(n){return n["scope-id"]===t});return e&&e.length>0?e[0]["tab-id-for-scope-matching"]||n:n}function z(){if(window.appConfig["mapping-tables"]&&window.appConfig["mapping-tables"].primo_central_institutions_unique_ids[0])return window.appConfig["mapping-tables"].primo_central_institutions_unique_ids[0].source1||""}function N(){return window.location.host.replace(/\:.*/,"")}function V(){return"suprima"===this.getBackendSystem()?window.appConfig["system-configuration"].Alma_Version:window.appConfig["system-configuration"].Primo_Version_Number&&window.appConfig["system-configuration"].Primo_HotFix_Number?window.appConfig["system-configuration"].Primo_Version_Number+"."+window.appConfig["system-configuration"].Primo_HotFix_Number:"4.0.0.0"}function $(){return window.appConfig["system-configuration"].RUM_URL}function q(){return window.appConfig.summon_over_alma}function W(){return window.appConfig.searchWithinJournalConfig}function H(){return Tt(window,"appConfig.backend_system")?window.appConfig.backend_system:(Lt||(Lt=J()),Lt.indexOf("discovery")>-1?"suprima":void 0)}function J(){var t=document.getElementsByTagName("base");return t[0].getAttribute("href")}function G(){var t=window.appConfig["mapping-tables"]["General Configuration"],n=t.filter(function(t){return"Short_Date_Format"===t.source1});return n[0].target}function Z(){var t=window.appConfig["mapping-tables"]["General Configuration"],n=t.filter(function(t){return"Long_Date_Format"===t.source1});return n[0].target}function K(){return"yyyyMMdd"}function Q(){return"suprima"===this.getBackendSystem()?"discovery":"primo-explore"}function X(){return window.appConfig.searchScopesMap||(window.appConfig.searchScopesMap=It(P(),"tab")),window.appConfig.searchScopesMap}function Y(t){window.appConfig["primo-view"].scopes=t,window.appConfig.searchScopesMap=It(P(),"tab")}function tt(){if("suprima"===this.getBackendSystem())return window.appConfig["system-configuration"].disable_cache}function nt(){var t=g(),n=window.appConfig["mapping-tables"]["Institution Base URLs"],e=n.filter(function(n){return n.source1===t&&"api_base"===n.source2});return e.length>0?e[0].target:""}function et(){return new Set(["iw","he","ar"])}function rt(){return"infinite_scroll"}function ot(){return Boolean(L().citationTrailsEnabled)}function it(){return window.appConfig["institution-base-url"]}function at(){return window.appConfig["system-configuration"].Proxy_Server+"syndetics.com/index.php?client="}function ut(){return window.appConfig["system-configuration"].Proxy_Server+"books.google.com/books?bibkeys="}function ct(){return window.appConfig["system-configuration"].Auto_Complete_Server_URL+"/solr/ac"}function ft(){return window.appConfig["system-configuration"].skip_delivery}function st(){return window.appConfig["system-configuration"].manualAlternativeEmailRS}function pt(){return window.appConfig["system-configuration"].split_facets_max_wait}function lt(){return window.appConfig["system-configuration"].split_facets_wait_interval}function gt(){return window.appConfig["mapping-tables"]["A-Z Languages"]}function dt(){return window.appConfig["mapping-tables"].seo_params_mapping}function vt(t){var n=this.getSEOParamsMapping();if(n){var e=n.filter(function(n){return n.source1===t});if(e&&e[0])return e[0].target}return""}function wt(){return window.appConfig.enableSingleLogout}function ht(){return"true"===L().tabsRemote}function yt(){return window.appConfig["system-configuration"]["Show ICP License Footer"]}function ft(){return window.appConfig["system-configuration"].skip_delivery}function mt(){return"suprima"!==this.getBackendSystem()&&(!window.appConfig["system-configuration"]["blend facets separately"]||"true"===window.appConfig["system-configuration"]["blend facets separately"])}function bt(){return L().legantoURLTemplate}function _t(){return L().multilingualConfigurationEnabled}function xt(){return 60*parseInt(Tt(window,'appConfig["system-configuration"]["request item availability check timeout"]',"1"))*1e3}function Ct(){if("suprima"!==H())return!1;var t=Tt(window.appConfig,"['mapping-tables']['consortia member codes']",[]),n=Tt(window.appConfig,"['primo-view']['is-union-catalog-view']",!1);return n&&t.length>0}function St(){if("suprima"!==H())return!1;var t=Tt(window.appConfig,"['primo-view']['is-union-catalog-view']",!1);return t&&!Ct()}function jt(t){return!(!window.appConfig["system-configuration"].ngrs_enabled||this.isFullView)&&"RAPIDXL"===t.tab}function Ot(){return window.appConfig["system-configuration"].ngrs_enabled}function Pt(){return Tt(window.appConfig,"['system-configuration']['unionViewScopeSuffix']")}Object.defineProperty(n,"__esModule",{value:!0});var At=e(46),It=e(82),Tt=e(38);n.DEFAULT_COLOR_CSS="lib/app-colors-4979da4ff9.css";var Lt,kt=function(){function t(t,n,e){this._authenticationSystem=t,this._profileName=n,this._index=e}return Object.defineProperty(t.prototype,"profileName",{get:function(){return this._profileName},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"authenticationSystem",{get:function(){return this._authenticationSystem},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"index",{get:function(){return this._index},enumerable:!0,configurable:!0}),t.prototype.isExternal=function(){return"SAML"===this._authenticationSystem||"PDS"===this._authenticationSystem||"CAS"===this._authenticationSystem||"SOCIAL_VIA_ALMA"===this._authenticationSystem?1:0},t.prototype.isSilentLoginSupported=function(){return"SAML"===this._authenticationSystem||"PDS"===this._authenticationSystem||"CAS"===this._authenticationSystem},t}();n.AuthenticationMethod=kt,n.getAuthenticationMethods=r,n.getBriefResultConfiguration=o,n.getFacetConfiguration=i,n.getLocationsConfiguration=a,n.getMainMenuConfiguration=u,n.getFullViewConfiguration=c,n.getBxEnable=f,n.getSyndeticUnboundEnable=s,n.getSyndeticUnboundId=p,n.getSystemConfiguration=l,n.getInstitutionCode=g,n.getNewspapersSearchEnabled=d,n.getDisplayNewspapersLink=v,n.getRefEntryActive=w,n.getDisplayFeaturedNewspapers=h,n.getInstitutionId=y,n.getBeaconInstitutionCode=m,n.getFindInDbPerTabs=b,n.getScopes=_,n.getSearchConfiguration=x,n.getQueryTerms=C,n.getTabToTiles=S,n.getUIComponents=j,n.getBaseUrls=O,n.getScopeList=P,n.getDefaultScope=A,n.getResultsBulkSize=I,n.getShowMoreThreshold=T,n.getAttributesMap=L,n.isRedirectOnlyForAuthName=k,n.isSaml=M,n.getSessionTimeoutParams=E,n.getCaptcha=F,n.getVid=U,n.isCDI=D,n.getTabs=B,n.getTab=R,n.getCurrentPCKey=z,n.getCurrentServer=N,n.getCurrentVersionNumber=V,n.getBeaconUrl=$,n.getSummonOverAlma=q,n.getSearchWithinJournalConfig=W,n.getBackendSystem=H,n.getPrimoShortDateFormat=G,n.getPrimoLongDateFormat=Z,n.getIlsDateFormat=K,n.getUrlContext=Q,n.getSearchScopesMap=X,n.updateSearchScopesMap=Y,n.getDisableCacheParameters=tt,n.getApiBaseUrl=nt,n.getRtlLanguages=et,n.getPagingType=rt,n.isCitationTrailsEnabled=ot,n.getCitationLinkerBaseURL=it,n.getSyndetixWithProxy=at,n.getGoogWithProxy=ut,n.getAutocompleteUrl=ct,n.getPrimoVeSkipDelivery=ft,n.getPrimoVeAlternativeEmailDigitalResourceSharing=st,n.getPrimoSplitFacetsMaxWait=pt,n.getPrimoVeSplitFacetsWaitInterval=lt,n.getAZLangages=gt,n.getSEOParamsMapping=dt,n.getSEOParamsMappingParam=vt,n.isEnableSingleLogout=wt,n.isAutoSearchOnTabChange=ht,n.getShowICPLicenseFooter=yt,n.getPrimoVeSkipDelivery=ft,n.getBlendFacetsSeparatelyConfig=mt,n.getLegantoTemplateUrl=bt,n.getMultilingualConfigurationEnabled=_t,n.getRequestItemAvailabilityCheckTimeout=xt,n.isUnionCatalogNZView=Ct,n.isUnionCatalogMemberView=St,n.isNgrsSearch=jt,n.isNgrs=Ot,n.getUnionViewScopeSuffix=Pt},function(t,n,e){function r(t){return t&&t.length?o(t):[]}var o=e(47);t.exports=r},function(t,n,e){function r(t,n,e){var r=-1,p=i,l=t.length,g=!0,d=[],v=d;if(e)g=!1,p=a;else if(l>=s){var w=n?null:c(t);if(w)return f(w);g=!1,p=u,v=new o}else v=n?[]:d;t:for(;++r<l;){var h=t[r],y=n?n(h):h;if(h=e||0!==h?h:0,g&&y===y){for(var m=v.length;m--;)if(v[m]===y)continue t;n&&v.push(y),d.push(h)}else p(v,y,e)||(v!==d&&v.push(y),d.push(h))}return d}var o=e(20),i=e(74),a=e(79),u=e(25),c=e(80),f=e(14),s=200;t.exports=r},function(t,n,e){function r(){this.size=0,this.__data__={hash:new o,map:new(a||i),string:new o}}var o=e(49),i=e(7),a=e(13);t.exports=r},function(t,n,e){function r(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}var o=e(50),i=e(58),a=e(59),u=e(60),c=e(61);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=u,r.prototype.set=c,t.exports=r},function(t,n,e){function r(){this.__data__=o?o(null):{},this.size=0}var o=e(5);t.exports=r},function(t,n,e){function r(t){if(!a(t)||i(t))return!1;var n=o(t)?d:f;return n.test(u(t))}var o=e(21),i=e(55),a=e(12),u=e(23),c=/[\\^$.*+?()[\]{}|]/g,f=/^\[object .+?Constructor\]$/,s=Function.prototype,p=Object.prototype,l=s.toString,g=p.hasOwnProperty,d=RegExp("^"+l.call(g).replace(c,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},function(t,n){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){function r(t){var n=a.call(t,c),e=t[c];try{t[c]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(n?t[c]=e:delete t[c]),o}var o=e(6),i=Object.prototype,a=i.hasOwnProperty,u=i.toString,c=o?o.toStringTag:void 0;t.exports=r},function(t,n){function e(t){return o.call(t)}var r=Object.prototype,o=r.toString;t.exports=e},function(t,n,e){function r(t){return!!i&&i in t}var o=e(56),i=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=r},function(t,n,e){var r=e(0),o=r["__core-js_shared__"];t.exports=o},function(t,n){function e(t,n){return null==t?void 0:t[n]}t.exports=e},function(t,n){function e(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}t.exports=e},function(t,n,e){function r(t){var n=this.__data__;if(o){var e=n[t];return e===i?void 0:e}return u.call(n,t)?n[t]:void 0}var o=e(5),i="__lodash_hash_undefined__",a=Object.prototype,u=a.hasOwnProperty;t.exports=r},function(t,n,e){function r(t){var n=this.__data__;return o?void 0!==n[t]:a.call(n,t)}var o=e(5),i=Object.prototype,a=i.hasOwnProperty;t.exports=r},function(t,n,e){function r(t,n){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=o&&void 0===n?i:n,this}var o=e(5),i="__lodash_hash_undefined__";t.exports=r},function(t,n){function e(){this.__data__=[],this.size=0}t.exports=e},function(t,n,e){function r(t){var n=this.__data__,e=o(n,t);if(e<0)return!1;var r=n.length-1;return e==r?n.pop():a.call(n,e,1),--this.size,!0}var o=e(8),i=Array.prototype,a=i.splice;t.exports=r},function(t,n,e){function r(t){var n=this.__data__,e=o(n,t);return e<0?void 0:n[e][1]}var o=e(8);t.exports=r},function(t,n,e){function r(t){return o(this.__data__,t)>-1}var o=e(8);t.exports=r},function(t,n,e){function r(t,n){var e=this.__data__,r=o(e,t);return r<0?(++this.size,e.push([t,n])):e[r][1]=n,this}var o=e(8);t.exports=r},function(t,n,e){function r(t){var n=o(this,t).delete(t);return this.size-=n?1:0,n}var o=e(9);t.exports=r},function(t,n){function e(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t}t.exports=e},function(t,n,e){function r(t){return o(this,t).get(t)}var o=e(9);t.exports=r},function(t,n,e){function r(t){return o(this,t).has(t)}var o=e(9);t.exports=r},function(t,n,e){function r(t,n){var e=o(this,t),r=e.size;return e.set(t,n),this.size+=e.size==r?0:1,this}var o=e(9);t.exports=r},function(t,n){function e(t){return this.__data__.set(t,r),this}var r="__lodash_hash_undefined__";t.exports=e},function(t,n){function e(t){return this.__data__.has(t)}t.exports=e},function(t,n,e){function r(t,n){var e=null==t?0:t.length;return!!e&&o(t,n,0)>-1}var o=e(75);t.exports=r},function(t,n,e){function r(t,n,e){return n===n?a(t,n,e):o(t,i,e)}var o=e(76),i=e(77),a=e(78);t.exports=r},function(t,n){function e(t,n,e,r){for(var o=t.length,i=e+(r?1:-1);r?i--:++i<o;)if(n(t[i],i,t))return i;return-1}t.exports=e},function(t,n){function e(t){return t!==t}t.exports=e},function(t,n){function e(t,n,e){for(var r=e-1,o=t.length;++r<o;)if(t[r]===n)return r;return-1}t.exports=e},function(t,n){function e(t,n,e){for(var r=-1,o=null==t?0:t.length;++r<o;)if(e(n,t[r]))return!0;return!1}t.exports=e},function(t,n,e){var r=e(26),o=e(81),i=e(14),a=1/0,u=r&&1/i(new r([,-0]))[1]==a?function(t){return new r(t)}:o;t.exports=u},function(t,n){function e(){}t.exports=e},function(t,n,e){var r=e(83),o=e(85),i=Object.prototype,a=i.hasOwnProperty,u=o(function(t,n,e){a.call(t,e)?t[e].push(n):r(t,e,[n])});t.exports=u},function(t,n,e){function r(t,n,e){"__proto__"==n&&o?o(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}var o=e(84);t.exports=r},function(t,n,e){var r=e(2),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,n,e){function r(t,n){return function(e,r){var c=u(e)?o:i,f=n?n():{};return c(e,t,a(r,2),f)}}var o=e(86),i=e(87),a=e(104),u=e(1);t.exports=r},function(t,n){function e(t,n,e,r){for(var o=-1,i=null==t?0:t.length;++o<i;){var a=t[o];n(r,a,e(a),t)}return r}t.exports=e},function(t,n,e){function r(t,n,e,r){return o(t,function(t,o,i){n(r,t,e(t),i)}),r}var o=e(88);t.exports=r},function(t,n,e){var r=e(89),o=e(103),i=o(r);t.exports=i},function(t,n,e){function r(t,n){return t&&o(t,n,i)}var o=e(90),i=e(15);t.exports=r},function(t,n,e){var r=e(91),o=r();t.exports=o},function(t,n){function e(t){return function(n,e,r){for(var o=-1,i=Object(n),a=r(n),u=a.length;u--;){var c=a[t?u:++o];if(e(i[c],c,i)===!1)break}return n}}t.exports=e},function(t,n,e){function r(t,n){var e=a(t),r=!e&&i(t),s=!e&&!r&&u(t),l=!e&&!r&&!s&&f(t),g=e||r||s||l,d=g?o(t.length,String):[],v=d.length;for(var w in t)!n&&!p.call(t,w)||g&&("length"==w||s&&("offset"==w||"parent"==w)||l&&("buffer"==w||"byteLength"==w||"byteOffset"==w)||c(w,v))||d.push(w);return d}var o=e(93),i=e(27),a=e(1),u=e(28),c=e(30),f=e(31),s=Object.prototype,p=s.hasOwnProperty;t.exports=r},function(t,n){function e(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}t.exports=e},function(t,n,e){function r(t){return i(t)&&o(t)==a}var o=e(3),i=e(4),a="[object Arguments]";t.exports=r},function(t,n){function e(){return!1}t.exports=e},function(t,n,e){function r(t){return a(t)&&i(t.length)&&!!L[o(t)]}var o=e(3),i=e(16),a=e(4),u="[object Arguments]",c="[object Array]",f="[object Boolean]",s="[object Date]",p="[object Error]",l="[object Function]",g="[object Map]",d="[object Number]",v="[object Object]",w="[object RegExp]",h="[object Set]",y="[object String]",m="[object WeakMap]",b="[object ArrayBuffer]",_="[object DataView]",x="[object Float32Array]",C="[object Float64Array]",S="[object Int8Array]",j="[object Int16Array]",O="[object Int32Array]",P="[object Uint8Array]",A="[object Uint8ClampedArray]",I="[object Uint16Array]",T="[object Uint32Array]",L={};L[x]=L[C]=L[S]=L[j]=L[O]=L[P]=L[A]=L[I]=L[T]=!0,L[u]=L[c]=L[b]=L[f]=L[_]=L[s]=L[p]=L[l]=L[g]=L[d]=L[v]=L[w]=L[h]=L[y]=L[m]=!1,t.exports=r},function(t,n){function e(t){return function(n){return t(n)}}t.exports=e},function(t,n,e){(function(t){var r=e(22),o="object"==typeof n&&n&&!n.nodeType&&n,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o,u=a&&r.process,c=function(){try{var t=i&&i.require&&i.require("util").types;return t?t:u&&u.binding&&u.binding("util")}catch(t){}}();t.exports=c}).call(n,e(29)(t))},function(t,n,e){function r(t){if(!o(t))return i(t);var n=[];for(var e in Object(t))u.call(t,e)&&"constructor"!=e&&n.push(e);return n}var o=e(100),i=e(101),a=Object.prototype,u=a.hasOwnProperty;t.exports=r},function(t,n){function e(t){var n=t&&t.constructor,e="function"==typeof n&&n.prototype||r;return t===e}var r=Object.prototype;t.exports=e},function(t,n,e){var r=e(102),o=r(Object.keys,Object);t.exports=o},function(t,n){function e(t,n){return function(e){return t(n(e))}}t.exports=e},function(t,n,e){function r(t,n){return function(e,r){if(null==e)return e;if(!o(e))return t(e,r);for(var i=e.length,a=n?i:-1,u=Object(e);(n?a--:++a<i)&&r(u[a],a,u)!==!1;);return e}}var o=e(32);t.exports=r},function(t,n,e){function r(t){return"function"==typeof t?t:null==t?a:"object"==typeof t?u(t)?i(t[0],t[1]):o(t):c(t)}var o=e(105),i=e(129),a=e(139),u=e(1),c=e(140);t.exports=r},function(t,n,e){function r(t){var n=i(t);return 1==n.length&&n[0][2]?a(n[0][0],n[0][1]):function(e){return e===t||o(e,t,n)}}var o=e(106),i=e(128),a=e(37);t.exports=r},function(t,n,e){function r(t,n,e,r){var c=e.length,f=c,s=!r;if(null==t)return!f;for(t=Object(t);c--;){var p=e[c];if(s&&p[2]?p[1]!==t[p[0]]:!(p[0]in t))return!1}for(;++c<f;){p=e[c];var l=p[0],g=t[l],d=p[1];if(s&&p[2]){if(void 0===g&&!(l in t))return!1}else{var v=new o;if(r)var w=r(g,d,l,t,n,v);if(!(void 0===w?i(d,g,a|u,r,v):w))return!1}}return!0}var o=e(33),i=e(34),a=1,u=2;t.exports=r},function(t,n,e){function r(){this.__data__=new o,this.size=0}var o=e(7);t.exports=r},function(t,n){function e(t){var n=this.__data__,e=n.delete(t);return this.size=n.size,e}t.exports=e},function(t,n){function e(t){return this.__data__.get(t);
}t.exports=e},function(t,n){function e(t){return this.__data__.has(t)}t.exports=e},function(t,n,e){function r(t,n){var e=this.__data__;if(e instanceof o){var r=e.__data__;if(!i||r.length<u-1)return r.push([t,n]),this.size=++e.size,this;e=this.__data__=new a(r)}return e.set(t,n),this.size=e.size,this}var o=e(7),i=e(13),a=e(11),u=200;t.exports=r},function(t,n,e){function r(t,n,e,r,w,y){var m=f(t),b=f(n),_=m?d:c(t),x=b?d:c(n);_=_==g?v:_,x=x==g?v:x;var C=_==v,S=x==v,j=_==x;if(j&&s(t)){if(!s(n))return!1;m=!0,C=!1}if(j&&!C)return y||(y=new o),m||p(t)?i(t,n,e,r,w,y):a(t,n,_,e,r,w,y);if(!(e&l)){var O=C&&h.call(t,"__wrapped__"),P=S&&h.call(n,"__wrapped__");if(O||P){var A=O?t.value():t,I=P?n.value():n;return y||(y=new o),w(A,I,e,r,y)}}return!!j&&(y||(y=new o),u(t,n,e,r,w,y))}var o=e(33),i=e(35),a=e(114),u=e(117),c=e(124),f=e(1),s=e(28),p=e(31),l=1,g="[object Arguments]",d="[object Array]",v="[object Object]",w=Object.prototype,h=w.hasOwnProperty;t.exports=r},function(t,n){function e(t,n){for(var e=-1,r=null==t?0:t.length;++e<r;)if(n(t[e],e,t))return!0;return!1}t.exports=e},function(t,n,e){function r(t,n,e,r,o,C,j){switch(e){case x:if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case _:return!(t.byteLength!=n.byteLength||!C(new i(t),new i(n)));case l:case g:case w:return a(+t,+n);case d:return t.name==n.name&&t.message==n.message;case h:case m:return t==n+"";case v:var O=c;case y:var P=r&s;if(O||(O=f),t.size!=n.size&&!P)return!1;var A=j.get(t);if(A)return A==n;r|=p,j.set(t,n);var I=u(O(t),O(n),r,o,C,j);return j.delete(t),I;case b:if(S)return S.call(t)==S.call(n)}return!1}var o=e(6),i=e(115),a=e(24),u=e(35),c=e(116),f=e(14),s=1,p=2,l="[object Boolean]",g="[object Date]",d="[object Error]",v="[object Map]",w="[object Number]",h="[object RegExp]",y="[object Set]",m="[object String]",b="[object Symbol]",_="[object ArrayBuffer]",x="[object DataView]",C=o?o.prototype:void 0,S=C?C.valueOf:void 0;t.exports=r},function(t,n,e){var r=e(0),o=r.Uint8Array;t.exports=o},function(t,n){function e(t){var n=-1,e=Array(t.size);return t.forEach(function(t,r){e[++n]=[r,t]}),e}t.exports=e},function(t,n,e){function r(t,n,e,r,a,c){var f=e&i,s=o(t),p=s.length,l=o(n),g=l.length;if(p!=g&&!f)return!1;for(var d=p;d--;){var v=s[d];if(!(f?v in n:u.call(n,v)))return!1}var w=c.get(t);if(w&&c.get(n))return w==n;var h=!0;c.set(t,n),c.set(n,t);for(var y=f;++d<p;){v=s[d];var m=t[v],b=n[v];if(r)var _=f?r(b,m,v,n,t,c):r(m,b,v,t,n,c);if(!(void 0===_?m===b||a(m,b,e,r,c):_)){h=!1;break}y||(y="constructor"==v)}if(h&&!y){var x=t.constructor,C=n.constructor;x!=C&&"constructor"in t&&"constructor"in n&&!("function"==typeof x&&x instanceof x&&"function"==typeof C&&C instanceof C)&&(h=!1)}return c.delete(t),c.delete(n),h}var o=e(118),i=1,a=Object.prototype,u=a.hasOwnProperty;t.exports=r},function(t,n,e){function r(t){return o(t,a,i)}var o=e(119),i=e(121),a=e(15);t.exports=r},function(t,n,e){function r(t,n,e){var r=n(t);return i(t)?r:o(r,e(t))}var o=e(120),i=e(1);t.exports=r},function(t,n){function e(t,n){for(var e=-1,r=n.length,o=t.length;++e<r;)t[o+e]=n[e];return t}t.exports=e},function(t,n,e){var r=e(122),o=e(123),i=Object.prototype,a=i.propertyIsEnumerable,u=Object.getOwnPropertySymbols,c=u?function(t){return null==t?[]:(t=Object(t),r(u(t),function(n){return a.call(t,n)}))}:o;t.exports=c},function(t,n){function e(t,n){for(var e=-1,r=null==t?0:t.length,o=0,i=[];++e<r;){var a=t[e];n(a,e,t)&&(i[o++]=a)}return i}t.exports=e},function(t,n){function e(){return[]}t.exports=e},function(t,n,e){var r=e(125),o=e(13),i=e(126),a=e(26),u=e(127),c=e(3),f=e(23),s="[object Map]",p="[object Object]",l="[object Promise]",g="[object Set]",d="[object WeakMap]",v="[object DataView]",w=f(r),h=f(o),y=f(i),m=f(a),b=f(u),_=c;(r&&_(new r(new ArrayBuffer(1)))!=v||o&&_(new o)!=s||i&&_(i.resolve())!=l||a&&_(new a)!=g||u&&_(new u)!=d)&&(_=function(t){var n=c(t),e=n==p?t.constructor:void 0,r=e?f(e):"";if(r)switch(r){case w:return v;case h:return s;case y:return l;case m:return g;case b:return d}return n}),t.exports=_},function(t,n,e){var r=e(2),o=e(0),i=r(o,"DataView");t.exports=i},function(t,n,e){var r=e(2),o=e(0),i=r(o,"Promise");t.exports=i},function(t,n,e){var r=e(2),o=e(0),i=r(o,"WeakMap");t.exports=i},function(t,n,e){function r(t){for(var n=i(t),e=n.length;e--;){var r=n[e],a=t[r];n[e]=[r,a,o(a)]}return n}var o=e(36),i=e(15);t.exports=r},function(t,n,e){function r(t,n){return u(t)&&c(n)?f(s(t),n):function(e){var r=i(e,t);return void 0===r&&r===n?a(e,t):o(n,r,p|l)}}var o=e(34),i=e(38),a=e(136),u=e(17),c=e(36),f=e(37),s=e(10),p=1,l=2;t.exports=r},function(t,n,e){var r=e(131),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=r(function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(o,function(t,e,r,o){n.push(r?o.replace(i,"$1"):e||t)}),n});t.exports=a},function(t,n,e){function r(t){var n=o(t,function(t){return e.size===i&&e.clear(),t}),e=n.cache;return n}var o=e(132),i=500;t.exports=r},function(t,n,e){function r(t,n){if("function"!=typeof t||null!=n&&"function"!=typeof n)throw new TypeError(i);var e=function(){var r=arguments,o=n?n.apply(this,r):r[0],i=e.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return e.cache=i.set(o,a)||i,a};return e.cache=new(r.Cache||o),e}var o=e(11),i="Expected a function";r.Cache=o,t.exports=r},function(t,n,e){function r(t){return null==t?"":o(t)}var o=e(134);t.exports=r},function(t,n,e){function r(t){if("string"==typeof t)return t;if(a(t))return i(t,r)+"";if(u(t))return s?s.call(t):"";var n=t+"";return"0"==n&&1/t==-c?"-0":n}var o=e(6),i=e(135),a=e(1),u=e(18),c=1/0,f=o?o.prototype:void 0,s=f?f.toString:void 0;t.exports=r},function(t,n){function e(t,n){for(var e=-1,r=null==t?0:t.length,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o}t.exports=e},function(t,n,e){function r(t,n){return null!=t&&i(t,n,o)}var o=e(137),i=e(138);t.exports=r},function(t,n){function e(t,n){return null!=t&&n in Object(t)}t.exports=e},function(t,n,e){function r(t,n,e){n=o(n,t);for(var r=-1,s=n.length,p=!1;++r<s;){var l=f(n[r]);if(!(p=null!=t&&e(t,l)))break;t=t[l]}return p||++r!=s?p:(s=null==t?0:t.length,!!s&&c(s)&&u(l,s)&&(a(t)||i(t)))}var o=e(40),i=e(27),a=e(1),u=e(30),c=e(16),f=e(10);t.exports=r},function(t,n){function e(t){return t}t.exports=e},function(t,n,e){function r(t){return a(t)?o(u(t)):i(t)}var o=e(141),i=e(142),a=e(17),u=e(10);t.exports=r},function(t,n){function e(t){return function(n){return null==n?void 0:n[t]}}t.exports=e},function(t,n,e){function r(t){return function(n){return o(n,t)}}var o=e(39);t.exports=r}]);
//# sourceMappingURL=bootstrap_bundle.js.map