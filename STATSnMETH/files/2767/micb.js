var mistats = mistats || {};

mistats.dataLayer = mistats.dataLayer || function ()
{
   if (!window.digitalData)
   !function(n){var r={};function a(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=n,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=159)}([function(t,e,n){"use strict";function r(t){window.performance.mark&&performance.mark(t)}function a(t){r("DEPENDENCY: ".concat(t))}function c(t,e){var n="DEPRECATED: Use of ".concat(t," has been deprecated");r(e?"".concat(n,", use ").concat(e," instead."):"".concat(n,"."))}n.d(e,"b",function(){return a}),n.d(e,"c",function(){return c}),e.a=r},function(t,e,n){"use strict";e.a={}},function(t,e,n){"use strict";e.a=function(t){var e=t.split("."),n=window.mistats?window.mistats:void 0,r="";if(n){r=n;for(var a=0;a<e.length;a+=1)void 0!==r?r=r[e[a]]:(r="",a=e.length)}return r}},function(t,e,n){"use strict";var o=n(1);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.a=function(t,e){var n,r,a,c=e;t.compact&&"object"===u(e)?(r=n=e,a=Object.entries(n),r="",a.forEach(function(t,e){a[e]="".concat(t[0],":").concat(t[1]),r=a.join("&")}),c=r):"string"!=typeof e&&(c=JSON.stringify(e));var i="".concat(t.name,"=").concat(encodeURIComponent(c));t.path&&"string"==typeof t.path&&(i+="; path=".concat(t.path)),t.domain&&"string"==typeof t.domain&&(i+="; domain=".concat(t.domain)),t["max-age"]&&"number"==typeof t["max-age"]&&(i+="; max-age=".concat(t["max-age"])),t.secure&&"boolean"==typeof t.secure&&(i+="; secure"),t.expires&&new Date(t.expires).toUTCString()===t.expires&&(i+="; expires=".concat(t.expires)),o.a[t.name]=c,window.document.cookie=i}},function(t,e,n){"use strict";function r(t){return t?"string"==typeof t?t:JSON.stringify(t):""}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";var r=window.pageInfo||{};e.a=function(t){return!r[t]&&window.mi&&window.mi.pageInfo?window.mi.pageInfo.getConf(t)||"":r[t]||""}},,function(t,e,n){"use strict";var i=n(1);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,a=!1,c=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){a=!0,c=t}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(t,e){var n=t;return e?n=function(t){if(-1===t.indexOf(":"))return t;var e=t.split("&"),a={};return e.forEach(function(t){var e=o(t.split(":"),2),n=e[0],r=e[1];a[n]=r}),a}(t):t.match(/^[[{].*[\]}]$/)&&(n=JSON.parse(t)),n}e.a=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=function(t){if(0===Object.keys(i.a).length)window.document.cookie.split("; ").forEach(function(t){var e=o(t.split("="),2),n=e[0],r=e[1];i.a[n]=r});else if(void 0===i.a[t])for(var e=window.document.cookie.split("; "),n=0;n<e.length;n++)if(0===e[n].indexOf("".concat(t,"="))){var r=o(e[n].split("="),2),a=r[0],c=r[1];i.a[a]=c;break}return i.a[t]?decodeURIComponent(i.a[t]):null}(t);return n?r(n,e):n}},,,,function(t,e,n){"use strict";var r=n(7),a=n(3);e.a=function(){var e=Object(r.a)("mi_sub",!0);if(e&&e.e&&e.e<Date.now()){e.s="ex",delete e.e;var t=window.location.host.split(".");t=t.slice(t.length-2,t.length).join("."),Object(a.a)({name:"mi_sub",compact:!0,path:"/",domain:t,expires:new Date(Date.now()+31536e7).toUTCString()},{s:"ex"})}var n={status:"na",subscribed:!1};null!==e&&([["s","status"],["e","expires"]].forEach(function(t){e[t[0]]&&(n[t[1]]=e[t[0]])}),n.subscribed=-1<n.status.indexOf("sub_"));return n}},,function(t,e,n){"use strict";var r=n(2),a=n(5);e.a=function(){var t="custom",e=Object(a.a)("marketInfo.pagelevel");if(e)t=e;else{var n=Object(r.a)("pagelevel");n&&(t=n.toLowerCase())}return t}},function(t,e,n){"use strict";var o=n(5),u=n(17),s=n(15);e.a=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.referrer,n=Object(o.a)("marketInfo.allow_ads"),r=Object(s.a)(t),a=Object(s.a)(e),c=Object(u.a)(t),i=c&&void 0!==c.token;return"true"===n&&!i&&r&&a}},function(t,e,n){"use strict";e.a=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href).split("?")[1],e=!0;t&&(e=!t.match(/[&=]*[^&=]+(@|(%40))[^&=]+/));return e}},function(t,e,n){"use strict";var r=n(40),a=n(4),c=n(52),i=n(64),o=n(65),u=n(66),s=n(67),f=n(68),b=n(69),l=n(13),d=n(70),v=n(21),O=n(71),j=n(28),p=n(48),g=n(35),h={};e.a=h,Object.defineProperties(h,{ads:{value:r.a},authors:{get:function(){return Object(a.a)(Object(u.a)())}},content_source:{get:function(){return Object(a.a)(Object(i.a)())}},id:{get:function(){return Object(a.a)(Object(c.a)())}},keywords:{get:function(){return Object(a.a)(Object(s.a)())}},layout:{get:function(){return Object(a.a)(Object(f.a)())}},modification_date:{get:function(){return Object(a.a)(Object(o.a)())}},name:{get:function(){return Object(a.a)(Object(b.a)())}},publication_date:{get:function(){return Object(a.a)(Object(d.a)())}},referrer:{value:p.a},section:{value:O.a},site_name:{get:function(){return Object(v.a)("site")}},taxonomy:{value:g.a},third_parties:{value:j.a},type:{get:function(){return Object(a.a)(Object(l.a)())}}})},function(t,e,n){"use strict";e.a=function(){var n,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window.location.search.substr(1),r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:["&","="];return t.split(r[0]).forEach(function(t){var e=t.split(r[1]);""!==e[0]&&((n=n||{})[e[0]]=e[1]||!0)}),n}},function(t,e,n){"use strict";e.a=function(t){var e=window.s?window.s:void 0;return e&&e[t]?e[t]:""}},,,function(t,e,n){"use strict";var a=n(2);e.a=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"site",e={"Bellingham Herald":"The Bellingham Herald","Bellville News Democrat":"Belleville News-Democrat","Centre Daily":"Centre Daily Times","Charlotte Observer":"The Charlotte Observer","Durham Herald Sun":"The Herald-Sun","El Nuevo Herald":"el Nuevo Herald","Fresno Bee":"The Fresno Bee","Herald Online":"The Herald","Island Packet":"The Island Packet","Kansas City Star":"The Kansas City Star","Macon Telegraph":"The Telegraph",McClatchyDC:"McClatchy DC","News and Observer":"The News &amp; Observer","Sacramento Bee":"The Sacramento Bee","San Luis Obispo":"The Tribune"},n={"Myrtle Beach Online":"The Sun News"},r=Object(a.a)("sitename");return"site"===t?r in e&&(r=e[r]):"publisher"===t?(r in e&&(r=e[r]),r in n&&(r=n[r])):r=void 0,r}},,function(t,e,n){"use strict";var r=n(2);e.a=function(t){var e=Object(r.a)("taxonomy").split("|"),n="";return e.length>=t+1&&(n=e[t]),n}},function(t,e,n){"use strict";var r=n(4),a=n(21),c=n(78),i=n(79),o=n(80),u=n(81),s=n(82),f=n(83),b={};e.a=b,Object.defineProperties(b,{code:{get:function(){return Object(r.a)(Object(c.a)())}},county:{get:function(){return Object(r.a)(Object(i.a)())}},name:{get:function(){return Object(a.a)("publisher")}},phone:{get:function(){return Object(r.a)(Object(u.a)())}},state:{get:function(){return Object(r.a)(Object(s.a)())}},state_abbreviation:{get:function(){return Object(r.a)(Object(o.a)())}},zip_code:{get:function(){return Object(r.a)(Object(f.a)())}}})},function(t,e,n){"use strict";var r=n(4),a=n(29),c=n(84),i=n(46),o=n(53),u=n(54),s={};e.a=s;var f={};Object.defineProperties(f,{status:{get:function(){return Object(c.a)()}},expires:{get:function(){return Object(r.a)(Object(i.a)())}}}),Object.defineProperties(s,{id:{get:function(){return Object(o.a)()||""}},logged_in:{get:function(){return Object(r.a)(Object(u.a)())}},segments:{get:function(){return JSON.stringify(Object(a.a)())}},subscription:{value:f}})},function(t,e,n){"use strict";function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,a=!1,c=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){a=!0,c=t}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.a=function(t){var e,n=0,r=t;if("string"==typeof t){if(-1<t.indexOf(" H")){var a=s(t.split(" H"),2);r=a[0],n=a[1]}var c=s(r.split("/"),3),i=c[0],o=c[1],u=c[2];e=new Date(i,o-1,u,n)}return e}},,function(t,e,n){"use strict";var r=n(0),a=n(4),c=n(73),i=n(74),o={};e.a=o;var u={};Object.defineProperties(u,{dev:{get:function(){return Object(r.c)("third_parties.accuweather in the data layer"),""}},location_keys:{get:function(){return Object(r.c)("third_parties.accuweather in the data layer"),""}},location_strings:{get:function(){return Object(r.c)("third_parties.accuweather in the data layer"),""}}});var s={};Object.defineProperties(s,{id:{get:function(){return Object(r.c)("third_parties.chartbeat in the data layer"),""}},loaded:{get:function(){return Object(r.c)("third_parties.chartbeat in the data layer"),""}}});var f={};Object.defineProperties(f,{liveconnect_id:{get:function(){return Object(a.a)(Object(c.a)())}}});var b={};Object.defineProperties(b,{id:{get:function(){return Object(a.a)(Object(i.a)())}}}),Object.defineProperties(o,{accuweather:{value:u},chartbeat:{value:s},liveintent:{value:f},mather:{value:b}})},function(t,e,n){"use strict";var r=n(7);e.a=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"aam_segment",e=Object(r.a)(t);return e?e.replace(/segID=(\d+)[^,]*/g,"$1").split(","):[]}},,,function(t,e,n){"use strict";var r=n(5);e.a=function(){return Object(r.a)("marketInfo.adsizes")}},,,function(t,e,n){"use strict";var r=n(4),a=n(23),c=n(77),i={};e.a=i,Object.defineProperties(i,{full:{get:function(){return Object(r.a)(Object(c.a)())}},level0:{get:function(){return Object(a.a)(0)}},level1:{get:function(){return Object(a.a)(1)}},level2:{get:function(){return Object(a.a)(2)}},level3:{get:function(){return Object(a.a)(3)}},level4:{get:function(){return Object(a.a)(4)}}})},,,,function(t,e,n){"use strict";var r=n(4),a=n(58),c=n(59),i=n(60),o=n(61),u={},s={};e.a=s,Object.defineProperties(u,{name:{get:function(){return Object(r.a)(Object(o.a)())}},private:{get:function(){return Object(r.a)(Object(c.a)())}}}),Object.defineProperties(s,{client:{value:u},orientation:{get:function(){return Object(r.a)(Object(i.a)())}},type:{get:function(){return Object(r.a)(Object(a.a)())}}})},function(t,e,n){"use strict";var r=n(4),a=n(14),c=n(62),i=n(63),o=n(5);var u=function(){return Object(o.a)("prebiddingAdMap")},s=n(32),f={};e.a=f;Object.defineProperties(f,{allow:{get:function(){return Object(r.a)(Object(a.a)())}},blocked:{get:function(){return Object(r.a)(Object(c.a)())}},market_code:{get:function(){return Object(r.a)(Object(i.a)())}},prebidding_map:{get:function(){return Object(r.a)(u())}},sizes:{get:function(){return Object(r.a)(Object(s.a)())}}})},,,,,,function(t,e,n){"use strict";var r=n(11);e.a=function(){var t=Object(r.a)().expires;return parseInt(t,10)||void 0}},,function(t,e,n){"use strict";var r=n(4),a=n(75),c=n(0);var i=function(){return Object(c.c)("prevPageLevel"),""},o=n(76),u={};e.a=u;Object.defineProperties(u,{name:{get:function(){return Object(r.a)(Object(a.a)())}},type:{get:function(){return Object(r.a)(i())}},url:{get:function(){return Object(r.a)(Object(o.a)())}}})},,,,function(t,e,n){"use strict";var r=n(2),a=n(13);e.a=function(){var t;return-1===["custom","homepage","sectfront"].indexOf(Object(a.a)())&&(t=Object(r.a)("escenicId")),t}},function(t,e,n){"use strict";var r=n(7);e.a=function(){var t=Object(r.a)("MPPUser");return t?t.ucid:void 0}},function(t,e,n){"use strict";var r=n(2);e.a=function(){return Boolean(Object(r.a)("subscriptions.loggedIn"))}},,,function(t,e,n){"use strict";var r=n(39),a=n(16),c=n(24),i=n(25);e.a=function(){var t={},n=window.mi?window.mi.pageInfo:void 0;function e(){return[c.a.publication_code?c.a.publication_code:"McClatchy","homepage"===a.a.type?a.a.type:"".concat(a.a.type," ").concat(a.a.id?a.a.id:a.a.section.name),function(){var t=n?n.getConf("environment"):void 0,e="";switch(window.location.host.split(".")[0]){case"localhost":e="development";break;case"qa1":case"qa2":e="qa";break;default:e="production"}return t||e}()].join(" ")}return Object.defineProperties(t,{device:{value:r.a},page:{value:a.a},page_instance_id:{get:function(){return e()}},publisher:{value:c.a},user:{value:i.a},version:{value:"1.1.1"}}),t}},function(t,e,n){"use strict";var r=n(18);e.a=function(){var t=Object(r.a)("prop2").match(/tablet|phone|other/g);return t?t[0]:void 0}},function(t,e,n){"use strict";var r=n(18);e.a=function(){return Object(r.a)("prop2").match(/private/g)?"true":void 0}},function(t,e,n){"use strict";var r=n(18);e.a=function(){var t=Object(r.a)("prop2").match(/landscape|portrait|unsupported/g);return t?t[0]:void 0}},function(t,e,n){"use strict";var r=n(18);e.a=function(){var t=Object(r.a)("prop2").match(/in-app\sbrowser|in-fb\sbrowser/g);return t?t[0]:void 0}},function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n(2);function a(){return Object(r.a)("adblock")}},function(t,e,n){"use strict";var r=n(5);e.a=function(){return Object(r.a)("marketInfo.code")}},function(t,e,n){"use strict";var r=n(2);e.a=function(){return Object(r.a)("contentsource")}},function(t,e,n){"use strict";var r=n(2),a=n(26);e.a=function(){return Object(a.a)(Object(r.a)("moddate"))}},function(t,e,n){"use strict";var r=n(2);e.a=function(){return Object(r.a)("authors")}},function(t,e,n){"use strict";var r=n(2);e.a=function(){return Object(r.a)("keywords")}},function(t,e,n){"use strict";var r=n(2);e.a=function(){return Object(r.a)("escenicLayout")}},function(t,e,n){"use strict";var r=n(2);e.a=function(){return Object(r.a)("pagename")}},function(t,e,n){"use strict";var r=n(2),a=n(26);e.a=function(){return Object(a.a)(Object(r.a)("pubdate"))}},function(t,e,n){"use strict";var r=n(4),a=n(72),c={};e.a=c,Object.defineProperties(c,{name:{get:function(){return Object(r.a)(Object(a.a)())}}})},function(t,e,n){"use strict";var r=n(2);e.a=function(){return Object(r.a)("channel")}},function(t,e,n){"use strict";var r=n(5);e.a=function(){return Object(r.a)("marketInfo.LiveConnectTag")}},function(t,e,n){"use strict";var r=n(2);e.a=function(){return Object(r.a)("listenerMarket")}},function(t,e,n){"use strict";var r=n(18);e.a=function(){return Object(r.a)("eVar12")}},function(t,e,n){"use strict";var r=n(2);e.a=function(){return Object(r.a)("referrer")}},function(t,e,n){"use strict";var r=n(2);e.a=function(){return Object(r.a)("taxonomy")}},function(t,e,n){"use strict";var r=n(2);e.a=function(){return Object(r.a)("bizunit")}},function(t,e,n){"use strict";var r=n(5);e.a=function(){return Object(r.a)("marketInfo.county")}},function(t,e,n){"use strict";var r=n(5);e.a=function(){return Object(r.a)("marketInfo.state_abbreviation")}},function(t,e,n){"use strict";var r=n(5);e.a=function(){return Object(r.a)("marketInfo.phone")}},function(t,e,n){"use strict";var r=n(5);e.a=function(){return Object(r.a)("marketInfo.state")}},function(t,e,n){"use strict";var r=n(5);e.a=function(){return Object(r.a)("marketInfo.zipcode")}},function(t,e,n){"use strict";var r=n(11);e.a=function(){return Object(r.a)().status}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(57);Object.defineProperty(window,"digitalData",{value:Object(r.a)()}),e.default=window.digitalData}]);
};

mistats.windowEvent = function (pName)
{
   var evt;

   try
   {
      window.dispatchEvent((new Event(pName)));
   } catch (evtErr)
   {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(pName, false, false, undefined);
      window.dispatchEvent(evt);
   }
};

mistats.hasCore = (function ()
{
   var i;
   var objs;

   objs = document.getElementsByTagName('script');
   for (i = 0; i < objs.length; i++)
      if ((objs[i].src || '').match(/static\/yozons-lib\/core\.js/))
         return true;

   return false;
})();

mistats.setCookie = function (pKey, pVal, pExp)
{
   var cd;
   var exp;

   if (!pKey)
      return;

   cd = (location.hostname || '').split('.');
   while (cd.length > 2)
      cd.shift();
   cd = 'domain=' + cd.join('.');

   exp = new Date();
   exp.setTime(exp.getTime() + (pVal ? (pExp || 63072000000) : -60000));
   exp = 'expires=' + exp.toUTCString();

   document.cookie = [encodeURIComponent(pKey) + '=' + encodeURIComponent(pVal || ''), exp, 'path=/', cd].join('; ');
};

mistats.isEscenic = mistats.isEscenic || function ()
{
   return mistats.hasCore || !!(location.hostname || '').match(/^qa\d+\./) || !!(window.pageInfo && (location.hostname || '').match(/^www\./) && (mistats.pagelevel || '').match(/Home|Section|Story|Gallery|Video/));
}();

mistats.sendToSubOpts = function (pObj, pThen)
{
   var gads;
   var hn;
   var info;
   var req;
   var xr;

   hn = ((location.hostname || '').match(/(www|account|checkout|qa\d)\.(bnd|bellinghamherald|sunherald|idahostatesman|bradenton|charlotteobserver|thestate|ledger-enquirer|elnuevoherald|fresnobee|star-telegram|islandpacket|kansascity|kentucky|macon|mercedsunstar|miamiherald|modbee|myrtlebeachonline|theolympian|newsobserver|heraldsun|heraldonline|sacbee|sanluisobispo|centredaily|thenewstribune|tri-cityherald|kansas|mcclatchydc)\.com/) || [''])[0];

   if (!(hn && pObj && pObj.name))
      return false;

   !pObj.endPoint && (pObj.endPoint = 'data');

   info = 'null';
   if (pObj.info)
      try
      {
         info = JSON.stringify(pObj.info);
      } catch (err)
      {
      }

   req = ['https://' + 'pu' + 'ba' + 'ds.g.do' + 'ubl' + 'ec' + 'lic' + 'k.net/subopt/' + pObj.endPoint + '?' + pObj.name + '=' + encodeURIComponent((location.hostname || '').replace(/^(www|account|checkout)\.|qa\d\./gi, '') + (pObj.value ? (':' + pObj.value) : ''))];
   pObj.type && (req[req.length] = 'type=' + encodeURIComponent(pObj.type));
   document.referrer && (req[req.length] = 'ref=' + encodeURIComponent(document.referrer));
   req = req.concat(['extrainfo=' + encodeURIComponent(info), 'u_tz=' + (new Date()).getTimezoneOffset(), 'v=1']);
   gads = (decodeURIComponent(document.cookie || '').match(/__gads=[^;]+/) || [''])[0].substr(7);
   gads && (req[req.length] = 'cookie=' + encodeURIComponent(gads));
   req = req.concat(['cdm=' + location.hostname, 'c=' + Math.round(Math.random() * 1000000)]);

   xr = new XMLHttpRequest();
   xr.open('get', req.join('&'));
   if (typeof pThen === 'function')
   {
      xr.onreadystatechange = function ()
      {
         if (xr.readyState != 4)
            return;
         pThen(xr.response, xr.status);
      };
      xr.onerror = function ()
      {
         pThen(xr.response, '-1');
      };
   }
   xr.send(null);

   return true;
};

mistats.Propensity = function ()
{
   var gps;
   var waiting;

   function isWaiting()
   {
      return waiting;
   };

   function done()
   {
      waiting = false;
      mistats.propScore = gps;
      gps && !isNaN(gps) && (mistats.setCookie('mi_gps', gps, 1800000));
      console.log('mistats_gpscore: ' + mistats.propScore);
      mistats.windowEvent('mistats_propensity');
   };

   function getScore()
   {
      return gps;
   };

   function fetch()
   {
      if (!mistats.sendToSubOpts(
      {
         name:'products',
         type:'general',
         endPoint:'pts'
      }, function (pResp, pStat)
      {
         var data;
         if (!pResp || pStat != 200 || pStat === '-1')
         {
            gps = 'request error';
            return done();
         }

         try
         {
            data = JSON.parse(pResp);
         } catch (err)
         {
            gps = 'parsing error';
            return done();
         }

         if (data && data.header && data.header.ok && data.scores && data.scores.length)
            for (i = 0; !gps && i < data.scores.length; i++)
               gps = data.scores[i].score + '';

         gps = gps || 'na';
         done();
      }))
      {
         gps = 'site-omitted';
         done();
      }
   };

   function init()
   {
      waiting = true;

      mistats.propScore = ((document.cookie || '').match(/mi_gps=-?\d+/) || [''])[0].substr(7).replace(/mi_gps=/g, '');

      gps = mistats.propScore;
      gps && parseInt(gps) < 101 && (done());
      fetch();
   };

   init();

   this.getScore = getScore;
   this.isWaiting = isWaiting;
};

mistats.propensity = new mistats.Propensity();

mistats.SubData = function ()
{
   var digiScore;
   var expires;
   var miSub;
   var mppId;
   var now;
   var prntScore;
   var rate;
   var service;
   var simpleStatus;
   var status;
   var statuses;
   var suboptsSent;
   var table;
   var timer;
   var titles;
   var waiting;

   function formatDate(pDate)
   {
      var date;
      var tmp;

      pDate && (date = [pDate.getFullYear()]);
      if (isNaN(date[0]))
         return '';
      tmp = (parseInt(pDate.getMonth()) + 1) + '';
      tmp.length === 1 && (tmp = '0' + tmp);
      date[1] = tmp;
      tmp = parseInt(pDate.getDate()) + '';
      tmp.length === 1 && (tmp = '0' + tmp);
      date[2] = tmp;

      return date.join('-');
   };

   function done()
   {
      var gst;
      var obj;
      var sdst;
      var sdsv;

      timer && (clearTimeout(timer));
      console.log('mistats_subdata ready');
      waiting = false;
      mistats.windowEvent('mistats_subdata');

      if (suboptsSent || !mistats.isEscenic || !mistats.sendToSubOpts)
         return;

      try
      {
         sdst = getStatus() || '';
         sdsv = getService() || '';
         if (!sdst)
            gst = 'unknown';
         else if (sdst.match(/Active|Failure Retry/i))
            gst = 'subscriber';
         else if (sdst === 'Expired')
            gst = 'past_subscriber';
         else
            gst = 'non_subscriber';

         obj =
         {
            name: 'states',
            value: gst
         };

         sdsv && (obj.info = {'product': [sdsv.match(/sports/i) ? 'sports' : 'basic']});
         suboptsSent = true;
         mistats.sendToSubOpts(obj);
      } catch (err)
      {
      }
   };

   function parse(pObj, pFresh)
   {
      var stale;
      var tmp;

      pObj = pObj || {};

      if (miSub)
      {
         miSub.indexOf('s:sub_') === 0 && (pObj.st = 1);
         pObj.xp = parseInt((miSub.match(/e:\d+/) || [''])[0].substr(2) || (Date.now() + 86400000));
      }

      tmp = parseInt(pObj.st || 0) - 1;
      status = !isNaN(tmp) && statuses[tmp] ? statuses[tmp] : '';
      pObj.xp > 0 && pObj.xp <= now && !status && (status = 'Expired By Date');

      if (!status)
         simpleStatus = 'Unknown';
      else if (status === 'Active' || (status.indexOf('Expired')  !== 0 && pObj.xp < now))
         simpleStatus = 'Active';
      else
         simpleStatus = 'Expired';

//      if (((pObj.xp <= now || status.match(/Expired|Pending|Failure Retry/)) && pObj.ts > now + 86400000) || pObj.ts > now + 604800000)
      if (!pFresh && (((pObj.xp <= now || status.match(/Expired|Pending|Failure Retry|Cancel/)) && pObj.ts + 3600000 < now) || pObj.ts + 1800000 < now))
      {
         stale = true;
         getInfo();
      }

      try
      {
         service = atob(pObj.sv);
      } catch (err)
      {
         service = '';
      };
      expires = formatDate(new Date(pObj.xp));
      rate = pObj.rt || 'na';
      digiScore = pObj.ds || 'na';
      prntScore = pObj.ps || 'na';

      done();

      try
      {
         tmp = btoa(JSON.stringify(pObj));
      } catch (err)
      {
         tmp = null;
      }

      if (!tmp || stale)
         return;

      window.localStorage && (window.localStorage.setItem('mistats_mppinf', tmp));
      mistats.setCookie('mi_mppinf', tmp, 1800000);
   };

   function callback(pObj)
   {
      var id;
      var idx;
      var obj;
      var rev;
      var svcs;
      var val;

      if (!(pObj && (pObj.table || pObj.titles)))
         return;

      !table && pObj.table && (table = pObj.table);
      !titles && pObj.titles && (titles = pObj.titles);

      if (!(table && titles))
         return;

      try
      {
         rev = titles.split('');
         rev.reverse();
         svcs = JSON.parse(atob(rev.join('')));
      } catch (err)
      {
         svcs = [];
      };

      id = parseInt(mppId);

      try
      {
         idx = id - parseInt(table.x, 16);
      } catch (err)
      {
      }

      if (!idx || isNaN(idx))
         return done();

      table.v && (val = table.v[idx]);

      if (!Array.isArray(val))
         return done();

      obj =
      {
         ds: val.length === 6 ? val[4] : 'na',
         id: id,
         ps: val.length === 6 ? val[5] : 'na',
         rt: val.length > 3 ? val[3] : 'na',
         st: val[0] || 0,
         sv: '',
         xp: val[1] * 3600000,
         ts: now
      };

      try
      {
         svcs[val[2]] && (obj.sv = btoa(svcs[val[2]]));
      } catch (err)
      {
      }

      parse(obj, true);
   };

   function isWaiting()
   {
      return !!waiting;
   };

   function getExpires()
   {
      return expires;
   }

   function getService()
   {
      return service || (miSub === 's:no' ? 'Registered User' : '');
   };

   function getSimpleStatus()
   {
      return simpleStatus || (miSub === 's:no' ? 'Registered' : 'Unknown');
   };

   function getStatus()
   {
      return status || (miSub === 's:no' ? 'Registered' : '');
   };

   function getRate()
   {
      return rate;
   };

   function getDigiScore()
   {
      return digiScore;
   };

   function getPrntScore()
   {
      return prntScore;
   };

   function getInfo()
   {
      mistats.jsLoader(mistats.mediaHost + '/mistats/mccaud/table_' + Math.floor(mppId / 5000).toString(16) + '.js?cb=' + Math.round(Date.now() / 900000));
      mistats.jsLoader(mistats.mediaHost + '/mistats/mccaud/titles.js?cb=' + Math.round(Date.now() / 900000));
      timer = setTimeout(function ()
      {
         waiting === true && (done());
      }, 5000);

   };

   function init()
   {
      var mppInfo;

      expires = '';
      service = '';
      status = '';

      mppId = decodeURIComponent(document.cookie || '').match(/MPPAccountId=\d+/);
      !mppId && (mppId = decodeURIComponent(document.cookie || '').match(/mi_mppaid=\d+/));

      if (!mppId)
         return done();

      statuses = JSON.parse(atob('WyJBY3RpdmUiLCJFeHBpcmVkIiwiUGVuZGluZyIsIkZhaWx1cmUgUmV0cnkiLCJDYW5jZWxsZWQgQnkgQXV0b3JlbmV3IiwiQ2FuY2VsbGVkIEJ5IFN1cHBvcnQiLCJDYW5jZWxsZWQgQnkgVXNlciJd'));

      mppId = mppId[0].match(/\d+/)[0];
      mistats.setCookie('mi_mppaid', mppId);

//      window.localStorage && (mppInfo = window.localStorage.getItem('mistats_mppinf'));

      if (!mppInfo)
      {
         mppInfo = decodeURIComponent(document.cookie || '').match(/mi_mppinf=[^;]+/);
         mppInfo && (mppInfo = mppInfo[0].substr(10));
      }

      if (mppInfo)
         try
         {
            mppInfo = JSON.parse(atob(mppInfo));
         } catch (infErr)
         {
            mppInfo = null;
         };

      now = Date.now();
      waiting = true;

      if (mppId == 5 && mppInfo && mppInfo.id && mppInfo.id != 5)
      {
         mppId = mppInfo.id;
         mistats.setCookie('mi_mppaid', mppId);
      }

      miSub = (decodeURIComponent(document.cookie || '').match(/mi_sub=s:(no|na|ex|sub_[0-z]+)(&e:\d{13,})?/) || [''])[0].substr(7);

      if (mppInfo && mppInfo.id == mppId)
         parse(mppInfo);
      else
         getInfo();
   };

   init();

   this.callback        = callback;
   this.getDigiScore    = getDigiScore;
   this.getExpires      = getExpires;
   this.getPrntScore    = getPrntScore;
   this.getRate         = getRate;
   this.getService      = getService;
   this.getSimpleStatus = getSimpleStatus;
   this.getStatus       = getStatus;
   this.isWaiting       = isWaiting;
};

mistats.adobe = mistats.adobe ||
{
   queue: [],
   processing: false,
   ready: false,
   mcId: '3B6E35F15A82BBB00A495D91@AdobeOrg',

   midHash: function (pVal)
   {
      var h;
      var i;

      function mmHash3(e,t){var a,c,h,r,o,d,A,C;for(a=3&e.length,c=e.length-a,h=t,o=3432918353,d=461845907,C=0;C<c;)A=255&e.charCodeAt(C)|(255&e.charCodeAt(++C))<<8|(255&e.charCodeAt(++C))<<16|(255&e.charCodeAt(++C))<<24,++C,h=27492+(65535&(r=5*(65535&(h=(h^=A=(65535&(A=(A=(65535&A)*o+(((A>>>16)*o&65535)<<16)&4294967295)<<15|A>>>17))*d+(((A>>>16)*d&65535)<<16)&4294967295)<<13|h>>>19))+((5*(h>>>16)&65535)<<16)&4294967295))+((58964+(r>>>16)&65535)<<16);switch(A=0,a){case 3:A^=(255&e.charCodeAt(C+2))<<16;case 2:A^=(255&e.charCodeAt(C+1))<<8;case 1:h^=A=(65535&(A=(A=(65535&(A^=255&e.charCodeAt(C)))*o+(((A>>>16)*o&65535)<<16)&4294967295)<<15|A>>>17))*d+(((A>>>16)*d&65535)<<16)&4294967295}return h^=e.length,h=2246822507*(65535&(h^=h>>>16))+((2246822507*(h>>>16)&65535)<<16)&4294967295,h=3266489909*(65535&(h^=h>>>13))+((3266489909*(h>>>16)&65535)<<16)&4294967295,(h^=h>>>16)>>>0}
      h = [];
      for (i = 0; i < 5; i++)
         h[h.length] = mmHash3(pVal, i);
      return h.join('').substr(0, 38);
   },

   amcvInit: function ()
   {
      var a;
      var b;

      if (!window.localStorage)
         return false;
      try
      {
         a = decodeURIComponent(window.localStorage.getItem('mistats_amcv') || '');
      } catch (err)
      {
         return false;
      }

      if ((a || '').match(/MCMID\|\d{38}\|/))
         mistats.setCookie('AMCV_3B6E35F15A82BBB00A495D91@AdobeOrg', a);
      else
         a = null;

      b = (decodeURIComponent(document.cookie || '').match(/AMCV_3B6E35F15A82BBB00A495D91@AdobeOrg=[^;]+/) || [''])[0].replace(/[^=]+=/, '');
      !b.match(/MCMID\|\d{38}\|/) && (b = null);

      try
      {
         (a || b) && (window.localStorage.setItem('mistats_amcv', b || a));
      } catch (err)
      {
         return false;
      }

      return !!(a || b);
   }(),

   adbmc: function ()
   {
      var a;
      a = decodeURIComponent(location.search || '').match(/[\?&]adobe_mc=[^&#]+/),
      a && (mistats.setCookie('mi_mwvs', '1', 1800000));
      return a;
   }(),

   target:
   {
      loaded: false,
      loading: false,

      isWaiting: function ()
      {
         mistats.adobe.target.loaded = !!(window.adobe && window.adobe.target);
         if (mistats.targetLib && !(mistats.atResponse || mistats.adobe.target.loaded))
            return true;

         if (!mistats.targetLib || mistats.adobe.target.loaded || (window.adobe && window.adobe.target))
            return false;
i/*
         if (mistats.targetLib && !mistats.adobe.target.loaded)
            return true;

         if (!mistats.targetLib || mistats.adobe.target.loaded || (window.adobe && window.adobe.target))
            return false;
*/
      },

      mbox: function (pEvent)
      {
         var devType;
         var mboxParams;
         var pso;
         var subStatus;

         if (pEvent)
         {
            if (pEvent.type === 'mistats_atloaded')
               window.removeEventListener('mistats_atloaded', mistats.adobe.target.mbox, false);
            else if (pEvent.type === 'mistats_propensity')
               window.removeEventListener('mistats_propensity', mistats.adobe.target.mbox, false);
         }

         if (!mistats.adobe.target.loaded)
            return window.addEventListener('mistats_atloaded', mistats.adobe.target.mbox, false);

//         if (mistats.propensity.isWaiting())
//            return window.addEventListener('mistats_propensity', mistats.adobe.target.mbox, false);

         mistats.adobe.target.loaded = true;

         devType = function ()
         {
            var pw;
            var ua;

            ua = (navigator.userAgent || '').toLowerCase();
            pw = Math.min(screen.width, screen.height) / (window.devicePixelRatio && !isNaN(window.devicePixelRatio) ? parseFloat(window.devicePixelRatio) : 1);

            if ((navigator.platform || ua).match(/ipad/i)
             || ((navigator.platform || '').match(/macintel/i) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2)
             || (ua.match(/windows\snt\s/i) && !ua.match(/windows\sphone/i) && ua.match(/\sarm;/i))
             || (ua.match(/android/i) && pw > 800)
             || ua.match(/android\s3/i)
             || ua.match(/rim\stablet/i)
             || ua.match(/silk/i))
               return 'tablet';

            if ((navigator.platform || ua).match(/iphone|ipod/i)
             || (ua.match(/android/i) && !ua.match(/android\s3/i) && pw <= 800)
             || (ua.match(/blackberry/i) && ua.match(/mobile/i))
             || ua.match(/windows\sphone/i)
             || (pw && pw <= 320))
               return 'phone';

            return 'other';
         }();

         pso = (document.cookie || '').match(/mi_pso=\d+/);
         subStatus = window.digitalData && window.digitalData.user && window.digitalData.user.subscription && window.digitalData.user.subscription.status ? window.digitalData.user.subscription.status : '';
         mboxParams =
         {
            'pageName': mistats.pagename,
            'pageType': mistats.pagelevel,
            'keywords': (mistats.keywords || '').replace(/,+/g, ',').replace(/^,/, '').replace(/,$/, '').replace(/\s+/g, ',').toLowerCase(),
            'loggedIn': ((document.cookie || '').match(/MPPUser=/) ? 'yes' : 'no'),
            'fromApp': (mistats.adobe.adbmc || (document.cookie || '').match(/mi_mwvs=/)) ? 'yes' : 'no',
            'devType': devType,
            'profile.subscriptionStatus': subStatus,
            'profile.propScore': (pso ? pso[0].substr(7) : (mistats.propScore || '')),
            'profile.rtp': window.GoogleSWG && window.GoogleSWG.isReadyToPay ? '1' : '',
            'user.categoryId': mistats.channel
         };
         if (mistats.subData)
         {
            mboxParams['profile.subdataStatus'] = mistats.subData.getStatus();
            mboxParams['subdataStatus'] = mboxParams['profile.subdataStatus'];
         }

         window.adobe && window.adobe.target && (window.adobe.target.getOffer(
         {
            mbox: 'target-global-mbox',
            params: mboxParams,
            success: function (pOffer)
            {
               window.adobe.target.applyOffer(
               {
                  mbox: 'target-global-mbox',
                  offer: pOffer
               });
            },
            error: function(pStatus, pError)
            {
               console.log('adobe.target error:', pStatus, pError);
            }
         }));
      },

      init: function ()
      {
         if (mistats.adobe.target.loaded || (window.adobe && window.adobe.target))
         {
            mistats.adobe.target.loaded = true;
            return;
         }

         mistats.adobe.target.loading = true;
         mistats.jsLoader((mistats.targetLib || '').length ? mistats.targetLib : (mistats.mediaHost + '/mistats/at.js'), false, function ()
         {
            mistats.adobe.target.loaded = true;
         });
      }
   },

   validHost: function ()
   {
      var hostList;
      var i;

      if (mistats.hasCore)
         return true;

      if ((location.pathname || '').match(/\/video-embed/))
         return false;

      if (!mistats.isEscenic && (location.hostname || '').indexOf('www') === 0)
         return false;

      hostList =
      [
         'www.bnd.com',
         'www.bellinghamherald.com',
         'www.sunherald.com',
         'www.idahostatesman.com',
         'www.bradenton.com',
         'www.charlotteobserver.com',
         'www.thestate.com',
         'www.ledger-enquirer.com',
         'www.elnuevoherald.com',
         'www.fresnobee.com',
         'www.star-telegram.com',
         'www.islandpacket.com',
         'www.kansascity.com',
         'www.kentucky.com',
         'www.macon.com',
         'www.mercedsunstar.com',
         'www.miamiherald.com',
         'www.modbee.com',
         'www.myrtlebeachonline.com',
         'www.theolympian.com',
         'www.newsobserver.com',
         'www.heraldsun.com',
         'www.heraldonline.com',
         'www.sacbee.com',
         'www.sanluisobispo.com',
         'www.centredaily.com',
         'www.thenewstribune.com',
         'www.tri-cityherald.com',
         'www.kansas.com',
         'www.mcclatchydc.com',
         'www.flkeysnews.com',
         'www.vidaenelvalle.com',
         'www.sierrastar.com',
         'www.losbanosenterprise.com',
         /^qa\d+\.[^\.]+\.com$/
      ];

      for (i = 0; i < hostList.length; i++)
         if ((location.hostname || '').toLowerCase().match(hostList[i]))
            return true;

      return false;
   }(),

   perfMark: function(pMsg)
   {
      try 
      {
         window.performance && window.performance.mark && (window.performance.mark(pMsg));
      } catch (perfErr)
      {
      }
   },

   setCookie: mistats.setCookie,

   hasECID: function ()
   {
      return !mistats.adobe.adbmc && !!decodeURIComponent(document.cookie || '').match(new RegExp('AMCV_' + mistats.adobe.mcId + '=[^;]*MCMID\\|[^;]+'));
   },

   ecidEnd: function (pObj)
   {
      mistats.adobe.adbmc && history.replaceState && (history.replaceState('', document.title, location.pathname + (location.search || '').replace(/&?adobe_mc=[^&]+/g, '').replace(/^\?+$/, '') + (location.hash || '')));
      pObj && pObj.reason && mistats.adobe.queue.length && (mistats[pObj.reason] = true);
      mistats.adobe.ready = true;
      mistats.adobe.processQueue(true);
      mistats.adobe.perfMark('End VisitorAPI');
   },

   getECID: function ()
   {
      var aid;
      var mcc;
      var opts;
      var ri;

      mistats.adobe.perfMark('Start VisitorAPI');
      mistats.adobe.hasECID() && (mistats.adobe.perfMark('Visitor has ECID already'));

      if ((location.pathname || '').match(/\/amp.html/) && window != top)
         ri = ((location.search || '').match(/&ri=[^&]+/) || [''])[0].substr(4) || '';
      else if ((location.hostname || '').match(/account\.|checkout\./))
         ri = (((location.search || '').match(/(\?|&)rid=[^&]+/) || [''])[0].substr(5) || (((location.pathname || '').match(/^\/amp\/signin\/[^\?#]+/) || ['']))[0].substr(12)) || '';

      var e=function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(){return{callbacks:{},add:function(e,t){this.callbacks[e]=this.callbacks[e]||[];var n=this.callbacks[e].push(t)-1,i=this;return function(){i.callbacks[e].splice(n,1)}},execute:function(e,t){if(this.callbacks[e]){t=void 0===t?[]:t,t=t instanceof Array?t:[t];try{for(;this.callbacks[e].length;){var n=this.callbacks[e].shift();"function"==typeof n?n.apply(null,t):n instanceof Array&&n[1].apply(n[0],t)}delete this.callbacks[e]}catch(e){}}},executeAll:function(e,t){(t||e&&!j.isObjectEmpty(e))&&Object.keys(this.callbacks).forEach(function(t){var n=void 0!==e[t]?e[t]:"";this.execute(t,n)},this)},hasCallbacks:function(){return Boolean(Object.keys(this.callbacks).length)}}}function i(e,t,n){var i=null==e?void 0:e[t];return void 0===i?n:i}function r(e){for(var t=/^\d+$/,n=0,i=e.length;n<i;n++)if(!t.test(e[n]))return!1;return!0}function a(e,t){for(;e.length<t.length;)e.push("0");for(;t.length<e.length;)t.push("0")}function o(e,t){for(var n=0;n<e.length;n++){var i=parseInt(e[n],10),r=parseInt(t[n],10);if(i>r)return 1;if(r>i)return-1}return 0}function s(e,t){if(e===t)return 0;var n=e.toString().split("."),i=t.toString().split(".");return r(n.concat(i))?(a(n,i),o(n,i)):NaN}function l(e){return e===Object(e)&&0===Object.keys(e).length}function c(e){return"function"==typeof e||e instanceof Array&&e.length}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};this.log=_e("log",e,t),this.warn=_e("warn",e,t),this.error=_e("error",e,t)}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isEnabled,n=e.cookieName,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.cookies;return t&&n&&r?{remove:function(){r.remove(n)},get:function(){var e=r.get(n),t={};try{t=JSON.parse(e)}catch(e){t={}}return t},set:function(e,t){t=t||{},r.set(n,JSON.stringify(e),{domain:t.optInCookieDomain||"",cookieLifetime:t.optInStorageExpiry||3419e4,expires:!0})}}:{get:Le,set:Le,remove:Le}}function f(e){this.name=this.constructor.name,this.message=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack}function p(){function e(e,t){var n=Se(e);return n.length?n.every(function(e){return!!t[e]}):De(t)}function t(){M(b),O(ce.COMPLETE),_(h.status,h.permissions),m.set(h.permissions,{optInCookieDomain:l,optInStorageExpiry:c}),C.execute(xe)}function n(e){return function(n,i){if(!Ae(n))throw new Error("[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.");return O(ce.CHANGED),Object.assign(b,ye(Se(n),e)),i||t(),h}}var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=i.doesOptInApply,a=i.previousPermissions,o=i.preOptInApprovals,s=i.isOptInStorageEnabled,l=i.optInCookieDomain,c=i.optInStorageExpiry,u=i.isIabContext,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},p=f.cookies,g=Pe(a);Re(g,"Invalid `previousPermissions`!"),Re(o,"Invalid `preOptInApprovals`!");var m=d({isEnabled:!!s,cookieName:"adobeujs-optin"},{cookies:p}),h=this,_=le(h),C=ge(),I=Me(g),v=Me(o),S=m.get(),D={},A=function(e,t){return ke(e)||t&&ke(t)?ce.COMPLETE:ce.PENDING}(I,S),y=function(e,t,n){var i=ye(pe,!r);return r?Object.assign({},i,e,t,n):i}(v,I,S),b=be(y),O=function(e){return A=e},M=function(e){return y=e};h.deny=n(!1),h.approve=n(!0),h.denyAll=h.deny.bind(h,pe),h.approveAll=h.approve.bind(h,pe),h.isApproved=function(t){return e(t,h.permissions)},h.isPreApproved=function(t){return e(t,v)},h.fetchPermissions=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?h.on(ce.COMPLETE,e):Le;return!r||r&&h.isComplete||!!o?e(h.permissions):t||C.add(xe,function(){return e(h.permissions)}),n},h.complete=function(){h.status===ce.CHANGED&&t()},h.registerPlugin=function(e){if(!e||!e.name||"function"!=typeof e.onRegister)throw new Error(je);D[e.name]||(D[e.name]=e,e.onRegister.call(e,h))},h.execute=Ne(D),Object.defineProperties(h,{permissions:{get:function(){return y}},status:{get:function(){return A}},Categories:{get:function(){return ue}},doesOptInApply:{get:function(){return!!r}},isPending:{get:function(){return h.status===ce.PENDING}},isComplete:{get:function(){return h.status===ce.COMPLETE}},__plugins:{get:function(){return Object.keys(D)}},isIabContext:{get:function(){return u}}})}function g(e,t){function n(){r=null,e.call(e,new f("The call took longer than you wanted!"))}function i(){r&&(clearTimeout(r),e.apply(e,arguments))}if(void 0===t)return e;var r=setTimeout(n,t);return i}function m(){if(window.__cmp)return window.__cmp;var e=window;if(e===window.top)return void Ie.error("__cmp not found");for(var t;!t;){e=e.parent;try{e.frames.__cmpLocator&&(t=e)}catch(e){}if(e===window.top)break}if(!t)return void Ie.error("__cmp not found");var n={};return window.__cmp=function(e,i,r){var a=Math.random()+"",o={__cmpCall:{command:e,parameter:i,callId:a}};n[a]=r,t.postMessage(o,"*")},window.addEventListener("message",function(e){var t=e.data;if("string"==typeof t)try{t=JSON.parse(e.data)}catch(e){}if(t.__cmpReturn){var i=t.__cmpReturn;n[i.callId]&&(n[i.callId](i.returnValue,i.success),delete n[i.callId])}},!1),window.__cmp}function h(){var e=this;e.name="iabPlugin",e.version="0.0.1";var t=ge(),n={allConsentData:null},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n[e]=t};e.fetchConsentData=function(e){var t=e.callback,n=e.timeout,i=g(t,n);r({callback:i})},e.isApproved=function(e){var t=e.callback,i=e.category,a=e.timeout;if(n.allConsentData)return t(null,s(i,n.allConsentData.vendorConsents,n.allConsentData.purposeConsents));var o=g(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.vendorConsents,a=n.purposeConsents;t(e,s(i,r,a))},a);r({category:i,callback:o})},e.onRegister=function(t){var n=Object.keys(de),i=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.purposeConsents,a=i.gdprApplies,o=i.vendorConsents;!e&&a&&o&&r&&(n.forEach(function(e){var n=s(e,o,r);t[n?"approve":"deny"](e,!0)}),t.complete())};e.fetchConsentData({callback:i})};var r=function(e){var r=e.callback;if(n.allConsentData)return r(null,n.allConsentData);t.add("FETCH_CONSENT_DATA",r);var s={};o(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.purposeConsents,o=e.gdprApplies,l=e.vendorConsents;(arguments.length>1?arguments[1]:void 0)&&(s={purposeConsents:r,gdprApplies:o,vendorConsents:l},i("allConsentData",s)),a(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(arguments.length>1?arguments[1]:void 0)&&(s.consentString=e.consentData,i("allConsentData",s)),t.execute("FETCH_CONSENT_DATA",[null,n.allConsentData])})})},a=function(e){var t=m();t&&t("getConsentData",null,e)},o=function(e){var t=Fe(de),n=m();n&&n("getVendorConsents",t,e)},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=!!t[de[e]];return i&&function(){return fe[e].every(function(e){return n[e]})}()}}var _="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};Object.assign=Object.assign||function(e){for(var t,n,i=1;i<arguments.length;++i){n=arguments[i];for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e};var C,I,v={HANDSHAKE:"HANDSHAKE",GETSTATE:"GETSTATE",PARENTSTATE:"PARENTSTATE"},S={MCMID:"MCMID",MCAID:"MCAID",MCAAMB:"MCAAMB",MCAAMLH:"MCAAMLH",MCOPTOUT:"MCOPTOUT",CUSTOMERIDS:"CUSTOMERIDS"},D={MCMID:"getMarketingCloudVisitorID",MCAID:"getAnalyticsVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"isOptedOut",ALLFIELDS:"getVisitorValues"},A={CUSTOMERIDS:"getCustomerIDs"},y={MCMID:"getMarketingCloudVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"isOptedOut",MCAID:"getAnalyticsVisitorID",CUSTOMERIDS:"getCustomerIDs",ALLFIELDS:"getVisitorValues"},b={MC:"MCMID",A:"MCAID",AAM:"MCAAMB"},O={MCMID:"MCMID",MCOPTOUT:"MCOPTOUT",MCAID:"MCAID",MCAAMLH:"MCAAMLH",MCAAMB:"MCAAMB"},M={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2},k={GLOBAL:"global"},E={MESSAGES:v,STATE_KEYS_MAP:S,ASYNC_API_MAP:D,SYNC_API_MAP:A,ALL_APIS:y,FIELDGROUP_TO_FIELD:b,FIELDS:O,AUTH_STATE:M,OPT_OUT:k},T=E.STATE_KEYS_MAP,L=function(e){function t(){}function n(t,n){var i=this;return function(){var r=e(0,t),a={};return a[t]=r,i.setStateAndPublish(a),n(r),r}}this.getMarketingCloudVisitorID=function(e){e=e||t;var i=this.findField(T.MCMID,e),r=n.call(this,T.MCMID,e);return void 0!==i?i:r()},this.getVisitorValues=function(e){this.getMarketingCloudVisitorID(function(t){e({MCMID:t})})}},P=E.MESSAGES,R=E.ASYNC_API_MAP,w=E.SYNC_API_MAP,F=function(){function e(){}function t(e,t){var n=this;return function(){return n.callbackRegistry.add(e,t),n.messageParent(P.GETSTATE),""}}function n(n){this[R[n]]=function(i){i=i||e;var r=this.findField(n,i),a=t.call(this,n,i);return void 0!==r?r:a()}}function i(t){this[w[t]]=function(){return this.findField(t,e)||{}}}Object.keys(R).forEach(n,this),Object.keys(w).forEach(i,this)},N=E.ASYNC_API_MAP,x=function(){Object.keys(N).forEach(function(e){this[N[e]]=function(t){this.callbackRegistry.add(e,t)}},this)},j=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(t,n){n.isObjectEmpty=function(e){return e===Object(e)&&0===Object.keys(e).length},n.isValueEmpty=function(e){return""===e||n.isObjectEmpty(e)},n.getIeVersion=function(){if(document.documentMode)return document.documentMode;for(var e=7;e>4;e--){var t=document.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e;t=null}return null},n.encodeAndBuildRequest=function(e,t){return e.map(encodeURIComponent).join(t)},n.isObject=function(t){return null!==t&&"object"===e(t)&&!1===Array.isArray(t)},n.defineGlobalNamespace=function(){return window.adobe=n.isObject(window.adobe)?window.adobe:{},window.adobe},n.pluck=function(e,t){return t.reduce(function(t,n){return e[n]&&(t[n]=e[n]),t},Object.create(null))},n.parseOptOut=function(e,t,n){t||(t=n,e.d_optout&&e.d_optout instanceof Array&&(t=e.d_optout.join(",")));var i=parseInt(e.d_ottl,10);return isNaN(i)&&(i=7200),{optOut:t,d_ottl:i}},n.normalizeBoolean=function(e){var t=e;return"true"===e?t=!0:"false"===e&&(t=!1),t}}),V=(j.isObjectEmpty,j.isValueEmpty,j.getIeVersion,j.encodeAndBuildRequest,j.isObject,j.defineGlobalNamespace,j.pluck,j.parseOptOut,j.normalizeBoolean,n),H=E.MESSAGES,U={0:"prefix",1:"orgID",2:"state"},B=function(e,t){this.parse=function(e){try{var t={};return e.data.split("|").forEach(function(e,n){if(void 0!==e){t[U[n]]=2!==n?e:JSON.parse(e)}}),t}catch(e){}},this.isInvalid=function(n){var i=this.parse(n);if(!i||Object.keys(i).length<2)return!0;var r=e!==i.orgID,a=!t||n.origin!==t,o=-1===Object.keys(H).indexOf(i.prefix);return r||a||o},this.send=function(n,i,r){var a=i+"|"+e;r&&r===Object(r)&&(a+="|"+JSON.stringify(r));try{n.postMessage(a,t)}catch(e){}}},G=E.MESSAGES,Y=function(e,t,n,i){function r(e){Object.assign(p,e)}function a(e){Object.assign(p.state,e),Object.assign(p.state.ALLFIELDS,e),p.callbackRegistry.executeAll(p.state)}function o(e){if(!h.isInvalid(e)){m=!1;var t=h.parse(e);p.setStateAndPublish(t.state)}}function s(e){!m&&g&&(m=!0,h.send(i,e))}function l(){r(new L(n._generateID)),p.getMarketingCloudVisitorID(),p.callbackRegistry.executeAll(p.state,!0),_.removeEventListener("message",c)}function c(e){if(!h.isInvalid(e)){var t=h.parse(e);m=!1,_.clearTimeout(p._handshakeTimeout),_.removeEventListener("message",c),r(new F(p)),_.addEventListener("message",o),p.setStateAndPublish(t.state),p.callbackRegistry.hasCallbacks()&&s(G.GETSTATE)}}function u(){g&&postMessage?(_.addEventListener("message",c),s(G.HANDSHAKE),p._handshakeTimeout=setTimeout(l,250)):l()}function d(){_.s_c_in||(_.s_c_il=[],_.s_c_in=0),p._c="Visitor",p._il=_.s_c_il,p._in=_.s_c_in,p._il[p._in]=p,_.s_c_in++}function f(){function e(e){0!==e.indexOf("_")&&"function"==typeof n[e]&&(p[e]=function(){})}Object.keys(n).forEach(e),p.getSupplementalDataID=n.getSupplementalDataID,p.isAllowed=function(){return!0}}var p=this,g=t.whitelistParentDomain;p.state={ALLFIELDS:{}},p.version=n.version,p.marketingCloudOrgID=e,p.cookieDomain=n.cookieDomain||"",p._instanceType="child";var m=!1,h=new B(e,g);p.callbackRegistry=V(),p.init=function(){d(),f(),r(new x(p)),u()},p.findField=function(e,t){if(void 0!==p.state[e])return t(p.state[e]),p.state[e]},p.messageParent=s,p.setStateAndPublish=a},q=E.MESSAGES,X=E.ALL_APIS,W=E.ASYNC_API_MAP,J=E.FIELDGROUP_TO_FIELD,K=function(e,t){function n(){var t={};return Object.keys(X).forEach(function(n){var i=X[n],r=e[i]();j.isValueEmpty(r)||(t[n]=r)}),t}function i(){var t=[];return e._loading&&Object.keys(e._loading).forEach(function(n){if(e._loading[n]){var i=J[n];t.push(i)}}),t.length?t:null}function r(t){return function n(r){var a=i();if(a){var o=W[a[0]];e[o](n,!0)}else t()}}function a(e,i){var r=n();t.send(e,i,r)}function o(e){l(e),a(e,q.HANDSHAKE)}function s(e){r(function(){a(e,q.PARENTSTATE)})()}function l(n){function i(i){r.call(e,i),t.send(n,q.PARENTSTATE,{CUSTOMERIDS:e.getCustomerIDs()})}var r=e.setCustomerIDs;e.setCustomerIDs=i}return function(e){if(!t.isInvalid(e)){(t.parse(e).prefix===q.HANDSHAKE?o:s)(e.source)}}},z=function(e,t){function n(e){return function(n){i[e]=n,r++,r===a&&t(i)}}var i={},r=0,a=Object.keys(e).length;Object.keys(e).forEach(function(t){var i=e[t];if(i.fn){var r=i.args||[];r.unshift(n(t)),i.fn.apply(i.context||null,r)}})},Q={get:function(e){e=encodeURIComponent(e);var t=(";"+document.cookie).split(" ").join(";"),n=t.indexOf(";"+e+"="),i=n<0?n:t.indexOf(";",n+1);return n<0?"":decodeURIComponent(t.substring(n+2+e.length,i<0?t.length:i))},set:function(e,t,n){var r=i(n,"cookieLifetime"),a=i(n,"expires"),o=i(n,"domain"),s=i(n,"secure"),l=s?"Secure":"";if(a&&"SESSION"!==r&&"NONE"!==r){var c=""!==t?parseInt(r||0,10):-60;if(c)a=new Date,a.setTime(a.getTime()+1e3*c);else if(1===a){a=new Date;var u=a.getYear();a.setYear(u+2+(u<1900?1900:0))}}else a=0;return e&&"NONE"!==r?(document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; path=/;"+(a?" expires="+a.toGMTString()+";":"")+(o?" domain="+o+";":"")+l,this.get(e)===t):0},remove:function(e,t){var n=i(t,"domain");n=n?" domain="+n+";":"",document.cookie=encodeURIComponent(e)+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"+n}},$=function(e){var t;!e&&_.location&&(e=_.location.hostname),t=e;var n,i=t.split(".");for(n=i.length-2;n>=0;n--)if(t=i.slice(n).join("."),Q.set("test","cookie",{domain:t}))return Q.remove("test",{domain:t}),t;return""},Z={compare:s,isLessThan:function(e,t){return s(e,t)<0},areVersionsDifferent:function(e,t){return 0!==s(e,t)},isGreaterThan:function(e,t){return s(e,t)>0},isEqual:function(e,t){return 0===s(e,t)}},ee=!!_.postMessage,te={postMessage:function(e,t,n){var i=1;t&&(ee?n.postMessage(e,t.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):t&&(n.location=t.replace(/#.*$/,"")+"#"+ +new Date+i+++"&"+e))},receiveMessage:function(e,t){var n;try{ee&&(e&&(n=function(n){if("string"==typeof t&&n.origin!==t||"[object Function]"===Object.prototype.toString.call(t)&&!1===t(n.origin))return!1;e(n)}),_.addEventListener?_[e?"addEventListener":"removeEventListener"]("message",n):_[e?"attachEvent":"detachEvent"]("onmessage",n))}catch(e){}}},ne=function(e){var t,n,i="0123456789",r="",a="",o=8,s=10,l=10;if(1==e){for(i+="ABCDEF",t=0;16>t;t++)n=Math.floor(Math.random()*o),r+=i.substring(n,n+1),n=Math.floor(Math.random()*o),a+=i.substring(n,n+1),o=16;return r+"-"+a}for(t=0;19>t;t++)n=Math.floor(Math.random()*s),r+=i.substring(n,n+1),0===t&&9==n?s=3:(1==t||2==t)&&10!=s&&2>n?s=10:2<t&&(s=10),n=Math.floor(Math.random()*l),a+=i.substring(n,n+1),0===t&&9==n?l=3:(1==t||2==t)&&10!=l&&2>n?l=10:2<t&&(l=10);return r+a},ie=function(e,t){return{corsMetadata:function(){var e="none",t=!0;return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?e="XMLHttpRequest":"undefined"!=typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(t=!1),Object.prototype.toString.call(_.HTMLElement).indexOf("Constructor")>0&&(t=!1)),{corsType:e,corsCookiesEnabled:t}}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new _[this.corsMetadata.corsType]},fireCORS:function(t,n,i){function r(e){var n;try{if((n=JSON.parse(e))!==Object(n))return void a.handleCORSError(t,null,"Response is not JSON")}catch(e){return void a.handleCORSError(t,e,"Error parsing response as JSON")}try{for(var i=t.callback,r=_,o=0;o<i.length;o++)r=r[i[o]];r(n)}catch(e){a.handleCORSError(t,e,"Error forming callback function")}}var a=this;n&&(t.loadErrorHandler=n);try{var o=this.getCORSInstance();o.open("get",t.corsUrl+"&ts="+(new Date).getTime(),!0),"XMLHttpRequest"===this.corsMetadata.corsType&&(o.withCredentials=!0,o.timeout=e.loadTimeout,o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.onreadystatechange=function(){4===this.readyState&&200===this.status&&r(this.responseText)}),o.onerror=function(e){a.handleCORSError(t,e,"onerror")},o.ontimeout=function(e){a.handleCORSError(t,e,"ontimeout")},o.send(),e._log.requests.push(t.corsUrl)}catch(e){this.handleCORSError(t,e,"try-catch")}},handleCORSError:function(t,n,i){e.CORSErrors.push({corsData:t,error:n,description:i}),t.loadErrorHandler&&("ontimeout"===i?t.loadErrorHandler(!0):t.loadErrorHandler(!1))}}},re={POST_MESSAGE_ENABLED:!!_.postMessage,DAYS_BETWEEN_SYNC_ID_CALLS:1,MILLIS_PER_DAY:864e5,ADOBE_MC:"adobe_mc",ADOBE_MC_SDID:"adobe_mc_sdid",VALID_VISITOR_ID_REGEX:/^[0-9a-fA-F\-]+$/,ADOBE_MC_TTL_IN_MIN:5,VERSION_REGEX:/vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,FIRST_PARTY_SERVER_COOKIE:"s_ecid"},ae=function(e,t){var n=_.document;return{THROTTLE_START:3e4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:null,onPagePixels:[],iframeHost:null,getIframeHost:function(e){if("string"==typeof e){var t=e.split("/");return t[0]+"//"+t[2]}},subdomain:null,url:null,getUrl:function(){var t,i="http://fast.",r="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(n.location.origin);return this.subdomain||(this.subdomain="nosubdomainreturned"),e.loadSSL&&(i=e.idSyncSSLUseAkamai?"https://fast.":"https://"),t=i+this.subdomain+".demdex.net/dest5.html"+r,this.iframeHost=this.getIframeHost(t),this.id="destination_publishing_iframe_"+this.subdomain+"_"+e.idSyncContainerID,t},checkDPIframeSrc:function(){var t="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(n.location.href);"string"==typeof e.dpIframeSrc&&e.dpIframeSrc.length&&(this.id="destination_publishing_iframe_"+(e._subdomain||this.subdomain||(new Date).getTime())+"_"+e.idSyncContainerID,this.iframeHost=this.getIframeHost(e.dpIframeSrc),this.url=e.dpIframeSrc+t)},idCallNotProcesssed:null,doAttachIframe:!1,startedAttachingIframe:!1,iframeHasLoaded:null,iframeIdChanged:null,newIframeCreated:null,originalIframeHasLoadedAlready:null,iframeLoadedCallbacks:[],regionChanged:!1,timesRegionChanged:0,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:re.POST_MESSAGE_ENABLED?null:100,onPageDestinationsFired:[],jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,readyToAttachIframePreliminary:function(){return!(e.idSyncDisableSyncs||e.disableIdSyncs||e.idSyncDisable3rdPartySyncing||e.disableThirdPartyCookies||e.disableThirdPartyCalls)},readyToAttachIframe:function(){return this.readyToAttachIframePreliminary()&&(this.doAttachIframe||e._doAttachIframe)&&(this.subdomain&&"nosubdomainreturned"!==this.subdomain||e._subdomain)&&this.url&&!this.startedAttachingIframe},attachIframe:function(){function e(){r=n.createElement("iframe"),r.sandbox="allow-scripts allow-same-origin",r.title="Adobe ID Syncing iFrame",r.id=i.id,r.name=i.id+"_name",r.style.cssText="display: none; width: 0; height: 0;",r.src=i.url,i.newIframeCreated=!0,t(),n.body.appendChild(r)}function t(e){r.addEventListener("load",function(){r.className="aamIframeLoaded",i.iframeHasLoaded=!0,i.fireIframeLoadedCallbacks(e),i.requestToProcess()})}this.startedAttachingIframe=!0;var i=this,r=n.getElementById(this.id);r?"IFRAME"!==r.nodeName?(this.id+="_2",this.iframeIdChanged=!0,e()):(this.newIframeCreated=!1,"aamIframeLoaded"!==r.className?(this.originalIframeHasLoadedAlready=!1,t("The destination publishing iframe already exists from a different library, but hadn't loaded yet.")):(this.originalIframeHasLoadedAlready=!0,this.iframeHasLoaded=!0,this.iframe=r,this.fireIframeLoadedCallbacks("The destination publishing iframe already exists from a different library, and had loaded alresady."),this.requestToProcess())):e(),this.iframe=r},fireIframeLoadedCallbacks:function(e){this.iframeLoadedCallbacks.forEach(function(t){"function"==typeof t&&t({message:e||"The destination publishing iframe was attached and loaded successfully."})}),this.iframeLoadedCallbacks=[]},requestToProcess:function(t){function n(){r.jsonForComparison.push(t),r.jsonWaiting.push(t),r.processSyncOnPage(t)}var i,r=this;if(t===Object(t)&&t.ibs)if(i=JSON.stringify(t.ibs||[]),this.jsonForComparison.length){var a,o,s,l=!1;for(a=0,o=this.jsonForComparison.length;a<o;a++)if(s=this.jsonForComparison[a],i===JSON.stringify(s.ibs||[])){l=!0;break}l?this.jsonDuplicates.push(t):n()}else n();if((this.receivedThirdPartyCookiesNotification||!re.POST_MESSAGE_ENABLED||this.iframeHasLoaded)&&this.jsonWaiting.length){var c=this.jsonWaiting.shift();this.process(c),this.requestToProcess()}e.idSyncDisableSyncs||e.disableIdSyncs||!this.iframeHasLoaded||!this.messages.length||this.sendingMessages||(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){r.messageSendingInterval=re.POST_MESSAGE_ENABLED?null:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},getRegionAndCheckIfChanged:function(t,n){var i=e._getField("MCAAMLH"),r=t.d_region||t.dcs_region;return i?r&&(e._setFieldExpire("MCAAMLH",n),e._setField("MCAAMLH",r),parseInt(i,10)!==r&&(this.regionChanged=!0,this.timesRegionChanged++,e._setField("MCSYNCSOP",""),e._setField("MCSYNCS",""),i=r)):(i=r)&&(e._setFieldExpire("MCAAMLH",n),e._setField("MCAAMLH",i)),i||(i=""),i},processSyncOnPage:function(e){var t,n,i,r;if((t=e.ibs)&&t instanceof Array&&(n=t.length))for(i=0;i<n;i++)r=t[i],r.syncOnPage&&this.checkFirstPartyCookie(r,"","syncOnPage")},process:function(e){var t,n,i,r,a,o=encodeURIComponent,s=!1;if((t=e.ibs)&&t instanceof Array&&(n=t.length))for(s=!0,i=0;i<n;i++)r=t[i],a=[o("ibs"),o(r.id||""),o(r.tag||""),j.encodeAndBuildRequest(r.url||[],","),o(r.ttl||""),"","",r.fireURLSync?"true":"false"],r.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(a.join("|")):r.fireURLSync&&this.checkFirstPartyCookie(r,a.join("|")));s&&this.jsonProcessed.push(e)},checkFirstPartyCookie:function(t,n,i){var r="syncOnPage"===i,a=r?"MCSYNCSOP":"MCSYNCS";e._readVisitor();var o,s,l=e._getField(a),c=!1,u=!1,d=Math.ceil((new Date).getTime()/re.MILLIS_PER_DAY);l?(o=l.split("*"),s=this.pruneSyncData(o,t.id,d),c=s.dataPresent,u=s.dataValid,c&&u||this.fireSync(r,t,n,o,a,d)):(o=[],this.fireSync(r,t,n,o,a,d))},pruneSyncData:function(e,t,n){var i,r,a,o=!1,s=!1;for(r=0;r<e.length;r++)i=e[r],a=parseInt(i.split("-")[1],10),i.match("^"+t+"-")?(o=!0,n<a?s=!0:(e.splice(r,1),r--)):n>=a&&(e.splice(r,1),r--);return{dataPresent:o,dataValid:s}},manageSyncsSize:function(e){if(e.join("*").length>this.MAX_SYNCS_LENGTH)for(e.sort(function(e,t){return parseInt(e.split("-")[1],10)-parseInt(t.split("-")[1],10)});e.join("*").length>this.MAX_SYNCS_LENGTH;)e.shift()},fireSync:function(t,n,i,r,a,o){var s=this;if(t){if("img"===n.tag){var l,c,u,d,f=n.url,p=e.loadSSL?"https:":"http:";for(l=0,c=f.length;l<c;l++){u=f[l],d=/^\/\//.test(u);var g=new Image;g.addEventListener("load",function(t,n,i,r){return function(){s.onPagePixels[t]=null,e._readVisitor();var o,l=e._getField(a),c=[];if(l){o=l.split("*");var u,d,f;for(u=0,d=o.length;u<d;u++)f=o[u],f.match("^"+n.id+"-")||c.push(f)}s.setSyncTrackingData(c,n,i,r)}}(this.onPagePixels.length,n,a,o)),g.src=(d?p:"")+u,this.onPagePixels.push(g)}}}else this.addMessage(i),this.setSyncTrackingData(r,n,a,o)},addMessage:function(t){var n=encodeURIComponent,i=n(e._enableErrorReporting?"---destpub-debug---":"---destpub---");this.messages.push((re.POST_MESSAGE_ENABLED?"":i)+t)},setSyncTrackingData:function(t,n,i,r){t.push(n.id+"-"+(r+Math.ceil(n.ttl/60/24))),this.manageSyncsSize(t),e._setField(i,t.join("*"))},sendMessages:function(){var e,t=this,n="",i=encodeURIComponent;this.regionChanged&&(n=i("---destpub-clear-dextp---"),this.regionChanged=!1),this.messages.length?re.POST_MESSAGE_ENABLED?(e=n+i("---destpub-combined---")+this.messages.join("%01"),this.postMessage(e),this.messages=[],this.sendingMessages=!1):(e=this.messages.shift(),this.postMessage(n+e),setTimeout(function(){t.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1},postMessage:function(e){te.postMessage(e,this.url,this.iframe.contentWindow),this.messagesPosted.push(e)},receiveMessage:function(e){var t,n=/^---destpub-to-parent---/;"string"==typeof e&&n.test(e)&&(t=e.replace(n,"").split("|"),"canSetThirdPartyCookies"===t[0]&&(this.canSetThirdPartyCookies="true"===t[1],this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(e))},processIDCallData:function(i){(null==this.url||i.subdomain&&"nosubdomainreturned"===this.subdomain)&&("string"==typeof e._subdomain&&e._subdomain.length?this.subdomain=e._subdomain:this.subdomain=i.subdomain||"",this.url=this.getUrl()),i.ibs instanceof Array&&i.ibs.length&&(this.doAttachIframe=!0),this.readyToAttachIframe()&&(e.idSyncAttachIframeOnWindowLoad?(t.windowLoaded||"complete"===n.readyState||"loaded"===n.readyState)&&this.attachIframe():this.attachIframeASAP()),"function"==typeof e.idSyncIDCallResult?e.idSyncIDCallResult(i):this.requestToProcess(i),"function"==typeof e.idSyncAfterIDCallResult&&e.idSyncAfterIDCallResult(i)},canMakeSyncIDCall:function(t,n){return e._forceSyncIDCall||!t||n-t>re.DAYS_BETWEEN_SYNC_ID_CALLS},attachIframeASAP:function(){function e(){t.startedAttachingIframe||(n.body?t.attachIframe():setTimeout(e,30))}var t=this;e()}}},oe={audienceManagerServer:{},audienceManagerServerSecure:{},cookieDomain:{},cookieLifetime:{},cookieName:{},doesOptInApply:{},disableThirdPartyCalls:{},discardTrackingServerECID:{},idSyncAfterIDCallResult:{},idSyncAttachIframeOnWindowLoad:{},idSyncContainerID:{},idSyncDisable3rdPartySyncing:{},disableThirdPartyCookies:{},idSyncDisableSyncs:{},disableIdSyncs:{},idSyncIDCallResult:{},idSyncSSLUseAkamai:{},isCoopSafe:{},isIabContext:{},isOptInStorageEnabled:{},loadSSL:{},loadTimeout:{},marketingCloudServer:{},marketingCloudServerSecure:{},optInCookieDomain:{},optInStorageExpiry:{},overwriteCrossDomainMCIDAndAID:{},preOptInApprovals:{},previousPermissions:{},resetBeforeVersion:{},sdidParamExpiry:{},serverState:{},sessionCookieName:{},secureCookie:{},takeTimeoutMetrics:{},trackingServer:{},trackingServerSecure:{},whitelistIframeDomains:{},whitelistParentDomain:{}},se={getConfigNames:function(){return Object.keys(oe)},getConfigs:function(){return oe},normalizeConfig:function(e){return"function"!=typeof e?e:e()}},le=function(e){var t={};return e.on=function(e,n,i){if(!n||"function"!=typeof n)throw new Error("[ON] Callback should be a function.");t.hasOwnProperty(e)||(t[e]=[]);var r=t[e].push({callback:n,context:i})-1;return function(){t[e].splice(r,1),t[e].length||delete t[e]}},e.off=function(e,n){t.hasOwnProperty(e)&&(t[e]=t[e].filter(function(e){if(e.callback!==n)return e}))},e.publish=function(e){if(t.hasOwnProperty(e)){var n=[].slice.call(arguments,1);t[e].slice(0).forEach(function(e){e.callback.apply(e.context,n)})}},e.publish},ce={PENDING:"pending",CHANGED:"changed",COMPLETE:"complete"},ue={AAM:"aam",ADCLOUD:"adcloud",ANALYTICS:"aa",CAMPAIGN:"campaign",ECID:"ecid",LIVEFYRE:"livefyre",TARGET:"target",VIDEO_ANALYTICS:"videoaa"},de=(C={},t(C,ue.AAM,565),t(C,ue.ECID,565),C),fe=(I={},t(I,ue.AAM,[1,2,5]),t(I,ue.ECID,[1,2,5]),I),pe=function(e){return Object.keys(e).map(function(t){return e[t]})}(ue),ge=function(){var e={};return e.callbacks=Object.create(null),e.add=function(t,n){if(!c(n))throw new Error("[callbackRegistryFactory] Make sure callback is a function or an array of functions.");e.callbacks[t]=e.callbacks[t]||[];var i=e.callbacks[t].push(n)-1;return function(){e.callbacks[t].splice(i,1)}},e.execute=function(t,n){if(e.callbacks[t]){n=void 0===n?[]:n,n=n instanceof Array?n:[n];try{for(;e.callbacks[t].length;){var i=e.callbacks[t].shift();"function"==typeof i?i.apply(null,n):i instanceof Array&&i[1].apply(i[0],n)}delete e.callbacks[t]}catch(e){}}},e.executeAll=function(t,n){(n||t&&!l(t))&&Object.keys(e.callbacks).forEach(function(n){var i=void 0!==t[n]?t[n]:"";e.execute(n,i)},e)},e.hasCallbacks=function(){return Boolean(Object.keys(e.callbacks).length)},e},me=function(){},he=function(e){var t=window,n=t.console;return!!n&&"function"==typeof n[e]},_e=function(e,t,n){return n()?function(){if(he(e)){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];console[e].apply(console,[t].concat(i))}}:me},Ce=u,Ie=new Ce("[ADOBE OPT-IN]"),ve=function(t,n){return e(t)===n},Se=function(e,t){return e instanceof Array?e:ve(e,"string")?[e]:t||[]},De=function(e){var t=Object.keys(e);return!!t.length&&t.every(function(t){return!0===e[t]})},Ae=function(e){return!(!e||Oe(e))&&Se(e).every(function(e){return pe.indexOf(e)>-1})},ye=function(e,t){return e.reduce(function(e,n){return e[n]=t,e},{})},be=function(e){return JSON.parse(JSON.stringify(e))},Oe=function(e){return"[object Array]"===Object.prototype.toString.call(e)&&!e.length},Me=function(e){if(Te(e))return e;try{return JSON.parse(e)}catch(e){return{}}},ke=function(e){return void 0===e||(Te(e)?Ae(Object.keys(e)):Ee(e))},Ee=function(e){try{var t=JSON.parse(e);return!!e&&ve(e,"string")&&Ae(Object.keys(t))}catch(e){return!1}},Te=function(e){return null!==e&&ve(e,"object")&&!1===Array.isArray(e)},Le=function(){},Pe=function(e){return ve(e,"function")?e():e},Re=function(e,t){ke(e)||Ie.error("".concat(t))},we=function(e){return Object.keys(e).map(function(t){return e[t]})},Fe=function(e){return we(e).filter(function(e,t,n){return n.indexOf(e)===t})},Ne=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.command,i=t.params,r=void 0===i?{}:i,a=t.callback,o=void 0===a?Le:a;if(!n||-1===n.indexOf("."))throw new Error("[OptIn.execute] Please provide a valid command.");try{var s=n.split("."),l=e[s[0]],c=s[1];if(!l||"function"!=typeof l[c])throw new Error("Make sure the plugin and API name exist.");var u=Object.assign(r,{callback:o});l[c].call(l,u)}catch(e){Ie.error("[execute] Something went wrong: "+e.message)}}};f.prototype=Object.create(Error.prototype),f.prototype.constructor=f;var xe="fetchPermissions",je="[OptIn#registerPlugin] Plugin is invalid.";p.Categories=ue,p.TimeoutError=f;var Ve=Object.freeze({OptIn:p,IabPlugin:h}),He=function(e,t){e.publishDestinations=function(n){var i=arguments[1],r=arguments[2];try{r="function"==typeof r?r:n.callback}catch(e){r=function(){}}var a=t;if(!a.readyToAttachIframePreliminary())return void r({error:"The destination publishing iframe is disabled in the Visitor library."});if("string"==typeof n){if(!n.length)return void r({error:"subdomain is not a populated string."});if(!(i instanceof Array&&i.length))return void r({error:"messages is not a populated array."});var o=!1;if(i.forEach(function(e){"string"==typeof e&&e.length&&(a.addMessage(e),o=!0)}),!o)return void r({error:"None of the messages are populated strings."})}else{if(!j.isObject(n))return void r({error:"Invalid parameters passed."});var s=n;if("string"!=typeof(n=s.subdomain)||!n.length)return void r({error:"config.subdomain is not a populated string."});var l=s.urlDestinations;if(!(l instanceof Array&&l.length))return void r({error:"config.urlDestinations is not a populated array."});var c=[];l.forEach(function(e){j.isObject(e)&&(e.hideReferrer?e.message&&a.addMessage(e.message):c.push(e))});!function e(){c.length&&setTimeout(function(){var t=new Image,n=c.shift();t.src=n.url,a.onPageDestinationsFired.push(n),e()},100)}()}a.iframe?(r({message:"The destination publishing iframe is already attached and loaded."}),a.requestToProcess()):!e.subdomain&&e._getField("MCMID")?(a.subdomain=n,a.doAttachIframe=!0,a.url=a.getUrl(),a.readyToAttachIframe()?(a.iframeLoadedCallbacks.push(function(e){r({message:"Attempted to attach and load the destination publishing iframe through this API call. Result: "+(e.message||"no result")})}),a.attachIframe()):r({error:"Encountered a problem in attempting to attach and load the destination publishing iframe through this API call."})):a.iframeLoadedCallbacks.push(function(e){r({message:"Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: "+(e.message||"no result")})})}},Ue=function e(t){function n(e,t){return e>>>t|e<<32-t}for(var i,r,a=Math.pow,o=a(2,32),s="",l=[],c=8*t.length,u=e.h=e.h||[],d=e.k=e.k||[],f=d.length,p={},g=2;f<64;g++)if(!p[g]){for(i=0;i<313;i+=g)p[i]=g;u[f]=a(g,.5)*o|0,d[f++]=a(g,1/3)*o|0}for(t+="Â€";t.length%64-56;)t+="\0";for(i=0;i<t.length;i++){if((r=t.charCodeAt(i))>>8)return;l[i>>2]|=r<<(3-i)%4*8}for(l[l.length]=c/o|0,l[l.length]=c,r=0;r<l.length;){var m=l.slice(r,r+=16),h=u;for(u=u.slice(0,8),i=0;i<64;i++){var _=m[i-15],C=m[i-2],I=u[0],v=u[4],S=u[7]+(n(v,6)^n(v,11)^n(v,25))+(v&u[5]^~v&u[6])+d[i]+(m[i]=i<16?m[i]:m[i-16]+(n(_,7)^n(_,18)^_>>>3)+m[i-7]+(n(C,17)^n(C,19)^C>>>10)|0);u=[S+((n(I,2)^n(I,13)^n(I,22))+(I&u[1]^I&u[2]^u[1]&u[2]))|0].concat(u),u[4]=u[4]+S|0}for(i=0;i<8;i++)u[i]=u[i]+h[i]|0}for(i=0;i<8;i++)for(r=3;r+1;r--){var D=u[i]>>8*r&255;s+=(D<16?0:"")+D.toString(16)}return s},Be=function(e,t){return"SHA-256"!==t&&"SHA256"!==t&&"sha256"!==t&&"sha-256"!==t||(e=Ue(e)),e},Ge=function(e){return String(e).trim().toLowerCase()},Ye=Ve.OptIn;j.defineGlobalNamespace(),window.adobe.OptInCategories=Ye.Categories;var qe=function(t,n,i){function r(e){var t=e;return function(e){var n=e||v.location.href;try{var i=g._extractParamFromUri(n,t);if(i)return w.parsePipeDelimetedKeyValues(i)}catch(e){}}}function a(e){function t(e,t,n){e&&e.match(re.VALID_VISITOR_ID_REGEX)&&(n===A&&(I=!0),t(e))}t(e[A],g.setMarketingCloudVisitorID,A),g._setFieldExpire(k,-1),t(e[O],g.setAnalyticsVisitorID)}function o(e){e=e||{},g._supplementalDataIDCurrent=e.supplementalDataIDCurrent||"",g._supplementalDataIDCurrentConsumed=e.supplementalDataIDCurrentConsumed||{},g._supplementalDataIDLast=e.supplementalDataIDLast||"",g._supplementalDataIDLastConsumed=e.supplementalDataIDLastConsumed||{}}function s(e){function t(e,t,n){return n=n?n+="|":n,n+=e+"="+encodeURIComponent(t)}function n(e,n){var i=n[0],r=n[1];return null!=r&&r!==T&&(e=t(i,r,e)),e}var i=e.reduce(n,"");return function(e){var t=w.getTimestampInSeconds();return e=e?e+="|":e,e+="TS="+t}(i)}function l(e){var t=e.minutesToLive,n="";return(g.idSyncDisableSyncs||g.disableIdSyncs)&&(n=n||"Error: id syncs have been disabled"),"string"==typeof e.dpid&&e.dpid.length||(n=n||"Error: config.dpid is empty"),"string"==typeof e.url&&e.url.length||(n=n||"Error: config.url is empty"),void 0===t?t=20160:(t=parseInt(t,10),(isNaN(t)||t<=0)&&(n=n||"Error: config.minutesToLive needs to be a positive number")),{error:n,ttl:t}}function c(){return!!g.configs.doesOptInApply&&!(m.optIn.isComplete&&u())}function u(){return g.configs.isIabContext?m.optIn.isApproved(m.optIn.Categories.ECID)&&C:m.optIn.isApproved(m.optIn.Categories.ECID)}function d(e,t){if(C=!0,e)throw new Error("[IAB plugin] : "+e);t.gdprApplies&&(h=t.consentString),g.init(),p()}function f(){m.optIn.isApproved(m.optIn.Categories.ECID)&&(g.configs.isIabContext?m.optIn.execute({command:"iabPlugin.fetchConsentData",callback:d}):(g.init(),p()))}function p(){m.optIn.off("complete",f)}if(!i||i.split("").reverse().join("")!==t)throw new Error("Please use `Visitor.getInstance` to instantiate Visitor.");var g=this,m=window.adobe,h="",C=!1,I=!1;g.version="4.4.0";var v=_,S=v.Visitor;S.version=g.version,S.AuthState=E.AUTH_STATE,S.OptOut=E.OPT_OUT,v.s_c_in||(v.s_c_il=[],v.s_c_in=0),g._c="Visitor",g._il=v.s_c_il,g._in=v.s_c_in,g._il[g._in]=g,v.s_c_in++,g._instanceType="regular",g._log={requests:[]},g.marketingCloudOrgID=t,g.cookieName="AMCV_"+t,g.sessionCookieName="AMCVS_"+t,g.cookieDomain=$(),g.loadSSL=v.location.protocol.toLowerCase().indexOf("https")>=0,g.loadTimeout=3e4,g.CORSErrors=[],g.marketingCloudServer=g.audienceManagerServer="dpm.demdex.net",g.sdidParamExpiry=30;var D=null,A="MCMID",y="MCIDTS",b="A",O="MCAID",M="AAM",k="MCAAMB",T="NONE",L=function(e){return!Object.prototype[e]},P=ie(g);g.FIELDS=E.FIELDS,g.cookieRead=function(e){return Q.get(e)},g.cookieWrite=function(e,t,n){var i=g.cookieLifetime?(""+g.cookieLifetime).toUpperCase():"",r=!1;return g.configs&&g.configs.secureCookie&&"https:"===location.protocol&&(r=!0),Q.set(e,""+t,{expires:n,domain:g.cookieDomain,cookieLifetime:i,secure:r})},g.resetState=function(e){e?g._mergeServerState(e):o()},g._isAllowedDone=!1,g._isAllowedFlag=!1,g.isAllowed=function(){return g._isAllowedDone||(g._isAllowedDone=!0,(g.cookieRead(g.cookieName)||g.cookieWrite(g.cookieName,"T",1))&&(g._isAllowedFlag=!0)),"T"===g.cookieRead(g.cookieName)&&g._helpers.removeCookie(g.cookieName),g._isAllowedFlag},g.setMarketingCloudVisitorID=function(e){g._setMarketingCloudFields(e)},g._use1stPartyMarketingCloudServer=!1,g.getMarketingCloudVisitorID=function(e,t){g.marketingCloudServer&&g.marketingCloudServer.indexOf(".demdex.net")<0&&(g._use1stPartyMarketingCloudServer=!0);var n=g._getAudienceManagerURLData("_setMarketingCloudFields"),i=n.url;return g._getRemoteField(A,i,e,t,n)},g.getVisitorValues=function(e,t){var n={MCMID:{fn:g.getMarketingCloudVisitorID,args:[!0],context:g},MCOPTOUT:{fn:g.isOptedOut,args:[void 0,!0],context:g},MCAID:{fn:g.getAnalyticsVisitorID,args:[!0],context:g},MCAAMLH:{fn:g.getAudienceManagerLocationHint,args:[!0],context:g},MCAAMB:{fn:g.getAudienceManagerBlob,args:[!0],context:g}},i=t&&t.length?j.pluck(n,t):n;z(i,e)},g._currentCustomerIDs={},g._customerIDsHashChanged=!1,g._newCustomerIDsHash="",g.setCustomerIDs=function(t,n){function i(){g._customerIDsHashChanged=!1}if(!g.isOptedOut()&&t){if(!j.isObject(t)||j.isObjectEmpty(t))return!1;g._readVisitor();var r,a,o;for(r in t)if(L(r)&&(a=t[r],n=a.hasOwnProperty("hashType")?a.hashType:n,a))if("object"===e(a)){var s={};if(a.id){if(n){if(!(o=Be(Ge(a.id),n)))return;a.id=o,s.hashType=n}s.id=a.id}void 0!=a.authState&&(s.authState=a.authState),g._currentCustomerIDs[r]=s}else if(n){if(!(o=Be(Ge(a),n)))return;g._currentCustomerIDs[r]={id:o,hashType:n}}else g._currentCustomerIDs[r]={id:a};var l=g.getCustomerIDs(),c=g._getField("MCCIDH"),u="";c||(c=0);for(r in l)L(r)&&(a=l[r],u+=(u?"|":"")+r+"|"+(a.id?a.id:"")+(a.authState?a.authState:""));g._newCustomerIDsHash=String(g._hash(u)),g._newCustomerIDsHash!==c&&(g._customerIDsHashChanged=!0,g._mapCustomerIDs(i))}},g.getCustomerIDs=function(){g._readVisitor();var e,t,n={};for(e in g._currentCustomerIDs)L(e)&&(t=g._currentCustomerIDs[e],n[e]||(n[e]={}),t.id&&(n[e].id=t.id),void 0!=t.authState?n[e].authState=t.authState:n[e].authState=S.AuthState.UNKNOWN,t.hashType&&(n[e].hashType=t.hashType));return n},g.setAnalyticsVisitorID=function(e){g._setAnalyticsFields(e)},g.getAnalyticsVisitorID=function(e,t,n){if(!w.isTrackingServerPopulated()&&!n)return g._callCallback(e,[""]),"";var i="";if(n||(i=g.getMarketingCloudVisitorID(function(t){g.getAnalyticsVisitorID(e,!0)})),i||n){var r=n?g.marketingCloudServer:g.trackingServer,a="";g.loadSSL&&(n?g.marketingCloudServerSecure&&(r=g.marketingCloudServerSecure):g.trackingServerSecure&&(r=g.trackingServerSecure));var o={};if(r){var s="http"+(g.loadSSL?"s":"")+"://"+r+"/id",l="d_visid_ver="+g.version+"&mcorgid="+encodeURIComponent(g.marketingCloudOrgID)+(i?"&mid="+encodeURIComponent(i):"")+(g.idSyncDisable3rdPartySyncing||g.disableThirdPartyCookies?"&d_coppa=true":""),c=["s_c_il",g._in,"_set"+(n?"MarketingCloud":"Analytics")+"Fields"];a=s+"?"+l+"&callback=s_c_il%5B"+g._in+"%5D._set"+(n?"MarketingCloud":"Analytics")+"Fields",o.corsUrl=s+"?"+l,o.callback=c}return o.url=a,g._getRemoteField(n?A:O,a,e,t,o)}return""},g.getAudienceManagerLocationHint=function(e,t){if(g.getMarketingCloudVisitorID(function(t){g.getAudienceManagerLocationHint(e,!0)})){var n=g._getField(O);if(!n&&w.isTrackingServerPopulated()&&(n=g.getAnalyticsVisitorID(function(t){g.getAudienceManagerLocationHint(e,!0)})),n||!w.isTrackingServerPopulated()){var i=g._getAudienceManagerURLData(),r=i.url;return g._getRemoteField("MCAAMLH",r,e,t,i)}}return""},g.getLocationHint=g.getAudienceManagerLocationHint,g.getAudienceManagerBlob=function(e,t){if(g.getMarketingCloudVisitorID(function(t){g.getAudienceManagerBlob(e,!0)})){var n=g._getField(O);if(!n&&w.isTrackingServerPopulated()&&(n=g.getAnalyticsVisitorID(function(t){g.getAudienceManagerBlob(e,!0)})),n||!w.isTrackingServerPopulated()){var i=g._getAudienceManagerURLData(),r=i.url;return g._customerIDsHashChanged&&g._setFieldExpire(k,-1),g._getRemoteField(k,r,e,t,i)}}return""},g._supplementalDataIDCurrent="",g._supplementalDataIDCurrentConsumed={},g._supplementalDataIDLast="",g._supplementalDataIDLastConsumed={},g.getSupplementalDataID=function(e,t){g._supplementalDataIDCurrent||t||(g._supplementalDataIDCurrent=g._generateID(1));var n=g._supplementalDataIDCurrent;return g._supplementalDataIDLast&&!g._supplementalDataIDLastConsumed[e]?(n=g._supplementalDataIDLast,g._supplementalDataIDLastConsumed[e]=!0):n&&(g._supplementalDataIDCurrentConsumed[e]&&(g._supplementalDataIDLast=g._supplementalDataIDCurrent,g._supplementalDataIDLastConsumed=g._supplementalDataIDCurrentConsumed,g._supplementalDataIDCurrent=n=t?"":g._generateID(1),g._supplementalDataIDCurrentConsumed={}),n&&(g._supplementalDataIDCurrentConsumed[e]=!0)),n};var R=!1;g._liberatedOptOut=null,g.getOptOut=function(e,t){var n=g._getAudienceManagerURLData("_setMarketingCloudFields"),i=n.url;if(u())return g._getRemoteField("MCOPTOUT",i,e,t,n);if(g._registerCallback("liberatedOptOut",e),null!==g._liberatedOptOut)return g._callAllCallbacks("liberatedOptOut",[g._liberatedOptOut]),R=!1,g._liberatedOptOut;if(R)return null;R=!0;var r="liberatedGetOptOut";return n.corsUrl=n.corsUrl.replace(/dpm\.demdex\.net\/id\?/,"dpm.demdex.net/optOutStatus?"),n.callback=[r],_[r]=function(e){if(e===Object(e)){var t,n,i=j.parseOptOut(e,t,T);t=i.optOut,n=1e3*i.d_ottl,g._liberatedOptOut=t,setTimeout(function(){g._liberatedOptOut=null},n)}g._callAllCallbacks("liberatedOptOut",[t]),R=!1},P.fireCORS(n),null},g.isOptedOut=function(e,t,n){t||(t=S.OptOut.GLOBAL);var i=g.getOptOut(function(n){var i=n===S.OptOut.GLOBAL||n.indexOf(t)>=0;g._callCallback(e,[i])},n);return i?i===S.OptOut.GLOBAL||i.indexOf(t)>=0:null},g._fields=null,g._fieldsExpired=null,g._hash=function(e){var t,n,i=0;if(e)for(t=0;t<e.length;t++)n=e.charCodeAt(t),i=(i<<5)-i+n,i&=i;return i},g._generateID=ne,g._generateLocalMID=function(){var e=g._generateID(0);return N.isClientSideMarketingCloudVisitorID=!0,e},g._callbackList=null,g._callCallback=function(e,t){try{"function"==typeof e?e.apply(v,t):e[1].apply(e[0],t)}catch(e){}},g._registerCallback=function(e,t){t&&(null==g._callbackList&&(g._callbackList={}),void 0==g._callbackList[e]&&(g._callbackList[e]=[]),g._callbackList[e].push(t))},g._callAllCallbacks=function(e,t){if(null!=g._callbackList){var n=g._callbackList[e];if(n)for(;n.length>0;)g._callCallback(n.shift(),t)}},g._addQuerystringParam=function(e,t,n,i){var r=encodeURIComponent(t)+"="+encodeURIComponent(n),a=w.parseHash(e),o=w.hashlessUrl(e);if(-1===o.indexOf("?"))return o+"?"+r+a;var s=o.split("?"),l=s[0]+"?",c=s[1];return l+w.addQueryParamAtLocation(c,r,i)+a},g._extractParamFromUri=function(e,t){var n=new RegExp("[\\?&#]"+t+"=([^&#]*)"),i=n.exec(e);if(i&&i.length)return decodeURIComponent(i[1])},g._parseAdobeMcFromUrl=r(re.ADOBE_MC),g._parseAdobeMcSdidFromUrl=r(re.ADOBE_MC_SDID),g._attemptToPopulateSdidFromUrl=function(e){var n=g._parseAdobeMcSdidFromUrl(e),i=1e9;n&&n.TS&&(i=w.getTimestampInSeconds()-n.TS),n&&n.SDID&&n.MCORGID===t&&i<g.sdidParamExpiry&&(g._supplementalDataIDCurrent=n.SDID,g._supplementalDataIDCurrentConsumed.SDID_URL_PARAM=!0)},g._attemptToPopulateIdsFromUrl=function(){var e=g._parseAdobeMcFromUrl();if(e&&e.TS){var n=w.getTimestampInSeconds(),i=n-e.TS;if(Math.floor(i/60)>re.ADOBE_MC_TTL_IN_MIN||e.MCORGID!==t)return;a(e)}},g._mergeServerState=function(e){if(e)try{if(e=function(e){return w.isObject(e)?e:JSON.parse(e)}(e),e[g.marketingCloudOrgID]){var t=e[g.marketingCloudOrgID];!function(e){w.isObject(e)&&g.setCustomerIDs(e)}(t.customerIDs),o(t.sdid)}}catch(e){throw new Error("`serverState` has an invalid format.")}},g._timeout=null,g._loadData=function(e,t,n,i){t=g._addQuerystringParam(t,"d_fieldgroup",e,1),i.url=g._addQuerystringParam(i.url,"d_fieldgroup",e,1),i.corsUrl=g._addQuerystringParam(i.corsUrl,"d_fieldgroup",e,1),N.fieldGroupObj[e]=!0,i===Object(i)&&i.corsUrl&&"XMLHttpRequest"===P.corsMetadata.corsType&&P.fireCORS(i,n,e)},g._clearTimeout=function(e){null!=g._timeout&&g._timeout[e]&&(clearTimeout(g._timeout[e]),g._timeout[e]=0)},g._settingsDigest=0,g._getSettingsDigest=function(){if(!g._settingsDigest){var e=g.version;g.audienceManagerServer&&(e+="|"+g.audienceManagerServer),g.audienceManagerServerSecure&&(e+="|"+g.audienceManagerServerSecure),g._settingsDigest=g._hash(e)}return g._settingsDigest},g._readVisitorDone=!1,g._readVisitor=function(){if(!g._readVisitorDone){g._readVisitorDone=!0;var e,t,n,i,r,a,o=g._getSettingsDigest(),s=!1,l=g.cookieRead(g.cookieName),c=new Date;if(l||I||g.discardTrackingServerECID||(l=g.cookieRead(re.FIRST_PARTY_SERVER_COOKIE)),null==g._fields&&(g._fields={}),l&&"T"!==l)for(l=l.split("|"),l[0].match(/^[\-0-9]+$/)&&(parseInt(l[0],10)!==o&&(s=!0),l.shift()),l.length%2==1&&l.pop(),e=0;e<l.length;e+=2)t=l[e].split("-"),n=t[0],i=l[e+1],t.length>1?(r=parseInt(t[1],10),a=t[1].indexOf("s")>0):(r=0,a=!1),s&&("MCCIDH"===n&&(i=""),r>0&&(r=c.getTime()/1e3-60)),n&&i&&(g._setField(n,i,1),r>0&&(g._fields["expire"+n]=r+(a?"s":""),(c.getTime()>=1e3*r||a&&!g.cookieRead(g.sessionCookieName))&&(g._fieldsExpired||(g._fieldsExpired={}),g._fieldsExpired[n]=!0)));!g._getField(O)&&w.isTrackingServerPopulated()&&(l=g.cookieRead("s_vi"))&&(l=l.split("|"),l.length>1&&l[0].indexOf("v1")>=0&&(i=l[1],e=i.indexOf("["),e>=0&&(i=i.substring(0,e)),i&&i.match(re.VALID_VISITOR_ID_REGEX)&&g._setField(O,i)))}},g._appendVersionTo=function(e){var t="vVersion|"+g.version,n=e?g._getCookieVersion(e):null;return n?Z.areVersionsDifferent(n,g.version)&&(e=e.replace(re.VERSION_REGEX,t)):e+=(e?"|":"")+t,e},g._writeVisitor=function(){var e,t,n=g._getSettingsDigest();for(e in g._fields)L(e)&&g._fields[e]&&"expire"!==e.substring(0,6)&&(t=g._fields[e],n+=(n?"|":"")+e+(g._fields["expire"+e]?"-"+g._fields["expire"+e]:"")+"|"+t);n=g._appendVersionTo(n),g.cookieWrite(g.cookieName,n,1)},g._getField=function(e,t){return null==g._fields||!t&&g._fieldsExpired&&g._fieldsExpired[e]?null:g._fields[e]},g._setField=function(e,t,n){null==g._fields&&(g._fields={}),g._fields[e]=t,n||g._writeVisitor()},g._getFieldList=function(e,t){var n=g._getField(e,t);return n?n.split("*"):null},g._setFieldList=function(e,t,n){g._setField(e,t?t.join("*"):"",n)},g._getFieldMap=function(e,t){var n=g._getFieldList(e,t);if(n){var i,r={};for(i=0;i<n.length;i+=2)r[n[i]]=n[i+1];return r}return null},g._setFieldMap=function(e,t,n){var i,r=null;if(t){r=[];for(i in t)L(i)&&(r.push(i),r.push(t[i]))}g._setFieldList(e,r,n)},g._setFieldExpire=function(e,t,n){var i=new Date;i.setTime(i.getTime()+1e3*t),null==g._fields&&(g._fields={}),g._fields["expire"+e]=Math.floor(i.getTime()/1e3)+(n?"s":""),t<0?(g._fieldsExpired||(g._fieldsExpired={}),g._fieldsExpired[e]=!0):g._fieldsExpired&&(g._fieldsExpired[e]=!1),n&&(g.cookieRead(g.sessionCookieName)||g.cookieWrite(g.sessionCookieName,"1"))},g._findVisitorID=function(t){return t&&("object"===e(t)&&(t=t.d_mid?t.d_mid:t.visitorID?t.visitorID:t.id?t.id:t.uuid?t.uuid:""+t),t&&"NOTARGET"===(t=t.toUpperCase())&&(t=T),t&&(t===T||t.match(re.VALID_VISITOR_ID_REGEX))||(t="")),t},g._setFields=function(t,n){if(g._clearTimeout(t),null!=g._loading&&(g._loading[t]=!1),N.fieldGroupObj[t]&&N.setState(t,!1),"MC"===t){!0!==N.isClientSideMarketingCloudVisitorID&&(N.isClientSideMarketingCloudVisitorID=!1);var i=g._getField(A);if(!i||g.overwriteCrossDomainMCIDAndAID){if(!(i="object"===e(n)&&n.mid?n.mid:g._findVisitorID(n))){if(g._use1stPartyMarketingCloudServer&&!g.tried1stPartyMarketingCloudServer)return g.tried1stPartyMarketingCloudServer=!0,void g.getAnalyticsVisitorID(null,!1,!0);i=g._generateLocalMID()}g._setField(A,i)}i&&i!==T||(i=""),"object"===e(n)&&((n.d_region||n.dcs_region||n.d_blob||n.blob)&&g._setFields(M,n),g._use1stPartyMarketingCloudServer&&n.mid&&g._setFields(b,{id:n.id})),g._callAllCallbacks(A,[i])}if(t===M&&"object"===e(n)){var r=604800;void 0!=n.id_sync_ttl&&n.id_sync_ttl&&(r=parseInt(n.id_sync_ttl,10));var a=F.getRegionAndCheckIfChanged(n,r);g._callAllCallbacks("MCAAMLH",[a]);var o=g._getField(k);(n.d_blob||n.blob)&&(o=n.d_blob,o||(o=n.blob),g._setFieldExpire(k,r),g._setField(k,o)),o||(o=""),g._callAllCallbacks(k,[o]),!n.error_msg&&g._newCustomerIDsHash&&g._setField("MCCIDH",g._newCustomerIDsHash)}if(t===b){var s=g._getField(O);s&&!g.overwriteCrossDomainMCIDAndAID||(s=g._findVisitorID(n),s?s!==T&&g._setFieldExpire(k,-1):s=T,g._setField(O,s)),s&&s!==T||(s=""),g._callAllCallbacks(O,[s])}if(g.idSyncDisableSyncs||g.disableIdSyncs)F.idCallNotProcesssed=!0;else{F.idCallNotProcesssed=!1;var l={};l.ibs=n.ibs,l.subdomain=n.subdomain,F.processIDCallData(l)}if(n===Object(n)){var c,d;u()&&g.isAllowed()&&(c=g._getField("MCOPTOUT"));var f=j.parseOptOut(n,c,T);c=f.optOut,d=f.d_ottl,g._setFieldExpire("MCOPTOUT",d,!0),g._setField("MCOPTOUT",c),g._callAllCallbacks("MCOPTOUT",[c])}},g._loading=null,g._getRemoteField=function(e,t,n,i,r){var a,o="",s=w.isFirstPartyAnalyticsVisitorIDCall(e),l={MCAAMLH:!0,MCAAMB:!0};if(u()&&g.isAllowed()){g._readVisitor(),o=g._getField(e,!0===l[e]);if(function(){return(!o||g._fieldsExpired&&g._fieldsExpired[e])&&(!g.disableThirdPartyCalls||s)}()){if(e===A||"MCOPTOUT"===e?a="MC":"MCAAMLH"===e||e===k?a=M:e===O&&(a=b),a)return!t||null!=g._loading&&g._loading[a]||(null==g._loading&&(g._loading={}),g._loading[a]=!0,g._loadData(a,t,function(t){if(!g._getField(e)){t&&N.setState(a,!0);var n="";e===A?n=g._generateLocalMID():a===M&&(n={error_msg:"timeout"}),g._setFields(a,n)}},r)),g._registerCallback(e,n),o||(t||g._setFields(a,{id:T}),"")}else o||(e===A?(g._registerCallback(e,n),o=g._generateLocalMID(),g.setMarketingCloudVisitorID(o)):e===O?(g._registerCallback(e,n),o="",g.setAnalyticsVisitorID(o)):(o="",i=!0))}return e!==A&&e!==O||o!==T||(o="",i=!0),n&&i&&g._callCallback(n,[o]),o},g._setMarketingCloudFields=function(e){g._readVisitor(),g._setFields("MC",e)},g._mapCustomerIDs=function(e){g.getAudienceManagerBlob(e,!0)},g._setAnalyticsFields=function(e){g._readVisitor(),g._setFields(b,e)},g._setAudienceManagerFields=function(e){g._readVisitor(),g._setFields(M,e)},g._getAudienceManagerURLData=function(e){var t=g.audienceManagerServer,n="",i=g._getField(A),r=g._getField(k,!0),a=g._getField(O),o=a&&a!==T?"&d_cid_ic=AVID%01"+encodeURIComponent(a):"";if(g.loadSSL&&g.audienceManagerServerSecure&&(t=g.audienceManagerServerSecure),t){var s,l,c=g.getCustomerIDs();if(c)for(s in c)L(s)&&(l=c[s],o+="&d_cid_ic="+encodeURIComponent(s)+"%01"+encodeURIComponent(l.id?l.id:"")+(l.authState?"%01"+l.authState:""));e||(e="_setAudienceManagerFields");var u="http"+(g.loadSSL?"s":"")+"://"+t+"/id",d="d_visid_ver="+g.version+(h&&-1!==u.indexOf("demdex.net")?"&gdpr=1&gdpr_force=1&gdpr_consent="+h:"")+"&d_rtbd=json&d_ver=2"+(!i&&g._use1stPartyMarketingCloudServer?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(g.marketingCloudOrgID)+"&d_nsid="+(g.idSyncContainerID||0)+(i?"&d_mid="+encodeURIComponent(i):"")+(g.idSyncDisable3rdPartySyncing||g.disableThirdPartyCookies?"&d_coppa=true":"")+(!0===D?"&d_coop_safe=1":!1===D?"&d_coop_unsafe=1":"")+(r?"&d_blob="+encodeURIComponent(r):"")+o,f=["s_c_il",g._in,e];return n=u+"?"+d+"&d_cb=s_c_il%5B"+g._in+"%5D."+e,{url:n,corsUrl:u+"?"+d,callback:f}}return{url:n}},g.appendVisitorIDsTo=function(e){try{var t=[[A,g._getField(A)],[O,g._getField(O)],["MCORGID",g.marketingCloudOrgID]];return g._addQuerystringParam(e,re.ADOBE_MC,s(t))}catch(t){return e}},g.appendSupplementalDataIDTo=function(e,t){if(!(t=t||g.getSupplementalDataID(w.generateRandomString(),!0)))return e;try{var n=s([["SDID",t],["MCORGID",g.marketingCloudOrgID]]);return g._addQuerystringParam(e,re.ADOBE_MC_SDID,n)}catch(t){return e}};var w={parseHash:function(e){var t=e.indexOf("#");return t>0?e.substr(t):""},hashlessUrl:function(e){var t=e.indexOf("#");return t>0?e.substr(0,t):e},addQueryParamAtLocation:function(e,t,n){var i=e.split("&");return n=null!=n?n:i.length,i.splice(n,0,t),i.join("&")},isFirstPartyAnalyticsVisitorIDCall:function(e,t,n){if(e!==O)return!1;var i;return t||(t=g.trackingServer),n||(n=g.trackingServerSecure),!("string"!=typeof(i=g.loadSSL?n:t)||!i.length)&&(i.indexOf("2o7.net")<0&&i.indexOf("omtrdc.net")<0)},isObject:function(e){return Boolean(e&&e===Object(e))},removeCookie:function(e){Q.remove(e,{domain:g.cookieDomain})},isTrackingServerPopulated:function(){return!!g.trackingServer||!!g.trackingServerSecure},getTimestampInSeconds:function(){return Math.round((new Date).getTime()/1e3)},parsePipeDelimetedKeyValues:function(e){return e.split("|").reduce(function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e},{})},generateRandomString:function(e){e=e||5;for(var t="",n="abcdefghijklmnopqrstuvwxyz0123456789";e--;)t+=n[Math.floor(Math.random()*n.length)];return t},normalizeBoolean:function(e){return"true"===e||"false"!==e&&e},parseBoolean:function(e){return"true"===e||"false"!==e&&null},replaceMethodsWithFunction:function(e,t){for(var n in e)e.hasOwnProperty(n)&&"function"==typeof e[n]&&(e[n]=t);return e}};g._helpers=w;var F=ae(g,S);g._destinationPublishing=F,g.timeoutMetricsLog=[];var N={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,fieldGroupObj:{},setState:function(e,t){switch(e){case"MC":!1===t?!0!==this.MCIDCallTimedOut&&(this.MCIDCallTimedOut=!1):this.MCIDCallTimedOut=t;break;case b:!1===t?!0!==this.AnalyticsIDCallTimedOut&&(this.AnalyticsIDCallTimedOut=!1):this.AnalyticsIDCallTimedOut=t;break;case M:!1===t?!0!==this.AAMIDCallTimedOut&&(this.AAMIDCallTimedOut=!1):this.AAMIDCallTimedOut=t}}};g.isClientSideMarketingCloudVisitorID=function(){return N.isClientSideMarketingCloudVisitorID},g.MCIDCallTimedOut=function(){return N.MCIDCallTimedOut},g.AnalyticsIDCallTimedOut=function(){return N.AnalyticsIDCallTimedOut},g.AAMIDCallTimedOut=function(){return N.AAMIDCallTimedOut},g.idSyncGetOnPageSyncInfo=function(){return g._readVisitor(),g._getField("MCSYNCSOP")},g.idSyncByURL=function(e){if(!g.isOptedOut()){var t=l(e||{});if(t.error)return t.error;var n,i,r=e.url,a=encodeURIComponent,o=F;return r=r.replace(/^https:/,"").replace(/^http:/,""),n=j.encodeAndBuildRequest(["",e.dpid,e.dpuuid||""],","),i=["ibs",a(e.dpid),"img",a(r),t.ttl,"",n],o.addMessage(i.join("|")),o.requestToProcess(),"Successfully queued"}},g.idSyncByDataSource=function(e){if(!g.isOptedOut())return e===Object(e)&&"string"==typeof e.dpuuid&&e.dpuuid.length?(e.url="//dpm.demdex.net/ibs:dpid="+e.dpid+"&dpuuid="+e.dpuuid,g.idSyncByURL(e)):"Error: config or config.dpuuid is empty"},He(g,F),g._getCookieVersion=function(e){e=e||g.cookieRead(g.cookieName);var t=re.VERSION_REGEX.exec(e);return t&&t.length>1?t[1]:null},g._resetAmcvCookie=function(e){var t=g._getCookieVersion();t&&!Z.isLessThan(t,e)||w.removeCookie(g.cookieName)},g.setAsCoopSafe=function(){D=!0},g.setAsCoopUnsafe=function(){D=!1},function(){if(g.configs=Object.create(null),w.isObject(n))for(var e in n)L(e)&&(g[e]=n[e],g.configs[e]=n[e])}(),function(){[["getMarketingCloudVisitorID"],["setCustomerIDs",void 0],["getAnalyticsVisitorID"],["getAudienceManagerLocationHint"],["getLocationHint"],["getAudienceManagerBlob"]].forEach(function(e){var t=e[0],n=2===e.length?e[1]:"",i=g[t];g[t]=function(e){return u()&&g.isAllowed()?i.apply(g,arguments):("function"==typeof e&&g._callCallback(e,[n]),n)}})}(),g.init=function(){if(c())return m.optIn.fetchPermissions(f,!0);!function(){if(w.isObject(n)){g.idSyncContainerID=g.idSyncContainerID||0,D="boolean"==typeof g.isCoopSafe?g.isCoopSafe:w.parseBoolean(g.isCoopSafe),g.resetBeforeVersion&&g._resetAmcvCookie(g.resetBeforeVersion),g._attemptToPopulateIdsFromUrl(),g._attemptToPopulateSdidFromUrl(),g._readVisitor();var e=g._getField(y),t=Math.ceil((new Date).getTime()/re.MILLIS_PER_DAY);g.idSyncDisableSyncs||g.disableIdSyncs||!F.canMakeSyncIDCall(e,t)||(g._setFieldExpire(k,-1),g._setField(y,t)),g.getMarketingCloudVisitorID(),g.getAudienceManagerLocationHint(),g.getAudienceManagerBlob(),g._mergeServerState(g.serverState)}else g._attemptToPopulateIdsFromUrl(),g._attemptToPopulateSdidFromUrl()}(),function(){if(!g.idSyncDisableSyncs&&!g.disableIdSyncs){F.checkDPIframeSrc();var e=function(){var e=F;e.readyToAttachIframe()&&e.attachIframe()};v.addEventListener("load",function(){S.windowLoaded=!0,e()});try{te.receiveMessage(function(e){F.receiveMessage(e.data)},F.iframeHost)}catch(e){}}}(),function(){g.whitelistIframeDomains&&re.POST_MESSAGE_ENABLED&&(g.whitelistIframeDomains=g.whitelistIframeDomains instanceof Array?g.whitelistIframeDomains:[g.whitelistIframeDomains],g.whitelistIframeDomains.forEach(function(e){var n=new B(t,e),i=K(g,n);te.receiveMessage(i,e)}))}()}};qe.config=se,_.Visitor=qe;var Xe=qe,We=function(e){if(j.isObject(e))return Object.keys(e).filter(function(t){return""!==e[t]}).reduce(function(t,n){var i="doesOptInApply"!==n?e[n]:se.normalizeConfig(e[n]),r=j.normalizeBoolean(i);return t[n]=r,t},Object.create(null))},Je=Ve.OptIn,Ke=Ve.IabPlugin;return Xe.getInstance=function(e,t){if(!e)throw new Error("Visitor requires Adobe Marketing Cloud Org ID.");e.indexOf("@")<0&&(e+="@AdobeOrg");var n=function(){var t=_.s_c_il;if(t)for(var n=0;n<t.length;n++){var i=t[n];if(i&&"Visitor"===i._c&&i.marketingCloudOrgID===e)return i}}();if(n)return n;var i=We(t);!function(e){_.adobe.optIn=_.adobe.optIn||function(){var t=j.pluck(e,["doesOptInApply","previousPermissions","preOptInApprovals","isOptInStorageEnabled","optInStorageExpiry","isIabContext"]),n=e.optInCookieDomain||e.cookieDomain;n=n||$(),n=n===window.location.hostname?"":n,t.optInCookieDomain=n;var i=new Je(t,{cookies:Q});if(t.isIabContext){var r=new Ke(window.__cmp);i.registerPlugin(r)}return i}()}(i||{});var r=e,a=r.split("").reverse().join(""),o=new Xe(e,null,a);j.isObject(i)&&i.cookieDomain&&(o.cookieDomain=i.cookieDomain),function(){_.s_c_il.splice(--_.s_c_in,1)}();var s=j.getIeVersion();if("number"==typeof s&&s<10)return o._helpers.replaceMethodsWithFunction(o,function(){});var l=function(){try{return _.self!==_.parent}catch(e){return!0}}()&&!function(e){return e.cookieWrite("TEST_AMCV_COOKIE","T",1),"T"===e.cookieRead("TEST_AMCV_COOKIE")&&(e._helpers.removeCookie("TEST_AMCV_COOKIE"),!0)}(o)&&_.parent?new Y(e,i,o,_.parent):new Xe(e,i,a);return o=null,l.init(),l},function(){function e(){Xe.windowLoaded=!0}_.addEventListener?_.addEventListener("load",e):_.attachEvent&&_.attachEvent("onload",e),Xe.codeLoadEnd=(new Date).getTime()}(),Xe}();

      opts =
      {
         trackingServer: 'mcclatchy.sc.omtrdc.net',
         trackingServerSecure: 'mcclatchy.sc.omtrdc.net',
         isCoopSafe: true
      };

      ri && (opts.overwriteCrossDomainMCIDAndAID = true);
      if (mistats.adobe.adbmc && decodeURIComponent(mistats.adobe.adbmc[0]).indexOf(mistats.adobe.mcId) > -1)
      {
         opts.overwriteCrossDomainMCIDAndAID = true;
         mistats.appvid = mistats.adobe.adbmc[0].substr(10);
      }

      mistats.visitor = Visitor.getInstance(mistats.adobe.mcId, opts);
      if (ri)
      {
         mistats.visitor.setMarketingCloudVisitorID(mistats.adobe.midHash(ri));
         console.log('mistats mcvisid: ' + mistats.visitor.getMarketingCloudVisitorID());
      }

      if (!mistats.appvid)
      {
         aid = decodeURIComponent(location.search || '').match(/[\?&]appvid=[0-9a-z]{16}-[0-9a-z]{16}|[\?&]appvid=[0-9a-z]{36}/i);
         if (aid)
         {
            history.replaceState && (history.replaceState('', document.title, location.pathname + (location.search || '').replace(/[\?&]appvid=[^&]+/i, '') + (location.hash || '')));

            mistats.appvid = aid[0].substr(8).toUpperCase();
            mistats.adobe.setCookie('mi_avid', mistats.appvid);
            mcc = decodeURIComponent(document.cookie || '').match(new RegExp('AMCV_' + mistats.adobe.mcId + '=[^;]+'));
            if (mcc)
            {
               mistats.visitor._fields = mistats.visitor._fields || {};
               mistats.visitor._fields['MCAID'] = mistats.appvid;

               mcc = mcc[0].match(/\|MCAID\|/) ? mcc[0].replace(/\|MCAID\|[^\|]+/, '|MCAID|' + mistats.appvid) : mcc[0].replace(/\|vVersion/, '|MCAID|' + mistats.appvid + '|vVersion');
               mcc = mcc.replace(/[^=]+=/, '');

               mistats.adobe.setCookie('AMCV_' + mistats.adobe.mcId, mcc);
            }
         }
      }

      mistats.visitor.getVisitorValues(mistats.adobe.ecidEnd);

      if (!(mistats.visitor.isAllowed && mistats.visitor.isAllowed()) && mistats.cookiesDisabled)
         mistats.adobe.ecidEnd({reason: 'ecidFailed'});
      else
         setTimeout(function ()
         {
            !mistats.adobe.ready && (mistats.adobe.ecidEnd({reason: 'ecidTimeout'}));
         }, 5000);
   },

   processQueue: function (pReady)
   {
      pReady && (mistats.adobe.ready = true);

      if (!mistats.adobe.ready && (mistats.adobe.processing || !mistats.adobe.hasECID()))
         return

      if (!mistats.adobe.queue.length)
      {
         mistats.adobe.queue.processing = false;
         return;
      }

      mistats.adobe.queue.processing = true;
      (mistats.adobe.queue.shift())();
      mistats.adobe.processQueue(pReady);
   },

   addToQueue: function (pFunc)
   {
      if (!pFunc)
         return;

      mistats.adobe.queue[mistats.adobe.queue.length] = pFunc;
      mistats.adobe.processQueue();
   },

   checkRule: function (pName)
   {
      var a;
      var b;
      var c;
      var cond;

      if (pName === 'Adobe Target' && mistats.targetLib)
         return true;

      if (!(mistats.adobe.validHost && window._satellite && window._satellite._container && window._satellite._container.rules))
         return false;

      for (a = 0; !cond && a < window._satellite._container.rules.length; a++)
         if (typeof window._satellite._container.rules[a] === 'object')
         {
            if (window._satellite._container.rules[a].name === pName)
               cond = window._satellite._container.rules[a].conditions || [];
         }

      if (cond)
         for (a = 0; !b && a < cond.length; a++)
            if (cond[a].settings && cond[a].settings.domains)
               for (c = 0; !b && c < cond[a].settings.domains.length; c++)
                  b = (cond[a].settings.domains[c] || '').toLowerCase() === (location.hostname || '').toLowerCase().replace(/^www\./, '');

      return !!b;
   },

   isWaiting: function ()
   {
      var a;
      var at;
      var b;
      var c;

      if (mistats.adobe.validHost && (!window._satellite || (window._satellite && !window._satellite._container)))
         return true;


      if (window._satellite && window._satellite._container && !mistats.adobe.launchLoaded)
      {
         mistats.adobe.launchLoaded = true;
         mistats.windowEvent('launch_loaded');
      }

      mistats.gpsRule = mistats.adobe.checkRule('propensity-score');
      if ((mistats.gpsRule && !mistats.propScore)
       || (mistats.adobe.checkRule('Adobe Target') && !mistats.atResponse))
         return true;

      return false;
   },

   launch: function ()
   {
      var env;
      var i;
      var micb;
      var objs;
      var timer;

      objs = document.getElementsByTagName('script');
      for (i = 0; !micb && i < objs.length; i++)
         (objs[i].src || '').match(/\/mistats\/micb\.js$/i) && (micb = objs[i]);

      if (!(micb && micb.insertAdjacentElement))
         return;

      if (!mistats.hasCore)
      {
         mistats.dataLayer();

         // Temp change to accommodate QA
         env = ((window.mi && window.mi.pageInfo && window.mi.pageInfo.getConf ? window.mi.pageInfo.getConf('launch_id') : null)
            || ((location.hostname || '').match(/^qa1\.[^\.]+\.com$/) ? 'EN37ace58f4e7e4d18ba520f715db89c43-development' :
               ((location.hostname || '').match(/^qa2\.[^\.]+\.com$/) ? 'EN8cde9db82a9846e6ae309b48cc09d5d6-development' : 'ENe8f70e36bc2f473e93435c31a9a5ba80')));


         objs = document.createElement('script');
         objs.type = 'text/javascript';
         objs.src = '//assets.adobedtm.com/launch-' + env + '.min.js';
      } else
         objs = window;

      objs.addEventListener && (objs.addEventListener(mistats.hasCore ? 'launch_loaded' : 'load', function ()
      {
         var clk;
         var cto;
         var fcp;

         mistats.adobe.launchLoaded = true;

         timer && (clearTimeout(timer));
         console.log('mi_launchload succeeded')
         mistats.adobe.perfMark('end launch deployment');
         mistats.windowEvent('mi_launchload');

         function fcpClear()
         {
            fcp && (clearInterval(fcp));
         };

         fcp = setInterval(function ()
         {
            var i;
            var pw;

            if (!(mistats.getElementsByClassName && window._satellite && window._satellite._container))
               return;

            if (!mistats.adobe.checkRule('choice'))
               return fcpClear();

            if (!cto && document.readyState === 'complete' && ((document.hasFocus && document.hasFocus()) || !document.hasFocus))
               cto = setTimeout(fcpClear, 2000);

            pw = mistats.getElementsByClassName(/fc-dialog/);
            if (window.frames && window.frames.length)
               for (i = 0; !pw && i < window.frames.length; i++)
                  pw = (window.frames[i].src || '').match(/https:\/\/p\.w\.m80fg\.com/i);
            if (!(pw && pw.length > 0))
               return;
            fcpClear();
            mistats.windowEvent('gfc_rendered');
            mistats.adobe.addToQueue(function ()
            {
               mistats.pagename = 'GFC: Paywall Stop';
               s.eVar4 = mistats.pagename;
               s.eVar31 = 'gfc_paywall';
               s.eVar32 = 'gfc_paywall';
               s.eVar49 = 'gfc_paywall';
               window.Visitor && (s.visitor = Visitor.getInstance(mistats.adobe.mcId));
               s.t();

               if (mistats.bind && mistats.getElementByClassName)
                  mistats.bind(mistats.getElementByClassName('fc-buttons'), 'mouseup', function (pEvent)
                  {
                     var to;

                     if (clk || !(pEvent && pEvent.target))
                        return;

                     to = pEvent.target;
                     while (to && to.nodeName !== 'BUTTON')
                        to = to.parentNode || null;

                     if (!(to && (to.className || '').match(/fc-button-whitelist/)))
                        return;

                     clk = true;
                     mistats.interactions && (mistats.interactions.increment('gfc_allowads', true));
                  });
            });
         }, 1000);
      }, false));
      mistats.adobe.perfMark('start launch deployment');
      !mistats.hasCore && (micb.insertAdjacentElement('afterend', objs));
      timer = setTimeout(function ()
      {
         console.log('mi_launchload timeout');
         mistats.adobe.validHost = false;
         mistats.windowEvent('mistats_adobe');
      }, 8000);
   }
};

