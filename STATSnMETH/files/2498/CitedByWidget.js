
/**
 * this JS call will unhide any anchors to the citedByWidget with the id "citedByNav"
 * these must be added by the plugins into their app or the js call will do nothing
 */
function unhideCitedByNav() {
	$j("#citedByNav").fadeIn().removeClass('hidden');
}