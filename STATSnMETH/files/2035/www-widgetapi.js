(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var q;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=ca(this);function t(a,b){if(b)a:{for(var c=ea,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ja="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function sa(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.D=b.prototype}
function ta(){this.m=!1;this.i=null;this.g=void 0;this.f=1;this.j=this.l=0;this.A=this.h=null}
function ua(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}
ta.prototype.s=function(a){this.g=a};
function va(a,b){a.h={ea:b,T:!0};a.f=a.l||a.j}
ta.prototype["return"]=function(a){this.h={"return":a};this.f=this.j};
function x(a,b,c){a.f=c;return{value:b}}
ta.prototype.v=function(a){this.f=a};
function wa(a){a.l=2;a.j=3}
function xa(a){a.l=0;a.h=null}
function Ba(a){a.A=[a.h];a.l=0;a.j=0}
function Da(a){var b=a.A.splice(0)[0];(b=a.h=a.h||b)?b.T?a.f=a.l||a.j:void 0!=b.v&&a.j<b.v?(a.f=b.v,a.h=null):a.f=a.j:a.f=0}
function Ea(a){this.f=new ta;this.g=a}
function Fa(a,b){ua(a.f);var c=a.f.i;if(c)return Ga(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return Ha(a)}
function Ga(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.m=!1,e;var f=e.value}catch(g){return a.f.i=null,va(a.f,g),Ha(a)}a.f.i=null;d.call(a.f,f);return Ha(a)}
function Ha(a){for(;a.f.f;)try{var b=a.g(a.f);if(b)return a.f.m=!1,{value:b.value,done:!1}}catch(c){a.f.g=void 0,va(a.f,c)}a.f.m=!1;if(a.f.h){b=a.f.h;a.f.h=null;if(b.T)throw b.ea;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function Ia(a){this.next=function(b){ua(a.f);a.f.i?b=Ga(a,a.f.i.next,b,a.f.s):(a.f.s(b),b=Ha(a));return b};
this["throw"]=function(b){ua(a.f);a.f.i?b=Ga(a,a.f.i["throw"],b,a.f.s):(va(a.f,b),b=Ha(a));return b};
this["return"]=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function y(a,b){var c=new Ia(new Ea(b));oa&&a.prototype&&oa(c,a.prototype);return c}
t("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
function z(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Na="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)z(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Na});
t("Promise",function(a){function b(g){this.g=0;this.h=void 0;this.f=[];var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=ea.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.F),reject:g(this.j)}};
b.prototype.F=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.oa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.A(g):this.l(g)}};
b.prototype.A=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.ca(h,g):this.l(g)};
b.prototype.j=function(g){this.m(2,g)};
b.prototype.l=function(g){this.m(1,g)};
b.prototype.m=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.h=h;this.s()};
b.prototype.s=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.oa=function(g){var h=this.i();g.G(h.resolve,h.reject)};
b.prototype.ca=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(v){try{l(r(v))}catch(w){m(w)}}:p}
var l,m,n=new b(function(r,p){l=r;m=p});
this.G(k(g,l),k(h,m));return n};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.G=function(g,h){function k(){switch(l.g){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(k):this.f.push(k)};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).G(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(w){r[v]=w;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).G(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
t("Object.setPrototypeOf",function(a){return a||oa});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
t("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
t("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!z(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!z(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&z(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&z(k,g)&&z(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&z(k,g)&&z(k[g],this.f)?delete k[g][this.f]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return fa(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.g[l];if(m&&z(h.g,l))for(var n=0;n<m.length;n++){var r=m[n];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:m,index:n,o:r}}return{id:l,list:m,index:-1,o:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.o?l.o.value=k:(l.o={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.o),this.f.previous.next=l.o,this.f.previous=l.o,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.o&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.o.previous.next=h.o.next,h.o.next.previous=h.o.previous,h.o.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).o};
e.prototype.get=function(h){return(h=d(this,h).o)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)z(b,d)&&c.push([d,b[d]]);return c}});
t("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var A=this||self;function B(a,b){for(var c=a.split("."),d=b||A,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Oa(){}
function Pa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ra(a){return"function"==Pa(a)}
function Sa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ua(a){return Object.prototype.hasOwnProperty.call(a,Va)&&a[Va]||(a[Va]=++Wa)}
var Va="closure_uid_"+(1E9*Math.random()>>>0),Wa=0;function Xa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ya(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Za(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Za=Xa:Za=Ya;return Za.apply(null,arguments)}
var C=Date.now;function D(a,b){var c=a.split("."),d=A;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function E(a,b){function c(){}
c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.prototype.constructor=a}
function $a(a){return a}
;function ab(a){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
E(ab,Error);ab.prototype.name="CustomError";var gb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},hb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ib(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function jb(a){return Array.prototype.concat.apply([],arguments)}
function kb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function lb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function mb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function nb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ob(a){var b=pb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function qb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function rb(a){var b=Pa(a);if("object"==b||"array"==b){if(Ra(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=rb(a[c]);return b}return a}
var sb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<sb.length;f++)c=sb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var ub;var vb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},wb=/&/g,xb=/</g,yb=/>/g,zb=/"/g,Ab=/'/g,Bb=/\x00/g,Cb=/[\x00&<>"']/;var H;a:{var Db=A.navigator;if(Db){var Eb=Db.userAgent;if(Eb){H=Eb;break a}}H=""}function I(a){return-1!=H.indexOf(a)}
;function Fb(){}
;var Gb=I("Opera"),Hb=I("Trident")||I("MSIE"),Ib=I("Edge"),Jb=I("Gecko")&&!(-1!=H.toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),Kb=-1!=H.toLowerCase().indexOf("webkit")&&!I("Edge");function Tb(){var a=A.document;return a?a.documentMode:void 0}
var Ub;a:{var Vb="",Wb=function(){var a=H;if(Jb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ib)return/Edge\/([\d\.]+)/.exec(a);if(Hb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Kb)return/WebKit\/(\S+)/.exec(a);if(Gb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Wb&&(Vb=Wb?Wb[1]:"");if(Hb){var Xb=Tb();if(null!=Xb&&Xb>parseFloat(Vb)){Ub=String(Xb);break a}}Ub=Vb}var Yb=Ub,Zb;if(A.document&&Hb){var $b=Tb();Zb=$b?$b:parseInt(Yb,10)||void 0}else Zb=void 0;var ac=Zb;var bc=I("iPhone")&&!I("iPod")&&!I("iPad")||I("iPod"),cc=I("iPad");var dc={},ec=null;var J=window;function fc(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=gc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,hc[c])c=hc[c];else{c=String(c);if(!hc[c]){var f=/function\s+([^\(]+)/m.exec(c);hc[c]=f?f[1]:"[Anonymous]"}c=hc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function gc(a,b){b||(b={});b[ic(a)]=!0;var c=a.stack||"",d=a.Ca;d&&!b[ic(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=gc(d,b));return c}
function ic(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var hc={};function jc(a){this.f=a||{cookie:""}}
q=jc.prototype;q.isEnabled=function(){return navigator.cookieEnabled};
q.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Ja;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.U}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(C()+1E3*h)).toUTCString();this.f.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+e:"")};
q.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=vb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{U:0,path:b,domain:c});return d};
q.isEmpty=function(){return!this.f.cookie};
q.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=vb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var kc=new jc("undefined"==typeof document?null:document);function lc(a,b){this.width=a;this.height=b}
q=lc.prototype;q.clone=function(){return new lc(this.width,this.height)};
q.aspectRatio=function(){return this.width/this.height};
q.isEmpty=function(){return!(this.width*this.height)};
q.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
q.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
q.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function mc(a,b){var c,d;var e=document;e=b||e;if(e.querySelectorAll&&e.querySelector&&a)return e.querySelectorAll(a?"."+a:"");if(a&&e.getElementsByClassName){var f=e.getElementsByClassName(a);return f}f=e.getElementsByTagName("*");if(a){var g={};for(c=d=0;e=f[c];c++){var h=e.className,k;if(k="function"==typeof h.split)k=0<=gb(h.split(/\s+/),a);k&&(g[d++]=e)}g.length=d;return g}return f}
function nc(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function oc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var pc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qc(a){return a?decodeURI(a):a}
function K(a){return qc(a.match(pc)[3]||null)}
function rc(a){var b=a.match(pc);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function sc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)sc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function tc(a){var b=[],c;for(c in a)sc(c,a[c],b);return b.join("&")}
var uc=/#|$/;function vc(a){var b=wc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function xc(){var a=[];vc(function(b){a.push(b)});
return a}
var wc={pa:"allow-forms",qa:"allow-modals",ra:"allow-orientation-lock",sa:"allow-pointer-lock",ta:"allow-popups",ua:"allow-popups-to-escape-sandbox",va:"allow-presentation",wa:"allow-same-origin",xa:"allow-scripts",ya:"allow-top-navigation",za:"allow-top-navigation-by-user-activation"},yc=mb(function(){return xc()});
function zc(){var a=nc(),b={};G(yc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Ac(){this.h=this.h;this.i=this.i}
Ac.prototype.h=!1;Ac.prototype.dispose=function(){this.h||(this.h=!0,this.M())};
Ac.prototype.M=function(){if(this.i)for(;this.i.length;)this.i.shift()()};function L(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;var Bc={};function Cc(){}
function Dc(a,b){if(b!==Bc)throw Error("Bad secret");this.f=a}
sa(Dc,Cc);Dc.prototype.toString=function(){return this.f};new Dc("about:blank",Bc);new Dc("about:invalid#zTSz",Bc);var Ec=(new Date).getTime();function Fc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Gc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,p=0;64>p;p+=4)r[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],w=e[2],F=e[3],Ta=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var ia=F^v&(w^F);var Ca=1518500249}else ia=v^w^F,Ca=1859775393;else 60>p?(ia=v&w|F&(v|w),Ca=2400959708):(ia=v^w^F,Ca=3395469782);ia=((n<<5|n>>>27)&4294967295)+ia+Ta+Ca+r[p]&4294967295;Ta=F;F=w;w=(v<<30|v>>>2)&4294967295;v=n;n=ia}e[0]=e[0]+n&4294967295;e[1]=e[1]+
v&4294967295;e[2]=e[2]+w&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+Ta&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],v=0,w=n.length;v<w;++v)p.push(n.charCodeAt(v));n=p}r||(r=n.length);p=0;if(0==l)for(;p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<r;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var v=24;0<=v;v-=8)n[r++]=e[p]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,da:function(){for(var n=d(),r="",p=0;p<n.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return r}}}
;function Hc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],G(d,function(h){e.push(h)}),Ic(e.join(" "));
var f=[],g=[];G(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(h){e.push(h)});
a=Ic(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ic(a){var b=Gc();b.update(a);return b.da().toLowerCase()}
;function Jc(a){var b=Fc(String(A.location.href)),c;(c=A.__SAPISID||A.__APISID||A.__OVERRIDE_SID)?c=!0:(c=new jc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?A.__SAPISID:A.__APISID,c||(c=new jc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(A.location.href);return d&&c&&b?[b,Hc(Fc(d),c,a||null)].join(" "):null}return null}
;function Kc(){this.g=[];this.f=-1}
Kc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Kc.prototype.get=function(a){return!!this.g[a]};
function Lc(a){-1==a.f&&(a.f=hb(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Mc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Mc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Nc(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Oc(a){A.setTimeout(function(){throw a;},0)}
var Pc;function Qc(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=nc();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Za(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!I("Trident")&&!I("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.S;c.S=null;e()}};
return function(e){d.next={S:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function Rc(){this.g=this.f=null}
var Tc=new Mc(function(){return new Sc},function(a){a.reset()});
Rc.prototype.add=function(a,b){var c=Tc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Rc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Sc(){this.next=this.scope=this.f=null}
Sc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Sc.prototype.reset=function(){this.next=this.scope=this.f=null};function Uc(a,b){Vc||Wc();Xc||(Vc(),Xc=!0);Yc.add(a,b)}
var Vc;function Wc(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);Vc=function(){a.then(Zc)}}else Vc=function(){var b=Zc;
!Ra(A.setImmediate)||A.Window&&A.Window.prototype&&!I("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?(Pc||(Pc=Qc()),Pc(b)):A.setImmediate(b)}}
var Xc=!1,Yc=new Rc;function Zc(){for(var a;a=Yc.remove();){try{a.f.call(a.scope)}catch(b){Oc(b)}Nc(Tc,a)}Xc=!1}
;function td(){this.g=-1}
;function ud(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
E(ud,td);ud.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function vd(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
ud.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)vd(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){vd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){vd(this,e);f=0;break}}this.h=f;this.j+=b}};
ud.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;vd(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var wd="StopIteration"in A?A.StopIteration:{message:"StopIteration",stack:""};function xd(){}
xd.prototype.next=function(){throw wd;};
xd.prototype.B=function(){return this};
function yd(a){if(a instanceof xd)return a;if("function"==typeof a.B)return a.B(!1);if(Qa(a)){var b=0,c=new xd;c.next=function(){for(;;){if(b>=a.length)throw wd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function zd(a,b){if(Qa(a))try{G(a,b,void 0)}catch(c){if(c!==wd)throw c;}else{a=yd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==wd)throw c;}}}
function Ad(a){if(Qa(a))return kb(a);a=yd(a);var b=[];zd(a,function(c){b.push(c)});
return b}
;function Bd(a,b){this.h={};this.f=[];this.i=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Bd)for(c=Cd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Cd(a){Dd(a);return a.f.concat()}
q=Bd.prototype;q.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||Ed;Dd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Ed(a,b){return a===b}
q.isEmpty=function(){return 0==this.g};
q.clear=function(){this.h={};this.i=this.g=this.f.length=0};
q.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.i++,this.f.length>2*this.g&&Dd(this),!0):!1};
function Dd(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
q.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
q.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.i++);this.h[a]=b};
q.forEach=function(a,b){for(var c=Cd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
q.clone=function(){return new Bd(this)};
q.B=function(a){Dd(this);var b=0,c=this.i,d=this,e=new xd;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw wd;var f=d.f[b++];return a?f:d.h[f]};
return e};var Fd=A.JSON.stringify;function N(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=Oa)try{var b=this;a.call(void 0,function(c){Gd(b,2,c)},function(c){Gd(b,3,c)})}catch(c){Gd(this,3,c)}}
function Hd(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
Hd.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var Id=new Mc(function(){return new Hd},function(a){a.reset()});
function Jd(a,b,c){var d=Id.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Kd(a){if(a instanceof N)return a;var b=new N(Oa);Gd(b,2,a);return b}
function Ld(a){return new N(function(b,c){c(a)})}
N.prototype.then=function(a,b,c){return Md(this,Ra(a)?a:null,Ra(b)?b:null,c)};
N.prototype.$goog_Thenable=!0;function Nd(a,b){return Md(a,null,b,void 0)}
N.prototype.cancel=function(a){if(0==this.f){var b=new Od(a);Uc(function(){Pd(this,b)},this)}};
function Pd(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Pd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Qd(c),Rd(c,e,3,b)))}a.h=null}else Gd(a,3,b)}
function Sd(a,b){a.g||2!=a.f&&3!=a.f||Td(a);a.i?a.i.next=b:a.g=b;a.i=b}
function Md(a,b,c,d){var e=Jd(null,null,null);e.f=new N(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Od?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;Sd(a,e);return e.f}
N.prototype.A=function(a){this.f=0;Gd(this,2,a)};
N.prototype.F=function(a){this.f=0;Gd(this,3,a)};
function Gd(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.A,f=a.F;if(d instanceof N){Sd(d,Jd(e||Oa,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Sa(d))try{var k=d.then;if(Ra(k)){Ud(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.m=c,a.f=b,a.h=null,Td(a),3!=b||c instanceof Od||Vd(a,c))}}
function Ud(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Td(a){a.l||(a.l=!0,Uc(a.s,a))}
function Qd(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
N.prototype.s=function(){for(var a;a=Qd(this);)Rd(this,a,this.f,this.m);this.l=!1};
function Rd(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,Wd(b,c,d);else try{b.h?b.g.call(b.context):Wd(b,c,d)}catch(e){Xd.call(null,e)}Nc(Id,b)}
function Wd(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Vd(a,b){a.j=!0;Uc(function(){a.j&&Xd.call(null,b)})}
var Xd=Oc;function Od(a){ab.call(this,a)}
E(Od,ab);Od.prototype.name="cancel";function O(a){Ac.call(this);this.m=1;this.j=[];this.l=0;this.f=[];this.g={};this.s=!!a}
E(O,Ac);q=O.prototype;q.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.m;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.m=e+3;d.push(e);return e};
function Yd(a,b,c){var d=Zd;if(a=d.g[a]){var e=d.f;(a=ib(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.J(a)}}
q.J=function(a){var b=this.f[a];if(b){var c=this.g[b];if(0!=this.l)this.j.push(a),this.f[a+1]=Oa;else{if(c){var d=gb(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.f[a];delete this.f[a+1];delete this.f[a+2]}}return!!b};
q.P=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.s)for(e=0;e<c.length;e++){var g=c[e];$d(this.f[g+1],this.f[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.J(c)}}return 0!=e}return!1};
function $d(a,b,c){Uc(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.g[a];b&&(G(b,this.J,this),delete this.g[a])}else this.f.length=0,this.g={}};
q.M=function(){O.D.M.call(this);this.clear();this.j.length=0};function ae(a){this.f=a}
ae.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,Fd(b))};
ae.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ae.prototype.remove=function(a){this.f.remove(a)};function be(a){this.f=a}
E(be,ae);function ce(a){this.data=a}
function de(a){return void 0===a||a instanceof ce?a:new ce(a)}
be.prototype.set=function(a,b){be.D.set.call(this,a,de(b))};
be.prototype.g=function(a){a=be.D.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
be.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ee(a){this.f=a}
E(ee,be);ee.prototype.set=function(a,b,c){if(b=de(b)){if(c){if(c<C()){ee.prototype.remove.call(this,a);return}b.expiration=c}b.creation=C()}ee.D.set.call(this,a,b)};
ee.prototype.g=function(a){var b=ee.D.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<C()||c&&c>C())ee.prototype.remove.call(this,a);else return b}};function fe(){}
;function ge(){}
E(ge,fe);ge.prototype.clear=function(){var a=Ad(this.B(!0)),b=this;G(a,function(c){b.remove(c)})};function he(a){this.f=a}
E(he,ge);q=he.prototype;q.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
q.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
q.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.f.removeItem(a)};
q.B=function(a){var b=0,c=this.f,d=new xd;d.next=function(){if(b>=c.length)throw wd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
q.clear=function(){this.f.clear()};
q.key=function(a){return this.f.key(a)};function ie(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
E(ie,he);function je(a,b){this.g=a;this.f=null;if(Hb&&!(9<=Number(ac))){ke||(ke=new Bd);this.f=ke.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),ke.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
E(je,ge);var le={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ke=null;function me(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return le[b]})}
q=je.prototype;q.isAvailable=function(){return!!this.f};
q.set=function(a,b){this.f.setAttribute(me(a),b);ne(this)};
q.get=function(a){a=this.f.getAttribute(me(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.f.removeAttribute(me(a));ne(this)};
q.B=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new xd;d.next=function(){if(b>=c.length)throw wd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
q.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);ne(this)};
function ne(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function oe(a,b){this.g=a;this.f=b+"::"}
E(oe,ge);oe.prototype.set=function(a,b){this.g.set(this.f+a,b)};
oe.prototype.get=function(a){return this.g.get(this.f+a)};
oe.prototype.remove=function(a){this.g.remove(this.f+a)};
oe.prototype.B=function(a){var b=this.g.B(!0),c=this,d=new xd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};var Q=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};D("yt.config_",Q);function pe(a){var b=arguments;1<b.length?Q[b[0]]=b[1]:1===b.length&&Object.assign(Q,b[0])}
function R(a,b){return a in Q?Q[a]:b}
;var qe=[];function re(a){qe.forEach(function(b){return b(a)})}
function se(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){te(b),re(b)}}:a}
function te(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),pe("ERRORS",b))}
function ue(a){var b=B("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),pe("ERRORS",b))}
;var ve=0;D("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++ve});var we={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function xe(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in we||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
xe.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
xe.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
xe.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var pb=A.ytEventsEventsListeners||{};D("ytEventsEventsListeners",pb);var ye=A.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",ye);
function ze(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ob(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Sa(e[4])&&Sa(d)&&qb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Ae(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in pb){var c=pb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Be()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete pb[b]}}))}
var Be=mb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Ce(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=ze(a,b,c,d);if(!e){e=++ye.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new xe(h);if(!oc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new xe(h);
h.currentTarget=a;return c.call(a,h)};
g=se(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Be()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);pb[e]=[a,b,c,g,d]}}}
;function De(a,b){"function"===typeof a&&(a=se(a));return window.setTimeout(a,b)}
function Ee(a){"function"===typeof a&&(a=se(a));return window.setInterval(a,250)}
;function Fe(a){var b=[];nb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];G(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Ge(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?lb(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};te(h)}}}return b}
function He(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Ge(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=tc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;var Ie={};function Je(a){return Ie[a]||(Ie[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Ke={},Le=[],Zd=new O,Me={};function Ne(){for(var a=u(Le),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Oe(a,b){b||(b=document);var c=kb(b.getElementsByTagName("yt:"+a));var d="yt-"+a;var e=b||document;d=e.querySelectorAll&&e.querySelector?e.querySelectorAll("."+d):mc(d,b);d=kb(d);return jb(c,d)}
function S(a,b){var c;"yt:"==a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Je(b)]:a.getAttribute("data-"+b):null;return c}
function Pe(a,b){Zd.P.apply(Zd,arguments)}
;function Qe(a){this.g=a||{};this.h=this.f=!1;a=document.getElementById("www-widgetapi-script");if(this.f=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
function T(a,b){for(var c=[a.g,window.YTConfig||{}],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function Re(a,b,c){Se||(Se={},Ce(window,"message",Za(a.i,a)));Se[c]=b}
Qe.prototype.i=function(a){if(a.origin==T(this,"host")||a.origin==T(this,"host").replace(/^http:/,"https:")){try{var b=JSON.parse(a.data)}catch(c){return}this.h=!0;this.f||0!=a.origin.indexOf("https:")||(this.f=!0);if(a=Se[b.id])a.s=!0,a.s&&(G(a.m,a.R,a),a.m.length=0),a.aa(b)}};
var Se=null;function V(a){a=Te(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Ue(a,b){var c=Te(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Te(a){var b=R("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:R("EXPERIMENT_FLAGS",{})[a]}
;function Ve(){}
function We(a,b){return Xe(a,0,b)}
;function Ye(){}
sa(Ye,Ve);function Xe(a,b,c){isNaN(c)&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):De(a,c||0)}
Ye.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
Ye.f=void 0;Ye.g=function(){Ye.f||(Ye.f=new Ye)};
Ye.g();var Ze=A.ytPubsubPubsubInstance||new O,$e=A.ytPubsubPubsubSubscribedKeys||{},af=A.ytPubsubPubsubTopicToKeys||{},bf=A.ytPubsubPubsubIsSynchronous||{};O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.J;O.prototype.publish=O.prototype.P;O.prototype.clear=O.prototype.clear;D("ytPubsubPubsubInstance",Ze);D("ytPubsubPubsubTopicToKeys",af);D("ytPubsubPubsubIsSynchronous",bf);D("ytPubsubPubsubSubscribedKeys",$e);var cf=window,W=cf.ytcsi&&cf.ytcsi.now?cf.ytcsi.now:cf.performance&&cf.performance.timing&&cf.performance.now&&cf.performance.timing.navigationStart?function(){return cf.performance.timing.navigationStart+cf.performance.now()}:function(){return(new Date).getTime()};var df=Ue("initial_gel_batch_timeout",1E3),Mf=Math.pow(2,16)-1,Nf=null,Of=0,Pf=void 0,Qf=0,Rf=0,Sf=0,Tf=!0,Uf=A.ytLoggingTransportLogPayloadsQueue_||{};D("ytLoggingTransportLogPayloadsQueue_",Uf);var Vf=A.ytLoggingTransportGELQueue_||new Map;D("ytLoggingTransportGELQueue_",Vf);var Wf=A.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Wf);
function Xf(){window.clearTimeout(Qf);window.clearTimeout(Rf);Rf=0;Pf&&Pf.isReady()?(Yf(Vf),"log_event"in Uf&&Yf(Object.entries(Uf.log_event)),Vf.clear(),delete Uf.log_event):Zf()}
function Zf(){V("web_gel_timeout_cap")&&!Rf&&(Rf=De(Xf,6E4));window.clearTimeout(Qf);var a=R("LOGGING_BATCH_TIMEOUT",Ue("web_gel_debounce_ms",1E4));V("shorten_initial_gel_batch_timeout")&&Tf&&(a=df);Qf=De(Xf,a)}
function Yf(a){var b=Pf,c=Math.round(W());a=u(a);for(var d=a.next();!d.done;d=a.next()){var e=u(d.value);d=e.next().value;var f=e.next().value;e=rb({context:$f(b.f||ag())});e.events=f;(f=Wf[d])&&bg(e,d,f);delete Wf[d];cg(e,c);dg(b,"log_event",e,{retry:!0,onSuccess:function(){Of=Math.round(W()-c)}});
Tf=!1}}
function cg(a,b){a.requestTimeMs=String(b);V("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=R("EVENT_ID",void 0);if(c){var d=R("BATCH_CLIENT_COUNTER",void 0)||0;!d&&V("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Mf/2));d++;d>Mf&&(d=1);pe("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Nf&&Of&&V("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Nf,roundtripMs:String(Of)});Nf=c;Of=0}}
function bg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var eg=A.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",eg);function fg(a){var b=gg;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(hg(b),ig(b));b.ca_type="image";a&&(b.bid=a);return b}
function hg(a){var b={};b.dt=Ec;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?J:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!J.navigator&&"unknown"!==typeof J.navigator.javaEnabled&&!!J.navigator.javaEnabled&&J.navigator.javaEnabled();J.screen&&(b.u_h=J.screen.height,b.u_w=J.screen.width,b.u_ah=J.screen.availHeight,b.u_aw=J.screen.availWidth,b.u_cd=J.screen.colorDepth);
J.navigator&&J.navigator.plugins&&(b.u_nplug=J.navigator.plugins.length);J.navigator&&J.navigator.mimeTypes&&(b.u_nmime=J.navigator.mimeTypes.length);return b}
function ig(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(n){}try{var e=b.outerWidth;var f=b.outerHeight}catch(n){}try{var g=b.innerWidth;var h=b.innerHeight}catch(n){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new lc(l.clientWidth,l.clientHeight)).round()}catch(n){m=new lc(-12245933,-12245933)}k=m;m={};l=new Kc;A.SVGElement&&
A.document.createElementNS&&l.set(0);c=zc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);A.crypto&&A.crypto.subtle&&l.set(3);A.TextDecoder&&A.TextEncoder&&l.set(4);l=Lc(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!J.WebGLRenderingContext,m}
var gg=new function(){var a=window.document;this.f=window;this.g=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return Fe(fg(a))});C();var jg="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function kg(){if(!jg)return null;var a=jg();return"open"in a?a:null}
;var lg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},mg="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
ng=!1;
function og(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(pc)[1]||null,e=K(a);d&&e?(d=c,c=a.match(pc),d=d.match(pc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?K(c)==e&&(Number(c.match(pc)[4]||null)||null)==(Number(a.match(pc)[4]||null)||null):!0;d=V("web_ajax_ignore_global_headers_if_set");for(var f in lg)e=R(lg[f]),!e||!c&&K(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!K(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!K(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!K(a))b["X-YouTube-Ad-Signals"]=Fe(fg(void 0));return b}
function pg(a){var b=window.location.search,c=K(a),d=qc(a.match(pc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Ge(b),f={};G(mg,function(g){e[g]&&(f[g]=e[g])});
return He(a,f||{},!1)}
function qg(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=rg(a,b);var d=sg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||A;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.N&&b.N.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.X&&0<b.timeout&&(f=De(function(){e||(e=!0,window.clearTimeout(f),b.X.call(b.context||A))},b.timeout))}else tg(a,b)}
function tg(a,b){var c=b.format||"JSON";a=rg(a,b);var d=sg(a,b),e=!1,f=ug(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=vg(a,c,k,b.Da);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||
{};n=b.context||A;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.N&&b.N.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.H&&0<b.timeout){var g=b.H;var h=De(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},b.timeout)}}
function rg(a,b){b.Ha&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME",void 0),d=b.na;d&&(d[c]&&delete d[c],a=He(a,d||{},!0));return a}
function sg(a,b){var c=R("XSRF_FIELD_NAME",void 0),d=R("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.u,g=R("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.Ga||K(a)&&!b.withCredentials&&K(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.u&&b.u[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Ge(e),tb(e,f),e=b.Z&&"JSON"==b.Z?JSON.stringify(e):tc(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=!1;break a}f=!0}c=!f}!ng&&c&&"POST"!=b.method&&
(ng=!0,te(Error("AJAX request with postData should use POST")));return e}
function vg(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,ue(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?wg(a):null)e={},G(a.getElementsByTagName("*"),function(g){e[g.tagName]=xg(g)})}d&&yg(e);
return e}
function yg(a){if(Sa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===ub){var e=null;var f=A.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(g){A.console&&A.console.error(g.message)}ub=e}else ub=e}(e=ub)&&e.createHTML(d);a[c]=new Fb}else yg(a[b])}}
function wg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function xg(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ug(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&se(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=kg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;V("debug_forward_web_query_parameters")&&(a=pg(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=og(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function zg(){for(var a={},b=u(Object.entries(Ge(R("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function Ag(){return"INNERTUBE_API_KEY"in Q&&"INNERTUBE_API_VERSION"in Q}
function ag(){return{innertubeApiKey:R("INNERTUBE_API_KEY",void 0),innertubeApiVersion:R("INNERTUBE_API_VERSION",void 0),fa:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ga:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),ia:R("INNERTUBE_CONTEXT_HL",void 0),ha:R("INNERTUBE_CONTEXT_GL",void 0),ja:R("INNERTUBE_HOST_OVERRIDE",void 0)||"",la:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ka:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1)}}
function $f(a){a={client:{hl:a.ia,gl:a.ha,clientName:a.ga,clientVersion:a.innertubeContextClientVersion,configInfo:a.fa}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=R("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=R("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=R("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&(a.request={internalExperimentFlags:b});
R("DELEGATED_SESSION_ID")&&!V("pageid_as_header_web")&&(a.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});a.client=Object.assign(a.client,zg());return a}
function Bg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ba||R("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().Aa:b=Jc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=R("SESSION_INDEX",0),V("pageid_as_header_web")&&(d["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return d}
;function Cg(a){a=Object.assign({},a);delete a.Authorization;var b=Jc();if(b){var c=new ud;c.update(R("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Qa(b);void 0===c&&(c=0);if(!ec){ec={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));dc[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===ec[k]&&(ec[k]=h)}}}c=dc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
function Dg(a){a=Cg(a);var b=new ud;b.update(JSON.stringify(a,Object.keys(a).sort()));a=b.digest();b="";for(var c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}
;function Eg(){var a=new ie;(a=a.isAvailable()?new oe(a,"yt.innertube"):null)||(a=new je("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new ee(a):null;this.g=document.domain||window.location.hostname}
Eg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,C()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Fd(b))}catch(f){return}else e=escape(b);b=this.g;kc.set(""+a,e,{U:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Eg.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=kc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Eg.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;kc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Fg;function Gg(){Fg||(Fg=new Eg);return Fg}
function Hg(a,b,c,d){if(d)return null;d=Gg().get("nextId",!0)||1;var e=Gg().get("requests",!0)||{};e[d]={method:a,request:b,authState:Cg(c),requestTime:Math.round(W())};Gg().set("nextId",d+1,86400,!0);Gg().set("requests",e,86400,!0);return d}
function Ig(a){var b=Gg().get("requests",!0)||{};delete b[a];Gg().set("requests",b,86400,!0)}
function Jg(a){var b=Gg().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(W())-d.requestTime)){var e=d.authState,f=Cg(Bg(!1));qb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),dg(a,d.method,e,{}));delete b[c]}}Gg().set("requests",b,86400,!0)}}
;function Kg(){}
;var Lg=bc||cc;function Mg(a){if(!a)throw Error();throw a;}
function Ng(a){return a}
function Og(a){var b=this;this.g=a;this.state={status:"PENDING"};this.f=[];this.onRejected=[];this.g(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.f);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
function Pg(){return new Og(function(a){a(void 0)})}
Og.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Ng,e=null!==b&&void 0!==b?b:Mg;return new Og(function(f,g){"PENDING"===c.state.status?(c.f.push(function(){Qg(c,c,d,f,g)}),c.onRejected.push(function(){Rg(c,c,e,f,g)})):"FULFILLED"===c.state.status?Qg(c,c,d,f,g):"REJECTED"===c.state.status&&Rg(c,c,e,f,g)})};
function Sg(a,b){a.then(void 0,b)}
function Qg(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Og?Tg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Rg(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Og?Tg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Tg(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Og?Tg(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Ug(){var a=Error.call(this,"Transaction was aborted");this.message=a.message;"stack"in a&&(this.stack=a.stack);Object.setPrototypeOf(this,Ug.prototype)}
sa(Ug,Error);function Vg(a){return a instanceof DOMException?"VersionError"===a.name:"DOMError"in self&&a instanceof DOMError?"VersionError"===a.name:a instanceof Object&&"message"in a?"An attempt was made to open a database using a lower version than the existing version."===a.message:!1}
function Wg(a,b){return new Og(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function Xg(a){return new N(function(b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){a.removeEventListener("success",e);a.removeEventListener("error",d)}
a.addEventListener("success",e);a.addEventListener("error",d)})}
function X(a){return new Og(function(b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){a.removeEventListener("success",e);a.removeEventListener("error",d)}
a.addEventListener("success",e);a.addEventListener("error",d)})}
;function Yg(a){this.f=a}
q=Yg.prototype;q.add=function(a,b,c){return Zg(this,[a],"readwrite",function(d){return $g(d,a).add(b,c)})};
q.clear=function(a){return Zg(this,[a],"readwrite",function(b){return $g(b,a).clear()})};
q.close=function(){this.f.close()};
q.count=function(a,b){return Zg(this,[a],"readonly",function(c){return $g(c,a).count(b)})};
function ah(a,b,c){a=a.f.createObjectStore(b,c);return new bh(a)}
q["delete"]=function(a,b){return Zg(this,[a],"readwrite",function(c){return $g(c,a)["delete"](b)})};
q.get=function(a,b){return Zg(this,[a],"readwrite",function(c){return $g(c,a).get(b)})};
function ch(a,b){return Zg(a,["databases"],"readwrite",function(c){return dh($g(c,"databases"),b,void 0)})}
function Zg(a,b,c,d){c=void 0===c?"readonly":c;return new N(function(e,f){var g=a.f.transaction(b,c),h=new eh(g,b);Sg(d(h).then(function(k){Nd(fh(h).then(function(){e(k)}),function(l){f(l)})}),function(k){f(k)})})}
function bh(a){this.f=a}
q=bh.prototype;q.add=function(a,b){var c=b?this.f.add(a,b):this.f.add(a);return X(c)};
q.clear=function(){return X(this.f.clear()).then(function(){})};
q.count=function(a){a=a?this.f.count(a):this.f.count();return X(a)};
q["delete"]=function(a){return X(this.f["delete"](a))};
q.get=function(a){return X(this.f.get(a))};
q.index=function(a){return new gh(this.f.index(a))};
q.getName=function(){return this.f.name};
function dh(a,b,c){a=c?a.f.put(b,c):a.f.put(b);return X(a)}
function eh(a){var b=this;this.f=a;this.g=new Map;this.aborted=!1;this.done=new N(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.f.error)});
b.f.addEventListener("abort",function(){var e=b.f.error;e?("QuotaExceededError"===e.name?ue(Error("The current transaction exceeded its quota limitations.")):"UnknownError"===e.name&&ue(Error("The current transaction may have failed because of exceeding quota limitations.")),d(e)):d(new Ug)})})}
eh.prototype.abort=function(){this.f.abort();this.aborted=!0};
function fh(a){var b=a.f;b.commit&&!a.aborted&&b.commit();return a.done}
function $g(a,b){var c=a.f.objectStore(b),d=a.g.get(c);d||(d=new bh(c),a.g.set(c,d));return d}
function gh(a){this.f=a}
gh.prototype.count=function(a){a=a?this.f.count(a):this.f.count();return X(a)};
gh.prototype.get=function(a){return X(this.f.get(a))};
function hh(a,b,c){a=a.f.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return ih(a).then(function(d){return Wg(d,c)})}
function jh(a,b){this.request=a;this.f=b}
function ih(a){return X(a).then(function(b){return null===b?null:new jh(a,b)})}
jh.prototype["delete"]=function(){return X(this.f["delete"]()).then(function(){})};
jh.prototype.update=function(a){return X(this.f.update(a))};function kh(a,b,c){function d(){m||(m=new Yg(f.result));return m}
var e=eh;var f=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var g=c.blocked,h=c.blocking,k=c.f,l=c.upgrade,m;l&&f.addEventListener("upgradeneeded",function(n){if(null===n.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var r=d(),p=new e(f.transaction);l(r,n.oldVersion,n.newVersion,p)});
g&&f.addEventListener("blocked",function(){g()});
return Xg(f).then(function(n){h&&n.addEventListener("versionchange",function(){h(d())});
k&&n.addEventListener("close",function(){k()});
return d()})}
function lh(a,b,c){c=void 0===c?{}:c;return kh(a,b,c)}
;var mh,nh,oh=["getAll","getAllKeys","getKey","openKeyCursor"],ph=["getAll","getAllKeys","getKey","openKeyCursor"];function qh(){var a;if(a=Lg)a=/WebKit\/([0-9]+)/.exec(H),a=!!(a&&600<=parseInt(a[1],10));a&&(a=/WebKit\/([0-9]+)/.exec(H),a=!(a&&602<=parseInt(a[1],10)));return a&&!V("ytidb_allow_on_ios_safari_v8_and_v9")?!1:!!self.indexedDB}
function rh(){return new Promise(function(a){setTimeout(a,50)})}
function sh(){return L(this,function b(){var c,d,e;return y(b,function(f){switch(f.f){case 1:if(!qh())return f["return"](!1);wa(f);d=!1;return x(f,lh("yt-idb-test-do-not-use",void 0,{blocking:function(){d=!0;c&&(c.close(),c=void 0)}}),5);
case 5:return c=f.g,e=lh("yt-idb-test-do-not-use",c.f.version+1).then(function(g){try{g.close()}catch(h){}}),x(f,Promise.race([e,
rh()]),6);case 6:return f["return"](d);case 3:Ba(f);if(c)try{c.close()}catch(g){}Da(f);break;case 2:return xa(f),f["return"](!1)}})})}
function th(){return void 0!==mh?Kd(mh):new N(function(a){sh().then(function(b){mh=b;a(b)})})}
function uh(){return void 0!==nh?Kd(nh):th().then(function(a){if(!a)return!1;var b=u(oh);for(a=b.next();!a.done;a=b.next())if(!IDBObjectStore.prototype[a.value])return!1;b=u(ph);for(a=b.next();!a.done;a=b.next())if(!IDBIndex.prototype[a.value])return!1;return IDBObjectStore.prototype.getKey?!0:!1}).then(function(a){return nh=a})}
;var vh;function wh(){function a(b){b.close();vh=void 0}
vh||(vh=Nd(lh("YtIdbMeta",1,{blocking:a,upgrade:function(b,c){1>c&&ah(b,"databases",{keyPath:"actualName"})}}),function(b){return Vg(b)?lh("YtIdbMeta",void 0,{blocking:a}):Ld(b)}));
return vh}
function xh(a){return wh().then(function(b){return b.get("databases",a.actualName).then(function(c){if(c?a.actualName!==c.actualName||a.publicName!==c.publicName||a.userIdentifier!==c.userIdentifier||a.signedIn!==c.signedIn:1)return ch(b,a)})})}
function yh(a){return wh().then(function(b){return b["delete"]("databases",a)})}
;function zh(a){try{var b={actualName:"LogsDataBase",publicName:"LogsDataBase",userIdentifier:void 0,signedIn:!1}}catch(c){return Ld(c)}return Nd(xh(b).then(function(){return a(b)}),function(c){return Nd(yh(b.actualName),function(){}).then(function(){return Ld(c)})})}
function Ah(a,b){b=void 0===b?{}:b;return zh(function(c){return lh(c.actualName,a,b)})}
;var Bh;function Ch(){return L(this,function b(){return y(b,function(c){if(!Bh)try{Bh=Ah(1,{upgrade:function(d,e){1>e&&(ah(d,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).f.createIndex("newRequest",["status","authHash","timestamp"],{unique:!1}),ah(d,"sapisid"))}})}catch(d){if(!Vg(d))return te(d),c["return"](Promise.reject(d));
Bh=Ah()}return c["return"](Bh)})})}
function Dh(a){return L(this,function c(){var d,e,f;return y(c,function(g){if(1==g.f)return x(g,Eh(),2);if(3!=g.f)return d=g.g,x(g,Ch(),3);e=g.g;f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:d});return g["return"](e.add("LogsRequestsStore",f))})})}
function Fh(){return L(this,function b(){var c,d,e,f,g,h;return y(b,function(k){switch(k.f){case 1:return x(k,Eh(),2);case 2:return c=k.g,d=["NEW",c,0],e=["NEW",c,W()],f=IDBKeyRange.bound(d,e),x(k,Ch(),3);case 3:return g=k.g,h=void 0,x(k,Zg(g,["LogsRequestsStore"],"readwrite",function(l){return hh($g(l,"LogsRequestsStore").index("newRequest"),{query:f,direction:"prev"},function(m){m.f.value&&(h=m.f.value,h.status="QUEUED",m.update(h))})}),4);
case 4:return k["return"](h)}})})}
function Gh(a){return L(this,function c(){var d;return y(c,function(e){if(1==e.f)return x(e,Ch(),2);d=e.g;return e["return"](Zg(d,["LogsRequestsStore"],"readwrite",function(f){var g=$g(f,"LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",dh(g,h).then(function(){return h})})}))})})}
function Hh(a){return L(this,function c(){var d;return y(c,function(e){if(1==e.f)return x(e,Ch(),2);d=e.g;return e["return"](Zg(d,["LogsRequestsStore"],"readwrite",function(f){var g=$g(f,"LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,dh(g,h).then(function(){return h})):Pg()})}))})})}
function Ih(){return L(this,function b(){var c,d;return y(b,function(e){if(1==e.f)return x(e,Ch(),2);if(3!=e.f)return c=e.g,x(e,c.count("LogsRequestsStore"),3);d=e.g;return e["return"](!d)})})}
function Jh(a){return L(this,function c(){var d;return y(c,function(e){if(1==e.f)return x(e,Ch(),2);d=e.g;return e["return"](d["delete"]("LogsRequestsStore",a))})})}
function Eh(){return L(this,function b(){var c;return y(b,function(d){if(1==d.f){Kg.f||(Kg.f=new Kg);var e={};var f=Jc([]);f&&(e.Authorization=f,e["X-Goog-AuthUser"]=R("SESSION_INDEX",0),"INNERTUBE_HOST_OVERRIDE"in Q||(e["X-Origin"]=window.location.origin),V("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in Q&&(e["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));e=Kd(e);return x(d,e,2)}c=d.g;return d["return"](Dg(c))})})}
;var Kh=Ue("network_polling_interval",3E4);function Lh(){this.i=0;this.f=window.navigator.onLine;Mh(this);Nh(this)}
function Oh(){Lh.f||(Lh.f=new Lh);return Lh.f}
function Ph(a){var b=Qh,c=Rh;(new N(function(d){a.g=d})).then(function(){b();
c&&(a.h=c)});
Sh(a)}
function Nh(a){window.addEventListener("online",function(){a.f=!0;a.g&&a.g()})}
function Mh(a){window.addEventListener("offline",function(){a.f=!1;a.h&&a.h()})}
function Sh(a){a.i||(Th(a),window.navigator.onLine&&a.g&&a.g())}
function Th(a){a.i=We(function(){window.navigator.onLine?(!1===a.f&&te(Error("NetworkStatusManager missed online event.")),a.f=!0,a.g&&a.g()):(!0===a.f&&te(Error("NetworkStatusManager missed offline event.")),a.f=!1,a.h&&a.h());Th(a)},Kh)}
;var Uh=Ue("networkless_throttle_timeout")||100,Vh=Ue("networkless_retry_attempts")||1,Wh=0;function Xh(a,b){b=void 0===b?{}:b;Yh().then(function(c){if(c&&!V("networkless_bypass_write")){var d={url:a,options:b,timestamp:W(),status:"NEW",sendCount:0};Dh(d).then(function(e){d.id=e;e=Oh();e.f&&!V("networkless_always_offline")?Zh(d):Ph(e)})["catch"](function(e){Zh(d);
te(e)})}else tg(a,b)})}
function Qh(){Wh||(Wh=Xe(function(){Zh();Wh=0;Qh()},1,Uh))}
function Rh(){var a=Wh;if(!isNaN(a)){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}Wh=0}
function Zh(a){L(this,function c(){var d=this,e,f,g,h;return y(c,function(k){switch(k.f){case 1:e=d;if(!a)return x(k,Fh(),6);if(!a.id){k.v(3);break}return x(k,Gh(a.id),5);case 5:a=k.g;if(!a)throw Error("The request cannot be found in the database.");k.v(3);break;case 6:if(a=k.g){k.v(3);break}return x(k,Ih(),8);case 8:return(f=k.g)&&Rh(),k["return"]();case 3:if($h(a))g=a.options.onError?a.options.onError:function(){},h=a.options.onSuccess?a.options.onSuccess:function(){},a.options.onError=function(l,
m){return L(e,function r(){return y(r,function(p){if(1==p.f)return a&&a.id?a.sendCount<Vh?x(p,Hh(a.id),6):x(p,Jh(a.id),2):p.v(2);
2!=p.f&&(Wh||Ph(Oh()),g(l,m));g(l,m);p.f=0})})},a.options.onSuccess=function(l,m){return L(e,function r(){return y(r,function(p){if(1==p.f)return a&&a.id?x(p,Jh(a.id),2):p.v(2);
h(l,m);p.f=0})})},tg(a.url,a.options);
else if(ue(Error("Networkless Logging: Stored logs request expired age limit")),a.id)return x(k,Jh(a.id),0);k.v(0)}})})}
function $h(a){a=a.timestamp;return 2592E6<=W()-a?!1:!0}
function Yh(){return L(this,function b(){return y(b,function(c){return V("networkless_logging")?(2===Ue("networkless_ytidb_version")&&uh().then(function(d){return d}),c["return"](qh())):c["return"](!1)})})}
;function ai(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ha(u(c)))}
sa(ai,Error);function bi(a){var b=this;this.f=null;a?this.f=a:Ag()&&(this.f=ag());We(function(){Jg(b)},5E3)}
bi.prototype.isReady=function(){!this.f&&Ag()&&(this.f=ag());return!!this.f};
function dg(a,b,c,d){!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&ue(new ai("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new ai("innertube xhrclient not ready",b,c,d);te(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",u:c,Z:"JSON",H:function(){d.H()},
X:d.H,onSuccess:function(n,r){if(d.onSuccess)d.onSuccess(r)},
W:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,r){if(d.onError)d.onError(r)},
Ia:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.f.ja)&&(g=e);var h=a.f.la||!1,k=Bg(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.f.innertubeApiVersion+"/"+b;var l={alt:"json"};a.f.ka&&f.headers.Authorization||(l.key=a.f.innertubeApiKey);var m=He(""+g+e,l||{},!0);Yh().then(function(n){if(d.retry&&V("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(V("networkless_gel")&&!n||!V("networkless_gel"))var r=Hg(b,
c,k,h);if(r){var p=f.onSuccess,v=f.W;f.onSuccess=function(w,F){Ig(r);p(w,F)};
c.W=function(w,F){Ig(r);v(w,F)}}}try{V("use_fetch_for_op_xhr")?qg(m,f):V("networkless_gel")&&d.retry?(f.method="POST",Xh(m,f)):(f.method="POST",f.u||(f.u={}),tg(m,f))}catch(w){if("InvalidAccessError"==w.name)r&&(Ig(r),r=0),ue(Error("An extension is blocking network request."));
else throw w;}r&&We(function(){Jg(a)},5E3)})}
;var ci=[{V:function(a){return"Cannot read property '"+a.key+"'"},
O:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{V:function(a){return"Cannot call '"+a.key+"'"},
O:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}}];function di(){this.f=[];this.g=[]}
var ei;var fi=new Set,gi=0,hi=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function ii(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Y(a,b,c){this.l=this.f=this.g=null;this.j=Ua(this);this.h=0;this.s=!1;this.m=[];this.i=null;this.A=c;this.F={};c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?rc(a.src):"https://www.youtube.com"),this.g=new Qe(b),c||(b=ji(this,a),this.l=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.f=a,this.f.id||(this.f.id="widget"+Ua(this.f)),Ke[this.f.id]=this,window.postMessage){this.i=new O;ki(this);b=T(this.g,"events");for(var d in b)b.hasOwnProperty(d)&&
this.addEventListener(d,b[d]);for(var e in Me)li(this,e)}}
q=Y.prototype;q.setSize=function(a,b){this.f.width=a;this.f.height=b;return this};
q.ma=function(){return this.f};
q.aa=function(a){this.I(a.event,a)};
q.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.i.subscribe(a,c);mi(this,a);return this};
function li(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.A==c[0]&&mi(a,d)}}
q.destroy=function(){this.f.id&&(Ke[this.f.id]=null);var a=this.i;a&&"function"==typeof a.dispose&&a.dispose();if(this.l){a=this.f;var b=a.parentNode;b&&b.replaceChild(this.l,a)}else(a=this.f)&&a.parentNode&&a.parentNode.removeChild(a);Se&&(Se[this.j]=null);this.g=null;a=this.f;for(var c in pb)pb[c][0]==a&&Ae(c);this.l=this.f=null};
q.K=function(){return{}};
function ni(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.s?a.R(b):a.m.push(b)}
q.I=function(a,b){if(!this.i.h){var c={target:this,data:b};this.i.P(a,c);Pe(this.A+"."+a,c)}};
function ji(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var g=d[e].value;null!=g&&""!=g&&"null"!=g&&c.setAttribute(d[e].name,g)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+T(a.g,"title"));(d=T(a.g,"width"))&&c.setAttribute("width",d);(d=T(a.g,"height"))&&c.setAttribute("height",d);var h=a.K();h.enablejsapi=
window.postMessage?1:0;window.location.host&&(h.origin=window.location.protocol+"//"+window.location.host);h.widgetid=a.j;window.location.href&&G(["debugjs","debugcss"],function(k){var l=window.location.href;var m=l.search(uc);b:{var n=0;for(var r=k.length;0<=(n=l.indexOf(k,n))&&n<m;){var p=l.charCodeAt(n-1);if(38==p||63==p)if(p=l.charCodeAt(n+r),!p||61==p||38==p||35==p)break b;n+=r+1}n=-1}if(0>n)l=null;else{r=l.indexOf("&",n);if(0>r||r>m)r=m;n+=k.length+1;l=decodeURIComponent(l.substr(n,r-n).replace(/\+/g,
" "))}null!==l&&(h[k]=l)});
c.src=T(a.g,"host")+a.L()+"?"+tc(h);return c}
q.Y=function(){this.f&&this.f.contentWindow?this.R({event:"listening"}):window.clearInterval(this.h)};
function ki(a){Re(a.g,a,a.j);a.h=Ee(Za(a.Y,a));Ce(a.f,"load",Za(function(){window.clearInterval(this.h);this.h=Ee(Za(this.Y,this))},a))}
function mi(a,b){a.F[b]||(a.F[b]=!0,ni(a,"addEventListener",[b]))}
q.R=function(a){a.id=this.j;a.channel="widget";var b=Fd(a),c=this.g,d=rc(this.f.src||"");var e=0==d.indexOf("https:")?[d]:c.f?[d.replace("http:","https:")]:c.h?[d]:[d,d.replace("http:","https:")];if(this.f.contentWindow)for(var f=0;f<e.length;f++)try{this.f.contentWindow.postMessage(b,e[f])}catch(Ka){if(Ka.name&&"SyntaxError"==Ka.name){if(!(Ka.message&&0<Ka.message.indexOf("target origin ''"))){var g=void 0,h=void 0,k=Ka;h=void 0===h?{}:h;h.name=R("INNERTUBE_CONTEXT_CLIENT_NAME",1);h.version=R("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var l=h||{},m="WARNING";m=void 0===m?"ERROR":m;g=void 0===g?!1:g;if(k){if(V("console_log_js_exceptions")){var n=k,r=[];r.push("Name: "+n.name);r.push("Message: "+n.message);n.hasOwnProperty("params")&&r.push("Error Params: "+JSON.stringify(n.params));r.push("File name: "+n.fileName);r.push("Stacktrace: "+n.stack);window.console.log(r.join("\n"),n)}if((window&&window.yterr||g)&&!(5<=gi)&&0!==k.sampleWeight){var p=void 0,v=k,w=l,F=fc(v),Ta=F.message||"Unknown Error",ia=F.name||"UnknownError",
Ca=F.lineNumber||"Not available",ti=F.fileName||"Not available",ui=F.stack||v.f||"Not available";if(v.hasOwnProperty("args")&&v.args&&v.args.length)for(var pa=0,Lb=0;Lb<v.args.length;Lb++){var P=v.args[Lb],ya="params."+Lb;pa+=ya.length;if(P)if(Array.isArray(P)){for(var vi=w,$c=pa,bb=0;bb<P.length&&!(P[bb]&&($c+=ii(bb,P[bb],ya,vi),500<$c));bb++);pa=$c}else if("object"===typeof P){var Mb=void 0,wi=w,ad=pa;for(Mb in P)if(P[Mb]&&(ad+=ii(Mb,P[Mb],ya,wi),500<ad))break;pa=ad}else w[ya]=String(JSON.stringify(P)).substring(0,
500),pa+=w[ya].length;else w[ya]=String(JSON.stringify(P)).substring(0,500),pa+=w[ya].length;if(500<=pa)break}else if(v.hasOwnProperty("params")&&v.params){var Nb=v.params;if("object"===typeof v.params){var ef=0;for(p in Nb)if(Nb[p]){var ff="params."+p,gf=String(JSON.stringify(Nb[p])).substr(0,500);w[ff]=gf;ef+=ff.length+gf.length;if(500<ef)break}}else w.params=String(JSON.stringify(Nb)).substr(0,500)}navigator.vendor&&!w.hasOwnProperty("vendor")&&(w.vendor=navigator.vendor);var bd={message:Ta,name:ia,
lineNumber:Ca,fileName:ti,stack:ui,params:w},hf=Number(v.columnNumber);isNaN(hf)||(bd.lineNumber=bd.lineNumber+":"+hf);for(var qa,za=bd,jf=u(ci),cd=jf.next();!cd.done;cd=jf.next()){var dd=cd.value;if(dd.O[za.name])for(var kf=u(dd.O[za.name]),ed=kf.next();!ed.done;ed=kf.next()){var lf=ed.value,Ob=za.message.match(lf.regexp);if(Ob){za.params["error.original"]=Ob[0];for(var fd=lf.groups,mf={},La=0;La<fd.length;La++)mf[fd[La]]=Ob[La+1],za.params["error."+fd[La]]=Ob[La+1];za.message=dd.V(mf);break}}}qa=
za;window.yterr&&"function"===typeof window.yterr&&window.yterr(qa);if(!(fi.has(qa.message)||0<=qa.stack.indexOf("/YouTubeCenter.js")||0<=qa.stack.indexOf("/mytube.js"))){if(V("kevlar_gel_error_routing")){var Pb=void 0,nf=m,M=qa;a:{for(var of=u(hi),gd=of.next();!gd.done;gd=of.next()){var pf=H;if(pf&&0<=pf.toLowerCase().indexOf(gd.value.toLowerCase())){var qf=!0;break a}}qf=!1}if(!qf){var cb={stackTrace:M.stack};M.fileName&&(cb.filename=M.fileName);var da=M.lineNumber&&M.lineNumber.split?M.lineNumber.split(":"):
[];0!==da.length&&(1!==da.length||isNaN(Number(da[0]))?2!==da.length||isNaN(Number(da[0]))||isNaN(Number(da[1]))||(cb.lineNumber=Number(da[0]),cb.columnNumber=Number(da[1])):cb.lineNumber=Number(da[0]));var xi=M.message,yi=M.name;ei||(ei=new di);var rf=ei;a:{for(var sf=u(rf.g),hd=sf.next();!hd.done;hd=sf.next()){var tf=hd.value;if(M.message&&M.message.match(tf.f)){var id=tf.weight;break a}}for(var uf=u(rf.f),jd=uf.next();!jd.done;jd=uf.next()){var vf=jd.value;if(vf.f(M)){id=vf.weight;break a}}id=
1}var kd={level:"ERROR_LEVEL_UNKNOWN",message:xi,errorClassName:yi,sampleWeight:id};"ERROR"===nf?kd.level="ERROR_LEVEL_ERROR":"WARNING"===nf&&(kd.level="ERROR_LEVEL_WARNNING");var zi={isObfuscated:!0,browserStackInfo:cb},Qb={pageUrl:window.location.href,kvPairs:[]},ld=M.params;if(ld)for(var wf=u(Object.keys(ld)),md=wf.next();!md.done;md=wf.next()){var xf=md.value;Qb.kvPairs.push({key:"client."+xf,value:String(ld[xf])})}var yf=R("SERVER_NAME",void 0),zf=R("SERVER_VERSION",void 0);yf&&zf&&(Qb.kvPairs.push({key:"server.name",
value:yf}),Qb.kvPairs.push({key:"server.version",value:zf}));var Ai={errorMetadata:Qb,stackTrace:zi,logMessage:kd};Pb=void 0===Pb?{}:Pb;var Af=bi;R("ytLoggingEventsDefaultDisabled",!1)&&bi==bi&&(Af=null);var Bi=Af,U=Pb;U=void 0===U?{}:U;var db={};db.eventTimeMs=Math.round(U.timestamp||W());db.clientError=Ai;var Ci=String;if(U.timestamp)var Bf=-1;else{var Cf=B("_lact",window);if(null==Cf)var Df=-1;else{var Di=Cf;Df=Math.max(C()-Di,0)}Bf=Df}db.context={lastActivityMs:Ci(Bf)};if(V("log_sequence_info_on_gel_web")&&
U.ba){var Ei=db.context,eb=U.ba;eg[eb]=eb in eg?eg[eb]+1:0;Ei.sequence={index:eg[eb],groupKey:eb};U.Fa&&delete eg[U.ba]}var Fi=db,Rb=U.Ea,Ef=Bi,nd="";if(Rb){var Sb=Rb,od={};Sb.videoId?od.videoId=Sb.videoId:Sb.playlistId&&(od.playlistId=Sb.playlistId);Wf[Rb.token]=od;nd=Rb.token}var pd=Vf.get(nd)||[];Vf.set(nd,pd);pd.push(Fi);Ef&&(Pf=new Ef);var Gi=Ue("web_logging_max_batch")||100,Ff=W();pd.length>=Gi?Xf():10<=Ff-Sf&&(Zf(),Sf=Ff);Xf()}}var qd,Aa=qa,fb=Aa.params||{},ra={na:{a:"logerror",t:"jserror",
type:Aa.name,msg:Aa.message.substr(0,250),line:Aa.lineNumber,level:m,"client.name":fb.name},u:{url:R("PAGE_NAME",window.location.href),file:Aa.fileName},method:"POST"};fb.version&&(ra["client.version"]=fb.version);if(ra.u){Aa.stack&&(ra.u.stack=Aa.stack);for(var Gf=u(Object.keys(fb)),rd=Gf.next();!rd.done;rd=Gf.next()){var Hf=rd.value;ra.u["client."+Hf]=fb[Hf]}if(qd=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var If=u(Object.keys(qd)),sd=If.next();!sd.done;sd=If.next()){var Jf=sd.value;
ra.u[Jf]=qd[Jf]}var Kf=R("SERVER_NAME",void 0),Lf=R("SERVER_VERSION",void 0);Kf&&Lf&&(ra.u["server.name"]=Kf,ra.u["server.version"]=Lf)}tg(R("ECATCHER_REPORT_HOST","")+"/error_204",ra);fi.add(qa.message);gi++}}}}}else throw Ka;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function oi(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function pi(a){return 0===a.search("get")||0===a.search("is")}
;function Z(a,b){if(!a)throw Error("YouTube player element ID required.");var c={title:"video player",videoId:"",width:640,height:360};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"player");this.C={};this.playerInfo={}}
sa(Z,Y);q=Z.prototype;q.L=function(){return"/embed/"+T(this.g,"videoId")};
q.K=function(){var a=T(this.g,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=T(this.g,"embedConfig")){if(Sa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
q.aa=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Sa(a))for(var c in a)this.C[c]=a[c];break;case "infoDelivery":qi(this,a);break;case "initialDelivery":window.clearInterval(this.h);this.playerInfo={};this.C={};ri(this,a.apiInterface);qi(this,a);break;default:this.I(b,a)}};
function qi(a,b){if(Sa(b))for(var c in b)a.playerInfo[c]=b[c]}
function ri(a,b){G(b,function(c){this[c]||("getCurrentTime"==c?this[c]=function(){var d=this.playerInfo.currentTime;if(1==this.playerInfo.playerState){var e=(C()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:oi(c)?this[c]=function(){this.playerInfo={};
this.C={};ni(this,c,arguments);return this}:pi(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){ni(this,c,arguments);
return this})},a)}
q.getVideoEmbedCode=function(){var a=parseInt(T(this.g,"width"),10),b=parseInt(T(this.g,"height"),10),c=T(this.g,"host")+this.L();Cb.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(wb,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(xb,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(yb,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(zb,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(Ab,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(Bb,"&#0;")));return'<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
q.getOptions=function(a){return this.C.namespaces?a?this.C[a].options||[]:this.C.namespaces||[]:[]};
q.getOption=function(a,b){if(this.C.namespaces&&a&&b)return this.C[a][b]};
function si(a){if("iframe"!=a.tagName.toLowerCase()){var b=S(a,"videoid");b&&(b={videoId:b,width:S(a,"width"),height:S(a,"height")},new Z(a,b))}}
;function Hi(a,b){var c={title:"Thumbnail",videoId:"",width:120,height:68};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"thumbnail")}
sa(Hi,Y);Hi.prototype.L=function(){return"/embed/"+T(this.g,"videoId")};
Hi.prototype.K=function(){return{player:0,thumb_width:T(this.g,"thumbWidth"),thumb_height:T(this.g,"thumbHeight"),thumb_align:T(this.g,"thumbAlign")}};
Hi.prototype.I=function(a,b){Y.prototype.I.call(this,a,b?b.info:void 0)};
function Ii(a){if("iframe"!=a.tagName.toLowerCase()){var b=S(a,"videoid");if(b){b={videoId:b,events:{},width:S(a,"width"),height:S(a,"height"),thumbWidth:S(a,"thumb-width"),thumbHeight:S(a,"thumb-height"),thumbAlign:S(a,"thumb-align")};var c=S(a,"onclick");c&&(b.events.onClick=c);new Hi(a,b)}}}
;D("YT.PlayerState.UNSTARTED",-1);D("YT.PlayerState.ENDED",0);D("YT.PlayerState.PLAYING",1);D("YT.PlayerState.PAUSED",2);D("YT.PlayerState.BUFFERING",3);D("YT.PlayerState.CUED",5);D("YT.get",function(a){return Ke[a]});
D("YT.scan",Ne);D("YT.subscribe",function(a,b,c){Zd.subscribe(a,b,c);Me[a]=!0;for(var d in Ke)li(Ke[d],a)});
D("YT.unsubscribe",function(a,b,c){Yd(a,b,c)});
D("YT.Player",Z);D("YT.Thumbnail",Hi);Y.prototype.destroy=Y.prototype.destroy;Y.prototype.setSize=Y.prototype.setSize;Y.prototype.getIframe=Y.prototype.ma;Y.prototype.addEventListener=Y.prototype.addEventListener;Z.prototype.getVideoEmbedCode=Z.prototype.getVideoEmbedCode;Z.prototype.getOptions=Z.prototype.getOptions;Z.prototype.getOption=Z.prototype.getOption;Le.push(function(a){a=Oe("player",a);G(a,si)});
Le.push(function(){var a=Oe("thumbnail");G(a,Ii)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Ne();var Ji=A.onYTReady;Ji&&Ji();var Ki=A.onYouTubeIframeAPIReady;Ki&&Ki();var Li=A.onYouTubePlayerAPIReady;Li&&Li();}).call(this);