mistats.adobe.getECID();
!mistats.subData && mistats.SubData && (mistats.adobe.validHost || (location.hostname || '').indexOf('eedition') === 0) && (mistats.subData = mistats.subData || (new mistats.SubData()));

/*
mistats.propensity =
{
   isWaiting: function ()
   {
      if (mistats.hasCore && typeof mistats.propScore === 'undefined')
         return true;
      return false;
   },

   init: function ()
   {
      typeof mistats.propScore === 'undefined' && (mistats.propScore = ((document.cookie || '').match(/mi_gps=-?\d+/) || [''])[0].substr(7).replace(/mi_gps=/g, ''));
   }
};

mistats.propensity.init();
*/

if (mistats.adobe.validHost || ((location.hostname || '').match(/eedition/) && (location.search || '').match(/at=true/)))
{
   mistats.targetLib = 'https://media.mcclatchyinteractive.com/mistats/at_2.3.js';
   mistats.adobe.target.init();
   mistats.adobe.target.mbox();
   mistats.adobe.addToQueue(mistats.adobe.launch);
}

/*
window.addEventListener && (window.addEventListener('propensity', function (pEvent)
{
   mistats.propScore = pEvent && pEvent.propensityScore ? pEvent.propensityScore : 'na';
   mistats.propScore && !isNaN(mistats.propScore) && (mistats.adobe.setCookie('mi_gps', mistats.propScore, 1800000));

   console.log('mistats_gpscore: ' + mistats.propScore);
   mistats.windowEvent('mistats_propensity');
}, false));
*/

