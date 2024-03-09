var LOADING_CONTENT = "Loading Content";
var OPEN_CLASS = "is-open";

function showNewLightbox(anchorElement, width, height, title, id, description) {
	var lightBoxHref = anchorElement.href.replace(/\?nojs=true/g, "");
	lightBoxHref = lightBoxHref.replace(/&nojs=true/g, "");
	showLightbox(lightBoxHref, width, height, title, id, description);
	return false;
}

function showLightbox(url, width, height, title, id, description) {
	var focusShouldBeSet = false;
	if (document.getElementById(id) === null) {
		var docBody = document.getElementsByTagName("body")[0];
		var modalWrapper = document.createElement("div");
		if (String(width).length === String(width).replace(/[^0-9]+/g, "").length) {
			width = width + "px";
		}
		if (String(height).length === String(height).replace(/[^0-9]+/g, "").length) {
			height = height + "px";
		}
		modalWrapper.setAttribute("id", id);
		modalWrapper.setAttribute("aria-hidden", true);
		modalWrapper.className = "micromodaljs-modal";
		var modalOverlay = document.createElement("div");
		modalOverlay.setAttribute("tabindex", -1);
		modalOverlay.setAttribute("data-micromodal-close", "");
		modalOverlay.className = "micromodaljs-modal-overlay";
		var modalLoadingScreen = document.createElement("div");
		modalLoadingScreen.className = "loading";
		var modalLoadingSpinner = document.createElement("div");
		modalLoadingSpinner.className = "throbber circular";
		var modalLoadingDetails = document.createElement("span");
		modalLoadingDetails.innerHTML = LOADING_CONTENT;
		var modalActual = document.createElement("div");
		modalActual.setAttribute("role", "dialog");
		modalActual.setAttribute("aria-modal", true);
		modalActual.setAttribute("aria-labelledby", id + "Title");
		modalActual.setAttribute("aria-describedby", id + "Description");
		modalActual.style.width = width;
		modalActual.className = "micromodaljs-modal-container";
		modalActual.style.visibility = "hidden";
		var modalHeader = document.createElement("header");
		var modalTitle = document.createElement("h2");
		modalTitle.setAttribute("id", id + "Title");
		modalTitle.className = "screen-reader-text";
		modalTitle.innerHTML = title;
		var modalCloseButton = document.createElement("a");
		modalCloseButton.setAttribute("aria-label", "Close modal");
		modalCloseButton.setAttribute("aria-role", "button");
		modalCloseButton.setAttribute("tabindex", "0");
		modalCloseButton.setAttribute("id", id + "Close");
		modalCloseButton.setAttribute("href", "#");
		modalCloseButton.onclick = function (e) {
			closeLightboxFromOutsideModal(id);
			e.preventDefault();
		};
		modalCloseButton.onkeydown = function (e) { decideIfLightboxCloses(e, id); };
		modalCloseButton.className = "micromodaljs-modal-close-button";
		modalCloseButton.innerHTML = "<i class=\"fa fa-times ico-close c-IconButton c-IconButton--close\" aria-hidden=\"true\"></i>";
		var modalDescription = document.createElement("p");
		modalDescription.innerHTML = description;
		modalDescription.className = "screen-reader-text";
		modalDescription.setAttribute("id", id + "Description");
		var modalContent = document.createElement("div");
		modalContent.setAttribute("id", id + "Content");
		var modalIframe = document.createElement("iframe");
		modalIframe.onload = function () { modalActual.style.visibility = "visible"; modalLoadingScreen.style.display = "none"; };
		modalIframe.setAttribute("src", url);
		modalIframe.setAttribute("data-modal-id", id);
		modalIframe.setAttribute("id", id + "Iframe");

		modalLoadingSpinner.appendChild(modalLoadingDetails);
		modalLoadingScreen.appendChild(modalLoadingSpinner);
		modalOverlay.appendChild(modalLoadingScreen);

		modalHeader.appendChild(modalTitle);
		modalHeader.appendChild(modalCloseButton);
		modalHeader.appendChild(modalDescription);
		modalContent.appendChild(modalIframe);
		modalActual.appendChild(modalHeader);
		modalActual.appendChild(modalContent);
		modalOverlay.appendChild(modalActual);
		modalWrapper.appendChild(modalOverlay);

		docBody.appendChild(modalWrapper);
	}
	else {
		focusShouldBeSet = true;
	}
	preventScrollingFromOutsideModal();
	MicroModal.show(id, { disableFocus: true });
	if (focusShouldBeSet) {
		document.getElementById(id + "Iframe").contentWindow.setFocus();
	}
	return false;
}

function decideIfLightboxCloses(event, id) {
	if (event.keyCode == 13) {
		closeLightboxFromOutsideModal(id);
	}
	event.preventDefault();
}

function closeLightboxFromOutsideModal(id) {
	MicroModal.close(id);
	restoreScrollingFromOutsideModal();
}

function preventScrollingFromOutsideModal() {
	document.getElementsByTagName("html")[0].className = document.getElementsByTagName("html")[0].className + " has-open-modal";
}

function restoreScrollingFromOutsideModal() {
	document.getElementsByTagName("html")[0].className = parent.document.getElementsByTagName("html")[0].className.replace(" has-open-modal", "");
}

function restoreScrolling() {
	parent.document.getElementsByTagName("html")[0].className = parent.document.getElementsByTagName("html")[0].className.replace(" has-open-modal", "");
}

function closeLightbox() {
	parent.MicroModal.close(window.frameElement.getAttribute('data-modal-id'));
	restoreScrolling();
}

function closeLightboxAndReload() {
	if (window.frameElement !== null) {
		closeLightbox();
		window.parent.location.reload(true);
	}
}

function closeLightboxAndReturnFalse() {
	if (window.frameElement !== null) {
		closeLightbox();
	}
	return false;
}