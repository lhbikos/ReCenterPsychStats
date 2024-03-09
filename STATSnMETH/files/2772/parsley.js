/*!
* Parsleyjs
* Guillaume Potier - <guillaume@wisembly.com>
* Version 2.2.0-rc1 - built Sun Aug 16 2015 14:04:07
* MIT Licensed
*
*/
!function(b){"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)
}(function(ad){function ac(d,c){return d.parsleyAdaptedCallback||(d.parsleyAdaptedCallback=function(){var a=Array.prototype.slice.call(arguments,0);
a.unshift(this),d.apply(c||E,a)
}),d.parsleyAdaptedCallback
}function ab(b){return 0===b.lastIndexOf(C,0)?b.substr(C.length):b
}"undefined"==typeof ad&&"undefined"!=typeof window.jQuery&&(ad=window.jQuery);
var aa=1,Z={},Y={attr:function(i,h,n){var m,l,k=new RegExp("^"+h,"i");
if("undefined"==typeof n){n={}
}else{for(var j in n){n.hasOwnProperty(j)&&delete n[j]
}}if("undefined"==typeof i||"undefined"==typeof i[0]){return n
}l=i[0].attributes;
for(var j=l.length;
j--;
){m=l[j],m&&m.specified&&k.test(m.name)&&(n[this.camelize(m.name.slice(h.length))]=this.deserializeValue(m.value))
}return n
},checkAttr:function(e,d,f){return e.is("["+d+f+"]")
},setAttr:function(f,e,h,g){f[0].setAttribute(this.dasherize(e+h),String(g))
},generateID:function(){return""+aa++
},deserializeValue:function(a){var f;
try{return a?"true"==a||("false"==a?!1:"null"==a?null:isNaN(f=Number(a))?/^[\[\{]/.test(a)?ad.parseJSON(a):a:f):a
}catch(e){return a
}},camelize:function(b){return b.replace(/-+(.)?/g,function(d,c){return c?c.toUpperCase():""
})
},dasherize:function(b){return b.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()
},warn:function(){window.console&&"function"==typeof window.console.warn&&window.console.warn.apply(window.console,arguments)
},warnOnce:function(b){Z[b]||(Z[b]=!0,this.warn.apply(this,arguments))
},_resetWarnings:function(){Z={}
},trimString:function(b){return b.replace(/^\s+|\s+$/g,"")
},objectCreate:Object.create||function(){var b=function(){};
return function(a){if(arguments.length>1){throw Error("Second argument not supported")
}if("object"!=typeof a){throw TypeError("Argument must be an object")
}b.prototype=a;
var d=new b;
return b.prototype=null,d
}
}()},X={namespace:"data-parsley-",inputs:"input, textarea, select",excluded:"input[type=button], input[type=submit], input[type=reset], input[type=hidden]",priorityEnabled:!0,multiple:null,group:null,uiEnabled:!0,validationThreshold:3,focus:"first",trigger:!1,errorClass:"parsley-error",successClass:"parsley-success",classHandler:function(){},errorsContainer:function(){},errorsWrapper:'<ul class="parsley-errors-list"></ul>',errorTemplate:"<li></li>"},W=function(){};
W.prototype={asyncSupport:!0,actualizeOptions:function(){return Y.attr(this.$element,this.options.namespace,this.domOptions),this.parent&&this.parent.actualizeOptions&&this.parent.actualizeOptions(),this
},_resetOptions:function(d){this.domOptions=Y.objectCreate(this.parent.options),this.options=Y.objectCreate(this.domOptions);
for(var c in d){d.hasOwnProperty(c)&&(this.options[c]=d[c])
}this.actualizeOptions()
},_listeners:null,on:function(e,d){this._listeners=this._listeners||{};
var f=this._listeners[e]=this._listeners[e]||[];
return f.push(d),this
},subscribe:function(a,d){ad.listenTo(this,a.toLowerCase(),d)
},off:function(f,e){var h=this._listeners&&this._listeners[f];
if(h){if(e){for(var g=h.length;
g--;
){h[g]===e&&h.splice(g,1)
}}else{delete this._listeners[f]
}}return this
},unsubscribe:function(a){ad.unsubscribeTo(this,a.toLowerCase())
},trigger:function(g,f){f=f||this;
var j,i=this._listeners&&this._listeners[g];
if(i){for(var h=i.length;
h--;
){if(j=i[h].call(f,f),j===!1){return j
}}}return this.parent?this.parent.trigger(g,f):!0
},reset:function(){if("ParsleyForm"!==this.__class__){return this._trigger("reset")
}for(var b=0;
b<this.fields.length;
b++){this.fields[b]._trigger("reset")
}this._trigger("reset")
},destroy:function(){if("ParsleyForm"!==this.__class__){return this.$element.removeData("Parsley"),this.$element.removeData("ParsleyFieldMultiple"),void this._trigger("destroy")
}for(var b=0;
b<this.fields.length;
b++){this.fields[b].destroy()
}this.$element.removeData("Parsley"),this._trigger("destroy")
},asyncIsValid:function(){return Y.warnOnce("asyncIsValid is deprecated; please use whenIsValid instead"),this.whenValid.apply(this,arguments)
},_findRelatedMultiple:function(){return this.parent.$element.find("["+this.options.namespace+'multiple="'+this.options.multiple+'"]')
}};
var V={string:function(b){return b
},integer:function(b){if(isNaN(b)){throw'Requirement is not an integer: "'+b+'"'
}return parseInt(b,10)
},number:function(b){if(isNaN(b)){throw'Requirement is not a number: "'+b+'"'
}return parseFloat(b)
},reference:function(a){var d=ad(a);
if(0===d.length){throw'No such reference: "'+a+'"'
}return d
},"boolean":function(b){return"false"!==b
},object:function(b){return Y.deserializeValue(b)
},regexp:function(d){var c="";
return/^\/.*\/(?:[gimy]*)$/.test(d)&&(c=d.replace(/.*\/([gimy]*)$/,"$1"),d=d.replace(new RegExp("^/(.*?)/"+c+"$"),"$1")),new RegExp(d,c)
}},U=function(f,e){var h=f.match(/^\s*\[(.*)\]\s*$/);
if(!h){throw'Requirement is not an array: "'+f+'"'
}var g=h[1].split(",").map(Y.trimString);
if(g.length!==e){throw"Requirement has "+g.length+" values when "+e+" are needed"
}return g
},T=function(e,d){var f=V[e||"string"];
if(!f){throw'Unknown requirement specification: "'+e+'"'
}return f(d)
},S=function(i,h,n){var m=null,l={};
for(var k in i){if(k){var j=n(k);
"string"==typeof j&&(j=T(i[k],j)),l[k]=j
}else{m=T(i[k],h)
}}return[m,l]
},R=function(a){ad.extend(!0,this,a)
};
R.prototype={validate:function(a,d){if(this.fn){return arguments.length>3&&(d=[].slice.call(arguments,1,-1)),this.fn.call(this,a,d)
}if(ad.isArray(a)){if(!this.validateMultiple){throw"Validator `"+this.name+"` does not handle multiple values"
}return this.validateMultiple.apply(this,arguments)
}if(this.validateNumber){return isNaN(a)?!1:(a=parseFloat(a),this.validateNumber.apply(this,arguments))
}if(this.validateString){return this.validateString.apply(this,arguments)
}throw"Validator `"+this.name+"` only handles multiple values"
},parseRequirements:function(a,j){if("string"!=typeof a){return ad.isArray(a)?a:[a]
}var i=this.requirementType;
if(ad.isArray(i)){for(var h=U(a,i.length),g=0;
g<h.length;
g++){h[g]=T(i[g],h[g])
}return h
}return ad.isPlainObject(i)?S(i,a,j):[T(i,a)]
},requirementType:"string",priority:2};
var Q=function(d,c){this.__class__="ParsleyValidatorRegistry",this.locale="en",this.init(d||{},c||{})
},P={email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,number:/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/,integer:/^-?\d+$/,digits:/^\d+$/,alphanum:/^\w+$/i,url:new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$","i")};
P.range=P.number,Q.prototype={init:function(a,f){this.catalog=f,this.validators=ad.extend({},this.validators);
for(var e in a){this.addValidator(e,a[e].fn,a[e].priority)
}window.Parsley.trigger("parsley:validator:init")
},setLocale:function(b){if("undefined"==typeof this.catalog[b]){throw new Error(b+" is not available in the catalog")
}return this.locale=b,this
},addCatalog:function(e,d,f){return"object"==typeof d&&(this.catalog[e]=d),!0===f?this.setLocale(e):this
},addMessage:function(e,d,f){return"undefined"==typeof this.catalog[e]&&(this.catalog[e]={}),this.catalog[e][d.toLowerCase()]=f,this
},addValidator:function(b){if(this.validators[b]){Y.warn('Validator "'+b+'" is already defined.')
}else{if(X.hasOwnProperty(b)){return void Y.warn('"'+b+'" is a restricted keyword and is not a valid validator name.')
}}return this._setValidator.apply(this,arguments)
},updateValidator:function(b){return this.validators[b]?this._setValidator(this,arguments):(Y.warn('Validator "'+b+'" is not already defined.'),this.addValidator.apply(this,arguments))
},removeValidator:function(b){return this.validators[b]||Y.warn('Validator "'+b+'" is not defined.'),delete this.validators[b],this
},_setValidator:function(f,e,h){"object"!=typeof e&&(e={fn:e,priority:h}),e.validate||(e=new R(e)),this.validators[f]=e;
for(var g in e.messages||{}){this.addMessage(g,f,e.messages[g])
}return this
},getErrorMessage:function(e){var d;
if("type"===e.name){var f=this.catalog[this.locale][e.name]||{};
d=f[e.requirements]
}else{d=this.formatMessage(this.catalog[this.locale][e.name],e.requirements)
}return d||this.catalog[this.locale].defaultMessage||this.catalog.en.defaultMessage
},formatMessage:function(e,d){if("object"==typeof d){for(var f in d){e=this.formatMessage(e,d[f])
}return e
}return"string"==typeof e?e.replace(new RegExp("%s","i"),d):""
},validators:{notblank:{validateString:function(b){return/\S/.test(b)
},priority:2},required:{validateMultiple:function(b){return b.length>0
},validateString:function(b){return/\S/.test(b)
},priority:512},type:{validateString:function(e,d){var f=P[d];
if(!f){throw new Error("validator type `"+d+"` is not supported")
}return f.test(e)
},priority:256},pattern:{validateString:function(d,c){return c.test(d)
},requirementType:"regexp",priority:64},minlength:{validateString:function(d,c){return d.length>=c
},requirementType:"integer",priority:30},maxlength:{validateString:function(d,c){return d.length<=c
},requirementType:"integer",priority:30},length:{validateString:function(e,d,f){return e.length>=d&&e.length<=f
},requirementType:["integer","integer"],priority:30},mincheck:{validateMultiple:function(d,c){return d.length>=c
},requirementType:"integer",priority:30},maxcheck:{validateMultiple:function(d,c){return d.length<=c
},requirementType:"integer",priority:30},check:{validateMultiple:function(e,d,f){return e.length>=d&&e.length<=f
},requirementType:["integer","integer"],priority:30},min:{validateNumber:function(d,c){return d>=c
},requirementType:"number",priority:30},max:{validateNumber:function(d,c){return c>=d
},requirementType:"number",priority:30},range:{validateNumber:function(e,d,f){return e>=d&&f>=e
},requirementType:["number","number"],priority:30},equalto:{validateString:function(a,f){var e=ad(f);
return e.length?a===e.val():a===f
},priority:256}}};
var O=function(){this.__class__="ParsleyUI"
};
O.prototype={listen:function(){var b=this;
return window.Parsley.on("form:init",function(){b.setupForm(this)
}).on("field:init",function(){b.setupField(this)
}).on("field:validated",function(){b.reflow(this)
}).on("form:validated",function(){b.focus(this)
}).on("field:reset",function(){b.reset(this)
}).on("form:destroy",function(){b.destroy(this)
}).on("field:destroy",function(){b.destroy(this)
}),this
},reflow:function(d){if("undefined"!=typeof d._ui&&!1!==d._ui.active){var c=this._diff(d.validationResult,d._ui.lastValidationResult);
d._ui.lastValidationResult=d.validationResult,d._ui.validatedOnce=!0,this.manageStatusClass(d),this.manageErrorsMessages(d,c),this.actualizeTriggers(d),(c.kept.length||c.added.length)&&!0!==d._ui.failedOnce&&this.manageFailingFieldTrigger(d)
}},getErrorsMessages:function(e){if(!0===e.validationResult){return[]
}for(var d=[],f=0;
f<e.validationResult.length;
f++){d.push(this._getErrorMessage(e,e.validationResult[f].assert))
}return d
},manageStatusClass:function(b){b.hasConstraints()&&b.needsValidation()&&!0===b.validationResult?this._successClass(b):b.validationResult.length>0?this._errorClass(b):this._resetClass(b)
},manageErrorsMessages:function(a,f){if("undefined"==typeof a.options.errorsMessagesDisabled){if("undefined"!=typeof a.options.errorMessage){return f.added.length||f.kept.length?(this._insertErrorWrapper(a),0===a._ui.$errorsWrapper.find(".parsley-custom-error-message").length&&a._ui.$errorsWrapper.append(ad(a.options.errorTemplate).addClass("parsley-custom-error-message")),a._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(a.options.errorMessage)):a._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove()
}for(var e=0;
e<f.removed.length;
e++){this.removeError(a,f.removed[e].assert.name,!0)
}for(e=0;
e<f.added.length;
e++){this.addError(a,f.added[e].assert.name,void 0,f.added[e].assert,!0)
}for(e=0;
e<f.kept.length;
e++){this.updateError(a,f.kept[e].assert.name,void 0,f.kept[e].assert,!0)
}}},addError:function(a,j,i,h,g){this._insertErrorWrapper(a),a._ui.$errorsWrapper.addClass("filled").append(ad(a.options.errorTemplate).addClass("parsley-"+j).html(i||this._getErrorMessage(a,h))),!0!==g&&this._errorClass(a)
},updateError:function(g,f,j,i,h){g._ui.$errorsWrapper.addClass("filled").find(".parsley-"+f).html(j||this._getErrorMessage(g,i)),!0!==h&&this._errorClass(g)
},removeError:function(e,d,f){e._ui.$errorsWrapper.removeClass("filled").find(".parsley-"+d).remove(),!0!==f&&this.manageStatusClass(e)
},focus:function(e){if(e._focusedField=null,!0===e.validationResult||"none"===e.options.focus){return null
}for(var d=0;
d<e.fields.length;
d++){var f=e.fields[d];
if(!0!==f.validationResult&&f.validationResult.length>0&&"undefined"==typeof f.options.noFocus&&(e._focusedField=f.$element,"first"===e.options.focus)){break
}}return null===e._focusedField?null:e._focusedField.focus()
},_getErrorMessage:function(e,d){var f=d.name+"Message";
return"undefined"!=typeof e.options[f]?window.Parsley.formatMessage(e.options[f],d.requirements):window.Parsley.getErrorMessage(d)
},_diff:function(j,i,p){for(var o=[],n=[],m=0;
m<j.length;
m++){for(var l=!1,k=0;
k<i.length;
k++){if(j[m].assert.name===i[k].assert.name){l=!0;
break
}}l?n.push(j[m]):o.push(j[m])
}return{kept:n,added:o,removed:p?[]:this._diff(i,j,!0).added}
},setupForm:function(a){a.$element.on("submit.Parsley",!1,ad.proxy(a.onSubmitValidate,a)),!1!==a.options.uiEnabled&&a.$element.attr("novalidate","")
},setupField:function(a){var d={active:!1};
!1!==a.options.uiEnabled&&(d.active=!0,a.$element.attr(a.options.namespace+"id",a.__id__),d.$errorClassHandler=this._manageClassHandler(a),d.errorsWrapperId="parsley-id-"+(a.options.multiple?"multiple-"+a.options.multiple:a.__id__),d.$errorsWrapper=ad(a.options.errorsWrapper).attr("id",d.errorsWrapperId),d.lastValidationResult=[],d.validatedOnce=!1,d.validationInformationVisible=!1,a._ui=d,this.actualizeTriggers(a))
},_manageClassHandler:function(a){if("string"==typeof a.options.classHandler&&ad(a.options.classHandler).length){return ad(a.options.classHandler)
}var d=a.options.classHandler(a);
return"undefined"!=typeof d&&d.length?d:!a.options.multiple||a.$element.is("select")?a.$element:a.$element.parent()
},_insertErrorWrapper:function(a){var f;
if(0!==a._ui.$errorsWrapper.parent().length){return a._ui.$errorsWrapper.parent()
}if("string"==typeof a.options.errorsContainer){if(ad(a.options.errorsContainer).length){return ad(a.options.errorsContainer).append(a._ui.$errorsWrapper)
}Y.warn("The errors container `"+a.options.errorsContainer+"` does not exist in DOM")
}else{"function"==typeof a.options.errorsContainer&&(f=a.options.errorsContainer(a))
}if("undefined"!=typeof f&&f.length){return f.append(a._ui.$errorsWrapper)
}var e=a.$element;
return a.options.multiple&&(e=e.parent()),e.after(a._ui.$errorsWrapper)
},actualizeTriggers:function(a){var f=a.$element;
if(a.options.multiple&&(f=ad("["+a.options.namespace+'multiple="'+a.options.multiple+'"]')),f.off(".Parsley"),!1!==a.options.trigger){var e=a.options.trigger.replace(/^\s+/g,"").replace(/\s+$/g,"");
""!==e&&f.on(e.split(" ").join(".Parsley ")+".Parsley",ad.proxy("function"==typeof a.eventValidate?a.eventValidate:this.eventValidate,a))
}},eventValidate:function(b){new RegExp("key").test(b.type)&&!this._ui.validationInformationVisible&&this.getValue().length<=this.options.validationThreshold||(this._ui.validatedOnce=!0,this.validate())
},manageFailingFieldTrigger:function(a){return a._ui.failedOnce=!0,a.options.multiple&&ad("["+a.options.namespace+'multiple="'+a.options.multiple+'"]').each(function(){return new RegExp("change","i").test(ad(this).parsley().options.trigger||"")?void 0:ad(this).on("change.ParsleyFailedOnce",!1,ad.proxy(a.validate,a))
}),a.$element.is("select")&&!new RegExp("change","i").test(a.options.trigger||"")?a.$element.on("change.ParsleyFailedOnce",!1,ad.proxy(a.validate,a)):new RegExp("keyup","i").test(a.options.trigger||"")?void 0:a.$element.on("keyup.ParsleyFailedOnce",!1,ad.proxy(a.validate,a))
},reset:function(b){this.actualizeTriggers(b),b.$element.off(".ParsleyFailedOnce"),"undefined"!=typeof b._ui&&"ParsleyForm"!==b.__class__&&(b._ui.$errorsWrapper.removeClass("filled").children().remove(),this._resetClass(b),b._ui.validatedOnce=!1,b._ui.lastValidationResult=[],b._ui.validationInformationVisible=!1,b._ui.failedOnce=!1)
},destroy:function(b){this.reset(b),"ParsleyForm"!==b.__class__&&("undefined"!=typeof b._ui&&b._ui.$errorsWrapper.remove(),delete b._ui)
},_successClass:function(b){b._ui.validationInformationVisible=!0,b._ui.$errorClassHandler.removeClass(b.options.errorClass).addClass(b.options.successClass)
},_errorClass:function(b){b._ui.validationInformationVisible=!0,b._ui.$errorClassHandler.removeClass(b.options.successClass).addClass(b.options.errorClass)
},_resetClass:function(b){b._ui.$errorClassHandler.removeClass(b.options.successClass).removeClass(b.options.errorClass)
}};
var M=function(a,f,e){this.__class__="ParsleyForm",this.__id__=Y.generateID(),this.$element=ad(a),this.domOptions=f,this.options=e,this.parent=window.Parsley,this.fields=[],this.validationResult=null
},K={pending:null,resolved:!0,rejected:!1};
M.prototype={onSubmitValidate:function(d){var c=this;
if(!0!==d.parsley){return d.stopImmediatePropagation(),d.preventDefault(),this.whenValidate(void 0,void 0,d).done(function(){c._submit()
}).always(function(){c._submitSource=null
}),this
}},_submit:function(){!1!==this._trigger("submit")&&(this.$element.find(".parsley_synthetic_submit_button").remove(),this._submitSource&&ad('<input class=".parsley_synthetic_submit_button" type="hidden">').attr("name",this._submitSource.name).attr("value",this._submitSource.value).appendTo(this.$element),this.$element.trigger(ad.extend(ad.Event("submit"),{parsley:!0})))
},validate:function(e,d,f){return K[this.whenValidate(e,d,f).state()]
},whenValidate:function(a,j,i){var h=this;
this.submitEvent=i,this.validationResult=!0,this._trigger("validate"),this._refreshFields();
var g=this._withoutReactualizingFormOptions(function(){return ad.map(this.fields,function(b){return !a||h._isFieldInGroup(b,a)?b.whenValidate(j):void 0
})
});
return ad.when.apply(ad,g).done(function(){h._trigger("success")
}).fail(function(){h.validationResult=!1,h._trigger("error")
}).always(function(){h._trigger("validated")
})
},isValid:function(d,c){return K[this.whenValid(d,c).state()]
},whenValid:function(a,h){var g=this;
this._refreshFields();
var f=this._withoutReactualizingFormOptions(function(){return ad.map(this.fields,function(b){return !a||g._isFieldInGroup(b,a)?b.whenValid(h):void 0
})
});
return ad.when.apply(ad,f)
},_isFieldInGroup:function(a,d){return ad.isArray(a.options.group)?-1!==ad.inArray(d,a.options.group):a.options.group===d
},_refreshFields:function(){return this.actualizeOptions()._bindFields()
},_bindFields:function(){var a=this,d=this.fields;
return this.fields=[],this.fieldsMappedById={},this._withoutReactualizingFormOptions(function(){this.$element.find(this.options.inputs).not(this.options.excluded).each(function(){var b=new N.Factory(this,{},a);
"ParsleyField"!==b.__class__&&"ParsleyFieldMultiple"!==b.__class__||!0===b.options.excluded||"undefined"==typeof a.fieldsMappedById[b.__class__+"-"+b.__id__]&&(a.fieldsMappedById[b.__class__+"-"+b.__id__]=b,a.fields.push(b))
}),ad(d).not(a.fields).each(function(){this._trigger("reset")
})
}),this
},_withoutReactualizingFormOptions:function(e){var d=this.actualizeOptions;
this.actualizeOptions=function(){return this
};
var f=e.call(this);
return this.actualizeOptions=d,f
},_trigger:function(b){return b="form:"+b,this.trigger.apply(this,arguments)
}};
var J=function(a,n,m,l,k){if(!new RegExp("ParsleyField").test(a.__class__)){throw new Error("ParsleyField or ParsleyFieldMultiple instance expected")
}var j=window.Parsley._validatorRegistry.validators[n],i=new R(j);
ad.extend(this,{validator:i,name:n,requirements:m,priority:l||a.options[n+"Priority"]||i.priority,isDomConstraint:!0===k}),this._parseRequirements(a.options)
},I=function(d){var c=d[0].toUpperCase();
return c+d.slice(1)
};
J.prototype={validate:function(e,d){var f=this.requirementList.slice(0);
return f.unshift(e),f.push(d),this.validator.validate.apply(this.validator,f)
},_parseRequirements:function(d){var c=this;
this.requirementList=this.validator.parseRequirements(this.requirements,function(a){return d[c.name+I(a)]
})
}};
var H=function(a,h,g,f){this.__class__="ParsleyField",this.__id__=Y.generateID(),this.$element=ad(a),"undefined"!=typeof f&&(this.parent=f),this.options=g,this.domOptions=h,this.constraints=[],this.constraintsByName={},this.validationResult=[],this._bindConstraints()
},K={pending:null,resolved:!0,rejected:!1};
H.prototype={validate:function(d){var c=this.whenValidate(d);
switch(c.state()){case"pending":return null;
case"resolved":return !0;
case"rejected":return this.validationResult
}},whenValidate:function(d){var c=this;
return this.value=this.getValue(),this._trigger("validate"),this.whenValid(d,this.value).done(function(){c._trigger("success")
}).fail(function(){c._trigger("error")
}).always(function(){c._trigger("validated")
})
},hasConstraints:function(){return 0!==this.constraints.length
},needsValidation:function(b){return"undefined"==typeof b&&(b=this.getValue()),b.length||this._isRequired()||"undefined"!=typeof this.options.validateIfEmpty?!0:!1
},isValid:function(d,c){return K[this.whenValid(d,c).state()]
},whenValid:function(a,j){if(this.refreshConstraints(),this.validationResult=!0,!this.hasConstraints()){return ad.when()
}if(("undefined"==typeof j||null===j)&&(j=this.getValue()),!this.needsValidation(j)&&!0!==a){return ad.when()
}var i=this._getGroupedConstraints(),h=[],g=this;
return ad.each(i,function(c,f){var e=ad.when.apply(ad,ad.map(f,ad.proxy(g,"_validateConstraint",j)));
return h.push(e),"rejected"===e.state()?!1:void 0
}),ad.when.apply(ad,h)
},_validateConstraint:function(a,h){var g=this,f=h.validate(a,this);
return !1===f&&(f=ad.Deferred().reject()),ad.when(f).fail(function(){!0===g.validationResult&&(g.validationResult=[]),g.validationResult.push({assert:h})
})
},getValue:function(){var b;
return b="function"==typeof this.options.value?this.options.value(this):"undefined"!=typeof this.options.value?this.options.value:this.$element.val(),"undefined"==typeof b||null===b?"":this._handleWhitespace(b)
},refreshConstraints:function(){return this.actualizeOptions()._bindConstraints()
},addConstraint:function(g,f,j,i){if(window.Parsley._validatorRegistry.validators[g]){var h=new J(this,g,f,j,i);
"undefined"!==this.constraintsByName[h.name]&&this.removeConstraint(h.name),this.constraints.push(h),this.constraintsByName[h.name]=h
}return this
},removeConstraint:function(d){for(var c=0;
c<this.constraints.length;
c++){if(d===this.constraints[c].name){this.constraints.splice(c,1);
break
}}return delete this.constraintsByName[d],this
},updateConstraint:function(e,d,f){return this.removeConstraint(e).addConstraint(e,d,f)
},_bindConstraints:function(){for(var f=[],e={},h=0;
h<this.constraints.length;
h++){!1===this.constraints[h].isDomConstraint&&(f.push(this.constraints[h]),e[this.constraints[h].name]=this.constraints[h])
}this.constraints=f,this.constraintsByName=e;
for(var g in this.options){this.addConstraint(g,this.options[g],void 0,!0)
}return this._bindHtml5Constraints()
},_bindHtml5Constraints:function(){(this.$element.hasClass("required")||this.$element.attr("required"))&&this.addConstraint("required",!0,void 0,!0),"string"==typeof this.$element.attr("pattern")&&this.addConstraint("pattern",this.$element.attr("pattern"),void 0,!0),"undefined"!=typeof this.$element.attr("min")&&"undefined"!=typeof this.$element.attr("max")?this.addConstraint("range",[this.$element.attr("min"),this.$element.attr("max")],void 0,!0):"undefined"!=typeof this.$element.attr("min")?this.addConstraint("min",this.$element.attr("min"),void 0,!0):"undefined"!=typeof this.$element.attr("max")&&this.addConstraint("max",this.$element.attr("max"),void 0,!0),"undefined"!=typeof this.$element.attr("minlength")&&"undefined"!=typeof this.$element.attr("maxlength")?this.addConstraint("length",[this.$element.attr("minlength"),this.$element.attr("maxlength")],void 0,!0):"undefined"!=typeof this.$element.attr("minlength")?this.addConstraint("minlength",this.$element.attr("minlength"),void 0,!0):"undefined"!=typeof this.$element.attr("maxlength")&&this.addConstraint("maxlength",this.$element.attr("maxlength"),void 0,!0);
var b=this.$element.attr("type");
return"undefined"==typeof b?this:"number"===b?"undefined"==typeof this.$element.attr("step")||0===parseFloat(this.$element.attr("step"))%1?this.addConstraint("type","integer",void 0,!0):this.addConstraint("type","number",void 0,!0):/^(email|url|range)$/i.test(b)?this.addConstraint("type",b,void 0,!0):this
},_isRequired:function(){return"undefined"==typeof this.constraintsByName.required?!1:!1!==this.constraintsByName.required.requirements
},_trigger:function(b){return b="field:"+b,this.trigger.apply(this,arguments)
},_handleWhitespace:function(b){return !0===this.options.trimValue&&Y.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'),"squish"===this.options.whitespace&&(b=b.replace(/\s{2,}/g," ")),("trim"===this.options.whitespace||"squish"===this.options.whitespace||!0===this.options.trimValue)&&(b=Y.trimString(b)),b
},_getGroupedConstraints:function(){if(!1===this.options.priorityEnabled){return[this.constraints]
}for(var f=[],e={},h=0;
h<this.constraints.length;
h++){var g=this.constraints[h].priority;
e[g]||f.push(e[g]=[]),e[g].push(this.constraints[h])
}return f.sort(function(d,c){return c[0].priority-d[0].priority
}),f
}};
var G=function(){this.__class__="ParsleyFieldMultiple"
};
G.prototype={addElement:function(b){return this.$elements.push(b),this
},refreshConstraints:function(){var a;
if(this.constraints=[],this.$element.is("select")){return this.actualizeOptions()._bindConstraints(),this
}for(var f=0;
f<this.$elements.length;
f++){if(ad("html").has(this.$elements[f]).length){a=this.$elements[f].data("ParsleyFieldMultiple").refreshConstraints().constraints;
for(var e=0;
e<a.length;
e++){this.addConstraint(a[e].name,a[e].requirements,a[e].priority,a[e].isDomConstraint)
}}else{this.$elements.splice(f,1)
}}return this
},getValue:function(){if("undefined"!=typeof this.options.value){return this.options.value
}if(this.$element.is("input[type=radio]")){return this._findRelatedMultiple().filter(":checked").val()||""
}if(this.$element.is("input[type=checkbox]")){var a=[];
return this._findRelatedMultiple().filter(":checked").each(function(){a.push(ad(this).val())
}),a
}return this.$element.is("select")&&null===this.$element.val()?[]:this.$element.val()
},_init:function(){return this.$elements=[this.$element],this
}};
var F=function(a,h,g){this.$element=ad(a);
var f=this.$element.data("Parsley");
if(f){return"undefined"!=typeof g&&f.parent===window.Parsley&&(f.parent=g,f._resetOptions(f.options)),f
}if(!this.$element.length){throw new Error("You must bind Parsley on an existing element.")
}if("undefined"!=typeof g&&"ParsleyForm"!==g.__class__){throw new Error("Parent instance must be a ParsleyForm instance")
}return this.parent=g||window.Parsley,this.init(h)
};
F.prototype={init:function(b){return this.__class__="Parsley",this.__version__="2.2.0-rc1",this.__id__=Y.generateID(),this._resetOptions(b),this.$element.is("form")||Y.checkAttr(this.$element,this.options.namespace,"validate")&&!this.$element.is(this.options.inputs)?this.bind("parsleyForm"):this.isMultiple()?this.handleMultiple():this.bind("parsleyField")
},isMultiple:function(){return this.$element.is("input[type=radio], input[type=checkbox]")||this.$element.is("select")&&"undefined"!=typeof this.$element.attr("multiple")
},handleMultiple:function(){var a,j,i=this;
if(this.options.multiple||("undefined"!=typeof this.$element.attr("name")&&this.$element.attr("name").length?this.options.multiple=a=this.$element.attr("name"):"undefined"!=typeof this.$element.attr("id")&&this.$element.attr("id").length&&(this.options.multiple=this.$element.attr("id"))),this.$element.is("select")&&"undefined"!=typeof this.$element.attr("multiple")){return this.options.multiple=this.options.multiple||this.__id__,this.bind("parsleyFieldMultiple")
}if(!this.options.multiple){return Y.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.",this.$element),this
}this.options.multiple=this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g,""),"undefined"!=typeof a&&ad('input[name="'+a+'"]').each(function(){ad(this).is("input[type=radio], input[type=checkbox]")&&ad(this).attr(i.options.namespace+"multiple",i.options.multiple)
});
for(var h=this._findRelatedMultiple(),f=0;
f<h.length;
f++){if(j=ad(h.get(f)).data("Parsley"),"undefined"!=typeof j){this.$element.data("ParsleyFieldMultiple")||j.addElement(this.$element);
break
}}return this.bind("parsleyField",!0),j||this.bind("parsleyFieldMultiple")
},bind:function(a,f){var e;
switch(a){case"parsleyForm":e=ad.extend(new M(this.$element,this.domOptions,this.options),window.ParsleyExtend)._bindFields();
break;
case"parsleyField":e=ad.extend(new H(this.$element,this.domOptions,this.options,this.parent),window.ParsleyExtend);
break;
case"parsleyFieldMultiple":e=ad.extend(new H(this.$element,this.domOptions,this.options,this.parent),new G,window.ParsleyExtend)._init();
break;
default:throw new Error(a+"is not a supported Parsley type")
}return this.options.multiple&&Y.setAttr(this.$element,this.options.namespace,"multiple",this.options.multiple),"undefined"!=typeof f?(this.$element.data("ParsleyFieldMultiple",e),e):(this.$element.data("Parsley",e),e._trigger("init"),e)
}};
var E=ad({}),D=function(){Y.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")
},C="parsley:";
ad.listen=function(b,f){var c;
if(D(),"object"==typeof arguments[1]&&"function"==typeof arguments[2]&&(c=arguments[1],f=arguments[2]),"function"!=typeof arguments[1]){throw new Error("Wrong parameters")
}window.Parsley.on(ab(b),ac(f,c))
},ad.listenTo=function(b,f,c){if(D(),!(b instanceof H||b instanceof M)){throw new Error("Must give Parsley instance")
}if("string"!=typeof f||"function"!=typeof c){throw new Error("Wrong parameters")
}b.on(ab(f),ac(c))
},ad.unsubscribe=function(d,c){if(D(),"string"!=typeof d||"function"!=typeof c){throw new Error("Wrong arguments")
}window.Parsley.off(ab(d),c.parsleyAdaptedCallback)
},ad.unsubscribeTo=function(d,c){if(D(),!(d instanceof H||d instanceof M)){throw new Error("Must give Parsley instance")
}d.off(ab(c))
},ad.unsubscribeAll=function(a){D(),window.Parsley.off(ab(a)),ad("form,input,textarea,select").each(function(){var b=ad(this).data("Parsley");
b&&b.off(ab(a))
})
},ad.emit=function(f,c){D();
var h=c instanceof H||c instanceof M,g=Array.prototype.slice.call(arguments,h?2:1);
g.unshift(ab(f)),h||(c=window.Parsley),c.trigger.apply(c,g)
},window.ParsleyConfig=window.ParsleyConfig||{},window.ParsleyConfig.i18n=window.ParsleyConfig.i18n||{},window.ParsleyConfig.i18n.en=jQuery.extend(window.ParsleyConfig.i18n.en||{},{defaultMessage:"This value seems to be invalid.",type:{email:"This value should be a valid email.",url:"This value should be a valid url.",number:"This value should be a valid number.",integer:"This value should be a valid integer.",digits:"This value should be digits.",alphanum:"This value should be alphanumeric."},notblank:"This value should not be blank.",required:"This value is required.",pattern:"This value seems to be invalid.",min:"This value should be greater than or equal to %s.",max:"This value should be lower than or equal to %s.",range:"This value should be between %s and %s.",minlength:"This value is too short. It should have %s characters or more.",maxlength:"This value is too long. It should have %s characters or fewer.",length:"This value length is invalid. It should be between %s and %s characters long.",mincheck:"You must select at least %s choices.",maxcheck:"You must select %s choices or fewer.",check:"You must select between %s and %s choices.",equalto:"This value should be the same."}),"undefined"!=typeof window.ParsleyValidator&&window.ParsleyValidator.addCatalog("en",window.ParsleyConfig.i18n.en,!0);
var N=ad.extend(new W,{$element:ad(document),actualizeOptions:null,_resetOptions:null,Factory:F,version:"2.2.0-rc1"});
ad.extend(H.prototype,W.prototype),ad.extend(M.prototype,W.prototype),ad.extend(F.prototype,W.prototype),ad.fn.parsley=ad.fn.psly=function(a){if(this.length>1){var d=[];
return this.each(function(){d.push(ad(this).parsley(a))
}),d
}return ad(this).length?new F(this,a):void Y.warn("You must bind Parsley on an existing element.")
},"undefined"==typeof window.ParsleyExtend&&(window.ParsleyExtend={}),N.options=ad.extend(Y.objectCreate(X),window.ParsleyConfig),window.ParsleyConfig=N.options,window.Parsley=window.psly=N,window.ParsleyUtils=Y;
var L=window.Parsley._validatorRegistry=new Q(window.ParsleyConfig.validators,window.ParsleyConfig.i18n);
return window.ParsleyValidator={},ad.each("setLocale addCatalog addMessage getErrorMessage formatMessage addValidator updateValidator removeValidator".split(" "),function(a,d){window.Parsley[d]=ad.proxy(L,d),window.ParsleyValidator[d]=function(){return Y.warnOnce("Accessing the method `"+d+"` through ParsleyValidator is deprecated. Simply call `window.Parsley."+d+"(...)`"),window.Parsley[d].apply(window.Parsley,arguments)
}
}),window.ParsleyUI="function"==typeof window.ParsleyConfig.ParsleyUI?(new window.ParsleyConfig.ParsleyUI).listen():(new O).listen(),!1!==window.ParsleyConfig.autoBind&&ad(function(){ad("[data-parsley-validate]").length&&ad("[data-parsley-validate]").parsley()
}),window.Parsley
});