window.addEventListener && (window.addEventListener('cta_widget', function (pEvent)
{
   mistats.ctaWidget = true;
}, false));

document.addEventListener && (document.addEventListener('at-request-succeeded', function (pEvent)
{
   mistats.atResponse = pEvent && pEvent.detail ? pEvent.detail : {};
   mistats.windowEvent('mistats_target');
}, false));

document.addEventListener && (document.addEventListener('at-request-failed', function (pEvent)
{
   mistats.atResponse = pEvent && pEvent.detail ? pEvent.detail : {};
   mistats.windowEvent('mistats_target');
}, false));

document.addEventListener && (document.addEventListener('at-library-loaded', function (pEvent)
{
   mistats.adobe.target.loaded = true;
   mistats.windowEvent('mistats_atloaded');
}, false));

mistats.BrowserMode = function ()
{
   var priv;

   function isPrivate()
   {
      return priv;
   };

   function store()
   {
      var date;
      var domain;

      priv = true;
      domain = (location.hostname || '').match(/[^\.]+(\.com)?$/);

      date = new Date();
      date.setTime(date.getTime() + 1209600000);
      document.cookie = ['mi_pbm=1', 'expires=' + date.toUTCString(), 'path=/', 'domain=' + (domain ? domain[0] : location.hostname)].join('; ');
   };

   function detect()
   {
      var test;

      if ((document.cookie || '').match(/mi_pbm=1/))
         return store();

      if (window.RequestFileSystem || window.webkitRequestFileSystem)
      {
         try
         {
            test = window.RequestFileSystem || window.webkitRequestFileSystem;
            test(window.TEMPORARY, 1, function ()
            {
            }, function ()
            {
               store();
            });
         } catch (pError)
         {
            store();
         }
      } else if ('MozAppearance' in document.documentElement.style && navigator.userAgent.match(/Firefox/) && !navigator.serviceWorker)
      {
         store();
      } else if (navigator.userAgent.match(/.Trident\/\d/) && navigator.userAgent.match(/.MSIE\s1\d\.\d|.rv:1\d\.\d/))
      {
         try
         {
            !window.msIndexedDB && (store());
         } catch (pError)
         {
            store();
         }
      } else if (window.localStorage && navigator.userAgent.match(/Safari/))
      {
         try
         {
            window.localStorage.setItem('mi_test', 1);
         } catch (pError)
         {
            store();
         }
         !priv && (window.localStorage.removeItem('mi_test'));
      }
   };

   this.isPrivate = isPrivate;
   detect();
};

