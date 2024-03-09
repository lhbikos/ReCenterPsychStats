/*! jQuery UI - v1.12.1 - 2016-09-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)
})(function(k){function G(a){for(var c=a.css("visibility");
"inherit"===c;
){a=a.parent(),c=a.css("visibility")
}return"hidden"!==c
}function C(c){for(var d,a;
c.length&&c[0]!==document;
){if(d=c.css("position"),("absolute"===d||"relative"===d||"fixed"===d)&&(a=parseInt(c.css("zIndex"),10),!isNaN(a)&&0!==a)){return a
}c=c.parent()
}return 0
}function q(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},k.extend(this._defaults,this.regional[""]),this.regional.en=k.extend(!0,{},this.regional[""]),this.regional["en-US"]=k.extend(!0,{},this.regional.en),this.dpDiv=z(k("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
}function z(c){var a="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return c.on("mouseout",a,function(){k(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&k(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&k(this).removeClass("ui-datepicker-next-hover")
}).on("mouseover",a,y)
}function y(){k.datepicker._isDisabledDatepicker(A.inline?A.dpDiv.parent()[0]:A.input[0])||(k(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),k(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&k(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&k(this).addClass("ui-datepicker-next-hover"))
}function J(d,a){k.extend(d,a);
for(var c in a){null==a[c]&&(d[c]=a[c])
}return d
}function w(a){return function(){var c=this.element.val();
a.apply(this,arguments),this._refresh(),c!==this.element.val()&&this._trigger("change")
}
}k.ui=k.ui||{},k.ui.version="1.12.1";
var D=0,B=Array.prototype.slice;
k.cleanData=function(a){return function(d){var e,g,f;
for(f=0;
null!=(g=d[f]);
f++){try{e=k._data(g,"events"),e&&e.remove&&k(g).triggerHandler("remove")
}catch(c){}}a(d)
}
}(k.cleanData),k.widget=function(t,m,v){var f,d,u,c={},p=t.split(".")[0];
t=t.split(".")[1];
var g=p+"-"+t;
return v||(v=m,m=k.Widget),k.isArray(v)&&(v=k.extend.apply(null,[{}].concat(v))),k.expr[":"][g.toLowerCase()]=function(a){return !!k.data(a,g)
},k[p]=k[p]||{},f=k[p][t],d=k[p][t]=function(a,h){return this._createWidget?(arguments.length&&this._createWidget(a,h),void 0):new d(a,h)
},k.extend(d,f,{version:v.version,_proto:k.extend({},v),_childConstructors:[]}),u=new m,u.options=k.widget.extend({},u.options),k.each(v,function(h,a){return k.isFunction(a)?(c[h]=function(){function e(){return m.prototype[h].apply(this,arguments)
}function i(l){return m.prototype[h].apply(this,l)
}return function(){var n,l=this._super,r=this._superApply;
return this._super=e,this._superApply=i,n=a.apply(this,arguments),this._super=l,this._superApply=r,n
}
}(),void 0):(c[h]=a,void 0)
}),d.prototype=k.widget.extend(u,{widgetEventPrefix:f?u.widgetEventPrefix||t:t},c,{constructor:d,namespace:p,widgetName:t,widgetFullName:g}),f?(k.each(f._childConstructors,function(l,a){var h=a.prototype;
k.widget(h.namespace+"."+h.widgetName,d,a._proto)
}),delete f._childConstructors):m._childConstructors.push(d),k.widget.bridge(t,d),d
},k.widget.extend=function(g){for(var d,f,l=B.call(arguments,1),h=0,c=l.length;
c>h;
h++){for(d in l[h]){f=l[h][d],l[h].hasOwnProperty(d)&&void 0!==f&&(g[d]=k.isPlainObject(f)?k.isPlainObject(g[d])?k.widget.extend({},g[d],f):k.widget.extend({},f):f)
}}return g
},k.widget.bridge=function(d,a){var c=a.prototype.widgetFullName||d;
k.fn[d]=function(h){var g="string"==typeof h,e=B.call(arguments,1),f=this;
return g?this.length||"instance"!==h?this.each(function(){var l,m=k.data(this,c);
return"instance"===h?(f=m,!1):m?k.isFunction(m[h])&&"_"!==h.charAt(0)?(l=m[h].apply(m,e),l!==m&&void 0!==l?(f=l&&l.jquery?f.pushStack(l.get()):l,!1):void 0):k.error("no such method '"+h+"' for "+d+" widget instance"):k.error("cannot call methods on "+d+" prior to initialization; attempted to call method '"+h+"'")
}):f=void 0:(e.length&&(h=k.widget.extend.apply(null,[h].concat(e))),this.each(function(){var i=k.data(this,c);
i?(i.option(h||{}),i._init&&i._init()):k.data(this,c,new a(h,this))
})),f
}
},k.Widget=function(){},k.Widget._childConstructors=[],k.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(c,a){a=k(a||this.defaultElement||this)[0],this.element=k(a),this.uuid=D++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=k(),this.hoverable=k(),this.focusable=k(),this.classesElementLookup={},a!==this&&(k.data(a,this.widgetFullName,this),this._on(!0,this.element,{remove:function(d){d.target===a&&this.destroy()
}}),this.document=k(a.style?a.ownerDocument:a.document||a),this.window=k(this.document[0].defaultView||this.document[0].parentWindow)),this.options=k.widget.extend({},this.options,this._getCreateOptions(),c),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()
},_getCreateOptions:function(){return{}
},_getCreateEventData:k.noop,_create:k.noop,_init:k.noop,destroy:function(){var a=this;
this._destroy(),k.each(this.classesElementLookup,function(d,c){a._removeClass(c,d)
}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)
},_destroy:k.noop,widget:function(){return this.element
},option:function(g,d){var f,l,h,c=g;
if(0===arguments.length){return k.widget.extend({},this.options)
}if("string"==typeof g){if(c={},f=g.split("."),g=f.shift(),f.length){for(l=c[g]=k.widget.extend({},this.options[g]),h=0;
f.length-1>h;
h++){l[f[h]]=l[f[h]]||{},l=l[f[h]]
}if(g=f.pop(),1===arguments.length){return void 0===l[g]?null:l[g]
}l[g]=d
}else{if(1===arguments.length){return void 0===this.options[g]?null:this.options[g]
}c[g]=d
}}return this._setOptions(c),this
},_setOptions:function(a){var c;
for(c in a){this._setOption(c,a[c])
}return this
},_setOption:function(a,c){return"classes"===a&&this._setOptionClasses(c),this.options[a]=c,"disabled"===a&&this._setOptionDisabled(c),this
},_setOptionClasses:function(d){var a,c,f;
for(a in d){f=this.classesElementLookup[a],d[a]!==this.options.classes[a]&&f&&f.length&&(c=k(f.get()),this._removeClass(f,a),c.addClass(this._classes({element:c,keys:a,classes:d,add:!0})))
}},_setOptionDisabled:function(a){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!a),a&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))
},enable:function(){return this._setOptions({disabled:!1})
},disable:function(){return this._setOptions({disabled:!0})
},_classes:function(d){function a(g,l){var e,h;
for(h=0;
g.length>h;
h++){e=f.classesElementLookup[g[h]]||k(),e=d.add?k(k.unique(e.get().concat(d.element.get()))):k(e.not(d.element).get()),f.classesElementLookup[g[h]]=e,c.push(g[h]),l&&d.classes[g[h]]&&c.push(d.classes[g[h]])
}}var c=[],f=this;
return d=k.extend({element:this.element,classes:this.options.classes||{}},d),this._on(d.element,{remove:"_untrackClassesElement"}),d.keys&&a(d.keys.match(/\S+/g)||[],!0),d.extra&&a(d.extra.match(/\S+/g)||[]),c.join(" ")
},_untrackClassesElement:function(c){var a=this;
k.each(a.classesElementLookup,function(d,e){-1!==k.inArray(c.target,e)&&(a.classesElementLookup[d]=k(e.not(c.target).get()))
})
},_removeClass:function(c,d,a){return this._toggleClass(c,d,a,!1)
},_addClass:function(c,d,a){return this._toggleClass(c,d,a,!0)
},_toggleClass:function(c,f,a,d){d="boolean"==typeof d?d:a;
var h="string"==typeof c||null===c,g={extra:h?f:a,keys:h?c:f,element:h?this.element:c,add:d};
return g.element.toggleClass(this._classes(g),d),this
},_on:function(d,a,c){var g,f=this;
"boolean"!=typeof d&&(c=a,a=d,d=!1),c?(a=g=k(a),this.bindings=this.bindings.add(a)):(c=a,a=this.element,g=this.widget()),k.each(c,function(n,i){function o(){return d||f.options.disabled!==!0&&!k(this).hasClass("ui-state-disabled")?("string"==typeof i?f[i]:i).apply(f,arguments):void 0
}"string"!=typeof i&&(o.guid=i.guid=i.guid||o.guid||k.guid++);
var m=n.match(/^([\w:-]*)\s*(.*)$/),e=m[1]+f.eventNamespace,p=m[2];
p?g.on(e,p,o):a.on(e,o)
})
},_off:function(c,a){a=(a||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,c.off(a).off(a),this.bindings=k(this.bindings.not(c).get()),this.focusable=k(this.focusable.not(c).get()),this.hoverable=k(this.hoverable.not(c).get())
},_delay:function(c,f){function a(){return("string"==typeof c?d[c]:c).apply(d,arguments)
}var d=this;
return setTimeout(a,f||0)
},_hoverable:function(a){this.hoverable=this.hoverable.add(a),this._on(a,{mouseenter:function(c){this._addClass(k(c.currentTarget),null,"ui-state-hover")
},mouseleave:function(c){this._removeClass(k(c.currentTarget),null,"ui-state-hover")
}})
},_focusable:function(a){this.focusable=this.focusable.add(a),this._on(a,{focusin:function(c){this._addClass(k(c.currentTarget),null,"ui-state-focus")
},focusout:function(c){this._removeClass(k(c.currentTarget),null,"ui-state-focus")
}})
},_trigger:function(g,d,f){var l,h,c=this.options[g];
if(f=f||{},d=k.Event(d),d.type=(g===this.widgetEventPrefix?g:this.widgetEventPrefix+g).toLowerCase(),d.target=this.element[0],h=d.originalEvent){for(l in h){l in d||(d[l]=h[l])
}}return this.element.trigger(d,f),!(k.isFunction(c)&&c.apply(this.element[0],[d].concat(f))===!1||d.isDefaultPrevented())
}},k.each({show:"fadeIn",hide:"fadeOut"},function(c,a){k.Widget.prototype["_"+c]=function(e,h,g){"string"==typeof h&&(h={effect:h});
var d,f=h?h===!0||"number"==typeof h?a:h.effect||a:c;
h=h||{},"number"==typeof h&&(h={duration:h}),d=!k.isEmptyObject(h),h.complete=g,h.delay&&e.delay(h.delay),d&&k.effects&&k.effects.effect[f]?e[c](h):f!==c&&e[f]?e[f](h.duration,h.easing,g):e.queue(function(l){k(this)[c](),g&&g.call(e[0]),l()
})
}
}),k.widget,function(){function L(c,d,a){return[parseFloat(c[0])*(P.test(c[0])?d/100:1),parseFloat(c[1])*(P.test(c[1])?a/100:1)]
}function t(c,a){return parseInt(k.css(c,a),10)||0
}function Q(c){var a=c[0];
return 9===a.nodeType?{width:c.width(),height:c.height(),offset:{top:0,left:0}}:k.isWindow(a)?{width:c.width(),height:c.height(),offset:{top:c.scrollTop(),left:c.scrollLeft()}}:a.preventDefault?{width:0,height:0,offset:{top:a.pageY,left:a.pageX}}:{width:c.outerWidth(),height:c.outerHeight(),offset:c.offset()}
}var m,g=Math.max,O=Math.abs,f=/left|center|right/,v=/top|center|bottom/,p=/[\+\-]\d+(\.[\d]+)?%?/,N=/^\w+/,P=/%$/,M=k.fn.position;
k.position={scrollbarWidth:function(){if(void 0!==m){return m
}var d,a,c=k("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),h=c.children()[0];
return k("body").append(c),d=h.offsetWidth,c.css("overflow","scroll"),a=h.offsetWidth,d===a&&(a=c[0].clientWidth),c.remove(),m=d-a
},getScrollInfo:function(d){var a=d.isWindow||d.isDocument?"":d.element.css("overflow-x"),c=d.isWindow||d.isDocument?"":d.element.css("overflow-y"),l="scroll"===a||"auto"===a&&d.width<d.element[0].scrollWidth,h="scroll"===c||"auto"===c&&d.height<d.element[0].scrollHeight;
return{width:h?k.position.scrollbarWidth():0,height:l?k.position.scrollbarWidth():0}
},getWithinInfo:function(d){var a=k(d||window),c=k.isWindow(a[0]),l=!!a[0]&&9===a[0].nodeType,h=!c&&!l;
return{element:a,isWindow:c,isDocument:l,offset:h?k(d).offset():{left:0,top:0},scrollLeft:a.scrollLeft(),scrollTop:a.scrollTop(),width:a.outerWidth(),height:a.outerHeight()}
}},k.fn.position=function(c){if(!c||!c.of){return M.apply(this,arguments)
}c=k.extend({},c);
var S,a,i,h,d,s,R=k(c.of),o=k.position.getWithinInfo(c.within),l=k.position.getScrollInfo(o),r=(c.collision||"flip").split(" "),e={};
return s=Q(R),R[0].preventDefault&&(c.at="left top"),a=s.width,i=s.height,h=s.offset,d=k.extend({},h),k.each(["my","at"],function(){var u,T,n=(c[this]||"").split(" ");
1===n.length&&(n=f.test(n[0])?n.concat(["center"]):v.test(n[0])?["center"].concat(n):["center","center"]),n[0]=f.test(n[0])?n[0]:"center",n[1]=v.test(n[1])?n[1]:"center",u=p.exec(n[0]),T=p.exec(n[1]),e[this]=[u?u[0]:0,T?T[0]:0],c[this]=[N.exec(n[0])[0],N.exec(n[1])[0]]
}),1===r.length&&(r[1]=r[0]),"right"===c.at[0]?d.left+=a:"center"===c.at[0]&&(d.left+=a/2),"bottom"===c.at[1]?d.top+=i:"center"===c.at[1]&&(d.top+=i/2),S=L(e.at,a,i),d.left+=S[0],d.top+=S[1],this.each(function(){var ab,u,V=k(this),U=V.outerWidth(),X=V.outerHeight(),W=t(this,"marginLeft"),aa=t(this,"marginTop"),Y=U+W+t(this,"marginRight")+l.width,T=X+aa+t(this,"marginBottom")+l.height,n=k.extend({},d),Z=L(e.my,V.outerWidth(),V.outerHeight());
"right"===c.my[0]?n.left-=U:"center"===c.my[0]&&(n.left-=U/2),"bottom"===c.my[1]?n.top-=X:"center"===c.my[1]&&(n.top-=X/2),n.left+=Z[0],n.top+=Z[1],ab={marginLeft:W,marginTop:aa},k.each(["left","top"],function(ad,ac){k.ui.position[r[ad]]&&k.ui.position[r[ad]][ac](n,{targetWidth:a,targetHeight:i,elemWidth:U,elemHeight:X,collisionPosition:ab,collisionWidth:Y,collisionHeight:T,offset:[S[0]+Z[0],S[1]+Z[1]],my:c.my,at:c.at,within:o,elem:V})
}),c.using&&(u=function(ae){var ah=h.left-n.left,ad=ah+a-U,af=h.top-n.top,ag=af+i-X,ac={target:{element:R,left:h.left,top:h.top,width:a,height:i},element:{element:V,left:n.left,top:n.top,width:U,height:X},horizontal:0>ad?"left":ah>0?"right":"center",vertical:0>ag?"top":af>0?"bottom":"middle"};
U>a&&a>O(ah+ad)&&(ac.horizontal="center"),X>i&&i>O(af+ag)&&(ac.vertical="middle"),ac.important=g(O(ah),O(ad))>g(O(af),O(ag))?"horizontal":"vertical",c.using.call(this,ae,ac)
}),V.offset(k.extend(n,{using:u}))
})
},k.ui.position={fit:{left:function(U,S){var u,V=S.within,d=V.isWindow?V.scrollLeft:V.offset.left,T=V.width,c=U.left-S.collisionPosition.marginLeft,R=d-c,o=c+S.collisionWidth-T-d;
S.collisionWidth>T?R>0&&0>=o?(u=U.left+R+S.collisionWidth-T-d,U.left+=R-u):U.left=o>0&&0>=R?d:R>o?d+T-S.collisionWidth:d:R>0?U.left+=R:o>0?U.left-=o:U.left=g(U.left-c,U.left)
},top:function(U,S){var u,V=S.within,d=V.isWindow?V.scrollTop:V.offset.top,T=S.within.height,c=U.top-S.collisionPosition.marginTop,R=d-c,o=c+S.collisionHeight-T-d;
S.collisionHeight>T?R>0&&0>=o?(u=U.top+R+S.collisionHeight-T-d,U.top+=R-u):U.top=o>0&&0>=R?d:R>o?d+T-S.collisionHeight:d:R>0?U.top+=R:o>0?U.top-=o:U.top=g(U.top-c,U.top)
}},flip:{left:function(ac,Y){var V,ad,T=Y.within,S=T.offset.left+T.scrollLeft,a=T.width,W=T.isWindow?T.scrollLeft:T.offset.left,U=ac.left-Y.collisionPosition.marginLeft,aa=U-W,ab=U+Y.collisionWidth-a-W,Z="left"===Y.my[0]?-Y.elemWidth:"right"===Y.my[0]?Y.elemWidth:0,R="left"===Y.at[0]?Y.targetWidth:"right"===Y.at[0]?-Y.targetWidth:0,X=-2*Y.offset[0];
0>aa?(V=ac.left+Z+R+X+Y.collisionWidth-a-S,(0>V||O(aa)>V)&&(ac.left+=Z+R+X)):ab>0&&(ad=ac.left-Y.collisionPosition.marginLeft+Z+R+X-W,(ad>0||ab>O(ad))&&(ac.left+=Z+R+X))
},top:function(ad,Z){var V,ae,T=Z.within,S=T.offset.top+T.scrollTop,a=T.height,W=T.isWindow?T.scrollTop:T.offset.top,U=ad.top-Z.collisionPosition.marginTop,ab=U-W,ac=U+Z.collisionHeight-a-W,aa="top"===Z.my[1],R=aa?-Z.elemHeight:"bottom"===Z.my[1]?Z.elemHeight:0,Y="top"===Z.at[1]?Z.targetHeight:"bottom"===Z.at[1]?-Z.targetHeight:0,X=-2*Z.offset[1];
0>ab?(ae=ad.top+R+Y+X+Z.collisionHeight-a-S,(0>ae||O(ab)>ae)&&(ad.top+=R+Y+X)):ac>0&&(V=ad.top-Z.collisionPosition.marginTop+R+Y+X-W,(V>0||ac>O(V))&&(ad.top+=R+Y+X))
}},flipfit:{left:function(){k.ui.position.flip.left.apply(this,arguments),k.ui.position.fit.left.apply(this,arguments)
},top:function(){k.ui.position.flip.top.apply(this,arguments),k.ui.position.fit.top.apply(this,arguments)
}}}
}(),k.ui.position,k.extend(k.expr[":"],{data:k.expr.createPseudo?k.expr.createPseudo(function(a){return function(c){return !!k.data(c,a)
}
}):function(d,a,c){return !!k.data(d,c[3])
}}),k.fn.extend({disableSelection:function(){var a="onselectstart" in document.createElement("div")?"selectstart":"mousedown";
return function(){return this.on(a+".ui-disableSelection",function(c){c.preventDefault()
})
}
}(),enableSelection:function(){return this.off(".ui-disableSelection")
}});
var I="ui-effects-",j="ui-effects-style",H="ui-effects-animated",x=k;
k.effects={effect:{}},function(V,Q){function N(c,f,a){var d=U[f.type]||{};
return null==c?a||!f.def?null:f.def:(c=d.floor?~~c:parseFloat(c),isNaN(c)?f.def:d.mod?(c+d.mod)%d.mod:0>c?0:c>d.max?d.max:c)
}function W(a){var c=M(),d=c._rgba=[];
return a=a.toLowerCase(),P(O,function(i,s){var f,p=s.re.exec(a),n=p&&s.parse(p),e=s.space||"rgba";
return n?(f=c[e](n),c[S[e].cache]=f[S[e].cache],d=c._rgba=f._rgba,!1):Q
}),d.length?("0,0,0,0"===d.join()&&V.extend(d,v.transparent),c):v[a]
}function L(c,d,a){return a=(a+1)%1,1>6*a?c+6*(d-c)*a:1>2*a?d:2>3*a?c+6*(d-c)*(2/3-a):c
}var v,T="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",g=/^([\-+])=\s*(\d+\.?\d*)/,O=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]
}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]
}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]
}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]
}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]
}}],M=V.Color=function(d,a,c,f){return new V.Color.fn.parse(d,a,c,f)
},S={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},U={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},R=M.support={},m=V("<p>")[0],P=V.each;
m.style.cssText="background-color:rgba(1,1,1,.5)",R.rgba=m.style.backgroundColor.indexOf("rgba")>-1,P(S,function(a,c){c.cache="_"+a,c.props.alpha={idx:3,type:"percent",def:1}
}),M.fn=V.extend(M.prototype,{parse:function(s,c,i,f){if(s===Q){return this._rgba=[null,null,null,null],this
}(s.jquery||s.nodeType)&&(s=V(s).css(c),c=Q);
var e=this,o=V.type(s),l=this._rgba=[];
return c!==Q&&(s=[s,c,i,f],o="array"),"string"===o?this.parse(W(s)||v._default):"array"===o?(P(S.rgba.props,function(a,d){l[d.idx]=N(s[d.idx],d)
}),this):"object"===o?(s instanceof M?P(S,function(a,d){s[d.cache]&&(e[d.cache]=s[d.cache].slice())
}):P(S,function(d,a){var h=a.cache;
P(a.props,function(n,p){if(!e[h]&&a.to){if("alpha"===n||null==s[n]){return
}e[h]=a.to(e._rgba)
}e[h][p.idx]=N(s[n],p,!0)
}),e[h]&&0>V.inArray(null,e[h].slice(0,3))&&(e[h][3]=1,a.from&&(e._rgba=a.from(e[h])))
}),this):Q
},is:function(c){var a=M(c),d=!0,e=this;
return P(S,function(h,l){var f,i=a[l.cache];
return i&&(f=e[l.cache]||l.to&&l.to(e._rgba)||[],P(l.props,function(o,n){return null!=i[n.idx]?d=i[n.idx]===f[n.idx]:Q
})),d
}),d
},_space:function(){var a=[],c=this;
return P(S,function(d,e){c[e.cache]&&a.push(d)
}),a.pop()
},transition:function(d,p){var i=M(d),X=i._space(),u=S[X],c=0===this.alpha()?M("transparent"):this,l=c[u.cache]||u.to(c._rgba),f=l.slice();
return i=i[u.cache],P(u.props,function(r,Z){var s=Z.idx,h=l[s],e=i[s],Y=U[Z.type]||{};
null!==e&&(null===h?f[s]=e:(Y.mod&&(e-h>Y.mod/2?h+=Y.mod:h-e>Y.mod/2&&(h-=Y.mod)),f[s]=N((e-h)*p+h,Z)))
}),this[X](f)
},blend:function(d){if(1===this._rgba[3]){return this
}var a=this._rgba.slice(),c=a.pop(),f=M(d)._rgba;
return M(V.map(a,function(h,i){return(1-c)*f[i]+c*h
}))
},toRgbaString:function(){var c="rgba(",a=V.map(this._rgba,function(d,f){return null==d?f>2?1:0:d
});
return 1===a[3]&&(a.pop(),c="rgb("),c+a.join()+")"
},toHslaString:function(){var c="hsla(",a=V.map(this.hsla(),function(d,f){return null==d&&(d=f>2?1:0),f&&3>f&&(d=Math.round(100*d)+"%"),d
});
return 1===a[3]&&(a.pop(),c="hsl("),c+a.join()+")"
},toHexString:function(d){var a=this._rgba.slice(),c=a.pop();
return d&&a.push(~~(255*c)),"#"+V.map(a,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e
}).join("")
},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()
}}),M.fn.parse.prototype=M.fn,S.hsla.to=function(ae){if(null==ae[0]||null==ae[1]||null==ae[2]){return[null,null,null,ae[3]]
}var aa,Y,af=ae[0]/255,p=ae[1]/255,f=ae[2]/255,ac=ae[3],d=Math.max(af,p,f),Z=Math.min(af,p,f),X=d-Z,ab=d+Z,ad=0.5*ab;
return aa=Z===d?0:af===d?60*(p-f)/X+360:p===d?60*(f-af)/X+120:60*(af-p)/X+240,Y=0===X?0:0.5>=ad?X/ab:X/(2-ab),[Math.round(aa)%360,Y,ad,null==ac?1:ac]
},S.hsla.from=function(f){if(null==f[0]||null==f[1]||null==f[2]){return[null,null,null,f[3]]
}var n=f[0]/360,d=f[1],h=f[2],p=f[3],c=0.5>=h?h*(1+d):h+d-h*d,l=2*h-c;
return[Math.round(255*L(l,c,n+1/3)),Math.round(255*L(l,c,n)),Math.round(255*L(l,c,n-1/3)),p]
},P(S,function(f,p){var i=p.props,d=p.cache,e=p.to,l=p.from;
M.fn[f]=function(c){if(e&&!this[d]&&(this[d]=e(this._rgba)),c===Q){return this[d].slice()
}var t,h=V.type(c),a="array"===h||"object"===h?c:arguments,o=this[d].slice();
return P(i,function(n,u){var r=a["object"===h?n:u.idx];
null==r&&(r=o[u.idx]),o[u.idx]=N(r,u)
}),l?(t=M(l(o)),t[d]=o,t):M(o)
},P(i,function(c,a){M.fn[c]||(M.fn[c]=function(Y){var u,s=V.type(Y),t="alpha"===c?this._hsla?"hsla":"rgba":f,r=this[t](),X=r[a.idx];
return"undefined"===s?X:("function"===s&&(Y=Y.call(this,X),s=V.type(Y)),null==Y&&a.empty?this:("string"===s&&(u=g.exec(Y),u&&(Y=X+parseFloat(u[2])*("+"===u[1]?1:-1))),r[a.idx]=Y,this[t](r)))
})
})
}),M.hook=function(c){var a=c.split(" ");
P(a,function(f,d){V.cssHooks[d]={set:function(s,u){var t,i,p="";
if("transparent"!==u&&("string"!==V.type(u)||(t=W(u)))){if(u=M(t||u),!R.rgba&&1!==u._rgba[3]){for(i="backgroundColor"===d?s.parentNode:s;
(""===p||"transparent"===p)&&i&&i.style;
){try{p=V.css(i,"backgroundColor"),i=i.parentNode
}catch(l){}}u=u.blend(p&&"transparent"!==p?p:"_default")
}u=u.toRgbaString()
}try{s.style[d]=u
}catch(l){}}},V.fx.step[d]=function(h){h.colorInit||(h.start=M(h.elem,d),h.end=M(h.end),h.colorInit=!0),V.cssHooks[d].set(h.elem,h.start.transition(h.end,h.pos))
}
})
},M.hook(T),V.cssHooks.borderColor={expand:function(a){var c={};
return P(["Top","Right","Bottom","Left"],function(d,e){c["border"+e+"Color"]=a
}),c
}},v=V.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
}(x),function(){function d(l){var g,h,p=l.ownerDocument.defaultView?l.ownerDocument.defaultView.getComputedStyle(l,null):l.currentStyle,m={};
if(p&&p.length&&p[0]&&p[p[0]]){for(h=p.length;
h--;
){g=p[h],"string"==typeof p[g]&&(m[k.camelCase(g)]=p[g])
}}else{for(g in p){"string"==typeof p[g]&&(m[g]=p[g])
}}return m
}function a(m,h){var l,n,g={};
for(l in h){n=h[l],m[l]!==n&&(f[l]||(k.fx.step[l]||!isNaN(parseFloat(n)))&&(g[l]=n))
}return g
}var c=["add","remove","toggle"],f={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
k.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(h,g){k.fx.step[g]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(x.style(e.elem,g,e.end),e.setAttr=!0)
}
}),k.fn.addBack||(k.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))
}),k.effects.animateClass=function(m,l,e,i){var g=k.speed(l,e,i);
return this.queue(function(){var s,n=k(this),p=n.attr("class")||"",h=g.children?n.find("*").addBack():n;
h=h.map(function(){var o=k(this);
return{el:o,start:d(this)}
}),s=function(){k.each(c,function(o,r){m[r]&&n[r+"Class"](m[r])
})
},s(),h=h.map(function(){return this.end=d(this.el[0]),this.diff=a(this.start,this.end),this
}),n.attr("class",p),h=h.map(function(){var t=this,o=k.Deferred(),r=k.extend({},g,{queue:!1,complete:function(){o.resolve(t)
}});
return this.el.animate(this.diff,r),o.promise()
}),k.when.apply(k,h.get()).done(function(){s(),k.each(arguments,function(){var o=this.el;
k.each(this.diff,function(r){o.css(r,"")
})
}),g.complete.call(n[0])
})
})
},k.fn.extend({addClass:function(g){return function(e,h,m,l){return h?k.effects.animateClass.call(this,{add:e},h,m,l):g.apply(this,arguments)
}
}(k.fn.addClass),removeClass:function(g){return function(e,h,m,l){return arguments.length>1?k.effects.animateClass.call(this,{remove:e},h,m,l):g.apply(this,arguments)
}
}(k.fn.removeClass),toggleClass:function(g){return function(h,l,p,m,e){return"boolean"==typeof l||void 0===l?p?k.effects.animateClass.call(this,l?{add:h}:{remove:h},p,m,e):g.apply(this,arguments):k.effects.animateClass.call(this,{toggle:h},l,p,m)
}
}(k.fn.toggleClass),switchClass:function(l,g,h,p,m){return k.effects.animateClass.call(this,{add:g,remove:l},h,p,m)
}})
}(),function(){function d(h,f,g,l){return k.isPlainObject(h)&&(f=h,h=h.effect),h={effect:h},null==f&&(f={}),k.isFunction(f)&&(l=f,g=null,f={}),("number"==typeof f||k.fx.speeds[f])&&(l=g,g=f,f={}),k.isFunction(g)&&(l=g,g=null),f&&k.extend(h,f),g=g||f.duration,h.duration=k.fx.off?0:"number"==typeof g?g:g in k.fx.speeds?k.fx.speeds[g]:k.fx.speeds._default,h.complete=l||f.complete,h
}function a(f){return !f||"number"==typeof f||k.fx.speeds[f]?!0:"string"!=typeof f||k.effects.effect[f]?k.isFunction(f)?!0:"object"!=typeof f||f.effect?!1:!0:!0
}function c(g,l){var f=l.outerWidth(),h=l.outerHeight(),p=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,m=p.exec(g)||["",0,f,h,0];
return{top:parseFloat(m[1])||0,right:"auto"===m[2]?f:parseFloat(m[2]),bottom:"auto"===m[3]?h:parseFloat(m[3]),left:parseFloat(m[4])||0}
}k.expr&&k.expr.filters&&k.expr.filters.animated&&(k.expr.filters.animated=function(f){return function(e){return !!k(e).data(H)||f(e)
}
}(k.expr.filters.animated)),k.uiBackCompat!==!1&&k.extend(k.effects,{save:function(g,l){for(var f=0,h=l.length;
h>f;
f++){null!==l[f]&&g.data(I+l[f],g[0].style[l[f]])
}},restore:function(g,l){for(var f,h=0,m=l.length;
m>h;
h++){null!==l[h]&&(f=g.data(I+l[h]),g.css(l[h],f))
}},setMode:function(f,g){return"toggle"===g&&(g=f.is(":hidden")?"show":"hide"),g
},createWrapper:function(l){if(l.parent().is(".ui-effects-wrapper")){return l.parent()
}var g={width:l.outerWidth(!0),height:l.outerHeight(!0),"float":l.css("float")},h=k("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),p={width:l.width(),height:l.height()},m=document.activeElement;
try{m.id
}catch(f){m=document.body
}return l.wrap(h),(l[0]===m||k.contains(l[0],m))&&k(m).trigger("focus"),h=l.parent(),"static"===l.css("position")?(h.css({position:"relative"}),l.css({position:"relative"})):(k.extend(g,{position:l.css("position"),zIndex:l.css("z-index")}),k.each(["top","left","bottom","right"],function(e,i){g[i]=l.css(i),isNaN(parseInt(g[i],10))&&(g[i]="auto")
}),l.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),l.css(p),h.css(g).show()
},removeWrapper:function(g){var f=document.activeElement;
return g.parent().is(".ui-effects-wrapper")&&(g.parent().replaceWith(g),(g[0]===f||k.contains(g[0],f))&&k(f).trigger("focus")),g
}}),k.extend(k.effects,{version:"1.12.1",define:function(h,f,g){return g||(g=f,f="effect"),k.effects.effect[h]=g,k.effects.effect[h].mode=f,g
},scaledDimensions:function(g,l,f){if(0===l){return{height:0,width:0,outerHeight:0,outerWidth:0}
}var h="horizontal"!==f?(l||100)/100:1,m="vertical"!==f?(l||100)/100:1;
return{height:g.height()*m,width:g.width()*h,outerHeight:g.outerHeight()*m,outerWidth:g.outerWidth()*h}
},clipToBox:function(e){return{width:e.clip.right-e.clip.left,height:e.clip.bottom-e.clip.top,left:e.clip.left,top:e.clip.top}
},unshift:function(g,l,f){var h=g.queue();
l>1&&h.splice.apply(h,[1,0].concat(h.splice(l,f))),g.dequeue()
},saveStyle:function(e){e.data(j,e[0].style.cssText)
},restoreStyle:function(e){e[0].style.cssText=e.data(j)||"",e.removeData(j)
},mode:function(g,h){var f=g.is(":hidden");
return"toggle"===h&&(h=f?"show":"hide"),(f?"hide"===h:"show"===h)&&(h="none"),h
},getBaseline:function(g,l){var f,h;
switch(g[0]){case"top":f=0;
break;
case"middle":f=0.5;
break;
case"bottom":f=1;
break;
default:f=g[0]/l.height
}switch(g[1]){case"left":h=0;
break;
case"center":h=0.5;
break;
case"right":h=1;
break;
default:h=g[1]/l.width
}return{x:h,y:f}
},createPlaceholder:function(h){var f,g=h.css("position"),l=h.position();
return h.css({marginTop:h.css("marginTop"),marginBottom:h.css("marginBottom"),marginLeft:h.css("marginLeft"),marginRight:h.css("marginRight")}).outerWidth(h.outerWidth()).outerHeight(h.outerHeight()),/^(static|relative)/.test(g)&&(g="absolute",f=k("<"+h[0].nodeName+">").insertAfter(h).css({display:/^(inline|ruby)/.test(h.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:h.css("marginTop"),marginBottom:h.css("marginBottom"),marginLeft:h.css("marginLeft"),marginRight:h.css("marginRight"),"float":h.css("float")}).outerWidth(h.outerWidth()).outerHeight(h.outerHeight()).addClass("ui-effects-placeholder"),h.data(I+"placeholder",f)),h.css({position:g,left:l.left,top:l.top}),f
},removePlaceholder:function(g){var h=I+"placeholder",f=g.data(h);
f&&(f.remove(),g.removeData(h))
},cleanUp:function(f){k.effects.restoreStyle(f),k.effects.removePlaceholder(f)
},setTransition:function(h,f,g,l){return l=l||{},k.each(f,function(m,e){var n=h.cssUnit(e);
n[0]>0&&(l[e]=n[0]*g+n[1])
}),l
}}),k.fn.extend({effect:function(){function p(o){function l(){n.removeData(H),k.effects.cleanUp(n),"hide"===N.mode&&n.hide(),h()
}function h(){k.isFunction(t)&&t.call(n[0]),k.isFunction(o)&&o()
}var n=k(this);
N.mode=v.shift(),k.uiBackCompat===!1||f?"none"===N.mode?(n[m](),h()):g.call(n[0],N,l):(n.is(":hidden")?"hide"===m:"show"===m)?(n[m](),h()):g.call(n[0],N,h)
}var N=d.apply(this,arguments),g=k.effects.effect[N.effect],f=g.mode,L=N.queue,e=L||"fx",t=N.complete,m=N.mode,v=[],M=function(n){var h=k(this),l=k.effects.mode(h,m)||f;
h.data(H,!0),v.push(l),f&&("show"===l||l===f&&"hide"===l)&&h.show(),f&&"none"===l||k.effects.saveStyle(h),k.isFunction(n)&&n()
};
return k.fx.off||!g?m?this[m](N.duration,t):this.each(function(){t&&t.call(this)
}):L===!1?this.each(M).each(p):this.queue(e,M).queue(e,p)
},show:function(e){return function(f){if(a(f)){return e.apply(this,arguments)
}var g=d.apply(this,arguments);
return g.mode="show",this.effect.call(this,g)
}
}(k.fn.show),hide:function(e){return function(f){if(a(f)){return e.apply(this,arguments)
}var g=d.apply(this,arguments);
return g.mode="hide",this.effect.call(this,g)
}
}(k.fn.hide),toggle:function(e){return function(f){if(a(f)||"boolean"==typeof f){return e.apply(this,arguments)
}var g=d.apply(this,arguments);
return g.mode="toggle",this.effect.call(this,g)
}
}(k.fn.toggle),cssUnit:function(h){var f=this.css(h),g=[];
return k.each(["em","px","%","pt"],function(i,l){f.indexOf(l)>0&&(g=[parseFloat(f),l])
}),g
},cssClip:function(e){return e?this.css("clip","rect("+e.top+"px "+e.right+"px "+e.bottom+"px "+e.left+"px)"):c(this.css("clip"),this)
},transfer:function(L,t){var Q=k(this),m=k(L.to),g="fixed"===m.css("position"),O=k("body"),f=g?O.scrollTop():0,v=g?O.scrollLeft():0,p=m.offset(),N={top:p.top-f,left:p.left-v,height:m.innerHeight(),width:m.innerWidth()},P=Q.offset(),M=k("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(L.className).css({top:P.top-f,left:P.left-v,height:Q.innerHeight(),width:Q.innerWidth(),position:g?"fixed":"absolute"}).animate(N,L.duration,L.easing,function(){M.remove(),k.isFunction(t)&&t()
})
}}),k.fx.step.clip=function(f){f.clipInit||(f.start=k(f.elem).cssClip(),"string"==typeof f.end&&(f.end=c(f.end,f.elem)),f.clipInit=!0),k(f.elem).cssClip({top:f.pos*(f.end.top-f.start.top)+f.start.top,right:f.pos*(f.end.right-f.start.right)+f.start.right,bottom:f.pos*(f.end.bottom-f.start.bottom)+f.start.bottom,left:f.pos*(f.end.left-f.start.left)+f.start.left})
}
}(),function(){var a={};
k.each(["Quad","Cubic","Quart","Quint","Expo"],function(d,c){a[c]=function(f){return Math.pow(f,d+2)
}
}),k.extend(a,{Sine:function(c){return 1-Math.cos(c*Math.PI/2)
},Circ:function(c){return 1-Math.sqrt(1-c*c)
},Elastic:function(c){return 0===c||1===c?c:-Math.pow(2,8*(c-1))*Math.sin((80*(c-1)-7.5)*Math.PI/15)
},Back:function(c){return c*c*(3*c-2)
},Bounce:function(d){for(var f,c=4;
((f=Math.pow(2,--c))-1)/11>d;
){}return 1/Math.pow(4,3-c)-7.5625*Math.pow((3*f-2)/22-d,2)
}}),k.each(a,function(d,c){k.easing["easeIn"+d]=c,k.easing["easeOut"+d]=function(e){return 1-c(1-e)
},k.easing["easeInOut"+d]=function(e){return 0.5>e?c(2*e)/2:1-c(-2*e+2)/2
}
})
}();
var F=k.effects;
k.effects.define("blind","hide",function(m,d){var g={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},t=k(this),p=m.direction||"up",c=t.cssClip(),l={clip:k.extend({},c)},f=k.effects.createPlaceholder(t);
l.clip[g[p][0]]=l.clip[g[p][1]],"show"===m.mode&&(t.cssClip(l.clip),f&&f.css(k.effects.clipToBox(l)),l.clip=c),f&&f.animate(k.effects.clipToBox(l),m.duration,m.easing),t.animate(l,{queue:!1,duration:m.duration,easing:m.easing,complete:d})
}),k.effects.define("bounce",function(X,T){var M,Q,P,ab=k(this),N=X.mode,U="hide"===N,S="show"===N,Z=X.direction||"up",L=X.distance,Y=X.times||5,O=2*Y+(S||U?1:0),W=X.duration/O,V=X.easing,R="up"===Z||"down"===Z?"top":"left",ac="up"===Z||"left"===Z,t=0,aa=ab.queue().length;
for(k.effects.createPlaceholder(ab),P=ab.css(R),L||(L=ab["top"===R?"outerHeight":"outerWidth"]()/3),S&&(Q={opacity:1},Q[R]=P,ab.css("opacity",0).css(R,ac?2*-L:2*L).animate(Q,W,V)),U&&(L/=Math.pow(2,Y-1)),Q={},Q[R]=P;
Y>t;
t++){M={},M[R]=(ac?"-=":"+=")+L,ab.animate(M,W,V).animate(Q,W,V),L=U?2*L:L/2
}U&&(M={opacity:0},M[R]=(ac?"-=":"+=")+L,ab.animate(M,W,V)),ab.queue(T),k.effects.unshift(ab,aa,O+1)
}),k.effects.define("clip","hide",function(t,m){var v,f={},d=k(this),u=t.direction||"vertical",c="both"===u,p=c||"horizontal"===u,g=c||"vertical"===u;
v=d.cssClip(),f.clip={top:g?(v.bottom-v.top)/2:v.top,right:p?(v.right-v.left)/2:v.right,bottom:g?(v.bottom-v.top)/2:v.bottom,left:p?(v.right-v.left)/2:v.left},k.effects.createPlaceholder(d),"show"===t.mode&&(d.cssClip(f.clip),f.clip=v),d.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:m})
}),k.effects.define("drop","hide",function(v,p){var O,g=k(this),f=v.mode,M="show"===f,d=v.direction||"left",t="up"===d||"down"===d?"top":"left",m="up"===d||"left"===d?"-=":"+=",L="+="===m?"-=":"+=",N={opacity:0};
k.effects.createPlaceholder(g),O=v.distance||g["top"===t?"outerHeight":"outerWidth"](!0)/2,N[t]=m+O,M&&(g.css(N),N[t]=L+O,N.opacity=1),g.animate(N,{queue:!1,duration:v.duration,easing:v.easing,complete:p})
}),k.effects.define("explode","hide",function(X,T){function M(){aa.push(this),aa.length===L*Y&&Q()
}function Q(){O.css({visibility:"visible"}),k(aa).remove(),T()
}var P,ab,N,U,S,Z,L=X.pieces?Math.round(Math.sqrt(X.pieces)):3,Y=L,O=k(this),W=X.mode,V="show"===W,R=O.show().css("visibility","hidden").offset(),ac=Math.ceil(O.outerWidth()/Y),t=Math.ceil(O.outerHeight()/L),aa=[];
for(P=0;
L>P;
P++){for(U=R.top+P*t,Z=P-(L-1)/2,ab=0;
Y>ab;
ab++){N=R.left+ab*ac,S=ab-(Y-1)/2,O.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-ab*ac,top:-P*t}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:ac,height:t,left:N+(V?S*ac:0),top:U+(V?Z*t:0),opacity:V?0:1}).animate({left:N+(V?0:S*ac),top:U+(V?0:Z*t),opacity:V?1:0},X.duration||500,X.easing,M)
}}}),k.effects.define("fade","toggle",function(d,a){var c="show"===d.mode;
k(this).css("opacity",c?0:1).animate({opacity:c?1:0},{queue:!1,duration:d.duration,easing:d.easing,complete:a})
}),k.effects.define("fold","hide",function(T,P){var Z=k(this),M=T.mode,L="show"===M,W="hide"===M,t=T.size||15,Q=/([0-9]+)%/.exec(t),O=!!T.horizFirst,V=O?["right","bottom"]:["bottom","right"],Y=T.duration/2,U=k.effects.createPlaceholder(Z),v=Z.cssClip(),S={clip:k.extend({},v)},R={clip:k.extend({},v)},N=[v[V[0]],v[V[1]]],X=Z.queue().length;
Q&&(t=parseInt(Q[1],10)/100*N[W?0:1]),S.clip[V[0]]=t,R.clip[V[0]]=t,R.clip[V[1]]=0,L&&(Z.cssClip(R.clip),U&&U.css(k.effects.clipToBox(R)),R.clip=v),Z.queue(function(a){U&&U.animate(k.effects.clipToBox(S),Y,T.easing).animate(k.effects.clipToBox(R),Y,T.easing),a()
}).animate(S,Y,T.easing).animate(R,Y,T.easing).queue(P),k.effects.unshift(Z,X,4)
}),k.effects.define("highlight","show",function(d,a){var c=k(this),f={backgroundColor:c.css("backgroundColor")};
"hide"===d.mode&&(f.opacity=0),k.effects.saveStyle(c),c.css({backgroundImage:"none",backgroundColor:d.color||"#ffff99"}).animate(f,{queue:!1,duration:d.duration,easing:d.easing,complete:a})
}),k.effects.define("size",function(X,T){var M,Q,P,aa=k(this),N=["fontSize"],U=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],S=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],Z=X.mode,L="effect"!==Z,Y=X.scale||"both",O=X.origin||["middle","center"],W=aa.css("position"),V=aa.position(),R=k.effects.scaledDimensions(aa),ab=X.from||R,t=X.to||k.effects.scaledDimensions(aa,0);
k.effects.createPlaceholder(aa),"show"===Z&&(P=ab,ab=t,t=P),Q={from:{y:ab.height/R.height,x:ab.width/R.width},to:{y:t.height/R.height,x:t.width/R.width}},("box"===Y||"both"===Y)&&(Q.from.y!==Q.to.y&&(ab=k.effects.setTransition(aa,U,Q.from.y,ab),t=k.effects.setTransition(aa,U,Q.to.y,t)),Q.from.x!==Q.to.x&&(ab=k.effects.setTransition(aa,S,Q.from.x,ab),t=k.effects.setTransition(aa,S,Q.to.x,t))),("content"===Y||"both"===Y)&&Q.from.y!==Q.to.y&&(ab=k.effects.setTransition(aa,N,Q.from.y,ab),t=k.effects.setTransition(aa,N,Q.to.y,t)),O&&(M=k.effects.getBaseline(O,R),ab.top=(R.outerHeight-ab.outerHeight)*M.y+V.top,ab.left=(R.outerWidth-ab.outerWidth)*M.x+V.left,t.top=(R.outerHeight-t.outerHeight)*M.y+V.top,t.left=(R.outerWidth-t.outerWidth)*M.x+V.left),aa.css(ab),("content"===Y||"both"===Y)&&(U=U.concat(["marginTop","marginBottom"]).concat(N),S=S.concat(["marginLeft","marginRight"]),aa.find("*[width]").each(function(){var d=k(this),e=k.effects.scaledDimensions(d),f={height:e.height*Q.from.y,width:e.width*Q.from.x,outerHeight:e.outerHeight*Q.from.y,outerWidth:e.outerWidth*Q.from.x},c={height:e.height*Q.to.y,width:e.width*Q.to.x,outerHeight:e.height*Q.to.y,outerWidth:e.width*Q.to.x};
Q.from.y!==Q.to.y&&(f=k.effects.setTransition(d,U,Q.from.y,f),c=k.effects.setTransition(d,U,Q.to.y,c)),Q.from.x!==Q.to.x&&(f=k.effects.setTransition(d,S,Q.from.x,f),c=k.effects.setTransition(d,S,Q.to.x,c)),L&&k.effects.saveStyle(d),d.css(f),d.animate(c,X.duration,X.easing,function(){L&&k.effects.restoreStyle(d)
})
})),aa.animate(t,{queue:!1,duration:X.duration,easing:X.easing,complete:function(){var a=aa.offset();
0===t.opacity&&aa.css("opacity",ab.opacity),L||(aa.css("position","static"===W?"relative":W).offset(a),k.effects.saveStyle(aa)),T()
}})
}),k.effects.define("scale",function(g,d){var f=k(this),l=g.mode,h=parseInt(g.percent,10)||(0===parseInt(g.percent,10)?0:"effect"!==l?0:100),c=k.extend(!0,{from:k.effects.scaledDimensions(f),to:k.effects.scaledDimensions(f,h,g.direction||"both"),origin:g.origin||["middle","center"]},g);
g.fade&&(c.from.opacity=1,c.to.opacity=0),k.effects.effect.size.call(this,c,d)
}),k.effects.define("puff","hide",function(d,a){var c=k.extend(!0,{},d,{fade:!0,percent:parseInt(d.percent,10)||150});
k.effects.effect.scale.call(this,c,a)
}),k.effects.define("pulsate","show",function(L,t){var Q=k(this),m=L.mode,g="show"===m,O="hide"===m,f=g||O,v=2*(L.times||5)+(f?1:0),p=L.duration/v,N=0,P=1,M=Q.queue().length;
for((g||!Q.is(":visible"))&&(Q.css("opacity",0).show(),N=1);
v>P;
P++){Q.animate({opacity:N},p,L.easing),N=1-N
}Q.animate({opacity:N},p,L.easing),Q.queue(t),k.effects.unshift(Q,M,v+1)
}),k.effects.define("shake",function(R,N){var W=1,L=k(this),v=R.direction||"left",U=R.distance||20,m=R.times||3,O=2*m+1,M=Math.round(R.duration/O),T="up"===v||"down"===v?"top":"left",V="up"===v||"left"===v,S={},t={},Q={},P=L.queue().length;
for(k.effects.createPlaceholder(L),S[T]=(V?"-=":"+=")+U,t[T]=(V?"+=":"-=")+2*U,Q[T]=(V?"-=":"+=")+2*U,L.animate(S,M,R.easing);
m>W;
W++){L.animate(t,M,R.easing).animate(Q,M,R.easing)
}L.animate(t,M,R.easing).animate(S,M/2,R.easing).queue(N),k.effects.unshift(L,P,O+1)
}),k.effects.define("slide","show",function(L,t){var Q,m,g=k(this),O={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},f=L.mode,v=L.direction||"left",p="up"===v||"down"===v?"top":"left",N="up"===v||"left"===v,P=L.distance||g["top"===p?"outerHeight":"outerWidth"](!0),M={};
k.effects.createPlaceholder(g),Q=g.cssClip(),m=g.position()[p],M[p]=(N?-1:1)*P+m,M.clip=g.cssClip(),M.clip[O[v][1]]=M.clip[O[v][0]],"show"===f&&(g.cssClip(M.clip),g.css(p,M[p]),M.clip=Q,M[p]=m),g.animate(M,{queue:!1,duration:L.duration,easing:L.easing,complete:t})
});
var F;
k.uiBackCompat!==!1&&(F=k.effects.define("transfer",function(c,a){k(this).transfer(c,a)
})),k.ui.focusable=function(e,g){var t,p,d,m,f,c=e.nodeName.toLowerCase();
return"area"===c?(t=e.parentNode,p=t.name,e.href&&p&&"map"===t.nodeName.toLowerCase()?(d=k("img[usemap='#"+p+"']"),d.length>0&&d.is(":visible")):!1):(/^(input|select|textarea|button|object)$/.test(c)?(m=!e.disabled,m&&(f=k(e).closest("fieldset")[0],f&&(m=!f.disabled))):m="a"===c?e.href||g:g,m&&k(e).is(":visible")&&G(k(e)))
},k.extend(k.expr[":"],{focusable:function(a){return k.ui.focusable(a,null!=k.attr(a,"tabindex"))
}}),k.ui.focusable,k.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):k(this[0].form)
},k.ui.formResetMixin={_formResetHandler:function(){var a=k(this);
setTimeout(function(){var c=a.data("ui-form-reset-instances");
k.each(c,function(){this.refresh()
})
})
},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var a=this.form.data("ui-form-reset-instances")||[];
a.length||this.form.on("reset.ui-form-reset",this._formResetHandler),a.push(this),this.form.data("ui-form-reset-instances",a)
}},_unbindFormResetHandler:function(){if(this.form.length){var a=this.form.data("ui-form-reset-instances");
a.splice(k.inArray(this,a),1),a.length?this.form.data("ui-form-reset-instances",a):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
}}},"1.7"===k.fn.jquery.substring(0,3)&&(k.each(["Width","Height"],function(g,d){function f(n,a,m,p){return k.each(l,function(){a-=parseFloat(k.css(n,"padding"+this))||0,m&&(a-=parseFloat(k.css(n,"border"+this+"Width"))||0),p&&(a-=parseFloat(k.css(n,"margin"+this))||0)
}),a
}var l="Width"===d?["Left","Right"]:["Top","Bottom"],h=d.toLowerCase(),c={innerWidth:k.fn.innerWidth,innerHeight:k.fn.innerHeight,outerWidth:k.fn.outerWidth,outerHeight:k.fn.outerHeight};
k.fn["inner"+d]=function(a){return void 0===a?c["inner"+d].call(this):this.each(function(){k(this).css(h,f(this,a)+"px")
})
},k.fn["outer"+d]=function(a,i){return"number"!=typeof a?c["outer"+d].call(this,a):this.each(function(){k(this).css(h,f(this,a,!0,i)+"px")
})
}
}),k.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))
}),k.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},k.ui.escapeSelector=function(){var a=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
return function(c){return c.replace(a,"\\$1")
}
}(),k.fn.labels=function(){var d,a,c,g,f;
return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(g=this.eq(0).parents("label"),c=this.attr("id"),c&&(d=this.eq(0).parents().last(),f=d.add(d.length?d.siblings():this.siblings()),a="label[for='"+k.ui.escapeSelector(c)+"']",g=g.add(f.find(a).addBack(a))),this.pushStack(g))
},k.fn.scrollParent=function(d){var a=this.css("position"),c="absolute"===a,g=d?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var h=k(this);
return c&&"static"===h.css("position")?!1:g.test(h.css("overflow")+h.css("overflow-y")+h.css("overflow-x"))
}).eq(0);
return"fixed"!==a&&f.length?f:k(this[0].ownerDocument||document)
},k.extend(k.expr[":"],{tabbable:function(d){var a=k.attr(d,"tabindex"),c=null!=a;
return(!c||a>=0)&&k.ui.focusable(d,c)
}}),k.fn.extend({uniqueId:function(){var a=0;
return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)
})
}
}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&k(this).removeAttr("id")
})
}}),k.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var a=this.options;
this.prevShow=this.prevHide=k(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),a.collapsible||a.active!==!1&&null!=a.active||(a.active=0),this._processPanels(),0>a.active&&(a.active+=this.headers.length),this._refresh()
},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():k()}
},_createIcons:function(){var d,a,c=this.options.icons;
c&&(d=k("<span>"),this._addClass(d,"ui-accordion-header-icon","ui-icon "+c.header),d.prependTo(this.headers),a=this.active.children(".ui-accordion-header-icon"),this._removeClass(a,c.header)._addClass(a,null,c.activeHeader)._addClass(this.headers,"ui-accordion-icons"))
},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()
},_destroy:function(){var a;
this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),a=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&a.css("height","")
},_setOption:function(a,c){return"active"===a?(this._activate(c),void 0):("event"===a&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(c)),this._super(a,c),"collapsible"!==a||c||this.options.active!==!1||this._activate(0),"icons"===a&&(this._destroyIcons(),c&&this._createIcons()),void 0)
},_setOptionDisabled:function(a){this._super(a),this.element.attr("aria-disabled",a),this._toggleClass(null,"ui-state-disabled",!!a),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!a)
},_keydown:function(d){if(!d.altKey&&!d.ctrlKey){var a=k.ui.keyCode,c=this.headers.length,g=this.headers.index(d.target),f=!1;
switch(d.keyCode){case a.RIGHT:case a.DOWN:f=this.headers[(g+1)%c];
break;
case a.LEFT:case a.UP:f=this.headers[(g-1+c)%c];
break;
case a.SPACE:case a.ENTER:this._eventHandler(d);
break;
case a.HOME:f=this.headers[0];
break;
case a.END:f=this.headers[c-1]
}f&&(k(d.target).attr("tabIndex",-1),k(f).attr("tabIndex",0),k(f).trigger("focus"),d.preventDefault())
}},_panelKeyDown:function(a){a.keyCode===k.ui.keyCode.UP&&a.ctrlKey&&k(a.currentTarget).prev().trigger("focus")
},refresh:function(){var a=this.options;
this._processPanels(),a.active===!1&&a.collapsible===!0||!this.headers.length?(a.active=!1,this.active=k()):a.active===!1?this._activate(0):this.active.length&&!k.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(a.active=!1,this.active=k()):this._activate(Math.max(0,a.active-1)):a.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()
},_processPanels:function(){var a=this.headers,c=this.panels;
this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),c&&(this._off(a.not(this.headers)),this._off(c.not(this.panels)))
},_refresh:function(){var d,a=this.options,c=a.heightStyle,f=this.element.parent();
this.active=this._findActive(a.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var l=k(this),g=l.uniqueId().attr("id"),h=l.next(),m=h.uniqueId().attr("id");
l.attr("aria-controls",m),h.attr("aria-labelledby",g)
}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(a.event),"fill"===c?(d=f.height(),this.element.siblings(":visible").each(function(){var e=k(this),g=e.css("position");
"absolute"!==g&&"fixed"!==g&&(d-=e.outerHeight(!0))
}),this.headers.each(function(){d-=k(this).outerHeight(!0)
}),this.headers.next().each(function(){k(this).height(Math.max(0,d-k(this).innerHeight()+k(this).height()))
}).css("overflow","auto")):"auto"===c&&(d=0,this.headers.next().each(function(){var e=k(this).is(":visible");
e||k(this).show(),d=Math.max(d,k(this).css("height","").height()),e||k(this).hide()
}).height(d))
},_activate:function(c){var a=this._findActive(c)[0];
a!==this.active[0]&&(a=a||this.active[0],this._eventHandler({target:a,currentTarget:a,preventDefault:k.noop}))
},_findActive:function(a){return"number"==typeof a?this.headers.eq(a):k()
},_setupEvents:function(c){var a={keydown:"_keydown"};
c&&k.each(c.split(" "),function(d,f){a[f]="_eventHandler"
}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,a),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)
},_eventHandler:function(v){var p,O,g=this.options,f=this.active,M=k(v.currentTarget),d=M[0]===f[0],t=d&&g.collapsible,m=t?k():M.next(),L=f.next(),N={oldHeader:f,oldPanel:L,newHeader:t?k():M,newPanel:m};
v.preventDefault(),d&&!g.collapsible||this._trigger("beforeActivate",v,N)===!1||(g.active=t?!1:this.headers.index(M),this.active=d?k():M,this._toggle(N),this._removeClass(f,"ui-accordion-header-active","ui-state-active"),g.icons&&(p=f.children(".ui-accordion-header-icon"),this._removeClass(p,null,g.icons.activeHeader)._addClass(p,null,g.icons.header)),d||(this._removeClass(M,"ui-accordion-header-collapsed")._addClass(M,"ui-accordion-header-active","ui-state-active"),g.icons&&(O=M.children(".ui-accordion-header-icon"),this._removeClass(O,null,g.icons.header)._addClass(O,null,g.icons.activeHeader)),this._addClass(M.next(),"ui-accordion-content-active")))
},_toggle:function(d){var a=d.newPanel,c=this.prevShow.length?this.prevShow:d.oldPanel;
this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=a,this.prevHide=c,this.options.animate?this._animate(a,c,d):(c.hide(),a.show(),this._toggleComplete(d)),c.attr({"aria-hidden":"true"}),c.prev().attr({"aria-selected":"false","aria-expanded":"false"}),a.length&&c.length?c.prev().attr({tabIndex:-1,"aria-expanded":"false"}):a.length&&this.headers.filter(function(){return 0===parseInt(k(this).attr("tabIndex"),10)
}).attr("tabIndex",-1),a.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})
},_animate:function(R,M,v){var S,m,g,P=this,f=0,L=R.css("box-sizing"),p=R.length&&(!M.length||R.index()<M.index()),O=this.options.animate||{},Q=p&&O.down||O,N=function(){P._toggleComplete(v)
};
return"number"==typeof Q&&(g=Q),"string"==typeof Q&&(m=Q),m=m||Q.easing||O.easing,g=g||Q.duration||O.duration,M.length?R.length?(S=R.show().outerHeight(),M.animate(this.hideProps,{duration:g,easing:m,step:function(a,c){c.now=Math.round(a)
}}),R.hide().animate(this.showProps,{duration:g,easing:m,complete:N,step:function(c,a){a.now=Math.round(c),"height"!==a.prop?"content-box"===L&&(f+=a.now):"content"!==P.options.heightStyle&&(a.now=Math.round(S-M.outerHeight()-f),f=0)
}}),void 0):M.animate(this.hideProps,g,m,N):R.animate(this.showProps,g,m,N)
},_toggleComplete:function(c){var d=c.oldPanel,a=d.prev();
this._removeClass(d,"ui-accordion-content-active"),this._removeClass(a,"ui-accordion-header-active")._addClass(a,"ui-accordion-header-collapsed"),d.length&&(d.parent()[0].className=d.parent()[0].className),this._trigger("activate",null,c)
}}),k.ui.safeActiveElement=function(c){var d;
try{d=c.activeElement
}catch(a){d=c.body
}return d||(d=c.body),d.nodeName||(d=c.body),d
},k.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(a){a.preventDefault()
},"click .ui-menu-item":function(d){var a=k(d.target),c=k(k.ui.safeActiveElement(this.document[0]));
!this.mouseHandled&&a.not(".ui-state-disabled").length&&(this.select(d),d.isPropagationStopped()||(this.mouseHandled=!0),a.has(".ui-menu").length?this.expand(d):!this.element.is(":focus")&&c.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))
},"mouseenter .ui-menu-item":function(d){if(!this.previousFilter){var a=k(d.target).closest(".ui-menu-item"),c=k(d.currentTarget);
a[0]===c[0]&&(this._removeClass(c.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(d,c))
}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(c,d){var a=this.active||this.element.find(this.options.items).eq(0);
d||this.focus(c,a)
},blur:function(a){this._delay(function(){var c=!k.contains(this.element[0],k.ui.safeActiveElement(this.document[0]));
c&&this.collapseAll(a)
})
},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(a){this._closeOnDocumentClick(a)&&this.collapseAll(a),this.mouseHandled=!1
}})
},_destroy:function(){var c=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),a=c.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),a.children().each(function(){var d=k(this);
d.data("ui-menu-submenu-caret")&&d.remove()
})
},_keydown:function(g){var d,f,l,h,c=!0;
switch(g.keyCode){case k.ui.keyCode.PAGE_UP:this.previousPage(g);
break;
case k.ui.keyCode.PAGE_DOWN:this.nextPage(g);
break;
case k.ui.keyCode.HOME:this._move("first","first",g);
break;
case k.ui.keyCode.END:this._move("last","last",g);
break;
case k.ui.keyCode.UP:this.previous(g);
break;
case k.ui.keyCode.DOWN:this.next(g);
break;
case k.ui.keyCode.LEFT:this.collapse(g);
break;
case k.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(g);
break;
case k.ui.keyCode.ENTER:case k.ui.keyCode.SPACE:this._activate(g);
break;
case k.ui.keyCode.ESCAPE:this.collapse(g);
break;
default:c=!1,f=this.previousFilter||"",h=!1,l=g.keyCode>=96&&105>=g.keyCode?""+(g.keyCode-96):String.fromCharCode(g.keyCode),clearTimeout(this.filterTimer),l===f?h=!0:l=f+l,d=this._filterMenuItems(l),d=h&&-1!==d.index(this.active.next())?this.active.nextAll(".ui-menu-item"):d,d.length||(l=String.fromCharCode(g.keyCode),d=this._filterMenuItems(l)),d.length?(this.focus(g,d),this.previousFilter=l,this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)):delete this.previousFilter
}c&&g.preventDefault()
},_activate:function(a){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(a):this.select(a))
},refresh:function(){var m,d,g,t,p,c=this,l=this.options.icons.submenu,f=this.element.find(this.options.menus);
this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),g=f.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var n=k(this),a=n.prev(),h=k("<span>").data("ui-menu-submenu-caret",!0);
c._addClass(h,"ui-menu-icon","ui-icon "+l),a.attr("aria-haspopup","true").prepend(h),n.attr("aria-labelledby",a.attr("id"))
}),this._addClass(g,"ui-menu","ui-widget ui-widget-content ui-front"),m=f.add(this.element),d=m.find(this.options.items),d.not(".ui-menu-item").each(function(){var a=k(this);
c._isDivider(a)&&c._addClass(a,"ui-menu-divider","ui-widget-content")
}),t=d.not(".ui-menu-item, .ui-menu-divider"),p=t.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(t,"ui-menu-item")._addClass(p,"ui-menu-item-wrapper"),d.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!k.contains(this.element[0],this.active[0])&&this.blur()
},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},_setOption:function(c,d){if("icons"===c){var a=this.element.find(".ui-menu-icon");
this._removeClass(a,null,this.options.icons.submenu)._addClass(a,null,d.submenu)
}this._super(c,d)
},_setOptionDisabled:function(a){this._super(a),this.element.attr("aria-disabled",a+""),this._toggleClass(null,"ui-state-disabled",!!a)
},focus:function(c,f){var a,d,g;
this.blur(c,c&&"focus"===c.type),this._scrollIntoView(f),this.active=f.first(),d=this.active.children(".ui-menu-item-wrapper"),this._addClass(d,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",d.attr("id")),g=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(g,null,"ui-state-active"),c&&"keydown"===c.type?this._close():this.timer=this._delay(function(){this._close()
},this.delay),a=f.children(".ui-menu"),a.length&&c&&/^mouse/.test(c.type)&&this._startOpening(a),this.activeMenu=f.parent(),this._trigger("focus",c,{item:f})
},_scrollIntoView:function(h){var d,f,m,l,c,g;
this._hasScroll()&&(d=parseFloat(k.css(this.activeMenu[0],"borderTopWidth"))||0,f=parseFloat(k.css(this.activeMenu[0],"paddingTop"))||0,m=h.offset().top-this.activeMenu.offset().top-d-f,l=this.activeMenu.scrollTop(),c=this.activeMenu.height(),g=h.outerHeight(),0>m?this.activeMenu.scrollTop(l+m):m+g>c&&this.activeMenu.scrollTop(l+m-c+g))
},blur:function(a,c){c||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",a,{item:this.active}),this.active=null)
},_startOpening:function(a){clearTimeout(this.timer),"true"===a.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(a)
},this.delay))
},_open:function(c){var a=k.extend({of:this.active},this.options.position);
clearTimeout(this.timer),this.element.find(".ui-menu").not(c.parents(".ui-menu")).hide().attr("aria-hidden","true"),c.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(a)
},collapseAll:function(c,a){clearTimeout(this.timer),this.timer=this._delay(function(){var d=a?this.element:k(c&&c.target).closest(this.element.find(".ui-menu"));
d.length||(d=this.element),this._close(d),this.blur(c),this._removeClass(d.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=d
},this.delay)
},_close:function(a){a||(a=this.active?this.active.parent():this.element),a.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")
},_closeOnDocumentClick:function(a){return !k(a.target).closest(".ui-menu").length
},_isDivider:function(a){return !/[^\-\u2014\u2013\s]/.test(a.text())
},collapse:function(a){var c=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
c&&c.length&&(this._close(),this.focus(a,c))
},expand:function(a){var c=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();
c&&c.length&&(this._open(c.parent()),this._delay(function(){this.focus(a,c)
}))
},next:function(a){this._move("next","first",a)
},previous:function(a){this._move("prev","last",a)
},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(c,f,a){var d;
this.active&&(d="first"===c||"last"===c?this.active["first"===c?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[c+"All"](".ui-menu-item").eq(0)),d&&d.length&&this.active||(d=this.activeMenu.find(this.options.items)[f]()),this.focus(a,d)
},nextPage:function(d){var a,c,f;
return this.active?(this.isLastItem()||(this._hasScroll()?(c=this.active.offset().top,f=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return a=k(this),0>a.offset().top-c-f
}),this.focus(d,a)):this.focus(d,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(d),void 0)
},previousPage:function(d){var a,c,f;
return this.active?(this.isFirstItem()||(this._hasScroll()?(c=this.active.offset().top,f=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return a=k(this),a.offset().top-c+f>0
}),this.focus(d,a)):this.focus(d,this.activeMenu.find(this.options.items).first())),void 0):(this.next(d),void 0)
},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(c){this.active=this.active||k(c.target).closest(".ui-menu-item");
var a={item:this.active};
this.active.has(".ui-menu").length||this.collapseAll(c,!0),this._trigger("select",c,a)
},_filterMenuItems:function(d){var a=d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),c=RegExp("^"+a,"i");
return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return c.test(k.trim(k(this).children(".ui-menu-item-wrapper").text()))
})
}}),k.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var g,d,f,l=this.element[0].nodeName.toLowerCase(),h="textarea"===l,c="input"===l;
this.isMultiLine=h||!c&&this._isContentEditable(this.element),this.valueMethod=this.element[h||c?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(e){if(this.element.prop("readOnly")){return g=!0,f=!0,d=!0,void 0
}g=!1,f=!1,d=!1;
var a=k.ui.keyCode;
switch(e.keyCode){case a.PAGE_UP:g=!0,this._move("previousPage",e);
break;
case a.PAGE_DOWN:g=!0,this._move("nextPage",e);
break;
case a.UP:g=!0,this._keyEvent("previous",e);
break;
case a.DOWN:g=!0,this._keyEvent("next",e);
break;
case a.ENTER:this.menu.active&&(g=!0,e.preventDefault(),this.menu.select(e));
break;
case a.TAB:this.menu.active&&this.menu.select(e);
break;
case a.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(e),e.preventDefault());
break;
default:d=!0,this._searchTimeout(e)
}},keypress:function(a){if(g){return g=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&a.preventDefault(),void 0
}if(!d){var e=k.ui.keyCode;
switch(a.keyCode){case e.PAGE_UP:this._move("previousPage",a);
break;
case e.PAGE_DOWN:this._move("nextPage",a);
break;
case e.UP:this._keyEvent("previous",a);
break;
case e.DOWN:this._keyEvent("next",a)
}}},input:function(a){return f?(f=!1,a.preventDefault(),void 0):(this._searchTimeout(a),void 0)
},focus:function(){this.selectedItem=null,this.previous=this._value()
},blur:function(a){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(a),this._change(a),void 0)
}}),this._initSource(),this.menu=k("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(a){a.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==k.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")
})
},menufocus:function(o,a){var m,p;
return this.isNewMenu&&(this.isNewMenu=!1,o.originalEvent&&/^mouse/.test(o.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){k(o.target).trigger(o.originalEvent)
}),void 0):(p=a.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",o,{item:p})&&o.originalEvent&&/^key/.test(o.originalEvent.type)&&this._value(p.value),m=a.item.attr("aria-label")||p.value,m&&k.trim(m).length&&(this.liveRegion.children().hide(),k("<div>").text(m).appendTo(this.liveRegion)),void 0)
},menuselect:function(o,a){var m=a.item.data("ui-autocomplete-item"),p=this.previous;
this.element[0]!==k.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=p,this._delay(function(){this.previous=p,this.selectedItem=m
})),!1!==this._trigger("select",o,{item:m})&&this._value(m.value),this.term=this._value(),this.close(o),this.selectedItem=m
}}),this.liveRegion=k("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()
},_setOption:function(a,c){this._super(a,c),"source"===a&&this._initSource(),"appendTo"===a&&this.menu.element.appendTo(this._appendTo()),"disabled"===a&&c&&this.xhr&&this.xhr.abort()
},_isEventTargetInWidget:function(c){var a=this.menu.element[0];
return c.target===this.element[0]||c.target===a||k.contains(a,c.target)
},_closeOnClickOutside:function(a){this._isEventTargetInWidget(a)||this.close()
},_appendTo:function(){var a=this.options.appendTo;
return a&&(a=a.jquery||a.nodeType?k(a):this.document.find(a).eq(0)),a&&a[0]||(a=this.element.closest(".ui-front, dialog")),a.length||(a=this.document[0].body),a
},_initSource:function(){var d,a,c=this;
k.isArray(this.options.source)?(d=this.options.source,this.source=function(e,f){f(k.ui.autocomplete.filter(d,e.term))
}):"string"==typeof this.options.source?(a=this.options.source,this.source=function(f,g){c.xhr&&c.xhr.abort(),c.xhr=k.ajax({url:a,data:f,dataType:"json",success:function(e){g(e)
},error:function(){g([])
}})
}):this.source=this.options.source
},_searchTimeout:function(a){clearTimeout(this.searching),this.searching=this._delay(function(){var f=this.term===this._value(),c=this.menu.element.is(":visible"),d=a.altKey||a.ctrlKey||a.metaKey||a.shiftKey;
(!f||f&&!c&&!d)&&(this.selectedItem=null,this.search(null,a))
},this.options.delay)
},search:function(a,c){return a=null!=a?a:this._value(),this.term=this._value(),a.length<this.options.minLength?this.close(c):this._trigger("search",c)!==!1?this._search(a):void 0
},_search:function(a){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:a},this._response())
},_response:function(){var a=++this.requestIndex;
return k.proxy(function(c){a===this.requestIndex&&this.__response(c),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")
},this)
},__response:function(a){a&&(a=this._normalize(a)),this._trigger("response",null,{content:a}),!this.options.disabled&&a&&a.length&&!this.cancelSearch?(this._suggest(a),this._trigger("open")):this._close()
},close:function(a){this.cancelSearch=!0,this._close(a)
},_close:function(a){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",a))
},_change:function(a){this.previous!==this._value()&&this._trigger("change",a,{item:this.selectedItem})
},_normalize:function(a){return a.length&&a[0].label&&a[0].value?a:k.map(a,function(c){return"string"==typeof c?{label:c,value:c}:k.extend({},c,{label:c.label||c.value,value:c.value||c.label})
})
},_suggest:function(c){var a=this.menu.element.empty();
this._renderMenu(a,c),this.isNewMenu=!0,this.menu.refresh(),a.show(),this._resizeMenu(),a.position(k.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})
},_resizeMenu:function(){var a=this.menu.element;
a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(d,a){var c=this;
k.each(a,function(f,e){c._renderItemData(d,e)
})
},_renderItemData:function(a,c){return this._renderItem(a,c).data("ui-autocomplete-item",c)
},_renderItem:function(c,a){return k("<li>").append(k("<div>").text(a.label)).appendTo(c)
},_move:function(a,c){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(a)||this.menu.isLastItem()&&/^next/.test(a)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[a](c),void 0):(this.search(null,c),void 0)
},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(a,c){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(a,c),c.preventDefault())
},_isContentEditable:function(a){if(!a.length){return !1
}var c=a.prop("contentEditable");
return"inherit"===c?this._isContentEditable(a.parent()):"true"===c
}}),k.extend(k.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(d,a){var c=RegExp(k.ui.autocomplete.escapeRegex(a),"i");
return k.grep(d,function(e){return c.test(e.label||e.value||e)
})
}}),k.widget("ui.autocomplete",k.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(a){return a+(a>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(c){var a;
this._superApply(arguments),this.options.disabled||this.cancelSearch||(a=c&&c.length?this.options.messages.results(c.length):this.options.messages.noResults,this.liveRegion.children().hide(),k("<div>").text(a).appendTo(this.liveRegion))
}}),k.ui.autocomplete;
var E=/ui-corner-([a-z]){2,6}/g;
k.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()
},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()
},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
},_initWidgets:function(){var c=this,a=[];
k.each(this.options.items,function(e,g){var f,d={};
return g?"controlgroupLabel"===e?(f=c.element.find(g),f.each(function(){var h=k(this);
h.children(".ui-controlgroup-label-contents").length||h.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
}),c._addClass(f,null,"ui-widget ui-widget-content ui-state-default"),a=a.concat(f.get()),void 0):(k.fn[e]&&(d=c["_"+e+"Options"]?c["_"+e+"Options"]("middle"):{classes:{}},c.element.find(g).each(function(){var p=k(this),m=p[e]("instance"),l=k.widget.extend({},d);
if("button"!==e||!p.parent(".ui-spinner").length){m||(m=p[e]()[e]("instance")),m&&(l.classes=c._resolveClassesValues(l.classes,m)),p[e](l);
var i=p[e]("widget");
k.data(i[0],"ui-controlgroup-data",m?m:p[e]("instance")),a.push(i[0])
}})),void 0):void 0
}),this.childWidgets=k(k.unique(a)),this._addClass(this.childWidgets,"ui-controlgroup-item")
},_callChildMethod:function(a){this.childWidgets.each(function(){var c=k(this),d=c.data("ui-controlgroup-data");
d&&d[a]&&d[a]()
})
},_updateCornerClass:function(c,f){var a="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",d=this._buildSimpleOptions(f,"label").classes.label;
this._removeClass(c,null,a),this._addClass(c,null,d)
},_buildSimpleOptions:function(c,f){var a="vertical"===this.options.direction,d={classes:{}};
return d.classes[f]={middle:"",first:"ui-corner-"+(a?"top":"left"),last:"ui-corner-"+(a?"bottom":"right"),only:"ui-corner-all"}[c],d
},_spinnerOptions:function(a){var c=this._buildSimpleOptions(a,"ui-spinner");
return c.classes["ui-spinner-up"]="",c.classes["ui-spinner-down"]="",c
},_buttonOptions:function(a){return this._buildSimpleOptions(a,"ui-button")
},_checkboxradioOptions:function(a){return this._buildSimpleOptions(a,"ui-checkboxradio-label")
},_selectmenuOptions:function(a){var c="vertical"===this.options.direction;
return{width:c?"auto":!1,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(c?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(c?"top":"left")},last:{"ui-selectmenu-button-open":c?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(c?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[a]}
},_resolveClassesValues:function(d,a){var c={};
return k.each(d,function(f){var e=a.options.classes[f]||"";
e=k.trim(e.replace(E,"")),c[f]=(e+" "+d[f]).replace(/\s+/g," ")
}),c
},_setOption:function(a,c){return"direction"===a&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(a,c),"disabled"===a?(this._callChildMethod(c?"disable":"enable"),void 0):(this.refresh(),void 0)
},refresh:function(){var c,a=this;
this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),c=this.childWidgets,this.options.onlyVisible&&(c=c.filter(":visible")),c.length&&(k.each(["first","last"],function(d,e){var g=c[e]().data("ui-controlgroup-data");
if(g&&a["_"+g.widgetName+"Options"]){var f=a["_"+g.widgetName+"Options"](1===c.length?"only":e);
f.classes=a._resolveClassesValues(f.classes,g),g.element[g.widgetName](f)
}else{a._updateCornerClass(c[e](),e)
}}),this._callChildMethod("refresh"))
}}),k.widget("ui.checkboxradio",[k.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var d,a,c=this,f=this._super()||{};
return this._readType(),a=this.element.labels(),this.label=k(a[a.length-1]),this.label.length||k.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){c.originalLabel+=3===this.nodeType?k(this).text():this.outerHTML
}),this.originalLabel&&(f.label=this.originalLabel),d=this.element[0].disabled,null!=d&&(f.disabled=d),f
},_create:function(){var a=this.element[0].checked;
this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),a&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")
},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")
}})
},_readType:function(){var a=this.element[0].nodeName.toLowerCase();
this.type=this.element[0].type,"input"===a&&/radio|checkbox/.test(this.type)||k.error("Can't create checkboxradio on element.nodeName="+a+" and element.type="+this.type)
},_enhance:function(){this._updateIcon(this.element[0].checked)
},widget:function(){return this.label
},_getRadioGroup:function(){var d,a=this.element[0].name,c="input[name='"+k.ui.escapeSelector(a)+"']";
return a?(d=this.form.length?k(this.form[0].elements).filter(c):k(c).filter(function(){return 0===k(this).form().length
}),d.not(this.element)):k([])
},_toggleClasses:function(){var a=this.element[0].checked;
this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",a),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",a)._toggleClass(this.icon,null,"ui-icon-blank",!a),"radio"===this.type&&this._getRadioGroup().each(function(){var c=k(this).checkboxradio("instance");
c&&c._removeClass(c.label,"ui-checkboxradio-checked","ui-state-active")
})
},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())
},_setOption:function(a,c){return"label"!==a||c?(this._super(a,c),"disabled"===a?(this._toggleClass(this.label,null,"ui-state-disabled",c),this.element[0].disabled=c,void 0):(this.refresh(),void 0)):void 0
},_updateIcon:function(c){var a="ui-icon ui-icon-background ";
this.options.icon?(this.icon||(this.icon=k("<span>"),this.iconSpace=k("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(a+=c?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,c?"ui-icon-blank":"ui-icon-check")):a+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",a),c||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)
},_updateLabel:function(){var a=this.label.contents().not(this.element[0]);
this.icon&&(a=a.not(this.icon[0])),this.iconSpace&&(a=a.not(this.iconSpace[0])),a.remove(),this.label.append(this.options.label)
},refresh:function(){var a=this.element[0].checked,c=this.element[0].disabled;
this._updateIcon(a),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",a),null!==this.options.label&&this._updateLabel(),c!==this.options.disabled&&this._setOptions({disabled:c})
}}]),k.ui.checkboxradio,k.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var a,c=this._super()||{};
return this.isInput=this.element.is("input"),a=this.element[0].disabled,null!=a&&(c.disabled=a),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(c.label=this.originalLabel),c
},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(a){a.keyCode===k.ui.keyCode.SPACE&&(a.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))
}})
},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())
},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)
},_updateIcon:function(d,a){var c="iconPosition"!==d,g=c?this.options.iconPosition:a,f="top"===g||"bottom"===g;
this.icon?c&&this._removeClass(this.icon,null,this.options.icon):(this.icon=k("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),c&&this._addClass(this.icon,null,a),this._attachIcon(g),f?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=k("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(g))
},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")
},_attachIconSpace:function(a){this.icon[/^(?:end|bottom)/.test(a)?"before":"after"](this.iconSpace)
},_attachIcon:function(a){this.element[/^(?:end|bottom)/.test(a)?"append":"prepend"](this.icon)
},_setOptions:function(c){var d=void 0===c.showLabel?this.options.showLabel:c.showLabel,a=void 0===c.icon?this.options.icon:c.icon;
d||a||(c.showLabel=!0),this._super(c)
},_setOption:function(a,c){"icon"===a&&(c?this._updateIcon(a,c):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===a&&this._updateIcon(a,c),"showLabel"===a&&(this._toggleClass("ui-button-icon-only",null,!c),this._updateTooltip()),"label"===a&&(this.isInput?this.element.val(c):(this.element.html(c),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(a,c),"disabled"===a&&(this._toggleClass(null,"ui-state-disabled",c),this.element[0].disabled=c,c&&this.element.blur())
},refresh:function(){var a=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");
a!==this.options.disabled&&this._setOptions({disabled:a}),this._updateTooltip()
}}),k.uiBackCompat!==!1&&(k.widget("ui.button",k.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()
},_setOption:function(a,c){return"text"===a?(this._super("showLabel",c),void 0):("showLabel"===a&&(this.options.text=c),"icon"===a&&(this.options.icons.primary=c),"icons"===a&&(c.primary?(this._super("icon",c.primary),this._super("iconPosition","beginning")):c.secondary&&(this._super("icon",c.secondary),this._super("iconPosition","end"))),this._superApply(arguments),void 0)
}}),k.fn.button=function(a){return function(){return !this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?a.apply(this,arguments):(k.ui.checkboxradio||k.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))
}
}(k.fn.button),k.fn.buttonset=function(){return k.ui.controlgroup||k.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))
}),k.ui.button,k.extend(k.ui,{datepicker:{version:"1.12.1"}});
var A;
k.extend(q.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(a){return J(this._defaults,a||{}),this
},_attachDatepicker:function(d,a){var c,g,f;
c=d.nodeName.toLowerCase(),g="div"===c||"span"===c,d.id||(this.uuid+=1,d.id="dp"+this.uuid),f=this._newInst(k(d),g),f.settings=k.extend({},a||{}),"input"===c?this._connectDatepicker(d,f):g&&this._inlineDatepicker(d,f)
},_newInst:function(d,a){var c=d[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");
return{id:c,input:d,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:a,dpDiv:a?z(k("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}
},_connectDatepicker:function(d,a){var c=k(d);
a.append=k([]),a.trigger=k([]),c.hasClass(this.markerClassName)||(this._attachments(c,a),c.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(a),k.data(d,"datepicker",a),a.settings.disabled&&this._disableDatepicker(d))
},_attachments:function(h,d){var f,m,l,c=this._get(d,"appendText"),g=this._get(d,"isRTL");
d.append&&d.append.remove(),c&&(d.append=k("<span class='"+this._appendClass+"'>"+c+"</span>"),h[g?"before":"after"](d.append)),h.off("focus",this._showDatepicker),d.trigger&&d.trigger.remove(),f=this._get(d,"showOn"),("focus"===f||"both"===f)&&h.on("focus",this._showDatepicker),("button"===f||"both"===f)&&(m=this._get(d,"buttonText"),l=this._get(d,"buttonImage"),d.trigger=k(this._get(d,"buttonImageOnly")?k("<img/>").addClass(this._triggerClass).attr({src:l,alt:m,title:m}):k("<button type='button'></button>").addClass(this._triggerClass).html(l?k("<img/>").attr({src:l,alt:m,title:m}):m)),h[g?"before":"after"](d.trigger),d.trigger.on("click",function(){return k.datepicker._datepickerShowing&&k.datepicker._lastInput===h[0]?k.datepicker._hideDatepicker():k.datepicker._datepickerShowing&&k.datepicker._lastInput!==h[0]?(k.datepicker._hideDatepicker(),k.datepicker._showDatepicker(h[0])):k.datepicker._showDatepicker(h[0]),!1
}))
},_autoSize:function(f){if(this._get(f,"autoSize")&&!f.inline){var h,d,g,m,l=new Date(2009,11,20),c=this._get(f,"dateFormat");
c.match(/[DM]/)&&(h=function(a){for(d=0,g=0,m=0;
a.length>m;
m++){a[m].length>d&&(d=a[m].length,g=m)
}return g
},l.setMonth(h(this._get(f,c.match(/MM/)?"monthNames":"monthNamesShort"))),l.setDate(h(this._get(f,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-l.getDay())),f.input.attr("size",this._formatDate(f,l).length)
}},_inlineDatepicker:function(d,a){var c=k(d);
c.hasClass(this.markerClassName)||(c.addClass(this.markerClassName).append(a.dpDiv),k.data(d,"datepicker",a),this._setDate(a,this._getDefaultDate(a),!0),this._updateDatepicker(a),this._updateAlternate(a),a.settings.disabled&&this._disableDatepicker(d),a.dpDiv.css("display","block"))
},_dialogDatepicker:function(v,p,O,g,f){var a,t,m,M,N,L=this._dialogInst;
return L||(this.uuid+=1,a="dp"+this.uuid,this._dialogInput=k("<input type='text' id='"+a+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),k("body").append(this._dialogInput),L=this._dialogInst=this._newInst(this._dialogInput,!1),L.settings={},k.data(this._dialogInput[0],"datepicker",L)),J(L.settings,g||{}),p=p&&p.constructor===Date?this._formatDate(L,p):p,this._dialogInput.val(p),this._pos=f?f.length?f:[f.pageX,f.pageY]:null,this._pos||(t=document.documentElement.clientWidth,m=document.documentElement.clientHeight,M=document.documentElement.scrollLeft||document.body.scrollLeft,N=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[t/2-100+M,m/2-150+N]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),L.settings.onSelect=O,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),k.blockUI&&k.blockUI(this.dpDiv),k.data(this._dialogInput[0],"datepicker",L),this
},_destroyDatepicker:function(d){var a,c=k(d),f=k.data(d,"datepicker");
c.hasClass(this.markerClassName)&&(a=d.nodeName.toLowerCase(),k.removeData(d,"datepicker"),"input"===a?(f.append.remove(),f.trigger.remove(),c.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===a||"span"===a)&&c.removeClass(this.markerClassName).empty(),A===f&&(A=null))
},_enableDatepicker:function(d){var a,c,g=k(d),f=k.data(d,"datepicker");
g.hasClass(this.markerClassName)&&(a=d.nodeName.toLowerCase(),"input"===a?(d.disabled=!1,f.trigger.filter("button").each(function(){this.disabled=!1
}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===a||"span"===a)&&(c=g.children("."+this._inlineClass),c.children().removeClass("ui-state-disabled"),c.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=k.map(this._disabledInputs,function(e){return e===d?null:e
}))
},_disableDatepicker:function(d){var a,c,g=k(d),f=k.data(d,"datepicker");
g.hasClass(this.markerClassName)&&(a=d.nodeName.toLowerCase(),"input"===a?(d.disabled=!0,f.trigger.filter("button").each(function(){this.disabled=!0
}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===a||"span"===a)&&(c=g.children("."+this._inlineClass),c.children().addClass("ui-state-disabled"),c.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=k.map(this._disabledInputs,function(e){return e===d?null:e
}),this._disabledInputs[this._disabledInputs.length]=d)
},_isDisabledDatepicker:function(a){if(!a){return !1
}for(var c=0;
this._disabledInputs.length>c;
c++){if(this._disabledInputs[c]===a){return !0
}}return !1
},_getInst:function(c){try{return k.data(c,"datepicker")
}catch(a){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(m,c,f){var t,p,g,d,a=this._getInst(m);
return 2===arguments.length&&"string"==typeof c?"defaults"===c?k.extend({},k.datepicker._defaults):a?"all"===c?k.extend({},a.settings):this._get(a,c):null:(t=c||{},"string"==typeof c&&(t={},t[c]=f),a&&(this._curInst===a&&this._hideDatepicker(),p=this._getDateDatepicker(m,!0),g=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),J(a.settings,t),null!==g&&void 0!==t.dateFormat&&void 0===t.minDate&&(a.settings.minDate=this._formatDate(a,g)),null!==d&&void 0!==t.dateFormat&&void 0===t.maxDate&&(a.settings.maxDate=this._formatDate(a,d)),"disabled" in t&&(t.disabled?this._disableDatepicker(m):this._enableDatepicker(m)),this._attachments(k(m),a),this._autoSize(a),this._setDate(a,p),this._updateAlternate(a),this._updateDatepicker(a)),void 0)
},_changeDatepicker:function(c,d,a){this._optionDatepicker(c,d,a)
},_refreshDatepicker:function(a){var c=this._getInst(a);
c&&this._updateDatepicker(c)
},_setDateDatepicker:function(c,d){var a=this._getInst(c);
a&&(this._setDate(a,d),this._updateDatepicker(a),this._updateAlternate(a))
},_getDateDatepicker:function(c,d){var a=this._getInst(c);
return a&&!a.inline&&this._setDateFromField(a,d),a?this._getDate(a):null
},_doKeyDown:function(h){var d,f,m,l=k.datepicker._getInst(h.target),c=!0,g=l.dpDiv.is(".ui-datepicker-rtl");
if(l._keyEvent=!0,k.datepicker._datepickerShowing){switch(h.keyCode){case 9:k.datepicker._hideDatepicker(),c=!1;
break;
case 13:return m=k("td."+k.datepicker._dayOverClass+":not(."+k.datepicker._currentClass+")",l.dpDiv),m[0]&&k.datepicker._selectDay(h.target,l.selectedMonth,l.selectedYear,m[0]),d=k.datepicker._get(l,"onSelect"),d?(f=k.datepicker._formatDate(l),d.apply(l.input?l.input[0]:null,[f,l])):k.datepicker._hideDatepicker(),!1;
case 27:k.datepicker._hideDatepicker();
break;
case 33:k.datepicker._adjustDate(h.target,h.ctrlKey?-k.datepicker._get(l,"stepBigMonths"):-k.datepicker._get(l,"stepMonths"),"M");
break;
case 34:k.datepicker._adjustDate(h.target,h.ctrlKey?+k.datepicker._get(l,"stepBigMonths"):+k.datepicker._get(l,"stepMonths"),"M");
break;
case 35:(h.ctrlKey||h.metaKey)&&k.datepicker._clearDate(h.target),c=h.ctrlKey||h.metaKey;
break;
case 36:(h.ctrlKey||h.metaKey)&&k.datepicker._gotoToday(h.target),c=h.ctrlKey||h.metaKey;
break;
case 37:(h.ctrlKey||h.metaKey)&&k.datepicker._adjustDate(h.target,g?1:-1,"D"),c=h.ctrlKey||h.metaKey,h.originalEvent.altKey&&k.datepicker._adjustDate(h.target,h.ctrlKey?-k.datepicker._get(l,"stepBigMonths"):-k.datepicker._get(l,"stepMonths"),"M");
break;
case 38:(h.ctrlKey||h.metaKey)&&k.datepicker._adjustDate(h.target,-7,"D"),c=h.ctrlKey||h.metaKey;
break;
case 39:(h.ctrlKey||h.metaKey)&&k.datepicker._adjustDate(h.target,g?-1:1,"D"),c=h.ctrlKey||h.metaKey,h.originalEvent.altKey&&k.datepicker._adjustDate(h.target,h.ctrlKey?+k.datepicker._get(l,"stepBigMonths"):+k.datepicker._get(l,"stepMonths"),"M");
break;
case 40:(h.ctrlKey||h.metaKey)&&k.datepicker._adjustDate(h.target,7,"D"),c=h.ctrlKey||h.metaKey;
break;
default:c=!1
}}else{36===h.keyCode&&h.ctrlKey?k.datepicker._showDatepicker(this):c=!1
}c&&(h.preventDefault(),h.stopPropagation())
},_doKeyPress:function(d){var a,c,f=k.datepicker._getInst(d.target);
return k.datepicker._get(f,"constrainInput")?(a=k.datepicker._possibleChars(k.datepicker._get(f,"dateFormat")),c=String.fromCharCode(null==d.charCode?d.keyCode:d.charCode),d.ctrlKey||d.metaKey||" ">c||!a||a.indexOf(c)>-1):void 0
},_doKeyUp:function(d){var a,c=k.datepicker._getInst(d.target);
if(c.input.val()!==c.lastVal){try{a=k.datepicker.parseDate(k.datepicker._get(c,"dateFormat"),c.input?c.input.val():null,k.datepicker._getFormatConfig(c)),a&&(k.datepicker._setDateFromField(c),k.datepicker._updateAlternate(c),k.datepicker._updateDatepicker(c))
}catch(f){}}return !0
},_showDatepicker:function(i){if(i=i.target||i,"input"!==i.nodeName.toLowerCase()&&(i=k("input",i.parentNode)[0]),!k.datepicker._isDisabledDatepicker(i)&&k.datepicker._lastInput!==i){var f,t,m,g,d,a,p;
f=k.datepicker._getInst(i),k.datepicker._curInst&&k.datepicker._curInst!==f&&(k.datepicker._curInst.dpDiv.stop(!0,!0),f&&k.datepicker._datepickerShowing&&k.datepicker._hideDatepicker(k.datepicker._curInst.input[0])),t=k.datepicker._get(f,"beforeShow"),m=t?t.apply(i,[i,f]):{},m!==!1&&(J(f.settings,m),f.lastVal=null,k.datepicker._lastInput=i,k.datepicker._setDateFromField(f),k.datepicker._inDialog&&(i.value=""),k.datepicker._pos||(k.datepicker._pos=k.datepicker._findPos(i),k.datepicker._pos[1]+=i.offsetHeight),g=!1,k(i).parents().each(function(){return g|="fixed"===k(this).css("position"),!g
}),d={left:k.datepicker._pos[0],top:k.datepicker._pos[1]},k.datepicker._pos=null,f.dpDiv.empty(),f.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),k.datepicker._updateDatepicker(f),d=k.datepicker._checkOffset(f,d,g),f.dpDiv.css({position:k.datepicker._inDialog&&k.blockUI?"static":g?"fixed":"absolute",display:"none",left:d.left+"px",top:d.top+"px"}),f.inline||(a=k.datepicker._get(f,"showAnim"),p=k.datepicker._get(f,"duration"),f.dpDiv.css("z-index",C(k(i))+1),k.datepicker._datepickerShowing=!0,k.effects&&k.effects.effect[a]?f.dpDiv.show(a,k.datepicker._get(f,"showOptions"),p):f.dpDiv[a||"show"](a?p:null),k.datepicker._shouldFocusInput(f)&&f.input.trigger("focus"),k.datepicker._curInst=f))
}},_updateDatepicker:function(h){this.maxRows=4,A=h,h.dpDiv.empty().append(this._generateHTML(h)),this._attachHandlers(h);
var d,f=this._getNumberOfMonths(h),l=f[1],c=17,g=h.dpDiv.find("."+this._dayOverClass+" a");
g.length>0&&y.apply(g.get(0)),h.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),l>1&&h.dpDiv.addClass("ui-datepicker-multi-"+l).css("width",c*l+"em"),h.dpDiv[(1!==f[0]||1!==f[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),h.dpDiv[(this._get(h,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),h===k.datepicker._curInst&&k.datepicker._datepickerShowing&&k.datepicker._shouldFocusInput(h)&&h.input.trigger("focus"),h.yearshtml&&(d=h.yearshtml,setTimeout(function(){d===h.yearshtml&&h.yearshtml&&h.dpDiv.find("select.ui-datepicker-year:first").replaceWith(h.yearshtml),d=h.yearshtml=null
},0))
},_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")
},_checkOffset:function(t,m,v){var f=t.dpDiv.outerWidth(),d=t.dpDiv.outerHeight(),u=t.input?t.input.outerWidth():0,c=t.input?t.input.outerHeight():0,p=document.documentElement.clientWidth+(v?0:k(document).scrollLeft()),g=document.documentElement.clientHeight+(v?0:k(document).scrollTop());
return m.left-=this._get(t,"isRTL")?f-u:0,m.left-=v&&m.left===t.input.offset().left?k(document).scrollLeft():0,m.top-=v&&m.top===t.input.offset().top+c?k(document).scrollTop():0,m.left-=Math.min(m.left,m.left+f>p&&p>f?Math.abs(m.left+f-p):0),m.top-=Math.min(m.top,m.top+d>g&&g>d?Math.abs(d+c):0),m
},_findPos:function(d){for(var a,c=this._getInst(d),f=this._get(c,"isRTL");
d&&("hidden"===d.type||1!==d.nodeType||k.expr.filters.hidden(d));
){d=d[f?"previousSibling":"nextSibling"]
}return a=k(d).offset(),[a.left,a.top]
},_hideDatepicker:function(g){var d,f,l,h,c=this._curInst;
!c||g&&c!==k.data(g,"datepicker")||this._datepickerShowing&&(d=this._get(c,"showAnim"),f=this._get(c,"duration"),l=function(){k.datepicker._tidyDialog(c)
},k.effects&&(k.effects.effect[d]||k.effects[d])?c.dpDiv.hide(d,k.datepicker._get(c,"showOptions"),f,l):c.dpDiv["slideDown"===d?"slideUp":"fadeIn"===d?"fadeOut":"hide"](d?f:null,l),d||l(),this._datepickerShowing=!1,h=this._get(c,"onClose"),h&&h.apply(c.input?c.input[0]:null,[c.input?c.input.val():"",c]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),k.blockUI&&(k.unblockUI(),k("body").append(this.dpDiv))),this._inDialog=!1)
},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
},_checkExternalClick:function(d){if(k.datepicker._curInst){var a=k(d.target),c=k.datepicker._getInst(a[0]);
(a[0].id!==k.datepicker._mainDivId&&0===a.parents("#"+k.datepicker._mainDivId).length&&!a.hasClass(k.datepicker.markerClassName)&&!a.closest("."+k.datepicker._triggerClass).length&&k.datepicker._datepickerShowing&&(!k.datepicker._inDialog||!k.blockUI)||a.hasClass(k.datepicker.markerClassName)&&k.datepicker._curInst!==c)&&k.datepicker._hideDatepicker()
}},_adjustDate:function(d,a,c){var g=k(d),f=this._getInst(g[0]);
this._isDisabledDatepicker(g[0])||(this._adjustInstDate(f,a+("M"===c?this._get(f,"showCurrentAtPos"):0),c),this._updateDatepicker(f))
},_gotoToday:function(d){var a,c=k(d),f=this._getInst(c[0]);
this._get(f,"gotoCurrent")&&f.currentDay?(f.selectedDay=f.currentDay,f.drawMonth=f.selectedMonth=f.currentMonth,f.drawYear=f.selectedYear=f.currentYear):(a=new Date,f.selectedDay=a.getDate(),f.drawMonth=f.selectedMonth=a.getMonth(),f.drawYear=f.selectedYear=a.getFullYear()),this._notifyChange(f),this._adjustDate(c)
},_selectMonthYear:function(d,a,c){var g=k(d),f=this._getInst(g[0]);
f["selected"+("M"===c?"Month":"Year")]=f["draw"+("M"===c?"Month":"Year")]=parseInt(a.options[a.selectedIndex].value,10),this._notifyChange(f),this._adjustDate(g)
},_selectDay:function(g,d,f,l){var h,c=k(g);
k(l).hasClass(this._unselectableClass)||this._isDisabledDatepicker(c[0])||(h=this._getInst(c[0]),h.selectedDay=h.currentDay=k("a",l).html(),h.selectedMonth=h.currentMonth=d,h.selectedYear=h.currentYear=f,this._selectDate(g,this._formatDate(h,h.currentDay,h.currentMonth,h.currentYear)))
},_clearDate:function(c){var a=k(c);
this._selectDate(a,"")
},_selectDate:function(d,a){var c,g=k(d),f=this._getInst(g[0]);
a=null!=a?a:this._formatDate(f),f.input&&f.input.val(a),this._updateAlternate(f),c=this._get(f,"onSelect"),c?c.apply(f.input?f.input[0]:null,[a,f]):f.input&&f.input.trigger("change"),f.inline?this._updateDatepicker(f):(this._hideDatepicker(),this._lastInput=f.input[0],"object"!=typeof f.input[0]&&f.input.trigger("focus"),this._lastInput=null)
},_updateAlternate:function(d){var a,c,g,f=this._get(d,"altField");
f&&(a=this._get(d,"altFormat")||this._get(d,"dateFormat"),c=this._getDate(d),g=this.formatDate(a,c,this._getFormatConfig(d)),k(f).val(g))
},noWeekends:function(a){var c=a.getDay();
return[c>0&&6>c,""]
},iso8601Week:function(c){var d,a=new Date(c.getTime());
return a.setDate(a.getDate()+4-(a.getDay()||7)),d=a.getTime(),a.setMonth(0),a.setDate(1),Math.floor(Math.round((d-a)/86400000)/7)+1
},parseDate:function(ab,X,P){if(null==ab||null==X){throw"Invalid arguments"
}if(X="object"==typeof X?""+X:X+"",""===X){return null
}var T,S,af,Q,Y=0,V=(P?P.shortYearCutoff:null)||this._defaults.shortYearCutoff,ad="string"!=typeof V?V:(new Date).getFullYear()%100+parseInt(V,10),O=(P?P.dayNamesShort:null)||this._defaults.dayNamesShort,ac=(P?P.dayNames:null)||this._defaults.dayNames,R=(P?P.monthNamesShort:null)||this._defaults.monthNamesShort,aa=(P?P.monthNames:null)||this._defaults.monthNames,Z=-1,U=-1,ag=-1,N=-1,ae=!1,t=function(c){var a=ab.length>T+1&&ab.charAt(T+1)===c;
return a&&T++,a
},M=function(d){var g=t(d),f="@"===d?14:"!"===d?20:"y"===d&&g?4:"o"===d?3:2,i="y"===d?f:1,h=RegExp("^\\d{"+i+","+f+"}"),c=X.substring(Y).match(h);
if(!c){throw"Missing number at position "+Y
}return Y+=c[0].length,parseInt(c[0],10)
},W=function(f,d,h){var g=-1,c=k.map(t(f)?h:d,function(a,i){return[[i,a]]
}).sort(function(a,i){return -(a[1].length-i[1].length)
});
if(k.each(c,function(a,l){var i=l[1];
return X.substr(Y,i.length).toLowerCase()===i.toLowerCase()?(g=l[0],Y+=i.length,!1):void 0
}),-1!==g){return g+1
}throw"Unknown name at position "+Y
},L=function(){if(X.charAt(Y)!==ab.charAt(T)){throw"Unexpected literal at position "+Y
}Y++
};
for(T=0;
ab.length>T;
T++){if(ae){"'"!==ab.charAt(T)||t("'")?L():ae=!1
}else{switch(ab.charAt(T)){case"d":ag=M("d");
break;
case"D":W("D",O,ac);
break;
case"o":N=M("o");
break;
case"m":U=M("m");
break;
case"M":U=W("M",R,aa);
break;
case"y":Z=M("y");
break;
case"@":Q=new Date(M("@")),Z=Q.getFullYear(),U=Q.getMonth()+1,ag=Q.getDate();
break;
case"!":Q=new Date((M("!")-this._ticksTo1970)/10000),Z=Q.getFullYear(),U=Q.getMonth()+1,ag=Q.getDate();
break;
case"'":t("'")?L():ae=!0;
break;
default:L()
}}}if(X.length>Y&&(af=X.substr(Y),!/^\s+/.test(af))){throw"Extra/unparsed characters found in date: "+af
}if(-1===Z?Z=(new Date).getFullYear():100>Z&&(Z+=(new Date).getFullYear()-(new Date).getFullYear()%100+(ad>=Z?0:-100)),N>-1){for(U=1,ag=N;
;
){if(S=this._getDaysInMonth(Z,U-1),S>=ag){break
}U++,ag-=S
}}if(Q=this._daylightSavingAdjust(new Date(Z,U-1,ag)),Q.getFullYear()!==Z||Q.getMonth()+1!==U||Q.getDate()!==ag){throw"Invalid date"
}return Q
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:10000000*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(R,M,v){if(!M){return""
}var S,m=(v?v.dayNamesShort:null)||this._defaults.dayNamesShort,g=(v?v.dayNames:null)||this._defaults.dayNames,P=(v?v.monthNamesShort:null)||this._defaults.monthNamesShort,f=(v?v.monthNames:null)||this._defaults.monthNames,L=function(c){var a=R.length>S+1&&R.charAt(S+1)===c;
return a&&S++,a
},p=function(c,h,a){var d=""+h;
if(L(c)){for(;
a>d.length;
){d="0"+d
}}return d
},O=function(c,h,a,d){return L(c)?d[h]:a[h]
},Q="",N=!1;
if(M){for(S=0;
R.length>S;
S++){if(N){"'"!==R.charAt(S)||L("'")?Q+=R.charAt(S):N=!1
}else{switch(R.charAt(S)){case"d":Q+=p("d",M.getDate(),2);
break;
case"D":Q+=O("D",M.getDay(),m,g);
break;
case"o":Q+=p("o",Math.round((new Date(M.getFullYear(),M.getMonth(),M.getDate()).getTime()-new Date(M.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":Q+=p("m",M.getMonth()+1,2);
break;
case"M":Q+=O("M",M.getMonth(),P,f);
break;
case"y":Q+=L("y")?M.getFullYear():(10>M.getFullYear()%100?"0":"")+M.getFullYear()%100;
break;
case"@":Q+=M.getTime();
break;
case"!":Q+=10000*M.getTime()+this._ticksTo1970;
break;
case"'":L("'")?Q+="'":N=!0;
break;
default:Q+=R.charAt(S)
}}}}return Q
},_possibleChars:function(c){var f,a="",d=!1,g=function(e){var h=c.length>f+1&&c.charAt(f+1)===e;
return h&&f++,h
};
for(f=0;
c.length>f;
f++){if(d){"'"!==c.charAt(f)||g("'")?a+=c.charAt(f):d=!1
}else{switch(c.charAt(f)){case"d":case"m":case"y":case"@":a+="0123456789";
break;
case"D":case"M":return null;
case"'":g("'")?a+="'":d=!0;
break;
default:a+=c.charAt(f)
}}}return a
},_get:function(a,c){return void 0!==a.settings[c]?a.settings[c]:this._defaults[c]
},_setDateFromField:function(f,l){if(f.input.val()!==f.lastVal){var d=this._get(f,"dateFormat"),g=f.lastVal=f.input?f.input.val():null,p=this._getDefaultDate(f),m=p,c=this._getFormatConfig(f);
try{m=this.parseDate(d,g,c)||p
}catch(h){g=l?"":g
}f.selectedDay=m.getDate(),f.drawMonth=f.selectedMonth=m.getMonth(),f.drawYear=f.selectedYear=m.getFullYear(),f.currentDay=g?m.getDate():0,f.currentMonth=g?m.getMonth():0,f.currentYear=g?m.getFullYear():0,this._adjustInstDate(f)
}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))
},_determineDate:function(g,d,f){var l=function(a){var i=new Date;
return i.setDate(i.getDate()+a),i
},h=function(p){try{return k.datepicker.parseDate(k.datepicker._get(g,"dateFormat"),p,k.datepicker._getFormatConfig(g))
}catch(u){}for(var M=(p.toLowerCase().match(/^c/)?k.datepicker._getDate(g):null)||new Date,L=M.getFullYear(),m=M.getMonth(),v=M.getDate(),t=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,e=t.exec(p);
e;
){switch(e[2]||"d"){case"d":case"D":v+=parseInt(e[1],10);
break;
case"w":case"W":v+=7*parseInt(e[1],10);
break;
case"m":case"M":m+=parseInt(e[1],10),v=Math.min(v,k.datepicker._getDaysInMonth(L,m));
break;
case"y":case"Y":L+=parseInt(e[1],10),v=Math.min(v,k.datepicker._getDaysInMonth(L,m))
}e=t.exec(p)
}return new Date(L,m,v)
},c=null==d||""===d?f:"string"==typeof d?h(d):"number"==typeof d?isNaN(d)?f:l(d):new Date(d.getTime());
return c=c&&"Invalid Date"==""+c?f:c,c&&(c.setHours(0),c.setMinutes(0),c.setSeconds(0),c.setMilliseconds(0)),this._daylightSavingAdjust(c)
},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null
},_setDate:function(f,h,d){var g=!h,m=f.selectedMonth,l=f.selectedYear,c=this._restrictMinMax(f,this._determineDate(f,h,new Date));
f.selectedDay=f.currentDay=c.getDate(),f.drawMonth=f.selectedMonth=f.currentMonth=c.getMonth(),f.drawYear=f.selectedYear=f.currentYear=c.getFullYear(),m===f.selectedMonth&&l===f.selectedYear||d||this._notifyChange(f),this._adjustInstDate(f),f.input&&f.input.val(g?"":this._formatDate(f))
},_getDate:function(a){var c=!a.currentYear||a.input&&""===a.input.val()?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));
return c
},_attachHandlers:function(d){var a=this._get(d,"stepMonths"),c="#"+d.id.replace(/\\\\/g,"\\");
d.dpDiv.find("[data-handler]").map(function(){var f={prev:function(){k.datepicker._adjustDate(c,-a,"M")
},next:function(){k.datepicker._adjustDate(c,+a,"M")
},hide:function(){k.datepicker._hideDatepicker()
},today:function(){k.datepicker._gotoToday(c)
},selectDay:function(){return k.datepicker._selectDay(c,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1
},selectMonth:function(){return k.datepicker._selectMonthYear(c,this,"M"),!1
},selectYear:function(){return k.datepicker._selectMonthYear(c,this,"Y"),!1
}};
k(this).on(this.getAttribute("data-event"),f[this.getAttribute("data-handler")])
})
},_generateHTML:function(aJ){var aY,aU,aK,aP,aO,a2,aL,aV,aR,a0,aI,aZ,aN,aX,aW,aQ,a3,aH,a1,aE,aG,aS,aF,az,ay,at,ah,al,ao,ai,au,aD,am,aB,an,ae,ax,aw,ap,aj=new Date,aA=this._daylightSavingAdjust(new Date(aj.getFullYear(),aj.getMonth(),aj.getDate())),ab=this._get(aJ,"isRTL"),aT=this._get(aJ,"showButtonPanel"),aM=this._get(aJ,"hideIfNoPrevNext"),aq=this._get(aJ,"navigationAsDateFormat"),ag=this._getNumberOfMonths(aJ),af=this._get(aJ,"showCurrentAtPos"),aC=this._get(aJ,"stepMonths"),ac=1!==ag[0]||1!==ag[1],av=this._daylightSavingAdjust(aJ.currentDay?new Date(aJ.currentYear,aJ.currentMonth,aJ.currentDay):new Date(9999,9,9)),ak=this._getMinMaxDate(aJ,"min"),ar=this._getMinMaxDate(aJ,"max"),aa=aJ.drawMonth-af,ad=aJ.drawYear;
if(0>aa&&(aa+=12,ad--),ar){for(aY=this._daylightSavingAdjust(new Date(ar.getFullYear(),ar.getMonth()-ag[0]*ag[1]+1,ar.getDate())),aY=ak&&ak>aY?ak:aY;
this._daylightSavingAdjust(new Date(ad,aa,1))>aY;
){aa--,0>aa&&(aa=11,ad--)
}}for(aJ.drawMonth=aa,aJ.drawYear=ad,aU=this._get(aJ,"prevText"),aU=aq?this.formatDate(aU,this._daylightSavingAdjust(new Date(ad,aa-aC,1)),this._getFormatConfig(aJ)):aU,aK=this._canAdjustMonth(aJ,-1,ad,aa)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+aU+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"e":"w")+"'>"+aU+"</span></a>":aM?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+aU+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"e":"w")+"'>"+aU+"</span></a>",aP=this._get(aJ,"nextText"),aP=aq?this.formatDate(aP,this._daylightSavingAdjust(new Date(ad,aa+aC,1)),this._getFormatConfig(aJ)):aP,aO=this._canAdjustMonth(aJ,1,ad,aa)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+aP+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"w":"e")+"'>"+aP+"</span></a>":aM?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+aP+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"w":"e")+"'>"+aP+"</span></a>",a2=this._get(aJ,"currentText"),aL=this._get(aJ,"gotoCurrent")&&aJ.currentDay?av:aA,a2=aq?this.formatDate(a2,aL,this._getFormatConfig(aJ)):a2,aV=aJ.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(aJ,"closeText")+"</button>",aR=aT?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(ab?aV:"")+(this._isInRange(aJ,aL)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a2+"</button>":"")+(ab?"":aV)+"</div>":"",a0=parseInt(this._get(aJ,"firstDay"),10),a0=isNaN(a0)?0:a0,aI=this._get(aJ,"showWeek"),aZ=this._get(aJ,"dayNames"),aN=this._get(aJ,"dayNamesMin"),aX=this._get(aJ,"monthNames"),aW=this._get(aJ,"monthNamesShort"),aQ=this._get(aJ,"beforeShowDay"),a3=this._get(aJ,"showOtherMonths"),aH=this._get(aJ,"selectOtherMonths"),a1=this._getDefaultDate(aJ),aE="",aS=0;
ag[0]>aS;
aS++){for(aF="",this.maxRows=4,az=0;
ag[1]>az;
az++){if(ay=this._daylightSavingAdjust(new Date(ad,aa,aJ.selectedDay)),at=" ui-corner-all",ah="",ac){if(ah+="<div class='ui-datepicker-group",ag[1]>1){switch(az){case 0:ah+=" ui-datepicker-group-first",at=" ui-corner-"+(ab?"right":"left");
break;
case ag[1]-1:ah+=" ui-datepicker-group-last",at=" ui-corner-"+(ab?"left":"right");
break;
default:ah+=" ui-datepicker-group-middle",at=""
}}ah+="'>"
}for(ah+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+at+"'>"+(/all|left/.test(at)&&0===aS?ab?aO:aK:"")+(/all|right/.test(at)&&0===aS?ab?aK:aO:"")+this._generateMonthYearHeader(aJ,aa,ad,ak,ar,aS>0||az>0,aX,aW)+"</div><table class='ui-datepicker-calendar'><thead><tr>",al=aI?"<th class='ui-datepicker-week-col'>"+this._get(aJ,"weekHeader")+"</th>":"",aG=0;
7>aG;
aG++){ao=(aG+a0)%7,al+="<th scope='col'"+((aG+a0+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+aZ[ao]+"'>"+aN[ao]+"</span></th>"
}for(ah+=al+"</tr></thead><tbody>",ai=this._getDaysInMonth(ad,aa),ad===aJ.selectedYear&&aa===aJ.selectedMonth&&(aJ.selectedDay=Math.min(aJ.selectedDay,ai)),au=(this._getFirstDayOfMonth(ad,aa)-a0+7)%7,aD=Math.ceil((au+ai)/7),am=ac?this.maxRows>aD?this.maxRows:aD:aD,this.maxRows=am,aB=this._daylightSavingAdjust(new Date(ad,aa,1-au)),an=0;
am>an;
an++){for(ah+="<tr>",ae=aI?"<td class='ui-datepicker-week-col'>"+this._get(aJ,"calculateWeek")(aB)+"</td>":"",aG=0;
7>aG;
aG++){ax=aQ?aQ.apply(aJ.input?aJ.input[0]:null,[aB]):[!0,""],aw=aB.getMonth()!==aa,ap=aw&&!aH||!ax[0]||ak&&ak>aB||ar&&aB>ar,ae+="<td class='"+((aG+a0+6)%7>=5?" ui-datepicker-week-end":"")+(aw?" ui-datepicker-other-month":"")+(aB.getTime()===ay.getTime()&&aa===aJ.selectedMonth&&aJ._keyEvent||a1.getTime()===aB.getTime()&&a1.getTime()===ay.getTime()?" "+this._dayOverClass:"")+(ap?" "+this._unselectableClass+" ui-state-disabled":"")+(aw&&!a3?"":" "+ax[1]+(aB.getTime()===av.getTime()?" "+this._currentClass:"")+(aB.getTime()===aA.getTime()?" ui-datepicker-today":""))+"'"+(aw&&!a3||!ax[2]?"":" title='"+ax[2].replace(/'/g,"&#39;")+"'")+(ap?"":" data-handler='selectDay' data-event='click' data-month='"+aB.getMonth()+"' data-year='"+aB.getFullYear()+"'")+">"+(aw&&!a3?"&#xa0;":ap?"<span class='ui-state-default'>"+aB.getDate()+"</span>":"<a class='ui-state-default"+(aB.getTime()===aA.getTime()?" ui-state-highlight":"")+(aB.getTime()===av.getTime()?" ui-state-active":"")+(aw?" ui-priority-secondary":"")+"' href='#'>"+aB.getDate()+"</a>")+"</td>",aB.setDate(aB.getDate()+1),aB=this._daylightSavingAdjust(aB)
}ah+=ae+"</tr>"
}aa++,aa>11&&(aa=0,ad++),ah+="</tbody></table>"+(ac?"</div>"+(ag[0]>0&&az===ag[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),aF+=ah
}aE+=aF
}return aE+=aR,aJ._keyEvent=!1,aE
},_generateMonthYearHeader:function(O,aa,W,P,T,S,ae,Q){var X,V,ac,N,ab,R,Z,Y,U=this._get(O,"changeMonth"),af=this._get(O,"changeYear"),M=this._get(O,"showMonthAfterYear"),ad="<div class='ui-datepicker-title'>",L="";
if(S||!U){L+="<span class='ui-datepicker-month'>"+ae[aa]+"</span>"
}else{for(X=P&&P.getFullYear()===W,V=T&&T.getFullYear()===W,L+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",ac=0;
12>ac;
ac++){(!X||ac>=P.getMonth())&&(!V||T.getMonth()>=ac)&&(L+="<option value='"+ac+"'"+(ac===aa?" selected='selected'":"")+">"+Q[ac]+"</option>")
}L+="</select>"
}if(M||(ad+=L+(!S&&U&&af?"":"&#xa0;")),!O.yearshtml){if(O.yearshtml="",S||!af){ad+="<span class='ui-datepicker-year'>"+W+"</span>"
}else{for(N=this._get(O,"yearRange").split(":"),ab=(new Date).getFullYear(),R=function(a){var c=a.match(/c[+\-].*/)?W+parseInt(a.substring(1),10):a.match(/[+\-].*/)?ab+parseInt(a,10):parseInt(a,10);
return isNaN(c)?ab:c
},Z=R(N[0]),Y=Math.max(Z,R(N[1]||"")),Z=P?Math.max(Z,P.getFullYear()):Z,Y=T?Math.min(Y,T.getFullYear()):Y,O.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
Y>=Z;
Z++){O.yearshtml+="<option value='"+Z+"'"+(Z===W?" selected='selected'":"")+">"+Z+"</option>"
}O.yearshtml+="</select>",ad+=O.yearshtml,O.yearshtml=null
}}return ad+=this._get(O,"yearSuffix"),M&&(ad+=(!S&&U&&af?"":"&#xa0;")+L),ad+="</div>"
},_adjustInstDate:function(f,h,d){var g=f.selectedYear+("Y"===d?h:0),m=f.selectedMonth+("M"===d?h:0),l=Math.min(f.selectedDay,this._getDaysInMonth(g,m))+("D"===d?h:0),c=this._restrictMinMax(f,this._daylightSavingAdjust(new Date(g,m,l)));
f.selectedDay=c.getDate(),f.drawMonth=f.selectedMonth=c.getMonth(),f.drawYear=f.selectedYear=c.getFullYear(),("M"===d||"Y"===d)&&this._notifyChange(f)
},_restrictMinMax:function(c,f){var a=this._getMinMaxDate(c,"min"),d=this._getMinMaxDate(c,"max"),g=a&&a>f?a:f;
return d&&g>d?d:g
},_notifyChange:function(a){var c=this._get(a,"onChangeMonthYear");
c&&c.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])
},_getNumberOfMonths:function(a){var c=this._get(a,"numberOfMonths");
return null==c?[1,1]:"number"==typeof c?[1,c]:c
},_getMinMaxDate:function(a,c){return this._determineDate(a,this._get(a,c+"Date"),null)
},_getDaysInMonth:function(a,c){return 32-this._daylightSavingAdjust(new Date(a,c,32)).getDate()
},_getFirstDayOfMonth:function(a,c){return new Date(a,c,1).getDay()
},_canAdjustMonth:function(c,f,a,d){var h=this._getNumberOfMonths(c),g=this._daylightSavingAdjust(new Date(a,d+(0>f?f:h[0]*h[1]),1));
return 0>f&&g.setDate(this._getDaysInMonth(g.getFullYear(),g.getMonth())),this._isInRange(c,g)
},_isInRange:function(u,m){var g,v,f=this._getMinMaxDate(u,"min"),d=this._getMinMaxDate(u,"max"),p=null,c=null,l=this._get(u,"yearRange");
return l&&(g=l.split(":"),v=(new Date).getFullYear(),p=parseInt(g[0],10),c=parseInt(g[1],10),g[0].match(/[+\-].*/)&&(p+=v),g[1].match(/[+\-].*/)&&(c+=v)),(!f||m.getTime()>=f.getTime())&&(!d||m.getTime()<=d.getTime())&&(!p||m.getFullYear()>=p)&&(!c||c>=m.getFullYear())
},_getFormatConfig:function(a){var c=this._get(a,"shortYearCutoff");
return c="string"!=typeof c?c:(new Date).getFullYear()%100+parseInt(c,10),{shortYearCutoff:c,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}
},_formatDate:function(c,f,a,d){f||(c.currentDay=c.selectedDay,c.currentMonth=c.selectedMonth,c.currentYear=c.selectedYear);
var g=f?"object"==typeof f?f:this._daylightSavingAdjust(new Date(d,a,f)):this._daylightSavingAdjust(new Date(c.currentYear,c.currentMonth,c.currentDay));
return this.formatDate(this._get(c,"dateFormat"),g,this._getFormatConfig(c))
}}),k.fn.datepicker=function(c){if(!this.length){return this
}k.datepicker.initialized||(k(document).on("mousedown",k.datepicker._checkExternalClick),k.datepicker.initialized=!0),0===k("#"+k.datepicker._mainDivId).length&&k("body").append(k.datepicker.dpDiv);
var a=Array.prototype.slice.call(arguments,1);
return"string"!=typeof c||"isDisabled"!==c&&"getDate"!==c&&"widget"!==c?"option"===c&&2===arguments.length&&"string"==typeof arguments[1]?k.datepicker["_"+c+"Datepicker"].apply(k.datepicker,[this[0]].concat(a)):this.each(function(){"string"==typeof c?k.datepicker["_"+c+"Datepicker"].apply(k.datepicker,[this].concat(a)):k.datepicker._attachDatepicker(this,c)
}):k.datepicker["_"+c+"Datepicker"].apply(k.datepicker,[this[0]].concat(a))
},k.datepicker=new q,k.datepicker.initialized=!1,k.datepicker.uuid=(new Date).getTime(),k.datepicker.version="1.12.1",k.datepicker,k.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
var K=!1;
k(document).on("mouseup",function(){K=!1
}),k.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var a=this;
this.element.on("mousedown."+this.widgetName,function(c){return a._mouseDown(c)
}).on("click."+this.widgetName,function(c){return !0===k.data(c.target,a.widgetName+".preventClickEvent")?(k.removeData(c.target,a.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1):void 0
}),this.started=!1
},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)
},_mouseDown:function(d){if(!K){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(d),this._mouseDownEvent=d;
var a=this,c=1===d.which,f="string"==typeof this.options.cancel&&d.target.nodeName?k(d.target).closest(this.options.cancel).length:!1;
return c&&!f&&this._mouseCapture(d)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){a.mouseDelayMet=!0
},this.options.delay)),this._mouseDistanceMet(d)&&this._mouseDelayMet(d)&&(this._mouseStarted=this._mouseStart(d)!==!1,!this._mouseStarted)?(d.preventDefault(),!0):(!0===k.data(d.target,this.widgetName+".preventClickEvent")&&k.removeData(d.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return a._mouseMove(e)
},this._mouseUpDelegate=function(e){return a._mouseUp(e)
},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),d.preventDefault(),K=!0,!0)):!0
}},_mouseMove:function(a){if(this._mouseMoved){if(k.ui.ie&&(!document.documentMode||9>document.documentMode)&&!a.button){return this._mouseUp(a)
}if(!a.which){if(a.originalEvent.altKey||a.originalEvent.ctrlKey||a.originalEvent.metaKey||a.originalEvent.shiftKey){this.ignoreMissingWhich=!0
}else{if(!this.ignoreMissingWhich){return this._mouseUp(a)
}}}}return(a.which||a.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(a),a.preventDefault()):(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==!1,this._mouseStarted?this._mouseDrag(a):this._mouseUp(a)),!this._mouseStarted)
},_mouseUp:function(a){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,a.target===this._mouseDownEvent.target&&k.data(a.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(a)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,K=!1,a.preventDefault()
},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return !0
}}),k.ui.plugin={add:function(d,a,c){var g,f=k.ui[d].prototype;
for(g in c){f.plugins[g]=f.plugins[g]||[],f.plugins[g].push([a,c[g]])
}},call:function(c,f,a,d){var h,g=c.plugins[f];
if(g&&(d||c.element[0].parentNode&&11!==c.element[0].parentNode.nodeType)){for(h=0;
g.length>h;
h++){c.options[g[h][0]]&&g[h][1].apply(c.element,a)
}}}},k.ui.safeBlur=function(a){a&&"body"!==a.nodeName.toLowerCase()&&k(a).trigger("blur")
},k.widget("ui.draggable",k.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()
},_setOption:function(a,c){this._super(a,c),"handle"===a&&(this._removeHandleClassName(),this._setHandleClassName())
},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this._removeHandleClassName(),this._mouseDestroy(),void 0)
},_mouseCapture:function(c){var a=this.options;
return this.helper||a.disabled||k(c.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(c),this.handle?(this._blurActiveElement(c),this._blockFrames(a.iframeFix===!0?"iframe":a.iframeFix),!0):!1)
},_blockFrames:function(a){this.iframeBlocks=this.document.find(a).map(function(){var c=k(this);
return k("<div>").css("position","absolute").appendTo(c.parent()).outerWidth(c.outerWidth()).outerHeight(c.outerHeight()).offset(c.offset())[0]
})
},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)
},_blurActiveElement:function(d){var a=k.ui.safeActiveElement(this.document[0]),c=k(d.target);
c.closest(a).length||k.ui.safeBlur(a)
},_mouseStart:function(c){var a=this.options;
return this.helper=this._createHelper(c),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),k.ui.ddmanager&&(k.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===k(this).css("position")
}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(c),this.originalPosition=this.position=this._generatePosition(c,!1),this.originalPageX=c.pageX,this.originalPageY=c.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this._setContainment(),this._trigger("start",c)===!1?(this._clear(),!1):(this._cacheHelperProportions(),k.ui.ddmanager&&!a.dropBehaviour&&k.ui.ddmanager.prepareOffsets(this,c),this._mouseDrag(c,!0),k.ui.ddmanager&&k.ui.ddmanager.dragStart(this,c),!0)
},_refreshOffsets:function(a){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:a.pageX-this.offset.left,top:a.pageY-this.offset.top}
},_mouseDrag:function(d,a){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(d,!0),this.positionAbs=this._convertPositionTo("absolute"),!a){var c=this._uiHash();
if(this._trigger("drag",d,c)===!1){return this._mouseUp(new k.Event("mouseup",d)),!1
}this.position=c.position
}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",k.ui.ddmanager&&k.ui.ddmanager.drag(this,d),!1
},_mouseStop:function(d){var a=this,c=!1;
return k.ui.ddmanager&&!this.options.dropBehaviour&&(c=k.ui.ddmanager.drop(this,d)),this.dropped&&(c=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!c||"valid"===this.options.revert&&c||this.options.revert===!0||k.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)?k(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){a._trigger("stop",d)!==!1&&a._clear()
}):this._trigger("stop",d)!==!1&&this._clear(),!1
},_mouseUp:function(a){return this._unblockFrames(),k.ui.ddmanager&&k.ui.ddmanager.dragStop(this,a),this.handleElement.is(a.target)&&this.element.trigger("focus"),k.ui.mouse.prototype._mouseUp.call(this,a)
},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new k.Event("mouseup",{target:this.element[0]})):this._clear(),this
},_getHandle:function(a){return this.options.handle?!!k(a.target).closest(this.element.find(this.options.handle)).length:!0
},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")
},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")
},_createHelper:function(d){var a=this.options,c=k.isFunction(a.helper),f=c?k(a.helper.apply(this.element[0],[d])):"clone"===a.helper?this.element.clone().removeAttr("id"):this.element;
return f.parents("body").length||f.appendTo("parent"===a.appendTo?this.element[0].parentNode:a.appendTo),c&&f[0]===this.element[0]&&this._setPositionRelative(),f[0]===this.element[0]||/(fixed|absolute)/.test(f.css("position"))||f.css("position","absolute"),f
},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")
},_adjustOffsetFromHelper:function(a){"string"==typeof a&&(a=a.split(" ")),k.isArray(a)&&(a={left:+a[0],top:+a[1]||0}),"left" in a&&(this.offset.click.left=a.left+this.margins.left),"right" in a&&(this.offset.click.left=this.helperProportions.width-a.right+this.margins.left),"top" in a&&(this.offset.click.top=a.top+this.margins.top),"bottom" in a&&(this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top)
},_isRootNode:function(a){return/(html|body)/i.test(a.tagName)||a===this.document[0]
},_getParentOffset:function(){var c=this.offsetParent.offset(),a=this.document[0];
return"absolute"===this.cssPosition&&this.scrollParent[0]!==a&&k.contains(this.scrollParent[0],this.offsetParent[0])&&(c.left+=this.scrollParent.scrollLeft(),c.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(c={top:0,left:0}),{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if("relative"!==this.cssPosition){return{top:0,left:0}
}var a=this.element.position(),c=this._isRootNode(this.scrollParent[0]);
return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+(c?0:this.scrollParent.scrollTop()),left:a.left-(parseInt(this.helper.css("left"),10)||0)+(c?0:this.scrollParent.scrollLeft())}
},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var d,a,c,g=this.options,f=this.document[0];
return this.relativeContainer=null,g.containment?"window"===g.containment?(this.containment=[k(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,k(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,k(window).scrollLeft()+k(window).width()-this.helperProportions.width-this.margins.left,k(window).scrollTop()+(k(window).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===g.containment?(this.containment=[0,0,k(f).width()-this.helperProportions.width-this.margins.left,(k(f).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):g.containment.constructor===Array?(this.containment=g.containment,void 0):("parent"===g.containment&&(g.containment=this.helper[0].parentNode),a=k(g.containment),c=a[0],c&&(d=/(scroll|auto)/.test(a.css("overflow")),this.containment=[(parseInt(a.css("borderLeftWidth"),10)||0)+(parseInt(a.css("paddingLeft"),10)||0),(parseInt(a.css("borderTopWidth"),10)||0)+(parseInt(a.css("paddingTop"),10)||0),(d?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a.css("borderRightWidth"),10)||0)-(parseInt(a.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(d?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a.css("borderBottomWidth"),10)||0)-(parseInt(a.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=a),void 0):(this.containment=null,void 0)
},_convertPositionTo:function(c,f){f||(f=this.position);
var a="absolute"===c?1:-1,d=this._isRootNode(this.scrollParent[0]);
return{top:f.top+this.offset.relative.top*a+this.offset.parent.top*a-("fixed"===this.cssPosition?-this.offset.scroll.top:d?0:this.offset.scroll.top)*a,left:f.left+this.offset.relative.left*a+this.offset.parent.left*a-("fixed"===this.cssPosition?-this.offset.scroll.left:d?0:this.offset.scroll.left)*a}
},_generatePosition:function(L,u){var m,M,f,d,v=this.options,c=this._isRootNode(this.scrollParent[0]),p=L.pageX,g=L.pageY;
return c&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),u&&(this.containment&&(this.relativeContainer?(M=this.relativeContainer.offset(),m=[this.containment[0]+M.left,this.containment[1]+M.top,this.containment[2]+M.left,this.containment[3]+M.top]):m=this.containment,L.pageX-this.offset.click.left<m[0]&&(p=m[0]+this.offset.click.left),L.pageY-this.offset.click.top<m[1]&&(g=m[1]+this.offset.click.top),L.pageX-this.offset.click.left>m[2]&&(p=m[2]+this.offset.click.left),L.pageY-this.offset.click.top>m[3]&&(g=m[3]+this.offset.click.top)),v.grid&&(f=v.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/v.grid[1])*v.grid[1]:this.originalPageY,g=m?f-this.offset.click.top>=m[1]||f-this.offset.click.top>m[3]?f:f-this.offset.click.top>=m[1]?f-v.grid[1]:f+v.grid[1]:f,d=v.grid[0]?this.originalPageX+Math.round((p-this.originalPageX)/v.grid[0])*v.grid[0]:this.originalPageX,p=m?d-this.offset.click.left>=m[0]||d-this.offset.click.left>m[2]?d:d-this.offset.click.left>=m[0]?d-v.grid[0]:d+v.grid[0]:d),"y"===v.axis&&(p=this.originalPageX),"x"===v.axis&&(g=this.originalPageY)),{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:c?0:this.offset.scroll.top),left:p-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:c?0:this.offset.scroll.left)}
},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()
},_trigger:function(d,a,c){return c=c||this._uiHash(),k.ui.plugin.call(this,d,[a,c,this],!0),/^(drag|start|stop)/.test(d)&&(this.positionAbs=this._convertPositionTo("absolute"),c.offset=this.positionAbs),k.Widget.prototype._trigger.call(this,d,a,c)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}}),k.ui.plugin.add("draggable","connectToSortable",{start:function(d,a,c){var f=k.extend({},a,{item:c.element});
c.sortables=[],k(c.options.connectToSortable).each(function(){var e=k(this).sortable("instance");
e&&!e.options.disabled&&(c.sortables.push(e),e.refreshPositions(),e._trigger("activate",d,f))
})
},stop:function(d,a,c){var f=k.extend({},a,{item:c.element});
c.cancelHelperRemoval=!1,k.each(c.sortables,function(){var e=this;
e.isOver?(e.isOver=0,c.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(d),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",d,f))
})
},drag:function(d,a,c){k.each(c.sortables,function(){var f=!1,e=this;
e.positionAbs=c.positionAbs,e.helperProportions=c.helperProportions,e.offset.click=c.offset.click,e._intersectsWith(e.containerCache)&&(f=!0,k.each(c.sortables,function(){return this.positionAbs=c.positionAbs,this.helperProportions=c.helperProportions,this.offset.click=c.offset.click,this!==e&&this._intersectsWith(this.containerCache)&&k.contains(e.element[0],this.element[0])&&(f=!1),f
})),f?(e.isOver||(e.isOver=1,c._parent=a.helper.parent(),e.currentItem=a.helper.appendTo(e.element).data("ui-sortable-item",!0),e.options._helper=e.options.helper,e.options.helper=function(){return a.helper[0]
},d.target=e.currentItem[0],e._mouseCapture(d,!0),e._mouseStart(d,!0,!0),e.offset.click.top=c.offset.click.top,e.offset.click.left=c.offset.click.left,e.offset.parent.left-=c.offset.parent.left-e.offset.parent.left,e.offset.parent.top-=c.offset.parent.top-e.offset.parent.top,c._trigger("toSortable",d),c.dropped=e.element,k.each(c.sortables,function(){this.refreshPositions()
}),c.currentItem=c.element,e.fromOutside=c),e.currentItem&&(e._mouseDrag(d),a.position=e.position)):e.isOver&&(e.isOver=0,e.cancelHelperRemoval=!0,e.options._revert=e.options.revert,e.options.revert=!1,e._trigger("out",d,e._uiHash(e)),e._mouseStop(d,!0),e.options.revert=e.options._revert,e.options.helper=e.options._helper,e.placeholder&&e.placeholder.remove(),a.helper.appendTo(c._parent),c._refreshOffsets(d),a.position=c._generatePosition(d,!0),c._trigger("fromSortable",d),c.dropped=!1,k.each(c.sortables,function(){this.refreshPositions()
}))
})
}}),k.ui.plugin.add("draggable","cursor",{start:function(d,a,c){var g=k("body"),f=c.options;
g.css("cursor")&&(f._cursor=g.css("cursor")),g.css("cursor",f.cursor)
},stop:function(d,a,c){var f=c.options;
f._cursor&&k("body").css("cursor",f._cursor)
}}),k.ui.plugin.add("draggable","opacity",{start:function(d,a,c){var g=k(a.helper),f=c.options;
g.css("opacity")&&(f._opacity=g.css("opacity")),g.css("opacity",f.opacity)
},stop:function(d,a,c){var f=c.options;
f._opacity&&k(a.helper).css("opacity",f._opacity)
}}),k.ui.plugin.add("draggable","scroll",{start:function(c,d,a){a.scrollParentNotHidden||(a.scrollParentNotHidden=a.helper.scrollParent(!1)),a.scrollParentNotHidden[0]!==a.document[0]&&"HTML"!==a.scrollParentNotHidden[0].tagName&&(a.overflowOffset=a.scrollParentNotHidden.offset())
},drag:function(h,d,f){var m=f.options,l=!1,c=f.scrollParentNotHidden[0],g=f.document[0];
c!==g&&"HTML"!==c.tagName?(m.axis&&"x"===m.axis||(f.overflowOffset.top+c.offsetHeight-h.pageY<m.scrollSensitivity?c.scrollTop=l=c.scrollTop+m.scrollSpeed:h.pageY-f.overflowOffset.top<m.scrollSensitivity&&(c.scrollTop=l=c.scrollTop-m.scrollSpeed)),m.axis&&"y"===m.axis||(f.overflowOffset.left+c.offsetWidth-h.pageX<m.scrollSensitivity?c.scrollLeft=l=c.scrollLeft+m.scrollSpeed:h.pageX-f.overflowOffset.left<m.scrollSensitivity&&(c.scrollLeft=l=c.scrollLeft-m.scrollSpeed))):(m.axis&&"x"===m.axis||(h.pageY-k(g).scrollTop()<m.scrollSensitivity?l=k(g).scrollTop(k(g).scrollTop()-m.scrollSpeed):k(window).height()-(h.pageY-k(g).scrollTop())<m.scrollSensitivity&&(l=k(g).scrollTop(k(g).scrollTop()+m.scrollSpeed))),m.axis&&"y"===m.axis||(h.pageX-k(g).scrollLeft()<m.scrollSensitivity?l=k(g).scrollLeft(k(g).scrollLeft()-m.scrollSpeed):k(window).width()-(h.pageX-k(g).scrollLeft())<m.scrollSensitivity&&(l=k(g).scrollLeft(k(g).scrollLeft()+m.scrollSpeed)))),l!==!1&&k.ui.ddmanager&&!m.dropBehaviour&&k.ui.ddmanager.prepareOffsets(f,h)
}}),k.ui.plugin.add("draggable","snap",{start:function(d,a,c){var f=c.options;
c.snapElements=[],k(f.snap.constructor!==String?f.snap.items||":data(ui-draggable)":f.snap).each(function(){var h=k(this),g=h.offset();
this!==c.element[0]&&c.snapElements.push({item:this,width:h.outerWidth(),height:h.outerHeight(),top:g.top,left:g.left})
})
},drag:function(X,T,M){var Q,P,ab,N,U,S,Z,L,Y,O,W=M.options,V=W.snapTolerance,R=T.offset.left,ac=R+M.helperProportions.width,t=T.offset.top,aa=t+M.helperProportions.height;
for(Y=M.snapElements.length-1;
Y>=0;
Y--){U=M.snapElements[Y].left-M.margins.left,S=U+M.snapElements[Y].width,Z=M.snapElements[Y].top-M.margins.top,L=Z+M.snapElements[Y].height,U-V>ac||R>S+V||Z-V>aa||t>L+V||!k.contains(M.snapElements[Y].item.ownerDocument,M.snapElements[Y].item)?(M.snapElements[Y].snapping&&M.options.snap.release&&M.options.snap.release.call(M.element,X,k.extend(M._uiHash(),{snapItem:M.snapElements[Y].item})),M.snapElements[Y].snapping=!1):("inner"!==W.snapMode&&(Q=V>=Math.abs(Z-aa),P=V>=Math.abs(L-t),ab=V>=Math.abs(U-ac),N=V>=Math.abs(S-R),Q&&(T.position.top=M._convertPositionTo("relative",{top:Z-M.helperProportions.height,left:0}).top),P&&(T.position.top=M._convertPositionTo("relative",{top:L,left:0}).top),ab&&(T.position.left=M._convertPositionTo("relative",{top:0,left:U-M.helperProportions.width}).left),N&&(T.position.left=M._convertPositionTo("relative",{top:0,left:S}).left)),O=Q||P||ab||N,"outer"!==W.snapMode&&(Q=V>=Math.abs(Z-t),P=V>=Math.abs(L-aa),ab=V>=Math.abs(U-R),N=V>=Math.abs(S-ac),Q&&(T.position.top=M._convertPositionTo("relative",{top:Z,left:0}).top),P&&(T.position.top=M._convertPositionTo("relative",{top:L-M.helperProportions.height,left:0}).top),ab&&(T.position.left=M._convertPositionTo("relative",{top:0,left:U}).left),N&&(T.position.left=M._convertPositionTo("relative",{top:0,left:S-M.helperProportions.width}).left)),!M.snapElements[Y].snapping&&(Q||P||ab||N||O)&&M.options.snap.snap&&M.options.snap.snap.call(M.element,X,k.extend(M._uiHash(),{snapItem:M.snapElements[Y].item})),M.snapElements[Y].snapping=Q||P||ab||N||O)
}}}),k.ui.plugin.add("draggable","stack",{start:function(g,d,f){var l,h=f.options,c=k.makeArray(k(h.stack)).sort(function(m,a){return(parseInt(k(m).css("zIndex"),10)||0)-(parseInt(k(a).css("zIndex"),10)||0)
});
c.length&&(l=parseInt(k(c[0]).css("zIndex"),10)||0,k(c).each(function(a){k(this).css("zIndex",l+a)
}),this.css("zIndex",l+c.length))
}}),k.ui.plugin.add("draggable","zIndex",{start:function(d,a,c){var g=k(a.helper),f=c.options;
g.css("zIndex")&&(f._zIndex=g.css("zIndex")),g.css("zIndex",f.zIndex)
},stop:function(d,a,c){var f=c.options;
f._zIndex&&k(a.helper).css("zIndex",f._zIndex)
}}),k.ui.draggable,k.widget("ui.resizable",k.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(a){return parseFloat(a)||0
},_isNumber:function(a){return !isNaN(parseFloat(a))
},_hasScroll:function(d,a){if("hidden"===k(d).css("overflow")){return !1
}var c=a&&"left"===a?"scrollLeft":"scrollTop",f=!1;
return d[c]>0?!0:(d[c]=1,f=d[c]>0,d[c]=0,f)
},_create:function(){var d,a=this.options,c=this;
this._addClass("ui-resizable"),k.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(k("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,d={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(d),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(d),this._proportionallyResize()),this._setupHandles(),a.autoHide&&k(this.element).on("mouseenter",function(){a.disabled||(c._removeClass("ui-resizable-autohide"),c._handles.show())
}).on("mouseleave",function(){a.disabled||c.resizing||(c._addClass("ui-resizable-autohide"),c._handles.hide())
}),this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var c,a=function(d){k(d).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
};
return this.elementIsWrapper&&(a(this.element),c=this.element,this.originalElement.css({position:c.css("position"),width:c.outerWidth(),height:c.outerHeight(),top:c.css("top"),left:c.css("left")}).insertAfter(c),c.remove()),this.originalElement.css("resize",this.originalResizeStyle),a(this.originalElement),this
},_setOption:function(a,c){switch(this._super(a,c),a){case"handles":this._removeHandles(),this._setupHandles();
break;
default:}},_setupHandles:function(){var h,d,f,m,l,c=this.options,g=this;
if(this.handles=c.handles||(k(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=k(),this.handles.constructor===String){for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),f=this.handles.split(","),this.handles={},d=0;
f.length>d;
d++){h=k.trim(f[d]),m="ui-resizable-"+h,l=k("<div>"),this._addClass(l,"ui-resizable-handle "+m),l.css({zIndex:c.zIndex}),this.handles[h]=".ui-resizable-"+h,this.element.append(l)
}}this._renderAxis=function(r){var a,p,u,t;
r=r||this.element;
for(a in this.handles){this.handles[a].constructor===String?this.handles[a]=this.element.children(this.handles[a]).first().show():(this.handles[a].jquery||this.handles[a].nodeType)&&(this.handles[a]=k(this.handles[a]),this._on(this.handles[a],{mousedown:g._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(p=k(this.handles[a],this.element),t=/sw|ne|nw|se|n|s/.test(a)?p.outerHeight():p.outerWidth(),u=["padding",/ne|nw|n/.test(a)?"Top":/se|sw|s/.test(a)?"Bottom":/^e$/.test(a)?"Right":"Left"].join(""),r.css(u,t),this._proportionallyResize()),this._handles=this._handles.add(this.handles[a])
}},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){g.resizing||(this.className&&(l=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),g.axis=l&&l[1]?l[1]:"se")
}),c.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))
},_removeHandles:function(){this._handles.remove()
},_mouseCapture:function(d){var a,c,f=!1;
for(a in this.handles){c=k(this.handles[a])[0],(c===d.target||k.contains(c,d.target))&&(f=!0)
}return !this.options.disabled&&f
},_mouseStart:function(g){var d,f,l,h=this.options,c=this.element;
return this.resizing=!0,this._renderProxy(),d=this._num(this.helper.css("left")),f=this._num(this.helper.css("top")),h.containment&&(d+=k(h.containment).scrollLeft()||0,f+=k(h.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:d,top:f},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:c.width(),height:c.height()},this.originalSize=this._helper?{width:c.outerWidth(),height:c.outerHeight()}:{width:c.width(),height:c.height()},this.sizeDiff={width:c.outerWidth()-c.width(),height:c.outerHeight()-c.height()},this.originalPosition={left:d,top:f},this.originalMousePosition={left:g.pageX,top:g.pageY},this.aspectRatio="number"==typeof h.aspectRatio?h.aspectRatio:this.originalSize.width/this.originalSize.height||1,l=k(".ui-resizable-"+this.axis).css("cursor"),k("body").css("cursor","auto"===l?this.axis+"-resize":l),this._addClass("ui-resizable-resizing"),this._propagate("start",g),!0
},_mouseDrag:function(m){var d,g,t=this.originalMousePosition,p=this.axis,c=m.pageX-t.left||0,l=m.pageY-t.top||0,f=this._change[p];
return this._updatePrevProperties(),f?(d=f.apply(this,[m,c,l]),this._updateVirtualBoundaries(m.shiftKey),(this._aspectRatio||m.shiftKey)&&(d=this._updateRatio(d,m)),d=this._respectSize(d,m),this._updateCache(d),this._propagate("resize",m),g=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),k.isEmptyObject(g)||(this._updatePrevProperties(),this._trigger("resize",m,this.ui()),this._applyChanges()),!1):!1
},_mouseStop:function(u){this.resizing=!1;
var p,M,g,f,L,d,t,m=this.options,v=this;
return this._helper&&(p=this._proportionallyResizeElements,M=p.length&&/textarea/i.test(p[0].nodeName),g=M&&this._hasScroll(p[0],"left")?0:v.sizeDiff.height,f=M?0:v.sizeDiff.width,L={width:v.helper.width()-f,height:v.helper.height()-g},d=parseFloat(v.element.css("left"))+(v.position.left-v.originalPosition.left)||null,t=parseFloat(v.element.css("top"))+(v.position.top-v.originalPosition.top)||null,m.animate||this.element.css(k.extend(L,{top:t,left:d})),v.helper.height(v.size.height),v.helper.width(v.size.width),this._helper&&!m.animate&&this._proportionallyResize()),k("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",u),this._helper&&this.helper.remove(),!1
},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}
},_applyChanges:function(){var a={};
return this.position.top!==this.prevPosition.top&&(a.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(a.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(a.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(a.height=this.size.height+"px"),this.helper.css(a),a
},_updateVirtualBoundaries:function(f){var h,d,g,m,l,c=this.options;
l={minWidth:this._isNumber(c.minWidth)?c.minWidth:0,maxWidth:this._isNumber(c.maxWidth)?c.maxWidth:1/0,minHeight:this._isNumber(c.minHeight)?c.minHeight:0,maxHeight:this._isNumber(c.maxHeight)?c.maxHeight:1/0},(this._aspectRatio||f)&&(h=l.minHeight*this.aspectRatio,g=l.minWidth/this.aspectRatio,d=l.maxHeight*this.aspectRatio,m=l.maxWidth/this.aspectRatio,h>l.minWidth&&(l.minWidth=h),g>l.minHeight&&(l.minHeight=g),l.maxWidth>d&&(l.maxWidth=d),l.maxHeight>m&&(l.maxHeight=m)),this._vBoundaries=l
},_updateCache:function(a){this.offset=this.helper.offset(),this._isNumber(a.left)&&(this.position.left=a.left),this._isNumber(a.top)&&(this.position.top=a.top),this._isNumber(a.height)&&(this.size.height=a.height),this._isNumber(a.width)&&(this.size.width=a.width)
},_updateRatio:function(c){var f=this.position,a=this.size,d=this.axis;
return this._isNumber(c.height)?c.width=c.height*this.aspectRatio:this._isNumber(c.width)&&(c.height=c.width/this.aspectRatio),"sw"===d&&(c.left=f.left+(a.width-c.width),c.top=null),"nw"===d&&(c.top=f.top+(a.height-c.height),c.left=f.left+(a.width-c.width)),c
},_respectSize:function(N){var v=this._vBoundaries,p=this.axis,O=this._isNumber(N.width)&&v.maxWidth&&v.maxWidth<N.width,g=this._isNumber(N.height)&&v.maxHeight&&v.maxHeight<N.height,f=this._isNumber(N.width)&&v.minWidth&&v.minWidth>N.width,M=this._isNumber(N.height)&&v.minHeight&&v.minHeight>N.height,d=this.originalPosition.left+this.originalSize.width,u=this.originalPosition.top+this.originalSize.height,m=/sw|nw|w/.test(p),L=/nw|ne|n/.test(p);
return f&&(N.width=v.minWidth),M&&(N.height=v.minHeight),O&&(N.width=v.maxWidth),g&&(N.height=v.maxHeight),f&&m&&(N.left=d-v.minWidth),O&&m&&(N.left=d-v.maxWidth),M&&L&&(N.top=u-v.minHeight),g&&L&&(N.top=u-v.maxHeight),N.width||N.height||N.left||!N.top?N.width||N.height||N.top||!N.left||(N.left=null):N.top=null,N
},_getPaddingPlusBorderDimensions:function(c){for(var f=0,a=[],d=[c.css("borderTopWidth"),c.css("borderRightWidth"),c.css("borderBottomWidth"),c.css("borderLeftWidth")],g=[c.css("paddingTop"),c.css("paddingRight"),c.css("paddingBottom"),c.css("paddingLeft")];
4>f;
f++){a[f]=parseFloat(d[f])||0,a[f]+=parseFloat(g[f])||0
}return{height:a[0]+a[2],width:a[1]+a[3]}
},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){for(var c,d=0,a=this.helper||this.element;
this._proportionallyResizeElements.length>d;
d++){c=this._proportionallyResizeElements[d],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(c)),c.css({height:a.height()-this.outerDimensions.height||0,width:a.width()-this.outerDimensions.width||0})
}}},_renderProxy:function(){var c=this.element,a=this.options;
this.elementOffset=c.offset(),this._helper?(this.helper=this.helper||k("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++a.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element
},_change:{e:function(a,c){return{width:this.originalSize.width+c}
},w:function(c,f){var a=this.originalSize,d=this.originalPosition;
return{left:d.left+f,width:a.width-f}
},n:function(c,f,a){var d=this.originalSize,g=this.originalPosition;
return{top:g.top+a,height:d.height-a}
},s:function(c,d,a){return{height:this.originalSize.height+a}
},se:function(d,a,c){return k.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[d,a,c]))
},sw:function(d,a,c){return k.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[d,a,c]))
},ne:function(d,a,c){return k.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[d,a,c]))
},nw:function(d,a,c){return k.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[d,a,c]))
}},_propagate:function(c,a){k.ui.plugin.call(this,c,[a,this.ui()]),"resize"!==c&&this._trigger(c,a,this.ui())
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}}),k.ui.plugin.add("resizable","animate",{stop:function(u){var p=k(this).resizable("instance"),M=p.options,g=p._proportionallyResizeElements,f=g.length&&/textarea/i.test(g[0].nodeName),L=f&&p._hasScroll(g[0],"left")?0:p.sizeDiff.height,d=f?0:p.sizeDiff.width,t={width:p.size.width-d,height:p.size.height-L},m=parseFloat(p.element.css("left"))+(p.position.left-p.originalPosition.left)||null,v=parseFloat(p.element.css("top"))+(p.position.top-p.originalPosition.top)||null;
p.element.animate(k.extend(t,v&&m?{top:v,left:m}:{}),{duration:M.animateDuration,easing:M.animateEasing,step:function(){var a={width:parseFloat(p.element.css("width")),height:parseFloat(p.element.css("height")),top:parseFloat(p.element.css("top")),left:parseFloat(p.element.css("left"))};
g&&g.length&&k(g[0]).css({width:a.width,height:a.height}),p._updateCache(a),p._propagate("resize",u)
}})
}}),k.ui.plugin.add("resizable","containment",{start:function(){var L,t,Q,m,g,O,f,v=k(this).resizable("instance"),p=v.options,N=v.element,P=p.containment,M=P instanceof k?P.get(0):/parent/.test(P)?N.parent().get(0):P;
M&&(v.containerElement=k(M),/document/.test(P)||P===document?(v.containerOffset={left:0,top:0},v.containerPosition={left:0,top:0},v.parentData={element:k(document),left:0,top:0,width:k(document).width(),height:k(document).height()||document.body.parentNode.scrollHeight}):(L=k(M),t=[],k(["Top","Right","Left","Bottom"]).each(function(a,c){t[a]=v._num(L.css("padding"+c))
}),v.containerOffset=L.offset(),v.containerPosition=L.position(),v.containerSize={height:L.innerHeight()-t[3],width:L.innerWidth()-t[1]},Q=v.containerOffset,m=v.containerSize.height,g=v.containerSize.width,O=v._hasScroll(M,"left")?M.scrollWidth:g,f=v._hasScroll(M)?M.scrollHeight:m,v.parentData={element:M,left:Q.left,top:Q.top,width:O,height:f}))
},resize:function(N){var L,S,t,m,Q=k(this).resizable("instance"),f=Q.options,M=Q.containerOffset,v=Q.position,P=Q._aspectRatio||N.shiftKey,R={top:0,left:0},O=Q.containerElement,g=!0;
O[0]!==document&&/static/.test(O.css("position"))&&(R=M),v.left<(Q._helper?M.left:0)&&(Q.size.width=Q.size.width+(Q._helper?Q.position.left-M.left:Q.position.left-R.left),P&&(Q.size.height=Q.size.width/Q.aspectRatio,g=!1),Q.position.left=f.helper?M.left:0),v.top<(Q._helper?M.top:0)&&(Q.size.height=Q.size.height+(Q._helper?Q.position.top-M.top:Q.position.top),P&&(Q.size.width=Q.size.height*Q.aspectRatio,g=!1),Q.position.top=Q._helper?M.top:0),t=Q.containerElement.get(0)===Q.element.parent().get(0),m=/relative|absolute/.test(Q.containerElement.css("position")),t&&m?(Q.offset.left=Q.parentData.left+Q.position.left,Q.offset.top=Q.parentData.top+Q.position.top):(Q.offset.left=Q.element.offset().left,Q.offset.top=Q.element.offset().top),L=Math.abs(Q.sizeDiff.width+(Q._helper?Q.offset.left-R.left:Q.offset.left-M.left)),S=Math.abs(Q.sizeDiff.height+(Q._helper?Q.offset.top-R.top:Q.offset.top-M.top)),L+Q.size.width>=Q.parentData.width&&(Q.size.width=Q.parentData.width-L,P&&(Q.size.height=Q.size.width/Q.aspectRatio,g=!1)),S+Q.size.height>=Q.parentData.height&&(Q.size.height=Q.parentData.height-S,P&&(Q.size.width=Q.size.height*Q.aspectRatio,g=!1)),g||(Q.position.left=Q.prevPosition.left,Q.position.top=Q.prevPosition.top,Q.size.width=Q.prevSize.width,Q.size.height=Q.prevSize.height)
},stop:function(){var t=k(this).resizable("instance"),m=t.options,v=t.containerOffset,f=t.containerPosition,d=t.containerElement,u=k(t.helper),c=u.offset(),p=u.outerWidth()-t.sizeDiff.width,g=u.outerHeight()-t.sizeDiff.height;
t._helper&&!m.animate&&/relative/.test(d.css("position"))&&k(this).css({left:c.left-f.left-v.left,width:p,height:g}),t._helper&&!m.animate&&/static/.test(d.css("position"))&&k(this).css({left:c.left-f.left-v.left,width:p,height:g})
}}),k.ui.plugin.add("resizable","alsoResize",{start:function(){var c=k(this).resizable("instance"),a=c.options;
k(a.alsoResize).each(function(){var d=k(this);
d.data("ui-resizable-alsoresize",{width:parseFloat(d.width()),height:parseFloat(d.height()),left:parseFloat(d.css("left")),top:parseFloat(d.css("top"))})
})
},resize:function(h,d){var f=k(this).resizable("instance"),m=f.options,l=f.originalSize,c=f.originalPosition,g={height:f.size.height-l.height||0,width:f.size.width-l.width||0,top:f.position.top-c.top||0,left:f.position.left-c.left||0};
k(m.alsoResize).each(function(){var i=k(this),a=k(this).data("ui-resizable-alsoresize"),r={},p=i.parents(d.originalElement[0]).length?["width","height"]:["width","height","top","left"];
k.each(p,function(o,s){var n=(a[s]||0)+(g[s]||0);
n&&n>=0&&(r[s]=n||null)
}),i.css(r)
})
},stop:function(){k(this).removeData("ui-resizable-alsoresize")
}}),k.ui.plugin.add("resizable","ghost",{start:function(){var c=k(this).resizable("instance"),a=c.size;
c.ghost=c.originalElement.clone(),c.ghost.css({opacity:0.25,display:"block",position:"relative",height:a.height,width:a.width,margin:0,left:0,top:0}),c._addClass(c.ghost,"ui-resizable-ghost"),k.uiBackCompat!==!1&&"string"==typeof c.options.ghost&&c.ghost.addClass(this.options.ghost),c.ghost.appendTo(c.helper)
},resize:function(){var a=k(this).resizable("instance");
a.ghost&&a.ghost.css({position:"relative",height:a.size.height,width:a.size.width})
},stop:function(){var a=k(this).resizable("instance");
a.ghost&&a.helper&&a.helper.get(0).removeChild(a.ghost.get(0))
}}),k.ui.plugin.add("resizable","grid",{resize:function(){var X,T=k(this).resizable("instance"),M=T.options,Q=T.size,P=T.originalSize,aa=T.originalPosition,N=T.axis,U="number"==typeof M.grid?[M.grid,M.grid]:M.grid,S=U[0]||1,Z=U[1]||1,L=Math.round((Q.width-P.width)/S)*S,Y=Math.round((Q.height-P.height)/Z)*Z,O=P.width+L,W=P.height+Y,V=M.maxWidth&&O>M.maxWidth,R=M.maxHeight&&W>M.maxHeight,ab=M.minWidth&&M.minWidth>O,t=M.minHeight&&M.minHeight>W;
M.grid=U,ab&&(O+=S),t&&(W+=Z),V&&(O-=S),R&&(W-=Z),/^(se|s|e)$/.test(N)?(T.size.width=O,T.size.height=W):/^(ne)$/.test(N)?(T.size.width=O,T.size.height=W,T.position.top=aa.top-Y):/^(sw)$/.test(N)?(T.size.width=O,T.size.height=W,T.position.left=aa.left-L):((0>=W-Z||0>=O-S)&&(X=T._getPaddingPlusBorderDimensions(this)),W-Z>0?(T.size.height=W,T.position.top=aa.top-Y):(W=Z-X.height,T.size.height=W,T.position.top=aa.top+P.height-W),O-S>0?(T.size.width=O,T.position.left=aa.left-L):(O=S-X.width,T.size.width=O,T.position.left=aa.left+P.width-O))
}}),k.ui.resizable,k.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(c){var a=k(this).css(c).offset().top;
0>a&&k(this).css("top",c.top-a)
}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&k.fn.draggable&&this._makeDraggable(),this.options.resizable&&k.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()
},_init:function(){this.options.autoOpen&&this.open()
},_appendTo:function(){var a=this.options.appendTo;
return a&&(a.jquery||a.nodeType)?k(a):this.document.find(a||"body").eq(0)
},_destroy:function(){var a,c=this.originalPosition;
this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),a=c.parent.children().eq(c.index),a.length&&a[0]!==this.element[0]?a.before(this.element):c.parent.append(this.element)
},widget:function(){return this.uiDialog
},disable:k.noop,enable:k.noop,close:function(c){var a=this;
this._isOpen&&this._trigger("beforeClose",c)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||k.ui.safeBlur(k.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){a._trigger("close",c)
}))
},isOpen:function(){return this._isOpen
},moveToTop:function(){this._moveToTop()
},_moveToTop:function(d,a){var c=!1,g=this.uiDialog.siblings(".ui-front:visible").map(function(){return +k(this).css("z-index")
}).get(),f=Math.max.apply(null,g);
return f>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",f+1),c=!0),c&&!a&&this._trigger("focus",d),c
},open:function(){var a=this;
return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=k(k.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){a._focusTabbable(),a._trigger("focus")
}),this._makeFocusTarget(),this._trigger("open"),void 0)
},_focusTabbable:function(){var a=this._focusedElement;
a||(a=this.element.find("[autofocus]")),a.length||(a=this.element.find(":tabbable")),a.length||(a=this.uiDialogButtonPane.find(":tabbable")),a.length||(a=this.uiDialogTitlebarClose.filter(":tabbable")),a.length||(a=this.uiDialog),a.eq(0).trigger("focus")
},_keepFocus:function(c){function a(){var f=k.ui.safeActiveElement(this.document[0]),d=this.uiDialog[0]===f||k.contains(this.uiDialog[0],f);
d||this._focusTabbable()
}c.preventDefault(),a.call(this),this._delay(a)
},_createWrapper:function(){this.uiDialog=k("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(d){if(this.options.closeOnEscape&&!d.isDefaultPrevented()&&d.keyCode&&d.keyCode===k.ui.keyCode.ESCAPE){return d.preventDefault(),this.close(d),void 0
}if(d.keyCode===k.ui.keyCode.TAB&&!d.isDefaultPrevented()){var a=this.uiDialog.find(":tabbable"),c=a.filter(":first"),f=a.filter(":last");
d.target!==f[0]&&d.target!==this.uiDialog[0]||d.shiftKey?d.target!==c[0]&&d.target!==this.uiDialog[0]||!d.shiftKey||(this._delay(function(){f.trigger("focus")
}),d.preventDefault()):(this._delay(function(){c.trigger("focus")
}),d.preventDefault())
}},mousedown:function(a){this._moveToTop(a)&&this._focusTabbable()
}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})
},_createTitlebar:function(){var a;
this.uiDialogTitlebar=k("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(c){k(c.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")
}}),this.uiDialogTitlebarClose=k("<button type='button'></button>").button({label:k("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(c){c.preventDefault(),this.close(c)
}}),a=k("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(a,"ui-dialog-title"),this._title(a),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":a.attr("id")})
},_title:function(a){this.options.title?a.text(this.options.title):a.html("&#160;")
},_createButtonPane:function(){this.uiDialogButtonPane=k("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=k("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()
},_createButtons:function(){var c=this,a=this.options.buttons;
return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),k.isEmptyObject(a)||k.isArray(a)&&!a.length?(this._removeClass(this.uiDialog,"ui-dialog-buttons"),void 0):(k.each(a,function(d,e){var g,f;
e=k.isFunction(e)?{click:e,text:d}:e,e=k.extend({type:"button"},e),g=e.click,f={icon:e.icon,iconPosition:e.iconPosition,showLabel:e.showLabel,icons:e.icons,text:e.text},delete e.click,delete e.icon,delete e.iconPosition,delete e.showLabel,delete e.icons,"boolean"==typeof e.text&&delete e.text,k("<button></button>",e).button(f).appendTo(c.uiButtonSet).on("click",function(){g.apply(c.element[0],arguments)
})
}),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)
},_makeDraggable:function(){function d(e){return{position:e.position,offset:e.offset}
}var a=this,c=this.options;
this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(e,f){a._addClass(k(this),"ui-dialog-dragging"),a._blockFrames(),a._trigger("dragStart",e,d(f))
},drag:function(e,f){a._trigger("drag",e,d(f))
},stop:function(h,g){var e=g.offset.left-a.document.scrollLeft(),f=g.offset.top-a.document.scrollTop();
c.position={my:"left top",at:"left"+(e>=0?"+":"")+e+" top"+(f>=0?"+":"")+f,of:a.window},a._removeClass(k(this),"ui-dialog-dragging"),a._unblockFrames(),a._trigger("dragStop",h,d(g))
}})
},_makeResizable:function(){function g(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}
}var d=this,f=this.options,l=f.resizable,h=this.uiDialog.css("position"),c="string"==typeof l?l:"n,e,s,w,se,sw,ne,nw";
this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:f.maxWidth,maxHeight:f.maxHeight,minWidth:f.minWidth,minHeight:this._minHeight(),handles:c,start:function(a,e){d._addClass(k(this),"ui-dialog-resizing"),d._blockFrames(),d._trigger("resizeStart",a,g(e))
},resize:function(a,e){d._trigger("resize",a,g(e))
},stop:function(s,p){var e=d.uiDialog.offset(),m=e.left-d.document.scrollLeft(),i=e.top-d.document.scrollTop();
f.height=d.uiDialog.height(),f.width=d.uiDialog.width(),f.position={my:"left top",at:"left"+(m>=0?"+":"")+m+" top"+(i>=0?"+":"")+i,of:d.window},d._removeClass(k(this),"ui-dialog-resizing"),d._unblockFrames(),d._trigger("resizeStop",s,g(p))
}}).css("position",h)
},_trackFocus:function(){this._on(this.widget(),{focusin:function(a){this._makeFocusTarget(),this._focusedElement=k(a.target)
}})
},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)
},_untrackInstance:function(){var c=this._trackingInstances(),a=k.inArray(this,c);
-1!==a&&c.splice(a,1)
},_trackingInstances:function(){var a=this.document.data("ui-dialog-instances");
return a||(a=[],this.document.data("ui-dialog-instances",a)),a
},_minHeight:function(){var a=this.options;
return"auto"===a.height?a.minHeight:Math.min(a.minHeight,a.height)
},_position:function(){var a=this.uiDialog.is(":visible");
a||this.uiDialog.show(),this.uiDialog.position(this.options.position),a||this.uiDialog.hide()
},_setOptions:function(d){var a=this,c=!1,f={};
k.each(d,function(g,h){a._setOption(g,h),g in a.sizeRelatedOptions&&(c=!0),g in a.resizableRelatedOptions&&(f[g]=h)
}),c&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",f)
},_setOption:function(d,a){var c,g,f=this.uiDialog;
"disabled"!==d&&(this._super(d,a),"appendTo"===d&&this.uiDialog.appendTo(this._appendTo()),"buttons"===d&&this._createButtons(),"closeText"===d&&this.uiDialogTitlebarClose.button({label:k("<a>").text(""+this.options.closeText).html()}),"draggable"===d&&(c=f.is(":data(ui-draggable)"),c&&!a&&f.draggable("destroy"),!c&&a&&this._makeDraggable()),"position"===d&&this._position(),"resizable"===d&&(g=f.is(":data(ui-resizable)"),g&&!a&&f.resizable("destroy"),g&&"string"==typeof a&&f.resizable("option","handles",a),g||a===!1||this._makeResizable()),"title"===d&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
},_size:function(){var c,f,a,d=this.options;
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),d.minWidth>d.width&&(d.width=d.minWidth),c=this.uiDialog.css({height:"auto",width:d.width}).outerHeight(),f=Math.max(0,d.minHeight-c),a="number"==typeof d.maxHeight?Math.max(0,d.maxHeight-c):"none","auto"===d.height?this.element.css({minHeight:f,maxHeight:a,height:"auto"}):this.element.height(Math.max(0,d.height-c)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())
},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var a=k(this);
return k("<div>").css({position:"absolute",width:a.outerWidth(),height:a.outerHeight()}).appendTo(a.parent()).offset(a.offset())[0]
})
},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)
},_allowInteraction:function(a){return k(a.target).closest(".ui-dialog").length?!0:!!k(a.target).closest(".ui-datepicker").length
},_createOverlay:function(){if(this.options.modal){var a=!0;
this._delay(function(){a=!1
}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(c){a||this._allowInteraction(c)||(c.preventDefault(),this._trackingInstances()[0]._focusTabbable())
}}),this.overlay=k("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)
}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var a=this.document.data("ui-dialog-overlays")-1;
a?this.document.data("ui-dialog-overlays",a):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null
}}}),k.uiBackCompat!==!1&&k.widget("ui.dialog",k.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)
},_setOption:function(a,c){"dialogClass"===a&&this.uiDialog.removeClass(this.options.dialogClass).addClass(c),this._superApply(arguments)
}}),k.ui.dialog,k.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var d,a=this.options,c=a.accept;
this.isover=!1,this.isout=!0,this.accept=k.isFunction(c)?c:function(e){return e.is(c)
},this.proportions=function(){return arguments.length?(d=arguments[0],void 0):d?d:d={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}
},this._addToManager(a.scope),a.addClasses&&this._addClass("ui-droppable")
},_addToManager:function(a){k.ui.ddmanager.droppables[a]=k.ui.ddmanager.droppables[a]||[],k.ui.ddmanager.droppables[a].push(this)
},_splice:function(a){for(var c=0;
a.length>c;
c++){a[c]===this&&a.splice(c,1)
}},_destroy:function(){var a=k.ui.ddmanager.droppables[this.options.scope];
this._splice(a)
},_setOption:function(d,a){if("accept"===d){this.accept=k.isFunction(a)?a:function(e){return e.is(a)
}
}else{if("scope"===d){var c=k.ui.ddmanager.droppables[this.options.scope];
this._splice(c),this._addToManager(a)
}}this._super(d,a)
},_activate:function(c){var a=k.ui.ddmanager.current;
this._addActiveClass(),a&&this._trigger("activate",c,this.ui(a))
},_deactivate:function(c){var a=k.ui.ddmanager.current;
this._removeActiveClass(),a&&this._trigger("deactivate",c,this.ui(a))
},_over:function(c){var a=k.ui.ddmanager.current;
a&&(a.currentItem||a.element)[0]!==this.element[0]&&this.accept.call(this.element[0],a.currentItem||a.element)&&(this._addHoverClass(),this._trigger("over",c,this.ui(a)))
},_out:function(c){var a=k.ui.ddmanager.current;
a&&(a.currentItem||a.element)[0]!==this.element[0]&&this.accept.call(this.element[0],a.currentItem||a.element)&&(this._removeHoverClass(),this._trigger("out",c,this.ui(a)))
},_drop:function(d,a){var c=a||k.ui.ddmanager.current,f=!1;
return c&&(c.currentItem||c.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var e=k(this).droppable("instance");
return e.options.greedy&&!e.options.disabled&&e.options.scope===c.options.scope&&e.accept.call(e.element[0],c.currentItem||c.element)&&b(c,k.extend(e,{offset:e.element.offset()}),e.options.tolerance,d)?(f=!0,!1):void 0
}),f?!1:this.accept.call(this.element[0],c.currentItem||c.element)?(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",d,this.ui(c)),this.element):!1):!1
},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}
},_addHoverClass:function(){this._addClass("ui-droppable-hover")
},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")
},_addActiveClass:function(){this._addClass("ui-droppable-active")
},_removeActiveClass:function(){this._removeClass("ui-droppable-active")
}});
var b=k.ui.intersect=function(){function a(d,f,c){return d>=f&&f+c>d
}return function(L,t,Q,m){if(!t.offset){return !1
}var g=(L.positionAbs||L.position.absolute).left+L.margins.left,O=(L.positionAbs||L.position.absolute).top+L.margins.top,f=g+L.helperProportions.width,v=O+L.helperProportions.height,p=t.offset.left,N=t.offset.top,P=p+t.proportions().width,M=N+t.proportions().height;
switch(Q){case"fit":return g>=p&&P>=f&&O>=N&&M>=v;
case"intersect":return g+L.helperProportions.width/2>p&&P>f-L.helperProportions.width/2&&O+L.helperProportions.height/2>N&&M>v-L.helperProportions.height/2;
case"pointer":return a(m.pageY,N,t.proportions().height)&&a(m.pageX,p,t.proportions().width);
case"touch":return(O>=N&&M>=O||v>=N&&M>=v||N>O&&v>M)&&(g>=p&&P>=g||f>=p&&P>=f||p>g&&f>P);
default:return !1
}}
}();
k.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(h,d){var f,m,l=k.ui.ddmanager.droppables[h.options.scope]||[],c=d?d.type:null,g=(h.currentItem||h.element).find(":data(ui-droppable)").addBack();
k:for(f=0;
l.length>f;
f++){if(!(l[f].options.disabled||h&&!l[f].accept.call(l[f].element[0],h.currentItem||h.element))){for(m=0;
g.length>m;
m++){if(g[m]===l[f].element[0]){l[f].proportions().height=0;
continue k
}}l[f].visible="none"!==l[f].element.css("display"),l[f].visible&&("mousedown"===c&&l[f]._activate.call(l[f],d),l[f].offset=l[f].element.offset(),l[f].proportions({width:l[f].element[0].offsetWidth,height:l[f].element[0].offsetHeight}))
}}},drop:function(d,a){var c=!1;
return k.each((k.ui.ddmanager.droppables[d.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&b(d,this,this.options.tolerance,a)&&(c=this._drop.call(this,a)||c),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],d.currentItem||d.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,a)))
}),c
},dragStart:function(c,a){c.element.parentsUntil("body").on("scroll.droppable",function(){c.options.refreshPositions||k.ui.ddmanager.prepareOffsets(c,a)
})
},drag:function(c,a){c.options.refreshPositions&&k.ui.ddmanager.prepareOffsets(c,a),k.each(k.ui.ddmanager.droppables[c.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var e,h,g,d=b(c,this,this.options.tolerance,a),f=!d&&this.isover?"isout":d&&!this.isover?"isover":null;
f&&(this.options.greedy&&(h=this.options.scope,g=this.element.parents(":data(ui-droppable)").filter(function(){return k(this).droppable("instance").options.scope===h
}),g.length&&(e=k(g[0]).droppable("instance"),e.greedyChild="isover"===f)),e&&"isover"===f&&(e.isover=!1,e.isout=!0,e._out.call(e,a)),this[f]=!0,this["isout"===f?"isover":"isout"]=!1,this["isover"===f?"_over":"_out"].call(this,a),e&&"isout"===f&&(e.isout=!1,e.isover=!0,e._over.call(e,a)))
}})
},dragStop:function(c,a){c.element.parentsUntil("body").off("scroll.droppable"),c.options.refreshPositions||k.ui.ddmanager.prepareOffsets(c,a)
}},k.uiBackCompat!==!1&&k.widget("ui.droppable",k.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)
},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)
},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)
},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)
}}),k.ui.droppable,k.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=k("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()
},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()
},value:function(a){return void 0===a?this.options.value:(this.options.value=this._constrainedValue(a),this._refreshValue(),void 0)
},_constrainedValue:function(a){return void 0===a&&(a=this.options.value),this.indeterminate=a===!1,"number"!=typeof a&&(a=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,a))
},_setOptions:function(a){var c=a.value;
delete a.value,this._super(a),this.options.value=this._constrainedValue(c),this._refreshValue()
},_setOption:function(a,c){"max"===a&&(c=Math.max(this.min,c)),this._super(a,c)
},_setOptionDisabled:function(a){this._super(a),this.element.attr("aria-disabled",a),this._toggleClass(null,"ui-state-disabled",!!a)
},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)
},_refreshValue:function(){var c=this.options.value,a=this._percentage();
this.valueDiv.toggle(this.indeterminate||c>this.min).width(a.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,c===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=k("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":c}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==c&&(this.oldValue=c,this._trigger("change")),c===this.options.max&&this._trigger("complete")
}}),k.widget("ui.selectable",k.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var a=this;
this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){a.elementPos=k(a.element[0]).offset(),a.selectees=k(a.options.filter,a.element[0]),a._addClass(a.selectees,"ui-selectee"),a.selectees.each(function(){var c=k(this),d=c.offset(),e={left:d.left-a.elementPos.left,top:d.top-a.elementPos.top};
k.data(this,"selectable-item",{element:this,$element:c,left:e.left,top:e.top,right:e.left+c.outerWidth(),bottom:e.top+c.outerHeight(),startselected:!1,selected:c.hasClass("ui-selected"),selecting:c.hasClass("ui-selecting"),unselecting:c.hasClass("ui-unselecting")})
})
},this.refresh(),this._mouseInit(),this.helper=k("<div>"),this._addClass(this.helper,"ui-selectable-helper")
},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()
},_mouseStart:function(d){var a=this,c=this.options;
this.opos=[d.pageX,d.pageY],this.elementPos=k(this.element[0]).offset(),this.options.disabled||(this.selectees=k(c.filter,this.element[0]),this._trigger("start",d),k(c.appendTo).append(this.helper),this.helper.css({left:d.pageX,top:d.pageY,width:0,height:0}),c.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var e=k.data(this,"selectable-item");
e.startselected=!0,d.metaKey||d.ctrlKey||(a._removeClass(e.$element,"ui-selected"),e.selected=!1,a._addClass(e.$element,"ui-unselecting"),e.unselecting=!0,a._trigger("unselecting",d,{unselecting:e.element}))
}),k(d.target).parents().addBack().each(function(){var e,f=k.data(this,"selectable-item");
return f?(e=!d.metaKey&&!d.ctrlKey||!f.$element.hasClass("ui-selected"),a._removeClass(f.$element,e?"ui-unselecting":"ui-selected")._addClass(f.$element,e?"ui-selecting":"ui-unselecting"),f.unselecting=!e,f.selecting=e,f.selected=e,e?a._trigger("selecting",d,{selecting:f.element}):a._trigger("unselecting",d,{unselecting:f.element}),!1):void 0
}))
},_mouseDrag:function(m){if(this.dragged=!0,!this.options.disabled){var d,g=this,t=this.options,p=this.opos[0],c=this.opos[1],l=m.pageX,f=m.pageY;
return p>l&&(d=l,l=p,p=d),c>f&&(d=f,f=c,c=d),this.helper.css({left:p,top:c,width:l-p,height:f-c}),this.selectees.each(function(){var e=k.data(this,"selectable-item"),a=!1,h={};
e&&e.element!==g.element[0]&&(h.left=e.left+g.elementPos.left,h.right=e.right+g.elementPos.left,h.top=e.top+g.elementPos.top,h.bottom=e.bottom+g.elementPos.top,"touch"===t.tolerance?a=!(h.left>l||p>h.right||h.top>f||c>h.bottom):"fit"===t.tolerance&&(a=h.left>p&&l>h.right&&h.top>c&&f>h.bottom),a?(e.selected&&(g._removeClass(e.$element,"ui-selected"),e.selected=!1),e.unselecting&&(g._removeClass(e.$element,"ui-unselecting"),e.unselecting=!1),e.selecting||(g._addClass(e.$element,"ui-selecting"),e.selecting=!0,g._trigger("selecting",m,{selecting:e.element}))):(e.selecting&&((m.metaKey||m.ctrlKey)&&e.startselected?(g._removeClass(e.$element,"ui-selecting"),e.selecting=!1,g._addClass(e.$element,"ui-selected"),e.selected=!0):(g._removeClass(e.$element,"ui-selecting"),e.selecting=!1,e.startselected&&(g._addClass(e.$element,"ui-unselecting"),e.unselecting=!0),g._trigger("unselecting",m,{unselecting:e.element}))),e.selected&&(m.metaKey||m.ctrlKey||e.startselected||(g._removeClass(e.$element,"ui-selected"),e.selected=!1,g._addClass(e.$element,"ui-unselecting"),e.unselecting=!0,g._trigger("unselecting",m,{unselecting:e.element})))))
}),!1
}},_mouseStop:function(c){var a=this;
return this.dragged=!1,k(".ui-unselecting",this.element[0]).each(function(){var d=k.data(this,"selectable-item");
a._removeClass(d.$element,"ui-unselecting"),d.unselecting=!1,d.startselected=!1,a._trigger("unselected",c,{unselected:d.element})
}),k(".ui-selecting",this.element[0]).each(function(){var d=k.data(this,"selectable-item");
a._removeClass(d.$element,"ui-selecting")._addClass(d.$element,"ui-selected"),d.selecting=!1,d.selected=!0,d.startselected=!0,a._trigger("selected",c,{selected:d.element})
}),this._trigger("stop",c),this.helper.remove(),!1
}}),k.widget("ui.selectmenu",[k.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var a=this.element.uniqueId().attr("id");
this.ids={element:a,button:a+"-button",menu:a+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=k()
},_drawButton:function(){var d,a=this,c=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);
this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(e){this.button.focus(),e.preventDefault()
}}),this.element.hide(),this.button=k("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),d=k("<span>").appendTo(this.button),this._addClass(d,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(c).appendTo(this.button),this.options.width!==!1&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){a._rendered||a._refreshMenu()
})
},_drawMenu:function(){var a=this;
this.menu=k("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=k("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(d,c){d.preventDefault(),a._setSelection(),a._select(c.item.data("ui-selectmenu-item"),d)
},focus:function(d,c){var e=c.item.data("ui-selectmenu-item");
null!=a.focusIndex&&e.index!==a.focusIndex&&(a._trigger("focus",d,{item:e}),a.isOpen||a._select(e,d)),a.focusIndex=e.index,a.button.attr("aria-activedescendant",a.menuItems.eq(e.index).attr("id"))
}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return !1
},this.menuInstance._isDivider=function(){return !1
}
},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()
},_refreshMenu:function(){var a,c=this.element.find("option");
this.menu.empty(),this._parseOptions(c),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,c.length&&(a=this._getSelectedItem(),this.menuInstance.focus(null,a),this._setAria(a.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))
},open:function(a){this.options.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",a)))
},_position:function(){this.menuWrap.position(k.extend({of:this.button},this.options.position))
},close:function(a){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",a))
},widget:function(){return this.button
},menuWidget:function(){return this.menu
},_renderButtonItem:function(c){var a=k("<span>");
return this._setText(a,c.label),this._addClass(a,"ui-selectmenu-text"),a
},_renderMenu:function(d,a){var c=this,f="";
k.each(a,function(g,h){var e;
h.optgroup!==f&&(e=k("<li>",{text:h.optgroup}),c._addClass(e,"ui-selectmenu-optgroup","ui-menu-divider"+(h.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),e.appendTo(d),f=h.optgroup),c._renderItemData(d,h)
})
},_renderItemData:function(a,c){return this._renderItem(a,c).data("ui-selectmenu-item",c)
},_renderItem:function(d,a){var c=k("<li>"),f=k("<div>",{title:a.element.attr("title")});
return a.disabled&&this._addClass(c,null,"ui-state-disabled"),this._setText(f,a.label),c.append(f).appendTo(d)
},_setText:function(a,c){c?a.text(c):a.html("&#160;")
},_move:function(c,f){var a,d,g=".ui-menu-item";
this.isOpen?a=this.menuItems.eq(this.focusIndex).parent("li"):(a=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),g+=":not(.ui-state-disabled)"),d="first"===c||"last"===c?a["first"===c?"prevAll":"nextAll"](g).eq(-1):a[c+"All"](g).eq(0),d.length&&this.menuInstance.focus(f,d)
},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
},_toggle:function(a){this[this.isOpen?"close":"open"](a)
},_setSelection:function(){var a;
this.range&&(window.getSelection?(a=window.getSelection(),a.removeAllRanges(),a.addRange(this.range)):this.range.select(),this.button.focus())
},_documentClick:{mousedown:function(a){this.isOpen&&(k(a.target).closest(".ui-selectmenu-menu, #"+k.ui.escapeSelector(this.ids.button)).length||this.close(a))
}},_buttonEvents:{mousedown:function(){var a;
window.getSelection?(a=window.getSelection(),a.rangeCount&&(this.range=a.getRangeAt(0))):this.range=document.selection.createRange()
},click:function(a){this._setSelection(),this._toggle(a)
},keydown:function(c){var a=!0;
switch(c.keyCode){case k.ui.keyCode.TAB:case k.ui.keyCode.ESCAPE:this.close(c),a=!1;
break;
case k.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(c);
break;
case k.ui.keyCode.UP:c.altKey?this._toggle(c):this._move("prev",c);
break;
case k.ui.keyCode.DOWN:c.altKey?this._toggle(c):this._move("next",c);
break;
case k.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(c):this._toggle(c);
break;
case k.ui.keyCode.LEFT:this._move("prev",c);
break;
case k.ui.keyCode.RIGHT:this._move("next",c);
break;
case k.ui.keyCode.HOME:case k.ui.keyCode.PAGE_UP:this._move("first",c);
break;
case k.ui.keyCode.END:case k.ui.keyCode.PAGE_DOWN:this._move("last",c);
break;
default:this.menu.trigger(c),a=!1
}a&&c.preventDefault()
}},_selectFocusedItem:function(a){var c=this.menuItems.eq(this.focusIndex).parent("li");
c.hasClass("ui-state-disabled")||this._select(c.data("ui-selectmenu-item"),a)
},_select:function(c,d){var a=this.element[0].selectedIndex;
this.element[0].selectedIndex=c.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(c)),this._setAria(c),this._trigger("select",d,{item:c}),c.index!==a&&this._trigger("change",d,{item:c}),this.close(d)
},_setAria:function(a){var c=this.menuItems.eq(a.index).attr("id");
this.button.attr({"aria-labelledby":c,"aria-activedescendant":c}),this.menu.attr("aria-activedescendant",c)
},_setOption:function(c,d){if("icons"===c){var a=this.button.find("span.ui-icon");
this._removeClass(a,null,this.options.icons.button)._addClass(a,null,d.button)
}this._super(c,d),"appendTo"===c&&this.menuWrap.appendTo(this._appendTo()),"width"===c&&this._resizeButton()
},_setOptionDisabled:function(a){this._super(a),this.menuInstance.option("disabled",a),this.button.attr("aria-disabled",a),this._toggleClass(this.button,null,"ui-state-disabled",a),this.element.prop("disabled",a),a?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)
},_appendTo:function(){var a=this.options.appendTo;
return a&&(a=a.jquery||a.nodeType?k(a):this.document.find(a).eq(0)),a&&a[0]||(a=this.element.closest(".ui-front, dialog")),a.length||(a=this.document[0].body),a
},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)
},_resizeButton:function(){var a=this.options.width;
return a===!1?(this.button.css("width",""),void 0):(null===a&&(a=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(a),void 0)
},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))
},_getCreateOptions:function(){var a=this._super();
return a.disabled=this.element.prop("disabled"),a
},_parseOptions:function(d){var a=this,c=[];
d.each(function(f,g){c.push(a._parseOption(k(g),f))
}),this.items=c
},_parseOption:function(c,d){var a=c.parent("optgroup");
return{element:c,index:d,value:c.val(),label:c.text(),optgroup:a.attr("label")||"",disabled:a.prop("disabled")||c.prop("disabled")}
},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)
}}]),k.widget("ui.slider",k.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1
},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()
},_createHandles:function(){var g,d,f=this.options,l=this.element.find(".ui-slider-handle"),h="<span tabindex='0'></span>",c=[];
for(d=f.values&&f.values.length||1,l.length>d&&(l.slice(d).remove(),l=l.slice(0,d)),g=l.length;
d>g;
g++){c.push(h)
}this.handles=l.add(k(c.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(a){k(this).data("ui-slider-handle-index",a).attr("tabIndex",0)
})
},_createRange:function(){var a=this.options;
a.range?(a.range===!0&&(a.values?a.values.length&&2!==a.values.length?a.values=[a.values[0],a.values[0]]:k.isArray(a.values)&&(a.values=a.values.slice(0)):a.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=k("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===a.range||"max"===a.range)&&this._addClass(this.range,"ui-slider-range-"+a.range)):(this.range&&this.range.remove(),this.range=null)
},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)
},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()
},_mouseCapture:function(v){var p,O,g,f,M,d,t,m,L=this,N=this.options;
return N.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),p={x:v.pageX,y:v.pageY},O=this._normValueFromMouse(p),g=this._valueMax()-this._valueMin()+1,this.handles.each(function(c){var a=Math.abs(O-L.values(c));
(g>a||g===a&&(c===L._lastChangedValue||L.values(c)===N.min))&&(g=a,f=k(this),M=c)
}),d=this._start(v,M),d===!1?!1:(this._mouseSliding=!0,this._handleIndex=M,this._addClass(f,null,"ui-state-active"),f.trigger("focus"),t=f.offset(),m=!k(v.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=m?{left:0,top:0}:{left:v.pageX-t.left-f.width()/2,top:v.pageY-t.top-f.height()/2-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(v,M,O),this._animateOff=!0,!0))
},_mouseStart:function(){return !0
},_mouseDrag:function(c){var d={x:c.pageX,y:c.pageY},a=this._normValueFromMouse(d);
return this._slide(c,this._handleIndex,a),!1
},_mouseStop:function(a){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1
},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"
},_normValueFromMouse:function(c){var f,a,d,h,g;
return"horizontal"===this.orientation?(f=this.elementSize.width,a=c.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(f=this.elementSize.height,a=c.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=a/f,d>1&&(d=1),0>d&&(d=0),"vertical"===this.orientation&&(d=1-d),h=this._valueMax()-this._valueMin(),g=this._valueMin()+d*h,this._trimAlignValue(g)
},_uiHash:function(c,f,a){var d={handle:this.handles[c],handleIndex:c,value:void 0!==f?f:this.value()};
return this._hasMultipleValues()&&(d.value=void 0!==f?f:this.values(c),d.values=a||this.values()),d
},_hasMultipleValues:function(){return this.options.values&&this.options.values.length
},_start:function(a,c){return this._trigger("start",a,this._uiHash(c))
},_slide:function(f,h,d){var g,m,l=this.value(),c=this.values();
this._hasMultipleValues()&&(m=this.values(h?0:1),l=this.values(h),2===this.options.values.length&&this.options.range===!0&&(d=0===h?Math.min(m,d):Math.max(m,d)),c[h]=d),d!==l&&(g=this._trigger("slide",f,this._uiHash(h,d,c)),g!==!1&&(this._hasMultipleValues()?this.values(h,d):this.value(d)))
},_stop:function(a,c){this._trigger("stop",a,this._uiHash(c))
},_change:function(a,c){this._keySliding||this._mouseSliding||(this._lastChangedValue=c,this._trigger("change",a,this._uiHash(c)))
},value:function(a){return arguments.length?(this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0),void 0):this._value()
},values:function(d,a){var c,g,f;
if(arguments.length>1){return this.options.values[d]=this._trimAlignValue(a),this._refreshValue(),this._change(null,d),void 0
}if(!arguments.length){return this._values()
}if(!k.isArray(arguments[0])){return this._hasMultipleValues()?this._values(d):this.value()
}for(c=this.options.values,g=arguments[0],f=0;
c.length>f;
f+=1){c[f]=this._trimAlignValue(g[f]),this._change(null,f)
}this._refreshValue()
},_setOption:function(d,a){var c,f=0;
switch("range"===d&&this.options.range===!0&&("min"===a?(this.options.value=this._values(0),this.options.values=null):"max"===a&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),k.isArray(this.options.values)&&(f=this.options.values.length),this._super(d,a),d){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(a),this.handles.css("horizontal"===a?"bottom":"left","");
break;
case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;
break;
case"values":for(this._animateOff=!0,this._refreshValue(),c=f-1;
c>=0;
c--){this._change(null,c)
}this._animateOff=!1;
break;
case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;
break;
case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1
}},_setOptionDisabled:function(a){this._super(a),this._toggleClass(null,"ui-state-disabled",!!a)
},_value:function(){var a=this.options.value;
return a=this._trimAlignValue(a)
},_values:function(c){var f,a,d;
if(arguments.length){return f=this.options.values[c],f=this._trimAlignValue(f)
}if(this._hasMultipleValues()){for(a=this.options.values.slice(),d=0;
a.length>d;
d+=1){a[d]=this._trimAlignValue(a[d])
}return a
}return[]
},_trimAlignValue:function(c){if(this._valueMin()>=c){return this._valueMin()
}if(c>=this._valueMax()){return this._valueMax()
}var f=this.options.step>0?this.options.step:1,a=(c-this._valueMin())%f,d=c-a;
return 2*Math.abs(a)>=f&&(d+=a>0?f:-f),parseFloat(d.toFixed(5))
},_calculateNewMax:function(){var c=this.options.max,f=this._valueMin(),a=this.options.step,d=Math.round((c-f)/a)*a;
c=d+f,c>this.options.max&&(c-=a),this.max=parseFloat(c.toFixed(this._precision()))
},_precision:function(){var a=this._precisionOf(this.options.step);
return null!==this.options.min&&(a=Math.max(a,this._precisionOf(this.options.min))),a
},_precisionOf:function(c){var d=""+c,a=d.indexOf(".");
return -1===a?0:d.length-a-1
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.max
},_refreshRange:function(a){"vertical"===a&&this.range.css({width:"",left:""}),"horizontal"===a&&this.range.css({height:"",bottom:""})
},_refreshValue:function(){var u,p,M,g,f,L=this.options.range,d=this.options,t=this,m=this._animateOff?!1:d.animate,v={};
this._hasMultipleValues()?this.handles.each(function(a){p=100*((t.values(a)-t._valueMin())/(t._valueMax()-t._valueMin())),v["horizontal"===t.orientation?"left":"bottom"]=p+"%",k(this).stop(1,1)[m?"animate":"css"](v,d.animate),t.options.range===!0&&("horizontal"===t.orientation?(0===a&&t.range.stop(1,1)[m?"animate":"css"]({left:p+"%"},d.animate),1===a&&t.range[m?"animate":"css"]({width:p-u+"%"},{queue:!1,duration:d.animate})):(0===a&&t.range.stop(1,1)[m?"animate":"css"]({bottom:p+"%"},d.animate),1===a&&t.range[m?"animate":"css"]({height:p-u+"%"},{queue:!1,duration:d.animate}))),u=p
}):(M=this.value(),g=this._valueMin(),f=this._valueMax(),p=f!==g?100*((M-g)/(f-g)):0,v["horizontal"===this.orientation?"left":"bottom"]=p+"%",this.handle.stop(1,1)[m?"animate":"css"](v,d.animate),"min"===L&&"horizontal"===this.orientation&&this.range.stop(1,1)[m?"animate":"css"]({width:p+"%"},d.animate),"max"===L&&"horizontal"===this.orientation&&this.range.stop(1,1)[m?"animate":"css"]({width:100-p+"%"},d.animate),"min"===L&&"vertical"===this.orientation&&this.range.stop(1,1)[m?"animate":"css"]({height:p+"%"},d.animate),"max"===L&&"vertical"===this.orientation&&this.range.stop(1,1)[m?"animate":"css"]({height:100-p+"%"},d.animate))
},_handleEvents:{keydown:function(g){var d,f,l,h,c=k(g.target).data("ui-slider-handle-index");
switch(g.keyCode){case k.ui.keyCode.HOME:case k.ui.keyCode.END:case k.ui.keyCode.PAGE_UP:case k.ui.keyCode.PAGE_DOWN:case k.ui.keyCode.UP:case k.ui.keyCode.RIGHT:case k.ui.keyCode.DOWN:case k.ui.keyCode.LEFT:if(g.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(k(g.target),null,"ui-state-active"),d=this._start(g,c),d===!1)){return
}}switch(h=this.options.step,f=l=this._hasMultipleValues()?this.values(c):this.value(),g.keyCode){case k.ui.keyCode.HOME:l=this._valueMin();
break;
case k.ui.keyCode.END:l=this._valueMax();
break;
case k.ui.keyCode.PAGE_UP:l=this._trimAlignValue(f+(this._valueMax()-this._valueMin())/this.numPages);
break;
case k.ui.keyCode.PAGE_DOWN:l=this._trimAlignValue(f-(this._valueMax()-this._valueMin())/this.numPages);
break;
case k.ui.keyCode.UP:case k.ui.keyCode.RIGHT:if(f===this._valueMax()){return
}l=this._trimAlignValue(f+h);
break;
case k.ui.keyCode.DOWN:case k.ui.keyCode.LEFT:if(f===this._valueMin()){return
}l=this._trimAlignValue(f-h)
}this._slide(g,c,l)
},keyup:function(c){var a=k(c.target).data("ui-slider-handle-index");
this._keySliding&&(this._keySliding=!1,this._stop(c,a),this._change(c,a),this._removeClass(k(c.target),null,"ui-state-active"))
}}}),k.widget("ui.sortable",k.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(c,d,a){return c>=d&&d+a>c
},_isFloating:function(a){return/left|right/.test(a.css("float"))||/inline|table-cell/.test(a.css("display"))
},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0
},_setOption:function(a,c){this._super(a,c),"handle"===a&&this._setHandleClassName()
},_setHandleClassName:function(){var a=this;
this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),k.each(this.items,function(){a._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")
})
},_destroy:function(){this._mouseDestroy();
for(var a=this.items.length-1;
a>=0;
a--){this.items[a].item.removeData(this.widgetName+"-item")
}return this
},_mouseCapture:function(d,a){var c=null,g=!1,f=this;
return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(d),k(d.target).parents().each(function(){return k.data(this,f.widgetName+"-item")===f?(c=k(this),!1):void 0
}),k.data(d.target,f.widgetName+"-item")===f&&(c=k(d.target)),c?!this.options.handle||a||(k(this.options.handle,c).find("*").addBack().each(function(){this===d.target&&(g=!0)
}),g)?(this.currentItem=c,this._removeCurrentsFromItems(),!0):!1:!1)
},_mouseStart:function(g,d,f){var l,h,c=this.options;
if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(g),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},k.extend(this.offset,{click:{left:g.pageX-this.offset.left,top:g.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(g),this.originalPageX=g.pageX,this.originalPageY=g.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),c.containment&&this._setContainment(),c.cursor&&"auto"!==c.cursor&&(h=this.document.find("body"),this.storedCursor=h.css("cursor"),h.css("cursor",c.cursor),this.storedStylesheet=k("<style>*{ cursor: "+c.cursor+" !important; }</style>").appendTo(h)),c.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",c.opacity)),c.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",c.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",g,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!f){for(l=this.containers.length-1;
l>=0;
l--){this.containers[l]._trigger("activate",g,this._uiHash(this))
}}return k.ui.ddmanager&&(k.ui.ddmanager.current=this),k.ui.ddmanager&&!c.dropBehaviour&&k.ui.ddmanager.prepareOffsets(this,g),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(g),!0
},_mouseDrag:function(h){var d,f,m,l,c=this.options,g=!1;
for(this.position=this._generatePosition(h),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-h.pageY<c.scrollSensitivity?this.scrollParent[0].scrollTop=g=this.scrollParent[0].scrollTop+c.scrollSpeed:h.pageY-this.overflowOffset.top<c.scrollSensitivity&&(this.scrollParent[0].scrollTop=g=this.scrollParent[0].scrollTop-c.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-h.pageX<c.scrollSensitivity?this.scrollParent[0].scrollLeft=g=this.scrollParent[0].scrollLeft+c.scrollSpeed:h.pageX-this.overflowOffset.left<c.scrollSensitivity&&(this.scrollParent[0].scrollLeft=g=this.scrollParent[0].scrollLeft-c.scrollSpeed)):(h.pageY-this.document.scrollTop()<c.scrollSensitivity?g=this.document.scrollTop(this.document.scrollTop()-c.scrollSpeed):this.window.height()-(h.pageY-this.document.scrollTop())<c.scrollSensitivity&&(g=this.document.scrollTop(this.document.scrollTop()+c.scrollSpeed)),h.pageX-this.document.scrollLeft()<c.scrollSensitivity?g=this.document.scrollLeft(this.document.scrollLeft()-c.scrollSpeed):this.window.width()-(h.pageX-this.document.scrollLeft())<c.scrollSensitivity&&(g=this.document.scrollLeft(this.document.scrollLeft()+c.scrollSpeed))),g!==!1&&k.ui.ddmanager&&!c.dropBehaviour&&k.ui.ddmanager.prepareOffsets(this,h)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),d=this.items.length-1;
d>=0;
d--){if(f=this.items[d],m=f.item[0],l=this._intersectsWithPointer(f),l&&f.instance===this.currentContainer&&m!==this.currentItem[0]&&this.placeholder[1===l?"next":"prev"]()[0]!==m&&!k.contains(this.placeholder[0],m)&&("semi-dynamic"===this.options.type?!k.contains(this.element[0],m):!0)){if(this.direction=1===l?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(f)){break
}this._rearrange(h,f),this._trigger("change",h,this._uiHash());
break
}}return this._contactContainers(h),k.ui.ddmanager&&k.ui.ddmanager.drag(this,h),this._trigger("sort",h,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1
},_mouseStop:function(g,d){if(g){if(k.ui.ddmanager&&!this.options.dropBehaviour&&k.ui.ddmanager.drop(this,g),this.options.revert){var f=this,l=this.placeholder.offset(),h=this.options.axis,c={};
h&&"x"!==h||(c.left=l.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),h&&"y"!==h||(c.top=l.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,k(this.helper).animate(c,parseInt(this.options.revert,10)||500,function(){f._clear(g)
})
}else{this._clear(g,d)
}return !1
}},cancel:function(){if(this.dragging){this._mouseUp(new k.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();
for(var a=this.containers.length-1;
a>=0;
a--){this.containers[a]._trigger("deactivate",null,this._uiHash(this)),this.containers[a].containerCache.over&&(this.containers[a]._trigger("out",null,this._uiHash(this)),this.containers[a].containerCache.over=0)
}}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),k.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?k(this.domPosition.prev).after(this.currentItem):k(this.domPosition.parent).prepend(this.currentItem)),this
},serialize:function(d){var a=this._getItemsAsjQuery(d&&d.connected),c=[];
return d=d||{},k(a).each(function(){var e=(k(d.item||this).attr(d.attribute||"id")||"").match(d.expression||/(.+)[\-=_](.+)/);
e&&c.push((d.key||e[1]+"[]")+"="+(d.key&&d.expression?e[1]:e[2]))
}),!c.length&&d.key&&c.push(d.key+"="),c.join("&")
},toArray:function(d){var a=this._getItemsAsjQuery(d&&d.connected),c=[];
return d=d||{},a.each(function(){c.push(k(d.item||this).attr(d.attribute||"id")||"")
}),c
},_intersectsWith:function(T){var O=this.positionAbs.left,M=O+this.helperProportions.width,U=this.positionAbs.top,v=U+this.helperProportions.height,m=T.left,R=m+T.width,f=T.top,N=f+T.height,L=this.offset.click.top,Q=this.offset.click.left,S="x"===this.options.axis||U+L>f&&N>U+L,P="y"===this.options.axis||O+Q>m&&R>O+Q,g=S&&P;
return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>T[this.floating?"width":"height"]?g:O+this.helperProportions.width/2>m&&R>M-this.helperProportions.width/2&&U+this.helperProportions.height/2>f&&N>v-this.helperProportions.height/2
},_intersectsWithPointer:function(c){var f,a,d="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,c.top,c.height),h="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,c.left,c.width),g=d&&h;
return g?(f=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection(),this.floating?"right"===a||"down"===f?2:1:f&&("down"===f?2:1)):!1
},_intersectsWithSides:function(c){var f=this._isOverAxis(this.positionAbs.top+this.offset.click.top,c.top+c.height/2,c.height),a=this._isOverAxis(this.positionAbs.left+this.offset.click.left,c.left+c.width/2,c.width),d=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();
return this.floating&&g?"right"===g&&a||"left"===g&&!a:d&&("down"===d&&f||"up"===d&&!f)
},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;
return 0!==a&&(a>0?"down":"up")
},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;
return 0!==a&&(a>0?"right":"left")
},refresh:function(a){return this._refreshItems(a),this._setHandleClassName(),this.refreshPositions(),this
},_connectWith:function(){var a=this.options;
return a.connectWith.constructor===String?[a.connectWith]:a.connectWith
},_getItemsAsjQuery:function(t){function m(){c.push(this)
}var v,f,d,u,c=[],p=[],g=this._connectWith();
if(g&&t){for(v=g.length-1;
v>=0;
v--){for(d=k(g[v],this.document[0]),f=d.length-1;
f>=0;
f--){u=k.data(d[f],this.widgetFullName),u&&u!==this&&!u.options.disabled&&p.push([k.isFunction(u.options.items)?u.options.items.call(u.element):k(u.options.items,u.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),u])
}}}for(p.push([k.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):k(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),v=p.length-1;
v>=0;
v--){p[v][0].each(m)
}return k(c)
},_removeCurrentsFromItems:function(){var a=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=k.grep(this.items,function(d){for(var c=0;
a.length>c;
c++){if(a[c]===d.item[0]){return !1
}}return !0
})
},_refreshItems:function(L){this.items=[],this.containers=[this];
var t,Q,m,g,O,f,v,p,N=this.items,P=[[k.isFunction(this.options.items)?this.options.items.call(this.element[0],L,{item:this.currentItem}):k(this.options.items,this.element),this]],M=this._connectWith();
if(M&&this.ready){for(t=M.length-1;
t>=0;
t--){for(m=k(M[t],this.document[0]),Q=m.length-1;
Q>=0;
Q--){g=k.data(m[Q],this.widgetFullName),g&&g!==this&&!g.options.disabled&&(P.push([k.isFunction(g.options.items)?g.options.items.call(g.element[0],L,{item:this.currentItem}):k(g.options.items,g.element),g]),this.containers.push(g))
}}}for(t=P.length-1;
t>=0;
t--){for(O=P[t][1],f=P[t][0],Q=0,p=f.length;
p>Q;
Q++){v=k(f[Q]),v.data(this.widgetName+"-item",O),N.push({item:v,instance:O,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(d){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());
var a,c,g,f;
for(a=this.items.length-1;
a>=0;
a--){c=this.items[a],c.instance!==this.currentContainer&&this.currentContainer&&c.item[0]!==this.currentItem[0]||(g=this.options.toleranceElement?k(this.options.toleranceElement,c.item):c.item,d||(c.width=g.outerWidth(),c.height=g.outerHeight()),f=g.offset(),c.left=f.left,c.top=f.top)
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(a=this.containers.length-1;
a>=0;
a--){f=this.containers[a].element.offset(),this.containers[a].containerCache.left=f.left,this.containers[a].containerCache.top=f.top,this.containers[a].containerCache.width=this.containers[a].element.outerWidth(),this.containers[a].containerCache.height=this.containers[a].element.outerHeight()
}}return this
},_createPlaceholder:function(d){d=d||this;
var a,c=d.options;
c.placeholder&&c.placeholder.constructor!==String||(a=c.placeholder,c.placeholder={element:function(){var e=d.currentItem[0].nodeName.toLowerCase(),f=k("<"+e+">",d.document[0]);
return d._addClass(f,"ui-sortable-placeholder",a||d.currentItem[0].className)._removeClass(f,"ui-sortable-helper"),"tbody"===e?d._createTrPlaceholder(d.currentItem.find("tr").eq(0),k("<tr>",d.document[0]).appendTo(f)):"tr"===e?d._createTrPlaceholder(d.currentItem,f):"img"===e&&f.attr("src",d.currentItem.attr("src")),a||f.css("visibility","hidden"),f
},update:function(e,f){(!a||c.forcePlaceholderSize)&&(f.height()||f.height(d.currentItem.innerHeight()-parseInt(d.currentItem.css("paddingTop")||0,10)-parseInt(d.currentItem.css("paddingBottom")||0,10)),f.width()||f.width(d.currentItem.innerWidth()-parseInt(d.currentItem.css("paddingLeft")||0,10)-parseInt(d.currentItem.css("paddingRight")||0,10)))
}}),d.placeholder=k(c.placeholder.element.call(d.element,d.currentItem)),d.currentItem.after(d.placeholder),c.placeholder.update(d,d.placeholder)
},_createTrPlaceholder:function(d,a){var c=this;
d.children().each(function(){k("<td>&#160;</td>",c.document[0]).attr("colspan",k(this).attr("colspan")||1).appendTo(a)
})
},_contactContainers:function(N){var L,S,t,m,Q,f,M,v,P,R,O=null,g=null;
for(L=this.containers.length-1;
L>=0;
L--){if(!k.contains(this.currentItem[0],this.containers[L].element[0])){if(this._intersectsWith(this.containers[L].containerCache)){if(O&&k.contains(this.containers[L].element[0],O.element[0])){continue
}O=this.containers[L],g=L
}else{this.containers[L].containerCache.over&&(this.containers[L]._trigger("out",N,this._uiHash(this)),this.containers[L].containerCache.over=0)
}}}if(O){if(1===this.containers.length){this.containers[g].containerCache.over||(this.containers[g]._trigger("over",N,this._uiHash(this)),this.containers[g].containerCache.over=1)
}else{for(t=10000,m=null,P=O.floating||this._isFloating(this.currentItem),Q=P?"left":"top",f=P?"width":"height",R=P?"pageX":"pageY",S=this.items.length-1;
S>=0;
S--){k.contains(this.containers[g].element[0],this.items[S].item[0])&&this.items[S].item[0]!==this.currentItem[0]&&(M=this.items[S].item.offset()[Q],v=!1,N[R]-M>this.items[S][f]/2&&(v=!0),t>Math.abs(N[R]-M)&&(t=Math.abs(N[R]-M),m=this.items[S],this.direction=v?"up":"down"))
}if(!m&&!this.options.dropOnEmpty){return
}if(this.currentContainer===this.containers[g]){return this.currentContainer.containerCache.over||(this.containers[g]._trigger("over",N,this._uiHash()),this.currentContainer.containerCache.over=1),void 0
}m?this._rearrange(N,m,null,!0):this._rearrange(N,null,this.containers[g].element,!0),this._trigger("change",N,this._uiHash()),this.containers[g]._trigger("change",N,this._uiHash(this)),this.currentContainer=this.containers[g],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[g]._trigger("over",N,this._uiHash(this)),this.containers[g].containerCache.over=1
}}},_createHelper:function(d){var a=this.options,c=k.isFunction(a.helper)?k(a.helper.apply(this.element[0],[d,this.currentItem])):"clone"===a.helper?this.currentItem.clone():this.currentItem;
return c.parents("body").length||k("parent"!==a.appendTo?a.appendTo:this.currentItem[0].parentNode)[0].appendChild(c[0]),c[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!c[0].style.width||a.forceHelperSize)&&c.width(this.currentItem.width()),(!c[0].style.height||a.forceHelperSize)&&c.height(this.currentItem.height()),c
},_adjustOffsetFromHelper:function(a){"string"==typeof a&&(a=a.split(" ")),k.isArray(a)&&(a={left:+a[0],top:+a[1]||0}),"left" in a&&(this.offset.click.left=a.left+this.margins.left),"right" in a&&(this.offset.click.left=this.helperProportions.width-a.right+this.margins.left),"top" in a&&(this.offset.click.top=a.top+this.margins.top),"bottom" in a&&(this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top)
},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var a=this.offsetParent.offset();
return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&k.contains(this.scrollParent[0],this.offsetParent[0])&&(a.left+=this.scrollParent.scrollLeft(),a.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&k.ui.ie)&&(a={top:0,left:0}),{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if("relative"===this.cssPosition){var a=this.currentItem.position();
return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}return{top:0,left:0}
},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var d,a,c,f=this.options;
"parent"===f.containment&&(f.containment=this.helper[0].parentNode),("document"===f.containment||"window"===f.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===f.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===f.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(f.containment)||(d=k(f.containment)[0],a=k(f.containment).offset(),c="hidden"!==k(d).css("overflow"),this.containment=[a.left+(parseInt(k(d).css("borderLeftWidth"),10)||0)+(parseInt(k(d).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(k(d).css("borderTopWidth"),10)||0)+(parseInt(k(d).css("paddingTop"),10)||0)-this.margins.top,a.left+(c?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(k(d).css("borderLeftWidth"),10)||0)-(parseInt(k(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,a.top+(c?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(k(d).css("borderTopWidth"),10)||0)-(parseInt(k(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])
},_convertPositionTo:function(d,a){a||(a=this.position);
var c="absolute"===d?1:-1,g="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&k.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,f=/(html|body)/i.test(g[0].tagName);
return{top:a.top+this.offset.relative.top*c+this.offset.parent.top*c-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():f?0:g.scrollTop())*c,left:a.left+this.offset.relative.left*c+this.offset.parent.left*c-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():f?0:g.scrollLeft())*c}
},_generatePosition:function(m){var d,g,t=this.options,p=m.pageX,c=m.pageY,l="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&k.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,f=/(html|body)/i.test(l[0].tagName);
return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(m.pageX-this.offset.click.left<this.containment[0]&&(p=this.containment[0]+this.offset.click.left),m.pageY-this.offset.click.top<this.containment[1]&&(c=this.containment[1]+this.offset.click.top),m.pageX-this.offset.click.left>this.containment[2]&&(p=this.containment[2]+this.offset.click.left),m.pageY-this.offset.click.top>this.containment[3]&&(c=this.containment[3]+this.offset.click.top)),t.grid&&(d=this.originalPageY+Math.round((c-this.originalPageY)/t.grid[1])*t.grid[1],c=this.containment?d-this.offset.click.top>=this.containment[1]&&d-this.offset.click.top<=this.containment[3]?d:d-this.offset.click.top>=this.containment[1]?d-t.grid[1]:d+t.grid[1]:d,g=this.originalPageX+Math.round((p-this.originalPageX)/t.grid[0])*t.grid[0],p=this.containment?g-this.offset.click.left>=this.containment[0]&&g-this.offset.click.left<=this.containment[2]?g:g-this.offset.click.left>=this.containment[0]?g-t.grid[0]:g+t.grid[0]:g)),{top:c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():f?0:l.scrollTop()),left:p-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():f?0:l.scrollLeft())}
},_rearrange:function(c,f,a,d){a?a[0].appendChild(this.placeholder[0]):f.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?f.item[0]:f.item[0].nextSibling),this.counter=this.counter?++this.counter:1;
var g=this.counter;
this._delay(function(){g===this.counter&&this.refreshPositions(!d)
})
},_clear:function(c,f){function a(l,m,h){return function(e){h._trigger(l,e,m._uiHash(m))
}
}this.reverting=!1;
var d,g=[];
if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(d in this._storedCSS){("auto"===this._storedCSS[d]||"static"===this._storedCSS[d])&&(this._storedCSS[d]="")
}this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")
}else{this.currentItem.show()
}for(this.fromOutside&&!f&&g.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))
}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||f||g.push(function(e){this._trigger("update",e,this._uiHash())
}),this!==this.currentContainer&&(f||(g.push(function(e){this._trigger("remove",e,this._uiHash())
}),g.push(function(e){return function(h){e._trigger("receive",h,this._uiHash(this))
}
}.call(this,this.currentContainer)),g.push(function(e){return function(h){e._trigger("update",h,this._uiHash(this))
}
}.call(this,this.currentContainer)))),d=this.containers.length-1;
d>=0;
d--){f||g.push(a("deactivate",this,this.containers[d])),this.containers[d].containerCache.over&&(g.push(a("out",this,this.containers[d])),this.containers[d].containerCache.over=0)
}if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,f||this._trigger("beforeStop",c,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!f){for(d=0;
g.length>d;
d++){g[d].call(this,c)
}this._trigger("stop",c,this._uiHash())
}return this.fromOutside=!1,!this.cancelHelperRemoval
},_trigger:function(){k.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()
},_uiHash:function(c){var a=c||this;
return{helper:a.helper,placeholder:a.placeholder||k([]),position:a.position,originalPosition:a.originalPosition,offset:a.positionAbs,item:a.currentItem,sender:c?c.element:null}
}}),k.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_getCreateOptions:function(){var c=this._super(),a=this.element;
return k.each(["min","max","step"],function(d,e){var f=a.attr(e);
null!=f&&f.length&&(c[e]=f)
}),c
},_events:{keydown:function(a){this._start(a)&&this._keydown(a)&&a.preventDefault()
},keyup:"_stop",focus:function(){this.previous=this.element.val()
},blur:function(a){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",a),void 0)
},mousewheel:function(a,c){if(c){if(!this.spinning&&!this._start(a)){return !1
}this._spin((c>0?1:-1)*this.options.step,a),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(a)
},100),a.preventDefault()
}},"mousedown .ui-spinner-button":function(d){function a(){var f=this.element[0]===k.ui.safeActiveElement(this.document[0]);
f||(this.element.trigger("focus"),this.previous=c,this._delay(function(){this.previous=c
}))
}var c;
c=this.element[0]===k.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),d.preventDefault(),a.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,a.call(this)
}),this._start(d)!==!1&&this._repeat(null,k(d.currentTarget).hasClass("ui-spinner-up")?1:-1,d)
},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(a){return k(a.currentTarget).hasClass("ui-state-active")?this._start(a)===!1?!1:(this._repeat(null,k(a.currentTarget).hasClass("ui-spinner-up")?1:-1,a),void 0):void 0
},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")
},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(0.5*this.uiSpinner.height())&&this.uiSpinner.height()>0&&this.uiSpinner.height(this.uiSpinner.height())
},_keydown:function(d){var a=this.options,c=k.ui.keyCode;
switch(d.keyCode){case c.UP:return this._repeat(null,1,d),!0;
case c.DOWN:return this._repeat(null,-1,d),!0;
case c.PAGE_UP:return this._repeat(null,a.page,d),!0;
case c.PAGE_DOWN:return this._repeat(null,-a.page,d),!0
}return !1
},_start:function(a){return this.spinning||this._trigger("start",a)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1
},_repeat:function(c,d,a){c=c||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,d,a)
},c),this._spin(d*this.options.step,a)
},_spin:function(c,d){var a=this.value()||0;
this.counter||(this.counter=1),a=this._adjustValue(a+c*this._increment(this.counter)),this.spinning&&this._trigger("spin",d,{value:a})===!1||(this._value(a),this.counter++)
},_increment:function(c){var a=this.options.incremental;
return a?k.isFunction(a)?a(c):Math.floor(c*c*c/50000-c*c/500+17*c/200+1):1
},_precision:function(){var a=this._precisionOf(this.options.step);
return null!==this.options.min&&(a=Math.max(a,this._precisionOf(this.options.min))),a
},_precisionOf:function(c){var d=""+c,a=d.indexOf(".");
return -1===a?0:d.length-a-1
},_adjustValue:function(c){var f,a,d=this.options;
return f=null!==d.min?d.min:0,a=c-f,a=Math.round(a/d.step)*d.step,c=f+a,c=parseFloat(c.toFixed(this._precision())),null!==d.max&&c>d.max?d.max:null!==d.min&&d.min>c?d.min:c
},_stop:function(a){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",a))
},_setOption:function(c,f){var a,d,g;
return"culture"===c||"numberFormat"===c?(a=this._parse(this.element.val()),this.options[c]=f,this.element.val(this._format(a)),void 0):(("max"===c||"min"===c||"step"===c)&&"string"==typeof f&&(f=this._parse(f)),"icons"===c&&(d=this.buttons.first().find(".ui-icon"),this._removeClass(d,null,this.options.icons.up),this._addClass(d,null,f.up),g=this.buttons.last().find(".ui-icon"),this._removeClass(g,null,this.options.icons.down),this._addClass(g,null,f.down)),this._super(c,f),void 0)
},_setOptionDisabled:function(a){this._super(a),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!a),this.element.prop("disabled",!!a),this.buttons.button(a?"disable":"enable")
},_setOptions:w(function(a){this._super(a)
}),_parse:function(a){return"string"==typeof a&&""!==a&&(a=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(a,10,this.options.culture):+a),""===a||isNaN(a)?null:a
},_format:function(a){return""===a?"":window.Globalize&&this.options.numberFormat?Globalize.format(a,this.options.numberFormat,this.options.culture):a
},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})
},isValid:function(){var a=this.value();
return null===a?!1:a===this._adjustValue(a)
},_value:function(c,d){var a;
""!==c&&(a=this._parse(c),null!==a&&(d||(a=this._adjustValue(a)),c=this._format(a))),this.element.val(c),this._refresh()
},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)
},stepUp:w(function(a){this._stepUp(a)
}),_stepUp:function(a){this._start()&&(this._spin((a||1)*this.options.step),this._stop())
},stepDown:w(function(a){this._stepDown(a)
}),_stepDown:function(a){this._start()&&(this._spin((a||1)*-this.options.step),this._stop())
},pageUp:w(function(a){this._stepUp((a||1)*this.options.page)
}),pageDown:w(function(a){this._stepDown((a||1)*this.options.page)
}),value:function(a){return arguments.length?(w(this._value).call(this,a),void 0):this._parse(this.element.val())
},widget:function(){return this.uiSpinner
}}),k.uiBackCompat!==!1&&k.widget("ui.spinner",k.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
},_uiSpinnerHtml:function(){return"<span>"
},_buttonHtml:function(){return"<a></a><a></a>"
}}),k.ui.spinner,k.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var a=/#.*$/;
return function(f){var c,d;
c=f.href.replace(a,""),d=location.href.replace(a,"");
try{c=decodeURIComponent(c)
}catch(g){}try{d=decodeURIComponent(d)
}catch(g){}return f.hash.length>1&&c===d
}
}(),_create:function(){var c=this,a=this.options;
this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,a.collapsible),this._processTabs(),a.active=this._initialActive(),k.isArray(a.disabled)&&(a.disabled=k.unique(a.disabled.concat(k.map(this.tabs.filter(".ui-state-disabled"),function(d){return c.tabs.index(d)
}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(a.active):k(),this._refresh(),this.active.length&&this.load(a.active)
},_initialActive:function(){var d=this.options.active,a=this.options.collapsible,c=location.hash.substring(1);
return null===d&&(c&&this.tabs.each(function(e,f){return k(f).attr("aria-controls")===c?(d=e,!1):void 0
}),null===d&&(d=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===d||-1===d)&&(d=this.tabs.length?0:!1)),d!==!1&&(d=this.tabs.index(this.tabs.eq(d)),-1===d&&(d=a?!1:0)),!a&&d===!1&&this.anchors.length&&(d=0),d
},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):k()}
},_tabKeydown:function(d){var a=k(k.ui.safeActiveElement(this.document[0])).closest("li"),c=this.tabs.index(a),f=!0;
if(!this._handlePageNav(d)){switch(d.keyCode){case k.ui.keyCode.RIGHT:case k.ui.keyCode.DOWN:c++;
break;
case k.ui.keyCode.UP:case k.ui.keyCode.LEFT:f=!1,c--;
break;
case k.ui.keyCode.END:c=this.anchors.length-1;
break;
case k.ui.keyCode.HOME:c=0;
break;
case k.ui.keyCode.SPACE:return d.preventDefault(),clearTimeout(this.activating),this._activate(c),void 0;
case k.ui.keyCode.ENTER:return d.preventDefault(),clearTimeout(this.activating),this._activate(c===this.options.active?!1:c),void 0;
default:return
}d.preventDefault(),clearTimeout(this.activating),c=this._focusNextTab(c,f),d.ctrlKey||d.metaKey||(a.attr("aria-selected","false"),this.tabs.eq(c).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",c)
},this.delay))
}},_panelKeydown:function(a){this._handlePageNav(a)||a.ctrlKey&&a.keyCode===k.ui.keyCode.UP&&(a.preventDefault(),this.active.trigger("focus"))
},_handlePageNav:function(a){return a.altKey&&a.keyCode===k.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):a.altKey&&a.keyCode===k.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0
},_findNextTab:function(d,a){function c(){return d>f&&(d=0),0>d&&(d=f),d
}for(var f=this.tabs.length-1;
-1!==k.inArray(c(),this.options.disabled);
){d=a?d+1:d-1
}return d
},_focusNextTab:function(a,c){return a=this._findNextTab(a,c),this.tabs.eq(a).trigger("focus"),a
},_setOption:function(a,c){return"active"===a?(this._activate(c),void 0):(this._super(a,c),"collapsible"===a&&(this._toggleClass("ui-tabs-collapsible",null,c),c||this.options.active!==!1||this._activate(0)),"event"===a&&this._setupEvents(c),"heightStyle"===a&&this._setupHeightStyle(c),void 0)
},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""
},refresh:function(){var c=this.options,a=this.tablist.children(":has(a[href])");
c.disabled=k.map(a.filter(".ui-state-disabled"),function(d){return a.index(d)
}),this._processTabs(),c.active!==!1&&this.anchors.length?this.active.length&&!k.contains(this.tablist[0],this.active[0])?this.tabs.length===c.disabled.length?(c.active=!1,this.active=k()):this._activate(this._findNextTab(Math.max(0,c.active-1),!1)):c.active=this.tabs.index(this.active):(c.active=!1,this.active=k()),this._refresh()
},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)
},_processTabs:function(){var d=this,a=this.tabs,c=this.anchors,f=this.panels;
this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"> li",function(g){k(this).is(".ui-state-disabled")&&g.preventDefault()
}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){k(this).closest("li").is(".ui-state-disabled")&&this.blur()
}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return k("a",this)[0]
}).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=k(),this.anchors.each(function(m,t){var L,v,g,u=k(t).uniqueId().attr("id"),p=k(t).closest("li"),e=p.attr("aria-controls");
d._isLocal(t)?(L=t.hash,g=L.substring(1),v=d.element.find(d._sanitizeSelector(L))):(g=p.attr("aria-controls")||k({}).uniqueId()[0].id,L="#"+g,v=d.element.find(L),v.length||(v=d._createPanel(g),v.insertAfter(d.panels[m-1]||d.tablist)),v.attr("aria-live","polite")),v.length&&(d.panels=d.panels.add(v)),e&&p.data("ui-tabs-aria-controls",e),p.attr({"aria-controls":g,"aria-labelledby":u}),v.attr("aria-labelledby",u)
}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),a&&(this._off(a.not(this.tabs)),this._off(c.not(this.anchors)),this._off(f.not(this.panels)))
},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)
},_createPanel:function(a){return k("<div>").attr("id",a).data("ui-tabs-destroy",!0)
},_setOptionDisabled:function(d){var a,c,f;
for(k.isArray(d)&&(d.length?d.length===this.anchors.length&&(d=!0):d=!1),f=0;
c=this.tabs[f];
f++){a=k(c),d===!0||-1!==k.inArray(f,d)?(a.attr("aria-disabled","true"),this._addClass(a,null,"ui-state-disabled")):(a.removeAttr("aria-disabled"),this._removeClass(a,null,"ui-state-disabled"))
}this.options.disabled=d,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,d===!0)
},_setupEvents:function(c){var a={};
c&&k.each(c.split(" "),function(d,f){a[f]="_eventHandler"
}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(d){d.preventDefault()
}}),this._on(this.anchors,a),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)
},_setupHeightStyle:function(d){var a,c=this.element.parent();
"fill"===d?(a=c.height(),a-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var g=k(this),f=g.css("position");
"absolute"!==f&&"fixed"!==f&&(a-=g.outerHeight(!0))
}),this.element.children().not(this.panels).each(function(){a-=k(this).outerHeight(!0)
}),this.panels.each(function(){k(this).height(Math.max(0,a-k(this).innerHeight()+k(this).height()))
}).css("overflow","auto")):"auto"===d&&(a=0,this.panels.each(function(){a=Math.max(a,k(this).height("").height())
}).height(a))
},_eventHandler:function(u){var p=this.options,M=this.active,g=k(u.currentTarget),f=g.closest("li"),L=f[0]===M[0],d=L&&p.collapsible,t=d?k():this._getPanelForTab(f),m=M.length?this._getPanelForTab(M):k(),v={oldTab:M,oldPanel:m,newTab:d?k():f,newPanel:t};
u.preventDefault(),f.hasClass("ui-state-disabled")||f.hasClass("ui-tabs-loading")||this.running||L&&!p.collapsible||this._trigger("beforeActivate",u,v)===!1||(p.active=d?!1:this.tabs.index(f),this.active=L?k():f,this.xhr&&this.xhr.abort(),m.length||t.length||k.error("jQuery UI Tabs: Mismatching fragment identifier."),t.length&&this.load(this.tabs.index(f),u),this._toggle(u,v))
},_toggle:function(h,d){function f(){l.running=!1,l._trigger("activate",h,d)
}function m(){l._addClass(d.newTab.closest("li"),"ui-tabs-active","ui-state-active"),c.length&&l.options.show?l._show(c,l.options.show,f):(c.show(),f())
}var l=this,c=d.newPanel,g=d.oldPanel;
this.running=!0,g.length&&this.options.hide?this._hide(g,this.options.hide,function(){l._removeClass(d.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),m()
}):(this._removeClass(d.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),g.hide(),m()),g.attr("aria-hidden","true"),d.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),c.length&&g.length?d.oldTab.attr("tabIndex",-1):c.length&&this.tabs.filter(function(){return 0===k(this).attr("tabIndex")
}).attr("tabIndex",-1),c.attr("aria-hidden","false"),d.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})
},_activate:function(d){var a,c=this._findActive(d);
c[0]!==this.active[0]&&(c.length||(c=this.active),a=c.find(".ui-tabs-anchor")[0],this._eventHandler({target:a,currentTarget:a,preventDefault:k.noop}))
},_findActive:function(a){return a===!1?k():this.tabs.eq(a)
},_getIndex:function(a){return"string"==typeof a&&(a=this.anchors.index(this.anchors.filter("[href$='"+k.ui.escapeSelector(a)+"']"))),a
},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){k.data(this,"ui-tabs-destroy")?k(this).remove():k(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
}),this.tabs.each(function(){var c=k(this),a=c.data("ui-tabs-aria-controls");
a?c.attr("aria-controls",a).removeData("ui-tabs-aria-controls"):c.removeAttr("aria-controls")
}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")
},enable:function(c){var a=this.options.disabled;
a!==!1&&(void 0===c?a=!1:(c=this._getIndex(c),a=k.isArray(a)?k.map(a,function(d){return d!==c?d:null
}):k.map(this.tabs,function(e,d){return d!==c?d:null
})),this._setOptionDisabled(a))
},disable:function(c){var a=this.options.disabled;
if(a!==!0){if(void 0===c){a=!0
}else{if(c=this._getIndex(c),-1!==k.inArray(c,a)){return
}a=k.isArray(a)?k.merge([c],a).sort():[c]
}this._setOptionDisabled(a)
}},load:function(m,d){m=this._getIndex(m);
var g=this,t=this.tabs.eq(m),p=t.find(".ui-tabs-anchor"),c=this._getPanelForTab(t),l={tab:t,panel:c},f=function(a,h){"abort"===h&&g.panels.stop(!1,!0),g._removeClass(t,"ui-tabs-loading"),c.removeAttr("aria-busy"),a===g.xhr&&delete g.xhr
};
this._isLocal(p[0])||(this.xhr=k.ajax(this._ajaxSettings(p,d,l)),this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(t,"ui-tabs-loading"),c.attr("aria-busy","true"),this.xhr.done(function(a,h,i){setTimeout(function(){c.html(a),g._trigger("load",d,l),f(i,h)
},1)
}).fail(function(a,h){setTimeout(function(){f(a,h)
},1)
})))
},_ajaxSettings:function(d,a,c){var f=this;
return{url:d.attr("href").replace(/#.*$/,""),beforeSend:function(g,h){return f._trigger("beforeLoad",a,k.extend({jqXHR:g,ajaxSettings:h},c))
}}
},_getPanelForTab:function(c){var a=k(c).attr("aria-controls");
return this.element.find(this._sanitizeSelector("#"+a))
}}),k.uiBackCompat!==!1&&k.widget("ui.tabs",k.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")
}}),k.ui.tabs,k.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var a=k(this).attr("title")||"";
return k("<a>").text(a).html()
},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(d,a){var c=(d.attr("aria-describedby")||"").split(/\s+/);
c.push(a),d.data("ui-tooltip-id",a).attr("aria-describedby",k.trim(c.join(" ")))
},_removeDescribedBy:function(d){var a=d.data("ui-tooltip-id"),c=(d.attr("aria-describedby")||"").split(/\s+/),f=k.inArray(a,c);
-1!==f&&c.splice(f,1),d.removeData("ui-tooltip-id"),c=k.trim(c.join(" ")),c?d.attr("aria-describedby",c):d.removeAttr("aria-describedby")
},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=k("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=k([])
},_setOption:function(d,a){var c=this;
this._super(d,a),"content"===d&&k.each(this.tooltips,function(f,g){c._updateContent(g.element)
})
},_setOptionDisabled:function(a){this[a?"_disable":"_enable"]()
},_disable:function(){var a=this;
k.each(this.tooltips,function(c,d){var e=k.Event("blur");
e.target=e.currentTarget=d.element[0],a.close(e,!0)
}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var c=k(this);
return c.is("[title]")?c.data("ui-tooltip-title",c.attr("title")).removeAttr("title"):void 0
}))
},_enable:function(){this.disabledTitles.each(function(){var a=k(this);
a.data("ui-tooltip-title")&&a.attr("title",a.data("ui-tooltip-title"))
}),this.disabledTitles=k([])
},open:function(d){var a=this,c=k(d?d.target:this.element).closest(this.options.items);
c.length&&!c.data("ui-tooltip-id")&&(c.attr("title")&&c.data("ui-tooltip-title",c.attr("title")),c.data("ui-tooltip-open",!0),d&&"mouseover"===d.type&&c.parents().each(function(){var g,f=k(this);
f.data("ui-tooltip-open")&&(g=k.Event("blur"),g.target=g.currentTarget=this,a.close(g,!0)),f.attr("title")&&(f.uniqueId(),a.parents[this.id]={element:this,title:f.attr("title")},f.attr("title",""))
}),this._registerCloseHandlers(d,c),this._updateContent(c,d))
},_updateContent:function(c,f){var a,d=this.options.content,h=this,g=f?f.type:null;
return"string"==typeof d||d.nodeType||d.jquery?this._open(f,c,d):(a=d.call(c[0],function(e){h._delay(function(){c.data("ui-tooltip-open")&&(f&&(f.type=g),this._open(f,c,e))
})
}),a&&this._open(f,c,a),void 0)
},_open:function(t,m,v){function f(a){g.of=a,u.is(":hidden")||u.position(g)
}var d,u,c,p,g=k.extend({},this.options.position);
if(v){if(d=this._find(m)){return d.tooltip.find(".ui-tooltip-content").html(v),void 0
}m.is("[title]")&&(t&&"mouseover"===t.type?m.attr("title",""):m.removeAttr("title")),d=this._tooltip(m),u=d.tooltip,this._addDescribedBy(m,u.attr("id")),u.find(".ui-tooltip-content").html(v),this.liveRegion.children().hide(),p=k("<div>").html(u.find(".ui-tooltip-content").html()),p.removeAttr("name").find("[name]").removeAttr("name"),p.removeAttr("id").find("[id]").removeAttr("id"),p.appendTo(this.liveRegion),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:f}),f(t)):u.position(k.extend({of:m},this.options.position)),u.hide(),this._show(u,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(c=this.delayedShow=setInterval(function(){u.is(":visible")&&(f(g.of),clearInterval(c))
},k.fx.interval)),this._trigger("open",t,{tooltip:u})
}},_registerCloseHandlers:function(d,a){var c={keyup:function(g){if(g.keyCode===k.ui.keyCode.ESCAPE){var f=k.Event(g);
f.currentTarget=a[0],this.close(f,!0)
}}};
a[0]!==this.element[0]&&(c.remove=function(){this._removeTooltip(this._find(a).tooltip)
}),d&&"mouseover"!==d.type||(c.mouseleave="close"),d&&"focusin"!==d.type||(c.focusout="close"),this._on(!0,a,c)
},close:function(d){var a,c=this,g=k(d?d.currentTarget:this.element),f=this._find(g);
return f?(a=f.tooltip,f.closing||(clearInterval(this.delayedShow),g.data("ui-tooltip-title")&&!g.attr("title")&&g.attr("title",g.data("ui-tooltip-title")),this._removeDescribedBy(g),f.hiding=!0,a.stop(!0),this._hide(a,this.options.hide,function(){c._removeTooltip(k(this))
}),g.removeData("ui-tooltip-open"),this._off(g,"mouseleave focusout keyup"),g[0]!==this.element[0]&&this._off(g,"remove"),this._off(this.document,"mousemove"),d&&"mouseleave"===d.type&&k.each(this.parents,function(l,h){k(h.element).attr("title",h.title),delete c.parents[l]
}),f.closing=!0,this._trigger("close",d,{tooltip:a}),f.hiding||(f.closing=!1)),void 0):(g.removeData("ui-tooltip-open"),void 0)
},_tooltip:function(d){var a=k("<div>").attr("role","tooltip"),c=k("<div>").appendTo(a),f=a.uniqueId().attr("id");
return this._addClass(c,"ui-tooltip-content"),this._addClass(a,"ui-tooltip","ui-widget ui-widget-content"),a.appendTo(this._appendTo(d)),this.tooltips[f]={element:d,tooltip:a}
},_find:function(a){var c=a.data("ui-tooltip-id");
return c?this.tooltips[c]:null
},_removeTooltip:function(a){a.remove(),delete this.tooltips[a.attr("id")]
},_appendTo:function(a){var c=a.closest(".ui-front, dialog");
return c.length||(c=this.document[0].body),c
},_destroy:function(){var a=this;
k.each(this.tooltips,function(c,d){var f=k.Event("blur"),e=d.element;
f.target=f.currentTarget=e[0],a.close(f,!0),k("#"+c).remove(),e.data("ui-tooltip-title")&&(e.attr("title")||e.attr("title",e.data("ui-tooltip-title")),e.removeData("ui-tooltip-title"))
}),this.liveRegion.remove()
}}),k.uiBackCompat!==!1&&k.widget("ui.tooltip",k.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var a=this._superApply(arguments);
return this.options.tooltipClass&&a.tooltip.addClass(this.options.tooltipClass),a
}}),k.ui.tooltip
});
(function(a,b){if(typeof module=="object"&&module.exports){module.exports=b()
}else{if(typeof define=="function"&&define.amd){define(b)
}else{a.Spinner=b()
}}}(this,function(){var e=["webkit","Moz","ms","O"],o={},n,i;
function g(p,s){var q=document.createElement(p||"div"),r;
for(r in s){q[r]=s[r]
}return q
}function h(q){for(var p=1,r=arguments.length;
p<r;
p++){q.appendChild(arguments[p])
}return q
}function c(t,p,u,x){var q=["opacity",p,~~(t*100),u,x].join("-"),r=0.01+u/x*100,w=Math.max(1-(1-t)/p*(100-r),t),v=n.substring(0,n.indexOf("Animation")).toLowerCase(),s=v&&"-"+v+"-"||"";
if(!o[q]){i.insertRule("@"+s+"keyframes "+q+"{0%{opacity:"+w+"}"+r+"%{opacity:"+t+"}"+(r+0.01)+"%{opacity:1}"+(r+p)%100+"%{opacity:"+t+"}100%{opacity:"+w+"}}",i.cssRules.length);
o[q]=1
}return q
}function l(t,u){var r=t.style,p,q;
u=u.charAt(0).toUpperCase()+u.slice(1);
if(r[u]!==undefined){return u
}for(q=0;
q<e.length;
q++){p=e[q]+u;
if(r[p]!==undefined){return p
}}}function f(p,r){for(var q in r){p.style[l(p,q)||q]=r[q]
}return p
}function j(r){for(var p=1;
p<arguments.length;
p++){var q=arguments[p];
for(var s in q){if(r[s]===undefined){r[s]=q[s]
}}}return r
}function m(q,p){return typeof q=="string"?q:q[p%q.length]
}var d={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",opacity:1/4,rotate:0,direction:1,speed:1,trail:100,fps:20,zIndex:2000000000,className:"spinner",top:"50%",left:"50%",shadow:false,hwaccel:false,position:"absolute"};
function b(p){this.opts=j(p||{},b.defaults,d)
}b.defaults={};
j(b.prototype,{spin:function(y){this.stop();
var A=this,q=A.opts,r=A.el=g(null,{className:q.className});
f(r,{position:q.position,width:0,zIndex:q.zIndex,left:q.left,top:q.top});
if(y){y.insertBefore(r,y.firstChild||null)
}r.setAttribute("role","progressbar");
A.lines(r,A.opts);
if(!n){var v=0,p=(q.lines-1)*(1-q.direction)/2,u,s=q.fps,x=s/q.speed,w=(1-q.opacity)/(x*q.trail/100),z=x/q.lines;
(function t(){v++;
for(var B=0;
B<q.lines;
B++){u=Math.max(1-(v+(q.lines-B)*z)%x*w,q.opacity);
A.opacity(r,B*q.direction+p,u,q)
}A.timeout=A.el&&setTimeout(t,~~(1000/s))
})()
}return A
},stop:function(){var p=this.el;
if(p){clearTimeout(this.timeout);
if(p.parentNode){p.parentNode.removeChild(p)
}this.el=undefined
}return this
},lines:function(r,t){var q=0,u=(t.lines-1)*(1-t.direction)/2,p;
function s(v,w){return f(g(),{position:"absolute",width:t.scale*(t.length+t.width)+"px",height:t.scale*t.width+"px",background:v,boxShadow:w,transformOrigin:"left",transform:"rotate("+~~(360/t.lines*q+t.rotate)+"deg) translate("+t.scale*t.radius+"px,0)",borderRadius:(t.corners*t.scale*t.width>>1)+"px"})
}for(;
q<t.lines;
q++){p=f(g(),{position:"absolute",top:1+~(t.scale*t.width/2)+"px",transform:t.hwaccel?"translate3d(0,0,0)":"",opacity:t.opacity,animation:n&&c(t.opacity,t.trail,u+q*t.direction,t.lines)+" "+1/t.speed+"s linear infinite"});
if(t.shadow){h(p,f(s("#000","0 0 4px #000"),{top:"2px"}))
}h(r,h(p,s(m(t.color,q),"0 0 1px rgba(0,0,0,.1)")))
}return r
},opacity:function(q,p,r){if(p<q.childNodes.length){q.childNodes[p].style.opacity=r
}}});
function k(){function p(r,q){return g("<"+r+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',q)
}i.addRule(".spin-vml","behavior:url(#default#VML)");
b.prototype.lines=function(u,t){var q=t.scale*(t.length+t.width),A=t.scale*2*q;
function z(){return f(p("group",{coordsize:A+" "+A,coordorigin:-q+" "+-q}),{width:A,height:A})
}var v=-(t.width+t.length)*t.scale*2+"px",y=f(z(),{position:"absolute",top:v,left:v}),x;
function w(s,r,B){h(y,h(f(z(),{rotation:360/t.lines*s+"deg",left:~~r}),h(f(p("roundrect",{arcsize:t.corners}),{width:q,height:t.scale*t.width,left:t.scale*t.radius,top:-t.scale*t.width>>1,filter:B}),p("fill",{color:m(t.color,s),opacity:t.opacity}),p("stroke",{opacity:0}))))
}if(t.shadow){for(x=1;
x<=t.lines;
x++){w(x,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)")
}}for(x=1;
x<=t.lines;
x++){w(x)
}return h(u,y)
};
b.prototype.opacity=function(r,q,t,s){var u=r.firstChild;
s=s.shadow&&s.lines||0;
if(u&&q+s<u.childNodes.length){u=u.childNodes[q+s];
u=u&&u.firstChild;
u=u&&u.firstChild;
if(u){u.opacity=t
}}}
}if(typeof document!=="undefined"){i=(function(){var p=g("style",{type:"text/css"});
h(document.getElementsByTagName("head")[0],p);
return p.sheet||p.styleSheet
}());
var a=f(g("group"),{behavior:"url(#default#VML)"});
if(!l(a,"transform")&&a.adj){k()
}else{n=l(a,"animation")
}}return b
}));
$("body").find(".locale-selection").hide();
$(document).ready(function(){var O=false,Z=false,P=false,x=$(".menu-browse .child-page-list-level-1").css("display"),af=false;
$("body").find(".locale-selection").hide();
if($("header").css("z-index")=="253"){O=true
}if($("header").css("z-index")=="254"){Z=true
}if($("header").css("z-index")=="252"){P=true
}if($(".menu-browse .child-page-list-level-1").css("display")=="flex"){}if(x=="-webkit-box"||x=="flex"||x=="-ms-flexbox"){af=true
}function aa(){var ao=$("header .pearson-banner"),ar=$("header .search-box"),aj=ao.find(">div"),ap=aj.find(">a").attr("href"),ak=$("header > div > .parsys"),al=$("body > header"),au=al.find(".sign-in-menu");
aj.find(">a").remove();
aj.find(".pearson-banner-always-learning").remove();
ao.find('>div[role="banner"]').removeAttr("role");
al.attr("role","banner");
$("body > main").attr("id","main-content");
aj.removeClass("container");
aj.prepend('<div id="site-logo" title="Pearson logo"><a href="'+ap+'" aria-label="Pearson logo" title="Pearson logo"><em class="sr-only">Pearson<em></a></div>');
$("body > header").prepend('<div class="header"></div>');
ak.appendTo("header .header");
if($(".menu-browse").length==0){$("body > header").addClass("no-menu");
var at=$(".info-menu ul");
$("header >.header").append('<div class="menu-browse menu-browse--no-subs"> </div>');
at.clone().appendTo("header >.header .menu-browse--no-subs");
var aq=$(".menu-browse--no-subs");
aq.find("ul").addClass("child-page-list-level-1");
aq.find("li").addClass("subnav-item")
}var am=$("header > .header"),an=am.find(".locale-selection");
if(an.length>0){}if(au.length>0){au.wrap('<div class="container sign-in-container"></div>')
}al.prepend('<a href="#main-content" class="skip-the-nav">Skip to main content</a>')
}function N(){var aH=$(".menu-browse"),aI=$("body > header"),an=aH.find(".child-page-list-level-1"),aL=an.find(">li"),aj=an.find("li"),aE=window.location.pathname,al=aE.substr(0,aE.indexOf("."));
aj.addClass("subnav-item");
aH.find("ul, ol").attr("aria-hidden","true").attr("aria-expanded","false");
var aM='<span class="header-nav--toggle-mobile"><i class="header-nav--toggle-mobile-in"></i></span>';
if($(".pearson-banner").length>0){$(".pearson-banner").append(aM)
}var ap=$(".header-nav--toggle-mobile");
aH.removeClass("child-page-list");
aH.find("li > .fa").remove();
$("body").prepend('<div class="overlayShadow"></div>');
var aG=$(".overlayShadow");
function aF(){aH.find("li").removeClass("opened");
aH.find("ul, ol").removeClass("vis-hidden").attr("aria-hidden","true").attr("aria-expanded","false");
aH.removeClass("active");
ap.removeClass("opened");
aG.hide()
}ap.click(function(aN){ap.toggleClass("opened");
aH.toggleClass("active");
if(aH.hasClass("active")){aG.show()
}else{aF()
}});
$(document).mouseup(function(aN){if(!aH.is(aN.target)&&aH.has(aN.target).length===0&&(!ap.is(aN.target))&&ap.has(aN.target).length===0){aF()
}});
an.find("li > ol, li > ul").before('<a href="#" class="toggle-open" title="Open sub menu" aria-label="Open sub menu"><i class="fa"><svg xmlns="http://www.w3.org/2000/svg" viewBox="1680.3 184.3 850.6 1351.7" focusable="false"><polygon points="2357.7 688.3 2357.6 688.4 1853.5 184.3 1680.3 357.6 2184.4 861.7 1683.3 1362.7 1856.5 1536 2530.9 861.6" class="st0"/></svg></i></a>').parent().addClass("has-sub-nav");
aL.each(function(){var aQ=$(this);
if(aQ.find(">ol, >ul").length){var aN=aQ.find(">ol, >ul"),aT=aL.not(aQ),aP=aQ.find(">a"),aO=aQ.find(">.toggle-open"),aS=aP.attr("href"),aR=aS.slice(aS.lastIndexOf("/"),aS.lastIndexOf("."))
}if(al.indexOf(aR)>-1){aQ.addClass("current-item")
}aQ.click(function(){aT.find("li").removeClass("opened");
aT.find("ul, ol").removeClass("vis-hidden").attr("aria-hidden","true").attr("aria-expanded","false")
})
});
aj.each(function(){var aQ=$(this),aS=aQ.parent().parent().find(">a").not(".toggle-open").text(),aP=aQ.find(">a").not(".toggle-open").text(),aO=aQ.find(">a").not(".toggle-open").attr("href");
if(!(aO==undefined)){var aR=aO.slice(aO.lastIndexOf("/"),aO.lastIndexOf(".")),aN=aQ.find(">ol, >ul");
if(aE.indexOf(aR)>-1){aQ.addClass("current-item")
}if(al.indexOf(aR)>-1){aQ.addClass("current-item-path")
}if(aN.length>0){aN.prepend('<li class="subnav-title"><a href="'+aO+'">'+aP+"</a></li>");
if(aN.hasClass("child-page-list-level-2")){if(aE.indexOf("nl_NL")>0||aE.indexOf("nl_BE")>0){aN.prepend('<li class="back-to-prev"><a href="#" title="Back" aria-label="Back">Terug naar hoofdmenu</a></li>')
}else{aN.prepend('<li class="back-to-prev"><a href="#" title="Back" aria-label="Back">Back to main menu</a></li>')
}}if(aS.length>0){aN.prepend('<li class="back-to-prev"><a href="#" title="Back" aria-label="Back">Back to '+aS+"</a></li>")
}}}});
aj.each(function(){var aP=$(this),aQ=aP.parent();
if(aP.hasClass("current-item-path")&&aP.hasClass("current-item")){var aN=aQ.find(">.current-item-path").not(".current-item");
if(aN.length>0){aN.removeClass("current-item-path")
}}if(aP.hasClass("current-item-path")){var aO=aP.find(".child-page-list-current-page");
if(!(aO.length>0)){aP.removeClass("current-item-path")
}}});
var ak=aH.find(".toggle-open");
aL.find(">.toggle-open").addClass("top-lvl-toogle-open");
ak.each(function(){var aO=$(this),aR=aO.parent(),aS=aR.find(">a").not(".toggle-open").text(),aN=aR.parent(),aQ=aR.find(">ol, >ul"),aP=aR.find("ol, >ul");
aO.attr("aria-label","open "+aS);
aO.click(function(aT){aT.preventDefault();
if(P&&aO.hasClass("top-lvl-toogle-open")&&aN.hasClass("vis-hidden")){if(!(aR.hasClass("opened"))){aL.removeClass("opened");
aR.addClass("opened")
}else{aN.removeClass("vis-hidden");
aL.removeClass("opened");
aP.attr("aria-hidden","true").attr("aria-expanded","false");
aF()
}}else{aR.toggleClass("opened");
aN.toggleClass("vis-hidden");
if(aN.hasClass("vis-hidden")){aN.attr("aria-hidden","true").attr("aria-expanded","false");
aQ.attr("aria-hidden","false").attr("aria-expanded","true")
}else{aN.attr("aria-hidden","false").attr("aria-expanded","true");
aP.attr("aria-hidden","true").attr("aria-expanded","false")
}}})
});
var aJ=an.find(".back-to-prev");
aJ.each(function(){var aQ=$(this),aN=aQ.find(">a"),aR=aQ.parent(),aP=aR.find("li"),aO=aR.find("ol, ul");
aN.click(function(aS){aS.preventDefault();
aP.removeClass("opened");
aO.removeClass("vis-hidden");
aO.attr("aria-hidden","true").attr("aria-expanded","false");
aR.attr("aria-hidden","true").attr("aria-expanded","false");
aR.parent().removeClass("opened");
aR.parent().parent().removeClass("vis-hidden").attr("aria-hidden","false").attr("aria-expanded","true")
})
});
var aK=an.find(">li.current-item"),am=aK.find(".current-item.current-item-path");
if(am.length==0){aK.find(".current-item-path").last().addClass("current-item last-item")
}var az=aK.find(".current-item-path").not(".current-item"),aB=$(".current-item").last(),aA=an.find(".current-item-path").not(aB);
aK.find(">.toggle-open").click(function(){if(aK.hasClass("opened")){az.each(function(){$(this).addClass("opened");
$(this).find(">ol, >ul").attr("aria-hidden","false").attr("aria-expanded","true");
$(this).parent().addClass("vis-hidden")
})
}else{aK.find(">ol, >ul").attr("aria-hidden","true").attr("aria-expanded","false")
}});
ap.click(function(){aA.each(function(){$(this).addClass("opened");
$(this).find(">ol, >ul").attr("aria-hidden","false").attr("aria-expanded","true");
$(this).parent().addClass("vis-hidden")
})
});
var aD=aL.find("ol, ul"),ay=aL.find(">ol, >ul"),ax=ay.find(">li>ol, >li>ul"),aw=ax.find(">li>ol, >li>ul"),av=aw.find(">li>ol, >li>ul"),at=av.find(">li>ol, >li>ul"),ar=at.find(">li>ol, >li>ul"),ao=window.innerHeight-170,aC=window.innerWidth;
function aq(){var aO=aH.innerHeight();
if(af){var aN=aH.find(".child-page-list-level-2");
aN.css("top",aO-6)
}}setTimeout(aq,200);
aD.each(function(){var aQ=$(this),aO=aQ.height(),aP=aQ.find("ol, ul"),aS=aQ.parent().parent().parent().find(">a:not(.toggle-open)").text(),aN=aQ.parent().find(">a:not(.toggle-open)").text();
if(aO>ao){var aR=aO/ao;
if(aR>=1.1&&aR<1.4){aQ.addClass("level-divide-2")
}if(aR>=1.4&&aR<2.4){aQ.addClass("level-divide-3")
}if(aR>=2.4&&aR<3.4){aQ.addClass("level-divide-4")
}if(aR>=3.4){aQ.addClass("level-divide-5")
}}});
function au(aN){if(ay.length>0&&!(O)){aN.each(function(){var aQ=$(this);
var aP=aQ.width(),aO=aQ.offset().left;
if(aP+aO>aC){var aR=aP+aO-aC+25;
aQ.css("left",-aR)
}})
}}if(!O){au(ay);
au(ax);
au(aw);
au(av);
setTimeout(function(){au(ay)
},500);
setTimeout(function(){au(ax)
},1500);
setTimeout(function(){au(aw)
},2000);
setTimeout(function(){au(av)
},2500);
if(af){aL.each(function(){var aP=$(this),aO,aN=aP.find("ol, ul"),aQ=aP.outerWidth(),aO=aP.offset().left+aQ;
aN.each(function(){var aS=$(this),aR=aS.width(),aT=aS.offset().left;
if((aR+aT)<aO){var aU=aO-(aR+aT);
aS.css("margin-left",aU)
}else{aS.css("left",0)
}if((aR+aT)>aC){}})
})
}}}function K(){var aj=$(".info-menu"),ak=$(".menu-browse"),aq=$(".header-nav--toggle-mobile"),ax=$(".status-bar"),aw=$(".header .pearson-banner"),av=$(".onedotcom-page-search"),at=ak.find(".child-page-list-level-1"),an=at.find("li"),ar=at.find(".back-to-prev"),ap=at.outerHeight(),ao=$(".shadowOverlay"),au=$(".utility-nav--container"),az=0;
aj.appendTo(aw);
av.find("button.search-box-icon").append('<span class="screenreader">Search</span>').attr("title","Search").end().removeClass("search-box").appendTo(aw).clone().prependTo(ak);
av=ak.find(".onedotcom-page-search");
if(!($("body").hasClass("edit"))){if($(".menu-browse .onedotcom-page-search").css("z-index")=="300"){az=65
}function am(aA){var aB=$(".menu-browse .child-page-list-level-1").outerHeight();
if(!(at.hasClass("vis-hidden"))){aA.css({top:aB+az})
}else{var aC=ak.find(".current-item.current-item-path").not(".opened").parent().outerHeight();
aA.css({top:aC+az})
}}function al(aA){an.each(function(){var aB=$(this);
aB.click(function(){var aC=aB.find(">ol, >ul").not(".vis-hidden"),aD=aC.outerHeight(),aF=aC.width(),aE=at.outerHeight();
if(!(aF==null)){aA.width(aF);
av.width(aF-22)
}if(!(aD==null)){aA.css("top",aD+az)
}if(!(at.hasClass("vis-hidden"))){aA.css("top",aE+az);
aA.width(at.width());
av.width(at.width()-22)
}})
})
}if(au.length===0){aq.click(function(){am(aj)
})
}else{au.clone().removeClass("utility-nav--container").addClass("utility-nav--mobile-container").appendTo(ak);
var ay=$(".utility-nav--mobile-container");
aq.click(function(){am(ay)
});
al(ay)
}}}function ai(){var aq=$("header > .header"),ar=aq.find(".pearson-banner"),au=aq.find(".menu-browse"),at=aq.find(".onedotcom-page-search"),an=at.find(".search-box-input"),am=at.find("button"),ak=ar.find(".info-menu li"),al=ak.eq(0).find("a"),aj=ak.eq(1).find("a"),ao=$("#site-logo a");
if(au.length>0){aq.after('<div class="sub-header"><div class="sub-parsys"></div></div>');
var ap=$("header .sub-header .sub-parsys");
au.appendTo(ap)
}}(function(aj,ak){if(typeof module!=="undefined"){module.exports=ak()
}else{if(typeof define==="function"&&typeof define.amd==="object"){define(ak)
}else{this[aj]=ak()
}}}("clipboard",function(){if(typeof document==="undefined"||!document.addEventListener){return null
}var aj={};
aj.copy=(function(){var an=false;
var al=null;
var am=false;
function ak(){an=false;
al=null;
if(am){window.getSelection().removeAllRanges()
}am=false
}document.addEventListener("copy",function(aq){if(an){for(var ap in al){aq.clipboardData.setData(ap,al[ap])
}aq.preventDefault()
}});
function ao(){var aq=document.getSelection();
if(!document.queryCommandEnabled("copy")&&aq.isCollapsed){var ap=document.createRange();
ap.selectNodeContents(document.body);
aq.removeAllRanges();
aq.addRange(ap);
am=true
}}return function(ap){return new Promise(function(ar,aq){an=true;
if(typeof ap==="string"){al={"text/plain":ap}
}else{if(ap instanceof Node){al={"text/html":new XMLSerializer().serializeToString(ap)}
}else{al=ap
}}function at(au){try{if(document.execCommand("copy")){ak();
ar()
}else{if(!au){ao();
at(true)
}else{ak();
throw new Error("Unable to copy. Perhaps it's not available in your browser?")
}}}catch(av){ak();
aq(av)
}}at(false)
})
}
})();
aj.paste=(function(){var am=false;
var al;
var ak;
document.addEventListener("paste",function(ao){if(am){am=false;
ao.preventDefault();
var an=al;
al=null;
an(ao.clipboardData.getData(ak))
}});
return function(an){return new Promise(function(ap,ao){am=true;
al=ap;
ak=an||"text/plain";
try{if(!document.execCommand("paste")){am=false;
ao(new Error("Unable to paste. Pasting only works in Internet Explorer at the moment."))
}}catch(aq){am=false;
ao(new Error(aq))
}})
}
})();
if(typeof ClipboardEvent==="undefined"&&typeof window.clipboardData!=="undefined"&&typeof window.clipboardData.setData!=="undefined"){
/*! promise-polyfill 2.0.1 */
(function(av){function au(ax,aw){return function(){ax.apply(aw,arguments)
}
}function at(aw){if("object"!=typeof this){throw new TypeError("Promises must be constructed via new")
}if("function"!=typeof aw){throw new TypeError("not a function")
}this._state=null,this._value=null,this._deferreds=[],am(aw,au(aq,this),au(ap,this))
}function ar(ax){var aw=this;
return null===this._state?void this._deferreds.push(ax):void al(function(){var aA=aw._state?ax.onFulfilled:ax.onRejected;
if(null===aA){return void (aw._state?ax.resolve:ax.reject)(aw._value)
}var az;
try{az=aA(aw._value)
}catch(ay){return void ax.reject(ay)
}ax.resolve(az)
})
}function aq(aw){try{if(aw===this){throw new TypeError("A promise cannot be resolved with itself.")
}if(aw&&("object"==typeof aw||"function"==typeof aw)){var ay=aw.then;
if("function"==typeof ay){return void am(au(ay,aw),au(aq,this),au(ap,this))
}}this._state=!0,this._value=aw,ao.call(this)
}catch(ax){ap.call(this,ax)
}}function ap(aw){this._state=!1,this._value=aw,ao.call(this)
}function ao(){for(var ax=0,aw=this._deferreds.length;
aw>ax;
ax++){ar.call(this,this._deferreds[ax])
}this._deferreds=null
}function an(ax,aw,az,ay){this.onFulfilled="function"==typeof ax?ax:null,this.onRejected="function"==typeof aw?aw:null,this.resolve=az,this.reject=ay
}function am(ax,aw,aA){var az=!1;
try{ax(function(aB){az||(az=!0,aw(aB))
},function(aB){az||(az=!0,aA(aB))
})
}catch(ay){if(az){return
}az=!0,aA(ay)
}}var al=at.immediateFn||"function"==typeof setImmediate&&setImmediate||function(aw){setTimeout(aw,1)
},ak=Array.isArray||function(aw){return"[object Array]"===Object.prototype.toString.call(aw)
};
at.prototype["catch"]=function(aw){return this.then(null,aw)
},at.prototype.then=function(ax,aw){var ay=this;
return new at(function(aA,az){ar.call(ay,new an(ax,aw,aA,az))
})
},at.all=function(){var aw=Array.prototype.slice.call(1===arguments.length&&ak(arguments[0])?arguments[0]:arguments);
return new at(function(ax,aB){function aA(aF,aE){try{if(aE&&("object"==typeof aE||"function"==typeof aE)){var aD=aE.then;
if("function"==typeof aD){return void aD.call(aE,function(aG){aA(aF,aG)
},aB)
}}aw[aF]=aE,0===--az&&ax(aw)
}catch(aC){aB(aC)
}}if(0===aw.length){return ax([])
}for(var az=aw.length,ay=0;
ay<aw.length;
ay++){aA(ay,aw[ay])
}})
},at.resolve=function(aw){return aw&&"object"==typeof aw&&aw.constructor===at?aw:new at(function(ax){ax(aw)
})
},at.reject=function(aw){return new at(function(ax,ay){ay(aw)
})
},at.race=function(aw){return new at(function(ax,aA){for(var az=0,ay=aw.length;
ay>az;
az++){aw[az].then(ax,aA)
}})
},"undefined"!=typeof module&&module.exports?module.exports=at:av.Promise||(av.Promise=at)
})(this);
aj.copy=function(ak){return new Promise(function(am,al){if(typeof ak!=="string"&&!("text/plain" in ak)){throw new Error("You must provide a text/plain type.")
}var ao=(typeof ak==="string"?ak:ak["text/plain"]);
var an=window.clipboardData.setData("Text",ao);
if(an){am()
}else{al(new Error("Copying was rejected."))
}})
};
aj.paste=function(){return new Promise(function(al,ak){var am=window.clipboardData.getData("Text");
if(am){al(am)
}else{ak(new Error("Pasting was rejected."))
}})
}
}return aj
}));
(function(al,ak){var aj=function(ap,am,an){var aq;
return function ao(){var au=this,at=arguments;
function ar(){if(!an){ap.apply(au,at)
}aq=null
}if(aq){clearTimeout(aq)
}else{if(an){ap.apply(au,at)
}}aq=setTimeout(ar,am||100)
}
};
jQuery.fn[ak]=function(am){return am?this.bind("resize",aj(am)):this.trigger(ak)
}
})(jQuery,"smartresize");
$(window).smartresize(function(){m()
});
function m(){var aj=$(".carousel-2");
aj.each(function(){var an=$(this),am=an.width(),ak=an.find(".item"),al=am*1;
ak.width(al)
})
}function D(){var ay=$(".utility-nav--container"),au=$(" header > .header > .iparsys");
ay.prependTo(au).find(">ul").wrap('<nav class="utility-nav" data-menu-type="utility"></nav>');
(function aC(){var aI=$(".utility-nav"),aH=aI.find("ul > li");
aH.each(function(){var aM=$(this),aO=aM.find(">a"),aP=aM.find(">i"),aN=aO.attr("href"),aJ=aM.find("ol");
if(aO.length===0){aM.addClass("empty-item")
}if(aJ.length>0){var aQ=aN.substring(1),aK=aO.text();
aJ.find("> li:first-of-type a").attr("aria-current","page");
aM.addClass("contains--sub-menu").append('<button class="utility-nav--trigger" type="button">'+aK+"</button>");
var aL=aM.find(">button");
aL.attr({"aria-haspopup":"true","aria-expanded":"false"});
aJ.attr({id:aQ,tabindex:"-1"}).appendTo(ay).wrap('<div class="sub-menu"></div>');
aO.remove()
}});
$(document).on("blur",".sub-menu--open > ol > li:last-of-type a",function(){$(".utility-nav--open").focus();
ao(".sub-menu");
ao(".language-sub-menu")
})
})();
$(document).mouseup(function(aH){if(!ay.is(aH.target)&&ay.has(aH.target).length===0){ao(".sub-menu");
ao(".language-sub-menu")
}});
function av(){$(document).on("click",".utility-nav--container .contains--sub-menu button",function(){var aH=$(this),aJ=aH.parent("li"),aI=aH.attr("aria-controls");
if(aH.hasClass("utility-nav--open")){ao(".sub-menu");
ao(".language-sub-menu")
}else{ao(".sub-menu");
ao(".language-sub-menu");
aH.addClass("utility-nav--open").attr("aria-expanded","true");
aJ.addClass("utility-nav--current-item");
$("#"+aI).attr("aria-hidden","false").parent(".sub-menu").addClass("sub-menu--open");
setTimeout(function(){$("#"+aI).focus()
},200)
}})
}function ao(aH){var aI=ay.find(aH);
ay.find("ul > li").removeClass("utility-nav--current-item").find("button").removeClass("utility-nav--open").attr("aria-expanded","false");
aI.removeClass("sub-menu--open").find(">ol").attr("aria-hidden","true")
}var al=$("header .locale-selection");
if(al.length>0&&ay.length>0){var aE=al.find("option").eq(0),aB=aE.text(),aq=aE.attr("value"),aD=al.find("option").eq(1),aG=aD.text(),aw=aD.attr("value"),at=ay.find(".utility-nav > ul"),am=$(".utility-nav--mobile-container");
var ar='<li class="contains--sub-menu contains--language-selector"><button id="util--language-trigger" class="util--language-selector" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="util--language-selector"><span class="screenreader">Select your language: </span>'+aB+"</button></li>",ap='<ol id="util--language-selector" tabindex="-1" class="util--language-selector" aria-hidden="true"><li><a href="'+aq+'" aria-current="true">'+aB+' </a> </li> <li><a href="'+aw+'">'+aG+" </a> </li></ol>";
at.find(">li").eq(0).after(ar);
ay.append('<div class="sub-menu language-sub-menu" aria-hidden="true">'+ap+"</div>");
var az=$(".utility-nav--container .utility-nav>ul>li:first-child").outerWidth(),an=$("#util--language-selector");
an.css("padding-left",az+10);
am.find(">ul>li").eq(0).after(ar);
am.find(".contains--language-selector").append(ap);
var ax=am.find("#util--language-trigger"),aF=ax.next("ol");
ax.removeAttr("id class").addClass("utility-nav-trigger--mobile").attr("aria-controls","util--language-selector-mobile");
aF.attr("id","util--language-selector-mobile").removeAttr("class tabindex").addClass("util--language-selector-mobile")
}var am=$(".utility-nav--mobile-container");
if(am.length>0){var ak=am.find(">ul >li");
ak.each(function(){var aJ=$(this),aI=aJ.find(">button"),aH=aJ.find(">ol");
if(aH.length>0){aJ.addClass("utility-nav--mobile-sublinks")
}})
}$(document).on("click",".utility-nav-trigger--mobile",function(){var aI=$(this),aH=aI.next('ol[class*="-selector-mobile"]');
if(aI.parent("li").is(".utility-nav-mobile--open-item")){aI.parent("li").removeClass("utility-nav-mobile--open-item").end().attr("aria-expanded","false");
aH.attr("aria-hidden","true").removeClass("display--block")
}else{aI.parent("li").addClass("utility-nav-mobile--open-item").end().attr("aria-expanded","true");
aH.addClass("display--block").attr("aria-hidden","false")
}});
var aA=$(".utility-nav > ul"),aj=am.find(" > ul:first-of-type > li.utility-nav--mobile-sublinks ol");
aA.add(am).find('a[name="icon-bookbag"]').prev("a").addClass("util--icon-right util--bookbag").end().remove();
av()
}(function f(){$(window).load(function(){if($(".utility-nav--container").length>0){var am=$("header > .header > .iparsys"),au=$(".utility-nav > ul"),aj=$(".utility-nav--mobile-container"),ak=aj.find(" > ul > li.utility-nav--mobile-sublinks:first-of-type"),ao=ak.find("> ol"),av=ao.prev('a[href="#"]'),al=av.text();
ak.addClass("contains--sub-menu contains--country-selector");
av.before('<button id="util-mobile--country-trigger" class="utility-nav-trigger--mobile" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="util--country-selector-mobile">'+al+"</button>").remove();
var aw=ao.prev("button");
aw.prepend('<span class="screenreader">Select your language: </span>');
ao.attr("id","util--country-selector-mobile").addClass("util--country-selector-mobile");
var ap=$(".util--country-selector-mobile");
au.find("> li:first-of-type > button").attr("aria-controls","util--country-selector").prepend('<span class="screenreader">Select your country: </span>');
am.find(".sub-menu:first > ol").attr("id","util--country-selector").addClass("util--country-selector");
var at=$(".util--country-selector");
if($(".country-selector-dropdown").length>0){var ar=$(".country-selector"),aq=ar.find(".country-selector-dropdown");
at.add(ap).empty();
aq.find("option").each(function(){at.add(ap).append('<li><a href="'+$(this).val()+'"data-isocode="'+$(this).data("isocode")+'">'+$(this).text()+"</a></li>")
});
at.append('<li><a href="https://www.pearson.com" data-isocode="CORP">Global</a></li>').find("li:first").appendTo(at).end().end().find(">li:first > a").attr("aria-current","page");
ap.append('<li><a href="https://www.pearson.com" data-isocode="CORP">Global</a></li>').find("li:first").appendTo(ap);
if(!$("body").hasClass("edit")){ar.remove()
}}else{var an=at.add(ap).find("li");
an.each(function(){if($(this).find("a[name]").length){var ay=$(this).find("a[name]"),ax=ay.attr("name");
$(this).find("a[href]").attr("data-isocode",ax);
ay.remove()
}})
}$(document).on("click","a[data-isocode]",function(aC){aC.preventDefault();
var ay=new Date(),az=$(this).data("isocode"),aB=$(this).attr("href"),aE=window.location.href;
var ax=function(aG){var aF=document.createElement("div");
aF.textContent=aG;
return aF.innerHTML
};
var aD=ax(aE),aA=ax(aB);
ay.setTime(ay.getTime()+(10*365*24*60*60*1000));
$.cookie("geotargetsite",az,{expires:ay,path:"/"});
$.cookie("countryurl",aA,{expires:ay,path:"/"});
if(aA!==aD){window.location.href=aA
}})
}})
})();
function n(){var ay=!!window.MSInputMethodContext&&!!document.documentMode;
var au='<svg id="book-cover" data-name="book-cover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1922.72 120.18" focusable="false"><defs><style>.cls{fill:#fff;}</style></defs><title>HP_Hero_Curve_Shape</title><path fill="#fff" class="cls" d="M866.72,0c599.14,0,1056,109.07,1056,109.07l0,11.11H0V77.07S393.1,0,866.72,0"/></svg>';
function am(aT,aR){var aS='<svg id="'+aT+'" data-name="'+aT+'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1922.72 120.18" focusable="false"><defs><style>.cls{fill:'+aR+';}</style></defs><title>HP_Hero_Curve_Shape</title><path fill="'+aR+'" class="cls" d="M866.72,0c599.14,0,1056,109.07,1056,109.07l0,11.11H0V77.07S393.1,0,866.72,0"/></svg>';
return aS
}(function aM(){$("head").prepend('<link href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,400,300,600,700,800|Playfair+Display:400,700,900,400italic,700italic" rel="stylesheet" type="text/css">');
var aT="Search",aR=$(".page-search-box-input, .header-search-box-input"),aS=window.location.href;
aR.attr("placeholder",aT)
})();
(function aF(){var aR=$(".onedotcom-page-search, .search-box");
aR.each(function(){var aU=$(this),aS=aU.find(".search-box-input"),aT=aU.find("button");
aT.click(function(aV){var aW=aS.val().trim().length;
if(aW==0){aV.preventDefault()
}})
})
})();
if(!String.prototype.startsWith){String.prototype.startsWith=function(aR,aS){return this.substr(!aS||aS<0?0:+aS,aR.length)===aR
}
}(function aJ(){var aT=$("a"),aX=window.location,aU=aX.host,aS=aX.origin,aW=aX.pathname,aR=aW.split("/")[1];
aT.each(function(){var a0=$(this),aZ=a0.attr("href");
if(!(aZ===undefined)){function a3(a6){var a7=/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
return a7.test(a6)
}if(a3(aZ)){if(!(aZ.startsWith("/")||aZ.startsWith("#"))){var a5=document.createElement("a");
a5.href=aZ;
var a4=a5.origin,a2=a5.pathname,a1=a2.split("/")[1];
if(a4!=aS){aV($(this))
}if(aU==="www.pearson.com"){if(a4===aS){if(a1!=""&&a1!=aR){aV($(this))
}}}}}if(a0.is('[href*=".pdf"], [href*=".jpg"], [href*=".jpeg"], [href*=".png"], [href*=".webp"], [href*=".doc"], [href*=".docx"], [href*=".xlsx"], [href*=".xls"], [href*=".zip"], [href*=".mov"], [href*=".mp3"], [href*=".mp4"], [href*=".ogg"], [href*=".ppt"], [href*=".pptx"], [href*=".webm"]')){aV($(this))
}}function aY(bb){var ba=0;
var a8;
var a7=bb.split(" ");
for(var a9=0;
a9<a7.length;
a9++){var a6=a7[a9].length;
if(a6>ba){ba=a6
}}if(ba>20){a0.addClass("break-word")
}return ba
}aY(a0.text())
});
function aV(aY){aY.attr({target:"_blank",rel:"noopener noreferrer external",});
aY.addClass("external-link")
}$('.btn-primary, .btn-secondary, [class*="button-"]').each(function(){$(this).find("a").removeClass("external-link")
})
})();
(function al(){var aR=$('a[href="#show-more-link"]');
aR.each(function(){var aU=$(this),aT=aU.text(),aS=aU.parent(),aV=aU.closest("div").find('a[href="#show-less-link"]'),aW=aV.text();
aS.nextAll().hide();
aU.click(function(aX){aX.preventDefault();
aU.toggleClass("opened");
if(aV.length>0&&aU.hasClass("opened")){aU.text(aW)
}else{aU.text(aT)
}aS.nextAll().toggle("blind",100)
})
})
})();
(function aq(){var aR=$("iframe");
aR.each(function(){var aS=$(this),aT=aS.attr("src");
if(!(typeof aT==="undefined")||aT){if(aT.indexOf("investis.com")>-1){aS.addClass("responsive")
}if(aT.indexOf("otp.tools.investis.com")>-1){aS.addClass("otp-inventis-iframe")
}if(aT.indexOf("irs.tools.investis.com")>-1){aS.addClass("irs-inventis-iframe")
}if(aT.indexOf("go.pardot")>-1){aS.addClass("form-iframe")
}}});
aR.attr("frameborder",0).attr("width","100%")
})();
(function an(){$(".dropdown-list").each(function(){var aS=$(this).find("> div"),aR=aS.find("select.form-control");
aS.append('<span class="dropdown-list-custom"><i></i></span>');
aR.appendTo(aS.find(".dropdown-list-custom"))
});
$(".check-box-list label.checkbox, .check-box-list label.checkbox-inline").each(function(){var aS=$(this),aR=aS.find("input");
aR.after("<span></span>")
})
})();
(function aQ(){var aS=$(".content-tile-homepage-hero");
if(aS.length>0){var aT=aS.find("figcaption > h2"),aR=aT.text();
aS.find("figcaption").prepend("<h1>"+aR+"</h1>");
aT.remove();
if(ay){aS.append('<img class="brand-curve" role="presentation" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyBpZD0iYm9vay1jb3ZlciIgZGF0YS1uYW1lPSJib29rLWNvdmVyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIyLjcyIDEyMC4xOCIgZm9jdXNhYmxlPSJmYWxzZSI+PGRlZnM+PHN0eWxlPi5jbHN7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+SFBfSGVyb19DdXJ2ZV9TaGFwZTwvdGl0bGU+PHBhdGggZmlsbD0iI2ZmZiIgY2xhc3M9ImNscyIgZD0iTTg2Ni43MiwwYzU5OS4xNCwwLDEwNTYsMTA5LjA3LDEwNTYsMTA5LjA3bDAsMTEuMTFIMFY3Ny4wN1MzOTMuMSwwLDg2Ni43MiwwIj48L3BhdGg+PC9zdmc+" />')
}else{aS.find("figure").append(au)
}}})();
(function ax(){if($(".hide-nav").length>0){$("header .sub-header, .header-nav--toggle-mobile").addClass("hide")
}})();
(function ap(){var aR=$(".tab-panel-features, .tab-panel-features-blue, .tab-panel-features-blue--show-more");
if(aR.length>0){var aT=aR.find(">nav"),aS=aR.offset().top;
$(window).scroll(function(){var aU=$(window).scrollTop();
if(aU>=aS){aR.addClass("fixed-nav")
}else{aR.removeClass("fixed-nav")
}});
(function(){var aU=$(".tab-content a[href*=#]");
aU.each(function(){var aW=$(this),aX=aW.attr("href");
aW.attr("href",aX.replace("#","#_"));
var aV=aW.attr("href");
if(!(aV=="#_")){aW.click(function(aZ){aZ.preventDefault();
var aY=$('.tab-content a[name="'+aV.replace("#_","")+'"]');
if(!(aY===undefined)&&!(aY===null)&&!(typeof aY==="undefined")&&aY.length>0){console.log(aY);
$("html, body").animate({scrollTop:aY.offset().top-100},500)
}})
}})
})()
}})();
(function aP(){if($("body").hasClass("edit")){function aR(){$(".tab-content > .tab-pane").css("display","none")
}setTimeout(aR,2000)
}})();
(function aK(){var aZ=$(".column-control-book-title, .column-control-book-title-full-cover, .column-control-book-title-full-cover--no-shadow, .content-tile-hero-curved"),aV=$(".column-control-book-title-full-cover"),aW=$(".column-control-book-title"),aU=$(".column-control-book-title-full-cover--no-shadow"),aR=$(".column-control-book-title-full-cover, .column-control-book-title-full-cover--no-shadow"),aX=$(".content-tile-hero-curved");
if(aZ.length>0){var aY=aR.find(">.container >.row >.col-sm-6").eq(1).find(".content-tile picture > source").eq(0).attr("srcset");
aR.append('<div style="background-image: url('+aY+');" class="full-cover-img"></div>');
aW.append(am("book-cover","#fff"));
aW.find(">.container >.row >.col-sm-6").eq(1).append(am("book-cover2","#fff"));
aV.append(am("book-cover","#fff"));
aU.append(am("book-cover","#f5f5f5"));
if(ay){aX.append('<img class="brand-curve" role="presentation" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyBpZD0iYm9vay1jb3ZlciIgZGF0YS1uYW1lPSJib29rLWNvdmVyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIyLjcyIDEyMC4xOCIgZm9jdXNhYmxlPSJmYWxzZSI+PGRlZnM+PHN0eWxlPi5jbHN7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+SFBfSGVyb19DdXJ2ZV9TaGFwZTwvdGl0bGU+PHBhdGggZmlsbD0iI2ZmZiIgY2xhc3M9ImNscyIgZD0iTTg2Ni43MiwwYzU5OS4xNCwwLDEwNTYsMTA5LjA3LDEwNTYsMTA5LjA3bDAsMTEuMTFIMFY3Ny4wN1MzOTMuMSwwLDg2Ni43MiwwIj48L3BhdGg+PC9zdmc+" />')
}else{aX.append(am("book-cover","#fff"))
}var aT=aW.find(">.container >.row >.col-sm-6").eq(1).find(".content-tile"),aS=aT.length;
if(aS==1){aT.addClass("center-item")
}}})();
function aG(){var aS=$("header .par-header"),aU=aS.find(".content-tile-secondary-hero, .content-tile-secondary-hero--full-width"),aT=aU.find("picture img").height(),aR=$(".secondary-nav");
if(aU.length==0){aR.addClass("nav-reposition")
}if(aT>380){aU.addClass("reposition-hero")
}}function aA(){var aT=$(".content-tile-secondary-hero--full-width"),aS=aT.find("figcaption"),aU=aS.find("h2");
aS.append("<span> </span>");
var aR=aS.find("span");
aU.appendTo(aR)
}(function ak(){$(".accordion-panel h4 a").click(function(aR){aR.preventDefault()
})
})();
(function aI(){if(!$("body").hasClass("edit")){$(".text.standfirst-placeholder").html("");
$(".text.standfirst-placeholder").prepend($(".standfirst.column-control .text.standfirst, .standfirst.column-control .text.intro-copy, .column-control.standfirst .standfirst"))
}})();
(function aD(){function aR(){var aS=$(".column-control-hero-product-non-catalog");
if(aS.length>0){var aW=aS.find(">.container >.row >.col-sm-6"),aZ=aW.eq(0).outerHeight(),aT=aW.eq(0).position().top,aV=aW.eq(1).find(".content-tile"),a0=aV.find("picture img"),a1=aV.find("picture"),aU=a0.attr("src")||a0.attr("srcset"),aY=aW.eq(1).position().top,aX=aS.outerHeight();
aS.css("height",aT+aZ);
a1.css("height",aT+aZ);
aV.css({height:aT+aZ,"margin-top":-aY,"background-image":"url("+aU+")"})
}}$(document).ready(function(){aR()
});
$(window).smartresize(function(){aR()
})
})();
(function aC(){var aS=$(".col-sm-3, .col-sm-4, .column .col-xs-12"),aR=aS.find(".book-bag-cart-items");
if(O&&aS.length>0&&!($("body").hasClass("edit"))&&!(aR.length>0)){function aT(){aS.each(function(){var aV=$(this),aU=aV.html().trim().length;
if(aU==0){aV.remove()
}})
}setTimeout(aT,2000)
}})();
function az(){var aR=$(".search-results-list");
if(aR.length>0){var aS=aR.find("time");
aS.each(function(){var aU=$(this),aT=aU.text().replace(/\s/g,"");
if(aT.length==0){aU.hide()
}})
}}function aE(){var aR=$(".event-list"),aS=aR.find("a");
aS.each(function(){var aT=$(this).text().replace(/\s/g,"");
if(aT.length==0){$(this).hide()
}})
}(function aj(){var aR=$("article").not(".blog-list article");
aR.each(function(){var aS=$(this),aU=aS.find(">header"),aT=aU.find("h1"),aW=aT.text().trim(),aV=aS.find("time");
aV.each(function(){var aY=$(this),aX=aY.attr("datetime");
if(aX=="0-00-00"||aX=="00-00"||aX=="0-00"){aY.hide()
}});
if(aW.length==0){aU.remove();
aS.addClass("no-title")
}})
})();
(function aO(){var aS=$("footer"),aR=aS.find(".footer-legal-notes");
aR.find("ul").append('<li class="match-footer-link copyright-data-container">Copyright ©&nbsp;1996&#8211;<span class="current-year"></span> <a href="https://www.pearson.com" aria-label="Pearson" title="Pearson" >Pearson</a> All rights reserved.</li>');
$(".current-year").html((new Date).getFullYear())
})();
(function ao(){var aR=$(".tag-list");
if(aR.length>0){var aS=aR.find("li");
aS.each(function(){var aU=$(this),aT=aU.find("a").text().trim().length;
if(aT==0&&aU.hasClass("selected")){aU.remove()
}});
S(aR.find("ul"))
}})();
(function aw(){var aR=$(".youtube-video");
if(aR.length>0){aR.each(function(){var aT=$(this),aS=aT.find("button");
if(aS.length>0){aT.addClass("youtube-video--modal")
}})
}})();
(function av(){var aR=$("html");
aR.removeClass("no-js").addClass("js")
})();
(function aH(){setTimeout(function(){$(".rss-feed a").attr("target","_blank");
$(".rss-feed .rss-feed-container").append("<li class='rss-feed-item rss-feed-last-item' />")
},5000);
$(".rss-feed a").click(function(){$(this).attr("target","_blank")
})
})();
(function aB(){var aR=$("main").find("img");
aR.each(function(){if(!$(this).attr("alt")){$(this).attr({alt:"",role:"presentation"})
}});
setTimeout(function(){var aS=$(".rss-feed").find("img");
aS.each(function(){if(!$(this).attr("alt")){$(this).attr({alt:"",role:"presentation"})
}})
},5000)
})();
(function ar(){var aR=$("[aria-title]");
aR.each(function(){var aS=$(this).attr("aria-title");
$(this).attr("title",aS).removeAttr("aria-title")
})
})();
function at(){var aS=navigator.userAgent,aR,aT=aS.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];
if(/trident/i.test(aT[1])){aR=/\brv[ :]+(\d+)/g.exec(aS)||[];
return{name:"IE",version:(aR[1]||"")}
}if(aT[1]==="Chrome"){aR=aS.match(/\bOPR|Edge\/(\d+)/);
if(aR!=null){return{name:"Opera",version:aR[1]}
}}aT=aT[2]?[aT[1],aT[2]]:[navigator.appName,navigator.appVersion,"-?"];
if((aR=aS.match(/version\/(\d+)/i))!=null){aT.splice(1,1,aR[1])
}return{name:aT[0],version:aT[1]}
}var aL=at();
(function(){var aR=$(".content-tile");
if(aR.length>0){aR.each(function(){var aU=$(this),aT=aU.find(".content-tile-text p"),aZ=aU.find("figcaption *").not("a");
aT.each(function(){if(aU.text().trim().length===0){$(this).parents("figcaption").addClass("hide")
}});
if(aU.hasClass("content-tile-book-box")){if(aU.find("figure > a").length==0){aU.addClass("no-hover")
}}if(!(aU.hasClass("content-tile-expander-show-more"))&&!(aU.hasClass("bgcolor--default"))&&!(aU.parents().is('[class*="custom-item-renderer"]'))){if(aU.find("figure").length>0){var aY=aU.find("figure").css("backgroundColor");
if(!(aY==="rgba(0, 0, 0, 0)")){var aW,aV,aS,aX;
if(aY.match(/^rgb/)){aY=aY.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
aW=aY[1];
aV=aY[2];
aS=aY[3]
}else{aY=+("0x"+aY.slice(1).replace(aY.length<5&&/./g,"$&$&"));
aW=aY>>16;
aV=aY>>8&255;
aS=aY&255
}aX=Math.sqrt(0.299*(aW*aW)+0.587*(aV*aV)+0.114*(aS*aS));
if(aX<127.5){aU.find("figure").addClass("dark-background")
}}}}})
}})();
(function(){var aR=$("main .text");
if(aR.length>0){aR.each(function(){var aT=$(this),aY=aT.css("backgroundColor"),aX=aT.find("*").not("a");
if(!(aT.is('[class*="bgcolor--"]'))){aT.addClass("bgcolor--default")
}if(!(aT.hasClass("bgcolor--default"))&&!(aT.parents().is('[class*="custom-item-renderer"]'))){if(!(aY==="rgba(0, 0, 0, 0)")){var aV,aU,aS,aW;
if(aY.match(/^rgb/)){aY=aY.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
aV=aY[1];
aU=aY[2];
aS=aY[3]
}else{aY=+("0x"+aY.slice(1).replace(aY.length<5&&/./g,"$&$&"));
aV=aY>>16;
aU=aY>>8&255;
aS=aY&255
}aW=Math.sqrt(0.299*(aV*aV)+0.587*(aU*aU)+0.114*(aS*aS));
if(aW<127.5){aT.addClass("dark-background")
}}}})
}})();
(function(){var aS=$("main a").not(".tab-panel a");
function aR(aT){location.hash="#"+aT
}aS.each(function(){var aV=$(this),aT=aV.attr("href"),aU=aV.attr("name");
if(!(aU===undefined)&&aU.length>0){var aW=$(this).parent();
if(aW.css("display")=="none"){aW.show()
}}})
})();
(function(){var aR=$(".pearson-banner > .onedotcom-page-search"),aT=$(".menu-browse .onedotcom-page-search");
function aS(aU){if(aU.length>1){aU.eq(1).remove()
}}aS(aR);
aS(aT)
})();
(function(){$("form").submit(function(aS){var aR=$(this).find("[required]");
aR.each(function(){if($(this).val()==""){$(this).focus();
aS.preventDefault();
return false
}});
return true
})
})();
(function aN(){function aR(){if(window.top!=window.self){return
}$("body").attr("id","top");
if(!$(".back-to-top__container").length){$("body").append('<div class="back-to-top__container is-hidden"><a href="#top"><img src="/etc/themes/platform/1dc-theme/assets/icons/ic_chevron_white.svg" alt="" role="presentation" /><span>TOP</span></a></div>')
}var aS=$(".back-to-top__container");
$(window).scroll(function(){if($(this).scrollTop()>=100){aS.removeClass("is-hidden").addClass("is-visible")
}else{aS.removeClass("is-visible").one("transitionend",function(){aS.addClass("is-hidden")
})
}})
}$(document).ready(function(){aR()
});
$(window).smartresize(function(){aR()
})
})();
(function(){if(document.querySelector("body").style.objectFit===undefined){var aR=$('[class*="content-tile-color-block--"]');
aR.each(function(){var aS=$(this),aU=aS.find("picture"),aV=aU.find("image"),aT=aV.attr("src")||aV.attr("srcset");
aU.addClass("object-fit--false").css({"background-image":"url("+aT+")"})
})
}})()
}function J(){var aj=$(".behavior--image-expander, .behavior--show-more__image-expander");
if(aj.length>0){aj.each(function(an){var ap=$(this),aq=ap.find("picture"),al=aq.find("img"),ao=al.attr("src")||al.attr("srcset"),am=al.attr("alt");
aq.append('<a href="'+ao+'" class="expander-pic-expand" aria-label="View larger"><i></i></a>');
var ak=ap.find(".expander-pic-expand");
if(!$("body").hasClass("edit")){$("body").append('<div class="pop-up-window image-expander__dialog expander-pic-expanded-container"><div class="image-expander__inner-wrap"><img src="'+ao+'" alt="'+am+'" tabindex="0" class="view-larger-dialog__image" /></div></div>')
}});
popUp($(".expander-pic-expand"),$(".expander-pic-expanded-container"))
}}$(document).ready(function(){J()
});
function A(){var aj=$(".behavior--show-more, .behavior--show-more__image-expander");
if(aj.length>0&&(!$("body").hasClass("edit"))){aj.each(function(an){var ap=$(this),al=ap.find(".content-tile-text");
if(al.text().length>250){var ak=al.html().substring(0,250),ao=al.html().trim();
al.html(ak+("&hellip;")).after('<div class="text-toggle__trigger-container"><button type="button" class="text-toggle__trigger" aria-label="Show more">Show more +</button></div>');
al.each(function(){var ar="toggle-target-with-truncate--"+an;
$(this).attr({id:ar})
});
var am=ap.find(".text-toggle__trigger"),aq=0;
am.each(function(){var ar="toggle-trigger-with-truncate--"+an;
$(this).attr({id:ar,"aria-controls":"toggle-target-with-truncate--"+an})
});
am.click(function(ar){ar.preventDefault();
if(aq===0){al.html(ao).addClass("active");
am.text("Show less -").attr({"aria-expanded":true,"aria-label":"Show less"});
aq=1
}else{al.html(ak+("&hellip;")).removeClass("active");
am.text("Show more +").attr({"aria-expanded":false,"aria-label":"Show more"});
aq=0
}})
}})
}}$(window).on("load",function(){A()
});
$(window).load(function(){if($(".link-list-dropdown h2").length>0){$(".link-list-dropdown h2").each(function(){var aj=$(this).width();
$(this).siblings("ul").width(aj+55.32)
})
}$(".link-list-dropdown h2").click(function(){$(this).toggleClass("open");
$(this).siblings("ul").toggle()
});
$(".link-list-dropdown li a").click(function(){})
});
function y(){var aj=$(".content-tile-panel-video, .content-tile-panel-video-v2");
if(aj.length>0){$("body").append('<div class="shadowOverlay"> </div>');
aj.each(function(ar){var au=$(this).find("figure > a"),ak=au.attr("href"),aw=$(this).find(".content-tile-text a"),am=$(this).find("h2").text(),av=am.replace(/\s+/g,"-");
$(this).append('<button title="Play video: '+am+'" class="panel-video-play"></button>');
au.attr("tabindex","-1");
aw.each(function(){var aB=$(this),aA=aB.text().replace(/\s/g,"");
if(aA.length===0){aB.remove()
}});
$("body").append('<div class="pop-up-video" role="dialog" aria-modal="true" aria-label="Dialog Window (Press ESC to close)" id="modal-video--'+av+'"><div class="pop-up-video--inner"><iframe id="modal-video-iframe--'+av+'" title="'+am+'" src="//www.youtube.com/embed/'+ak+'?rel=0&amp;showinfo=0&amp;color=white" frameborder="0" allowfullscreen></iframe></div><button class="pop-up-close" aria-label="Close"></button></div>');
var an=$(".pop-up-video").eq(ar),az=an.find(".pop-up-video--inner"),aq=an.find("iframe"),al=aq.attr("src"),at=$(this).find(".panel-video-play"),ay=an.find(".pop-up-close"),ap=$(".shadowOverlay");
function ao(){$('span:contains("Session Timeout")').parents('[role="dialog"]').add('header[role="banner"]').add("main").add("footer").add(".servicecomponents").attr("aria-hidden","true");
an.addClass("current-dialog").show().attr("aria-hidden",false);
az.attr("tabindex","0");
var aB=$(".current-dialog"),aD=aB.find("a, object, :input, iframe, [tabindex]"),aE=aD.first()[0],aC=aD.last()[0],aA=9;
aB.on("keydown",function(aF){if(aF.key==="Tab"||aF.keyCode===aA){if(aF.shiftKey){if(document.activeElement===aE){aC.focus();
aF.preventDefault()
}}else{if(document.activeElement===aC){aE.focus();
aF.preventDefault()
}}}});
aC.focus();
aq.attr("src",al+"&amp;autoplay=1");
ap.show()
}function ax(){$('span:contains("Session Timeout")').parents('[role="dialog"]').add('header[role="banner"]').add("main").add("footer").add(".servicecomponents").removeAttr("aria-hidden");
an.hide().removeClass("current-dialog").attr("aria-hidden",true);
az.removeAttr("tabindex");
ap.hide();
aq.attr("src","")
}at.click(function(aA){aA.preventDefault();
$(this).addClass("current-dialog-trigger");
ao()
});
ay.click(function(aA){aA.preventDefault();
ax();
$(".current-dialog-trigger").focus().removeClass("current-dialog-trigger")
});
$(window).on("keydown",function(aA){if(aA.keyCode===27){ax();
$(".current-dialog-trigger").focus().removeClass("current-dialog-trigger")
}if((ay.is(":focus"))&&aA.keyCode===13){ax()
}});
ap.click(function(aA){ax()
})
})
}}function r(){var aj=$(".content-tile-panel-item-category");
if(aj.length>0){aj.each(function(){var al=$(this),am=al.find(".content-tile-subtitle"),ak=al.find("figure");
am.appendTo(ak)
})
}}function V(){var aj=$(".content-tile-accordion-panel");
if(aj.length>0){aj.each(function(){var ak=$(this),am=ak.find("figcaption > h2, figcaption > a > h2"),al=ak.find("figcaption > .content-tile-text, figcaption > a > .content-tile-text");
am.attr("tabindex","0");
am.click(function(){am.toggleClass("active")
});
am.keypress(function(ao){var an=ao.which;
if(an==13||an==32){am.toggleClass("active")
}})
})
}}function g(){var aj=$(".col-sm-6 .content-tile-panel-item-info, .col-sm-6 .content-tile-panel-item-news-box");
if(aj.length>0){aj.each(function(){var al=$(this),am=al.find("picture"),ak=am.width();
if(P){am.height(ak/3)
}})
}}function b(){var aj=$(".content-tile-book-box");
aj.each(function(){var ak=$(this)
})
}(function z(){$(window).load(function(){var aj=$('div.blog-post, [class*="blog-list"] > ul > li > article');
if(aj.length>0){aj.each(function(){var am=$(this),aH=am.find("header"),aq=aH.find("> h1, > h2"),aA=aH.find(".blog-post-info, .blog-list-info"),at=am.find(".blog-post-author-img, .blog-list-author-img"),ar=aA.find("> span"),al=ar.text(),aJ=al.trim(),aK=aA.find("> time:first-of-type"),av=aK.text(),aN=av.trim(),aM=[aN],aD=am.find(".blog-list-readmore");
aH.addClass("post-header");
aq.addClass("post-title").after('<div class="post-meta"><div class="post-meta--group"></div></div>');
var aG=am.find(".post-meta--group");
if(at.length>0){at.attr("class","").addClass("post-meta--avatar").insertBefore(aG)
}if(aJ.length>0){aG.append('<span class="post-meta--author" itemprop="author" itemscope itemtype="http://schema.org/Person">'+aJ+"</span>")
}var aI,ay,aw;
for(aI=0;
aI<aM.length;
aI+=1){ay=aM[aI].split(",");
if(ay[1]){aw=ay[0]+","+ay[1]
}else{aw=ay[0]
}}aK.removeAttr("pubdate").addClass("post-meta--timestamp").text(aw).appendTo(aG);
var aL=am.find(".post-meta--timestamp");
aD.add(aA).remove();
var aC;
if(am.parent().is("li")){aC=am.find(aH).next("div").find("p:first-of-type:not(:empty)")
}else{aC=am.find("> p:first-of-type:not(:empty)")
}aC.addClass("post-content--summary");
var aE=am.find(".post-content--summary");
var ax,ao;
if(am.parent().is("li")){if(am.find("picture").eq(0).length>0){ax=am.find("picture").eq(0);
ax.addClass("post-media").parent("a").addClass("post-media--container");
ao=am.find(".post-media--container");
ao.insertBefore(aH)
}aC.parent("div").addClass("post-content");
var au=am.find(".post-content");
var aB=aE.text().length,ak;
if(!aj.parents("section").is('[class*="post-list--"]')){if(aB>250){ak=aE.html().substring(0,250);
au.html('<p class="post-content--summary">'+ak+("&hellip;")+"</p>")
}else{au.html(aE)
}}else{if(aB>135){ak=aE.text().substring(0,135);
au.html('<p class="post-content--summary">'+ak+("&hellip;")+"</p>")
}else{au.html('<p class="post-content--summary">'+aE.text())
}}if(at.length>0){at.remove()
}aL.clone().addClass("is-clone").insertAfter(au);
var aF=am.find(".is-clone");
aH.add(au).add(aF).wrapAll('<div class="post-inner"></div>');
am.parents(".blog-list").addClass("post-list");
var az=$(".post-list");
az.find("nav").addClass("post-list--pagination-container")
}else{ax=aH.next("picture");
ax.addClass("post-media");
aE.nextAll().andSelf().wrapAll('<div class="post-content"></div>')
}if(document.querySelector("body").style.objectFit===undefined){var an=am.find("picture").eq(0).find("img"),ap=an.attr("src")||an.attr("srcset");
if(am.find(".post-media--container").length>0){ao=am.find(".post-media--container")
}else{ao=am.find(".post-media")
}ao.addClass("object-fit--false").css({"background-image":"url("+ap+")"})
}if(!(am.is("article"))){if(!$("body").is(".edit")){am.replaceWith(function(){return $("<article/>",{html:this.innerHTML,"class":"post-container post-container--loaded"})
});
popUp($(".expander-pic-expand"),$(".expander-pic-expanded-container"))
}else{am.addClass("post-container post-container--loaded")
}}else{am.addClass("post-container post-container--loaded")
}popUp($(".social-share-popup-trigger"),$(".social-share-popup"))
})
}})
})();
function p(){var aj='<div class="blog-flex-social-share" role="dialog" aria-modal="true" aria-labelledby="dialog__social-share-header" id="dialog__social-share"><ul><li class="blog-flex-share-fb"><a href="#" target="_blank" rel="noopener noreferrer"><span class="share-title">Facebook</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147 315" focusable="false"><path class="cls-1" d="M147 55.2H111.4c-7 0-14.1 7.3-14.1 12.7v36.3h49.7c-2 27.8-6.1 53.2-6.1 53.2H97V315H31.8V157.4H0v-53H31.8V61c0-7.9-1.6-61 66.9-61H147V55.2Z"/></svg></a></li><li class="blog-flex-share-twitter"><a href="#" target="_blank" rel="noopener noreferrer"><span class="share-title">Twitter</span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" focusable="false"><path d="M24.253 8.756C24.69 17.08 18.297 24.182 9.97 24.62c-3.122.162-6.22-.646-8.86-2.32 2.702.18 5.375-.648 7.507-2.32-2.072-.248-3.818-1.662-4.49-3.64.802.13 1.62.077 2.4-.154-2.482-.466-4.312-2.586-4.412-5.11.688.276 1.426.408 2.168.387-2.135-1.65-2.73-4.62-1.394-6.965C5.574 7.816 9.54 9.84 13.802 10.07c-.842-2.738.694-5.64 3.434-6.48 2.018-.624 4.212.043 5.546 1.682 1.186-.213 2.318-.662 3.33-1.317-.386 1.256-1.248 2.312-2.4 2.942 1.048-.106 2.07-.394 3.02-.85-.458 1.182-1.343 2.15-2.48 2.71z" /></svg></a></li><li class="blog-flex-share-youtube"><a href="https://www.youtube.com/user/Pearsonplc/" target="_blank" rel="noopener noreferrer"><span class="share-title">Youtube</span></a></li><li class="blog-flex-share-google"><a href="#" target="_blank" rel="noopener noreferrer"><span class="share-title">Google+</span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" focusable="false"><path d="M14.703 15.854l-1.22-.948c-.37-.308-.88-.715-.88-1.46 0-.747.51-1.222.95-1.662 1.42-1.12 2.84-2.31 2.84-4.817 0-2.58-1.62-3.937-2.4-4.58h2.098l2.203-1.384h-6.67c-1.83 0-4.467.433-6.398 2.027C3.768 4.287 3.06 6.018 3.06 7.576c0 2.634 2.02 5.328 5.603 5.328.34 0 .71-.033 1.083-.068-.167.408-.336.748-.336 1.324 0 1.04.55 1.685 1.01 2.297-1.523.104-4.37.273-6.466 1.562-1.998 1.187-2.605 2.915-2.605 4.136 0 2.512 2.357 4.84 7.288 4.84 5.822 0 8.904-3.223 8.904-6.41.008-2.327-1.36-3.49-2.83-4.73h-.01zM10.27 11.95c-2.913 0-4.232-3.764-4.232-6.036 0-.884.168-1.797.744-2.51.543-.68 1.49-1.12 2.372-1.12 2.807 0 4.256 3.797 4.256 6.24 0 .613-.067 1.695-.845 2.48-.537.55-1.438.947-2.295.95v-.003zm.032 13.66c-3.62 0-5.957-1.733-5.957-4.143 0-2.408 2.165-3.223 2.91-3.492 1.422-.48 3.25-.545 3.556-.545.34 0 .52 0 .767.034 2.574 1.838 3.706 2.757 3.706 4.48-.002 2.072-1.736 3.664-4.982 3.648l.002.017zM23.254 11.89V8.52H21.57v3.37H18.2v1.714h3.367v3.4h1.684v-3.4h3.4V11.89" /></svg></a></li><li class="blog-flex-share-linkedin"><a href="#" target="_blank" rel="noopener noreferrer"><span class="share-title">LinkedIn</span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" focusable="false"><path d="M25.424 15.887v8.447h-4.896v-7.882c0-1.98-.71-3.33-2.48-3.33-1.354 0-2.158.91-2.514 1.802-.13.315-.162.753-.162 1.194v8.216h-4.9s.067-13.35 0-14.73h4.9v2.087c-.01.017-.023.033-.033.05h.032v-.05c.65-1.002 1.812-2.435 4.414-2.435 3.222 0 5.638 2.106 5.638 6.632zM5.348 2.5c-1.676 0-2.772 1.093-2.772 2.54 0 1.42 1.066 2.538 2.717 2.546h.032c1.71 0 2.77-1.132 2.77-2.546C8.056 3.593 7.02 2.5 5.344 2.5h.005zm-2.48 21.834h4.896V9.604H2.867v14.73z" /></svg></a></li></ul></div>';
$('.blog-post header, .social-share-container, .footer-social-share-container, .column-control-product-catalog-intro >.container >.row > [class*="col-sm-"]:first-child').append(aj);
$('.program-page .column-control-book-title > .container > .row > [class*="col-sm-"]:first-child').append(aj);
$(".product-page .column-control-book-title .product-details-section").find(".table-responsive > p:first-of-type").after(aj);
$(".series-page .series-col-control-desc").after(aj);
var am={description:$("head title").text(),emailAddress:undefined,emailBody:undefined,emailSubject:undefined,image:undefined,title:$("head title").text(),url:location.protocol+"//"+location.host+location.pathname};
var ak=function(ao){if(ao!==undefined&&ao!==null){if(ao.match(/%[0-9a-f]{2}/i)!==null){ao=decodeURIComponent(ao);
ak(ao)
}else{return encodeURIComponent(ao)
}}};
for(var al in am){if(am.hasOwnProperty(al)&&am[al]!==undefined){am[al]=ak(am[al])
}}$(".blog-flex-share-google a").attr("href","https://plus.google.com/share?url="+am.url);
$(".blog-flex-share-fb a").attr("href","https://www.facebook.com/sharer/sharer.php?u="+am.url);
$(".blog-flex-share-linkedin a").attr("href","http://www.linkedin.com/shareArticle?mini=true&url="+am.url+(am.title!==undefined?"&title="+am.title:"")+(am.description!==undefined?"&summary="+am.description:""));
$(".blog-flex-share-twitter a").attr("href","http://twitter.com/share?url="+am.url+"&amp;text="+(am.description!==undefined?am.description:""));
var an=$("footer");
an.find(".blog-flex-social-share").removeAttr("role aria-modal aria-labelledby id").end().find(".blog-flex-share-google a").attr({href:"https://plus.google.com/b/115361483463250636569"}).end().find(".blog-flex-share-fb a").attr({href:"https://www.facebook.com/pearsonplc"}).end().find(".blog-flex-share-linkedin a").attr({href:"https://www.linkedin.com/company/pearson"}).end().find(".blog-flex-share-twitter a").attr({href:"https://twitter.com/pearson"}).end();
if($(window).innerWidth()>480){$(document).on("click","main .blog-flex-social-share a",function(ap){ap.preventDefault();
var ax=window.screenLeft!==undefined?window.screenLeft:screen.left,aq=window.screenTop!==undefined?window.screenTop:screen.top,ar=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,az=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,au=580,aB=470,at=((ar/2)-(au/2))+ax,aw=((az/3)-(aB/3))+aq,aA=$(this),ao=aA.attr("href"),ay=aA.find(".share-title").html(),av=window.open(ao,ay,"scrollbars=yes, width="+au+", height="+aB+", top="+aw+", left="+at);
av.opener=null;
if(window.focus()){av.focus()
}})
}}function k(){var ak=$(".social-share-container");
if(ak.length>0){var aj=ak.clone(),am=ak.closest(".column-control").find(".title").eq(0);
if(ak.closest(".col-xs-12").hasClass("col-sm-4")||ak.closest(".col-xs-12").hasClass("col-sm-3")){am.after("<div class='social-share-container-mobile'></div>");
var al=$(".social-share-container-mobile");
aj.appendTo(al)
}}}function L(){var av=$(".share-via-email");
function an(){var aw=location.href,ax=function(){return aw
};
return ax()
}function al(){var ax=$("head > title").text(),aw="mailto:?subject="+encodeURIComponent(ax)+"&body=Check out the resources that are available for this Pearson title: \n"+an();
return aw
}function ak(ax,ay,aw){if(ax){if(arguments.length===2){ax.text(ay)
}else{ax.attr("href",aw)
}}}if(av.length>0){function ap(){var aw='<div class="share-via-email-popup" role="dialog" aria-modal="true" aria-labelledby="dialog__email-share-header" id="dialog__email-share"><h4 class="share-popup-title" id="dialog__email-share-header">Share a link</h4><p class="email-share"><a><i class="fa fa-envelope fa-2" aria-hidden="true"></i> Share</a></p></div>';
$(aw).appendTo($("body"))
}ap();
popUp(av,$(".share-via-email-popup"));
ak($(".share-via-email-popup .email-share a"),an(),al())
}function at(){var aw=$("main .blog-flex-social-share"),ay=$("head > title").text(),ax=location.protocol+"//"+location.host+location.pathname;
aw.find("li a").attr("target","_blank");
aw.find("li.blog-flex-share-youtube").add("li.blog-flex-share-google").remove();
aw.find("ul").append('<li class="blog-flex-share-email"><a href="mailto:?subject='+encodeURIComponent(ay)+"&body=I thought you'd be interested in this: \n"+ax+'"><span class="share-title">Email</span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" focusable="false"><title>email</title><path fill="#fff" d="M28 11.094v12.406c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-12.406c0.469 0.516 1 0.969 1.578 1.359 2.594 1.766 5.219 3.531 7.766 5.391 1.313 0.969 2.938 2.156 4.641 2.156h0.031c1.703 0 3.328-1.188 4.641-2.156 2.547-1.844 5.172-3.625 7.781-5.391 0.562-0.391 1.094-0.844 1.563-1.359zM28 6.5c0 1.75-1.297 3.328-2.672 4.281-2.438 1.687-4.891 3.375-7.313 5.078-1.016 0.703-2.734 2.141-4 2.141h-0.031c-1.266 0-2.984-1.437-4-2.141-2.422-1.703-4.875-3.391-7.297-5.078-1.109-0.75-2.688-2.516-2.688-3.938 0-1.531 0.828-2.844 2.5-2.844h23c1.359 0 2.5 1.125 2.5 2.5z"></path></svg></a></li>');
aw.append('<div class="blog-flex-share-link"><span tabindex="-1">'+ax+'</span><button class="button" id="copy-share-link">Copy</button></div>');
aw.after('<div class="social-share-popup-trigger--container"><button class="social-share-popup-trigger button--unstyled" name="share-this-page" id="share-this-page">Share this page</button></div>');
aw.addClass("social-share-popup").prepend('<h4 class="share-popup-title" id="dialog__social-share-header">Share</h4>').appendTo($("body"))
}at();
popUp($(".social-share-popup-trigger"),$(".social-share-popup"));
var au=$(".blog-flex-share-link span"),aq=$(".blog-flex-share-link button"),aj=$(".share-via-email-popup .email-share a");
function am(){au.removeClass("highlight")
}function ar(){au.addClass("highlight");
setTimeout(am,2000)
}aq.click(function(ax){var aw=location.protocol+"//"+location.host+location.pathname;
ar();
ax.preventDefault();
clipboard.copy(aw)
});
function ao(){ak(aj,an(),al())
}$(".tab-panel").click(function(){setTimeout(ao,500)
})
}function W(){var aj=$(".content-tile-content-expander-link"),al=$(".column-control-content-expander");
if(aj.length>0){var ak=ab("expand");
aj.each(function(ar){var an=$(this),av=an.find("figcaption > h2, figcaption > a h2").text(),aA=av.replace(/\s/g,""),at=an.find("figure"),aq=at.find("picture").html(),ax=at.find("figcaption").html(),aw=an.find("figcaption > .content-tile-subtitle, figcaption > a .content-tile-subtitle").text(),ay=an.find("figcaption > .content-tile-text").html();
var au=an.find("figure > a"),ap=au.attr("href");
at.append('<a href="'+ap+'" class="expand-link"></a>');
var am=at.find(".expand-link");
am.append("<picture>"+aq+"</picture>").append("<figcaption>"+ax+"</figcaption>");
am.find("a").attr("tabindex","-1");
at.find(">*").not(".expand-link").remove();
au=an.find("figure > a");
ap=au.attr("href");
if(al.length==0){au.attr("href",ap+"?expand="+aA)
}else{al.addClass("flex-layout-tablet");
an.parent().after('<div class="director-info col-xs-12" aria-expanded="false"><a href="#" aria-label="Close info" class="close-info" tabindex="0"></a><h3>'+av+"</h3><h5>"+aw+"</h5>"+ay+"</div>");
var ao=$(".director-info"),az=ao.find(">a");
au.click(function(aD){aD.preventDefault();
var aB=$(".director-info"),aC=aB.eq(ar);
aB.hide();
if(an.hasClass("director-selected")){an.removeClass("director-selected");
aj.removeClass("director-selected");
aC.hide();
aC.attr("aria-expanded","false")
}else{aj.removeClass("director-selected");
aC.show();
aC.attr("aria-expanded","true");
an.addClass("director-selected");
$("html, body").animate({scrollTop:an.offset().top},500)
}});
az.click(function(aB){aB.preventDefault();
ao.hide();
ao.attr("aria-expanded","false");
an.removeClass("director-selected")
});
if(ak==aA){au.trigger("click")
}}})
}if(al.length>0){if(al.find(".column-control-expanded-content").length>0&&!($("body").hasClass("edit"))){al.css({"padding-bottom":0,"padding-top":0});
al.find(">.container >.row >.col-xs-12 >.column-control").not(".column-control-expanded-content").addClass("flex-layout-tablet");
al.each(function(){var an=$(this),am=an.find(".column-control-expanded-content"),ao=an.find(".content-tile-book-box, .content-tile-book-box-v2");
am.append('<a href="#" aria-label="Close info" class="close-info" tabindex="0"></a>');
var ap=am.find(".close-info");
ap.click(function(aq){aq.preventDefault();
am.hide();
ao.removeClass("selected")
});
ao.each(function(ar){var at=$(this),aq=at.parent();
aq.after(am.eq(ar));
at.click(function(aw){aw.preventDefault();
var au=an.find(".column-control-expanded-content"),av=au.eq(ar);
au.hide();
av.show();
ao.removeClass("selected");
at.addClass("selected");
$("html, body").animate({scrollTop:at.offset().top},500)
})
})
})
}}}function ac(){$(".tab-panel-filters .tag-list").addClass("tags-filter posts-filter");
$(".search-facets").addClass("tags-filter posts-filter");
$(".tab-panel-filters .author-list").addClass("tags-filter author-filter");
var aD=$(".search-facets");
aD.wrap('<div class="search-facets-container"></div>');
var ak=$(".tab-panel-filters .text");
ak.each(function(){var aO=$(this).find("ul");
if(aO.length>0){$(this).addClass("tags-filter text-category-filter")
}});
function aF(){var aO=$(".blog-list-link");
if(aO.length>0){var aP=aO.find("a").attr("href");
return aP
}else{return""
}}var au=$(".tags-filter"),aq=$(".tags-filter-container"),ax=window.location.pathname,aG=$(".tags-filter-container .content-tile"),aL=ab("filterBy"),aw=ab("archiveDate"),aB=$(".filter-by-first-tag"),aJ=$(".filters-to-blog-list"),aN=aF();
if(au.length>0){au.each(function(){var aQ=$(this);
aQ.append('<select label="Filter by tag" aria-label="Filter by tag"> </select><i></i>');
var aO=aQ.find("select"),aP=aQ.find("li");
aP.each(function(aS){var aT=$(this),aV=aT.find("a").attr("href"),aU=aT.text().replace(/\s/g,""),aR=aT.text().trim();
if(aq.length>0){aO.append('<option value="'+aR+'">'+aR+"</option>")
}else{if(aV==undefined){aO.append('<option value="'+aU+'">'+aR+"</option>")
}else{aO.append('<option value="'+aV+'">'+aR+"</option>")
}}})
});
au.find("option").eq(0).val("All");
var ap=$(".posts-filter select"),ao=$(".text-category-filter select"),aI=$(".author-filter select"),az=$(".tags-filter").not(".posts-filter, .text-category-filter, .author-filter").find("select");
function aM(aP,aO,aQ){aP.parent().parent().append('<span class="submit-button"><button type="submit" class="'+aO+' disabled-btn">'+aQ+'</button></span> <a href="#" title="Clear filter"  aria-label="Clear filter" class="clear-filter">Clear filter</a>')
}function al(aO,aP){aO.click(function(){var aS=aP.val(),aQ=aS.substr((aS.indexOf("?")),aS.length),aR=aP.find("option:selected").text().replace(/\s/g,"");
console.log(aQ);
if(aP.parent().hasClass("text-category-filter")){window.location.href=aS
}else{if(aJ.length>0&&aN.length>0){if(aS=="All"||aS=="All posts"||aS=="All authors"){window.location.href=aN
}else{window.location.href=aN+aQ+"&filterBy="+aR
}}else{if(aS=="All"||aS=="All posts"||aS=="All authors"){window.location.href=ax
}else{window.location.href=aS+"&filterBy="+aR
}}}})
}function am(aO){aO.find("option").each(function(){var aR=$(this),aP=aR.text().replace(/\s/g,""),aT=aR.val();
if(aT==aL||aP==aL){aO.val(aT);
aR.parent().parent().addClass("params-set");
var aQ=$(".tab-panel"),aV=aQ.find(".nav >li"),aU=aQ.find(".tab-pane");
if(aQ.has(aR)){aV.removeClass("active");
aU.removeClass("active");
aR.closest(aU).addClass("active");
var aS=aR.closest(aU).index();
aV.eq(aS).addClass("active")
}}})
}function aA(aO,aP){aP.change(function(){aP.find("option").each(function(){if($(this).is(":selected")){aO.removeClass("disabled-btn")
}})
})
}az.parent().append('<span class="submit-button tags-filter-submit"><button type="submit" class="tags-filter-btn disabled-btn" title="Filter content" title="Filter content">Go</button></span> <a href="#" title="Clear filter"  aria-label="Clear filter" class="clear-content-tags-filter">Clear filter</a>');
var an=$(".tags-filter-btn"),ay=$(".clear-content-tags-filter");
aA(an,az);
(function at(){var aO;
az.on("change",function(){aO=this.value
});
an.click(function(){if(aO=="All"||aO=="All posts"){aG.removeClass("hide-item");
return
}else{aG.addClass("hide-item");
aG.each(function(){var aP=$(this),aQ=aP.find(".content-tile-tags li");
aQ.each(function(){var aR=$(this).find("a").text();
if(aR==aO){aP.removeClass("hide-item")
}})
})
}});
ay.click(function(aP){aP.preventDefault();
aG.removeClass("hide-item")
})
})();
aM(ap,"posts-filter-btn","Filter");
var aK=$(".posts-filter-btn");
al(aK,ap);
am(ap);
aA(aK,ap);
ao.attr("label","Filter by category");
aM(ao,"category-filter-btn","Go");
var av=$(".category-filter-btn");
al(av,ao);
am(ao);
aA(av,ao);
aM(aI,"author-filter-btn","Filter");
var aE=$(".author-filter-btn");
al(aE,aI);
am(aI);
aA(aE,aI);
var aC=$(".clear-filter");
aC.each(function(){var aP=$(this),aO=aP.parent().find("select"),aQ=aO.find("option").eq(0).text().replace(/\s/g,"");
aP.click(function(aR){aR.preventDefault();
console.log(ax+"?filterBy="+aQ);
window.location.href=ax+"?filterBy="+aQ
})
});
if(aL==undefined&&aw==undefined&&aB.length>0){var aH=ap.find("option").eq(1),aj=aH.val(),ar=aH.text().replace(/\s/g,"")
}}}function e(){$(".tab-panel-filters .form").addClass("form-date-filter");
function aw(){var az=$(".blog-list-link");
if(az.length>0){var aA=az.find("a").attr("href");
return aA
}else{return""
}}var au=$(".form-date-filter");
if(au.length>0){var ao=au.find('select[name="filter_by_month"]'),at=au.find('select[name="filter_by_year"]'),ak=au.find("select"),ar=au.find(".submit-button button"),av=window.location.pathname,ap=ab("archiveDate"),am=aw(),aq=$(".filters-to-blog-list");
au.append('<a href="#" class="clear-filter clear-date-filter" title="Clear filter">Clear filter</a>');
ar.addClass("disabled-btn");
var ax=au.find(".clear-date-filter");
ax.click(function(az){az.preventDefault();
window.location.href=av
});
var ay=false,an=false;
at.change(function(){at.find("option").each(function(){if($(this).is(":selected")){ay=$(this).val()
}})
});
ao.change(function(){ao.find("option").each(function(){if($(this).is(":selected")){an=$(this).val()
}})
});
ak.change(function(){if(ay&&an){ar.removeClass("disabled-btn")
}else{ar.addClass("disabled-btn")
}});
if(!(ap==undefined)){var aj=ap.substr(0,4),al=ap.substr(5,7);
at.find("option").each(function(){var az=$(this).val();
if(az==aj){at.val(aj);
ay=az
}});
ao.find("option").each(function(){var az=$(this).val();
if(az==al){ao.val(al);
an=az
}});
ak.change(function(){if(ay||an){ar.removeClass("disabled-btn")
}})
}ar.click(function(az){az.preventDefault();
var aA;
if(ay&&an){if(aq.length>0&&am.length>0){aA=am+"?archiveDate="+ay+"-"+an
}else{aA=av+"?archiveDate="+ay+"-"+an
}window.location.href=aA
}})
}}function ah(){var aj=$(".tab-panel");
if(aj.length>0){aj.each(function(){var an=$(this),ar=an.find(".dynamic-content-nav"),ao=an.find(".nav-tabs li"),aq=an.find(".tab-pane");
ao.each(function(av){var aw=$(this),az=aw.find("a"),at=az.attr("href"),ax=aw.find("a").text(),au=Number(av+1);
if(ar.length>0){if(av==0){az.trigger("click")
}}aq.each(function(aB){var aD=$(this),aA=aD.find("h2");
aA.eq(0).css("margin-top",0);
if(av==aB){aD.before('<div class="tab-panel-nav-item" id="'+at+'"><a href="#">'+ax+"</a></div>")
}var aC=aD.find(".title h1"),aF=aD.find(".title").eq(0).find("h2"),aE=aF.text();
if(aC.length==0&&aF.length>0&&!($("body").hasClass("edit"))){aF.after('<div class="title"><h1>'+aE+"</h1></div>");
aF.remove()
}});
var ay=an.find(".tab-panel-nav-item");
aw.click(function(){ay.each(function(){var aB=$(this),aA=aB.attr("id");
if(aA==at){aB.addClass("active");
setTimeout(function(){aB.addClass("active")
},300)
}})
})
});
var ap=an.find(".tab-panel-nav-item");
if(ap.css("display")=="block"){if(document.location.search.length==0){ap.removeClass("active");
aq.removeClass("active")
}}aq.each(function(at){var au=$(this);
if(au.hasClass("active")){ap.removeClass("active");
ap.each(function(av){if(at==av){$(this).addClass("active")
}})
}});
ap.each(function(at){var au=$(this),av=au.find("a");
av.click(function(aw){aw.preventDefault();
if(au.hasClass("active")){ap.removeClass("active");
aq.removeClass("active");
ao.removeClass("active")
}else{ap.removeClass("active");
au.addClass("active");
aq.removeClass("active");
ao.removeClass("active");
aq.each(function(ax){if(at==ax){$(this).addClass("active")
}});
ao.each(function(ax){if(at==ax){$(this).addClass("active")
}})
}})
});
if(an.hasClass("tab-panel-features-blue--show-more")&&!O&&!($("body").hasClass("edit"))&&ao.length>3){an.find(".nav-tabs").append('<li class="show-more"><a href="#">More<i></i></a><ul></ul></li>');
var ak=an.find(".show-more ul"),am=an.find(".show-more"),al=am.find(">a");
ao.each(function(au){var av=$(this),at=av.text();
if(au>3&&!(at=="Order")&&!(at=="Order Info")){av.appendTo(ak);
av.click(function(){$(".before-sub").removeClass("active").attr("aria-selected",false);
am.removeClass("open").addClass("active");
al.text(at);
al.append("<i />")
})
}if(au<4||at=="Order"||at=="Order Info"){av.addClass("before-sub");
av.click(function(){ak.find("li").removeClass("active").attr("aria-selected",false);
am.removeClass("open").removeClass("active");
al.text("More");
al.append("<i />")
})
}});
al.click(function(at){at.preventDefault();
am.toggleClass("open")
})
}})
}}function C(){var ak=$('select[name="filter_content"]');
if(ak.length>0){ak.parent().parent().addClass("dropdown-filter").append('<span class="submit-button submit-filter"><button type="submit" class="filter-btn disabled-btn" title="Filter content" title="Filter content">Go</button></span> <a href="#" title="Clear filter"  aria-label="Clear filter" class="clear-filter clear-content-filter">Clear filter</a>');
var an=$(".content-filter-container"),al=$(".submit-filter button"),aj=$(".clear-content-filter"),am=0;
ak.change(function(){ak.find("option").each(function(ao){var ap=$(this);
if(ap.is(":selected")){console.log(ao+": "+ap.val());
am=ao-1;
if(!(ao==0)){al.removeClass("disabled-btn")
}}})
});
al.click(function(){if(am>-1){console.log(am);
an.each(function(ao){var ap=$(this);
if(ao==am){an.hide();
ap.show()
}})
}else{an.show()
}});
aj.click(function(ao){ao.preventDefault();
an.show()
})
}}function M(){var aj=$(".mailchimp");
if(aj.length>0){aj.append('<div id="mc_embed_signup"> <form action="//pearson.us5.list-manage.com/subscribe/post?u=8584f17f8bbe02d4ddf7f1810&amp;id=0f1418b01e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate> <div id="mc_embed_signup_scroll"> <div class="indicates-required"><span class="asterisk">*</span> indicates required</div> <div class="mc-field-group"> <label for="mce-EMAIL">Email Address <span class="asterisk">*</span> </label> <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"> </div> <div class="mc-field-group"> <label for="mce-FNAME">First Name </label> <input type="text" value="" name="FNAME" class="" id="mce-FNAME"> </div> <div class="mc-field-group"> <label for="mce-LNAME">Last Name </label> <input type="text" value="" name="LNAME" class="" id="mce-LNAME"> </div> <div class="mc-field-group input-group"> <legend>Type of news </legend> <label class="checkbox" for="mce-group[1]-1-0"><input type="checkbox" value="4" name="group[1][4]" id="mce-group[1]-1-0"><span></span>General news</label> <label class="checkbox" for="mce-group[1]-1-1"><input type="checkbox" value="1" name="group[1][1]" id="mce-group[1]-1-1"><span></span>Trading, Acquisitions &amp; Disposals</label> <label class="checkbox" for="mce-group[1]-1-2"><input type="checkbox" value="2" name="group[1][2]" id="mce-group[1]-1-2"><span></span>Regulatory announcements (RNS)</label> </div> <div class="mc-field-group input-group"> <legend>Email Format </legend> <div class="radio-list"> <label for="mce-EMAILTYPE-0" tabindex="0"><input type="radio" value="html" name="EMAILTYPE" id="mce-EMAILTYPE-0"><span class="check"></span>html</label> <label for="mce-EMAILTYPE-1" tabindex="0"><input type="radio" value="text" name="EMAILTYPE" id="mce-EMAILTYPE-1"><span class="check"></span>text</label> </div> </div> <div id="mce-responses" class="clear"> <div class="response" id="mce-error-response" style="display:none"></div> <div class="response" id="mce-success-response" style="display:none"></div> </div> <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_8584f17f8bbe02d4ddf7f1810_0f1418b01e" tabindex="-1" value=""></div> <div class="clear btn-submit"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div> </div> </form> </div> <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"><\/script>')
}(function(){window.fnames=new Array();
window.ftypes=new Array();
fnames[0]="EMAIL";
ftypes[0]="email";
fnames[1]="FNAME";
ftypes[1]="text";
fnames[2]="LNAME";
ftypes[2]="text"
}());
var ak=$(".radio-list label");
if(ak.length>0){ak.each(function(){var am=$(this),al=am.find("input");
am.focus(function(){$(window).keypress(function(an){if(an.keyCode===0||an.keyCode===32||an.keyCode===13){an.preventDefault();
al.prop("checked",true)
}})
})
})
}}
/*! lightslider - v1.1.6 - 2016-10-25
 * https://github.com/sachinchoolur/lightslider
 * Copyright (c) 2016 Sachin N; Licensed MIT */
(function(aj,al){var ak={item:3,autoWidth:false,slideMove:1,slideMargin:10,addClass:"",mode:"slide",useCSS:true,cssEasing:"ease",easing:"linear",speed:400,auto:false,pauseOnHover:false,loop:false,slideEndAnimation:true,pause:2000,keyPress:false,controls:true,prevHtml:"",nextHtml:"",rtl:false,adaptiveHeight:false,vertical:false,verticalHeight:500,vThumbWidth:100,thumbItem:10,pager:true,gallery:false,galleryMargin:5,thumbMargin:5,currentPagerPosition:"middle",enableTouch:true,enableDrag:true,freeMove:true,swipeThreshold:40,responsive:[],onBeforeStart:function(am){},onSliderLoad:function(am){},onBeforeSlide:function(am,an){},onAfterSlide:function(am,an){},onBeforeNextSlide:function(am,an){},onBeforePrevSlide:function(am,an){}};
aj.fn.lightSlider=function(am){if(this.length===0){return this
}if(this.length>1){this.each(function(){aj(this).lightSlider(am)
});
return this
}var an={},aG=aj.extend(true,{},ak,am),ax={},aK=this;
an.$el=this;
if(aG.mode==="fade"){aG.vertical=false
}var aD=aK.children(),aC=aj(window).width(),aJ=null,az=null,ap=0,aB=0,aA=false,aF=0,aE="",aI=0,aw=(aG.vertical===true)?"height":"width",ao=(aG.vertical===true)?"margin-bottom":"margin-right",au=0,av=0,at=0,ar=0,aH=null,ay=("ontouchstart" in document.documentElement);
var aq={};
aq.chbreakpoint=function(){aC=aj(window).width();
if(aG.responsive.length){var aO;
if(aG.autoWidth===false){aO=aG.item
}if(aC<aG.responsive[0].breakpoint){for(var aN=0;
aN<aG.responsive.length;
aN++){if(aC<aG.responsive[aN].breakpoint){aJ=aG.responsive[aN].breakpoint;
az=aG.responsive[aN]
}}}if(typeof az!=="undefined"&&az!==null){for(var aM in az.settings){if(az.settings.hasOwnProperty(aM)){if(typeof ax[aM]==="undefined"||ax[aM]===null){ax[aM]=aG[aM]
}aG[aM]=az.settings[aM]
}}}if(!aj.isEmptyObject(ax)&&aC>aG.responsive[0].breakpoint){for(var aL in ax){if(ax.hasOwnProperty(aL)){aG[aL]=ax[aL]
}}}if(aG.autoWidth===false){if(au>0&&at>0){if(aO!==aG.item){aI=Math.round(au/((at+aG.slideMargin)*aG.slideMove))
}}}}};
aq.calSW=function(){if(aG.autoWidth===false){at=(aF-((aG.item*(aG.slideMargin))-aG.slideMargin))/aG.item
}};
aq.calWidth=function(aN){var aM=aN===true?aE.find(".lslide").length:aD.length;
if(aG.autoWidth===false){aB=aM*(at+aG.slideMargin)
}else{aB=0;
for(var aL=0;
aL<aM;
aL++){aB+=(parseInt(aD.eq(aL).width())+aG.slideMargin)
}}return aB
};
an={doCss:function(){var aL=function(){var aO=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"];
var aM=document.documentElement;
for(var aN=0;
aN<aO.length;
aN++){if(aO[aN] in aM.style){return true
}}};
if(aG.useCSS&&aL()){return true
}return false
},keyPress:function(){if(aG.keyPress){aj(document).on("keyup.lightslider",function(aL){if(!aj(":focus").is("input, textarea")){if(aL.preventDefault){aL.preventDefault()
}else{aL.returnValue=false
}if(aL.keyCode===37){aK.goToPrevSlide()
}else{if(aL.keyCode===39){aK.goToNextSlide()
}}}})
}},controls:function(){if(aG.controls){aK.after('<div class="lSAction"><a class="lSPrev">'+aG.prevHtml+'</a><a class="lSNext">'+aG.nextHtml+"</a></div>");
if(!aG.autoWidth){if(ap<=aG.item){aE.find(".lSAction").hide()
}}else{if(aq.calWidth(false)<aF){aE.find(".lSAction").hide()
}}aE.find(".lSAction a").on("click",function(aL){if(aL.preventDefault){aL.preventDefault()
}else{aL.returnValue=false
}if(aj(this).attr("class")==="lSPrev"){aK.goToPrevSlide()
}else{aK.goToNextSlide()
}return false
})
}},initialStyle:function(){var aL=this;
if(aG.mode==="fade"){aG.autoWidth=false;
aG.slideEndAnimation=false
}if(aG.auto){aG.slideEndAnimation=false
}if(aG.autoWidth){aG.slideMove=1;
aG.item=1
}if(aG.loop){aG.slideMove=1;
aG.freeMove=false
}aG.onBeforeStart.call(this,aK);
aq.chbreakpoint();
aK.addClass("lightSlider").wrap('<div class="lSSlideOuter '+aG.addClass+'"><div class="lSSlideWrapper"></div></div>');
aE=aK.parent(".lSSlideWrapper");
if(aG.rtl===true){aE.parent().addClass("lSrtl")
}if(aG.vertical){aE.parent().addClass("vertical");
aF=aG.verticalHeight;
aE.css("height",aF+"px")
}else{aF=aK.outerWidth()
}aD.addClass("lslide");
if(aG.loop===true&&aG.mode==="slide"){aq.calSW();
aq.clone=function(){if(aq.calWidth(true)>aF){var aO=0,aR=0;
for(var aN=0;
aN<aD.length;
aN++){aO+=(parseInt(aK.find(".lslide").eq(aN).width())+aG.slideMargin);
aR++;
if(aO>=(aF+aG.slideMargin)){break
}}var aS=aG.autoWidth===true?aR:aG.item;
if(aS<aK.find(".clone.left").length){for(var aQ=0;
aQ<aK.find(".clone.left").length-aS;
aQ++){aD.eq(aQ).remove()
}}if(aS<aK.find(".clone.right").length){for(var aP=aD.length-1;
aP>(aD.length-1-aK.find(".clone.right").length);
aP--){aI--;
aD.eq(aP).remove()
}}for(var aT=aK.find(".clone.right").length;
aT<aS;
aT++){aK.find(".lslide").eq(aT).clone().removeClass("lslide").addClass("clone right").appendTo(aK);
aI++
}for(var aM=aK.find(".lslide").length-aK.find(".clone.left").length;
aM>(aK.find(".lslide").length-aS);
aM--){aK.find(".lslide").eq(aM-1).clone().removeClass("lslide").addClass("clone left").prependTo(aK)
}aD=aK.children()
}else{if(aD.hasClass("clone")){aK.find(".clone").remove();
aL.move(aK,0)
}}};
aq.clone()
}aq.sSW=function(){ap=aD.length;
if(aG.rtl===true&&aG.vertical===false){ao="margin-left"
}if(aG.autoWidth===false){aD.css(aw,at+"px")
}aD.css(ao,aG.slideMargin+"px");
aB=aq.calWidth(false);
aK.css(aw,aB+"px");
if(aG.loop===true&&aG.mode==="slide"){if(aA===false){aI=aK.find(".clone.left").length
}}};
aq.calL=function(){aD=aK.children();
ap=aD.length
};
if(this.doCss()){aE.addClass("usingCss")
}aq.calL();
if(aG.mode==="slide"){aq.calSW();
aq.sSW();
if(aG.loop===true){au=aL.slideValue();
this.move(aK,au)
}if(aG.vertical===false){this.setHeight(aK,false)
}}else{this.setHeight(aK,true);
aK.addClass("lSFade");
if(!this.doCss()){aD.fadeOut(0);
aD.eq(aI).fadeIn(0)
}}if(aG.loop===true&&aG.mode==="slide"){aD.eq(aI).addClass("active")
}else{aD.first().addClass("active")
}},pager:function(){var aM=this;
aq.createPager=function(){ar=(aF-((aG.thumbItem*(aG.thumbMargin))-aG.thumbMargin))/aG.thumbItem;
var aV=aE.find(".lslide");
var aP=aE.find(".lslide").length;
var aT=0,aS="",aW=0;
for(aT=0;
aT<aP;
aT++){if(aG.mode==="slide"){if(!aG.autoWidth){aW=aT*((at+aG.slideMargin)*aG.slideMove)
}else{aW+=((parseInt(aV.eq(aT).width())+aG.slideMargin)*aG.slideMove)
}}var aO=aV.eq(aT*aG.slideMove).attr("data-thumb");
if(aG.gallery===true){aS+='<li style="width:100%;'+aw+":"+ar+"px;"+ao+":"+aG.thumbMargin+'px"><a href="#"><img src="'+aO+'" /></a></li>'
}else{aS+='<li><a href="#">'+(aT+1)+"</a></li>"
}if(aG.mode==="slide"){if((aW)>=aB-aF-aG.slideMargin){aT=aT+1;
var aR=2;
if(aG.autoWidth){aS+='<li><a href="#">'+(aT+1)+"</a></li>";
aR=1
}if(aT<aR){aS=null;
aE.parent().addClass("noPager")
}else{aE.parent().removeClass("noPager")
}break
}}}var aU=aE.parent();
aU.find(".lSPager").html(aS);
if(aG.gallery===true){if(aG.vertical===true){aU.find(".lSPager").css("width",aG.vThumbWidth+"px")
}av=(aT*(aG.thumbMargin+ar))+0.5;
aU.find(".lSPager").css({property:av+"px","transition-duration":aG.speed+"ms"});
if(aG.vertical===true){aE.parent().css("padding-right",(aG.vThumbWidth+aG.galleryMargin)+"px")
}aU.find(".lSPager").css(aw,av+"px")
}var aQ=aU.find(".lSPager").find("li");
aQ.first().addClass("active");
aQ.on("click",function(){if(aG.loop===true&&aG.mode==="slide"){aI=aI+(aQ.index(this)-aU.find(".lSPager").find("li.active").index())
}else{aI=aQ.index(this)
}aK.mode(false);
if(aG.gallery===true){aM.slideThumb()
}return false
})
};
if(aG.pager){var aL="lSpg";
if(aG.gallery){aL="lSGallery"
}aE.after('<ul class="lSPager '+aL+'"></ul>');
var aN=(aG.vertical)?"margin-left":"margin-top";
aE.parent().find(".lSPager").css(aN,aG.galleryMargin+"px");
aq.createPager()
}setTimeout(function(){aq.init()
},0)
},setHeight:function(aM,aP){var aO=null,aN=this;
if(aG.loop){aO=aM.children(".lslide ").first()
}else{aO=aM.children().first()
}var aL=function(){var aR=aO.outerHeight(),aS=0,aQ=aR;
if(aP){aR=0;
aS=((aQ)*100)/aF
}aM.css({height:aR+"px","padding-bottom":aS+"%"})
};
aL();
if(aO.find("img").length){if(aO.find("img")[0].complete){aL();
if(!aH){aN.auto()
}}else{aO.find("img").on("load",function(){setTimeout(function(){aL();
if(!aH){aN.auto()
}},100)
})
}}else{if(!aH){aN.auto()
}}},active:function(aN,aO){if(this.doCss()&&aG.mode==="fade"){aE.addClass("on")
}var aP=0;
if(aI*aG.slideMove<ap){aN.removeClass("active");
if(!this.doCss()&&aG.mode==="fade"&&aO===false){aN.fadeOut(aG.speed)
}if(aO===true){aP=aI
}else{aP=aI*aG.slideMove
}var aM,aL;
if(aO===true){aM=aN.length;
aL=aM-1;
if(aP+1>=aM){aP=aL
}}if(aG.loop===true&&aG.mode==="slide"){if(aO===true){aP=aI-aK.find(".clone.left").length
}else{aP=aI*aG.slideMove
}if(aO===true){aM=aN.length;
aL=aM-1;
if(aP+1===aM){aP=aL
}else{if(aP+1>aM){aP=0
}}}}if(!this.doCss()&&aG.mode==="fade"&&aO===false){aN.eq(aP).fadeIn(aG.speed)
}aN.eq(aP).addClass("active")
}else{aN.removeClass("active");
aN.eq(aN.length-1).addClass("active");
if(!this.doCss()&&aG.mode==="fade"&&aO===false){aN.fadeOut(aG.speed);
aN.eq(aP).fadeIn(aG.speed)
}}},move:function(aM,aL){if(aG.rtl===true){aL=-aL
}if(this.doCss()){if(aG.vertical===true){aM.css({transform:"translate3d(0px, "+(-aL)+"px, 0px)","-webkit-transform":"translate3d(0px, "+(-aL)+"px, 0px)"})
}else{aM.css({transform:"translate3d("+(-aL)+"px, 0px, 0px)","-webkit-transform":"translate3d("+(-aL)+"px, 0px, 0px)",})
}}else{if(aG.vertical===true){aM.css("position","relative").animate({top:-aL+"px"},aG.speed,aG.easing)
}else{aM.css("position","relative").animate({left:-aL+"px"},aG.speed,aG.easing)
}}var aN=aE.parent().find(".lSPager").find("li");
this.active(aN,true)
},fade:function(){this.active(aD,false);
var aL=aE.parent().find(".lSPager").find("li");
this.active(aL,true)
},slide:function(){var aL=this;
aq.calSlide=function(){if(aB>aF){au=aL.slideValue();
aL.active(aD,false);
if((au)>aB-aF-aG.slideMargin){au=aB-aF-aG.slideMargin
}else{if(au<0){au=0
}}aL.move(aK,au);
if(aG.loop===true&&aG.mode==="slide"){if(aI>=(ap-(aK.find(".clone.left").length/aG.slideMove))){aL.resetSlide(aK.find(".clone.left").length)
}if(aI===0){aL.resetSlide(aE.find(".lslide").length)
}}}};
aq.calSlide()
},resetSlide:function(aL){var aM=this;
aE.find(".lSAction a").addClass("disabled");
setTimeout(function(){aI=aL;
aE.css("transition-duration","0ms");
au=aM.slideValue();
aM.active(aD,false);
an.move(aK,au);
setTimeout(function(){aE.css("transition-duration",aG.speed+"ms");
aE.find(".lSAction a").removeClass("disabled")
},50)
},aG.speed+100)
},slideValue:function(){var aM=0;
if(aG.autoWidth===false){aM=aI*((at+aG.slideMargin)*aG.slideMove)
}else{aM=0;
for(var aL=0;
aL<aI;
aL++){aM+=(parseInt(aD.eq(aL).width())+aG.slideMargin)
}}return aM
},slideThumb:function(){var aM;
switch(aG.currentPagerPosition){case"left":aM=0;
break;
case"middle":aM=(aF/2)-(ar/2);
break;
case"right":aM=aF-ar
}var aO=aI-aK.find(".clone.left").length;
var aN=aE.parent().find(".lSPager");
if(aG.mode==="slide"&&aG.loop===true){if(aO>=aN.children().length){aO=0
}else{if(aO<0){aO=aN.children().length
}}}var aL=aO*((ar+aG.thumbMargin))-(aM);
if((aL+aF)>av){aL=av-aF-aG.thumbMargin
}if(aL<0){aL=0
}this.move(aN,aL)
},auto:function(){if(aG.auto){clearInterval(aH);
aH=setInterval(function(){aK.goToNextSlide()
},aG.pause)
}},pauseOnHover:function(){var aL=this;
if(aG.auto&&aG.pauseOnHover){aE.on("mouseenter",function(){aj(this).addClass("ls-hover");
aK.pause();
aG.auto=true
});
aE.on("mouseleave",function(){aj(this).removeClass("ls-hover");
if(!aE.find(".lightSlider").hasClass("lsGrabbing")){aL.auto()
}})
}},touchMove:function(aM,aO){aE.css("transition-duration","0ms");
if(aG.mode==="slide"){var aP=aM-aO;
var aN=au-aP;
if((aN)>=aB-aF-aG.slideMargin){if(aG.freeMove===false){aN=aB-aF-aG.slideMargin
}else{var aL=aB-aF-aG.slideMargin;
aN=aL+((aN-aL)/5)
}}else{if(aN<0){if(aG.freeMove===false){aN=0
}else{aN=aN/5
}}}this.move(aK,aN)
}},touchEnd:function(aO){aE.css("transition-duration",aG.speed+"ms");
if(aG.mode==="slide"){var aL=false;
var aM=true;
au=au-aO;
if((au)>aB-aF-aG.slideMargin){au=aB-aF-aG.slideMargin;
if(aG.autoWidth===false){aL=true
}}else{if(au<0){au=0
}}var aN=function(aT){var aS=0;
if(!aL){if(aT){aS=1
}}if(!aG.autoWidth){var aQ=au/((at+aG.slideMargin)*aG.slideMove);
aI=parseInt(aQ)+aS;
if(au>=(aB-aF-aG.slideMargin)){if(aQ%1!==0){aI++
}}}else{var aP=0;
for(var aR=0;
aR<aD.length;
aR++){aP+=(parseInt(aD.eq(aR).width())+aG.slideMargin);
aI=aR+aS;
if(aP>=au){break
}}}};
if(aO>=aG.swipeThreshold){aN(false);
aM=false
}else{if(aO<=-aG.swipeThreshold){aN(true);
aM=false
}}aK.mode(aM);
this.slideThumb()
}else{if(aO>=aG.swipeThreshold){aK.goToPrevSlide()
}else{if(aO<=-aG.swipeThreshold){aK.goToNextSlide()
}}}},enableDrag:function(){var aO=this;
if(!ay){var aN=0,aM=0,aL=false;
aE.find(".lightSlider").addClass("lsGrab");
aE.on("mousedown",function(aP){if(aB<aF){if(aB!==0){return false
}}if(aj(aP.target).attr("class")!==("lSPrev")&&aj(aP.target).attr("class")!==("lSNext")){aN=(aG.vertical===true)?aP.pageY:aP.pageX;
aL=true;
if(aP.preventDefault){aP.preventDefault()
}else{aP.returnValue=false
}aE.scrollLeft+=1;
aE.scrollLeft-=1;
aE.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing");
clearInterval(aH)
}});
aj(window).on("mousemove",function(aP){if(aL){aM=(aG.vertical===true)?aP.pageY:aP.pageX;
aO.touchMove(aM,aN)
}});
aj(window).on("mouseup",function(aP){if(aL){aE.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab");
aL=false;
aM=(aG.vertical===true)?aP.pageY:aP.pageX;
var aQ=aM-aN;
if(Math.abs(aQ)>=aG.swipeThreshold){aj(window).on("click.ls",function(aR){if(aR.preventDefault){aR.preventDefault()
}else{aR.returnValue=false
}aR.stopImmediatePropagation();
aR.stopPropagation();
aj(window).off("click.ls")
})
}aO.touchEnd(aQ)
}})
}},enableTouch:function(){var aN=this;
if(ay){var aM={},aL={};
aE.on("touchstart",function(aO){aL=aO.originalEvent.targetTouches[0];
aM.pageX=aO.originalEvent.targetTouches[0].pageX;
aM.pageY=aO.originalEvent.targetTouches[0].pageY;
clearInterval(aH)
});
aE.on("touchmove",function(aO){if(aB<aF){if(aB!==0){return false
}}var aR=aO.originalEvent;
aL=aR.targetTouches[0];
var aP=Math.abs(aL.pageX-aM.pageX);
var aQ=Math.abs(aL.pageY-aM.pageY);
if(aG.vertical===true){if((aQ*3)>aP){aO.preventDefault()
}aN.touchMove(aL.pageY,aM.pageY)
}else{if((aP*3)>aQ){aO.preventDefault()
}aN.touchMove(aL.pageX,aM.pageX)
}});
aE.on("touchend",function(){if(aB<aF){if(aB!==0){return false
}}var aO;
if(aG.vertical===true){aO=aL.pageY-aM.pageY
}else{aO=aL.pageX-aM.pageX
}aN.touchEnd(aO)
})
}},build:function(){var aL=this;
aL.initialStyle();
if(this.doCss()){if(aG.enableTouch===true){aL.enableTouch()
}if(aG.enableDrag===true){aL.enableDrag()
}}aj(window).on("focus",function(){aL.auto()
});
aj(window).on("blur",function(){clearInterval(aH)
});
aL.pager();
aL.pauseOnHover();
aL.controls();
aL.keyPress()
}};
an.build();
aq.init=function(){aq.chbreakpoint();
if(aG.vertical===true){if(aG.item>1){aF=aG.verticalHeight
}else{aF=aD.outerHeight()
}aE.css("height",aF+"px")
}else{aF=aE.outerWidth()
}if(aG.loop===true&&aG.mode==="slide"){aq.clone()
}aq.calL();
if(aG.mode==="slide"){aK.removeClass("lSSlide")
}if(aG.mode==="slide"){aq.calSW();
aq.sSW()
}setTimeout(function(){if(aG.mode==="slide"){aK.addClass("lSSlide")
}},1000);
if(aG.pager){aq.createPager()
}if(aG.adaptiveHeight===true&&aG.vertical===false){aK.css("height",aD.eq(aI).outerHeight(true))
}if(aG.adaptiveHeight===false){if(aG.mode==="slide"){if(aG.vertical===false){an.setHeight(aK,false)
}else{an.auto()
}}else{an.setHeight(aK,true)
}}if(aG.gallery===true){an.slideThumb()
}if(aG.mode==="slide"){an.slide()
}if(aG.autoWidth===false){if(aD.length<=aG.item){aE.find(".lSAction").hide()
}else{aE.find(".lSAction").show()
}}else{if((aq.calWidth(false)<aF)&&(aB!==0)){aE.find(".lSAction").hide()
}else{aE.find(".lSAction").show()
}}};
aK.goToPrevSlide=function(){if(aI>0){aG.onBeforePrevSlide.call(this,aK,aI);
aI--;
aK.mode(false);
if(aG.gallery===true){an.slideThumb()
}}else{if(aG.loop===true){aG.onBeforePrevSlide.call(this,aK,aI);
if(aG.mode==="fade"){var aL=(ap-1);
aI=parseInt(aL/aG.slideMove)
}aK.mode(false);
if(aG.gallery===true){an.slideThumb()
}}else{if(aG.slideEndAnimation===true){aK.addClass("leftEnd");
setTimeout(function(){aK.removeClass("leftEnd")
},400)
}}}};
aK.goToNextSlide=function(){var aL=true;
if(aG.mode==="slide"){var aM=an.slideValue();
aL=aM<aB-aF-aG.slideMargin
}if(((aI*aG.slideMove)<ap-aG.slideMove)&&aL){aG.onBeforeNextSlide.call(this,aK,aI);
aI++;
aK.mode(false);
if(aG.gallery===true){an.slideThumb()
}}else{if(aG.loop===true){aG.onBeforeNextSlide.call(this,aK,aI);
aI=0;
aK.mode(false);
if(aG.gallery===true){an.slideThumb()
}}else{if(aG.slideEndAnimation===true){aK.addClass("rightEnd");
setTimeout(function(){aK.removeClass("rightEnd")
},400)
}}}};
aK.mode=function(aL){if(aG.adaptiveHeight===true&&aG.vertical===false){aK.css("height",aD.eq(aI).outerHeight(true))
}if(aA===false){if(aG.mode==="slide"){if(an.doCss()){aK.addClass("lSSlide");
if(aG.speed!==""){aE.css("transition-duration",aG.speed+"ms")
}if(aG.cssEasing!==""){aE.css("transition-timing-function",aG.cssEasing)
}}}else{if(an.doCss()){if(aG.speed!==""){aK.css("transition-duration",aG.speed+"ms")
}if(aG.cssEasing!==""){aK.css("transition-timing-function",aG.cssEasing)
}}}}if(!aL){aG.onBeforeSlide.call(this,aK,aI)
}if(aG.mode==="slide"){an.slide()
}else{an.fade()
}if(!aE.hasClass("ls-hover")){an.auto()
}setTimeout(function(){if(!aL){aG.onAfterSlide.call(this,aK,aI)
}},aG.speed);
aA=true
};
aK.play=function(){aK.goToNextSlide();
aG.auto=true;
an.auto()
};
aK.pause=function(){aG.auto=false;
clearInterval(aH)
};
aK.refresh=function(){aq.init()
};
aK.getCurrentSlideCount=function(){var aN=aI;
if(aG.loop){var aM=aE.find(".lslide").length,aL=aK.find(".clone.left").length;
if(aI<=aL-1){aN=aM+(aI-aL)
}else{if(aI>=(aM+aL)){aN=aI-aM-aL
}else{aN=aI-aL
}}}return aN+1
};
aK.getTotalSlideCount=function(){return aE.find(".lslide").length
};
aK.goToSlide=function(aL){if(aG.loop){aI=(aL+aK.find(".clone.left").length-1)
}else{aI=aL
}aK.mode(false);
if(aG.gallery===true){an.slideThumb()
}};
aK.destroy=function(){if(aK.lightSlider){aK.goToPrevSlide=function(){};
aK.goToNextSlide=function(){};
aK.mode=function(){};
aK.play=function(){};
aK.pause=function(){};
aK.refresh=function(){};
aK.getCurrentSlideCount=function(){};
aK.getTotalSlideCount=function(){};
aK.goToSlide=function(){};
aK.lightSlider=null;
aq={init:function(){}};
aK.parent().parent().find(".lSAction, .lSPager").remove();
aK.removeClass("lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap();
aK.children().removeAttr("style");
aD.removeClass("lslide active");
aK.find(".clone").remove();
aD=null;
aH=null;
aA=false;
aI=0
}};
setTimeout(function(){aG.onSliderLoad.call(this,aK)
},10);
aj(window).on("resize orientationchange",function(aL){setTimeout(function(){if(aL.preventDefault){aL.preventDefault()
}else{aL.returnValue=false
}aq.init()
},200)
});
return this
}
}(jQuery));
(function E(){$(".carousel").addClass("carousel-2").removeClass("carousel");
$(".carousel-indicators").remove();
var aj=$(".carousel-2");
aj.each(function(){var ao=$(this),ap=ao.find(".carousel-container"),am=ao.find(".carousel-inner"),ak=am.html();
ap.find("button").remove();
ap.append('<ul class="carousel-inner">'+ak+"</ul>");
ao.find("div.carousel-inner").remove();
var al=ao.find("ul.carousel-inner"),an=al.find(">div.item");
an.eq(0).removeClass("active");
an.each(function(){var at=$(this),aq=at.attr("class"),ar=at.html();
al.append('<li class="'+aq+'">'+ar+"</li>");
at.remove()
})
})
})();
(function H(){$(".carousel-2 ul.carousel-inner").lightSlider({item:1,auto:false,autoWidth:true,loop:true,pauseOnHover:true,slideMove:1,slideMargin:0});
var ak=$(".carousel-2");
if(ak.length>0){function aj(){ak.each(function(){var ao=$(this),an=ao.width(),al=ao.find(".item"),am=an*1;
al.width(am)
})
}aj()
}})();
function R(){var aj=$(".column-control-color-block-container");
if(aj.length>0){aj.each(function(){var al=$(this),ak=al.find(".column-control.column-control-color-block--text-full-width");
if(ak.length>0){var an=ak.parent(),am=an.find(">.content-tile"),ao=ak.height();
an.addClass("col-full-width");
am.height(ao)
}})
}}function I(){$(document).on("click",'*:not(.tabs-section) a[href*="#"]:not([href="#"]):not([data-toggle="tab"]):not(.no-scroll)',function(ak){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var al=$(this.hash),aj=this.hash;
al=al.length?al:$("[name="+this.hash.slice(1)+"]");
if(al.length){$("html, body").stop().animate({scrollTop:al.offset().top},500);
al.focus();
if(al.is(":focus")){return false
}else{al.attr("tabindex","-1");
al.focus()
}ak.preventDefault()
}}})
}function j(){if($(".embed-twitter-pearsonus").length>0||$(".embed-twitter-pearson").length>0||$(".embed-twitter-pearson_uk").length>0){$(".embed-twitter-pearsonus").append('<a class="twitter-timeline" href="https://twitter.com/PearsonNorthAm">Tweets by PearsonNorthAm</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"><\/script>');
$(".embed-twitter-pearson").append('<a class="twitter-timeline" href="https://twitter.com/pearson">Tweets by pearson</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"><\/script>');
$(".embed-twitter-pearson_uk").append('<a class="twitter-timeline" href="https://twitter.com/Pearson_UK">Tweets by pearson</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"><\/script>');
!function(an,aj,ao){var am,ak=an.getElementsByTagName(aj)[0],al=/^http:/.test(an.location)?"http":"https";
if(!an.getElementById(ao)){am=an.createElement(aj);
am.id=ao;
am.src=al+"://platform.twitter.com/widgets.js";
ak.parentNode.insertBefore(am,ak)
}}(document,"script","twitter-wjs");
$(document).ready(function(){var am=$("[class^=twitterembed]").attr("class");
if(typeof am!="undefined"){var ak=am.split("-");
var aj=ak[1];
var al='<a class="twitter-timeline" href="https://twitter.com/'+aj+'">Tweets by @'+aj+"</a>";
$("."+am).html(al)
}})
}}function a(){var ap=$("[class^=facebookembed]"),an=ap.attr("class");
if(typeof an!="undefined"){$("body").prepend('<div id="fb-root"></div>');
(function(au,aq,av){var at,ar=au.getElementsByTagName(aq)[0];
if(au.getElementById(av)){return
}at=au.createElement(aq);
at.id=av;
at.src="//connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v2.8&appId=515015685264159";
ar.parentNode.insertBefore(at,ar)
}(document,"script","facebook-jssdk"));
var am=ap.parent().outerWidth();
function ao(){if(am<500){return am
}else{return"500"
}}var aj=an.split("-");
var ak=aj[1];
var al='<div class="fb-page" data-href="https://www.facebook.com/'+ak+'/" data-tabs="timeline" data-width="'+ao()+'" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/'+ak+'/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/'+ak+'/">Pearson</a></blockquote></div>';
$("."+an).html(al)
}}function Q(){var aj=$(".duplicated-color");
if(aj.length>0&&!($("body").hasClass("edit"))){aj.each(function(){var ao=$(this),an=ao.find(".content-tile-color-block--half-img--text-right"),am=ao.find(".content-tile-color-block--half-img"),ak=an.find("figcaption").css("background-color"),ap=am.find("figcaption").css("background-color");
ao.find(">.container").prepend('<div class="bg-cover-left"></div>');
ao.find(">.container").append('<div class="bg-cover-right"></div>');
var aq=ao.find(".bg-cover-left"),al=ao.find(".bg-cover-right");
aq.css("background-color",ak);
al.css("background-color",ap)
})
}}(function(aj){aj.fn.middle_menu=function(ak){var al=aj.extend({},ak);
var an=ak.$root;
var am={init:function(){var ao=this;
an.each(function(){var az=aj(this);
if(az.hasClass("column-control-middle-menu")){var aA=az.find(".dynamic-content-overlay"),ay=aA.find("h4"),aq=[];
for(var ax=0,av=ay.length;
ax<av;
ax++){var aB=ay.eq(ax),au=aB.text(),ar=aB.parent().attr("href"),ap=au.split("- "),at=ao.capitalizeFirstLetter(ap[ap.length-1]),aw={};
aw.text=at;
aw.href=ar;
aq.push(aw)
}aq=aq.sort(function(aD,aC){return aD.text.localeCompare(aC.text)
});
for(var ax=0,av=ay.length;
ax<av;
ax++){var aB=ay.eq(ax);
aB.text(aq[ax].text);
aB.parent().attr("href",aq[ax].href)
}}ao.onClickEvent(az)
})
},onClickEvent:function(ao){ao.click(function(){if(!ao.hasClass("active")){an.removeClass("active");
ao.addClass("active");
ao.find(".link-list li:first-child a").focus()
}else{ao.removeClass("active")
}})
},capitalizeFirstLetter:function(ao){return ao.charAt(0).toUpperCase()+ao.slice(1)
}};
am.init()
}
}(jQuery));
jQuery(document).ready(function(){var aj=jQuery(".column-control-middle-menu, .column-control-dropdown-menu, .link-list-middle-menu");
if(aj.length>=1){aj.middle_menu({$root:aj})
}else{return false
}});
$(document).ready(function(){$("#btn-copy-link").click(function(){try{var ak=$("#share-pop-up-link").val();
w(ak)
}catch(aj){return false
}})
});
function ab(aj){var am=window.location.search.substring(1);
var al=am.split("&");
for(var ak=0;
ak<al.length;
ak++){var an=al[ak].split("=");
if(an[0]==aj){return decodeURIComponent(an[1])
}}}function w(ak){var aj=$("<input>");
$("body").append(aj);
aj.val(ak).select();
document.execCommand("copy");
aj.remove()
}function u(){var an=$(".tab-panel"),al=window.location.origin+window.location.pathname,aj=ab("tab"),am=ab("option"),ak=an.find(".share-link a");
if(an.length>0){an.each(function(aq){var ao=$(this),ap=ao.find('.nav-tabs li[role="tab"]'),ar=ao.find(".tab-pane");
ap.each(function(av){var aw=$(this),ay=aw.find("a"),at=ar.eq(av).find("select"),au=Number(av+1);
ay.click(function(){var az=al+"?tab="+au;
if(at.length>0){at.change(function(){at.find("option").each(function(aA){var aB=$(this);
if(aB.is(":selected")){var aC=az+"&option="+aA
}})
})
}});
if(typeof aj!=="undefined"){if(aj==au){ay.click()
}if(typeof am!=="undefined"){var ax=at.find("option:eq("+am+")");
ax.prop("selected",true);
ax.click()
}}})
})
}}function Y(){var ao=$(".view-larger"),aj=$(".view-larger__link"),aq=$(".view-larger, .view-larger__link");
if(aq.length>0){$("body").append('<div class="pop-up-window view-larger-dialog"><img src="" class="view-larger-dialog__image" alt="" /></div>');
var ap=$(".view-larger__image"),al=ap.attr("alt"),an=$(".view-larger-dialog"),am=an.find("img");
am.attr("alt",al);
function ak(au,at,ar){au.click(function(av){av.preventDefault();
at.attr({src:ar,tabindex:"0"})
})
}aj.each(function(){var at=$(this),ar=at.parents("figure").find("picture img").attr("src");
ak(at,am,ar)
});
ao.each(function(){var at=$(this),ar=at.find("picture source").eq(0).attr("srcset");
ak(at,am,ar)
});
popUp(ao,an);
popUp(aj,an)
}}function ad(aj){fileUrl=$(aj).attr("href");
if(fileUrl.substring(0,4)=="http"){return 0
}else{var ak;
ak=$.ajax({type:"HEAD",url:fileUrl,success:function(){$(".filesize",$(aj)).before(" | ");
$(".filesize",$(aj)).html(t(ak.getResponseHeader("Content-Length")))
}})
}}function t(al){var ak=["bytes","KB","MB","GB","TB","PB"];
var aj=Math.floor(Math.log(al)/Math.log(1024));
aj=Math.min(Math.max(0,aj),ak.length-1);
var am=Math.round((al/Math.pow(1024,aj))*100)/100;
return am+" "+ak[aj]
}$(document).ready(function(){if($("main .text").length){$("main .text, main .link-list, main .content-tile-container p").find("a").each(function(){var ao="";
var am="";
var aj="";
var an=$(this).attr("title");
var ak=$(this).attr("href");
if(!(ak=="#")&&!(ak==undefined)&&!(ak==null)&&(ak.indexOf("mailto:")<0)&&(ak.indexOf("tel:")<0)&&!(ak.indexOf("#")==0)&&!(ak.length==0)){if(ak.indexOf(".pdf")>0||ak.indexOf(".doc")>0||ak.indexOf(".txt")>0||ak.indexOf(".docx")>0||ak.indexOf(".PDF")>0||ak.indexOf(".DOC")>0||ak.indexOf(".TXT")>0||ak.indexOf(".DOCX")>0){var al=ak.match(/.*\/([^/]+)\.([^?]+)/i);
if(!(al==null)){aj=al[1];
ao=al[2].toUpperCase();
$extension=$('<span class="extension">'+ao+"</span>");
$fileSize=$('<span class="filesize"></span>');
$descriptor=$("<span>").append($extension).append($fileSize);
$descriptor.append(")").prepend(" (");
$(this).append($descriptor);
size=ad(this)
}}}})
}});
function d(){var am='<div class="blog-flex-social-share" role="dialog" aria-modal="true" aria-labelledby="dialog__social-share-header" id="dialog__social-share"><ul><li class="blog-flex-share-fb"><a href="#" target="_blank"><span class="share-title">Facebook</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147 315" focusable="false"><path class="cls-1" d="M147 55.2H111.4c-7 0-14.1 7.3-14.1 12.7v36.3h49.7c-2 27.8-6.1 53.2-6.1 53.2H97V315H31.8V157.4H0v-53H31.8V61c0-7.9-1.6-61 66.9-61H147V55.2Z"/></svg></a></li><li class="blog-flex-share-twitter"><a href="#" target="_blank"><span class="share-title">Twitter</span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" focusable="false"><path d="M24.253 8.756C24.69 17.08 18.297 24.182 9.97 24.62c-3.122.162-6.22-.646-8.86-2.32 2.702.18 5.375-.648 7.507-2.32-2.072-.248-3.818-1.662-4.49-3.64.802.13 1.62.077 2.4-.154-2.482-.466-4.312-2.586-4.412-5.11.688.276 1.426.408 2.168.387-2.135-1.65-2.73-4.62-1.394-6.965C5.574 7.816 9.54 9.84 13.802 10.07c-.842-2.738.694-5.64 3.434-6.48 2.018-.624 4.212.043 5.546 1.682 1.186-.213 2.318-.662 3.33-1.317-.386 1.256-1.248 2.312-2.4 2.942 1.048-.106 2.07-.394 3.02-.85-.458 1.182-1.343 2.15-2.48 2.71z" /></svg></a></li><li class="blog-flex-share-youtube"><a href="https://www.youtube.com/user/Pearsonplc/" target="_blank"><span class="share-title">Youtube</span></a></li><li class="blog-flex-share-google"><a href="#" target="_blank"><span class="share-title">Google+</span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" focusable="false"><path d="M14.703 15.854l-1.22-.948c-.37-.308-.88-.715-.88-1.46 0-.747.51-1.222.95-1.662 1.42-1.12 2.84-2.31 2.84-4.817 0-2.58-1.62-3.937-2.4-4.58h2.098l2.203-1.384h-6.67c-1.83 0-4.467.433-6.398 2.027C3.768 4.287 3.06 6.018 3.06 7.576c0 2.634 2.02 5.328 5.603 5.328.34 0 .71-.033 1.083-.068-.167.408-.336.748-.336 1.324 0 1.04.55 1.685 1.01 2.297-1.523.104-4.37.273-6.466 1.562-1.998 1.187-2.605 2.915-2.605 4.136 0 2.512 2.357 4.84 7.288 4.84 5.822 0 8.904-3.223 8.904-6.41.008-2.327-1.36-3.49-2.83-4.73h-.01zM10.27 11.95c-2.913 0-4.232-3.764-4.232-6.036 0-.884.168-1.797.744-2.51.543-.68 1.49-1.12 2.372-1.12 2.807 0 4.256 3.797 4.256 6.24 0 .613-.067 1.695-.845 2.48-.537.55-1.438.947-2.295.95v-.003zm.032 13.66c-3.62 0-5.957-1.733-5.957-4.143 0-2.408 2.165-3.223 2.91-3.492 1.422-.48 3.25-.545 3.556-.545.34 0 .52 0 .767.034 2.574 1.838 3.706 2.757 3.706 4.48-.002 2.072-1.736 3.664-4.982 3.648l.002.017zM23.254 11.89V8.52H21.57v3.37H18.2v1.714h3.367v3.4h1.684v-3.4h3.4V11.89" /></svg></a></li><li class="blog-flex-share-linkedin"><a href="#" target="_blank"><span class="share-title">LinkedIn</span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" focusable="false"><path d="M25.424 15.887v8.447h-4.896v-7.882c0-1.98-.71-3.33-2.48-3.33-1.354 0-2.158.91-2.514 1.802-.13.315-.162.753-.162 1.194v8.216h-4.9s.067-13.35 0-14.73h4.9v2.087c-.01.017-.023.033-.033.05h.032v-.05c.65-1.002 1.812-2.435 4.414-2.435 3.222 0 5.638 2.106 5.638 6.632zM5.348 2.5c-1.676 0-2.772 1.093-2.772 2.54 0 1.42 1.066 2.538 2.717 2.546h.032c1.71 0 2.77-1.132 2.77-2.546C8.056 3.593 7.02 2.5 5.344 2.5h.005zm-2.48 21.834h4.896V9.604H2.867v14.73z" /></svg></a></li></ul></div>';
function ak(){var ao=$(".blog-list-link");
if(ao.length>0){var ap=ao.find("a").attr("href");
return ap
}else{return""
}}function al(ax){var aq=new Date($($(ax.find("ul > li")[0]).find("time")[0]).attr("datetime"));
var ar=new Date($($(ax.find("ul > li")[1]).find("time")[0]).attr("datetime"));
var ao=(aq<=ar)?true:false;
var ay;
var aw;
var ap=$($(ax.find("ul > li")[0]).find("time")[1]).attr("datetime"),at=$($(ax.find("ul > li")[1]).find("time")[1]).attr("datetime"),av=$($(ax.find("ul > li")[2]).find("time")[0]).attr("display"),au=$($(ax.find("ul > li")[2]).find("time")[0]).attr("zone");
if((ar.getFullYear()>aq.getFullYear())&&ao){ay='<time datetime="'+aq+'"><span>'+aq.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})+'&ndash;</span></time><time datetime="'+ar+'"><span>'+ar.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})+"</span></time>"
}else{if((ar.getMonth()>aq.getMonth())&&ao){ay='<time datetime="'+aq+'"><span>'+aq.toLocaleDateString("en-US",{month:"long",day:"numeric"})+'&ndash;</span></time><time datetime="'+ar+'"><span>'+ar.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})+"</span></time>"
}else{if((ar.getDate()>aq.getDate())&&ao){ay='<time datetime="'+aq+'"><span>'+aq.toLocaleDateString("en-US",{month:"long",day:"numeric"})+'&ndash;</span></time><time datetime="'+ar+'"><span>'+ar.toLocaleDateString("en-US",{day:"numeric"})+", "+ar.toLocaleDateString("en-US",{year:"numeric"})+"</span></time>"
}else{ay='<time datetime="'+aq+'"><span>'+aq.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})+"</span></time>";
if(av){aw='<div class="event-clock"><time><span class="weight--default typecase-lower" >'+ap.replace("AM","a.m.").replace("PM","p.m.")+" &#8211; "+at.replace("AM","a.m.").replace("PM","p.m.")+'&nbsp;</span><span class="weight--default">'+au+"</span></time></div>"
}}}}if(!av){ax.find("ul").replaceWith(ay)
}else{ax.find("ul").replaceWith(ay);
ax.after(aw)
}}(function aj(){var ar=$(".event");
var au=$(".event-external-link");
if(ar.length>0){var aw=ar.find(".event-list-tags"),av=aw.find("li"),aq=ar.parent().parent().find(".col-sm-4.col-xs-12"),ao=ar.find(".event-description");
aq.prepend(aw);
ao.before(am);
aw.wrap("<section class='tag-list'></section>");
S(aw)
}if($(".recorded-date").length>0){ar.find(".event-time ul").css("display","none");
ar.find(".event-address").css("display","none");
ar.find(".event-type").css("display","none")
}else{al(ar.find(".event-time"))
}au.detach().insertAfter(".event-description");
ar.find(".event-external-link > a").addClass("button button-primary--button-only");
ar.find(".event-registration-link > a").addClass("button button-primary--button-only");
if($(".event-registration-link").length>0){var ap=$(".event-registration-link"),at=ap.find("a.button");
at.text("Register now");
ap.addClass("is-visible")
}$(".event").css({visibility:"visible",opacity:1})
})();
(function an(){var ap=$(".event-list");
if(ap.length>0){if($(".event-list-live-online").length>0){var aq=$(".event-list-live-online").html().trim();
$(".event-list-live-online").html(aq)
}if($(".event-list-in-person").length>0){var ar=$(".event-list-in-person").html().trim();
$(".event-list-in-person").html(ar)
}var ao=ap.find("ul, ol");
if(ao.length==0){ap.addClass("empty-list")
}}ap.find(".event-list-container").each(function(at,av){var au=$(this);
if($(au).find(".event-list-properties").length>0){$(au).find(".event-list-time").css("display","none");
$(au).find(".event-list-address").css("display","none")
}else{var aw=($(this).find(".event-list-time"));
al(aw)
}})
})()
}function l(){var al='<div class="back-to-parent-blog-list"><a href="'+aj()+'">View all blogs</a></div>';
(function ak(){var ap=$(".blog-post"),ar=ap.find(">header");
if(ap.length>0){var aq=ap.find(".blog-list-tags"),an=aq.find("li"),am=ap.parent().parent().find(".col-sm-4.col-xs-12"),ao=ap.find(".post-header");
am.prepend(aq);
aq.wrap("<section class='tag-list'></section>");
S(aq);
if(!$(".back-to-parent-blog-list").length){ar.before(al)
}}})();
function aj(){var am=$(".blog-list-link");
if(am.length>0){var an=am.find("a").attr("href");
return an
}else{return""
}}}function ag(){var av=function(ax){return ax.replace(/-/g,"")
};
var an=function(ax){return ax.length===10?true:false
};
var ak=function(ax){return ax.length===13?true:false
};
var au=function(ax){return ax.length===14?true:false
};
var ar=function(aA){var ay=0,az=0;
aA=av(aA);
var ax=aA.split("");
switch(aA.length){case 10:az=0;
if(ax[9].toUpperCase()==="X"){ax[9]="10"
}for(ay=0;
ay<10;
ay++){az+=parseInt(ax[ay],10)*(10-ay)
}return(az%11)===0?true:false;
case 13:az=0;
for(ay=0;
ay<13;
ay+=2){az+=parseInt(ax[ay],10)
}for(ay=1;
ay<13;
ay+=2){az+=parseInt(ax[ay],10)*3
}return(az%10)===0?true:false;
case 14:az=0;
ax.splice(0,1);
for(ay=0;
ay<13;
ay+=2){az+=parseInt(ax[ay],10)
}for(ay=1;
ay<13;
ay+=2){az+=parseInt(ax[ay],10)*3
}return(az%10)===0?true:false;
default:return false
}};
var am=function(az){var ax,ay,aA;
az=av(az);
if(az.length===10){return az
}if(ar(az)){if(au(az)){az=az.slice(1)
}if(ak(az)){if(az.slice(0,3)!=="978"){return"NO ISBN EQUIVALENT"
}aA=0;
ax=az.split("");
ax.splice(0,3);
ax.pop();
for(ay=0;
ay<ax.length;
ay++){aA+=parseInt(ax[ay],10)*(10-ay)
}aA=(11-(aA%11))%11;
aA=(aA===10)?"X":aA;
ax.push(aA);
return ax.join("")
}}return false
};
var aj=function(az){var ax,aB,ay,aA;
az=av(az);
if(az.length===13){return az
}if(az.length===14){return az.substring(1)
}if(ar(az)){if(an(az)){aA=0;
ax=az.split("");
ax.splice(0,0,"9","7","8");
ax.pop();
for(ay=0;
ay<ax.length;
ay+=2){aB=parseInt(ax[ay],10);
aA+=aB
}for(ay=1;
ay<ax.length;
ay+=2){aB=parseInt(ax[ay],10);
aA+=aB*3
}aA=(10-(aA%10))%10;
ax.push(aA);
return ax.join("")
}}return false
};
var at=function(az){var ax,aB,ay,aA;
az=av(az);
if(az.length===14){return az
}if(az.length===13){return"0"+az
}if(ar(az)){if(an(az)){aA=0;
ax=az.split("");
ax.splice(0,0,"9","7","8");
ax.pop();
for(ay=0;
ay<ax.length;
ay+=2){aB=parseInt(ax[ay],10);
aA+=aB
}for(ay=1;
ay<ax.length;
ay+=2){aB=parseInt(ax[ay],10);
aA+=aB*3
}aA=(10-(aA%10))%10;
ax.push(aA);
ax.splice(0,0,"0");
return ax.join("")
}}return false
};
var aq=function(aA){var az=[],ax=[],aC=[];
var aB="INVALID ISBN ENTERED";
var ay=aA.split("\n");
ay.forEach(function(aF,aE,aD){aF=aF.trim();
if(aF){ar(aF)?az.push(am(aF)):az.push(aB);
ar(aF)?ax.push(aj(aF)):ax.push(aB);
ar(aF)?aC.push(at(aF)):aC.push(aB)
}else{az.push("");
ax.push("");
aC.push("")
}});
if((az.indexOf(aB)>=0)||(ax.indexOf(aB)>=0)||(aC.indexOf(aB)>=0)){$(".isbn-error").css("display","block")
}else{$(".isbn-error").css("display","none")
}return[az,ax,aC]
};
var ap=function(az){var aA=document.querySelector(".isbn-output-"+az+" > div > textarea");
aA.select();
try{var ay=document.execCommand("copy")
}catch(ax){console.error("Error: "+ax)
}document.querySelector(".isbn-copy-"+az+" > p > a").focus()
};
var aw=function(){$(".isbn-output").css("display","none");
$(".isbn-error").css("display","none");
$(".isbn-input > div > textarea").val("");
$(".isbn-output-10 > div > textarea").val("");
$(".isbn-output-13 > div > textarea").val("");
$(".isbn-output-14 > div > textarea").val("")
};
var al=function(aD,aF){var aE,ay,ax=4,aA="",aB;
var aC=aD.length;
var az=[aD].concat(aF);
aA="data:text/csv;charset=utf-8,";
aA+="Your ISBN(s),ISBN-10,ISBN-13,GTIN-14\n";
for(aE=0;
aE<aC;
aE++){for(ay=0;
ay<ax;
ay++){aA+=az[ay][aE];
aA+=(ay===ax-1)?"\n":","
}}aB=document.createElement("a");
aB.setAttribute("href",encodeURI(aA));
aB.setAttribute("download","ISBNs.csv");
document.body.appendChild(aB);
aB.click();
document.body.removeChild(aB)
};
var ao=function(){var ay=[],ax=[];
$(".isbn-convert-button > p > a").on("click",function(az){ay=$(".isbn-input > div > textarea").val();
ax=aq(ay);
$(".isbn-copy-button").css("display","block");
$(".isbn-output").css("display","block");
$(".isbn-output-10 > div > textarea").val(ax[0].join("\n"));
$(".isbn-output-13 > div > textarea").val(ax[1].join("\n"));
$(".isbn-output-14 > div > textarea").val(ax[2].join("\n"));
az.preventDefault();
return false
});
$(".isbn-copy-10 > p  > a").on("click",function(az){ap(10);
az.preventDefault()
});
$(".isbn-copy-13 > p  > a").on("click",function(az){ap(13);
az.preventDefault()
});
$(".isbn-copy-14 > p  > a").on("click",function(az){ap(14);
az.preventDefault()
});
$(".isbn-reset > p  > a").on("click",function(az){aw();
az.preventDefault()
});
$(".isbn-export > p > a").on("click",function(az){al(ay.split("\n"),ax);
az.preventDefault()
})
}()
}function s(){var ap=$("body > header"),am=ap.find(".header"),aq=$(".breadcrumb");
if(aq.length>0){var at=aq.find("ul"),aj=at.outerWidth(),ar=aq.find("li"),ak=0,aw=$(".sign-in-menu"),al='<li class="trigger-crumb"><button data-toggle="tooltip" data-placement="top" title="Expand">&hellip;</button></li>';
aq.attr("aria-label","breadcrumb");
if($(".menu-browse").length>0){var av=ap.find(".menu-browse");
aq.insertAfter(av)
}else{ap.after('<div class="sub-header"><div class="sub-parsys"></div></div>');
var ao=$("header .sub-header .sub-parsys");
aq.appendTo(ao)
}au();
if(aw.length>0){signWidth=aw.outerWidth();
aj-=signWidth;
at.css("padding-right",signWidth+20)
}ar.each(function(){var ax=$(this).outerWidth();
ak+=ax
});
if(aj<=ak+20){at.removeClass("show-children--all").addClass("show-children--first-last");
au();
if(!$(".trigger-crumb").length){ar.eq(0).after(al);
an()
}}else{$(".trigger-crumb").remove();
at.removeClass("ws--normal show-children--first-last").addClass("show-children--all");
au()
}function an(){var ay=$(".trigger-crumb"),ax=ay.find("button");
$(document).on("click",".trigger-crumb > button",function(az){ay.remove();
at.removeClass("show-children--first-last").addClass("ws--normal show-children--all");
au()
})
}function au(){if(!(ap.hasClass("no-menu"))){var ax=aq.outerHeight();
aq.css("bottom",-ax)
}}}else{ap.addClass("no-breadcrumb")
}}$(window).smartresize(function(){s()
});
$(document).ready(function(){if($("a.order-info").length>0){var an=$("a.order-info");
an.on("click",function(ao){ao.preventDefault();
q("Packages/Order");
B()
})
}if($("a#instructor-resources").length>0){var ak=$("a#instructor-resources");
ak.on("click",function(ao){ao.preventDefault();
q("Resources");
q("Downloadable Resources");
B()
})
}if($(".tab-panel.tab-panel-features-blue ul li").size()==1){var am=$(".tab-panel.tab-panel-features-blue ul li");
am.addClass("active");
var aj=am.find("a").attr("href");
$(".tab-content div"+aj).addClass("active")
}(function al(){if(!($.cookie("cq-authoring-mode"))){if($('[class*="tab-panel-features"]').length>0){var ar=$('[class*="tab-panel-features"]').find("> nav"),at=ar.find('.nav-tabs[role="tablist"]'),ao=at.find('[data-toggle="tab"]'),aq=location.protocol+"//"+location.host+location.pathname,au=document.title,ap=$(".tab-panel-nav-item").find("a");
ao.add(ap).each(function(){var aw=$(this),ax=aw.text(),aA=ax.replace(/\s+/g,"-").toLowerCase(),ay=aw.parent().attr("aria-controls"),av="?tab="+aA,az=au+" | "+ax;
aw.attr({"data-tab-query-url":aq+av});
if(aw.attr("data-tab-query-url")===location.href){if(!aw.parent().is(".active")){aw.trigger("click");
document.title=az
}}aw.on("click",function(){var aB=aw.attr("data-tab-query-url");
if(aw.attr("data-tab-query-url")!==location.href){history.pushState(null,az,aB);
document.title=az;
ae(".tab-panel:visible")
}});
$(window).on("popstate",function(){if(location.search.indexOf("tab=")>-1){if(aw.attr("data-tab-query-url")===location.href){if(!aw.parent().is(".active")){aw.trigger("click")
}}}else{location.href=aq
}})
})
}}})()
});
function B(){if($(".drawer-box").length>0){var ar=location.href,at=location.protocol+"//"+location.host+location.pathname,ap=$('[class*="tab-panel-features"]').find("> nav"),am=ap.find('.nav-tabs[role="tablist"]'),au=am.find('> li[class*="active"] > a'),an=au.text().trim(),ak=an.replace(/\s+/g,"-").toLowerCase().replace("overview",""),aq="?tab="+ak,al=at+aq,aj=document.title,av=aj.replace(/\|.*/,""),ao=av+" | "+an;
if(ar!==al){history.pushState(null,ao,al);
document.title=ao
}}}function q(aj){var ak;
if($(".static-product-page").length>0){ak=$(".static-product-page .nav-tabs").find("li[role='tab']");
ak.each(function(ao,am){var al=$(this).text();
if(aj.indexOf(al)>-1||al===aj){var an=$(this).attr("aria-controls");
$("a[href^=#"+an+"]").parent("li").addClass("active").siblings().removeClass("active");
$("#"+an+"primarytab").addClass("active").siblings().removeClass("active");
$("#"+an).addClass("active").siblings().removeClass("active");
if($("li.show-more").is(":visible")===!$("li.show-more").is(":hidden")){$("li.show-more").addClass("active").siblings().removeClass("active");
$("li.show-more > a").html(al+"<i></i>")
}ae(".tab-panel")
}})
}else{if($("nav.dynamic-content-nav").length>0){ak=$("nav.dynamic-content-nav ul").find("li[role='tab']");
ak.each(function(ao,am){var al=$(this).text().trim();
if(aj.indexOf(al)>-1){var an;
if(al=="Order"||al=="Packages"){an="#packages-primarytab"
}else{if(al=="Resources"){an="#resources-primarytab"
}else{if(al=="Downloadable Resources"){an="#downloadableResources-primarytab"
}}}$("a[href^="+an+"]").parent("li").addClass("active").siblings().removeClass("active");
$(an).addClass("active").siblings().removeClass("active");
ae(".tab-panel")
}})
}}}function ae(aj){if(aj.length>0){$("html, body").stop().animate({scrollTop:$(aj).offset().top},750)
}}function o(aj){aj++;
window.location.href=window.location.pathname+"?tab="+aj
}function i(aj){var ak;
if($(".static-product-page").length>0){ak=$(".static-product-page .nav-tabs").find("li[role='tab']")
}else{if($("nav.dynamic-content-nav").length>0){ak=$("nav.dynamic-content-nav ul").find("li[role='tab']")
}}if(ak){ak.each(function(an,am){var al=$(this).text();
if(al.indexOf(aj)==0||al===aj){o(an)
}})
}}function X(){var aj=$(".custom-dropdown-nav--sort");
if(aj.length>0){aj.each(function(){var al=$(this),ak=$(".sortable-container");
sortable=ak.find(">article, >div, >ul>li");
if(ak.length>0){al.change(function(){var am=$(this).val();
if(am=="show-all"){sortable.show()
}else{sortable.hide();
sortable.each(function(){if($(this).hasClass(am)){$(this).show()
}})
}})
}})
}}function G(){if($(window).width()>767){var aj=0;
$('.row [class*="highlight-col-content-vertical"]').each(function(ak){if($(this).children().outerHeight()>aj){aj=$(this).children().outerHeight()
}else{$(this).children().outerHeight(aj)
}});
$('[class*="highlight-col-content-vertical"]').each(function(ak){$(this).closest(".column").prevAll().find(".highlight-img-wraper").height($(this).children().outerHeight());
$(this).closest(".column").nextAll().find(".highlight-img-wraper").height($(this).children().outerHeight());
$(this).closest(".column").prevAll().find(".highlight-img-wraper figure").addClass("hide-image");
$(this).closest(".column").nextAll().find(".highlight-img-wraper figure").addClass("hide-image")
})
}}function h(){$(".highlight-randomizer").each(function(){var aj=$(this);
aj.find(".grid, .content-tile").hide();
var ak=Math.floor(Math.random()*aj.find(".grid, .content-tile").length);
aj.find(".grid, .content-tile").eq(ak).show()
});
$(".highlight-col-image").each(function(){$(this).closest(".column").nextAll().find('[class^="col-"]').prepend('<span class="highlight-arrow" style= "background-color:'+$(this).parents(".row-grid").css("background-color")+'"></span>');
var aj=$(this).find("figure img").attr("srcset")||$(this).find("figure img").attr("src");
$(this).find(".content-tile-container").css({"background-image":"url("+aj+")"}).addClass("highlight-img-wraper")
});
$(".highlight-col-image-new").each(function(){var aj=$(this).find("figure img").attr("srcset")||$(this).find("figure img").attr("src");
$(this).find(".content-tile-container").css({"background-image":"url("+aj+")"}).addClass("highlight-img-wraper")
});
$(".highlight-col-content-vertical-arrow-left").each(function(){if(!$(this).find(".highlight-arrow").length){$(this).closest(".column").find('[class^="col-"]').prepend('<span class="highlight-arrow" style= "border-right-color:'+$(this).css("background-color")+'"></span>')
}$(this).find(".highlight-arrow").css("border-right-color",$(this).css("background-color"));
$(this).find(".highlight-arrow").css("background-color","transparent")
});
$(".highlight-col-content-vertical-arrow-right").each(function(){if(!$(this).find(".highlight-arrow").length){$(this).closest(".column").find('[class^="col-"]').prepend('<span class="highlight-arrow" style= "border-left-color:'+$(this).css("background-color")+'"></span>')
}$(this).find(".highlight-arrow").css("border-left-color",$(this).css("background-color"));
$(this).find(".highlight-arrow").css("background-color","transparent")
});
$(".highlight-col-content-horizontal").each(function(){if(!$(this).find(".highlight-arrow").length){$(this).closest(".column").find('[class^="col-"]').prepend('<span class="highlight-arrow" style= "background-color:'+$(this).css("background-color")+'"></span>')
}$(this).find(".highlight-arrow").css("background-color",$(this).css("background-color"))
})
}$(window).load(function(){G()
});
$(window).smartresize(function(){G()
});
function U(){if($(".custom-hero-uses--bg-video").length>0){var ak=$(".content-tile-homepage-hero");
if(ak.length>0){if(!$(".bg-video").length){var aj=ak.find("figure"),am=ak.find("picture"),an=am.find("img");
aj.addClass("video-is-playing").prepend('<div class="bg-video--controls"><button class="fa-pause play-pause" aria-label="Pause background video"><span class="screenreader">Pause</span></button><p class="screenreader">Video has no sound or narration.</p></div>');
am.empty().prepend('<video autoplay muted loop width="auto" height="auto" poster="/content/dam/one-dot-com/one-dot-com/us/en/higher-ed/en/video/lmu-all-poster.jpg" class="bg-video" role="img" aria-label="Child playing piano; Female pilot walking; Group of Higher Education students engaging in conversation."><source src="/content/dam/one-dot-com/one-dot-com/us/en/higher-ed/en/video/lmu-all.webm" type="video/webm"><source src="/content/dam/one-dot-com/one-dot-com/us/en/higher-ed/en/video/lmu-all.ogg" type="video/ogg"><source src="/content/dam/one-dot-com/one-dot-com/us/en/higher-ed/en/video/lmu-all.mp4"></video>');
var al=$(".bg-video");
$(al).on("ended",function(ao){$(this).get(0).pause();
$(this).parents("figure").removeClass("video-is-playing").addClass("video-is-paused").find(".play-pause").removeClass("fa-pause").addClass("fa-play-circle").attr("aria-label","Play background video").find(".screenreader").text("Play")
});
$(document).on("click",'[class*="play-pause"]',function(aq){var ao=$(this).parents("figure"),ap=ao.find("video"),ar=$(this),at=ar.find(".screenreader");
if(ap[0].paused==true){ap[0].play();
ao.removeClass("video-is-paused").addClass("video-is-playing");
ar.removeClass("fa-play-circle").addClass("fa-pause").attr("aria-label","Pause background video");
at.text("Pause")
}else{ap[0].pause();
ao.removeClass("video-is-playing").addClass("video-is-paused");
ar.removeClass("fa-pause").addClass("fa-play-circle").attr("aria-label","Play background video");
at.text("Play")
}})
}}}}function c(){var ak=$(".column-control-product-catalog-intro"),al=ak.find(".row >.col-sm-6").eq(0).outerHeight(),aj=ak.find(".row >.col-sm-6").eq(1),am=aj.find("img");
aj.height(al-50);
am.css("max-height",al-50)
}function v(){if($(".course-view-as").length>0){$(".course-view-as").append('<div class="category-text section view-as-preview"><h4 class="filter-heading">VIEW AS</h4>        <i class="glyphicon glyphicon-th-large view-icon grid-icon" aria-hidden="true"></i>&nbsp;<i class="glyphicon glyphicon-th-list view-icon list-icon" aria-hidden="true"></i></div>');
if($(".course-view-as.dutch").length>0){$(".course-view-as.dutch").find(".filter-heading").text("WEERGEVEN ALS")
}}var ap=$(".container > .row >.col-sm-9"),ak=ap.find(">.column-control"),am=ap.find(">*"),aj=ap.find(".content-tile-book-box"),ao=$('select[name="sort-by"]'),an=$(".filter-by-tags");
an.each(function(){var ar=$(this),au=ar.find(">h3"),at=ar.find(">ul"),aq=at.find(">li");
au.click(function(){$(this).toggleClass("active");
$(this).hasClass("active")?at.show():at.hide()
});
aq.each(function(){var av=$(this).find("a");
av.text(av.text().trim());
var aw=av.text();
av.click(function(ay){ay.preventDefault();
var ax=$(this);
ax.toggleClass("active");
aj.hide();
aj.each(function(){var aA=$(this),az=aA.find(".content-tile-tags li");
az.each(function(){var aB=$(this).text();
if(aw==aB){if(ax.hasClass("active")){aA.show()
}else{aA.hide()
}}})
})
})
});
at.click(function(){var av=0;
aq.each(function(){var aw=$(this).find("a");
aw.text(aw.text().trim());
var ax=aw.text();
if(aw.hasClass("active")){av=1;
aj.each(function(){var az=$(this),ay=az.find(".content-tile-tags li");
ay.each(function(){var aA=$(this).text();
if(ax==aA){az.show()
}})
})
}});
if(av==0){aj.show()
}})
});
ao.change(function(){var aq=$(this).val();
if(aq=="title-a-z"){console.log("A -> Z");
if(ak.length>0){ak.each(function(){var au=$(this).find(">.row>.col-xs-12"),at=au.find("> .content-tile-book-box");
if(at.length>0){var ar=au.children(".content-tile-book-box").get();
ar.sort(function(aw,av){return $(aw).find("figcaption h2").text().trim().toUpperCase().localeCompare($(av).find("figcaption h2").text().trim().toUpperCase())
});
au.empty().append(ar)
}})
}}if(aq=="title-z-a"){console.log("Z -> A");
if(ak.length>0){ak.each(function(){var au=$(this).find(">.row>.col-xs-12"),at=au.find("> .content-tile-book-box");
if(at.length>0){var ar=au.children(".content-tile-book-box").get();
ar.sort(function(av,aw){return $(aw).find("figcaption h2").text().trim().toUpperCase().localeCompare($(av).find("figcaption h2").text().trim().toUpperCase())
});
au.empty().append(ar)
}})
}}if(aq=="default"){ap.empty().append(am);
aj.each(function(){$(this).addClass("visible")
})
}});
if(aj.length>0&&$(".course-view-as").length>0){ap.addClass("list-view");
var al=ap.find(".col-xs-12");
al.each(function(){if($(this).text().trim().length==0&&!($("body").hasClass("edit"))){$(this).remove()
}})
}$(".course-view-as .grid-icon").click(function(){$(this).addClass("active");
$(".course-view-as .list-icon").removeClass("active");
ap.removeClass("list-view");
ap.addClass("grid-view")
});
$(".course-view-as .list-icon").addClass("active");
$(".course-view-as .list-icon").click(function(){$(this).addClass("active");
$(".course-view-as .grid-icon").removeClass("active");
ap.addClass("list-view");
ap.removeClass("grid-view")
})
}var T=function(an){var al=an.find("ol > li");
if(al.length>1){var am=an.find("ol > li.selected").html()||an.find("ol > li.active a").html()||an.find("ol > li p.selected").html();
if(am=="1"){an.prepend("<a href='#' class='prev disabled'>Previous</a>")
}}if($(this).find(".prev").length){var ak=an.find("ol");
var aj=an.find(".prev");
ak.replaceWith(aj.clone());
aj.replaceWith(ak.clone())
}};
$(window).load(function(){var aj="<h5>We're sorry, we didn't find anything that matched your search</h5>                            <p>Please try again using the search box at the top of this page.</p>                            <ul>                                <li>Make sure all words are spelled correctly.</li>                                <li>Use more general keywords.</li>                                <li>Limit the number of keywords.</li>                                <li>Use special characters (ñ,á,ü, etc.) when applicable</li>                            </ul>";
if($(".content-search-results-list .content-search-results-noResultsText").length>0){$(".content-search-results-list .content-search-results-noResultsText").show()
}$(".paginationSection li a").click(function(){var ak=$(this).attr("href");
window.location.href=ak
})
});
$(document).ready(function(){$(".content-search-results-list-results h3 a").click(function(){var aj=$(this).attr("href");
window.location.href=aj
});
if($(window).width()<=768){$(".main-tab-panel > nav > .nav-tabs > li").click(function(){$(this).siblings().slideToggle().show();
$(this).parent().addClass("mobile-tab-menu");
$(this).parent().toggleClass("mobile-tab-menu-show")
})
}if($(".content-search-results-list .paginationSection").length){T($(".content-search-results-list .paginationSection"))
}});
function F(){var al=$(".content-tile-expander-link-v2"),aj=$(".column-control-expander-content-v2"),ak=$(".column-control-expander-links-v2");
if(aj.length>0&&ak.length>0&&!$("body").hasClass("edit")){var am=ak.find(">.container>.row, >.row");
aj.appendTo(am).hide()
}if(al.length>0){al.each(function(ap){var aq=$(this),an=aq.find(".content-tile-container");
an.append('<button aria-haspopup="true" aria-expanded="false" aria-label="Show more" class="content-tile-expander-button"><i></i></button>');
var ao=aq.find(".content-tile-expander-button");
ao.each(function(){var ar="toggle-trigger--"+ap;
$(this).attr({id:ar,"aria-controls":"toggle-target--"+ap})
});
aj.each(function(ar){var at="toggle-target--"+ar;
$(this).attr({"aria-hidden":true,id:at})
});
ao.click(function(ar){if($("body").is(".edit")){ar.preventDefault()
}else{ar.preventDefault();
$(".content-tile-expander-button").not(ao).removeClass("active").attr("aria-expanded","false");
ao.toggleClass("active").attr("aria-expanded","true");
aj.each(function(at){if(ap===at){aj.not($(this)).hide().attr("aria-hidden","true");
$(this).attr("aria-hidden","false").toggle()
}})
}})
})
}}$(document).ready(function(){F()
});
function ab(aj){var am=window.location.search.substring(1);
var al=am.split("&");
for(var ak=0;
ak<al.length;
ak++){var an=al[ak].split("=");
if(an[0]==aj){return decodeURIComponent(an[1])
}}}function S(aj){var ak=$(aj);
ak.find("li").sort(function(am,al){var ao=$(am).text().toUpperCase();
var an=$(al).text().toUpperCase();
return(ao<an)?-1:(ao>an)?1:0
}).appendTo(aj)
}aa();
N();
ai();
K();
D();
n();
y();
r();
d();
l();
p();
k();
W();
ac();
e();
ah();
V();
g();
C();
popUp($('a[href="#pop-up"]'),$("article.pop-up-window"));
popUp($('a[href="#pop-up"]'),$(".column-control.pop-up-window"));
popUp($('a[href="#pop-up-sign-in"]'),$("article.pop-up-sign-in"));
popUp($('a[href="#pop-up-register"]'),$("article.pop-up-register"));
M();
Q();
I();
j();
a();
u();
Y();
ag();
s();
h();
U();
L();
c();
v();
X()
});
$(window).load(function(){$(".info-menu, .onedotcom-page-search, .content-tile-book-box, .utility-nav--container, .menu-browse").addClass("visible")
});
function popUp(b,c){if(!(typeof b==="undefined")&&!(typeof c==="undefined")&&!($("body").hasClass("edit"))){if(b.length>0&&c.length>0){var a=$(".shadowOverlay");
if(a.length==0){$("body").append('<div class="shadowOverlay"> </div>');
a=$(".shadowOverlay")
}c.each(function(d){var e=$(this);
if(e.find(".pop-up-close").length===0){if(e.is(".image-expander__dialog")){e.find(".image-expander__inner-wrap").append('<button class="pop-up-close" aria-label="Close"></button>')
}else{e.append('<button class="pop-up-close" aria-label="Close"></button>')
}}e.appendTo("body").end().addClass("pop-up").attr({role:"dialog","aria-modal":"true"}).not(".blog-flex-social-share, .share-via-email-popup").attr("aria-label","Dialog Window (Press ESC to close)").each(function(){var g=$(this).prop("tagName").toLowerCase(),f="modal-"+g+"--"+d;
$(this).attr("id",f);
++d
})
});
b.each(function(l,h){var e=$(this);
e.attr("title","Open popup").addClass("popup-btn-"+l);
var f=c.eq(l),m=e,p=f.find(".pop-up-close"),n=f.find(".youtube-video-iframe"),d=[],k=f.find(".view-larger-dialog__image");
n.each(function(q){var j=$(this),r=j.attr("src");
d.push(r)
});
function g(){$('span:contains("Session Timeout")').parents('[role="dialog"]').add('header[role="banner"]').add("main").add("footer").add(".servicecomponents").add(".pearson-data-layer").attr("aria-hidden","true");
f.addClass("current-dialog").show().attr("aria-hidden",false);
var j=$(".current-dialog"),r=j.find("a, button, object, :input, iframe, [tabindex]"),s=r.first()[0],q=r.last()[0],i=9;
j.on("keydown",function(t){if(t.key==="Tab"||t.keyCode===i){if(t.shiftKey){if(document.activeElement===s){q.focus();
t.preventDefault()
}}else{if(document.activeElement===q){s.focus();
t.preventDefault()
}}}});
s.focus();
a.show();
n.each(function(u){var t=$(this);
jQuery.each(d,function(v,w){if(u==v){t.attr("src",w)
}})
})
}function o(){$('span:contains("Session Timeout")').parents('[role="dialog"]').add('header[role="banner"]').add("main").add("footer").add(".servicecomponents").add(".pearson-data-layer").removeAttr("aria-hidden");
f.hide().removeClass("current-dialog").attr("aria-hidden",true);
a.hide();
n.attr("src","");
k.removeAttr("tabindex")
}m.click(function(i){i.preventDefault();
$(this).addClass("current-dialog-trigger");
g()
});
p.click(function(i){i.preventDefault();
o();
$(".current-dialog-trigger").focus().removeClass("current-dialog-trigger")
});
$(window).on("keydown",function(i){if(i.keyCode===27){o();
$(".current-dialog-trigger").focus().removeClass("current-dialog-trigger")
}if((p.is(":focus"))&&i.keyCode===13){o()
}});
a.click(function(i){o()
})
})
}}}(function(){this.ActiveNavItem=function(b){if(!arguments[0]){throw new Error("Plugin needs options object!")
}if(typeof arguments[0]!=="object"){throw new Error("Plugin options should be an object!")
}if(Object.keys(arguments[0]).length===0){throw new Error("Please provide settings!")
}var m=JSON.parse(JSON.stringify(arguments[0]));
if(!m.debugMode){m.debugMode=false
}if(m.debugMode===true&&!m.firstLevelNav){throw new Error("Provide firstLevelNav element!")
}if(m.debugMode===true&&typeof m.firstLevelNav!=="string"){throw new Error("firstLevelNav should be an id or class selector, passed as string!")
}if(m.debugMode===true&&!document.querySelector(m.firstLevelNav)){throw new Error("Element doesn't exist!")
}var h=m.lowestCharNumber?m.lowestCharNumber:0,c=window.location.pathname,e=document.querySelector(m.firstLevelNav),d=e?e.getElementsByTagName("a"):[];
if(m.debugMode===true&&d.length===0){throw new Error("Your firstLevelNav doesn't have any links")
}if(d.length>0){for(var j=0;
j<d.length;
j++){var f=d[j].getAttribute("href"),g=f.slice(0,f.lastIndexOf("/")),k=window.location.href.includes(g),a="/"+f.slice(f.lastIndexOf("/")+1,f.lastIndexOf(".")),l=d[j].closest("li");
if(m.debugMode===true&&!k){console.warn("Not on the same domain!")
}if(k&&c.indexOf(a)!==-1){l.classList.add("current-item")
}}}}
}());
document.addEventListener("DOMContentLoaded",function(){new ActiveNavItem({firstLevelNav:".info-menu"})
});