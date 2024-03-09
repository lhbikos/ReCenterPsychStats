function validate_required(field) {
	with (field) {
		if (value==null||value=="") {
			return false;
		}
		else {
			return true;
		}
	}
}

function validate_libcard_form(event) {
    var processSubmission = true;
    var libcardError = document.getElementById("lcnumError");
    var overallLibCardFormError = document.getElementById("libcardFormError");
    var lcnum = document.getElementById("lcnum");
    if (validate_required(lcnum) == false)
    {
        libcardError.style.display = "block";
        overallLibCardFormError.style.display = "block";
        processSubmission = false;
        if (lcnum.className !== null && lcnum.className.indexOf("t-error") === -1)
		{
		    lcnum.className = lcnum.className + " t-error";
		}
    }
    else
    {
        libcardError.style.display = "none";
        overallLibCardFormError.style.display = "none";
        libcardError.className = libcardError.className.replace(" t-error", "");
    }
    if (!processSubmission)
    {
        event.preventDefault();
    }
    return processSubmission;
}


function validate_form(thisform) {
	with (thisform) {
	    var processSubmission = true;
	    var usernameError = document.getElementById(user.id + "Error");
		if (validate_required(user)==false) {
			if (usernameError !== null)
			{
			    usernameError.style.display = "block";
			}
			user.focus();
			if (user.className !== null && user.className.indexOf("t-error") === -1)
			{
			    user.className = user.className + " t-error";
			}
			processSubmission = false;
		}
		else
		{
		    usernameError.style.display = "none";
		    user.className = user.className.replace(" t-error", "");
		}
		var passwordError = document.getElementById(pass.id + "Error");
		if (validate_required(pass)==false) {
			if (passwordError !== null)
			{
			    passwordError.style.display = "block";
			}
			pass.focus();
			if (pass.className !== null && pass.className.indexOf("t-error") === -1)
			{
			    pass.className = pass.className + " t-error";
			}
			processSubmission = false;
		}
		else
		{
		    passwordError.style.display = "none";
		}
		if (processSubmission)
		{
		    document.getElementById("usernameFormError").style.display = "none";
		}
		else
		{
		    document.getElementById("usernameFormError").style.display = "block";
		}
		return processSubmission;
	}
}
if ($("#username") != null) {
	$("#username").autocomplete("disable");
}
if ($("#username") != null) {
	$("#password").autocomplete("disable");
}