mistats.browserMode = mistats.browserMode || (new mistats.BrowserMode());

mistats.Z_AdSlots = function ()
{
   var adlist;
   var count;
   var lineItems;
   var ready;
   var renderStart;
   var requestStart;
   var tid;
   var timer;
   var total;

   function track(pObj)
   {
      var ctid;
      var ptid;
      var qs;
      var req;

      if (!pObj)
         return;

      ctid = getTransactionId();

      pObj.ch = (mistats.channel || '').replace(/&amp;/g, '&').replace(/;/g, ' ');
      pObj.ti = ctid;
      pObj.ns = !!mistats.noSlots;
      mistats.propensity && (pObj.ps = mistats.propensity.getScore());

      if (pObj.li)
      {
         try
         {
            ptid = (document.cookie || '').match(/mi_ptid=[^;]+/);
            ptid && (ptid = atob(decodeURIComponent(ptid[0].substr(8))));
         } catch (err)
         {
            ptid = null;
         }

         if ((ptid || '').indexOf('mi_as_') === 0 && window.s && window.s.eVar4)
         {
            pObj.pt = ptid;
            pObj.np = (window.s.eVar4 || '').replace(/&amp;/g, '&').replace(/;/g, ' ');
         }
      }

      mistats.adobe.setCookie('mi_ptid', btoa(ctid), 1800000);

      qs = btoa(JSON.stringify(pObj)).split('');
      qs.reverse();

      req = new Image();
      req.width = 1;
      req.height = 1;
      req.src = (mistats.bizunit === 'DUR' ? '//www.newsobserver.com' : '') + '/static/img/placeholder/FREE.gif?mias=' + qs.join('');
   };

   function send(pEvent)
   {
      var ac;
      var ad;
      var gaf;
      var gpt;
      var i;
      var objs;

      if (!pEvent)
         window.removeEventListener('load', send, false);

      if (!lineItems)
      {
         console.log('mistats_as queue empty');
         if (pEvent && pEvent.type !== 'load')
            return;
      }

      ids = lineItems ? Object.assign({}, lineItems) : {};
      lineItems = null;

      console.log('mistats_as send');

      if (count === 0)
      {
         objs = document.getElementsByTagName('script');
         for (i = 0; !gpt && i < objs.length; i++)
            (objs[i].src || '').match(/\/gpt\.js/i) && (gpt = true);
         if (gpt)
         {
            if (!(window.googletag && window.googletag.pubads))
               mistats.noSlots = true;
            else
            {
               objs = document.getElementsByTagName('iframe');
               for (ac = 0, gaf = 0, i = 0; i < objs.length; i++)
                  if ((objs[i].id || '').match(/^google_ads_iframe_/))
                  {
                     gaf++;
                     try
                     {
                        objs[i].contentWindow.document.body.innerHTML && (ac++);
                     } catch (err)
                     {
                        ac++;
                     }
                  }
               (gaf === 0 || ac === 0) && (mistats.noSlots = true);
            }
         }
      } else
         mistats.noSlots = false;

      track(
      {
         ids: ids,
         t:
         {
            pgs: window.performance && window.performance.timing ? (window.performance.timing.redirectStart || ((window.performance.timing.fetchStart || window.performance.timing.requestStart) || 0)) : 0,
            rqs: requestStart || 0,
            rds: renderStart || 0,
            rde: Date.now()
         }
      });
   };

   function slotRendered(pEvent)
   {
      var obj;

      !renderStart && (renderStart = Date.now());
      count++;

      if (pEvent && !isNaN(parseInt(pEvent.sourceAgnosticLineItemId)))
      {
         lineItems = lineItems || {};
         lineItems[pEvent.sourceAgnosticLineItemId] = (lineItems[pEvent.sourceAgnosticLineItemId] || 0) + 1;
      }

      if (!ready && count >= total)
      {
         ready = true;
         send();
      }

      try
      {
         obj = document.getElementById('google_ads_iframe_' + pEvent.slot.getSlotId().getId());
      } catch (err)
      {
      }

      if (!(obj && mistats.iframeTracker))
         return;

      mistats.iframeTracker.stop(obj);
      adlist[obj.id] =
      {
         iframe: obj,
         event: pEvent
      };
      mistats.iframeTracker.start(obj, function (pIframe)
      {
         var obj;

         pIframe && pIframe.id && (obj = adlist[pIframe.id]);
         if (!obj)
            return;

         obj.event.sourceAgnosticLineItemId && (track(
         {
            v3: obj.event.slot && obj.event.slot.getSlotElementId ? obj.event.slot.getSlotElementId() : '',
            v46: obj.event.sourceAgnosticLineItemId,
            v47: obj.event.size && obj.event.size.join ? obj.event.size.join('x') : 'oop'
         }));

         mistats.iframeTracker.stop(pIframe);
      });
   };

   function createTransactionId()
   {
      var mid;

      if (tid)
         return;

      mistats.visitor && mistats.visitor.getMarketingCloudVisitorID && (mid = mistats.visitor.getMarketingCloudVisitorID());
      tid = ['mi', 'as', (mistats.bizunit || '').toLowerCase(), (mid || Math.round(Math.random() * 1000000000)), Date.now()].join('_');
   };

   function getTransactionId()
   {
      !tid && (createTransactionId());
      return tid || '';
   };

   function init()
   {
      adlist = {};
      count = 0;
      total = 0;

      mistats.adobe.addToQueue(createTransactionId);

      window.googletag = window.googletag || {};
      window.googletag.cmd = window.googletag.cmd || [];
      window.googletag.cmd.push(function ()
      {
         window.googletag.pubads().addEventListener('slotRequested', function ()
         {
            !requestStart && (requestStart = Date.now());
            total++;
         });
         window.googletag.pubads().addEventListener('slotRenderEnded', slotRendered);
      });
      window.addEventListener('load', send, false);
      window.addEventListener('blur', send, false);
      window.addEventListener('onpagehide' in window ? 'pagehide' : 'beforeunload', send, false);
   };

   this.getTransactionId = getTransactionId;
   init();
};

