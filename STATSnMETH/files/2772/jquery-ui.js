/*! jQuery UI - v1.9.2 - 2012-11-23
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.slider.js, jquery.ui.sortable.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
 * Copyright (c) 2012 jQuery Foundation and other contributors Licensed MIT */
(function(b,f){var a=0,e=/^ui-id-\d+$/;
b.ui=b.ui||{};
if(b.ui.version){return
}b.extend(b.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});
b.fn.extend({_focus:b.fn.focus,focus:function(g,h){return typeof g==="number"?this.each(function(){var i=this;
setTimeout(function(){b(i).focus();
if(h){h.call(i)
}},g)
}):this._focus.apply(this,arguments)
},scrollParent:function(){var g;
if((b.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){g=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(b.css(this,"position"))&&(/(auto|scroll)/).test(b.css(this,"overflow")+b.css(this,"overflow-y")+b.css(this,"overflow-x"))
}).eq(0)
}else{g=this.parents().filter(function(){return(/(auto|scroll)/).test(b.css(this,"overflow")+b.css(this,"overflow-y")+b.css(this,"overflow-x"))
}).eq(0)
}return(/fixed/).test(this.css("position"))||!g.length?b(document):g
},zIndex:function(j){if(j!==f){return this.css("zIndex",j)
}if(this.length){var h=b(this[0]),g,i;
while(h.length&&h[0]!==document){g=h.css("position");
if(g==="absolute"||g==="relative"||g==="fixed"){i=parseInt(h.css("zIndex"),10);
if(!isNaN(i)&&i!==0){return i
}}h=h.parent()
}}return 0
},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++a)
}})
},removeUniqueId:function(){return this.each(function(){if(e.test(this.id)){b(this).removeAttr("id")
}})
}});
function d(i,g){var k,j,h,l=i.nodeName.toLowerCase();
if("area"===l){k=i.parentNode;
j=k.name;
if(!i.href||!j||k.nodeName.toLowerCase()!=="map"){return false
}h=b("img[usemap=#"+j+"]")[0];
return !!h&&c(h)
}return(/input|select|textarea|button|object/.test(l)?!i.disabled:"a"===l?i.href||g:g)&&c(i)
}function c(g){return b.expr.filters.visible(g)&&!b(g).parents().andSelf().filter(function(){return b.css(this,"visibility")==="hidden"
}).length
}b.extend(b.expr[":"],{data:b.expr.createPseudo?b.expr.createPseudo(function(g){return function(h){return !!b.data(h,g)
}
}):function(j,h,g){return !!b.data(j,g[3])
},focusable:function(g){return d(g,!isNaN(b.attr(g,"tabindex")))
},tabbable:function(i){var g=b.attr(i,"tabindex"),h=isNaN(g);
return(h||g>=0)&&d(i,!h)
}});
b(function(){var g=document.body,h=g.appendChild(h=document.createElement("div"));
h.offsetHeight;
b.extend(h.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});
b.support.minHeight=h.offsetHeight===100;
b.support.selectstart="onselectstart" in h;
g.removeChild(h).style.display="none"
});
if(!b("<a>").outerWidth(1).jquery){b.each(["Width","Height"],function(j,g){var h=g==="Width"?["Left","Right"]:["Top","Bottom"],k=g.toLowerCase(),m={innerWidth:b.fn.innerWidth,innerHeight:b.fn.innerHeight,outerWidth:b.fn.outerWidth,outerHeight:b.fn.outerHeight};
function l(o,n,i,p){b.each(h,function(){n-=parseFloat(b.css(o,"padding"+this))||0;
if(i){n-=parseFloat(b.css(o,"border"+this+"Width"))||0
}if(p){n-=parseFloat(b.css(o,"margin"+this))||0
}});
return n
}b.fn["inner"+g]=function(i){if(i===f){return m["inner"+g].call(this)
}return this.each(function(){b(this).css(k,l(this,i)+"px")
})
};
b.fn["outer"+g]=function(i,n){if(typeof i!=="number"){return m["outer"+g].call(this,i)
}return this.each(function(){b(this).css(k,l(this,i,true,n)+"px")
})
}
})
}if(b("<a>").data("a-b","a").removeData("a-b").data("a-b")){b.fn.removeData=(function(g){return function(h){if(arguments.length){return g.call(this,b.camelCase(h))
}else{return g.call(this)
}}
})(b.fn.removeData)
}(function(){var g=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];
b.ui.ie=g.length?true:false;
b.ui.ie6=parseFloat(g[1],10)===6
})();
b.fn.extend({disableSelection:function(){return this.bind((b.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(g){g.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}});
b.extend(b.ui,{plugin:{add:function(h,j,l){var g,k=b.ui[h].prototype;
for(g in l){k.plugins[g]=k.plugins[g]||[];
k.plugins[g].push([j,l[g]])
}},call:function(g,j,h){var k,l=g.plugins[j];
if(!l||!g.element[0].parentNode||g.element[0].parentNode.nodeType===11){return
}for(k=0;
k<l.length;
k++){if(g.options[l[k][0]]){l[k][1].apply(g.element,h)
}}}},contains:b.contains,hasScroll:function(j,h){if(b(j).css("overflow")==="hidden"){return false
}var g=(h&&h==="left")?"scrollLeft":"scrollTop",i=false;
if(j[g]>0){return true
}j[g]=1;
i=(j[g]>0);
j[g]=0;
return i
},isOverAxis:function(h,g,i){return(h>g)&&(h<(g+i))
},isOver:function(l,h,k,j,g,i){return b.ui.isOverAxis(l,k,g)&&b.ui.isOverAxis(h,j,i)
}})
})(jQuery);
(function(b,e){var a=0,d=Array.prototype.slice,c=b.cleanData;
b.cleanData=function(f){for(var g=0,h;
(h=f[g])!=null;
g++){try{b(h).triggerHandler("remove")
}catch(j){}}c(f)
};
b.widget=function(g,j,f){var m,l,i,k,h=g.split(".")[0];
g=g.split(".")[1];
m=h+"-"+g;
if(!f){f=j;
j=b.Widget
}b.expr[":"][m.toLowerCase()]=function(n){return !!b.data(n,m)
};
b[h]=b[h]||{};
l=b[h][g];
i=b[h][g]=function(n,o){if(!this._createWidget){return new i(n,o)
}if(arguments.length){this._createWidget(n,o)
}};
b.extend(i,l,{version:f.version,_proto:b.extend({},f),_childConstructors:[]});
k=new j();
k.options=b.widget.extend({},k.options);
b.each(f,function(o,n){if(b.isFunction(n)){f[o]=(function(){var p=function(){return j.prototype[o].apply(this,arguments)
},q=function(r){return j.prototype[o].apply(this,r)
};
return function(){var t=this._super,r=this._superApply,s;
this._super=p;
this._superApply=q;
s=n.apply(this,arguments);
this._super=t;
this._superApply=r;
return s
}
})()
}});
i.prototype=b.widget.extend(k,{widgetEventPrefix:l?k.widgetEventPrefix:g},f,{constructor:i,namespace:h,widgetName:g,widgetBaseClass:m,widgetFullName:m});
if(l){b.each(l._childConstructors,function(o,p){var n=p.prototype;
b.widget(n.namespace+"."+n.widgetName,i,p._proto)
});
delete l._childConstructors
}else{j._childConstructors.push(i)
}b.widget.bridge(g,i)
};
b.widget.extend=function(k){var g=d.call(arguments,1),j=0,f=g.length,h,i;
for(;
j<f;
j++){for(h in g[j]){i=g[j][h];
if(g[j].hasOwnProperty(h)&&i!==e){if(b.isPlainObject(i)){k[h]=b.isPlainObject(k[h])?b.widget.extend({},k[h],i):b.widget.extend({},i)
}else{k[h]=i
}}}}return k
};
b.widget.bridge=function(g,f){var h=f.prototype.widgetFullName||g;
b.fn[g]=function(k){var i=typeof k==="string",j=d.call(arguments,1),l=this;
k=!i&&j.length?b.widget.extend.apply(null,[k].concat(j)):k;
if(i){this.each(function(){var n,m=b.data(this,h);
if(!m){return b.error("cannot call methods on "+g+" prior to initialization; attempted to call method '"+k+"'")
}if(!b.isFunction(m[k])||k.charAt(0)==="_"){return b.error("no such method '"+k+"' for "+g+" widget instance")
}n=m[k].apply(m,j);
if(n!==m&&n!==e){l=n&&n.jquery?l.pushStack(n.get()):n;
return false
}})
}else{this.each(function(){var m=b.data(this,h);
if(m){m.option(k||{})._init()
}else{b.data(this,h,new f(k,this))
}})
}return l
}
};
b.Widget=function(){};
b.Widget._childConstructors=[];
b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(f,g){g=b(g||this.defaultElement||this)[0];
this.element=b(g);
this.uuid=a++;
this.eventNamespace="."+this.widgetName+this.uuid;
this.options=b.widget.extend({},this.options,this._getCreateOptions(),f);
this.bindings=b();
this.hoverable=b();
this.focusable=b();
if(g!==this){b.data(g,this.widgetName,this);
b.data(g,this.widgetFullName,this);
this._on(true,this.element,{remove:function(h){if(h.target===g){this.destroy()
}}});
this.document=b(g.style?g.ownerDocument:g.document||g);
this.window=b(this.document[0].defaultView||this.document[0].parentWindow)
}this._create();
this._trigger("create",null,this._getCreateEventData());
this._init()
},_getCreateOptions:b.noop,_getCreateEventData:b.noop,_create:b.noop,_init:b.noop,destroy:function(){this._destroy();
this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");
this.bindings.unbind(this.eventNamespace);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
},_destroy:b.noop,widget:function(){return this.element
},option:function(j,k){var f=j,l,h,g;
if(arguments.length===0){return b.widget.extend({},this.options)
}if(typeof j==="string"){f={};
l=j.split(".");
j=l.shift();
if(l.length){h=f[j]=b.widget.extend({},this.options[j]);
for(g=0;
g<l.length-1;
g++){h[l[g]]=h[l[g]]||{};
h=h[l[g]]
}j=l.pop();
if(k===e){return h[j]===e?null:h[j]
}h[j]=k
}else{if(k===e){return this.options[j]===e?null:this.options[j]
}f[j]=k
}}this._setOptions(f);
return this
},_setOptions:function(f){var g;
for(g in f){this._setOption(g,f[g])
}return this
},_setOption:function(f,g){this.options[f]=g;
if(f==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!g).attr("aria-disabled",g);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
}return this
},enable:function(){return this._setOption("disabled",false)
},disable:function(){return this._setOption("disabled",true)
},_on:function(i,h,g){var j,f=this;
if(typeof i!=="boolean"){g=h;
h=i;
i=false
}if(!g){g=h;
h=this.element;
j=this.widget()
}else{h=j=b(h);
this.bindings=this.bindings.add(h)
}b.each(g,function(p,o){function m(){if(!i&&(f.options.disabled===true||b(this).hasClass("ui-state-disabled"))){return
}return(typeof o==="string"?f[o]:o).apply(f,arguments)
}if(typeof o!=="string"){m.guid=o.guid=o.guid||m.guid||b.guid++
}var n=p.match(/^(\w+)\s*(.*)$/),l=n[1]+f.eventNamespace,k=n[2];
if(k){j.delegate(k,l,m)
}else{h.bind(l,m)
}})
},_off:function(g,f){f=(f||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
g.unbind(f).undelegate(f)
},_delay:function(i,h){function g(){return(typeof i==="string"?f[i]:i).apply(f,arguments)
}var f=this;
return setTimeout(g,h||0)
},_hoverable:function(f){this.hoverable=this.hoverable.add(f);
this._on(f,{mouseenter:function(g){b(g.currentTarget).addClass("ui-state-hover")
},mouseleave:function(g){b(g.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(f){this.focusable=this.focusable.add(f);
this._on(f,{focusin:function(g){b(g.currentTarget).addClass("ui-state-focus")
},focusout:function(g){b(g.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(f,g,h){var k,j,i=this.options[f];
h=h||{};
g=b.Event(g);
g.type=(f===this.widgetEventPrefix?f:this.widgetEventPrefix+f).toLowerCase();
g.target=this.element[0];
j=g.originalEvent;
if(j){for(k in j){if(!(k in g)){g[k]=j[k]
}}}this.element.trigger(g,h);
return !(b.isFunction(i)&&i.apply(this.element[0],[g].concat(h))===false||g.isDefaultPrevented())
}};
b.each({show:"fadeIn",hide:"fadeOut"},function(g,f){b.Widget.prototype["_"+g]=function(j,i,l){if(typeof i==="string"){i={effect:i}
}var k,h=!i?g:i===true||typeof i==="number"?f:i.effect||f;
i=i||{};
if(typeof i==="number"){i={duration:i}
}k=!b.isEmptyObject(i);
i.complete=l;
if(i.delay){j.delay(i.delay)
}if(k&&b.effects&&(b.effects.effect[h]||b.uiBackCompat!==false&&b.effects[h])){j[g](i)
}else{if(h!==g&&j[h]){j[h](i.duration,i.easing,l)
}else{j.queue(function(m){b(this)[g]();
if(l){l.call(j[0])
}m()
})
}}}
});
if(b.uiBackCompat!==false){b.Widget.prototype._getCreateOptions=function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]
}
}})(jQuery);
(function(b,c){var a=false;
b(document).mouseup(function(d){a=false
});
b.widget("ui.mouse",{version:"1.9.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var d=this;
this.element.bind("mousedown."+this.widgetName,function(e){return d._mouseDown(e)
}).bind("click."+this.widgetName,function(e){if(true===b.data(e.target,d.widgetName+".preventClickEvent")){b.removeData(e.target,d.widgetName+".preventClickEvent");
e.stopImmediatePropagation();
return false
}});
this.started=false
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);
if(this._mouseMoveDelegate){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
}},_mouseDown:function(f){if(a){return
}(this._mouseStarted&&this._mouseUp(f));
this._mouseDownEvent=f;
var e=this,g=(f.which===1),d=(typeof this.options.cancel==="string"&&f.target.nodeName?b(f.target).closest(this.options.cancel).length:false);
if(!g||d||!this._mouseCapture(f)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(f)&&this._mouseDelayMet(f)){this._mouseStarted=(this._mouseStart(f)!==false);
if(!this._mouseStarted){f.preventDefault();
return true
}}if(true===b.data(f.target,this.widgetName+".preventClickEvent")){b.removeData(f.target,this.widgetName+".preventClickEvent")
}this._mouseMoveDelegate=function(h){return e._mouseMove(h)
};
this._mouseUpDelegate=function(h){return e._mouseUp(h)
};
b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
f.preventDefault();
a=true;
return true
},_mouseMove:function(d){if(b.ui.ie&&!(document.documentMode>=9)&&!d.button){return this._mouseUp(d)
}if(this._mouseStarted){this._mouseDrag(d);
return d.preventDefault()
}if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,d)!==false);
(this._mouseStarted?this._mouseDrag(d):this._mouseUp(d))
}return !this._mouseStarted
},_mouseUp:function(d){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
if(d.target===this._mouseDownEvent.target){b.data(d.target,this.widgetName+".preventClickEvent",true)
}this._mouseStop(d)
}return false
},_mouseDistanceMet:function(d){return(Math.max(Math.abs(this._mouseDownEvent.pageX-d.pageX),Math.abs(this._mouseDownEvent.pageY-d.pageY))>=this.options.distance)
},_mouseDelayMet:function(d){return this.mouseDelayMet
},_mouseStart:function(d){},_mouseDrag:function(d){},_mouseStop:function(d){},_mouseCapture:function(d){return true
}})
})(jQuery);
(function(e,c){e.ui=e.ui||{};
var i,j=Math.max,n=Math.abs,l=Math.round,d=/left|center|right/,g=/top|center|bottom/,a=/[\+\-]\d+%?/,k=/^\w+/,b=/%$/,f=e.fn.position;
function m(q,p,o){return[parseInt(q[0],10)*(b.test(q[0])?p/100:1),parseInt(q[1],10)*(b.test(q[1])?o/100:1)]
}function h(o,p){return parseInt(e.css(o,p),10)||0
}e.position={scrollbarWidth:function(){if(i!==c){return i
}var p,o,r=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),q=r.children()[0];
e("body").append(r);
p=q.offsetWidth;
r.css("overflow","scroll");
o=q.offsetWidth;
if(p===o){o=r[0].clientWidth
}r.remove();
return(i=p-o)
},getScrollInfo:function(s){var r=s.isWindow?"":s.element.css("overflow-x"),q=s.isWindow?"":s.element.css("overflow-y"),p=r==="scroll"||(r==="auto"&&s.width<s.element[0].scrollWidth),o=q==="scroll"||(q==="auto"&&s.height<s.element[0].scrollHeight);
return{width:p?e.position.scrollbarWidth():0,height:o?e.position.scrollbarWidth():0}
},getWithinInfo:function(p){var q=e(p||window),o=e.isWindow(q[0]);
return{element:q,isWindow:o,offset:q.offset()||{left:0,top:0},scrollLeft:q.scrollLeft(),scrollTop:q.scrollTop(),width:o?q.width():q.outerWidth(),height:o?q.height():q.outerHeight()}
}};
e.fn.position=function(y){if(!y||!y.of){return f.apply(this,arguments)
}y=e.extend({},y);
var z,v,s,x,r,u=e(y.of),q=e.position.getWithinInfo(y.within),o=e.position.getScrollInfo(q),t=u[0],w=(y.collision||"flip").split(" "),p={};
if(t.nodeType===9){v=u.width();
s=u.height();
x={top:0,left:0}
}else{if(e.isWindow(t)){v=u.width();
s=u.height();
x={top:u.scrollTop(),left:u.scrollLeft()}
}else{if(t.preventDefault){y.at="left top";
v=s=0;
x={top:t.pageY,left:t.pageX}
}else{v=u.outerWidth();
s=u.outerHeight();
x=u.offset()
}}}r=e.extend({},x);
e.each(["my","at"],function(){var C=(y[this]||"").split(" "),B,A;
if(C.length===1){C=d.test(C[0])?C.concat(["center"]):g.test(C[0])?["center"].concat(C):["center","center"]
}C[0]=d.test(C[0])?C[0]:"center";
C[1]=g.test(C[1])?C[1]:"center";
B=a.exec(C[0]);
A=a.exec(C[1]);
p[this]=[B?B[0]:0,A?A[0]:0];
y[this]=[k.exec(C[0])[0],k.exec(C[1])[0]]
});
if(w.length===1){w[1]=w[0]
}if(y.at[0]==="right"){r.left+=v
}else{if(y.at[0]==="center"){r.left+=v/2
}}if(y.at[1]==="bottom"){r.top+=s
}else{if(y.at[1]==="center"){r.top+=s/2
}}z=m(p.at,v,s);
r.left+=z[0];
r.top+=z[1];
return this.each(function(){var B,K,D=e(this),F=D.outerWidth(),C=D.outerHeight(),E=h(this,"marginLeft"),A=h(this,"marginTop"),J=F+E+h(this,"marginRight")+o.width,I=C+A+h(this,"marginBottom")+o.height,G=e.extend({},r),H=m(p.my,D.outerWidth(),D.outerHeight());
if(y.my[0]==="right"){G.left-=F
}else{if(y.my[0]==="center"){G.left-=F/2
}}if(y.my[1]==="bottom"){G.top-=C
}else{if(y.my[1]==="center"){G.top-=C/2
}}G.left+=H[0];
G.top+=H[1];
if(!e.support.offsetFractions){G.left=l(G.left);
G.top=l(G.top)
}B={marginLeft:E,marginTop:A};
e.each(["left","top"],function(M,L){if(e.ui.position[w[M]]){e.ui.position[w[M]][L](G,{targetWidth:v,targetHeight:s,elemWidth:F,elemHeight:C,collisionPosition:B,collisionWidth:J,collisionHeight:I,offset:[z[0]+H[0],z[1]+H[1]],my:y.my,at:y.at,within:q,elem:D})
}});
if(e.fn.bgiframe){D.bgiframe()
}if(y.using){K=function(O){var Q=x.left-G.left,N=Q+v-F,P=x.top-G.top,M=P+s-C,L={target:{element:u,left:x.left,top:x.top,width:v,height:s},element:{element:D,left:G.left,top:G.top,width:F,height:C},horizontal:N<0?"left":Q>0?"right":"center",vertical:M<0?"top":P>0?"bottom":"middle"};
if(v<F&&n(Q+N)<v){L.horizontal="center"
}if(s<C&&n(P+M)<s){L.vertical="middle"
}if(j(n(Q),n(N))>j(n(P),n(M))){L.important="horizontal"
}else{L.important="vertical"
}y.using.call(this,O,L)
}
}D.offset(e.extend(G,{using:K}))
})
};
e.ui.position={fit:{left:function(s,r){var q=r.within,u=q.isWindow?q.scrollLeft:q.offset.left,w=q.width,t=s.left-r.collisionPosition.marginLeft,v=u-t,p=t+r.collisionWidth-w-u,o;
if(r.collisionWidth>w){if(v>0&&p<=0){o=s.left+v+r.collisionWidth-w-u;
s.left+=v-o
}else{if(p>0&&v<=0){s.left=u
}else{if(v>p){s.left=u+w-r.collisionWidth
}else{s.left=u
}}}}else{if(v>0){s.left+=v
}else{if(p>0){s.left-=p
}else{s.left=j(s.left-t,s.left)
}}}},top:function(r,q){var p=q.within,v=p.isWindow?p.scrollTop:p.offset.top,w=q.within.height,t=r.top-q.collisionPosition.marginTop,u=v-t,s=t+q.collisionHeight-w-v,o;
if(q.collisionHeight>w){if(u>0&&s<=0){o=r.top+u+q.collisionHeight-w-v;
r.top+=u-o
}else{if(s>0&&u<=0){r.top=v
}else{if(u>s){r.top=v+w-q.collisionHeight
}else{r.top=v
}}}}else{if(u>0){r.top+=u
}else{if(s>0){r.top-=s
}else{r.top=j(r.top-t,r.top)
}}}}},flip:{left:function(u,t){var s=t.within,y=s.offset.left+s.scrollLeft,B=s.width,q=s.isWindow?s.scrollLeft:s.offset.left,v=u.left-t.collisionPosition.marginLeft,z=v-q,p=v+t.collisionWidth-B-q,x=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,A=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,r=-2*t.offset[0],o,w;
if(z<0){o=u.left+x+A+r+t.collisionWidth-B-y;
if(o<0||o<n(z)){u.left+=x+A+r
}}else{if(p>0){w=u.left-t.collisionPosition.marginLeft+x+A+r-q;
if(w>0||n(w)<p){u.left+=x+A+r
}}}},top:function(t,s){var r=s.within,A=r.offset.top+r.scrollTop,B=r.height,o=r.isWindow?r.scrollTop:r.offset.top,v=t.top-s.collisionPosition.marginTop,x=v-o,u=v+s.collisionHeight-B-o,y=s.my[1]==="top",w=y?-s.elemHeight:s.my[1]==="bottom"?s.elemHeight:0,C=s.at[1]==="top"?s.targetHeight:s.at[1]==="bottom"?-s.targetHeight:0,q=-2*s.offset[1],z,p;
if(x<0){p=t.top+w+C+q+s.collisionHeight-B-A;
if((t.top+w+C+q)>x&&(p<0||p<n(x))){t.top+=w+C+q
}}else{if(u>0){z=t.top-s.collisionPosition.marginTop+w+C+q-o;
if((t.top+w+C+q)>u&&(z>0||n(z)<u)){t.top+=w+C+q
}}}}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments);
e.ui.position.fit.left.apply(this,arguments)
},top:function(){e.ui.position.flip.top.apply(this,arguments);
e.ui.position.fit.top.apply(this,arguments)
}}};
(function(){var s,u,p,r,q,o=document.getElementsByTagName("body")[0],t=document.createElement("div");
s=document.createElement(o?"div":"body");
p={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};
if(o){e.extend(p,{position:"absolute",left:"-1000px",top:"-1000px"})
}for(q in p){s.style[q]=p[q]
}s.appendChild(t);
u=o||document.documentElement;
u.insertBefore(s,u.firstChild);
t.style.cssText="position: absolute; left: 10.7432222px;";
r=e(t).offset().left;
e.support.offsetFractions=r>10&&r<11;
s.innerHTML="";
u.removeChild(s)
})();
if(e.uiBackCompat!==false){(function(p){var o=p.fn.position;
p.fn.position=function(r){if(!r||!r.offset){return o.call(this,r)
}var s=r.offset.split(" "),q=r.at.split(" ");
if(s.length===1){s[1]=s[0]
}if(/^\d/.test(s[0])){s[0]="+"+s[0]
}if(/^\d/.test(s[1])){s[1]="+"+s[1]
}if(q.length===1){if(/left|center|right/.test(q[0])){q[1]="center"
}else{q[1]=q[0];
q[0]="center"
}}return o.call(this,p.extend(r,{at:q[0]+s[0]+" "+q[1]+s[1],offset:c}))
}
}(jQuery))
}}(jQuery));
(function(d,e){var b=0,c={},a={};
c.height=c.paddingTop=c.paddingBottom=c.borderTopWidth=c.borderBottomWidth="hide";
a.height=a.paddingTop=a.paddingBottom=a.borderTopWidth=a.borderBottomWidth="show";
d.widget("ui.accordion",{version:"1.9.2",options:{active:0,animate:{},collapsible:false,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var g=this.accordionId="ui-accordion-"+(this.element.attr("id")||++b),f=this.options;
this.prevShow=this.prevHide=d();
this.element.addClass("ui-accordion ui-widget ui-helper-reset");
this.headers=this.element.find(f.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
this._hoverable(this.headers);
this._focusable(this.headers);
this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide();
if(!f.collapsible&&(f.active===false||f.active==null)){f.active=0
}if(f.active<0){f.active+=this.headers.length
}this.active=this._findActive(f.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top");
this.active.next().addClass("ui-accordion-content-active").show();
this._createIcons();
this.refresh();
this.element.attr("role","tablist");
this.headers.attr("role","tab").each(function(l){var m=d(this),k=m.attr("id"),h=m.next(),j=h.attr("id");
if(!k){k=g+"-header-"+l;
m.attr("id",k)
}if(!j){j=g+"-panel-"+l;
h.attr("id",j)
}m.attr("aria-controls",j);
h.attr("aria-labelledby",k)
}).next().attr("role","tabpanel");
this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide();
if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)
}else{this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"})
}this._on(this.headers,{keydown:"_keydown"});
this._on(this.headers.next(),{keydown:"_panelKeyDown"});
this._setupEvents(f.event)
},_getCreateEventData:function(){return{header:this.active,content:!this.active.length?d():this.active.next()}
},_createIcons:function(){var f=this.options.icons;
if(f){d("<span>").addClass("ui-accordion-header-icon ui-icon "+f.header).prependTo(this.headers);
this.active.children(".ui-accordion-header-icon").removeClass(f.header).addClass(f.activeHeader);
this.headers.addClass("ui-accordion-icons")
}},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
},_destroy:function(){var f;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")
}});
this._destroyIcons();
f=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")
}});
if(this.options.heightStyle!=="content"){f.css("height","")
}},_setOption:function(f,g){if(f==="active"){this._activate(g);
return
}if(f==="event"){if(this.options.event){this._off(this.headers,this.options.event)
}this._setupEvents(g)
}this._super(f,g);
if(f==="collapsible"&&!g&&this.options.active===false){this._activate(0)
}if(f==="icons"){this._destroyIcons();
if(g){this._createIcons()
}}if(f==="disabled"){this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!g)
}},_keydown:function(i){if(i.altKey||i.ctrlKey){return
}var j=d.ui.keyCode,h=this.headers.length,f=this.headers.index(i.target),g=false;
switch(i.keyCode){case j.RIGHT:case j.DOWN:g=this.headers[(f+1)%h];
break;
case j.LEFT:case j.UP:g=this.headers[(f-1+h)%h];
break;
case j.SPACE:case j.ENTER:this._eventHandler(i);
break;
case j.HOME:g=this.headers[0];
break;
case j.END:g=this.headers[h-1];
break
}if(g){d(i.target).attr("tabIndex",-1);
d(g).attr("tabIndex",0);
g.focus();
i.preventDefault()
}},_panelKeyDown:function(f){if(f.keyCode===d.ui.keyCode.UP&&f.ctrlKey){d(f.currentTarget).prev().focus()
}},refresh:function(){var h,i,f=this.options.heightStyle,g=this.element.parent();
if(f==="fill"){if(!d.support.minHeight){i=g.css("overflow");
g.css("overflow","hidden")
}h=g.height();
this.element.siblings(":visible").each(function(){var k=d(this),j=k.css("position");
if(j==="absolute"||j==="fixed"){return
}h-=k.outerHeight(true)
});
if(i){g.css("overflow",i)
}this.headers.each(function(){h-=d(this).outerHeight(true)
});
this.headers.next().each(function(){d(this).height(Math.max(0,h-d(this).innerHeight()+d(this).height()))
}).css("overflow","auto")
}else{if(f==="auto"){h=0;
this.headers.next().each(function(){h=Math.max(h,d(this).css("height","").height())
}).height(h)
}}},_activate:function(f){var g=this._findActive(f)[0];
if(g===this.active[0]){return
}g=g||this.active[0];
this._eventHandler({target:g,currentTarget:g,preventDefault:d.noop})
},_findActive:function(f){return typeof f==="number"?this.headers.eq(f):d()
},_setupEvents:function(g){var f={};
if(!g){return
}d.each(g.split(" "),function(i,h){f[h]="_eventHandler"
});
this._on(this.headers,f)
},_eventHandler:function(f){var n=this.options,i=this.active,j=d(f.currentTarget),l=j[0]===i[0],g=l&&n.collapsible,h=g?d():j.next(),k=i.next(),m={oldHeader:i,oldPanel:k,newHeader:g?d():j,newPanel:h};
f.preventDefault();
if((l&&!n.collapsible)||(this._trigger("beforeActivate",f,m)===false)){return
}n.active=g?false:this.headers.index(j);
this.active=l?d():j;
this._toggle(m);
i.removeClass("ui-accordion-header-active ui-state-active");
if(n.icons){i.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header)
}if(!l){j.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
if(n.icons){j.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader)
}j.next().addClass("ui-accordion-content-active")
}},_toggle:function(h){var f=h.newPanel,g=this.prevShow.length?this.prevShow:h.oldPanel;
this.prevShow.add(this.prevHide).stop(true,true);
this.prevShow=f;
this.prevHide=g;
if(this.options.animate){this._animate(f,g,h)
}else{g.hide();
f.show();
this._toggleComplete(h)
}g.attr({"aria-expanded":"false","aria-hidden":"true"});
g.prev().attr("aria-selected","false");
if(f.length&&g.length){g.prev().attr("tabIndex",-1)
}else{if(f.length){this.headers.filter(function(){return d(this).attr("tabIndex")===0
}).attr("tabIndex",-1)
}}f.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})
},_animate:function(f,n,j){var m,l,i,k=this,o=0,p=f.length&&(!n.length||(f.index()<n.index())),h=this.options.animate||{},q=p&&h.down||h,g=function(){k._toggleComplete(j)
};
if(typeof q==="number"){i=q
}if(typeof q==="string"){l=q
}l=l||q.easing||h.easing;
i=i||q.duration||h.duration;
if(!n.length){return f.animate(a,i,l,g)
}if(!f.length){return n.animate(c,i,l,g)
}m=f.show().outerHeight();
n.animate(c,{duration:i,easing:l,step:function(r,s){s.now=Math.round(r)
}});
f.hide().animate(a,{duration:i,easing:l,complete:g,step:function(r,s){s.now=Math.round(r);
if(s.prop!=="height"){o+=s.now
}else{if(k.options.heightStyle!=="content"){s.now=Math.round(m-n.outerHeight()-o);
o=0
}}}})
},_toggleComplete:function(g){var f=g.oldPanel;
f.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
if(f.length){f.parent()[0].className=f.parent()[0].className
}this._trigger("activate",null,g)
}});
if(d.uiBackCompat!==false){(function(g,f){g.extend(f.options,{navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()
}});
var h=f._create;
f._create=function(){if(this.options.navigation){var j=this,l=this.element.find(this.options.header),i=l.next(),k=l.add(i).find("a").filter(this.options.navigationFilter)[0];
if(k){l.add(i).each(function(m){if(g.contains(this,k)){j.options.active=Math.floor(m/2);
return false
}})
}}h.call(this)
}
}(jQuery,jQuery.ui.accordion.prototype));
(function(h,f){h.extend(f.options,{heightStyle:null,autoHeight:true,clearStyle:false,fillSpace:false});
var i=f._create,g=f._setOption;
h.extend(f,{_create:function(){this.options.heightStyle=this.options.heightStyle||this._mergeHeightStyle();
i.call(this)
},_setOption:function(j){if(j==="autoHeight"||j==="clearStyle"||j==="fillSpace"){this.options.heightStyle=this._mergeHeightStyle()
}g.apply(this,arguments)
},_mergeHeightStyle:function(){var j=this.options;
if(j.fillSpace){return"fill"
}if(j.clearStyle){return"content"
}if(j.autoHeight){return"auto"
}}})
}(jQuery,jQuery.ui.accordion.prototype));
(function(h,g){h.extend(g.options.icons,{activeHeader:null,headerSelected:"ui-icon-triangle-1-s"});
var f=g._createIcons;
g._createIcons=function(){if(this.options.icons){this.options.icons.activeHeader=this.options.icons.activeHeader||this.options.icons.headerSelected
}f.call(this)
}
}(jQuery,jQuery.ui.accordion.prototype));
(function(h,g){g.activate=g._activate;
var f=g._findActive;
g._findActive=function(i){if(i===-1){i=false
}if(i&&typeof i!=="number"){i=this.headers.index(this.headers.filter(i));
if(i===-1){i=false
}}return f.call(this,i)
}
}(jQuery,jQuery.ui.accordion.prototype));
jQuery.ui.accordion.prototype.resize=jQuery.ui.accordion.prototype.refresh;
(function(h,g){h.extend(g.options,{change:null,changestart:null});
var f=g._trigger;
g._trigger=function(j,k,l){var i=f.apply(this,arguments);
if(!i){return false
}if(j==="beforeActivate"){i=f.call(this,"changestart",k,{oldHeader:l.oldHeader,oldContent:l.oldPanel,newHeader:l.newHeader,newContent:l.newPanel})
}else{if(j==="activate"){i=f.call(this,"change",k,{oldHeader:l.oldHeader,oldContent:l.oldPanel,newHeader:l.newHeader,newContent:l.newPanel})
}}return i
}
}(jQuery,jQuery.ui.accordion.prototype));
(function(g,f){g.extend(f.options,{animate:null,animated:"slide"});
var h=f._create;
f._create=function(){var i=this.options;
if(i.animate===null){if(!i.animated){i.animate=false
}else{if(i.animated==="slide"){i.animate=300
}else{if(i.animated==="bounceslide"){i.animate={duration:200,down:{easing:"easeOutBounce",duration:1000}}
}else{i.animate=i.animated
}}}}h.call(this)
}
}(jQuery,jQuery.ui.accordion.prototype))
}})(jQuery);
(function(a,b){var c=0;
a.widget("ui.autocomplete",{version:"1.9.2",defaultElement:"<input>",options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var e,d,f;
this.isMultiLine=this._isMultiLine();
this.valueMethod=this.element[this.element.is("input,textarea")?"val":"text"];
this.isNewMenu=true;
this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");
this._on(this.element,{keydown:function(g){if(this.element.prop("readOnly")){e=true;
f=true;
d=true;
return
}e=false;
f=false;
d=false;
var h=a.ui.keyCode;
switch(g.keyCode){case h.PAGE_UP:e=true;
this._move("previousPage",g);
break;
case h.PAGE_DOWN:e=true;
this._move("nextPage",g);
break;
case h.UP:e=true;
this._keyEvent("previous",g);
break;
case h.DOWN:e=true;
this._keyEvent("next",g);
break;
case h.ENTER:case h.NUMPAD_ENTER:if(this.menu.active){e=true;
g.preventDefault();
this.menu.select(g)
}break;
case h.TAB:if(this.menu.active){this.menu.select(g)
}break;
case h.ESCAPE:if(this.menu.element.is(":visible")){this._value(this.term);
this.close(g);
g.preventDefault()
}break;
default:d=true;
this._searchTimeout(g);
break
}},keypress:function(g){if(e){e=false;
g.preventDefault();
return
}if(d){return
}var h=a.ui.keyCode;
switch(g.keyCode){case h.PAGE_UP:this._move("previousPage",g);
break;
case h.PAGE_DOWN:this._move("nextPage",g);
break;
case h.UP:this._keyEvent("previous",g);
break;
case h.DOWN:this._keyEvent("next",g);
break
}},input:function(g){if(f){f=false;
g.preventDefault();
return
}this._searchTimeout(g)
},focus:function(){this.selectedItem=null;
this.previous=this._value()
},blur:function(g){if(this.cancelBlur){delete this.cancelBlur;
return
}clearTimeout(this.searching);
this.close(g);
this._change(g)
}});
this._initSource();
this.menu=a("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo||"body")[0]).menu({input:a(),role:null}).zIndex(this.element.zIndex()+1).hide().data("menu");
this._on(this.menu.element,{mousedown:function(g){g.preventDefault();
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur
});
var h=this.menu.element[0];
if(!a(g.target).closest(".ui-menu-item").length){this._delay(function(){var i=this;
this.document.one("mousedown",function(j){if(j.target!==i.element[0]&&j.target!==h&&!a.contains(h,j.target)){i.close()
}})
})
}},menufocus:function(h,i){if(this.isNewMenu){this.isNewMenu=false;
if(h.originalEvent&&/^mouse/.test(h.originalEvent.type)){this.menu.blur();
this.document.one("mousemove",function(){a(h.target).trigger(h.originalEvent)
});
return
}}var g=i.item.data("ui-autocomplete-item")||i.item.data("item.autocomplete");
if(false!==this._trigger("focus",h,{item:g})){if(h.originalEvent&&/^key/.test(h.originalEvent.type)){this._value(g.value)
}}else{this.liveRegion.text(g.value)
}},menuselect:function(i,j){var h=j.item.data("ui-autocomplete-item")||j.item.data("item.autocomplete"),g=this.previous;
if(this.element[0]!==this.document[0].activeElement){this.element.focus();
this.previous=g;
this._delay(function(){this.previous=g;
this.selectedItem=h
})
}if(false!==this._trigger("select",i,{item:h})){this._value(h.value)
}this.term=this._value();
this.close(i);
this.selectedItem=h
}});
this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element);
if(a.fn.bgiframe){this.menu.element.bgiframe()
}this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_destroy:function(){clearTimeout(this.searching);
this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
this.menu.element.remove();
this.liveRegion.remove()
},_setOption:function(d,e){this._super(d,e);
if(d==="source"){this._initSource()
}if(d==="appendTo"){this.menu.element.appendTo(this.document.find(e||"body")[0])
}if(d==="disabled"&&e&&this.xhr){this.xhr.abort()
}},_isMultiLine:function(){if(this.element.is("textarea")){return true
}if(this.element.is("input")){return false
}return this.element.prop("isContentEditable")
},_initSource:function(){var f,d,e=this;
if(a.isArray(this.options.source)){f=this.options.source;
this.source=function(h,g){g(a.ui.autocomplete.filter(f,h.term))
}
}else{if(typeof this.options.source==="string"){d=this.options.source;
this.source=function(h,g){if(e.xhr){e.xhr.abort()
}e.xhr=a.ajax({url:d,data:h,dataType:"json",success:function(i){g(i)
},error:function(){g([])
}})
}
}else{this.source=this.options.source
}}},_searchTimeout:function(d){clearTimeout(this.searching);
this.searching=this._delay(function(){if(this.term!==this._value()){this.selectedItem=null;
this.search(null,d)
}},this.options.delay)
},search:function(e,d){e=e!=null?e:this._value();
this.term=this._value();
if(e.length<this.options.minLength){return this.close(d)
}if(this._trigger("search",d)===false){return
}return this._search(e)
},_search:function(d){this.pending++;
this.element.addClass("ui-autocomplete-loading");
this.cancelSearch=false;
this.source({term:d},this._response())
},_response:function(){var e=this,d=++c;
return function(f){if(d===c){e.__response(f)
}e.pending--;
if(!e.pending){e.element.removeClass("ui-autocomplete-loading")
}}
},__response:function(d){if(d){d=this._normalize(d)
}this._trigger("response",null,{content:d});
if(!this.options.disabled&&d&&d.length&&!this.cancelSearch){this._suggest(d);
this._trigger("open")
}else{this._close()
}},close:function(d){this.cancelSearch=true;
this._close(d)
},_close:function(d){if(this.menu.element.is(":visible")){this.menu.element.hide();
this.menu.blur();
this.isNewMenu=true;
this._trigger("close",d)
}},_change:function(d){if(this.previous!==this._value()){this._trigger("change",d,{item:this.selectedItem})
}},_normalize:function(d){if(d.length&&d[0].label&&d[0].value){return d
}return a.map(d,function(e){if(typeof e==="string"){return{label:e,value:e}
}return a.extend({label:e.label||e.value,value:e.value||e.label},e)
})
},_suggest:function(d){var e=this.menu.element.empty().zIndex(this.element.zIndex()+1);
this._renderMenu(e,d);
this.menu.refresh();
e.show();
this._resizeMenu();
e.position(a.extend({of:this.element},this.options.position));
if(this.options.autoFocus){this.menu.next()
}},_resizeMenu:function(){var d=this.menu.element;
d.outerWidth(Math.max(d.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(e,d){var f=this;
a.each(d,function(g,h){f._renderItemData(e,h)
})
},_renderItemData:function(d,e){return this._renderItem(d,e).data("ui-autocomplete-item",e)
},_renderItem:function(d,e){return a("<li>").append(a("<a>").text(e.label)).appendTo(d)
},_move:function(e,d){if(!this.menu.element.is(":visible")){this.search(null,d);
return
}if(this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)){this._value(this.term);
this.menu.blur();
return
}this.menu[e](d)
},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(e,d){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(e,d);
d.preventDefault()
}}});
a.extend(a.ui.autocomplete,{escapeRegex:function(d){return d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(f,d){var e=new RegExp(a.ui.autocomplete.escapeRegex(d),"i");
return a.grep(f,function(g){return e.test(g.label||g.value||g)
})
}});
a.widget("ui.autocomplete",a.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(d){return d+(d>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(e){var d;
this._superApply(arguments);
if(this.options.disabled||this.cancelSearch){return
}if(e&&e.length){d=this.options.messages.results(e.length)
}else{d=this.options.messages.noResults
}this.liveRegion.text(d)
}})
}(jQuery));
(function(f,b){var k,e,a,h,i="ui-button ui-widget ui-state-default ui-corner-all",c="ui-state-hover ui-state-active ",g="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",j=function(){var l=f(this).find(":ui-button");
setTimeout(function(){l.button("refresh")
},1)
},d=function(m){var l=m.name,n=m.form,o=f([]);
if(l){if(n){o=f(n).find("[name='"+l+"']")
}else{o=f("[name='"+l+"']",m.ownerDocument).filter(function(){return !this.form
})
}}return o
};
f.widget("ui.button",{version:"1.9.2",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,j);
if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled")
}else{this.element.prop("disabled",this.options.disabled)
}this._determineButtonType();
this.hasTitle=!!this.buttonElement.attr("title");
var o=this,m=this.options,p=this.type==="checkbox"||this.type==="radio",n=!p?"ui-state-active":"",l="ui-state-focus";
if(m.label===null){m.label=(this.type==="input"?this.buttonElement.val():this.buttonElement.html())
}this._hoverable(this.buttonElement);
this.buttonElement.addClass(i).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(m.disabled){return
}if(this===k){f(this).addClass("ui-state-active")
}}).bind("mouseleave"+this.eventNamespace,function(){if(m.disabled){return
}f(this).removeClass(n)
}).bind("click"+this.eventNamespace,function(q){if(m.disabled){q.preventDefault();
q.stopImmediatePropagation()
}});
this.element.bind("focus"+this.eventNamespace,function(){o.buttonElement.addClass(l)
}).bind("blur"+this.eventNamespace,function(){o.buttonElement.removeClass(l)
});
if(p){this.element.bind("change"+this.eventNamespace,function(){if(h){return
}o.refresh()
});
this.buttonElement.bind("mousedown"+this.eventNamespace,function(q){if(m.disabled){return
}h=false;
e=q.pageX;
a=q.pageY
}).bind("mouseup"+this.eventNamespace,function(q){if(m.disabled){return
}if(e!==q.pageX||a!==q.pageY){h=true
}})
}if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(m.disabled||h){return false
}f(this).toggleClass("ui-state-active");
o.buttonElement.attr("aria-pressed",o.element[0].checked)
})
}else{if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(m.disabled||h){return false
}f(this).addClass("ui-state-active");
o.buttonElement.attr("aria-pressed","true");
var q=o.element[0];
d(q).not(q).map(function(){return f(this).button("widget")[0]
}).removeClass("ui-state-active").attr("aria-pressed","false")
})
}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(m.disabled){return false
}f(this).addClass("ui-state-active");
k=this;
o.document.one("mouseup",function(){k=null
})
}).bind("mouseup"+this.eventNamespace,function(){if(m.disabled){return false
}f(this).removeClass("ui-state-active")
}).bind("keydown"+this.eventNamespace,function(q){if(m.disabled){return false
}if(q.keyCode===f.ui.keyCode.SPACE||q.keyCode===f.ui.keyCode.ENTER){f(this).addClass("ui-state-active")
}}).bind("keyup"+this.eventNamespace,function(){f(this).removeClass("ui-state-active")
});
if(this.buttonElement.is("a")){this.buttonElement.keyup(function(q){if(q.keyCode===f.ui.keyCode.SPACE){f(this).click()
}})
}}}this._setOption("disabled",m.disabled);
this._resetButton()
},_determineButtonType:function(){var l,n,m;
if(this.element.is("[type=checkbox]")){this.type="checkbox"
}else{if(this.element.is("[type=radio]")){this.type="radio"
}else{if(this.element.is("input")){this.type="input"
}else{this.type="button"
}}}if(this.type==="checkbox"||this.type==="radio"){l=this.element.parents().last();
n="label[for='"+this.element.attr("id")+"']";
this.buttonElement=l.find(n);
if(!this.buttonElement.length){l=l.length?l.siblings():this.element.siblings();
this.buttonElement=l.filter(n);
if(!this.buttonElement.length){this.buttonElement=l.find(n)
}}this.element.addClass("ui-helper-hidden-accessible");
m=this.element.is(":checked");
if(m){this.buttonElement.addClass("ui-state-active")
}this.buttonElement.prop("aria-pressed",m)
}else{this.buttonElement=this.element
}},widget:function(){return this.buttonElement
},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");
this.buttonElement.removeClass(i+" "+c+" "+g).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
if(!this.hasTitle){this.buttonElement.removeAttr("title")
}},_setOption:function(l,m){this._super(l,m);
if(l==="disabled"){if(m){this.element.prop("disabled",true)
}else{this.element.prop("disabled",false)
}return
}this._resetButton()
},refresh:function(){var l=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");
if(l!==this.options.disabled){this._setOption("disabled",l)
}if(this.type==="radio"){d(this.element[0]).each(function(){if(f(this).is(":checked")){f(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")
}else{f(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")
}})
}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")
}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")
}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)
}return
}var p=this.buttonElement.removeClass(g),n=f("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(p.empty()).text(),m=this.options.icons,l=m.primary&&m.secondary,o=[];
if(m.primary||m.secondary){if(this.options.text){o.push("ui-button-text-icon"+(l?"s":(m.primary?"-primary":"-secondary")))
}if(m.primary){p.prepend("<span class='ui-button-icon-primary ui-icon "+m.primary+"'></span>")
}if(m.secondary){p.append("<span class='ui-button-icon-secondary ui-icon "+m.secondary+"'></span>")
}if(!this.options.text){o.push(l?"ui-button-icons-only":"ui-button-icon-only");
if(!this.hasTitle){p.attr("title",f.trim(n))
}}}else{o.push("ui-button-text-only")
}p.addClass(o.join(" "))
}});
f.widget("ui.buttonset",{version:"1.9.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")
},_init:function(){this.refresh()
},_setOption:function(l,m){if(l==="disabled"){this.buttons.button("option",l,m)
}this._super(l,m)
},refresh:function(){var l=this.element.css("direction")==="rtl";
this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return f(this).button("widget")[0]
}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(l?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(l?"ui-corner-left":"ui-corner-right").end().end()
},_destroy:function(){this.element.removeClass("ui-buttonset");
this.buttons.map(function(){return f(this).button("widget")[0]
}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
}})
}(jQuery));
(function($,undefined){$.extend($.ui,{datepicker:{version:"1.9.2"}});
var PROP_NAME="datepicker";
var dpuuid=new Date().getTime();
var instActive;
function Datepicker(){this.debug=false;
this._curInst=null;
this._keyEvent=false;
this._disabledInputs=[];
this._datepickerShowing=false;
this._inDialog=false;
this._mainDivId="ui-datepicker-div";
this._inlineClass="ui-datepicker-inline";
this._appendClass="ui-datepicker-append";
this._triggerClass="ui-datepicker-trigger";
this._dialogClass="ui-datepicker-dialog";
this._disableClass="ui-datepicker-disabled";
this._unselectableClass="ui-datepicker-unselectable";
this._currentClass="ui-datepicker-current-day";
this._dayOverClass="ui-datepicker-days-cell-over";
this.regional=[];
this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};
$.extend(this._defaults,this.regional[""]);
this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
}$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){if(this.debug){console.log.apply("",arguments)
}},_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(settings){extendRemove(this._defaults,settings||{});
return this
},_attachDatepicker:function(target,settings){var inlineSettings=null;
for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);
if(attrValue){inlineSettings=inlineSettings||{};
try{inlineSettings[attrName]=eval(attrValue)
}catch(err){inlineSettings[attrName]=attrValue
}}}var nodeName=target.nodeName.toLowerCase();
var inline=(nodeName=="div"||nodeName=="span");
if(!target.id){this.uuid+=1;
target.id="dp"+this.uuid
}var inst=this._newInst($(target),inline);
inst.settings=$.extend({},settings||{},inlineSettings||{});
if(nodeName=="input"){this._connectDatepicker(target,inst)
}else{if(inline){this._inlineDatepicker(target,inst)
}}},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");
return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))}
},_connectDatepicker:function(target,inst){var input=$(target);
inst.append=$([]);
inst.trigger=$([]);
if(input.hasClass(this.markerClassName)){return
}this._attachments(input,inst);
input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value
}).bind("getData.datepicker",function(event,key){return this._get(inst,key)
});
this._autoSize(inst);
$.data(target,PROP_NAME,inst);
if(inst.settings.disabled){this._disableDatepicker(target)
}},_attachments:function(input,inst){var appendText=this._get(inst,"appendText");
var isRTL=this._get(inst,"isRTL");
if(inst.append){inst.append.remove()
}if(appendText){inst.append=$('<span class="'+this._appendClass+'">'+appendText+"</span>");
input[isRTL?"before":"after"](inst.append)
}input.unbind("focus",this._showDatepicker);
if(inst.trigger){inst.trigger.remove()
}var showOn=this._get(inst,"showOn");
if(showOn=="focus"||showOn=="both"){input.focus(this._showDatepicker)
}if(showOn=="button"||showOn=="both"){var buttonText=this._get(inst,"buttonText");
var buttonImage=this._get(inst,"buttonImage");
inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage==""?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));
input[isRTL?"before":"after"](inst.trigger);
inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput==input[0]){$.datepicker._hideDatepicker()
}else{if($.datepicker._datepickerShowing&&$.datepicker._lastInput!=input[0]){$.datepicker._hideDatepicker();
$.datepicker._showDatepicker(input[0])
}else{$.datepicker._showDatepicker(input[0])
}}return false
})
}},_autoSize:function(inst){if(this._get(inst,"autoSize")&&!inst.inline){var date=new Date(2009,12-1,20);
var dateFormat=this._get(inst,"dateFormat");
if(dateFormat.match(/[DM]/)){var findMax=function(names){var max=0;
var maxI=0;
for(var i=0;
i<names.length;
i++){if(names[i].length>max){max=names[i].length;
maxI=i
}}return maxI
};
date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?"monthNames":"monthNamesShort"))));
date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?"dayNames":"dayNamesShort")))+20-date.getDay())
}inst.input.attr("size",this._formatDate(inst,date).length)
}},_inlineDatepicker:function(target,inst){var divSpan=$(target);
if(divSpan.hasClass(this.markerClassName)){return
}divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value
}).bind("getData.datepicker",function(event,key){return this._get(inst,key)
});
$.data(target,PROP_NAME,inst);
this._setDate(inst,this._getDefaultDate(inst),true);
this._updateDatepicker(inst);
this._updateAlternate(inst);
if(inst.settings.disabled){this._disableDatepicker(target)
}inst.dpDiv.css("display","block")
},_dialogDatepicker:function(input,date,onSelect,settings,pos){var inst=this._dialogInst;
if(!inst){this.uuid+=1;
var id="dp"+this.uuid;
this._dialogInput=$('<input type="text" id="'+id+'" style="position: absolute; top: -100px; width: 0px;"/>');
this._dialogInput.keydown(this._doKeyDown);
$("body").append(this._dialogInput);
inst=this._dialogInst=this._newInst(this._dialogInput,false);
inst.settings={};
$.data(this._dialogInput[0],PROP_NAME,inst)
}extendRemove(inst.settings,settings||{});
date=(date&&date.constructor==Date?this._formatDate(inst,date):date);
this._dialogInput.val(date);
this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);
if(!this._pos){var browserWidth=document.documentElement.clientWidth;
var browserHeight=document.documentElement.clientHeight;
var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;
var scrollY=document.documentElement.scrollTop||document.body.scrollTop;
this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY]
}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");
inst.settings.onSelect=onSelect;
this._inDialog=true;
this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);
if($.blockUI){$.blockUI(this.dpDiv)
}$.data(this._dialogInput[0],PROP_NAME,inst);
return this
},_destroyDatepicker:function(target){var $target=$(target);
var inst=$.data(target,PROP_NAME);
if(!$target.hasClass(this.markerClassName)){return
}var nodeName=target.nodeName.toLowerCase();
$.removeData(target,PROP_NAME);
if(nodeName=="input"){inst.append.remove();
inst.trigger.remove();
$target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)
}else{if(nodeName=="div"||nodeName=="span"){$target.removeClass(this.markerClassName).empty()
}}},_enableDatepicker:function(target){var $target=$(target);
var inst=$.data(target,PROP_NAME);
if(!$target.hasClass(this.markerClassName)){return
}var nodeName=target.nodeName.toLowerCase();
if(nodeName=="input"){target.disabled=false;
inst.trigger.filter("button").each(function(){this.disabled=false
}).end().filter("img").css({opacity:"1.0",cursor:""})
}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);
inline.children().removeClass("ui-state-disabled");
inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false)
}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)
})
},_disableDatepicker:function(target){var $target=$(target);
var inst=$.data(target,PROP_NAME);
if(!$target.hasClass(this.markerClassName)){return
}var nodeName=target.nodeName.toLowerCase();
if(nodeName=="input"){target.disabled=true;
inst.trigger.filter("button").each(function(){this.disabled=true
}).end().filter("img").css({opacity:"0.5",cursor:"default"})
}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);
inline.children().addClass("ui-state-disabled");
inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true)
}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)
});
this._disabledInputs[this._disabledInputs.length]=target
},_isDisabledDatepicker:function(target){if(!target){return false
}for(var i=0;
i<this._disabledInputs.length;
i++){if(this._disabledInputs[i]==target){return true
}}return false
},_getInst:function(target){try{return $.data(target,PROP_NAME)
}catch(err){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(target,name,value){var inst=this._getInst(target);
if(arguments.length==2&&typeof name=="string"){return(name=="defaults"?$.extend({},$.datepicker._defaults):(inst?(name=="all"?$.extend({},inst.settings):this._get(inst,name)):null))
}var settings=name||{};
if(typeof name=="string"){settings={};
settings[name]=value
}if(inst){if(this._curInst==inst){this._hideDatepicker()
}var date=this._getDateDatepicker(target,true);
var minDate=this._getMinMaxDate(inst,"min");
var maxDate=this._getMinMaxDate(inst,"max");
extendRemove(inst.settings,settings);
if(minDate!==null&&settings.dateFormat!==undefined&&settings.minDate===undefined){inst.settings.minDate=this._formatDate(inst,minDate)
}if(maxDate!==null&&settings.dateFormat!==undefined&&settings.maxDate===undefined){inst.settings.maxDate=this._formatDate(inst,maxDate)
}this._attachments($(target),inst);
this._autoSize(inst);
this._setDate(inst,date);
this._updateAlternate(inst);
this._updateDatepicker(inst)
}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value)
},_refreshDatepicker:function(target){var inst=this._getInst(target);
if(inst){this._updateDatepicker(inst)
}},_setDateDatepicker:function(target,date){var inst=this._getInst(target);
if(inst){this._setDate(inst,date);
this._updateDatepicker(inst);
this._updateAlternate(inst)
}},_getDateDatepicker:function(target,noDefault){var inst=this._getInst(target);
if(inst&&!inst.inline){this._setDateFromField(inst,noDefault)
}return(inst?this._getDate(inst):null)
},_doKeyDown:function(event){var inst=$.datepicker._getInst(event.target);
var handled=true;
var isRTL=inst.dpDiv.is(".ui-datepicker-rtl");
inst._keyEvent=true;
if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker();
handled=false;
break;
case 13:var sel=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",inst.dpDiv);
if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0])
}var onSelect=$.datepicker._get(inst,"onSelect");
if(onSelect){var dateStr=$.datepicker._formatDate(inst);
onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])
}else{$.datepicker._hideDatepicker()
}return false;
break;
case 27:$.datepicker._hideDatepicker();
break;
case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");
break;
case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");
break;
case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target)
}handled=event.ctrlKey||event.metaKey;
break;
case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target)
}handled=event.ctrlKey||event.metaKey;
break;
case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D")
}handled=event.ctrlKey||event.metaKey;
if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M")
}break;
case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D")
}handled=event.ctrlKey||event.metaKey;
break;
case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D")
}handled=event.ctrlKey||event.metaKey;
if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M")
}break;
case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D")
}handled=event.ctrlKey||event.metaKey;
break;
default:handled=false
}}else{if(event.keyCode==36&&event.ctrlKey){$.datepicker._showDatepicker(this)
}else{handled=false
}}if(handled){event.preventDefault();
event.stopPropagation()
}},_doKeyPress:function(event){var inst=$.datepicker._getInst(event.target);
if($.datepicker._get(inst,"constrainInput")){var chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));
var chr=String.fromCharCode(event.charCode==undefined?event.keyCode:event.charCode);
return event.ctrlKey||event.metaKey||(chr<" "||!chars||chars.indexOf(chr)>-1)
}},_doKeyUp:function(event){var inst=$.datepicker._getInst(event.target);
if(inst.input.val()!=inst.lastVal){try{var date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),(inst.input?inst.input.val():null),$.datepicker._getFormatConfig(inst));
if(date){$.datepicker._setDateFromField(inst);
$.datepicker._updateAlternate(inst);
$.datepicker._updateDatepicker(inst)
}}catch(err){$.datepicker.log(err)
}}return true
},_showDatepicker:function(input){input=input.target||input;
if(input.nodeName.toLowerCase()!="input"){input=$("input",input.parentNode)[0]
}if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input){return
}var inst=$.datepicker._getInst(input);
if($.datepicker._curInst&&$.datepicker._curInst!=inst){$.datepicker._curInst.dpDiv.stop(true,true);
if(inst&&$.datepicker._datepickerShowing){$.datepicker._hideDatepicker($.datepicker._curInst.input[0])
}}var beforeShow=$.datepicker._get(inst,"beforeShow");
var beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};
if(beforeShowSettings===false){return
}extendRemove(inst.settings,beforeShowSettings);
inst.lastVal=null;
$.datepicker._lastInput=input;
$.datepicker._setDateFromField(inst);
if($.datepicker._inDialog){input.value=""
}if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);
$.datepicker._pos[1]+=input.offsetHeight
}var isFixed=false;
$(input).parents().each(function(){isFixed|=$(this).css("position")=="fixed";
return !isFixed
});
var offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};
$.datepicker._pos=null;
inst.dpDiv.empty();
inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});
$.datepicker._updateDatepicker(inst);
offset=$.datepicker._checkOffset(inst,offset,isFixed);
inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),display:"none",left:offset.left+"px",top:offset.top+"px"});
if(!inst.inline){var showAnim=$.datepicker._get(inst,"showAnim");
var duration=$.datepicker._get(inst,"duration");
var postProcess=function(){var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");
if(!!cover.length){var borders=$.datepicker._getBorders(inst.dpDiv);
cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})
}};
inst.dpDiv.zIndex($(input).zIndex()+1);
$.datepicker._datepickerShowing=true;
if($.effects&&($.effects.effect[showAnim]||$.effects[showAnim])){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)
}else{inst.dpDiv[showAnim||"show"]((showAnim?duration:null),postProcess)
}if(!showAnim||!duration){postProcess()
}if(inst.input.is(":visible")&&!inst.input.is(":disabled")){inst.input.focus()
}$.datepicker._curInst=inst
}},_updateDatepicker:function(inst){this.maxRows=4;
var borders=$.datepicker._getBorders(inst.dpDiv);
instActive=inst;
inst.dpDiv.empty().append(this._generateHTML(inst));
this._attachHandlers(inst);
var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");
if(!!cover.length){cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})
}inst.dpDiv.find("."+this._dayOverClass+" a").mouseover();
var numMonths=this._getNumberOfMonths(inst);
var cols=numMonths[1];
var width=17;
inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em")
}inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");
inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");
if(inst==$.datepicker._curInst&&$.datepicker._datepickerShowing&&inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&inst.input[0]!=document.activeElement){inst.input.focus()
}if(inst.yearshtml){var origyearshtml=inst.yearshtml;
setTimeout(function(){if(origyearshtml===inst.yearshtml&&inst.yearshtml){inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml)
}origyearshtml=inst.yearshtml=null
},0)
}},_getBorders:function(elem){var convert=function(value){return{thin:1,medium:2,thick:3}[value]||value
};
return[parseFloat(convert(elem.css("border-left-width"))),parseFloat(convert(elem.css("border-top-width")))]
},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth();
var dpHeight=inst.dpDiv.outerHeight();
var inputWidth=inst.input?inst.input.outerWidth():0;
var inputHeight=inst.input?inst.input.outerHeight():0;
var viewWidth=document.documentElement.clientWidth+(isFixed?0:$(document).scrollLeft());
var viewHeight=document.documentElement.clientHeight+(isFixed?0:$(document).scrollTop());
offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);
offset.left-=(isFixed&&offset.left==inst.input.offset().left)?$(document).scrollLeft():0;
offset.top-=(isFixed&&offset.top==(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;
offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);
offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight):0);
return offset
},_findPos:function(obj){var inst=this._getInst(obj);
var isRTL=this._get(inst,"isRTL");
while(obj&&(obj.type=="hidden"||obj.nodeType!=1||$.expr.filters.hidden(obj))){obj=obj[isRTL?"previousSibling":"nextSibling"]
}var position=$(obj).offset();
return[position.left,position.top]
},_hideDatepicker:function(input){var inst=this._curInst;
if(!inst||(input&&inst!=$.data(input,PROP_NAME))){return
}if(this._datepickerShowing){var showAnim=this._get(inst,"showAnim");
var duration=this._get(inst,"duration");
var postProcess=function(){$.datepicker._tidyDialog(inst)
};
if($.effects&&($.effects.effect[showAnim]||$.effects[showAnim])){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)
}else{inst.dpDiv[(showAnim=="slideDown"?"slideUp":(showAnim=="fadeIn"?"fadeOut":"hide"))]((showAnim?duration:null),postProcess)
}if(!showAnim){postProcess()
}this._datepickerShowing=false;
var onClose=this._get(inst,"onClose");
if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst])
}this._lastInput=null;
if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});
if($.blockUI){$.unblockUI();
$("body").append(this.dpDiv)
}}this._inDialog=false
}},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
},_checkExternalClick:function(event){if(!$.datepicker._curInst){return
}var $target=$(event.target),inst=$.datepicker._getInst($target[0]);
if((($target[0].id!=$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length==0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)))||($target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=inst)){$.datepicker._hideDatepicker()
}},_adjustDate:function(id,offset,period){var target=$(id);
var inst=this._getInst(target[0]);
if(this._isDisabledDatepicker(target[0])){return
}this._adjustInstDate(inst,offset+(period=="M"?this._get(inst,"showCurrentAtPos"):0),period);
this._updateDatepicker(inst)
},_gotoToday:function(id){var target=$(id);
var inst=this._getInst(target[0]);
if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;
inst.drawMonth=inst.selectedMonth=inst.currentMonth;
inst.drawYear=inst.selectedYear=inst.currentYear
}else{var date=new Date();
inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear()
}this._notifyChange(inst);
this._adjustDate(target)
},_selectMonthYear:function(id,select,period){var target=$(id);
var inst=this._getInst(target[0]);
inst["selected"+(period=="M"?"Month":"Year")]=inst["draw"+(period=="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);
this._notifyChange(inst);
this._adjustDate(target)
},_selectDay:function(id,month,year,td){var target=$(id);
if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return
}var inst=this._getInst(target[0]);
inst.selectedDay=inst.currentDay=$("a",td).html();
inst.selectedMonth=inst.currentMonth=month;
inst.selectedYear=inst.currentYear=year;
this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear))
},_clearDate:function(id){var target=$(id);
var inst=this._getInst(target[0]);
this._selectDate(target,"")
},_selectDate:function(id,dateStr){var target=$(id);
var inst=this._getInst(target[0]);
dateStr=(dateStr!=null?dateStr:this._formatDate(inst));
if(inst.input){inst.input.val(dateStr)
}this._updateAlternate(inst);
var onSelect=this._get(inst,"onSelect");
if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])
}else{if(inst.input){inst.input.trigger("change")
}}if(inst.inline){this._updateDatepicker(inst)
}else{this._hideDatepicker();
this._lastInput=inst.input[0];
if(typeof(inst.input[0])!="object"){inst.input.focus()
}this._lastInput=null
}},_updateAlternate:function(inst){var altField=this._get(inst,"altField");
if(altField){var altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");
var date=this._getDate(inst);
var dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));
$(altField).each(function(){$(this).val(dateStr)
})
}},noWeekends:function(date){var day=date.getDay();
return[(day>0&&day<6),""]
},iso8601Week:function(date){var checkDate=new Date(date.getTime());
checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));
var time=checkDate.getTime();
checkDate.setMonth(0);
checkDate.setDate(1);
return Math.floor(Math.round((time-checkDate)/86400000)/7)+1
},parseDate:function(format,value,settings){if(format==null||value==null){throw"Invalid arguments"
}value=(typeof value=="object"?value.toString():value+"");
if(value==""){return null
}var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;
shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));
var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;
var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;
var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;
var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;
var year=-1;
var month=-1;
var day=-1;
var doy=-1;
var literal=false;
var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);
if(matches){iFormat++
}return matches
};
var getNumber=function(match){var isDoubled=lookAhead(match);
var size=(match=="@"?14:(match=="!"?20:(match=="y"&&isDoubled?4:(match=="o"?3:2))));
var digits=new RegExp("^\\d{1,"+size+"}");
var num=value.substring(iValue).match(digits);
if(!num){throw"Missing number at position "+iValue
}iValue+=num[0].length;
return parseInt(num[0],10)
};
var getName=function(match,shortNames,longNames){var names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){return[[k,v]]
}).sort(function(a,b){return -(a[1].length-b[1].length)
});
var index=-1;
$.each(names,function(i,pair){var name=pair[1];
if(value.substr(iValue,name.length).toLowerCase()==name.toLowerCase()){index=pair[0];
iValue+=name.length;
return false
}});
if(index!=-1){return index+1
}else{throw"Unknown name at position "+iValue
}};
var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat)){throw"Unexpected literal at position "+iValue
}iValue++
};
var iValue=0;
for(var iFormat=0;
iFormat<format.length;
iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false
}else{checkLiteral()
}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");
break;
case"D":getName("D",dayNamesShort,dayNames);
break;
case"o":doy=getNumber("o");
break;
case"m":month=getNumber("m");
break;
case"M":month=getName("M",monthNamesShort,monthNames);
break;
case"y":year=getNumber("y");
break;
case"@":var date=new Date(getNumber("@"));
year=date.getFullYear();
month=date.getMonth()+1;
day=date.getDate();
break;
case"!":var date=new Date((getNumber("!")-this._ticksTo1970)/10000);
year=date.getFullYear();
month=date.getMonth()+1;
day=date.getDate();
break;
case"'":if(lookAhead("'")){checkLiteral()
}else{literal=true
}break;
default:checkLiteral()
}}}if(iValue<value.length){var extra=value.substr(iValue);
if(!/^\s+/.test(extra)){throw"Extra/unparsed characters found in date: "+extra
}}if(year==-1){year=new Date().getFullYear()
}else{if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100)
}}if(doy>-1){month=1;
day=doy;
do{var dim=this._getDaysInMonth(year,month-1);
if(day<=dim){break
}month++;
day-=dim
}while(true)
}var date=this._daylightSavingAdjust(new Date(year,month-1,day));
if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day){throw"Invalid date"
}return date
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(format,date,settings){if(!date){return""
}var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;
var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;
var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;
var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;
var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);
if(matches){iFormat++
}return matches
};
var formatNumber=function(match,value,len){var num=""+value;
if(lookAhead(match)){while(num.length<len){num="0"+num
}}return num
};
var formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value])
};
var output="";
var literal=false;
if(date){for(var iFormat=0;
iFormat<format.length;
iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false
}else{output+=format.charAt(iFormat)
}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);
break;
case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);
break;
case"o":output+=formatNumber("o",Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":output+=formatNumber("m",date.getMonth()+1,2);
break;
case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);
break;
case"y":output+=(lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100);
break;
case"@":output+=date.getTime();
break;
case"!":output+=date.getTime()*10000+this._ticksTo1970;
break;
case"'":if(lookAhead("'")){output+="'"
}else{literal=true
}break;
default:output+=format.charAt(iFormat)
}}}}return output
},_possibleChars:function(format){var chars="";
var literal=false;
var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);
if(matches){iFormat++
}return matches
};
for(var iFormat=0;
iFormat<format.length;
iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false
}else{chars+=format.charAt(iFormat)
}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";
break;
case"D":case"M":return null;
case"'":if(lookAhead("'")){chars+="'"
}else{literal=true
}break;
default:chars+=format.charAt(iFormat)
}}}return chars
},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]
},_setDateFromField:function(inst,noDefault){if(inst.input.val()==inst.lastVal){return
}var dateFormat=this._get(inst,"dateFormat");
var dates=inst.lastVal=inst.input?inst.input.val():null;
var date,defaultDate;
date=defaultDate=this._getDefaultDate(inst);
var settings=this._getFormatConfig(inst);
try{date=this.parseDate(dateFormat,dates,settings)||defaultDate
}catch(event){this.log(event);
dates=(noDefault?"":dates)
}inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear();
inst.currentDay=(dates?date.getDate():0);
inst.currentMonth=(dates?date.getMonth():0);
inst.currentYear=(dates?date.getFullYear():0);
this._adjustInstDate(inst)
},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date()))
},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date();
date.setDate(date.getDate()+offset);
return date
};
var offsetString=function(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst))
}catch(e){}var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date();
var year=date.getFullYear();
var month=date.getMonth();
var day=date.getDate();
var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
var matches=pattern.exec(offset);
while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);
break;
case"w":case"W":day+=parseInt(matches[1],10)*7;
break;
case"m":case"M":month+=parseInt(matches[1],10);
day=Math.min(day,$.datepicker._getDaysInMonth(year,month));
break;
case"y":case"Y":year+=parseInt(matches[1],10);
day=Math.min(day,$.datepicker._getDaysInMonth(year,month));
break
}matches=pattern.exec(offset)
}return new Date(year,month,day)
};
var newDate=(date==null||date===""?defaultDate:(typeof date=="string"?offsetString(date):(typeof date=="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):new Date(date.getTime()))));
newDate=(newDate&&newDate.toString()=="Invalid Date"?defaultDate:newDate);
if(newDate){newDate.setHours(0);
newDate.setMinutes(0);
newDate.setSeconds(0);
newDate.setMilliseconds(0)
}return this._daylightSavingAdjust(newDate)
},_daylightSavingAdjust:function(date){if(!date){return null
}date.setHours(date.getHours()>12?date.getHours()+2:0);
return date
},_setDate:function(inst,date,noChange){var clear=!date;
var origMonth=inst.selectedMonth;
var origYear=inst.selectedYear;
var newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));
inst.selectedDay=inst.currentDay=newDate.getDate();
inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();
inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();
if((origMonth!=inst.selectedMonth||origYear!=inst.selectedYear)&&!noChange){this._notifyChange(inst)
}this._adjustInstDate(inst);
if(inst.input){inst.input.val(clear?"":this._formatDate(inst))
}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()=="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
return startDate
},_attachHandlers:function(inst){var stepMonths=this._get(inst,"stepMonths");
var id="#"+inst.id.replace(/\\\\/g,"\\");
inst.dpDiv.find("[data-handler]").map(function(){var handler={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(id,-stepMonths,"M")
},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(id,+stepMonths,"M")
},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()
},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(id)
},selectDay:function(){window["DP_jQuery_"+dpuuid].datepicker._selectDay(id,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);
return false
},selectMonth:function(){window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(id,this,"M");
return false
},selectYear:function(){window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(id,this,"Y");
return false
}};
$(this).bind(this.getAttribute("data-event"),handler[this.getAttribute("data-handler")])
})
},_generateHTML:function(inst){var today=new Date();
today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));
var isRTL=this._get(inst,"isRTL");
var showButtonPanel=this._get(inst,"showButtonPanel");
var hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext");
var navigationAsDateFormat=this._get(inst,"navigationAsDateFormat");
var numMonths=this._getNumberOfMonths(inst);
var showCurrentAtPos=this._get(inst,"showCurrentAtPos");
var stepMonths=this._get(inst,"stepMonths");
var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);
var currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
var minDate=this._getMinMaxDate(inst,"min");
var maxDate=this._getMinMaxDate(inst,"max");
var drawMonth=inst.drawMonth-showCurrentAtPos;
var drawYear=inst.drawYear;
if(drawMonth<0){drawMonth+=12;
drawYear--
}if(maxDate){var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));
maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);
while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;
if(drawMonth<0){drawMonth=11;
drawYear--
}}}inst.drawMonth=drawMonth;
inst.drawYear=drawYear;
var prevText=this._get(inst,"prevText");
prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));
var prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>"));
var nextText=this._get(inst,"nextText");
nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));
var next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>"));
var currentText=this._get(inst,"currentText");
var gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);
currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));
var controls=(!inst.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(inst,"closeText")+"</button>":"");
var buttonPanel=(showButtonPanel)?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";
var firstDay=parseInt(this._get(inst,"firstDay"),10);
firstDay=(isNaN(firstDay)?0:firstDay);
var showWeek=this._get(inst,"showWeek");
var dayNames=this._get(inst,"dayNames");
var dayNamesShort=this._get(inst,"dayNamesShort");
var dayNamesMin=this._get(inst,"dayNamesMin");
var monthNames=this._get(inst,"monthNames");
var monthNamesShort=this._get(inst,"monthNamesShort");
var beforeShowDay=this._get(inst,"beforeShowDay");
var showOtherMonths=this._get(inst,"showOtherMonths");
var selectOtherMonths=this._get(inst,"selectOtherMonths");
var calculateWeek=this._get(inst,"calculateWeek")||this.iso8601Week;
var defaultDate=this._getDefaultDate(inst);
var html="";
for(var row=0;
row<numMonths[0];
row++){var group="";
this.maxRows=4;
for(var col=0;
col<numMonths[1];
col++){var selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));
var cornerClass=" ui-corner-all";
var calender="";
if(isMultiMonth){calender+='<div class="ui-datepicker-group';
if(numMonths[1]>1){switch(col){case 0:calender+=" ui-datepicker-group-first";
cornerClass=" ui-corner-"+(isRTL?"right":"left");
break;
case numMonths[1]-1:calender+=" ui-datepicker-group-last";
cornerClass=" ui-corner-"+(isRTL?"left":"right");
break;
default:calender+=" ui-datepicker-group-middle";
cornerClass="";
break
}}calender+='">'
}calender+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+cornerClass+'">'+(/all|left/.test(cornerClass)&&row==0?(isRTL?next:prev):"")+(/all|right/.test(cornerClass)&&row==0?(isRTL?prev:next):"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+'</div><table class="ui-datepicker-calendar"><thead><tr>';
var thead=(showWeek?'<th class="ui-datepicker-week-col">'+this._get(inst,"weekHeader")+"</th>":"");
for(var dow=0;
dow<7;
dow++){var day=(dow+firstDay)%7;
thead+="<th"+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+dayNames[day]+'">'+dayNamesMin[day]+"</span></th>"
}calender+=thead+"</tr></thead><tbody>";
var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);
if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth)
}var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;
var curRows=Math.ceil((leadDays+daysInMonth)/7);
var numRows=(isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows);
this.maxRows=numRows;
var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));
for(var dRow=0;
dRow<numRows;
dRow++){calender+="<tr>";
var tbody=(!showWeek?"":'<td class="ui-datepicker-week-col">'+this._get(inst,"calculateWeek")(printDate)+"</td>");
for(var dow=0;
dow<7;
dow++){var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,""]);
var otherMonth=(printDate.getMonth()!=drawMonth);
var unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);
tbody+='<td class="'+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+((printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==selectedDate.getTime())?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()==currentDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()==today.getTime()?" ui-datepicker-today":""))+'"'+((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':"")+(unselectable?"":' data-handler="selectDay" data-event="click" data-month="'+printDate.getMonth()+'" data-year="'+printDate.getFullYear()+'"')+">"+(otherMonth&&!showOtherMonths?"&#xa0;":(unselectable?'<span class="ui-state-default">'+printDate.getDate()+"</span>":'<a class="ui-state-default'+(printDate.getTime()==today.getTime()?" ui-state-highlight":"")+(printDate.getTime()==currentDate.getTime()?" ui-state-active":"")+(otherMonth?" ui-priority-secondary":"")+'" href="#">'+printDate.getDate()+"</a>"))+"</td>";
printDate.setDate(printDate.getDate()+1);
printDate=this._daylightSavingAdjust(printDate)
}calender+=tbody+"</tr>"
}drawMonth++;
if(drawMonth>11){drawMonth=0;
drawYear++
}calender+="</tbody></table>"+(isMultiMonth?"</div>"+((numMonths[0]>0&&col==numMonths[1]-1)?'<div class="ui-datepicker-row-break"></div>':""):"");
group+=calender
}html+=group
}html+=buttonPanel+($.ui.ie6&&!inst.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");
inst._keyEvent=false;
return html
},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var changeMonth=this._get(inst,"changeMonth");
var changeYear=this._get(inst,"changeYear");
var showMonthAfterYear=this._get(inst,"showMonthAfterYear");
var html='<div class="ui-datepicker-title">';
var monthHtml="";
if(secondary||!changeMonth){monthHtml+='<span class="ui-datepicker-month">'+monthNames[drawMonth]+"</span>"
}else{var inMinYear=(minDate&&minDate.getFullYear()==drawYear);
var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);
monthHtml+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
for(var month=0;
month<12;
month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+='<option value="'+month+'"'+(month==drawMonth?' selected="selected"':"")+">"+monthNamesShort[month]+"</option>"
}}monthHtml+="</select>"
}if(!showMonthAfterYear){html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")
}if(!inst.yearshtml){inst.yearshtml="";
if(secondary||!changeYear){html+='<span class="ui-datepicker-year">'+drawYear+"</span>"
}else{var years=this._get(inst,"yearRange").split(":");
var thisYear=new Date().getFullYear();
var determineYear=function(value){var year=(value.match(/c[+-].*/)?drawYear+parseInt(value.substring(1),10):(value.match(/[+-].*/)?thisYear+parseInt(value,10):parseInt(value,10)));
return(isNaN(year)?thisYear:year)
};
var year=determineYear(years[0]);
var endYear=Math.max(year,determineYear(years[1]||""));
year=(minDate?Math.max(year,minDate.getFullYear()):year);
endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);
inst.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';
for(;
year<=endYear;
year++){inst.yearshtml+='<option value="'+year+'"'+(year==drawYear?' selected="selected"':"")+">"+year+"</option>"
}inst.yearshtml+="</select>";
html+=inst.yearshtml;
inst.yearshtml=null
}}html+=this._get(inst,"yearSuffix");
if(showMonthAfterYear){html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml
}html+="</div>";
return html
},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period=="Y"?offset:0);
var month=inst.drawMonth+(period=="M"?offset:0);
var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period=="D"?offset:0);
var date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));
inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear();
if(period=="M"||period=="Y"){this._notifyChange(inst)
}},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");
var maxDate=this._getMinMaxDate(inst,"max");
var newDate=(minDate&&date<minDate?minDate:date);
newDate=(maxDate&&newDate>maxDate?maxDate:newDate);
return newDate
},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");
if(onChange){onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst])
}},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");
return(numMonths==null?[1,1]:(typeof numMonths=="number"?[1,numMonths]:numMonths))
},_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null)
},_getDaysInMonth:function(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate()
},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()
},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);
var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));
if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()))
}return this._isInRange(inst,date)
},_isInRange:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");
var maxDate=this._getMinMaxDate(inst,"max");
return((!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime()))
},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");
shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));
return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")}
},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;
inst.currentMonth=inst.selectedMonth;
inst.currentYear=inst.selectedYear
}var date=(day?(typeof day=="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst))
}});
function bindHover(dpDiv){var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return dpDiv.delegate(selector,"mouseout",function(){$(this).removeClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!=-1){$(this).removeClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!=-1){$(this).removeClass("ui-datepicker-next-hover")
}}).delegate(selector,"mouseover",function(){if(!$.datepicker._isDisabledDatepicker(instActive.inline?dpDiv.parent()[0]:instActive.input[0])){$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
$(this).addClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!=-1){$(this).addClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!=-1){$(this).addClass("ui-datepicker-next-hover")
}}})
}function extendRemove(target,props){$.extend(target,props);
for(var name in props){if(props[name]==null||props[name]==undefined){target[name]=props[name]
}}return target
}$.fn.datepicker=function(options){if(!this.length){return this
}if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv);
$.datepicker.initialized=true
}var otherArgs=Array.prototype.slice.call(arguments,1);
if(typeof options=="string"&&(options=="isDisabled"||options=="getDate"||options=="widget")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))
}if(options=="option"&&arguments.length==2&&typeof arguments[1]=="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))
}return this.each(function(){typeof options=="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)
})
};
$.datepicker=new Datepicker();
$.datepicker.initialized=false;
$.datepicker.uuid=new Date().getTime();
$.datepicker.version="1.9.2";
window["DP_jQuery_"+dpuuid]=$
})(jQuery);
(function(d,e){var b="ui-dialog ui-widget ui-widget-content ui-corner-all ",a={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},c={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};
d.widget("ui.dialog",{version:"1.9.2",options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(g){var f=d(this).css(g).offset().top;
if(f<0){d(this).css("top",g.top-f)
}}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1000},_create:function(){this.originalTitle=this.element.attr("title");
if(typeof this.originalTitle!=="string"){this.originalTitle=""
}this.oldPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};
this.options.title=this.options.title||this.originalTitle;
var k=this,j=this.options,m=j.title||"&#160;",h,l,f,i,g;
h=(this.uiDialog=d("<div>")).addClass(b+j.dialogClass).css({display:"none",outline:0,zIndex:j.zIndex}).attr("tabIndex",-1).keydown(function(n){if(j.closeOnEscape&&!n.isDefaultPrevented()&&n.keyCode&&n.keyCode===d.ui.keyCode.ESCAPE){k.close(n);
n.preventDefault()
}}).mousedown(function(n){k.moveToTop(false,n)
}).appendTo("body");
this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(h);
l=(this.uiDialogTitlebar=d("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown",function(){h.focus()
}).prependTo(h);
f=d("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role","button").click(function(n){n.preventDefault();
k.close(n)
}).appendTo(l);
(this.uiDialogTitlebarCloseText=d("<span>")).addClass("ui-icon ui-icon-closethick").text(j.closeText).appendTo(f);
i=d("<span>").uniqueId().addClass("ui-dialog-title").prependTo(l);
if(!j.title){i.html("&#160;")
}else{i.text(j.title)
}g=(this.uiDialogButtonPane=d("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
(this.uiButtonSet=d("<div>")).addClass("ui-dialog-buttonset").appendTo(g);
h.attr({role:"dialog","aria-labelledby":i.attr("id")});
l.find("*").add(l).disableSelection();
this._hoverable(f);
this._focusable(f);
if(j.draggable&&d.fn.draggable){this._makeDraggable()
}if(j.resizable&&d.fn.resizable){this._makeResizable()
}this._createButtons(j.buttons);
this._isOpen=false;
if(d.fn.bgiframe){h.bgiframe()
}this._on(h,{keydown:function(p){if(!j.modal||p.keyCode!==d.ui.keyCode.TAB){return
}var o=d(":tabbable",h),q=o.filter(":first"),n=o.filter(":last");
if(p.target===n[0]&&!p.shiftKey){q.focus(1);
return false
}else{if(p.target===q[0]&&p.shiftKey){n.focus(1);
return false
}}}})
},_init:function(){if(this.options.autoOpen){this.open()
}},_destroy:function(){var g,f=this.oldPosition;
if(this.overlay){this.overlay.destroy()
}this.uiDialog.hide();
this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
this.uiDialog.remove();
if(this.originalTitle){this.element.attr("title",this.originalTitle)
}g=f.parent.children().eq(f.index);
if(g.length&&g[0]!==this.element[0]){g.before(this.element)
}else{f.parent.append(this.element)
}},widget:function(){return this.uiDialog
},close:function(i){var h=this,g,f;
if(!this._isOpen){return
}if(false===this._trigger("beforeClose",i)){return
}this._isOpen=false;
if(this.overlay){this.overlay.destroy()
}if(this.options.hide){this._hide(this.uiDialog,this.options.hide,function(){h._trigger("close",i)
})
}else{this.uiDialog.hide();
this._trigger("close",i)
}d.ui.dialog.overlay.resize();
if(this.options.modal){g=0;
d(".ui-dialog").each(function(){if(this!==h.uiDialog[0]){f=d(this).css("z-index");
if(!isNaN(f)){g=Math.max(g,f)
}}});
d.ui.dialog.maxZ=g
}return this
},isOpen:function(){return this._isOpen
},moveToTop:function(i,h){var g=this.options,f;
if((g.modal&&!i)||(!g.stack&&!g.modal)){return this._trigger("focus",h)
}if(g.zIndex>d.ui.dialog.maxZ){d.ui.dialog.maxZ=g.zIndex
}if(this.overlay){d.ui.dialog.maxZ+=1;
d.ui.dialog.overlay.maxZ=d.ui.dialog.maxZ;
this.overlay.$el.css("z-index",d.ui.dialog.overlay.maxZ)
}f={scrollTop:this.element.scrollTop(),scrollLeft:this.element.scrollLeft()};
d.ui.dialog.maxZ+=1;
this.uiDialog.css("z-index",d.ui.dialog.maxZ);
this.element.attr(f);
this._trigger("focus",h);
return this
},open:function(){if(this._isOpen){return
}var h,g=this.options,f=this.uiDialog;
this._size();
this._position(g.position);
f.show(g.show);
this.overlay=g.modal?new d.ui.dialog.overlay(this):null;
this.moveToTop(true);
h=this.element.find(":tabbable");
if(!h.length){h=this.uiDialogButtonPane.find(":tabbable");
if(!h.length){h=f
}}h.eq(0).focus();
this._isOpen=true;
this._trigger("open");
return this
},_createButtons:function(h){var g=this,f=false;
this.uiDialogButtonPane.remove();
this.uiButtonSet.empty();
if(typeof h==="object"&&h!==null){d.each(h,function(){return !(f=true)
})
}if(f){d.each(h,function(i,k){var j,l;
k=d.isFunction(k)?{click:k,text:i}:k;
k=d.extend({type:"button"},k);
l=k.click;
k.click=function(){l.apply(g.element[0],arguments)
};
j=d("<button></button>",k).appendTo(g.uiButtonSet);
if(d.fn.button){j.button()
}});
this.uiDialog.addClass("ui-dialog-buttons");
this.uiDialogButtonPane.appendTo(this.uiDialog)
}else{this.uiDialog.removeClass("ui-dialog-buttons")
}},_makeDraggable:function(){var h=this,g=this.options;
function f(i){return{position:i.position,offset:i.offset}
}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(i,j){d(this).addClass("ui-dialog-dragging");
h._trigger("dragStart",i,f(j))
},drag:function(i,j){h._trigger("drag",i,f(j))
},stop:function(i,j){g.position=[j.position.left-h.document.scrollLeft(),j.position.top-h.document.scrollTop()];
d(this).removeClass("ui-dialog-dragging");
h._trigger("dragStop",i,f(j));
d.ui.dialog.overlay.resize()
}})
},_makeResizable:function(j){j=(j===e?this.options.resizable:j);
var k=this,i=this.options,f=this.uiDialog.css("position"),h=typeof j==="string"?j:"n,e,s,w,se,sw,ne,nw";
function g(l){return{originalPosition:l.originalPosition,originalSize:l.originalSize,position:l.position,size:l.size}
}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:i.maxWidth,maxHeight:i.maxHeight,minWidth:i.minWidth,minHeight:this._minHeight(),handles:h,start:function(l,m){d(this).addClass("ui-dialog-resizing");
k._trigger("resizeStart",l,g(m))
},resize:function(l,m){k._trigger("resize",l,g(m))
},stop:function(l,m){d(this).removeClass("ui-dialog-resizing");
i.height=d(this).height();
i.width=d(this).width();
k._trigger("resizeStop",l,g(m));
d.ui.dialog.overlay.resize()
}}).css("position",f).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
},_minHeight:function(){var f=this.options;
if(f.height==="auto"){return f.minHeight
}else{return Math.min(f.minHeight,f.height)
}},_position:function(g){var h=[],i=[0,0],f;
if(g){if(typeof g==="string"||(typeof g==="object"&&"0" in g)){h=g.split?g.split(" "):[g[0],g[1]];
if(h.length===1){h[1]=h[0]
}d.each(["left","top"],function(k,j){if(+h[k]===h[k]){i[k]=h[k];
h[k]=j
}});
g={my:h[0]+(i[0]<0?i[0]:"+"+i[0])+" "+h[1]+(i[1]<0?i[1]:"+"+i[1]),at:h.join(" ")}
}g=d.extend({},d.ui.dialog.prototype.options.position,g)
}else{g=d.ui.dialog.prototype.options.position
}f=this.uiDialog.is(":visible");
if(!f){this.uiDialog.show()
}this.uiDialog.position(g);
if(!f){this.uiDialog.hide()
}},_setOptions:function(h){var i=this,f={},g=false;
d.each(h,function(j,k){i._setOption(j,k);
if(j in a){g=true
}if(j in c){f[j]=k
}});
if(g){this._size()
}if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option",f)
}},_setOption:function(i,j){var h,k,g=this.uiDialog;
switch(i){case"buttons":this._createButtons(j);
break;
case"closeText":this.uiDialogTitlebarCloseText.text(""+j);
break;
case"dialogClass":g.removeClass(this.options.dialogClass).addClass(b+j);
break;
case"disabled":if(j){g.addClass("ui-dialog-disabled")
}else{g.removeClass("ui-dialog-disabled")
}break;
case"draggable":h=g.is(":data(draggable)");
if(h&&!j){g.draggable("destroy")
}if(!h&&j){this._makeDraggable()
}break;
case"position":this._position(j);
break;
case"resizable":k=g.is(":data(resizable)");
if(k&&!j){g.resizable("destroy")
}if(k&&typeof j==="string"){g.resizable("option","handles",j)
}if(!k&&j!==false){this._makeResizable(j)
}break;
case"title":var f=this.uiDialogTitlebar.find(".ui-dialog-title");
if(!j){f.html("&#160;")
}else{f.text(j)
}break
}this._super(i,j)
},_size:function(){var g,j,i,h=this.options,f=this.uiDialog.is(":visible");
this.element.show().css({width:"auto",minHeight:0,height:0});
if(h.minWidth>h.width){h.width=h.minWidth
}g=this.uiDialog.css({height:"auto",width:h.width}).outerHeight();
j=Math.max(0,h.minHeight-g);
if(h.height==="auto"){if(d.support.minHeight){this.element.css({minHeight:j,height:"auto"})
}else{this.uiDialog.show();
i=this.element.css("height","auto").height();
if(!f){this.uiDialog.hide()
}this.element.height(Math.max(i,j))
}}else{this.element.height(Math.max(h.height-g,0))
}if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())
}}});
d.extend(d.ui.dialog,{uuid:0,maxZ:0,getTitleId:function(f){var g=f.attr("id");
if(!g){this.uuid+=1;
g=this.uuid
}return"ui-dialog-title-"+g
},overlay:function(f){this.$el=d.ui.dialog.overlay.create(f)
}});
d.extend(d.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:d.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(f){return f+".dialog-overlay"
}).join(" "),create:function(g){if(this.instances.length===0){setTimeout(function(){if(d.ui.dialog.overlay.instances.length){d(document).bind(d.ui.dialog.overlay.events,function(h){if(d(h.target).zIndex()<d.ui.dialog.overlay.maxZ){return false
}})
}},1);
d(window).bind("resize.dialog-overlay",d.ui.dialog.overlay.resize)
}var f=(this.oldInstances.pop()||d("<div>").addClass("ui-widget-overlay"));
d(document).bind("keydown.dialog-overlay",function(h){var i=d.ui.dialog.overlay.instances;
if(i.length!==0&&i[i.length-1]===f&&g.options.closeOnEscape&&!h.isDefaultPrevented()&&h.keyCode&&h.keyCode===d.ui.keyCode.ESCAPE){g.close(h);
h.preventDefault()
}});
f.appendTo(document.body).css({width:this.width(),height:this.height()});
if(d.fn.bgiframe){f.bgiframe()
}this.instances.push(f);
return f
},destroy:function(f){var g=d.inArray(f,this.instances),h=0;
if(g!==-1){this.oldInstances.push(this.instances.splice(g,1)[0])
}if(this.instances.length===0){d([document,window]).unbind(".dialog-overlay")
}f.height(0).width(0).remove();
d.each(this.instances,function(){h=Math.max(h,this.css("z-index"))
});
this.maxZ=h
},height:function(){var g,f;
if(d.ui.ie){g=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
f=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);
if(g<f){return d(window).height()+"px"
}else{return g+"px"
}}else{return d(document).height()+"px"
}},width:function(){var f,g;
if(d.ui.ie){f=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);
g=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);
if(f<g){return d(window).width()+"px"
}else{return f+"px"
}}else{return d(document).width()+"px"
}},resize:function(){var f=d([]);
d.each(d.ui.dialog.overlay.instances,function(){f=f.add(this)
});
f.css({width:0,height:0}).css({width:d.ui.dialog.overlay.width(),height:d.ui.dialog.overlay.height()})
}});
d.extend(d.ui.dialog.overlay.prototype,{destroy:function(){d.ui.dialog.overlay.destroy(this.$el)
}})
}(jQuery));
(function(a,b){a.widget("ui.draggable",a.ui.mouse,{version:"1.9.2",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"
}(this.options.addClasses&&this.element.addClass("ui-draggable"));
(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));
this._mouseInit()
},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
this._mouseDestroy()
},_mouseCapture:function(c){var d=this.options;
if(this.helper||d.disabled||a(c.target).is(".ui-resizable-handle")){return false
}this.handle=this._getHandle(c);
if(!this.handle){return false
}a(d.iframeFix===true?"iframe":d.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")
});
return true
},_mouseStart:function(c){var d=this.options;
this.helper=this._createHelper(c);
this.helper.addClass("ui-draggable-dragging");
this._cacheHelperProportions();
if(a.ui.ddmanager){a.ui.ddmanager.current=this
}this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent();
this.offset=this.positionAbs=this.element.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
a.extend(this.offset,{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(c);
this.originalPageX=c.pageX;
this.originalPageY=c.pageY;
(d.cursorAt&&this._adjustOffsetFromHelper(d.cursorAt));
if(d.containment){this._setContainment()
}if(this._trigger("start",c)===false){this._clear();
return false
}this._cacheHelperProportions();
if(a.ui.ddmanager&&!d.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,c)
}this._mouseDrag(c,true);
if(a.ui.ddmanager){a.ui.ddmanager.dragStart(this,c)
}return true
},_mouseDrag:function(c,e){this.position=this._generatePosition(c);
this.positionAbs=this._convertPositionTo("absolute");
if(!e){var d=this._uiHash();
if(this._trigger("drag",c,d)===false){this._mouseUp({});
return false
}this.position=d.position
}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"
}if(a.ui.ddmanager){a.ui.ddmanager.drag(this,c)
}return false
},_mouseStop:function(e){var g=false;
if(a.ui.ddmanager&&!this.options.dropBehaviour){g=a.ui.ddmanager.drop(this,e)
}if(this.dropped){g=this.dropped;
this.dropped=false
}var c=this.element[0],f=false;
while(c&&(c=c.parentNode)){if(c==document){f=true
}}if(!f&&this.options.helper==="original"){return false
}if((this.options.revert=="invalid"&&!g)||(this.options.revert=="valid"&&g)||this.options.revert===true||(a.isFunction(this.options.revert)&&this.options.revert.call(this.element,g))){var d=this;
a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(d._trigger("stop",e)!==false){d._clear()
}})
}else{if(this._trigger("stop",e)!==false){this._clear()
}}return false
},_mouseUp:function(c){a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
});
if(a.ui.ddmanager){a.ui.ddmanager.dragStop(this,c)
}return a.ui.mouse.prototype._mouseUp.call(this,c)
},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})
}else{this._clear()
}return this
},_getHandle:function(c){var d=!this.options.handle||!a(this.options.handle,this.element).length?true:false;
a(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==c.target){d=true
}});
return d
},_createHelper:function(d){var e=this.options;
var c=a.isFunction(e.helper)?a(e.helper.apply(this.element[0],[d])):(e.helper=="clone"?this.element.clone().removeAttr("id"):this.element);
if(!c.parents("body").length){c.appendTo((e.appendTo=="parent"?this.element[0].parentNode:e.appendTo))
}if(c[0]!=this.element[0]&&!(/(fixed|absolute)/).test(c.css("position"))){c.css("position","absolute")
}return c
},_adjustOffsetFromHelper:function(c){if(typeof c=="string"){c=c.split(" ")
}if(a.isArray(c)){c={left:+c[0],top:+c[1]||0}
}if("left" in c){this.offset.click.left=c.left+this.margins.left
}if("right" in c){this.offset.click.left=this.helperProportions.width-c.right+this.margins.left
}if("top" in c){this.offset.click.top=c.top+this.margins.top
}if("bottom" in c){this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var c=this.offsetParent.offset();
if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();
c.top+=this.scrollParent.scrollTop()
}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.ui.ie)){c={top:0,left:0}
}return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var c=this.element.position();
return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var g=this.options;
if(g.containment=="parent"){g.containment=this.helper[0].parentNode
}if(g.containment=="document"||g.containment=="window"){this.containment=[g.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,g.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(g.containment=="document"?0:a(window).scrollLeft())+a(g.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(g.containment=="document"?0:a(window).scrollTop())+(a(g.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!(/^(document|window|parent)$/).test(g.containment)&&g.containment.constructor!=Array){var h=a(g.containment);
var e=h[0];
if(!e){return
}var f=h.offset();
var d=(a(e).css("overflow")!="hidden");
this.containment=[(parseInt(a(e).css("borderLeftWidth"),10)||0)+(parseInt(a(e).css("paddingLeft"),10)||0),(parseInt(a(e).css("borderTopWidth"),10)||0)+(parseInt(a(e).css("paddingTop"),10)||0),(d?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(a(e).css("borderLeftWidth"),10)||0)-(parseInt(a(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(d?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(a(e).css("borderTopWidth"),10)||0)-(parseInt(a(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
this.relative_container=h
}else{if(g.containment.constructor==Array){this.containment=g.containment
}}},_convertPositionTo:function(g,i){if(!i){i=this.position
}var e=g=="absolute"?1:-1;
var f=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=(/(html|body)/i).test(c[0].tagName);
return{top:(i.top+this.offset.relative.top*e+this.offset.parent.top*e-((this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(h?0:c.scrollTop()))*e)),left:(i.left+this.offset.relative.left*e+this.offset.parent.left*e-((this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():h?0:c.scrollLeft())*e))}
},_generatePosition:function(d){var e=this.options,l=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(l[0].tagName);
var h=d.pageX;
var g=d.pageY;
if(this.originalPosition){var c;
if(this.containment){if(this.relative_container){var k=this.relative_container.offset();
c=[this.containment[0]+k.left,this.containment[1]+k.top,this.containment[2]+k.left,this.containment[3]+k.top]
}else{c=this.containment
}if(d.pageX-this.offset.click.left<c[0]){h=c[0]+this.offset.click.left
}if(d.pageY-this.offset.click.top<c[1]){g=c[1]+this.offset.click.top
}if(d.pageX-this.offset.click.left>c[2]){h=c[2]+this.offset.click.left
}if(d.pageY-this.offset.click.top>c[3]){g=c[3]+this.offset.click.top
}}if(e.grid){var j=e.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/e.grid[1])*e.grid[1]:this.originalPageY;
g=c?(!(j-this.offset.click.top<c[1]||j-this.offset.click.top>c[3])?j:(!(j-this.offset.click.top<c[1])?j-e.grid[1]:j+e.grid[1])):j;
var f=e.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/e.grid[0])*e.grid[0]:this.originalPageX;
h=c?(!(f-this.offset.click.left<c[0]||f-this.offset.click.left>c[2])?f:(!(f-this.offset.click.left<c[0])?f-e.grid[0]:f+e.grid[0])):f
}}return{top:(g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:l.scrollTop())))),left:(h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:l.scrollLeft())))}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging");
if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()
}this.helper=null;
this.cancelHelperRemoval=false
},_trigger:function(c,d,e){e=e||this._uiHash();
a.ui.plugin.call(this,c,[d,e]);
if(c=="drag"){this.positionAbs=this._convertPositionTo("absolute")
}return a.Widget.prototype._trigger.call(this,c,d,e)
},plugins:{},_uiHash:function(c){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}});
a.ui.plugin.add("draggable","connectToSortable",{start:function(d,f){var e=a(this).data("draggable"),g=e.options,c=a.extend({},f,{item:e.element});
e.sortables=[];
a(g.connectToSortable).each(function(){var h=a.data(this,"sortable");
if(h&&!h.options.disabled){e.sortables.push({instance:h,shouldRevert:h.options.revert});
h.refreshPositions();
h._trigger("activate",d,c)
}})
},stop:function(d,f){var e=a(this).data("draggable"),c=a.extend({},f,{item:e.element});
a.each(e.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;
e.cancelHelperRemoval=true;
this.instance.cancelHelperRemoval=false;
if(this.shouldRevert){this.instance.options.revert=true
}this.instance._mouseStop(d);
this.instance.options.helper=this.instance.options._helper;
if(e.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})
}}else{this.instance.cancelHelperRemoval=false;
this.instance._trigger("deactivate",d,c)
}})
},drag:function(d,g){var f=a(this).data("draggable"),c=this;
var e=function(j){var p=this.offset.click.top,n=this.offset.click.left;
var h=this.positionAbs.top,l=this.positionAbs.left;
var k=j.height,m=j.width;
var q=j.top,i=j.left;
return a.ui.isOver(h+p,l+n,q,i,k,m)
};
a.each(f.sortables,function(j){var h=false;
var k=this;
this.instance.positionAbs=f.positionAbs;
this.instance.helperProportions=f.helperProportions;
this.instance.offset.click=f.offset.click;
if(this.instance._intersectsWith(this.instance.containerCache)){h=true;
a.each(f.sortables,function(){this.instance.positionAbs=f.positionAbs;
this.instance.helperProportions=f.helperProportions;
this.instance.offset.click=f.offset.click;
if(this!=k&&this.instance._intersectsWith(this.instance.containerCache)&&a.ui.contains(k.instance.element[0],this.instance.element[0])){h=false
}return h
})
}if(h){if(!this.instance.isOver){this.instance.isOver=1;
this.instance.currentItem=a(c).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);
this.instance.options._helper=this.instance.options.helper;
this.instance.options.helper=function(){return g.helper[0]
};
d.target=this.instance.currentItem[0];
this.instance._mouseCapture(d,true);
this.instance._mouseStart(d,true,true);
this.instance.offset.click.top=f.offset.click.top;
this.instance.offset.click.left=f.offset.click.left;
this.instance.offset.parent.left-=f.offset.parent.left-this.instance.offset.parent.left;
this.instance.offset.parent.top-=f.offset.parent.top-this.instance.offset.parent.top;
f._trigger("toSortable",d);
f.dropped=this.instance.element;
f.currentItem=f.element;
this.instance.fromOutside=f
}if(this.instance.currentItem){this.instance._mouseDrag(d)
}}else{if(this.instance.isOver){this.instance.isOver=0;
this.instance.cancelHelperRemoval=true;
this.instance.options.revert=false;
this.instance._trigger("out",d,this.instance._uiHash(this.instance));
this.instance._mouseStop(d,true);
this.instance.options.helper=this.instance.options._helper;
this.instance.currentItem.remove();
if(this.instance.placeholder){this.instance.placeholder.remove()
}f._trigger("fromSortable",d);
f.dropped=false
}}})
}});
a.ui.plugin.add("draggable","cursor",{start:function(d,e){var c=a("body"),f=a(this).data("draggable").options;
if(c.css("cursor")){f._cursor=c.css("cursor")
}c.css("cursor",f.cursor)
},stop:function(c,d){var e=a(this).data("draggable").options;
if(e._cursor){a("body").css("cursor",e._cursor)
}}});
a.ui.plugin.add("draggable","opacity",{start:function(d,e){var c=a(e.helper),f=a(this).data("draggable").options;
if(c.css("opacity")){f._opacity=c.css("opacity")
}c.css("opacity",f.opacity)
},stop:function(c,d){var e=a(this).data("draggable").options;
if(e._opacity){a(d.helper).css("opacity",e._opacity)
}}});
a.ui.plugin.add("draggable","scroll",{start:function(d,e){var c=a(this).data("draggable");
if(c.scrollParent[0]!=document&&c.scrollParent[0].tagName!="HTML"){c.overflowOffset=c.scrollParent.offset()
}},drag:function(e,f){var d=a(this).data("draggable"),g=d.options,c=false;
if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!g.axis||g.axis!="x"){if((d.overflowOffset.top+d.scrollParent[0].offsetHeight)-e.pageY<g.scrollSensitivity){d.scrollParent[0].scrollTop=c=d.scrollParent[0].scrollTop+g.scrollSpeed
}else{if(e.pageY-d.overflowOffset.top<g.scrollSensitivity){d.scrollParent[0].scrollTop=c=d.scrollParent[0].scrollTop-g.scrollSpeed
}}}if(!g.axis||g.axis!="y"){if((d.overflowOffset.left+d.scrollParent[0].offsetWidth)-e.pageX<g.scrollSensitivity){d.scrollParent[0].scrollLeft=c=d.scrollParent[0].scrollLeft+g.scrollSpeed
}else{if(e.pageX-d.overflowOffset.left<g.scrollSensitivity){d.scrollParent[0].scrollLeft=c=d.scrollParent[0].scrollLeft-g.scrollSpeed
}}}}else{if(!g.axis||g.axis!="x"){if(e.pageY-a(document).scrollTop()<g.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()-g.scrollSpeed)
}else{if(a(window).height()-(e.pageY-a(document).scrollTop())<g.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()+g.scrollSpeed)
}}}if(!g.axis||g.axis!="y"){if(e.pageX-a(document).scrollLeft()<g.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()-g.scrollSpeed)
}else{if(a(window).width()-(e.pageX-a(document).scrollLeft())<g.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()+g.scrollSpeed)
}}}}if(c!==false&&a.ui.ddmanager&&!g.dropBehaviour){a.ui.ddmanager.prepareOffsets(d,e)
}}});
a.ui.plugin.add("draggable","snap",{start:function(d,e){var c=a(this).data("draggable"),f=c.options;
c.snapElements=[];
a(f.snap.constructor!=String?(f.snap.items||":data(draggable)"):f.snap).each(function(){var h=a(this);
var g=h.offset();
if(this!=c.element[0]){c.snapElements.push({item:this,width:h.outerWidth(),height:h.outerHeight(),top:g.top,left:g.left})
}})
},drag:function(u,p){var g=a(this).data("draggable"),q=g.options;
var y=q.snapTolerance;
var x=p.offset.left,w=x+g.helperProportions.width,f=p.offset.top,e=f+g.helperProportions.height;
for(var v=g.snapElements.length-1;
v>=0;
v--){var s=g.snapElements[v].left,n=s+g.snapElements[v].width,m=g.snapElements[v].top,A=m+g.snapElements[v].height;
if(!((s-y<x&&x<n+y&&m-y<f&&f<A+y)||(s-y<x&&x<n+y&&m-y<e&&e<A+y)||(s-y<w&&w<n+y&&m-y<f&&f<A+y)||(s-y<w&&w<n+y&&m-y<e&&e<A+y))){if(g.snapElements[v].snapping){(g.options.snap.release&&g.options.snap.release.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))
}g.snapElements[v].snapping=false;
continue
}if(q.snapMode!="inner"){var c=Math.abs(m-e)<=y;
var z=Math.abs(A-f)<=y;
var j=Math.abs(s-w)<=y;
var k=Math.abs(n-x)<=y;
if(c){p.position.top=g._convertPositionTo("relative",{top:m-g.helperProportions.height,left:0}).top-g.margins.top
}if(z){p.position.top=g._convertPositionTo("relative",{top:A,left:0}).top-g.margins.top
}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s-g.helperProportions.width}).left-g.margins.left
}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n}).left-g.margins.left
}}var h=(c||z||j||k);
if(q.snapMode!="outer"){var c=Math.abs(m-f)<=y;
var z=Math.abs(A-e)<=y;
var j=Math.abs(s-x)<=y;
var k=Math.abs(n-w)<=y;
if(c){p.position.top=g._convertPositionTo("relative",{top:m,left:0}).top-g.margins.top
}if(z){p.position.top=g._convertPositionTo("relative",{top:A-g.helperProportions.height,left:0}).top-g.margins.top
}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s}).left-g.margins.left
}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n-g.helperProportions.width}).left-g.margins.left
}}if(!g.snapElements[v].snapping&&(c||z||j||k||h)){(g.options.snap.snap&&g.options.snap.snap.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))
}g.snapElements[v].snapping=(c||z||j||k||h)
}}});
a.ui.plugin.add("draggable","stack",{start:function(d,e){var g=a(this).data("draggable").options;
var f=a.makeArray(a(g.stack)).sort(function(i,h){return(parseInt(a(i).css("zIndex"),10)||0)-(parseInt(a(h).css("zIndex"),10)||0)
});
if(!f.length){return
}var c=parseInt(f[0].style.zIndex)||0;
a(f).each(function(h){this.style.zIndex=c+h
});
this[0].style.zIndex=c+f.length
}});
a.ui.plugin.add("draggable","zIndex",{start:function(d,e){var c=a(e.helper),f=a(this).data("draggable").options;
if(c.css("zIndex")){f._zIndex=c.css("zIndex")
}c.css("zIndex",f.zIndex)
},stop:function(c,d){var e=a(this).data("draggable").options;
if(e._zIndex){a(d.helper).css("zIndex",e._zIndex)
}}})
})(jQuery);
(function(a,b){a.widget("ui.droppable",{version:"1.9.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var d=this.options,c=d.accept;
this.isover=0;
this.isout=1;
this.accept=a.isFunction(c)?c:function(e){return e.is(c)
};
this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};
a.ui.ddmanager.droppables[d.scope]=a.ui.ddmanager.droppables[d.scope]||[];
a.ui.ddmanager.droppables[d.scope].push(this);
(d.addClasses&&this.element.addClass("ui-droppable"))
},_destroy:function(){var c=a.ui.ddmanager.droppables[this.options.scope];
for(var d=0;
d<c.length;
d++){if(c[d]==this){c.splice(d,1)
}}this.element.removeClass("ui-droppable ui-droppable-disabled")
},_setOption:function(c,d){if(c=="accept"){this.accept=a.isFunction(d)?d:function(e){return e.is(d)
}
}a.Widget.prototype._setOption.apply(this,arguments)
},_activate:function(d){var c=a.ui.ddmanager.current;
if(this.options.activeClass){this.element.addClass(this.options.activeClass)
}(c&&this._trigger("activate",d,this.ui(c)))
},_deactivate:function(d){var c=a.ui.ddmanager.current;
if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}(c&&this._trigger("deactivate",d,this.ui(c)))
},_over:function(d){var c=a.ui.ddmanager.current;
if(!c||(c.currentItem||c.element)[0]==this.element[0]){return
}if(this.accept.call(this.element[0],(c.currentItem||c.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)
}this._trigger("over",d,this.ui(c))
}},_out:function(d){var c=a.ui.ddmanager.current;
if(!c||(c.currentItem||c.element)[0]==this.element[0]){return
}if(this.accept.call(this.element[0],(c.currentItem||c.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("out",d,this.ui(c))
}},_drop:function(d,e){var c=e||a.ui.ddmanager.current;
if(!c||(c.currentItem||c.element)[0]==this.element[0]){return false
}var f=false;
this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var g=a.data(this,"droppable");
if(g.options.greedy&&!g.options.disabled&&g.options.scope==c.options.scope&&g.accept.call(g.element[0],(c.currentItem||c.element))&&a.ui.intersect(c,a.extend(g,{offset:g.element.offset()}),g.options.tolerance)){f=true;
return false
}});
if(f){return false
}if(this.accept.call(this.element[0],(c.currentItem||c.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("drop",d,this.ui(c));
return this.element
}return false
},ui:function(d){return{draggable:(d.currentItem||d.element),helper:d.helper,position:d.position,offset:d.positionAbs}
}});
a.ui.intersect=function(q,j,o){if(!j.offset){return false
}var e=(q.positionAbs||q.position.absolute).left,d=e+q.helperProportions.width,n=(q.positionAbs||q.position.absolute).top,m=n+q.helperProportions.height;
var g=j.offset.left,c=g+j.proportions.width,p=j.offset.top,k=p+j.proportions.height;
switch(o){case"fit":return(g<=e&&d<=c&&p<=n&&m<=k);
break;
case"intersect":return(g<e+(q.helperProportions.width/2)&&d-(q.helperProportions.width/2)<c&&p<n+(q.helperProportions.height/2)&&m-(q.helperProportions.height/2)<k);
break;
case"pointer":var h=((q.positionAbs||q.position.absolute).left+(q.clickOffset||q.offset.click).left),i=((q.positionAbs||q.position.absolute).top+(q.clickOffset||q.offset.click).top),f=a.ui.isOver(i,h,p,g,j.proportions.height,j.proportions.width);
return f;
break;
case"touch":return((n>=p&&n<=k)||(m>=p&&m<=k)||(n<p&&m>k))&&((e>=g&&e<=c)||(d>=g&&d<=c)||(e<g&&d>c));
break;
default:return false;
break
}};
a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(f,h){var c=a.ui.ddmanager.droppables[f.options.scope]||[];
var g=h?h.type:null;
var k=(f.currentItem||f.element).find(":data(droppable)").andSelf();
droppablesLoop:for(var e=0;
e<c.length;
e++){if(c[e].options.disabled||(f&&!c[e].accept.call(c[e].element[0],(f.currentItem||f.element)))){continue
}for(var d=0;
d<k.length;
d++){if(k[d]==c[e].element[0]){c[e].proportions.height=0;
continue droppablesLoop
}}c[e].visible=c[e].element.css("display")!="none";
if(!c[e].visible){continue
}if(g=="mousedown"){c[e]._activate.call(c[e],h)
}c[e].offset=c[e].element.offset();
c[e].proportions={width:c[e].element[0].offsetWidth,height:c[e].element[0].offsetHeight}
}},drop:function(c,d){var e=false;
a.each(a.ui.ddmanager.droppables[c.options.scope]||[],function(){if(!this.options){return
}if(!this.options.disabled&&this.visible&&a.ui.intersect(c,this,this.options.tolerance)){e=this._drop.call(this,d)||e
}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(c.currentItem||c.element))){this.isout=1;
this.isover=0;
this._deactivate.call(this,d)
}});
return e
},dragStart:function(c,d){c.element.parentsUntil("body").bind("scroll.droppable",function(){if(!c.options.refreshPositions){a.ui.ddmanager.prepareOffsets(c,d)
}})
},drag:function(c,d){if(c.options.refreshPositions){a.ui.ddmanager.prepareOffsets(c,d)
}a.each(a.ui.ddmanager.droppables[c.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return
}var g=a.ui.intersect(c,this,this.options.tolerance);
var i=!g&&this.isover==1?"isout":(g&&this.isover==0?"isover":null);
if(!i){return
}var h;
if(this.options.greedy){var f=this.options.scope;
var e=this.element.parents(":data(droppable)").filter(function(){return a.data(this,"droppable").options.scope===f
});
if(e.length){h=a.data(e[0],"droppable");
h.greedyChild=(i=="isover"?1:0)
}}if(h&&i=="isover"){h.isover=0;
h.isout=1;
h._out.call(h,d)
}this[i]=1;
this[i=="isout"?"isover":"isout"]=0;
this[i=="isover"?"_over":"_out"].call(this,d);
if(h&&i=="isout"){h.isout=0;
h.isover=1;
h._over.call(h,d)
}})
},dragStop:function(c,d){c.element.parentsUntil("body").unbind("scroll.droppable");
if(!c.options.refreshPositions){a.ui.ddmanager.prepareOffsets(c,d)
}}}
})(jQuery);
(jQuery.effects||(function(b,d){var a=b.uiBackCompat!==false,c="ui-effects-";
b.effects={effect:{}};
/*!
     * jQuery Color Animations v2.0.0
     * http://jquery.com/
     *
     * Copyright 2012 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * Date: Mon Aug 13 13:41:02 2012 -0500
     */
(function(s,h){var o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),l=/^([\-+])=\s*(\d+\.?\d*)/,k=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]
}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1]*2.55,t[2]*2.55,t[3]*2.55,t[4]]
}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]
}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]
}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]
}}],i=s.Color=function(u,v,t,w){return new s.Color.fn.parse(u,v,t,w)
},n={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},r={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},q=i.support={},f=s("<p>")[0],e,p=s.each;
f.style.cssText="background-color:rgba(1,1,1,.5)";
q.rgba=f.style.backgroundColor.indexOf("rgba")>-1;
p(n,function(t,u){u.cache="_"+t;
u.props.alpha={idx:3,type:"percent",def:1}
});
function m(u,w,v){var t=r[w.type]||{};
if(u==null){return(v||!w.def)?null:w.def
}u=t.floor?~~u:parseFloat(u);
if(isNaN(u)){return w.def
}if(t.mod){return(u+t.mod)%t.mod
}return 0>u?0:t.max<u?t.max:u
}function j(t){var v=i(),u=v._rgba=[];
t=t.toLowerCase();
p(k,function(A,B){var y,z=B.re.exec(t),x=z&&B.parse(z),w=B.space||"rgba";
if(x){y=v[w](x);
v[n[w].cache]=y[n[w].cache];
u=v._rgba=y._rgba;
return false
}});
if(u.length){if(u.join()==="0,0,0,0"){s.extend(u,e.transparent)
}return v
}return e[t]
}i.fn=s.extend(i.prototype,{parse:function(z,x,t,y){if(z===h){this._rgba=[null,null,null,null];
return this
}if(z.jquery||z.nodeType){z=s(z).css(x);
x=h
}var w=this,v=s.type(z),u=this._rgba=[];
if(x!==h){z=[z,x,t,y];
v="array"
}if(v==="string"){return this.parse(j(z)||e._default)
}if(v==="array"){p(n.rgba.props,function(A,B){u[B.idx]=m(z[B.idx],B)
});
return this
}if(v==="object"){if(z instanceof i){p(n,function(A,B){if(z[B.cache]){w[B.cache]=z[B.cache].slice()
}})
}else{p(n,function(B,C){var A=C.cache;
p(C.props,function(D,E){if(!w[A]&&C.to){if(D==="alpha"||z[D]==null){return
}w[A]=C.to(w._rgba)
}w[A][E.idx]=m(z[D],E,true)
});
if(w[A]&&b.inArray(null,w[A].slice(0,3))<0){w[A][3]=1;
if(C.from){w._rgba=C.from(w[A])
}}})
}return this
}},is:function(v){var t=i(v),w=true,u=this;
p(n,function(x,z){var A,y=t[z.cache];
if(y){A=u[z.cache]||z.to&&z.to(u._rgba)||[];
p(z.props,function(B,C){if(y[C.idx]!=null){w=(y[C.idx]===A[C.idx]);
return w
}})
}return w
});
return w
},_space:function(){var t=[],u=this;
p(n,function(v,w){if(u[w.cache]){t.push(v)
}});
return t.pop()
},transition:function(u,A){var v=i(u),w=v._space(),x=n[w],y=this.alpha()===0?i("transparent"):this,z=y[x.cache]||x.to(y._rgba),t=z.slice();
v=v[x.cache];
p(x.props,function(E,G){var D=G.idx,C=z[D],B=v[D],F=r[G.type]||{};
if(B===null){return
}if(C===null){t[D]=B
}else{if(F.mod){if(B-C>F.mod/2){C+=F.mod
}else{if(C-B>F.mod/2){C-=F.mod
}}}t[D]=m((B-C)*A+C,G)
}});
return this[w](t)
},blend:function(w){if(this._rgba[3]===1){return this
}var v=this._rgba.slice(),u=v.pop(),t=i(w)._rgba;
return i(s.map(v,function(x,y){return(1-u)*t[y]+u*x
}))
},toRgbaString:function(){var u="rgba(",t=s.map(this._rgba,function(w,x){return w==null?(x>2?1:0):w
});
if(t[3]===1){t.pop();
u="rgb("
}return u+t.join()+")"
},toHslaString:function(){var u="hsla(",t=s.map(this.hsla(),function(w,x){if(w==null){w=x>2?1:0
}if(x&&x<3){w=Math.round(w*100)+"%"
}return w
});
if(t[3]===1){t.pop();
u="hsl("
}return u+t.join()+")"
},toHexString:function(t){var u=this._rgba.slice(),v=u.pop();
if(t){u.push(~~(v*255))
}return"#"+s.map(u,function(w){w=(w||0).toString(16);
return w.length===1?"0"+w:w
}).join("")
},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()
}});
i.fn.parse.prototype=i.fn;
function g(v,u,t){t=(t+1)%1;
if(t*6<1){return v+(u-v)*t*6
}if(t*2<1){return u
}if(t*3<2){return v+(u-v)*((2/3)-t)*6
}return v
}n.hsla.to=function(v){if(v[0]==null||v[1]==null||v[2]==null){return[null,null,null,v[3]]
}var t=v[0]/255,y=v[1]/255,z=v[2]/255,B=v[3],A=Math.max(t,y,z),w=Math.min(t,y,z),C=A-w,D=A+w,u=D*0.5,x,E;
if(w===A){x=0
}else{if(t===A){x=(60*(y-z)/C)+360
}else{if(y===A){x=(60*(z-t)/C)+120
}else{x=(60*(t-y)/C)+240
}}}if(u===0||u===1){E=u
}else{if(u<=0.5){E=C/D
}else{E=C/(2-D)
}}return[Math.round(x)%360,E,u,B==null?1:B]
};
n.hsla.from=function(x){if(x[0]==null||x[1]==null||x[2]==null){return[null,null,null,x[3]]
}var w=x[0]/360,v=x[1],u=x[2],t=x[3],y=u<=0.5?u*(1+v):u+v-u*v,z=2*u-y;
return[Math.round(g(z,y,w+(1/3))*255),Math.round(g(z,y,w)*255),Math.round(g(z,y,w-(1/3))*255),t]
};
p(n,function(u,w){var v=w.props,t=w.cache,y=w.to,x=w.from;
i.fn[u]=function(D){if(y&&!this[t]){this[t]=y(this._rgba)
}if(D===h){return this[t].slice()
}var A,C=s.type(D),z=(C==="array"||C==="object")?D:arguments,B=this[t].slice();
p(v,function(E,G){var F=z[C==="object"?E:G.idx];
if(F==null){F=B[G.idx]
}B[G.idx]=m(F,G)
});
if(x){A=i(x(B));
A[t]=B;
return A
}else{return i(B)
}};
p(v,function(z,A){if(i.fn[z]){return
}i.fn[z]=function(E){var G=s.type(E),D=(z==="alpha"?(this._hsla?"hsla":"rgba"):u),C=this[D](),F=C[A.idx],B;
if(G==="undefined"){return F
}if(G==="function"){E=E.call(this,F);
G=s.type(E)
}if(E==null&&A.empty){return this
}if(G==="string"){B=l.exec(E);
if(B){E=F+parseFloat(B[2])*(B[1]==="+"?1:-1)
}}C[A.idx]=E;
return this[D](C)
}
})
});
p(o,function(t,u){s.cssHooks[u]={set:function(z,A){var w,y,v="";
if(s.type(A)!=="string"||(w=j(A))){A=i(w||A);
if(!q.rgba&&A._rgba[3]!==1){y=u==="backgroundColor"?z.parentNode:z;
while((v===""||v==="transparent")&&y&&y.style){try{v=s.css(y,"backgroundColor");
y=y.parentNode
}catch(B){}}A=A.blend(v&&v!=="transparent"?v:"_default")
}A=A.toRgbaString()
}try{z.style[u]=A
}catch(x){}}};
s.fx.step[u]=function(v){if(!v.colorInit){v.start=i(v.elem,u);
v.end=i(v.end);
v.colorInit=true
}s.cssHooks[u].set(v.elem,v.start.transition(v.end,v.pos))
}
});
s.cssHooks.borderColor={expand:function(u){var t={};
p(["Top","Right","Bottom","Left"],function(w,v){t["border"+v+"Color"]=u
});
return t
}};
e=s.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
})(jQuery);
(function(){var f=["add","remove","toggle"],g={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
b.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(i,j){b.fx.step[j]=function(k){if(k.end!=="none"&&!k.setAttr||k.pos===1&&!k.setAttr){jQuery.style(k.elem,j,k.end);
k.setAttr=true
}}
});
function h(){var k=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,l={},j,i;
if(k&&k.length&&k[0]&&k[k[0]]){i=k.length;
while(i--){j=k[i];
if(typeof k[j]==="string"){l[b.camelCase(j)]=k[j]
}}}else{for(j in k){if(typeof k[j]==="string"){l[j]=k[j]
}}}return l
}function e(i,k){var m={},j,l;
for(j in k){l=k[j];
if(i[j]!==l){if(!g[j]){if(b.fx.step[j]||!isNaN(parseFloat(l))){m[j]=l
}}}}return m
}b.effects.animateClass=function(i,j,m,l){var k=b.speed(j,m,l);
return this.queue(function(){var p=b(this),n=p.attr("class")||"",o,q=k.children?p.find("*").andSelf():p;
q=q.map(function(){var r=b(this);
return{el:r,start:h.call(this)}
});
o=function(){b.each(f,function(r,s){if(i[s]){p[s+"Class"](i[s])
}})
};
o();
q=q.map(function(){this.end=h.call(this.el[0]);
this.diff=e(this.start,this.end);
return this
});
p.attr("class",n);
q=q.map(function(){var t=this,r=b.Deferred(),s=jQuery.extend({},k,{queue:false,complete:function(){r.resolve(t)
}});
this.el.animate(this.diff,s);
return r.promise()
});
b.when.apply(b,q.get()).done(function(){o();
b.each(arguments,function(){var r=this.el;
b.each(this.diff,function(s){r.css(s,"")
})
});
k.complete.call(p[0])
})
})
};
b.fn.extend({_addClass:b.fn.addClass,addClass:function(j,i,l,k){return i?b.effects.animateClass.call(this,{add:j},i,l,k):this._addClass(j)
},_removeClass:b.fn.removeClass,removeClass:function(j,i,l,k){return i?b.effects.animateClass.call(this,{remove:j},i,l,k):this._removeClass(j)
},_toggleClass:b.fn.toggleClass,toggleClass:function(k,j,i,m,l){if(typeof j==="boolean"||j===d){if(!i){return this._toggleClass(k,j)
}else{return b.effects.animateClass.call(this,(j?{add:k}:{remove:k}),i,m,l)
}}else{return b.effects.animateClass.call(this,{toggle:k},j,i,m)
}},switchClass:function(i,k,j,m,l){return b.effects.animateClass.call(this,{add:k,remove:i},j,m,l)
}})
})();
(function(){b.extend(b.effects,{version:"1.9.2",save:function(h,j){for(var g=0;
g<j.length;
g++){if(j[g]!==null){h.data(c+j[g],h[0].style[j[g]])
}}},restore:function(h,k){var j,g;
for(g=0;
g<k.length;
g++){if(k[g]!==null){j=h.data(c+k[g]);
if(j===d){j=""
}h.css(k[g],j)
}}},setMode:function(g,h){if(h==="toggle"){h=g.is(":hidden")?"show":"hide"
}return h
},getBaseline:function(h,i){var j,g;
switch(h[0]){case"top":j=0;
break;
case"middle":j=0.5;
break;
case"bottom":j=1;
break;
default:j=h[0]/i.height
}switch(h[1]){case"left":g=0;
break;
case"center":g=0.5;
break;
case"right":g=1;
break;
default:g=h[1]/i.width
}return{x:g,y:j}
},createWrapper:function(h){if(h.parent().is(".ui-effects-wrapper")){return h.parent()
}var i={width:h.outerWidth(true),height:h.outerHeight(true),"float":h.css("float")},l=b("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),g={width:h.width(),height:h.height()},k=document.activeElement;
try{k.id
}catch(j){k=document.body
}h.wrap(l);
if(h[0]===k||b.contains(h[0],k)){b(k).focus()
}l=h.parent();
if(h.css("position")==="static"){l.css({position:"relative"});
h.css({position:"relative"})
}else{b.extend(i,{position:h.css("position"),zIndex:h.css("z-index")});
b.each(["top","left","bottom","right"],function(m,n){i[n]=h.css(n);
if(isNaN(parseInt(i[n],10))){i[n]="auto"
}});
h.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})
}h.css(g);
return l.css(i).show()
},removeWrapper:function(g){var h=document.activeElement;
if(g.parent().is(".ui-effects-wrapper")){g.parent().replaceWith(g);
if(g[0]===h||b.contains(g[0],h)){b(h).focus()
}}return g
},setTransition:function(h,j,g,i){i=i||{};
b.each(j,function(l,k){var m=h.cssUnit(k);
if(m[0]>0){i[k]=m[0]*g+m[1]
}});
return i
}});
function e(h,g,i,j){if(b.isPlainObject(h)){g=h;
h=h.effect
}h={effect:h};
if(g==null){g={}
}if(b.isFunction(g)){j=g;
i=null;
g={}
}if(typeof g==="number"||b.fx.speeds[g]){j=i;
i=g;
g={}
}if(b.isFunction(i)){j=i;
i=null
}if(g){b.extend(h,g)
}i=i||g.duration;
h.duration=b.fx.off?0:typeof i==="number"?i:i in b.fx.speeds?b.fx.speeds[i]:b.fx.speeds._default;
h.complete=j||g.complete;
return h
}function f(g){if(!g||typeof g==="number"||b.fx.speeds[g]){return true
}if(typeof g==="string"&&!b.effects.effect[g]){if(a&&b.effects[g]){return false
}return true
}return false
}b.fn.extend({effect:function(){var i=e.apply(this,arguments),l=i.mode,g=i.queue,h=b.effects.effect[i.effect],j=!h&&a&&b.effects[i.effect];
if(b.fx.off||!(h||j)){if(l){return this[l](i.duration,i.complete)
}else{return this.each(function(){if(i.complete){i.complete.call(this)
}})
}}function k(o){var p=b(this),n=i.complete,q=i.mode;
function m(){if(b.isFunction(n)){n.call(p[0])
}if(b.isFunction(o)){o()
}}if(p.is(":hidden")?q==="hide":q==="show"){m()
}else{h.call(p[0],i,m)
}}if(h){return g===false?this.each(k):this.queue(g||"fx",k)
}else{return j.call(this,{options:i,duration:i.duration,callback:i.complete,mode:i.mode})
}},_show:b.fn.show,show:function(h){if(f(h)){return this._show.apply(this,arguments)
}else{var g=e.apply(this,arguments);
g.mode="show";
return this.effect.call(this,g)
}},_hide:b.fn.hide,hide:function(h){if(f(h)){return this._hide.apply(this,arguments)
}else{var g=e.apply(this,arguments);
g.mode="hide";
return this.effect.call(this,g)
}},__toggle:b.fn.toggle,toggle:function(h){if(f(h)||typeof h==="boolean"||b.isFunction(h)){return this.__toggle.apply(this,arguments)
}else{var g=e.apply(this,arguments);
g.mode="toggle";
return this.effect.call(this,g)
}},cssUnit:function(g){var h=this.css(g),i=[];
b.each(["em","px","%","pt"],function(j,k){if(h.indexOf(k)>0){i=[parseFloat(h),k]
}});
return i
}})
})();
(function(){var e={};
b.each(["Quad","Cubic","Quart","Quint","Expo"],function(g,f){e[f]=function(h){return Math.pow(h,g+2)
}
});
b.extend(e,{Sine:function(f){return 1-Math.cos(f*Math.PI/2)
},Circ:function(f){return 1-Math.sqrt(1-f*f)
},Elastic:function(f){return f===0||f===1?f:-Math.pow(2,8*(f-1))*Math.sin(((f-1)*80-7.5)*Math.PI/15)
},Back:function(f){return f*f*(3*f-2)
},Bounce:function(h){var f,g=4;
while(h<((f=Math.pow(2,--g))-1)/11){}return 1/Math.pow(4,3-g)-7.5625*Math.pow((f*3-2)/22-h,2)
}});
b.each(e,function(g,f){b.easing["easeIn"+g]=f;
b.easing["easeOut"+g]=function(h){return 1-f(1-h)
};
b.easing["easeInOut"+g]=function(h){return h<0.5?f(h*2)/2:1-f(h*-2+2)/2
}
})
})()
})(jQuery));
(function(b,d){var a=/up|down|vertical/,c=/up|left|vertical|horizontal/;
b.effects.effect.blind=function(g,m){var h=b(this),q=["position","top","bottom","left","right","height","width"],n=b.effects.setMode(h,g.mode||"hide"),r=g.direction||"up",j=a.test(r),i=j?"height":"width",p=j?"top":"left",t=c.test(r),l={},s=n==="show",f,e,k;
if(h.parent().is(".ui-effects-wrapper")){b.effects.save(h.parent(),q)
}else{b.effects.save(h,q)
}h.show();
f=b.effects.createWrapper(h).css({overflow:"hidden"});
e=f[i]();
k=parseFloat(f.css(p))||0;
l[i]=s?e:0;
if(!t){h.css(j?"bottom":"right",0).css(j?"top":"left","auto").css({position:"absolute"});
l[p]=s?k:e+k
}if(s){f.css(i,0);
if(!t){f.css(p,k+e)
}}f.animate(l,{duration:g.duration,easing:g.easing,queue:false,complete:function(){if(n==="hide"){h.hide()
}b.effects.restore(h,q);
b.effects.removeWrapper(h);
m()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.bounce=function(m,l){var c=a(this),d=["position","top","bottom","left","right","height","width"],k=a.effects.setMode(c,m.mode||"effect"),j=k==="hide",v=k==="show",w=m.direction||"up",e=m.distance,h=m.times||5,x=h*2+(v||j?1:0),u=m.duration/x,p=m.easing,f=(w==="up"||w==="down")?"top":"left",n=(w==="up"||w==="left"),t,g,s,q=c.queue(),r=q.length;
if(v||j){d.push("opacity")
}a.effects.save(c,d);
c.show();
a.effects.createWrapper(c);
if(!e){e=c[f==="top"?"outerHeight":"outerWidth"]()/3
}if(v){s={opacity:1};
s[f]=0;
c.css("opacity",0).css(f,n?-e*2:e*2).animate(s,u,p)
}if(j){e=e/Math.pow(2,h-1)
}s={};
s[f]=0;
for(t=0;
t<h;
t++){g={};
g[f]=(n?"-=":"+=")+e;
c.animate(g,u,p).animate(s,u,p);
e=j?e*2:e/2
}if(j){g={opacity:0};
g[f]=(n?"-=":"+=")+e;
c.animate(g,u,p)
}c.queue(function(){if(j){c.hide()
}a.effects.restore(c,d);
a.effects.removeWrapper(c);
l()
});
if(r>1){q.splice.apply(q,[1,0].concat(q.splice(r,x+1)))
}c.dequeue()
}
})(jQuery);
(function(a,b){a.effects.effect.clip=function(f,i){var g=a(this),m=["position","top","bottom","left","right","height","width"],l=a.effects.setMode(g,f.mode||"hide"),p=l==="show",n=f.direction||"vertical",k=n==="vertical",q=k?"height":"width",j=k?"top":"left",h={},d,e,c;
a.effects.save(g,m);
g.show();
d=a.effects.createWrapper(g).css({overflow:"hidden"});
e=(g[0].tagName==="IMG")?d:g;
c=e[q]();
if(p){e.css(q,0);
e.css(j,c/2)
}h[q]=p?c:0;
h[j]=p?0:c/2;
e.animate(h,{queue:false,duration:f.duration,easing:f.easing,complete:function(){if(!p){g.hide()
}a.effects.restore(g,m);
a.effects.removeWrapper(g);
i()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.drop=function(d,h){var e=a(this),j=["position","top","bottom","left","right","opacity","height","width"],i=a.effects.setMode(e,d.mode||"hide"),l=i==="show",k=d.direction||"left",f=(k==="up"||k==="down")?"top":"left",m=(k==="up"||k==="left")?"pos":"neg",g={opacity:l?1:0},c;
a.effects.save(e,j);
e.show();
a.effects.createWrapper(e);
c=d.distance||e[f==="top"?"outerHeight":"outerWidth"](true)/2;
if(l){e.css("opacity",0).css(f,m==="pos"?-c:c)
}g[f]=(l?(m==="pos"?"+=":"-="):(m==="pos"?"-=":"+="))+c;
e.animate(g,{queue:false,duration:d.duration,easing:d.easing,complete:function(){if(i==="hide"){e.hide()
}a.effects.restore(e,j);
a.effects.removeWrapper(e);
h()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.explode=function(s,r){var k=s.pieces?Math.round(Math.sqrt(s.pieces)):3,d=k,c=a(this),m=a.effects.setMode(c,s.mode||"hide"),w=m==="show",g=c.show().css("visibility","hidden").offset(),t=Math.ceil(c.outerWidth()/d),q=Math.ceil(c.outerHeight()/k),h=[],v,u,e,p,n,l;
function x(){h.push(this);
if(h.length===k*d){f()
}}for(v=0;
v<k;
v++){p=g.top+v*q;
l=v-(k-1)/2;
for(u=0;
u<d;
u++){e=g.left+u*t;
n=u-(d-1)/2;
c.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-u*t,top:-v*q}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:t,height:q,left:e+(w?n*t:0),top:p+(w?l*q:0),opacity:w?0:1}).animate({left:e+(w?0:n*t),top:p+(w?0:l*q),opacity:w?1:0},s.duration||500,s.easing,x)
}}function f(){c.css({visibility:"visible"});
a(h).remove();
if(!w){c.hide()
}r()
}}
})(jQuery);
(function(a,b){a.effects.effect.fade=function(f,c){var d=a(this),e=a.effects.setMode(d,f.mode||"toggle");
d.animate({opacity:e},{queue:false,duration:f.duration,easing:f.easing,complete:c})
}
})(jQuery);
(function(a,b){a.effects.effect.fold=function(e,i){var f=a(this),n=["position","top","bottom","left","right","height","width"],k=a.effects.setMode(f,e.mode||"hide"),r=k==="show",l=k==="hide",t=e.size||15,m=/([0-9]+)%/.exec(t),s=!!e.horizFirst,j=r!==s,g=j?["width","height"]:["height","width"],h=e.duration/2,d,c,q={},p={};
a.effects.save(f,n);
f.show();
d=a.effects.createWrapper(f).css({overflow:"hidden"});
c=j?[d.width(),d.height()]:[d.height(),d.width()];
if(m){t=parseInt(m[1],10)/100*c[l?0:1]
}if(r){d.css(s?{height:0,width:t}:{height:t,width:0})
}q[g[0]]=r?c[0]:t;
p[g[1]]=r?c[1]:0;
d.animate(q,h,e.easing).animate(p,h,e.easing,function(){if(l){f.hide()
}a.effects.restore(f,n);
a.effects.removeWrapper(f);
i()
})
}
})(jQuery);
(function(a,b){a.effects.effect.highlight=function(h,c){var e=a(this),d=["backgroundImage","backgroundColor","opacity"],g=a.effects.setMode(e,h.mode||"show"),f={backgroundColor:e.css("backgroundColor")};
if(g==="hide"){f.opacity=0
}a.effects.save(e,d);
e.show().css({backgroundImage:"none",backgroundColor:h.color||"#ffff99"}).animate(f,{queue:false,duration:h.duration,easing:h.easing,complete:function(){if(g==="hide"){e.hide()
}a.effects.restore(e,d);
c()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.pulsate=function(c,g){var e=a(this),k=a.effects.setMode(e,c.mode||"show"),p=k==="show",l=k==="hide",q=(p||k==="hide"),m=((c.times||5)*2)+(q?1:0),f=c.duration/m,n=0,j=e.queue(),d=j.length,h;
if(p||!e.is(":visible")){e.css("opacity",0).show();
n=1
}for(h=1;
h<m;
h++){e.animate({opacity:n},f,c.easing);
n=1-n
}e.animate({opacity:n},f,c.easing);
e.queue(function(){if(l){e.hide()
}g()
});
if(d>1){j.splice.apply(j,[1,0].concat(j.splice(d,m+1)))
}e.dequeue()
}
})(jQuery);
(function(a,b){a.effects.effect.puff=function(j,c){var h=a(this),i=a.effects.setMode(h,j.mode||"hide"),f=i==="hide",g=parseInt(j.percent,10)||150,e=g/100,d={height:h.height(),width:h.width(),outerHeight:h.outerHeight(),outerWidth:h.outerWidth()};
a.extend(j,{effect:"scale",queue:false,fade:true,mode:i,complete:c,percent:f?g:100,from:f?d:{height:d.height*e,width:d.width*e,outerHeight:d.outerHeight*e,outerWidth:d.outerWidth*e}});
h.effect(j)
};
a.effects.effect.scale=function(c,f){var d=a(this),l=a.extend(true,{},c),g=a.effects.setMode(d,c.mode||"effect"),h=parseInt(c.percent,10)||(parseInt(c.percent,10)===0?0:(g==="hide"?0:100)),j=c.direction||"both",k=c.origin,e={height:d.height(),width:d.width(),outerHeight:d.outerHeight(),outerWidth:d.outerWidth()},i={y:j!=="horizontal"?(h/100):1,x:j!=="vertical"?(h/100):1};
l.effect="size";
l.queue=false;
l.complete=f;
if(g!=="effect"){l.origin=k||["middle","center"];
l.restore=true
}l.from=c.from||(g==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:e);
l.to={height:e.height*i.y,width:e.width*i.x,outerHeight:e.outerHeight*i.y,outerWidth:e.outerWidth*i.x};
if(l.fade){if(g==="show"){l.from.opacity=0;
l.to.opacity=1
}if(g==="hide"){l.from.opacity=1;
l.to.opacity=0
}}d.effect(l)
};
a.effects.effect.size=function(l,k){var q,i,j,c=a(this),p=["position","top","bottom","left","right","width","height","overflow","opacity"],n=["position","top","bottom","left","right","overflow","opacity"],m=["width","height","overflow"],g=["fontSize"],s=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],h=a.effects.setMode(c,l.mode||"effect"),r=l.restore||h!=="effect",v=l.scale||"both",t=l.origin||["middle","center"],u=c.css("position"),e=r?p:n,f={height:0,width:0,outerHeight:0,outerWidth:0};
if(h==="show"){c.show()
}q={height:c.height(),width:c.width(),outerHeight:c.outerHeight(),outerWidth:c.outerWidth()};
if(l.mode==="toggle"&&h==="show"){c.from=l.to||f;
c.to=l.from||q
}else{c.from=l.from||(h==="show"?f:q);
c.to=l.to||(h==="hide"?f:q)
}j={from:{y:c.from.height/q.height,x:c.from.width/q.width},to:{y:c.to.height/q.height,x:c.to.width/q.width}};
if(v==="box"||v==="both"){if(j.from.y!==j.to.y){e=e.concat(s);
c.from=a.effects.setTransition(c,s,j.from.y,c.from);
c.to=a.effects.setTransition(c,s,j.to.y,c.to)
}if(j.from.x!==j.to.x){e=e.concat(d);
c.from=a.effects.setTransition(c,d,j.from.x,c.from);
c.to=a.effects.setTransition(c,d,j.to.x,c.to)
}}if(v==="content"||v==="both"){if(j.from.y!==j.to.y){e=e.concat(g).concat(m);
c.from=a.effects.setTransition(c,g,j.from.y,c.from);
c.to=a.effects.setTransition(c,g,j.to.y,c.to)
}}a.effects.save(c,e);
c.show();
a.effects.createWrapper(c);
c.css("overflow","hidden").css(c.from);
if(t){i=a.effects.getBaseline(t,q);
c.from.top=(q.outerHeight-c.outerHeight())*i.y;
c.from.left=(q.outerWidth-c.outerWidth())*i.x;
c.to.top=(q.outerHeight-c.to.outerHeight)*i.y;
c.to.left=(q.outerWidth-c.to.outerWidth)*i.x
}c.css(c.from);
if(v==="content"||v==="both"){s=s.concat(["marginTop","marginBottom"]).concat(g);
d=d.concat(["marginLeft","marginRight"]);
m=p.concat(s).concat(d);
c.find("*[width]").each(function(){var w=a(this),o={height:w.height(),width:w.width(),outerHeight:w.outerHeight(),outerWidth:w.outerWidth()};
if(r){a.effects.save(w,m)
}w.from={height:o.height*j.from.y,width:o.width*j.from.x,outerHeight:o.outerHeight*j.from.y,outerWidth:o.outerWidth*j.from.x};
w.to={height:o.height*j.to.y,width:o.width*j.to.x,outerHeight:o.height*j.to.y,outerWidth:o.width*j.to.x};
if(j.from.y!==j.to.y){w.from=a.effects.setTransition(w,s,j.from.y,w.from);
w.to=a.effects.setTransition(w,s,j.to.y,w.to)
}if(j.from.x!==j.to.x){w.from=a.effects.setTransition(w,d,j.from.x,w.from);
w.to=a.effects.setTransition(w,d,j.to.x,w.to)
}w.css(w.from);
w.animate(w.to,l.duration,l.easing,function(){if(r){a.effects.restore(w,m)
}})
})
}c.animate(c.to,{queue:false,duration:l.duration,easing:l.easing,complete:function(){if(c.to.opacity===0){c.css("opacity",c.from.opacity)
}if(h==="hide"){c.hide()
}a.effects.restore(c,e);
if(!r){if(u==="static"){c.css({position:"relative",top:c.to.top,left:c.to.left})
}else{a.each(["top","left"],function(o,w){c.css(w,function(y,A){var z=parseInt(A,10),x=o?c.to.left:c.to.top;
if(A==="auto"){return x+"px"
}return z+x+"px"
})
})
}}a.effects.removeWrapper(c);
k()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.shake=function(l,k){var c=a(this),d=["position","top","bottom","left","right","height","width"],j=a.effects.setMode(c,l.mode||"effect"),u=l.direction||"left",e=l.distance||20,h=l.times||3,v=h*2+1,q=Math.round(l.duration/v),g=(u==="up"||u==="down")?"top":"left",f=(u==="up"||u==="left"),t={},s={},r={},p,m=c.queue(),n=m.length;
a.effects.save(c,d);
c.show();
a.effects.createWrapper(c);
t[g]=(f?"-=":"+=")+e;
s[g]=(f?"+=":"-=")+e*2;
r[g]=(f?"-=":"+=")+e*2;
c.animate(t,q,l.easing);
for(p=1;
p<h;
p++){c.animate(s,q,l.easing).animate(r,q,l.easing)
}c.animate(s,q,l.easing).animate(t,q/2,l.easing).queue(function(){if(j==="hide"){c.hide()
}a.effects.restore(c,d);
a.effects.removeWrapper(c);
k()
});
if(n>1){m.splice.apply(m,[1,0].concat(m.splice(n,v+1)))
}c.dequeue()
}
})(jQuery);
(function(a,b){a.effects.effect.slide=function(e,i){var f=a(this),k=["position","top","bottom","left","right","width","height"],j=a.effects.setMode(f,e.mode||"show"),m=j==="show",l=e.direction||"left",g=(l==="up"||l==="down")?"top":"left",d=(l==="up"||l==="left"),c,h={};
a.effects.save(f,k);
f.show();
c=e.distance||f[g==="top"?"outerHeight":"outerWidth"](true);
a.effects.createWrapper(f).css({overflow:"hidden"});
if(m){f.css(g,d?(isNaN(c)?"-"+c:-c):c)
}h[g]=(m?(d?"+=":"-="):(d?"-=":"+="))+c;
f.animate(h,{queue:false,duration:e.duration,easing:e.easing,complete:function(){if(j==="hide"){f.hide()
}a.effects.restore(f,k);
a.effects.removeWrapper(f);
i()
}})
}
})(jQuery);
(function(a,b){a.effects.effect.transfer=function(d,h){var f=a(this),k=a(d.to),n=k.css("position")==="fixed",j=a("body"),l=n?j.scrollTop():0,m=n?j.scrollLeft():0,c=k.offset(),g={top:c.top-l,left:c.left-m,height:k.innerHeight(),width:k.innerWidth()},i=f.offset(),e=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(d.className).css({top:i.top-l,left:i.left-m,height:f.innerHeight(),width:f.innerWidth(),position:n?"fixed":"absolute"}).animate(g,d.duration,d.easing,function(){e.remove();
h()
})
}
})(jQuery);
(function(b,c){var a=false;
b.widget("ui.menu",{version:"1.9.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;
this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,b.proxy(function(d){if(this.options.disabled){d.preventDefault()
}},this));
if(this.options.disabled){this.element.addClass("ui-state-disabled").attr("aria-disabled","true")
}this._on({"mousedown .ui-menu-item > a":function(d){d.preventDefault()
},"click .ui-state-disabled > a":function(d){d.preventDefault()
},"click .ui-menu-item:has(a)":function(d){var e=b(d.target).closest(".ui-menu-item");
if(!a&&e.not(".ui-state-disabled").length){a=true;
this.select(d);
if(e.has(".ui-menu").length){this.expand(d)
}else{if(!this.element.is(":focus")){this.element.trigger("focus",[true]);
if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)
}}}}},"mouseenter .ui-menu-item":function(d){var e=b(d.currentTarget);
e.siblings().children(".ui-state-active").removeClass("ui-state-active");
this.focus(d,e)
},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(f,d){var e=this.active||this.element.children(".ui-menu-item").eq(0);
if(!d){this.focus(f,e)
}},blur:function(d){this._delay(function(){if(!b.contains(this.element[0],this.document[0].activeElement)){this.collapseAll(d)
}})
},keydown:"_keydown"});
this.refresh();
this._on(this.document,{click:function(d){if(!b(d.target).closest(".ui-menu").length){this.collapseAll(d)
}a=false
}})
},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var d=b(this);
if(d.data("ui-menu-submenu-carat")){d.remove()
}});
this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
},_keydown:function(j){var e,i,k,h,g,d=true;
function f(l){return l.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
}switch(j.keyCode){case b.ui.keyCode.PAGE_UP:this.previousPage(j);
break;
case b.ui.keyCode.PAGE_DOWN:this.nextPage(j);
break;
case b.ui.keyCode.HOME:this._move("first","first",j);
break;
case b.ui.keyCode.END:this._move("last","last",j);
break;
case b.ui.keyCode.UP:this.previous(j);
break;
case b.ui.keyCode.DOWN:this.next(j);
break;
case b.ui.keyCode.LEFT:this.collapse(j);
break;
case b.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(j)
}break;
case b.ui.keyCode.ENTER:case b.ui.keyCode.SPACE:this._activate(j);
break;
case b.ui.keyCode.ESCAPE:this.collapse(j);
break;
default:d=false;
i=this.previousFilter||"";
k=String.fromCharCode(j.keyCode);
h=false;
clearTimeout(this.filterTimer);
if(k===i){h=true
}else{k=i+k
}g=new RegExp("^"+f(k),"i");
e=this.activeMenu.children(".ui-menu-item").filter(function(){return g.test(b(this).children("a").text())
});
e=h&&e.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):e;
if(!e.length){k=String.fromCharCode(j.keyCode);
g=new RegExp("^"+f(k),"i");
e=this.activeMenu.children(".ui-menu-item").filter(function(){return g.test(b(this).children("a").text())
})
}if(e.length){this.focus(j,e);
if(e.length>1){this.previousFilter=k;
this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)
}else{delete this.previousFilter
}}else{delete this.previousFilter
}}if(d){j.preventDefault()
}},_activate:function(d){if(!this.active.is(".ui-state-disabled")){if(this.active.children("a[aria-haspopup='true']").length){this.expand(d)
}else{this.select(d)
}}},refresh:function(){var f,e=this.options.icons.submenu,d=this.element.find(this.options.menus);
d.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var i=b(this),h=i.prev("a"),g=b("<span>").addClass("ui-menu-icon ui-icon "+e).data("ui-menu-submenu-carat",true);
h.attr("aria-haspopup","true").prepend(g);
i.attr("aria-labelledby",h.attr("id"))
});
f=d.add(this.element);
f.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()});
f.children(":not(.ui-menu-item)").each(function(){var g=b(this);
if(!/[^\-—–\s]/.test(g.text())){g.addClass("ui-widget-content ui-menu-divider")
}});
f.children(".ui-state-disabled").attr("aria-disabled","true");
if(this.active&&!b.contains(this.element[0],this.active[0])){this.blur()
}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},focus:function(e,d){var g,f;
this.blur(e,e&&e.type==="focus");
this._scrollIntoView(d);
this.active=d.first();
f=this.active.children("a").addClass("ui-state-focus");
if(this.options.role){this.element.attr("aria-activedescendant",f.attr("id"))
}this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
if(e&&e.type==="keydown"){this._close()
}else{this.timer=this._delay(function(){this._close()
},this.delay)
}g=d.children(".ui-menu");
if(g.length&&(/^mouse/.test(e.type))){this._startOpening(g)
}this.activeMenu=d.parent();
this._trigger("focus",e,{item:d})
},_scrollIntoView:function(g){var j,f,h,d,e,i;
if(this._hasScroll()){j=parseFloat(b.css(this.activeMenu[0],"borderTopWidth"))||0;
f=parseFloat(b.css(this.activeMenu[0],"paddingTop"))||0;
h=g.offset().top-this.activeMenu.offset().top-j-f;
d=this.activeMenu.scrollTop();
e=this.activeMenu.height();
i=g.height();
if(h<0){this.activeMenu.scrollTop(d+h)
}else{if(h+i>e){this.activeMenu.scrollTop(d+h-e+i)
}}}},blur:function(e,d){if(!d){clearTimeout(this.timer)
}if(!this.active){return
}this.active.children("a").removeClass("ui-state-focus");
this.active=null;
this._trigger("blur",e,{item:this.active})
},_startOpening:function(d){clearTimeout(this.timer);
if(d.attr("aria-hidden")!=="true"){return
}this.timer=this._delay(function(){this._close();
this._open(d)
},this.delay)
},_open:function(e){var d=b.extend({of:this.active},this.options.position);
clearTimeout(this.timer);
this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true");
e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(d)
},collapseAll:function(e,d){clearTimeout(this.timer);
this.timer=this._delay(function(){var f=d?this.element:b(e&&e.target).closest(this.element.find(".ui-menu"));
if(!f.length){f=this.element
}this._close(f);
this.blur(e);
this.activeMenu=f
},this.delay)
},_close:function(d){if(!d){d=this.active?this.active.parent():this.element
}d.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")
},collapse:function(e){var d=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
if(d&&d.length){this._close();
this.focus(e,d)
}},expand:function(e){var d=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();
if(d&&d.length){this._open(d.parent());
this._delay(function(){this.focus(e,d)
})
}},next:function(d){this._move("next","first",d)
},previous:function(d){this._move("prev","last",d)
},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(g,e,f){var d;
if(this.active){if(g==="first"||g==="last"){d=this.active[g==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)
}else{d=this.active[g+"All"](".ui-menu-item").eq(0)
}}if(!d||!d.length||!this.active){d=this.activeMenu.children(".ui-menu-item")[e]()
}this.focus(f,d)
},nextPage:function(f){var e,g,d;
if(!this.active){this.next(f);
return
}if(this.isLastItem()){return
}if(this._hasScroll()){g=this.active.offset().top;
d=this.element.height();
this.active.nextAll(".ui-menu-item").each(function(){e=b(this);
return e.offset().top-g-d<0
});
this.focus(f,e)
}else{this.focus(f,this.activeMenu.children(".ui-menu-item")[!this.active?"first":"last"]())
}},previousPage:function(f){var e,g,d;
if(!this.active){this.next(f);
return
}if(this.isFirstItem()){return
}if(this._hasScroll()){g=this.active.offset().top;
d=this.element.height();
this.active.prevAll(".ui-menu-item").each(function(){e=b(this);
return e.offset().top-g+d>0
});
this.focus(f,e)
}else{this.focus(f,this.activeMenu.children(".ui-menu-item").first())
}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(d){this.active=this.active||b(d.target).closest(".ui-menu-item");
var e={item:this.active};
if(!this.active.has(".ui-menu").length){this.collapseAll(d,true)
}this._trigger("select",d,e)
}})
}(jQuery));
(function(a,b){a.widget("ui.progressbar",{version:"1.9.2",options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});
this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
this.oldValue=this._value();
this._refreshValue()
},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove()
},value:function(c){if(c===b){return this._value()
}this._setOption("value",c);
return this
},_setOption:function(c,d){if(c==="value"){this.options.value=d;
this._refreshValue();
if(this._value()===this.options.max){this._trigger("complete")
}}this._super(c,d)
},_value:function(){var c=this.options.value;
if(typeof c!=="number"){c=0
}return Math.min(this.options.max,Math.max(this.min,c))
},_percentage:function(){return 100*this._value()/this.options.max
},_refreshValue:function(){var d=this.value(),c=this._percentage();
if(this.oldValue!==d){this.oldValue=d;
this._trigger("change")
}this.valueDiv.toggle(d>this.min).toggleClass("ui-corner-right",d===this.options.max).width(c.toFixed(0)+"%");
this.element.attr("aria-valuenow",d)
}})
})(jQuery);
(function(c,d){c.widget("ui.resizable",c.ui.mouse,{version:"1.9.2",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000},_create:function(){var h=this,k=this.options;
this.element.addClass("ui-resizable");
c.extend(this,{_aspectRatio:!!(k.aspectRatio),aspectRatio:k.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:k.helper||k.ghost||k.animate?k.helper||"ui-resizable-helper":null});
if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(c('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));
this.element=this.element.parent().data("resizable",this.element.data("resizable"));
this.elementIsWrapper=true;
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});
this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});
this.originalResizeStyle=this.originalElement.css("resize");
this.originalElement.css("resize","none");
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));
this.originalElement.css({margin:this.originalElement.css("margin")});
this._proportionallyResize()
}this.handles=k.handles||(!c(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});
if(this.handles.constructor==String){if(this.handles=="all"){this.handles="n,e,s,w,se,sw,ne,nw"
}var l=this.handles.split(",");
this.handles={};
for(var f=0;
f<l.length;
f++){var j=c.trim(l[f]),e="ui-resizable-"+j;
var g=c('<div class="ui-resizable-handle '+e+'"></div>');
g.css({zIndex:k.zIndex});
if("se"==j){g.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
}this.handles[j]=".ui-resizable-"+j;
this.element.append(g)
}}this._renderAxis=function(q){q=q||this.element;
for(var n in this.handles){if(this.handles[n].constructor==String){this.handles[n]=c(this.handles[n],this.element).show()
}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var o=c(this.handles[n],this.element),p=0;
p=/sw|ne|nw|se|n|s/.test(n)?o.outerHeight():o.outerWidth();
var m=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join("");
q.css(m,p);
this._proportionallyResize()
}if(!c(this.handles[n]).length){continue
}}};
this._renderAxis(this.element);
this._handles=c(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!h.resizing){if(this.className){var i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
}h.axis=i&&i[1]?i[1]:"se"
}});
if(k.autoHide){this._handles.hide();
c(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(k.disabled){return
}c(this).removeClass("ui-resizable-autohide");
h._handles.show()
}).mouseleave(function(){if(k.disabled){return
}if(!h.resizing){c(this).addClass("ui-resizable-autohide");
h._handles.hide()
}})
}this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var e=function(g){c(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};
if(this.elementIsWrapper){e(this.element);
var f=this.element;
this.originalElement.css({position:f.css("position"),width:f.outerWidth(),height:f.outerHeight(),top:f.css("top"),left:f.css("left")}).insertAfter(f);
f.remove()
}this.originalElement.css("resize",this.originalResizeStyle);
e(this.originalElement);
return this
},_mouseCapture:function(f){var g=false;
for(var e in this.handles){if(c(this.handles[e])[0]==f.target){g=true
}}return !this.options.disabled&&g
},_mouseStart:function(g){var j=this.options,f=this.element.position(),e=this.element;
this.resizing=true;
this.documentScroll={top:c(document).scrollTop(),left:c(document).scrollLeft()};
if(e.is(".ui-draggable")||(/absolute/).test(e.css("position"))){e.css({position:"absolute",top:f.top,left:f.left})
}this._renderProxy();
var k=b(this.helper.css("left")),h=b(this.helper.css("top"));
if(j.containment){k+=c(j.containment).scrollLeft()||0;
h+=c(j.containment).scrollTop()||0
}this.offset=this.helper.offset();
this.position={left:k,top:h};
this.size=this._helper?{width:e.outerWidth(),height:e.outerHeight()}:{width:e.width(),height:e.height()};
this.originalSize=this._helper?{width:e.outerWidth(),height:e.outerHeight()}:{width:e.width(),height:e.height()};
this.originalPosition={left:k,top:h};
this.sizeDiff={width:e.outerWidth()-e.width(),height:e.outerHeight()-e.height()};
this.originalMousePosition={left:g.pageX,top:g.pageY};
this.aspectRatio=(typeof j.aspectRatio=="number")?j.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);
var i=c(".ui-resizable-"+this.axis).css("cursor");
c("body").css("cursor",i=="auto"?this.axis+"-resize":i);
e.addClass("ui-resizable-resizing");
this._propagate("start",g);
return true
},_mouseDrag:function(e){var g=this.helper,f=this.options,l={},k=this,i=this.originalMousePosition,m=this.axis;
var p=(e.pageX-i.left)||0,n=(e.pageY-i.top)||0;
var h=this._change[m];
if(!h){return false
}var j=h.apply(this,[e,p,n]);
this._updateVirtualBoundaries(e.shiftKey);
if(this._aspectRatio||e.shiftKey){j=this._updateRatio(j,e)
}j=this._respectSize(j,e);
this._propagate("resize",e);
g.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});
if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()
}this._updateCache(j);
this._trigger("resize",e,this.ui());
return false
},_mouseStop:function(h){this.resizing=false;
var i=this.options,l=this;
if(this._helper){var g=this._proportionallyResizeElements,e=g.length&&(/textarea/i).test(g[0].nodeName),f=e&&c.ui.hasScroll(g[0],"left")?0:l.sizeDiff.height,k=e?0:l.sizeDiff.width;
var n={width:(l.helper.width()-k),height:(l.helper.height()-f)},j=(parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left))||null,m=(parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top))||null;
if(!i.animate){this.element.css(c.extend(n,{top:m,left:j}))
}l.helper.height(l.size.height);
l.helper.width(l.size.width);
if(this._helper&&!i.animate){this._proportionallyResize()
}}c("body").css("cursor","auto");
this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",h);
if(this._helper){this.helper.remove()
}return false
},_updateVirtualBoundaries:function(g){var j=this.options,i,h,f,k,e;
e={minWidth:a(j.minWidth)?j.minWidth:0,maxWidth:a(j.maxWidth)?j.maxWidth:Infinity,minHeight:a(j.minHeight)?j.minHeight:0,maxHeight:a(j.maxHeight)?j.maxHeight:Infinity};
if(this._aspectRatio||g){i=e.minHeight*this.aspectRatio;
f=e.minWidth/this.aspectRatio;
h=e.maxHeight*this.aspectRatio;
k=e.maxWidth/this.aspectRatio;
if(i>e.minWidth){e.minWidth=i
}if(f>e.minHeight){e.minHeight=f
}if(h<e.maxWidth){e.maxWidth=h
}if(k<e.maxHeight){e.maxHeight=k
}}this._vBoundaries=e
},_updateCache:function(e){var f=this.options;
this.offset=this.helper.offset();
if(a(e.left)){this.position.left=e.left
}if(a(e.top)){this.position.top=e.top
}if(a(e.height)){this.size.height=e.height
}if(a(e.width)){this.size.width=e.width
}},_updateRatio:function(h,g){var i=this.options,j=this.position,f=this.size,e=this.axis;
if(a(h.height)){h.width=(h.height*this.aspectRatio)
}else{if(a(h.width)){h.height=(h.width/this.aspectRatio)
}}if(e=="sw"){h.left=j.left+(f.width-h.width);
h.top=null
}if(e=="nw"){h.top=j.top+(f.height-h.height);
h.left=j.left+(f.width-h.width)
}return h
},_respectSize:function(l,g){var j=this.helper,i=this._vBoundaries,r=this._aspectRatio||g.shiftKey,q=this.axis,t=a(l.width)&&i.maxWidth&&(i.maxWidth<l.width),m=a(l.height)&&i.maxHeight&&(i.maxHeight<l.height),h=a(l.width)&&i.minWidth&&(i.minWidth>l.width),s=a(l.height)&&i.minHeight&&(i.minHeight>l.height);
if(h){l.width=i.minWidth
}if(s){l.height=i.minHeight
}if(t){l.width=i.maxWidth
}if(m){l.height=i.maxHeight
}var f=this.originalPosition.left+this.originalSize.width,p=this.position.top+this.size.height;
var k=/sw|nw|w/.test(q),e=/nw|ne|n/.test(q);
if(h&&k){l.left=f-i.minWidth
}if(t&&k){l.left=f-i.maxWidth
}if(s&&e){l.top=p-i.minHeight
}if(m&&e){l.top=p-i.maxHeight
}var n=!l.width&&!l.height;
if(n&&!l.left&&l.top){l.top=null
}else{if(n&&!l.top&&l.left){l.left=null
}}return l
},_proportionallyResize:function(){var k=this.options;
if(!this._proportionallyResizeElements.length){return
}var g=this.helper||this.element;
for(var f=0;
f<this._proportionallyResizeElements.length;
f++){var h=this._proportionallyResizeElements[f];
if(!this.borderDif){var e=[h.css("borderTopWidth"),h.css("borderRightWidth"),h.css("borderBottomWidth"),h.css("borderLeftWidth")],j=[h.css("paddingTop"),h.css("paddingRight"),h.css("paddingBottom"),h.css("paddingLeft")];
this.borderDif=c.map(e,function(l,n){var m=parseInt(l,10)||0,o=parseInt(j[n],10)||0;
return m+o
})
}h.css({height:(g.height()-this.borderDif[0]-this.borderDif[2])||0,width:(g.width()-this.borderDif[1]-this.borderDif[3])||0})
}},_renderProxy:function(){var e=this.element,h=this.options;
this.elementOffset=e.offset();
if(this._helper){this.helper=this.helper||c('<div style="overflow:hidden;"></div>');
var f=(c.ui.ie6?1:0),g=(c.ui.ie6?2:-1);
this.helper.addClass(this._helper).css({width:this.element.outerWidth()+g,height:this.element.outerHeight()+g,position:"absolute",left:this.elementOffset.left-f+"px",top:this.elementOffset.top-f+"px",zIndex:++h.zIndex});
this.helper.appendTo("body").disableSelection()
}else{this.helper=this.element
}},_change:{e:function(g,f,e){return{width:this.originalSize.width+f}
},w:function(h,f,e){var j=this.options,g=this.originalSize,i=this.originalPosition;
return{left:i.left+f,width:g.width-f}
},n:function(h,f,e){var j=this.options,g=this.originalSize,i=this.originalPosition;
return{top:i.top+e,height:g.height-e}
},s:function(g,f,e){return{height:this.originalSize.height+e}
},se:function(g,f,e){return c.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[g,f,e]))
},sw:function(g,f,e){return c.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[g,f,e]))
},ne:function(g,f,e){return c.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[g,f,e]))
},nw:function(g,f,e){return c.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[g,f,e]))
}},_propagate:function(f,e){c.ui.plugin.call(this,f,[e,this.ui()]);
(f!="resize"&&this._trigger(f,e,this.ui()))
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}});
c.ui.plugin.add("resizable","alsoResize",{start:function(f,g){var e=c(this).data("resizable"),i=e.options;
var h=function(j){c(j).each(function(){var k=c(this);
k.data("resizable-alsoresize",{width:parseInt(k.width(),10),height:parseInt(k.height(),10),left:parseInt(k.css("left"),10),top:parseInt(k.css("top"),10)})
})
};
if(typeof(i.alsoResize)=="object"&&!i.alsoResize.parentNode){if(i.alsoResize.length){i.alsoResize=i.alsoResize[0];
h(i.alsoResize)
}else{c.each(i.alsoResize,function(j){h(j)
})
}}else{h(i.alsoResize)
}},resize:function(g,i){var f=c(this).data("resizable"),j=f.options,h=f.originalSize,l=f.originalPosition;
var k={height:(f.size.height-h.height)||0,width:(f.size.width-h.width)||0,top:(f.position.top-l.top)||0,left:(f.position.left-l.left)||0},e=function(m,n){c(m).each(function(){var q=c(this),r=c(this).data("resizable-alsoresize"),p={},o=n&&n.length?n:q.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];
c.each(o,function(s,u){var t=(r[u]||0)+(k[u]||0);
if(t&&t>=0){p[u]=t||null
}});
q.css(p)
})
};
if(typeof(j.alsoResize)=="object"&&!j.alsoResize.nodeType){c.each(j.alsoResize,function(m,n){e(m,n)
})
}else{e(j.alsoResize)
}},stop:function(e,f){c(this).removeData("resizable-alsoresize")
}});
c.ui.plugin.add("resizable","animate",{stop:function(i,p){var m=c(this).data("resizable"),j=m.options;
var h=m._proportionallyResizeElements,e=h.length&&(/textarea/i).test(h[0].nodeName),f=e&&c.ui.hasScroll(h[0],"left")?0:m.sizeDiff.height,l=e?0:m.sizeDiff.width;
var g={width:(m.size.width-l),height:(m.size.height-f)},k=(parseInt(m.element.css("left"),10)+(m.position.left-m.originalPosition.left))||null,n=(parseInt(m.element.css("top"),10)+(m.position.top-m.originalPosition.top))||null;
m.element.animate(c.extend(g,n&&k?{top:n,left:k}:{}),{duration:j.animateDuration,easing:j.animateEasing,step:function(){var o={width:parseInt(m.element.css("width"),10),height:parseInt(m.element.css("height"),10),top:parseInt(m.element.css("top"),10),left:parseInt(m.element.css("left"),10)};
if(h&&h.length){c(h[0]).css({width:o.width,height:o.height})
}m._updateCache(o);
m._propagate("resize",i)
}})
}});
c.ui.plugin.add("resizable","containment",{start:function(f,s){var q=c(this).data("resizable"),j=q.options,l=q.element;
var g=j.containment,k=(g instanceof c)?g.get(0):(/parent/.test(g))?l.parent().get(0):g;
if(!k){return
}q.containerElement=c(k);
if(/document/.test(g)||g==document){q.containerOffset={left:0,top:0};
q.containerPosition={left:0,top:0};
q.parentData={element:c(document),left:0,top:0,width:c(document).width(),height:c(document).height()||document.body.parentNode.scrollHeight}
}else{var n=c(k),i=[];
c(["Top","Right","Left","Bottom"]).each(function(p,o){i[p]=b(n.css("padding"+o))
});
q.containerOffset=n.offset();
q.containerPosition=n.position();
q.containerSize={height:(n.innerHeight()-i[3]),width:(n.innerWidth()-i[1])};
var r=q.containerOffset,e=q.containerSize.height,m=q.containerSize.width,h=(c.ui.hasScroll(k,"left")?k.scrollWidth:m),t=(c.ui.hasScroll(k)?k.scrollHeight:e);
q.parentData={element:k,left:r.left,top:r.top,width:h,height:t}
}},resize:function(g,r){var m=c(this).data("resizable"),i=m.options,f=m.containerSize,q=m.containerOffset,n=m.size,p=m.position,s=m._aspectRatio||g.shiftKey,e={top:0,left:0},h=m.containerElement;
if(h[0]!=document&&(/static/).test(h.css("position"))){e=q
}if(p.left<(m._helper?q.left:0)){m.size.width=m.size.width+(m._helper?(m.position.left-q.left):(m.position.left-e.left));
if(s){m.size.height=m.size.width/m.aspectRatio
}m.position.left=i.helper?q.left:0
}if(p.top<(m._helper?q.top:0)){m.size.height=m.size.height+(m._helper?(m.position.top-q.top):m.position.top);
if(s){m.size.width=m.size.height*m.aspectRatio
}m.position.top=m._helper?q.top:0
}m.offset.left=m.parentData.left+m.position.left;
m.offset.top=m.parentData.top+m.position.top;
var l=Math.abs((m._helper?m.offset.left-e.left:(m.offset.left-e.left))+m.sizeDiff.width),t=Math.abs((m._helper?m.offset.top-e.top:(m.offset.top-q.top))+m.sizeDiff.height);
var k=m.containerElement.get(0)==m.element.parent().get(0),j=/relative|absolute/.test(m.containerElement.css("position"));
if(k&&j){l-=m.parentData.left
}if(l+m.size.width>=m.parentData.width){m.size.width=m.parentData.width-l;
if(s){m.size.height=m.size.width/m.aspectRatio
}}if(t+m.size.height>=m.parentData.height){m.size.height=m.parentData.height-t;
if(s){m.size.width=m.size.height*m.aspectRatio
}}},stop:function(f,p){var l=c(this).data("resizable"),g=l.options,m=l.position,n=l.containerOffset,e=l.containerPosition,i=l.containerElement;
var j=c(l.helper),r=j.offset(),q=j.outerWidth()-l.sizeDiff.width,k=j.outerHeight()-l.sizeDiff.height;
if(l._helper&&!g.animate&&(/relative/).test(i.css("position"))){c(this).css({left:r.left-e.left-n.left,width:q,height:k})
}if(l._helper&&!g.animate&&(/static/).test(i.css("position"))){c(this).css({left:r.left-e.left-n.left,width:q,height:k})
}}});
c.ui.plugin.add("resizable","ghost",{start:function(g,h){var f=c(this).data("resizable"),i=f.options,e=f.size;
f.ghost=f.originalElement.clone();
f.ghost.css({opacity:0.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof i.ghost=="string"?i.ghost:"");
f.ghost.appendTo(f.helper)
},resize:function(f,g){var e=c(this).data("resizable"),h=e.options;
if(e.ghost){e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})
}},stop:function(f,g){var e=c(this).data("resizable"),h=e.options;
if(e.ghost&&e.helper){e.helper.get(0).removeChild(e.ghost.get(0))
}}});
c.ui.plugin.add("resizable","grid",{resize:function(e,n){var k=c(this).data("resizable"),h=k.options,l=k.size,i=k.originalSize,j=k.originalPosition,p=k.axis,m=h._aspectRatio||e.shiftKey;
h.grid=typeof h.grid=="number"?[h.grid,h.grid]:h.grid;
var g=Math.round((l.width-i.width)/(h.grid[0]||1))*(h.grid[0]||1),f=Math.round((l.height-i.height)/(h.grid[1]||1))*(h.grid[1]||1);
if(/^(se|s|e)$/.test(p)){k.size.width=i.width+g;
k.size.height=i.height+f
}else{if(/^(ne)$/.test(p)){k.size.width=i.width+g;
k.size.height=i.height+f;
k.position.top=j.top-f
}else{if(/^(sw)$/.test(p)){k.size.width=i.width+g;
k.size.height=i.height+f;
k.position.left=j.left-g
}else{k.size.width=i.width+g;
k.size.height=i.height+f;
k.position.top=j.top-f;
k.position.left=j.left-g
}}}}});
var b=function(e){return parseInt(e,10)||0
};
var a=function(e){return !isNaN(parseInt(e,10))
}
})(jQuery);
(function(a,b){a.widget("ui.selectable",a.ui.mouse,{version:"1.9.2",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var c=this;
this.element.addClass("ui-selectable");
this.dragged=false;
var d;
this.refresh=function(){d=a(c.options.filter,c.element[0]);
d.addClass("ui-selectee");
d.each(function(){var e=a(this);
var f=e.offset();
a.data(this,"selectable-item",{element:this,$element:e,left:f.left,top:f.top,right:f.left+e.outerWidth(),bottom:f.top+e.outerHeight(),startselected:false,selected:e.hasClass("ui-selected"),selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})
})
};
this.refresh();
this.selectees=d.addClass("ui-selectee");
this._mouseInit();
this.helper=a("<div class='ui-selectable-helper'></div>")
},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");
this.element.removeClass("ui-selectable ui-selectable-disabled");
this._mouseDestroy()
},_mouseStart:function(e){var d=this;
this.opos=[e.pageX,e.pageY];
if(this.options.disabled){return
}var c=this.options;
this.selectees=a(c.filter,this.element[0]);
this._trigger("start",e);
a(c.appendTo).append(this.helper);
this.helper.css({left:e.clientX,top:e.clientY,width:0,height:0});
if(c.autoRefresh){this.refresh()
}this.selectees.filter(".ui-selected").each(function(){var f=a.data(this,"selectable-item");
f.startselected=true;
if(!e.metaKey&&!e.ctrlKey){f.$element.removeClass("ui-selected");
f.selected=false;
f.$element.addClass("ui-unselecting");
f.unselecting=true;
d._trigger("unselecting",e,{unselecting:f.element})
}});
a(e.target).parents().andSelf().each(function(){var g=a.data(this,"selectable-item");
if(g){var f=(!e.metaKey&&!e.ctrlKey)||!g.$element.hasClass("ui-selected");
g.$element.removeClass(f?"ui-unselecting":"ui-selected").addClass(f?"ui-selecting":"ui-unselecting");
g.unselecting=!f;
g.selecting=f;
g.selected=f;
if(f){d._trigger("selecting",e,{selecting:g.element})
}else{d._trigger("unselecting",e,{unselecting:g.element})
}return false
}})
},_mouseDrag:function(j){var i=this;
this.dragged=true;
if(this.options.disabled){return
}var e=this.options;
var d=this.opos[0],h=this.opos[1],c=j.pageX,g=j.pageY;
if(d>c){var f=c;
c=d;
d=f
}if(h>g){var f=g;
g=h;
h=f
}this.helper.css({left:d,top:h,width:c-d,height:g-h});
this.selectees.each(function(){var k=a.data(this,"selectable-item");
if(!k||k.element==i.element[0]){return
}var l=false;
if(e.tolerance=="touch"){l=(!(k.left>c||k.right<d||k.top>g||k.bottom<h))
}else{if(e.tolerance=="fit"){l=(k.left>d&&k.right<c&&k.top>h&&k.bottom<g)
}}if(l){if(k.selected){k.$element.removeClass("ui-selected");
k.selected=false
}if(k.unselecting){k.$element.removeClass("ui-unselecting");
k.unselecting=false
}if(!k.selecting){k.$element.addClass("ui-selecting");
k.selecting=true;
i._trigger("selecting",j,{selecting:k.element})
}}else{if(k.selecting){if((j.metaKey||j.ctrlKey)&&k.startselected){k.$element.removeClass("ui-selecting");
k.selecting=false;
k.$element.addClass("ui-selected");
k.selected=true
}else{k.$element.removeClass("ui-selecting");
k.selecting=false;
if(k.startselected){k.$element.addClass("ui-unselecting");
k.unselecting=true
}i._trigger("unselecting",j,{unselecting:k.element})
}}if(k.selected){if(!j.metaKey&&!j.ctrlKey&&!k.startselected){k.$element.removeClass("ui-selected");
k.selected=false;
k.$element.addClass("ui-unselecting");
k.unselecting=true;
i._trigger("unselecting",j,{unselecting:k.element})
}}}});
return false
},_mouseStop:function(e){var d=this;
this.dragged=false;
var c=this.options;
a(".ui-unselecting",this.element[0]).each(function(){var f=a.data(this,"selectable-item");
f.$element.removeClass("ui-unselecting");
f.unselecting=false;
f.startselected=false;
d._trigger("unselected",e,{unselected:f.element})
});
a(".ui-selecting",this.element[0]).each(function(){var f=a.data(this,"selectable-item");
f.$element.removeClass("ui-selecting").addClass("ui-selected");
f.selecting=false;
f.selected=true;
f.startselected=true;
d._trigger("selected",e,{selected:f.element})
});
this._trigger("stop",e);
this.helper.remove();
return false
}})
})(jQuery);
(function(b,c){var a=5;
b.widget("ui.slider",b.ui.mouse,{version:"1.9.2",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var f,d,j=this.options,h=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),g="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",e=[];
this._keySliding=false;
this._mouseSliding=false;
this._animateOff=true;
this._handleIndex=null;
this._detectOrientation();
this._mouseInit();
this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"+(j.disabled?" ui-slider-disabled ui-disabled":""));
this.range=b([]);
if(j.range){if(j.range===true){if(!j.values){j.values=[this._valueMin(),this._valueMin()]
}if(j.values.length&&j.values.length!==2){j.values=[j.values[0],j.values[0]]
}}this.range=b("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+((j.range==="min"||j.range==="max")?" ui-slider-range-"+j.range:""))
}d=(j.values&&j.values.length)||1;
for(f=h.length;
f<d;
f++){e.push(g)
}this.handles=h.add(b(e.join("")).appendTo(this.element));
this.handle=this.handles.eq(0);
this.handles.add(this.range).filter("a").click(function(i){i.preventDefault()
}).mouseenter(function(){if(!j.disabled){b(this).addClass("ui-state-hover")
}}).mouseleave(function(){b(this).removeClass("ui-state-hover")
}).focus(function(){if(!j.disabled){b(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
b(this).addClass("ui-state-focus")
}else{b(this).blur()
}}).blur(function(){b(this).removeClass("ui-state-focus")
});
this.handles.each(function(k){b(this).data("ui-slider-handle-index",k)
});
this._on(this.handles,{keydown:function(n){var o,l,k,m,i=b(n.target).data("ui-slider-handle-index");
switch(n.keyCode){case b.ui.keyCode.HOME:case b.ui.keyCode.END:case b.ui.keyCode.PAGE_UP:case b.ui.keyCode.PAGE_DOWN:case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:n.preventDefault();
if(!this._keySliding){this._keySliding=true;
b(n.target).addClass("ui-state-active");
o=this._start(n,i);
if(o===false){return
}}break
}m=this.options.step;
if(this.options.values&&this.options.values.length){l=k=this.values(i)
}else{l=k=this.value()
}switch(n.keyCode){case b.ui.keyCode.HOME:k=this._valueMin();
break;
case b.ui.keyCode.END:k=this._valueMax();
break;
case b.ui.keyCode.PAGE_UP:k=this._trimAlignValue(l+((this._valueMax()-this._valueMin())/a));
break;
case b.ui.keyCode.PAGE_DOWN:k=this._trimAlignValue(l-((this._valueMax()-this._valueMin())/a));
break;
case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:if(l===this._valueMax()){return
}k=this._trimAlignValue(l+m);
break;
case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:if(l===this._valueMin()){return
}k=this._trimAlignValue(l-m);
break
}this._slide(n,i,k)
},keyup:function(k){var i=b(k.target).data("ui-slider-handle-index");
if(this._keySliding){this._keySliding=false;
this._stop(k,i);
this._change(k,i);
b(k.target).removeClass("ui-state-active")
}}});
this._refreshValue();
this._animateOff=false
},_destroy:function(){this.handles.remove();
this.range.remove();
this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all");
this._mouseDestroy()
},_mouseCapture:function(f){var j,m,e,h,l,n,i,d,k=this,g=this.options;
if(g.disabled){return false
}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};
this.elementOffset=this.element.offset();
j={x:f.pageX,y:f.pageY};
m=this._normValueFromMouse(j);
e=this._valueMax()-this._valueMin()+1;
this.handles.each(function(o){var p=Math.abs(m-k.values(o));
if(e>p){e=p;
h=b(this);
l=o
}});
if(g.range===true&&this.values(1)===g.min){l+=1;
h=b(this.handles[l])
}n=this._start(f,l);
if(n===false){return false
}this._mouseSliding=true;
this._handleIndex=l;
h.addClass("ui-state-active").focus();
i=h.offset();
d=!b(f.target).parents().andSelf().is(".ui-slider-handle");
this._clickOffset=d?{left:0,top:0}:{left:f.pageX-i.left-(h.width()/2),top:f.pageY-i.top-(h.height()/2)-(parseInt(h.css("borderTopWidth"),10)||0)-(parseInt(h.css("borderBottomWidth"),10)||0)+(parseInt(h.css("marginTop"),10)||0)};
if(!this.handles.hasClass("ui-state-hover")){this._slide(f,l,m)
}this._animateOff=true;
return true
},_mouseStart:function(){return true
},_mouseDrag:function(f){var d={x:f.pageX,y:f.pageY},e=this._normValueFromMouse(d);
this._slide(f,this._handleIndex,e);
return false
},_mouseStop:function(d){this.handles.removeClass("ui-state-active");
this._mouseSliding=false;
this._stop(d,this._handleIndex);
this._change(d,this._handleIndex);
this._handleIndex=null;
this._clickOffset=null;
this._animateOff=false;
return false
},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"
},_normValueFromMouse:function(e){var d,h,g,f,i;
if(this.orientation==="horizontal"){d=this.elementSize.width;
h=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)
}else{d=this.elementSize.height;
h=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)
}g=(h/d);
if(g>1){g=1
}if(g<0){g=0
}if(this.orientation==="vertical"){g=1-g
}f=this._valueMax()-this._valueMin();
i=this._valueMin()+g*f;
return this._trimAlignValue(i)
},_start:function(f,e){var d={handle:this.handles[e],value:this.value()};
if(this.options.values&&this.options.values.length){d.value=this.values(e);
d.values=this.values()
}return this._trigger("start",f,d)
},_slide:function(h,g,f){var d,e,i;
if(this.options.values&&this.options.values.length){d=this.values(g?0:1);
if((this.options.values.length===2&&this.options.range===true)&&((g===0&&f>d)||(g===1&&f<d))){f=d
}if(f!==this.values(g)){e=this.values();
e[g]=f;
i=this._trigger("slide",h,{handle:this.handles[g],value:f,values:e});
d=this.values(g?0:1);
if(i!==false){this.values(g,f,true)
}}}else{if(f!==this.value()){i=this._trigger("slide",h,{handle:this.handles[g],value:f});
if(i!==false){this.value(f)
}}}},_stop:function(f,e){var d={handle:this.handles[e],value:this.value()};
if(this.options.values&&this.options.values.length){d.value=this.values(e);
d.values=this.values()
}this._trigger("stop",f,d)
},_change:function(f,e){if(!this._keySliding&&!this._mouseSliding){var d={handle:this.handles[e],value:this.value()};
if(this.options.values&&this.options.values.length){d.value=this.values(e);
d.values=this.values()
}this._trigger("change",f,d)
}},value:function(d){if(arguments.length){this.options.value=this._trimAlignValue(d);
this._refreshValue();
this._change(null,0);
return
}return this._value()
},values:function(e,h){var g,d,f;
if(arguments.length>1){this.options.values[e]=this._trimAlignValue(h);
this._refreshValue();
this._change(null,e);
return
}if(arguments.length){if(b.isArray(arguments[0])){g=this.options.values;
d=arguments[0];
for(f=0;
f<g.length;
f+=1){g[f]=this._trimAlignValue(d[f]);
this._change(null,f)
}this._refreshValue()
}else{if(this.options.values&&this.options.values.length){return this._values(e)
}else{return this.value()
}}}else{return this._values()
}},_setOption:function(e,f){var d,g=0;
if(b.isArray(this.options.values)){g=this.options.values.length
}b.Widget.prototype._setOption.apply(this,arguments);
switch(e){case"disabled":if(f){this.handles.filter(".ui-state-focus").blur();
this.handles.removeClass("ui-state-hover");
this.handles.prop("disabled",true);
this.element.addClass("ui-disabled")
}else{this.handles.prop("disabled",false);
this.element.removeClass("ui-disabled")
}break;
case"orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);
this._refreshValue();
break;
case"value":this._animateOff=true;
this._refreshValue();
this._change(null,0);
this._animateOff=false;
break;
case"values":this._animateOff=true;
this._refreshValue();
for(d=0;
d<g;
d+=1){this._change(null,d)
}this._animateOff=false;
break;
case"min":case"max":this._animateOff=true;
this._refreshValue();
this._animateOff=false;
break
}},_value:function(){var d=this.options.value;
d=this._trimAlignValue(d);
return d
},_values:function(d){var g,f,e;
if(arguments.length){g=this.options.values[d];
g=this._trimAlignValue(g);
return g
}else{f=this.options.values.slice();
for(e=0;
e<f.length;
e+=1){f[e]=this._trimAlignValue(f[e])
}return f
}},_trimAlignValue:function(g){if(g<=this._valueMin()){return this._valueMin()
}if(g>=this._valueMax()){return this._valueMax()
}var d=(this.options.step>0)?this.options.step:1,f=(g-this._valueMin())%d,e=g-f;
if(Math.abs(f)*2>=d){e+=(f>0)?d:(-d)
}return parseFloat(e.toFixed(5))
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.options.max
},_refreshValue:function(){var i,h,l,j,m,g=this.options.range,f=this.options,k=this,e=(!this._animateOff)?f.animate:false,d={};
if(this.options.values&&this.options.values.length){this.handles.each(function(n){h=(k.values(n)-k._valueMin())/(k._valueMax()-k._valueMin())*100;
d[k.orientation==="horizontal"?"left":"bottom"]=h+"%";
b(this).stop(1,1)[e?"animate":"css"](d,f.animate);
if(k.options.range===true){if(k.orientation==="horizontal"){if(n===0){k.range.stop(1,1)[e?"animate":"css"]({left:h+"%"},f.animate)
}if(n===1){k.range[e?"animate":"css"]({width:(h-i)+"%"},{queue:false,duration:f.animate})
}}else{if(n===0){k.range.stop(1,1)[e?"animate":"css"]({bottom:(h)+"%"},f.animate)
}if(n===1){k.range[e?"animate":"css"]({height:(h-i)+"%"},{queue:false,duration:f.animate})
}}}i=h
})
}else{l=this.value();
j=this._valueMin();
m=this._valueMax();
h=(m!==j)?(l-j)/(m-j)*100:0;
d[this.orientation==="horizontal"?"left":"bottom"]=h+"%";
this.handle.stop(1,1)[e?"animate":"css"](d,f.animate);
if(g==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[e?"animate":"css"]({width:h+"%"},f.animate)
}if(g==="max"&&this.orientation==="horizontal"){this.range[e?"animate":"css"]({width:(100-h)+"%"},{queue:false,duration:f.animate})
}if(g==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[e?"animate":"css"]({height:h+"%"},f.animate)
}if(g==="max"&&this.orientation==="vertical"){this.range[e?"animate":"css"]({height:(100-h)+"%"},{queue:false,duration:f.animate})
}}}})
}(jQuery));
(function(a,b){a.widget("ui.sortable",a.ui.mouse,{version:"1.9.2",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000},_create:function(){var c=this.options;
this.containerCache={};
this.element.addClass("ui-sortable");
this.refresh();
this.floating=this.items.length?c.axis==="x"||(/left|right/).test(this.items[0].item.css("float"))||(/inline|table-cell/).test(this.items[0].item.css("display")):false;
this.offset=this.element.offset();
this._mouseInit();
this.ready=true
},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");
this._mouseDestroy();
for(var c=this.items.length-1;
c>=0;
c--){this.items[c].item.removeData(this.widgetName+"-item")
}return this
},_setOption:function(c,d){if(c==="disabled"){this.options[c]=d;
this.widget().toggleClass("ui-sortable-disabled",!!d)
}else{a.Widget.prototype._setOption.apply(this,arguments)
}},_mouseCapture:function(f,g){var e=this;
if(this.reverting){return false
}if(this.options.disabled||this.options.type=="static"){return false
}this._refreshItems(f);
var d=null,c=a(f.target).parents().each(function(){if(a.data(this,e.widgetName+"-item")==e){d=a(this);
return false
}});
if(a.data(f.target,e.widgetName+"-item")==e){d=a(f.target)
}if(!d){return false
}if(this.options.handle&&!g){var h=false;
a(this.options.handle,d).find("*").andSelf().each(function(){if(this==f.target){h=true
}});
if(!h){return false
}}this.currentItem=d;
this._removeCurrentsFromItems();
return true
},_mouseStart:function(e,f,c){var g=this.options;
this.currentContainer=this;
this.refreshPositions();
this.helper=this._createHelper(e);
this._cacheHelperProportions();
this._cacheMargins();
this.scrollParent=this.helper.scrollParent();
this.offset=this.currentItem.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
a.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.helper.css("position","absolute");
this.cssPosition=this.helper.css("position");
this.originalPosition=this._generatePosition(e);
this.originalPageX=e.pageX;
this.originalPageY=e.pageY;
(g.cursorAt&&this._adjustOffsetFromHelper(g.cursorAt));
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
if(this.helper[0]!=this.currentItem[0]){this.currentItem.hide()
}this._createPlaceholder();
if(g.containment){this._setContainment()
}if(g.cursor){if(a("body").css("cursor")){this._storedCursor=a("body").css("cursor")
}a("body").css("cursor",g.cursor)
}if(g.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")
}this.helper.css("opacity",g.opacity)
}if(g.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")
}this.helper.css("zIndex",g.zIndex)
}if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){this.overflowOffset=this.scrollParent.offset()
}this._trigger("start",e,this._uiHash());
if(!this._preserveHelperProportions){this._cacheHelperProportions()
}if(!c){for(var d=this.containers.length-1;
d>=0;
d--){this.containers[d]._trigger("activate",e,this._uiHash(this))
}}if(a.ui.ddmanager){a.ui.ddmanager.current=this
}if(a.ui.ddmanager&&!g.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,e)
}this.dragging=true;
this.helper.addClass("ui-sortable-helper");
this._mouseDrag(e);
return true
},_mouseDrag:function(g){this.position=this._generatePosition(g);
this.positionAbs=this._convertPositionTo("absolute");
if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs
}if(this.options.scroll){var h=this.options,c=false;
if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-g.pageY<h.scrollSensitivity){this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop+h.scrollSpeed
}else{if(g.pageY-this.overflowOffset.top<h.scrollSensitivity){this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop-h.scrollSpeed
}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-g.pageX<h.scrollSensitivity){this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft+h.scrollSpeed
}else{if(g.pageX-this.overflowOffset.left<h.scrollSensitivity){this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft-h.scrollSpeed
}}}else{if(g.pageY-a(document).scrollTop()<h.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()-h.scrollSpeed)
}else{if(a(window).height()-(g.pageY-a(document).scrollTop())<h.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()+h.scrollSpeed)
}}if(g.pageX-a(document).scrollLeft()<h.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()-h.scrollSpeed)
}else{if(a(window).width()-(g.pageX-a(document).scrollLeft())<h.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()+h.scrollSpeed)
}}}if(c!==false&&a.ui.ddmanager&&!h.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,g)
}}this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"
}for(var e=this.items.length-1;
e>=0;
e--){var f=this.items[e],d=f.item[0],j=this._intersectsWithPointer(f);
if(!j){continue
}if(f.instance!==this.currentContainer){continue
}if(d!=this.currentItem[0]&&this.placeholder[j==1?"next":"prev"]()[0]!=d&&!a.contains(this.placeholder[0],d)&&(this.options.type=="semi-dynamic"?!a.contains(this.element[0],d):true)){this.direction=j==1?"down":"up";
if(this.options.tolerance=="pointer"||this._intersectsWithSides(f)){this._rearrange(g,f)
}else{break
}this._trigger("change",g,this._uiHash());
break
}}this._contactContainers(g);
if(a.ui.ddmanager){a.ui.ddmanager.drag(this,g)
}this._trigger("sort",g,this._uiHash());
this.lastPositionAbs=this.positionAbs;
return false
},_mouseStop:function(d,e){if(!d){return
}if(a.ui.ddmanager&&!this.options.dropBehaviour){a.ui.ddmanager.drop(this,d)
}if(this.options.revert){var c=this;
var f=this.placeholder.offset();
this.reverting=true;
a(this.helper).animate({left:f.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:f.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){c._clear(d)
})
}else{this._clear(d,e)
}return false
},cancel:function(){if(this.dragging){this._mouseUp({target:null});
if(this.options.helper=="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}for(var c=this.containers.length-1;
c>=0;
c--){this.containers[c]._trigger("deactivate",null,this._uiHash(this));
if(this.containers[c].containerCache.over){this.containers[c]._trigger("out",null,this._uiHash(this));
this.containers[c].containerCache.over=0
}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])
}if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()
}a.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});
if(this.domPosition.prev){a(this.domPosition.prev).after(this.currentItem)
}else{a(this.domPosition.parent).prepend(this.currentItem)
}}return this
},serialize:function(e){var c=this._getItemsAsjQuery(e&&e.connected);
var d=[];
e=e||{};
a(c).each(function(){var f=(a(e.item||this).attr(e.attribute||"id")||"").match(e.expression||(/(.+)[-=_](.+)/));
if(f){d.push((e.key||f[1]+"[]")+"="+(e.key&&e.expression?f[1]:f[2]))
}});
if(!d.length&&e.key){d.push(e.key+"=")
}return d.join("&")
},toArray:function(e){var c=this._getItemsAsjQuery(e&&e.connected);
var d=[];
e=e||{};
c.each(function(){d.push(a(e.item||this).attr(e.attribute||"id")||"")
});
return d
},_intersectsWith:function(m){var e=this.positionAbs.left,d=e+this.helperProportions.width,k=this.positionAbs.top,j=k+this.helperProportions.height;
var f=m.left,c=f+m.width,n=m.top,i=n+m.height;
var o=this.offset.click.top,h=this.offset.click.left;
var g=(k+o)>n&&(k+o)<i&&(e+h)>f&&(e+h)<c;
if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>m[this.floating?"width":"height"])){return g
}else{return(f<e+(this.helperProportions.width/2)&&d-(this.helperProportions.width/2)<c&&n<k+(this.helperProportions.height/2)&&j-(this.helperProportions.height/2)<i)
}},_intersectsWithPointer:function(e){var f=(this.options.axis==="x")||a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),d=(this.options.axis==="y")||a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),h=f&&d,c=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();
if(!h){return false
}return this.floating?(((g&&g=="right")||c=="down")?2:1):(c&&(c=="down"?2:1))
},_intersectsWithSides:function(f){var d=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,f.top+(f.height/2),f.height),e=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,f.left+(f.width/2),f.width),c=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();
if(this.floating&&g){return((g=="right"&&e)||(g=="left"&&!e))
}else{return c&&((c=="down"&&d)||(c=="up"&&!d))
}},_getDragVerticalDirection:function(){var c=this.positionAbs.top-this.lastPositionAbs.top;
return c!=0&&(c>0?"down":"up")
},_getDragHorizontalDirection:function(){var c=this.positionAbs.left-this.lastPositionAbs.left;
return c!=0&&(c>0?"right":"left")
},refresh:function(c){this._refreshItems(c);
this.refreshPositions();
return this
},_connectWith:function(){var c=this.options;
return c.connectWith.constructor==String?[c.connectWith]:c.connectWith
},_getItemsAsjQuery:function(h){var c=[];
var e=[];
var g=this._connectWith();
if(g&&h){for(var f=g.length-1;
f>=0;
f--){var l=a(g[f]);
for(var d=l.length-1;
d>=0;
d--){var k=a.data(l[d],this.widgetName);
if(k&&k!=this&&!k.options.disabled){e.push([a.isFunction(k.options.items)?k.options.items.call(k.element):a(k.options.items,k.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),k])
}}}}e.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
for(var f=e.length-1;
f>=0;
f--){e[f][0].each(function(){c.push(this)
})
}return a(c)
},_removeCurrentsFromItems:function(){var c=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=a.grep(this.items,function(e){for(var d=0;
d<c.length;
d++){if(c[d]==e.item[0]){return false
}}return true
})
},_refreshItems:function(c){this.items=[];
this.containers=[this];
var k=this.items;
var g=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],c,{item:this.currentItem}):a(this.options.items,this.element),this]];
var m=this._connectWith();
if(m&&this.ready){for(var f=m.length-1;
f>=0;
f--){var n=a(m[f]);
for(var e=n.length-1;
e>=0;
e--){var h=a.data(n[e],this.widgetName);
if(h&&h!=this&&!h.options.disabled){g.push([a.isFunction(h.options.items)?h.options.items.call(h.element[0],c,{item:this.currentItem}):a(h.options.items,h.element),h]);
this.containers.push(h)
}}}}for(var f=g.length-1;
f>=0;
f--){var l=g[f][1];
var d=g[f][0];
for(var e=0,o=d.length;
e<o;
e++){var p=a(d[e]);
p.data(this.widgetName+"-item",l);
k.push({item:p,instance:l,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(c){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()
}for(var e=this.items.length-1;
e>=0;
e--){var f=this.items[e];
if(f.instance!=this.currentContainer&&this.currentContainer&&f.item[0]!=this.currentItem[0]){continue
}var d=this.options.toleranceElement?a(this.options.toleranceElement,f.item):f.item;
if(!c){f.width=d.outerWidth();
f.height=d.outerHeight()
}var g=d.offset();
f.left=g.left;
f.top=g.top
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(var e=this.containers.length-1;
e>=0;
e--){var g=this.containers[e].element.offset();
this.containers[e].containerCache.left=g.left;
this.containers[e].containerCache.top=g.top;
this.containers[e].containerCache.width=this.containers[e].element.outerWidth();
this.containers[e].containerCache.height=this.containers[e].element.outerHeight()
}}return this
},_createPlaceholder:function(d){d=d||this;
var e=d.options;
if(!e.placeholder||e.placeholder.constructor==String){var c=e.placeholder;
e.placeholder={element:function(){var f=a(document.createElement(d.currentItem[0].nodeName)).addClass(c||d.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
if(!c){f.style.visibility="hidden"
}return f
},update:function(f,g){if(c&&!e.forcePlaceholderSize){return
}if(!g.height()){g.height(d.currentItem.innerHeight()-parseInt(d.currentItem.css("paddingTop")||0,10)-parseInt(d.currentItem.css("paddingBottom")||0,10))
}if(!g.width()){g.width(d.currentItem.innerWidth()-parseInt(d.currentItem.css("paddingLeft")||0,10)-parseInt(d.currentItem.css("paddingRight")||0,10))
}}}
}d.placeholder=a(e.placeholder.element.call(d.element,d.currentItem));
d.currentItem.after(d.placeholder);
e.placeholder.update(d,d.placeholder)
},_contactContainers:function(c){var e=null,n=null;
for(var h=this.containers.length-1;
h>=0;
h--){if(a.contains(this.currentItem[0],this.containers[h].element[0])){continue
}if(this._intersectsWith(this.containers[h].containerCache)){if(e&&a.contains(this.containers[h].element[0],e.element[0])){continue
}e=this.containers[h];
n=h
}else{if(this.containers[h].containerCache.over){this.containers[h]._trigger("out",c,this._uiHash(this));
this.containers[h].containerCache.over=0
}}}if(!e){return
}if(this.containers.length===1){this.containers[n]._trigger("over",c,this._uiHash(this));
this.containers[n].containerCache.over=1
}else{var m=10000;
var k=null;
var l=this.containers[n].floating?"left":"top";
var o=this.containers[n].floating?"width":"height";
var d=this.positionAbs[l]+this.offset.click[l];
for(var f=this.items.length-1;
f>=0;
f--){if(!a.contains(this.containers[n].element[0],this.items[f].item[0])){continue
}if(this.items[f].item[0]==this.currentItem[0]){continue
}var p=this.items[f].item.offset()[l];
var g=false;
if(Math.abs(p-d)>Math.abs(p+this.items[f][o]-d)){g=true;
p+=this.items[f][o]
}if(Math.abs(p-d)<m){m=Math.abs(p-d);
k=this.items[f];
this.direction=g?"up":"down"
}}if(!k&&!this.options.dropOnEmpty){return
}this.currentContainer=this.containers[n];
k?this._rearrange(c,k,null,true):this._rearrange(c,null,this.containers[n].element,true);
this._trigger("change",c,this._uiHash());
this.containers[n]._trigger("change",c,this._uiHash(this));
this.options.placeholder.update(this.currentContainer,this.placeholder);
this.containers[n]._trigger("over",c,this._uiHash(this));
this.containers[n].containerCache.over=1
}},_createHelper:function(d){var e=this.options;
var c=a.isFunction(e.helper)?a(e.helper.apply(this.element[0],[d,this.currentItem])):(e.helper=="clone"?this.currentItem.clone():this.currentItem);
if(!c.parents("body").length){a(e.appendTo!="parent"?e.appendTo:this.currentItem[0].parentNode)[0].appendChild(c[0])
}if(c[0]==this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}
}if(c[0].style.width==""||e.forceHelperSize){c.width(this.currentItem.width())
}if(c[0].style.height==""||e.forceHelperSize){c.height(this.currentItem.height())
}return c
},_adjustOffsetFromHelper:function(c){if(typeof c=="string"){c=c.split(" ")
}if(a.isArray(c)){c={left:+c[0],top:+c[1]||0}
}if("left" in c){this.offset.click.left=c.left+this.margins.left
}if("right" in c){this.offset.click.left=this.helperProportions.width-c.right+this.margins.left
}if("top" in c){this.offset.click.top=c.top+this.margins.top
}if("bottom" in c){this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var c=this.offsetParent.offset();
if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();
c.top+=this.scrollParent.scrollTop()
}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.ui.ie)){c={top:0,left:0}
}return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var c=this.currentItem.position();
return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var f=this.options;
if(f.containment=="parent"){f.containment=this.helper[0].parentNode
}if(f.containment=="document"||f.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(f.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(f.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!(/^(document|window|parent)$/).test(f.containment)){var d=a(f.containment)[0];
var e=a(f.containment).offset();
var c=(a(d).css("overflow")!="hidden");
this.containment=[e.left+(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0)-this.margins.left,e.top+(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0)-this.margins.top,e.left+(c?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,e.top+(c?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
}},_convertPositionTo:function(g,i){if(!i){i=this.position
}var e=g=="absolute"?1:-1;
var f=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=(/(html|body)/i).test(c[0].tagName);
return{top:(i.top+this.offset.relative.top*e+this.offset.parent.top*e-((this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(h?0:c.scrollTop()))*e)),left:(i.left+this.offset.relative.left*e+this.offset.parent.left*e-((this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():h?0:c.scrollLeft())*e))}
},_generatePosition:function(f){var i=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,j=(/(html|body)/i).test(c[0].tagName);
if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()
}var e=f.pageX;
var d=f.pageY;
if(this.originalPosition){if(this.containment){if(f.pageX-this.offset.click.left<this.containment[0]){e=this.containment[0]+this.offset.click.left
}if(f.pageY-this.offset.click.top<this.containment[1]){d=this.containment[1]+this.offset.click.top
}if(f.pageX-this.offset.click.left>this.containment[2]){e=this.containment[2]+this.offset.click.left
}if(f.pageY-this.offset.click.top>this.containment[3]){d=this.containment[3]+this.offset.click.top
}}if(i.grid){var h=this.originalPageY+Math.round((d-this.originalPageY)/i.grid[1])*i.grid[1];
d=this.containment?(!(h-this.offset.click.top<this.containment[1]||h-this.offset.click.top>this.containment[3])?h:(!(h-this.offset.click.top<this.containment[1])?h-i.grid[1]:h+i.grid[1])):h;
var g=this.originalPageX+Math.round((e-this.originalPageX)/i.grid[0])*i.grid[0];
e=this.containment?(!(g-this.offset.click.left<this.containment[0]||g-this.offset.click.left>this.containment[2])?g:(!(g-this.offset.click.left<this.containment[0])?g-i.grid[0]:g+i.grid[0])):g
}}return{top:(d-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(j?0:c.scrollTop())))),left:(e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():j?0:c.scrollLeft())))}
},_rearrange:function(g,f,d,e){d?d[0].appendChild(this.placeholder[0]):f.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=="down"?f.item[0]:f.item[0].nextSibling));
this.counter=this.counter?++this.counter:1;
var c=this.counter;
this._delay(function(){if(c==this.counter){this.refreshPositions(!e)
}})
},_clear:function(d,e){this.reverting=false;
var f=[];
if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)
}this._noFinalSort=null;
if(this.helper[0]==this.currentItem[0]){for(var c in this._storedCSS){if(this._storedCSS[c]=="auto"||this._storedCSS[c]=="static"){this._storedCSS[c]=""
}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}if(this.fromOutside&&!e){f.push(function(g){this._trigger("receive",g,this._uiHash(this.fromOutside))
})
}if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!e){f.push(function(g){this._trigger("update",g,this._uiHash())
})
}if(this!==this.currentContainer){if(!e){f.push(function(g){this._trigger("remove",g,this._uiHash())
});
f.push((function(g){return function(h){g._trigger("receive",h,this._uiHash(this))
}
}).call(this,this.currentContainer));
f.push((function(g){return function(h){g._trigger("update",h,this._uiHash(this))
}
}).call(this,this.currentContainer))
}}for(var c=this.containers.length-1;
c>=0;
c--){if(!e){f.push((function(g){return function(h){g._trigger("deactivate",h,this._uiHash(this))
}
}).call(this,this.containers[c]))
}if(this.containers[c].containerCache.over){f.push((function(g){return function(h){g._trigger("out",h,this._uiHash(this))
}
}).call(this,this.containers[c]));
this.containers[c].containerCache.over=0
}}if(this._storedCursor){a("body").css("cursor",this._storedCursor)
}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)
}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex)
}this.dragging=false;
if(this.cancelHelperRemoval){if(!e){this._trigger("beforeStop",d,this._uiHash());
for(var c=0;
c<f.length;
c++){f[c].call(this,d)
}this._trigger("stop",d,this._uiHash())
}this.fromOutside=false;
return false
}if(!e){this._trigger("beforeStop",d,this._uiHash())
}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
if(this.helper[0]!=this.currentItem[0]){this.helper.remove()
}this.helper=null;
if(!e){for(var c=0;
c<f.length;
c++){f[c].call(this,d)
}this._trigger("stop",d,this._uiHash())
}this.fromOutside=false;
return true
},_trigger:function(){if(a.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()
}},_uiHash:function(c){var d=c||this;
return{helper:d.helper,placeholder:d.placeholder||a([]),position:d.position,originalPosition:d.originalPosition,offset:d.positionAbs,item:d.currentItem,sender:c?c.element:null}
}})
})(jQuery);
(function(b){function a(c){return function(){var d=this.element.val();
c.apply(this,arguments);
this._refresh();
if(d!==this.element.val()){this._trigger("change")
}}
}b.widget("ui.spinner",{version:"1.9.2",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);
this._setOption("min",this.options.min);
this._setOption("step",this.options.step);
this._value(this.element.val(),true);
this._draw();
this._on(this._events);
this._refresh();
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_getCreateOptions:function(){var c={},d=this.element;
b.each(["min","max","step"],function(e,f){var g=d.attr(f);
if(g!==undefined&&g.length){c[f]=g
}});
return c
},_events:{keydown:function(c){if(this._start(c)&&this._keydown(c)){c.preventDefault()
}},keyup:"_stop",focus:function(){this.previous=this.element.val()
},blur:function(c){if(this.cancelBlur){delete this.cancelBlur;
return
}this._refresh();
if(this.previous!==this.element.val()){this._trigger("change",c)
}},mousewheel:function(c,d){if(!d){return
}if(!this.spinning&&!this._start(c)){return false
}this._spin((d>0?1:-1)*this.options.step,c);
clearTimeout(this.mousewheelTimer);
this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(c)
}},100);
c.preventDefault()
},"mousedown .ui-spinner-button":function(d){var c;
c=this.element[0]===this.document[0].activeElement?this.previous:this.element.val();
function e(){var f=this.element[0]===this.document[0].activeElement;
if(!f){this.element.focus();
this.previous=c;
this._delay(function(){this.previous=c
})
}}d.preventDefault();
e.call(this);
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur;
e.call(this)
});
if(this._start(d)===false){return
}this._repeat(null,b(d.currentTarget).hasClass("ui-spinner-up")?1:-1,d)
},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(c){if(!b(c.currentTarget).hasClass("ui-state-active")){return
}if(this._start(c)===false){return false
}this._repeat(null,b(c.currentTarget).hasClass("ui-spinner-up")?1:-1,c)
},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var c=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
this.element.attr("role","spinbutton");
this.buttons=c.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all");
if(this.buttons.height()>Math.ceil(c.height()*0.5)&&c.height()>0){c.height(c.height())
}if(this.options.disabled){this.disable()
}},_keydown:function(d){var c=this.options,e=b.ui.keyCode;
switch(d.keyCode){case e.UP:this._repeat(null,1,d);
return true;
case e.DOWN:this._repeat(null,-1,d);
return true;
case e.PAGE_UP:this._repeat(null,c.page,d);
return true;
case e.PAGE_DOWN:this._repeat(null,-c.page,d);
return true
}return false
},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"
},_start:function(c){if(!this.spinning&&this._trigger("start",c)===false){return false
}if(!this.counter){this.counter=1
}this.spinning=true;
return true
},_repeat:function(d,c,e){d=d||500;
clearTimeout(this.timer);
this.timer=this._delay(function(){this._repeat(40,c,e)
},d);
this._spin(c*this.options.step,e)
},_spin:function(d,c){var e=this.value()||0;
if(!this.counter){this.counter=1
}e=this._adjustValue(e+d*this._increment(this.counter));
if(!this.spinning||this._trigger("spin",c,{value:e})!==false){this._value(e);
this.counter++
}},_increment:function(c){var d=this.options.incremental;
if(d){return b.isFunction(d)?d(c):Math.floor(c*c*c/50000-c*c/500+17*c/200+1)
}return 1
},_precision:function(){var c=this._precisionOf(this.options.step);
if(this.options.min!==null){c=Math.max(c,this._precisionOf(this.options.min))
}return c
},_precisionOf:function(d){var e=d.toString(),c=e.indexOf(".");
return c===-1?0:e.length-c-1
},_adjustValue:function(e){var d,f,c=this.options;
d=c.min!==null?c.min:0;
f=e-d;
f=Math.round(f/c.step)*c.step;
e=d+f;
e=parseFloat(e.toFixed(this._precision()));
if(c.max!==null&&e>c.max){return c.max
}if(c.min!==null&&e<c.min){return c.min
}return e
},_stop:function(c){if(!this.spinning){return
}clearTimeout(this.timer);
clearTimeout(this.mousewheelTimer);
this.counter=0;
this.spinning=false;
this._trigger("stop",c)
},_setOption:function(c,d){if(c==="culture"||c==="numberFormat"){var e=this._parse(this.element.val());
this.options[c]=d;
this.element.val(this._format(e));
return
}if(c==="max"||c==="min"||c==="step"){if(typeof d==="string"){d=this._parse(d)
}}this._super(c,d);
if(c==="disabled"){if(d){this.element.prop("disabled",true);
this.buttons.button("disable")
}else{this.element.prop("disabled",false);
this.buttons.button("enable")
}}},_setOptions:a(function(c){this._super(c);
this._value(this.element.val())
}),_parse:function(c){if(typeof c==="string"&&c!==""){c=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(c,10,this.options.culture):+c
}return c===""||isNaN(c)?null:c
},_format:function(c){if(c===""){return""
}return window.Globalize&&this.options.numberFormat?Globalize.format(c,this.options.numberFormat,this.options.culture):c
},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})
},_value:function(e,c){var d;
if(e!==""){d=this._parse(e);
if(d!==null){if(!c){d=this._adjustValue(d)
}e=this._format(d)
}}this.element.val(e);
this._refresh()
},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.uiSpinner.replaceWith(this.element)
},stepUp:a(function(c){this._stepUp(c)
}),_stepUp:function(c){this._spin((c||1)*this.options.step)
},stepDown:a(function(c){this._stepDown(c)
}),_stepDown:function(c){this._spin((c||1)*-this.options.step)
},pageUp:a(function(c){this._stepUp((c||1)*this.options.page)
}),pageDown:a(function(c){this._stepDown((c||1)*this.options.page)
}),value:function(c){if(!arguments.length){return this._parse(this.element.val())
}a(this._value).call(this,c)
},widget:function(){return this.uiSpinner
}})
}(jQuery));
(function(c,e){var a=0,f=/#.*$/;
function d(){return ++a
}function b(g){return g.hash.length>1&&g.href.replace(f,"")===location.href.replace(f,"").replace(/\s/g,"%20")
}c.widget("ui.tabs",{version:"1.9.2",delay:300,options:{active:null,collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var h=this,g=this.options,i=g.active,j=location.hash.substring(1);
this.running=false;
this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",g.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(k){if(c(this).is(".ui-state-disabled")){k.preventDefault()
}}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){if(c(this).closest("li").is(".ui-state-disabled")){this.blur()
}});
this._processTabs();
if(i===null){if(j){this.tabs.each(function(k,l){if(c(l).attr("aria-controls")===j){i=k;
return false
}})
}if(i===null){i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))
}if(i===null||i===-1){i=this.tabs.length?0:false
}}if(i!==false){i=this.tabs.index(this.tabs.eq(i));
if(i===-1){i=g.collapsible?false:0
}}g.active=i;
if(!g.collapsible&&g.active===false&&this.anchors.length){g.active=0
}if(c.isArray(g.disabled)){g.disabled=c.unique(g.disabled.concat(c.map(this.tabs.filter(".ui-state-disabled"),function(k){return h.tabs.index(k)
}))).sort()
}if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(this.options.active)
}else{this.active=c()
}this._refresh();
if(this.active.length){this.load(g.active)
}},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?c():this._getPanelForTab(this.active)}
},_tabKeydown:function(i){var h=c(this.document[0].activeElement).closest("li"),g=this.tabs.index(h),j=true;
if(this._handlePageNav(i)){return
}switch(i.keyCode){case c.ui.keyCode.RIGHT:case c.ui.keyCode.DOWN:g++;
break;
case c.ui.keyCode.UP:case c.ui.keyCode.LEFT:j=false;
g--;
break;
case c.ui.keyCode.END:g=this.anchors.length-1;
break;
case c.ui.keyCode.HOME:g=0;
break;
case c.ui.keyCode.SPACE:i.preventDefault();
clearTimeout(this.activating);
this._activate(g);
return;
case c.ui.keyCode.ENTER:i.preventDefault();
clearTimeout(this.activating);
this._activate(g===this.options.active?false:g);
return;
default:return
}i.preventDefault();
clearTimeout(this.activating);
g=this._focusNextTab(g,j);
if(!i.ctrlKey){h.attr("aria-selected","false");
this.tabs.eq(g).attr("aria-selected","true");
this.activating=this._delay(function(){this.option("active",g)
},this.delay)
}},_panelKeydown:function(g){if(this._handlePageNav(g)){return
}if(g.ctrlKey&&g.keyCode===c.ui.keyCode.UP){g.preventDefault();
this.active.focus()
}},_handlePageNav:function(g){if(g.altKey&&g.keyCode===c.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));
return true
}if(g.altKey&&g.keyCode===c.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));
return true
}},_findNextTab:function(h,i){var g=this.tabs.length-1;
function j(){if(h>g){h=0
}if(h<0){h=g
}return h
}while(c.inArray(j(),this.options.disabled)!==-1){h=i?h+1:h-1
}return h
},_focusNextTab:function(g,h){g=this._findNextTab(g,h);
this.tabs.eq(g).focus();
return g
},_setOption:function(g,h){if(g==="active"){this._activate(h);
return
}if(g==="disabled"){this._setupDisabled(h);
return
}this._super(g,h);
if(g==="collapsible"){this.element.toggleClass("ui-tabs-collapsible",h);
if(!h&&this.options.active===false){this._activate(0)
}}if(g==="event"){this._setupEvents(h)
}if(g==="heightStyle"){this._setupHeightStyle(h)
}},_tabId:function(g){return g.attr("aria-controls")||"ui-tabs-"+d()
},_sanitizeSelector:function(g){return g?g.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""
},refresh:function(){var h=this.options,g=this.tablist.children(":has(a[href])");
h.disabled=c.map(g.filter(".ui-state-disabled"),function(i){return g.index(i)
});
this._processTabs();
if(h.active===false||!this.anchors.length){h.active=false;
this.active=c()
}else{if(this.active.length&&!c.contains(this.tablist[0],this.active[0])){if(this.tabs.length===h.disabled.length){h.active=false;
this.active=c()
}else{this._activate(this._findNextTab(Math.max(0,h.active-1),false))
}}else{h.active=this.tabs.index(this.active)
}}this._refresh()
},_refresh:function(){this._setupDisabled(this.options.disabled);
this._setupEvents(this.options.event);
this._setupHeightStyle(this.options.heightStyle);
this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1});
this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});
if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)
}else{this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0});
this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})
}},_processTabs:function(){var g=this;
this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist");
this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1});
this.anchors=this.tabs.map(function(){return c("a",this)[0]
}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1});
this.panels=c();
this.anchors.each(function(n,l){var h,j,m,k=c(l).uniqueId().attr("id"),o=c(l).closest("li"),p=o.attr("aria-controls");
if(b(l)){h=l.hash;
j=g.element.find(g._sanitizeSelector(h))
}else{m=g._tabId(o);
h="#"+m;
j=g.element.find(h);
if(!j.length){j=g._createPanel(m);
j.insertAfter(g.panels[n-1]||g.tablist)
}j.attr("aria-live","polite")
}if(j.length){g.panels=g.panels.add(j)
}if(p){o.data("ui-tabs-aria-controls",p)
}o.attr({"aria-controls":h.substring(1),"aria-labelledby":k});
j.attr("aria-labelledby",k)
});
this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")
},_getList:function(){return this.element.find("ol,ul").eq(0)
},_createPanel:function(g){return c("<div>").attr("id",g).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)
},_setupDisabled:function(j){if(c.isArray(j)){if(!j.length){j=false
}else{if(j.length===this.anchors.length){j=true
}}}for(var h=0,g;
(g=this.tabs[h]);
h++){if(j===true||c.inArray(h,j)!==-1){c(g).addClass("ui-state-disabled").attr("aria-disabled","true")
}else{c(g).removeClass("ui-state-disabled").removeAttr("aria-disabled")
}}this.options.disabled=j
},_setupEvents:function(h){var g={click:function(i){i.preventDefault()
}};
if(h){c.each(h.split(" "),function(j,i){g[i]="_eventHandler"
})
}this._off(this.anchors.add(this.tabs).add(this.panels));
this._on(this.anchors,g);
this._on(this.tabs,{keydown:"_tabKeydown"});
this._on(this.panels,{keydown:"_panelKeydown"});
this._focusable(this.tabs);
this._hoverable(this.tabs)
},_setupHeightStyle:function(g){var i,j,h=this.element.parent();
if(g==="fill"){if(!c.support.minHeight){j=h.css("overflow");
h.css("overflow","hidden")
}i=h.height();
this.element.siblings(":visible").each(function(){var l=c(this),k=l.css("position");
if(k==="absolute"||k==="fixed"){return
}i-=l.outerHeight(true)
});
if(j){h.css("overflow",j)
}this.element.children().not(this.panels).each(function(){i-=c(this).outerHeight(true)
});
this.panels.each(function(){c(this).height(Math.max(0,i-c(this).innerHeight()+c(this).height()))
}).css("overflow","auto")
}else{if(g==="auto"){i=0;
this.panels.each(function(){i=Math.max(i,c(this).height("").height())
}).height(i)
}}},_eventHandler:function(g){var p=this.options,k=this.active,l=c(g.currentTarget),j=l.closest("li"),n=j[0]===k[0],h=n&&p.collapsible,i=h?c():this._getPanelForTab(j),m=!k.length?c():this._getPanelForTab(k),o={oldTab:k,oldPanel:m,newTab:h?c():j,newPanel:i};
g.preventDefault();
if(j.hasClass("ui-state-disabled")||j.hasClass("ui-tabs-loading")||this.running||(n&&!p.collapsible)||(this._trigger("beforeActivate",g,o)===false)){return
}p.active=h?false:this.tabs.index(j);
this.active=n?c():j;
if(this.xhr){this.xhr.abort()
}if(!m.length&&!i.length){c.error("jQuery UI Tabs: Mismatching fragment identifier.")
}if(i.length){this.load(this.tabs.index(j),g)
}this._toggle(g,o)
},_toggle:function(m,l){var k=this,g=l.newPanel,j=l.oldPanel;
this.running=true;
function i(){k.running=false;
k._trigger("activate",m,l)
}function h(){l.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
if(g.length&&k.options.show){k._show(g,k.options.show,i)
}else{g.show();
i()
}}if(j.length&&this.options.hide){this._hide(j,this.options.hide,function(){l.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
h()
})
}else{l.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
j.hide();
h()
}j.attr({"aria-expanded":"false","aria-hidden":"true"});
l.oldTab.attr("aria-selected","false");
if(g.length&&j.length){l.oldTab.attr("tabIndex",-1)
}else{if(g.length){this.tabs.filter(function(){return c(this).attr("tabIndex")===0
}).attr("tabIndex",-1)
}}g.attr({"aria-expanded":"true","aria-hidden":"false"});
l.newTab.attr({"aria-selected":"true",tabIndex:0})
},_activate:function(h){var g,i=this._findActive(h);
if(i[0]===this.active[0]){return
}if(!i.length){i=this.active
}g=i.find(".ui-tabs-anchor")[0];
this._eventHandler({target:g,currentTarget:g,preventDefault:c.noop})
},_findActive:function(g){return g===false?c():this.tabs.eq(g)
},_getIndex:function(g){if(typeof g==="string"){g=this.anchors.index(this.anchors.filter("[href$='"+g+"']"))
}return g
},_destroy:function(){if(this.xhr){this.xhr.abort()
}this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId();
this.tabs.add(this.panels).each(function(){if(c.data(this,"ui-tabs-destroy")){c(this).remove()
}else{c(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
}});
this.tabs.each(function(){var g=c(this),h=g.data("ui-tabs-aria-controls");
if(h){g.attr("aria-controls",h)
}else{g.removeAttr("aria-controls")
}});
this.panels.show();
if(this.options.heightStyle!=="content"){this.panels.css("height","")
}},enable:function(g){var h=this.options.disabled;
if(h===false){return
}if(g===e){h=false
}else{g=this._getIndex(g);
if(c.isArray(h)){h=c.map(h,function(i){return i!==g?i:null
})
}else{h=c.map(this.tabs,function(i,j){return j!==g?j:null
})
}}this._setupDisabled(h)
},disable:function(g){var h=this.options.disabled;
if(h===true){return
}if(g===e){h=true
}else{g=this._getIndex(g);
if(c.inArray(g,h)!==-1){return
}if(c.isArray(h)){h=c.merge([g],h).sort()
}else{h=[g]
}}this._setupDisabled(h)
},load:function(i,m){i=this._getIndex(i);
var l=this,j=this.tabs.eq(i),h=j.find(".ui-tabs-anchor"),g=this._getPanelForTab(j),k={tab:j,panel:g};
if(b(h[0])){return
}this.xhr=c.ajax(this._ajaxSettings(h,m,k));
if(this.xhr&&this.xhr.statusText!=="canceled"){j.addClass("ui-tabs-loading");
g.attr("aria-busy","true");
this.xhr.success(function(n){setTimeout(function(){g.html(n);
l._trigger("load",m,k)
},1)
}).complete(function(o,n){setTimeout(function(){if(n==="abort"){l.panels.stop(false,true)
}j.removeClass("ui-tabs-loading");
g.removeAttr("aria-busy");
if(o===l.xhr){delete l.xhr
}},1)
})
}},_ajaxSettings:function(g,j,i){var h=this;
return{url:g.attr("href"),beforeSend:function(l,k){return h._trigger("beforeLoad",j,c.extend({jqXHR:l,ajaxSettings:k},i))
}}
},_getPanelForTab:function(g){var h=c(g).attr("aria-controls");
return this.element.find(this._sanitizeSelector("#"+h))
}});
if(c.uiBackCompat!==false){c.ui.tabs.prototype._ui=function(h,g){return{tab:h,panel:g,index:this.anchors.index(h)}
};
c.widget("ui.tabs",c.ui.tabs,{url:function(h,g){this.anchors.eq(h).attr("href",g)
}});
c.widget("ui.tabs",c.ui.tabs,{options:{ajaxOptions:null,cache:false},_create:function(){this._super();
var g=this;
this._on({tabsbeforeload:function(h,i){if(c.data(i.tab[0],"cache.tabs")){h.preventDefault();
return
}i.jqXHR.success(function(){if(g.options.cache){c.data(i.tab[0],"cache.tabs",true)
}})
}})
},_ajaxSettings:function(h,i,j){var g=this.options.ajaxOptions;
return c.extend({},g,{error:function(m,k){try{g.error(m,k,j.tab.closest("li").index(),j.tab[0])
}catch(l){}}},this._superApply(arguments))
},_setOption:function(g,h){if(g==="cache"&&h===false){this.anchors.removeData("cache.tabs")
}this._super(g,h)
},_destroy:function(){this.anchors.removeData("cache.tabs");
this._super()
},url:function(g){this.anchors.eq(g).removeData("cache.tabs");
this._superApply(arguments)
}});
c.widget("ui.tabs",c.ui.tabs,{abort:function(){if(this.xhr){this.xhr.abort()
}}});
c.widget("ui.tabs",c.ui.tabs,{options:{spinner:"<em>Loading&#8230;</em>"},_create:function(){this._super();
this._on({tabsbeforeload:function(i,j){if(i.target!==this.element[0]||!this.options.spinner){return
}var h=j.tab.find("span"),g=h.html();
h.html(this.options.spinner);
j.jqXHR.complete(function(){h.html(g)
})
}})
}});
c.widget("ui.tabs",c.ui.tabs,{options:{enable:null,disable:null},enable:function(i){var h=this.options,g;
if(i&&h.disabled===true||(c.isArray(h.disabled)&&c.inArray(i,h.disabled)!==-1)){g=true
}this._superApply(arguments);
if(g){this._trigger("enable",null,this._ui(this.anchors[i],this.panels[i]))
}},disable:function(i){var h=this.options,g;
if(i&&h.disabled===false||(c.isArray(h.disabled)&&c.inArray(i,h.disabled)===-1)){g=true
}this._superApply(arguments);
if(g){this._trigger("disable",null,this._ui(this.anchors[i],this.panels[i]))
}}});
c.widget("ui.tabs",c.ui.tabs,{options:{add:null,remove:null,tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},add:function(l,k,j){if(j===e){j=this.anchors.length
}var m,h,i=this.options,g=c(i.tabTemplate.replace(/#\{href\}/g,l).replace(/#\{label\}/g,k)),n=!l.indexOf("#")?l.replace("#",""):this._tabId(g);
g.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy",true);
g.attr("aria-controls",n);
m=j>=this.tabs.length;
h=this.element.find("#"+n);
if(!h.length){h=this._createPanel(n);
if(m){if(j>0){h.insertAfter(this.panels.eq(-1))
}else{h.appendTo(this.element)
}}else{h.insertBefore(this.panels[j])
}}h.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide();
if(m){g.appendTo(this.tablist)
}else{g.insertBefore(this.tabs[j])
}i.disabled=c.map(i.disabled,function(o){return o>=j?++o:o
});
this.refresh();
if(this.tabs.length===1&&i.active===false){this.option("active",0)
}this._trigger("add",null,this._ui(this.anchors[j],this.panels[j]));
return this
},remove:function(i){i=this._getIndex(i);
var h=this.options,j=this.tabs.eq(i).remove(),g=this._getPanelForTab(j).remove();
if(j.hasClass("ui-tabs-active")&&this.anchors.length>2){this._activate(i+(i+1<this.anchors.length?1:-1))
}h.disabled=c.map(c.grep(h.disabled,function(k){return k!==i
}),function(k){return k>=i?--k:k
});
this.refresh();
this._trigger("remove",null,this._ui(j.find("a")[0],g[0]));
return this
}});
c.widget("ui.tabs",c.ui.tabs,{length:function(){return this.anchors.length
}});
c.widget("ui.tabs",c.ui.tabs,{options:{idPrefix:"ui-tabs-"},_tabId:function(h){var g=h.is("li")?h.find("a[href]"):h;
g=g[0];
return c(g).closest("li").attr("aria-controls")||g.title&&g.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF\-]/g,"")||this.options.idPrefix+d()
}});
c.widget("ui.tabs",c.ui.tabs,{options:{panelTemplate:"<div></div>"},_createPanel:function(g){return c(this.options.panelTemplate).attr("id",g).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)
}});
c.widget("ui.tabs",c.ui.tabs,{_create:function(){var g=this.options;
if(g.active===null&&g.selected!==e){g.active=g.selected===-1?false:g.selected
}this._super();
g.selected=g.active;
if(g.selected===false){g.selected=-1
}},_setOption:function(h,i){if(h!=="selected"){return this._super(h,i)
}var g=this.options;
this._super("active",i===-1?false:i);
g.selected=g.active;
if(g.selected===false){g.selected=-1
}},_eventHandler:function(){this._superApply(arguments);
this.options.selected=this.options.active;
if(this.options.selected===false){this.options.selected=-1
}}});
c.widget("ui.tabs",c.ui.tabs,{options:{show:null,select:null},_create:function(){this._super();
if(this.options.active!==false){this._trigger("show",null,this._ui(this.active.find(".ui-tabs-anchor")[0],this._getPanelForTab(this.active)[0]))
}},_trigger:function(j,k,l){var i,g,h=this._superApply(arguments);
if(!h){return false
}if(j==="beforeActivate"){i=l.newTab.length?l.newTab:l.oldTab;
g=l.newPanel.length?l.newPanel:l.oldPanel;
h=this._super("select",k,{tab:i.find(".ui-tabs-anchor")[0],panel:g[0],index:i.closest("li").index()})
}else{if(j==="activate"&&l.newTab.length){h=this._super("show",k,{tab:l.newTab.find(".ui-tabs-anchor")[0],panel:l.newPanel[0],index:l.newTab.closest("li").index()})
}}return h
}});
c.widget("ui.tabs",c.ui.tabs,{select:function(g){g=this._getIndex(g);
if(g===-1){if(this.options.collapsible&&this.options.selected!==-1){g=this.options.selected
}else{return
}}this.anchors.eq(g).trigger(this.options.event+this.eventNamespace)
}});
(function(){var g=0;
c.widget("ui.tabs",c.ui.tabs,{options:{cookie:null},_create:function(){var h=this.options,i;
if(h.active==null&&h.cookie){i=parseInt(this._cookie(),10);
if(i===-1){i=false
}h.active=i
}this._super()
},_cookie:function(i){var h=[this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+(++g))];
if(arguments.length){h.push(i===false?-1:i);
h.push(this.options.cookie)
}return c.cookie.apply(null,h)
},_refresh:function(){this._super();
if(this.options.cookie){this._cookie(this.options.active,this.options.cookie)
}},_eventHandler:function(){this._superApply(arguments);
if(this.options.cookie){this._cookie(this.options.active,this.options.cookie)
}},_destroy:function(){this._super();
if(this.options.cookie){this._cookie(null,this.options.cookie)
}}})
})();
c.widget("ui.tabs",c.ui.tabs,{_trigger:function(h,i,j){var g=c.extend({},j);
if(h==="load"){g.panel=g.panel[0];
g.tab=g.tab.find(".ui-tabs-anchor")[0]
}return this._super(h,i,g)
}});
c.widget("ui.tabs",c.ui.tabs,{options:{fx:null},_getFx:function(){var h,g,i=this.options.fx;
if(i){if(c.isArray(i)){h=i[0];
g=i[1]
}else{h=g=i
}}return i?{show:g,hide:h}:null
},_toggle:function(n,m){var l=this,g=m.newPanel,j=m.oldPanel,k=this._getFx();
if(!k){return this._super(n,m)
}l.running=true;
function i(){l.running=false;
l._trigger("activate",n,m)
}function h(){m.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
if(g.length&&k.show){g.animate(k.show,k.show.duration,function(){i()
})
}else{g.show();
i()
}}if(j.length&&k.hide){j.animate(k.hide,k.hide.duration,function(){m.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
h()
})
}else{m.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
j.hide();
h()
}}})
}})(jQuery);
(function(d){var b=0;
function c(f,g){var e=(f.attr("aria-describedby")||"").split(/\s+/);
e.push(g);
f.data("ui-tooltip-id",g).attr("aria-describedby",d.trim(e.join(" ")))
}function a(g){var h=g.data("ui-tooltip-id"),f=(g.attr("aria-describedby")||"").split(/\s+/),e=d.inArray(h,f);
if(e!==-1){f.splice(e,1)
}g.removeData("ui-tooltip-id");
f=d.trim(f.join(" "));
if(f){g.attr("aria-describedby",f)
}else{g.removeAttr("aria-describedby")
}}d.widget("ui.tooltip",{version:"1.9.2",options:{content:function(){var e=d(this).attr("title");
return d("<a>").text(e).html()
},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,tooltipClass:null,track:false,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"});
this.tooltips={};
this.parents={};
if(this.options.disabled){this._disable()
}},_setOption:function(e,g){var f=this;
if(e==="disabled"){this[g?"_disable":"_enable"]();
this.options[e]=g;
return
}this._super(e,g);
if(e==="content"){d.each(this.tooltips,function(i,h){f._updateContent(h)
})
}},_disable:function(){var e=this;
d.each(this.tooltips,function(h,f){var g=d.Event("blur");
g.target=g.currentTarget=f[0];
e.close(g,true)
});
this.element.find(this.options.items).andSelf().each(function(){var f=d(this);
if(f.is("[title]")){f.data("ui-tooltip-title",f.attr("title")).attr("title","")
}})
},_enable:function(){this.element.find(this.options.items).andSelf().each(function(){var e=d(this);
if(e.data("ui-tooltip-title")){e.attr("title",e.data("ui-tooltip-title"))
}})
},open:function(f){var e=this,g=d(f?f.target:this.element).closest(this.options.items);
if(!g.length||g.data("ui-tooltip-id")){return
}if(g.attr("title")){g.data("ui-tooltip-title",g.attr("title"))
}g.data("ui-tooltip-open",true);
if(f&&f.type==="mouseover"){g.parents().each(function(){var i=d(this),h;
if(i.data("ui-tooltip-open")){h=d.Event("blur");
h.target=h.currentTarget=this;
e.close(h,true)
}if(i.attr("title")){i.uniqueId();
e.parents[this.id]={element:this,title:i.attr("title")};
i.attr("title","")
}})
}this._updateContent(g,f)
},_updateContent:function(j,i){var h,e=this.options.content,g=this,f=i?i.type:null;
if(typeof e==="string"){return this._open(i,j,e)
}h=e.call(j[0],function(k){if(!j.data("ui-tooltip-open")){return
}g._delay(function(){if(i){i.type=f
}this._open(i,j,k)
})
});
if(h){this._open(i,j,h)
}},_open:function(i,k,h){var j,g,f,l=d.extend({},this.options.position);
if(!h){return
}j=this._find(k);
if(j.length){j.find(".ui-tooltip-content").html(h);
return
}if(k.is("[title]")){if(i&&i.type==="mouseover"){k.attr("title","")
}else{k.removeAttr("title")
}}j=this._tooltip(k);
c(k,j.attr("id"));
j.find(".ui-tooltip-content").html(h);
function e(m){l.of=m;
if(j.is(":hidden")){return
}j.position(l)
}if(this.options.track&&i&&/^mouse/.test(i.type)){this._on(this.document,{mousemove:e});
e(i)
}else{j.position(d.extend({of:k},this.options.position))
}j.hide();
this._show(j,this.options.show);
if(this.options.show&&this.options.show.delay){f=setInterval(function(){if(j.is(":visible")){e(l.of);
clearInterval(f)
}},d.fx.interval)
}this._trigger("open",i,{tooltip:j});
g={keyup:function(m){if(m.keyCode===d.ui.keyCode.ESCAPE){var n=d.Event(m);
n.currentTarget=k[0];
this.close(n,true)
}},remove:function(){this._removeTooltip(j)
}};
if(!i||i.type==="mouseover"){g.mouseleave="close"
}if(!i||i.type==="focusin"){g.focusout="close"
}this._on(true,k,g)
},close:function(f){var e=this,h=d(f?f.currentTarget:this.element),g=this._find(h);
if(this.closing){return
}if(h.data("ui-tooltip-title")){h.attr("title",h.data("ui-tooltip-title"))
}a(h);
g.stop(true);
this._hide(g,this.options.hide,function(){e._removeTooltip(d(this))
});
h.removeData("ui-tooltip-open");
this._off(h,"mouseleave focusout keyup");
if(h[0]!==this.element[0]){this._off(h,"remove")
}this._off(this.document,"mousemove");
if(f&&f.type==="mouseleave"){d.each(this.parents,function(j,i){d(i.element).attr("title",i.title);
delete e.parents[j]
})
}this.closing=true;
this._trigger("close",f,{tooltip:g});
this.closing=false
},_tooltip:function(e){var g="ui-tooltip-"+b++,f=d("<div>").attr({id:g,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));
d("<div>").addClass("ui-tooltip-content").appendTo(f);
f.appendTo(this.document[0].body);
if(d.fn.bgiframe){f.bgiframe()
}this.tooltips[g]=e;
return f
},_find:function(e){var f=e.data("ui-tooltip-id");
return f?d("#"+f):d()
},_removeTooltip:function(e){e.remove();
delete this.tooltips[e.attr("id")]
},_destroy:function(){var e=this;
d.each(this.tooltips,function(h,f){var g=d.Event("blur");
g.target=g.currentTarget=f[0];
e.close(g,true);
d("#"+h).remove();
if(f.data("ui-tooltip-title")){f.attr("title",f.data("ui-tooltip-title"));
f.removeData("ui-tooltip-title")
}})
}})
}(jQuery));
(function(d){d.widget("ui.widget",{yield:null,returnValues:{},before:function(h,g){var e=this[h];
this[h]=function(){g.apply(this,arguments);
return e.apply(this,arguments)
}
},after:function(h,g){var e=this[h];
this[h]=function(){this.returnValues[h]=e.apply(this,arguments);
return g.apply(this,arguments)
}
},around:function(h,g){var e=this[h];
this[h]=function(){var i=this.yield;
this.yield=e;
var f=g.apply(this,arguments);
this.yield=i;
return f
}
}});
var c=(function(e){return(function(f){e.prototype=f;
return new e()
})
})(function(){});
var a=/xyz/.test(function(){xyz
})?/\b_super\b/:/.*/;
d.ui.widget.subclass=function b(f){d.widget(f);
f=f.split(".");
var g=d[f[0]][f[1]],k=this,e=k.prototype;
var h=arguments[0]=g.prototype=c(e);
d.extend.apply(null,arguments);
g.subclass=b;
for(key in h){if(h.hasOwnProperty(key)){switch(key){case"_create":var i=h._create;
h._create=function(){e._create.apply(this);
i.apply(this)
};
break;
case"_init":var l=h._init;
h._init=function(){e._init.apply(this);
l.apply(this)
};
break;
case"destroy":var j=h.destroy;
h.destroy=function(){j.apply(this);
e.destroy.apply(this)
};
break;
case"options":var m=h.options;
h.options=d.extend({},e.options,m);
break;
default:if(d.isFunction(h[key])&&d.isFunction(e[key])&&a.test(h[key])){h[key]=(function(n,o){return function(){var q=this._super;
this._super=e[n];
try{var p=o.apply(this,arguments)
}finally{this._super=q
}return p
}
})(key,h[key])
}break
}}}}
})(jQuery);