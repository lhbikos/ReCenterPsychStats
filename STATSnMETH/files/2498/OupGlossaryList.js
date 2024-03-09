jQuery(function($) {
	$j('.glossaryEntry').on('click', function(){
		refinePosition($j(this));
	});
	
	$j('.glossaryEntry').hover(function() {
		refinePosition($j(this));
	}, function() {});
});

function refinePosition(elem) {
	var glossId = $j(elem).attr('id');
	var position = $j('#glossary-'+glossId).position();
	if(position != null) {
		$j('#glossary-'+glossId).css({left: position.left - 50, top: position.top + 5});
	}
}