mistats.AdSlots = function ()
{
   var adlist;
   var count;
   var lineItems;
   var ready;
   var renderStart;
   var requestStart;
   var tid;
   var timer;
   var total;

   function track(pObj)
   {
      var ctid;
      var ptid;
      var qs;
      var req;

      if (!pObj)
         return;

      ctid = getTransactionId();

      pObj.ch = (mistats.channel || '').replace(/&amp;/g, '&').replace(/;/g, ' ');
      pObj.ti = ctid;
      pObj.ns = !!mistats.noSlots;
      mistats.propensity && (pObj.ps = mistats.propensity.getScore());

      if (pObj.li)
      {
         try
         {
            ptid = (document.cookie || '').match(/mi_ptid=[^;]+/);
            ptid && (ptid = atob(decodeURIComponent(ptid[0].substr(8))));
         } catch (err)
         {
            ptid = null;
         }

         if ((ptid || '').indexOf('mi_as_') === 0 && window.s && window.s.eVar4)
         {
            pObj.pt = ptid;
            pObj.np = (window.s.eVar4 || '').replace(/&amp;/g, '&').replace(/;/g, ' ');
         }
      }

      mistats.adobe.setCookie('mi_ptid', btoa(ctid), 1800000);

      qs = btoa(JSON.stringify(pObj)).split('');
      qs.reverse();

      req = new Image();
      req.width = 1;
      req.height = 1;
      req.src = (mistats.bizunit === 'DUR' ? '//www.newsobserver.com' : '') + '/static/img/placeholder/FREE.gif?mias=' + qs.join('');
   };

   function done(pEvent)
   {
      var ac;
      var ad;
      var gaf;
      var gpt;
      var i;
      var objs;

      if (ready)
         return;

      if (pEvent && pEvent.type === 'load' && window.googletag && window.googletag.pubads)
      {
         timer = setTimeout(function ()
         {
            done({type: 'timeout'});
         }, 10000);
         return console.log('mistats_as timer started');
      }

      ready = true;

      pEvent && pEvent.type === 'timeout' && (console.log('mistats_as timeout'));
      console.log('mistats_as ready');

      if (count === 0)
      {
         objs = document.getElementsByTagName('script');
         for (i = 0; !gpt && i < objs.length; i++)
            (objs[i].src || '').match(/\/gpt\.js/i) && (gpt = true);
         if (gpt)
         {
            if (!(window.googletag && window.googletag.pubads))
               mistats.noSlots = true;
            else
            {
               objs = document.getElementsByTagName('iframe');
               for (ac = 0, gaf = 0, i = 0; i < objs.length; i++)
                  if ((objs[i].id || '').match(/^google_ads_iframe_/))
                  {
                     gaf++;
                     try
                     {
                        objs[i].contentWindow.document.body.innerHTML && (ac++);
                     } catch (err)
                     {
                        ac++;
                     }
                  }
               (gaf === 0 || ac === 0) && (mistats.noSlots = true);
            }
         }
      }

      track(
      {
         li: lineItems,
         t:
         {
            pgs: window.performance && window.performance.timing ? (window.performance.timing.redirectStart || ((window.performance.timing.fetchStart || window.performance.timing.requestStart) || 0)) : 0,
            rqs: requestStart || 0,
            rds: renderStart || 0,
            rde: Date.now()
         }
      });

      if (mistats.noSlots)
         return mistats.adobe.setCookie('mi_nas', '1', 1800000);

      if (mistats.iframeTracker)
         for (ad in adlist)
            mistats.iframeTracker.start(adlist[ad].iframe, function (pIframe)
            {
               var obj;

               pIframe && pIframe.id && (obj = adlist[pIframe.id]);
               if (!obj)
                  return;

               obj.event.sourceAgnosticLineItemId && (track(
               {
                  v3: obj.event.slot && obj.event.slot.getSlotElementId ? obj.event.slot.getSlotElementId() : '',
                  v46: obj.event.sourceAgnosticLineItemId,
                  v47: obj.event.size && obj.event.size.join ? obj.event.size.join('x') : 'oop'
               }));

               mistats.iframeTracker.stop(pIframe);
            });
   };

   function slotRendered(pEvent)
   {
      var obj;

      pEvent && pEvent.sourceAgnosticLineItemId && (lineItems[lineItems.length] = pEvent.sourceAgnosticLineItemId);

      !renderStart && (renderStart = Date.now());

      count++;
      count >= total && (done());

      try
      {
         obj = document.getElementById('google_ads_iframe_' + pEvent.slot.getSlotId().getId());
      } catch (err)
      {
      }

      obj && (adlist[obj.id] =
      {
         iframe: obj,
         event: pEvent
      });
   };

   function createTransactionId()
   {
      var mid;

      if (tid)
         return;

      mistats.visitor && mistats.visitor.getMarketingCloudVisitorID && (mid = mistats.visitor.getMarketingCloudVisitorID());
      tid = ['mi', 'as', (mistats.bizunit || '').toLowerCase(), (mid || Math.round(Math.random() * 1000000000)), Date.now()].join('_');
   };

   function getTransactionId()
   {
      !tid && (createTransactionId());
      return tid || '';
   };

   function init()
   {
      adlist = {};
      count = 0;
      lineItems = [];
      total = 0;

      mistats.adobe.addToQueue(createTransactionId);

      window.googletag = window.googletag || {};
      window.googletag.cmd = window.googletag.cmd || [];
      window.googletag.cmd.push(function ()
      {
         window.googletag.pubads().addEventListener('slotRequested', function ()
         {
            !requestStart && (requestStart = Date.now());
            total++;
         });
         window.googletag.pubads().addEventListener('slotRenderEnded', slotRendered);
      });
      window.addEventListener('load', done, false);
   };

   this.getTransactionId = getTransactionId;
   init();
};

