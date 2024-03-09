function validateForm(event, form) {
	var inputs = form.getElementsByTagName("input");
	var errorHeaders = form.getElementsByClassName("error-header");
	var overallErrorMessage = errorHeaders.length > 0 ? errorHeaders[0] : null;
	var result = false;
	var validationSucceeded = true;
	var numberOfInputs = inputs.length;
	for (i = 0; i < numberOfInputs; i++)
	{
		var inputFieldManager = inputs[i].getFieldEventManager();
		if (inputFieldManager !== null && typeof inputFieldManager.requiredCheck !== "undefined")
		{
		    result = inputs[i].getFieldEventManager().validateInput();
		    if (result === true)
			{
				validationSucceeded = false;
			}
		}
		if (inputs[i].type == "checkbox" && inputs[i].getAttribute("required") && !result)
		{
			result = validateCheckbox(inputs[i]);
			if (result === false)
			{
				validationSucceeded = false;
			}
		}
	}
	if (overallErrorMessage !== null)
	{
		if (validationSucceeded)
		{
			if (overallErrorMessage.className.indexOf("display-none") === -1)
			{
				overallErrorMessage.className =  overallErrorMessage.className + " display-hidden";
			}
		}
		else
		{
			overallErrorMessage.className = overallErrorMessage.className.replace("display-hidden", "").replace("display-none", "");
		}
	}
	return Tapestry.waitForPage(event);
}

function validateCheckbox(checkboxInput) {
	var predefinedError = document.getElementById(checkboxInput.id + "Error");
	var labels = checkboxInput.parentNode.getElementsByTagName("label");
	var labelLength = labels.length;
	var checkboxLabel = labelLength > 1 ? null : labels[0];
	var validationSucceeded = true;
	if (checkboxLabel === null)
	{
	    for (i = 0; i < labelLength; i++)
	    {
		    if (labels[i].getAttribute("for") == checkboxInput.id)
		    {
		    	checkboxLabel = labels[i];
		    }
	    }
	}
	if (!checkboxInput.checked)
	{
		checkboxInput.addClassName("t-error");
		if (checkboxLabel !== null)
		{
			checkboxLabel.addClassName("t-error");
		}
		if (predefinedError !== null)
		{
		    predefinedError.removeClassName("display-none");
		}
		validationSucceeded = false;
	}
	else
	{
		checkboxInput.removeClassName("t-error");
		if (checkboxLabel !== null)
		{
			checkboxLabel.removeClassName("t-error");
		}
		if (predefinedError !== null)
		{
		    predefinedError.addClassName("display-none");
		}
		validationSucceeded = true;
	}
	return validationSucceeded;
}

function validateRequiredFormOnKeyDown(event, formTarget) {
	if (event.keyCode == 13) {
		validateForm(event, formTarget);
	}
}

document.observe("dom:loaded", function() {
	var forms = document.getElementsByTagName("form");
	var formLength = forms.length;
	for (i = 0; i < formLength; i++)
	{
		forms[i].addEventListener("keydown", function() {validateRequiredFormOnKeyDown(event, this)});
	}
});