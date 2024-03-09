// partial conversion to jQuery; more to come; eventually should move below inside (function($, window, document) { ... })(jQuery, window, document);
$j(function() {
	var searchWithinLabel = $j('#searchWithinLabel').val();
	var popoutContentLabel = $j('#popoutContentLabel').val();
	// this line is Prototype, and should be converted at some point
	popoutContent($$('#readPanel .suppressable'), popoutContentLabel); popoutLinks();
	fakeValue('q_within', searchWithinLabel);
});