!mistats.subData && mistats.SubData && (mistats.adobe.validHost || (location.hostname || '').indexOf('eedition') === 0) && (mistats.subData = mistats.subData || (new mistats.SubData()));

if (window.pageInfo && (window.pageInfo.adPlatform || '').match(/zeus/i))
   mistats.adSlots = mistats.adSlots || (new mistats.Z_AdSlots());
else if ((document.cookie || '').match(/mi_nas=1/))
   mistats.noSlots = true;
else if (mistats.isEscenic && !(location.pathname || '').match(/\/video-embed/))
   mistats.adSlots = mistats.adSlots || (new mistats.AdSlots());

if (!mistats.micbLoaded)
{
   mistats.micbLoaded = true;
   mistats.windowEvent('mi_micb_loaded');
}
/*
(function ()
{
   var bxs;
   var id;
   var n;
   var t;

   function bxEvent(pEvent)
   {
      var name;

      if (!(pEvent && pEvent.type && mistats.interactions && mistats.setOnce))
         return;

      name = (pEvent.data && pEvent.data.campaignName ? pEvent.data.campaignName : '').replace(/^\s+/, '').replace(/\s+$/, '').replace(/\s+/g, ' ');

      switch (pEvent.type || '')
      {
         case 'bxImpression':
            mistats.interactions.custom(
            {
               name: 'BX Modal Impression',
               type: null,
               count: 1,
               sendNow: false
            });
            name && (mistats.setOnce('eVar77', name));
            break;
         case 'bxSubmission':
            mistats.interactions.custom(
            {
               name: 'BX Modal Submission',
               type: null,
               count: 1,
               sendNow: false
            });
            bxs = true;
            name && (mistats.setOnce('eVar77', name));
            break;
         case 'bxClose':
            !bxs && (mistats.interactions.custom(
            {
               name: 'BX Modal Close',
               type: null,
               count: 1,
               sendNow: false
            }));
            name && (mistats.setOnce('eVar77', name));
            break;
      }
   };

   if (!(location.hostname || '').match(/(newsobserver|sacbee|star-telegram|charlotteobserver|kansascity|miamiherald)\.com/))
      return;

   id =
   {
      'NAO': '3581',
      'SAC': '3054',
      'DFW': '3361',
      'CLT': '3362',
      'KSC': '3241',
      'MIA': '3360'
   }[mistats.bizunit || ''];

   if ((location.hostname || '').match(/eedition/i))
      return;

//   if ((window.digitalData && window.digitalData.page && window.digitalData.page.ads && window.digitalData.page.ads.allow !== 'true') || mistats.bouncexLoaded || !id || (!(location.hostname || '').match(/qa\d\./) && ((location.hostname || '').match(/checkout\./) || (location.pathname || '').match(/\/signin|\/freetrial/) || (location.pathname || '').match(/\/paywall/))))
   if ((window.digitalData && window.digitalData.page && window.digitalData.page.ads && window.digitalData.page.ads.allow !== 'true') || mistats.bouncexLoaded || !id || (location.hostname || '').match(/ceros\./) || (!(location.hostname || '').match(/qa\d\./) && ((location.pathname || '').match(/\/signin|\/freetrial|advertise\/sponsored-content/) || (location.pathname || '').match(/\/paywall|\/confirmation/))))
//   if ((window.digitalData && window.digitalData.page && window.digitalData.page.ads && window.digitalData.page.ads.allow !== 'true') || mistats.bouncexLoaded || !id)
      return;
   mistats.bouncexLoaded = true;

   n = document.getElementsByTagName('head');
   n = n ? n[0] : document.body;
   if (!n)
      return;

   t = document.createElement('script');
   t.async = true;
   t.src = 'https://tag.bounceexchange.com/' + id + '/i.js';
   t.onload = function () { mistats.windowEvent && (mistats.windowEvent('mistats_bxloaded')); };
   n.appendChild(t);

   window.addEventListener('bxImpression', bxEvent, false);
   window.addEventListener('bxSubmission', bxEvent, false);
   window.addEventListener('bxClose', bxEvent, false);
   window.addEventListener('bxClick', bxEvent, false);
})();
*/
(function ()
{
   var bxs;

   function bxEvent(pEvent)
   {
      var i;
      var name;
      var objs;

      if (!(pEvent && pEvent.type && mistats.interactions && mistats.setOnce))
         return;

      name = (pEvent.data && pEvent.data.campaignName ? pEvent.data.campaignName : '').replace(/^\s+/, '').replace(/\s+$/, '').replace(/\s+/g, ' ');

      switch (pEvent.type || '')
      {
         case 'bxImpression':
            mistats.interactions.custom(
            {
               name: 'BX Modal Impression',
               type: null,
               count: 1,
               sendNow: false
            });
            name && (mistats.setOnce('eVar77', name));
            bxs = false;
            break;
         case 'bxSubmission':
            objs = document.getElementsByTagName('input');
            if (typeof btoa !== 'undefined')
               for (i = 0; i < objs.length; i++)
                  (objs[i].id || '').match(/bx-element-/) && objs[i].getAttribute('type') === 'email' && (objs[i].value || '').match(/[^@]+@[^\.@]+\.[^\.]+/) && (s.eVar16 = btoa(objs[i].value.replace(/\s+/g, '').toLowerCase()));
            s.eVar16 && mistats.events && (mistats.events.add('event70'));
            mistats.interactions.custom(
            {
               name: 'BX Modal Submission',
               type: null,
               count: 1,
               sendNow: s.eVar16 ? true : false
            });
            bxs = true;
            name && (mistats.setOnce('eVar77', name));
            break;
         case 'bxClose':
            !bxs && (mistats.interactions.custom(
            {
               name: 'BX Modal Close',
               type: null,
               count: 1,
               sendNow: false
            }));
            name && (mistats.setOnce('eVar77', name));
            break;
      }
   };

   function bxLoader(pEvent)
   {
      var id;
      var n;
      var t;

      id =
      {
         'NAO': '3581',
         'SAC': '3054',
         'DFW': '3361',
         'CLT': '3362',
         'KSC': '3241',
         'MIA': '3360'
      }[mistats.bizunit || ''];

      if (mistats.bouncexLoaded || window.bouncex)
         return console.log('mistats bx_already_loaded');

      if (window._disablebx 
       || !(location.hostname || '').match(/(newsobserver|sacbee|star-telegram|charlotteobserver|kansascity|miamiherald)\.com/)
       || (location.hostname || '').match(/eedition/i)
       || (location.hostname || '').match(/^t\.news\./i)
       || (window.digitalData && window.digitalData.page && window.digitalData.page.ads && window.digitalData.page.ads.allow !== 'true')
       || !id
       || (location.hostname || '').match(/ceros\./)
       || (!(location.hostname || '').match(/qa\d\./) && ((location.pathname || '').match(/\/paywall|\/signin|\/freetrial|advertise\/sponsored-content|\/my-account|\/confirmation|\/lost-entitlement|\/digital-access/)))
       || (mistats.subData && mistats.subData.getSimpleStatus() === 'Active')
       || window != top)
         if (!(location.href || '').match(/bxtest\d+/))
            return console.log('mistats bx_inactive');

      if (pEvent && pEvent.type === 'mistats_target')
         window.removeEventListener('mistats_target', bxLoader, false);

      if (((mistats.targetLib || window.adobe.target) && !mistats.atResponse) || mistats.adobe.target.isWaiting())
      {
         console.log('mistats bx_waiting');
         return window.addEventListener('mistats_target', bxLoader, false);
      }

      mistats.bouncexLoaded = true;
      console.log('mistats bx_init');

      n = document.getElementsByTagName('head');
      n = n ? n[0] : document.body;
      if (!n)
         return;

      t = document.createElement('script');
      t.async = true;
      t.src = 'https://tag.bounceexchange.com/' + id + '/i.js';
      t.onload = function ()
      {
         var pp;
         function clear(pSuppress)
         {
            pp && (clearInterval(pp));
            if (!pSuppress)
               return;
            window.bouncex && window.bouncex.destroyAll && (window.bouncex.destroyAll(''));
            window.bouncex = Object.freeze({});
            console.log('mistats_bx_inactive');
         };
         pp = setInterval(function ()
         {
            if ((location.href || '').match(/bxtest\d+/))
               return clear(false);
            ((mistats.subData && mistats.subData.getSimpleStatus() === 'Active') || (window.Optanon && window.Optanon.IsAlertBoxClosed && !window.Optanon.IsAlertBoxClosed())) && (clear(true));
         }, 500);
         setTimeout(clear, 60000);
         mistats.windowEvent && (mistats.windowEvent('mistats_bxloaded'));
      };
      n.appendChild(t);

      window.addEventListener('bxImpression', bxEvent, false);
      window.addEventListener('bxSubmission', bxEvent, false);
      window.addEventListener('bxClose', bxEvent, false);
      window.addEventListener('bxClick', bxEvent, false);
   };

   bxLoader();
})();

