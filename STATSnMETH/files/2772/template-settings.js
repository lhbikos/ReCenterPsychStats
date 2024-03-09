_.templateSettings={interpolate:/<\@\=(.+?)\@>/gim,evaluate:/<\@(.+?)\@>/gim,escape:/<\@-(.+?)\@>/gim};
if(typeof DMCP==="undefined"||DMCP===null){var DMCP={}
}+function(a){a(document).ready(function(){DMCP.tpl=DMCP.tpl||{};
a("script.template").each(function(b){DMCP.tpl[a(this).attr("id")]=_.template(a(this).html());
a(this).remove()
})
})
}(jQuery);