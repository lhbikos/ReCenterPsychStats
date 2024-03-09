var HE=HE||{};
HE.formatDate=function(d){var c,e,b="",a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
if(typeof d==="string"&&d!=""){c=d.replace(/-/g,"/");
e=/(.*?)\/(.*?)\/(.*?)$/;
c.replace(e,function(f,i,h,g){b=g+" "+a[(h-1)]+" "+i
})
}return b
};
HE.setSessionStorage=function(a,b){if(typeof(Storage)!=="undefined"){sessionStorage.setItem(a,b)
}};
HE.getSessionStorage=function(a){if(typeof(Storage)!=="undefined"){return sessionStorage.getItem(a)
}};
HE.removeSessionStorage=function(a){if(typeof(Storage)!=="undefined"){sessionStorage.removeItem(a)
}};
(function(c,b){var a=function(g,d,e){var h;
return function f(){var k=this,j=arguments;
function i(){if(!e){g.apply(k,j)
}h=null
}if(h){clearTimeout(h)
}else{if(e){g.apply(k,j)
}}h=setTimeout(i,d||100)
}
};
jQuery.fn[b]=function(d){return d?this.bind("resize",a(d)):this.trigger(b)
}
})(jQuery,"smartresize");
$(document).ready(function(){var c=$(".virtual-section");
if(c.length>0&&$("body").hasClass("edit")){var b=c.parent(),a=b.find(">.section");
b.addClass("virtual-content-container")
}});
if(typeof HE==="undefined"){var HE={}
}(function(a){a.Search=a.Search||{};
a.Search.setLeftTabCardHeight=function(){var e=$(".product-search-results-list ol > li",".left-tab-panel");
var c=Math.max.apply(Math,e.map(function(){return $(this).outerHeight()
}).get());
e.css({height:c});
var d=e.length,b=0;
$(".product-search-results-list ol > li img",".left-tab-panel").off("load").on("load",function(){if(!b){e.css({height:"auto"})
}b+=1;
if(b==d){var f=Math.max.apply(Math,e.map(function(){return $(this).outerHeight()
}).get());
e.css({height:f})
}})
};
a.Search.createContentPagination=function(g){g.find(".prev").html("<span class='fa fa-chevron-left'></span>");
g.find(".next").html("<span class='fa fa-chevron-right'></span>");
g.find("a").on("click",function(){$(this).css({"background-color":"#9C2380"})
});
var e=g.find("ol > li");
if(e.length>1){g.find("ol > li").hide();
var f=g.find("ol > li.selected").html()||g.find("ol > li.active a").html()||g.find("ol > li p.selected").html();
var d=g.find("ol > li").length;
g.find("ol").html("Page "+f+" of "+e.length+"&nbsp;&nbsp;");
g.find("ol").html("<li class='active'><a class='pageNumber' data-pageNumber='"+f+"'>Page "+f+" of "+e.length+"</a></li>")
}if($(this).find(".prev").length){var c=g.find("ol");
var b=g.find(".prev");
c.replaceWith(b.clone());
b.replaceWith(c.clone())
}};
a.Search.createAlgoliaPagination=function(i,g){var c=i.find(".page-number.prev").find("a").attr("href");
var b=i.find(".page-number.next").find("a").attr("href");
if(!i.siblings(".visible-pagination").length){i.after("<div class='visible-pagination'></div>");
i.hide()
}var f,e;
f=(c!=="#")?'<a class="prev" href="'+c+'"><span class="fa fa-chevron-left"></span></a>':"";
e=(b!=="#")?'<a class="next" href="'+b+'"><span class="fa fa-chevron-right"></span></a>':"";
if(g){if(f===""){if(!i.find(".page-number.prev").hasClass("disabled")){f='<a class="prev arrow-previous" href="javascript:void(0)"><span class="fa fa-chevron-left"></span></a>'
}}if(e===""){if(!i.find(".page-number.next").hasClass("disabled")){e='<a class="next arrow-next" href="javascript:void(0)"><span class="fa fa-chevron-right"></span></a>'
}}}var h=i.find(".page-number").length-2;
if(h>1){var d=i.find(".page-number.selected a").text();
i.siblings(".visible-pagination").html("<span>Page "+d+" of "+h+"&nbsp;&nbsp;"+f+"&nbsp;&nbsp;"+e+"</span>");
if(g){i.siblings(".visible-pagination").find(".arrow-previous").on("click",function(){i.find(".ais-pagination--item__previous a")[0].click()
});
i.siblings(".visible-pagination").find(".arrow-next").on("click",function(){i.find(".ais-pagination--item__next a")[0].click()
})
}}else{i.siblings(".visible-pagination").html("")
}};
$(document).ready(function(){var b=$(".left-tab-panel",".dynamic-content-search");
if(b.length){$(".left-tab-panel .content-search-results-list .paginationSection",".dynamic-content-search").each(function(){a.Search.createContentPagination($(this))
});
$(".left-tab-panel .content-search-results-list",".dynamic-content-search").on("AjaxDOMRenderedEvent",function(){a.Search.createContentPagination($(this).find(".paginationSection"))
})
}if($(".product-search-results-list-container",".left-tab-panel").length){DMCP.PearsonInstantSearch[$(".product-search-results-list-container",".left-tab-panel").attr("data-index-name")].on("render",function(){$(".product-search-results-list ol > li",".left-tab-panel").each(function(){var c=$(this).find("h3 a").attr("href");
if($(this).find("img").length>0){$(this).find("img").nextAll().wrapAll("<div class='wrap-product-details'></div>");
$(this).find(".wrap-product-details").prepend($(this).find("h3"))
}else{$(this).children().wrapAll("<div class='wrap-product-details'></div>");
$(this).prepend('<img src="/etc/clientlibs/one-dot-com/one-dot-com/dynamic-pages/higher-ed/images/default-image.png" alt="image-default" class="image-default"/>')
}$(this).find("img").wrap("<a href="+c+">");
$(this).find(".attribute-inStockDate").text(a.formatDate($(this).find(".attribute-inStockDate").text()))
});
$(".search-page-product-list-tiles.product-search-results-list ol > li .item-attribute-multivalue-list.attribute-authorSummary").each(function(){for(var c=0;
c<$(this).find("li").length;
c++){if($(this).find("li p").eq(c).html().indexOf("&")<0){$(this).find("li p").eq(c).html($(this).find("li p").eq(c).html()+",")
}}});
if($(window).width()<992){$(".product-search-results-list ol > li",".left-tab-panel").css("height","auto")
}else{a.Search.setLeftTabCardHeight()
}a.Search.createAlgoliaPagination($(".product-search-results-pagination"))
})
}});
$(window).resize(function(){if($(window).width()<992){$("product-search-results-list ol > li",".left-tab-panel").css("height","auto")
}else{a.Search.setLeftTabCardHeight()
}})
})(HE);
$(document).ready(function(){if($(".custom-item-renderer").length>0){var b="/content/dam/one-dot-com/one-dot-com/us/en/higher-ed/en/icons/";
var a=["person-1.png","person-2.png","person-3.png","person-4.png","person-5.png","person-6.png","person-7.png"];
$('<img src="'+b+a[Math.floor(Math.random()*a.length)]+'" alt role="presentation" />').appendTo("picture#avatar-teacher");
$('<img src="'+b+a[Math.floor(Math.random()*a.length)]+'" alt role="presentation" />').appendTo("picture#avatar-student")
}});
if(typeof HE==="undefined"){var HE={}
}(function(a){a.Product=a.Product||{};
var b=function(c){var d={};
c.find("li").each(function(){var e=$(this).text();
if(d[e]){$(this).remove()
}else{d[e]=true
}})
};
a.Product.setProductTagStyle=function(d){var c=d.text().toUpperCase();
if(c.indexOf("REVEL")>-1){d.addClass("format-revel")
}else{if(c.indexOf("MYLAB")>-1||c.indexOf("MASTERING")>-1){d.addClass("format-mylab-mastering")
}else{d.addClass("iceblue-product-style")
}}if(d.is(":last-child")){b(d.closest(".attribute-iLAOptions"))
}};
$(document).ready(function(){$("li, p",".product-tag-style").each(function(){a.Product.setProductTagStyle($(this))
});
if($(".attribute-iLAOptions").length>0){$("p.attribute-iLAOptions").each(function(){a.Product.setProductTagStyle($(this))
});
$("ul.attribute-iLAOptions li p").each(function(){a.Product.setProductTagStyle($(this))
})
}})
})(HE);
if(typeof HE==="undefined"){var HE={}
}(function(b){var c=function(){var g=$(".product-search-results-list-container ol > li",".course-page-content");
g.css({height:"auto",visibility:"hidden"});
var e=Math.max.apply(Math,g.map(function(){var j=b.getSessionStorage("courseView");
var i=$(window).width();
var h=1.15;
if(j=="grid"){h=1.05
}else{if(i>900&&i<1100){h=1.2
}else{if(i>768&&i<899){h=1.35
}}}if(i<=768){h=1.05
}return $(this).outerHeight()*h
}).get());
g.css({visibility:"visible",height:e});
var f=g.length,d=0;
$(".product-search-results-list ol > li img",".course-page-content").off("load").on("load",function(){if(!d){}d+=1;
if(d==f){var h=Math.max.apply(Math,g.map(function(){return $(this).outerHeight()
}).get());
g.css({visibility:"visible",height:h})
}})
};
var a=function(){$(".product-search-results-list ol > li",".course-page-content").each(function(d,e){$(this).height("auto")
})
};
$(document).ready(function(){if($(".product-search-facets").length>1&&$(".product-search-facets").find("h4.filter-heading").length==0){if($(".product-search-facets").not(".original-product-search-facets").children(".product-search-facets-content").length>0){$(".product-search-facets").prepend("<h4 class='filter-heading'>FILTER BY</h4>");
$(".original-product-search-facets").hide()
}}if($(".product-search-results-list",".course-page-content").length>0){DMCP.PearsonInstantSearch[$(".product-search-results-list-container",".course-page-content").attr("data-index-name")].on("render",function(){var l=$(window).width(),i,j,h;
if($(".course-sorting-main").length==0&&!(typeof CQ!=="undefined"&&CQ.WCM.getMode()=="edit")){var g=$(".course-view-as");
if(!g.hasClass("view-as-preview")){g.addClass("view-as-preview")
}if($("h3.product-search-facets-header").is(":visible")&&$(".product-search-facets").find("h4.filter-heading").length==0){$(".product-search-facets").find(".product-search-facets-content").eq(0).before('<h4 class="filter-heading">FILTER BY</h4>')
}}if($(".ais-sort-by-selector").length){var d=$(".product-search-results-sort-label"),k=$(".product-search-results-sort-dropdown"),f=k.find(".ais-sort-by-selector");
if(!$("#product-sort-label").length){d.wrapInner('<label for="product-sort" id="product-sort-label"></label>')
}k.before('<i class="custom-select-btn"></i>');
f.attr("id","product-sort").addClass("sort-by-dropdown")
}$(".product-search-results-list ol > li").each(function(){$(this).addClass("content-tile-book-box")
});
if(l<769&&$("#-935125120").length==0){$(".product-search-results-count").hide();
$(".product-search-results-sort-label").text($(".product-search-results-sort-label").eq(0).text().replace(":",""));
$(".product-search-results-sort").wrap('<div class="tab-pane" id="-935125120-3" role="tabpanel" aria-hidden="true"></div>');
$(".product-search-facets").wrap('<div class="tab-pane" id="-935125120-2" role="tabpanel" aria-hidden="true"></div>');
$(".product-search-results-list",".course-page-content").after($(".product-pagination-view"));
$(".product-search-results-list, .product-pagination-view").wrapAll('<div class="tab-pane active" id="-935125120-1" role="tabpanel" aria-hidden="false"></div>');
$(".tab-pane").wrapAll('<section class="tab-content"></section');
$(".tab-content").wrap('<div class="mobile-view-productlist row-grid section"><div class="row"><div class="column section"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><div class="course-sorting-main tab-panel section"></div></div></div></div></div>');
$(".mobile-view-productlist .tab-panel").prepend('<nav id="-935125120"><ul class="nav nav-tabs" data-tabs="tabs" role="tablist"><li class="active" role="tab" aria-controls="-935125120-1" aria-selected="true"><a href="#-935125120-1" data-toggle="tab" class="mobile-courses-count"></a></li><li role="tab" aria-controls="-935125120-2" aria-selected="false"><a href="#-935125120-2" data-toggle="tab">Filters</a></li><li role="tab" aria-controls="-935125120-3" aria-selected="false"><a href="#-935125120-3" data-toggle="tab">Sort</a></li></ul></nav>');
$(".product-search-results-list .product-search-results-list-items").addClass("grid-view")
}if(l>768){j=$(".product-search-results-count",".course-sorting-header").clone();
i=$(".product-pagination-view",".course-sorting-header").clone()
}else{h=$(".product-search-results-count").find(".product-search-results-count-value").text().trim();
$(".mobile-courses-count").text("Results ("+h+")")
}$(".product-pagination-view").each(function(){b.Search.createAlgoliaPagination($(this))
});
$(".product-search-results-list ol > li",".course-page-content").each(function(){if($(this).find(".wrap-list-block").length==0){var o=$(this).find("h3 a").attr("href");
if($(this).find("img").length){var n=$(this).find("h3");
var p=$(this).find("img");
n.replaceWith(p.clone());
p.replaceWith(n.clone());
$(this).find("img").nextAll().wrapAll("<div class='wrap-list-block'></div>");
$(this).find("img").wrapAll("<picture />")
}else{$(this).children().wrapAll("<div class='wrap-list-block'></div>");
$(this).find(".wrap-list-block").append($(this).find(".attribute-iLAOptions"));
$(this).prepend('<img src="/etc/themes/platform/1dc-theme/assets/default-image.png" alt="book cover" class="image-default image-smallImageURL"/>');
$(this).find("img").wrapAll("<picture />")
}$(this).find("img").wrap("<a href="+o+">");
$(this).find(".attribute-inStockDate").text(b.formatDate($(this).find(".attribute-inStockDate").text()));
var m=$(this).find(".attribute-titleStatus").text();
if(m=="Not available"){$(this).find(".item-attribute-label").hide();
$(this).find(".attribute-inStockDate").hide()
}else{if(m=="Not yet available"){$(this).find(".item-attribute-label").text(" Estimated Availability: ");
$(this).find(".attribute-inStockDate").css("color","red")
}}$(this).find("p.attribute-iLAOptions, .attribute-iLAOptions li").each(function(){b.Product.setProductTagStyle($(this))
})
}if($(this).find(".attribute-iLAOptions ul").length&&!$(this).find(".attribute-iLAOptions li").length){$(this).find(".attribute-iLAOptions").hide()
}});
if($(".course-view-as .view-icon").length==0){$(".course-view-as").append("<h4 class='filter-heading'>VIEW AS</h4>");
$(".course-view-as").append("&nbsp;<span class='glyphicon glyphicon-th-large view-icon grid-icon '></span>");
$(".course-view-as").append("&nbsp;<span class='glyphicon glyphicon-th-list view-icon list-icon active-icon'></span>")
}$(".view-icon").on("click",function(){$(".view-icon").removeClass("active-icon");
$(this).addClass("active-icon");
if($(this).hasClass("list-icon")){b.setSessionStorage("courseView","list");
$(".product-search-results-list ol",".course-page-content").addClass("list-view").css("visibility","visible");
$(".product-search-results-list ol > li",".course-page-content").removeClass("grid-view-list");
$(".product-search-results-list ol > li",".course-page-content").parent().css("padding","");
+$(".product-search-results-list ol > li",".course-page-content").each(function(){$(this).height("auto")
});
c()
}else{b.setSessionStorage("courseView","grid");
$(".product-search-results-list ol",".course-page-content").removeClass("list-view").css("visibility","visible");
$(".product-search-results-list ol > li",".course-page-content").addClass("grid-view-list");
c()
}});
$(".product-search-facets a, .product-pagination-view a").on("click",function(){b.setSessionStorage("isFiltersClicked","true")
});
$(".product-search-results-sort select").on("change",function(){b.setSessionStorage("isFiltersClicked","true")
});
if(b.getSessionStorage("isFiltersClicked")==="true"){window.location.hash="#availableTitleSection";
b.setSessionStorage("isFiltersClicked","")
}$(".wrap-list-block .item-attribute-multivalue-list.attribute-authorSummary").each(function(){for(var m=0;
m<$(this).find("li").length;
m++){if($(this).find("li p").eq(m).html().indexOf("&")<0){$(this).find("li p").eq(m).html($(this).find("li p").eq(m).html()+",")
}}});
if($(window).width()>767){if(b.getSessionStorage("courseView")==="list"){$(".list-icon").click()
}else{if(b.getSessionStorage("courseView")==="grid"){$(".grid-icon").click()
}else{$(".product-search-results-list ol",".course-page-content").addClass("list-view").css("visibility","visible")
}}}else{$(".product-search-results-list ol > li",".course-page-content").addClass("grid-view-list")
}c();
var e=$(".product-search-facets-header > a");
e.each(function(){$(this).removeAttr("aria-selected")
});
$(document).off("click",".product-search-facets .product-search-facets-header").on("click",".product-search-facets .product-search-facets-header",function(m){$currentElement=$(this);
$currentElement.find("span").toggleClass("minus plus");
if($currentElement.find("span").hasClass("minus")){$currentElement.closest("div").find("ul").attr("aria-hidden","false")
}else{$currentElement.closest("div").find("ul").attr("aria-hidden","true")
}});
$(".product-results-view img").load(function(){var m=Math.max.apply(Math,$(".product-results-view .image-default",".course-page-content").map(function(){return $(this).width()
}).get());
$(".product-results-view .image-default",".course-page-content").width(m)
})
})
}})
})(HE);
(function(){var f;
var a=function(D,h){if(!(this instanceof a)){return new a(D,h)
}var C={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:false,autoplayDisableOnInteraction:true,autoplayStopOnLast:false,iOSEdgeSwipeDetection:false,iOSEdgeSwipeThreshold:20,freeMode:false,freeModeMomentum:true,freeModeMomentumRatio:1,freeModeMomentumBounce:true,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:false,freeModeMinimumVelocity:0.02,autoHeight:false,setWrapperSize:false,virtualTranslate:false,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:true},flip:{slideShadows:true,limitRotation:true},cube:{slideShadows:true,shadow:true,shadowOffset:20,shadowScale:0.94},fade:{crossFade:false},parallax:false,zoom:false,zoomMax:3,zoomMin:1,zoomToggle:true,scrollbar:null,scrollbarHide:true,scrollbarDraggable:false,scrollbarSnapOnRelease:false,keyboardControl:false,mousewheelControl:false,mousewheelReleaseOnEdges:false,mousewheelInvert:false,mousewheelForceToAxis:false,mousewheelSensitivity:1,mousewheelEventsTarged:"container",hashnav:false,hashnavWatchState:false,history:false,replaceState:false,breakpoints:undefined,spaceBetween:10,slidesPerView:5,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:false,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:false,touchRatio:1,touchAngle:45,simulateTouch:true,shortSwipes:true,longSwipes:true,longSwipesRatio:0.5,longSwipesMs:300,followFinger:true,onlyExternal:false,threshold:0,touchMoveStopPropagation:true,touchReleaseOnEdges:false,uniqueNavElements:true,pagination:null,paginationElement:"span",paginationClickable:false,paginationHide:false,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:true,resistanceRatio:0.85,nextButton:null,prevButton:null,watchSlidesProgress:false,watchSlidesVisibility:false,grabCursor:false,preventClicks:true,preventClicksPropagation:true,slideToClickedSlide:false,lazyLoading:false,lazyLoadingInPrevNext:false,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:false,preloadImages:true,updateOnImagesReady:true,loop:false,loopAdditionalSlides:0,loopedSlides:null,control:undefined,controlInverse:false,controlBy:"slide",normalizeSlideIndex:true,allowSwipeToPrev:true,allowSwipeToNext:true,swipeHandler:null,noSwiping:true,noSwipingClass:"swiper-no-swiping",passiveListeners:true,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",paginationClickableClass:"swiper-pagination-clickable",paginationModifierClass:"swiper-pagination-",lazyLoadingClass:"swiper-lazy",lazyStatusLoadingClass:"swiper-lazy-loading",lazyStatusLoadedClass:"swiper-lazy-loaded",lazyPreloaderClass:"swiper-lazy-preloader",notificationClass:"swiper-notification",preloaderClass:"preloader",zoomContainerClass:"swiper-zoom-container",observer:false,observeParents:false,a11y:false,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:true};
var A=h&&h.virtualTranslate;
h=h||{};
var x={};
for(var n in h){if(typeof h[n]==="object"&&h[n]!==null&&!(h[n].nodeType||h[n]===window||h[n]===document||(typeof g!=="undefined"&&h[n] instanceof g)||(typeof jQuery!=="undefined"&&h[n] instanceof jQuery))){x[n]={};
for(var y in h[n]){x[n][y]=h[n][y]
}}else{x[n]=h[n]
}}for(var v in C){if(typeof h[v]==="undefined"){h[v]=C[v]
}else{if(typeof h[v]==="object"){for(var J in C[v]){if(typeof h[v][J]==="undefined"){h[v][J]=C[v][J]
}}}}}var I=this;
I.params=h;
I.originalParams=x;
I.classNames=[];
if(typeof f!=="undefined"&&typeof g!=="undefined"){f=g
}if(typeof f==="undefined"){if(typeof g==="undefined"){f=window.Dom7||window.Zepto||window.jQuery
}else{f=g
}if(!f){return
}}I.$=f;
I.currentBreakpoint=undefined;
I.getActiveBreakpoint=function(){if(!I.params.breakpoints){return false
}var s=false;
var W=[],p;
for(p in I.params.breakpoints){if(I.params.breakpoints.hasOwnProperty(p)){W.push(p)
}}W.sort(function(Y,X){return parseInt(Y,10)>parseInt(X,10)
});
for(var V=0;
V<W.length;
V++){p=W[V];
if(p>=window.innerWidth&&!s){s=p
}}return s||"max"
};
I.setBreakpoint=function(){var p=I.getActiveBreakpoint();
if(p&&I.currentBreakpoint!==p){var V=p in I.params.breakpoints?I.params.breakpoints[p]:I.originalParams;
var s=I.params.loop&&(V.slidesPerView!==I.params.slidesPerView);
for(var W in V){I.params[W]=V[W]
}I.currentBreakpoint=p;
if(s&&I.destroyLoop){I.reLoop(true)
}}};
if(I.params.breakpoints){I.setBreakpoint()
}I.container=f(D);
if(I.container.length===0){return
}if(I.container.length>1){var M=[];
I.container.each(function(){var p=this;
M.push(new a(this,h))
});
return M
}I.container[0].swiper=I;
I.container.data("swiper",I);
I.classNames.push(I.params.containerModifierClass+I.params.direction);
if(I.params.freeMode){I.classNames.push(I.params.containerModifierClass+"free-mode")
}if(!I.support.flexbox){I.classNames.push(I.params.containerModifierClass+"no-flexbox");
I.params.slidesPerColumn=1
}if(I.params.autoHeight){I.classNames.push(I.params.containerModifierClass+"autoheight")
}if(I.params.parallax||I.params.watchSlidesVisibility){I.params.watchSlidesProgress=true
}if(I.params.touchReleaseOnEdges){I.params.resistanceRatio=0
}if(["cube","coverflow","flip"].indexOf(I.params.effect)>=0){if(I.support.transforms3d){I.params.watchSlidesProgress=true;
I.classNames.push(I.params.containerModifierClass+"3d")
}else{I.params.effect="slide"
}}if(I.params.effect!=="slide"){I.classNames.push(I.params.containerModifierClass+I.params.effect)
}if(I.params.effect==="cube"){I.params.resistanceRatio=0;
I.params.slidesPerView=1;
I.params.slidesPerColumn=1;
I.params.slidesPerGroup=1;
I.params.centeredSlides=false;
I.params.spaceBetween=0;
I.params.virtualTranslate=true
}if(I.params.effect==="fade"||I.params.effect==="flip"){I.params.slidesPerView=1;
I.params.slidesPerColumn=1;
I.params.slidesPerGroup=1;
I.params.watchSlidesProgress=true;
I.params.spaceBetween=0;
if(typeof A==="undefined"){I.params.virtualTranslate=true
}}if(I.params.grabCursor&&I.support.touch){I.params.grabCursor=false
}I.wrapper=I.container.children("."+I.params.wrapperClass);
if(I.params.pagination){I.paginationContainer=f(I.params.pagination);
if(I.params.uniqueNavElements&&typeof I.params.pagination==="string"&&I.paginationContainer.length>1&&I.container.find(I.params.pagination).length===1){I.paginationContainer=I.container.find(I.params.pagination)
}if(I.params.paginationType==="bullets"&&I.params.paginationClickable){I.paginationContainer.addClass(I.params.paginationModifierClass+"clickable")
}else{I.params.paginationClickable=false
}I.paginationContainer.addClass(I.params.paginationModifierClass+I.params.paginationType)
}if(I.params.nextButton||I.params.prevButton){if(I.params.nextButton){I.nextButton=f(I.params.nextButton);
if(I.params.uniqueNavElements&&typeof I.params.nextButton==="string"&&I.nextButton.length>1&&I.container.find(I.params.nextButton).length===1){I.nextButton=I.container.find(I.params.nextButton)
}}if(I.params.prevButton){I.prevButton=f(I.params.prevButton);
if(I.params.uniqueNavElements&&typeof I.params.prevButton==="string"&&I.prevButton.length>1&&I.container.find(I.params.prevButton).length===1){I.prevButton=I.container.find(I.params.prevButton)
}}}I.isHorizontal=function(){return I.params.direction==="horizontal"
};
I.rtl=I.isHorizontal()&&(I.container[0].dir.toLowerCase()==="rtl"||I.container.css("direction")==="rtl");
if(I.rtl){I.classNames.push(I.params.containerModifierClass+"rtl")
}if(I.rtl){I.wrongRTL=I.wrapper.css("display")==="-webkit-box"
}if(I.params.slidesPerColumn>1){I.classNames.push(I.params.containerModifierClass+"multirow")
}if(I.device.android){I.classNames.push(I.params.containerModifierClass+"android")
}I.container.addClass(I.classNames.join(" "));
I.translate=0;
I.progress=0;
I.velocity=0;
I.lockSwipeToNext=function(){I.params.allowSwipeToNext=false;
if(I.params.allowSwipeToPrev===false&&I.params.grabCursor){I.unsetGrabCursor()
}};
I.lockSwipeToPrev=function(){I.params.allowSwipeToPrev=false;
if(I.params.allowSwipeToNext===false&&I.params.grabCursor){I.unsetGrabCursor()
}};
I.lockSwipes=function(){I.params.allowSwipeToNext=I.params.allowSwipeToPrev=false;
if(I.params.grabCursor){I.unsetGrabCursor()
}};
I.unlockSwipeToNext=function(){I.params.allowSwipeToNext=true;
if(I.params.allowSwipeToPrev===true&&I.params.grabCursor){I.setGrabCursor()
}};
I.unlockSwipeToPrev=function(){I.params.allowSwipeToPrev=true;
if(I.params.allowSwipeToNext===true&&I.params.grabCursor){I.setGrabCursor()
}};
I.unlockSwipes=function(){I.params.allowSwipeToNext=I.params.allowSwipeToPrev=true;
if(I.params.grabCursor){I.setGrabCursor()
}};
function N(p){return Math.floor(p)
}I.setGrabCursor=function(p){I.container[0].style.cursor="move";
I.container[0].style.cursor=p?"-webkit-grabbing":"-webkit-grab";
I.container[0].style.cursor=p?"-moz-grabbin":"-moz-grab";
I.container[0].style.cursor=p?"grabbing":"grab"
};
I.unsetGrabCursor=function(){I.container[0].style.cursor=""
};
if(I.params.grabCursor){I.setGrabCursor()
}I.imagesToLoad=[];
I.imagesLoaded=0;
I.loadImage=function(V,Z,Y,s,p,aa){var X;
function W(){if(aa){aa()
}}if(!V.complete||!p){if(Z){X=new window.Image();
X.onload=W;
X.onerror=W;
if(s){X.sizes=s
}if(Y){X.srcset=Y
}if(Z){X.src=Z
}}else{W()
}}else{W()
}};
I.preloadImages=function(){I.imagesToLoad=I.container.find("img");
function s(){if(typeof I==="undefined"||I===null||!I){return
}if(I.imagesLoaded!==undefined){I.imagesLoaded++
}if(I.imagesLoaded===I.imagesToLoad.length){if(I.params.updateOnImagesReady){I.update()
}I.emit("onImagesReady",I)
}}for(var p=0;
p<I.imagesToLoad.length;
p++){I.loadImage(I.imagesToLoad[p],(I.imagesToLoad[p].currentSrc||I.imagesToLoad[p].getAttribute("src")),(I.imagesToLoad[p].srcset||I.imagesToLoad[p].getAttribute("srcset")),I.imagesToLoad[p].sizes||I.imagesToLoad[p].getAttribute("sizes"),true,s)
}};
I.autoplayTimeoutId=undefined;
I.autoplaying=false;
I.autoplayPaused=false;
function O(){var s=I.params.autoplay;
var p=I.slides.eq(I.activeIndex);
if(p.attr("data-swiper-autoplay")){s=p.attr("data-swiper-autoplay")||I.params.autoplay
}I.autoplayTimeoutId=setTimeout(function(){if(I.params.loop){I.fixLoop();
I._slideNext();
I.emit("onAutoplay",I)
}else{if(!I.isEnd){I._slideNext();
I.emit("onAutoplay",I)
}else{if(!h.autoplayStopOnLast){I._slideTo(0);
I.emit("onAutoplay",I)
}else{I.stopAutoplay()
}}}},s)
}I.startAutoplay=function(){if(typeof I.autoplayTimeoutId!=="undefined"){return false
}if(!I.params.autoplay){return false
}if(I.autoplaying){return false
}I.autoplaying=true;
I.emit("onAutoplayStart",I);
O()
};
I.stopAutoplay=function(p){if(!I.autoplayTimeoutId){return
}if(I.autoplayTimeoutId){clearTimeout(I.autoplayTimeoutId)
}I.autoplaying=false;
I.autoplayTimeoutId=undefined;
I.emit("onAutoplayStop",I)
};
I.pauseAutoplay=function(p){if(I.autoplayPaused){return
}if(I.autoplayTimeoutId){clearTimeout(I.autoplayTimeoutId)
}I.autoplayPaused=true;
if(p===0){I.autoplayPaused=false;
O()
}else{I.wrapper.transitionEnd(function(){if(!I){return
}I.autoplayPaused=false;
if(!I.autoplaying){I.stopAutoplay()
}else{O()
}})
}};
I.minTranslate=function(){return(-I.snapGrid[0])
};
I.maxTranslate=function(){return(-I.snapGrid[I.snapGrid.length-1])
};
I.updateAutoHeight=function(){var X=[];
var s=0;
var W;
if(I.params.slidesPerView!=="auto"&&I.params.slidesPerView>1){for(W=0;
W<Math.ceil(I.params.slidesPerView);
W++){var V=I.activeIndex+W;
if(V>I.slides.length){break
}X.push(I.slides.eq(V)[0])
}}else{X.push(I.slides.eq(I.activeIndex)[0])
}for(W=0;
W<X.length;
W++){if(typeof X[W]!=="undefined"){var p=X[W].offsetHeight;
s=p>s?p:s
}}if(s){I.wrapper.css("height",s+"px")
}};
I.updateContainerSize=function(){var s,p;
if(typeof I.params.width!=="undefined"){s=I.params.width
}else{s=I.container[0].clientWidth
}if(typeof I.params.height!=="undefined"){p=I.params.height
}else{p=I.container[0].clientHeight
}if(s===0&&I.isHorizontal()||p===0&&!I.isHorizontal()){return
}s=s-parseInt(I.container.css("padding-left"),10)-parseInt(I.container.css("padding-right"),10);
p=p-parseInt(I.container.css("padding-top"),10)-parseInt(I.container.css("padding-bottom"),10);
I.width=s;
I.height=p;
I.size=I.isHorizontal()?I.width:I.height
};
I.updateSlidesSize=function(){I.slides=I.wrapper.children("."+I.params.slideClass);
I.snapGrid=[];
I.slidesGrid=[];
I.slidesSizesGrid=[];
var ag=I.params.spaceBetween,p=-I.params.slidesOffsetBefore,Y,s=0,ad=0;
if(typeof I.size==="undefined"){return
}if(typeof ag==="string"&&ag.indexOf("%")>=0){ag=parseFloat(ag.replace("%",""))/100*I.size
}I.virtualSize=-ag;
if(I.rtl){I.slides.css({marginLeft:"",marginTop:""})
}else{I.slides.css({marginRight:"",marginBottom:""})
}var ac;
if(I.params.slidesPerColumn>1){if(Math.floor(I.slides.length/I.params.slidesPerColumn)===I.slides.length/I.params.slidesPerColumn){ac=I.slides.length
}else{ac=Math.ceil(I.slides.length/I.params.slidesPerColumn)*I.params.slidesPerColumn
}if(I.params.slidesPerView!=="auto"&&I.params.slidesPerColumnFill==="row"){ac=Math.max(ac,I.params.slidesPerView*I.params.slidesPerColumn)
}}var ab;
var aa=I.params.slidesPerColumn;
var V=ac/aa;
var ae=V-(I.params.slidesPerColumn*V-I.slides.length);
for(Y=0;
Y<I.slides.length;
Y++){ab=0;
var Z=I.slides.eq(Y);
if(I.params.slidesPerColumn>1){var af;
var W,ah;
if(I.params.slidesPerColumnFill==="column"){W=Math.floor(Y/aa);
ah=Y-W*aa;
if(W>ae||(W===ae&&ah===aa-1)){if(++ah>=aa){ah=0;
W++
}}af=W+ah*ac/aa;
Z.css({"-webkit-box-ordinal-group":af,"-moz-box-ordinal-group":af,"-ms-flex-order":af,"-webkit-order":af,order:af})
}else{ah=Math.floor(Y/V);
W=Y-ah*V
}Z.css("margin-"+(I.isHorizontal()?"top":"left"),(ah!==0&&I.params.spaceBetween)&&(I.params.spaceBetween+"px")).attr("data-swiper-column",W).attr("data-swiper-row",ah)
}if(Z.css("display")==="none"){continue
}if(I.params.slidesPerView==="auto"){ab=I.isHorizontal()?Z.outerWidth(true):Z.outerHeight(true);
if(I.params.roundLengths){ab=N(ab)
}}else{ab=(I.size-(I.params.slidesPerView-1)*ag)/I.params.slidesPerView;
if(I.params.roundLengths){ab=N(ab)
}if(I.isHorizontal()){I.slides[Y].style.width=ab+"px"
}else{I.slides[Y].style.height=ab+"px"
}}I.slides[Y].swiperSlideSize=ab;
I.slidesSizesGrid.push(ab);
if(I.params.centeredSlides){p=p+ab/2+s/2+ag;
if(s===0&&Y!==0){p=p-I.size/2-ag
}if(Y===0){p=p-I.size/2-ag
}if(Math.abs(p)<1/1000){p=0
}if((ad)%I.params.slidesPerGroup===0){I.snapGrid.push(p)
}I.slidesGrid.push(p)
}else{if((ad)%I.params.slidesPerGroup===0){I.snapGrid.push(p)
}I.slidesGrid.push(p);
p=p+ab+ag
}I.virtualSize+=ab+ag;
s=ab;
ad++
}I.virtualSize=Math.max(I.virtualSize,I.size)+I.params.slidesOffsetAfter;
var X;
if(I.rtl&&I.wrongRTL&&(I.params.effect==="slide"||I.params.effect==="coverflow")){I.wrapper.css({width:I.virtualSize+I.params.spaceBetween+"px"})
}if(!I.support.flexbox||I.params.setWrapperSize){if(I.isHorizontal()){I.wrapper.css({width:I.virtualSize+I.params.spaceBetween+"px"})
}else{I.wrapper.css({height:I.virtualSize+I.params.spaceBetween+"px"})
}}if(I.params.slidesPerColumn>1){I.virtualSize=(ab+I.params.spaceBetween)*ac;
I.virtualSize=Math.ceil(I.virtualSize/I.params.slidesPerColumn)-I.params.spaceBetween;
if(I.isHorizontal()){I.wrapper.css({width:I.virtualSize+I.params.spaceBetween+"px"})
}else{I.wrapper.css({height:I.virtualSize+I.params.spaceBetween+"px"})
}if(I.params.centeredSlides){X=[];
for(Y=0;
Y<I.snapGrid.length;
Y++){if(I.snapGrid[Y]<I.virtualSize+I.snapGrid[0]){X.push(I.snapGrid[Y])
}}I.snapGrid=X
}}if(!I.params.centeredSlides){X=[];
for(Y=0;
Y<I.snapGrid.length;
Y++){if(I.snapGrid[Y]<=I.virtualSize-I.size){X.push(I.snapGrid[Y])
}}I.snapGrid=X;
if(Math.floor(I.virtualSize-I.size)-Math.floor(I.snapGrid[I.snapGrid.length-1])>1){I.snapGrid.push(I.virtualSize-I.size)
}}if(I.snapGrid.length===0){I.snapGrid=[0]
}if(I.params.spaceBetween!==0){if(I.isHorizontal()){if(I.rtl){I.slides.css({marginLeft:ag+"px"})
}else{I.slides.css({marginRight:ag+"px"})
}}else{I.slides.css({marginBottom:ag+"px"})
}}if(I.params.watchSlidesProgress){I.updateSlidesOffset()
}};
I.updateSlidesOffset=function(){for(var p=0;
p<I.slides.length;
p++){I.slides[p].swiperSlideOffset=I.isHorizontal()?I.slides[p].offsetLeft:I.slides[p].offsetTop
}};
I.currentSlidesPerView=function(){var X=1,V,p;
if(I.params.centeredSlides){var s=I.slides[I.activeIndex].swiperSlideSize;
var W;
for(V=I.activeIndex+1;
V<I.slides.length;
V++){if(I.slides[V]&&!W){s+=I.slides[V].swiperSlideSize;
X++;
if(s>I.size){W=true
}}}for(p=I.activeIndex-1;
p>=0;
p--){if(I.slides[p]&&!W){s+=I.slides[p].swiperSlideSize;
X++;
if(s>I.size){W=true
}}}}else{for(V=I.activeIndex+1;
V<I.slides.length;
V++){if(I.slidesGrid[V]-I.slidesGrid[I.activeIndex]<I.size){X++
}}}return X
};
I.updateSlidesProgress=function(aa){if(typeof aa==="undefined"){aa=I.translate||0
}if(I.slides.length===0){return
}if(typeof I.slides[0].swiperSlideOffset==="undefined"){I.updateSlidesOffset()
}var W=-aa;
if(I.rtl){W=aa
}I.slides.removeClass(I.params.slideVisibleClass);
for(var Z=0;
Z<I.slides.length;
Z++){var s=I.slides[Z];
var V=(W+(I.params.centeredSlides?I.minTranslate():0)-s.swiperSlideOffset)/(s.swiperSlideSize+I.params.spaceBetween);
if(I.params.watchSlidesVisibility){var Y=-(W-s.swiperSlideOffset);
var X=Y+I.slidesSizesGrid[Z];
var p=(Y>=0&&Y<I.size)||(X>0&&X<=I.size)||(Y<=0&&X>=I.size);
if(p){I.slides.eq(Z).addClass(I.params.slideVisibleClass)
}}s.progress=I.rtl?-V:V
}};
I.updateProgress=function(W){if(typeof W==="undefined"){W=I.translate||0
}var V=I.maxTranslate()-I.minTranslate();
var p=I.isBeginning;
var s=I.isEnd;
if(V===0){I.progress=0;
I.isBeginning=I.isEnd=true
}else{I.progress=(W-I.minTranslate())/(V);
I.isBeginning=I.progress<=0;
I.isEnd=I.progress>=1
}if(I.isBeginning&&!p){I.emit("onReachBeginning",I)
}if(I.isEnd&&!s){I.emit("onReachEnd",I)
}if(I.params.watchSlidesProgress){I.updateSlidesProgress(W)
}I.emit("onProgress",I,I.progress)
};
I.updateActiveIndex=function(){var s=I.rtl?I.translate:-I.translate;
var W,p,V;
for(p=0;
p<I.slidesGrid.length;
p++){if(typeof I.slidesGrid[p+1]!=="undefined"){if(s>=I.slidesGrid[p]&&s<I.slidesGrid[p+1]-(I.slidesGrid[p+1]-I.slidesGrid[p])/2){W=p
}else{if(s>=I.slidesGrid[p]&&s<I.slidesGrid[p+1]){W=p+1
}}}else{if(s>=I.slidesGrid[p]){W=p
}}}if(I.params.normalizeSlideIndex){if(W<0||typeof W==="undefined"){W=0
}}V=Math.floor(W/I.params.slidesPerGroup);
if(V>=I.snapGrid.length){V=I.snapGrid.length-1
}if(W===I.activeIndex){return
}I.snapIndex=V;
I.previousIndex=I.activeIndex;
I.activeIndex=W;
I.updateClasses();
I.updateRealIndex()
};
I.updateRealIndex=function(){I.realIndex=parseInt(I.slides.eq(I.activeIndex).attr("data-swiper-slide-index")||I.activeIndex,10)
};
I.updateClasses=function(){I.slides.removeClass(I.params.slideActiveClass+" "+I.params.slideNextClass+" "+I.params.slidePrevClass+" "+I.params.slideDuplicateActiveClass+" "+I.params.slideDuplicateNextClass+" "+I.params.slideDuplicatePrevClass);
var Z=I.slides.eq(I.activeIndex);
Z.addClass(I.params.slideActiveClass);
if(h.loop){if(Z.hasClass(I.params.slideDuplicateClass)){I.wrapper.children("."+I.params.slideClass+":not(."+I.params.slideDuplicateClass+')[data-swiper-slide-index="'+I.realIndex+'"]').addClass(I.params.slideDuplicateActiveClass)
}else{I.wrapper.children("."+I.params.slideClass+"."+I.params.slideDuplicateClass+'[data-swiper-slide-index="'+I.realIndex+'"]').addClass(I.params.slideDuplicateActiveClass)
}}var Y=Z.next("."+I.params.slideClass).addClass(I.params.slideNextClass);
if(I.params.loop&&Y.length===0){Y=I.slides.eq(0);
Y.addClass(I.params.slideNextClass)
}var p=Z.prev("."+I.params.slideClass).addClass(I.params.slidePrevClass);
if(I.params.loop&&p.length===0){p=I.slides.eq(-1);
p.addClass(I.params.slidePrevClass)
}if(h.loop){if(Y.hasClass(I.params.slideDuplicateClass)){I.wrapper.children("."+I.params.slideClass+":not(."+I.params.slideDuplicateClass+')[data-swiper-slide-index="'+Y.attr("data-swiper-slide-index")+'"]').addClass(I.params.slideDuplicateNextClass)
}else{I.wrapper.children("."+I.params.slideClass+"."+I.params.slideDuplicateClass+'[data-swiper-slide-index="'+Y.attr("data-swiper-slide-index")+'"]').addClass(I.params.slideDuplicateNextClass)
}if(p.hasClass(I.params.slideDuplicateClass)){I.wrapper.children("."+I.params.slideClass+":not(."+I.params.slideDuplicateClass+')[data-swiper-slide-index="'+p.attr("data-swiper-slide-index")+'"]').addClass(I.params.slideDuplicatePrevClass)
}else{I.wrapper.children("."+I.params.slideClass+"."+I.params.slideDuplicateClass+'[data-swiper-slide-index="'+p.attr("data-swiper-slide-index")+'"]').addClass(I.params.slideDuplicatePrevClass)
}}if(I.paginationContainer&&I.paginationContainer.length>0){var X,W=I.params.loop?Math.ceil((I.slides.length-I.loopedSlides*2)/I.params.slidesPerGroup):I.snapGrid.length;
if(I.params.loop){X=Math.ceil((I.activeIndex-I.loopedSlides)/I.params.slidesPerGroup);
if(X>I.slides.length-1-I.loopedSlides*2){X=X-(I.slides.length-I.loopedSlides*2)
}if(X>W-1){X=X-W
}if(X<0&&I.params.paginationType!=="bullets"){X=W+X
}}else{if(typeof I.snapIndex!=="undefined"){X=I.snapIndex
}else{X=I.activeIndex||0
}}if(I.params.paginationType==="bullets"&&I.bullets&&I.bullets.length>0){I.bullets.removeClass(I.params.bulletActiveClass);
if(I.paginationContainer.length>1){I.bullets.each(function(){if(f(this).index()===X){f(this).addClass(I.params.bulletActiveClass)
}})
}else{I.bullets.eq(X).addClass(I.params.bulletActiveClass)
}}if(I.params.paginationType==="fraction"){I.paginationContainer.find("."+I.params.paginationCurrentClass).text(X+1);
I.paginationContainer.find("."+I.params.paginationTotalClass).text(W)
}if(I.params.paginationType==="progress"){var aa=(X+1)/W,V=aa,s=1;
if(!I.isHorizontal()){s=aa;
V=1
}I.paginationContainer.find("."+I.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+V+") scaleY("+s+")").transition(I.params.speed)
}if(I.params.paginationType==="custom"&&I.params.paginationCustomRender){I.paginationContainer.html(I.params.paginationCustomRender(I,X+1,W));
I.emit("onPaginationRendered",I,I.paginationContainer[0])
}}if(!I.params.loop){if(I.params.prevButton&&I.prevButton&&I.prevButton.length>0){if(I.isBeginning){I.prevButton.addClass(I.params.buttonDisabledClass);
if(I.params.a11y&&I.a11y){I.a11y.disable(I.prevButton)
}}else{I.prevButton.removeClass(I.params.buttonDisabledClass);
if(I.params.a11y&&I.a11y){I.a11y.enable(I.prevButton)
}}}if(I.params.nextButton&&I.nextButton&&I.nextButton.length>0){if(I.isEnd){I.nextButton.addClass(I.params.buttonDisabledClass);
if(I.params.a11y&&I.a11y){I.a11y.disable(I.nextButton)
}}else{I.nextButton.removeClass(I.params.buttonDisabledClass);
if(I.params.a11y&&I.a11y){I.a11y.enable(I.nextButton)
}}}}};
I.updatePagination=function(){if(!I.params.pagination){return
}if(I.paginationContainer&&I.paginationContainer.length>0){var p="";
if(I.params.paginationType==="bullets"){var V=I.params.loop?Math.ceil((I.slides.length-I.loopedSlides*2)/I.params.slidesPerGroup):I.snapGrid.length;
for(var s=0;
s<V;
s++){if(I.params.paginationBulletRender){p+=I.params.paginationBulletRender(I,s,I.params.bulletClass)
}else{p+="<"+I.params.paginationElement+' class="'+I.params.bulletClass+'"></'+I.params.paginationElement+">"
}}I.paginationContainer.html(p);
I.bullets=I.paginationContainer.find("."+I.params.bulletClass);
if(I.params.paginationClickable&&I.params.a11y&&I.a11y){I.a11y.initPagination()
}}if(I.params.paginationType==="fraction"){if(I.params.paginationFractionRender){p=I.params.paginationFractionRender(I,I.params.paginationCurrentClass,I.params.paginationTotalClass)
}else{p='<span class="'+I.params.paginationCurrentClass+'"></span> / <span class="'+I.params.paginationTotalClass+'"></span>'
}I.paginationContainer.html(p)
}if(I.params.paginationType==="progress"){if(I.params.paginationProgressRender){p=I.params.paginationProgressRender(I,I.params.paginationProgressbarClass)
}else{p='<span class="'+I.params.paginationProgressbarClass+'"></span>'
}I.paginationContainer.html(p)
}if(I.params.paginationType!=="custom"){I.emit("onPaginationRendered",I,I.paginationContainer[0])
}}};
I.update=function(W){if(!I){return
}I.updateContainerSize();
I.updateSlidesSize();
I.updateProgress();
I.updatePagination();
I.updateClasses();
if(I.params.scrollbar&&I.scrollbar){I.scrollbar.set()
}var s;
function p(){var X=I.rtl?-I.translate:I.translate;
s=Math.min(Math.max(I.translate,I.maxTranslate()),I.minTranslate());
I.setWrapperTranslate(s);
I.updateActiveIndex();
I.updateClasses()
}if(W){var V;
if(I.controller&&I.controller.spline){I.controller.spline=undefined
}if(I.params.freeMode){p();
if(I.params.autoHeight){I.updateAutoHeight()
}}else{if((I.params.slidesPerView==="auto"||I.params.slidesPerView>1)&&I.isEnd&&!I.params.centeredSlides){V=I.slideTo(I.slides.length-1,0,false,true)
}else{V=I.slideTo(I.activeIndex,0,false,true)
}if(!V){p()
}}}else{if(I.params.autoHeight){I.updateAutoHeight()
}}};
I.onResize=function(p){if(I.params.onBeforeResize){I.params.onBeforeResize(I)
}if(I.params.breakpoints){I.setBreakpoint()
}var W=I.params.allowSwipeToPrev;
var s=I.params.allowSwipeToNext;
I.params.allowSwipeToPrev=I.params.allowSwipeToNext=true;
I.updateContainerSize();
I.updateSlidesSize();
if(I.params.slidesPerView==="auto"||I.params.freeMode||p){I.updatePagination()
}if(I.params.scrollbar&&I.scrollbar){I.scrollbar.set()
}if(I.controller&&I.controller.spline){I.controller.spline=undefined
}var X=false;
if(I.params.freeMode){var V=Math.min(Math.max(I.translate,I.maxTranslate()),I.minTranslate());
I.setWrapperTranslate(V);
I.updateActiveIndex();
I.updateClasses();
if(I.params.autoHeight){I.updateAutoHeight()
}}else{I.updateClasses();
if((I.params.slidesPerView==="auto"||I.params.slidesPerView>1)&&I.isEnd&&!I.params.centeredSlides){X=I.slideTo(I.slides.length-1,0,false,true)
}else{X=I.slideTo(I.activeIndex,0,false,true)
}}if(I.params.lazyLoading&&!X&&I.lazy){I.lazy.load()
}I.params.allowSwipeToPrev=W;
I.params.allowSwipeToNext=s;
if(I.params.onAfterResize){I.params.onAfterResize(I)
}};
I.touchEventsDesktop={start:"mousedown",move:"mousemove",end:"mouseup"};
if(window.navigator.pointerEnabled){I.touchEventsDesktop={start:"pointerdown",move:"pointermove",end:"pointerup"}
}else{if(window.navigator.msPointerEnabled){I.touchEventsDesktop={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}
}}I.touchEvents={start:I.support.touch||!I.params.simulateTouch?"touchstart":I.touchEventsDesktop.start,move:I.support.touch||!I.params.simulateTouch?"touchmove":I.touchEventsDesktop.move,end:I.support.touch||!I.params.simulateTouch?"touchend":I.touchEventsDesktop.end};
if(window.navigator.pointerEnabled||window.navigator.msPointerEnabled){(I.params.touchEventsTarget==="container"?I.container:I.wrapper).addClass("swiper-wp8-"+I.params.direction)
}I.initEvents=function(Z){var p=Z?"off":"on";
var X=Z?"removeEventListener":"addEventListener";
var s=I.params.touchEventsTarget==="container"?I.container[0]:I.wrapper[0];
var Y=I.support.touch?s:document;
var V=I.params.nested?true:false;
if(I.browser.ie){s[X](I.touchEvents.start,I.onTouchStart,false);
Y[X](I.touchEvents.move,I.onTouchMove,V);
Y[X](I.touchEvents.end,I.onTouchEnd,false)
}else{if(I.support.touch){var W=I.touchEvents.start==="touchstart"&&I.support.passiveListener&&I.params.passiveListeners?{passive:true,capture:false}:false;
s[X](I.touchEvents.start,I.onTouchStart,W);
s[X](I.touchEvents.move,I.onTouchMove,V);
s[X](I.touchEvents.end,I.onTouchEnd,W)
}if((h.simulateTouch&&!I.device.ios&&!I.device.android)||(h.simulateTouch&&!I.support.touch&&I.device.ios)){s[X]("mousedown",I.onTouchStart,false);
document[X]("mousemove",I.onTouchMove,V);
document[X]("mouseup",I.onTouchEnd,false)
}}window[X]("resize",I.onResize);
if(I.params.nextButton&&I.nextButton&&I.nextButton.length>0){I.nextButton[p]("click",I.onClickNext);
if(I.params.a11y&&I.a11y){I.nextButton[p]("keydown",I.a11y.onEnterKey)
}}if(I.params.prevButton&&I.prevButton&&I.prevButton.length>0){I.prevButton[p]("click",I.onClickPrev);
if(I.params.a11y&&I.a11y){I.prevButton[p]("keydown",I.a11y.onEnterKey)
}}if(I.params.pagination&&I.params.paginationClickable){I.paginationContainer[p]("click","."+I.params.bulletClass,I.onClickIndex);
if(I.params.a11y&&I.a11y){I.paginationContainer[p]("keydown","."+I.params.bulletClass,I.a11y.onEnterKey)
}}if(I.params.preventClicks||I.params.preventClicksPropagation){s[X]("click",I.preventClicks,true)
}};
I.attachEvents=function(){I.initEvents()
};
I.detachEvents=function(){I.initEvents(true)
};
I.allowClick=true;
I.preventClicks=function(p){if(!I.allowClick){if(I.params.preventClicks){p.preventDefault()
}if(I.params.preventClicksPropagation&&I.animating){p.stopPropagation();
p.stopImmediatePropagation()
}}};
I.onClickNext=function(p){p.preventDefault();
if(I.isEnd&&!I.params.loop){return
}I.slideNext()
};
I.onClickPrev=function(p){p.preventDefault();
if(I.isBeginning&&!I.params.loop){return
}I.slidePrev()
};
I.onClickIndex=function(s){s.preventDefault();
var p=f(this).index()*I.params.slidesPerGroup;
if(I.params.loop){p=p+I.loopedSlides
}I.slideTo(p)
};
function U(W,p){var s=f(W.target);
if(!s.is(p)){if(typeof p==="string"){s=s.parents(p)
}else{if(p.nodeType){var V;
s.parents().each(function(X,Y){if(Y===p){V=p
}});
if(!V){return undefined
}else{return p
}}}}if(s.length===0){return undefined
}return s[0]
}I.updateClickedSlide=function(aa){var p=U(aa,"."+I.params.slideClass);
var s=false;
if(p){for(var Y=0;
Y<I.slides.length;
Y++){if(I.slides[Y]===p){s=true
}}}if(p&&s){I.clickedSlide=p;
I.clickedIndex=f(p).index()
}else{I.clickedSlide=undefined;
I.clickedIndex=undefined;
return
}if(I.params.slideToClickedSlide&&I.clickedIndex!==undefined&&I.clickedIndex!==I.activeIndex){var W=I.clickedIndex,Z,X,V=I.params.slidesPerView==="auto"?I.currentSlidesPerView():I.params.slidesPerView;
if(I.params.loop){if(I.animating){return
}Z=parseInt(f(I.clickedSlide).attr("data-swiper-slide-index"),10);
if(I.params.centeredSlides){if((W<I.loopedSlides-V/2)||(W>I.slides.length-I.loopedSlides+V/2)){I.fixLoop();
W=I.wrapper.children("."+I.params.slideClass+'[data-swiper-slide-index="'+Z+'"]:not(.'+I.params.slideDuplicateClass+")").eq(0).index();
setTimeout(function(){I.slideTo(W)
},0)
}else{I.slideTo(W)
}}else{if(W>I.slides.length-V){I.fixLoop();
W=I.wrapper.children("."+I.params.slideClass+'[data-swiper-slide-index="'+Z+'"]:not(.'+I.params.slideDuplicateClass+")").eq(0).index();
setTimeout(function(){I.slideTo(W)
},0)
}else{I.slideTo(W)
}}}else{I.slideTo(W)
}}};
var K,w,t,G,j,F,H,E,o="input, select, textarea, button, video",i=Date.now(),B,Q=[],S;
I.animating=false;
I.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};
var r,z;
I.onTouchStart=function(W){if(W.originalEvent){W=W.originalEvent
}r=W.type==="touchstart";
if(!r&&"which" in W&&W.which===3){return
}if(I.params.noSwiping&&U(W,"."+I.params.noSwipingClass)){I.allowClick=true;
return
}if(I.params.swipeHandler){if(!U(W,I.params.swipeHandler)){return
}}var s=I.touches.currentX=W.type==="touchstart"?W.targetTouches[0].pageX:W.pageX;
var p=I.touches.currentY=W.type==="touchstart"?W.targetTouches[0].pageY:W.pageY;
if(I.device.ios&&I.params.iOSEdgeSwipeDetection&&s<=I.params.iOSEdgeSwipeThreshold){return
}K=true;
w=false;
t=true;
j=undefined;
z=undefined;
I.touches.startX=s;
I.touches.startY=p;
G=Date.now();
I.allowClick=true;
I.updateContainerSize();
I.swipeDirection=undefined;
if(I.params.threshold>0){E=false
}if(W.type!=="touchstart"){var V=true;
if(f(W.target).is(o)){V=false
}if(document.activeElement&&f(document.activeElement).is(o)){document.activeElement.blur()
}if(V){W.preventDefault()
}}I.emit("onTouchStart",I,W)
};
I.onTouchMove=function(W){if(W.originalEvent){W=W.originalEvent
}if(r&&W.type==="mousemove"){return
}if(W.preventedByNestedSwiper){I.touches.startX=W.type==="touchmove"?W.targetTouches[0].pageX:W.pageX;
I.touches.startY=W.type==="touchmove"?W.targetTouches[0].pageY:W.pageY;
return
}if(I.params.onlyExternal){I.allowClick=false;
if(K){I.touches.startX=I.touches.currentX=W.type==="touchmove"?W.targetTouches[0].pageX:W.pageX;
I.touches.startY=I.touches.currentY=W.type==="touchmove"?W.targetTouches[0].pageY:W.pageY;
G=Date.now()
}return
}if(r&&I.params.touchReleaseOnEdges&&!I.params.loop){if(!I.isHorizontal()){if((I.touches.currentY<I.touches.startY&&I.translate<=I.maxTranslate())||(I.touches.currentY>I.touches.startY&&I.translate>=I.minTranslate())){return
}}else{if((I.touches.currentX<I.touches.startX&&I.translate<=I.maxTranslate())||(I.touches.currentX>I.touches.startX&&I.translate>=I.minTranslate())){return
}}}if(r&&document.activeElement){if(W.target===document.activeElement&&f(W.target).is(o)){w=true;
I.allowClick=false;
return
}}if(t){I.emit("onTouchMove",I,W)
}if(W.targetTouches&&W.targetTouches.length>1){return
}I.touches.currentX=W.type==="touchmove"?W.targetTouches[0].pageX:W.pageX;
I.touches.currentY=W.type==="touchmove"?W.targetTouches[0].pageY:W.pageY;
if(typeof j==="undefined"){var p;
if(I.isHorizontal()&&I.touches.currentY===I.touches.startY||!I.isHorizontal()&&I.touches.currentX===I.touches.startX){j=false
}else{p=Math.atan2(Math.abs(I.touches.currentY-I.touches.startY),Math.abs(I.touches.currentX-I.touches.startX))*180/Math.PI;
j=I.isHorizontal()?p>I.params.touchAngle:(90-p>I.params.touchAngle)
}}if(j){I.emit("onTouchMoveOpposite",I,W)
}if(typeof z==="undefined"){if(I.touches.currentX!==I.touches.startX||I.touches.currentY!==I.touches.startY){z=true
}}if(!K){return
}if(j){K=false;
return
}if(!z){return
}I.allowClick=false;
I.emit("onSliderMove",I,W);
W.preventDefault();
if(I.params.touchMoveStopPropagation&&!I.params.nested){W.stopPropagation()
}if(!w){if(h.loop){I.fixLoop()
}H=I.getWrapperTranslate();
I.setWrapperTransition(0);
if(I.animating){I.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd")
}if(I.params.autoplay&&I.autoplaying){if(I.params.autoplayDisableOnInteraction){I.stopAutoplay()
}else{I.pauseAutoplay()
}}S=false;
if(I.params.grabCursor&&(I.params.allowSwipeToNext===true||I.params.allowSwipeToPrev===true)){I.setGrabCursor(true)
}}w=true;
var V=I.touches.diff=I.isHorizontal()?I.touches.currentX-I.touches.startX:I.touches.currentY-I.touches.startY;
V=V*I.params.touchRatio;
if(I.rtl){V=-V
}I.swipeDirection=V>0?"prev":"next";
F=V+H;
var s=true;
if((V>0&&F>I.minTranslate())){s=false;
if(I.params.resistance){F=I.minTranslate()-1+Math.pow(-I.minTranslate()+H+V,I.params.resistanceRatio)
}}else{if(V<0&&F<I.maxTranslate()){s=false;
if(I.params.resistance){F=I.maxTranslate()+1-Math.pow(I.maxTranslate()-H-V,I.params.resistanceRatio)
}}}if(s){W.preventedByNestedSwiper=true
}if(!I.params.allowSwipeToNext&&I.swipeDirection==="next"&&F<H){F=H
}if(!I.params.allowSwipeToPrev&&I.swipeDirection==="prev"&&F>H){F=H
}if(I.params.threshold>0){if(Math.abs(V)>I.params.threshold||E){if(!E){E=true;
I.touches.startX=I.touches.currentX;
I.touches.startY=I.touches.currentY;
F=H;
I.touches.diff=I.isHorizontal()?I.touches.currentX-I.touches.startX:I.touches.currentY-I.touches.startY;
return
}}else{F=H;
return
}}if(!I.params.followFinger){return
}if(I.params.freeMode||I.params.watchSlidesProgress){I.updateActiveIndex()
}if(I.params.freeMode){if(Q.length===0){Q.push({position:I.touches[I.isHorizontal()?"startX":"startY"],time:G})
}Q.push({position:I.touches[I.isHorizontal()?"currentX":"currentY"],time:(new window.Date()).getTime()})
}I.updateProgress(F);
I.setWrapperTranslate(F)
};
I.onTouchEnd=function(aj){if(aj.originalEvent){aj=aj.originalEvent
}if(t){I.emit("onTouchEnd",I,aj)
}t=false;
if(!K){return
}if(I.params.grabCursor&&w&&K&&(I.params.allowSwipeToNext===true||I.params.allowSwipeToPrev===true)){I.setGrabCursor(false)
}var ak=Date.now();
var ag=ak-G;
if(I.allowClick){I.updateClickedSlide(aj);
I.emit("onTap",I,aj);
if(ag<300&&(ak-i)>300){if(B){clearTimeout(B)
}B=setTimeout(function(){if(!I){return
}if(I.params.paginationHide&&I.paginationContainer.length>0&&!f(aj.target).hasClass(I.params.bulletClass)){I.paginationContainer.toggleClass(I.params.paginationHiddenClass)
}I.emit("onClick",I,aj)
},300)
}if(ag<300&&(ak-i)<300){if(B){clearTimeout(B)
}I.emit("onDoubleTap",I,aj)
}}i=Date.now();
setTimeout(function(){if(I){I.allowClick=true
}},0);
if(!K||!w||!I.swipeDirection||I.touches.diff===0||F===H){K=w=false;
return
}K=w=false;
var am;
if(I.params.followFinger){am=I.rtl?I.translate:-I.translate
}else{am=-F
}if(I.params.freeMode){if(am<-I.minTranslate()){I.slideTo(I.activeIndex);
return
}else{if(am>-I.maxTranslate()){if(I.slides.length<I.snapGrid.length){I.slideTo(I.snapGrid.length-1)
}else{I.slideTo(I.slides.length-1)
}return
}}if(I.params.freeModeMomentum){if(Q.length>1){var ae=Q.pop(),al=Q.pop();
var Z=ae.position-al.position;
var aa=ae.time-al.time;
I.velocity=Z/aa;
I.velocity=I.velocity/2;
if(Math.abs(I.velocity)<I.params.freeModeMinimumVelocity){I.velocity=0
}if(aa>150||(new window.Date().getTime()-ae.time)>300){I.velocity=0
}}else{I.velocity=0
}I.velocity=I.velocity*I.params.freeModeMomentumVelocityRatio;
Q.length=0;
var ad=1000*I.params.freeModeMomentumRatio;
var af=I.velocity*ad;
var Y=I.translate+af;
if(I.rtl){Y=-Y
}var p=false;
var X;
var V=Math.abs(I.velocity)*20*I.params.freeModeMomentumBounceRatio;
if(Y<I.maxTranslate()){if(I.params.freeModeMomentumBounce){if(Y+I.maxTranslate()<-V){Y=I.maxTranslate()-V
}X=I.maxTranslate();
p=true;
S=true
}else{Y=I.maxTranslate()
}}else{if(Y>I.minTranslate()){if(I.params.freeModeMomentumBounce){if(Y-I.minTranslate()>V){Y=I.minTranslate()+V
}X=I.minTranslate();
p=true;
S=true
}else{Y=I.minTranslate()
}}else{if(I.params.freeModeSticky){var ah=0,W;
for(ah=0;
ah<I.snapGrid.length;
ah+=1){if(I.snapGrid[ah]>-Y){W=ah;
break
}}if(Math.abs(I.snapGrid[W]-Y)<Math.abs(I.snapGrid[W-1]-Y)||I.swipeDirection==="next"){Y=I.snapGrid[W]
}else{Y=I.snapGrid[W-1]
}if(!I.rtl){Y=-Y
}}}}if(I.velocity!==0){if(I.rtl){ad=Math.abs((-Y-I.translate)/I.velocity)
}else{ad=Math.abs((Y-I.translate)/I.velocity)
}}else{if(I.params.freeModeSticky){I.slideReset();
return
}}if(I.params.freeModeMomentumBounce&&p){I.updateProgress(X);
I.setWrapperTransition(ad);
I.setWrapperTranslate(Y);
I.onTransitionStart();
I.animating=true;
I.wrapper.transitionEnd(function(){if(!I||!S){return
}I.emit("onMomentumBounce",I);
I.setWrapperTransition(I.params.speed);
I.setWrapperTranslate(X);
I.wrapper.transitionEnd(function(){if(!I){return
}I.onTransitionEnd()
})
})
}else{if(I.velocity){I.updateProgress(Y);
I.setWrapperTransition(ad);
I.setWrapperTranslate(Y);
I.onTransitionStart();
if(!I.animating){I.animating=true;
I.wrapper.transitionEnd(function(){if(!I){return
}I.onTransitionEnd()
})
}}else{I.updateProgress(Y)
}}I.updateActiveIndex()
}if(!I.params.freeModeMomentum||ag>=I.params.longSwipesMs){I.updateProgress();
I.updateActiveIndex()
}return
}var ai,ac=0,s=I.slidesSizesGrid[0];
for(ai=0;
ai<I.slidesGrid.length;
ai+=I.params.slidesPerGroup){if(typeof I.slidesGrid[ai+I.params.slidesPerGroup]!=="undefined"){if(am>=I.slidesGrid[ai]&&am<I.slidesGrid[ai+I.params.slidesPerGroup]){ac=ai;
s=I.slidesGrid[ai+I.params.slidesPerGroup]-I.slidesGrid[ai]
}}else{if(am>=I.slidesGrid[ai]){ac=ai;
s=I.slidesGrid[I.slidesGrid.length-1]-I.slidesGrid[I.slidesGrid.length-2]
}}}var ab=(am-I.slidesGrid[ac])/s;
if(ag>I.params.longSwipesMs){if(!I.params.longSwipes){I.slideTo(I.activeIndex);
return
}if(I.swipeDirection==="next"){if(ab>=I.params.longSwipesRatio){I.slideTo(ac+I.params.slidesPerGroup)
}else{I.slideTo(ac)
}}if(I.swipeDirection==="prev"){if(ab>(1-I.params.longSwipesRatio)){I.slideTo(ac+I.params.slidesPerGroup)
}else{I.slideTo(ac)
}}}else{if(!I.params.shortSwipes){I.slideTo(I.activeIndex);
return
}if(I.swipeDirection==="next"){I.slideTo(ac+I.params.slidesPerGroup)
}if(I.swipeDirection==="prev"){I.slideTo(ac)
}}};
I._slideTo=function(s,p){return I.slideTo(s,p,true,true)
};
I.slideTo=function(W,V,Y,p){if(typeof Y==="undefined"){Y=true
}if(typeof W==="undefined"){W=0
}if(W<0){W=0
}I.snapIndex=Math.floor(W/I.params.slidesPerGroup);
if(I.snapIndex>=I.snapGrid.length){I.snapIndex=I.snapGrid.length-1
}var X=-I.snapGrid[I.snapIndex];
if(I.params.autoplay&&I.autoplaying){if(p||!I.params.autoplayDisableOnInteraction){I.pauseAutoplay(V)
}else{I.stopAutoplay()
}}I.updateProgress(X);
if(I.params.normalizeSlideIndex){for(var s=0;
s<I.slidesGrid.length;
s++){if(-Math.floor(X*100)>=Math.floor(I.slidesGrid[s]*100)){W=s
}}}if(!I.params.allowSwipeToNext&&X<I.translate&&X<I.minTranslate()){return false
}if(!I.params.allowSwipeToPrev&&X>I.translate&&X>I.maxTranslate()){if((I.activeIndex||0)!==W){return false
}}if(typeof V==="undefined"){V=I.params.speed
}I.previousIndex=I.activeIndex||0;
I.activeIndex=W;
I.updateRealIndex();
if((I.rtl&&-X===I.translate)||(!I.rtl&&X===I.translate)){if(I.params.autoHeight){I.updateAutoHeight()
}I.updateClasses();
if(I.params.effect!=="slide"){I.setWrapperTranslate(X)
}return false
}I.updateClasses();
I.onTransitionStart(Y);
if(V===0||I.browser.lteIE9){I.setWrapperTranslate(X);
I.setWrapperTransition(0);
I.onTransitionEnd(Y)
}else{I.setWrapperTranslate(X);
I.setWrapperTransition(V);
if(!I.animating){I.animating=true;
I.wrapper.transitionEnd(function(){if(!I){return
}I.onTransitionEnd(Y)
})
}}return true
};
I.onTransitionStart=function(p){if(typeof p==="undefined"){p=true
}if(I.params.autoHeight){I.updateAutoHeight()
}if(I.lazy){I.lazy.onTransitionStart()
}if(p){I.emit("onTransitionStart",I);
if(I.activeIndex!==I.previousIndex){I.emit("onSlideChangeStart",I);
if(I.activeIndex>I.previousIndex){I.emit("onSlideNextStart",I)
}else{I.emit("onSlidePrevStart",I)
}}}};
I.onTransitionEnd=function(p){I.animating=false;
I.setWrapperTransition(0);
if(typeof p==="undefined"){p=true
}if(I.lazy){I.lazy.onTransitionEnd()
}if(p){I.emit("onTransitionEnd",I);
if(I.activeIndex!==I.previousIndex){I.emit("onSlideChangeEnd",I);
if(I.activeIndex>I.previousIndex){I.emit("onSlideNextEnd",I)
}else{I.emit("onSlidePrevEnd",I)
}}}if(I.params.history&&I.history){I.history.setHistory(I.params.history,I.activeIndex)
}if(I.params.hashnav&&I.hashnav){I.hashnav.setHash()
}};
I.slideNext=function(V,s,p){if(I.params.loop){if(I.animating){return false
}I.fixLoop();
var W=I.container[0].clientLeft;
return I.slideTo(I.activeIndex+I.params.slidesPerGroup,s,V,p)
}else{return I.slideTo(I.activeIndex+I.params.slidesPerGroup,s,V,p)
}};
I._slideNext=function(p){return I.slideNext(true,p,true)
};
I.slidePrev=function(V,s,p){if(I.params.loop){if(I.animating){return false
}I.fixLoop();
var W=I.container[0].clientLeft;
return I.slideTo(I.activeIndex-1,s,V,p)
}else{return I.slideTo(I.activeIndex-1,s,V,p)
}};
I._slidePrev=function(p){return I.slidePrev(true,p,true)
};
I.slideReset=function(V,s,p){return I.slideTo(I.activeIndex,s,V)
};
I.disableTouchControl=function(){I.params.onlyExternal=true;
return true
};
I.enableTouchControl=function(){I.params.onlyExternal=false;
return true
};
I.setWrapperTransition=function(p,s){I.wrapper.transition(p);
if(I.params.effect!=="slide"&&I.effects[I.params.effect]){I.effects[I.params.effect].setTransition(p)
}if(I.params.parallax&&I.parallax){I.parallax.setTransition(p)
}if(I.params.scrollbar&&I.scrollbar){I.scrollbar.setTransition(p)
}if(I.params.control&&I.controller){I.controller.setTransition(p,s)
}I.emit("onSetTransition",I,p)
};
I.setWrapperTranslate=function(Y,V,aa){var p=0,Z=0,X=0;
if(I.isHorizontal()){p=I.rtl?-Y:Y
}else{Z=Y
}if(I.params.roundLengths){p=N(p);
Z=N(Z)
}if(!I.params.virtualTranslate){if(I.support.transforms3d){I.wrapper.transform("translate3d("+p+"px, "+Z+"px, "+X+"px)")
}else{I.wrapper.transform("translate("+p+"px, "+Z+"px)")
}}I.translate=I.isHorizontal()?p:Z;
var s;
var W=I.maxTranslate()-I.minTranslate();
if(W===0){s=0
}else{s=(Y-I.minTranslate())/(W)
}if(s!==I.progress){I.updateProgress(Y)
}if(V){I.updateActiveIndex()
}if(I.params.effect!=="slide"&&I.effects[I.params.effect]){I.effects[I.params.effect].setTranslate(I.translate)
}if(I.params.parallax&&I.parallax){I.parallax.setTranslate(I.translate)
}if(I.params.scrollbar&&I.scrollbar){I.scrollbar.setTranslate(I.translate)
}if(I.params.control&&I.controller){I.controller.setTranslate(I.translate,aa)
}I.emit("onSetTranslate",I,I.translate)
};
I.getTranslate=function(X,W){var p,V,Y,s;
if(typeof W==="undefined"){W="x"
}if(I.params.virtualTranslate){return I.rtl?-I.translate:I.translate
}Y=window.getComputedStyle(X,null);
if(window.WebKitCSSMatrix){V=Y.transform||Y.webkitTransform;
if(V.split(",").length>6){V=V.split(", ").map(function(Z){return Z.replace(",",".")
}).join(", ")
}s=new window.WebKitCSSMatrix(V==="none"?"":V)
}else{s=Y.MozTransform||Y.OTransform||Y.MsTransform||Y.msTransform||Y.transform||Y.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,");
p=s.toString().split(",")
}if(W==="x"){if(window.WebKitCSSMatrix){V=s.m41
}else{if(p.length===16){V=parseFloat(p[12])
}else{V=parseFloat(p[4])
}}}if(W==="y"){if(window.WebKitCSSMatrix){V=s.m42
}else{if(p.length===16){V=parseFloat(p[13])
}else{V=parseFloat(p[5])
}}}if(I.rtl&&V){V=-V
}return V||0
};
I.getWrapperTranslate=function(p){if(typeof p==="undefined"){p=I.isHorizontal()?"x":"y"
}return I.getTranslate(I.wrapper[0],p)
};
I.observers=[];
function T(W,V){V=V||{};
var s=window.MutationObserver||window.WebkitMutationObserver;
var p=new s(function(X){X.forEach(function(Y){I.onResize(true);
I.emit("onObserverUpdate",I,Y)
})
});
p.observe(W,{attributes:typeof V.attributes==="undefined"?true:V.attributes,childList:typeof V.childList==="undefined"?true:V.childList,characterData:typeof V.characterData==="undefined"?true:V.characterData});
I.observers.push(p)
}I.initObservers=function(){if(I.params.observeParents){var s=I.container.parents();
for(var p=0;
p<s.length;
p++){T(s[p])
}}T(I.container[0],{childList:false});
T(I.wrapper[0],{attributes:false})
};
I.disconnectObservers=function(){for(var p=0;
p<I.observers.length;
p++){I.observers[p].disconnect()
}I.observers=[]
};
I.createLoop=function(){I.wrapper.children("."+I.params.slideClass+"."+I.params.slideDuplicateClass).remove();
var W=I.wrapper.children("."+I.params.slideClass);
if(I.params.slidesPerView==="auto"&&!I.params.loopedSlides){I.params.loopedSlides=W.length
}I.loopedSlides=parseInt(I.params.loopedSlides||I.params.slidesPerView,10);
I.loopedSlides=I.loopedSlides+I.params.loopAdditionalSlides;
if(I.loopedSlides>W.length){I.loopedSlides=W.length
}var p=[],V=[],s;
W.each(function(Y,Z){var X=f(this);
if(Y<I.loopedSlides){V.push(Z)
}if(Y<W.length&&Y>=W.length-I.loopedSlides){p.push(Z)
}X.attr("data-swiper-slide-index",Y)
});
for(s=0;
s<V.length;
s++){I.wrapper.append(f(V[s].cloneNode(true)).addClass(I.params.slideDuplicateClass))
}for(s=p.length-1;
s>=0;
s--){I.wrapper.prepend(f(p[s].cloneNode(true)).addClass(I.params.slideDuplicateClass))
}};
I.destroyLoop=function(){I.wrapper.children("."+I.params.slideClass+"."+I.params.slideDuplicateClass).remove();
I.slides.removeAttr("data-swiper-slide-index")
};
I.reLoop=function(p){var s=I.activeIndex-I.loopedSlides;
I.destroyLoop();
I.createLoop();
I.updateSlidesSize();
if(p){I.slideTo(s+I.loopedSlides,0,false)
}};
I.fixLoop=function(){var p;
if(I.activeIndex<I.loopedSlides){p=I.slides.length-I.loopedSlides*3+I.activeIndex;
p=p+I.loopedSlides;
I.slideTo(p,0,false,true)
}else{if((I.params.slidesPerView==="auto"&&I.activeIndex>=I.loopedSlides*2)||(I.activeIndex>I.slides.length-I.params.slidesPerView*2)){p=-I.slides.length+I.activeIndex+I.loopedSlides;
p=p+I.loopedSlides;
I.slideTo(p,0,false,true)
}}};
I.appendSlide=function(s){if(I.params.loop){I.destroyLoop()
}if(typeof s==="object"&&s.length){for(var p=0;
p<s.length;
p++){if(s[p]){I.wrapper.append(s[p])
}}}else{I.wrapper.append(s)
}if(I.params.loop){I.createLoop()
}if(!(I.params.observer&&I.support.observer)){I.update(true)
}};
I.prependSlide=function(s){if(I.params.loop){I.destroyLoop()
}var V=I.activeIndex+1;
if(typeof s==="object"&&s.length){for(var p=0;
p<s.length;
p++){if(s[p]){I.wrapper.prepend(s[p])
}}V=I.activeIndex+s.length
}else{I.wrapper.prepend(s)
}if(I.params.loop){I.createLoop()
}if(!(I.params.observer&&I.support.observer)){I.update(true)
}I.slideTo(V,0,false)
};
I.removeSlide=function(V){if(I.params.loop){I.destroyLoop();
I.slides=I.wrapper.children("."+I.params.slideClass)
}var W=I.activeIndex,p;
if(typeof V==="object"&&V.length){for(var s=0;
s<V.length;
s++){p=V[s];
if(I.slides[p]){I.slides.eq(p).remove()
}if(p<W){W--
}}W=Math.max(W,0)
}else{p=V;
if(I.slides[p]){I.slides.eq(p).remove()
}if(p<W){W--
}W=Math.max(W,0)
}if(I.params.loop){I.createLoop()
}if(!(I.params.observer&&I.support.observer)){I.update(true)
}if(I.params.loop){I.slideTo(W+I.loopedSlides,0,false)
}else{I.slideTo(W,0,false)
}};
I.removeAllSlides=function(){var s=[];
for(var p=0;
p<I.slides.length;
p++){s.push(p)
}I.removeSlide(s)
};
I.effects={fade:{setTranslate:function(){for(var W=0;
W<I.slides.length;
W++){var s=I.slides.eq(W);
var Y=s[0].swiperSlideOffset;
var V=-Y;
if(!I.params.virtualTranslate){V=V-I.translate
}var p=0;
if(!I.isHorizontal()){p=V;
V=0
}var X=I.params.fade.crossFade?Math.max(1-Math.abs(s[0].progress),0):1+Math.min(Math.max(s[0].progress,-1),0);
s.css({opacity:X}).transform("translate3d("+V+"px, "+p+"px, 0px)")
}},setTransition:function(s){I.slides.transition(s);
if(I.params.virtualTranslate&&s!==0){var p=false;
I.slides.transitionEnd(function(){if(p){return
}if(!I){return
}p=true;
I.animating=false;
var W=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"];
for(var V=0;
V<W.length;
V++){I.wrapper.trigger(W[V])
}})
}}},flip:{setTranslate:function(){for(var Z=0;
Z<I.slides.length;
Z++){var ab=I.slides.eq(Z);
var p=ab[0].progress;
if(I.params.flip.limitRotation){p=Math.max(Math.min(ab[0].progress,1),-1)
}var X=ab[0].swiperSlideOffset;
var Y=-180*p,ac=Y,ad=0,aa=-X,W=0;
if(!I.isHorizontal()){W=aa;
aa=0;
ad=-ac;
ac=0
}else{if(I.rtl){ac=-ac
}}ab[0].style.zIndex=-Math.abs(Math.round(p))+I.slides.length;
if(I.params.flip.slideShadows){var V=I.isHorizontal()?ab.find(".swiper-slide-shadow-left"):ab.find(".swiper-slide-shadow-top");
var s=I.isHorizontal()?ab.find(".swiper-slide-shadow-right"):ab.find(".swiper-slide-shadow-bottom");
if(V.length===0){V=f('<div class="swiper-slide-shadow-'+(I.isHorizontal()?"left":"top")+'"></div>');
ab.append(V)
}if(s.length===0){s=f('<div class="swiper-slide-shadow-'+(I.isHorizontal()?"right":"bottom")+'"></div>');
ab.append(s)
}if(V.length){V[0].style.opacity=Math.max(-p,0)
}if(s.length){s[0].style.opacity=Math.max(p,0)
}}ab.transform("translate3d("+aa+"px, "+W+"px, 0px) rotateX("+ad+"deg) rotateY("+ac+"deg)")
}},setTransition:function(s){I.slides.transition(s).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(s);
if(I.params.virtualTranslate&&s!==0){var p=false;
I.slides.eq(I.activeIndex).transitionEnd(function(){if(p){return
}if(!I){return
}if(!f(this).hasClass(I.params.slideActiveClass)){return
}p=true;
I.animating=false;
var W=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"];
for(var V=0;
V<W.length;
V++){I.wrapper.trigger(W[V])
}})
}}},cube:{setTranslate:function(){var X=0,aa;
if(I.params.cube.shadow){if(I.isHorizontal()){aa=I.wrapper.find(".swiper-cube-shadow");
if(aa.length===0){aa=f('<div class="swiper-cube-shadow"></div>');
I.wrapper.append(aa)
}aa.css({height:I.width+"px"})
}else{aa=I.container.find(".swiper-cube-shadow");
if(aa.length===0){aa=f('<div class="swiper-cube-shadow"></div>');
I.container.append(aa)
}}}for(var ah=0;
ah<I.slides.length;
ah++){var p=I.slides.eq(ah);
var Z=ah*90;
var aj=Math.floor(Z/360);
if(I.rtl){Z=-Z;
aj=Math.floor(-Z/360)
}var W=Math.max(Math.min(p[0].progress,1),-1);
var al=0,ak=0,ai=0;
if(ah%4===0){al=-aj*4*I.size;
ai=0
}else{if((ah-1)%4===0){al=0;
ai=-aj*4*I.size
}else{if((ah-2)%4===0){al=I.size+aj*4*I.size;
ai=I.size
}else{if((ah-3)%4===0){al=-I.size;
ai=3*I.size+I.size*4*aj
}}}}if(I.rtl){al=-al
}if(!I.isHorizontal()){ak=al;
al=0
}var ab="rotateX("+(I.isHorizontal()?0:-Z)+"deg) rotateY("+(I.isHorizontal()?Z:0)+"deg) translate3d("+al+"px, "+ak+"px, "+ai+"px)";
if(W<=1&&W>-1){X=ah*90+W*90;
if(I.rtl){X=-ah*90-W*90
}}p.transform(ab);
if(I.params.cube.slideShadows){var ae=I.isHorizontal()?p.find(".swiper-slide-shadow-left"):p.find(".swiper-slide-shadow-top");
var s=I.isHorizontal()?p.find(".swiper-slide-shadow-right"):p.find(".swiper-slide-shadow-bottom");
if(ae.length===0){ae=f('<div class="swiper-slide-shadow-'+(I.isHorizontal()?"left":"top")+'"></div>');
p.append(ae)
}if(s.length===0){s=f('<div class="swiper-slide-shadow-'+(I.isHorizontal()?"right":"bottom")+'"></div>');
p.append(s)
}if(ae.length){ae[0].style.opacity=Math.max(-W,0)
}if(s.length){s[0].style.opacity=Math.max(W,0)
}}}I.wrapper.css({"-webkit-transform-origin":"50% 50% -"+(I.size/2)+"px","-moz-transform-origin":"50% 50% -"+(I.size/2)+"px","-ms-transform-origin":"50% 50% -"+(I.size/2)+"px","transform-origin":"50% 50% -"+(I.size/2)+"px"});
if(I.params.cube.shadow){if(I.isHorizontal()){aa.transform("translate3d(0px, "+(I.width/2+I.params.cube.shadowOffset)+"px, "+(-I.width/2)+"px) rotateX(90deg) rotateZ(0deg) scale("+(I.params.cube.shadowScale)+")")
}else{var ad=Math.abs(X)-Math.floor(Math.abs(X)/90)*90;
var Y=1.5-(Math.sin(ad*2*Math.PI/360)/2+Math.cos(ad*2*Math.PI/360)/2);
var ag=I.params.cube.shadowScale,af=I.params.cube.shadowScale/Y,V=I.params.cube.shadowOffset;
aa.transform("scale3d("+ag+", 1, "+af+") translate3d(0px, "+(I.height/2+V)+"px, "+(-I.height/2/af)+"px) rotateX(-90deg)")
}}var ac=(I.isSafari||I.isUiWebView)?(-I.size/2):0;
I.wrapper.transform("translate3d(0px,0,"+ac+"px) rotateX("+(I.isHorizontal()?0:X)+"deg) rotateY("+(I.isHorizontal()?-X:0)+"deg)")
},setTransition:function(p){I.slides.transition(p).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(p);
if(I.params.cube.shadow&&!I.isHorizontal()){I.container.find(".swiper-cube-shadow").transition(p)
}}},coverflow:{setTranslate:function(){var ae=I.translate;
var ai=I.isHorizontal()?-ae+I.width/2:-ae+I.height/2;
var ah=I.isHorizontal()?I.params.coverflow.rotate:-I.params.coverflow.rotate;
var ad=I.params.coverflow.depth;
for(var ag=0,X=I.slides.length;
ag<X;
ag++){var p=I.slides.eq(ag);
var Y=I.slidesSizesGrid[ag];
var Z=p[0].swiperSlideOffset;
var aa=(ai-Z-Y/2)/Y*I.params.coverflow.modifier;
var ab=I.isHorizontal()?ah*aa:0;
var ac=I.isHorizontal()?0:ah*aa;
var aj=-ad*Math.abs(aa);
var ak=I.isHorizontal()?0:I.params.coverflow.stretch*(aa);
var al=I.isHorizontal()?I.params.coverflow.stretch*(aa):0;
if(Math.abs(al)<0.001){al=0
}if(Math.abs(ak)<0.001){ak=0
}if(Math.abs(aj)<0.001){aj=0
}if(Math.abs(ab)<0.001){ab=0
}if(Math.abs(ac)<0.001){ac=0
}var W="translate3d("+al+"px,"+ak+"px,"+aj+"px)  rotateX("+ac+"deg) rotateY("+ab+"deg)";
p.transform(W);
p[0].style.zIndex=-Math.abs(Math.round(aa))+1;
if(I.params.coverflow.slideShadows){var af=I.isHorizontal()?p.find(".swiper-slide-shadow-left"):p.find(".swiper-slide-shadow-top");
var s=I.isHorizontal()?p.find(".swiper-slide-shadow-right"):p.find(".swiper-slide-shadow-bottom");
if(af.length===0){af=f('<div class="swiper-slide-shadow-'+(I.isHorizontal()?"left":"top")+'"></div>');
p.append(af)
}if(s.length===0){s=f('<div class="swiper-slide-shadow-'+(I.isHorizontal()?"right":"bottom")+'"></div>');
p.append(s)
}if(af.length){af[0].style.opacity=aa>0?aa:0
}if(s.length){s[0].style.opacity=(-aa)>0?-aa:0
}}}if(I.browser.ie){var V=I.wrapper[0].style;
V.perspectiveOrigin=ai+"px 50%"
}},setTransition:function(p){I.slides.transition(p).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(p)
}}};
I.lazy={initialImageLoaded:false,loadImageInSlide:function(V,W){if(typeof V==="undefined"){return
}if(typeof W==="undefined"){W=true
}if(I.slides.length===0){return
}var p=I.slides.eq(V);
var s=p.find("."+I.params.lazyLoadingClass+":not(."+I.params.lazyStatusLoadedClass+"):not(."+I.params.lazyStatusLoadingClass+")");
if(p.hasClass(I.params.lazyLoadingClass)&&!p.hasClass(I.params.lazyStatusLoadedClass)&&!p.hasClass(I.params.lazyStatusLoadingClass)){s=s.add(p[0])
}if(s.length===0){return
}s.each(function(){var X=f(this);
X.addClass(I.params.lazyStatusLoadingClass);
var Y=X.attr("data-background");
var ab=X.attr("data-src"),aa=X.attr("data-srcset"),Z=X.attr("data-sizes");
I.loadImage(X[0],(ab||Y),aa,Z,false,function(){if(typeof I==="undefined"||I===null||!I){return
}if(Y){X.css("background-image",'url("'+Y+'")');
X.removeAttr("data-background")
}else{if(aa){X.attr("srcset",aa);
X.removeAttr("data-srcset")
}if(Z){X.attr("sizes",Z);
X.removeAttr("data-sizes")
}if(ab){X.attr("src",ab);
X.removeAttr("data-src")
}}X.addClass(I.params.lazyStatusLoadedClass).removeClass(I.params.lazyStatusLoadingClass);
p.find("."+I.params.lazyPreloaderClass+", ."+I.params.preloaderClass).remove();
if(I.params.loop&&W){var ac=p.attr("data-swiper-slide-index");
if(p.hasClass(I.params.slideDuplicateClass)){var ad=I.wrapper.children('[data-swiper-slide-index="'+ac+'"]:not(.'+I.params.slideDuplicateClass+")");
I.lazy.loadImageInSlide(ad.index(),false)
}else{var ae=I.wrapper.children("."+I.params.slideDuplicateClass+'[data-swiper-slide-index="'+ac+'"]');
I.lazy.loadImageInSlide(ae.index(),false)
}}I.emit("onLazyImageReady",I,p[0],X[0])
});
I.emit("onLazyImageLoad",I,p[0],X[0])
})
},load:function(){var Y;
var V=I.params.slidesPerView;
if(V==="auto"){V=0
}if(!I.lazy.initialImageLoaded){I.lazy.initialImageLoaded=true
}if(I.params.watchSlidesVisibility){I.wrapper.children("."+I.params.slideVisibleClass).each(function(){I.lazy.loadImageInSlide(f(this).index())
})
}else{if(V>1){for(Y=I.activeIndex;
Y<I.activeIndex+V;
Y++){if(I.slides[Y]){I.lazy.loadImageInSlide(Y)
}}}else{I.lazy.loadImageInSlide(I.activeIndex)
}}if(I.params.lazyLoadingInPrevNext){if(V>1||(I.params.lazyLoadingInPrevNextAmount&&I.params.lazyLoadingInPrevNextAmount>1)){var X=I.params.lazyLoadingInPrevNextAmount;
var aa=V;
var W=Math.min(I.activeIndex+aa+Math.max(X,aa),I.slides.length);
var s=Math.max(I.activeIndex-Math.max(aa,X),0);
for(Y=I.activeIndex+V;
Y<W;
Y++){if(I.slides[Y]){I.lazy.loadImageInSlide(Y)
}}for(Y=s;
Y<I.activeIndex;
Y++){if(I.slides[Y]){I.lazy.loadImageInSlide(Y)
}}}else{var Z=I.wrapper.children("."+I.params.slideNextClass);
if(Z.length>0){I.lazy.loadImageInSlide(Z.index())
}var p=I.wrapper.children("."+I.params.slidePrevClass);
if(p.length>0){I.lazy.loadImageInSlide(p.index())
}}}},onTransitionStart:function(){if(I.params.lazyLoading){if(I.params.lazyLoadingOnTransitionStart||(!I.params.lazyLoadingOnTransitionStart&&!I.lazy.initialImageLoaded)){I.lazy.load()
}}},onTransitionEnd:function(){if(I.params.lazyLoading&&!I.params.lazyLoadingOnTransitionStart){I.lazy.load()
}}};
I.scrollbar={isTouched:false,setDragPosition:function(X){var Z=I.scrollbar;
var ab=0,aa=0;
var p;
var V=I.isHorizontal()?((X.type==="touchstart"||X.type==="touchmove")?X.targetTouches[0].pageX:X.pageX||X.clientX):((X.type==="touchstart"||X.type==="touchmove")?X.targetTouches[0].pageY:X.pageY||X.clientY);
var W=(V)-Z.track.offset()[I.isHorizontal()?"left":"top"]-Z.dragSize/2;
var s=-I.minTranslate()*Z.moveDivider;
var Y=-I.maxTranslate()*Z.moveDivider;
if(W<s){W=s
}else{if(W>Y){W=Y
}}W=-W/Z.moveDivider;
I.updateProgress(W);
I.setWrapperTranslate(W,true)
},dragStart:function(p){var s=I.scrollbar;
s.isTouched=true;
p.preventDefault();
p.stopPropagation();
s.setDragPosition(p);
clearTimeout(s.dragTimeout);
s.track.transition(0);
if(I.params.scrollbarHide){s.track.css("opacity",1)
}I.wrapper.transition(100);
s.drag.transition(100);
I.emit("onScrollbarDragStart",I)
},dragMove:function(p){var s=I.scrollbar;
if(!s.isTouched){return
}if(p.preventDefault){p.preventDefault()
}else{p.returnValue=false
}s.setDragPosition(p);
I.wrapper.transition(0);
s.track.transition(0);
s.drag.transition(0);
I.emit("onScrollbarDragMove",I)
},dragEnd:function(p){var s=I.scrollbar;
if(!s.isTouched){return
}s.isTouched=false;
if(I.params.scrollbarHide){clearTimeout(s.dragTimeout);
s.dragTimeout=setTimeout(function(){s.track.css("opacity",0);
s.track.transition(400)
},1000)
}I.emit("onScrollbarDragEnd",I);
if(I.params.scrollbarSnapOnRelease){I.slideReset()
}},draggableEvents:(function(){if((I.params.simulateTouch===false&&!I.support.touch)){return I.touchEventsDesktop
}else{return I.touchEvents
}})(),enableDraggable:function(){var s=I.scrollbar;
var p=I.support.touch?s.track:document;
f(s.track).on(s.draggableEvents.start,s.dragStart);
f(p).on(s.draggableEvents.move,s.dragMove);
f(p).on(s.draggableEvents.end,s.dragEnd)
},disableDraggable:function(){var s=I.scrollbar;
var p=I.support.touch?s.track:document;
f(s.track).off(s.draggableEvents.start,s.dragStart);
f(p).off(s.draggableEvents.move,s.dragMove);
f(p).off(s.draggableEvents.end,s.dragEnd)
},set:function(){if(!I.params.scrollbar){return
}var p=I.scrollbar;
p.track=f(I.params.scrollbar);
if(I.params.uniqueNavElements&&typeof I.params.scrollbar==="string"&&p.track.length>1&&I.container.find(I.params.scrollbar).length===1){p.track=I.container.find(I.params.scrollbar)
}p.drag=p.track.find(".swiper-scrollbar-drag");
if(p.drag.length===0){p.drag=f('<div class="swiper-scrollbar-drag"></div>');
p.track.append(p.drag)
}p.drag[0].style.width="";
p.drag[0].style.height="";
p.trackSize=I.isHorizontal()?p.track[0].offsetWidth:p.track[0].offsetHeight;
p.divider=I.size/I.virtualSize;
p.moveDivider=p.divider*(p.trackSize/I.size);
p.dragSize=p.trackSize*p.divider;
if(I.isHorizontal()){p.drag[0].style.width=p.dragSize+"px"
}else{p.drag[0].style.height=p.dragSize+"px"
}if(p.divider>=1){p.track[0].style.display="none"
}else{p.track[0].style.display=""
}if(I.params.scrollbarHide){p.track[0].style.opacity=0
}},setTranslate:function(){if(!I.params.scrollbar){return
}var V;
var X=I.scrollbar;
var W=I.translate||0;
var s;
var p=X.dragSize;
s=(X.trackSize-X.dragSize)*I.progress;
if(I.rtl&&I.isHorizontal()){s=-s;
if(s>0){p=X.dragSize-s;
s=0
}else{if(-s+X.dragSize>X.trackSize){p=X.trackSize+s
}}}else{if(s<0){p=X.dragSize+s;
s=0
}else{if(s+X.dragSize>X.trackSize){p=X.trackSize-s
}}}if(I.isHorizontal()){if(I.support.transforms3d){X.drag.transform("translate3d("+(s)+"px, 0, 0)")
}else{X.drag.transform("translateX("+(s)+"px)")
}X.drag[0].style.width=p+"px"
}else{if(I.support.transforms3d){X.drag.transform("translate3d(0px, "+(s)+"px, 0)")
}else{X.drag.transform("translateY("+(s)+"px)")
}X.drag[0].style.height=p+"px"
}if(I.params.scrollbarHide){clearTimeout(X.timeout);
X.track[0].style.opacity=1;
X.timeout=setTimeout(function(){X.track[0].style.opacity=0;
X.track.transition(400)
},1000)
}},setTransition:function(p){if(!I.params.scrollbar){return
}I.scrollbar.drag.transition(p)
}};
I.controller={LinearSpline:function(p,Y){var X=(function(){var aa,Z,ab;
return function(ad,ac){Z=-1;
aa=ad.length;
while(aa-Z>1){if(ad[ab=aa+Z>>1]<=ac){Z=ab
}else{aa=ab
}}return aa
}
})();
this.x=p;
this.y=Y;
this.lastIndex=p.length-1;
var W,V;
var s=this.x.length;
this.interpolate=function(Z){if(!Z){return 0
}V=X(this.x,Z);
W=V-1;
return((Z-this.x[W])*(this.y[V]-this.y[W]))/(this.x[V]-this.x[W])+this.y[W]
}
},getInterpolateFunction:function(p){if(!I.controller.spline){I.controller.spline=I.params.loop?new I.controller.LinearSpline(I.slidesGrid,p.slidesGrid):new I.controller.LinearSpline(I.snapGrid,p.snapGrid)
}},setTranslate:function(X,Z){var V=I.params.control;
var Y,p;
function W(aa){X=aa.rtl&&aa.params.direction==="horizontal"?-I.translate:I.translate;
if(I.params.controlBy==="slide"){I.controller.getInterpolateFunction(aa);
p=-I.controller.spline.interpolate(-X)
}if(!p||I.params.controlBy==="container"){Y=(aa.maxTranslate()-aa.minTranslate())/(I.maxTranslate()-I.minTranslate());
p=(X-I.minTranslate())*Y+aa.minTranslate()
}if(I.params.controlInverse){p=aa.maxTranslate()-p
}aa.updateProgress(p);
aa.setWrapperTranslate(p,false,I);
aa.updateActiveIndex()
}if(Array.isArray(V)){for(var s=0;
s<V.length;
s++){if(V[s]!==Z&&V[s] instanceof a){W(V[s])
}}}else{if(V instanceof a&&Z!==V){W(V)
}}},setTransition:function(V,X){var s=I.params.control;
var p;
function W(Y){Y.setWrapperTransition(V,I);
if(V!==0){Y.onTransitionStart();
Y.wrapper.transitionEnd(function(){if(!s){return
}if(Y.params.loop&&I.params.controlBy==="slide"){Y.fixLoop()
}Y.onTransitionEnd()
})
}}if(Array.isArray(s)){for(p=0;
p<s.length;
p++){if(s[p]!==X&&s[p] instanceof a){W(s[p])
}}}else{if(s instanceof a&&X!==s){W(s)
}}}};
I.hashnav={onHashCange:function(W,p){var V=document.location.hash.replace("#","");
var s=I.slides.eq(I.activeIndex).attr("data-hash");
if(V!==s){I.slideTo(I.wrapper.children("."+I.params.slideClass+'[data-hash="'+(V)+'"]').index())
}},attachEvents:function(s){var p=s?"off":"on";
f(window)[p]("hashchange",I.hashnav.onHashCange)
},setHash:function(){if(!I.hashnav.initialized||!I.params.hashnav){return
}if(I.params.replaceState&&window.history&&window.history.replaceState){window.history.replaceState(null,null,("#"+I.slides.eq(I.activeIndex).attr("data-hash")||""))
}else{var p=I.slides.eq(I.activeIndex);
var s=p.attr("data-hash")||p.attr("data-history");
document.location.hash=s||""
}},init:function(){if(!I.params.hashnav||I.params.history){return
}I.hashnav.initialized=true;
var Z=document.location.hash.replace("#","");
if(Z){var X=0;
for(var V=0,W=I.slides.length;
V<W;
V++){var p=I.slides.eq(V);
var Y=p.attr("data-hash")||p.attr("data-history");
if(Y===Z&&!p.hasClass(I.params.slideDuplicateClass)){var s=p.index();
I.slideTo(s,X,I.params.runCallbacksOnInit,true)
}}}if(I.params.hashnavWatchState){I.hashnav.attachEvents()
}},destroy:function(){if(I.params.hashnavWatchState){I.hashnav.attachEvents(true)
}}};
I.history={init:function(){if(!I.params.history){return
}if(!window.history||!window.history.pushState){I.params.history=false;
I.params.hashnav=true;
return
}I.history.initialized=true;
this.paths=this.getPathValues();
if(!this.paths.key&&!this.paths.value){return
}this.scrollToSlide(0,this.paths.value,I.params.runCallbacksOnInit);
if(!I.params.replaceState){window.addEventListener("popstate",this.setHistoryPopState)
}},setHistoryPopState:function(){I.history.paths=I.history.getPathValues();
I.history.scrollToSlide(I.params.speed,I.history.paths.value,false)
},getPathValues:function(){var W=window.location.pathname.slice(1).split("/");
var s=W.length;
var p=W[s-2];
var V=W[s-1];
return{key:p,value:V}
},setHistory:function(V,s){if(!I.history.initialized||!I.params.history){return
}var p=I.slides.eq(s);
var W=this.slugify(p.attr("data-history"));
if(!window.location.pathname.includes(V)){W=V+"/"+W
}if(I.params.replaceState){window.history.replaceState(null,null,W)
}else{window.history.pushState(null,null,W)
}},slugify:function(p){return p.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")
},scrollToSlide:function(Z,Y,aa){if(Y){for(var W=0,X=I.slides.length;
W<X;
W++){var p=I.slides.eq(W);
var V=this.slugify(p.attr("data-history"));
if(V===Y&&!p.hasClass(I.params.slideDuplicateClass)){var s=p.index();
I.slideTo(s,Z,aa)
}}}else{I.slideTo(0,Z,aa)
}}};
function k(Z){if(Z.originalEvent){Z=Z.originalEvent
}var X=Z.keyCode||Z.charCode;
if(!I.params.allowSwipeToNext&&(I.isHorizontal()&&X===39||!I.isHorizontal()&&X===40)){return false
}if(!I.params.allowSwipeToPrev&&(I.isHorizontal()&&X===37||!I.isHorizontal()&&X===38)){return false
}if(Z.shiftKey||Z.altKey||Z.ctrlKey||Z.metaKey){return
}if(document.activeElement&&document.activeElement.nodeName&&(document.activeElement.nodeName.toLowerCase()==="input"||document.activeElement.nodeName.toLowerCase()==="textarea")){return
}if(X===37||X===39||X===38||X===40){var aa=false;
if(I.container.parents("."+I.params.slideClass).length>0&&I.container.parents("."+I.params.slideActiveClass).length===0){return
}var ac={left:window.pageXOffset,top:window.pageYOffset};
var V=window.innerWidth;
var p=window.innerHeight;
var Y=I.container.offset();
if(I.rtl){Y.left=Y.left-I.container[0].scrollLeft
}var s=[[Y.left,Y.top],[Y.left+I.width,Y.top],[Y.left,Y.top+I.height],[Y.left+I.width,Y.top+I.height]];
for(var W=0;
W<s.length;
W++){var ab=s[W];
if(ab[0]>=ac.left&&ab[0]<=ac.left+V&&ab[1]>=ac.top&&ab[1]<=ac.top+p){aa=true
}}if(!aa){return
}}if(I.isHorizontal()){if(X===37||X===39){if(Z.preventDefault){Z.preventDefault()
}else{Z.returnValue=false
}}if((X===39&&!I.rtl)||(X===37&&I.rtl)){I.slideNext()
}if((X===37&&!I.rtl)||(X===39&&I.rtl)){I.slidePrev()
}}else{if(X===38||X===40){if(Z.preventDefault){Z.preventDefault()
}else{Z.returnValue=false
}}if(X===40){I.slideNext()
}if(X===38){I.slidePrev()
}}I.emit("onKeyPress",I,X)
}I.disableKeyboardControl=function(){I.params.keyboardControl=false;
f(document).off("keydown",k)
};
I.enableKeyboardControl=function(){I.params.keyboardControl=true;
f(document).on("keydown",k)
};
I.mousewheel={event:false,lastScrollTime:(new window.Date()).getTime()};
function u(){var p="onwheel";
var V=p in document;
if(!V){var s=document.createElement("div");
s.setAttribute(p,"return;");
V=typeof s[p]==="function"
}if(!V&&document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==true){V=document.implementation.hasFeature("Events.wheel","3.0")
}return V
}function R(Y){var s=10;
var X=40;
var W=800;
var aa=0,Z=0,V=0,p=0;
if("detail" in Y){Z=Y.detail
}if("wheelDelta" in Y){Z=-Y.wheelDelta/120
}if("wheelDeltaY" in Y){Z=-Y.wheelDeltaY/120
}if("wheelDeltaX" in Y){aa=-Y.wheelDeltaX/120
}if("axis" in Y&&Y.axis===Y.HORIZONTAL_AXIS){aa=Z;
Z=0
}V=aa*s;
p=Z*s;
if("deltaY" in Y){p=Y.deltaY
}if("deltaX" in Y){V=Y.deltaX
}if((V||p)&&Y.deltaMode){if(Y.deltaMode===1){V*=X;
p*=X
}else{V*=W;
p*=W
}}if(V&&!aa){aa=(V<1)?-1:1
}if(p&&!Z){Z=(p<1)?-1:1
}return{spinX:aa,spinY:Z,pixelX:V,pixelY:p}
}if(I.params.mousewheelControl){I.mousewheel.event=(navigator.userAgent.indexOf("firefox")>-1)?"DOMMouseScroll":u()?"wheel":"mousewheel"
}function l(X){if(X.originalEvent){X=X.originalEvent
}var Z=0;
var Y=I.rtl?-1:1;
var W=R(X);
if(I.params.mousewheelForceToAxis){if(I.isHorizontal()){if(Math.abs(W.pixelX)>Math.abs(W.pixelY)){Z=W.pixelX*Y
}else{return
}}else{if(Math.abs(W.pixelY)>Math.abs(W.pixelX)){Z=W.pixelY
}else{return
}}}else{Z=Math.abs(W.pixelX)>Math.abs(W.pixelY)?-W.pixelX*Y:-W.pixelY
}if(Z===0){return
}if(I.params.mousewheelInvert){Z=-Z
}if(!I.params.freeMode){if((new window.Date()).getTime()-I.mousewheel.lastScrollTime>60){if(Z<0){if((!I.isEnd||I.params.loop)&&!I.animating){I.slideNext();
I.emit("onScroll",I,X)
}else{if(I.params.mousewheelReleaseOnEdges){return true
}}}else{if((!I.isBeginning||I.params.loop)&&!I.animating){I.slidePrev();
I.emit("onScroll",I,X)
}else{if(I.params.mousewheelReleaseOnEdges){return true
}}}}I.mousewheel.lastScrollTime=(new window.Date()).getTime()
}else{var p=I.getWrapperTranslate()+Z*I.params.mousewheelSensitivity;
var s=I.isBeginning,V=I.isEnd;
if(p>=I.minTranslate()){p=I.minTranslate()
}if(p<=I.maxTranslate()){p=I.maxTranslate()
}I.setWrapperTransition(0);
I.setWrapperTranslate(p);
I.updateProgress();
I.updateActiveIndex();
if(!s&&I.isBeginning||!V&&I.isEnd){I.updateClasses()
}if(I.params.freeModeSticky){clearTimeout(I.mousewheel.timeout);
I.mousewheel.timeout=setTimeout(function(){I.slideReset()
},300)
}else{if(I.params.lazyLoading&&I.lazy){I.lazy.load()
}}I.emit("onScroll",I,X);
if(I.params.autoplay&&I.params.autoplayDisableOnInteraction){I.stopAutoplay()
}if(p===0||p===I.maxTranslate()){return
}}if(X.preventDefault){X.preventDefault()
}else{X.returnValue=false
}return false
}I.disableMousewheelControl=function(){if(!I.mousewheel.event){return false
}var p=I.container;
if(I.params.mousewheelEventsTarged!=="container"){p=f(I.params.mousewheelEventsTarged)
}p.off(I.mousewheel.event,l);
I.params.mousewheelControl=false;
return true
};
I.enableMousewheelControl=function(){if(!I.mousewheel.event){return false
}var p=I.container;
if(I.params.mousewheelEventsTarged!=="container"){p=f(I.params.mousewheelEventsTarged)
}p.on(I.mousewheel.event,l);
I.params.mousewheelControl=true;
return true
};
function m(X,W){X=f(X);
var Y,V,s;
var Z=I.rtl?-1:1;
Y=X.attr("data-swiper-parallax")||"0";
V=X.attr("data-swiper-parallax-x");
s=X.attr("data-swiper-parallax-y");
if(V||s){V=V||"0";
s=s||"0"
}else{if(I.isHorizontal()){V=Y;
s="0"
}else{s=Y;
V="0"
}}if((V).indexOf("%")>=0){V=parseInt(V,10)*W*Z+"%"
}else{V=V*W*Z+"px"
}if((s).indexOf("%")>=0){s=parseInt(s,10)*W+"%"
}else{s=s*W+"px"
}X.transform("translate3d("+V+", "+s+",0px)")
}I.parallax={setTranslate:function(){I.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){m(this,I.progress)
});
I.slides.each(function(){var p=f(this);
p.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var s=Math.min(Math.max(p[0].progress,-1),1);
m(this,s)
})
})
},setTransition:function(p){if(typeof p==="undefined"){p=I.params.speed
}I.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var V=f(this);
var s=parseInt(V.attr("data-swiper-parallax-duration"),10)||p;
if(p===0){s=0
}V.transition(s)
})
}};
I.zoom={scale:1,currentScale:1,isScaling:false,gesture:{slide:undefined,slideWidth:undefined,slideHeight:undefined,image:undefined,imageWrap:undefined,zoomMax:I.params.zoomMax},image:{isTouched:undefined,isMoved:undefined,currentX:undefined,currentY:undefined,minX:undefined,minY:undefined,maxX:undefined,maxY:undefined,width:undefined,height:undefined,startX:undefined,startY:undefined,touchesStart:{},touchesCurrent:{}},velocity:{x:undefined,y:undefined,prevPositionX:undefined,prevPositionY:undefined,prevTime:undefined},getDistanceBetweenTouches:function(X){if(X.targetTouches.length<2){return 1
}var s=X.targetTouches[0].pageX,W=X.targetTouches[0].pageY,p=X.targetTouches[1].pageX,V=X.targetTouches[1].pageY;
var Y=Math.sqrt(Math.pow(p-s,2)+Math.pow(V-W,2));
return Y
},onGestureStart:function(p){var s=I.zoom;
if(!I.support.gestures){if(p.type!=="touchstart"||p.type==="touchstart"&&p.targetTouches.length<2){return
}s.gesture.scaleStart=s.getDistanceBetweenTouches(p)
}if(!s.gesture.slide||!s.gesture.slide.length){s.gesture.slide=f(this);
if(s.gesture.slide.length===0){s.gesture.slide=I.slides.eq(I.activeIndex)
}s.gesture.image=s.gesture.slide.find("img, svg, canvas");
s.gesture.imageWrap=s.gesture.image.parent("."+I.params.zoomContainerClass);
s.gesture.zoomMax=s.gesture.imageWrap.attr("data-swiper-zoom")||I.params.zoomMax;
if(s.gesture.imageWrap.length===0){s.gesture.image=undefined;
return
}}s.gesture.image.transition(0);
s.isScaling=true
},onGestureChange:function(p){var s=I.zoom;
if(!I.support.gestures){if(p.type!=="touchmove"||p.type==="touchmove"&&p.targetTouches.length<2){return
}s.gesture.scaleMove=s.getDistanceBetweenTouches(p)
}if(!s.gesture.image||s.gesture.image.length===0){return
}if(I.support.gestures){s.scale=p.scale*s.currentScale
}else{s.scale=(s.gesture.scaleMove/s.gesture.scaleStart)*s.currentScale
}if(s.scale>s.gesture.zoomMax){s.scale=s.gesture.zoomMax-1+Math.pow((s.scale-s.gesture.zoomMax+1),0.5)
}if(s.scale<I.params.zoomMin){s.scale=I.params.zoomMin+1-Math.pow((I.params.zoomMin-s.scale+1),0.5)
}s.gesture.image.transform("translate3d(0,0,0) scale("+s.scale+")")
},onGestureEnd:function(p){var s=I.zoom;
if(!I.support.gestures){if(p.type!=="touchend"||p.type==="touchend"&&p.changedTouches.length<2){return
}}if(!s.gesture.image||s.gesture.image.length===0){return
}s.scale=Math.max(Math.min(s.scale,s.gesture.zoomMax),I.params.zoomMin);
s.gesture.image.transition(I.params.speed).transform("translate3d(0,0,0) scale("+s.scale+")");
s.currentScale=s.scale;
s.isScaling=false;
if(s.scale===1){s.gesture.slide=undefined
}},onTouchStart:function(p,V){var W=p.zoom;
if(!W.gesture.image||W.gesture.image.length===0){return
}if(W.image.isTouched){return
}if(p.device.os==="android"){V.preventDefault()
}W.image.isTouched=true;
W.image.touchesStart.x=V.type==="touchstart"?V.targetTouches[0].pageX:V.pageX;
W.image.touchesStart.y=V.type==="touchstart"?V.targetTouches[0].pageY:V.pageY
},onTouchMove:function(V){var W=I.zoom;
if(!W.gesture.image||W.gesture.image.length===0){return
}I.allowClick=false;
if(!W.image.isTouched||!W.gesture.slide){return
}if(!W.image.isMoved){W.image.width=W.gesture.image[0].offsetWidth;
W.image.height=W.gesture.image[0].offsetHeight;
W.image.startX=I.getTranslate(W.gesture.imageWrap[0],"x")||0;
W.image.startY=I.getTranslate(W.gesture.imageWrap[0],"y")||0;
W.gesture.slideWidth=W.gesture.slide[0].offsetWidth;
W.gesture.slideHeight=W.gesture.slide[0].offsetHeight;
W.gesture.imageWrap.transition(0);
if(I.rtl){W.image.startX=-W.image.startX
}if(I.rtl){W.image.startY=-W.image.startY
}}var p=W.image.width*W.scale;
var s=W.image.height*W.scale;
if(p<W.gesture.slideWidth&&s<W.gesture.slideHeight){return
}W.image.minX=Math.min((W.gesture.slideWidth/2-p/2),0);
W.image.maxX=-W.image.minX;
W.image.minY=Math.min((W.gesture.slideHeight/2-s/2),0);
W.image.maxY=-W.image.minY;
W.image.touchesCurrent.x=V.type==="touchmove"?V.targetTouches[0].pageX:V.pageX;
W.image.touchesCurrent.y=V.type==="touchmove"?V.targetTouches[0].pageY:V.pageY;
if(!W.image.isMoved&&!W.isScaling){if(I.isHorizontal()&&(Math.floor(W.image.minX)===Math.floor(W.image.startX)&&W.image.touchesCurrent.x<W.image.touchesStart.x)||(Math.floor(W.image.maxX)===Math.floor(W.image.startX)&&W.image.touchesCurrent.x>W.image.touchesStart.x)){W.image.isTouched=false;
return
}else{if(!I.isHorizontal()&&(Math.floor(W.image.minY)===Math.floor(W.image.startY)&&W.image.touchesCurrent.y<W.image.touchesStart.y)||(Math.floor(W.image.maxY)===Math.floor(W.image.startY)&&W.image.touchesCurrent.y>W.image.touchesStart.y)){W.image.isTouched=false;
return
}}}V.preventDefault();
V.stopPropagation();
W.image.isMoved=true;
W.image.currentX=W.image.touchesCurrent.x-W.image.touchesStart.x+W.image.startX;
W.image.currentY=W.image.touchesCurrent.y-W.image.touchesStart.y+W.image.startY;
if(W.image.currentX<W.image.minX){W.image.currentX=W.image.minX+1-Math.pow((W.image.minX-W.image.currentX+1),0.8)
}if(W.image.currentX>W.image.maxX){W.image.currentX=W.image.maxX-1+Math.pow((W.image.currentX-W.image.maxX+1),0.8)
}if(W.image.currentY<W.image.minY){W.image.currentY=W.image.minY+1-Math.pow((W.image.minY-W.image.currentY+1),0.8)
}if(W.image.currentY>W.image.maxY){W.image.currentY=W.image.maxY-1+Math.pow((W.image.currentY-W.image.maxY+1),0.8)
}if(!W.velocity.prevPositionX){W.velocity.prevPositionX=W.image.touchesCurrent.x
}if(!W.velocity.prevPositionY){W.velocity.prevPositionY=W.image.touchesCurrent.y
}if(!W.velocity.prevTime){W.velocity.prevTime=Date.now()
}W.velocity.x=(W.image.touchesCurrent.x-W.velocity.prevPositionX)/(Date.now()-W.velocity.prevTime)/2;
W.velocity.y=(W.image.touchesCurrent.y-W.velocity.prevPositionY)/(Date.now()-W.velocity.prevTime)/2;
if(Math.abs(W.image.touchesCurrent.x-W.velocity.prevPositionX)<2){W.velocity.x=0
}if(Math.abs(W.image.touchesCurrent.y-W.velocity.prevPositionY)<2){W.velocity.y=0
}W.velocity.prevPositionX=W.image.touchesCurrent.x;
W.velocity.prevPositionY=W.image.touchesCurrent.y;
W.velocity.prevTime=Date.now();
W.gesture.imageWrap.transform("translate3d("+W.image.currentX+"px, "+W.image.currentY+"px,0)")
},onTouchEnd:function(af,ab){var ad=af.zoom;
if(!ad.gesture.image||ad.gesture.image.length===0){return
}if(!ad.image.isTouched||!ad.image.isMoved){ad.image.isTouched=false;
ad.image.isMoved=false;
return
}ad.image.isTouched=false;
ad.image.isMoved=false;
var ae=300;
var ac=300;
var V=ad.velocity.x*ae;
var Z=ad.image.currentX+V;
var p=ad.velocity.y*ac;
var X=ad.image.currentY+p;
if(ad.velocity.x!==0){ae=Math.abs((Z-ad.image.currentX)/ad.velocity.x)
}if(ad.velocity.y!==0){ac=Math.abs((X-ad.image.currentY)/ad.velocity.y)
}var Y=Math.max(ae,ac);
ad.image.currentX=Z;
ad.image.currentY=X;
var W=ad.image.width*ad.scale;
var aa=ad.image.height*ad.scale;
ad.image.minX=Math.min((ad.gesture.slideWidth/2-W/2),0);
ad.image.maxX=-ad.image.minX;
ad.image.minY=Math.min((ad.gesture.slideHeight/2-aa/2),0);
ad.image.maxY=-ad.image.minY;
ad.image.currentX=Math.max(Math.min(ad.image.currentX,ad.image.maxX),ad.image.minX);
ad.image.currentY=Math.max(Math.min(ad.image.currentY,ad.image.maxY),ad.image.minY);
ad.gesture.imageWrap.transition(Y).transform("translate3d("+ad.image.currentX+"px, "+ad.image.currentY+"px,0)")
},onTransitionEnd:function(p){var V=p.zoom;
if(V.gesture.slide&&p.previousIndex!==p.activeIndex){V.gesture.image.transform("translate3d(0,0,0) scale(1)");
V.gesture.imageWrap.transform("translate3d(0,0,0)");
V.gesture.slide=V.gesture.image=V.gesture.imageWrap=undefined;
V.scale=V.currentScale=1
}},toggleZoom:function(ad,aj){var V=ad.zoom;
if(!V.gesture.slide){V.gesture.slide=ad.clickedSlide?f(ad.clickedSlide):ad.slides.eq(ad.activeIndex);
V.gesture.image=V.gesture.slide.find("img, svg, canvas");
V.gesture.imageWrap=V.gesture.image.parent("."+ad.params.zoomContainerClass)
}if(!V.gesture.image||V.gesture.image.length===0){return
}var Y,X,ak,ai,af,ae,ao,an,W,al,ah,am,ac,ab,aa,Z,p,ag;
if(typeof V.image.touchesStart.x==="undefined"&&aj){Y=aj.type==="touchend"?aj.changedTouches[0].pageX:aj.pageX;
X=aj.type==="touchend"?aj.changedTouches[0].pageY:aj.pageY
}else{Y=V.image.touchesStart.x;
X=V.image.touchesStart.y
}if(V.scale&&V.scale!==1){V.scale=V.currentScale=1;
V.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)");
V.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)");
V.gesture.slide=undefined
}else{V.scale=V.currentScale=V.gesture.imageWrap.attr("data-swiper-zoom")||ad.params.zoomMax;
if(aj){p=V.gesture.slide[0].offsetWidth;
ag=V.gesture.slide[0].offsetHeight;
ak=V.gesture.slide.offset().left;
ai=V.gesture.slide.offset().top;
af=ak+p/2-Y;
ae=ai+ag/2-X;
W=V.gesture.image[0].offsetWidth;
al=V.gesture.image[0].offsetHeight;
ah=W*V.scale;
am=al*V.scale;
ac=Math.min((p/2-ah/2),0);
ab=Math.min((ag/2-am/2),0);
aa=-ac;
Z=-ab;
ao=af*V.scale;
an=ae*V.scale;
if(ao<ac){ao=ac
}if(ao>aa){ao=aa
}if(an<ab){an=ab
}if(an>Z){an=Z
}}else{ao=0;
an=0
}V.gesture.imageWrap.transition(300).transform("translate3d("+ao+"px, "+an+"px,0)");
V.gesture.image.transition(300).transform("translate3d(0,0,0) scale("+V.scale+")")
}},attachEvents:function(W){var s=W?"off":"on";
if(I.params.zoom){var V=I.slides;
var p=I.touchEvents.start==="touchstart"&&I.support.passiveListener&&I.params.passiveListeners?{passive:true,capture:false}:false;
if(I.support.gestures){I.slides[s]("gesturestart",I.zoom.onGestureStart,p);
I.slides[s]("gesturechange",I.zoom.onGestureChange,p);
I.slides[s]("gestureend",I.zoom.onGestureEnd,p)
}else{if(I.touchEvents.start==="touchstart"){I.slides[s](I.touchEvents.start,I.zoom.onGestureStart,p);
I.slides[s](I.touchEvents.move,I.zoom.onGestureChange,p);
I.slides[s](I.touchEvents.end,I.zoom.onGestureEnd,p)
}}I[s]("touchStart",I.zoom.onTouchStart);
I.slides.each(function(Y,X){if(f(X).find("."+I.params.zoomContainerClass).length>0){f(X)[s](I.touchEvents.move,I.zoom.onTouchMove)
}});
I[s]("touchEnd",I.zoom.onTouchEnd);
I[s]("transitionEnd",I.zoom.onTransitionEnd);
if(I.params.zoomToggle){I.on("doubleTap",I.zoom.toggleZoom)
}}},init:function(){I.zoom.attachEvents()
},destroy:function(){I.zoom.attachEvents(true)
}};
I._plugins=[];
for(var P in I.plugins){var L=I.plugins[P](I,I.params[P]);
if(L){I._plugins.push(L)
}}I.callPlugins=function(p){for(var s=0;
s<I._plugins.length;
s++){if(p in I._plugins[s]){I._plugins[s][p](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])
}}};
function q(p){if(p.indexOf("on")!==0){if(p[0]!==p[0].toUpperCase()){p="on"+p[0].toUpperCase()+p.substring(1)
}else{p="on"+p
}}return p
}I.emitterEventListeners={};
I.emit=function(p){if(I.params[p]){I.params[p](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])
}var s;
if(I.emitterEventListeners[p]){for(s=0;
s<I.emitterEventListeners[p].length;
s++){I.emitterEventListeners[p][s](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])
}}if(I.callPlugins){I.callPlugins(p,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])
}};
I.on=function(p,s){p=q(p);
if(!I.emitterEventListeners[p]){I.emitterEventListeners[p]=[]
}I.emitterEventListeners[p].push(s);
return I
};
I.off=function(p,V){var s;
p=q(p);
if(typeof V==="undefined"){I.emitterEventListeners[p]=[];
return I
}if(!I.emitterEventListeners[p]||I.emitterEventListeners[p].length===0){return
}for(s=0;
s<I.emitterEventListeners[p].length;
s++){if(I.emitterEventListeners[p][s]===V){I.emitterEventListeners[p].splice(s,1)
}}return I
};
I.once=function(s,V){s=q(s);
var p=function(){V(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
I.off(s,p)
};
I.on(s,p);
return I
};
I.a11y={makeFocusable:function(p){p.attr("tabIndex","0");
return p
},addRole:function(p,s){p.attr("role",s);
return p
},addLabel:function(s,p){s.attr("aria-label",p);
return s
},disable:function(p){p.attr("aria-disabled",true);
return p
},enable:function(p){p.attr("aria-disabled",false);
return p
},onEnterKey:function(p){if(p.keyCode!==13){return
}if(f(p.target).is(I.params.nextButton)){I.onClickNext(p);
if(I.isEnd){I.a11y.notify(I.params.lastSlideMessage)
}else{I.a11y.notify(I.params.nextSlideMessage)
}}else{if(f(p.target).is(I.params.prevButton)){I.onClickPrev(p);
if(I.isBeginning){I.a11y.notify(I.params.firstSlideMessage)
}else{I.a11y.notify(I.params.prevSlideMessage)
}}}if(f(p.target).is("."+I.params.bulletClass)){f(p.target)[0].click()
}},liveRegion:f('<span class="'+I.params.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>'),notify:function(p){var s=I.a11y.liveRegion;
if(s.length===0){return
}s.html("");
s.html(p)
},init:function(){if(I.params.nextButton&&I.nextButton&&I.nextButton.length>0){I.a11y.makeFocusable(I.nextButton);
I.a11y.addRole(I.nextButton,"button");
I.a11y.addLabel(I.nextButton,I.params.nextSlideMessage)
}if(I.params.prevButton&&I.prevButton&&I.prevButton.length>0){I.a11y.makeFocusable(I.prevButton);
I.a11y.addRole(I.prevButton,"button");
I.a11y.addLabel(I.prevButton,I.params.prevSlideMessage)
}f(I.container).append(I.a11y.liveRegion)
},initPagination:function(){if(I.params.pagination&&I.params.paginationClickable&&I.bullets&&I.bullets.length){I.bullets.each(function(){var p=f(this);
I.a11y.makeFocusable(p);
I.a11y.addRole(p,"button");
I.a11y.addLabel(p,I.params.paginationBulletMessage.replace(/{{index}}/,p.index()+1))
})
}},destroy:function(){if(I.a11y.liveRegion&&I.a11y.liveRegion.length>0){I.a11y.liveRegion.remove()
}}};
I.init=function(){if(I.params.loop){I.createLoop()
}I.updateContainerSize();
I.updateSlidesSize();
I.updatePagination();
if(I.params.scrollbar&&I.scrollbar){I.scrollbar.set();
if(I.params.scrollbarDraggable){I.scrollbar.enableDraggable()
}}if(I.params.effect!=="slide"&&I.effects[I.params.effect]){if(!I.params.loop){I.updateProgress()
}I.effects[I.params.effect].setTranslate()
}if(I.params.loop){I.slideTo(I.params.initialSlide+I.loopedSlides,0,I.params.runCallbacksOnInit)
}else{I.slideTo(I.params.initialSlide,0,I.params.runCallbacksOnInit);
if(I.params.initialSlide===0){if(I.parallax&&I.params.parallax){I.parallax.setTranslate()
}if(I.lazy&&I.params.lazyLoading){I.lazy.load();
I.lazy.initialImageLoaded=true
}}}I.attachEvents();
if(I.params.observer&&I.support.observer){I.initObservers()
}if(I.params.preloadImages&&!I.params.lazyLoading){I.preloadImages()
}if(I.params.zoom&&I.zoom){I.zoom.init()
}if(I.params.autoplay){I.startAutoplay()
}if(I.params.keyboardControl){if(I.enableKeyboardControl){I.enableKeyboardControl()
}}if(I.params.mousewheelControl){if(I.enableMousewheelControl){I.enableMousewheelControl()
}}if(I.params.hashnavReplaceState){I.params.replaceState=I.params.hashnavReplaceState
}if(I.params.history){if(I.history){I.history.init()
}}if(I.params.hashnav){if(I.hashnav){I.hashnav.init()
}}if(I.params.a11y&&I.a11y){I.a11y.init()
}I.emit("onInit",I)
};
I.cleanupStyles=function(){I.container.removeClass(I.classNames.join(" ")).removeAttr("style");
I.wrapper.removeAttr("style");
if(I.slides&&I.slides.length){I.slides.removeClass([I.params.slideVisibleClass,I.params.slideActiveClass,I.params.slideNextClass,I.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row")
}if(I.paginationContainer&&I.paginationContainer.length){I.paginationContainer.removeClass(I.params.paginationHiddenClass)
}if(I.bullets&&I.bullets.length){I.bullets.removeClass(I.params.bulletActiveClass)
}if(I.params.prevButton){f(I.params.prevButton).removeClass(I.params.buttonDisabledClass)
}if(I.params.nextButton){f(I.params.nextButton).removeClass(I.params.buttonDisabledClass)
}if(I.params.scrollbar&&I.scrollbar){if(I.scrollbar.track&&I.scrollbar.track.length){I.scrollbar.track.removeAttr("style")
}if(I.scrollbar.drag&&I.scrollbar.drag.length){I.scrollbar.drag.removeAttr("style")
}}};
I.destroy=function(s,p){I.detachEvents();
I.stopAutoplay();
if(I.params.scrollbar&&I.scrollbar){if(I.params.scrollbarDraggable){I.scrollbar.disableDraggable()
}}if(I.params.loop){I.destroyLoop()
}if(p){I.cleanupStyles()
}I.disconnectObservers();
if(I.params.zoom&&I.zoom){I.zoom.destroy()
}if(I.params.keyboardControl){if(I.disableKeyboardControl){I.disableKeyboardControl()
}}if(I.params.mousewheelControl){if(I.disableMousewheelControl){I.disableMousewheelControl()
}}if(I.params.a11y&&I.a11y){I.a11y.destroy()
}if(I.params.history&&!I.params.replaceState){window.removeEventListener("popstate",I.history.setHistoryPopState)
}if(I.params.hashnav&&I.hashnav){I.hashnav.destroy()
}I.emit("onDestroy");
if(s!==false){I=null
}};
I.init();
return I
};
a.prototype={isSafari:(function(){var h=window.navigator.userAgent.toLowerCase();
return(h.indexOf("safari")>=0&&h.indexOf("chrome")<0&&h.indexOf("android")<0)
})(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),isArray:function(h){return Object.prototype.toString.apply(h)==="[object Array]"
},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:(window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1)||(window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1),lteIE9:(function(){var h=document.createElement("div");
h.innerHTML="<!--[if lte IE 9]><i></i><![endif]-->";
return h.getElementsByTagName("i").length===1
})()},device:(function(){var j=window.navigator.userAgent;
var i=j.match(/(Android);?[\s\/]+([\d.]+)?/);
var h=j.match(/(iPad).*OS\s([\d_]+)/);
var k=j.match(/(iPod)(.*OS\s([\d_]+))?/);
var l=!h&&j.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
return{ios:h||l||k,android:i}
})(),support:{touch:(window.Modernizr&&Modernizr.touch===true)||(function(){return !!(("ontouchstart" in window)||window.DocumentTouch&&document instanceof DocumentTouch)
})(),transforms3d:(window.Modernizr&&Modernizr.csstransforms3d===true)||(function(){var h=document.createElement("div").style;
return("webkitPerspective" in h||"MozPerspective" in h||"OPerspective" in h||"MsPerspective" in h||"perspective" in h)
})(),flexbox:(function(){var k=document.createElement("div").style;
var j=("alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient").split(" ");
for(var h=0;
h<j.length;
h++){if(j[h] in k){return true
}}})(),observer:(function(){return("MutationObserver" in window||"WebkitMutationObserver" in window)
})(),passiveListener:(function(){var h=false;
try{var i=Object.defineProperty({},"passive",{get:function(){h=true
}});
window.addEventListener("testPassiveListener",null,i)
}catch(j){}return h
})(),gestures:(function(){return"ongesturestart" in window
})()},plugins:{}};
var g=(function(){var i=function(j){var l=this,k=0;
for(k=0;
k<j.length;
k++){l[k]=j[k]
}l.length=j.length;
return this
};
var h=function(k,o){var j=[],n=0;
if(k&&!o){if(k instanceof i){return k
}}if(k){if(typeof k==="string"){var m,q,l=k.trim();
if(l.indexOf("<")>=0&&l.indexOf(">")>=0){var p="div";
if(l.indexOf("<li")===0){p="ul"
}if(l.indexOf("<tr")===0){p="tbody"
}if(l.indexOf("<td")===0||l.indexOf("<th")===0){p="tr"
}if(l.indexOf("<tbody")===0){p="table"
}if(l.indexOf("<option")===0){p="select"
}q=document.createElement(p);
q.innerHTML=k;
for(n=0;
n<q.childNodes.length;
n++){j.push(q.childNodes[n])
}}else{if(!o&&k[0]==="#"&&!k.match(/[ .<>:~]/)){m=[document.getElementById(k.split("#")[1])]
}else{m=(o||document).querySelectorAll(k)
}for(n=0;
n<m.length;
n++){if(m[n]){j.push(m[n])
}}}}else{if(k.nodeType||k===window||k===document){j.push(k)
}else{if(k.length>0&&k[0].nodeType){for(n=0;
n<k.length;
n++){j.push(k[n])
}}}}}return new i(j)
};
i.prototype={addClass:function(n){if(typeof n==="undefined"){return this
}var m=n.split(" ");
for(var l=0;
l<m.length;
l++){for(var k=0;
k<this.length;
k++){this[k].classList.add(m[l])
}}return this
},removeClass:function(n){var m=n.split(" ");
for(var l=0;
l<m.length;
l++){for(var k=0;
k<this.length;
k++){this[k].classList.remove(m[l])
}}return this
},hasClass:function(j){if(!this[0]){return false
}else{return this[0].classList.contains(j)
}},toggleClass:function(n){var m=n.split(" ");
for(var l=0;
l<m.length;
l++){for(var k=0;
k<this.length;
k++){this[k].classList.toggle(m[l])
}}return this
},attr:function(j,m){if(arguments.length===1&&typeof j==="string"){if(this[0]){return this[0].getAttribute(j)
}else{return undefined
}}else{for(var l=0;
l<this.length;
l++){if(arguments.length===2){this[l].setAttribute(j,m)
}else{for(var k in j){this[l][k]=j[k];
this[l].setAttribute(k,j[k])
}}}return this
}},removeAttr:function(j){for(var k=0;
k<this.length;
k++){this[k].removeAttribute(j)
}return this
},data:function(k,m){if(typeof m==="undefined"){if(this[0]){var n=this[0].getAttribute("data-"+k);
if(n){return n
}else{if(this[0].dom7ElementDataStorage&&(k in this[0].dom7ElementDataStorage)){return this[0].dom7ElementDataStorage[k]
}else{return undefined
}}}else{return undefined
}}else{for(var j=0;
j<this.length;
j++){var l=this[j];
if(!l.dom7ElementDataStorage){l.dom7ElementDataStorage={}
}l.dom7ElementDataStorage[k]=m
}return this
}},transform:function(j){for(var l=0;
l<this.length;
l++){var k=this[l].style;
k.webkitTransform=k.MsTransform=k.msTransform=k.MozTransform=k.OTransform=k.transform=j
}return this
},transition:function(l){if(typeof l!=="string"){l=l+"ms"
}for(var k=0;
k<this.length;
k++){var j=this[k].style;
j.webkitTransitionDuration=j.MsTransitionDuration=j.msTransitionDuration=j.MozTransitionDuration=j.OTransitionDuration=j.transitionDuration=l
}return this
},on:function(l,p,q,k){function r(u){var t=u.target;
if(h(t).is(p)){q.call(t,u)
}else{var s=h(t).parents();
for(var j=0;
j<s.length;
j++){if(h(s[j]).is(p)){q.call(s[j],u)
}}}}var o=l.split(" ");
var n,m;
for(n=0;
n<this.length;
n++){if(typeof p==="function"||p===false){if(typeof p==="function"){q=arguments[1];
k=arguments[2]||false
}for(m=0;
m<o.length;
m++){this[n].addEventListener(o[m],q,k)
}}else{for(m=0;
m<o.length;
m++){if(!this[n].dom7LiveListeners){this[n].dom7LiveListeners=[]
}this[n].dom7LiveListeners.push({listener:q,liveListener:r});
this[n].addEventListener(o[m],r,k)
}}}return this
},off:function(n,r,s,m){var q=n.split(" ");
for(var p=0;
p<q.length;
p++){for(var o=0;
o<this.length;
o++){if(typeof r==="function"||r===false){if(typeof r==="function"){s=arguments[1];
m=arguments[2]||false
}this[o].removeEventListener(q[p],s,m)
}else{if(this[o].dom7LiveListeners){for(var l=0;
l<this[o].dom7LiveListeners.length;
l++){if(this[o].dom7LiveListeners[l].listener===s){this[o].removeEventListener(q[p],this[o].dom7LiveListeners[l].liveListener,m)
}}}}}}return this
},once:function(k,m,n,j){var o=this;
if(typeof m==="function"){m=false;
n=arguments[1];
j=arguments[2]
}function l(p){n(p);
o.off(k,m,l,j)
}o.on(k,m,l,j)
},trigger:function(k,m){for(var l=0;
l<this.length;
l++){var j;
try{j=new window.CustomEvent(k,{detail:m,bubbles:true,cancelable:true})
}catch(n){j=document.createEvent("Event");
j.initEvent(k,true,true);
j.detail=m
}this[l].dispatchEvent(j)
}return this
},transitionEnd:function(p){var m=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],l,k,n=this;
function o(j){if(j.target!==this){return
}p.call(this,j);
for(l=0;
l<m.length;
l++){n.off(m[l],o)
}}if(p){for(l=0;
l<m.length;
l++){n.on(m[l],o)
}}return this
},width:function(){if(this[0]===window){return window.innerWidth
}else{if(this.length>0){return parseFloat(this.css("width"))
}else{return null
}}},outerWidth:function(j){if(this.length>0){if(j){return this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left"))
}else{return this[0].offsetWidth
}}else{return null
}},height:function(){if(this[0]===window){return window.innerHeight
}else{if(this.length>0){return parseFloat(this.css("height"))
}else{return null
}}},outerHeight:function(j){if(this.length>0){if(j){return this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom"))
}else{return this[0].offsetHeight
}}else{return null
}},offset:function(){if(this.length>0){var k=this[0];
var l=k.getBoundingClientRect();
var j=document.body;
var p=k.clientTop||j.clientTop||0;
var o=k.clientLeft||j.clientLeft||0;
var m=window.pageYOffset||k.scrollTop;
var n=window.pageXOffset||k.scrollLeft;
return{top:l.top+m-p,left:l.left+n-o}
}else{return null
}},css:function(k,l){var j;
if(arguments.length===1){if(typeof k==="string"){if(this[0]){return window.getComputedStyle(this[0],null).getPropertyValue(k)
}}else{for(j=0;
j<this.length;
j++){for(var m in k){this[j].style[m]=k[m]
}}return this
}}if(arguments.length===2&&typeof k==="string"){for(j=0;
j<this.length;
j++){this[j].style[k]=l
}return this
}return this
},each:function(k){for(var j=0;
j<this.length;
j++){k.call(this[j],j,this[j])
}return this
},html:function(k){if(typeof k==="undefined"){return this[0]?this[0].innerHTML:undefined
}else{for(var j=0;
j<this.length;
j++){this[j].innerHTML=k
}return this
}},text:function(k){if(typeof k==="undefined"){if(this[0]){return this[0].textContent.trim()
}else{return null
}}else{for(var j=0;
j<this.length;
j++){this[j].textContent=k
}return this
}},is:function(k){if(!this[0]){return false
}var j,l;
if(typeof k==="string"){var m=this[0];
if(m===document){return k===document
}if(m===window){return k===window
}if(m.matches){return m.matches(k)
}else{if(m.webkitMatchesSelector){return m.webkitMatchesSelector(k)
}else{if(m.mozMatchesSelector){return m.mozMatchesSelector(k)
}else{if(m.msMatchesSelector){return m.msMatchesSelector(k)
}else{j=h(k);
for(l=0;
l<j.length;
l++){if(j[l]===this[0]){return true
}}return false
}}}}}else{if(k===document){return this[0]===document
}else{if(k===window){return this[0]===window
}else{if(k.nodeType||k instanceof i){j=k.nodeType?[k]:k;
for(l=0;
l<j.length;
l++){if(j[l]===this[0]){return true
}}return false
}return false
}}}},index:function(){if(this[0]){var k=this[0];
var j=0;
while((k=k.previousSibling)!==null){if(k.nodeType===1){j++
}}return j
}else{return undefined
}},eq:function(k){if(typeof k==="undefined"){return this
}var l=this.length;
var j;
if(k>l-1){return new i([])
}if(k<0){j=l+k;
if(j<0){return new i([])
}else{return new i([this[j]])
}}return new i([this[k]])
},append:function(k){var n,m;
for(n=0;
n<this.length;
n++){if(typeof k==="string"){var l=document.createElement("div");
l.innerHTML=k;
while(l.firstChild){this[n].appendChild(l.firstChild)
}}else{if(k instanceof i){for(m=0;
m<k.length;
m++){this[n].appendChild(k[m])
}}else{this[n].appendChild(k)
}}}return this
},prepend:function(k){var n,m;
for(n=0;
n<this.length;
n++){if(typeof k==="string"){var l=document.createElement("div");
l.innerHTML=k;
for(m=l.childNodes.length-1;
m>=0;
m--){this[n].insertBefore(l.childNodes[m],this[n].childNodes[0])
}}else{if(k instanceof i){for(m=0;
m<k.length;
m++){this[n].insertBefore(k[m],this[n].childNodes[0])
}}else{this[n].insertBefore(k,this[n].childNodes[0])
}}}return this
},insertBefore:function(k){var n=h(k);
for(var m=0;
m<this.length;
m++){if(n.length===1){n[0].parentNode.insertBefore(this[m],n[0])
}else{if(n.length>1){for(var l=0;
l<n.length;
l++){n[l].parentNode.insertBefore(this[m].cloneNode(true),n[l])
}}}}},insertAfter:function(k){var n=h(k);
for(var m=0;
m<this.length;
m++){if(n.length===1){n[0].parentNode.insertBefore(this[m],n[0].nextSibling)
}else{if(n.length>1){for(var l=0;
l<n.length;
l++){n[l].parentNode.insertBefore(this[m].cloneNode(true),n[l].nextSibling)
}}}}},next:function(j){if(this.length>0){if(j){if(this[0].nextElementSibling&&h(this[0].nextElementSibling).is(j)){return new i([this[0].nextElementSibling])
}else{return new i([])
}}else{if(this[0].nextElementSibling){return new i([this[0].nextElementSibling])
}else{return new i([])
}}}else{return new i([])
}},nextAll:function(k){var j=[];
var m=this[0];
if(!m){return new i([])
}while(m.nextElementSibling){var l=m.nextElementSibling;
if(k){if(h(l).is(k)){j.push(l)
}}else{j.push(l)
}m=l
}return new i(j)
},prev:function(j){if(this.length>0){if(j){if(this[0].previousElementSibling&&h(this[0].previousElementSibling).is(j)){return new i([this[0].previousElementSibling])
}else{return new i([])
}}else{if(this[0].previousElementSibling){return new i([this[0].previousElementSibling])
}else{return new i([])
}}}else{return new i([])
}},prevAll:function(j){var l=[];
var k=this[0];
if(!k){return new i([])
}while(k.previousElementSibling){var m=k.previousElementSibling;
if(j){if(h(m).is(j)){l.push(m)
}}else{l.push(m)
}k=m
}return new i(l)
},parent:function(j){var k=[];
for(var l=0;
l<this.length;
l++){if(j){if(h(this[l].parentNode).is(j)){k.push(this[l].parentNode)
}}else{k.push(this[l].parentNode)
}}return h(h.unique(k))
},parents:function(j){var k=[];
for(var l=0;
l<this.length;
l++){var m=this[l].parentNode;
while(m){if(j){if(h(m).is(j)){k.push(m)
}}else{k.push(m)
}m=m.parentNode
}}return h(h.unique(k))
},find:function(k){var l=[];
for(var n=0;
n<this.length;
n++){var o=this[n].querySelectorAll(k);
for(var m=0;
m<o.length;
m++){l.push(o[m])
}}return new i(l)
},children:function(k){var n=[];
for(var m=0;
m<this.length;
m++){var o=this[m].childNodes;
for(var l=0;
l<o.length;
l++){if(!k){if(o[l].nodeType===1){n.push(o[l])
}}else{if(o[l].nodeType===1&&h(o[l]).is(k)){n.push(o[l])
}}}}return new i(h.unique(n))
},remove:function(){for(var j=0;
j<this.length;
j++){if(this[j].parentNode){this[j].parentNode.removeChild(this[j])
}}return this
},add:function(){var n=this;
var m,k;
for(m=0;
m<arguments.length;
m++){var l=h(arguments[m]);
for(k=0;
k<l.length;
k++){n[n.length]=l[k];
n.length++
}}return n
}};
h.fn=i.prototype;
h.unique=function(j){var l=[];
for(var k=0;
k<j.length;
k++){if(l.indexOf(j[k])===-1){l.push(j[k])
}}return l
};
return h
})();
var d=["jQuery","Zepto","Dom7"];
for(var c=0;
c<d.length;
c++){if(window[d[c]]){e(window[d[c]])
}}var b;
if(typeof g==="undefined"){b=window.Dom7||window.Zepto||window.jQuery
}else{b=g
}function e(h){h.fn.swiper=function(j){var i;
h(this).each(function(){var k=new a(this,j);
if(!i){i=k
}});
return i
}
}if(b){if(!("transitionEnd" in b.fn)){b.fn.transitionEnd=function(o){var l=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],k,h,m=this;
function n(i){if(i.target!==this){return
}o.call(this,i);
for(k=0;
k<l.length;
k++){m.off(l[k],n)
}}if(o){for(k=0;
k<l.length;
k++){m.on(l[k],n)
}}return this
}
}if(!("transform" in b.fn)){b.fn.transform=function(h){for(var k=0;
k<this.length;
k++){var j=this[k].style;
j.webkitTransform=j.MsTransform=j.msTransform=j.MozTransform=j.OTransform=j.transform=h
}return this
}
}if(!("transition" in b.fn)){b.fn.transition=function(k){if(typeof k!=="string"){k=k+"ms"
}for(var j=0;
j<this.length;
j++){var h=this[j].style;
h.webkitTransitionDuration=h.MsTransitionDuration=h.msTransitionDuration=h.MozTransitionDuration=h.OTransitionDuration=h.transitionDuration=k
}return this
}
}if(!("outerWidth" in b.fn)){b.fn.outerWidth=function(h){if(this.length>0){if(h){return this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left"))
}else{return this[0].offsetWidth
}}else{return null
}}
}}window.Swiper=a
})();
if(typeof(module)!=="undefined"){module.exports=window.Swiper
}else{if(typeof define==="function"&&define.amd){define([],function(){return window.Swiper
})
}}(function(){var a;
function b(){$(".course-page-slider > ol").addClass("swiper-wrapper flip-container");
$(".course-page-slider").find("ol > li").addClass("swiper-slide flipper");
if($(".swiper-container>h2").text().length==0){$(".swiper-container>h2").remove()
}$(".course-page-slider ol > li").each(function(d){if($(this).find("img").length>0){var j=$(this).find("img").attr("src");
$(this).find("img").wrapAll("<span class='front' />")
}else{$(this).append("<span class='front'> <i class='front-logo' />  </span>")
}if($(this).find("h2").length>0){$(this).find("h2").addClass("product-url").wrapAll("<span class='back'>/");
$(this).find(".attribute-authorSummary").appendTo($(this).find(".back"));
var e="&copy;"+$(this).find(".attribute-copyrightYear").html();
$(this).find(".attribute-copyrightYear").html(e);
$(this).find(".attribute-copyrightYear").appendTo($(this).find(".back"));
$(this).find(".attribute-titleStatus").appendTo($(this).find(".back"));
$(this).find(".item-attribute-label").appendTo($(this).find(".back"));
$(this).find(".attribute-inStockDate").appendTo($(this).find(".back"));
$(this).find(".attribute-iLAOptions").appendTo($(this).find(".back"));
$(this).find(".intro-copy").appendTo($(this).find(".back"));
$(this).find(".back").before($(this).find(".front"));
$(this).find("p.attribute-iLAOptions, .attribute-iLAOptions li").each(function(){});
var c=$(this).find("h2 a").attr("href")
}if($(this).find("img").length>0&&$(this).find("h2").length>0){var g=$(this),f=g.find("img"),h=g.find("h2 > a").text();
f.attr("alt",h)
}});
$('<div class="swiper-button-next"></div><div class="swiper-button-prev"></div><div class="setdesktopflag"></div>').insertAfter(".swiper-wrapper");
a=new Swiper(".course-page-slider",{nextButton:".swiper-button-next",prevButton:".swiper-button-prev",slidesPerView:4,spaceBetween:20,loop:true,observer:true,observeParents:true,breakpoints:{1600:{slidesPerView:4,spaceBetween:30},1200:{slidesPerView:3,spaceBetween:10},768:{slidesPerView:2,spaceBetween:10},480:{slidesPerView:1,spaceBetween:0,centeredSlides:true}}})
}$(window).load(function(){if($(".course-page-slider.featured-product-list ol li").length>0){b()
}else{$(".course-page-slider.featured-product-list").on("AjaxDOMRenderedEvent",function(){b()
})
}})
})();
$(document).ready(function(){if($(".embed .nav-tabs").length>0){$("#seriestitle-primarytab").hide();
$(".custom-item-renderer .tab-panel").hide()
}$("a").each(function(){var b=$(this).attr("href");
if(!b||(b&&b.match("^#"))){$(this).parents().removeClass("button-primary")
}});
$(".drawer-box-collapse-icon").click(function(){$(this).siblings(".content-tile-text").slideToggle();
$(this).toggleClass("minus")
});
if($(window).width()>768){$(".drawer-box-collapse-icon").each(function(){$(this).attr("tabindex",-1)
})
}$(".custom-item-renderer-estimated-date-delivery").each(function(c,d){var b=$(d).html().replace(/-/g,"/");
$(d).html($.datepicker.formatDate("dd M yy",new Date(b)))
});
$(".featured-product-list").hide();
var a=function(){if($(".featured-product-list .swiper-wrapper li").length>0){$(".featured-product-list").find("h2:empty").remove();
$(".featured-product-list").show()
}else{setTimeout(a,1000)
}};
a()
});
(function(){function a(){if($(window).width()>767){var b=0;
$('.row [class*="highlight-col-content-vertical"]').each(function(c){if($(this).children().outerHeight()>b){b=$(this).children().outerHeight()
}else{$(this).children().outerHeight(b)
}});
$('[class*="highlight-col-content-vertical"]').each(function(c){$(this).closest(".column").prevAll().find(".highlight-img-wraper").height($(this).children().outerHeight());
$(this).closest(".column").nextAll().find(".highlight-img-wraper").height($(this).children().outerHeight());
$(this).closest(".column").prevAll().find(".highlight-img-wraper figure").addClass("hide-image");
$(this).closest(".column").nextAll().find(".highlight-img-wraper figure").addClass("hide-image")
})
}}$(document).ready(function(){$(".highlight-randomizer").each(function(){var b=$(this);
b.find(".grid").hide();
var c=Math.floor(Math.random()*b.find(".grid").length);
b.find(".grid").eq(c).show()
});
$(".highlight-col-image").each(function(){$(this).closest(".column").nextAll().find('[class^="col-"]').prepend('<span class="highlight-arrow" style= "background-color:'+$(this).parents(".row-grid").css("background-color")+'"></span>');
var b=$(this).find("figure img").attr("srcset")||$(this).find("figure img").attr("src");
$(this).find(".content-tile-container").css({"background-image":"url("+b+")"}).addClass("highlight-img-wraper")
});
$(".highlight-col-image-new").each(function(){var b=$(this).find("figure img").attr("srcset")||$(this).find("figure img").attr("src");
$(this).find(".content-tile-container").css({"background-image":"url("+b+")"}).addClass("highlight-img-wraper")
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
});
$(window).load(function(){a()
});
$(window).smartresize(function(){a()
})
})();
$(document).ready(function(){var h="title-asc";
var d=$(".custom-item-renderer-series-content-title");
var b=d.children("li");
var f=[];
$.each(b,function(i,k){var j={};
j.title=$(k).find(".content-tile-book-box-horizontal h2 a").text();
j.author=$(k).find("p.custom-item-renderer-series-titles-product-author").text();
j.copyrightyear=parseInt($(k).find(".custom-item-renderer-resources-tab-pane-resources-content-instructor-resources-information > dd").first().text().trim().slice(1));
j.html=k;
f.push(j)
});
c(d,g(f,h));
function c(j,i){var k="";
$.each(i,function(l,m){k=k+m.html.outerHTML
});
j.html(k)
}function g(l,j){var i=j.split("-")[0];
var k=j.split("-")[1];
if(i!="copyrightyear"){return l.sort(function(n,m){if(n&&m){return a(n,m,k,i,"copyrightyear")
}else{return 0
}})
}else{return l.sort(function(n,m){if(n&&m){return a(n,m,"asc","title","copyrightyear")
}else{return 0
}})
}}function a(n,l,j,k,i){if(i){var o=n[i];
var m=l[i];
if(o!==m){return e(m,o)
}}if(j=="asc"){return e(n[k].toUpperCase(),l[k].toUpperCase())
}else{return e(l[k].toUpperCase(),n[k].toUpperCase())
}}function e(j,i){if(j===i){return 0
}return(j>i)?1:-1
}sortResources=function(o){var j=o.split(",");
for(var k=0;
k<j.length;
k++){var n=j[k];
var m=$("span[id*='"+n+"-sort-title']");
if(!m.length||m.length==0){$("#resources-dropdown-nav option[value=custom-item-renderer-"+n+"-pane]").hide();
$(".custom-item-renderer-"+n+"-pane").hide();
$("#"+n+"-title").hide()
}else{var l=$(".custom-item-renderer-"+n+"-pane").find("span[id*='downloadble-resources-downloadble-sort-title']");
l.sort(function(p,i){return $(p).text().toUpperCase().localeCompare($(i).text().toUpperCase())
});
$.each(l,function(i,p){$("#"+$(this).attr("id").replace("downloadble-resources-downloadble-sort-title",n)).appendTo("#"+n+"-title")
});
m.sort(function(p,i){return $(p).text().toUpperCase().localeCompare($(i).text().toUpperCase())
});
$.each(m,function(i,q){var p=$("#"+$(this).attr("id").replace(n+"-sort-title",n));
if(!$("#"+$(this).attr("id").replace(n+"-sort-title","downloadble-resources-downloadble-sort-title")).length){$("#"+$(this).attr("id").replace(n+"-sort-title",n)).appendTo("#"+n+"-title")
}})
}}};
setTimeout("sortResources('instructor-resources,course-resources,resources-website-online-courses,other-student-resources,discipline-resources');",500)
});
$(document).ready(function(){var a=$(".sortable-container"),b=a.find(">ul >li");
b.each(function(){var e=$(this),d=e.find(">.category-child-list-expand-collapse-button"),c=e.find(">ul");
d.attr("href","#");
d.click(function(){if(d.hasClass("fa-minus")){c.show();
c.removeClass("hide");
c.attr("aria-hidden","false");
d.attr("aria-selected","true").attr("aria-expanded","true")
}})
});
$(".tab-panel li a").click(function(){$(".sortable-container article").show();
$("select.custom-dropdown-nav--sort").val("show-all").change()
})
});