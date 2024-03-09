var DMCP=DMCP||{};
+function(a){DMCP.FormValidator=DMCP.FormValidator||{};
DMCP.FormValidator={InvalidInputHelper:function(b,c){this.changeOrInput=function(){if(b.validity.badInput||b.validity.patternMismatch||b.validity.typeMismatch){b.setCustomValidity(c.invalidText)
}else{if(b.value==""){b.setCustomValidity(c.emptyText)
}else{b.setCustomValidity("")
}}};
if(b.value==""){b.setCustomValidity(c.emptyText)
}else{b.setCustomValidity("")
}b.addEventListener("change",this.changeOrInput);
b.addEventListener("input",this.changeOrInput)
},InvalidGroupInputHelper:function(b,d,c){DMCP.FormValidator.changeOrInputGroup=function(){var f=false;
a(b).find("input").each(function(){if(this.checked){f=true;
this.setAttribute("checked","");
this.setAttribute("aria-checked","true")
}else{this.removeAttribute("checked");
this.setAttribute("aria-checked","false")
}});
if(d==="true"){var e=a(b).find("input")[0];
if(!f){e.setAttribute("required","");
e.setCustomValidity(c.emptyText)
}else{e.removeAttribute("required");
e.setCustomValidity("")
}}};
DMCP.FormValidator.changeOrInputGroup();
a(b).find("input").each(function(){this.addEventListener("change",DMCP.FormValidator.changeOrInputGroup)
})
},customizeErrorMessage:function(b){var c=a('input[type="text"], input[type="email"], input[type="number"], input[type="password"], textarea, select',b),e=a("fieldset",b),d;
c.each(function(){if(typeof this.validity!=="undefined"){d=a(this);
DMCP.FormValidator.InvalidInputHelper(this,{emptyText:d.attr("data-required-msg")?d.attr("data-required-msg"):d.closest("form").attr("data-required-msg")?d.closest("form").attr("data-required-msg"):"",invalidText:d.attr("data-constraint-msg")})
}});
e.each(function(){if(typeof this.validity!=="undefined"){d=a(this);
DMCP.FormValidator.InvalidGroupInputHelper(this,this.getAttribute("aria-required"),{emptyText:d.attr("data-required-msg")?d.attr("data-required-msg"):d.closest("form").attr("data-required-msg")?d.closest("form").attr("data-required-msg"):"",invalidText:a(this).attr("data-constraint-msg")})
}})
},isValidPattern:function(c){var b=c.val();
if(b.length&&c.attr("pattern")&&!(b.match(c.attr("pattern")))){return false
}return true
},isValidEmail:function(d){var c=d.val();
if(c.length&&d.attr("type")==="email"){var b=/^[^@]+([@]{1})[0-9a-zA-Z\\._-]+([\\.]{1})[0-9a-zA-Z\\._-]+$/;
if(!c.match(b)){return false
}}return true
},isValidNumber:function(d){var b=d.val();
if(d.attr("type")==="number"){var c=/^[0-9]+$/;
if(b.length){if(!b.match(c)){return false
}}else{d.val("")
}}return true
},addErrorMessage:function(b,c){b.parent().addClass("has-error");
b.attr("aria-invalid","true");
b.siblings(".error-message").text(c)
},resetErrorMessage:function(b){b.parent().removeClass("has-error");
b.attr("aria-invalid","false")
},validateField:function(c){var d=DMCP.FormValidator,b="";
if((c.attr("aria-required")==="true")&&(c.val()===null||c.val().trim().length===0)){b=c.attr("data-required-msg")?c.attr("data-required-msg"):c.closest("form").attr("data-required-msg")?c.closest("form").attr("data-required-msg"):"";
c.val("");
d.addErrorMessage(c,b);
return false
}else{if(!d.isValidPattern(c)||!d.isValidEmail(c)||!d.isValidNumber(c)){b=c.attr("data-constraint-msg");
d.addErrorMessage(c,b);
return false
}else{d.resetErrorMessage(c);
return true
}}},validateGroup:function(b){if(b.find("input:checked").length===0){b.parent().addClass("has-error");
b.find(".error-message").text(b.attr("data-required-msg"));
return false
}else{b.parent().removeClass("has-error");
b.find(".error-message").text("");
return true
}},attachFocusEventHandlers:function(b){a("input, textarea, select",b).focus(function(){DMCP.FormValidator.resetErrorMessage(a(this))
});
a("input, textarea, select",b).blur(function(){DMCP.FormValidator.validateField(a(this))
})
},validateOnSubmit:function(b,c){var d=b.find('input[type="text"], input[type="email"], input[type="number"], input[type="password"], textarea, select'),f=b.find('fieldset[aria-required="true"]'),e=true;
d.each(function(){if(DMCP.FormValidator.validateField(a(this))===false){e=false
}});
f.each(function(){if(DMCP.FormValidator.validateGroup(a(this))===false){e=false
}});
if(e===false){c.preventDefault()
}return e
}};
a(document).ready(function(){})
}(jQuery);