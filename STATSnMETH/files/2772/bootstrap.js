+function(c){var d=function(f,e){this.$element=c(f);
this.options=c.extend({},d.DEFAULTS,e);
this.transitioning=null;
if(this.options.parent){this.$parent=c(this.options.parent)
}if(this.options.toggle){this.toggle()
}};
d.VERSION="3.2.0";
d.DEFAULTS={toggle:true};
d.prototype.dimension=function(){var e=this.$element.hasClass("width");
return e?"width":"height"
};
d.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in")){return
}var f=c.Event("show.bs.collapse");
this.$element.trigger(f);
if(f.isDefaultPrevented()){return
}var i=this.$parent&&this.$parent.find("> .panel > .in");
if(i&&i.length){var g=i.data("bs.collapse");
if(g&&g.transitioning){return
}b.call(i,"hide");
g||i.data("bs.collapse",null)
}var j=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[j](0);
this.transitioning=1;
var e=function(){this.$element.removeClass("collapsing").addClass("collapse in")[j]("");
this.transitioning=0;
this.$element.trigger("shown.bs.collapse")
};
if(!c.support.transition){return e.call(this)
}var h=c.camelCase(["scroll",j].join("-"));
this.$element.one("bsTransitionEnd",c.proxy(e,this)).emulateTransitionEnd(350)[j](this.$element[0][h])
};
d.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in")){return
}var f=c.Event("hide.bs.collapse");
this.$element.trigger(f);
if(f.isDefaultPrevented()){return
}var g=this.dimension();
this.$element.addClass("collapsing").removeClass("collapse").removeClass("in");
this.transitioning=1;
var e=function(){this.transitioning=0;
this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
};
if(!c.support.transition){return e.call(this)
}this.$element[g](0).one("bsTransitionEnd",c.proxy(e,this)).emulateTransitionEnd(350)
};
d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
};
function b(e){return this.each(function(){var h=c(this);
var g=h.data("bs.collapse");
var f=c.extend({},d.DEFAULTS,h.data(),typeof e=="object"&&e);
if(!g&&f.toggle&&e=="show"){e=!e
}if(!g){h.data("bs.collapse",(g=new d(this,f)))
}if(typeof e=="string"){g[e]()
}})
}var a=c.fn.collapse;
c.fn.collapse=b;
c.fn.collapse.Constructor=d;
c.fn.collapse.noConflict=function(){c.fn.collapse=a;
return this
};
c(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(k){var f;
var m=c(this);
var o=m.attr("aria-expanded");
if(o==="true"){m.attr("aria-expanded","false")
}else{m.attr("aria-expanded","true")
}var l=m.attr("data-target")||k.preventDefault()||(f=m.attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,"");
var g=c(l);
var i=g.data("bs.collapse");
var j=i?"toggle":m.data();
var n=m.attr("data-parent");
var h=n&&c(n);
if(!i||!i.transitioning){if(h){h.find('[data-toggle="collapse"][data-parent="'+n+'"]').not(m).addClass("collapsed")
}m[g.hasClass("in")?"addClass":"removeClass"]("collapsed")
}b.call(g,j)
})
}(jQuery);
+function(e){var b=".dropdown-backdrop";
var f='[data-toggle="dropdown"]';
var g=function(j){e(j).on("click.bs.dropdown",this.toggle)
};
g.VERSION="3.2.0";
g.prototype.toggle=function(o){var n=e(this);
if(n.is(".disabled, :disabled")){return
}var m=d(n);
var l=m.hasClass("open");
i();
var k=e('[data-hover="primary"]');
if(k!==null&&typeof k!=="undefined"){k.blur()
}if(!l){if("ontouchstart" in document.documentElement&&!m.closest(".navbar-nav").length){}var j={relatedTarget:this};
m.trigger(o=e.Event("show.bs.dropdown",j));
if(o.isDefaultPrevented()){return
}m.toggleClass("open").trigger("shown.bs.dropdown",j)
}return false
};
g.prototype.keydown=function(n){if(!/(38|40|27)/.test(n.keyCode)){return
}var m=e(this);
n.preventDefault();
n.stopPropagation();
if(m.is(".disabled, :disabled")){return
}var l=d(m);
var k=l.hasClass("open");
if(!k||(k&&n.keyCode==27)){if(n.which==27){l.find(f).trigger("focus")
}return m.trigger("click")
}var o=" li:not(.divider):visible a";
var p=l.find('[role="menu"]'+o+', [role="listbox"]'+o);
if(!p.length){return
}var j=p.index(p.filter(":focus"));
if(n.keyCode==38&&j>0){j--
}if(n.keyCode==40&&j<p.length-1){j++
}if(!~j){j=0
}p.eq(j).trigger("focus")
};
function i(j){if(j&&j.which===3){return
}e(b).remove();
e(f).each(function(){var l=d(e(this));
var k={relatedTarget:this};
if(!l.hasClass("open")){return
}l.trigger(j=e.Event("hide.bs.dropdown",k));
if(j.isDefaultPrevented()){return
}l.removeClass("open").trigger("hidden.bs.dropdown",k)
})
}function d(l){var j=l.attr("data-target");
if(!j){j=l.attr("href");
j=j&&/#[A-Za-z]/.test(j)&&j.replace(/.*(?=#[^\s]*$)/,"")
}var k=j&&e(j);
return k&&k.length?k:l.parent()
}function h(j){return this.each(function(){var l=e(this);
var k=l.data("bs.dropdown");
if(!k){l.data("bs.dropdown",(k=new g(this)))
}if(typeof j=="string"){k[j].call(l)
}})
}var c=e.fn.dropdown;
e.fn.dropdown=h;
e.fn.dropdown.Constructor=g;
e.fn.dropdown.noConflict=function(){e.fn.dropdown=c;
return this
};
e(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(j){j.stopPropagation()
}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f+', [role="menu"], [role="listbox"]',g.prototype.keydown);
function a(){var j=e('[data-hover="primary"]');
var k=(window.innerWidth>0)?window.innerWidth:screen.width;
if(k>=992){e(document).on("mouseleave",".nav-dropdown",i);
e(document).on("mouseenter",f,function(){if(j!==null&&typeof j!=="undefined"){j.blur()
}e(this).trigger("click")
})
}else{e(document).off("mouseenter mouseleave")
}}e(window).on("resize",a);
a()
}(jQuery);
+function(d){var b=function(e){this.element=d(e)
};
b.VERSION="3.2.0";
b.prototype.show=function(){var k=this.element;
var h=k.closest("ul:not(.dropdown-menu)");
var g=k.data("target");
if(!g){g=k.attr("href");
g=g&&g.replace(/.*(?=#[^\s]*$)/,"")
}if(k.parent("li").hasClass("active")){return
}var i=h.find(".active:last a")[0];
var j=d.Event("show.bs.tab",{relatedTarget:i});
k.trigger(j);
if(j.isDefaultPrevented()){return
}var f=d(g);
this.activate(k.closest("li"),h);
this.activate(f,f.parent(),function(){k.trigger({type:"shown.bs.tab",relatedTarget:i})
})
};
b.prototype.activate=function(g,f,j){var e=f.find("> .active");
var i=j&&d.support.transition&&e.hasClass("fade");
function h(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
g.addClass("active");
if(i){g[0].offsetWidth;
g.addClass("in")
}else{g.removeClass("fade")
}if(g.parent(".dropdown-menu")){g.closest("li.dropdown").addClass("active")
}j&&j()
}i?e.one("bsTransitionEnd",h).emulateTransitionEnd(150):h();
e.removeClass("in")
};
function c(e){return this.each(function(){var g=d(this);
var f=g.data("bs.tab");
if(!f){g.data("bs.tab",(f=new b(this)))
}if(typeof e=="string"){f[e]()
}})
}var a=d.fn.tab;
d.fn.tab=c;
d.fn.tab.Constructor=b;
d.fn.tab.noConflict=function(){d.fn.tab=a;
return this
};
d(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(f){f.preventDefault();
c.call(d(this),"show")
})
}(jQuery);