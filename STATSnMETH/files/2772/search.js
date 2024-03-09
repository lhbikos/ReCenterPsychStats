var ALGOLIA_HIGHERED_APP_ID="L639T95U5A",ALGOLIA_HIGHERED_API_KEY="ac3763ef1cc0fea7a42ae6877e628ca2",ALGOLIA_HIGHERED_INDEX_NAME="highered_live_categories",CATEGORY_KEY="virtualPageIdentifier";
var isValidIsbn=function(e){var c,d,f,a,b;
if(e.length!=10&&e.length!=13){return false
}if(e.length==13){c=0;
for(b=0;
b<12;
b++){f=parseInt(e[b]);
if(b%2==1){c+=3*f
}else{c+=f
}}a=(10-(c%10))%10;
return(a==e[e.length-1])
}if(e.length==10){d=10;
c=0;
for(b=0;
b<9;
b++){f=parseInt(e[b]);
c+=d*f;
d--
}a=11-(c%11);
if(a==10){a="X"
}else{if(a==11){a=0
}}return(a==e[e.length-1].toUpperCase())
}};
$(document).ready(function(){$(".mega-nav-search button, .search-results-search-box button").html($(".search-box button").attr("aria-label"));
if(typeof CQ==="undefined"){$("input.search-box-input").closest("form").submit(function(c){var a=$(this).find("input.search-box-input").val();
var b=a.replace(/[^0-9X]/gi,"");
if(isValidIsbn(b)){c.preventDefault();
window.location.href="/us/higher-education/product/isbn-"+b.length+"-redirect/"+b+".html"
}else{a=a.toLowerCase();
if(a==="desk copy"||a==="desk copies"||a==="exam copy"||a==="exam copies"||a==="instructor resources"||a==="books"||a==="textbooks"||a==="etextbooks"||a==="access codes"){c.preventDefault();
window.location.href="/us/search-results-other-results.html?q="+a
}else{if(a==="van de walle"||a==="words their way"||a==="kurose"){c.preventDefault();
window.location.href="/us/search-results-higher-education.html?q="+a
}}}})
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
f=f*1.15;
e.css({height:f})
}})
};
a.Search.createContentPagination=function(f){var d=f.find("ol > li");
if(d.length>1){var e=f.find("ol > li.selected").html()||f.find("ol > li.active a").html()||f.find("ol > li p.selected").html();
if(e=="1"){f.prepend("<a href='#' class='prev disabled'>Previous</a>")
}}if($(this).find(".prev").length){var c=f.find("ol");
var b=f.find(".prev");
c.replaceWith(b.clone());
b.replaceWith(c.clone())
}};
a.Search.createAlgoliaPagination=function(h,f){var c=h.find(".page-number.prev").find("a").attr("href");
var b=h.find(".page-number.next").find("a").attr("href");
var e,d;
e=(c!=="#")?'<a class="prev" href="'+c+'">Previous<span class="fa fa-chevron-left"></span></a>':"";
d=(b!=="#")?'<a class="next" href="'+b+'">Next<span class="fa fa-chevron-right"></span></a>':"";
if(f){if(e===""){if(!h.find(".page-number.prev").hasClass("disabled")){e='<a class="prev arrow-previous" href="javascript:void(0)"><span class="fa fa-chevron-left"></span>Previous</a>'
}}if(d===""){if(!h.find(".page-number.next").hasClass("disabled")){d='<a class="next arrow-next" href="javascript:void(0)">Next<span class="fa fa-chevron-right"></span></a>'
}}}var g=h.find(".page-number").length-2;
if(g>1){h.find(".ais-pagination--item__previous a").text("Previous");
h.find(".ais-pagination--item__next a").text("Next")
}else{h.siblings(".visible-pagination").html("")
}};
$(window).load(function(){var c="<h5>We're sorry, we didn't find anything that matched your search</h5>                            <p>Please try again using the search box at the top of this page.</p>                            <ul>                                <li>Make sure all words are spelled correctly.</li>                                <li>Use more general keywords.</li>                                <li>Limit the number of keywords.</li>                                <li>Use special characters (ñ,á,ü, etc.) when applicable</li>                            </ul>";
setTimeout(function(){if($(".product-search-results-list-container > .ais-hits__empty").length>0){$(".product-search-results-list-container > .ais-hits__empty").html(c)
}$(".ais-pagination").each(function(d,e){if($(e).find(".prev").hasClass("disabled")&&$(e).find(".next").hasClass("disabled")){$(e).hide()
}})
},300);
if(sessionStorage.getItem("activeTab")){var b=sessionStorage.getItem("activeTab");
if(b=="687404209-4"){$("[aria-controls='"+b+"']").addClass("active").siblings().removeClass("active");
$(".tab-content > div#"+b).addClass("active").siblings().removeClass("active")
}}});
$(document).ready(function(){$(".main-tab-panel li a").click(function(f){f.preventDefault();
var c=$(".search-box-input").val();
var d=$(this).parent().attr("aria-controls");
if(d==="-1439291310-1"){window.location.href="/us/search-results-prek-12.html?q="+c
}else{if(d==="-1439291310-2"){window.location.href="/us/search-results-higher-education.html?q="+c
}else{if(d==="-1439291310-3"){window.location.href="/us/search-results-professional.html?q="+c
}else{if(d==="-1439291310-4"){window.location.href="/us/search-results-news-events.html?q="+c
}else{if(d==="-1439291310-5"){window.location.href="/us/search-results-other-results.html?q="+c
}}}}}});
$(".left-tab-panel .nav-tabs li").click(function(){var c=$(this).attr("aria-controls");
sessionStorage.setItem("activeTab",c)
});
var b=$(".dynamic-content-search");
if($(".dynamic-content-search").length){$(".dynamic-content-search").on("AjaxDOMRenderedEvent",function(){a.Search.createContentPagination($(this).find(".paginationSection"))
})
}if($(".product-search-results-list-container",".left-tab-panel").length){DMCP.PearsonInstantSearch[$(".product-search-results-list-container",".left-tab-panel").attr("data-index-name")].on("render",function(){$(".left-tab-panel > nav").prepend($(".title > h6"));
$(".product-search-results-list ol > li").each(function(){if($(this).find(".wrap-list-block").length==0){var e=$(this).find("h3 a").attr("href");
if($(this).find("img").length){var d=$(this).find("h3");
var f=$(this).find("img");
d.replaceWith(f.clone());
f.replaceWith(d.clone());
$(this).find("img").nextAll().wrapAll("<div class='wrap-list-block'></div>");
$(this).find("img").wrapAll("<picture />")
}else{$(this).children().wrapAll("<div class='wrap-list-block'></div>");
$(this).find(".wrap-list-block").append($(this).find(".attribute-iLAOptions"));
$(this).prepend('<img src="/etc/themes/platform/1dc-theme/assets/default-image.png" alt="book cover" class="image-default image-smallImageURL"/>');
$(this).find("img").wrapAll("<picture />")
}$(this).find("picture").append($(this).find($(".attribute-itemLabel")));
$(this).find("img").wrap("<a href="+e+">");
var c=$(this).find(".attribute-titleStatus").text();
if(c=="Not available"){$(this).find(".item-attribute-label").hide();
$(this).find(".attribute-inStockDate").hide()
}else{if(c=="Not yet available"){$(this).find(".item-attribute-label").text(" Estimated Availability: ")
}}$(this).find("p.attribute-iLAOptions, .attribute-iLAOptions li").each(function(){a.Product.setProductTagStyle($(this))
})
}if($(this).find(".attribute-iLAOptions ul").length&&!$(this).find(".attribute-iLAOptions li").length){$(this).find(".attribute-iLAOptions").hide()
}});
a.Search.createAlgoliaPagination($(".product-search-results-pagination"),false)
})
}(function(){var e=$("#687404209-4");
if(e.length>0){var d=["higher-education/subject-catalog/humanities---social-sciences/","higher-education/humanities---social-sciences/","higher-education/subject-catalog/math---science/","higher-education/math---science/","higher-education/subject-catalog/professional---career/","higher-education/professional---career/"],c=e.find(".content-search-results-list-results > li");
c.each(function(){var g=$(this),f=g.find("article > h3 > a").attr("href");
d.forEach(function(i,h){if(f.indexOf(i)>-1){g.hide()
}})
})
}})()
})
})(HE);
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
$(window).load(function(){$("li, p",".product-tag-style").each(function(){a.Product.setProductTagStyle($(this))
});
if($(".attribute-iLAOptions").length>0){$(".attribute-multivalue-list li").each(function(){a.Product.setProductTagStyle($(this))
})
}})
})(HE);
if(typeof HE==="undefined"||HE===null){var HE={}
}(function(e){function a(g){if(document.querySelector("#"+g+"-template")!=null){return document.querySelector("#"+g+"-template").innerHTML
}return""
}function f(h){var g=h.split("/");
if(g.length){return g[g.length-1]
}return""
}function c(){if(e("#instantSearchJson").length){var g=JSON.parse(e("#instantSearchJson").html());
return f(g[CATEGORY_KEY])
}return""
}function b(g,i){var h;
if(g===".popular-courses-container"){if(e(g).length){h='                 <div id="hits-popular"></div>                   <script type="text/html" id="hit-popular-template">                     <article><div><a href="'+i+'higher-education{{{link}}}"><h4>{{{_highlightResult.name.value}}}</h4></a></div><p class="dynamic-content-flag">Popular</p></article>                 <\/script>'
}}else{if(e(g).length){h='                 <div id="hits"></div>                   <script type="text/html" id="hit-template">                     <article><div><a href="'+i+'higher-education{{{link}}}"><h4>{{{_highlightResult.name.value}}}</h4></a></div></article>                 <\/script>                 <script type="text/html" id="hit-popular-template">                     <article><div><a href="'+i+'higher-education{{{link}}}"><h4>{{{_highlightResult.name.value}}}</h4></a></div><p class="dynamic-content-flag">Popular</p></article>                 <\/script>                 <script type="text/html" id="no-results-template">                         <h5>We\'re sorry, we didn\'t find anything that matched your search</h5>                         <p>Please try again using the search box at the top of this page.</p>                         <ul>                             <li>Make sure all words are spelled correctly.</li>                             <li>Use more general keywords.</li>                             <li>Limit the number of keywords.</li>                             <li>Use special characters (ñ,á,ü, etc.) when applicable</li>                         </ul>                 <\/script>'
}}e(g).html(h)
}function d(h,g){return e.extend({},h,g)
}e(window).load(function(){e(".search-results-higher-education-page .left-tab-panel > nav").prepend(e(".title > h6"));
e(".product-search-results-list ol > li").each(function(){if(e(this).find(".wrap-list-block").length==0){var i=e(this).find("h3 a").attr("href");
if(e(this).find("img").length){var h=e(this).find("h3");
var j=e(this).find("img");
h.replaceWith(j.clone());
j.replaceWith(h.clone());
e(this).find("img").nextAll().wrapAll("<div class='wrap-list-block'></div>");
e(this).find("img").wrapAll("<picture />")
}else{e(this).children().wrapAll("<div class='wrap-list-block'></div>");
e(this).find(".wrap-list-block").append(e(this).find(".attribute-iLAOptions"));
e(this).prepend('<img src="/etc/themes/platform/1dc-theme/assets/default-image.png" alt="book cover" class="image-default image-smallImageURL"/>');
e(this).find("img").wrapAll("<picture />")
}e(this).find("picture").append(e(this).find(e(".attribute-itemLabel")));
e(this).find("img").wrap("<a href="+i+">");
e(this).find(".attribute-inStockDate").text(HE.formatDate(e(this).find(".attribute-inStockDate").text()));
var g=e(this).find(".attribute-titleStatus").text();
if(g=="Not available"){e(this).find(".item-attribute-label").hide();
e(this).find(".attribute-inStockDate").hide()
}else{if(g=="Not yet available"){e(this).find(".item-attribute-label").text(" Estimated Availability: ");
e(this).find(".attribute-inStockDate").css("color","red")
}}e(this).find("p.attribute-iLAOptions, .attribute-iLAOptions li").each(function(){HE.Product.setProductTagStyle(e(this))
})
}if(e(this).find(".attribute-iLAOptions ul").length&&!e(this).find(".attribute-iLAOptions li").length){e(this).find(".attribute-iLAOptions").hide()
}})
});
e(document).ready(function(){var j="";
if(typeof CQ!=="undefined"){j="/content/one-dot-com/one-dot-com/us/en"
}var h={appId:ALGOLIA_HIGHERED_APP_ID,apiKey:ALGOLIA_HIGHERED_API_KEY,indexName:ALGOLIA_HIGHERED_INDEX_NAME,routing:{router:instantsearch.routers.history(),stateMapping:{stateToRoute:function(l){return{q:l.query,page:l.page}
},routeToState:function(l){return{query:l.q,page:l.page}
}}}};
if(e(".instantSearchHE").length){(function(m,l){b(".instantSearchHE",j);
var n={searchParameters:{facetsRefinements:{parentParentCategoryCode:[c()]}},searchFunction:function(p){if(p.state.query&&p.state.query.trim().length>0&&e(".instantSearchHE").length>0){p.search()
}}};
var o=d(l,n);
m.PearsonInstantSearch=instantsearch(o);
if(e(".search-input").length){m.PearsonInstantSearch.addWidget(instantsearch.widgets.searchBox({container:".search-input",placeholder:"Begin typing your course name"}))
}if(e("#hits").length){m.PearsonInstantSearch.addWidget(instantsearch.widgets.hits({container:"#hits",hitsPerPage:10,templates:{item:a("hit"),empty:a("no-results")}}))
}m.PearsonInstantSearch.start()
}(HE,h))
}if(e(".popular-courses-container").length){(function(m,l){b(".popular-courses-container",j);
var n={searchParameters:{query:"",facetsRefinements:{parentParentCategoryCode:[c()],"attributes.popular":["true"]}}};
var o=d(l,n);
m.PopularCoursesInstantSearch=instantsearch(o);
if(e("#hits-popular").length){m.PopularCoursesInstantSearch.addWidget(instantsearch.widgets.hits({container:"#hits-popular",hitsPerPage:6,templates:{item:a("hit-popular"),empty:""}}))
}m.PopularCoursesInstantSearch.start();
m.PopularCoursesInstantSearch.on("render",function(){if(e(window).width()<768){e(".popular-flag-section").find(".dynamic-content-flag").text("")
}})
}(HE,h))
}var k=e.trim(e(".search-box input.search-box-input").val());
var i,g;
if(e(".discipline-instant-search-container").length&&k.length){(function(l){b(".discipline-instant-search-container",j);
var m={routing:{router:instantsearch.routers.history(),stateMapping:{stateToRoute:function(o){return{q:o.query,page:o.page}
},routeToState:function(o){return{query:o.q,page:o.page}
}}},searchParameters:{query:k,facetsRefinements:{"attributes.type":["HEDiscipline"]}}};
var n=d(l,m);
i=instantsearch(n);
i.addWidget(instantsearch.widgets.hits({container:".discipline-instant-search-container",hitsPerPage:10,templates:{item:a("hit"),empty:a("no-results")}}));
e(".discipline-instant-search-container").after("<div class='search-results-discipline'><nav></nav></div>");
i.addWidget(instantsearch.widgets.pagination({container:".search-results-discipline nav",showFirstLast:false,cssClasses:{root:"numbers",previous:"prev",next:"next",item:"page-number",active:"selected",disabled:"disabled"},scrollTo:true}));
i.start();
i.on("render",function(){HE.Search.createAlgoliaPagination(e(".search-results-discipline"),true)
})
})(h)
}if(e(".courses-instant-search-container").length&&k.length){(function(l){b(".courses-instant-search-container",j);
var m={routing:{router:instantsearch.routers.history(),stateMapping:{stateToRoute:function(o){return{q:o.query,page:o.page}
},routeToState:function(o){return{query:o.q,page:o.page}
}}},searchParameters:{query:k,facetsRefinements:{"attributes.type":["HECourse"]}}};
var n=d(l,m);
g=instantsearch(n);
g.addWidget(instantsearch.widgets.hits({container:".courses-instant-search-container",hitsPerPage:10,templates:{item:a("hit"),empty:a("no-results")}}));
e(".courses-instant-search-container").after("<div class='search-results-courses'><nav></nav></div>");
g.addWidget(instantsearch.widgets.pagination({container:".search-results-courses nav",showFirstLast:false,cssClasses:{root:"numbers",previous:"prev",next:"next",item:"page-number",active:"selected",disabled:"disabled"},scrollTo:true}));
g.start();
g.on("render",function(){HE.Search.createAlgoliaPagination(e(".search-results-courses"),true)
})
})(h)
}})
})($);