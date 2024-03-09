function adjustHeight(obj, offset) {
	var helpFrame = jQuery("#" + obj.name);
	var innerDoc = (helpFrame.get(0).contentDocument) ? helpFrame.get(0).contentDocument : helpFrame.get(0).contentWindow.document;
	var el = innerDoc.body.parentElement;
	var innerDocHeight = el.scrollHeight < el.offsetHeight ? el.scrollHeight : el.offsetHeight;
	helpFrame.height(innerDocHeight + offset);
}
