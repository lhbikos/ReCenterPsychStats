/**
 * @license
 * Adobe Visitor API for JavaScript version: 3.3.0
 * Copyright 2018 Adobe, Inc. All Rights Reserved
 * More info available at https://marketing.adobe.com/resources/help/en_US/mcvid/
 */
var e=function(){"use strict";function e(){return{callbacks:{},add:function(e,t){this.callbacks[e]=this.callbacks[e]||[];var i=this.callbacks[e].push(t)-1;return function(){this.callbacks[e].splice(i,1)}},execute:function(e,t){if(this.callbacks[e]){t=void 0===t?[]:t,t=t instanceof Array?t:[t];try{for(;this.callbacks[e].length;){var i=this.callbacks[e].shift();"function"==typeof i?i.apply(null,t):i instanceof Array&&i[1].apply(i[0],t)}delete this.callbacks[e]}catch(e){}}},executeAll:function(e,t){(t||e&&!v.isObjectEmpty(e))&&Object.keys(this.callbacks).forEach(function(t){var i=void 0!==e[t]?e[t]:"";this.execute(t,i)},this)},hasCallbacks:function(){return Boolean(Object.keys(this.callbacks).length)}}}function t(e){for(var t=/^\d+$/,i=0,n=e.length;i<n;i++)if(!t.test(e[i]))return!1;return!0}function i(e,t){for(;e.length<t.length;)e.push("0");for(;t.length<e.length;)t.push("0")}function n(e,t){for(var i=0;i<e.length;i++){var n=parseInt(e[i],10),r=parseInt(t[i],10);if(n>r)return 1;if(r>n)return-1}return 0}function r(e,r){if(e===r)return 0;var a=e.toString().split("."),s=r.toString().split(".");return t(a.concat(s))?(i(a,s),n(a,s)):NaN}var a="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};Object.assign=Object.assign||function(e){for(var t,i,n=1;n<arguments.length;++n){i=arguments[n];for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e};var s={HANDSHAKE:"HANDSHAKE",GETSTATE:"GETSTATE",PARENTSTATE:"PARENTSTATE"},o={MCMID:"MCMID",MCAID:"MCAID",MCAAMB:"MCAAMB",MCAAMLH:"MCAAMLH",MCOPTOUT:"MCOPTOUT",CUSTOMERIDS:"CUSTOMERIDS"},l={MCMID:"getMarketingCloudVisitorID",MCAID:"getAnalyticsVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut"},d={CUSTOMERIDS:"getCustomerIDs"},c={MCMID:"getMarketingCloudVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut",MCAID:"getAnalyticsVisitorID",CUSTOMERIDS:"getCustomerIDs"},u={MC:"MCMID",A:"MCAID",AAM:"MCAAMB"},f={MCMID:"MCMID",MCOPTOUT:"MCOPTOUT",MCAID:"MCAID",MCAAMLH:"MCAAMLH",MCAAMB:"MCAAMB"},g={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2},m={GLOBAL:"global"},_={MESSAGES:s,STATE_KEYS_MAP:o,ASYNC_API_MAP:l,SYNC_API_MAP:d,ALL_APIS:c,FIELDGROUP_TO_FIELD:u,FIELDS:f,AUTH_STATE:g,OPT_OUT:m},h=_.STATE_KEYS_MAP,p=function(e){function t(){}function i(t,i){var n=this;return function(){var t=e(0,h.MCMID),r={};return r[h.MCMID]=t,n.setStateAndPublish(r),i(t),t}}this.getMarketingCloudVisitorID=function(e){e=e||t;var n=this.findField(h.MCMID,e),r=i.call(this,h.MCMID,e);return void 0!==n?n:r()}},C=_.MESSAGES,S=_.ASYNC_API_MAP,I=_.SYNC_API_MAP,D=function(){function e(){}function t(e,t){var i=this;return function(){return i.callbackRegistry.add(e,t),i.messageParent(C.GETSTATE),""}}function i(i){this[S[i]]=function(n){n=n||e;var r=this.findField(i,n),a=t.call(this,i,n);return void 0!==r?r:a()}}function n(t){this[I[t]]=function(){return this.findField(t,e)||{}}}Object.keys(S).forEach(i,this),Object.keys(I).forEach(n,this)},A=_.ASYNC_API_MAP,M=function(){Object.keys(A).forEach(function(e){this[A[e]]=function(t){this.callbackRegistry.add(e,t)}},this)},v=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e,t){t.isObjectEmpty=function(e){return e===Object(e)&&0===Object.keys(e).length},t.isValueEmpty=function(e){return""===e||t.isObjectEmpty(e)},t.getIeVersion=function(){if(document.documentMode)return document.documentMode;for(var e=7;e>4;e--){var t=document.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e;t=null}return null},t.encodeAndBuildRequest=function(e,t){return e.map(encodeURIComponent).join(t)},t.isObject=function(e){return null!==e&&"object"==typeof e&&!1===Array.isArray(e)}}),y=(v.isObjectEmpty,v.isValueEmpty,v.getIeVersion,v.encodeAndBuildRequest,v.isObject,e),b=_.MESSAGES,T={0:"prefix",1:"orgID",2:"state"},k=function(e,t){this.parse=function(e){try{var t={};return e.data.split("|").forEach(function(e,i){if(void 0!==e){t[T[i]]=2!==i?e:JSON.parse(e)}}),t}catch(e){}},this.isInvalid=function(i){var n=this.parse(i);if(!n||Object.keys(n).length<2)return!0;var r=e!==n.orgID,a=!t||i.origin!==t,s=-1===Object.keys(b).indexOf(n.prefix);return r||a||s},this.send=function(i,n,r){var a=n+"|"+e;r&&r===Object(r)&&(a+="|"+JSON.stringify(r));try{i.postMessage(a,t)}catch(e){}}},O=_.MESSAGES,E=function(e,t,i,n){function r(e){Object.assign(m,e)}function s(e){Object.assign(m.state,e),m.callbackRegistry.executeAll(m.state)}function o(e){if(!C.isInvalid(e)){h=!1;var t=C.parse(e);m.setStateAndPublish(t.state)}}function l(e){!h&&_&&(h=!0,C.send(n,e))}function d(){r(new p(i._generateID)),m.getMarketingCloudVisitorID(),m.callbackRegistry.executeAll(m.state,!0),a.removeEventListener("message",c)}function c(e){if(!C.isInvalid(e)){var t=C.parse(e);h=!1,a.clearTimeout(m._handshakeTimeout),a.removeEventListener("message",c),r(new D(m)),a.addEventListener("message",o),m.setStateAndPublish(t.state),m.callbackRegistry.hasCallbacks()&&l(O.GETSTATE)}}function u(){_&&postMessage?(a.addEventListener("message",c),l(O.HANDSHAKE),m._handshakeTimeout=setTimeout(d,250)):d()}function f(){a.s_c_in||(a.s_c_il=[],a.s_c_in=0),m._c="Visitor",m._il=a.s_c_il,m._in=a.s_c_in,m._il[m._in]=m,a.s_c_in++}function g(){function e(e){0!==e.indexOf("_")&&"function"==typeof i[e]&&(m[e]=function(){})}Object.keys(i).forEach(e),m.getSupplementalDataID=i.getSupplementalDataID}var m=this,_=t.whitelistParentDomain;m.state={},m.version=i.version,m.marketingCloudOrgID=e,m.cookieDomain=i.cookieDomain||"",m._instanceType="child";var h=!1,C=new k(e,_);m.callbackRegistry=y(),m.init=function(){f(),g(),r(new M(m)),u()},m.findField=function(e,t){if(m.state[e])return t(m.state[e]),m.state[e]},m.messageParent=l,m.setStateAndPublish=s},L=_.MESSAGES,P=_.ALL_APIS,R=_.ASYNC_API_MAP,F=_.FIELDGROUP_TO_FIELD,w=function(e,t){function i(){var t={};return Object.keys(P).forEach(function(i){var n=P[i],r=e[n]();v.isValueEmpty(r)||(t[i]=r)}),t}function n(){var t=[];return e._loading&&Object.keys(e._loading).forEach(function(i){if(e._loading[i]){var n=F[i];t.push(n)}}),t.length?t:null}function r(t){return function i(r){var a=n();if(a){var s=R[a[0]];e[s](i,!0)}else t()}}function a(e,n){var r=i();t.send(e,n,r)}function s(e){l(e),a(e,L.HANDSHAKE)}function o(e){r(function(){a(e,L.PARENTSTATE)})()}function l(i){function n(n){r.call(e,n),t.send(i,L.PARENTSTATE,{CUSTOMERIDS:e.getCustomerIDs()})}var r=e.setCustomerIDs;e.setCustomerIDs=n}return function(e){if(!t.isInvalid(e)){(t.parse(e).prefix===L.HANDSHAKE?s:o)(e.source)}}},V=function(e,t){function i(e){return function(i){n[e]=i,r++,r===a&&t(n)}}var n={},r=0,a=Object.keys(e).length;Object.keys(e).forEach(function(t){var n=e[t];if(n.fn){var r=n.args||[];r.unshift(i(t)),n.fn.apply(n.context||null,r)}})},N=function(e){var t;if(!e&&a.location&&(e=a.location.hostname),t=e)if(/^[0-9.]+$/.test(t))t="";else{var i=",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,",n=t.split("."),r=n.length-1,s=r-1;if(r>1&&n[r].length<=2&&(2===n[r-1].length||i.indexOf(","+n[r]+",")<0)&&s--,s>0)for(t="";r>=s;)t=n[r]+(t?".":"")+t,r--}return t},x={compare:r,isLessThan:function(e,t){return r(e,t)<0},areVersionsDifferent:function(e,t){return 0!==r(e,t)},isGreaterThan:function(e,t){return r(e,t)>0},isEqual:function(e,t){return 0===r(e,t)}},j=!!a.postMessage,U={postMessage:function(e,t,i){var n=1;t&&(j?i.postMessage(e,t.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):t&&(i.location=t.replace(/#.*$/,"")+"#"+ +new Date+n+++"&"+e))},receiveMessage:function(e,t){var i;try{j&&(e&&(i=function(i){if("string"==typeof t&&i.origin!==t||"[object Function]"===Object.prototype.toString.call(t)&&!1===t(i.origin))return!1;e(i)}),a.addEventListener?a[e?"addEventListener":"removeEventListener"]("message",i):a[e?"attachEvent":"detachEvent"]("onmessage",i))}catch(e){}}},H=function(e){var t,i,n="0123456789",r="",a="",s=8,o=10,l=10;if(1==e){for(n+="ABCDEF",t=0;16>t;t++)i=Math.floor(Math.random()*s),r+=n.substring(i,i+1),i=Math.floor(Math.random()*s),a+=n.substring(i,i+1),s=16;return r+"-"+a}for(t=0;19>t;t++)i=Math.floor(Math.random()*o),r+=n.substring(i,i+1),0===t&&9==i?o=3:(1==t||2==t)&&10!=o&&2>i?o=10:2<t&&(o=10),i=Math.floor(Math.random()*l),a+=n.substring(i,i+1),0===t&&9==i?l=3:(1==t||2==t)&&10!=l&&2>i?l=10:2<t&&(l=10);return r+a},B=function(e,t){return{corsMetadata:function(){var e="none",t=!0;return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?e="XMLHttpRequest":"undefined"!=typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(t=!1),Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor")>0&&(t=!1)),{corsType:e,corsCookiesEnabled:t}}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new a[this.corsMetadata.corsType]},fireCORS:function(t,i,n){function r(e){var i;try{if((i=JSON.parse(e))!==Object(i))return void s.handleCORSError(t,null,"Response is not JSON")}catch(e){return void s.handleCORSError(t,e,"Error parsing response as JSON")}try{for(var n=t.callback,r=a,o=0;o<n.length;o++)r=r[n[o]];r(i)}catch(e){s.handleCORSError(t,e,"Error forming callback function")}}var s=this;i&&(t.loadErrorHandler=i);try{var o=this.getCORSInstance();o.open("get",t.corsUrl+"&ts="+(new Date).getTime(),!0),"XMLHttpRequest"===this.corsMetadata.corsType&&(o.withCredentials=!0,o.timeout=e.loadTimeout,o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.onreadystatechange=function(){4===this.readyState&&200===this.status&&r(this.responseText)}),o.onerror=function(e){s.handleCORSError(t,e,"onerror")},o.ontimeout=function(e){s.handleCORSError(t,e,"ontimeout")},o.send(),e._log.requests.push(t.corsUrl)}catch(e){this.handleCORSError(t,e,"try-catch")}},handleCORSError:function(t,i,n){e.CORSErrors.push({corsData:t,error:i,description:n}),t.loadErrorHandler&&("ontimeout"===n?t.loadErrorHandler(!0):t.loadErrorHandler(!1))}}},G={POST_MESSAGE_ENABLED:!!a.postMessage,DAYS_BETWEEN_SYNC_ID_CALLS:1,MILLIS_PER_DAY:864e5,ADOBE_MC:"adobe_mc",ADOBE_MC_SDID:"adobe_mc_sdid",VALID_VISITOR_ID_REGEX:/^[0-9a-fA-F\-]+$/,ADOBE_MC_TTL_IN_MIN:5,VERSION_REGEX:/vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/},q=function(e,t){var i=a.document;return{THROTTLE_START:3e4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:null,onPagePixels:[],iframeHost:null,getIframeHost:function(e){if("string"==typeof e){var t=e.split("/");return t[0]+"//"+t[2]}},subdomain:null,url:null,getUrl:function(){var t,n="http://fast.",r="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(i.location.origin);return this.subdomain||(this.subdomain="nosubdomainreturned"),e.loadSSL&&(n=e.idSyncSSLUseAkamai?"https://fast.":"https://"),t=n+this.subdomain+".demdex.net/dest5.html"+r,this.iframeHost=this.getIframeHost(t),this.id="destination_publishing_iframe_"+this.subdomain+"_"+e.idSyncContainerID,t},checkDPIframeSrc:function(){var t="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(i.location.href);"string"==typeof e.dpIframeSrc&&e.dpIframeSrc.length&&(this.id="destination_publishing_iframe_"+(e._subdomain||this.subdomain||(new Date).getTime())+"_"+e.idSyncContainerID,this.iframeHost=this.getIframeHost(e.dpIframeSrc),this.url=e.dpIframeSrc+t)},idCallNotProcesssed:null,doAttachIframe:!1,startedAttachingIframe:!1,iframeHasLoaded:null,iframeIdChanged:null,newIframeCreated:null,originalIframeHasLoadedAlready:null,iframeLoadedCallbacks:[],regionChanged:!1,timesRegionChanged:0,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:G.POST_MESSAGE_ENABLED?null:100,jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,readyToAttachIframePreliminary:function(){return!(e.idSyncDisableSyncs||e.disableIdSyncs||e.idSyncDisable3rdPartySyncing||e.disableThirdPartyCookies||e.disableThirdPartyCalls)},readyToAttachIframe:function(){return this.readyToAttachIframePreliminary()&&(this.doAttachIframe||e._doAttachIframe)&&(this.subdomain&&"nosubdomainreturned"!==this.subdomain||e._subdomain)&&this.url&&!this.startedAttachingIframe},attachIframe:function(){function e(){r=i.createElement("iframe"),r.sandbox="allow-scripts allow-same-origin",r.title="Adobe ID Syncing iFrame",r.id=n.id,r.name=n.id+"_name",r.style.cssText="display: none; width: 0; height: 0;",r.src=n.url,n.newIframeCreated=!0,t(),i.body.appendChild(r)}function t(e){r.addEventListener("load",function(){r.className="aamIframeLoaded",n.iframeHasLoaded=!0,n.fireIframeLoadedCallbacks(e),n.requestToProcess()})}this.startedAttachingIframe=!0;var n=this,r=i.getElementById(this.id);r?"IFRAME"!==r.nodeName?(this.id+="_2",this.iframeIdChanged=!0,e()):(this.newIframeCreated=!1,"aamIframeLoaded"!==r.className?(this.originalIframeHasLoadedAlready=!1,t("The destination publishing iframe already exists from a different library, but hadn't loaded yet.")):(this.originalIframeHasLoadedAlready=!0,this.iframeHasLoaded=!0,this.iframe=r,this.fireIframeLoadedCallbacks("The destination publishing iframe already exists from a different library, and had loaded alresady."),this.requestToProcess())):e(),this.iframe=r},fireIframeLoadedCallbacks:function(e){this.iframeLoadedCallbacks.forEach(function(t){"function"==typeof t&&t({message:e||"The destination publishing iframe was attached and loaded successfully."})}),this.iframeLoadedCallbacks=[]},requestToProcess:function(t){function i(){r.jsonForComparison.push(t),r.jsonWaiting.push(t),r.processSyncOnPage(t)}var n,r=this;if(t===Object(t)&&t.ibs)if(n=JSON.stringify(t.ibs||[]),this.jsonForComparison.length){var a,s,o,l=!1;for(a=0,s=this.jsonForComparison.length;a<s;a++)if(o=this.jsonForComparison[a],n===JSON.stringify(o.ibs||[])){l=!0;break}l?this.jsonDuplicates.push(t):i()}else i();if((this.receivedThirdPartyCookiesNotification||!G.POST_MESSAGE_ENABLED||this.iframeHasLoaded)&&this.jsonWaiting.length){var d=this.jsonWaiting.shift();this.process(d),this.requestToProcess()}e.idSyncDisableSyncs||e.disableIdSyncs||!this.iframeHasLoaded||!this.messages.length||this.sendingMessages||(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){r.messageSendingInterval=G.POST_MESSAGE_ENABLED?null:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},getRegionAndCheckIfChanged:function(t,i){var n=e._getField("MCAAMLH"),r=t.d_region||t.dcs_region;return n?r&&(e._setFieldExpire("MCAAMLH",i),e._setField("MCAAMLH",r),parseInt(n,10)!==r&&(this.regionChanged=!0,this.timesRegionChanged++,e._setField("MCSYNCSOP",""),e._setField("MCSYNCS",""),n=r)):(n=r)&&(e._setFieldExpire("MCAAMLH",i),e._setField("MCAAMLH",n)),n||(n=""),n},processSyncOnPage:function(e){var t,i,n,r;if((t=e.ibs)&&t instanceof Array&&(i=t.length))for(n=0;n<i;n++)r=t[n],r.syncOnPage&&this.checkFirstPartyCookie(r,"","syncOnPage")},process:function(e){var t,i,n,r,a,s=encodeURIComponent,o=!1;if((t=e.ibs)&&t instanceof Array&&(i=t.length))for(o=!0,n=0;n<i;n++)r=t[n],a=[s("ibs"),s(r.id||""),s(r.tag||""),v.encodeAndBuildRequest(r.url||[],","),s(r.ttl||""),"","",r.fireURLSync?"true":"false"],r.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(a.join("|")):r.fireURLSync&&this.checkFirstPartyCookie(r,a.join("|")));o&&this.jsonProcessed.push(e)},checkFirstPartyCookie:function(t,i,n){var r="syncOnPage"===n,a=r?"MCSYNCSOP":"MCSYNCS";e._readVisitor();var s,o,l=e._getField(a),d=!1,c=!1,u=Math.ceil((new Date).getTime()/G.MILLIS_PER_DAY);l?(s=l.split("*"),o=this.pruneSyncData(s,t.id,u),d=o.dataPresent,c=o.dataValid,d&&c||this.fireSync(r,t,i,s,a,u)):(s=[],this.fireSync(r,t,i,s,a,u))},pruneSyncData:function(e,t,i){var n,r,a,s=!1,o=!1;for(r=0;r<e.length;r++)n=e[r],a=parseInt(n.split("-")[1],10),n.match("^"+t+"-")?(s=!0,i<a?o=!0:(e.splice(r,1),r--)):i>=a&&(e.splice(r,1),r--);return{dataPresent:s,dataValid:o}},manageSyncsSize:function(e){if(e.join("*").length>this.MAX_SYNCS_LENGTH)for(e.sort(function(e,t){return parseInt(e.split("-")[1],10)-parseInt(t.split("-")[1],10)});e.join("*").length>this.MAX_SYNCS_LENGTH;)e.shift()},fireSync:function(t,i,n,r,a,s){var o=this;if(t){if("img"===i.tag){var l,d,c,u,f=i.url,g=e.loadSSL?"https:":"http:";for(l=0,d=f.length;l<d;l++){c=f[l],u=/^\/\//.test(c);var m=new Image;m.addEventListener("load",function(t,i,n,r){return function(){o.onPagePixels[t]=null,e._readVisitor();var s,l=e._getField(a),d=[];if(l){s=l.split("*");var c,u,f;for(c=0,u=s.length;c<u;c++)f=s[c],f.match("^"+i.id+"-")||d.push(f)}o.setSyncTrackingData(d,i,n,r)}}(this.onPagePixels.length,i,a,s)),m.src=(u?g:"")+c,this.onPagePixels.push(m)}}}else this.addMessage(n),this.setSyncTrackingData(r,i,a,s)},addMessage:function(t){var i=encodeURIComponent,n=i(e._enableErrorReporting?"---destpub-debug---":"---destpub---");this.messages.push((G.POST_MESSAGE_ENABLED?"":n)+t)},setSyncTrackingData:function(t,i,n,r){t.push(i.id+"-"+(r+Math.ceil(i.ttl/60/24))),this.manageSyncsSize(t),e._setField(n,t.join("*"))},sendMessages:function(){var e,t=this,i="",n=encodeURIComponent;this.regionChanged&&(i=n("---destpub-clear-dextp---"),this.regionChanged=!1),this.messages.length?G.POST_MESSAGE_ENABLED?(e=i+n("---destpub-combined---")+this.messages.join("%01"),this.postMessage(e),this.messages=[],this.sendingMessages=!1):(e=this.messages.shift(),this.postMessage(i+e),setTimeout(function(){t.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1},postMessage:function(e){U.postMessage(e,this.url,this.iframe.contentWindow),this.messagesPosted.push(e)},receiveMessage:function(e){var t,i=/^---destpub-to-parent---/;"string"==typeof e&&i.test(e)&&(t=e.replace(i,"").split("|"),"canSetThirdPartyCookies"===t[0]&&(this.canSetThirdPartyCookies="true"===t[1],this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(e))},processIDCallData:function(n){(null==this.url||n.subdomain&&"nosubdomainreturned"===this.subdomain)&&("string"==typeof e._subdomain&&e._subdomain.length?this.subdomain=e._subdomain:this.subdomain=n.subdomain||"",this.url=this.getUrl()),n.ibs instanceof Array&&n.ibs.length&&(this.doAttachIframe=!0),this.readyToAttachIframe()&&(e.idSyncAttachIframeOnWindowLoad?(t.windowLoaded||"complete"===i.readyState||"loaded"===i.readyState)&&this.attachIframe():this.attachIframeASAP()),"function"==typeof e.idSyncIDCallResult?e.idSyncIDCallResult(n):this.requestToProcess(n),"function"==typeof e.idSyncAfterIDCallResult&&e.idSyncAfterIDCallResult(n)},canMakeSyncIDCall:function(t,i){return e._forceSyncIDCall||!t||i-t>G.DAYS_BETWEEN_SYNC_ID_CALLS},attachIframeASAP:function(){function e(){t.startedAttachingIframe||(i.body?t.attachIframe():setTimeout(e,30))}var t=this;e()}}},Y={audienceManagerServer:{},audienceManagerServerSecure:{},cookieDomain:{},cookieLifetime:{},cookieName:{},disableThirdPartyCalls:{},idSyncAfterIDCallResult:{},idSyncAttachIframeOnWindowLoad:{},idSyncContainerID:{},idSyncDisable3rdPartySyncing:{},disableThirdPartyCookies:{},idSyncDisableSyncs:{},disableIdSyncs:{},idSyncIDCallResult:{},idSyncSSLUseAkamai:{},isCoopSafe:{},loadSSL:{},loadTimeout:{},marketingCloudServer:{},marketingCloudServerSecure:{},overwriteCrossDomainMCIDAndAID:{},resetBeforeVersion:{},sdidParamExpiry:{},serverState:{},sessionCookieName:{},secureCookie:{},takeTimeoutMetrics:{},trackingServer:{},trackingServerSecure:{},whitelistIframeDomains:{},whitelistParentDomain:{}},X={getConfigNames:function(){return Object.keys(Y)},getConfigs:function(){return Y}},W=function(e,t,i){function n(e){var t=e;return function(e){var i=e||c.location.href;try{var n=d._extractParamFromUri(i,t);if(n)return y.parsePipeDelimetedKeyValues(n)}catch(e){}}}function r(e){function t(e,t){e&&e.match(G.VALID_VISITOR_ID_REGEX)&&t(e)}t(e[m],d.setMarketingCloudVisitorID),d._setFieldExpire(I,-1),t(e[C],d.setAnalyticsVisitorID)}function s(e){e=e||{},d._supplementalDataIDCurrent=e.supplementalDataIDCurrent||"",d._supplementalDataIDCurrentConsumed=e.supplementalDataIDCurrentConsumed||{},d._supplementalDataIDLast=e.supplementalDataIDLast||"",d._supplementalDataIDLastConsumed=e.supplementalDataIDLastConsumed||{}}function o(e){function t(e,t,i){return i=i?i+="|":i,i+=e+"="+encodeURIComponent(t)}function i(e,i){var n=i[0],r=i[1];return null!=r&&r!==D&&(e=t(n,r,e)),e}var n=e.reduce(i,"");return function(e){var t=y.getTimestampInSeconds();return e=e?e+="|":e,e+="TS="+t}(n)}function l(e){var t=e.minutesToLive,i="";return(d.idSyncDisableSyncs||d.disableIdSyncs)&&(i=i||"Error: id syncs have been disabled"),"string"==typeof e.dpid&&e.dpid.length||(i=i||"Error: config.dpid is empty"),"string"==typeof e.url&&e.url.length||(i=i||"Error: config.url is empty"),void 0===t?t=20160:(t=parseInt(t,10),(isNaN(t)||t<=0)&&(i=i||"Error: config.minutesToLive needs to be a positive number")),{error:i,ttl:t}}if(!i||i.split("").reverse().join("")!==e)throw new Error("Please use `Visitor.getInstance` to instantiate Visitor.");var d=this;d.version="3.3.0";var c=a,u=c.Visitor;u.version=d.version,u.AuthState=_.AUTH_STATE,u.OptOut=_.OPT_OUT,c.s_c_in||(c.s_c_il=[],c.s_c_in=0),d._c="Visitor",d._il=c.s_c_il,d._in=c.s_c_in,d._il[d._in]=d,c.s_c_in++,d._instanceType="regular",d._log={requests:[]},d.marketingCloudOrgID=e,d.cookieName="AMCV_"+e,d.sessionCookieName="AMCVS_"+e,d.cookieDomain=N(),d.cookieDomain===c.location.hostname&&(d.cookieDomain=""),d.loadSSL=c.location.protocol.toLowerCase().indexOf("https")>=0,d.loadTimeout=3e4,d.CORSErrors=[],d.marketingCloudServer=d.audienceManagerServer="dpm.demdex.net",d.sdidParamExpiry=30;var f=c.document,g=null,m="MCMID",h="MCIDTS",p="A",C="MCAID",S="AAM",I="MCAAMB",D="NONE",A=function(e){return!Object.prototype[e]},M=B(d);d.FIELDS=_.FIELDS,d.cookieRead=function(e){e=encodeURIComponent(e);var t=(";"+f.cookie).split(" ").join(";"),i=t.indexOf(";"+e+"="),n=i<0?i:t.indexOf(";",i+1);return i<0?"":decodeURIComponent(t.substring(i+2+e.length,n<0?t.length:n))},d.cookieWrite=function(e,t,i){var n,r=d.cookieLifetime,a="";if(t=""+t,r=r?(""+r).toUpperCase():"",i&&"SESSION"!==r&&"NONE"!==r){if(n=""!==t?parseInt(r||0,10):-60)i=new Date,i.setTime(i.getTime()+1e3*n);else if(1===i){i=new Date;var s=i.getYear();i.setYear(s+2+(s<1900?1900:0))}}else i=0;return e&&"NONE"!==r?(d.configs&&d.configs.secureCookie&&"https:"===location.protocol&&(a="Secure"),f.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; path=/;"+(i?" expires="+i.toGMTString()+";":"")+(d.cookieDomain?" domain="+d.cookieDomain+";":"")+a,d.cookieRead(e)===t):0},d.resetState=function(e){e?d._mergeServerState(e):s()},d._isAllowedDone=!1,d._isAllowedFlag=!1,d.isAllowed=function(){return d._isAllowedDone||(d._isAllowedDone=!0,(d.cookieRead(d.cookieName)||d.cookieWrite(d.cookieName,"T",1))&&(d._isAllowedFlag=!0)),d._isAllowedFlag},d.setMarketingCloudVisitorID=function(e){d._setMarketingCloudFields(e)},d._use1stPartyMarketingCloudServer=!1,d.getMarketingCloudVisitorID=function(e,t){if(d.isAllowed()){d.marketingCloudServer&&d.marketingCloudServer.indexOf(".demdex.net")<0&&(d._use1stPartyMarketingCloudServer=!0);var i=d._getAudienceManagerURLData("_setMarketingCloudFields"),n=i.url;return d._getRemoteField(m,n,e,t,i)}return""},d.getVisitorValues=function(e,t){var i={MCMID:{fn:d.getMarketingCloudVisitorID,args:[!0],context:d},MCOPTOUT:{fn:d.isOptedOut,args:[void 0,!0],context:d},MCAID:{fn:d.getAnalyticsVisitorID,args:[!0],context:d},MCAAMLH:{fn:d.getAudienceManagerLocationHint,args:[!0],context:d},MCAAMB:{fn:d.getAudienceManagerBlob,args:[!0],context:d}},n=t&&t.length?y.pluck(i,t):i;V(n,e)},d._currentCustomerIDs={},d._customerIDsHashChanged=!1,d._newCustomerIDsHash="",d.setCustomerIDs=function(e){function t(){d._customerIDsHashChanged=!1}if(d.isAllowed()&&e){if(!v.isObject(e)||v.isObjectEmpty(e))return!1;d._readVisitor();var i,n;for(i in e)if(A(i)&&(n=e[i]))if("object"==typeof n){var r={};n.id&&(r.id=n.id),void 0!=n.authState&&(r.authState=n.authState),d._currentCustomerIDs[i]=r}else d._currentCustomerIDs[i]={id:n};var a=d.getCustomerIDs(),s=d._getField("MCCIDH"),o="";s||(s=0);for(i in a)A(i)&&(n=a[i],o+=(o?"|":"")+i+"|"+(n.id?n.id:"")+(n.authState?n.authState:""));d._newCustomerIDsHash=String(d._hash(o)),d._newCustomerIDsHash!==s&&(d._customerIDsHashChanged=!0,d._mapCustomerIDs(t))}},d.getCustomerIDs=function(){d._readVisitor();var e,t,i={};for(e in d._currentCustomerIDs)A(e)&&(t=d._currentCustomerIDs[e],i[e]||(i[e]={}),t.id&&(i[e].id=t.id),void 0!=t.authState?i[e].authState=t.authState:i[e].authState=u.AuthState.UNKNOWN);return i},d.setAnalyticsVisitorID=function(e){d._setAnalyticsFields(e)},d.getAnalyticsVisitorID=function(e,t,i){if(!y.isTrackingServerPopulated()&&!i)return d._callCallback(e,[""]),"";if(d.isAllowed()){var n="";if(i||(n=d.getMarketingCloudVisitorID(function(t){d.getAnalyticsVisitorID(e,!0)})),n||i){var r=i?d.marketingCloudServer:d.trackingServer,a="";d.loadSSL&&(i?d.marketingCloudServerSecure&&(r=d.marketingCloudServerSecure):d.trackingServerSecure&&(r=d.trackingServerSecure));var s={};if(r){var o="http"+(d.loadSSL?"s":"")+"://"+r+"/id",l="d_visid_ver="+d.version+"&mcorgid="+encodeURIComponent(d.marketingCloudOrgID)+(n?"&mid="+encodeURIComponent(n):"")+(d.idSyncDisable3rdPartySyncing||d.disableThirdPartyCookies?"&d_coppa=true":""),c=["s_c_il",d._in,"_set"+(i?"MarketingCloud":"Analytics")+"Fields"];a=o+"?"+l+"&callback=s_c_il%5B"+d._in+"%5D._set"+(i?"MarketingCloud":"Analytics")+"Fields",s.corsUrl=o+"?"+l,s.callback=c}return s.url=a,d._getRemoteField(i?m:C,a,e,t,s)}}return""},d.getAudienceManagerLocationHint=function(e,t){if(d.isAllowed()){if(d.getMarketingCloudVisitorID(function(t){d.getAudienceManagerLocationHint(e,!0)})){var i=d._getField(C);if(!i&&y.isTrackingServerPopulated()&&(i=d.getAnalyticsVisitorID(function(t){d.getAudienceManagerLocationHint(e,!0)})),i||!y.isTrackingServerPopulated()){var n=d._getAudienceManagerURLData(),r=n.url;return d._getRemoteField("MCAAMLH",r,e,t,n)}}}return""},d.getLocationHint=d.getAudienceManagerLocationHint,d.getAudienceManagerBlob=function(e,t){if(d.isAllowed()){if(d.getMarketingCloudVisitorID(function(t){d.getAudienceManagerBlob(e,!0)})){var i=d._getField(C);if(!i&&y.isTrackingServerPopulated()&&(i=d.getAnalyticsVisitorID(function(t){d.getAudienceManagerBlob(e,!0)})),i||!y.isTrackingServerPopulated()){var n=d._getAudienceManagerURLData(),r=n.url;return d._customerIDsHashChanged&&d._setFieldExpire(I,-1),d._getRemoteField(I,r,e,t,n)}}}return""},d._supplementalDataIDCurrent="",d._supplementalDataIDCurrentConsumed={},d._supplementalDataIDLast="",d._supplementalDataIDLastConsumed={},d.getSupplementalDataID=function(e,t){d._supplementalDataIDCurrent||t||(d._supplementalDataIDCurrent=d._generateID(1));var i=d._supplementalDataIDCurrent;return d._supplementalDataIDLast&&!d._supplementalDataIDLastConsumed[e]?(i=d._supplementalDataIDLast,d._supplementalDataIDLastConsumed[e]=!0):i&&(d._supplementalDataIDCurrentConsumed[e]&&(d._supplementalDataIDLast=d._supplementalDataIDCurrent,d._supplementalDataIDLastConsumed=d._supplementalDataIDCurrentConsumed,d._supplementalDataIDCurrent=i=t?"":d._generateID(1),d._supplementalDataIDCurrentConsumed={}),i&&(d._supplementalDataIDCurrentConsumed[e]=!0)),i},d.getOptOut=function(e,t){if(d.isAllowed()){var i=d._getAudienceManagerURLData("_setMarketingCloudFields"),n=i.url;return d._getRemoteField("MCOPTOUT",n,e,t,i)}return""},d.isOptedOut=function(e,t,i){if(d.isAllowed()){t||(t=u.OptOut.GLOBAL);var n=d.getOptOut(function(i){var n=i===u.OptOut.GLOBAL||i.indexOf(t)>=0;d._callCallback(e,[n])},i);return n?n===u.OptOut.GLOBAL||n.indexOf(t)>=0:null}return!1},d._fields=null,d._fieldsExpired=null,d._hash=function(e){var t,i,n=0;if(e)for(t=0;t<e.length;t++)i=e.charCodeAt(t),n=(n<<5)-n+i,n&=n;return n},d._generateID=H,d._generateLocalMID=function(){var e=d._generateID(0);return T.isClientSideMarketingCloudVisitorID=!0,e},d._callbackList=null,d._callCallback=function(e,t){try{"function"==typeof e?e.apply(c,t):e[1].apply(e[0],t)}catch(e){}},d._registerCallback=function(e,t){t&&(null==d._callbackList&&(d._callbackList={}),void 0==d._callbackList[e]&&(d._callbackList[e]=[]),d._callbackList[e].push(t))},d._callAllCallbacks=function(e,t){if(null!=d._callbackList){var i=d._callbackList[e];if(i)for(;i.length>0;)d._callCallback(i.shift(),t)}},d._addQuerystringParam=function(e,t,i,n){var r=encodeURIComponent(t)+"="+encodeURIComponent(i),a=y.parseHash(e),s=y.hashlessUrl(e);if(-1===s.indexOf("?"))return s+"?"+r+a;var o=s.split("?"),l=o[0]+"?",d=o[1];return l+y.addQueryParamAtLocation(d,r,n)+a},d._extractParamFromUri=function(e,t){var i=new RegExp("[\\?&#]"+t+"=([^&#]*)"),n=i.exec(e);if(n&&n.length)return decodeURIComponent(n[1])},d._parseAdobeMcFromUrl=n(G.ADOBE_MC),d._parseAdobeMcSdidFromUrl=n(G.ADOBE_MC_SDID),d._attemptToPopulateSdidFromUrl=function(t){var i=d._parseAdobeMcSdidFromUrl(t),n=1e9;i&&i.TS&&(n=y.getTimestampInSeconds()-i.TS),i&&i.SDID&&i.MCORGID===e&&n<d.sdidParamExpiry&&(d._supplementalDataIDCurrent=i.SDID,d._supplementalDataIDCurrentConsumed.SDID_URL_PARAM=!0)},d._attemptToPopulateIdsFromUrl=function(){var t=d._parseAdobeMcFromUrl();if(t&&t.TS){var i=y.getTimestampInSeconds(),n=i-t.TS;if(Math.floor(n/60)>G.ADOBE_MC_TTL_IN_MIN||t.MCORGID!==e)return;r(t)}},d._mergeServerState=function(e){if(e)try{if(e=function(e){return y.isObject(e)?e:JSON.parse(e)}(e),e[d.marketingCloudOrgID]){var t=e[d.marketingCloudOrgID];!function(e){y.isObject(e)&&d.setCustomerIDs(e)}(t.customerIDs),s(t.sdid)}}catch(e){throw new Error("`serverState` has an invalid format.")}},d._timeout=null,d._loadData=function(e,t,i,n){t=d._addQuerystringParam(t,"d_fieldgroup",e,1),n.url=d._addQuerystringParam(n.url,"d_fieldgroup",e,1),n.corsUrl=d._addQuerystringParam(n.corsUrl,"d_fieldgroup",e,1),T.fieldGroupObj[e]=!0,n===Object(n)&&n.corsUrl&&"XMLHttpRequest"===M.corsMetadata.corsType&&M.fireCORS(n,i,e)},d._clearTimeout=function(e){null!=d._timeout&&d._timeout[e]&&(clearTimeout(d._timeout[e]),d._timeout[e]=0)},d._settingsDigest=0,d._getSettingsDigest=function(){if(!d._settingsDigest){var e=d.version;d.audienceManagerServer&&(e+="|"+d.audienceManagerServer),d.audienceManagerServerSecure&&(e+="|"+d.audienceManagerServerSecure),d._settingsDigest=d._hash(e)}return d._settingsDigest},d._readVisitorDone=!1,d._readVisitor=function(){if(!d._readVisitorDone){d._readVisitorDone=!0;var e,t,i,n,r,a,s=d._getSettingsDigest(),o=!1,l=d.cookieRead(d.cookieName),c=new Date;if(null==d._fields&&(d._fields={}),l&&"T"!==l)for(l=l.split("|"),l[0].match(/^[\-0-9]+$/)&&(parseInt(l[0],10)!==s&&(o=!0),l.shift()),l.length%2==1&&l.pop(),e=0;e<l.length;e+=2)t=l[e].split("-"),i=t[0],n=l[e+1],t.length>1?(r=parseInt(t[1],10),a=t[1].indexOf("s")>0):(r=0,a=!1),o&&("MCCIDH"===i&&(n=""),r>0&&(r=c.getTime()/1e3-60)),i&&n&&(d._setField(i,n,1),r>0&&(d._fields["expire"+i]=r+(a?"s":""),(c.getTime()>=1e3*r||a&&!d.cookieRead(d.sessionCookieName))&&(d._fieldsExpired||(d._fieldsExpired={}),d._fieldsExpired[i]=!0)));!d._getField(C)&&y.isTrackingServerPopulated()&&(l=d.cookieRead("s_vi"))&&(l=l.split("|"),l.length>1&&l[0].indexOf("v1")>=0&&(n=l[1],e=n.indexOf("["),e>=0&&(n=n.substring(0,e)),n&&n.match(G.VALID_VISITOR_ID_REGEX)&&d._setField(C,n)))}},d._appendVersionTo=function(e){var t="vVersion|"+d.version,i=e?d._getCookieVersion(e):null;return i?x.areVersionsDifferent(i,d.version)&&(e=e.replace(G.VERSION_REGEX,t)):e+=(e?"|":"")+t,e},d._writeVisitor=function(){var e,t,i=d._getSettingsDigest()
;for(e in d._fields)A(e)&&d._fields[e]&&"expire"!==e.substring(0,6)&&(t=d._fields[e],i+=(i?"|":"")+e+(d._fields["expire"+e]?"-"+d._fields["expire"+e]:"")+"|"+t);i=d._appendVersionTo(i),d.cookieWrite(d.cookieName,i,1)},d._getField=function(e,t){return null==d._fields||!t&&d._fieldsExpired&&d._fieldsExpired[e]?null:d._fields[e]},d._setField=function(e,t,i){null==d._fields&&(d._fields={}),d._fields[e]=t,i||d._writeVisitor()},d._getFieldList=function(e,t){var i=d._getField(e,t);return i?i.split("*"):null},d._setFieldList=function(e,t,i){d._setField(e,t?t.join("*"):"",i)},d._getFieldMap=function(e,t){var i=d._getFieldList(e,t);if(i){var n,r={};for(n=0;n<i.length;n+=2)r[i[n]]=i[n+1];return r}return null},d._setFieldMap=function(e,t,i){var n,r=null;if(t){r=[];for(n in t)A(n)&&(r.push(n),r.push(t[n]))}d._setFieldList(e,r,i)},d._setFieldExpire=function(e,t,i){var n=new Date;n.setTime(n.getTime()+1e3*t),null==d._fields&&(d._fields={}),d._fields["expire"+e]=Math.floor(n.getTime()/1e3)+(i?"s":""),t<0?(d._fieldsExpired||(d._fieldsExpired={}),d._fieldsExpired[e]=!0):d._fieldsExpired&&(d._fieldsExpired[e]=!1),i&&(d.cookieRead(d.sessionCookieName)||d.cookieWrite(d.sessionCookieName,"1"))},d._findVisitorID=function(e){return e&&("object"==typeof e&&(e=e.d_mid?e.d_mid:e.visitorID?e.visitorID:e.id?e.id:e.uuid?e.uuid:""+e),e&&"NOTARGET"===(e=e.toUpperCase())&&(e=D),e&&(e===D||e.match(G.VALID_VISITOR_ID_REGEX))||(e="")),e},d._setFields=function(e,t){if(d._clearTimeout(e),null!=d._loading&&(d._loading[e]=!1),T.fieldGroupObj[e]&&T.setState(e,!1),"MC"===e){!0!==T.isClientSideMarketingCloudVisitorID&&(T.isClientSideMarketingCloudVisitorID=!1);var i=d._getField(m);if(!i||d.overwriteCrossDomainMCIDAndAID){if(!(i="object"==typeof t&&t.mid?t.mid:d._findVisitorID(t))){if(d._use1stPartyMarketingCloudServer&&!d.tried1stPartyMarketingCloudServer)return d.tried1stPartyMarketingCloudServer=!0,void d.getAnalyticsVisitorID(null,!1,!0);i=d._generateLocalMID()}d._setField(m,i)}i&&i!==D||(i=""),"object"==typeof t&&((t.d_region||t.dcs_region||t.d_blob||t.blob)&&d._setFields(S,t),d._use1stPartyMarketingCloudServer&&t.mid&&d._setFields(p,{id:t.id})),d._callAllCallbacks(m,[i])}if(e===S&&"object"==typeof t){var n=604800;void 0!=t.id_sync_ttl&&t.id_sync_ttl&&(n=parseInt(t.id_sync_ttl,10));var r=b.getRegionAndCheckIfChanged(t,n);d._callAllCallbacks("MCAAMLH",[r]);var a=d._getField(I);(t.d_blob||t.blob)&&(a=t.d_blob,a||(a=t.blob),d._setFieldExpire(I,n),d._setField(I,a)),a||(a=""),d._callAllCallbacks(I,[a]),!t.error_msg&&d._newCustomerIDsHash&&d._setField("MCCIDH",d._newCustomerIDsHash)}if(e===p){var s=d._getField(C);s&&!d.overwriteCrossDomainMCIDAndAID||(s=d._findVisitorID(t),s?s!==D&&d._setFieldExpire(I,-1):s=D,d._setField(C,s)),s&&s!==D||(s=""),d._callAllCallbacks(C,[s])}if(d.idSyncDisableSyncs||d.disableIdSyncs)b.idCallNotProcesssed=!0;else{b.idCallNotProcesssed=!1;var o={};o.ibs=t.ibs,o.subdomain=t.subdomain,b.processIDCallData(o)}if(t===Object(t)){var l,c;d.isAllowed()&&(l=d._getField("MCOPTOUT")),l||(l=D,t.d_optout&&t.d_optout instanceof Array&&(l=t.d_optout.join(",")),c=parseInt(t.d_ottl,10),isNaN(c)&&(c=7200),d._setFieldExpire("MCOPTOUT",c,!0),d._setField("MCOPTOUT",l)),d._callAllCallbacks("MCOPTOUT",[l])}},d._loading=null,d._getRemoteField=function(e,t,i,n,r){var a,s="",o=y.isFirstPartyAnalyticsVisitorIDCall(e),l={MCAAMLH:!0,MCAAMB:!0};if(d.isAllowed()){d._readVisitor(),s=d._getField(e,!0===l[e]);if(function(){return(!s||d._fieldsExpired&&d._fieldsExpired[e])&&(!d.disableThirdPartyCalls||o)}()){if(e===m||"MCOPTOUT"===e?a="MC":"MCAAMLH"===e||e===I?a=S:e===C&&(a=p),a)return!t||null!=d._loading&&d._loading[a]||(null==d._loading&&(d._loading={}),d._loading[a]=!0,d._loadData(a,t,function(t){if(!d._getField(e)){t&&T.setState(a,!0);var i="";e===m?i=d._generateLocalMID():a===S&&(i={error_msg:"timeout"}),d._setFields(a,i)}},r)),d._registerCallback(e,i),s||(t||d._setFields(a,{id:D}),"")}else s||(e===m?(d._registerCallback(e,i),s=d._generateLocalMID(),d.setMarketingCloudVisitorID(s)):e===C?(d._registerCallback(e,i),s="",d.setAnalyticsVisitorID(s)):(s="",n=!0))}return e!==m&&e!==C||s!==D||(s="",n=!0),i&&n&&d._callCallback(i,[s]),s},d._setMarketingCloudFields=function(e){d._readVisitor(),d._setFields("MC",e)},d._mapCustomerIDs=function(e){d.getAudienceManagerBlob(e,!0)},d._setAnalyticsFields=function(e){d._readVisitor(),d._setFields(p,e)},d._setAudienceManagerFields=function(e){d._readVisitor(),d._setFields(S,e)},d._getAudienceManagerURLData=function(e){var t=d.audienceManagerServer,i="",n=d._getField(m),r=d._getField(I,!0),a=d._getField(C),s=a&&a!==D?"&d_cid_ic=AVID%01"+encodeURIComponent(a):"";if(d.loadSSL&&d.audienceManagerServerSecure&&(t=d.audienceManagerServerSecure),t){var o,l,c=d.getCustomerIDs();if(c)for(o in c)A(o)&&(l=c[o],s+="&d_cid_ic="+encodeURIComponent(o)+"%01"+encodeURIComponent(l.id?l.id:"")+(l.authState?"%01"+l.authState:""));e||(e="_setAudienceManagerFields");var u="http"+(d.loadSSL?"s":"")+"://"+t+"/id",f="d_visid_ver="+d.version+"&d_rtbd=json&d_ver=2"+(!n&&d._use1stPartyMarketingCloudServer?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(d.marketingCloudOrgID)+"&d_nsid="+(d.idSyncContainerID||0)+(n?"&d_mid="+encodeURIComponent(n):"")+(d.idSyncDisable3rdPartySyncing||d.disableThirdPartyCookies?"&d_coppa=true":"")+(!0===g?"&d_coop_safe=1":!1===g?"&d_coop_unsafe=1":"")+(r?"&d_blob="+encodeURIComponent(r):"")+s,_=["s_c_il",d._in,e];return i=u+"?"+f+"&d_cb=s_c_il%5B"+d._in+"%5D."+e,{url:i,corsUrl:u+"?"+f,callback:_}}return{url:i}},d.appendVisitorIDsTo=function(e){try{var t=[[m,d._getField(m)],[C,d._getField(C)],["MCORGID",d.marketingCloudOrgID]];return d._addQuerystringParam(e,G.ADOBE_MC,o(t))}catch(t){return e}},d.appendSupplementalDataIDTo=function(e,t){if(!(t=t||d.getSupplementalDataID(y.generateRandomString(),!0)))return e;try{var i=o([["SDID",t],["MCORGID",d.marketingCloudOrgID]]);return d._addQuerystringParam(e,G.ADOBE_MC_SDID,i)}catch(t){return e}};var y={parseHash:function(e){var t=e.indexOf("#");return t>0?e.substr(t):""},hashlessUrl:function(e){var t=e.indexOf("#");return t>0?e.substr(0,t):e},addQueryParamAtLocation:function(e,t,i){var n=e.split("&");return i=null!=i?i:n.length,n.splice(i,0,t),n.join("&")},isFirstPartyAnalyticsVisitorIDCall:function(e,t,i){if(e!==C)return!1;var n;return t||(t=d.trackingServer),i||(i=d.trackingServerSecure),!("string"!=typeof(n=d.loadSSL?i:t)||!n.length)&&(n.indexOf("2o7.net")<0&&n.indexOf("omtrdc.net")<0)},isObject:function(e){return Boolean(e&&e===Object(e))},removeCookie:function(e){document.cookie=encodeURIComponent(e)+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"+(d.cookieDomain?" domain="+d.cookieDomain+";":"")},isTrackingServerPopulated:function(){return!!d.trackingServer||!!d.trackingServerSecure},getTimestampInSeconds:function(){return Math.round((new Date).getTime()/1e3)},parsePipeDelimetedKeyValues:function(e){return e.split("|").reduce(function(e,t){var i=t.split("=");return e[i[0]]=decodeURIComponent(i[1]),e},{})},generateRandomString:function(e){e=e||5;for(var t="",i="abcdefghijklmnopqrstuvwxyz0123456789";e--;)t+=i[Math.floor(Math.random()*i.length)];return t},parseBoolean:function(e){return"true"===e||"false"!==e&&null},replaceMethodsWithFunction:function(e,t){for(var i in e)e.hasOwnProperty(i)&&"function"==typeof e[i]&&(e[i]=t);return e},pluck:function(e,t){return t.reduce(function(t,i){return e[i]&&(t[i]=e[i]),t},Object.create(null))}};d._helpers=y;var b=q(d,u);d._destinationPublishing=b,d.timeoutMetricsLog=[];var T={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,fieldGroupObj:{},setState:function(e,t){switch(e){case"MC":!1===t?!0!==this.MCIDCallTimedOut&&(this.MCIDCallTimedOut=!1):this.MCIDCallTimedOut=t;break;case p:!1===t?!0!==this.AnalyticsIDCallTimedOut&&(this.AnalyticsIDCallTimedOut=!1):this.AnalyticsIDCallTimedOut=t;break;case S:!1===t?!0!==this.AAMIDCallTimedOut&&(this.AAMIDCallTimedOut=!1):this.AAMIDCallTimedOut=t}}};d.isClientSideMarketingCloudVisitorID=function(){return T.isClientSideMarketingCloudVisitorID},d.MCIDCallTimedOut=function(){return T.MCIDCallTimedOut},d.AnalyticsIDCallTimedOut=function(){return T.AnalyticsIDCallTimedOut},d.AAMIDCallTimedOut=function(){return T.AAMIDCallTimedOut},d.idSyncGetOnPageSyncInfo=function(){return d._readVisitor(),d._getField("MCSYNCSOP")},d.idSyncByURL=function(e){var t=l(e||{});if(t.error)return t.error;var i,n,r=e.url,a=encodeURIComponent,s=b;return r=r.replace(/^https:/,"").replace(/^http:/,""),i=v.encodeAndBuildRequest(["",e.dpid,e.dpuuid||""],","),n=["ibs",a(e.dpid),"img",a(r),t.ttl,"",i],s.addMessage(n.join("|")),s.requestToProcess(),"Successfully queued"},d.idSyncByDataSource=function(e){return e===Object(e)&&"string"==typeof e.dpuuid&&e.dpuuid.length?(e.url="//dpm.demdex.net/ibs:dpid="+e.dpid+"&dpuuid="+e.dpuuid,d.idSyncByURL(e)):"Error: config or config.dpuuid is empty"},d.publishDestinations=function(e,t,i){if(i="function"==typeof i?i:function(){},"string"!=typeof e||!e.length)return void i({error:"subdomain is not a populated string."});if(!(t instanceof Array&&t.length))return void i({error:"messages is not a populated array."});var n=b;if(!n.readyToAttachIframePreliminary())return void i({error:"The destination publishing iframe is disabled in the Visitor library."});var r=!1;if(t.forEach(function(e){"string"==typeof e&&e.length&&(n.addMessage(e),r=!0)}),!r)return void i({error:"None of the messages are populated strings."});n.iframe?(i({message:"The destination publishing iframe is already attached and loaded."}),n.requestToProcess()):!d.subdomain&&d._getField(m)?(n.subdomain=e,n.doAttachIframe=!0,n.url=n.getUrl(),n.readyToAttachIframe()?(n.iframeLoadedCallbacks.push(function(e){i({message:"Attempted to attach and load the destination publishing iframe through this API call. Result: "+(e.message||"no result")})}),n.attachIframe()):i({error:"Encountered a problem in attempting to attach and load the destination publishing iframe through this API call."})):n.iframeLoadedCallbacks.push(function(e){i({message:"Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: "+(e.message||"no result")})})},d._getCookieVersion=function(e){e=e||d.cookieRead(d.cookieName);var t=G.VERSION_REGEX.exec(e);return t&&t.length>1?t[1]:null},d._resetAmcvCookie=function(e){var t=d._getCookieVersion();t&&!x.isLessThan(t,e)||y.removeCookie(d.cookieName)},d.setAsCoopSafe=function(){g=!0},d.setAsCoopUnsafe=function(){g=!1},d.init=function(){!function(){if(t&&"object"==typeof t){d.configs=Object.create(null);for(var e in t)A(e)&&(d[e]=t[e],d.configs[e]=t[e]);d.idSyncContainerID=d.idSyncContainerID||0,g="boolean"==typeof d.isCoopSafe?d.isCoopSafe:y.parseBoolean(d.isCoopSafe),d.resetBeforeVersion&&d._resetAmcvCookie(d.resetBeforeVersion),d._attemptToPopulateIdsFromUrl(),d._attemptToPopulateSdidFromUrl(),d._readVisitor();var i=d._getField(h),n=Math.ceil((new Date).getTime()/G.MILLIS_PER_DAY);d.idSyncDisableSyncs||d.disableIdSyncs||!b.canMakeSyncIDCall(i,n)||(d._setFieldExpire(I,-1),d._setField(h,n)),d.getMarketingCloudVisitorID(),d.getAudienceManagerLocationHint(),d.getAudienceManagerBlob(),d._mergeServerState(d.serverState)}else d._attemptToPopulateIdsFromUrl(),d._attemptToPopulateSdidFromUrl()}(),function(){if(!d.idSyncDisableSyncs&&!d.disableIdSyncs){b.checkDPIframeSrc();var e=function(){var e=b;e.readyToAttachIframe()&&e.attachIframe()};c.addEventListener("load",function(){u.windowLoaded=!0,e()});try{U.receiveMessage(function(e){b.receiveMessage(e.data)},b.iframeHost)}catch(e){}}}(),function(){d.whitelistIframeDomains&&G.POST_MESSAGE_ENABLED&&(d.whitelistIframeDomains=d.whitelistIframeDomains instanceof Array?d.whitelistIframeDomains:[d.whitelistIframeDomains],d.whitelistIframeDomains.forEach(function(t){var i=new k(e,t),n=w(d,i);U.receiveMessage(n,t)}))}()}};return W.getInstance=function(e,t){if(!e)throw new Error("Visitor requires Adobe Marketing Cloud Org ID.");e.indexOf("@")<0&&(e+="@AdobeOrg");var i=function(){var t=a.s_c_il;if(t)for(var i=0;i<t.length;i++){var n=t[i];if(n&&"Visitor"===n._c&&n.marketingCloudOrgID===e)return n}}();if(i)return i;var n=e,r=n.split("").reverse().join(""),s=new W(e,null,r);t===Object(t)&&t.cookieDomain&&(s.cookieDomain=t.cookieDomain),function(){a.s_c_il.splice(--a.s_c_in,1)}();var o=v.getIeVersion();if("number"==typeof o&&o<10)return s._helpers.replaceMethodsWithFunction(s,function(){});var l=function(){try{return a.self!==a.parent}catch(e){return!0}}()&&!function(e){return e.cookieWrite("TEST_AMCV_COOKIE","T",1),"T"===e.cookieRead("TEST_AMCV_COOKIE")&&(e._helpers.removeCookie("TEST_AMCV_COOKIE"),!0)}(s)&&a.parent?new E(e,t,s,a.parent):new W(e,t,r);return s=null,l.init(),l},function(){function e(){W.windowLoaded=!0}a.addEventListener?a.addEventListener("load",e):a.attachEvent&&a.attachEvent("onload",e),W.codeLoadEnd=(new Date).getTime()}(),W.config=X,a.Visitor=W,W}();// Dynamic Tag Management Library
// Property: Wiley Online Library on Literatum
// All code and conventions are protected by copyright
// Adobe Systems Incorporated

(function(window, document, undefined) {
// Satellite
// =========
//
// Satellite *core*. Yeah, you want it.
//
// In this first section, we have a some useful utility functions.
var ToString = Object.prototype.toString

var Overrides = window._satellite && window._satellite.override

function assert(cond, msg){
  if (!cond){
    throw new Error(msg || "Assertion Failure")
  }
}

var SL = {
  initialized: false,

  // `$data(elm, prop, [val])`
  // ----------------------------
  //
  // Our own `$data()` method, [a la jQuery](http://api.jquery.com/jQuery.data/)
  // , used to get or set
  // properties on DOM elements without going insane.
  // `uuid` and `dataCache` are used by `$data()`
  //
  // Parameters:
  //
  // - `elm` - the element to get or set a property to
  // - `prop` - the property name
  // - `val` - the value of the property, if omitted, the method will
  //      return the existing value of the property, if any
  $data: function(elm, prop, val){
    if (!elm) return;
    var __satellite__ = '__satellite__'
    var cache = SL.dataCache
    var uuid = elm[__satellite__]
    if (!uuid) uuid = elm[__satellite__] = SL.uuid++
    var datas = cache[uuid]
    if (!datas) datas = cache[uuid] = {}
    if (val === undefined)
      return datas[prop]
    else
      datas[prop] = val
  },
  uuid: 1,
  dataCache: {},

  // `keys(object)`
  // --------------
  //
  // Return all keys of an object in an array.
  keys: function(obj){
    var ret = []
    for (var key in obj) 
      if (obj.hasOwnProperty(key))
        ret.push(key)
    return ret
  },

  // `values(object)`
  // ----------------
  //
  // Return all values of an object in an array.
  values: function(obj){
    var ret = []
    for (var key in obj) 
      if (obj.hasOwnProperty(key))
        ret.push(obj[key])
    return ret
  },

  // `isArray(thing)`
  // --------------
  //
  // Returns whether the given thing is an array.
  isArray: Array.isArray || function(thing){
    return ToString.apply(thing) === "[object Array]"
  },

  // `isObject(thing)`
  // -----------------
  //
  // Returns whether the given thing is a plain object.
  isObject: function(thing){
    return thing != null && !SL.isArray(thing) &&
      typeof thing === 'object'
  },

  // `isString(thing)`
  // -----------------
  //
  // Returns whether thing is a string
  isString: function(thing){
    return typeof thing === 'string'
  },

  // `isNumber(thing)`
  // -----------------
  //
  // Returns whether thing is a number
  isNumber: function(thing){
    return ToString.apply(thing) === '[object Number]' && !SL.isNaN(thing)
  },

  // `isNaN(thing)`
  // --------------
  //
  // Return whether thing is NaN
  isNaN: function(thing){
    return thing !== thing
  },

  // `isRegex(thing)`
  // ----------------
  //
  // Returns whether thing is a RegExp object
  isRegex: function(thing){
    return thing instanceof RegExp
  },

  // `isLinkTag(thing)`
  // ----------------
  //
  // Returns whether thing is a DOM link element
  isLinkTag: function(thing){
    return !!(thing && thing.nodeName &&
      thing.nodeName.toLowerCase() === 'a')
  },

  // `each(arr, func, [context])`
  // ------------------
  //
  // A handy method for array iteration wo having to write a for-loop.
  //
  // Parameters:
  //
  // - `arr` - an array
  // - `func(item, index, arr)` - a function which accepts each item in the array
  //      once. I takes these arguments
  //      * `item` - an item
  //      * `index` - the array index of said item
  //      * `arr` - the array
  // - `context` - the context to be bound to `func` when it is invoked
  each: function(arr, func, context){
    for (var i = 0, len = arr.length; i < len; i++)
      func.call(context, arr[i], i, arr)
  },

  // `map(arr, func)`
  // ----------------
  //
  // A handy method for mapping an array to another array using a 1-to-1 mapping
  // for each element
  //
  // Parameters:
  //
  // Parameters are the same as `SL.each`, except that `func` is expected to return
  // a the value you want in the corresponding index of the returned array.
  map: function(arr, func, context){
    var ret = []
    for (var i = 0, len = arr.length; i < len; i++)
      ret.push(func.call(context, arr[i], i, arr))
    return ret
  },

  // `filter(arr, cond)`
  // -------------------
  //
  // Handy method for take an array and filtering down to a subset of the elements.
  //
  // Parameters:
  //
  // Parameters are the same as `SL.each` except the second argument is `cond`
  // instead of `func` and it is expected to return a truthy value respresenting
  // whether to include this item in the return array or not.
  filter: function(arr, cond, context){
    var ret = []
    for (var i = 0, len = arr.length; i < len; i++){
      var item = arr[i]
      if (cond.call(context, item, i, arr))
        ret.push(item)
    }
    return ret
  },

  // `any(arr, cond, context)`
  // -------------------------
  //
  // Another array helper function. Returns true if `cond(item)` returns true
  // for any item in the array.
  any: function(arr, cond, context){
    for (var i = 0, len = arr.length; i < len; i++){
      var item = arr[i]
      if (cond.call(context, item, i, arr))
        return true
    }
    return false
  },

  // `every(arr, cond, context)`
  // ---------------------------
  //
  // Another array helper function. Returns true if `cond(item)` returns true
  // for every item in the array.
  every: function(arr, cond, context){
    var retval = true
    for (var i = 0, len = arr.length; i < len; i++){
      var item = arr[i]
      retval = retval && cond.call(context, item, i, arr)
    }
    return retval
  },

  // `contains(arr, obj)`
  // -----------------------
  //
  // Tells you whether an array contains an object.
  //
  // Parameters:
  //
  // - `arr` - said array
  // - `obj` - said object
  contains: function(arr, obj){
    return SL.indexOf(arr, obj) !== -1
  },

  // `indexOf(arr, obj)`
  // -------------------
  //
  // Return the index of an object within an array.
  //
  // Parameters;
  //
  // - `arr` - said array
  // - `obj` - said object
  indexOf: function(arr, obj){
    if (arr.indexOf)
      return arr.indexOf(obj)
    for (var i = arr.length; i--;)
      if (obj === arr[i])
        return i
    return -1
  },


  // `find(arr, obj)`
  // -------------------
  //
  // Return the index of an object within an array.
  //
  // Parameters;
  //
  // - `arr` - said array
  // - `obj` - said object
  find: function(arr, cond, context){
    var ret = []
    if (!arr) return null
    for (var i = 0, len = arr.length; i < len; i++){
      var item = arr[i]
      if (cond.call(context, item, i, arr))
        return item
    }
    return null
  },

  // `textMatch(str, str_or_regex)`
  // ------------------------------
  //
  // Perform a string match based on another string or a regex.
  //
  // Parameters:
  //
  // `str` - the input string to be matched
  // `str_or_regex` - the pattern to match against, if this is a string, it requires exact match, if
  //      it's a regex, then it will do regex match
  textMatch: function(str, pattern){
    if (pattern == null) throw new Error('Illegal Argument: Pattern is not present')
    if (str == null) return false
    if (typeof pattern === 'string') return str === pattern
    else if (pattern instanceof RegExp) return pattern.test(str)
    else return false
  },

  // `stringify(obj, [seenValues])`
  // ------------------------------
  //
  // Stringify any type of object.
  //
  // Parameters:
  //
  // `obj` - the object that needs to be stringified
  // `seenValues` - pool of parsed resources; used to avoid circular references;
  stringify: function(obj, seenValues){
    seenValues = seenValues || [];
    if (SL.isObject(obj)) {
      if (SL.contains(seenValues, obj)) {
        return '<Cycle>';
      } else {
        seenValues.push(obj);
      }
    }

    if (SL.isArray(obj)) {
      return '[' + SL.map(obj, function(value){
        return SL.stringify(value, seenValues)
      }).join(',') + ']';
    } else if (SL.isString(obj)) {
      return '"' + String(obj) + '"';
    } if (SL.isObject(obj)) {
      var data = [];
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
          data.push(prop + ': ' + SL.stringify(obj[prop], seenValues));
      }
      return '{' + data.join(', ') + '}';
    } else {
      return String(obj);
    }
  },

  // `trim(str)`
  // -----------
  //
  // Trims a string.
  //
  // Parameters:
  //
  // `str` - the input string to be trimmed.
  trim: function(str){
    if (str == null) return null
    if (str.trim){
      return str.trim()
    }else{
      return str.replace(/^ */, '').replace(/ *$/, '')
    }
  },

  // `bind(func, context)`
  // ---------------------
  //
  // Binds a context permanently to a context. The returned function is a new function
  // which - when called - will call the passed in function with `context` bound to it.
  //
  // Parameters:
  //
  // `func` - a function
  // `context` - an object to be bound as the context of this function
  bind: function(func, context) {
    return function() {
      return func.apply(context, arguments)
    }
  },

  // `throttle(fn, delay)`
  // ---------------------
  //
  // *Throttles* a function `fn` to be called no more than once during the interval
  // specified by `delay`.
  //
  // Parameters:
  //
  // - `fn` - a function
  // - `delay` - delay in milliseconds
  //
  // *Throttle function stolen from
  //     <http://remysharp.com/2010/07/21/throttling-function-calls/>*
  throttle: function(fn, delay) {
    var timer = null;
    return function () {
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  },

  // `domReady(callback)`
  // --------------------
  //
  // Registers a callback to be called when the DOM is fully parsed and loaded.
  //
  // Parameters:
  //
  // - `callback` - a function to be called at `domready`
  //
  // *domReady is borrowed from <https://github.com/ded/domready>*
  domReady: (function (ready) {

    var fns = [], fn, f = false
      , doc = document
      , testEl = doc.documentElement
      , hack = testEl.doScroll
      , domContentLoaded = 'DOMContentLoaded'
      , addEventListener = 'addEventListener'
      , onreadystatechange = 'onreadystatechange'
      , loaded = /^loade|^c/.test(doc.readyState)

    function flush(f) {
      loaded = 1
      while (f = fns.shift()) f()
    }

    doc[addEventListener] && doc[addEventListener](domContentLoaded, fn = function () {
      doc.removeEventListener(domContentLoaded, fn, f)
      flush()
    }, f)


    hack && doc.attachEvent(onreadystatechange, (fn = function () {
      if (/^c/.test(doc.readyState)) {
        doc.detachEvent(onreadystatechange, fn)
        flush()
      }
    }))

    return (ready = hack ?
      function (fn) {
        self != top ?
          loaded ? fn() : fns.push(fn) :
          function () {
            try {
              testEl.doScroll('left')
            } catch (e) {
              return setTimeout(function() { ready(fn) }, 50)
            }
            fn()
          }()
      } :
      function (fn) {
        loaded ? fn() : fns.push(fn)
      })
  }()),

  // `loadScript(url, [callback])`
  // -----------------------------
  //
  // Load an external script.
  //
  // Parameters:
  //
  // - `url` - the URL of the script
  // - `callback`(optional) - the function to be called after the script has loaded.
  loadScript: function(url, callback){
    var script = document.createElement('script')
    SL.scriptOnLoad(url, script, callback)
    script.src = url
    document.getElementsByTagName('head')[0]
      .appendChild(script)
  },

  scriptOnLoad: function(url, script, callback){
    function cb(err){
      if (err) SL.logError(err)
      if (callback) callback(err)
    }
    if ('onload' in script){
      script.onload = function(){
        cb()
      }
      script.onerror = function(){
        cb(new Error('Failed to load script ' + url))
      }
    }else if ('readyState' in script){
      script.onreadystatechange = function(){
        var rs = script.readyState
        if (rs === 'loaded' || rs === 'complete'){
          script.onreadystatechange = null
          cb()
        }
      }
    }
  },

  // `loadScriptOnce(url, [callback])`
  // -----------------------------
  //
  // Load an external script only if it hasn't been loaded until now.
  //
  // Parameters:
  //
  // - `url` - the URL of the script
  // - `callback`(optional) - the function to be called after the script has loaded.
  loadScriptOnce: function(url, callback){
    if (SL.loadedScriptRegistry[url]) return

    SL.loadScript(url, function(err) {
      if (!err) {
        SL.loadedScriptRegistry[url] = true
      }

      if (callback) callback(err)
    })
  },

  loadedScriptRegistry: {},

  // `loadScriptSync(url)`
  // -----------------------------
  //
  // Load an external script using document.write.
  //
  // Parameters:
  //
  // - `url` - the URL of the script
  loadScriptSync: function(url){
    if (!document.write) {
      SL.notify('Cannot load sync the "' + url + '" script because "document.write" is not available', 1)
      return
    }

    if (SL.domReadyFired){
      SL.notify('Cannot load sync the "' + url + '" script after DOM Ready.', 1)
      return
    }

    // If the url contains a double quote, it could be someone trying to switch out of the
    // attribute to introduce an XSS hack. On the other hand, it could just be that the URL
    // was never escaped. We'll escape it to prevent the former while supporting the latter.
    if (url.indexOf('"') > -1) {
      url = encodeURI(url);
    }

    document.write('<script src="' + url + '"></scr' + 'ipt>');
  },

  // `pushAsyncScript(callback)`
  // -------------------
  //
  // Called by an async custom user script.
  pushAsyncScript: function(cb){
    SL.tools['default'].pushAsyncScript(cb)
  },

  // `pushBlockingScript(callback)`
  // ------------------------------
  //
  // Called by a blocking custom user script.
  pushBlockingScript: function(cb){
    SL.tools['default'].pushBlockingScript(cb)
  },

  // `addEventHandler(elm, evt, callback)`
  // -------------------------------------
  //
  // Register an event handler for a element
  //
  // Parameters:
  //
  // - `elm` - the element in question
  // - `evt` - the event type to listen to
  // - `callback` - callback function
  addEventHandler: window.addEventListener ?
    function(node, evt, cb){ node.addEventListener(evt, cb, false) } :
    function(node, evt, cb){ node.attachEvent('on' + evt, cb) },

  removeEventHandler: window.removeEventListener ?
    function(node, evt, cb){ node.removeEventListener(evt, cb, false) } :
    function(node, evt, cb){ node.detachEvent('on' + evt, cb) },

  // `preventDefault(evt)`
  // ---------------------
  //
  // Prevent the default browser behavior for this event
  //
  // Parameters:
  //
  // `evt` - the event triggered
  preventDefault: window.addEventListener ?
    function(e){ e.preventDefault() } :
    function(e){ e.returnValue = false },

  // `stopPropagation(evt)`
  // ----------------------
  //
  // Cross-browser `stopPropagation`
  //
  // Parameters:
  //
  // `evt` - the event triggered
  stopPropagation: function(e){
    e.cancelBubble = true
    if (e.stopPropagation) e.stopPropagation()
  },

  // `containsElement(container, elm)`
  // ----------------------
  //
  // Given DOM elements `container` and `elm`, returns whether `container` contains `elm`.
  //
  // Parameters:
  //
  // `elm1` - the possible parent
  // `elm2` - the possible child
  containsElement: function(container, elm) {
    return container.contains ? container.contains(elm) :
      !!(container.compareDocumentPosition(elm) & 16);
  },

  // `matchesCss(css, elm)`
  // ----------------------
  //
  // Returns whether a DOM element matches a given css selector
  //
  // Parameters:
  //
  // - `css` - the CSS selector
  // - `elm` - the element
  matchesCss: (function(docEl){

    function simpleTagMatch(selector, elm){
      var tagName = elm.tagName
      if (!tagName) return false
      return selector.toLowerCase() === tagName.toLowerCase()
    }

    var matches =
      docEl.matchesSelector ||
      docEl.mozMatchesSelector ||
      docEl.webkitMatchesSelector ||
      docEl.oMatchesSelector ||
      docEl.msMatchesSelector
    if (matches) {
      return function(selector, elm){
        if (elm === document || elm === window) return false
        try{
          return matches.call(elm, selector)
        }catch(e){
          return false
        }
      }
    } else if(docEl.querySelectorAll) {
      return function(selector, elm) {
        var parent = elm.parentNode
        if (!parent) return false
        if (selector.match(/^[a-z]+$/i)){
          return simpleTagMatch(selector, elm)
        }
        try{
          var nodeList = elm.parentNode.querySelectorAll(selector)
          for (var i = nodeList.length; i--;)
          if (nodeList[i] === elm) return true
        }catch(e){
          //
        }
        return false
      }
    }else{
      return function(selector, elm){
        if (selector.match(/^[a-z]+$/i)){
          return simpleTagMatch(selector, elm)
        }
        try{
          return SL.Sizzle.matches(selector, [elm]).length > 0
        }catch(e){
          return false
        }
      }
    }
  }(document.documentElement)),

  // `cssQuery(css)`
  // ---------------
  //
  // Return a list of element matching the given css selector
  //
  // Parameters:
  //
  // - `css` - the CSS selector
  cssQuery: (function(doc){
    if (doc.querySelectorAll) {
      return function(css, cb){
        var results
        try{
          results = doc.querySelectorAll(css)
        }catch(e){
          results = []
        }
        cb(results)
      }
    }else{
      return function(css, cb){
        if (SL.Sizzle){
          var results
          try{
            results = SL.Sizzle(css)
          }catch(e){
            results = []
          }
          cb(results)
        }else
          SL.sizzleQueue.push([css, cb])
      }
    }
  })(document),

  // `hasAttr(elem, attrName)`
  // ---------------
  //
  // Check if attribute is defined on element
  //
  // Parameters:
  //
  // - `elem` - the DOM element
  // - `attrName` - attribute name
  hasAttr: function(elem, attrName) {
    return elem.hasAttribute ? elem.hasAttribute(attrName) : elem[attrName] !== undefined;
  },

  // `inherit(subClass, superClass)`
  // -------------------------------
  //
  // Make `subClass` inherit `superClass`.
  //
  // Parameters:
  //
  // - `subClass` - a Javascript function representing a constructor - the inheritor
  // - `superClass` - another constructor - the one to inherit from
  inherit: function(subClass, superClass){
    var f = function() {}
    f.prototype = superClass.prototype
    subClass.prototype = new f()
    subClass.prototype.constructor = subClass
  },

  // `extend(dst, src)`
  // ----------------
  //
  // Extend an object with the properties of another.
  //
  // Parameters:
  //
  // - `dst` - object to copy to
  // - `src` - object to copy from
  extend: function(dst, src){
    for (var prop in src)
      if (src.hasOwnProperty(prop))
        dst[prop] = src[prop]
  },

  // `toArray(arrayLike)`
  // --------------------
  //
  // Converts an array-like object to an array.
  //
  // Parameters:
  //
  // - `arrayLike` - an array-like object, meaning it has a length property
  //   which is a number
  toArray: (function(){
    try {
      var slice = Array.prototype.slice
      slice.call( document.documentElement.childNodes, 0 )[0].nodeType;
      return function(thing){
        return slice.call(thing, 0)
      }
    // Provide a fallback method if it does not work
    } catch( e ) {
      return function(thing){
        var ret = []
        for (var i = 0, len = thing.length; i < len; i++)
          ret.push(thing[i])
        return ret
      }
    }
  })(),

  // `equalsIgnoreCase(str1, str2)`
  // ------------------------------
  //
  // Returns true iff str1 and str2 are equal ignoring case.
  //
  // Parameters:
  //
  // * `str1` - the first string
  // * `str2` - the second string
  equalsIgnoreCase: function(str1, str2){
    if (str1 == null) return str2 == null
    if (str2 == null) return false
    return String(str1).toLowerCase() === String(str2).toLowerCase()
  },

  // `poll(fn, [freq], [max_retries])`
  // ------------------
  //
  // Runs `fn` for every `freq` ms. `freq` defaults to 1000. If any
  // invocation of `fn()` returns true, polling will stop.
  // The polling will stop if the number or retries exceeds the
  // provided `max_retries`.
  //
  // Parameters:
  //
  // * `fn` - function to be called repeatedly
  // * `freq` - frequency to call the function
  // * `max_retries` - number of times to retry
  poll: function(fn, freq, max_retries){
    var retries = 0

    freq = freq || 1000
    check()

    function check(){
      if (SL.isNumber(max_retries) && retries++ >= max_retries) {
        return;
      }

      if (!fn()){
        setTimeout(check, freq)
      }
    }
  },
  // ``Html(str)`
  // --------------------
  //
  // Escapes a string for being used in an HTML context. Returns
  // the escaped version of the string. Replaces the characters
  // `&` `<` `>` `"` `'` and `/`.
  //
  // Parameters:
  //
  // * `str` - the string to be escaped
  escapeForHtml: function(str){
    if (!str) return str
    return String(str)
      .replace(/\&/g, '&amp;')
      .replace(/\</g, '&lt;')
      .replace(/\>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/\'/g, '&#x27;')
      .replace(/\//g, '&#x2F;')
  }
}

// The available tools to use.
SL.availableTools = {}

// The avaliable event emitters to use.
SL.availableEventEmitters = []

// The names of the events which can only fire once.
SL.fireOnceEvents = ['condition', 'elementexists']

// Initialize all event emitters.
SL.initEventEmitters = function(){
  SL.eventEmitters = SL.map(SL.availableEventEmitters, function(ee){
    return new ee()
  })
}

// Call `registerElements` on all event emitters.
SL.eventEmitterBackgroundTasks = function(){
  SL.each(SL.eventEmitters, function(ee){
    if ('backgroundTasks' in ee)
      ee.backgroundTasks()
  })
}

// Initialize all tools.
SL.initTools = function(toolSpecs){
  var tools = { 'default': new DefaultTool() }
  var euCookieName = SL.settings.euCookieName || 'sat_track'
  for (var id in toolSpecs){
    if(toolSpecs.hasOwnProperty(id)) {
      var toolSpec, ctr, tool
      toolSpec = toolSpecs[id]
      if (toolSpec.euCookie){
        var cookieSet = SL.readCookie(euCookieName) !== 'true'
        if (cookieSet) continue
      }
      ctr = SL.availableTools[toolSpec.engine]
      if (!ctr){
        var available = []
        for (var key in SL.availableTools){
          if (SL.availableTools.hasOwnProperty(key)) {
            available.push(key)  
          }
        }
        throw new Error('No tool engine named ' + toolSpec.engine +
          ', available: ' + available.join(',') + '.')
      }
      tool = new ctr(toolSpec)
      tool.id = id
      tools[id] = tool
    }
  }
  return tools
}

// Pre-process arguments (variable substitutions and lower-casing) before
// feeding them to the tools.
SL.preprocessArguments = function(args, elm, evt, forceLowerCase, escapeHtml){
  if (!args) return args
  return preprocessArray(args, forceLowerCase)
  function forceLowerCaseIfNeeded(value) {
    return forceLowerCase && SL.isString(value) ? value.toLowerCase() : value
  }

  function preprocessObject(obj){
    var ret = {}
    for (var key in obj){
      if (obj.hasOwnProperty(key)){
        var value = obj[key]
        if (SL.isObject(value)){
          ret[key] = preprocessObject(value)
        }else if (SL.isArray(value)){
          ret[key] = preprocessArray(value, forceLowerCase)
        }else{
          ret[key] = forceLowerCaseIfNeeded(SL.replace(value, elm, evt, escapeHtml))
        }
      }
    }
    return ret
  }

  function preprocessArray(args, forceLowerCase){
    var ret = []
    for (var i = 0, len = args.length; i < len; i++){
      var value = args[i]
      if (SL.isString(value)){
        value = forceLowerCaseIfNeeded(SL.replace(value, elm, evt))
      }else if (value && value.constructor === Object){
        value = preprocessObject(value)
      }
      ret.push(value)
    }
    return ret
  }

}

// Execute a command.
SL.execute = function(trig, elm, evt, tools){
  if (_satellite.settings.hideActivity) return
  tools = tools || SL.tools

  function doit(toolName){
    var tool = tools[toolName || 'default']
    if (!tool)
      return
    try{
      tool.triggerCommand(trig, elm, evt)
    }catch(e){
      SL.logError(e)
    }
  }
  if (trig.engine){
    var engine = trig.engine
    for (var toolName in tools){
      if (tools.hasOwnProperty(toolName)) {
        var tool = tools[toolName]
        if (tool.settings && tool.settings.engine === engine)
          doit(toolName)
      }
    }
  }else if (trig.tool instanceof Array)
    SL.each(trig.tool, function(toolName){
      doit(toolName)
    })
  else
    doit(trig.tool)
}

// Wrapper object that handles Satellite internal logging.
//
// It saves all messages for future reference (up to `keepLimit`, default 100) and
// outputs to browser's console if `_satellite.settings.notifications` is `true`.
// -----------------------------------------------------
SL.Logger = {
  outputEnabled: false,

  messages: [],
  keepLimit: 100,
  flushed: false,

  // @fixme: remove first 2 items when legacy code is updated
  LEVELS: [null, null, 'log', 'info', 'warn', 'error'],

  // `lvl` should be the index of a level defined in `LEVELS`
  message: function(msg, lvl) {
    var level = this.LEVELS[lvl] || 'log';

    this.messages.push([level, msg]);
    if (this.messages.length > this.keepLimit) {
      this.messages.shift();
    }

    if (this.outputEnabled) {
      this.echo(level, msg)
    }
  },

  getHistory: function() {
    return this.messages;
  },

  clearHistory: function() {
    this.messages = [];
  },

  setOutputState: function(state) {
    if (this.outputEnabled == state) return;

    this.outputEnabled = state;
    if (state) {
      this.flush();
    } else {
      this.flushed = false;
    }
  },

  // Private
  // ----------------------------------------
  echo: function(func, msg) {
    if (!window.console) return;
    window.console[func]("SATELLITE: " + msg);
  },

  flush: function() {
    if (this.flushed) return;

    SL.each(this.messages, function(item) {
      if (item[2] === true) return; // message already flushed
      this.echo(item[0], item[1]);
      item[2] = true;
    }, this);
    this.flushed = true;
  }
};

// `notify(msg, pty)`
// ------------------
//
// Notify the user of things happening in Satellite using `console.log`
//
// - msg - message to print
// - pty - priority
SL.notify = SL.bind(SL.Logger.message, SL.Logger);

// `cleanText(str)`
// ================
//
// "Cleans" the text from an element's innerText. This is used directly by the
// @cleanText special property.
SL.cleanText = function(str){
  if (str == null) return null
  return SL.trim(str).replace(/\s+/g, ' ')
}

SL.cleanText.legacy = function(str){
  if (str == null) return null
  return SL.trim(str).replace(/\s{2,}/g, ' ')
    .replace(/[^\000-\177]*/g, '')
}

SL.text = function(obj){
  return obj.textContent || obj.innerText
}

// Special Properties for DOM elements. You use special properties using
// the @ prefix. Example:
//
//     this.@text
SL.specialProperties = {
  text: SL.text,
  cleanText: function(obj){
    return SL.cleanText(SL.text(obj))
  }
}

// `getObjectProperty(obj, property)`
// ============================
//
// Get property(potentially nested) from an object.
SL.getObjectProperty = function(obj, property, supportSpecial){
  var propChain = property.split('.')
  var currValue = obj
  var special = SL.specialProperties
  var attrMatch
  for (var i = 0, len = propChain.length; i < len; i++){
    if (currValue == null) return undefined
    var prop = propChain[i]
    if (supportSpecial && prop.charAt(0) === '@'){
      var specialProp = prop.slice(1)
      currValue = special[specialProp](currValue)
      continue
    }
    if (currValue.getAttribute &&
      (attrMatch = prop.match(/^getAttribute\((.+)\)$/))){
      var attr = attrMatch[1]
      currValue = currValue.getAttribute(attr)
      continue
    }
    currValue = currValue[prop]
  }
  return currValue
}

// `getToolsByType(type)`
// ------------------------------------------------
//
// Returns an array containing all the tools whose engine property match
// the provided type.
//
// - `type` - The searched tool type
SL.getToolsByType = function(type){
  if (!type) {
    throw new Error('Tool type is missing')
  }

  var result = []
  for (var t in SL.tools) {
    if (SL.tools.hasOwnProperty(t)) {
      var tool = SL.tools[t]
      if (tool.settings && tool.settings.engine === type) {
        result.push(tool)
      }
    }
  }

  return result
}

// `setVar(name, value)` or `setVar(mapping)`
// ==========================================
//
// Set a customer variable. Can be either called like this
//
//     _satellite.setVar('name', 'value')
//
// Or by passing in a mapping(object literall) which allows setting multiple variables at
// the same time.
//
//     _satellite.setVar({name: 'value', foo: 'bar'})
SL.setVar = function(){
  var customVars = SL.data.customVars
  if(customVars == null) SL.data.customVars = {}, customVars = SL.data.customVars
  if (typeof arguments[0] === 'string'){
    var prop = arguments[0]
    customVars[prop] = arguments[1]
  }else if (arguments[0]){ // assume an object literal
    var mapping = arguments[0]
    for (var key in mapping)
      if (mapping.hasOwnProperty(key))
        customVars[key] = mapping[key]
  }
}

SL.dataElementSafe = function(key, length){
  if (arguments.length > 2){
    // setter
    var value = arguments[2]
    if (length === 'pageview'){
      SL.dataElementSafe.pageviewCache[key] = value
    }else if (length === 'session'){
      SL.setCookie('_sdsat_' + key, value)
    }else if (length === 'visitor') {
      SL.setCookie('_sdsat_' + key, value, 365 * 2)
    }
  }else{
    // getter
    if (length === 'pageview'){
      return SL.dataElementSafe.pageviewCache[key]
    }else if (length === 'session' || length === 'visitor'){
      return SL.readCookie('_sdsat_' + key)
    }
  }
}
SL.dataElementSafe.pageviewCache = {}

SL.realGetDataElement = function(dataDef){
  var ret
  if (dataDef.selector) {
    if (SL.hasSelector) {
      SL.cssQuery(dataDef.selector, function(elms) {
        if (elms.length > 0) {
          var elm = elms[0]
          if (dataDef.property === 'text') {
            ret = elm.innerText || elm.textContent
          }else if (dataDef.property in elm){
            ret = elm[dataDef.property]
          }else if (SL.hasAttr(elm, dataDef.property)){
            ret = elm.getAttribute(dataDef.property)
          }
        }
      })
    }
  }else if (dataDef.queryParam) {
    if (dataDef.ignoreCase){
      ret = SL.getQueryParamCaseInsensitive(dataDef.queryParam)
    }else{
      ret = SL.getQueryParam(dataDef.queryParam)
    }
  }else if (dataDef.cookie) {
    ret = SL.readCookie(dataDef.cookie)
  }else if (dataDef.jsVariable) {
    ret = SL.getObjectProperty(window, dataDef.jsVariable)
  }else if (dataDef.customJS) {
    ret = dataDef.customJS()
  }else if (dataDef.contextHub) {
    ret = dataDef.contextHub()
  }
  if (SL.isString(ret) && dataDef.cleanText){
    ret = SL.cleanText(ret)
  }
  return ret
}

SL.getDataElement = function(variable, suppressDefault, dataDef) {
  dataDef = dataDef || SL.dataElements[variable]
  if (dataDef == null) {
    return SL.settings.undefinedVarsReturnEmpty ? '' : null; 
  }
  var ret = SL.realGetDataElement(dataDef)
  if (ret === undefined && dataDef.storeLength) {
    ret = SL.dataElementSafe(variable, dataDef.storeLength)
  }else if (ret !== undefined && dataDef.storeLength) {
    SL.dataElementSafe(variable, dataDef.storeLength, ret)
  }
  if (!ret && !suppressDefault) {
    ret = dataDef['default'] || ''
  }
  if (SL.isString(ret) && dataDef.forceLowerCase) {
    ret = ret.toLowerCase()
  }
  return ret
}

// getVar(variable, elm, evt)
// ==========================
//
// Return the value of a variable, where the variable
// can be a data element, defined in the "data" section
// of the initial settings, or reference properties on
// an element, event, or target of the event in question,
// a query parameter, or a random number.
//
// - `variable` - the name of the variable to get
// - `[elm]` - the associated element, if any
// - `[evt]` - the associated event, if any
SL.getVar = function(variable, elm, evt){
  var custVars = SL.data.customVars
    , target = evt ? (evt.target || evt.srcElement) : null
    , randMatch
    , value
  var map = {
    uri: SL.URI(),
    protocol: document.location.protocol,
    hostname: document.location.hostname
  }
  if (SL.dataElements && variable in SL.dataElements){
    return SL.getDataElement(variable)
  }
  value = map[variable.toLowerCase()]
  if (value === undefined){
    if (variable.substring(0, 5) === 'this.'){
      variable = variable.slice(5)
      value = SL.getObjectProperty(elm, variable, true)
    }else if(variable.substring(0, 6) === 'event.'){
      variable = variable.slice(6)
      value = SL.getObjectProperty(evt, variable)
    }else if(variable.substring(0, 7) === 'target.'){
      variable = variable.slice(7)
      value = SL.getObjectProperty(target, variable)
    }else if(variable.substring(0, 7) === 'window.'){
      variable = variable.slice(7)
      value = SL.getObjectProperty(window, variable)
    }else if (variable.substring(0, 6) === 'param.'){
      variable = variable.slice(6)
      value = SL.getQueryParam(variable)
    }else if(randMatch = variable.match(/^rand([0-9]+)$/)){
      var len = Number(randMatch[1])
        , s = (Math.random() * (Math.pow(10, len) - 1)).toFixed(0)
      value = Array(len - s.length + 1).join('0') + s
    }else{
      value = SL.getObjectProperty(custVars, variable)
    }
  }
  return value
}

SL.getVars = function(variables, elm, evt){
  var ret = {}
  SL.each(variables, function(variable){
    ret[variable] = SL.getVar(variable, elm, evt)
  })
  return ret
}

// `replace(str, [elm], [target])`
// ---------------------
//
// Perform variable subtitutions substitute to a string where subtitions are
// specified in the form `"%foo%"`. Variables are lookup either in `SL.data.customVars`, or
// if the `elm` parameter is passed it, and the variable spec is of the form `"%this.tagName%"`, it
// is subsituted with the properties on `elm`, *i.e. `elm.tagName`.
//
// Parameters:
//
// - `str` - string to apply substitutions to
// - `elm`(optional) - object or element to use for substitutions of the form `%this.property%`
// - `target`(optional) - element to use for subsitution of the form `%target.property%`
// - `escapeHtml` (optional) - whether or not to escape substitutions for embedding in HTML
SL.replace = function(str, elm, evt, escapeHtml) {
  if (typeof str !== 'string') return str
  return str
    .replace(/%(.*?)%/g, function(m, variable){
      var val = SL.getVar(variable, elm, evt)
      if (val == null) {
        return SL.settings.undefinedVarsReturnEmpty ? '' : m; 
      } else {
        if (escapeHtml) {
          return SL.escapeForHtml(val);
        } else {
          return val;
        }
      }
    });
}

SL.escapeHtmlParams = function(fn){
  fn.escapeHtml = true
  return fn
}

// From a object literal of variable, generate a query string.
SL.searchVariables = function(vars, elm, evt){
  if (!vars || vars.length === 0) return ''
  var qsParts = []
  for (var i = 0, len = vars.length; i < len; i++){
    var varr = vars[i]
      , value = SL.getVar(varr, elm, evt)
       qsParts.push(varr + '=' + escape(value))
  }
  return '?' + qsParts.join('&')
}

// Fire all the trigger actions associated with a rule.
SL.fireRule = function(rule, elm, evt){
  var triggers = rule.trigger
  if (!triggers) return
  for (var i = 0, len = triggers.length; i < len; i++){
    var trig = triggers[i]
    SL.execute(trig, elm, evt)
  }
  if (SL.contains(SL.fireOnceEvents, rule.event))
    rule.expired = true
}

// `isLinked(elm)`
// ---------------
//
// Returns whether the element is either an anchor or a descendant of an anchor or contains an anchor.
//
// `elm` - the element to test
SL.isLinked = function(elm){
  for (var cur = elm; cur; cur = cur.parentNode) {
    if (SL.isLinkTag(cur))
      return true
  }
  return false
}

// Fire a page load event. `type` is one of `pagetop`, `pagebottom`, `domready` and
// `windowload`.
SL.firePageLoadEvent = function(type) {
  var location = document.location
  var evt = {type: type, target: location}
  var rules = SL.pageLoadRules
  var handlers = SL.evtHandlers[evt.type];
  for (var i = rules.length; i--;){
    var rule = rules[i]
    if (SL.ruleMatches(rule, evt, location)){
      SL.notify('Rule "' + rule.name + '" fired.', 1)
      SL.fireRule(rule, location, evt)
    }
  }
  for (var id in SL.tools){
    if (SL.tools.hasOwnProperty(id)) {
      var tool = SL.tools[id]
      if (tool.endPLPhase) {
        tool.endPLPhase(type)
      }
    }
  }
  if (handlers){
    SL.each(handlers, function(cb){
      cb(evt)
    })
  }
}

// `track(id)`
// -----------
//
// Directly fire a direct call rule by id.
SL.track = function(ruleName) {
  // trim extra spaces that may exist at beginning or end of string
  ruleName = ruleName.replace(/^\s*/,"").replace(/\s*$/,"")
  for (var i = 0; i < SL.directCallRules.length; i++){
    var rule = SL.directCallRules[i]
    if (rule.name === ruleName){
      SL.notify('Direct call Rule "' + ruleName + '" fired.', 1)
      SL.fireRule(rule, location, {type: ruleName})
      return
    }
  }
  SL.notify('Direct call Rule "' + ruleName + '" not found.', 1)
}

// `basePath()`
// ------------
//
// Returns the base path of all Satellite generated assets.
SL.basePath = function(){
  if (SL.data.host)
    return (document.location.protocol === 'https:' ?
    'https://' + SL.data.host.https :
    'http://' + SL.data.host.http) + '/'
  else
    return this.settings.basePath
}

// `setLocation(url)`
// ------------------
//
// Set the current URL
//
// - `url` - the URL to set to
SL.setLocation = function(url){
  window.location = url
}

SL.parseQueryParams = function(str){
  var URIDecode = function (str) {
    var result = str
    try {
      result = decodeURIComponent(str)
    } catch(err) {}

    return result
  }

  if (str === '' || SL.isString(str) === false) return {}
  if (str.indexOf('?') === 0) {
    str = str.substring(1)
  }
  var ret = {}
    , pairs = str.split('&')
  SL.each(pairs, function(pair){
    pair = pair.split('=')
    if (!pair[1]) {
      return
    }
    ret[URIDecode(pair[0])] = URIDecode(pair[1])
  })
  return ret
}

SL.getCaseSensitivityQueryParamsMap = function (str) {
  var normal = SL.parseQueryParams(str)
  var insensitive = {}

  for (var prop in normal)
    if (normal.hasOwnProperty(prop))
      insensitive[prop.toLowerCase()] = normal[prop]

  return {
    normal: normal,
    caseInsensitive: insensitive
  }
}

SL.updateQueryParams = function(){
  SL.QueryParams = SL.getCaseSensitivityQueryParamsMap(window.location.search)
}
SL.updateQueryParams()

SL.getQueryParam = function(key){
  return SL.QueryParams.normal[key]
}

SL.getQueryParamCaseInsensitive = function(key){
  return SL.QueryParams.caseInsensitive[key.toLowerCase()]
}

SL.encodeObjectToURI = function(obj) {
  if (SL.isObject(obj) === false) {
    return ''
  }

  var uri = []
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      uri.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
    }
  }

  return uri.join('&')
}

SL.readCookie = function(name) {
  var nameEQ = name + "="
  var parts = document.cookie.split(';')
  for(var i=0;i < parts.length;i++) {
    var c = parts[i]
    while (c.charAt(0)==' '){
      c = c.substring(1,c.length)
    }
    if (c.indexOf(nameEQ) === 0){
      return c.substring(nameEQ.length,c.length)
    }
  }
  return undefined
}

SL.setCookie = function(name,value,days) {
  var expires
  if (days) {
    var date = new Date()
    date.setTime(date.getTime()+(days*24*60*60*1000))
    expires = "; expires="+date.toGMTString()
  }
  else{
    expires = ""
  }
  document.cookie = name+"="+value+expires+"; path=/"
}

SL.removeCookie = function(name) {
  SL.setCookie(name,"",-1);
}


SL.getElementProperty = function(elm, prop){
  if (prop.charAt(0) === '@'){
    var special = SL.specialProperties[prop.substring(1)]
    if (special){
      return special(elm)
    }
  }
  if (prop === 'innerText'){
    return SL.text(elm)
  }
  if (prop in elm)
    return elm[prop]
  return elm.getAttribute ? elm.getAttribute(prop) : undefined
}

SL.propertiesMatch = function(property, elm){
  if (property){
    for (var prop in property){
      if (property.hasOwnProperty(prop)) {
        var target = property[prop]
        var value = SL.getElementProperty(elm, prop)
        if (typeof target === 'string' && target !== value) return false
        if (target instanceof RegExp && !target.test(value)) return false
      }
    }
  }
  return true
}

// from http://www.quirksmode.org/js/events_properties.html
SL.isRightClick = function(e){
  var ret
  if (e.which){
    ret = e.which == 3
  }else if (e.button){
    ret = e.button == 2
  }
  return ret
}

// `ruleMatches(rule, evt, elm, eventEntriesFound)`
// ------------------------------------------------
//
// - `rule` - the rules to match
// - `evt` - the event triggered
// - `elm` - the element the event was on
// - `eventEntriesFound` - number of rules matched so far
SL.ruleMatches = function(rule, evt, elm, eventEntriesFound){
  var cnd = rule.condition
  var cnds = rule.conditions
  var property = rule.property
  var eventType = evt.type
  var matchValue = rule.value
  var target = evt.target || evt.srcElement
  var initialTarget = elm === target

  if (rule.event !== eventType && (rule.event !== 'custom' || rule.customEvent !== eventType)) return false
  if (!SL.ruleInScope(rule)) return false
  // ignore all right-clicks
  if (rule.event === 'click' && SL.isRightClick(evt)){
    return false
  }
  if (rule.isDefault && eventEntriesFound > 0)
    return false
  if (rule.expired) return false
  if (eventType === 'inview' && evt.inviewDelay !== rule.inviewDelay){
    return false
  }
  if (!(initialTarget ||
          ((rule.bubbleFireIfParent !== false) && (eventEntriesFound === 0 || (rule.bubbleFireIfChildFired !== false))))) return false

  if (rule.selector && !SL.matchesCss(rule.selector, elm)) return false
  if (!SL.propertiesMatch(property, elm)) return false
  if (matchValue != null){
    if (typeof matchValue === 'string'){
      if (matchValue !== elm.value)
        return false
    }else if (!matchValue.test(elm.value))
      return false
  }
  if (cnd){
    try{
      if (!cnd.call(elm, evt, target)){
        SL.notify('Condition for rule "' + rule.name + '" not met.', 1)
        return false
      }
    }catch(e){
      SL.notify('Condition for rule "' + rule.name + '" not met. Error: ' + e.message, 1)
      return false
    }
  }
  if (cnds){
    var failed = SL.find(cnds, function(cnd){
      try{
        return !cnd.call(elm, evt, target)
      }catch(e){
        SL.notify('Condition for rule "' + rule.name + '" not met. Error: ' + e.message, 1)
        return true
      }
    })
    if (failed){
      SL.notify('Condition ' + failed.toString() + ' for rule "' + rule.name + '" not met.', 1)
      return false
    }
  }
  return true
}


SL.evtHandlers = {}
// `bindEvent(evtName, callback)`
// ------------------------------
//
// Register for an event by name. Alias: `whenEvent`.
//
// `evtName` - the name of the event
// `callback` - the function to be called when even fires
SL.bindEvent = function(evtName, callback){
  var handlers = SL.evtHandlers
  if (!handlers[evtName])
    handlers[evtName] = []
  handlers[evtName].push(callback)
}
SL.whenEvent = SL.bindEvent

// `unbindEvent(evtName, callback)
// -------------------------------
//
// Unregister for an event by name.
//
// `evtName` - the name of the event
// `callback` - the function to unregister
SL.unbindEvent = function(evtName, callback){
  var handlers = SL.evtHandlers
  if (!handlers[evtName]) return
  var idx = SL.indexOf(handlers[evtName], callback)
  handlers[evtName].splice(idx, 1)
}

SL.bindEventOnce = function(evtName, callback){
  var wrapped = function(){
    SL.unbindEvent(evtName, wrapped)
    callback.apply(null, arguments)
  }
  SL.bindEvent(evtName, wrapped)
}

// See <http://tobyho.com/2014/02/26/attribute-only-valid-on-v-image/>
SL.isVMLPoisoned = function(elm){
  if (!elm) return false
  try{
    elm.nodeName
  }catch(e){
    if (e.message === 'Attribute only valid on v:image'){
      return true
    }
  }
  return false
}

SL.handleEvent = function(evt) {
  // Don't process an event twice.
  if (SL.$data(evt, 'eventProcessed')) return

  var eventType = evt.type.toLowerCase()
    , target = evt.target || evt.srcElement
    , rulesMatched = 0
    , rules = SL.rules
    , tools = SL.tools
    , handlers = SL.evtHandlers[evt.type]

  if (SL.isVMLPoisoned(target)){
    SL.notify('detected ' + eventType + ' on poisoned VML element, skipping.', 1)
    return
  }

  if (handlers){
    SL.each(handlers, function(cb){
      cb(evt)
    })
  }

  var nodeName = target && target.nodeName;
  if (nodeName)
    SL.notify("detected " + eventType + " on " + target.nodeName, 1)
  else
    SL.notify("detected " + eventType, 1)

  for (var curr = target; curr; curr = curr.parentNode) {
    var bubbleStop = false
    SL.each(rules, function(rule){
      if (SL.ruleMatches(rule, evt, curr, rulesMatched)){
        SL.notify('Rule "' + rule.name + '" fired.', 1)
        SL.fireRule(rule, curr, evt)
        rulesMatched++
        if (rule.bubbleStop)
          bubbleStop = true
      }
    })
    if (bubbleStop) break
  }


  SL.$data(evt, 'eventProcessed', true)
}

// `onEvent(evt)`
// ------------
//
// Handle an event, whether it is a DOM event or a synthetic event.
//
// - `evt` - the event triggered
SL.onEvent = document.querySelectorAll ?
function(evt){ SL.handleEvent(evt) } :
(function(){
  var q = []
  var onEvent = function(evt) {
    if (evt.selector)
      q.push(evt)
    else
      SL.handleEvent(evt)
  }
  onEvent.pendingEvents = q
  return onEvent
})()

// `fireEvent(eventType, eventTarget)`
// ------------
//
// Conviniently programmatically fire an event.
//
// - `eventType` - the type of event
// - `eventTarget` - the target object that fired the event
SL.fireEvent = function(type, target){
  SL.onEvent({type: type, target: target})
}

// `registerEvents(elm, events)`
// -----------------------------
//
// Register events for an element using `track` as the callback
//
// - `elm` - the element to listen for events on
// - `events` - an array of event types (strings)
SL.registerEvents = function(elm, events){
  for (var i = events.length - 1; i >= 0; i--){
    var event = events[i]
    if (!SL.$data(elm, event + '.tracked')){
      SL.addEventHandler(elm, event, SL.onEvent)
      SL.$data(elm, event + '.tracked', true)
    }
  }
}

// `registerEventsForTags(tags, events)`
// -------------------------------------
//
// Register events for all element that have the specified tags
//
// - `tags` - an array of tags to match for (strings)
// - `events` - an array of event types (strings)
SL.registerEventsForTags = function(tags, events){
  for (var i = tags.length - 1; i >= 0; i--){
    var tag = tags[i]
    var elms = document.getElementsByTagName(tag);
    for (var j = elms.length - 1; j >= 0; j--)
      SL.registerEvents(elms[j], events)
  }
}

// `setListeners()`
// ----------------
//
// Set events for `document`
SL.setListeners = function() {
  var events = ['click', 'submit'];

  SL.each(SL.rules, function(rule) {
    if (rule.event === 'custom' &&
        rule.hasOwnProperty('customEvent') &&
        !SL.contains(events, rule.customEvent)) {
      events.push(rule.customEvent);
    }
  });

  SL.registerEvents(document, events);
};

// `getUniqueRuleEvents()`
// -----------------------
//
// Returns an array of unique event types for which event-based rules
// have been configured.
SL.getUniqueRuleEvents = function() {
  if (!SL._uniqueRuleEvents) {
    SL._uniqueRuleEvents = [];
    SL.each(SL.rules, function(rule) {
      if (SL.indexOf(SL._uniqueRuleEvents, rule.event) === -1) {
        SL._uniqueRuleEvents.push(rule.event);
      }
    });
  }

  return SL._uniqueRuleEvents;
};

// `setFormListeners()`
// --------------------
//
// Listen for events on form elements. Listeners for these events are added directly to form
// elements since they don't bubble (though some do in modern browsers).
SL.setFormListeners = function() {
  if (!SL._relevantFormEvents) {
    var formEvents = [
      "change",
      "focus",
      "blur",
      // Why do we add event listeners directly to form elements for the keypress event? The
      // keypress event bubbles so we could add it directly to document. Note that keypress
      // events can be triggered when any element has focus which means that by adding the event
      // listener directly to form elements we're filtering any keypress events from other elements.
      // Is this the intention? If so, we could still add a single listener directly to document
      // and filter on event.target.nodeName.
      "keypress"
    ];

    SL._relevantFormEvents = SL.filter(SL.getUniqueRuleEvents(), function(event) {
      return SL.indexOf(formEvents, event) !== -1;
    });
  }

  if (SL._relevantFormEvents.length) {
    SL.registerEventsForTags(['input', 'select', 'textarea', 'button'], SL._relevantFormEvents);
  }
};

// `setVideoListeners()`
// ---------------------
//
// Listen for events on video elements. Listeners for these events are added directly to form
// elements since they don't bubble.
SL.setVideoListeners = function() {
  if (!SL._relevantVideoEvents) {
    var videoEvents = [
      "play",
      "pause",
      "ended",
      "volumechange",
      "stalled",
      "loadeddata"
    ];

    SL._relevantVideoEvents = SL.filter(SL.getUniqueRuleEvents(), function(event) {
      return SL.indexOf(videoEvents, event) !== -1;
    });
  }

  if (SL._relevantVideoEvents.length) {
    SL.registerEventsForTags(['video'], SL._relevantVideoEvents);
  }
};

// `readStoredSetting(name)`
// ==================
//
// Reads the cookie of the given name.
// Stolen from <http://www.quirksmode.org/js/cookies.html>
SL.readStoredSetting = function(name) {
  // When local storage is disabled on Safari, the mere act of referencing window.localStorage
  // throws an error. For this reason, referencing window.localStorage without being inside
  // a try-catch should be avoided.
  try{
    name = 'sdsat_' + name
    return window.localStorage.getItem(name)
  }catch(e){
    SL.notify('Cannot read stored setting from localStorage: ' + e.message, 2)
    return null
  }
}

// Read satelliteUtilsCookie values to see about getting bookmarklet running / settings
SL.loadStoredSettings = function () {
  var debug = SL.readStoredSetting('debug')
    , hideActivity = SL.readStoredSetting('hide_activity')
  if (debug)
    SL.settings.notifications = debug === 'true'
  if (hideActivity)
    SL.settings.hideActivity = hideActivity === 'true'
}

SL.isRuleActive = function(rule, date){
  var schd = rule.schedule
  if (!schd) return true

  var utc = schd.utc
    , getDate = utc ? 'getUTCDate' : 'getDate'
    , getDay = utc ? 'getUTCDay' : 'getDay'
    , getFullYear = utc ? 'getUTCFullYear' : 'getFullYear'
    , getMonth = utc ? 'getUTCMonth' : 'getMonth'
    , getHours = utc ? 'getUTCHours' : 'getHours'
    , getMinutes = utc ? 'getUTCMinutes' : 'getMinutes'
    , setHours = utc ? 'setUTCHours' : 'setHours'
    , setMinutes = utc ? 'setUTCMinutes' : 'setMinutes'
    , setDate = utc ? 'setUTCDate' : 'setDate'

  date = date || new Date()

  function dayDiff(one, other){
    other = modifyDate(other, {
      hour: one[getHours](),
      minute: one[getMinutes]()
    })
    return Math.floor(Math.abs((one.getTime() - other.getTime()) / (1000 * 60 * 60 * 24)))
  }
  function monthDiff(one, other){
    function months(date){
      return date[getFullYear]() * 12 + date[getMonth]()
    }
    return Math.abs(months(one) - months(other))
  }
  function modifyDate(date, fields){
    var retval = new Date(date.getTime())
    for (var field in fields){
      if (fields.hasOwnProperty(field)) {
        var val = fields[field]
        switch(field){
          case 'hour':
            retval[setHours](val)
            break
          case 'minute':
            retval[setMinutes](val)
            break
          case 'date':
            retval[setDate](val)
            break
        }
      }
    }
    return retval
  }
  function timeGreaterThan(one, other){
    var h1 = one[getHours]()
      , m1 = one[getMinutes]()
      , h2 = other[getHours]()
      , m2 = other[getMinutes]()
    return (h1 * 60 + m1) > (h2 * 60 + m2)
  }
  function timeLessThan(one, other){
    var h1 = one[getHours]()
      , m1 = one[getMinutes]()
      , h2 = other[getHours]()
      , m2 = other[getMinutes]()
    return (h1 * 60 + m1) < (h2 * 60 + m2)
  }


  if (schd.repeat){
    if (timeGreaterThan(schd.start, date)) return false
    if (timeLessThan(schd.end, date)) return false
    if (date < schd.start) return false
    if (schd.endRepeat && date >= schd.endRepeat) return false
    if (schd.repeat === 'daily'){
      if (schd.repeatEvery){
        var dd = dayDiff(schd.start, date)
        if (dd % schd.repeatEvery !== 0) return false
      }
    }else if (schd.repeat === 'weekly'){
      if (schd.days){
        if (!SL.contains(schd.days, date[getDay]())) return false
      }else
        if (schd.start[getDay]() !== date[getDay]()) return false
      if (schd.repeatEvery){
        var diff = dayDiff(schd.start, date)
        if (diff % (7 * schd.repeatEvery) !== 0)
          return false
      }
    }else if (schd.repeat === 'monthly'){
      if (schd.repeatEvery){
        var md = monthDiff(schd.start, date)
        if (md % schd.repeatEvery !== 0) return false
      }
      if (schd.nthWeek && schd.mthDay){
        if (schd.mthDay !== date[getDay]()) return false
        var nthWeek = Math.floor((date[getDate]() - date[getDay]() + 1) / 7)
        if (schd.nthWeek !== nthWeek) return false
      }else
        if (schd.start[getDate]() !== date[getDate]()) return false
    }else if (schd.repeat === 'yearly'){
      if (schd.start[getMonth]() !== date[getMonth]()) return false
      if (schd.start[getDate]() !== date[getDate]()) return false
      if (schd.repeatEvery){
        var diff = Math.abs(schd.start[getFullYear]() - date[getFullYear]())
        if (diff % schd.repeatEvery !== 0) return false
      }
    }
  }else{
    if (schd.start > date) return false
    if (schd.end < date) return false
  }
  return true
}

SL.isOutboundLink = function(elm){
  if (!elm.getAttribute('href')) return false
  var hostname = elm.hostname
  var href = elm.href
  var protocol = elm.protocol
  if (protocol !== 'http:' && protocol !== 'https:') return false
  var isMyDomain = SL.any(SL.settings.domainList, function(domain){
    return SL.isSubdomainOf(hostname, domain)
  })
  if (isMyDomain) return false
  return hostname !== location.hostname
}

SL.isLinkerLink = function(elm){
  if (!elm.getAttribute || !elm.getAttribute('href')) return false
  return SL.hasMultipleDomains() &&
    elm.hostname != location.hostname &&
    !elm.href.match(/^javascript/i) &&
    !SL.isOutboundLink(elm)
}

SL.isSubdomainOf = function(sub, root){
  if (sub === root) return true
  var idx = sub.length - root.length
  if (idx > 0)
    return SL.equalsIgnoreCase(sub.substring(idx), root)
  return false
}

// `getVisitorId()`
// ------------------------------------------------
//
// Returns the library instance associated to a VisitorId tool if the tool exists
//
SL.getVisitorId = function(){
  var visitorIdTools = SL.getToolsByType('visitor_id')
  if (visitorIdTools.length === 0) {
    return null;
  }

  return visitorIdTools[0].getInstance()
}

SL.URI = function(){
  var ret = document.location.pathname + document.location.search
  if (SL.settings.forceLowerCase){
    ret = ret.toLowerCase()
  }
  return ret
}

SL.URL = function(){
  var ret = document.location.href
  if (SL.settings.forceLowerCase){
    ret = ret.toLowerCase()
  }
  return ret
}

// Filter `SL.rules` down to only the once relevant for the current page.
SL.filterRules = function(){
  function matches(rule){
    if (!SL.isRuleActive(rule)) return false
    return true
  }

  SL.rules = SL.filter(SL.rules, matches)
  SL.pageLoadRules = SL.filter(SL.pageLoadRules, matches)

}

SL.ruleInScope = function(rule, location){
  location = location || document.location
  var scope = rule.scope
  if (!scope) return true
  var URI = scope.URI
  var subdomains = scope.subdomains
  var domains = scope.domains
  var protocols = scope.protocols
  var hashes = scope.hashes

  if (URI && includeExcludeFails(URI, location.pathname + location.search)) return false
  if (subdomains && includeExcludeFails(subdomains, location.hostname)) return false
  if (domains && matchFails(domains, location.hostname)) return false
  if (protocols && matchFails(protocols, location.protocol)) return false
  if (hashes && includeExcludeFails(hashes, location.hash)) return false

  function includeExcludeFails(matcher, matchee){
    var include = matcher.include
    var exclude = matcher.exclude
    if (include && matchFails(include, matchee)) return true
    if (exclude){
      if (SL.isString(exclude) && exclude === matchee)
        return true
      if (SL.isArray(exclude) && SL.any(exclude, matches))
        return true
      if (SL.isRegex(exclude) && matches(exclude))
        return true
    }

    return false

    function matches(regex){
      return matchee.match(regex)
    }
  }

  function matchFails(matcher, matchee){
    if (SL.isString(matcher) && matcher !== matchee)
      return true
    if (SL.isArray(matcher) && !SL.any(matcher, matches))
      return true
    if (SL.isRegex(matcher) && !matches(matcher))
      return true
    return false

    function matches(regex){
      return matchee.match(regex)
    }

  }

  return true
}


// Run background tasks once. This will get invoked periodically.
SL.backgroundTasks = function(){
  var start = +new Date()
  SL.setFormListeners()
  SL.setVideoListeners()
  SL.loadStoredSettings()
  SL.registerNewElementsForDynamicRules()
  SL.eventEmitterBackgroundTasks()

  // Trigger condition events
  //SL.onEvent({type: 'condition', target: 'document'})
  var end = +new Date()
  // We want to keep an eye on the execution time here.
  // If it gets to around 50ms for any customer site,
  // we want to either optimize or start using a task queue
  //SL.notify('Background tasks executed in ' + (end - start) + 'ms', 3)
}



// For rules that poll for dynamically injected elements on the page,
// find them and register events for them.
SL.registerNewElementsForDynamicRules = function(){
  function cssQuery(selector, callback){
    var hit = cssQuery.cache[selector]
    if (hit){
      return callback(hit)
    }else{
      SL.cssQuery(selector, function(elms){
        cssQuery.cache[selector] = elms
        callback(elms)
      })
    }
  }
  cssQuery.cache = {}


  SL.each(SL.dynamicRules, function(rule){
    cssQuery(rule.selector, function(elms){
      SL.each(elms, function(elm){
        var event = rule.event === 'custom' ? rule.customEvent : rule.event;
        if (SL.$data(elm, 'dynamicRules.seen.' + event)) return
        SL.$data(elm, 'dynamicRules.seen.' + event, true)
        if (SL.propertiesMatch(rule.property, elm)){
          SL.registerEvents(elm, [event])
        }
      })
    })
  })
}

// If the browser doesn't support CSS selector queries, we have to include one.
SL.ensureCSSSelector = function(){
  if (document.querySelectorAll){
    SL.hasSelector = true
    return
  }
  SL.loadingSizzle = true
  SL.sizzleQueue = []
  SL.loadScript(SL.basePath() + 'selector.js', function(){
    if (!SL.Sizzle){
      SL.logError(new Error('Failed to load selector.js'))
      return
    }
    var pending = SL.onEvent.pendingEvents
    SL.each(pending, function(evt){
      SL.handleEvent(evt)
    }, this)
    SL.onEvent = SL.handleEvent
    SL.hasSelector = true
    ;delete SL.loadingSizzle
    SL.each(SL.sizzleQueue, function(item){
      SL.cssQuery(item[0], item[1])
    })
    ;delete SL.sizzleQueue

  })
}

// Error Handling

SL.errors = []
SL.logError = function(err){
  SL.errors.push(err)
  SL.notify(err.name + ' - ' + err.message, 5)
}

// `pageBottom()`
// --------------
//
// The function is to be called by the web page using an script tag like so:
//
//     <script>_satellite.pageBottom()</script>
//
// just before the `</body>` tag.
SL.pageBottom = function(){
  if (!SL.initialized) return
  SL.pageBottomFired = true
  SL.firePageLoadEvent('pagebottom')
}

// This allows Rover to configure the browser to use the staging library instead.
SL.stagingLibraryOverride = function(){
  /*jshint evil:true */
  var libraryOverride = SL.readStoredSetting('stagingLibrary') === 'true'
  if (libraryOverride){ // allow Rover to override the library to staging
    var scripts = document.getElementsByTagName('script')
      , regex = /^(.*)satelliteLib-([a-f0-9]{40})\.js$/
      , regexStaging = /^(.*)satelliteLib-([a-f0-9]{40})-staging\.js$/
      , match
      , matchStaging
      , src
    for (var i = 0, len = scripts.length; i < len; i++){
      src = scripts[i].getAttribute('src')
      if (!src) continue
      if (!match) match = src.match(regex)
      if (!matchStaging) matchStaging = src.match(regexStaging)
      if (matchStaging) break
    }
    if (match && !matchStaging){
      var stagingURL = match[1] + 'satelliteLib-' + match[2] + '-staging.js'
      if (document.write) {
        document.write('<script src="' + stagingURL + '"></script>')
      } else {
        var s = document.createElement('script')
        s.src = stagingURL
        document.head.appendChild(s)
      }
      return true
    }
  }
  return false
}

SL.checkAsyncInclude = function(){
  if (window.satellite_asyncLoad)
    SL.notify('You may be using the async installation of Satellite. In-page HTML and the "pagebottom" event will not work. Please update your Satellite installation for these features.', 5)
}

SL.hasMultipleDomains = function(){
  return !!SL.settings.domainList && SL.settings.domainList.length > 1
}

SL.handleOverrides = function(){
  if (Overrides){
    for (var key in Overrides){
      if (Overrides.hasOwnProperty(key)){
        SL.data[key] = Overrides[key]
      }
    }
  }
}

SL.privacyManagerParams = function(){
  var params = {}
  SL.extend(params, SL.settings.privacyManagement)
  var analyticsTools = []
  for (var key in SL.tools){
    if (SL.tools.hasOwnProperty(key)) {
      var tool = SL.tools[key]
      var settings = tool.settings
      if (!settings) continue
      if (settings.engine === 'sc'){
        analyticsTools.push(tool)
      }
    }
  }
  var analyticsTrackingServers = SL.filter(SL.map(analyticsTools, function(tool){
    return tool.getTrackingServer()
  }), function(s){ return s != null })
  params.adobeAnalyticsTrackingServers = analyticsTrackingServers
  var substitutable = [
    'bannerText',
    'headline',
    'introductoryText',
    'customCSS'
  ]
  for (var i = 0; i < substitutable.length; i++){
    var prop = substitutable[i]
    var spec = params[prop]
    if (!spec) continue
    if (spec.type === 'text'){
      params[prop] = spec.value
    }else if (spec.type === 'data'){
      params[prop] = SL.getVar(spec.value)
    }else{
      throw new Error('Invalid type: ' + spec.type)
    }
  }
  return params
}

SL.prepareLoadPrivacyManager = function(){
  SL.addEventHandler(window, 'load', function(){
    loadWhenAllSCToolsLoaded(SL.loadPrivacyManager)
  })

  function loadWhenAllSCToolsLoaded(callback){
    var scTools = SL.filter(SL.values(SL.tools), function(tool){
      return tool.settings && tool.settings.engine === 'sc'
    })
    if (scTools.length === 0){
      return callback()
    }
    var numLoaded = 0
    SL.each(scTools, function(tool){
      SL.bindEvent(tool.id + '.load', onLoad)
    })
    var tid = setTimeout(onTimeout, 5000)

    function onLoad(){
      numLoaded++
      if (numLoaded === scTools.length){
        cleanUp()
        clearTimeout(tid)
        callback()
      }
    }

    function cleanUp(){
      SL.each(scTools, function(tool){
        SL.unbindEvent(tool.id + '.load', onLoad)
      })
    }

    function onTimeout(){
      cleanUp()
      callback()
    }
  }

}

// `loadPrivacyManager()`
// ----------------------
//
// Initialize privacy manager
SL.loadPrivacyManager = function(){
  var scriptUrl = SL.basePath() + 'privacy_manager.js'
  SL.loadScript(scriptUrl, function(){
    var pm = SL.privacyManager
    pm.configure(SL.privacyManagerParams())
    pm.openIfRequired()
  })
}

// `init()`
// --------
//
// Initialize Satellite.
//
// - `settings` - all the settings that comprising a library.
SL.init = function(settings) {
  if (SL.stagingLibraryOverride())
    return

  SL.configurationSettings = settings
  var tools = settings.tools
  ;delete settings.tools
  for (var key in settings){
    if (settings.hasOwnProperty(key)){
      SL[key] = settings[key]
    }
  }

  if(SL.data.customVars === undefined)
    SL.data.customVars = {}

  SL.data.queryParams = SL.QueryParams.normal

  SL.handleOverrides()

  SL.detectBrowserInfo()

  if (SL.trackVisitorInfo)
    SL.trackVisitorInfo()

  SL.loadStoredSettings()
  SL.Logger.setOutputState(SL.settings.notifications)

  SL.checkAsyncInclude()

  SL.ensureCSSSelector()

  SL.filterRules()
  SL.dynamicRules = SL.filter(SL.rules, function(rule){
    return rule.eventHandlerOnElement
  })

  SL.tools = SL.initTools(tools)
  SL.initEventEmitters()

  SL.firePageLoadEvent('aftertoolinit')

  if (SL.settings.privacyManagement){
    SL.prepareLoadPrivacyManager()
  }

  if (SL.hasSelector)
    SL.domReady(SL.eventEmitterBackgroundTasks)

  SL.setListeners()

  // Setup background tasks
  SL.domReady(function() {
    SL.poll(
      function() { SL.backgroundTasks() },
      SL.settings.recheckEvery || 3000
    )
  })

  // Setup page load events
  SL.domReady(function(){
    SL.domReadyFired = true
    if (!SL.pageBottomFired)
      SL.pageBottom()

    SL.firePageLoadEvent('domready')
  })

  SL.addEventHandler(window, 'load', function(){
    SL.firePageLoadEvent('windowload')
  })

  SL.firePageLoadEvent('pagetop')
  SL.initialized = true
}

SL.pageLoadPhases = ['aftertoolinit', 'pagetop', 'pagebottom', 'domready', 'windowload']

SL.loadEventBefore = function(one, other){
  return SL.indexOf(SL.pageLoadPhases, one) <= SL.indexOf(SL.pageLoadPhases, other)
}

SL.flushPendingCalls = function(tool){
  if (tool.pending){
    SL.each(tool.pending, function(call){
      var cmd = call[0]
        , elm = call[1]
        , evt = call[2]
        , args = call[3]
      if (cmd in tool)
        tool[cmd].apply(tool, [elm, evt].concat(args))
      else if (tool.emit)
        tool.emit(cmd, elm, evt, args)
      else
        SL.notify('Failed to trigger ' + cmd +
          ' for tool ' + tool.id, 1)
    })
    ;delete tool.pending
  }
}

// setDebug(debug)
// --------------
//
// Activate or deactivate debug mode - within which
// log statements will be printed to the JS console.
//
// - `debug` - a boolean indicating whether debug mode
//   should be turned on.
SL.setDebug = function(debug){
  // When local storage is disabled on Safari, the mere act of referencing window.localStorage
  // throws an error. For this reason, referencing window.localStorage without being inside
  // a try-catch should be avoided.
  try {
    window.localStorage.setItem('sdsat_debug', debug)
  } catch (e) {
    SL.notify('Cannot set debug mode: ' + e.message, 2)
  };
}

SL.getUserAgent = function() {
  return navigator.userAgent;
};

SL.detectBrowserInfo = function(){
  // Based on <http://jsbin.com/inubez/3/>
  function matcher(regexs){
    return function(userAgent){
      for (var key in regexs){
        if (regexs.hasOwnProperty(key)) {          
          var regex = regexs[key];
          var match = regex.test(userAgent);
          if (match) return key;
        }
      }
      return "Unknown";
    };
  }

  // The order in which these regular expressions are evaluated is important.

  var getBrowser = matcher({
    "IE Edge Mobile": /Windows Phone.*Edge/,
    "IE Edge": /Edge/,
    OmniWeb: /OmniWeb/,
    "Opera Mini": /Opera Mini/,
    "Opera Mobile": /Opera Mobi/,
    Opera: /Opera/,
    Chrome: /Chrome|CriOS|CrMo/,
    Firefox: /Firefox|FxiOS/,
    "IE Mobile": /IEMobile/,
    IE: /MSIE|Trident/,
    "Mobile Safari": /Mobile(\/[0-9A-z]+)? Safari/,
    Safari: /Safari/
  });

  var getOS = matcher({
    Blackberry: /BlackBerry|BB10/,
    "Symbian OS": /Symbian|SymbOS/,
    Maemo: /Maemo/,
    Android: /Android/,
    Linux: / Linux /,
    Unix: /FreeBSD|OpenBSD|CrOS/,
    Windows: /[\( ]Windows /,
    iOS: /iPhone|iPad|iPod/,
    MacOS: /Macintosh;/
  });

  var getDeviceType = matcher({
    // This is not entirely accurate. A few old Samsung, Motorola, and Sony Ericsson phones
    // will match but the majority and best guess is Nokia. Also, Nokia makes Windows phones and
    // for those we will make it match Windows Phone and not Nokia.
    Nokia: /Symbian|SymbOS|Maemo/,
    "Windows Phone": /Windows Phone/,
    Blackberry: /BlackBerry|BB10/,
    Android: /Android/,
    iPad: /iPad/,
    iPod: /iPod/,
    iPhone: /iPhone/,
    Desktop: /.*/
  });

  var userAgent = SL.getUserAgent();
  SL.browserInfo = {
    browser: getBrowser(userAgent)
    , os: getOS(userAgent)
    , deviceType: getDeviceType(userAgent)
  }
}

SL.isHttps = function(){
  return 'https:' == document.location.protocol
}

SL.BaseTool = function(settings){
  this.settings = settings || {}

  this.forceLowerCase = SL.settings.forceLowerCase
  if ('forceLowerCase' in this.settings){
    this.forceLowerCase = this.settings.forceLowerCase
  }
}
SL.BaseTool.prototype = {
  triggerCommand: function(trig, elm, evt){
    var settings = this.settings || {}

    if (this.initialize && this.isQueueAvailable()){
      if (this.isQueueable(trig) && evt && SL.loadEventBefore(evt.type, settings.loadOn)){
        this.queueCommand(trig, elm, evt)
        return
      }
    }

    var cmd = trig.command
    var method = this['$' + cmd]
    var escapeHtml = method ? method.escapeHtml : false
    var args = SL.preprocessArguments(
      trig['arguments'],
      elm,
      evt,
      this.forceLowerCase,
      escapeHtml)

    if (method){
      method.apply(this, [elm, evt].concat(args))
    }else if (this.$missing$){
      this.$missing$(cmd, elm, evt, args)
    }else
      SL.notify('Failed to trigger ' + cmd +
        ' for tool ' + this.id, 1)

  },
  endPLPhase: function(pageLoadEvent){
    // override to handle end initialization
  },
  isQueueable: function(trig){
    // everything is queueable except `cancelToolInit`
    return trig.command !== 'cancelToolInit'
  },
  isQueueAvailable: function(){
    return !this.initialized && !this.initializing
  },
  flushQueue: function(){
    if (this.pending){
      SL.each(this.pending, function(args){
        this.triggerCommand.apply(this, args)
      }, this)
      this.pending = []
    }
  },
  queueCommand: function(trig, elm, evt){
    if (!this.pending)
      this.pending = []
    this.pending.push([trig, elm, evt])
  },
  $cancelToolInit: function(){
    this._cancelToolInit = true
  }
}

// Set Satellite to the global variable `_satellite`.
window._satellite = SL

// E-Commerce APIs
// ---------------
//
// The ecommerce API allows web admins to integrate e-commerce tracking with Satellite.
// More details on the [GA E-Commerce API's](http://code.google.com/apis/analytics/docs/gaJS/gaJSApiEcommerce.html).
// Upon any of the methods on the API being called, they will fire an event, which
// in turn can be handled by a rule in the library.

SL.ecommerce = {
  // `addItem(orderId, sku, name, category, price, quantity)`
  // -------------------------------------
  //
  // Add an item to the transaction.
  addItem: function(){
    var args = [].slice.call(arguments)
    SL.onEvent({type: 'ecommerce.additem', target: args})
  },

  // `addTrans(orderId, affiliation, total, tax, shipping, city, state, country)`
  // ----------------------------------------------------------------------------
  //
  // Add a new transaction.
  addTrans: function(){
    var args = [].slice.call(arguments)
    SL.data.saleData.sale = {
      orderId: args[0],
      revenue: args[2]
    }
    SL.onEvent({type: 'ecommerce.addtrans', target: args})
  },

  // `trackTrans()`
  // --------------
  //
  // Send the transaction data that's been set up using `addItem()` and `addTrans()`
  // to GA to be tracked.
  trackTrans: function(){
    SL.onEvent({type: 'ecommerce.tracktrans', target: []})
  }
}

// Visibility API Event Emitter
// ============================
//
// The `visibility API` is used when the browser's tab gets hidden because
// another tab now is visible. For more information see Mozilla's [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API)

SL.visibility = {
  // Public
  // ------------------------------------------------

  // `isHidden()`
  //
  // The method returns true if the tab is hidden, otherwise false.
  isHidden: function() {
    var prop = this.getHiddenProperty();
    if (!prop) return false;
    return document[prop];
  },

  // `isVisible()`
  //
  // The method is an alias for the `!isHidden`.
  isVisible: function() {
    return !this.isHidden();
  },

  // Private
  // ------------------------------------------------
  getHiddenProperty: function() {
    var prefixes = ['webkit', 'moz', 'ms', 'o'];
    if ('hidden' in document) return 'hidden';
    // otherwise loop over all the known prefixes until we find one
    for (var i = 0; i < prefixes.length; i++) {
      if ((prefixes[i] + 'Hidden') in document)
        return prefixes[i] + 'Hidden';
    }
    // otherwise it's not supported
    return null;
  },

  getVisibilityEvent: function() {
    var ve = this.getHiddenProperty();
    if (!ve) return null;
    return ve.replace(/[H|h]idden/,'') + 'visibilitychange';
  }
};

// Leave Event Emitter
// ============================
//
// The page leave is an event that is used to detect the moment when the
// browser's tab gets closed.
//

function LeaveEventEmitter() {
  if (SL.getToolsByType('nielsen').length > 0) {
    SL.domReady(SL.bind(this.initialize, this));
  }
}

LeaveEventEmitter.prototype = {
  obue: false,
  initialize: function() {
    this.attachCloseListeners();
  },
  obuePrevUnload: function() {},
  obuePrevBeforeUnload: function() {},
  newObueListener: function() {
    if (!this.obue) {
      this.obue = true;
      this.triggerBeacons();
    }
  },
  attachCloseListeners: function() {
    this.prevUnload = window.onunload;
    this.prevBeforeUnload = window.onbeforeunload;

    window.onunload = SL.bind(function(e) {
      if (this.prevUnload) {
        setTimeout(SL.bind(function() {
          this.prevUnload.call(window, e);
        }, this), 1);
      }
      this.newObueListener();
    }, this);
    window.onbeforeunload = SL.bind(function(e) {
      if (this.prevBeforeUnload) {
        setTimeout(SL.bind(function() {
          this.prevBeforeUnload.call(window, e);
        }, this), 1);
      }
      this.newObueListener();
    }, this);
  },
  triggerBeacons: function() {
    SL.fireEvent('leave', document);
  }
}
SL.availableEventEmitters.push(LeaveEventEmitter);

// Twitter Event Emitter
// =====================
//
// Emits the `twitter.tweet` event in the event a user tweets from the site.
function TwitterEventEmitter(twttr){
  SL.domReady(SL.bind(function () {
    this.twttr = twttr || window.twttr;
    this.initialize();
  }, this));
}

TwitterEventEmitter.prototype = {
  initialize: function(){
    var twttr = this.twttr;
    if (twttr && typeof twttr.ready === 'function') {
      twttr.ready(SL.bind(this.bind, this));
    }
  },

  bind: function(){
    this.twttr.events.bind('tweet', function(event) {
      if (event) {
        SL.notify("tracking a tweet button", 1);
        SL.onEvent({type: 'twitter.tweet', target: document});
      }
    });

  }
}
SL.availableEventEmitters.push(TwitterEventEmitter)

// Location Change Event Emitter
// =============================
//
// Will fire `locationchange` event whenever the browser location
// changes due to `hashchange`, `popstate`, `history.pushState()`,
// or `history.replaceState()`. 

function LocationChangeEventEmitter(){
  this.lastURL = SL.URL()
  this._fireIfURIChanged = SL.bind(this.fireIfURIChanged, this)
  this._onPopState = SL.bind(this.onPopState, this)
  this._onHashChange = SL.bind(this.onHashChange, this)
  this._pushState = SL.bind(this.pushState, this)
  this._replaceState = SL.bind(this.replaceState, this)
  this.initialize()
}

LocationChangeEventEmitter.prototype = {
  initialize: function(){
    this.setupHistoryAPI()
    this.setupHashChange()
  },

  fireIfURIChanged: function(){
    var URL = SL.URL()
    if (this.lastURL !== URL){
      this.fireEvent()
      this.lastURL = URL
    }
  },

  fireEvent: function(){
    SL.updateQueryParams()
    SL.onEvent({ type: 'locationchange', target: document })
  },

  setupSPASupport: function(){
    this.setupHistoryAPI()
    this.setupHashChange()
  },

  setupHistoryAPI: function(){
    var history = window.history
    if (history){
      if (history.pushState){
        this.originalPushState = history.pushState
        history.pushState = this._pushState
      }
      if (history.replaceState){
        this.originalReplaceState = history.replaceState
        history.replaceState = this._replaceState
      }
    }
    SL.addEventHandler(window, 'popstate', this._onPopState)
  },

  pushState: function(){
    var ret = this.originalPushState.apply(history, arguments)
    this.onPushState()
    return ret
  },

  replaceState: function(){
    var ret = this.originalReplaceState.apply(history, arguments)
    this.onReplaceState()
    return ret
  },

  setupHashChange: function(){
    SL.addEventHandler(window, 'hashchange', this._onHashChange)
  },

  onReplaceState: function(){
    setTimeout(this._fireIfURIChanged, 0)
  },

  onPushState: function(){
    setTimeout(this._fireIfURIChanged, 0)
  },

  onPopState: function(){
    setTimeout(this._fireIfURIChanged, 0)
  },

  onHashChange: function(){
    setTimeout(this._fireIfURIChanged, 0)
  },

  uninitialize: function(){
    this.cleanUpHistoryAPI()
    this.cleanUpHashChange()
  },

  cleanUpHistoryAPI: function(){
    if (history.pushState === this._pushState){
      history.pushState = this.originalPushState
    }
    if (history.replaceState === this._replaceState){
      history.replaceState = this.originalReplaceState
    }
    SL.removeEventHandler(window, 'popstate', this._onPopState)
  },

  cleanUpHashChange: function(){
    SL.removeEventHandler(window, 'hashchange', this._onHashChange)
  }

}

SL.availableEventEmitters.push(LocationChangeEventEmitter);

function DataElementChangeEmitter() {
  var rules = SL.filter(SL.rules, function(rule) {
    return rule.event.indexOf('dataelementchange') === 0;
  });

  this.dataElementsNames = SL.map(rules, function(rule) {
    var matchedSubstrings = rule.event.match(/dataelementchange\((.*)\)/i);
    return matchedSubstrings[1];
  }, this);

  this.initPolling();
}

// SL.stringify is not 100% compatible with JSON.stringify (for example JSON.stringify breaks
// whenever it encounters a cyclic reference). Since this check might become intensive,
// only for this case we would prefer using JSON.stringify whenever that's available.
DataElementChangeEmitter.prototype.getStringifiedValue =
    (window.JSON && window.JSON.stringify) || SL.stringify;

DataElementChangeEmitter.prototype.initPolling = function() {
  if (this.dataElementsNames.length === 0) {
    return;
  }

  this.dataElementsStore = this.getDataElementsValues();
  SL.poll(SL.bind(this.checkDataElementValues, this), 1000);
};

DataElementChangeEmitter.prototype.getDataElementsValues = function() {
  var values = {};
  SL.each(this.dataElementsNames, function(dataElementName) {
    var value = SL.getVar(dataElementName);
    values[dataElementName] = this.getStringifiedValue(value);
  }, this);

  return values;
};

DataElementChangeEmitter.prototype.checkDataElementValues = function() {
  SL.each(this.dataElementsNames, SL.bind(function(dataElementName) {
    var currentStringifiedValue = this.getStringifiedValue(SL.getVar(dataElementName));
    var previousStringifiedValue =  this.dataElementsStore[dataElementName];

    if (currentStringifiedValue !== previousStringifiedValue) {
      this.dataElementsStore[dataElementName] = currentStringifiedValue;

      SL.onEvent({
        type: 'dataelementchange(' + dataElementName + ')',
        target: document
      });
    }
  }, this));
};

SL.availableEventEmitters.push(DataElementChangeEmitter);

// Orientation Change Event Emitter
// ================================
//
// The `orientationchange` event on mobile devices fire when the devices switchs between
// portrait and landscape modes. You can use `%event.orientation%` in your command arguments
// to evaluate to either `portrait` or `landscape`.
function OrientationChangeEventEmitter(){
  SL.addEventHandler(window, "orientationchange", OrientationChangeEventEmitter.orientationChange)
}
OrientationChangeEventEmitter.orientationChange = function (e) {
  var orientation = window.orientation === 0 ? 
    'portrait' : 
    'landscape'
  e.orientation = orientation
  SL.onEvent(e)
}
SL.availableEventEmitters.push(OrientationChangeEventEmitter)

// VideoPlayedEventEmitter
// =======================
//
// Emits the `videoplayed` event, given a specified percentage or duration, i.e. `videoplayed`
// is a parameterized event. A rule looks like this
//
//      {
//          name: "Video 10% complete",
//          event: "videoplayed(10%)",
//          selector: "#video",
//          trigger: [
//              {
//                  tool: "ga",
//                  command: "trackEvent",
//                  arguments: [
//                      "video",
//                      "video 10% complete",
//                      "from: %URI%"
//                  ]
//              }
//          ]
//      }
//
// `10%` is in the paranthesis which indicates this rule will only fire when the 10%
// of the total length of the video has been played.
// You can also specifiy a duration in seconds, which looks like `videoplayed(8s)` - which
// stands for 8 seconds.

function VideoPlayedEventEmitter(){
  this.rules = SL.filter(SL.rules, function(rule){
    return rule.event.substring(0, 11) === 'videoplayed'
  })
  this.eventHandler = SL.bind(this.onUpdateTime, this)
}
VideoPlayedEventEmitter.prototype = {
  backgroundTasks: function(){
    var eventHandler = this.eventHandler
    SL.each(this.rules, function(rule){
      SL.cssQuery(rule.selector || 'video', function(elms){
        SL.each(elms, function(elm){
          if (SL.$data(elm, 'videoplayed.tracked')) return
          SL.addEventHandler(elm, 'timeupdate', SL.throttle(eventHandler, 100))
          SL.$data(elm, 'videoplayed.tracked', true)
        })
      })
    })
  },
  evalRule: function(elm, rule){
    var eventType = rule.event
      , seekable = elm.seekable
      , startTime = seekable.start(0)
      , endTime = seekable.end(0)
      , currentTime = elm.currentTime
      , m = rule.event.match(/^videoplayed\(([0-9]+)([s%])\)$/)
    if (!m) return
    var unit = m[2]
      , amount = Number(m[1])
    var func = unit === '%' ?
      function(){
        return amount <= 
          100 * (currentTime - startTime) / (endTime - startTime)
      } :
      function(){
        return amount <= currentTime - startTime
      }
    if (!SL.$data(elm, eventType) && func()){
      SL.$data(elm, eventType, true)
      SL.onEvent({type: eventType, target: elm})
    }
  },
  onUpdateTime: function(e){
    var rules = this.rules
      , elm = e.target
    if (!elm.seekable || elm.seekable.length === 0) return
    for (var i = 0, len = rules.length; i < len; i++)
      this.evalRule(elm, rules[i])
  }
}
SL.availableEventEmitters.push(VideoPlayedEventEmitter)

// Visibility API Event Emitter
// ============================
//
// The `visibility API` is used when the browser's tab gets hidden because
// another tab now is visible. For more information see Mozilla's [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API)

function VisibilityEventEmitter() {
  this.defineEvents();
  this.visibilityApiHasPriority = true;
  if (!document.addEventListener) { // Older browers (e.g.: IE8)
    this.attachDetachOlderEventListeners(true, document, 'focusout');
  } else {
    this.setVisibilityApiPriority(false);
  }
  var context = this;
  SL.bindEvent('aftertoolinit', function() {
    SL.fireEvent(SL.visibility.isHidden() ? 'tabblur' : 'tabfocus');
  });
}

VisibilityEventEmitter.prototype = {
  defineEvents: function() {
    this.oldBlurClosure = function() {
      SL.fireEvent('tabblur', document)
    };
    this.oldFocusClosure = SL.bind(function() {
      if (this.visibilityApiHasPriority) {
        SL.fireEvent('tabfocus', document);
      } else {
        if (SL.visibility.getHiddenProperty() != null) {
          if(!SL.visibility.isHidden()) {
            SL.fireEvent('tabfocus', document);
          }
        } else {
          SL.fireEvent('tabfocus', document);
        }
      }
    }, this);
  },
  attachDetachModernEventListeners: function(add) {
    var method = (add == false ? 'removeEventHandler' : 'addEventHandler');
    SL[method](document,
      SL.visibility.getVisibilityEvent(),
      this.handleVisibilityChange
    );
  },
  attachDetachOlderEventListeners: function(add, blurTarget, blurEventName) {
    var method = (add == false ? 'removeEventHandler' : 'addEventHandler');
    SL[method](blurTarget, blurEventName, this.oldBlurClosure);
    SL[method](window, 'focus', this.oldFocusClosure);
  },
  handleVisibilityChange: function() {
    if (SL.visibility.isHidden()) {
      SL.fireEvent('tabblur', document);
    } else {
      SL.fireEvent('tabfocus', document);
    }
  },
  setVisibilityApiPriority: function(visibilityApiHasPriority) {
    this.visibilityApiHasPriority = visibilityApiHasPriority;
    this.attachDetachOlderEventListeners(false, window, 'blur');
    this.attachDetachModernEventListeners(false);
    if (visibilityApiHasPriority) {
      if (SL.visibility.getHiddenProperty() != null) { // Modern browsers
        this.attachDetachModernEventListeners(true);
      } else {
        this.attachDetachOlderEventListeners(true, window, 'blur');
      }
    } else {
      this.attachDetachOlderEventListeners(true, window, 'blur');
      if (SL.visibility.getHiddenProperty() != null) { // Modern browsers
        this.attachDetachModernEventListeners(true);
      }
    }
  },
  oldBlurClosure: null,
  oldFocusClosure: null,
  visibilityApiHasPriority: true
};

SL.availableEventEmitters.push(VisibilityEventEmitter);

// InviewEventEmitter
// ==================
//
// Emits the `inview` event. The `inview` event fires on an element when the element
// first comes into the view of the user. If the element is in view immediately upon page
// load, it will be fired right away, if it only comes in view after some scrolling, it
// will fire then. An optional delay interval `inviewDelay` can be specified in the rule
// which determine how long the element has to be in view for before the event fires,
// of which the default value is 1 second.

function InViewEventEmitter(rules){
  rules = rules || SL.rules
  this.rules = SL.filter(rules, function(rule){
    return rule.event === 'inview'
  })
  this.elements = []
  this.eventHandler = SL.bind(this.track, this)
  SL.addEventHandler(window, 'scroll', this.eventHandler)
  SL.addEventHandler(window, 'load', this.eventHandler)
}

// Util functions needed by `InViewEventEmitter`
InViewEventEmitter.offset = function(elem) {
  var top = null, left = null;

  try {
    var box = elem.getBoundingClientRect(),
      doc = document,
      docElem = doc.documentElement,
      body = doc.body,
      win = window,
      clientTop  = docElem.clientTop  || body.clientTop  || 0,
      clientLeft = docElem.clientLeft || body.clientLeft || 0,
      scrollTop  = win.pageYOffset || docElem.scrollTop  || body.scrollTop,
      scrollLeft = win.pageXOffset || docElem.scrollLeft || body.scrollLeft;

    top  = box.top  + scrollTop  - clientTop;
    left = box.left + scrollLeft - clientLeft;
  } catch(e) {
  }

  return { top: top, left: left }
}
InViewEventEmitter.getViewportHeight = function() {
  var height = window.innerHeight // Safari, Opera
  var mode = document.compatMode

  if (mode) { // IE, Gecko
    height = (mode == 'CSS1Compat') ?
    document.documentElement.clientHeight : // Standards
    document.body.clientHeight // Quirks
  }

  return height
}
InViewEventEmitter.getScrollTop = function(){
  return (document.documentElement.scrollTop ?
    document.documentElement.scrollTop :
    document.body.scrollTop)
}

InViewEventEmitter.isElementInDocument = function(el) {
  return document.body.contains(el);
}

InViewEventEmitter.isElementInView = function(el) {
  if (!InViewEventEmitter.isElementInDocument(el)) {
    return false;
  }

  var vpH = InViewEventEmitter.getViewportHeight()
      , scrolltop = InViewEventEmitter.getScrollTop()
      , top = InViewEventEmitter.offset(el).top
      , height = el.offsetHeight;

  if (top !== null) {
    return !(scrolltop > (top + height) || scrolltop + vpH < top)
  }

  return false;
}

InViewEventEmitter.prototype = {
  backgroundTasks: function(){
    var elements = this.elements
    SL.each(this.rules, function(rule){
      SL.cssQuery(rule.selector, function(elms){
        var addCount = 0
        SL.each(elms, function(elm){
          if (!SL.contains(elements, elm)){
            elements.push(elm)
            addCount++
          }
        })
        if (addCount){
          SL.notify(rule.selector + ' added ' + addCount + ' elements.', 1)
        }
      })
    })
    this.track()
  },

  checkInView: function(el, recheck, delay){
    var inview = SL.$data(el, 'inview');
    if (InViewEventEmitter.isElementInView(el)) {
      // it is in view now
      if (!inview)
        SL.$data(el, 'inview', true)
      var self = this
      this.processRules(el, function(rule, viewedProp, timeoutIdProp){
        if (recheck || !rule.inviewDelay){
          SL.$data(el, viewedProp, true)
          SL.onEvent({type: 'inview', target: el, inviewDelay: rule.inviewDelay})
        }else if(rule.inviewDelay){
          var timeout = SL.$data(el, timeoutIdProp)
          if (!timeout) {
            timeout = setTimeout(function(){
              self.checkInView(el, true, rule.inviewDelay)
            }, rule.inviewDelay)
            SL.$data(el, timeoutIdProp, timeout)
          }
        }
      }, delay)
    } else {
      if (!InViewEventEmitter.isElementInDocument(el)) {
        var idx = SL.indexOf(this.elements, el);
        this.elements.splice(idx, 1)
      }

      // it is not in view now
      if (inview)
        SL.$data(el, 'inview', false)
      this.processRules(el, function(rule, viewedProp, timeoutIdProp){
        var timeout = SL.$data(el, timeoutIdProp)
        if (timeout){
          clearTimeout(timeout)
        }
      }, delay)
    }
  },
  track: function(){
    // We are not using SL.each here because we might do a splice inisde
    // `checkInView` method.
    for (var i = this.elements.length - 1; i >=0; i--) {
      this.checkInView(this.elements[i]);
    }
  },
  processRules: function(elm, callback, delay){
    var filteredRules = this.rules;
    if (delay) {
        filteredRules = SL.filter(this.rules, function(e){
          return e.inviewDelay == delay;
        });
    }
    SL.each(filteredRules, function(rule, i){
      // viewedProp: for rules that has a timeout, the definition for
      // "viewed" is rule dependent. But for all rules that do not have
      // a timeout, it is independent.
      var viewedProp = rule.inviewDelay ? 'viewed_' + rule.inviewDelay : 'viewed'
      var timeoutIdProp = 'inview_timeout_id_' + i
      if (SL.$data(elm, viewedProp)) return
      if (SL.matchesCss(rule.selector, elm)){
        callback(rule, viewedProp, timeoutIdProp)
      }
    })
  }
}

SL.availableEventEmitters.push(InViewEventEmitter)

// ElementExistsEventEmitter
// ==================
//
// Emits the `elementexists` event. The `elementexists` event fires when an element
// of a specified selector becomes into existance - either because it's in the page
// markup or dynamically injected later on. *Each rule only fires once.*

function ElementExistsEventEmitter() {
  this.rules = SL.filter(SL.rules, function(rule) {
    return rule.event === 'elementexists';
  });
}
ElementExistsEventEmitter.prototype.backgroundTasks = function() {
  SL.each(this.rules, function(rule) {
    SL.cssQuery(rule.selector, function(elms) {
      if (elms.length > 0){
        // This results in a bug: https://jira.corp.adobe.com/browse/DTM-6681
        // The fix was reverted due to: https://jira.corp.adobe.com/browse/DTM-7377
        var elm = elms[0];
        if (SL.$data(elm, 'elementexists.seen')) return;
        SL.$data(elm, 'elementexists.seen', true);
        SL.onEvent({type: 'elementexists', target: elm});
      }
    })
  })
}

SL.availableEventEmitters.push(ElementExistsEventEmitter);

// Facebook Event Emitter
// ======================
//
// Will track `edge.create`, `edge.remove` and `message.send` events from the Facebook
// Javascript API and emit `facebook.like`, `facebook.unlike` and `facebook.send` events
// respectively.

function FacebookEventEmitter(FB){
  this.delay = 250;
  this.FB = FB;

  SL.domReady(SL.bind(function () {
    SL.poll(SL.bind(this.initialize, this), this.delay, 8);
  }, this));
}

FacebookEventEmitter.prototype = {
  initialize: function() {
    this.FB = this.FB || window.FB;

    if (this.FB && this.FB.Event && this.FB.Event.subscribe) {
      this.bind();
      return true;
    }
  },

  bind: function(){
    this.FB.Event.subscribe('edge.create', function() {
      SL.notify("tracking a facebook like", 1)
      SL.onEvent({type: 'facebook.like', target: document})
    });

    this.FB.Event.subscribe('edge.remove', function() {
      SL.notify("tracking a facebook unlike", 1)
      SL.onEvent({type: 'facebook.unlike', target: document})
    });

    this.FB.Event.subscribe('message.send', function() {
      SL.notify("tracking a facebook share", 1)
      SL.onEvent({type: 'facebook.send', target: document})
    });
  }
}
SL.availableEventEmitters.push(FacebookEventEmitter);

// Hover Event Emitter
// =====================
//
// Emits the `hover` event in the event. This is better than `mouseover` because you can introduce a certain delay.
// 
//  {
//        name: "Hover for 1 second"
//        event: "hover(1000)",
//        ...
//  }
function HoverEventEmitter(){
  var eventRegex = this.eventRegex = /^hover\(([0-9]+)\)$/
  var rules = this.rules = []
  SL.each(SL.rules, function(rule){
    var m = rule.event.match(eventRegex)
    if (m){
      rules.push([
        Number(rule.event.match(eventRegex)[1]), 
        rule.selector
      ])
    }
  })
}
HoverEventEmitter.prototype = {
  backgroundTasks: function(){
    var self = this
    SL.each(this.rules, function(rule){
      var selector = rule[1]
        , delay = rule[0]
      SL.cssQuery(selector, function(newElms){
        SL.each(newElms, function(elm){
          self.trackElement(elm, delay)
        })
      })
    }, this)
  },
  trackElement: function(elm, delay){
    var self = this
      , trackDelays = SL.$data(elm, 'hover.delays')
    if (!trackDelays){
      SL.addEventHandler(elm, 'mouseover', function(e){
        self.onMouseOver(e, elm)
      })
      SL.addEventHandler(elm, 'mouseout', function(e){
        self.onMouseOut(e, elm)
      })
      SL.$data(elm, 'hover.delays', [delay])
    }
    else if (!SL.contains(trackDelays, delay)){
      trackDelays.push(delay)
    }
  },
  onMouseOver: function(e, elem){
    var target = e.target || e.srcElement
      , related = e.relatedTarget || e.fromElement
      , hit = (elem === target || SL.containsElement(elem, target)) && 
            !SL.containsElement(elem, related)
    if (hit)
      this.onMouseEnter(elem)
  },
  onMouseEnter: function(elm){
    var delays = SL.$data(elm, 'hover.delays')
    var delayTimers = SL.map(delays, function(delay){
      return setTimeout(function(){
        SL.onEvent({type: 'hover(' + delay + ')', target: elm})
      }, delay)
    })
    SL.$data(elm, 'hover.delayTimers', delayTimers)
  },
  onMouseOut: function(e, elem){
    var target = e.target || e.srcElement
      , related = e.relatedTarget || e.toElement
      , hit = (elem === target || SL.containsElement(elem, target)) && 
            !SL.containsElement(elem, related)
    if (hit)
      this.onMouseLeave(elem)
  },
  onMouseLeave: function(elm){
    var delayTimers = SL.$data(elm, 'hover.delayTimers')
    if (delayTimers)
      SL.each(delayTimers, function(timer){
        clearTimeout(timer)
      })
  }
}
SL.availableEventEmitters.push(HoverEventEmitter)

// The Nielsen Tool
// ================
//
// This tool provides the means to make Nielsen tracking possible.
//
// The tool accepts the following settings:
//
// - `collectionServer` - The collection server to be used. The variable
//      specifies the nearest collection server.
// - `clientId` - The client identifier. A unique Nielsen supplied ID that
//      should be alphanumeric and lowercase. A dash (-) character is allowed.
// - `contentGroup` - The content group. A historical variable used for
//      grouping/aggregating content into channels. Currently the
//      default value is "0".
function NielsenTool(settings) {
  SL.BaseTool.call(this, settings);
  this.defineListeners();
  this.beaconMethod = 'plainBeacon';
  this.adapt = new NielsenTool.DataAdapters();
  this.dataProvider = new NielsenTool.DataProvider.Aggregate();
}

SL.inherit(NielsenTool, SL.BaseTool);
SL.extend(NielsenTool.prototype, {
  // Public
  // ------------------------------------------------
  name: 'Nielsen',

  // Private
  // ------------------------------------------------

  // `endPLPhase()`
  // ------------------------------------------------
  //
  // Method that starts the tool initialization when the page load phase is
  // matched and only if the tool initialization has not been previously
  // cancelled.
  //
  // This is needed in order to be able to properly hook the needed events.
  endPLPhase: function(pageLoadEvent) {
    switch (pageLoadEvent) {
      case 'pagetop':
        this.initialize();
        break;
      case 'pagebottom':
        if (this.enableTracking) {
          this.queueCommand({ command: 'sendFirstBeacon', "arguments": [] });
          this.flushQueueWhenReady();
        }
        break;
    }
  },

  defineListeners: function() {
    this.onTabFocus = SL.bind(function() {
      this.notify('Tab visible, sending view beacon when ready', 1);
      this.tabEverVisible = true;
      this.flushQueueWhenReady();
    }, this);
    this.onPageLeave = SL.bind(function() {
      this.notify('isHuman? : '+ this.isHuman(), 1);
      if (this.isHuman()) {
        this.sendDurationBeacon(); // track page leave
      }
    }, this);
    this.onHumanDetectionChange = SL.bind(function(e) {
      if (this == e.target.target) this.human = e.target.isHuman;
    }, this);
  },

  initialize: function() {
    this.initializeTracking();
    this.initializeDataProviders();
    this.initializeNonHumanDetection();
    this.tabEverVisible = SL.visibility.isVisible();
    if (!this.tabEverVisible) {
      SL.bindEventOnce('tabfocus', this.onTabFocus);
    }
    else {
      this.notify('Tab visible, sending view beacon when ready', 1);
    }

    this.initialized = true;
  },

  // `initializeTracking()`
  // ------------------------------------------------
  //
  // The method starts the time tracking and hooks on the leave event.
  initializeTracking: function() {
    if (this.initialized) return;
    this.notify('Initializing tracking', 1);
    this.addRemovePageLeaveEvent(this.enableTracking);
    this.addRemoveHumanDetectionChangeEvent(this.enableTracking);
    this.initialized = true;
  },

  // `initializeDataProviders()`
  // ------------------------------------------------
  //
  // The method initializes default data providers for:
  // - Analytics Report Suite ID, if Analytics account is linked
  // - Marketing Cloud Visitor ID, with fallback to auto-generated UUID
  initializeDataProviders: function() {
    var analytics = this.getAnalyticsTool(), rsid;

    this.dataProvider.register(
      new NielsenTool.DataProvider.VisitorID(
        SL.getVisitorId()
      )
    );
    if (analytics) {
      rsid = new NielsenTool.DataProvider.Generic('rsid', function() {
        return analytics.settings.account;
      });
      this.dataProvider.register(rsid);
    }
    else {
      this.notify('Missing integration with Analytics: rsid will not be sent.');
    }
  },

  initializeNonHumanDetection: function() {
    if (SL.nonhumandetection) {
      SL.nonhumandetection.init();
      this.setEnableNonHumanDetection(
        this.settings.enableNonHumanDetection == false ? false : true);
      if (this.settings.nonHumanDetectionDelay > 0) {
        this.setNonHumanDetectionDelay(
          parseInt(this.settings.nonHumanDetectionDelay) * 1000);
      }
    } else {
      this.notify('NHDM is not available.');
    }
  },

  // `getAnalyticsTool()`
  // ------------------------------------------------
  //
  // If integration is defined, this method returns the tool instance of
  // the linked Analytics account
  getAnalyticsTool: function() {
    if (this.settings.integratesWith) {
      return SL.tools[this.settings.integratesWith];
    }
  },

  flushQueueWhenReady: function() {
    if (!this.enableTracking || !this.tabEverVisible) return;
    SL.poll(SL.bind(function() {
      if (this.isReadyToTrack()) {
        this.flushQueue();
        return true;
      }
    }, this), 100, 20);
  },

  isReadyToTrack: function() {
    return this.tabEverVisible && this.dataProvider.isReady();
  },

  // `setVars(vars)`
  // ------------------------------------------------
  //
  // The method is used to set variables on the tool
  $setVars: function(elm, evt, vars) {
    for (var v in vars) {
      var val = vars[v];
      if (typeof val === 'function')
        val = val();
      this.settings[v] = val;
    }
    this.notify('Set variables done', 2);
    this.prepareContextData();
  },

  // `setEnableTracking()`
  // ------------------------------------------------
  //
  // The method triggers the view tracking call.
  $setEnableTracking: function(elm, evt, bool) {
    this.notify('Will' + (!bool ? ' not' : '') + ' track time on page', 1);
    if (this.enableTracking != bool) {
      this.addRemovePageLeaveEvent(bool);
      this.addRemoveHumanDetectionChangeEvent(bool);
      this.enableTracking = bool;
    }
  },

  // `sendFirstBeacon()`
  // ------------------------------------------------
  //
  // The method is called as soon as everything is in place.
  $sendFirstBeacon: function(elm, evt, settings) {
    this.sendViewBeacon();
  },

  // `setEnableNonHumanDetection()`
  // ------------------------------------------------
  //
  // The method enables/disables the human detection mechanism.
  setEnableNonHumanDetection: function(bool) {
    if (bool) {
      SL.nonhumandetection.register(this);
    } else {
      SL.nonhumandetection.unregister(this);
    }
  },

  // `setNonHumanDetectionDelay()`
  // ------------------------------------------------
  //
  // The method set the timeout for entering in non human state.
  setNonHumanDetectionDelay: function(delay) {
    SL.nonhumandetection.register(this, delay);
  },

  addRemovePageLeaveEvent: function(add) {
    this.notify((add ? 'Attach onto' : 'Detach from') + ' page leave event', 1);
    var method = (add == false ? 'unbindEvent' : 'bindEvent');
    SL[method]('leave', this.onPageLeave);
  },

  addRemoveHumanDetectionChangeEvent: function(add) {
    this.notify((add ? 'Attach onto' : 'Detach from') + ' human detection change event', 1);
    var method = (add == false ? 'unbindEvent' : 'bindEvent');
    SL[method]('humandetection.change', this.onHumanDetectionChange);
  },

  // `sendViewBeacon()`
  // ------------------------------------------------
  //
  // The method triggers the view tracking call.
  sendViewBeacon: function() {
    this.notify('Tracked page view.', 1);
    this.sendBeaconWith();
  },

  // `sendDurationBeacon()`
  // ------------------------------------------------
  //
  // The method triggers the duration tracking call. This adds the time
  // spent on the page to the call and is triggered when the user leaves
  // the current web page.
  sendDurationBeacon: function() {
    if (
      !SL.timetracking ||
      typeof SL.timetracking.timeOnPage != 'function' ||
      SL.timetracking.timeOnPage() == null
    ) {
      this.notify('Could not track close due missing time on page', 5);
      return;
    }
    this.notify('Tracked close', 1);
    this.sendBeaconWith({
      timeOnPage: Math.round(SL.timetracking.timeOnPage() / 1000),
      duration: 'D',
      timer: 'timer'
    });
    // a bit of delay to let the network thread finish sending data
    var i,s='';for(i=0;i<this.magicConst;i++){s+='0'};
  },

  // `sendBeaconWith(obj)`
  // ------------------------------------------------
  //
  // The method builds the tracking call based on provided settings and
  // parameters.
  sendBeaconWith: function(params) {
    if (this.enableTracking) {
      this[this.beaconMethod].call(this, this.prepareUrl(params));
    }
  },
  plainBeacon: function(url) {
    var img = new Image();
    img.src = url;
    img.width = 1;
    img.height = 1;
    img.alt = '';
  },
  navigatorSendBeacon: function(url) {
    navigator.sendBeacon(url);
  },
  prepareUrl: function(params) {
    var obj = this.settings;
    SL.extend(obj, this.dataProvider.provide());
    SL.extend(obj, params);
    return this.preparePrefix(this.settings.collectionServer) +
      this.adapt.convertToURI(
        this.adapt.toNielsen(
          this.substituteVariables(obj)));
  },
  preparePrefix: function(server) {
    return '//' + encodeURIComponent(server) + '.imrworldwide.com/cgi-bin/gn?';
  },
  substituteVariables: function(hash){
    var obj = {};
    for (var v in hash) {
      if (hash.hasOwnProperty(v)) {
        obj[v] = SL.replace(hash[v]);
      }
    }
    return obj;
  },
  prepareContextData: function() {
    if (!this.getAnalyticsTool()) {
      this.notify('Adobe Analytics missing.');
      return;
    }
    var obj = this.settings;
    obj.sdkVersion =_satellite.publishDate;
    this.getAnalyticsTool().$setVars(null, null, {
      contextData: this.adapt.toAnalytics(
        this.substituteVariables(obj))
    });
  },
  isHuman: function() {
    return this.human;
  },
  onTabFocus: function() {},
  onPageLeave: function() {},
  onHumanDetectionChange: function() {},
  notify: function(msg, lvl) {
    SL.notify(this.logPrefix + msg, lvl);
  },
  beaconMethod: 'plainBeacon',
  adapt: null,
  enableTracking: false,
  logPrefix: "Nielsen: ",
  tabEverVisible: false,
  human: true,
  magicConst: 0x1e8480
});

// `NielsenTool.DataProvider`
// ==========================
//
// The following components handle the task of providing extra information
// for the Nielsen beacon, with support for asynchronous data
//
NielsenTool.DataProvider = {};
NielsenTool.DataProvider.Generic = function(key, valueFn) {
  this.key = key;
  this.valueFn = valueFn;
};

SL.extend(NielsenTool.DataProvider.Generic.prototype, {
  isReady: function() {
    return true;
  },

  getValue: function() {
    return this.valueFn();
  },

  provide: function() {
    if (!this.isReady()) {
      NielsenTool.prototype.notify('Not yet ready to provide value for: ' + this.key, 5)
    }
    var data = {};
    data[this.key] = this.getValue();
    return data;
  }
});

// `NielsenTool.DataProvider.VisitorID`
// ====================================
//
// Gets and optionally waits for Marketing Cloud ID to be loaded.
// If no visitor instance is provided, then it falls-back to generated UUID.
//
NielsenTool.DataProvider.VisitorID = function(visitorInstance, key, fallbackProvider) {
  this.key = key || 'uuid';
  this.visitorInstance = visitorInstance;
  if (this.visitorInstance) {
    this.visitorId = visitorInstance.getMarketingCloudVisitorID([this, this._visitorIdCallback]);
  }
  this.fallbackProvider = fallbackProvider || new NielsenTool.UUID();
};

SL.inherit(NielsenTool.DataProvider.VisitorID, NielsenTool.DataProvider.Generic);
SL.extend(NielsenTool.DataProvider.VisitorID.prototype, {
  isReady: function() {
    if (this.visitorInstance === null) {
      return true;
    }
    return !!this.visitorId;
  },

  getValue: function() {
    return this.visitorId || this.fallbackProvider.get();
  },

  _visitorIdCallback: function(id) {
    this.visitorId = id;
  }
});

// `NielsenTool.DataProvider.Aggregate`
// ====================================
//
// Aggregates data from multiple providers, being aware of their ready-state.
//
NielsenTool.DataProvider.Aggregate = function() {
  this.providers = [];
  for (var i=0; i<arguments.length; i++) {
    this.register(arguments[i]);
  }
};

SL.extend(NielsenTool.DataProvider.Aggregate.prototype, {
  register: function(provider) {
    this.providers.push(provider);
  },

  isReady: function() {
    return SL.every(this.providers, function(provider) {
      return provider.isReady();
    });
  },

  provide: function() {
    var data = {};
    SL.each(this.providers, function(provider) {
      SL.extend(data, provider.provide());
    });
    return data;
  }
});

// `UUID`
// ===============
//
// The follwing generates an [RFC 4122 version 4](https://www.ietf.org/rfc/rfc4122.txt)
// uinique ID and stores it in a cookie.

NielsenTool.UUID = function() {};

SL.extend(NielsenTool.UUID.prototype, {
  // `generate()`
  // ------------------------------------------------
  //
  // Method that generates an [RFC 4122 version 4](https://www.ietf.org/rfc/rfc4122.txt)
  // compliant unique ID.
  //
  // This is needed in for Nielsen tracking w/o Analytics integration.
  generate: function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  },
  get: function() {
    var cookieUUID = SL.readCookie(this.key('uuid'));
    if (cookieUUID) return cookieUUID;
    cookieUUID = this.generate();
    SL.setCookie(this.key('uuid'), cookieUUID);
    return cookieUUID;
  },
  key: function(name) {
    return '_dtm_nielsen_' + name;
  }
});

// `Data Adapters`
// ===============
//
// The follwing adapters are used to adapt the settings to the proper format
// for both Nielsen tracking call and AA tracking calls

NielsenTool.DataAdapters = function() {};

SL.extend(NielsenTool.DataAdapters.prototype, {
  toNielsen: function(settings) {
    var cdate = new Date().getTime(),
        nielsenPrefixes = {
          c6: 'vc,',
          c13: 'asid,',
          c15: 'apn,',
          c27: 'cln,',
          c32: 'segA,',
          c33: 'segB,',
          c34: 'segC,',
          c35: 'adrsid,',
          c29: 'plid,',
          c30: 'bldv,',
          c40: 'adbid,'
        },
        nielsenObj = {
          ci: settings.clientId,
          c6: settings.vcid,
          c13: settings.appId,
          c15: settings.appName,
          prv: 1,
          forward: 0,
          ad: 0,
          cr: settings.duration || 'V', // [V|D], default V
          rt: 'text',
          st: 'dcr',
          prd: 'dcr',
          r: cdate,
          at: settings.timer || 'view', // [view|timer], default view
          c16: settings.sdkVersion,
          c27: settings.timeOnPage || 0,
          c40: settings.uuid,
          c35: settings.rsid,
          ti: cdate,
          sup: 0,
          c32: settings.segmentA,
          c33: settings.segmentB,
          c34: settings.segmentC,
          asn: settings.assetName,
          c29: settings.playerID,
          c30: settings.buildVersion
        };
    for (key in nielsenObj) {
      if (nielsenObj[key] !== undefined && nielsenObj[key] != null) {
        if (nielsenObj[key] !== undefined && nielsenObj != null && nielsenObj != '') {
          var val = encodeURIComponent(nielsenObj[key]);
          if (nielsenPrefixes.hasOwnProperty(key) && val) {
            val = nielsenPrefixes[key] + val;
          }
          nielsenObj[key] = val;
        }
      }
    }
    return this.filterObject(nielsenObj);
  },
  toAnalytics: function(settings) {
    return this.filterObject({
      'a.nielsen.clientid': settings.clientId,
      'a.nielsen.vcid': settings.vcid,
      'a.nielsen.appid': settings.appId,
      'a.nielsen.appname': settings.appName,
      'a.nielsen.accmethod': "0",
      'a.nielsen.ctype': "text",
      'a.nielsen.sega': settings.segmentA,
      'a.nielsen.segb': settings.segmentB,
      'a.nielsen.segc': settings.segmentC,
      'a.nielsen.asset': settings.assetName
    });
  },
  convertToURI: function(obj) {
    if (SL.isObject(obj) === false) return '';
    var uri = []
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) uri.push(key + '=' + obj[key]);
    }
    return uri.join('&')
  },
  filterObject: function(obj) {
    for (var k in obj) {
      if (obj.hasOwnProperty(k) &&
        (obj[k] == null || obj[k] === undefined)) {
        delete obj[k];
      }
    }
    return obj;
  }
});

SL.availableTools.nielsen = NielsenTool;

// The Adobe Target Tool
// ==================
//
// This tool interacts with [Adobe Target library](https://git.corp.adobe.com/mc-visitor/VisitorAPI).
//
// The tool accepts the following settings:
//
// - `engine` - The engine identifier (tnt)
// - `mboxURL` - The URL where the mbox can be found
// - `loadSync` - Specifies how the mbox should be loaded. A true value means
//      that it should be loaded in a synchronous mode.
// - `pageParams` - Object containing key/value pairs used in the mbox retrieval
//      call. The pairs are merged onto the `targetPageParams` property of
//      Target Javascript library. For more information click
//      [here](https://marketing.adobe.com/resources/help/en_US/target/target/c_pass_parameters_to_global_mbox.html).

function Tnt(settings){
  SL.BaseTool.call(this, settings)

  this.styleElements = {}
  this.targetPageParamsStore = {}
}

SL.inherit(Tnt, SL.BaseTool)

SL.extend(Tnt.prototype, {
  // Public
  // ------------------------------------------------
  name: 'tnt',

  // `endPLPhase()`
  // ------------------------------------------------
  //
  // Method that starts the tool initialization when the page load phase is
  // matched and only if the tool initialization has not been previously
  // cancelled.
  //
  // When the tool is initialized the global `targetPageParams` are updated with
  // the parameters provided in the settings.
  //
  // It is important to know that the `targetPageParams` property is not
  // overwritten instead a merging process is taking place. If a key is already
  // present then its value is updated.
  //
  // The last step is the loading of the mbox where the `mboxURL` is used.

  endPLPhase: function(pageLoadEvent) {
    if (pageLoadEvent === 'aftertoolinit') {
      this.initialize();
    }
  },

  // Private
  // ------------------------------------------------
  initialize: function() {
    SL.notify('Test & Target: Initializing', 1)
    this.initializeTargetPageParams()
    this.load()
  },

  initializeTargetPageParams: function() {
    if (window.targetPageParams) {
      this.updateTargetPageParams(
        this.parseTargetPageParamsResult(
          window.targetPageParams()
        )
      )
    }

    this.updateTargetPageParams(this.settings.pageParams)
    this.setTargetPageParamsFunction()
  },

  load: function(){
    var url = this.getMboxURL(this.settings.mboxURL)
    if (this.settings.initTool !== false){
      if (this.settings.loadSync) {
        SL.loadScriptSync(url)
        this.onScriptLoaded()
      } else {
        SL.loadScript(url, SL.bind(this.onScriptLoaded, this))
        this.initializing = true
      }
    } else {
      this.initialized = true
    }
  },

  getMboxURL: function(urlData) {
    var url = urlData
    if (SL.isObject(urlData)) {
      if (window.location.protocol === 'https:')
        url = urlData.https
      else
        url = urlData.http
    }
    if (!url.match(/^https?:/))
      return SL.basePath() + url
    else
      return url
  },

  onScriptLoaded: function(){
    SL.notify('Test & Target: loaded.', 1)

    this.flushQueue()

    this.initialized = true
    this.initializing = false
  },

  $addMbox: function(elm, evt, settings){
    var mboxGoesAround = settings.mboxGoesAround
    var styleText = mboxGoesAround + '{visibility: hidden;}'
    var styleElm = this.appendStyle(styleText)
    if (!(mboxGoesAround in this.styleElements)){
      this.styleElements[mboxGoesAround] = styleElm
    }

    if (this.initialized){
      this.$addMBoxStep2(null, null, settings)
    }else if (this.initializing){
      this.queueCommand({
        command: 'addMBoxStep2'
        , "arguments": [settings]
      }, elm, evt)
    }
  },
  $addMBoxStep2: function(elm, evt, settings){
    var mboxID = this.generateID()
    var self = this
    SL.addEventHandler(window, 'load', SL.bind(function(){
      SL.cssQuery(settings.mboxGoesAround, function(elms){
        var elem = elms[0]
        if (!elem) return
        var newDiv = document.createElement("div")
        newDiv.id = mboxID
        elem.parentNode.replaceChild(newDiv, elem)
        newDiv.appendChild(elem)
        window.mboxDefine(mboxID, settings.mboxName)
        var args = [settings.mboxName]
        if (settings.arguments){
          args = args.concat(settings.arguments)
        }
        window.mboxUpdate.apply(null, args)
        self.reappearWhenCallComesBack(elem, mboxID, settings.timeout, settings)
      });
    }, this))
    this.lastMboxID = mboxID // leave this here for easier testing
  },

  $addTargetPageParams: function(elm, evt, pageParams) {
    this.updateTargetPageParams(pageParams)
  },

  generateID: function(){
    var id = '_sdsat_mbox_' + String(Math.random()).substring(2) + '_'
    return id
  },
  appendStyle: function(css){
    var head = document.getElementsByTagName('head')[0], 
        style = document.createElement('style');
        
    style.type = 'text/css';
    if(style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    
    head.appendChild(style);
    return style;
  },
  reappearWhenCallComesBack: function(elmGoesAround, mboxID, timeout, settings){
    var self = this

    function reappear(){
      var styleElm = self.styleElements[settings.mboxGoesAround]
      if (styleElm){
        styleElm.parentNode.removeChild(styleElm)
        ;delete self.styleElements[settings.mboxGoesAround]
      }
    }

    SL.cssQuery('script[src*="omtrdc.net"]', function(results){
      var script = results[0]
      if (script){
        SL.scriptOnLoad(script.src, script, function(){
          SL.notify('Test & Target: request complete', 1)
          reappear()
          clearTimeout(timeoutID)
        })
        var timeoutID = setTimeout(function(){
          SL.notify('Test & Target: bailing after ' + timeout + 'ms', 1)
          reappear()
        }, timeout)
      }else{
        SL.notify('Test & Target: failed to find T&T ajax call, bailing', 1)
        reappear()
      }
    })
  },

  updateTargetPageParams: function(obj) {
    var o = {}
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        o[SL.replace(key)] = SL.replace(obj[key])
      }
    }
    SL.extend(
      this.targetPageParamsStore,
      o
    )
  },

  getTargetPageParams: function() {
    return this.targetPageParamsStore
  },

  setTargetPageParamsFunction: function() {
    window.targetPageParams = SL.bind(this.getTargetPageParams, this)
  },

  parseTargetPageParamsResult: function(data) {
    var result = data

    if(SL.isArray(data)) {
      data = data.join('&')
    }

    if (SL.isString(data)) {
      result = SL.parseQueryParams(data)
    }

    return result
  }
})
SL.availableTools.tnt = Tnt

// The Default Tool
// ================
//
// The default tool comes with several handy utilities.

function DefaultTool(){
  SL.BaseTool.call(this)

  this.asyncScriptCallbackQueue = []
  this.argsForBlockingScripts = []
}
SL.inherit(DefaultTool, SL.BaseTool)
SL.extend(DefaultTool.prototype, {
  name: 'Default',

  // `loadIframe(src, variables)`
  // ----------------------------
  //
  // Dynamically create an iframe to load a URL.
  //
  // - src - the URL to load
  // - variables - an object literal of which the key/value pairs will be used
  //      to create the query string to use in the src URL
  $loadIframe: function(elm, evt, options){
    var pages = options.pages
      , loadOn = options.loadOn
    var doit = SL.bind(function(){
      SL.each(pages, function(page){
        this.loadIframe(elm, evt, page)
      }, this)
    }, this)
    if (!loadOn) doit()
    if (loadOn === 'domready') SL.domReady(doit)
    if (loadOn === 'load') SL.addEventHandler(window, 'load', doit)
  },

  loadIframe: function(elm, evt, page){
    var iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    var host = SL.data.host
      , data = page.data
      , src = this.scriptURL(page.src)
      , search = SL.searchVariables(data, elm, evt)
    if (host)
      src = SL.basePath() + src
    src += search
    iframe.src = src
    var body = document.getElementsByTagName('body')[0]
    if (body)
      body.appendChild(iframe)
    else
      SL.domReady(function(){
        document.getElementsByTagName('body')[0].appendChild(iframe)
      })
  },

  scriptURL: function(url){
    var scriptDir = SL.settings.scriptDir || ''
    return scriptDir + url
  },

  // `loadScript(options)
  // ------------------------------
  //
  // Load any number of Javascript files using dynamically generated script tags.
  // If you provide multiple file URLs, they will be loaded sequentially.
  $loadScript: function(elm, evt, options){
    var scripts = options.scripts
      , sequential = options.sequential
      , loadOn = options.loadOn
    var doit = SL.bind(function(){
      if (sequential){
        this.loadScripts(elm, evt, scripts)
      }else{
        SL.each(scripts, function(script){
          this.loadScripts(elm, evt, [script])
        }, this)
      }
    }, this)

    if (!loadOn) doit()
    else if (loadOn === 'domready') SL.domReady(doit)
    else if (loadOn === 'load') SL.addEventHandler(window, 'load', doit)
  },

  loadScripts: function(elm, evt, scripts) {
    try{
    var scripts = scripts.slice(0)
      , q = this.asyncScriptCallbackQueue
      , lastScript
      , target = evt.target || evt.srcElement
      , self = this
    }catch(e){
      console.error('scripts is', SL.stringify(scripts))
    }
    function loadNext(){
      if (q.length > 0 && lastScript){
        var callback = q.shift()
        callback.call(elm, evt, target)
      }
      var script = scripts.shift()
      if (script){
        var host = SL.data.host
          , src = self.scriptURL(script.src)
        if (host)
          src = SL.basePath() + src
        lastScript = script
        SL.loadScript(src, loadNext)
      }
    }
    loadNext()
  },

  $loadBlockingScript: function(elm, evt, options){
    var scripts = options.scripts
      , loadOn = options.loadOn
    var doit = SL.bind(function(){
      SL.each(scripts, function(script){
        this.loadBlockingScript(elm, evt, script)
      }, this)
    }, this)
    //if (!loadOn || loadOn === evt.type) doit()
    doit()
  },

  loadBlockingScript: function(elm, evt, script){
    /*jshint evil:true */
    var src = this.scriptURL(script.src)
      , host = SL.data.host
      , target = evt.target || evt.srcElement
    if (host)
      src = SL.basePath() + src
    this.argsForBlockingScripts.push([elm, evt, target])
    SL.loadScriptSync(src)
  },

  pushAsyncScript: function(callback){
    this.asyncScriptCallbackQueue.push(callback)
  },

  pushBlockingScript: function(callback){
    var args = this.argsForBlockingScripts.shift()
    var element = args[0]
    callback.apply(element, args.slice(1))
  },

  // `writeHTML(html)`
  // -----------------
  //
  // Write an HTML fragment onto the page using `document.write()`.
  //
  // - `html` - the HTML fragment
  $writeHTML: SL.escapeHtmlParams(function(elm, evt){
    /*jshint evil:true */
    if (SL.domReadyFired || !document.write){
      SL.notify('Command writeHTML failed. You should try appending HTML using the async option.', 1)
      return
    }
    if (evt.type !== 'pagebottom' && evt.type !== 'pagetop'){
      SL.notify('You can only use writeHTML on the `pagetop` and `pagebottom` events.', 1)
      return
    }
    for (var i = 2, len = arguments.length; i < len; i++){
      var html = arguments[i].html
      html = SL.replace(html, elm, evt)
      document.write(html)
    }
  }),

  linkNeedsDelayActivate: function(a, win){
    win = win || window
    var tagName = a.tagName
      , target = a.getAttribute('target')
      , location = a.getAttribute('href')
    if (tagName && tagName.toLowerCase() !== 'a')
      return false
    if (!location)
      return false
    else if (!target)
      return true
    else if (target === '_blank')
      return false
    else if (target === '_top')
      return win.top === win
    else if (target === '_parent')
      return false
    else if (target === '_self')
      return true
    else if (win.name)
      return target === win.name
    else
      return true
  },

  // `delayActivateLink()`
  // ---------------------
  //
  // Delay the activation of an anchor link by first using `evt.preventDefault()` on
  // the click event, and then setting the window location to the destination after
  // a small delay. The default delay is 100 milliseconds, which can be configured in
  // `_satellite.settings.linkDelay`
  $delayActivateLink: function(elm, evt){
    if (!this.linkNeedsDelayActivate(elm)) return
    SL.preventDefault(evt)
    var linkDelay = SL.settings.linkDelay || 100
    setTimeout(function(){
      SL.setLocation(elm.href)
    }, linkDelay)
  },

  isQueueable: function(trig){
    return trig.command !== 'writeHTML'
  }
})
SL.availableTools['default'] = DefaultTool

// Adobe Analytics Tool
// ================
//
// This tool interacts with the [AppMeasurement library](http://microsite.omniture.com/t2/help/en_US/sc/appmeasurement/release/c_release_notes_mjs.html)
//
// Beside the settings that are processed by the BaseTool code, this tool uses
// the following extra settings:
//
// - `engine` - The engine identifier (sc)
// - `initVars` - It's an array containing key/value pair of AppMeasurement's
//      properties that are used in tracking and for settings. An example of
//      such pair would be: `{ eVar6: "6", server: "tracking.server"}`. For a
//      list of all supported properties please consult the [AppMeasurement's
//      documentation](http://microsite.omniture.com/t2/help/en_US/sc/implement/sc_variables.html).
// - `initTool` - Boolean flag that can suppress the tool initialization phase.
//      When set to `false` no JS library will be loaded and no initial command
//      will be executed. All the later commands triggered by this tool will
//      piggy back on any availble `ga` function from the page.
// - `sCodeURL` - Custom URL of the AppMeasurement Javascript library URL
//      location.
// - `loadOn` - The PL phase when this tool will be initialized (top | bottom)
// - `account` - String containing the report suite ID to track to.
// - `skipSetAccount` - Boolean value that when true disables setting
//      of the `account` with the value provided in settings. Default value
//      is no being set.
// - `euCookie' - Please see the description on SL (core.js) code
// - `renameS` - String specifying the name of the global AppMeasurement
//      instance. If no provided `s` is implied.
// - `executeCustomPageCodeFirst` - Boolean flag that lets the custom
//      initialization code be executed before or after the `initVars` method
//      call. Default value is not set which means false.
// - `customInit` - JS code that will be executed immediately after the tool is
//      initialized. The boolean result from `customInit` will affect the
//      initial page view call. A false value results in disabling the initial
//      page view tracking call.
//
// The SiteCatalystTool allows to set variables, add events, track link, etc.
// Example:
//
//      trigger: [
//          {
//              tool: "sc",
//              command: "trackLink"
//          }
//      ]
//
function SiteCatalystTool(settings){
  SL.BaseTool.call(this, settings)

  this.varBindings = {}
  this.events = []
  this.products = []
  this.customSetupFuns = []
}
SL.inherit(SiteCatalystTool, SL.BaseTool)
SL.extend(SiteCatalystTool.prototype, {
  // Public
  // ------------------------------------------------
  name: 'SC',

  // `endPLPhase()`
  // ------------------------------------------------
  //
  // Method that starts the tool initialization when the page load phase is
  // matched and only if the tool initialization has not been previously
  // cancelled. Find out more info about the initializing sequence by clicking
  // [here](#-initialize-).
  //
  // After the tool is initialized a page view call is triggered if
  // `suppressInitialPageView` flag is not set to `true`.
  endPLPhase: function(pageLoadEvent){
    var loadOn = this.settings.loadOn
    if (pageLoadEvent === loadOn){
      this.initialize(pageLoadEvent)
    }
  },

  // Private
  // ------------------------------------------------

  // `initialize()`
  // ------------------------------------------------
  //
  // The method first check to see if the default initialization is specifically
  // canceled.
  //
  // Then it sets an event listener on `pageLoadeEvent` to update the tracking
  // variables with the ones provided in `initVars` setting object.
  //
  // In case that the user chosen to provide the Javascript code for
  // AppMeasurement by himself instead of using the automatic management
  // then we wait for the library to load.
  //
  // Otherwise we load the AppMeasurement from the storage and then set the
  // setup variables on the tracker object.
  initialize: function(pageLoadEvent){
    if (this._cancelToolInit) return
    this.settings.initVars = this.substituteVariables(
      this.settings.initVars, { type: pageLoadEvent }
    )

    if (this.settings.initTool !== false){
      var url = this.settings.sCodeURL || SL.basePath() + 's_code.js'
      if (typeof url === 'object'){
        if (window.location.protocol === 'https:')
          url = url.https
        else
          url = url.http
      }
      if (!url.match(/^https?:/))
        url = SL.basePath() + url
      if (this.settings.initVars){
        this.$setVars(null, null, this.settings.initVars)
      }
      SL.loadScript(url, SL.bind(this.onSCodeLoaded, this))
      this.initializing = true
    }else{
      // Set to initializing because we are
      // waiting on the AppMeasurement/s_code library to be loaded by
      // the site and we'll detect the completion of the load
      // in a background task.
      this.initializing = true
      this.pollForSC()
    }
  },

  // `getS(s, options)`
  // ------------------------------------------------
  //
  // The method initializes the `s` object.
  //
  // A notificaiton is given and `null` is returned in case of not finding
  // the account/RSID.
  //
  // If Marketing Cloud Visitor ID Service is used that instance is linked
  // with the instatiated `s` object.
  getS: function(s, options){
    var hostname = options && options.hostname || window.location.hostname
    var varBindings = this.concatWithToolVarBindings(
      options && options.setVars || this.varBindings
    )
    var events = options && options.addEvent || this.events
    var acct = this.getAccount(hostname)
    var s_gi = window.s_gi
    if (!s_gi) return null
    if (!this.isValidSCInstance(s)) s = null
    if (!acct && !s) {
      SL.notify('Adobe Analytics: tracker not initialized because account was not found', 1)
      return null
    }
    var s = s || s_gi(acct)

    var DTMversion = 'D' + SL.appVersion;
    if(typeof s.tagContainerMarker !== 'undefined') {
      s.tagContainerMarker = DTMversion
    } else {
      if (typeof s.version === 'string' &&
        s.version.substring(s.version.length - 5) !==
          ('-' + DTMversion)){
        s.version += '-' + DTMversion
      }
    }

    if (s.sa && this.settings.skipSetAccount !== true && this.settings.initTool !== false) s.sa(this.settings.account)
    this.applyVarBindingsOnTracker(s, varBindings)
    if (events.length > 0)
      s.events = events.join(',')

    var visitorIdInstance = SL.getVisitorId()
    if (visitorIdInstance) {
      s.visitor = SL.getVisitorId()
    }

    return s
  },

  // `onSCodeLoaded()`
  // ------------------------------------------------
  //
  // The method triggers load event on Analytics tool so all subsequent and
  // listening methods would be properly triggered.
  //
  // Before cleaning up the queue the tracking beacon call is made.
  onSCodeLoaded: function(loaded_manually){
    this.initialized = true
    this.initializing = false

    var msg = [
      'Adobe Analytics: loaded',
      loaded_manually ? ' (manual)' : '',
      '.'
    ]
    SL.notify(msg.join(''), 1)

    SL.fireEvent(this.id + '.load', this.getS())

    if (!loaded_manually) {
      this.flushQueueExceptTrackLink()
      this.sendBeacon()
    }

    this.flushQueue()
  },

  // `getAccount(hostname)`
  // ------------------------------------------------
  //
  // The returns the `s_account` for a specified `hostname`
  //
  // TODO: need to be refactored because `accountByHost` is no longer used.
  getAccount: function(hostname){
    if (window.s_account){
      return window.s_account
    }
    if (hostname && this.settings.accountByHost){
      return this.settings.accountByHost[hostname] || this.settings.account
    }else{
      return this.settings.account
    }
  },

  // `getTrackingServer()`
  // ------------------------------------------------
  //
  // The method tries to retrieve the tracking server from the `s` object
  // otherwise falls back on generating one based on the `account`.
  //
  // If neither `account` or `trackingServer` are availalble, `null` is
  // returned.
  //
  // TODO: need to be refactored to remove the tracking server generate method
  // as Analytics now offers a central point to shoot to.
  getTrackingServer: function(){
    var tool = this
    var s = tool.getS()
    if (s) {
      if (s.ssl && s.trackingServerSecure) {
        return s.trackingServerSecure
      }
      else if (s.trackingServer) {
        return s.trackingServer
      }
    }
    var account = tool.getAccount(window.location.hostname)
    if (!account) return null
    // Based on code in app measurement.
    var w
    var c = ''
    var d = s && s.dc
    var e
    var f
    w = account
    e = w.indexOf(",")
    e >= 0 && (w = w.gb(0, e))
    w = w.replace(/[^A-Za-z0-9]/g, "")
    c || (c = "2o7.net")
    d = d ? ("" + d).toLowerCase() : "d1"
    c == "2o7.net" && (d == "d1" ? d = "112" : d == "d2" && (d = "122"), f = "")
    e = w + "." + d + "." + f + c
    return e
  },

  // `sendBeacon()`
  // ------------------------------------------------
  //
  // The method triggers the tracking call.
  //
  // If custom initialization is used the beacon is supressed. Also, if custom
  // code is provided and specifically stated that it should be executed first
  // (`executeCustomPageCodeFirst`) the tracker get updated with the result of
  // the code.
  sendBeacon: function(){
    var s = this.getS(window[this.settings.renameS || 's'])
    if (!s){
      SL.notify('Adobe Analytics: page code not loaded', 1)
      return
    }
    if (this.settings.customInit){
      if (this.settings.customInit(s) === false){
        SL.notify("Adobe Analytics: custom init suppressed beacon", 1)
        return
      }
    }

    if (this.settings.executeCustomPageCodeFirst) {
      this.applyVarBindingsOnTracker(s, this.varBindings)
    }
    this.executeCustomSetupFuns(s)
    s.t()
    this.clearVarBindings()
    this.clearCustomSetup()
    SL.notify("Adobe Analytics: tracked page view", 1)
  },
  pollForSC: function(){
    SL.poll(SL.bind(function(){
      if (typeof window.s_gi === 'function'){
        this.onSCodeLoaded(true)
        return true
      }
    }, this))
  },
  flushQueueExceptTrackLink: function(){
    // Because we always s.tl() after the first s.t()
    // that way the variables set by s.tl() will not
    // contaminate the s.t() call.
    if (!this.pending) return
    var left = []
    for (var i = 0; i < this.pending.length; i++){
      var args = this.pending[i]
      var trig = args[0]
      if (trig.command === 'trackLink'){
        left.push(args)
      }else{
        this.triggerCommand.apply(this, args)
      }
    }
    this.pending = left
  },
  isQueueAvailable: function(){
    return !this.initialized
  },
  substituteVariables: function(obj, evt){
    var ret = {}
    for (var key in obj){
      if (obj.hasOwnProperty(key)) {
        var value = obj[key]
        ret[key] = SL.replace(value, location, evt)
      }
    }
    return ret
  },
  $setVars: function(elm, evt, vars){
    for (var v in vars){
      if (vars.hasOwnProperty(v)) {
        var val = vars[v]
        if (typeof val === 'function')
          val = val()
        this.varBindings[v] = val
      }
    }
    SL.notify('Adobe Analytics: set variables.', 2)
  },
  $customSetup: function(elm, evt, setup){
    this.customSetupFuns.push(function(s){
      setup.call(elm, evt, s)
    })
  },
  isValidSCInstance: function(s) {
    return !!s && typeof s.t === 'function' && typeof s.tl === 'function'
  },
  concatWithToolVarBindings: function(varBindings){
    var settingsInitVars = this.settings.initVars || {}

    SL.map(['trackingServer', 'trackingServerSecure'], function (item) {
      if (settingsInitVars[item] && !varBindings[item]) {
        varBindings[item] = settingsInitVars[item]
      }
    });

    return varBindings
  },
  applyVarBindingsOnTracker: function (s, varBindings) {
    for (var v in varBindings){
      if (varBindings.hasOwnProperty(v)) {
        s[v] = varBindings[v]
      }
    }
  },
  clearVarBindings: function(){
    this.varBindings = {}
  },
  clearCustomSetup: function(){
    this.customSetupFuns = []
  },
  executeCustomSetupFuns: function(s){
    SL.each(this.customSetupFuns, function(fun){
      fun.call(window, s)
    })
  },
  $trackLink: function(elm, evt, params){
    params = params || {}
    var type = params.type
    var linkName = params.linkName
    if (!linkName &&
      elm &&
      elm.nodeName &&
      elm.nodeName.toLowerCase() === 'a'){
      linkName = elm.innerHTML
    }
    if (!linkName){
      linkName = 'link clicked'
    }
    var vars = params && params.setVars
    var events = (params && params.addEvent) || []

    var s = this.getS(null, {
      setVars: vars,
      addEvent: events
    })

    if (!s){
      SL.notify('Adobe Analytics: page code not loaded', 1)
      return
    }

    var orgLinkTrackVars = s.linkTrackVars
    var orgLinkTrackEvents = s.linkTrackEvents
    var definedVarNames = this.definedVarNames(vars)

    if (params && params.customSetup){
      params.customSetup.call(elm, evt, s)
    }

    if (events.length > 0)
      definedVarNames.push('events')
    if (s.products)
      definedVarNames.push('products')

    // add back the vars from s
    definedVarNames = this.mergeTrackLinkVars(s.linkTrackVars, definedVarNames)

    // add back events from s
    events = this.mergeTrackLinkVars(s.linkTrackEvents, events)

    s.linkTrackVars = this.getCustomLinkVarsList(definedVarNames)

    var eventsKeys = SL.map(events, function(item) {
      return item.split(':')[0]
    });
    s.linkTrackEvents = this.getCustomLinkVarsList(eventsKeys)

    s.tl(true, type || 'o', linkName)
    SL.notify([
      'Adobe Analytics: tracked link ',
      'using: linkTrackVars=',
      SL.stringify(s.linkTrackVars),
      '; linkTrackEvents=',
      SL.stringify(s.linkTrackEvents)
    ].join(''), 1)

    s.linkTrackVars = orgLinkTrackVars
    s.linkTrackEvents = orgLinkTrackEvents
  },
  mergeTrackLinkVars: function(newVarsStr, varsArr){
    if (newVarsStr) {
      varsArr = newVarsStr.split(',').concat(varsArr)
    }

    return varsArr
  },
  getCustomLinkVarsList: function (keysArr) {
    var noneIndex = SL.indexOf(keysArr, 'None');
    if (noneIndex > -1 && keysArr.length > 1) {
      keysArr.splice(noneIndex, 1)
    }

    return keysArr.join(',');
  },
  definedVarNames: function(vars){
    vars = vars || this.varBindings
    var ret = []
    for (var varname in vars){
      if (vars.hasOwnProperty(varname) && /^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$/.test(varname))
        ret.push(varname)
    }
    return ret
  },
  $trackPageView: function(elm, evt, params){
    var vars = params && params.setVars
    var events = (params && params.addEvent) || []

    var s = this.getS(null, {
      setVars: vars,
      addEvent: events
    })

    if (!s){
      SL.notify('Adobe Analytics: page code not loaded', 1)
      return
    }
    s.linkTrackVars = ''
    s.linkTrackEvents = ''
    this.executeCustomSetupFuns(s)
    if (params && params.customSetup){
      params.customSetup.call(elm, evt, s)
    }
    s.t()
    this.clearVarBindings()
    this.clearCustomSetup()
    SL.notify("Adobe Analytics: tracked page view", 1)
  },
  $postTransaction: function(elm, evt, varname){
    var trans = SL.data.transaction = window[varname]
      , s = this.varBindings
      , mapping = this.settings.fieldVarMapping

    SL.each(trans.items, function(item){
      this.products.push(item)
    }, this)

    s.products = SL.map(this.products, function(item){
      var vars = []
      if (mapping && mapping.item){
        for (var field in mapping.item){
          if (mapping.item.hasOwnProperty(field)) {
            var varname = mapping.item[field]
            vars.push(varname + '=' + item[field])
            if (varname.substring(0, 5) === 'event')
              this.events.push(varname)
          }
        }
      }
      var arr = ['', item.product, item.quantity, item.unitPrice * item.quantity]
      if (vars.length > 0)
        arr.push(vars.join('|'))
      return arr.join(';')
    }, this).join(',')

    if (mapping && mapping.transaction){
      // Add top-level events/eVars to products string.
      var topLevelVars = []
      for (var field in mapping.transaction){
        if (mapping.transaction.hasOwnProperty(field)) { 
          var varname = mapping.transaction[field]
          topLevelVars.push(varname + '=' + trans[field])
          if (varname.substring(0, 5) === 'event')
            this.events.push(varname)
        }
      }
      if (s.products.length > 0)
        s.products += ','
      s.products += ';;;;' + topLevelVars.join('|')
    }


  },
  $addEvent: function(elm, evt){
    for (var i = 2, len = arguments.length; i < len; i++){
      this.events.push(arguments[i])
    }
  },
  $addProduct: function(elm, evt){
    for (var i = 2, len = arguments.length; i < len; i++){
      this.products.push(arguments[i])
    }
  }

})
SL.availableTools.sc = SiteCatalystTool

// Basic Tool
// ------------
//
// This is a generic tool that allows integrating with
// various simple tools.
//

function BasicTool(settings){
  SL.BaseTool.call(this, settings)

  this.name = settings.name || 'Basic'
}

SL.inherit(BasicTool, SL.BaseTool)

SL.extend(BasicTool.prototype, {
  initialize: function(){
    var settings = this.settings
    if (this.settings.initTool !== false){
      var url = settings.url
      if (typeof url === 'string'){
        url = SL.basePath() + url
      }else{
        url = SL.isHttps() ? url.https : url.http
      }
      SL.loadScript(url, SL.bind(this.onLoad, this))
      this.initializing = true
    }else{
      this.initialized = true
    }
  },
  isQueueAvailable: function(){
    return !this.initialized
  },
  onLoad: function(){
    this.initialized = true
    this.initializing = false
    if (this.settings.initialBeacon){
      this.settings.initialBeacon()
    }
    this.flushQueue()
  },
  endPLPhase: function(pageLoadEvent){
    var loadOn = this.settings.loadOn
    if (pageLoadEvent === loadOn){
      SL.notify(this.name + ': Initializing at ' + pageLoadEvent, 1)
      this.initialize()
    }
  },
  $fire: function(elm, evt, fun){
    if (this.initializing){
      this.queueCommand({
        command: 'fire',
        arguments: [fun]
      }, elm, evt)
      return
    }
    fun.call(this.settings, elm, evt)
  }
})

SL.availableTools.am = BasicTool
SL.availableTools.adlens = BasicTool
SL.availableTools.aem = BasicTool
SL.availableTools.__basic = BasicTool

// Google Analytics Tool
// ---------------------
//
// The GATool allows you to use any Google Analytics command.
// Example:
//
//      trigger: [
//          {
//              tool: "ga",
//              command: "trackEvent",
//              arguments: [
//                  "video",
//                  "video 10% complete"
//              ]
//          }
//      ]
//
// This trigger will call the `trackEvent` method, which is equivalent to
//
//     _gaq.push(['_trackEvent', 'video', 'video 10% complete'])
function GATool(settings){
  SL.BaseTool.call(this, settings)
}
SL.inherit(GATool, SL.BaseTool)
SL.extend(GATool.prototype, {
  name: 'GA',
  initialize: function(){
    var settings = this.settings
    var before = window._gaq
      , initCommands = settings.initCommands || []
      , customInit = settings.customInit

    if (!before){
      // And yes, I *do* mean to set a global variable
      // of `_gaq` here
      _gaq = []
    }

    if (!this.isSuppressed()){
      if (!before && !GATool.scriptLoaded){
        var https = SL.isHttps()
        var url =
          (https ? 'https://ssl' : 'http://www') +
          '.google-analytics.com/ga.js'
        if (settings.url){
          url = https ? settings.url.https : settings.url.http
        }
        SL.loadScript(url)
        GATool.scriptLoaded = true
        SL.notify('GA: page code loaded.', 1)
      }
      var domain = settings.domain
        , trackerName = settings.trackerName
        , allowLinker = GAUtils.allowLinker()
        , account = SL.replace(settings.account, location)
        , domainList = SL.settings.domainList || []
      _gaq.push([this.cmd('setAccount'), account])
      if (allowLinker)
        _gaq.push([this.cmd('setAllowLinker'), allowLinker])
      _gaq.push([this.cmd('setDomainName'), GAUtils.cookieDomain()])
      SL.each(initCommands, function(cmd){
        var arr = [this.cmd(cmd[0])].concat(SL.preprocessArguments(cmd.slice(1), location, null, this.forceLowerCase))
        _gaq.push(arr)
      }, this)
      if (customInit)
        this.suppressInitialPageView = false === customInit(_gaq, trackerName)
      if (settings.pageName)
        this.$overrideInitialPageView(null, null, settings.pageName)
    }else{
      SL.notify('GA: page code not loaded(suppressed).', 1)
    }

    this.initialized = true
    SL.fireEvent(this.id + '.configure', _gaq, trackerName)

  },
  isSuppressed: function(){
    return this._cancelToolInit || this.settings.initTool === false
  },
  tracker: function(){
    return this.settings.trackerName
  },
  cmd: function(cmd){
    var tracker = this.tracker()
    return tracker ? tracker + '._' + cmd : '_' + cmd
  },
  $overrideInitialPageView: function(elm, evt, url){
    this.urlOverride = url
  },
  trackInitialPageView: function(){
    if (this.isSuppressed()) return
    if (this.suppressInitialPageView) return
    if (this.urlOverride){
      var args = SL.preprocessArguments([this.urlOverride], location, null, this.forceLowerCase)
      this.$missing$('trackPageview', null, null, args)
    }else{
      this.$missing$('trackPageview')
    }
  },
  endPLPhase: function(pageLoadEvent){
    var loadOn = this.settings.loadOn
    if (pageLoadEvent === loadOn){
      SL.notify('GA: Initializing at ' + pageLoadEvent, 1)
      this.initialize()
      this.flushQueue()
      this.trackInitialPageView()
    }
  },
  call: function(cmd, elm, evt, args){
    if (this._cancelToolInit) return
    var settings = this.settings
      , tracker = this.tracker()
      , fullCmd = this.cmd(cmd)
      , args = args ? [fullCmd].concat(args) : [fullCmd]
    _gaq.push(args)
    if (tracker)
      SL.notify("GA: sent command " + cmd + " to tracker " + tracker +
        (args.length > 1 ?
          " with parameters [" + args.slice(1).join(', ') + "]" :
          '') + ".", 1)
    else
      SL.notify("GA: sent command " + cmd +
        (args.length > 1 ?
          " with parameters [" + args.slice(1).join(', ') + "]":
          '') + ".", 1)
  },
  $missing$: function(cmd, elm, evt, args){
    this.call(cmd, elm, evt, args)
  },
  // individual command methods
  $postTransaction: function(elm, evt, varname){
    var trans = SL.data.customVars.transaction = window[varname]
    this.call('addTrans', elm, evt, [
      trans.orderID,
      trans.affiliation,
      trans.total,
      trans.tax,
      trans.shipping,
      trans.city,
      trans.state,
      trans.country
    ])
    SL.each(trans.items, function(item){
      this.call('addItem', elm, evt, [
        item.orderID,
        item.sku,
        item.product,
        item.category,
        item.unitPrice,
        item.quantity
      ])
    }, this)
    this.call('trackTrans', elm, evt)
  },
  delayLink: function(elm, evt){
    var ga = this
    if (!GAUtils.allowLinker()) return
    if (!elm.hostname.match(this.settings.linkerDomains)) return
    if (SL.isSubdomainOf(elm.hostname, location.hostname)) return
    SL.preventDefault(evt)
    var linkDelay = SL.settings.linkDelay || 100
    setTimeout(function(){
      ga.call('link', elm, evt, [elm.href])
    }, linkDelay)
  },
  popupLink: function(elm, evt){
    if (!window._gat) return
    SL.preventDefault(evt)
    var account = this.settings.account
    var tracker = window._gat._createTracker(account)
    var url = tracker._getLinkerUrl(elm.href)
    window.open(url)
  },
  $link: function(elm, evt){
    if (elm.getAttribute('target') === '_blank'){
      this.popupLink(elm, evt)
    }else{
      this.delayLink(elm, evt)
    }
  },
  $trackEvent: function(elm, evt){
    var args = Array.prototype.slice.call(arguments, 2)
    if (args.length >= 4 && args[3] != null){
      // acertain that the 4th element is a number, falling back to 1
      var value = parseInt(args[3], 10)
      if (SL.isNaN(value)){
        value = 1
      }
      args[3] = value
    }
    this.call('trackEvent', elm, evt, args)
  }
})
SL.availableTools.ga = GATool

var GAUtils = {
  allowLinker: function() {
    return SL.hasMultipleDomains();
  },
  cookieDomain: function() {
    var domainList = SL.settings.domainList;
    var domainName = SL.find(domainList, function(domain) {
      var hostname = window.location.hostname;
      return SL.equalsIgnoreCase(
        hostname.slice(hostname.length - domain.length),
        domain);
    });
    var cookieDomain = domainName ? ('.' + domainName) : 'auto';

    return cookieDomain;
  }
};

// The Google Analytics Universal Tool
// ================
//
// This tool interacts with the [GAU library](https://developers.google.com/analytics/devguides/collection/analyticsjs/).
//
// From a high end perspective the following steps will happen. A `ga` dummy
// object will be initialized. Until the `analytics.js` file will be loaded in
// the browser, any triggered command will be queued in the `ga` object. Once
// the `analytics.js` will finish to load, all the queued commands will be
// executed.
//
// The tool is initialized during one of the following page load phases:
// top, bottom. Find out more info about the initializing sequence by clicking
// [here](#-endplphase-).
//
// Data elements are replaced when the tracker is created and on the commands
// from `initCommands` array. For the other situations, the data elements are
// replaced in the `triggerCommand` method from BaseTool.
//
// Beside the settings that are processed by the BaseTool code, this tool uses
// the following extra settings:
//
// - `engine` - The engine identifier (ga_universal)
// - `loadOn` - The PL phase when this tool will be initialized (top | bottom)
// - `url` - Custom URL of the `analytics.js` URL location. If none is provided
//      the Google default URL will be used.
// - `initTool` - Boolean flag that can suppress the tool initialization phase.
//      When set to `false` no JS library will be loaded and no initial command
//      will be executed. All the later commands triggered by this tool will
//      piggy back on any availble `ga` function from the page.
// - `trackerSettings` - Object containing properties that will be added on the
//      command that will create the GAU tracker. For a list of all supported
//      properties please click [here](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#create)
// - `initCommands` - It's an array containing commands. A command example:
//      `["set", "anonymizeIp", true]`. For a list of all supported commands
//      please click [here](https://developers.google.com/analytics/devguides/collection/analyticsjs/method-reference#tracker)
//      The commands defined here will be executed after the tracker is created.
// - `allowLinker` - Flag that will make the GAU library load the cross domain
//      linking plugin.
// - `customInit` - JS code that will be executed immediately after the tool is
//      initialized. The boolean result from `customInit` will affect the
//      initial page view call.

function GAUniversalTool(settings) {
  SL.BaseTool.call(this, settings)
}

SL.inherit(GAUniversalTool, SL.BaseTool);

SL.extend(GAUniversalTool.prototype, {
  // Public
  // ------------------------------------------------
  name: 'GAUniversal',

  // `endPLPhase()`
  // ------------------------------------------------
  //
  // Method that starts the tool initialization when the page load phase is
  // matched and only if the tool initialization has not been previously
  // cancelled. Find out more info about the initializing sequence by clicking
  // [here](#-initialize-).
  //
  // After the tool is initialized a page view call is triggered if
  // `suppressInitialPageView` flag is not set to `true`.
  endPLPhase: function(pageLoadEvent) {
    var settings = this.settings;
    var loadOn = settings.loadOn;

    if (pageLoadEvent === loadOn) {
      SL.notify('GAU: Initializing at ' + pageLoadEvent, 1);
      this.initialize();
      this.flushQueue();
      this.trackInitialPageView();
    }
  },

  // `getTrackerName()`
  // ------------------------------------------------
  //
  // Returns the name of the GA tracker initialized by this tool.
  getTrackerName: function () {
    return this.settings.trackerSettings.name || '';
  },

  // Private
  // ------------------------------------------------
  isPageCodeLoadSuppressed: function() {
    return this.settings.initTool === false || this._cancelToolInit === true;
  },

  // `initialize()`
  // ------------------------------------------------
  //
  // The method first creates the GA scaffolding objects (the `ga` object and
  // the `GoogleAnalyticsObject` object.
  //
  // Then it loads the `analytics.js` library and append the command that will
  // create the GAU tracker object to the `ga` object.
  //
  // Next, the commands from the `initCommands` array will be appended to
  // the `ga` object. Finally the JS code defined in the `customInit` setting
  // variable will be called.
  initialize: function() {
    if (this.isPageCodeLoadSuppressed()) {
      this.initialized = true;
      SL.notify('GAU: Page code not loaded (suppressed).', 1);
      return;
    }

    var gaName = 'ga';

    window[gaName] = window[gaName] || this.createGAObject();
    window.GoogleAnalyticsObject = gaName;

    SL.notify('GAU: Page code loaded.', 1);
    SL.loadScriptOnce(this.getToolUrl());

    var settings = this.settings;

    if (GAUtils.allowLinker() && settings.allowLinker !== false) {
      this.createAccountForLinker();
    } else {
      this.createAccount();
    }

    this.executeInitCommands();

    if (settings.customInit){
      var customInit = settings.customInit
      var result = customInit(window[gaName], this.getTrackerName())
      if (result === false){
        this.suppressInitialPageView = true;
      }
    }

    this.initialized = true;
  },

  createGAObject: function() {
    var ga = function() {
      ga.q.push(arguments);
    };

    ga.q = [];
    ga.l = 1 * new Date();
    return ga;
  },

  createAccount: function() {
    this.create();
  },

  createAccountForLinker: function() {
    var options = {};
    if (GAUtils.allowLinker())
      options.allowLinker = true;

    this.create(options);
    this.call('require', 'linker');
    this.call('linker:autoLink', this.autoLinkDomains(), false, true);
  },

  create: function(extra){
    var options = this.settings.trackerSettings;
    options =
      SL.preprocessArguments([options], location, null, this.forceLowerCase)[0];
    options.trackingId =
      SL.replace(this.settings.trackerSettings.trackingId, location);

    if (!options.cookieDomain) {
      options.cookieDomain = GAUtils.cookieDomain();
    }

    SL.extend(options, extra || {});
    this.call('create', options);
  },

  autoLinkDomains: function() {
    var ourDomain = location.hostname;
    return SL.filter(SL.settings.domainList, function(domain) {
      return domain !== ourDomain;
    });
  },

  executeInitCommands: function() {
    var settings = this.settings;

    if (settings.initCommands) {
      SL.each(settings.initCommands, function(command) {
        var args = command.splice(2, command.length - 2);
        command = command.concat(
          SL.preprocessArguments(args, location, null, this.forceLowerCase)
        );
        this.call.apply(this, command);
      }, this);
    }
  },

  trackInitialPageView: function(){
    if (this.suppressInitialPageView || this.isPageCodeLoadSuppressed()) {
      return;
    }

    this.call('send', 'pageview');
  },

  call: function() {
    if (typeof ga !== 'function') {
      SL.notify('GA Universal function not found!', 4);
      return;
    }

    if (this.isCallSuppressed()) {
      return;
    }

    arguments[0] = this.cmd(arguments[0]);
    this.log(SL.toArray(arguments));
    ga.apply(window, arguments);
  },

  isCallSuppressed: function() {
    return this._cancelToolInit === true;
  },

  $missing$: function(command, elm, evt, args) {
    args = args || [];

    args = [command].concat(args);
    this.call.apply(this, args);
  },

  getToolUrl: function() {
    var settings = this.settings;
    var isHttps = SL.isHttps();

    if (settings.url) {
      return isHttps ? settings.url.https : settings.url.http;
    }

    return (isHttps ? 'https://ssl' : 'http://www') + '.google-analytics.com/analytics.js';
  },

  cmd: function(command) {
    var trackerCommands = ['send', 'set', 'get'];
    var trackerName = this.getTrackerName();

    if (!trackerName || SL.indexOf(trackerCommands, command) === -1) {
      return command;
    }

    return trackerName + '.' + command;
  },

  log: function(args) {
    var cmd = args[0];
    var tracker = this.getTrackerName() || 'default';

    var msg = 'GA Universal: sent command ' + cmd + ' to tracker ' + tracker;
    if (args.length > 1) {
      var parameters = SL.stringify(args.slice(1));
      msg += ' with parameters ' + SL.stringify(args.slice(1));
    }
    msg += '.';
    SL.notify(msg, 1);
  }
});

SL.availableTools.ga_universal = GAUniversalTool;

// The Marketing Cloud Visitor ID Service Tool
// ================
//
// This tool interacts with the [Visitor ID library](https://git.corp.adobe.com/mc-visitor/VisitorAPI/tree/master/js/src).
// The tool initilizes the Visitor ID library as soon as the tool itself is
// created, by calling the `initialize` method. Find out more info about the
// initializing sequence by clicking [here](#-initialize-).
//
// The tool accepts the following settings:
//
// - `mcOrgId` - The Adobe Marketing Cloud Organization ID (Required)
// - `initVars` - Map containing properties that can be set on the Visitor ID
//      instance. The following keys can be set here:
//      * `trackingServer`,
//      * `trackingServerSecure`,
//      * `marketingCloudServer`
//      * `marketingCloudServerSecure`
// - `customerIDs` - Map containing Customer IDs values that will be set on the
//      instance
// - `autoRequest` - Flag that will read the Marketing Cloud Visitor ID by
//      calling `getMarketingCloudVisitorID` method
function VisitorIdTool(settings) {
  SL.BaseTool.call(this, settings);
  this.name = settings.name || 'VisitorID';

  this.initialize();
}

SL.extend(VisitorIdTool.prototype, {
  // Public
  // ------------------------------------------------
  //
  // `getInstance()`
  // ------------------------------------------------
  //
  // Returns the Visitor ID instance that was created when the tool was
  // initialized.
  getInstance: function() {
    return this.instance;
  },

  // Private
  // ------------------------------------------------
  //
  // `initialize()`
  // ------------------------------------------------
  //
  // The method creates a Visitor ID instance if all the data provided is valid.
  // The instance will contain all the keys defined in the `initVar` setting.
  // Any `dataElement` present as a value in the initVars map will be replaced
  // with the correct value.
  //
  // It applies then a the map of Customer IDs by calling the `setCustomerIDs`
  // method from the newly created instance. Any `dataElement` present as a
  // value in the Customer IDs map will be replaced with the correct value.
  //
  // After that, the `getMarketingCloudVisitorID` method from the newly created
  // instance is called, provided that the `autoRequest` settings is set to true.
  initialize: function() {
    var settings = this.settings, visitor;

    SL.notify('Visitor ID: Initializing tool', 1);

    visitor = this.createInstance(
      settings.mcOrgId,
      settings.initVars
    );
    if (visitor === null) {
      return;
    }

    if (settings.customerIDs) {
      this.applyCustomerIDs(visitor, settings.customerIDs);
    }

    if (settings.autoRequest) {
      visitor.getMarketingCloudVisitorID();
    }

    this.instance = visitor;
  },

  createInstance: function(mcOrgId, initVars) {
    if(!SL.isString(mcOrgId)) {
      SL.notify(
        'Visitor ID: Cannot create instance using mcOrgId: "' + mcOrgId + '"', 4);
      return null;
    }

    mcOrgId = SL.replace(mcOrgId);
    SL.notify(
      'Visitor ID: Create instance using mcOrgId: "' + mcOrgId + '"', 1);

    initVars = this.parseValues(initVars);
    var instance = Visitor.getInstance(mcOrgId, initVars);
    SL.notify('Visitor ID: Set variables: ' + SL.stringify(initVars), 1);

    return instance;
  },

  applyCustomerIDs: function(instance, ids) {
    var parsedIds = this.parseIds(ids);
    instance.setCustomerIDs(parsedIds);
    SL.notify('Visitor ID: Set Customer IDs: ' + SL.stringify(parsedIds), 1);
  },

  parseValues: function(hash) {
    if (SL.isObject(hash) === false) {
      return {};
    }

    var obj = {};

    for (var v in hash) {
      if (hash.hasOwnProperty(v)) {
        obj[v] = SL.replace(hash[v]);
      }
    }

    return obj;
  },

  parseIds: function(hash) {
    var parsedIds = {};
    if (SL.isObject(hash) === false) {
      return {};
    }

    for (var v in hash) {
      if (hash.hasOwnProperty(v)) {
        var id = SL.replace(hash[v]['id']);
        // All IDs should be data elements. If no replacement has taken place,
        // then we can conclude that the data element doesn't exists.
        // Also we should ignore existing data elements that are empty.
        if (id !== hash[v]['id'] && id) {
          parsedIds[v] = {};
          parsedIds[v]['id'] = id;
          parsedIds[v]['authState'] = Visitor.AuthState[hash[v]['authState']];
        }
      }
    }

    return parsedIds;
  }
});

SL.availableTools.visitor_id = VisitorIdTool;


_satellite.init({
  "tools": {
    "wolga": {
      "engine": "ga_universal",
      "pageName": "%URI%",
      "forceLowerCase": false,
      "euCookie": false,
      "loadOn": "pagebottom",
      "initCommands": [

      ],
      "trackerSettings": {
        "trackingId": "UA-108981208-1",
        "name": "wolga",
        "allowAnchor": false
      }
    },
    "8eab8ac898130a9219265484451a0430": {
      "engine": "sc",
      "loadOn": "pagebottom",
      "account": "wileyonlinelibrary-literatum",
      "euCookie": false,
      "sCodeURL": "6e626c9ec247e474f6b98eb15a79a185cf7e26a5/s-code-contents-7d04accfbc0deee918eb104cc0a954ffa836b5dd.js",
      "initVars": {
        "charSet": "UTF-8",
        "server": "%server%",
        "currencyCode": "USD",
        "trackingServer": "wileypublishing.sc.omtrdc.net",
        "trackingServerSecure": "wileypublishing.sc.omtrdc.net",
        "campaign": "%trackingCode%",
        "pageURL": "%cleanURL%",
        "channel": "%environment%",
        "trackInlineStats": true,
        "trackDownloadLinks": true,
        "linkDownloadFileTypes": "avi,css,csv,doc,docx,eps,exe,jpg,js,m4v,mov,mp3,pdf,png,ppt,pptx,rar,svg,tab,txt,vsd,vxd,wav,wma,wmv,xls,xlsx,xml,zip",
        "trackExternalLinks": true,
        "linkInternalFilters": "javascript:,literatumonline.com,localhost,mailto:,onlinelibrary.wiley.com,tel:",
        "linkLeaveQueryString": true,
        "dynamicVariablePrefix": "D=",
        "eVar20": "%dtmError%",
        "eVar11": "%articleTitle%",
        "eVar13": "%searchTerm%",
        "eVar17": "%MCID%",
        "eVar22": "%customerIDs%",
        "eVar56": "%dartwol%",
        "eVar61": "%mSliceID%",
        "eVar62": "%mvTestName%",
        "eVar63": "%mvTestVar%",
        "eVar47": "%Register Marketing Opt In%",
        "prop1": "%website%",
        "prop2": "%pageGroup%",
        "prop3": "%pageTemplate%",
        "prop4": "%pageSubtype%",
        "prop5": "%pageTitle%",
        "prop11": "%pubType%",
        "prop12": "%pubTitle%",
        "prop13": "%pubDoi%",
        "prop14": "%publicationAccess%",
        "prop15": "%journalCode%",
        "prop16": "%volumeIssue%",
        "prop17": "%issueDoi%",
        "prop19": "%viCategories%",
        "prop22": "%articleDoi%",
        "prop23": "%articleAccess%",
        "prop24": "%articleFormats%",
        "prop31": "%searchMode%",
        "prop32": "%searchType%",
        "prop33": "%searchTerm%",
        "prop34": "%searchTab%",
        "prop35": "%searchSort%",
        "prop36": "%searchStartPage%",
        "prop37": "%searchFilterPub%",
        "prop38": "%searchFilterPubType%",
        "prop39": "%searchFilterAccess%",
        "prop40": "%searchFilterSubject%",
        "prop41": "%searchFilterAuthor%",
        "prop42": "%searchFilterDateRange%",
        "prop55": "%litIP%",
        "prop56": "%environment%",
        "prop57": "%errorCode%",
        "prop61": "%loggedIn%",
        "prop62": "%personID%",
        "prop71": "%gptSitename%",
        "prop72": "%gptZonename%",
        "prop73": "%globalSubjectString%",
        "prop25": "%earliestDate%",
        "prop26": "%articleAge%"
      },
      "customInit": function(s){
s.list1=_satellite.getVar('customerIDs');
}
    },
    "ba1d04afce9dd1c018e5c563827f41a2359dce35": {
      "engine": "visitor_id",
      "loadOn": "pagetop",
      "name": "VisitorID",
      "mcOrgId": "1B6E34B85282A0AC0A490D44@AdobeOrg",
      "autoRequest": true,
      "initVars": {
        "trackingServer": "wileypublishing.sc.omtrdc.net",
        "trackingServerSecure": "wileypublishing.sc.omtrdc.net"
      }
    }
  },
  "pageLoadRules": [
    {"name":"1. Data Element Mapping","trigger":[{"engine":"sc","command":"setVars","arguments":[{"prop1":"%website%","prop11":"%pubType%","prop12":"%pubTitle%","prop2":"%pageGroup%","prop3":"%pageTemplate%","prop4":"%pageSubtype%","prop5":"%pageTitle%","channel":"%environment%"}]},{"command":"loadBlockingScript","arguments":[{"sequential":true,"scripts":[{"src":"satellite-5aaec36164746d79c1001d14.js"}]}]}],"event":"pagetop"},
    {"name":"1. Global site ad tag","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5cf7bd7564746d596c000241.js"}]}]}],"event":"pagebottom"},
    {"name":"1. Init custom event capture","trigger":[{"command":"loadBlockingScript","arguments":[{"sequential":true,"scripts":[{"src":"satellite-59cd501964746d5527006272.js"}]}]}],"event":"pagetop"},
    {"name":"1. Page Data Layer Mapping","trigger":[{"command":"loadBlockingScript","arguments":[{"sequential":true,"scripts":[{"src":"satellite-5aac819d64746d762f005d2f.js"}]}]}],"event":"pagetop"},
    {"name":"1. Registration A/B","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar62":"%mvTestName%","eVar63":"%mvTestVar%"}]},{"engine":"sc","command":"addEvent","arguments":["event91"]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d26038d64746d582900052c.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("pageTemplate"), "Registration");
},function(event,target){
if(_satellite.getVar('pageTemplate') && _satellite.getVar('pageTemplate') == 'Registration'){
  
  	mvTestName = "registerconsent1"

	_satellite.setVar('mvTestName',mvTestName);

	if(!(_satellite.readCookie("randomizeUser"))){
		window.WileyDTM && WileyDTM.setCookie("randomizeUser", Math.random(), 60*60*24*365 );
	}

	mSliceId = _satellite.getVar('mSliceID');
  if(_satellite.getQueryParam('mvTestName')==mvTestName && _satellite.getQueryParam('mvTestVar')){
  	  _satellite.setVar('mvTestVar',_satellite.getQueryParam('mvTestVar'));
  }
  else{
    if( mSliceId > 66 ) {_satellite.setVar('mvTestVar','1')}
    else if(mSliceId > 33 && mSliceId <=66) { _satellite.setVar('mvTestVar','2') }
    else{ 	_satellite.setVar('mvTestVar','control'); }
    
  }

	return true;
}
}],"event":"pagebottom"},
    {"name":"2. Abstract View","trigger":[{"engine":"sc","command":"addEvent","arguments":["event5"]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5c58aee264746d5114000883.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("pageSubtype"), "Abstract");
}],"event":"pagebottom"},
    {"name":"2. Access Denied - HTML","trigger":[{"engine":"sc","command":"addEvent","arguments":["event3"]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5c58af1064746d5111000919.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("pageSubtype"), "Access Denial");
},function(event,target){
if(document.location.href.indexOf("/full") > 1){
  return true;
}
return false;
}],"event":"pagebottom"},
    {"name":"2. Access Denied - PDF","trigger":[{"engine":"sc","command":"addEvent","arguments":["event4"]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){
if(articleDOI = _satellite.getVar('articleDoi')){
	if(document.cookie.indexOf('pdfclick'+'='+articleDOI)>0){
		if(window.WileyDTM && WileyDTM.setCookie){
      WileyDTM.setCookie('pdfclick',articleDOI,'delete');
    }
    s.events="event4,event7"
    
	}
}
}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5c58af2c64746d5114000886.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("pageSubtype"), "Access Denial");
},function(event,target){
if(document.location.href.indexOf("/pdf") > 1){
  return true;
}
return false;
}],"event":"pagebottom"},
    {"name":"2. Full Text HTML","trigger":[{"engine":"sc","command":"addEvent","arguments":["event1"]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5c58af5e64746d5111000925.js"},{"src":"satellite-5c87cfcf64746d7044002f7b.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("pageSubtype"), "Full Text");
}],"event":"pagebottom"},
    {"name":"2. RC PDF","trigger":[{"engine":"sc","command":"customSetup","arguments":[function(event,s){
s.abort=true;
}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("pageSubtype"), "RC PDF");
}],"event":"pagebottom"},
    {"name":"3. Hubs Google Analytics","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b4e5b3364746d482f001123.js"}]}]}],"event":"pagebottom"},
    {"name":"4. AORN Membership Test","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar62":"%mvTestName%","eVar63":"%mvTestVar%"}]},{"engine":"sc","command":"addEvent","arguments":["event91"]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d14c5d364746d0cfc000541.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("website"), /aorn/i);
},function(){
return _satellite.textMatch(_satellite.getVar("pageSubtype"), "Access Denial");
},function(event,target){
if(_satellite.getVar('website') && _satellite.getVar('website').indexOf('aorn')>=0){

mvTestName = "aorn-member-test"

_satellite.setVar('mvTestName',mvTestName);

if(!(_satellite.readCookie("randomizeUser"))){
	window.WileyDTM && WileyDTM.setCookie("randomizeUser", Math.random(), 60*60*24*365 );
}

mSliceId = _satellite.getVar('mSliceID');
if(mSliceId > 66 || (_satellite.getQueryParam('mvTestName')==mvTestName && _satellite.getQueryParam('mvTestVar')=='1')){
	_satellite.setVar('mvTestVar','1');
}
else if( (mSliceId <= 66 && mSliceId > 33) || (_satellite.getQueryParam('mvTestName')==mvTestName && _satellite.getQueryParam('mvTestVar')=='2')){
	_satellite.setVar('mvTestVar','2');
}
else{
	_satellite.setVar('mvTestVar','control');
}

}
return true;
}],"event":"domready"},
    {"name":"5. AORN Pixel","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d12680464746d08e8000178.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("website"), /aorn/i);
}],"event":"domready"},
    {"name":"5. Access Denied RM","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5cf0091a64746d0b680020ef.js"},{"src":"satellite-5cfaaee464746d21ff006d2d.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("pageSubtype"), "Access Denial");
}],"event":"pagebottom"},
    {"name":"5. Journal new starts Eloqua tracking","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5c9b94bc64746d33be000051.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("journalCode"), /2365709x|25105345|25673165|26396181|26373807|26271850|23667478|25780727|25119044|23667486|23667486|23663987|25738461|25723170|25704206|25777408|16814835|25784862|25778196|26374943|25735152|14781239|24706981 |25781863|24761508|24750387|25776576|2573802x|25737619|25770470|24756725|25731815|23669608|2367198x|25738488|25728288|25739468/i);
},function(){
return _satellite.textMatch(_satellite.getVar("pageTemplate"), /Journal Home|Table of Contents|List of Issues|WileyOTIS|WileyVCH/i);
}],"event":"domready"},
    {"name":"5. Profile: Added email alert","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar62":"toctest","eVar63":"%Multivariate test from URL%","prop15":"%urlJournalCode%"}]},{"engine":"sc","command":"addEvent","arguments":["event80"]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getQueryParam('action'), "addJournal")
},function(){
return _satellite.textMatch(_satellite.getVar("pageSubtype"), "Alerts Settings");
}],"event":"pagebottom"},
    {"name":"5. Registration confimation","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar47":"%Register Marketing Opt In%"}]},{"engine":"sc","command":"addEvent","arguments":["event85"]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("pageTemplate"), "Registration Confirmation");
}],"event":"pagebottom"},
    {"name":"FB Pixel","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5c87b4fe64746d78ad006ae3.js"}]}]}],"event":"pagetop"},
    {"name":"FB page view","trigger":[{"command":"loadScript","arguments":[{"sequential":true,"scripts":[{"src":"satellite-5c87b56e64746d4e33003a7c.js"}]}]}],"event":"domready"},
    {"name":"QI Qualtrics Intercept Script","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5ad74ae364746d5a68016a67.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("pageSubtype"), /^((?!PDF).)*$/i);
},function(){
return _satellite.textMatch(_satellite.getVar("website"), /^((?!agu).)*$/i);
},function(){
return _satellite.textMatch(_satellite.getVar("pubDoi"), /^((?!1542-2011).)*$/i);
},function(){
return _satellite.textMatch(_satellite.getVar("pageSubtype"), /^((?!PPV).)*$/i);
},function(){
return _satellite.textMatch(_satellite.getVar("journalCode"), /^((?!18780369).)*$/i);
},function(){
return _satellite.textMatch(_satellite.getVar("website"), /^((?!febs).)*$/i);
},function(){
return _satellite.textMatch(_satellite.getVar("pageTemplate"), /^((?!Shibboleth).)*$/i);
}],"event":"domready"},
    {"name":"Related Content test","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5ba5187364746d1c88000f1a.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("pageTemplate"), "Article/Chapter View");
},function(){
return _satellite.textMatch(_satellite.getQueryParam('variation'), "showrecommended")
}],"event":"domready"}
  ],
  "rules": [
    {"name":"*copy me for new rules*","conditions":[function(event,target){
if(window.WileyDTM && WileyDTM.setCookie && _satellite.getVar('articleDoi')){
	WileyDTM.setCookie('pdfclick',_satellite.getVar('articleDoi'),120);
}
return true;
}],"selector":".changeme","event":"custom","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false,"customEvent":"changeme"},
    {"name":"AORN Member Test Clickthrough","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"AORN Membership Click","setVars":{"eVar11":"%articleTitle%","eVar13":"%searchTerm%","eVar17":"%MCID%","eVar20":"%dtmError%","eVar21":"%customerIDs%","eVar62":"%mvTestName%","eVar63":"%mvTestVar%","prop1":"%website%","prop11":"%pubType%","prop12":"%pubTitle%","prop13":"%pubDoi%","prop14":"%publicationAccess%","prop15":"%journalCode%","prop16":"%volumeIssue%","prop17":"%issueDoi%","prop19":"%viCategories%","prop2":"%pageGroup%","prop22":"%articleDoi%","prop23":"%articleAccess%","prop24":"%articleFormats%","prop25":"%earliestDate%","prop26":"%articleAge%","prop3":"%pageTemplate%","prop31":"%searchMode%","prop32":"%searchType%","prop33":"%searchTerm%","prop34":"%searchTab%","prop35":"%searchSort%","prop36":"%searchStartPage%","prop37":"%searchFilterPub%","prop38":"%searchFilterPubType%","prop39":"%searchFilterAccess%","prop4":"%pageSubtype%","prop40":"%searchFilterSubject%","prop41":"%searchFilterAuthor%","prop42":"%searchFilterDateRange%","prop5":"%pageTitle%","prop55":"%litIP%","prop56":"%environment%","prop57":"%errorCode%","prop61":"%loggedIn%","prop62":"%personID%","prop71":"%gptSitename%","prop72":"%gptZonename%","prop73":"%globalSubjectString%"},"addEvent":["event84"]}]}],"selector":".mvtest-membership a","eventHandlerOnElement":true,"event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false,"customEvent":"changeme"},
    {"name":"Abstract language switch","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"Abstract switch language","setVars":{"eVar11":"%articleTitle%","eVar13":"%searchTerm%","eVar17":"%MCID%","eVar20":"%dtmError%","eVar21":"%customerIDs%","eVar40":"%this.getAttribute(hreflang)%","prop1":"%website%","prop11":"%pubType%","prop12":"%pubTitle%","prop13":"%pubDoi%","prop14":"%publicationAccess%","prop15":"%journalCode%","prop16":"%volumeIssue%","prop17":"%issueDoi%","prop19":"%viCategories%","prop2":"%pageGroup%","prop22":"%articleDoi%","prop23":"%articleAccess%","prop24":"%articleFormats%","prop25":"%earliestDate%","prop26":"%articleAge%","prop3":"%pageTemplate%","prop31":"%searchMode%","prop32":"%searchType%","prop33":"%searchTerm%","prop34":"%searchTab%","prop35":"%searchSort%","prop36":"%searchStartPage%","prop37":"%searchFilterPub%","prop38":"%searchFilterPubType%","prop39":"%searchFilterAccess%","prop4":"%pageSubtype%","prop40":"%searchFilterSubject%","prop41":"%searchFilterAuthor%","prop42":"%searchFilterDateRange%","prop5":"%pageTitle%","prop55":"%litIP%","prop56":"%environment%","prop57":"%errorCode%","prop61":"%loggedIn%","prop62":"%personID%","prop71":"%gptSitename%","prop72":"%gptZonename%","prop73":"%globalSubjectString%"},"addEvent":["event14"]}]}],"selector":".lang-container a.lang","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Article Click PDF Link","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"PDF Click","setVars":{"eVar11":"%articleTitle%","eVar13":"%searchTerm%","eVar17":"%MCID%","eVar20":"%dtmError%","eVar21":"%customerIDs%","prop1":"%website%","prop11":"%pubType%","prop12":"%pubTitle%","prop13":"%pubDoi%","prop14":"%publicationAccess%","prop15":"%journalCode%","prop16":"%volumeIssue%","prop17":"%issueDoi%","prop19":"%viCategories%","prop2":"%pageGroup%","prop22":"%articleDoi%","prop23":"%articleAccess%","prop24":"%articleFormats%","prop25":"%earliestDate%","prop26":"%articleAge%","prop3":"%pageTemplate%","prop31":"%searchMode%","prop32":"%searchType%","prop33":"%searchTerm%","prop34":"%searchTab%","prop35":"%searchSort%","prop36":"%searchStartPage%","prop37":"%searchFilterPub%","prop38":"%searchFilterPubType%","prop39":"%searchFilterAccess%","prop4":"%pageSubtype%","prop40":"%searchFilterSubject%","prop41":"%searchFilterAuthor%","prop42":"%searchFilterDateRange%","prop5":"%pageTitle%","prop55":"%litIP%","prop56":"%environment%","prop57":"%errorCode%","prop61":"%loggedIn%","prop62":"%personID%","prop71":"%gptSitename%","prop72":"%gptZonename%","prop73":"%globalSubjectString%"},"addEvent":["event6"]}]},{"command":"delayActivateLink"}],"conditions":[function(event,target){
if(window.WileyDTM && WileyDTM.setCookie && _satellite.getVar('articleDoi')){
	WileyDTM.setCookie('pdfclick',_satellite.getVar('articleDoi'),120);
}
return true;
}],"selector":".pdf-download","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Clicks to email alerts","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"Clicks to email alerts","setVars":{"eVar11":"%articleTitle%","eVar13":"%searchTerm%","eVar17":"%MCID%","eVar20":"%dtmError%","eVar21":"%customerIDs%","eVar61":"%mSliceID%","eVar62":"%mvTestName%","eVar63":"%mvTestVar%","prop1":"%website%","prop11":"%pubType%","prop12":"%pubTitle%","prop13":"%pubDoi%","prop14":"%publicationAccess%","prop15":"%journalCode%","prop16":"%volumeIssue%","prop17":"%issueDoi%","prop19":"%viCategories%","prop2":"%pageGroup%","prop22":"%articleDoi%","prop23":"%articleAccess%","prop24":"%articleFormats%","prop25":"%earliestDate%","prop26":"%articleAge%","prop3":"%pageTemplate%","prop31":"%searchMode%","prop32":"%searchType%","prop33":"%searchTerm%","prop34":"%searchTab%","prop35":"%searchSort%","prop36":"%searchStartPage%","prop37":"%searchFilterPub%","prop38":"%searchFilterPubType%","prop39":"%searchFilterAccess%","prop4":"%pageSubtype%","prop40":"%searchFilterSubject%","prop41":"%searchFilterAuthor%","prop42":"%searchFilterDateRange%","prop5":"%pageTitle%","prop55":"%litIP%","prop56":"%environment%","prop57":"%errorCode%","prop61":"%loggedIn%","prop62":"%personID%","prop71":"%gptSitename%","prop72":"%gptZonename%","prop73":"%globalSubjectString%"},"addEvent":["event79"]}]},{"command":"delayActivateLink"}],"selector":"a[href*=doUpdateAlert]","eventHandlerOnElement":true,"event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false,"customEvent":"changeme"},
    {"name":"ReadCube Purchased AD","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5ca2251b64746d2fd60017dc.js"}]}]}],"selector":".readcube-loggedin[readcube-purchased]","event":"elementexists","bubbleFireIfParent":false,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Registration click","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5d25fb5e64746d4a43000970.js"}]}]}],"selector":"form[action='/action/registration']","event":"submit","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false,"customEvent":"changeme"},
    {"name":"Support Info Clicks","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"Supporting Info Download","setVars":{"eVar11":"%articleTitle%","eVar13":"%searchTerm%","eVar17":"%MCID%","eVar20":"%dtmError%","eVar21":"%customerIDs%","eVar41":"%linktext%","prop1":"%website%","prop11":"%pubType%","prop12":"%pubTitle%","prop13":"%pubDoi%","prop14":"%publicationAccess%","prop15":"%journalCode%","prop16":"%volumeIssue%","prop17":"%issueDoi%","prop19":"%viCategories%","prop2":"%pageGroup%","prop22":"%articleDoi%","prop23":"%articleAccess%","prop24":"%articleFormats%","prop25":"%earliestDate%","prop26":"%articleAge%","prop3":"%pageTemplate%","prop31":"%searchMode%","prop32":"%searchType%","prop33":"%searchTerm%","prop34":"%searchTab%","prop35":"%searchSort%","prop36":"%searchStartPage%","prop37":"%searchFilterPub%","prop38":"%searchFilterPubType%","prop39":"%searchFilterAccess%","prop4":"%pageSubtype%","prop40":"%searchFilterSubject%","prop41":"%searchFilterAuthor%","prop42":"%searchFilterDateRange%","prop5":"%pageTitle%","prop55":"%litIP%","prop56":"%environment%","prop57":"%errorCode%","prop61":"%loggedIn%","prop62":"%personID%","prop71":"%gptSitename%","prop72":"%gptZonename%","prop73":"%globalSubjectString%"},"addEvent":["event51"]}]},{"command":"delayActivateLink"}],"conditions":[function(event,target){
_satellite.setVar("linktext",this.text);
return true;
}],"selector":".support-info__table a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false,"customEvent":"changeme"},
    {"name":"facebook like","event":"facebook.like","trigger":[{"command":"send","arguments":[{"hitType":"social","socialNetwork":"facebook","socialAction":"like","socialTarget":
document.location.href
}],"tool":["wolga"]}]},
    {"name":"facebook unlike","event":"facebook.unlike","trigger":[{"command":"send","arguments":[{"hitType":"social","socialNetwork":"facebook","socialAction":"unlike","socialTarget":
document.location.href
}],"tool":["wolga"]}]},
    {"name":"facebook send","event":"facebook.send","trigger":[{"command":"send","arguments":[{"hitType":"social","socialNetwork":"facebook","socialAction":"send","socialTarget":
document.location.href
}],"tool":["wolga"]}]},
    {"name":"twitter tweet","event":"twitter.tweet","trigger":[{"command":"send","arguments":[{"hitType":"social","socialNetwork":"twitter","socialAction":"tweet","socialTarget":
document.location.href
}],"tool":["wolga"]}]}
  ],
  "directCallRules": [
    {"name":"changeme","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"Change Me","setVars":{"eVar11":"%articleTitle%","eVar20":"%dtmError%","eVar22":"%customerIDs%","prop1":"%website%","prop11":"%pubType%","prop12":"%pubTitle%","prop13":"%pubDoi%","prop14":"%publicationAccess%","prop15":"%journalCode%","prop16":"%volumeIssue%","prop17":"%issueDoi%","prop19":"%viCategories%","prop2":"%pageGroup%","prop22":"%articleDoi%","prop23":"%articleAccess%","prop24":"%articleFormats%","prop25":"%earliestDate%","prop3":"%pageTemplate%","prop31":"%searchMode%","prop32":"%searchType%","prop33":"%searchTerm%","prop34":"%searchTab%","prop35":"%searchSort%","prop36":"%searchStartPage%","prop37":"%searchFilterPub%","prop38":"%searchFilterPubType%","prop39":"%searchFilterAccess%","prop4":"%pageSubtype%","prop40":"%searchFilterSubject%","prop41":"%searchFilterAuthor%","prop42":"%searchFilterDateRange%","prop55":"%litIP%","prop56":"%environment%","prop57":"%errorCode%","prop61":"%loggedIn%","prop62":"%personID%","prop71":"%gptSitename%","prop72":"%gptZonename%","prop73":"%globalSubjectString%"}}]}]},
    {"name":"elqIdentify","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"elqIdentify","setVars":{"eVar11":"%articleTitle%","eVar20":"%dtmError%","eVar22":"%customerIDs%","eVar52":"%eventData.ContactID%","prop1":"%website%","prop11":"%pubType%","prop12":"%pubTitle%","prop13":"%pubDoi%","prop14":"%publicationAccess%","prop15":"%journalCode%","prop16":"%volumeIssue%","prop17":"%issueDoi%","prop19":"%viCategories%","prop2":"%pageGroup%","prop22":"%articleDoi%","prop23":"%articleAccess%","prop24":"%articleFormats%","prop25":"%earliestDate%","prop3":"%pageTemplate%","prop31":"%searchMode%","prop32":"%searchType%","prop33":"%searchTerm%","prop34":"%searchTab%","prop35":"%searchSort%","prop36":"%searchStartPage%","prop37":"%searchFilterPub%","prop38":"%searchFilterPubType%","prop39":"%searchFilterAccess%","prop4":"%pageSubtype%","prop40":"%searchFilterSubject%","prop41":"%searchFilterAuthor%","prop42":"%searchFilterDateRange%","prop55":"%litIP%","prop56":"%environment%","prop57":"%errorCode%","prop61":"%loggedIn%","prop62":"%personID%","prop71":"%gptSitename%","prop72":"%gptZonename%","prop73":"%globalSubjectString%"}}]}]},
    {"name":"mvtestrun","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"Multivariate test run","setVars":{"eVar11":"%articleTitle%","eVar20":"%dtmError%","eVar22":"%customerIDs%","eVar61":"%mSliceID%","eVar62":"%mvTestName%","eVar63":"%mvTestVar%","prop1":"%website%","prop11":"%pubType%","prop12":"%pubTitle%","prop13":"%pubDoi%","prop14":"%publicationAccess%","prop15":"%journalCode%","prop16":"%volumeIssue%","prop17":"%issueDoi%","prop19":"%viCategories%","prop2":"%pageGroup%","prop22":"%articleDoi%","prop23":"%articleAccess%","prop24":"%articleFormats%","prop25":"%earliestDate%","prop3":"%pageTemplate%","prop31":"%searchMode%","prop32":"%searchType%","prop33":"%searchTerm%","prop34":"%searchTab%","prop35":"%searchSort%","prop36":"%searchStartPage%","prop37":"%searchFilterPub%","prop38":"%searchFilterPubType%","prop39":"%searchFilterAccess%","prop4":"%pageSubtype%","prop40":"%searchFilterSubject%","prop41":"%searchFilterAuthor%","prop42":"%searchFilterDateRange%","prop55":"%litIP%","prop56":"%environment%","prop57":"%errorCode%","prop61":"%loggedIn%","prop62":"%personID%","prop71":"%gptSitename%","prop72":"%gptZonename%","prop73":"%globalSubjectString%"},"addEvent":["event91"]}]}]},
    {"name":"trackSurvey","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"Survey Invite","setVars":{"eVar11":"%articleTitle%","eVar20":"%dtmError%","eVar22":"%customerIDs%","eVar23":"%eventData.surveyID%","prop1":"%website%","prop11":"%pubType%","prop12":"%pubTitle%","prop13":"%pubDoi%","prop14":"%publicationAccess%","prop15":"%journalCode%","prop16":"%volumeIssue%","prop17":"%issueDoi%","prop19":"%viCategories%","prop2":"%pageGroup%","prop22":"%articleDoi%","prop23":"%articleAccess%","prop24":"%articleFormats%","prop25":"%earliestDate%","prop3":"%pageTemplate%","prop31":"%searchMode%","prop32":"%searchType%","prop33":"%searchTerm%","prop34":"%searchTab%","prop35":"%searchSort%","prop36":"%searchStartPage%","prop37":"%searchFilterPub%","prop38":"%searchFilterPubType%","prop39":"%searchFilterAccess%","prop4":"%pageSubtype%","prop40":"%searchFilterSubject%","prop41":"%searchFilterAuthor%","prop42":"%searchFilterDateRange%","prop55":"%litIP%","prop56":"%environment%","prop57":"%errorCode%","prop61":"%loggedIn%","prop62":"%personID%","prop71":"%gptSitename%","prop72":"%gptZonename%","prop73":"%globalSubjectString%"},"addEvent":["event61"]}]}]},
    {"name":"disqus.comment","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"Disqus comment","setVars":{"eVar11":"%articleTitle%","eVar20":"%dtmError%","eVar22":"%customerIDs%","prop1":"%website%","prop11":"%pubType%","prop12":"%pubTitle%","prop13":"%pubDoi%","prop14":"%publicationAccess%","prop15":"%journalCode%","prop16":"%volumeIssue%","prop17":"%issueDoi%","prop19":"%viCategories%","prop2":"%pageGroup%","prop22":"%articleDoi%","prop23":"%articleAccess%","prop24":"%articleFormats%","prop25":"%earliestDate%","prop3":"%pageTemplate%","prop31":"%searchMode%","prop32":"%searchType%","prop33":"%searchTerm%","prop34":"%searchTab%","prop35":"%searchSort%","prop36":"%searchStartPage%","prop37":"%searchFilterPub%","prop38":"%searchFilterPubType%","prop39":"%searchFilterAccess%","prop4":"%pageSubtype%","prop40":"%searchFilterSubject%","prop41":"%searchFilterAuthor%","prop42":"%searchFilterDateRange%","prop55":"%litIP%","prop56":"%environment%","prop57":"%errorCode%","prop61":"%loggedIn%","prop62":"%personID%","prop71":"%gptSitename%","prop72":"%gptZonename%","prop73":"%globalSubjectString%"},"addEvent":["event71"]}]}]},
    {"name":"readcube.ecommerce.billing","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar25":"%eventData.share.view.type%","eVar26":"%eventData.share.view.disabled%","eVar27":"%eventData.share.view.referrer%","eVar31":"%eventData.ppv.option%","eVar32":"%eventData.ppv.price%","eVar33":"%eventData.ppv.origin%","eVar34":"%eventData.ppv.country%","prop4":"ReadCube PPV: Enter Billing Info","prop65":"%eventData.user.id%","prop66":"%eventData.user.emaildomain%"},"addEvent":["event28"]}]}]},
    {"name":"readcube.ecommerce.complete","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar25":"%eventData.share.view.type%","eVar26":"%eventData.share.view.disabled%","eVar27":"%eventData.share.view.referrer%","eVar31":"%eventData.ppv.option%","eVar32":"%eventData.ppv.price%","eVar33":"%eventData.ppv.origin%","eVar34":"%eventData.ppv.country%","prop4":"ReadCube PPV: Purchase Complete","prop65":"%eventData.user.id%","prop66":"%eventData.user.emaildomain%"},"customSetup":function(event,s){
s.events="event36";
if(_satellite.getVar('eventData') && _satellite.getVar('eventData').ppv && _satellite.getVar('eventData').ppv.option){
  if(_satellite.getVar('eventData').ppv.option=="full"){ s.events = s.events + ",event35"; }
  if(_satellite.getVar('eventData').ppv.option=="cloud"){ s.events = s.events + ",event34"; }
  if(_satellite.getVar('eventData').ppv.option=="rental"){ s.events = s.events + ",event33"; }
}
}}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5aade19464746d4329002085.js"}]}]}]},
    {"name":"readcube.ecommerce.final","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar25":"%eventData.share.view.type%","eVar26":"%eventData.share.view.disabled%","eVar27":"%eventData.share.view.referrer%","eVar31":"%eventData.ppv.option%","eVar32":"%eventData.ppv.price%","eVar33":"%eventData.ppv.origin%","eVar34":"%eventData.ppv.country%","prop4":"ReadCube PPV: Review and Confirm","prop65":"%eventData.user.id%","prop66":"%eventData.user.emaildomain%"},"addEvent":["event29"]}]}]},
    {"name":"readcube.ecommerce.load","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5beb1f6964746d19d30032b8.js"}]}]}]},
    {"name":"readcube.ecommerce.new","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar25":"%eventData.share.view.type%","eVar26":"%eventData.share.view.disabled%","eVar27":"%eventData.share.view.referrer%","eVar31":"%eventData.ppv.option%","eVar32":"%eventData.ppv.price%","eVar33":"%eventData.ppv.origin%","eVar34":"%eventData.ppv.country%","prop4":"ReadCube PPV: Review Options","prop65":"%eventData.user.id%","prop66":"%eventData.user.emaildomain%"},"addEvent":["event25"]}]}]},
    {"name":"readcube.ecommerce.purchasefailed ","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar25":"%eventData.share.view.type%","eVar26":"%eventData.share.view.disabled%","eVar27":"%eventData.share.view.referrer%","eVar31":"%eventData.ppv.option%","eVar32":"%eventData.ppv.price%","eVar33":"%eventData.ppv.origin%","eVar34":"%eventData.ppv.country%","prop4":"ReadCube PPV: Purchase Failed","prop65":"%eventData.user.id%","prop66":"%eventData.user.emaildomain%"},"addEvent":["event30"]}]}]},
    {"name":"readcube.ecommerce.register","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar25":"%eventData.share.view.type%","eVar26":"%eventData.share.view.disabled%","eVar27":"%eventData.share.view.referrer%","eVar31":"%eventData.ppv.option%","eVar32":"%eventData.ppv.price%","eVar33":"%eventData.ppv.origin%","eVar34":"%eventData.ppv.country%","prop4":"ReadCube PPV: Register","prop65":"%eventData.user.id%","prop66":"%eventData.user.emaildomain%"},"addEvent":["event27"]}]}]},
    {"name":"readcube.ecommerce.userinfo","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar25":"%eventData.share.view.type%","eVar26":"%eventData.share.view.disabled%","eVar27":"%eventData.share.view.referrer%","eVar31":"%eventData.ppv.option%","eVar32":"%eventData.ppv.price%","eVar33":"%eventData.ppv.origin%","eVar34":"%eventData.ppv.country%","prop4":"ReadCube PPV: Log In","prop65":"%eventData.user.id%","prop66":"%eventData.user.emaildomain%"},"addEvent":["event26"]}]}]},
    {"name":"readcube.share.createlink","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"ReadCube Share Link Create","setVars":{"eVar11":"%articleTitle%","eVar17":"%MCID%","eVar18":"%eventData.share.create.token%","eVar20":"%dtmError%","eVar22":"%customerIDs%","prop1":"%website%","prop11":"%pubType%","prop12":"%pubTitle%","prop13":"%pubDoi%","prop14":"%publicationAccess%","prop15":"%journalCode%","prop16":"%volumeIssue%","prop17":"%issueDoi%","prop19":"%viCategories%","prop2":"%pageGroup%","prop22":"%articleDoi%","prop23":"%articleAccess%","prop24":"%articleFormats%","prop25":"%earliestDate%","prop3":"%pageTemplate%","prop31":"%searchMode%","prop32":"%searchType%","prop33":"%searchTerm%","prop34":"%searchTab%","prop35":"%searchSort%","prop36":"%searchStartPage%","prop37":"%searchFilterPub%","prop38":"%searchFilterPubType%","prop39":"%searchFilterAccess%","prop4":"%pageSubtype%","prop40":"%searchFilterSubject%","prop41":"%searchFilterAuthor%","prop42":"%searchFilterDateRange%","prop55":"%litIP%","prop56":"%environment%","prop57":"%errorCode%","prop61":"%loggedIn%","prop62":"%personID%","prop65":"%eventData.user.id%","prop66":"%eventData.user.emaildomain%","prop71":"%gptSitename%","prop72":"%gptZonename%","prop73":"%globalSubjectString%"},"addEvent":["event37"]}]}]},
    {"name":"readcube.webviewer.downloadpdf","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"ReadCube Download PDF","setVars":{"eVar11":"%articleTitle%","eVar17":"%MCID%","eVar20":"%dtmError%","eVar22":"%customerIDs%","eVar25":"%eventData.share.view.type%","eVar26":"%eventData.share.view.disabled%","eVar27":"%eventData.share.view.referrer%","eVar31":"%eventData.purchase.option%","eVar32":"%eventData.purchase.price%","eVar33":"%eventData.purchase.origin%","eVar34":"%eventData.purchase.country%","prop1":"%website%","prop11":"%pubType%","prop12":"%pubTitle%","prop13":"%pubDoi%","prop14":"%publicationAccess%","prop15":"%journalCode%","prop16":"%volumeIssue%","prop17":"%issueDoi%","prop19":"%viCategories%","prop2":"%pageGroup%","prop22":"%articleDoi%","prop23":"%articleAccess%","prop24":"%articleFormats%","prop25":"%earliestDate%","prop3":"%pageTemplate%","prop31":"%searchMode%","prop32":"%searchType%","prop33":"%searchTerm%","prop34":"%searchTab%","prop35":"%searchSort%","prop36":"%searchStartPage%","prop37":"%searchFilterPub%","prop38":"%searchFilterPubType%","prop39":"%searchFilterAccess%","prop4":"%pageSubtype%","prop40":"%searchFilterSubject%","prop41":"%searchFilterAuthor%","prop42":"%searchFilterDateRange%","prop55":"%litIP%","prop56":"%environment%","prop57":"%errorCode%","prop61":"%loggedIn%","prop62":"%personID%","prop65":"%eventData.user.id%","prop66":"%eventData.user.emaildomain%","prop71":"%gptSitename%","prop72":"%gptZonename%","prop73":"%globalSubjectString%"},"addEvent":["event38"]}]}]},
    {"name":"readcube.webviewer.downloadpdf.ppv","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"ReadCube Download PDF","setVars":{"eVar11":"%articleTitle%","eVar17":"%MCID%","eVar20":"%dtmError%","eVar22":"%customerIDs%","eVar25":"%eventData.share.view.type%","eVar26":"%eventData.share.view.disabled%","eVar27":"%eventData.share.view.referrer%","eVar31":"%eventData.ppv.option%","eVar32":"%eventData.ppv.price%","eVar33":"%eventData.ppv.origin%","eVar34":"%eventData.ppv.country%","prop1":"%website%","prop11":"%pubType%","prop12":"%pubTitle%","prop13":"%pubDoi%","prop14":"%publicationAccess%","prop15":"%journalCode%","prop16":"%volumeIssue%","prop17":"%issueDoi%","prop19":"%viCategories%","prop2":"%pageGroup%","prop22":"%articleDoi%","prop23":"%articleAccess%","prop24":"%articleFormats%","prop25":"%earliestDate%","prop3":"%pageTemplate%","prop31":"%searchMode%","prop32":"%searchType%","prop33":"%searchTerm%","prop34":"%searchTab%","prop35":"%searchSort%","prop36":"%searchStartPage%","prop37":"%searchFilterPub%","prop38":"%searchFilterPubType%","prop39":"%searchFilterAccess%","prop4":"%pageSubtype%","prop40":"%searchFilterSubject%","prop41":"%searchFilterAuthor%","prop42":"%searchFilterDateRange%","prop55":"%litIP%","prop56":"%environment%","prop57":"%errorCode%","prop61":"%loggedIn%","prop62":"%personID%","prop65":"%eventData.user.id%","prop66":"%eventData.user.emaildomain%","prop71":"%gptSitename%","prop72":"%gptZonename%","prop73":"%globalSubjectString%"},"addEvent":["event38"]}]}]},
    {"name":"readcube.webviewer.fullview","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar25":"%eventData.share.view.type%","eVar26":"%eventData.share.view.disabled%","eVar27":"%eventData.share.view.referrer%","eVar31":"%eventData.purchase.option%","eVar32":"%eventData.purchase.price%","eVar33":"%eventData.purchase.origin%","eVar34":"%eventData.purchase.country%","prop65":"%eventData.user.id%","prop66":"%eventData.user.emaildomain%"},"customSetup":function(event,s){
 window.console && console.log("cookie");
window.console && console.log(document.cookie);

if(articleDOI = _satellite.getVar('articleDoi')){
	if(document.cookie.indexOf('pdfclick'+'='+articleDOI)>0){
		if(window.WileyDTM && WileyDTM.setCookie){
      WileyDTM.setCookie('pdfclick',articleDOI,'delete');
    }
    s.events="event2,event7";
    s.linkTrackEvents="event2,event7";
    
	}
}
},"addEvent":["event2"]}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b4e624f64746d348b0008e6.js"},{"src":"satellite-5c87cfc364746d4e33003b28.js"}]}]}]},
    {"name":"readcube.webviewer.preview.ad","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar25":"%eventData.share.view.type%","eVar26":"%eventData.share.view.disabled%","eVar27":"%eventData.share.view.referrer%","eVar31":"%eventData.purchase.option%","eVar32":"%eventData.purchase.price%","eVar33":"%eventData.purchase.origin%","eVar34":"%eventData.purchase.country%","prop4":"ReadCube ePDF: Preview","prop65":"%eventData.user.id%","prop66":"%eventData.user.emaildomain%"},"addEvent":["event40"]}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b4e629464746d3494000973.js"}]}]}]},
    {"name":"readcube.webviewer.preview.sharefail","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar25":"%eventData.share.view.type%","eVar26":"%eventData.share.view.disabled%","eVar27":"%eventData.share.view.referrer%","eVar31":"%eventData.purchase.option%","eVar32":"%eventData.purchase.price%","eVar33":"%eventData.purchase.origin%","eVar34":"%eventData.purchase.country%","prop4":"ReadCube ePDF: Restricted Share View (Sharing Failed)","prop65":"%eventData.user.id%","prop66":"%eventData.user.emaildomain%"},"customSetup":function(event,s){
if(articleDOI = _satellite.getVar('articleDoi')){
	if(document.cookie.indexOf('pdfclick'+'='+articleDOI)>0){
		if(window.WileyDTM && WileyDTM.setCookie){
      WileyDTM.setCookie('pdfclick',articleDOI,'delete');
    }
    s.events="event41,event7"
    
	}
}
},"addEvent":["event41"]}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b4e62e264746d348e000ae7.js"}]}]}]},
    {"name":"readcube.webviewer.shareview","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar25":"%eventData.share.view.type%","eVar26":"%eventData.share.view.disabled%","eVar27":"%eventData.share.view.referrer%","eVar31":"%eventData.purchase.option%","eVar32":"%eventData.purchase.price%","eVar33":"%eventData.purchase.origin%","eVar34":"%eventData.purchase.country%","prop4":"ReadCube ePDF: Restricted Share View","prop65":"%eventData.user.id%","prop66":"%eventData.user.emaildomain%"},"customSetup":function(event,s){
if(articleDOI = _satellite.getVar('articleDoi')){
	if(document.cookie.indexOf('pdfclick'+'='+articleDOI)>0){
		if(window.WileyDTM && WileyDTM.setCookie){
      WileyDTM.setCookie('pdfclick',articleDOI,'delete');
    }
    s.events="event39,event7"
    
	}
}
},"addEvent":["event39"]}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b4e62c264746d348b0008f2.js"}]}]}]}
  ],
  "settings": {
    "trackInternalLinks": true,
    "libraryName": "satelliteLib-c1ac050bbdc647f13a62578e71f0d817f8a6cbb5",
    "isStaging": false,
    "allowGATTcalls": false,
    "downloadExtensions": /\.(?:doc|docx|eps|jpg|png|svg|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)($|\&|\?)/i,
    "notifications": false,
    "utilVisible": false,
    "domainList": [
      "literatumonline.com",
      "wiley.com"
    ],
    "scriptDir": "6e626c9ec247e474f6b98eb15a79a185cf7e26a5/scripts/",
    "undefinedVarsReturnEmpty": true,
    "linkDelay": 300,
    "tagTimeout": 3000
  },
  "data": {
    "URI": 
document.location.pathname + document.location.search
,
    "browser": {
    },
    "cartItems": [

    ],
    "revenue": "",
    "host": {
      "http": "assets.adobedtm.com",
      "https": "assets.adobedtm.com"
    }
  },
  "dataElements": {
    "articleAccess": {"jsVariable":"digitalData.publication.item.access","storeLength":"pageview"},
    "articleAge": {"jsVariable":"WileyDTM.data.articleAge","storeLength":"pageview"},
    "articleDoi": {"jsVariable":"digitalData.publication.item.doi","storeLength":"pageview"},
    "articleFormats": {"jsVariable":"WileyDTM.data.articleFormats","storeLength":"pageview"},
    "articleTitle": {"customJS":function(){
if(window.digitalData && digitalData.publication && digitalData.publication.item && typeof(digitalData.publication.item.title)=="string"){
 return digitalData.publication.item.title.replace(/<[^>]+>/g, '');
}
return false;
},"storeLength":"pageview"},
    "cleanURL": {"customJS":function(){
searchvars = document.location.search.replace("?","").split("&").filter(svar => svar.indexOf('fbclid')<0);
newurl = document.location.href.replace(document.location.search,"");
if (searchvars.length>0) newurl =  newurl + "?" + searchvars.join("&");
return newurl;
},"storeLength":"pageview"},
    "customerIDs": {"jsVariable":"WileyDTM.data.identities.institutionsString","storeLength":"pageview"},
    "dtmError": {"jsVariable":"WileyDTM.DTMError","storeLength":"pageview"},
    "earliestDate": {"jsVariable":"digitalData.publication.item.earliestDate","storeLength":"pageview"},
    "environment": {"jsVariable":"digitalData.site.environment","storeLength":"pageview"},
    "errorCode": {"jsVariable":"digitalData.page.errorCode","storeLength":"pageview"},
    "globalSubjectString": {"jsVariable":"WileyDTM.data.tmap.globalSubjectsString","storeLength":"pageview"},
    "gptSitename": {"jsVariable":"WileyDTM.data.tmap.gptSiteName","storeLength":"pageview"},
    "gptZonename": {"jsVariable":"WileyDTM.data.tmap.gptZoneName","storeLength":"pageview"},
    "issueDoi": {"jsVariable":"WileyDTM.data.issueData.issueDOI","storeLength":"pageview"},
    "journalCode": {"jsVariable":"WileyDTM.data.journalCode","storeLength":"pageview"},
    "litIP": {"jsVariable":"digitalData.site.ip","storeLength":"pageview"},
    "loggedIn": {"jsVariable":"WileyDTM.data.isLoggedIn","storeLength":"pageview"},
    "MCID": {"customJS":function(){
try{
 return Visitor.getInstance("1B6E34B85282A0AC0A490D44@AdobeOrg").getMarketingCloudVisitorID();
}
catch(e) {return '';}
},"storeLength":"session"},
    "mSliceID": {"customJS":function(){
if(!(_satellite.readCookie("randomizeUser"))){
			_satellite.setCookie("randomizeUser", Math.random() );
}
if(_satellite.readCookie("randomizeUser")){
 	msliceid = Math.floor(_satellite.readCookie("randomizeUser")*Math.pow(10,2))
  return msliceid;
}
return false;
},"storeLength":"pageview"},
    "Multivariate test from URL": {"queryParam":"mvtest","default":"none","storeLength":"pageview","ignoreCase":1},
    "pageGroup": {"jsVariable":"digitalData.page.pageGroup","storeLength":"pageview"},
    "pageSubtype": {"jsVariable":"digitalData.page.subPage","storeLength":"pageview"},
    "pageTemplate": {"jsVariable":"digitalData.page.page","storeLength":"pageview"},
    "pageTitle": {"customJS":function(){
if(window.digitalData && digitalData.page && digitalData.page.title && typeof(digitalData.page.title)=="string"){
  if(digitalData.publication && digitalData.publication.item && digitalData.publication.item.title && typeof(digitalData.publication.item.title)=="string"){
    return "{Article Title}";
  }
  if(WileyDTM && WileyDTM.data && WileyDTM.data.searchData && WileyDTM.data.searchData.searchTerm){
    return "{Search}" 
  }
	if(digitalData.page.title.length>77){
		return digitalData.page.title.substring(0,75) + "...";
	}
	return digitalData.page.title;
}
return false;
},"storeLength":"pageview"},
    "personID": {"jsVariable":"WileyDTM.data.identities.personUser","storeLength":"pageview"},
    "pubDoi": {"jsVariable":"WileyDTM.data.publicationDOI","storeLength":"pageview"},
    "publicationAccess": {"jsVariable":"WileyDTM.data.publicationAccess","storeLength":"pageview"},
    "pubTitle": {"jsVariable":"WileyDTM.data.publicationTitle","storeLength":"pageview"},
    "pubType": {"jsVariable":"WileyDTM.data.publicationType","storeLength":"pageview"},
    "randomID": {"customJS":function(){
if(!(_satellite.readCookie("randomizeUser"))){
			_satellite.setCookie("randomizeUser", Math.random() );
}
return _satellite.readCookie("randomizeUser");
},"storeLength":"pageview"},
    "Register Marketing Opt In": {"cookie":"_smoi","storeLength":"pageview"},
    "searchFilterAccess": {"jsVariable":"WileyDTM.data.searchData.accessType","storeLength":"pageview"},
    "searchFilterAuthor": {"jsVariable":"WileyDTM.data.searchData.authorFilter","storeLength":"pageview"},
    "searchFilterDateRange": {"customJS":function(){
if(window.digitalData && digitalData.search && digitalData.page && digitalData.page.title){
	if(digitalData.page.title.indexOf("[Earliest")>=0){
		dfrag= digitalData.page.title.substring(digitalData.page.title.indexOf("[Earliest")+11);
		return dfrag.substring(0, dfrag.indexOf("]"))
	}
	if(digitalData.page.title.indexOf("[Publication Date")>=0){
	return "Custom";
	}
}

return false;
},"storeLength":"pageview"},
    "searchFilterPub": {"jsVariable":"WileyDTM.data.searchData.title","storeLength":"pageview"},
    "searchFilterPubType": {"jsVariable":"WileyDTM.data.searchData.pubType","storeLength":"pageview"},
    "searchFilterSubject": {"jsVariable":"WileyDTM.data.searchData.subject","storeLength":"pageview"},
    "searchMode": {"jsVariable":"WileyDTM.data.searchData.mode","storeLength":"pageview"},
    "searchSort": {"jsVariable":"WileyDTM.data.searchData.sort","storeLength":"pageview"},
    "searchStartPage": {"jsVariable":"WileyDTM.data.searchData.startPage","storeLength":"pageview"},
    "searchTab": {"jsVariable":"WileyDTM.data.searchData.tab","storeLength":"pageview"},
    "searchTerm": {"jsVariable":"WileyDTM.data.searchData.searchTerm","storeLength":"pageview","forceLowerCase":true,"cleanText":true},
    "searchType": {"jsVariable":"WileyDTM.data.searchData.type","storeLength":"pageview"},
    "server": {"jsVariable":"digitalData.site.server","storeLength":"pageview"},
    "trackingCode": {"customJS":function(){
function getQueryParam(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

to = {};
to.campaign = getQueryParam('campaign');


if(getQueryParam('shared_access_token')){
	to.source = "p2p_sharing";
	to.medium = "readcube_sharing";
}
if(getQueryParam('author_access_token')){
	to.source = "author_sharing";
	to.medium = "readcube_sharing";
}
if(getQueryParam('referrer_access_token')){
	to.source = "referrer_sharing";
	to.medium = "readcube_sharing";
}

if(getQueryParam('fbclid')){
	to.source = "facebook";
	to.medium = "social_organic";
}
if(getQueryParam('hootPostID')){
	to.source = "hootsuite";
	to.medium = "social_marketing";
}
if(getQueryParam('campaign').indexOf('dartwol')>=0){
	to.source = "dartwol";
	to.medium = "display_marketing";
  dartwol = getQueryParam('campaign').split("|");
	dartwol = dartwol[1] ? dartwol[1] : dartwol;
  _satellite.setVar('dartwol',dartwol);
  to.campaign = "";
}
if(getQueryParam('campaign').indexOf('wlytk')>=0){
	to.source = "dmms";
	to.medium = "email";
}
if(getQueryParam('gclid')){
	to.source = "google";
	to.medium = "search_paid";
}
if(document.location.search.indexOf('elq')>=0){
	if(document.referrer.indexOf('news.wiley.com')==0 || document.referrer.indexOf('secure.wiley.com')==0 || getQueryParam('elqaid')){
		to.source = "eloquaPages";
		to.medium = "web_marketing";
	}
	else{
		to.source = "eloquaEmail";
		to.medium = "email";
	}
  if(getQueryParam('elqCampaignId')){
    to.campaign =  getQueryParam('elqCampaignId');
  }
}
if(getQueryParam('utm_source')){
	to.source = getQueryParam('utm_source');
	to.medium = getQueryParam('utm_medium');
	to.campaign = getQueryParam('utm_campaign');
	to.term = getQueryParam('utm_term');
	to.content = getQueryParam('utm_content');
}


trackingString = to.campaign;
if(to.medium || to.source) trackingString  = trackingString + "|" + to.medium + "|" + to.source;
if(to.term || to.content) trackingString  = trackingString + "|" + to.term + "|" + to.content;

return trackingString;
},"storeLength":"pageview"},
    "urlJournalCode": {"queryParam":"journalCode","storeLength":"pageview","ignoreCase":1},
    "viCategories": {"jsVariable":"WileyDTM.data.tmap.viCategoriesString","storeLength":"pageview"},
    "volumeIssue": {"jsVariable":"WileyDTM.data.volumeIssue","storeLength":"pageview"},
    "website": {"customJS":function(){
hostname = document.location.hostname;
dhn = "onlinelibrary.wiley.com";
	if(/wiley\.com$/.test(document.location.hostname)==false){
		hostname = dhn;
		if(/onlinelibrary.wiley.com/.test(document.location.hostname)){
			hostname =  document.location.hostname.split(dhn)[0] + dhn
		}
		if(/onlinelibrary-wiley-com/.test(document.location.hostname)){
			hostname =  document.location.hostname.split('onlinelibrary-wiley-com')[0] + dhn
		}
 }
return hostname;
},"storeLength":"pageview"}
  },
  "appVersion": "7QN",
  "buildDate": "2019-08-13 18:28:07 UTC",
  "publishDate": "2019-08-13 18:28:06 UTC"
});
})(window, document);