(location.hostname || '').match(/(www|account|qa\d)\.(newsobserver|kansascity)/) && !(location.pathname || '').match(/video-embed/) && window == top && ((function ()
{
   function loadChartbeat()
   {
      var sid;
      var tag;
      var tags;

      sid = (location.pathname || '').match(/\/article\d+\.html/);
      tags = window.mi && window.mi.pageInfo && window.mi.pageInfo.getConf ? window.mi.pageInfo.getConf('access.tags') : '';

      if (tags.match(/matclosd/))
         tag = 'Subscriber-Only';
      else if (tags.match(/matopend/))
         tag = 'Not-Paywalled';
      else if (tags.match(/matbasic/))
         tag = 'Normal-Paywalled';

      window._sf_async_config = window._sf_async_config || {};
      _sf_async_config.uid = 62447;
      _sf_async_config.domain = (location.hostname || '').replace(/^(www|account)\./, '');
      _sf_async_config.flickerControl = false;
      _sf_async_config.useCanonical = false;
      _sf_async_config.useCanonicalDomain = true;
      _sf_async_config.path = sid ? sid[0] : (location.pathname || '/');
      _sf_async_config.sections = (mistats.channel || 'Unknown Section') + (tag ? (',' + tag) : '');
      _sf_async_config.authors = mistats.contentsource || '';
      mistats.jsLoader('https://static.chartbeat.com/js/chartbeat.js', false, function ()
      {
         window._cbq = (window._cbq || []);
         window._cbq.push(['_acct', mistats.subData && mistats.subData.getSimpleStatus() === 'Active' ? 'paid' : ((document.cookie || '').match(/mi_sub=/) ? 'lgdin' : 'anon')]);
         mistats.cbloaded = true;
         mistats.windowEvent('mistats_chartbeat');
         console.log('mistats cb_loaded');
      });
   };

   if (document.readyState === 'complete')
      loadChartbeat();
   else
      window.addEventListener('DOMContentLoaded', loadChartbeat, false);
})());

