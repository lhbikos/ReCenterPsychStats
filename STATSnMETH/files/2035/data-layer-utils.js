function dataLayerTrackEvent(name, attributes) {
	var eventData = {
		"event": name
	};
	if (attributes) {
		eventData["attributes"] = attributes;
	}
	dataLayer.push(eventData);
}

function dataLayerTrackFileUploadEvent(fileName) {
  var fileNameParts = fileName.split(".");
  var fileExtension = fileNameParts[fileNameParts.length - 1];
  dataLayerTrackEvent("fileUpload", {
    "fileType": fileExtension
  })
}
