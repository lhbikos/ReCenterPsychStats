document.observe("dom:loaded", function() {
	
	var highlightedElemArray = $j('#readPanel .hi');
	if (highlightedElemArray.length == 0) {
		highlightedElemArray = $j('.hi'); // may match left pane content
	}
	var height = $j(window).height();
	
	// only scroll to hit highlight if hit highlighting turned on
	var hh_cookie = null;
	if ($j.cookies !== undefined) {
		hh_cookie = $j.cookies.get('oupbase_hh');
	}
	if (hh_cookie === null || hh_cookie == 1) {
		if (highlightedElemArray != undefined && highlightedElemArray.length > 0 && height < highlightedElemArray.first().offset().top) {
			$j('html,body').animate({scrollTop: highlightedElemArray.first().offset().top - height + 120},'slow');
		}
	}
	
	$j('#iteWrapper ul li ul li ul li a').click(function() {
		var href = $(this).href;
		var anchor = href.substring(href.indexOf('#') + 1);
		window.location.hash = anchor;
	});
	
});