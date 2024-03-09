/*! Picturefill - Responsive Images that work today.
*  Author: Scott Jehl, Filament Group, 2012 ( new proposal implemented by Shawn Jansepar )
*  License: MIT/GPLv2
*  Spec: http://picture.responsiveimages.org/
*/
(function(b,f,e){if(b.HTMLPictureElement){b.picturefill=function(){};
return
}f.createElement("picture");
var a={};
a.ns="picturefill";
(function(){a.srcsetSupported="srcset" in e;
a.sizesSupported="sizes" in e
})();
a.trim=function(g){return g.trim?g.trim():g.replace(/^\s+|\s+$/g,"")
};
a.endsWith=function(h,g){return h.endsWith?h.endsWith(g):h.indexOf(g,h.length-g.length)!==-1
};
a.restrictsMixedContent=function(){return b.location.protocol==="https:"
};
a.matchesMedia=function(g){return b.matchMedia&&b.matchMedia(g).matches
};
a.getDpr=function(){return(b.devicePixelRatio||1)
};
a.getWidthFromLength=function(g){g=g&&g.indexOf("%")>-1===false&&(parseFloat(g)>0||g.indexOf("calc(")>-1)?g:"100vw";
g=g.replace("vw","%");
if(!a.lengthEl){a.lengthEl=f.createElement("div");
f.documentElement.insertBefore(a.lengthEl,f.documentElement.firstChild)
}a.lengthEl.style.cssText="position: absolute; left: 0; width: "+g+";";
a.lengthEl.className="helper-from-picturefill-js";
if(a.lengthEl.offsetWidth<=0){a.lengthEl.style.cssText="width: 100%;"
}return a.lengthEl.offsetWidth
};
a.types={};
a.types["image/jpeg"]=true;
a.types["image/gif"]=true;
a.types["image/png"]=true;
a.types["image/svg+xml"]=f.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1");
a.types["image/webp"]=function(){var g="image/webp";
e.onerror=function(){a.types[g]=false;
c()
};
e.onload=function(){a.types[g]=e.width===1;
c()
};
e.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
};
a.verifyTypeSupport=function(h){var g=h.getAttribute("type");
if(g===null||g===""){return true
}else{if(typeof(a.types[g])==="function"){a.types[g]();
return"pending"
}else{return a.types[g]
}}};
a.parseSize=function(h){var g=/(\([^)]+\))?\s*(.+)/g.exec(h);
return{media:g&&g[1],length:g&&g[2]}
};
a.findWidthFromSourceSize=function(o){var n=a.trim(o).split(/\s*,\s*/),p;
for(var k=0,m=n.length;
k<m;
k++){var g=n[k],l=a.parseSize(g),j=l.length,h=l.media;
if(!j){continue
}if(!h||a.matchesMedia(h)){p=j;
break
}}return a.getWidthFromLength(p)
};
a.parseSrcset=function(l){var j=[];
while(l!==""){l=l.replace(/^\s+/g,"");
var m=l.search(/\s/g),h,k=null;
if(m!==-1){h=l.slice(0,m);
var i=h.slice(-1);
if(i===","||h===""){h=h.replace(/,+$/,"");
k=""
}l=l.slice(m+1);
if(k===null){var g=l.indexOf(",");
if(g!==-1){k=l.slice(0,g);
l=l.slice(g+1)
}else{k=l;
l=""
}}}else{h=l;
l=""
}if(h||k){j.push({url:h,descriptor:k})
}}return j
};
a.parseDescriptor=function(g,o){var r=o||"100vw",p=g&&g.replace(/(^\s+|\s+$)/g,""),j=a.findWidthFromSourceSize(r),n;
if(p){var h=p.split(" ");
for(var k=h.length+1;
k>=0;
k--){if(h[k]!==undefined){var q=h[k],l=q&&q.slice(q.length-1);
if((l==="h"||l==="w")&&!a.sizesSupported){n=parseFloat((parseInt(q,10)/j))
}else{if(l==="x"){var m=q&&parseFloat(q,10);
n=m&&!isNaN(m)?m:1
}}}}}return n||1
};
a.getCandidatesFromSourceSet=function(n,k){var m=a.parseSrcset(n),l=[];
for(var h=0,g=m.length;
h<g;
h++){var j=m[h];
l.push({url:j.url,resolution:a.parseDescriptor(j.descriptor,k)})
}return l
};
a.dodgeSrcset=function(g){if(g.srcset){g[a.ns].srcset=g.srcset;
g.removeAttribute("srcset")
}};
a.processSourceSet=function(g){var j=g.getAttribute("srcset"),h=g.getAttribute("sizes"),i=[];
if(g.nodeName.toUpperCase()==="IMG"&&g[a.ns]&&g[a.ns].srcset){j=g[a.ns].srcset
}if(j){i=a.getCandidatesFromSourceSet(j,h)
}return i
};
a.applyBestCandidate=function(m,g){var j,k,l;
m.sort(a.ascendingSort);
k=m.length;
l=m[k-1];
for(var h=0;
h<k;
h++){j=m[h];
if(j.resolution>=a.getDpr()){l=j;
break
}}if(l&&!a.endsWith(g.src,l.url)){if(a.restrictsMixedContent()&&l.url.substr(0,"http:".length).toLowerCase()==="http:"){if(typeof console!==undefined){console.warn("Blocked mixed content image "+l.url)
}}else{g.src=l.url;
g.currentSrc=g.src
}}};
a.ascendingSort=function(h,g){return h.resolution-g.resolution
};
a.removeVideoShim=function(j){var h=j.getElementsByTagName("video");
if(h.length){var i=h[0],g=i.getElementsByTagName("source");
while(g.length){j.insertBefore(g[0],i)
}i.parentNode.removeChild(i)
}};
a.getAllElements=function(){var i=[],l=f.getElementsByTagName("img");
for(var j=0,g=l.length;
j<g;
j++){var k=l[j];
if(k.parentNode.nodeName.toUpperCase()==="PICTURE"||(k.getAttribute("srcset")!==null)||k[a.ns]&&k[a.ns].srcset!==null){i.push(k)
}}return i
};
a.getMatch=function(n,m){var i=m.childNodes,o;
for(var l=0,p=i.length;
l<p;
l++){var h=i[l];
if(h.nodeType!==1){continue
}if(h===n){return o
}if(h.nodeName.toUpperCase()!=="SOURCE"){continue
}if(h.getAttribute("src")!==null&&typeof console!==undefined){console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.")
}var k=h.getAttribute("media");
if(!h.getAttribute("srcset")){continue
}if((!k||a.matchesMedia(k))){var g=a.verifyTypeSupport(h);
if(g===true){o=h;
break
}else{if(g==="pending"){return false
}}}}return o
};
function c(h){var g,k,n,p,m,o=h||{};
g=o.elements||a.getAllElements();
for(var l=0,j=g.length;
l<j;
l++){k=g[l];
n=k.parentNode;
p=undefined;
m=undefined;
if(!k[a.ns]){k[a.ns]={}
}if(!o.reevaluate&&k[a.ns].evaluated){continue
}if(n.nodeName.toUpperCase()==="PICTURE"){a.removeVideoShim(n);
p=a.getMatch(k,n);
if(p===false){continue
}}else{p=undefined
}if(n.nodeName.toUpperCase()==="PICTURE"||(k.srcset&&!a.srcsetSupported)||(!a.sizesSupported&&(k.srcset&&k.srcset.indexOf("w")>-1))){a.dodgeSrcset(k)
}if(p){m=a.processSourceSet(p);
a.applyBestCandidate(m,k)
}else{m=a.processSourceSet(k);
if(k.srcset===undefined||k[a.ns].srcset){a.applyBestCandidate(m,k)
}}k[a.ns].evaluated=true
}}function d(){c();
var g=setInterval(function(){c();
if(/^loaded|^i|^c/.test(f.readyState)){clearInterval(g);
return
}},250);
function h(){var i;
if(!b._picturefillWorking){b._picturefillWorking=true;
b.clearTimeout(i);
i=b.setTimeout(function(){c({reevaluate:true});
b._picturefillWorking=false
},60)
}}if(b.addEventListener){b.addEventListener("resize",h,false)
}else{if(b.attachEvent){b.attachEvent("onresize",h)
}}}d();
c._=a;
if(typeof module==="object"&&typeof module.exports==="object"){module.exports=c
}else{if(typeof define==="function"&&define.amd){define(function(){return c
})
}else{if(typeof b==="object"){b.picturefill=c
}}}})(this,this.document,new this.Image());
document.createElement("picture");
$("document").ready(function(){picturefill()
});