function bookBagCheckout(){var r={};
var h=true;
var d=$(".exam-copy-request-submitted");
var C="/us/higher-education/subject-catalog/book-bag-process/exam-copy-request-submitted.html";
var q="/us/en/support/instructor-access-request/existing-request-denied.html";
var l="/us/en/support/instructor-access-request/try-again.html";
if(localStorage.getItem("orderLines")){var j=localStorage.getItem("orderLines");
j=JSON.parse(j)
}else{j=[]
}$(".book-bag-checkout .continue-button").click(function(G){if(grecaptcha.getResponse().length===0){document.getElementById("verify-captcha-error").setAttribute("class","showError recaptcha-validation-error");
G.preventDefault()
}else{G.preventDefault();
var F="",I="",K="",E="",J="";
if($("select[name='institutionId']").val()==="school-not-listed"){$('.departments select[name="departmentId"]').removeAttr("required");
$('.departments select[name="departmentId"]').attr("aria-required",false);
$('.departments select[name="departmentId"]').attr("aria-invalid",false);
$('.disciplines select[name="disciplineId"]').removeAttr("required");
$('.disciplines select[name="disciplineId"]').attr("aria-required",false);
$('.disciplines select[name="disciplineId"]').attr("aria-invalid",false)
}if($(".book-bag-checkout .schools").css("display")=="none"){I=$('.book-bag-checkout input[name="institutionId"]').val();
F=""
}else{F=$('.book-bag-checkout select[name="institutionId"]').val();
I=""
}if($(".book-bag-checkout .departments").css("display")=="none"){E=$('.book-bag-checkout input[name="departmentId"]').val();
K=""
}else{K=$('.book-bag-checkout select[name="departmentId"]').val();
E=""
}if($(".book-bag-checkout .disciplines").css("display")=="none"){disciplineValue=$('.book-bag-checkout input[name="disciplineId"]').val()
}else{disciplineValue=$('.book-bag-checkout select[name="disciplineId"]').val()
}if($('.book-bag-checkout [name="contactApproval"]:checked').val()=="contact"){contactMe=true
}else{contactMe=false
}if($('select[name="country"]').val()=="US"&&$('select[name="role"]').val()=="Other"){J=$('.book-bag-checkout input[name="other-role"]').val()
}else{J=$('.book-bag-checkout select[name="role"]').val()
}r={address1:$('.book-bag-checkout [name="address1"]').val(),address2:$('.book-bag-checkout [name="address2"]').val(),addressType:$('.book-bag-checkout [name="addressDetail"]:checked').val(),cityTown:$('.book-bag-checkout [name="city"]').val(),comments:$('.book-bag-checkout [name="comments"]').val(),customerType:$('.book-bag-checkout [name="customerType"]').val(),departmentDisciplineId:disciplineValue,departmentId:K,departmentOther:E,institutionCountryId:$('.book-bag-checkout [name="country"]').val(),institutionId:F,institutionOther:I,marketingContactPreference:contactMe,marketingOtherEmail:contactMe,marketingOtherPhone:contactMe,marketingOtherPost:contactMe,marketingPearsonEmail:contactMe,marketingPearsonPhone:contactMe,marketingPearsonPost:contactMe,officeHours:$('.book-bag-checkout [name="officeHours"]').val(),orderLines:j,postcode:$('.book-bag-checkout [name="postalCode"]').val(),requesterEmail:$('.book-bag-checkout [name="emailAddress"]').val().toLowerCase(),requesterFirstName:$('.book-bag-checkout [name="firstName"]').val(),requesterIpAddress:"",requesterLastName:$('.book-bag-checkout [name="lastName"]').val(),requesterOfficePhone:$('.book-bag-checkout [name="officePhone"]').val(),requesterRole:J,requesterSuffix:$('.book-bag-checkout [name="suffix"]').val(),requesterTitle:$('.book-bag-checkout [name="honorific"]').val(),requesterType:[$('.book-bag-checkout [name="iAm"]:checked').val(),],requesterTypeOther:$('.book-bag-checkout [name="otherCheckboxDetails"]').val(),state:$('.book-bag-checkout [name="state"]').val()};
if(DMCP.FormValidator.validateOnSubmit($(".book-bag-checkout"),G)){var D={lines:13,length:28,width:14,radius:42,scale:1,corners:1,color:"#000",opacity:0.25,rotate:0,direction:1,speed:1,trail:60,fps:20,zIndex:2000000000,className:"spinner",top:"50%",left:"50%",shadow:false,hwaccel:false,position:"fixed"};
$("body").attr("id","book-bag-spinner");
var H=document.getElementById("book-bag-spinner");
var L=new Spinner(D).spin(H);
if($('.book-bag-checkout [name="country"]').val()=="US"&&($('.book-bag-checkout [name="customerType"]').val()!="Corporate"||$('.book-bag-checkout [name="customerType"]').val()!="High School")){if(h){console.log("New Flow--->>>")
}w.examContactLookup($('.book-bag-checkout [name="emailAddress"]').val().toLowerCase())
}else{console.log("Old Flow--->>>");
$.ajax({type:"POST",contentType:"application/json",data:JSON.stringify(r),dataType:"JSON",url:HEProxyServer+"/api/instructors/examcopy"}).done(function(M){$(".spinner").hide();
localStorage.setItem("examCopyRequest",JSON.stringify(r));
window.open(C,"_self")
}).fail(function(M){console.log("error")
})
}}else{console.log("form not valid");
setTimeout(function(){var M=$(".book-bag-checkout form > .parsys > div");
M.each(function(){var P=$(this),N=P.find(".has-error");
if(!(P.css("display")=="none")){if(N.length>0){var O=P.offset().top;
console.log(O);
$("html,body").animate({scrollTop:O});
return false
}}})
},500)
}}});
if(d.length){if(!localStorage.getItem("examCopyRequest")){localStorage.setItem("examCopyRequest"," ")
}var v=localStorage.getItem("examCopyRequest");
var m=JSON.parse(v);
var f=document.querySelector(".exam-copy-request-submitted .col-sm-8");
for(var b in m){if(b=="requesterType"){var z=m[b][0]
}else{var z=m[b]
}if(b=="customerType"){var B=$(".institution p").text();
z=k(z);
B=B+" "+z;
$(".institution p").html(B)
}if(b=="requesterTitle"){var B=$(".salutation p").text();
z=k(z);
B=B+" "+z;
$(".salutation p").html(B)
}if(b=="requesterFirstName"){var B=$(".first-name p").text();
z=k(z);
B=B+" "+z;
$(".first-name p").html(B)
}if(b=="requesterLastName"){var B=$(".last-name p").text();
z=k(z);
B=B+" "+z;
$(".last-name p").html(B)
}if(b=="requesterSuffix"){var B=$(".suffix p").text();
z=k(z);
B=B+" "+z;
$(".suffix p").html(B)
}if(b=="requesterRole"){var B=$(".role p").text();
z=k(z);
B=B+" "+z;
$(".role p").html(B)
}if(b=="requesterEmail"){var B=$(".email p").text();
z=k(z);
z=z.toLowerCase();
B=B+" "+z;
$(".email p").html(B)
}if(b=="requesterType"){var B=$(".iam p").text();
z=k(z);
B=B+" "+z;
$(".iam p").html(B)
}if(b=="officeHours"){var B=$(".office-hours p").text();
z=k(z);
B=B+" "+z;
$(".office-hours p").html(B)
}if(b=="requesterOfficePhone"){var B=$(".office-phone p").text();
z=k(z);
B=B+" "+z;
$(".office-phone p").html(B)
}if(b=="institutionId"){var B=$(".school p").text();
z=k(z);
B=B+" "+z;
$(".school p").html(B)
}if(b=="departmentId"){var B=$(".department-name p").text();
z=k(z);
B=B+" "+z;
$(".department-name p").html(B)
}if(b=="addressType"){var B=$(".address-type p").text();
z=k(z);
B=B+" "+z;
$(".address-type p").html(B)
}if(b=="address1"){var B=$(".address1 p").text();
z=k(z);
B=B+" "+z;
$(".address1 p").html(B)
}if(b=="address2"){var B=$(".address2 p").text();
z=k(z);
B=B+" "+z;
$(".address2 p").html(B)
}if(b=="cityTown"){var B=$(".city p").text();
z=k(z);
B=B+" "+z;
$(".city p").html(B)
}if(b=="state"){var B=$(".state p").text();
z=k(z);
B=B+" "+z;
$(".state p").html(B)
}if(b=="institutionCountryId"){var B=$(".country p").text();
z=k(z);
B=B+" "+z;
$(".country p").html(B)
}if(b=="postcode"){var B=$(".zip-code p").text();
B=B+" "+z;
$(".zip-code p").html(B)
}if(b=="requesterIpAddress"){var B=$(".ip-address p").text();
z=k(z);
B=B+" "+z;
$(".ip-address p").html(B)
}if(b=="comments"){var B=$(".comments p").text();
z=k(z);
B=B+" "+z;
$(".comments p").html(B)
}if(b=="marketingContactPreference"){var B=$(".may-we-contact p").text();
z=z;
B=B+" "+z;
$(".may-we-contact p").html(B)
}}if(localStorage.getItem("bookBagItems")){var p=[];
var y=localStorage.getItem("bookBagItems");
var u=JSON.parse(y);
var n=parseInt(u.books.length);
var g=document.createElement("p");
g.classList.add("request-product");
g.innerHTML="Requested Product(s): ";
f.appendChild(g);
for(var x=0;
x<n;
x++){var a={};
a.isbn=u.books[x].isbn13;
a.pgmId=u.books[x].itemId;
p.push(a);
var c=document.createElement("span");
c.innerHTML=(x+1)+". ";
f.appendChild(c);
for(var b in u.books[x]){var e=document.createElement("p"),t=document.createElement("span"),s=document.createElement("span");
s.innerHTML=u.books[x][b];
b=k(b);
t.innerHTML=b+": ";
e.appendChild(t).appendChild(s);
f.appendChild(e)
}}var A={books:[]};
var o={};
if(typeof digitalData!="undefined"){digitalData.examCopy=p
}localStorage.setItem("bookBagItems",JSON.stringify(A));
localStorage.setItem("examCopyRequest",JSON.stringify(o));
localStorage.removeItem("orderLines");
localStorage.removeItem("countryNameLabel");
localStorage.removeItem("countryNameValue");
localStorage.removeItem("customerTypeLabel");
localStorage.removeItem("customerTypeValue");
$(".book-bag-count-icon").remove()
}}function k(D){D=D.replace(/([A-Z])/g," $1");
D=D.toLowerCase();
D=D.charAt(0).toUpperCase()+D.slice(1);
return D
}var w={pmc2onecrmApiUrl:getGlobalProperty("pmc2onecrmApiUrl"),apiKey:getGlobalProperty("pmc2onecrmApiKey"),sheerIdApiUrl:getGlobalProperty("sheerIdApiUrl"),sendExCpyError:function(F,D,H){var F=F||"";
var D=D||"";
now=new Date;
var E=Intl.DateTimeFormat().resolvedOptions().timeZone||"";
var G={form:"Exam Copy",api:D,error:F,payload:H,userAgent:navigator.userAgent,time:now,timeZone:E};
if(h){console.log("Sending Error in "+D+"::"+F);
console.log("Error Payload--->",JSON.stringify(G))
}$(document).trigger("apiError",G)
},examContactLookup:function(D){$.ajax({type:"GET",url:w.pmc2onecrmApiUrl+"/lookup?q=SELECT+Id,FirstName,LastName,Email,Trust_Level__c,Validated_By__c,Validated_On__c+from+Contact+Where+Email='"+D+"'+LIMIT+1",dataType:"json",headers:{apikey:w.apiKey},timeout:15000}).done(function(E){if(h){console.log("ExamContactLookup success! Contacts Found :: "+E.totalSize)
}if(E.totalSize==1){w.examTrustLevelCheck(E.records[0])
}else{if($("select[name='institutionId']").val()!=="school-not-listed"){w.examCopySheerIdNoContactCall()
}else{console.log("pmc2onecrm.POSTLeadCall();");
w.POSTLeadCall(E)
}}}).fail(function(E){w.sendExCpyError(E,"Exam Copy Contact Look up",D);
$(".spinner").hide();
window.open(l,"_self")
})
},examTrustLevelCheck:function(K){var E;
if(h){console.log("Examining Contact record---->>>",K)
}if(!K){w.examCopySheerIdNoContactCall()
}else{if(["Low","Medium","High"].indexOf(K.Trust_Level__c)!=-1){if($('.book-bag-checkout [name="contactApproval"]:checked').val()=="contact"){contactApproval=false
}else{contactApproval=true
}var I={Trust_Level__c:K.Trust_Level__c,Global_Marketing_Unsubscribe__c:contactApproval};
var D=[];
if(localStorage.getItem("bookBagItems")&&localStorage.getItem("orderLines")){var F=localStorage.getItem("bookBagItems");
F=JSON.parse(F);
var N=localStorage.getItem("orderLines");
N=JSON.parse(N);
for(var J=0;
J<F.books.length;
J++){var H={attributes:{type:"Lead_Product__c",referenceId:"ref"+(J+2)},Status__c:"Requested",Requested_ISBN_10__c:F.books[J].isbn10,Requested_ISBN_13__c:F.books[J].isbn13,Requested_Authors__c:F.books[J].author,Requested_Title_Edition__c:F.books[J].title+" "+F.books[J].year,Requested_Publisher__c:F.books[J].imprint,Copyright_Date__c:new Date(F.books[J].year).toISOString().split("T")[0],Availability__c:F.books[J].titleStatus,Course__c:N[J].courseName,Term__c:N[J].term,Book_Adopted__c:N[J].isAdopted};
if(N[J].enrollment&&!isNaN(N[J].enrollment)){H.Enrollment__c=N[J].enrollment
}if(N[J].isAdopted=="false"&&N[J].decisionDate&&N[J].decisionDate!=""){H.Decision_Date__c=N[J].decisionDate
}if(N[J].isAdopted=="false"&&N[J].decisionMaker&&N[J].decisionMaker!=""){if(N[J].decisionMaker=="individual"){H.Adoption_Type__c="Individual Choice"
}else{H.Adoption_Type__c="Committee"
}}if(N[J].isAdopted=="false"&&N[J].bookInUse&&N[J].bookInUse!=""){H.Product_In_Use__c=N[J].bookInUse
}D.push(H)
}}var P="Managed";
if($('.book-bag-checkout [name="institutionId"] option:selected').attr("data-segmentCalc")){P=$('.book-bag-checkout [name="institutionId"] option:selected').attr("data-segmentCalc")
}var L="";
if($('.book-bag-checkout [name="disciplineId"] option:selected').attr("data-specality")&&$('.book-bag-checkout [name="disciplineId"] option:selected').attr("data-specality")!="null"){L=$('.book-bag-checkout [name="disciplineId"] option:selected').attr("data-specality")
}var G="";
$.each($("input[name='iAm']:checked"),function(){if($(this).val()=="inst"){if(G==""){G="Instructor"
}else{G="Instructor;"+G
}}else{if($(this).val()=="stud"){if(G==""){G="Student"
}else{G="Student;"+G
}}else{if($(this).val()=="pAuth"){if(G==""){G="Pearson author"
}else{G="Pearson author;"+G
}}else{if($(this).val()=="pReview"){if(G==""){G="Pearson reviewer"
}else{G="Pearson reviewer;"+G
}}else{if($(this).val()=="other"){if(G==""){G="Other"
}else{G="Other;"+G
}}}}}}});
var S="Pearson User";
if(K.Validated_By__c&&K.Validated_By__c!=""&&K.Validated_By__c!="null"){S=K.Validated_By__c
}var R=null;
if(K.Validated_On__c&&K.Validated_On__c!=""&&K.Validated_On__c!="null"){R=K.Validated_On__c
}var O=$('.book-bag-checkout [name="departmentId"] option:selected').val();
var Q="Department";
if((O&&O=="All Departments")||(O=="null")){O=null;
Q=""
}if($("select[name='institutionId']").val()==="school-not-listed"){E="Exam Copy-School not listed";
O=""
}else{E="Exam Copy"
}var M={records:[{attributes:{type:"Lead",referenceId:"ref1"},Salutation:$('.book-bag-checkout [name="honorific"]').val(),FirstName:$('.book-bag-checkout [name="firstName"]').val(),LastName:$('.book-bag-checkout [name="lastName"]').val(),Email:$('.book-bag-checkout [name="emailAddress"]').val().toLowerCase(),Phone:$('.book-bag-checkout [name="officePhone"]').val(),Status:"Open",Street:$('.book-bag-checkout [name="address1"]').val()+","+$('.book-bag-checkout [name="address2"]').val(),City:$('.book-bag-checkout [name="city"]').val(),State:$('.book-bag-checkout select[name="state"] option:selected').text(),Country:$('.book-bag-checkout select[name="country"] option:selected').text(),PostalCode:$('.book-bag-checkout [name="postalCode"]').val(),Trust_Level__c:K.Trust_Level__c,Parent_Account__c:$('.book-bag-checkout select[name="institutionId"]').val()!=="school-not-listed"?$('.book-bag-checkout select[name="institutionId"]').val():"",Account_Lookup__c:O,Contact_Lookup__c:K.Id,Department__c:$('.book-bag-checkout [name="departmentId"] option:selected').text(),Account_SheerID__c:$('.book-bag-checkout [name="institutionId"] option:selected').attr("data-sheerId"),LeadSource:"Online/Web",Enquiry_Type__c:E,Validated_On__c:R,Validated_By__c:S,Account_Segment__c:P,Requested_Specialty__c:L,Business_Unit__c:"US Field Sales",Account_Record_Type__c:"Organisation",Organisation_Type1__c:"Higher Education",Role__c:"Educator",Role_Detail__c:$('.book-bag-checkout [name="role"] option:selected').val(),Other_Role_Detail__c:$('.book-bag-checkout [name="other-role"]').val(),Sub_Type__c:Q,Company:$('.book-bag-checkout select[name="institutionId"] option:selected').text(),Market__c:"US",CurrencyIsoCode:"USD",Global_Marketing_Unsubscribe__c:contactApproval,Customer_Relationship__c:G,Comments__c:$('.book-bag-checkout [name="comments"]').val(),Lead_Products__r:{records:D}}]};
w.examPatchContactUpdate(K.Id,I,M)
}else{if(K.Trust_Level__c=="Unknown"){if($('.book-bag-checkout [name="contactApproval"]:checked').val()=="contact"){contactApproval=false
}else{contactApproval=true
}var I={Trust_Level__c:K.Trust_Level__c,Global_Marketing_Unsubscribe__c:contactApproval};
if($('.book-bag-checkout select[name="institutionId"]').val()!=="school-not-listed"){w.examCopySheerIdCall(K.Id,I)
}else{w.POSTLeadCall()
}}else{if(K.Trust_Level__c=="Restricted"){window.open(q,"_self")
}else{if(K.Trust_Level__c==null){if($('.book-bag-checkout select[name="institutionId"]').val()!=="school-not-listed"){if($('.book-bag-checkout [name="contactApproval"]:checked').val()=="contact"){contactApproval=false
}else{contactApproval=true
}var I={Trust_Level__c:K.Trust_Level__c,Global_Marketing_Unsubscribe__c:contactApproval};
w.examCopySheerIdCall(K.Id,I)
}else{w.POSTLeadCall()
}}else{w.examCopySheerIdNoContactCall()
}}}}}},examPatchContactUpdate:function(F,D,E){if(!F||!D){return false
}if(h){console.log("patchContactUpdate id: "+F)
}$.ajax({type:"PATCH",url:w.pmc2onecrmApiUrl+"/patch/"+F,data:JSON.stringify(D),dataType:"json",headers:{apikey:w.apiKey},processData:false,contentType:"application/json-patch+json",timeout:15000}).done(function(G){if(h){console.log("patchContactUpdate success")
}w.postLeadProduct(E)
}).fail(function(G){w.sendExCpyError(G,"Exam Copy Patch Contact Update",D);
w.postLeadProduct(E)
})
},pardotProspect:function(D){$.ajax({type:"POST",contentType:"application/json",headers:{apikey:w.apiKey},url:w.pmc2onecrmApiUrl+"/prospect/"+D,timeout:15000}).done(function(E){$(".spinner").hide();
if(h){console.log("Post Pardot Success")
}localStorage.setItem("examCopyRequest",JSON.stringify(r));
window.open(C,"_self")
}).fail(function(E){w.sendExCpyError(E,"Exam Copy Pardot Call",D);
$(".spinner").hide();
localStorage.setItem("examCopyRequest",JSON.stringify(r));
window.open(C,"_self")
})
},postLeadProduct:function(D){if(h){console.log("Post Lead Call---->>>>>",D)
}$.ajax({type:"POST",contentType:"application/json",data:JSON.stringify(w.cleanPayloadValues(D)),dataType:"JSON",headers:{apikey:w.apiKey},url:w.pmc2onecrmApiUrl+"/lead"}).done(function(E){if(h){console.log("Post Lead Success")
}w.pardotProspect($('.book-bag-checkout [name="emailAddress"]').val().toLowerCase())
}).fail(function(E){w.sendExCpyError(E,"Exam Copy Post Lead Call Error",w.cleanPayloadValues(D));
$(".spinner").hide();
window.open(l,"_self")
})
},examCopySheerIdCall:function(E,F){var D={firstName:$('.book-bag-checkout [name="firstName"]').val(),lastName:$('.book-bag-checkout [name="lastName"]').val(),email:$('.book-bag-checkout [name="emailAddress"]').val().toLowerCase(),organization:{id:$('.book-bag-checkout [name="institutionId"] option:selected').attr("data-sheerId"),name:$('.book-bag-checkout select[name="institutionId"] option:selected').text()}};
if(h){console.log("Exam copy sheer Id payload-----",D)
}if($("select[name='institutionId']").val()!=="school-not-listed"){$.ajax({type:"POST",url:w.sheerIdApiUrl,data:JSON.stringify(D),dataType:"json",contentType:"application/json",timeout:15000}).done(function(R){if(h){console.log("examCopySheerIdCall success",R)
}if(R){var G=[];
if(localStorage.getItem("bookBagItems")&&localStorage.getItem("orderLines")){var I=localStorage.getItem("bookBagItems");
I=JSON.parse(I);
var N=localStorage.getItem("orderLines");
N=JSON.parse(N);
for(var L=0;
L<I.books.length;
L++){var K={attributes:{type:"Lead_Product__c",referenceId:"ref"+(L+2)},Status__c:"Requested",Requested_ISBN_10__c:I.books[L].isbn10,Requested_ISBN_13__c:I.books[L].isbn13,Requested_Authors__c:I.books[L].author,Requested_Title_Edition__c:I.books[L].title+" "+I.books[L].year,Requested_Publisher__c:I.books[L].imprint,Copyright_Date__c:new Date(I.books[L].year).toISOString().split("T")[0],Availability__c:I.books[L].titleStatus,Course__c:N[L].courseName,Term__c:N[L].term,Book_Adopted__c:N[L].isAdopted};
if(N[L].enrollment&&!isNaN(N[L].enrollment)){K.Enrollment__c=N[L].enrollment
}if(N[L].isAdopted=="false"&&N[L].decisionDate&&N[L].decisionDate!=""){K.Decision_Date__c=N[L].decisionDate
}if(N[L].isAdopted=="false"&&N[L].decisionMaker&&N[L].decisionMaker!=""){if(N[L].decisionMaker=="individual"){K.Adoption_Type__c="Individual Choice"
}else{K.Adoption_Type__c="Committee"
}}if(N[L].isAdopted=="false"&&N[L].bookInUse&&N[L].bookInUse!=""){K.Product_In_Use__c=N[L].bookInUse
}G.push(K)
}}var P="Managed";
if($('.book-bag-checkout [name="institutionId"] option:selected').attr("data-segmentCalc")){P=$('.book-bag-checkout [name="institutionId"] option:selected').attr("data-segmentCalc")
}var M="";
if($('.book-bag-checkout [name="disciplineId"] option:selected').attr("data-specality")&&$('.book-bag-checkout [name="disciplineId"] option:selected').attr("data-specality")!="null"){M=$('.book-bag-checkout [name="disciplineId"] option:selected').attr("data-specality")
}var J="";
$.each($("input[name='iAm']:checked"),function(){if($(this).val()=="inst"){if(J==""){J="Instructor"
}else{J="Instructor;"+J
}}else{if($(this).val()=="stud"){if(J==""){J="Student"
}else{J="Student;"+J
}}else{if($(this).val()=="pAuth"){if(J==""){J="Pearson author"
}else{J="Pearson author;"+J
}}else{if($(this).val()=="pReview"){if(J==""){J="Pearson reviewer"
}else{J="Pearson reviewer;"+J
}}else{if($(this).val()=="other"){if(J==""){J="Other"
}else{J="Other;"+J
}}}}}}});
if($('.book-bag-checkout [name="contactApproval"]:checked').val()=="contact"){contactApproval=false
}else{contactApproval=true
}if(R.currentStep=="success"&&R.verificationId){var O=$('.book-bag-checkout [name="departmentId"] option:selected').val();
var Q="Department";
if((O&&O=="All Departments")||(O=="null")){O=null;
Q=""
}var H={records:[{attributes:{type:"Lead",referenceId:"ref1"},Salutation:$('.book-bag-checkout [name="honorific"]').val(),FirstName:$('.book-bag-checkout [name="firstName"]').val(),LastName:$('.book-bag-checkout [name="lastName"]').val(),Email:$('.book-bag-checkout [name="emailAddress"]').val().toLowerCase(),Phone:$('.book-bag-checkout [name="officePhone"]').val(),Status:"Open",Street:$('.book-bag-checkout [name="address1"]').val()+","+$('.book-bag-checkout [name="address2"]').val(),City:$('.book-bag-checkout [name="city"]').val(),State:$('.book-bag-checkout select[name="state"] option:selected').text(),Country:$('.book-bag-checkout select[name="country"] option:selected').text(),PostalCode:$('.book-bag-checkout [name="postalCode"]').val(),Trust_Level__c:"Low",Parent_Account__c:$('.book-bag-checkout select[name="institutionId"]').val()!=="school-not-listed"?$('.book-bag-checkout select[name="institutionId"]').val():"",Account_Lookup__c:O,Contact_Lookup__c:E,Department__c:$('.book-bag-checkout [name="departmentId"] option:selected').text(),Account_SheerID__c:$('.book-bag-checkout [name="institutionId"] option:selected').attr("data-sheerId"),LeadSource:"Online/Web",Enquiry_Type__c:"Exam Copy",Validated_On__c:new Date().toISOString().split("T")[0],Validated_By__c:"SheerID",Account_Segment__c:P,Requested_Specialty__c:M,Business_Unit__c:"US Field Sales",Account_Record_Type__c:"Organisation",Organisation_Type1__c:"Higher Education",Role__c:"Educator",Role_Detail__c:$('.book-bag-checkout [name="role"] option:selected').val(),Other_Role_Detail__c:$('.book-bag-checkout [name="other-role"]').val(),Sub_Type__c:Q,Company:$('.book-bag-checkout select[name="institutionId"] option:selected').text(),Market__c:"US",CurrencyIsoCode:"USD",Comments__c:$('.book-bag-checkout [name="comments"]').val(),Global_Marketing_Unsubscribe__c:contactApproval,Customer_Relationship__c:J,SheerID_Verification_ID__c:R.verificationId,SheerID_Status__c:R.currentStep,Lead_Products__r:{records:G}}]};
w.examPatchContactUpdate(E,F,H)
}else{if(R.currentStep!="success"||!R.verificationId){var O=$('.book-bag-checkout [name="departmentId"] option:selected').val();
var Q="Department";
if((O&&O=="All Departments")||(O=="null")){O=null;
Q=""
}var H={records:[{attributes:{type:"Lead",referenceId:"ref1"},Salutation:$('.book-bag-checkout [name="honorific"]').val(),FirstName:$('.book-bag-checkout [name="firstName"]').val(),LastName:$('.book-bag-checkout [name="lastName"]').val(),Email:$('.book-bag-checkout [name="emailAddress"]').val().toLowerCase(),Phone:$('.book-bag-checkout [name="officePhone"]').val(),Status:"Open",Street:$('.book-bag-checkout [name="address1"]').val()+","+$('.book-bag-checkout [name="address2"]').val(),City:$('.book-bag-checkout [name="city"]').val(),State:$('.book-bag-checkout select[name="state"] option:selected').text(),Country:$('.book-bag-checkout select[name="country"] option:selected').text(),PostalCode:$('.book-bag-checkout [name="postalCode"]').val(),Trust_Level__c:"Unknown",Parent_Account__c:$('.book-bag-checkout select[name="institutionId"]').val(),Account_Lookup__c:O,Contact_Lookup__c:E,Department__c:$('.book-bag-checkout [name="departmentId"] option:selected').text(),Account_SheerID__c:$('.book-bag-checkout [name="institutionId"] option:selected').attr("data-sheerId"),LeadSource:"Online/Web",Enquiry_Type__c:"Exam Copy",Validated_On__c:new Date().toISOString().split("T")[0],Validated_By__c:"Unvalidated",Account_Segment__c:P,Requested_Specialty__c:M,Business_Unit__c:"US Field Sales",Account_Record_Type__c:"Organisation",Organisation_Type1__c:"Higher Education",Role__c:"Educator",Role_Detail__c:$('.book-bag-checkout [name="role"] option:selected').val(),Other_Role_Detail__c:$('.book-bag-checkout [name="other-role"]').val(),Sub_Type__c:Q,Company:$('.book-bag-checkout select[name="institutionId"] option:selected').text(),Market__c:"US",CurrencyIsoCode:"USD",Comments__c:$('.book-bag-checkout [name="comments"]').val(),Global_Marketing_Unsubscribe__c:contactApproval,Customer_Relationship__c:J,SheerID_Verification_ID__c:R.verificationId,SheerID_Status__c:R.currentStep,Lead_Products__r:{records:G}}]};
w.postLeadProduct(H)
}}}}).fail(function(N){w.sendExCpyError(N,"Exam Copy Sheer Id Call Error",H);
var G=[];
if(localStorage.getItem("bookBagItems")&&localStorage.getItem("orderLines")){var I=localStorage.getItem("bookBagItems");
I=JSON.parse(I);
var O=localStorage.getItem("orderLines");
O=JSON.parse(O);
for(var L=0;
L<I.books.length;
L++){var K={attributes:{type:"Lead_Product__c",referenceId:"ref"+(L+2)},Status__c:"Requested",Requested_ISBN_10__c:I.books[L].isbn10,Requested_ISBN_13__c:I.books[L].isbn13,Requested_Authors__c:I.books[L].author,Requested_Title_Edition__c:I.books[L].title+" "+I.books[L].year,Requested_Publisher__c:I.books[L].imprint,Copyright_Date__c:new Date(I.books[L].year).toISOString().split("T")[0],Availability__c:I.books[L].titleStatus,Course__c:O[L].courseName,Term__c:O[L].term,Book_Adopted__c:O[L].isAdopted};
if(O[L].enrollment&&!isNaN(O[L].enrollment)){K.Enrollment__c=O[L].enrollment
}if(O[L].isAdopted=="false"&&O[L].decisionDate&&O[L].decisionDate!=""){K.Decision_Date__c=O[L].decisionDate
}if(O[L].isAdopted=="false"&&O[L].decisionMaker&&O[L].decisionMaker!=""){if(O[L].decisionMaker=="individual"){K.Adoption_Type__c="Individual Choice"
}else{K.Adoption_Type__c="Committee"
}}if(O[L].isAdopted=="false"&&O[L].bookInUse&&O[L].bookInUse!=""){K.Product_In_Use__c=O[L].bookInUse
}G.push(K)
}}var Q="Managed";
if($('.book-bag-checkout [name="institutionId"] option:selected').attr("data-segmentCalc")){Q=$('.book-bag-checkout [name="institutionId"] option:selected').attr("data-segmentCalc")
}var M="";
if($('.book-bag-checkout [name="disciplineId"] option:selected').attr("data-specality")&&$('.book-bag-checkout [name="disciplineId"] option:selected').attr("data-specality")!="null"){M=$('.book-bag-checkout [name="disciplineId"] option:selected').attr("data-specality")
}var J="";
$.each($("input[name='iAm']:checked"),function(){if($(this).val()=="inst"){if(J==""){J="Instructor"
}else{J="Instructor;"+J
}}else{if($(this).val()=="stud"){if(J==""){J="Student"
}else{J="Student;"+J
}}else{if($(this).val()=="pAuth"){if(J==""){J="Pearson author"
}else{J="Pearson author;"+J
}}else{if($(this).val()=="pReview"){if(J==""){J="Pearson reviewer"
}else{J="Pearson reviewer;"+J
}}else{if($(this).val()=="other"){if(J==""){J="Other"
}else{J="Other;"+J
}}}}}}});
var P=$('.book-bag-checkout [name="departmentId"] option:selected').val();
var R="Department";
if((P&&P=="All Departments")||(P=="null")){P=null;
R=""
}if($('.book-bag-checkout [name="contactApproval"]:checked').val()=="contact"){contactApproval=false
}else{contactApproval=true
}var H={records:[{attributes:{type:"Lead",referenceId:"ref1"},Salutation:$('.book-bag-checkout [name="honorific"]').val(),FirstName:$('.book-bag-checkout [name="firstName"]').val(),LastName:$('.book-bag-checkout [name="lastName"]').val(),Email:$('.book-bag-checkout [name="emailAddress"]').val().toLowerCase(),Phone:$('.book-bag-checkout [name="officePhone"]').val(),Status:"Open",Street:$('.book-bag-checkout [name="address1"]').val()+","+$('.book-bag-checkout [name="address2"]').val(),City:$('.book-bag-checkout [name="city"]').val(),State:$('.book-bag-checkout select[name="state"] option:selected').text(),Country:$('.book-bag-checkout select[name="country"] option:selected').text(),PostalCode:$('.book-bag-checkout [name="postalCode"]').val(),Trust_Level__c:"Unknown",Parent_Account__c:$('.book-bag-checkout select[name="institutionId"]').val(),Department__c:$('.book-bag-checkout [name="departmentId"] option:selected').text(),Account_Lookup__c:P,Contact_Lookup__c:E,Account_SheerID__c:$('.book-bag-checkout [name="institutionId"] option:selected').attr("data-sheerId"),LeadSource:"Online/Web",Enquiry_Type__c:"Exam Copy",Validated_On__c:new Date().toISOString().split("T")[0],Validated_By__c:"Unvalidated",Account_Segment__c:Q,Requested_Specialty__c:M,Business_Unit__c:"US Field Sales",Account_Record_Type__c:"Organisation",Organisation_Type1__c:"Higher Education",Role__c:"Educator",Role_Detail__c:$('.book-bag-checkout [name="role"] option:selected').val(),Other_Role_Detail__c:$('.book-bag-checkout [name="other-role"]').val(),Sub_Type__c:R,Company:$('.book-bag-checkout select[name="institutionId"] option:selected').text(),Market__c:"US",CurrencyIsoCode:"USD",Comments__c:$('.book-bag-checkout [name="comments"]').val(),Global_Marketing_Unsubscribe__c:contactApproval,Customer_Relationship__c:J,Lead_Products__r:{records:G}}]};
w.postLeadProduct(H)
})
}},cleanPayloadValues:function(F){var E=["null","NULL","undefined"];
newValue="";
if(!F){return false
}function D(G){Object.keys(G).forEach(function(H){if(G[H]!==null&&typeof G[H]==="object"){D(G[H]);
return
}if(E.indexOf(G[H])>-1){if(h){console.log("Found un-allowed value in "+H)
}G[H]=newValue
}})
}D(F);
return F
},examCopySheerIdNoContactCall:function(){var D={firstName:$('.book-bag-checkout [name="firstName"]').val(),lastName:$('.book-bag-checkout [name="lastName"]').val(),email:$('.book-bag-checkout [name="emailAddress"]').val().toLowerCase(),organization:{id:$('.book-bag-checkout [name="institutionId"] option:selected').attr("data-sheerId"),name:$('.book-bag-checkout select[name="institutionId"] option:selected').text()}};
if(h){console.log("Exam copy sheerId noContact  payload-----");
console.log(D)
}if($("select[name='institutionId']").val()!=="school-not-listed"){$.ajax({type:"POST",url:w.sheerIdApiUrl,data:JSON.stringify(D),dataType:"json",contentType:"application/json",timeout:15000}).done(function(P){console.log("examCopySheerIdNoContactCall success:::",P);
if(P){var E=[];
if(localStorage.getItem("bookBagItems")&&localStorage.getItem("orderLines")){var G=localStorage.getItem("bookBagItems");
G=JSON.parse(G);
var L=localStorage.getItem("orderLines");
L=JSON.parse(L);
for(var J=0;
J<G.books.length;
J++){var I={attributes:{type:"Lead_Product__c",referenceId:"ref"+(J+2)},Status__c:"Requested",Requested_ISBN_10__c:G.books[J].isbn10,Requested_ISBN_13__c:G.books[J].isbn13,Requested_Authors__c:G.books[J].author,Requested_Title_Edition__c:G.books[J].title+" "+G.books[J].year,Requested_Publisher__c:G.books[J].imprint,Copyright_Date__c:new Date(G.books[J].year).toISOString().split("T")[0],Availability__c:G.books[J].titleStatus,Course__c:L[J].courseName,Term__c:L[J].term,Book_Adopted__c:L[J].isAdopted};
if(L[J].enrollment&&!isNaN(L[J].enrollment)){I.Enrollment__c=L[J].enrollment
}if(L[J].isAdopted=="false"&&L[J].decisionDate&&L[J].decisionDate!=""){I.Decision_Date__c=L[J].decisionDate
}if(L[J].isAdopted=="false"&&L[J].decisionMaker&&L[J].decisionMaker!=""){if(L[J].decisionMaker=="individual"){I.Adoption_Type__c="Individual Choice"
}else{I.Adoption_Type__c="Committee"
}}if(L[J].isAdopted=="false"&&L[J].bookInUse&&L[J].bookInUse!=""){I.Product_In_Use__c=L[J].bookInUse
}E.push(I)
}}var N="Managed";
if($('.book-bag-checkout [name="institutionId"] option:selected').attr("data-segmentCalc")){N=$('.book-bag-checkout [name="institutionId"] option:selected').attr("data-segmentCalc")
}var K="";
if($('.book-bag-checkout [name="disciplineId"] option:selected').attr("data-specality")&&$('.book-bag-checkout [name="disciplineId"] option:selected').attr("data-specality")!="null"){K=$('.book-bag-checkout [name="disciplineId"] option:selected').attr("data-specality")
}var H="";
$.each($("input[name='iAm']:checked"),function(){if($(this).val()=="inst"){if(H==""){H="Instructor"
}else{H="Instructor;"+H
}}else{if($(this).val()=="stud"){if(H==""){H="Student"
}else{H="Student;"+H
}}else{if($(this).val()=="pAuth"){if(H==""){H="Pearson author"
}else{H="Pearson author;"+H
}}else{if($(this).val()=="pReview"){if(H==""){H="Pearson reviewer"
}else{H="Pearson reviewer;"+H
}}else{if($(this).val()=="other"){if(H==""){H="Other"
}else{H="Other;"+H
}}}}}}});
if($('.book-bag-checkout [name="contactApproval"]:checked').val()=="contact"){contactApproval=false
}else{contactApproval=true
}if(P.currentStep=="success"&&P.verificationId){var M=$('.book-bag-checkout [name="departmentId"] option:selected').val();
var O="Department";
if((M&&M=="All Departments")||(M=="null")){M=null;
O=""
}var F={records:[{attributes:{type:"Lead",referenceId:"ref1"},Salutation:$('.book-bag-checkout [name="honorific"]').val(),FirstName:$('.book-bag-checkout [name="firstName"]').val(),LastName:$('.book-bag-checkout [name="lastName"]').val(),Email:$('.book-bag-checkout [name="emailAddress"]').val().toLowerCase(),Phone:$('.book-bag-checkout [name="officePhone"]').val(),Status:"Open",Street:$('.book-bag-checkout [name="address1"]').val()+","+$('.book-bag-checkout [name="address2"]').val(),City:$('.book-bag-checkout [name="city"]').val(),State:$('.book-bag-checkout select[name="state"] option:selected').text(),Country:$('.book-bag-checkout select[name="country"] option:selected').text(),PostalCode:$('.book-bag-checkout [name="postalCode"]').val(),Trust_Level__c:"Low",Parent_Account__c:$('.book-bag-checkout select[name="institutionId"]').val()!=="school-not-listed"?$('.book-bag-checkout select[name="institutionId"]').val():"",Account_Lookup__c:M,Department__c:$('.book-bag-checkout [name="departmentId"] option:selected').text(),Account_SheerID__c:$('.book-bag-checkout [name="institutionId"] option:selected').attr("data-sheerId"),LeadSource:"Online/Web",Enquiry_Type__c:"Exam Copy",Validated_On__c:new Date().toISOString().split("T")[0],Validated_By__c:"SheerID",Account_Segment__c:N,Requested_Specialty__c:K,Business_Unit__c:"US Field Sales",Account_Record_Type__c:"Organisation",Organisation_Type1__c:"Higher Education",Role__c:"Educator",Role_Detail__c:$('.book-bag-checkout [name="role"] option:selected').val(),Other_Role_Detail__c:$('.book-bag-checkout [name="other-role"]').val(),Sub_Type__c:O,Company:$('.book-bag-checkout select[name="institutionId"] option:selected').text(),Market__c:"US",CurrencyIsoCode:"USD",Comments__c:$('.book-bag-checkout [name="comments"]').val(),Global_Marketing_Unsubscribe__c:contactApproval,Customer_Relationship__c:H,SheerID_Verification_ID__c:P.verificationId,SheerID_Status__c:P.currentStep,Lead_Products__r:{records:E}}]};
w.postLeadProduct(F)
}else{if(P.currentStep!="success"||!P.verificationId){var M=$('.book-bag-checkout [name="departmentId"] option:selected').val();
var O="Department";
if((M&&M=="All Departments")||(M=="null")){M=null;
O=""
}var F={records:[{attributes:{type:"Lead",referenceId:"ref1"},Salutation:$('.book-bag-checkout [name="honorific"]').val(),FirstName:$('.book-bag-checkout [name="firstName"]').val(),LastName:$('.book-bag-checkout [name="lastName"]').val(),Email:$('.book-bag-checkout [name="emailAddress"]').val().toLowerCase(),Phone:$('.book-bag-checkout [name="officePhone"]').val(),Status:"Open",Street:$('.book-bag-checkout [name="address1"]').val()+","+$('.book-bag-checkout [name="address2"]').val(),City:$('.book-bag-checkout [name="city"]').val(),State:$('.book-bag-checkout select[name="state"] option:selected').text(),Country:$('.book-bag-checkout select[name="country"] option:selected').text(),PostalCode:$('.book-bag-checkout [name="postalCode"]').val(),Trust_Level__c:"Unknown",Parent_Account__c:$('.book-bag-checkout select[name="institutionId"]').val(),Account_Lookup__c:M,Department__c:$('.book-bag-checkout [name="departmentId"] option:selected').text(),Account_SheerID__c:$('.book-bag-checkout [name="institutionId"] option:selected').attr("data-sheerId"),LeadSource:"Online/Web",Enquiry_Type__c:"Exam Copy",Validated_On__c:new Date().toISOString().split("T")[0],Validated_By__c:"Unvalidated",Account_Segment__c:N,Requested_Specialty__c:K,Business_Unit__c:"US Field Sales",Account_Record_Type__c:"Organisation",Organisation_Type1__c:"Higher Education",Role__c:"Educator",Role_Detail__c:$('.book-bag-checkout [name="role"] option:selected').val(),Other_Role_Detail__c:$('.book-bag-checkout [name="other-role"]').val(),Sub_Type__c:O,Company:$('.book-bag-checkout select[name="institutionId"] option:selected').text(),Market__c:"US",CurrencyIsoCode:"USD",Comments__c:$('.book-bag-checkout [name="comments"]').val(),Global_Marketing_Unsubscribe__c:contactApproval,Customer_Relationship__c:H,SheerID_Verification_ID__c:P.verificationId,SheerID_Status__c:P.currentStep,Lead_Products__r:{records:E}}]};
w.postLeadProduct(F)
}}}}).fail(function(O){w.sendExCpyError(O,"Exam Copy Sheer Id Call Error",F);
var E=[];
if(localStorage.getItem("bookBagItems")&&localStorage.getItem("orderLines")){var H=localStorage.getItem("bookBagItems");
H=JSON.parse(H);
var P=localStorage.getItem("orderLines");
P=JSON.parse(P);
for(var K=0;
K<H.books.length;
K++){var J={attributes:{type:"Lead_Product__c",referenceId:"ref"+(K+2)},Status__c:"Requested",Requested_ISBN_10__c:H.books[K].isbn10,Requested_ISBN_13__c:H.books[K].isbn13,Requested_Authors__c:H.books[K].author,Requested_Title_Edition__c:H.books[K].title+" "+H.books[K].year,Requested_Publisher__c:H.books[K].imprint,Copyright_Date__c:new Date(H.books[K].year).toISOString().split("T")[0],Availability__c:H.books[K].titleStatus,Course__c:P[K].courseName,Term__c:P[K].term,Book_Adopted__c:P[K].isAdopted};
if(P[K].enrollment&&!isNaN(P[K].enrollment)){J.Enrollment__c=P[K].enrollment
}if(P[K].isAdopted=="false"&&P[K].decisionDate&&P[K].decisionDate!=""){J.Decision_Date__c=P[K].decisionDate
}if(P[K].isAdopted=="false"&&P[K].decisionMaker&&P[K].decisionMaker!=""){if(P[K].decisionMaker=="individual"){J.Adoption_Type__c="Individual Choice"
}else{J.Adoption_Type__c="Committee"
}}if(P[K].isAdopted=="false"&&P[K].bookInUse&&P[K].bookInUse!=""){J.Product_In_Use__c=P[K].bookInUse
}E.push(J)
}}var R="Managed";
if($('.book-bag-checkout [name="institutionId"] option:selected').attr("data-segmentCalc")){R=$('.book-bag-checkout [name="institutionId"] option:selected').attr("data-segmentCalc")
}var L="";
if($('.book-bag-checkout [name="disciplineId"] option:selected').attr("data-specality")&&$('.book-bag-checkout [name="disciplineId"] option:selected').attr("data-specality")!="null"){L=$('.book-bag-checkout [name="disciplineId"] option:selected').attr("data-specality")
}var I="";
$.each($("input[name='iAm']:checked"),function(){if($(this).val()=="inst"){if(I==""){I="Instructor"
}else{I="Instructor;"+I
}}else{if($(this).val()=="stud"){if(I==""){I="Student"
}else{I="Student;"+I
}}else{if($(this).val()=="pAuth"){if(I==""){I="Pearson author"
}else{I="Pearson author;"+I
}}else{if($(this).val()=="pReview"){if(I==""){I="Pearson reviewer"
}else{I="Pearson reviewer;"+I
}}else{if($(this).val()=="other"){if(I==""){I="Other"
}else{I="Other;"+I
}}}}}}});
if($('.book-bag-checkout [name="contactApproval"]:checked').val()=="contact"){contactApproval=false
}else{contactApproval=true
}var Q=$('.book-bag-checkout [name="departmentId"] option:selected').val();
var S="Department";
if((Q&&Q=="All Departments")||(Q=="null")){Q=null;
S=""
}var N,G,M;
if($("select[name='institutionId']").val()==="school-not-listed"){G="Exam Copy-School not listed";
N=$("input[name='departmentId']").val();
L=$("input[name='disciplineId']").val();
M=$("input[name='institutionId']")
}else{G="Exam Copy";
N=$('.book-bag-checkout [name="departmentId"] option:selected').text();
M=$('.book-bag-checkout select[name="institutionId"] option:selected').text()
}var F={records:[{attributes:{type:"Lead",referenceId:"ref1"},Salutation:$('.book-bag-checkout [name="honorific"]').val(),FirstName:$('.book-bag-checkout [name="firstName"]').val(),LastName:$('.book-bag-checkout [name="lastName"]').val(),Email:$('.book-bag-checkout [name="emailAddress"]').val().toLowerCase(),Phone:$('.book-bag-checkout [name="officePhone"]').val(),Status:"Open",Street:$('.book-bag-checkout [name="address1"]').val()+","+$('.book-bag-checkout [name="address2"]').val(),City:$('.book-bag-checkout [name="city"]').val(),State:$('.book-bag-checkout select[name="state"] option:selected').text(),Country:$('.book-bag-checkout select[name="country"] option:selected').text(),PostalCode:$('.book-bag-checkout [name="postalCode"]').val(),Trust_Level__c:"Unknown",Parent_Account__c:$('.book-bag-checkout select[name="institutionId"]').val(),Account_Lookup__c:Q,Department__c:N,Account_SheerID__c:$('.book-bag-checkout [name="institutionId"] option:selected').attr("data-sheerId"),LeadSource:"Online/Web",Enquiry_Type__c:G,Validated_On__c:new Date().toISOString().split("T")[0],Validated_By__c:"Unvalidated",Account_Segment__c:R,Requested_Specialty__c:L,Business_Unit__c:"US Field Sales",Account_Record_Type__c:"Organisation",Organisation_Type1__c:"Higher Education",Role__c:"Educator",Role_Detail__c:$('.book-bag-checkout [name="role"] option:selected').val(),Other_Role_Detail__c:$('.book-bag-checkout [name="other-role"]').val(),Sub_Type__c:S,Company:M,Market__c:"US",CurrencyIsoCode:"USD",Comments__c:$('.book-bag-checkout [name="comments"]').val(),Global_Marketing_Unsubscribe__c:contactApproval,Customer_Relationship__c:I,Lead_Products__r:{records:E}}]};
w.postLeadProduct(F)
})
}},POSTLeadCall:function(){var H="";
$.each($("input[name='iAm']:checked"),function(){if($(this).val()=="inst"){if(H==""){H="Instructor"
}else{H="Instructor;"+H
}}else{if($(this).val()=="stud"){if(H==""){H="Student"
}else{H="Student;"+H
}}else{if($(this).val()=="pAuth"){if(H==""){H="Pearson author"
}else{H="Pearson author;"+H
}}else{if($(this).val()=="pReview"){if(H==""){H="Pearson reviewer"
}else{H="Pearson reviewer;"+H
}}else{if($(this).val()=="other"){if(H==""){H="Other"
}else{H="Other;"+H
}}}}}}});
var J=[];
if(localStorage.getItem("bookBagItems")&&localStorage.getItem("orderLines")){var D=localStorage.getItem("bookBagItems");
D=JSON.parse(D);
var E=localStorage.getItem("orderLines");
E=JSON.parse(E);
for(var G=0;
G<D.books.length;
G++){var I={attributes:{type:"Lead_Product__c",referenceId:"ref"+(G+2)},Status__c:"Requested",Requested_ISBN_10__c:D.books[G].isbn10,Requested_ISBN_13__c:D.books[G].isbn13,Requested_Authors__c:D.books[G].author,Requested_Title_Edition__c:D.books[G].title+" "+D.books[G].year,Requested_Publisher__c:D.books[G].imprint,Copyright_Date__c:new Date(D.books[G].year).toISOString().split("T")[0],Availability__c:D.books[G].titleStatus,Course__c:E[G].courseName,Term__c:E[G].term,Book_Adopted__c:E[G].isAdopted};
if(E[G].enrollment&&!isNaN(E[G].enrollment)){I.Enrollment__c=E[G].enrollment
}if(E[G].isAdopted=="false"&&E[G].decisionDate&&E[G].decisionDate!=""){I.Decision_Date__c=E[G].decisionDate
}if(E[G].isAdopted=="false"&&E[G].decisionMaker&&E[G].decisionMaker!=""){if(E[G].decisionMaker=="individual"){I.Adoption_Type__c="Individual Choice"
}else{I.Adoption_Type__c="Committee"
}}if(E[G].isAdopted=="false"&&E[G].bookInUse&&E[G].bookInUse!=""){I.Product_In_Use__c=E[G].bookInUse
}J.push(I)
}}var F={records:[{attributes:{type:"Lead",referenceId:"ref1"},Salutation:$('.book-bag-checkout [name="honorific"]').val(),FirstName:$('.book-bag-checkout [name="firstName"]').val(),LastName:$('.book-bag-checkout [name="lastName"]').val(),Email:$('.book-bag-checkout [name="emailAddress"]').val().toLowerCase(),Phone:$('.book-bag-checkout [name="officePhone"]').val(),Status:"Open",Street:$('.book-bag-checkout [name="address1"]').val()+","+$('.book-bag-checkout [name="address2"]').val(),City:$('.book-bag-checkout [name="city"]').val(),State:$('.book-bag-checkout select[name="state"] option:selected').text(),Country:$('.book-bag-checkout select[name="country"] option:selected').text(),PostalCode:$('.book-bag-checkout [name="postalCode"]').val(),Department__c:$("input[name='departmentId']").val(),LeadSource:"Online/Web",Enquiry_Type__c:"Exam Copy-School not listed",Validated_On__c:new Date().toISOString().split("T")[0],Requested_Specialty__c:$("input[name='disciplineId']").val(),Business_Unit__c:"US Field Sales",Account_Record_Type__c:"Organisation",Organisation_Type1__c:"Higher Education",Role__c:"Educator",Role_Detail__c:$('.book-bag-checkout [name="role"] option:selected').val(),Company:$("input[name='institutionId']").val(),Comments__c:$('.book-bag-checkout [name="comments"]').val(),Global_Marketing_Unsubscribe__c:$('.book-bag-checkout [name="contactApproval"]:checked').val()==="contact"?true:false,Market__c:"US",CurrencyIsoCode:"USD",Customer_Relationship__c:H,Lead_Products__r:{records:J}}]};
w.postLeadProduct(F)
}}
}function bookBag(){var n=true;
if(localStorage.getItem("bookBagItems")){setTimeout(function(){b()
},100);
$(window).resize(function(){setTimeout(function(){b()
},100)
})
}function b(){var p=localStorage.getItem("bookBagItems");
var r=JSON.parse(p);
var q=r.books.length;
if(q>0){if(!$(".book-bag-count-icon").length){$(".util--bookbag").append("<span class='book-bag-count-icon'>"+q+"</span>");
$(".util--bookbag").addClass("not-empty")
}else{$(".util--bookbag").removeClass("not-empty")
}}}var a=0;
var d=$(".book-bag");
var o=$(".book-bag-pre-checkout");
var c=$(".book-bag-checkout");
var e={books:[]};
$("#add-to-book-bag").parent().on("click",function(w){w.preventDefault();
var t="/us/higher-education/subject-catalog/book-bag-process/book-bag.html";
var v=false;
var s=$(".book-bag-attributes");
var p={};
if(!localStorage.getItem("bookBagItems")){localStorage.setItem("bookBagItems",JSON.stringify(e))
}var r=localStorage.getItem("bookBagItems");
var q=JSON.parse(r);
for(var u=0;
u<q.books.length;
u++){if(s.attr("data-itemId")==q.books[u].itemId){v=true;
break
}}if(!v){p.title=s.attr("data-title");
p.year=s.attr("data-copyrightyear");
if($(".book-bag-title-status").length>0){p.titleStatus=$(".book-bag-title-status span").html()
}else{p.titleStatus=""
}p.imprint=s.attr("data-imprint");
p.author=s.attr("data-authors");
p.isbn10=s.attr("data-isbn10");
p.isbn13=s.attr("data-isbn13");
p.itemId=s.attr("data-itemId");
q.books.push(p);
localStorage.setItem("bookBagItems",JSON.stringify(q))
}window.open(t,"_self")
});
function f(s){var q,u;
if(!localStorage.getItem("orderLines")){u=false
}else{var r=localStorage.getItem("orderLines");
r=JSON.parse(r);
u=true
}for(var t=0;
t<s;
t++){var v=storedBooksList.books[t].itemId;
q=$(".book-bag .book-bag-format .book-bag-cart-items").clone();
q.addClass("section"+t);
q.addClass("section-box");
q.find(".title h5").html(storedBooksList.books[t].title);
q.find(".author p").html(storedBooksList.books[t].author);
q.find(".year p").html("&#169;"+storedBooksList.books[t].year+"&nbsp;&#124;&nbsp;");
q.find(".publisher p").html(storedBooksList.books[t].imprint+"&nbsp;&#124;&nbsp;");
q.find(".pub-date p").html(storedBooksList.books[t].titleStatus);
q.find(".isbn-10 p").append(storedBooksList.books[t].isbn10+"&nbsp;&#124;&nbsp;");
q.find(".isbn-13 p").append(storedBooksList.books[t].isbn13);
q.find(".item-id").attr("data-itemId",v);
q.find("input[name=adopted]").attr("name","adopted"+t);
q.find("input[name=decision]").attr("name","decision"+t);
q.find("input[name=course-name]").attr("id","course-name-"+v);
q.find("input[name=course-name]").siblings("label").attr("for","course-name-"+v);
q.find("input[name=enrollment]").attr("id","enrollment-"+v);
q.find("input[name=enrollment]").siblings("label").attr("for","enrollment-"+v);
q.find("select[name=term]").attr("id","term-"+v);
q.find("select[name=term]").siblings("label").attr("for","term-"+v);
q.find("input[name=book-in-use]").attr("id","book-in-use-"+v);
q.find("input[name=book-in-use]").siblings("label").attr("for","book-in-use-"+v);
q.find("input[name=decision-date]").attr("id","decision-date-"+v);
q.find("input[name=decision-date]").siblings("label").attr("for","decision-date-"+v);
if(u&&r[t]){var p=r[t].isAdopted;
q.find(".order-line-adopted input[value='"+p+"']").attr({checked:"checked","aria-checked":"true"});
q.find("input[name=enrollment]").val(r[t].enrollment);
q.find("select[name=term]").val(r[t].term);
q.find("input[name=course-name]").val(r[t].courseName);
if(p=="false"){q.find(".order-line-adopted").removeClass("hide-siblings");
q.find("input[name=book-in-use]").val(r[t].bookInUse);
q.find("input[name=decision-date]").val(r[t].decisionDate);
q.find(".order-line-decision input[value='"+r[t].decisionMaker+"']").attr({checked:"checked","aria-checked":"true"})
}else{q.find("input[name=book-in-use]").removeAttr("required").attr("aria-required","false");
q.find("input[name=decision-date]").removeAttr("required").attr("aria-required","false");
q.find(".order-line-decision input").removeAttr("required").parents("fieldset").attr("aria-required","false")
}}$(".book-bag .book-bag-list > div").append(q);
$(".book-bag-cart-items").show()
}$(".book-bag .book-bag-format").remove();
$(".order-line-adopted input").on("click",function(){var w=$(this).parents(".order-line-adopted");
if(this.value=="false"){w.removeClass("hide-siblings");
w.siblings(".order-line-book-in-use").find("input").attr({required:"required","aria-required":"true"});
w.siblings(".order-line-decision-date").find("input").attr({required:"required","aria-required":"true"});
w.siblings(".order-line-decision").find("fieldset").attr("aria-required","true").find("label:first input").attr("required","required")
}else{w.addClass("hide-siblings");
w.siblings(".order-line-book-in-use").find("input").removeAttr("required").attr("aria-required","false");
w.siblings(".order-line-decision-date").find("input").removeAttr("required").attr("aria-required","false");
w.siblings(".order-line-decision").find("fieldset").attr("aria-required","false").find("label:first input").removeAttr("required")
}});
$(".book-bag .proceed").on("click",function(B){B.preventDefault();
if(DMCP.FormValidator.validateOnSubmit($(".book-bag form"),B)){var E=localStorage.getItem("bookBagItems");
var y=JSON.parse(E);
var A=[];
for(var z=0;
z<y.books.length;
z++){var F={};
var C=$(".section"+z);
var D=C.find(".order-line-adopted input:checked").val();
var x=(y.books[z].isbn13&&y.books[z].isbn13.length>0)?y.books[z].isbn13:y.books[z].isbn10;
F.isAdopted=D;
F.bookInUse=C.find("input[name=book-in-use]").val();
F.courseName=C.find("input[name=course-name]").val();
F.decisionDate=C.find("input[name=decision-date]").val();
F.decisionMaker=C.find(".order-line-decision input:checked").val();
F.enrollment=C.find("input[name=enrollment]").val();
F.productId=x;
F.term=C.find("select[name=term]").val();
A.push(F)
}localStorage.setItem("orderLines",JSON.stringify(A));
var w="/us/higher-education/subject-catalog/book-bag-process/book-bag-pre-checkout.html";
window.open(w,"_self")
}});
$(".book-bag-remove-from-cart a").on("click",function(A){A.preventDefault();
var z=$(this).parents(".book-bag-remove-from-cart").siblings(".item-id").attr("data-itemId");
var x=localStorage.getItem("bookBagItems");
var w=JSON.parse(x);
for(var y=0;
y<w.books.length;
y++){if(z==w.books[y].itemId){w.books.splice(y,1);
break
}}localStorage.setItem("bookBagItems",JSON.stringify(w));
window.location.reload()
})
}if(d.length){var g=false;
if(localStorage.getItem("bookBagItems")){storedBooksData=localStorage.getItem("bookBagItems");
storedBooksList=JSON.parse(storedBooksData);
a=storedBooksList.books.length;
if(a){g=true;
f(a)
}}if(!g){$(".book-bag > form").remove();
$(".book-bag-empty-bag").show()
}}if(o.length){$.ajax({type:"POST",dataType:"JSON",url:window.location.pathname.replace(".html",".genericlist.json"),data:{type:"one-dot-com/one-dot-com/higher-ed/countries"}}).done(function(r){var q=r.list||[];
var p=$('select[name="country"]');
$.each(q,function(t,s){s=q[t].label;
t=q[t].value;
p.append($("<option></option>").attr("value",t).text(s))
});
$('.book-bag-pre-checkout select[name="country"]').val("US");
$('.book-bag-pre-checkout select[name="country"]').trigger("change")
}).fail(function(p){console.log("error")
});
$(".book-bag-pre-checkout select").change(function(){if($(this).attr("name")==="country"){var s=this.value;
var q=$('option[value="'+s+'"]').html();
localStorage.setItem("countryNameValue",s);
localStorage.setItem("countryNameLabel",q)
}if($(this).attr("name")==="customer"){var r=this.value;
var p=$('option[value="'+r+'"]').html();
localStorage.setItem("customerTypeValue",r);
localStorage.setItem("customerTypeLabel",p)
}});
$(".book-bag-pre-checkout .continue-button").click(function(t){t.preventDefault();
var s=$(this).find("a").attr("href");
var p=$('select[name="customer"]').val();
var r,q=false;
if(!p){console.log("No customerType");
$('select[name="customer"]').closest(".dropdown-list-custom").addClass("has-error").end().attr("aria-invalid",true);
return
}if(p==="High School"){r=$(".book-bag-pre-checkout-hs-modal");
q=true
}else{if(p==="Corporate"){r=$(".book-bag-pre-checkout-corps-modal");
q=true
}else{window.open(s,"_parent")
}}if($(".school-info select[name='institutionId']").val()==="school-not-listed"){$('.departments select[name="departmentId"]').removeAttr("required");
$('.departments select[name="departmentId"]').attr("aria-required",false);
$('.departments select[name="departmentId"]').attr("aria-invalid",false);
$('.disciplines select[name="disciplineId"]').removeAttr("required");
$('.disciplines select[name="disciplineId"]').attr("aria-required",false);
$('.disciplines select[name="disciplineId"]').attr("aria-invalid",false)
}if(q){r.css({top:"25%"});
r.prepend('<span class="pop-up-close"></span>');
$("body").append(r);
r.show();
$(".overlayShadow").show()
}});
$(document).on("click",".pop-up-window .pop-up-close",function(){$("body").css("overflow","visible");
$(".book-bag-pre-checkout-hs-modal,.book-bag-pre-checkout-corps-modal").removeAttr("style")
});
$(document).on("keydown",function(p){if(p.keyCode===27){$("body").css("overflow","visible");
$(".book-bag-pre-checkout-hs-modal,.book-bag-pre-checkout-corps-modal").removeAttr("style")
}})
}if(c.length){if(!localStorage.getItem("countryNameLabel")){localStorage.setItem("countryNameLabel"," ")
}if(!localStorage.getItem("countryNameValue")){localStorage.setItem("countryNameValue"," ")
}if(!localStorage.getItem("customerTypeLabel")){localStorage.setItem("customerTypeLabel"," ")
}if(!localStorage.getItem("customerTypeValue")){localStorage.setItem("customerTypeValue"," ")
}var l=localStorage.getItem("countryNameLabel");
var m=localStorage.getItem("countryNameValue");
var h=localStorage.getItem("customerTypeLabel");
var j=localStorage.getItem("customerTypeValue");
if(m!=="US"&&(j==="Emergency Medical Services or Fire Science Professional (Brady)"||j==="Construction Craft Trainer (NCCER)"||j==="Government")){$(".school-info").hide();
$(".work-info").show();
$('input[name="zipCode"], select[name="institutionId"], select[name="departmentId"], select[name="disciplineId"], input[name="disciplineId"]').removeAttr("required").attr("aria-required","false")
}else{$(".school-info").show();
$(".work-info").hide()
}if(m!=="US"&&(j==="Emergency Medical Services or Fire Science Professional (Brady)"||j==="Government")){$(".institution-text-field, .department-text-field").insertAfter(".suffix");
$(".discipline-text-field").hide()
}else{if(m!=="US"&&j==="Construction Craft Trainer (NCCER)"){$('input[name="institutionId"], input[name="departmentId"]').removeAttr("required").attr("aria-required","false")
}$(".institution-text-field, .department-text-field, .discipline-text-field, .schools, .departments, .disciplines").hide()
}$('select[name="country"]').attr("disabled","disabled").html('<option value="'+m+'">'+l+"</option>");
$('select[name="customerType"]').attr("disabled","disabled").html('<option value="'+j+'">'+h+"</option>");
if((!(m==="CA"||m==="GB"||m==="US"))&&!(j==="Emergency Medical Services or Fire Science Professional (Brady)"||j==="Construction Craft Trainer (NCCER)"||j==="Government")){$(".text-field-button label").html("Postal Code");
$('input[name="zipCode"]').attr("placeholder","Please enter your postal code");
$(".rep-locator-button").hide();
$('input[name="zipCode"], select[name="institutionId"], select[name="departmentId"], select[name="disciplineId"]').removeAttr("required").attr("aria-required","false");
$(".schools, .departments, .disciplines").hide();
$(".institution-text-field, .department-text-field, .discipline-text-field").show()
}$.ajax({type:"POST",dataType:"JSON",url:window.location.pathname.replace(".html",".genericlist.json"),data:{type:"state/"+m}}).done(function(t){var q=t;
if(q.list){$('input[name="state"]').parents(".text-field").detach();
$('select[name="state"]').attr("required",true);
var r=q.list;
var p=$('select[name="state"]');
$.each(r,function(v,u){u=r[v].label;
v=r[v].value;
var w=v;
var s=w.split("-",2);
p.append($("<option></option>").attr("value",s[1]).text(u))
})
}else{$('select[name="state"]').parents(".dropdown-list").detach();
$('select[name="state"]').attr("required",false)
}}).fail(function(p){console.log(p)
});
$.ajax({type:"POST",dataType:"JSON",url:window.location.pathname.replace(".html",".genericlist.json"),data:{type:"one-dot-com/one-dot-com/higher-ed/aiv-honorific"}}).done(function(t){var q=t;
if(q.list){var r=q.list;
var p=$('select[name="honorific"]');
$.each(r,function(u,s){s=r[u].label;
u=r[u].value;
p.append($("<option></option>").attr("value",u).text(s))
})
}}).fail(function(p){console.log(p)
});
$.ajax({type:"POST",dataType:"JSON",url:window.location.pathname.replace(".html",".genericlist.json"),data:{type:"one-dot-com/one-dot-com/higher-ed/role"}}).done(function(u){var q=u;
var t=q.list;
var p=$('select[name="role"]');
var r;
$.each(t,function(v,s){s=t[v].label;
v=t[v].value;
if(v!=="Other"){p.append($("<option></option>").attr("value",v).text(s))
}else{r={key:s,value:v}
}});
if(r){p.append($("<option></option>").attr("value",r.value).text(r.key))
}}).fail(function(p){console.log(p)
});
$(".other-role").hide();
$('select[name="role"]').change(function(){if($('select[name="country"]').val()==="US"&&$('select[name="role"]').val()==="Other"){$(".other-role").show()
}else{$(".other-role").hide()
}});
var k={pmc2onecrmApiUrl:getGlobalProperty("pmc2onecrmApiUrl"),apiKey:getGlobalProperty("pmc2onecrmApiKey"),sendExCpyError:function(r,p,t){var r=r||"";
var p=p||"";
now=new Date;
var q=Intl.DateTimeFormat().resolvedOptions().timeZone||"";
var s={form:"Exam Copy",api:p,error:r,payload:t,userAgent:navigator.userAgent,time:now,timeZone:q};
if(n){console.log("Sending Error in "+p+"::"+r);
console.log("Error Payload--->",JSON.stringify(s))
}$(document).trigger("apiError",s)
}};
$(".rep-locator-button").click(function(r){console.log(".rep-locator-button click");
r.preventDefault();
var s=$('input[name="zipCode"]');
var q=s.val().substring(0,3);
if(DMCP.FormValidator.validateField(s)){$('input[name="institutionId"], input[name="departmentId"]').val("");
var p={country:$('select[name="country"]').val(),postCode:q};
$(".rep-locator-error-message").hide();
$(".rep-locator-error-message").html("");
if($('.book-bag-checkout [name="country"]').val()==="US"){var p={zipcode:q};
$.ajax({type:"POST",url:k.pmc2onecrmApiUrl+"/lookup/institution",data:JSON.stringify(p),dataType:"json",contentType:"application/json",headers:{apikey:k.apiKey}}).done(function(v){if(v.records.length>0){var t=$('select[name="institutionId"] option:first-child').clone();
$('select[name="institutionId"]').empty().html(t);
for(var u=0;
u<v.records.length;
u++){$('select[name="institutionId"]').append('<option data-segmentCalc="'+v.records[u].Segment_Calculated__c+'" data-sheerId="'+v.records[u].Account_Sheer_ID__c+'"  value="'+v.records[u].Id+'">'+v.records[u].Name+"</option>")
}$(".schools").show().find("select").prop("required",true).attr("aria-required","true");
$(".departments, .disciplines").hide();
$(".institution-text-field, .department-text-field, .discipline-text-field").hide().find("input").prop("required",false).attr("aria-required","false");
$('select[name="institutionId"]').append('<option data-segmentcalc="Managed" value="school-not-listed">School not listed</option>')
}else{$(".rep-locator-error-message").html("");
$(".rep-locator-error-message").html("No information exists for this input.  Please try again.");
$(".rep-locator-error-message").show();
$(".schools, .departments, .disciplines").hide().find("select").prop("required",false).attr("aria-required","false")
}}).fail(function(t){k.sendExCpyError(t,"Exam Copy Institution Lookup",p)
})
}else{$.ajax({type:"GET",dataType:"json",data:p,url:HEProxyServer+"/api/institutions",}).done(function(v){if(v.institutions.length>0){var t=$('select[name="institutionId"] option:first-child').clone();
$('select[name="institutionId"]').empty().html(t);
for(var u=0;
u<v.institutions.length;
u++){$('select[name="institutionId"]').append('<option value="'+v.institutions[u].id+'">'+v.institutions[u].name+"</option>")
}$(".schools").show().find("select").prop("required",true).attr("aria-required","true");
$(".departments, .disciplines").hide();
$(".institution-text-field, .department-text-field, .discipline-text-field").hide().find("input").prop("required",false).attr("aria-required","false")
}else{$(".schools, .departments, .disciplines").hide().find("select").prop("required",false).attr("aria-required","false");
$(".institution-text-field, .department-text-field, .discipline-text-field").show().find("input").prop("required",true).attr("aria-required","true")
}}).fail(function(t){console.log(t)
})
}}});
$('input[name="zipCode"]').keyup(function(p){if(p.keyCode==13){$(".rep-locator-button").click()
}});
$('select[name="institutionId"]').change(function(){var p=$(this).val();
$(".rep-locator-error-message").html("");
$(".rep-locator-error-message").hide();
if($('.book-bag-checkout [name="country"]').val()==="US"){if($(this).val()===""){$(".departments, .disciplines").hide()
}else{if($(this).val()!=="school-not-listed"){var q={parentId:$(this).val()};
$.ajax({type:"POST",url:k.pmc2onecrmApiUrl+"/lookup/department",data:JSON.stringify(q),dataType:"json",contentType:"application/json",headers:{apikey:k.apiKey}}).done(function(t){if(t.records.length){var r=$('select[name="departmentId"] option:first-child').clone();
$('select[name="departmentId"]').empty().html(r);
for(var s=0;
s<t.records.length;
s++){if(t.records[s].Disciplines__c){$('select[name="departmentId"]').append('<option value="All Departments" selected>All Departments</option>');
$('select[name="departmentId"]').trigger("change");
break
}else{$('select[name="departmentId"]').append('<option value="'+t.records[s].Id+'">'+t.records[s].Name+"</option>")
}}$(".departments").show().find("select").prop("required",true).attr("aria-required","true");
$(".disciplines").hide();
$(".department-text-field, .discipline-text-field").hide().find("input").prop("required",false).attr("aria-required","false")
}else{$('select[name="departmentId"]').append('<option value="All Departments" selected>All Departments</option>');
$(".departments").show().find("select").prop("required",true).attr("aria-required","true");
var r=$('select[name="disciplineId"] option:first-child').clone();
$('select[name="disciplineId"]').empty().html(r);
$('select[name="disciplineId"]').append('<option data-specality="null" value="All Disciplines" selected>All Disciplines</option>');
$(".disciplines").show().find("select").prop("required",true).attr("aria-required","true");
$(".department-text-field, .discipline-text-field").hide().find("input").prop("required",false).attr("aria-required","false")
}}).fail(function(r){k.sendExCpyError(r,"Exam Copy Department Lookup",q)
})
}else{$(".institution-text-field").removeAttr("style");
$('.institution-text-field input[name="institutionId"]').attr("maxlength","255");
$(".department-text-field").removeAttr("style");
$(".discipline-text-field").removeAttr("style");
$('.department-text-field input[name="departmentId"], .discipline-text-field input[name="disciplineId"]').attr("maxlength","80")
}}}else{$.ajax({type:"GET",dataType:"json",url:HEProxyServer+"/api/institutions/"+p+"/departments"}).done(function(t){if(t.departments.length){var r=$('select[name="departmentId"] option:first-child').clone();
$('select[name="departmentId"]').empty().html(r);
for(var s=0;
s<t.departments.length;
s++){$('select[name="departmentId"]').append('<option value="'+t.departments[s].id+'">'+t.departments[s].name+"</option>")
}$(".departments").show().find("select").prop("required",true).attr("aria-required","true");
$(".disciplines").hide();
$(".department-text-field, .discipline-text-field").hide().find("input").prop("required",false).attr("aria-required","false")
}else{$(".departments, .disciplines").hide().find("select").prop("required",false).attr("aria-required","false");
$(".department-text-field, .discipline-text-field").show().find("input").prop("required",true).attr("aria-required","true")
}}).fail(function(r){console.log("error")
})
}});
$('select[name="departmentId"]').change(function(){var p=$('select[name="institutionId"]').val();
var q=$(this).val();
if($('.book-bag-checkout [name="country"]').val()==="US"){if($(this).val()==""){$(".disciplines").hide()
}else{var r={departmentId:$(this).val().split("#")[0],parentId:$('select[name="institutionId"]').val()};
$.ajax({type:"POST",url:k.pmc2onecrmApiUrl+"/lookup/discipline",data:JSON.stringify(r),dataType:"json",contentType:"application/json",headers:{apikey:k.apiKey}}).done(function(u){if(u.records.length){var s=$('select[name="disciplineId"] option:first-child').clone();
$('select[name="disciplineId"]').empty().html(s);
for(var t=0;
t<u.records.length;
t++){if(u.records[t].Disciplines__c==="All Disciplines"||u.records.length==1){$('select[name="disciplineId"]').append('<option data-specality="'+u.records[t].Final_Specialty__c+'" value="'+u.records[t].Disciplines__c+'" selected>'+u.records[t].Disciplines__c+"</option>")
}else{$('select[name="disciplineId"]').append('<option data-specality="'+u.records[t].Final_Specialty__c+'" value="'+u.records[t].Disciplines__c+'">'+u.records[t].Disciplines__c+"</option>")
}}$(".disciplines").show().find("select").prop("required",true).attr("aria-required","true");
$(".discipline-text-field").hide().find("input").prop("required",false).attr("aria-required","false")
}else{$(".disciplines").hide().find("select").prop("required",false).attr("aria-required","false");
$(".discipline-text-field").show().find("input").prop("required",true).attr("aria-required","true")
}}).fail(function(s){k.sendExCpyError(s,"Exam Copy Discipline Lookup",r)
})
}}else{$.ajax({type:"GET",dataType:"json",url:HEProxyServer+"/api/institutions/"+p+"/departments/"+q+"/disciplines"}).done(function(u){if(u.disciplines.length){var s=$('select[name="disciplineId"] option:first-child').clone();
$('select[name="disciplineId"]').empty().html(s);
for(var t=0;
t<u.disciplines.length;
t++){$('select[name="disciplineId"]').append('<option value="'+u.disciplines[t].id+'">'+u.disciplines[t].name+"</option>")
}$(".disciplines").show().find("select").prop("required",true).attr("aria-required","true");
$(".discipline-text-field").hide().find("input").prop("required",false).attr("aria-required","false")
}else{$(".disciplines").hide().find("select").prop("required",false).attr("aria-required","false");
$(".discipline-text-field").show().find("input").prop("required",true).attr("aria-required","true")
}}).fail(function(s){console.log("error")
})
}})
}}function directResponse(){if($(".direct-response").length>0){$(".onedotcom-page-search").hide();
$(".info-menu").hide();
$(".menu-browse").hide();
$(".utility-nav--container").hide();
$(".footer-top-links").hide();
$(".footer-main-links").hide();
$(".header-nav--toggle-mobile").hide();
$("header").css("border-bottom","6px solid #007a9c")
}}var HE=HE||{};
HE.formatDate=function(d){var c,e,b="",a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
if(typeof d==="string"&&d!=""){c=d.replace(/-/g,"/");
e=/(.*?)\/(.*?)\/(.*?)$/;
c.replace(e,function(f,j,h,g){b=g+" "+a[(h-1)]+" "+j
})
}return b
};
HE.setSessionStorage=function(a,b){if(typeof(Storage)!=="undefined"){sessionStorage.setItem(a,b)
}};
HE.getSessionStorage=function(a){if(typeof(Storage)!=="undefined"){return sessionStorage.getItem(a)
}};
HE.removeSessionStorage=function(a){if(typeof(Storage)!=="undefined"){sessionStorage.removeItem(a)
}};
var HEProxyServer;
if(typeof globalProperties=="object"&&globalProperties.hasOwnProperty("globalProperties")){for(var i=0;
i<globalProperties.globalProperties.length;
i++){if(globalProperties.globalProperties[i].hasOwnProperty("HEProxyServer")){HEProxyServer=globalProperties.globalProperties[i].HEProxyServer;
break
}}}else{HEProxyServer="//instructors.pearsonhighered.com"
}var getGlobalProperty=function(b){if(typeof globalProperties!=="undefined"&&typeof globalProperties.globalProperties!=="undefined"){for(var a=0;
a<globalProperties.globalProperties.length;
a++){if(globalProperties.globalProperties[a].hasOwnProperty(b)){return globalProperties.globalProperties[a][b]
}}}else{console.warn("no globalProperties access")
}};
var cookieName="X-HeProxy-AuthToken";
var cookieUName="X-HeProxy-LoggedinEmail";
function hoursOfService(){var n=$(".column-control-hours-of-service--tags"),a=$(".column-control-hours-of-service--tiles"),j=$(".column-control-hours-of-service--results"),t=$(".column-control-hours-of-service--tags, .column-control-hours-of-service--tiles, .column-control-hours-of-service--results");
t.not(n.eq(0)).not(j).click(function(){var u=$(this);
t.removeClass("current");
u.addClass("current")
});
t.not(j).not(a).click(function(){var u=$(this);
$("html, body").animate({scrollTop:u.offset().top},500)
});
if(!($("body").hasClass("edit"))&&n.length>0){$("body").append('<script type="text/javascript" src="//cdn.rawgit.com/niklasvh/html2canvas/0.5.0-alpha2/dist/html2canvas.min.js"><\/script><script type="text/javascript" src="//cdn.rawgit.com/MrRio/jsPDF/master/dist/jspdf.min.js"><\/script>');
var r,k=[],s=[];
var h=n.eq(0),o=h.find("a"),f=n.eq(1),p=f.find("a"),d=a.find(".content-tile"),g=j.find(".content-tile"),m=j.find(".download-PDF");
f.find(".tag-list li a").prepend("<span></span>");
d.prepend("<span></span>");
h.addClass("current");
f.find("li").addClass("hidden");
o.each(function(){var x=$(this),v=x.attr("href"),w=v.substr(v.indexOf("=")+1),u=w.replace("%3a",":").replace(/\%2f/g,"/");
x.click(function(y){y.preventDefault();
o.removeClass("active");
x.addClass("active");
r=u;
f.find("li").removeClass("hidden");
g.removeClass("active").attr("id","invisible");
m.removeClass("active");
t.removeClass("current");
f.addClass("current");
jQuery.each(s,function(z,A){g.each(function(){var C=$(this),B=C.find(".content-tile-container").attr("data-tags").split(",");
jQuery.each(B,function(E,D){if(D==r){jQuery.each(B,function(G,F){if(F==A){C.addClass("active").removeAttr("id","invisible");
m.addClass("active")
}})
}})
})
})
})
});
p.each(function(){var x=$(this),v=x.attr("href"),w=v.substr(v.indexOf("=")+1),u=w.replace("%3a",":").replace(/\%2f/g,"/");
x.click(function(y){y.preventDefault();
var z=[];
if(!(x.hasClass("active"))){x.addClass("active");
k.push(u)
}else{x.removeClass("active");
k.splice(k.indexOf(u),1)
}d.removeClass("active").attr("id","invisible");
m.removeClass("active");
d.each(function(){var C=0;
var B=$(this),A=B.find(".content-tile-container").attr("data-tags").split(",");
jQuery.each(A,function(E,D){jQuery.each(k,function(F,G){if(D==G){B.addClass("active").removeAttr("id","invisible");
C=1
}})
});
if(C==0){B.removeClass("clicked")
}if(B.hasClass("clicked")){jQuery.each(A,function(D,E){z.push(E)
})
}});
s=z;
g.removeClass("active").attr("id","invisible");
jQuery.each(z,function(A,B){g.each(function(){var D=$(this),C=D.find(".content-tile-container").attr("data-tags").split(",");
jQuery.each(C,function(F,E){if(E==r){jQuery.each(C,function(H,G){if(G==B){D.addClass("active").removeAttr("id","invisible");
m.addClass("active")
}})
}})
})
})
})
});
d.each(function(){var w=$(this),v=w.find(".content-tile-container").attr("data-tags").split(","),u=w.find("a");
u.click(function(x){x.preventDefault()
});
w.click(function(){if(!(w.hasClass("clicked"))){w.addClass("clicked");
jQuery.each(v,function(x,y){s.push(y)
})
}else{w.removeClass("clicked");
jQuery.each(v,function(x,y){s.splice(s.indexOf(y),1)
})
}g.removeClass("active").attr("id","invisible");
jQuery.each(s,function(x,y){g.each(function(){var A=$(this),z=A.find(".content-tile-container").attr("data-tags").split(",");
jQuery.each(z,function(C,B){if(B==r){jQuery.each(z,function(E,D){if(D==y){A.addClass("active").removeAttr("id","invisible");
m.addClass("active")
}})
}})
})
})
})
});
var c=$(".column-control-hours-of-service--results .column-control"),l=c.width(),q=[595.28,841.89];
m.on("click",function(w){w.preventDefault();
var v=$("#main-content");
var u=1;
if(m.hasClass("active")){m.hide();
$(".column-control-hours-of-service--results .content-tile-tags").attr("id","invisible");
$(".column-control-hours-of-service--results .content-tile-subtitle").css({"margin-bottom":"20px","margin-top":"0",padding:"0 0 0 0"});
$(".column-control-hours-of-service--results figcaption h2").css({"margin-bottom":"0","margin-top":"40px",padding:"0 0 0 0"});
e();
m.show();
$(".column-control-hours-of-service--results .content-tile-subtitle").css({"margin-bottom":"0","margin-top":"0"});
$(".column-control-hours-of-service--results figcaption h2").css({"margin-bottom":"0","margin-top":"0"})
}});
function e(){var v=new jsPDF({unit:"px",format:"a4",pagesplit:true}),w=$(".column-control-hours-of-service--results").get(0),u={"#invisible":function(x,y){return true
}};
margins={top:20,bottom:40,left:20,width:570};
v.fromHTML(w,margins.left,margins.top,{width:margins.width,elementHandlers:u},function(x){v.save("pearson-schedule.pdf")
})
}function b(u){u.width((q[0]*1.33333)-80).css("max-width","none");
return html2canvas(u,{imageTimeout:2000,removeContainer:true})
}}}function instructorAccessRequest(){var w={allowedCustomerTypes:[43,6,40,41],pmc2onecrmApiUrl:getGlobalProperty("pmc2onecrmApiUrl"),apiKey:getGlobalProperty("pmc2onecrmApiKey"),sheerIdApiUrl:getGlobalProperty("sheerIdApiUrl"),productText:"",userId:null,newFlowCountryList:["US"],debug:true};
var n=w.debug?console.log.bind(console):function(){},p=w.debug?console.error.bind(console):function(){},l=w.debug?console.info.bind(console):function(){},a=w.debug?console.warn.bind(console):function(){};
if($(".terms-conditions-column").length){var g=window.location.href;
var r=/productCode=([^&]+)/.exec(g);
var x=/catalog_code=([^&]+)/.exec(g);
HE.setSessionStorage("userDetailsForIAR",window.location.search);
if(r!=null){r=r[1]
}if(x!=null){x=x[1]
}var k=r||x||"";
localStorage.setItem("productCode",k);
var C="";
$.ajax({dataType:"json",url:"/etc/clientlibs/one-dot-com/one-dot-com/us/json/aivproducts.json"}).done(function(K){productMapping=K;
for(var J=0;
J<productMapping.products.length;
J++){if(k==productMapping.products[J].productID){C=productMapping.products[J].productName;
break
}}n("final cookie check method");
if(!($.cookie("cq-authoring-mode"))){if(C!=""){$(".terms-conditions-column h1").html($(".terms-conditions-column h1").text()+C)
}else{window.open("/content/one-dot-com/one-dot-com/us/en/support/instructor-access-request/product-not-found.html","_self")
}}})
}var d=function(){var J=window.location.href;
var K=/catalog_code=([^&]+)/.exec(J);
var L="";
l("localStorage productCode value: "+localStorage.getItem("productCode"));
if(localStorage.getItem("productCode")){L=localStorage.getItem("productCode")
}if(K!=null){K=K[1];
L=K;
l("Setting localStorage productCode value to:"+L+" since query was found in the URL");
localStorage.setItem("productCode",L)
}$.ajax({dataType:"json",url:"/etc/clientlibs/one-dot-com/one-dot-com/us/json/aivproducts.json"}).done(function(N){productMapping=N;
for(var M=0;
M<productMapping.products.length;
M++){if(L==productMapping.products[M].productID){w.productText=productMapping.products[M].productName;
l("productText from aivproducts:"+w.productText);
break
}}}).fail(function(M){a("productText from aivproducts error",M)
})
};
var A=$(".instructor-access-request");
if(A.length){var I,B,D;
$(".submit-button button").addClass("button-primary--button-only");
$("body").append('<div class="shadowOverlayAccessRequest"></div>');
$(window).keydown(function(J){if(J.keyCode===13){J.preventDefault();
return false
}});
$(".zipGoButton").hide();
$.ajax({type:"POST",dataType:"JSON",url:window.location.pathname.replace(".html",".genericlist.json"),data:{type:"one-dot-com/one-dot-com/higher-ed/countries"}}).done(function(L){var K=L.list||[];
var J=$('.instructor-access-request select[name="country"]');
$.each(K,function(N,M){M=K[N].label;
N=K[N].value;
J.append($("<option></option>").attr("value",N).text(M))
});
$('.instructor-access-request select[name="country"]').val("US");
$('.instructor-access-request select[name="country"]').trigger("change")
}).fail(function(J){p("error")
});
$.ajax({type:"POST",dataType:"JSON",url:window.location.pathname.replace(".html",".genericlist.json"),data:{type:"one-dot-com/one-dot-com/higher-ed/role"}}).done(function(N){var K=N;
var M=K.list;
var J=$('.instructor-access-request select[name="role"]');
var L;
$.each(M,function(P,O){O=M[P].label;
P=M[P].value;
if(P!="Other"){J.append($("<option></option>").attr("value",P).text(O))
}else{L={key:O,value:P}
}});
if(L){J.append($("<option></option>").attr("value",L.value).text(L.key))
}}).fail(function(J){p("error")
});
$(".other-role").hide();
$('select[name="role"]').change(function(){if($('select[name="country"]').val()==="US"&&$('select[name="role"]').val()==="Other"){$(".other-role").show()
}else{$(".other-role").hide()
}});
$.ajax({type:"POST",dataType:"JSON",url:window.location.pathname.replace(".html",".genericlist.json"),data:{type:"one-dot-com/one-dot-com/higher-ed/aiv-honorific"}}).done(function(N){var K=N;
var M=K.list;
var J=$('.instructor-access-request select[name="honorific"]');
var L;
$.each(M,function(P,O){O=M[P].label;
P=M[P].value;
if(P!="other"){J.append($("<option></option>").attr("value",P).text(O))
}else{L={key:O,value:P}
}});
if(L){J.append($("<option></option>").attr("value",L.value).text(L.key))
}}).fail(function(J){p("error")
});
I=$('.instructor-access-request select[name="state"]').parents(".dropdown-list");
B=$('.instructor-access-request input[name="state"]').parents(".text-field");
var G,E;
var z=$(".zipCodeField label");
var t=z.html();
var s=$(".zipCodeField input").attr("placeholder");
$('.instructor-access-request select[name="country"]').change(function(){if($(this).val()!=""){$(".zipGoButton").hide();
$('.instructor-access-request input[name="zipCode"]').val("");
$('.instructor-access-request select[name="department"], .instructor-access-request select[name="institution"], .instructor-access-request select[name="discipline"]').parents(".dropdown-list").addClass("hide-siblings").hide();
$('.instructor-access-request select[name="customerType"]').parents(".dropdown-list").addClass("hide-siblings");
$('.instructor-access-request input[name="zipCode"]').parents(".text-field").addClass("hide-siblings");
$('.instructor-access-request input[name="institution"], .instructor-access-request input[name="department"], .instructor-access-request input[name="discipline"]').val("").parents(".text-field").hide();
var J=$(this).val();
$.ajax({type:"POST",dataType:"JSON",url:window.location.pathname.replace(".html",".genericlist.json"),data:{type:"state/"+J},timeout:10000}).done(function(O){var M=O;
if(M.list){var N=M.list;
E=B.detach();
if(G){G.insertAfter($('.instructor-access-request input[name="cityOrTown"]').parents(".text-field"));
G=null
}var L=$('.instructor-access-request select[name="state"]');
var K=L.find("option:first-child").clone();
L.prop("required",true).empty().html(K);
$.each(N,function(R,Q){Q=N[R].label;
R=N[R].value;
var S=R;
var P=S.split("-",2);
L.append($("<option></option>").attr("value",P[1]).text(Q))
})
}else{G=I.detach();
if(E){E.insertAfter($('.instructor-access-request input[name="cityOrTown"]').parents(".text-field"));
E=null
}$('.instructor-access-request select[name="state"]').prop("required",false)
}}).fail(function(K){n(K);
u(K,"genericlist.json")
});
if(J==="CA"||J==="GB"||J==="US"){z.html(t).parents(".text-field").addClass(".hide-siblings").find("input").attr("placeholder",s);
$(".zipGoButton").css("visibility","visible")
}else{z.html("Postal Code").parents(".text-field").removeClass(".hide-siblings").find("input").attr("placeholder","Please enter your postal code");
$(".zipGoButton").css("visibility","hidden")
}$(this).parents(".dropdown-list").removeClass("hide-siblings");
$('.instructor-access-request select[name="customerType"]').val("").parents(".dropdown-list").addClass("hide-siblings")
}});
$('.instructor-access-request select[name="customerType"]').change(function(){if($(this).val()!=""){var J=$('select[name="country"]').val();
$(this).parents(".dropdown-list").removeClass("hide-siblings");
if($(this).val()==="type3"&&J==="US"){var K=window.open("http://www.k12pearson.com/PH/rqstAccess/default.cfm","_self");
if(K){K.focus()
}else{alert("Please allow popups for this website")
}}n("customerType: ",$(this).val());
if(w.allowedCustomerTypes.indexOf($(this).val())>-1){$(".zipCodeField").show()
}if(($(this).val()=="6"||$(this).val()=="41"||$(this).val()==="Government")&&J!="US"){$(".zipCodeField").removeClass("hide-siblings").find("input").prop("required",false).attr("aria-required","false").val("");
$(".zipGoButton").hide();
$('input[name="institution"], input[name="department"], input[name="discipline"]').val("").prop("required",true).attr("aria-required","true").parents(".text-field").show();
$('select[name="institution"], select[name="department"], select[name="discipline"]').prop("required",false).attr("aria-required","false").parents(".dropdown-list").removeClass("hide-siblings").hide()
}else{$(".zipCodeField").show().find("input").prop("required",true).attr("aria-required","true").val("");
$('input[name="institution"], input[name="department"], input[name="discipline"]').val("").prop("required",false).attr("aria-required","false").parents(".text-field").hide();
$('select[name="institution"], select[name="department"], select[name="discipline"]').prop("required",true).attr("aria-required","true").parents(".dropdown-list").addClass("hide-siblings")
}}});
$('.instructor-access-request input[name="zipCode"]').on("input",function(J){J.preventDefault();
if($(this).val()!=""){$(".zipGoButton").show()
}else{$(".zipGoButton").hide()
}});
$('input[name="zipCode"]').keyup(function(J){if(J.keyCode===13){$(".zipGoButton").click()
}});
$(".zipGoButton").click(function(L){d();
L.preventDefault();
var M=$('.instructor-access-request input[name="zipCode"]');
var J=$('.instructor-access-request select[name="country"]').val();
var K={};
if(DMCP.FormValidator.validateField(M)){if(w.newFlowCountryList.indexOf(J)>-1){K={type:"POST",url:w.pmc2onecrmApiUrl+"/lookup/institution",data:JSON.stringify({country:J,zipcode:M.val().substring(0,3)}),dataType:"json",contentType:"application/json",headers:{apikey:w.apiKey},timeout:15000}
}else{K={type:"GET",dataType:"json",data:{country:J,postCode:M.val().substring(0,3)},url:HEProxyServer+"/api/institutions",}
}l("ajaxCallData: ",JSON.stringify(K));
$.ajax(K).done(function(R){n("institution lookup success",R);
if(w.newFlowCountryList.indexOf(J)>-1){if(R.records.length>0){$('.instructor-access-request input[name="zipCode"]').parents(".text-field").addClass("hide-siblings");
$('.instructor-access-request select[name="institution"]').parents(".dropdown-list").show();
$('.instructor-access-request input[name="institution"], .instructor-access-request input[name="department"], .instructor-access-request input[name="discipline"]').val("").prop("required",false).attr("aria-required","false").parents(".text-field").hide();
$('.instructor-access-request select[name="institution"], .instructor-access-request select[name="department"], .instructor-access-request select[name="discipline"]').prop("required",true).attr("aria-required","true").parents(".dropdown-list").addClass("hide-siblings");
$('.instructor-access-request input[name="zipCode"]').parents(".text-field").removeClass("hide-siblings");
var O=$('select[name="institution"] option:first-child').clone();
$('.instructor-access-request select[name="institution"]').empty().html(O);
for(var Q=0;
Q<R.records.length;
Q++){var P=R.records[Q].Account_Sheer_ID__c?R.records[Q].Account_Sheer_ID__c:"";
$('.instructor-access-request select[name="institution"]').append('<option value="'+R.records[Q].Id+'" data-sheer-id="'+P+'" data-segment="'+R.records[Q].Segment_Calculated__c+'">'+R.records[Q].Name+"</option>")
}$('.instructor-access-request select[name="institution"]').append('<option value="school-not-listed" data-segment="Managed">School not listed</option>');
if($(".error-msg").length>0){$(".error-msg").remove()
}}else{var N='<div class="error-msg try-again-error">No information exists for the input. Please try again.</div>';
if($(".error-msg").length>0){$(".error-msg").remove()
}$('.instructor-access-request select[name="department"], .instructor-access-request select[name="institution"], .instructor-access-request select[name="discipline"]').parents(".dropdown-list").addClass("hide-siblings").hide();
$(".zipCodeField").parent().parent().after(N)
}}else{if(R.institutions.length>0){$('.instructor-access-request input[name="zipCode"]').parents(".text-field").addClass("hide-siblings");
$('.instructor-access-request select[name="institution"]').parents(".dropdown-list").show();
$('.instructor-access-request input[name="institution"], .instructor-access-request input[name="department"], .instructor-access-request input[name="discipline"]').val("").prop("required",false).attr("aria-required","false").parents(".text-field").hide();
$('.instructor-access-request select[name="institution"], .instructor-access-request select[name="department"], .instructor-access-request select[name="discipline"]').prop("required",true).attr("aria-required","true").parents(".dropdown-list").addClass("hide-siblings");
$('.instructor-access-request input[name="zipCode"]').parents(".text-field").removeClass("hide-siblings");
var O=$('select[name="institution"] option:first-child').clone();
$('.instructor-access-request select[name="institution"]').empty().html(O);
for(var Q=0;
Q<R.institutions.length;
Q++){$('.instructor-access-request select[name="institution"]').append('<option value="'+R.institutions[Q].id+'">'+R.institutions[Q].name+"</option>")
}}else{$('.instructor-access-request input[name="zipCode"]').parents(".text-field").removeClass("hide-siblings");
$('.instructor-access-request input[name="discipline"], .instructor-access-request input[name="department"], .instructor-access-request input[name="institution"]').val("").prop("required",true).attr("aria-required","true").parents(".text-field").show();
$('.instructor-access-request select[name="institution"], .instructor-access-request select[name="department"], .instructor-access-request select[name="discipline"]').prop("required",false).attr("aria-required","false").parents(".dropdown-list").removeClass("hide-siblings").hide()
}}}).fail(function(N){p("institution lookup error",N);
u(N,"institution call",{country:J,postCode:M.val().substring(0,3)})
})
}});
var e=function(){$('.instructor-access-request input[name="discipline"], .instructor-access-request input[name="department"]').val("").prop("required",false).attr("aria-required","false").parents(".text-field").hide();
$('.instructor-access-request select[name="department"]').parents(".dropdown-list").show();
$('.instructor-access-request select[name="institution"], .instructor-access-request select[name="department"], .instructor-access-request select[name="discipline"]').parents(".dropdown-list").addClass("hide-siblings");
$('.instructor-access-request select[name="department"], .instructor-access-request select[name="discipline"]').prop("required",true).attr("aria-required","true");
$('.instructor-access-request select[name="discipline"]').parents(".dropdown-list").hide();
$('.instructor-access-request select[name="institution"]').parents(".dropdown-list").removeClass("hide-siblings");
var J=$('select[name="department"] option:first-child').clone();
$('.instructor-access-request select[name="department"]').empty().html(J)
};
var F=function(M){$('.instructor-access-request select[name="discipline"]').attr("aria-required","true").prop("required",true).parents(".dropdown-list").show();
$('.instructor-access-request input[name="discipline"]').val("").attr("aria-required","false").prop("required",false).parents(".text-field").hide();
$('.instructor-access-request select[name="department"], .instructor-access-request select[name="discipline"]').parents(".dropdown-list").addClass("hide-siblings");
$('.instructor-access-request select[name="department"]').parents(".dropdown-list").removeClass("hide-siblings");
var J=$('select[name="discipline"] option:first-child').clone();
$('.instructor-access-request select[name="discipline"]').empty().html(J);
if(!M){var L=$('.instructor-access-request select[name="department"] option:selected').attr("data-specialty")?$('.instructor-access-request select[name="department"] option:selected').attr("data-specialty"):"";
$('.instructor-access-request select[name="discipline"]').append('<option value="all" data-Specialty="'+L+'">All Disciplines</option>');
$('.instructor-access-request select[name="discipline"] option[value="all"]').prop("selected",true);
$('.instructor-access-request select[name="discipline"]').trigger("change")
}else{if(M&&M.records.length&&M.records[0].Disciplines__c==="All Disciplines"){l("all disciplines: ",M);
$('.instructor-access-request select[name="discipline"]').append('<option value="'+M.records[0].Disciplines__c+'" data-segment="'+M.records[0].Segment_Calculated__c+'" data-Specialty="'+M.records[0].Final_Specialty__c+'">'+M.records[0].Disciplines__c+"</option>");
$('.instructor-access-request select[name="discipline"] option[value="All Disciplines"]').prop("selected",true);
$('.instructor-access-request select[name="discipline"]').trigger("change")
}else{for(var K=0;
K<M.records.length;
K++){$('.instructor-access-request select[name="discipline"]').append('<option value="'+M.records[K].Disciplines__c+'" data-segment="'+M.records[K].Segment_Calculated__c+'" data-Specialty="'+M.records[K].Final_Specialty__c+'">'+M.records[K].Disciplines__c+"</option>")
}}}};
$('.instructor-access-request select[name="institution"]').change(function(){if($(this).val()!==""){var K=$(this).val();
var J=$('select[name="country"]').val();
if(w.newFlowCountryList.indexOf(J)>-1){if($(this).val()!=="school-not-listed"){console.log("Remove!");
$(".instructor-access-request input[name='institution']").closest(".text-field").hide();
$.ajax({type:"POST",url:w.pmc2onecrmApiUrl+"/lookup/department",data:JSON.stringify({parentId:K}),dataType:"json",contentType:"application/json",headers:{apikey:w.apiKey},timeout:15000}).done(function(P){if(P.records.length&&!P.records[0].Disciplines__c){e();
for(var N=0;
N<P.records.length;
N++){var M=P.records[N].Name?P.records[N].Name:P.records[N].Disciplines__c;
var L=P.records[N].Account_Sheer_ID__c?P.records[N].Account_Sheer_ID__c:"";
$('.instructor-access-request select[name="department"]').append('<option value="'+P.records[N].Id+'" data-sheer-id="'+L+'" data-segment="'+P.records[N].Segment_Calculated__c+'">'+M+"</option>")
}if(P.records.length===1&&!P.records[0].Id&&P.records[0].Disciplines__c){e();
$('.instructor-access-request select[name="department"]').append('<option value="All Departments" >All Departments</option>');
$('.instructor-access-request select[name="department"] option[value="All Departments"]').prop("selected",true);
l("Showing all departments");
$('.instructor-access-request select[name="department"]').trigger("change")
}else{if(P.records.length===1&&!P.records[0].Id){l("case 1-2");
$('.instructor-access-request select[name="department"] option[value=undefined]').prop("selected",true);
F()
}}}else{if((P.records.length&&P.records[0].Disciplines__c)||P.records.length==0){e();
var O="";
if(P.records[0]){O=P.records[0].Final_Specialty__c||""
}$('.instructor-access-request select[name="department"]').append('<option value="all" data-Specialty="'+O+'">All Departments</option>');
$('.instructor-access-request select[name="department"] option[value="all"]').prop("selected",true);
if(P.records.length===0||P.records.length===1){F()
}else{F(P)
}}else{if(!P.records.length){e();
$('.instructor-access-request select[name="department"]').append('<option value="All Departments" >All Departments</option>');
$('.instructor-access-request select[name="department"] option[value="All Departments"]').prop("selected",true);
F()
}else{$('.instructor-access-request input[name="department"], .instructor-access-request input[name="discipline"]').val("").prop("required",true).attr("aria-required","true").parents(".text-field").show();
$('.instructor-access-request select[name="institution"], .instructor-access-request select[name="department"], .instructor-access-request select[name="discipline"]').parents(".dropdown-list").removeClass("hide-siblings");
$('.instructor-access-request select[name="department"], .instructor-access-request select[name="discipline"').attr("aria-required","false").prop("required",false).parents(".dropdown-list").hide()
}}}}).fail(function(L){p("department lookup error",L);
u(L,"department lookup",JSON.stringify({parentId:K}))
})
}else{$(".instructor-access-request select[name='department']").closest(".dropdown-list").hide();
$(".instructor-access-request select[name='discipline']").closest(".dropdown-list").hide();
$(".instructor-access-request").find(".dropdown-list").removeClass("hide-siblings");
$('.instructor-access-request input[name="institution"], .instructor-access-request input[name="department"], .instructor-access-request input[name="discipline"]').parents(".text-field").show();
$('.instructor-access-request input[name="institution"]').attr("maxlength","255");
$('.instructor-access-request input[name="department"], .instructor-access-request input[name="discipline"]').attr("maxlength","80")
}}else{$.ajax({type:"GET",dataType:"json",url:HEProxyServer+"/api/institutions/"+K+"/departments"}).done(function(N){if(N.departments.length){$('.instructor-access-request input[name="discipline"], .instructor-access-request input[name="department"]').val("").prop("required",false).attr("aria-required","false").parents(".text-field").hide();
$('.instructor-access-request select[name="department"]').parents(".dropdown-list").show();
$('.instructor-access-request select[name="institution"], .instructor-access-request select[name="department"], .instructor-access-request select[name="discipline"]').parents(".dropdown-list").addClass("hide-siblings");
$('.instructor-access-request select[name="department"], .instructor-access-request select[name="discipline"]').prop("required",true).attr("aria-required","true");
$('.instructor-access-request select[name="discipline"]').parents(".dropdown-list").hide();
$('.instructor-access-request select[name="institution"]').parents(".dropdown-list").removeClass("hide-siblings");
var L=$('select[name="department"] option:first-child').clone();
$('.instructor-access-request select[name="department"]').empty().html(L);
for(var M=0;
M<N.departments.length;
M++){$('.instructor-access-request select[name="department"]').append('<option value="'+N.departments[M].id+'">'+N.departments[M].name+"</option>")
}}else{$('.instructor-access-request input[name="department"], .instructor-access-request input[name="discipline"]').val("").prop("required",true).attr("aria-required","true").parents(".text-field").show();
$('.instructor-access-request select[name="institution"], .instructor-access-request select[name="department"], .instructor-access-request select[name="discipline"]').parents(".dropdown-list").removeClass("hide-siblings");
$('.instructor-access-request select[name="department"], .instructor-access-request select[name="discipline"').attr("aria-required","false").prop("required",false).parents(".dropdown-list").hide()
}}).fail(function(L){p("error")
})
}}});
$('.instructor-access-request select[name="department"]').change(function(){if($(this).val()!=""){var K=$('.instructor-access-request select[name="institution"]').val();
var L=$(this).val();
var J=$('select[name="country"]').val();
if(w.newFlowCountryList.indexOf(J)>-1){$.ajax({type:"POST",url:w.pmc2onecrmApiUrl+"/lookup/discipline",data:JSON.stringify({parentId:K,departmentId:L}),dataType:"json",contentType:"application/json",headers:{apikey:w.apiKey},timeout:15000}).done(function(M){n("discipline lookup success",M);
if(M.records.length>0){F(M)
}else{$('.instructor-access-request select[name="department"], .instructor-access-request select[name="discipline"]').parents(".dropdown-list").removeClass("hide-siblings");
$('.instructor-access-request select[name="discipline"]').attr("aria-required","false").prop("required",false).parents(".dropdown-list").hide();
$('.instructor-access-request input[name="discipline"]').attr("aria-required","true").prop("required",true).parents(".text-field").show()
}}).fail(function(M){p("error");
u(M,"discipline lookup",JSON.stringify({parentId:K,departmentId:L}))
})
}else{$.ajax({type:"GET",dataType:"json",url:HEProxyServer+"/api/institutions/"+K+"/departments/"+L+"/disciplines"}).done(function(O){if(O.disciplines.length>0){$('.instructor-access-request select[name="discipline"]').attr("aria-required","true").prop("required",true).parents(".dropdown-list").show();
$('.instructor-access-request input[name="discipline"]').val("").attr("aria-required","false").prop("required",false).parents(".text-field").hide();
$('.instructor-access-request select[name="department"], .instructor-access-request select[name="discipline"]').parents(".dropdown-list").addClass("hide-siblings");
$('.instructor-access-request select[name="department"]').parents(".dropdown-list").removeClass("hide-siblings");
var M=$('select[name="discipline"] option:first-child').clone();
$('.instructor-access-request select[name="discipline"]').empty().html(M);
for(var N=0;
N<O.disciplines.length;
N++){$('.instructor-access-request select[name="discipline"]').append('<option value="'+O.disciplines[N].id+'">'+O.disciplines[N].name+"</option>")
}}else{$('.instructor-access-request select[name="department"], .instructor-access-request select[name="discipline"]').parents(".dropdown-list").removeClass("hide-siblings");
$('.instructor-access-request select[name="discipline"]').attr("aria-required","false").prop("required",false).parents(".dropdown-list").hide();
$('.instructor-access-request input[name="discipline"]').attr("aria-required","true").prop("required",true).parents(".text-field").show()
}}).fail(function(M){p("error")
})
}}});
var o={approvedExisting:"/content/one-dot-com/one-dot-com/us/en/support/instructor-access-request/existing-request-approved.html",approvedNew:"/content/one-dot-com/one-dot-com/us/en/support/instructor-access-request/new-request-approved.html",pendingNew:"/content/one-dot-com/one-dot-com/us/en/support/instructor-access-request/new-request-pending.html",pendingExisting:"/content/one-dot-com/one-dot-com/us/en/support/instructor-access-request/existing-request-pending.html",declined:"/content/one-dot-com/one-dot-com/us/en/support/instructor-access-request/existing-request-denied.html",tryAgain:"/content/one-dot-com/one-dot-com/us/en/support/instructor-access-request/try-again.html"};
var m=function(L){var K=["null","NULL","undefined"];
newValue="";
if(!L){return false
}function J(M){Object.keys(M).forEach(function(N){if(M[N]!==null&&typeof M[N]==="object"){J(M[N]);
return
}if(K.indexOf(M[N])>-1){l("Found un-allowed value in "+N);
M[N]=newValue
}})
}J(L);
return L
};
var f=function(){$("#instructor-access-request").css("overflow","hidden");
$(".spinner").show();
$("body .shadowOverlayAccessRequest").css("display","block")
};
var c=function(){$(".spinner").hide();
$("body .shadowOverlayAccessRequest").css("display","none");
$("#instructor-access-request").css("overflow","auto")
};
var q=function(J){if(!J){return false
}HE.removeSessionStorage("userDetailsForIAR");
window.open(J,"_self")
};
var j=function(M,J,O){var M=M||"";
var J=J||"";
var O="",L=new Date;
var K=Intl.DateTimeFormat().resolvedOptions().timeZone||"";
var N={form:"DAR",api:J,error:M,payload:O,userAgent:navigator.userAgent,time:L,timeZone:K};
a("Sending error --->",JSON.stringify(N));
$(document).trigger("apiError",N)
};
var u=function(K,J,L){c();
q(g=o.tryAgain);
j(K,J,L)
};
$('.instructor-access-request select[name="discipline"]').change(function(){l("discipline trigger change ");
if($(this).val()!=""){$(this).parents(".dropdown-list").removeClass("hide-siblings")
}});
$(".instructor-access-request button").on("click",function(P){if(grecaptcha.getResponse().length===0){document.getElementById("verify-captcha-error").setAttribute("class","showError recaptcha-validation-error");
P.preventDefault()
}else{P.preventDefault();
if($('.instructor-access-request select[name="discipline"]').parents(".dropdown-list").css("display")==="none"){disciplineValue=$('.instructor-access-request input[name="discipline"]').val();
$('.instructor-access-request select[name="discipline"]').removeAttr("required");
$('.instructor-access-request select[name="discipline"]').attr("aria-required",false);
$('.instructor-access-request select[name="discipline"]').attr("aria-invalid",false)
}else{disciplineValue=$('.instructor-access-request select[name="discipline"]').val()
}if($('.instructor-access-request select[name="department"]').parents(".dropdown-list").css("display")==="none"){departmentValue="";
departmentName=$('.instructor-access-request input[name="department"]').val();
departmentValueOther=$('.instructor-access-request input[name="department"]').val();
$('.instructor-access-request select[name="department"]').removeAttr("required");
$('.instructor-access-request select[name="department"]').attr("aria-required",false);
$('.instructor-access-request select[name="department"]').attr("aria-invalid",false)
}else{departmentValue=$('.instructor-access-request select[name="department"]').val();
departmentName=$('.instructor-access-request select[name="department"] option:selected').text();
departmentValueOther=""
}if($('.instructor-access-request select[name="institution"]').parents(".dropdown-list").css("display")==="none"){institutionValue="";
institutionName=$('.instructor-access-request input[name="institution"]').val();
institutionValueOther=$('.instructor-access-request input[name="institution"]').val()
}else{institutionValue=$('.instructor-access-request select[name="institution"]').val();
institutionName=$('.instructor-access-request select[name="institution"] option:selected').text();
institutionValueOther=""
}if(localStorage.getItem("productCode")){k=localStorage.getItem("productCode")
}else{k=""
}var J="";
if(localStorage.getItem("productISBN")){J=localStorage.getItem("productISBN");
localStorage.removeItem("productISBN")
}else{J=""
}var S="";
if(localStorage.getItem("productTitle")){S=localStorage.getItem("productTitle");
localStorage.removeItem("productTitle")
}else{S=""
}if($('.instructor-access-request [name="contactApproval"]:checked').val()==="contact"){contactApproval=true;
contactNotApproved=false
}else{contactApproval=false;
contactNotApproved=true
}if($('.instructor-access-request [name="publisherDetail"]:checked').val()==="adopt"){productAdopted=true
}else{productAdopted=false
}if($('select[name="country"]').val()==="US"&&$('select[name="role"]').val()==="Other"){roleValue=$('.instructor-access-request [name="other-role"]').val()
}else{roleValue=$('.instructor-access-request [name="role"]').val()
}var M=[],O=$('.instructor-access-request [name="iAm"]');
for(var N=0;
N<O.length;
N++){if($(O[N]).is(":checkbox:checked")){var K=$(O[N]).val();
if(["author","reviewer"].indexOf(K)>-1){M.push("Pearson "+K)
}else{M.push(K)
}}}var L={customerType:$('.instructor-access-request [name="customerType"]').val(),departmentChairEmail:$('.instructor-access-request [name="deptChairEmail"]').val().trim().toLowerCase(),departmentChairName:$('.instructor-access-request [name="deptChairName"]').val(),departmentChairPhone:$('.instructor-access-request [name="deptChairPhone"]').val(),departmentDisciplineId:(disciplineValue!="all"&&disciplineValue!="undefined")?disciplineValue:"",departmentId:departmentValue!="all"?departmentValue:"",dataSheerId:$('.instructor-access-request select[name="institution"] option:selected').attr("data-sheer-id"),disciplineSpecialty:$('.instructor-access-request select[name="discipline"] option:selected').attr("data-specialty")||"",departmentName:departmentName,departmentOther:departmentValueOther,institutionAddress1:$('.instructor-access-request [name="address1"]').val(),institutionAddress2:$('.instructor-access-request [name="address2"]').val(),institutionCityTown:$('.instructor-access-request [name="cityOrTown"]').val(),institutionCountryId:$('.instructor-access-request [name="country"]').val(),institutionCountry:$('.instructor-access-request [name="country"] option:selected').text(),institutionId:institutionValue,institutionName:institutionName,institutionOther:institutionValueOther,institutionSegment:$('.instructor-access-request select[name="institution"] option:selected').attr("data-segment"),institutionPostcode:$('.instructor-access-request [name="zipCode"]').val(),institutionState:$('.instructor-access-request [name="state"]').val(),institutionStateText:$('.instructor-access-request [name="state"] option:selected').text(),marketingContactPreference:contactApproval,marketingOtherEmail:contactApproval,marketingOtherPhone:contactApproval,marketingOtherPost:contactApproval,marketingPearsonEmail:contactApproval,marketingPearsonPhone:contactApproval,marketingPearsonPost:contactApproval,productCode:k,productIsAdopted:productAdopted,productPublisher:$('.instructor-access-request [name="publisher"]').val(),productSupplementsRequired:true,productISBN:J,productTitle:S,requesterEmail:$('.instructor-access-request [name="emailAddress"]').val().trim().toLowerCase(),requesterFirstName:$('.instructor-access-request [name="firstName"]').val().trim(),requesterIpAddress:"",requesterLastName:$('.instructor-access-request [name="lastName"]').val().trim(),requesterOfficePhone:$('.instructor-access-request [name="officePhone"]').val(),requesterRole:$('.instructor-access-request [name="role"]').val()!="Other"?$('.instructor-access-request [name="role"]').val():"Other",requesterOtherRole:$('.instructor-access-request [name="other-role"]').val(),requesterSuffix:$('.instructor-access-request [name="suffix"]').val(),requesterTitle:$('.instructor-access-request [name="honorific"]').val(),requesterType:M.length>0?M:"",requesterTypeOther:"",authorTitleEdition:$('.instructor-access-request [name="authorTitleEdition"]').val().trim(),Trust_Level__c:"",contactNotApproved:contactNotApproved,consideringBook:$('.instructor-access-request [name="publisherDetail"]:checked').val()==="cons"?true:false,adoptedBook:$('.instructor-access-request [name="publisherDetail"]:checked').val()==="adopt"?true:false,Enquiry_Type__c:"Digital Access",Validated_On__c:null,Validated_By__c:"Unvalidated"};
var R=function(){if(w.newFlowCountryList.indexOf($('select[name="country"]').val())>-1){l("adding isApproved flag");
$.extend(L,{isApproved:true});
L.departmentId=999999;
L.institutionId=999999
}l("HEProxyServerSubmit accessRequest:",JSON.stringify(L));
var T=function(U,V){var U=U||20000;
l("sending  HEProxyServer with timeout of "+U+" ms");
$.ajax({type:"POST",contentType:"application/json",data:JSON.stringify(m(L)),dataType:"JSON",url:HEProxyServer+"/api/instructors/access",timeout:U}).done(function(Y){c();
var X=Y.requestId;
n("requestId:"+X);
localStorage.setItem("requestId",X);
var W="";
if(w.newFlowCountryList.indexOf($('select[name="country"]').val())>-1){l("us flow");
q(o.approvedNew)
}else{l("non us flow");
if(Y.state=="APPROVED_EXISTING"){q(o.approvedExisting)
}if(Y.state=="APPROVED_NEW"){q(o.approvedNew)
}if(Y.state=="PENDING_NEW"){q(o.pendingNew)
}if(Y.state=="PENDING_EXISTING"){q(o.pendingExisting)
}if(Y.state=="DECLINED"){q(W=o.declined)
}}}).fail(function(W){if(!V){l("trying second HeP call...");
T(20000,true)
}else{u(W,"HEProxyServerSubmit",m(L))
}})
};
T(15000)
};
var Q={contactLookup:function(T){$.ajax({type:"GET",url:w.pmc2onecrmApiUrl+"/lookup?q=SELECT+Id,FirstName,LastName,Email,Trust_Level__c,Validated_By__c,Validated_On__c+from+Contact+Where+Email='"+T+"'+limit+1",dataType:"json",headers:{apikey:w.apiKey},timeout:15000}).done(function(U){n("contactLookup success!",U);
if(U.totalSize===1){Q.trustLevelCheck(U.records[0])
}else{if($('.instructor-access-request select[name="institution"]').val()!=="school-not-listed"){Q.collectTeacherPersonalInfo(true)
}if($('.instructor-access-request select[name="institution"]').val()==="school-not-listed"){Q.leadProductCall(false)
}}}).fail(function(U){p("contactLookup error!",U);
Q.collectTeacherPersonalInfo(true)
})
},trustLevelCheck:function(T){l("trustLevelCheck record:",T);
if(!T){return false
}w.userId=T.Id;
L.Trust_Level__c=T.Trust_Level__c;
if(["Low","Med","High"].indexOf(T.Trust_Level__c)!=-1){if(T.Validated_By__c){L.Validated_By__c=T.Validated_By__c
}if(T.Validated_On__c){L.Validated_On__c=T.Validated_On__c
}var U={Global_Marketing_Unsubscribe__c:L.contactNotApproved};
Q.patchContactUpdate(U);
R()
}else{if(T.Trust_Level__c==="Unknown"||T.Trust_Level__c===""||T.Trust_Level__c===null){if($('.instructor-access-request select[name="institution"]').val()!=="school-not-listed"){Q.collectTeacherPersonalInfo()
}else{Q.leadProductCall(false)
}}else{if(T.Trust_Level__c==="Restricted"){c();
q("/content/one-dot-com/one-dot-com/us/en/support/instructor-access-request/existing-request-denied.html")
}else{}}}},patchContactUpdate:function(T){l("patchContactUpdate id: "+w.userId+" payload:",T);
if(!w.userId||!T){if(!L.sheerID){return false
}else{}}$.ajax({type:"PATCH",url:w.pmc2onecrmApiUrl+"/patch/"+w.userId,data:JSON.stringify(T),dataType:"json",headers:{apikey:w.apiKey},processData:false,contentType:"application/json-patch+json",timeout:15000}).done(function(U){n("patchContactUpdate success")
}).fail(function(U){n("patchContactUpdate error",U)
})
},collectTeacherPersonalInfo:function(T){l("starting collectTeacherPersonalInfo...");
var U={firstName:L.requesterFirstName,lastName:L.requesterLastName,email:L.requesterEmail,organization:{id:L.dataSheerId?L.dataSheerId:"",name:L.institutionName}};
L.Validated_On__c=new Date().toISOString().slice(0,10);
$.ajax({type:"POST",url:w.sheerIdApiUrl,data:JSON.stringify(m(U)),dataType:"JSON",contentType:"application/json",timeout:10000}).done(function(W){n("collectTeacherPersonalInfo success",W);
if(W){L.currentStep=W.currentStep;
if(W.currentStep==="success"&&W.verificationId){L.Trust_Level__c="Low";
L.sheerID=W.verificationId;
L.Validated_By__c="SheerID";
var V={Global_Marketing_Unsubscribe__c:L.contactNotApproved,Trust_Level__c:L.Trust_Level__c,Validated_By__c:L.Validated_By__c,Validated_On__c:L.Validated_On__c};
if(T){l("skipping patch update!");
Q.leadProductCall(true)
}else{Q.patchContactUpdate(V);
R()
}}else{if(W.currentStep!="success"||!W.verificationId){L.Trust_Level__c="Unknown";
L.Validated_By__c="Unvalidated";
Q.leadProductCall(false)
}}}}).fail(function(V){p("collectTeacherPersonalInfo error",V);
L.Trust_Level__c="Unknown";
Q.leadProductCall(false)
})
},leadProductCall:function(U){if($('.instructor-access-request select[name="institution"]').val()==="school-not-listed"){L.disciplineSpecialty=$(".instructor-access-request input[name='discipline']").val();
L.departmentName=$(".instructor-access-request input[name='department']").val();
L.institutionName=$(".instructor-access-request input[name='institution']").val();
L.institutionId="";
L.Enquiry_Type__c="Digital Access-School not listed";
L.institutionSegment=""
}var T={records:[{attributes:{type:"Lead",referenceId:"ref1"},Salutation:L.requesterTitle,FirstName:L.requesterFirstName,LastName:L.requesterLastName,Email:L.requesterEmail,Phone:L.requesterOfficePhone,Status:"Open",Street:L.institutionAddress1,City:L.institutionCityTown,State:L.institutionStateText,Country:L.institutionCountry,PostalCode:L.institutionPostcode,Trust_Level__c:L.Trust_Level__c,Parent_Account__c:L.institutionId,Department__c:L.departmentName,Account_Lookup__c:(L.departmentName!="all"&&L.departmentName!="All Departments")?L.departmentId:"",Account_SheerID__c:L.dataSheerId?L.dataSheerId:"",Contact_Lookup__c:w.userId,LeadSource:"Online/Web",Enquiry_Type__c:L.Enquiry_Type__c,Validated_On__c:L.Validated_On__c,Validated_By__c:L.Validated_By__c,Account_Segment__c:L.institutionSegment,Requested_Specialty__c:L.disciplineSpecialty,Business_Unit__c:"Us Field Sales",Account_Record_Type__c:"Organisation",Organisation_Type1__c:"Higher Education",Role__c:L.requesterRole?"Educator":"",Role_Detail__c:L.requesterRole!="Other"?L.requesterRole:"Other",Other_Role_Detail__c:L.requesterOtherRole?L.requesterOtherRole:"",Company:L.institutionName,Market__c:L.institutionCountryId,CurrencyIsoCode:"USD",Global_Marketing_Unsubscribe__c:L.contactNotApproved,Customer_Relationship__c:L.requesterType.join("; "),SheerID_Verification_ID__c:L.sheerID?L.sheerID:"Unvalidated",SheerID_Status__c:L.currentStep,Lead_Products__r:{records:[{attributes:{type:"Lead_Product__c",referenceId:"ref2"},Status__c:"Requested",Requested_Product__c:w.productText,Book_Adopted__c:L.adoptedBook,Consider_Adopting__c:L.consideringBook,Product_In_Use__c:L.authorTitleEdition,Publisher_in_Use__c:L.productPublisher}]}}]};
l("Lead product call payload:",T);
$.ajax({type:"POST",url:w.pmc2onecrmApiUrl+"/lead",data:JSON.stringify(m(T)),dataType:"json",contentType:"application/json",headers:{apikey:w.apiKey}}).done(function(V){n("leadProductCall success",V);
if(V){if(V.hasErrors===true){Q.pardotProspect(L.requesterEmail,!U)
}else{Q.pardotProspect(L.requesterEmail,!U)
}}if(U){R()
}}).fail(function(V){p("leadProductCall error",V);
j(V,"leadProductCall",m(T));
Q.pardotProspect(L.requesterEmail,!U);
if(U){R()
}})
},pardotProspect:function(T,U){l("pardotProspect call email "+T);
if(!T){return false
}$.ajax({type:"POST",url:w.pmc2onecrmApiUrl+"/prospect/"+T,dataType:"json",contentType:"application/json",headers:{apikey:w.apiKey}}).done(function(V){n("pardotProspect success",V);
if(U){c();
q(o.pendingNew)
}}).fail(function(V){p("pardotProspect error",V);
if(U){c();
q(o.pendingNew)
}})
}};
if(DMCP.FormValidator.validateOnSubmit($(".instructor-access-request"),P)){f();
if(L.institutionCountryId!="US"){R()
}else{Q.contactLookup(L.requesterEmail)
}}}});
var v={lines:13,length:28,width:14,radius:42,scale:1,corners:1,color:"#000",opacity:0.25,rotate:0,direction:1,speed:1,trail:60,fps:20,zIndex:2000000000,className:"spinner",top:"50%",left:"50%",shadow:false,hwaccel:false,position:"fixed"};
$("body").attr("id","instructor-access-request");
var H=document.getElementById("instructor-access-request");
var h=new Spinner(v).spin(H);
$(".spinner").hide()
}var b=$(".resend-request");
if(b.length){$(".resend-request a").last().click(function(K){var J="";
if(localStorage.getItem("requestId")){J=localStorage.getItem("requestId")
}$.ajax({type:"POST",dataType:"json",url:HEProxyServer+"/api/instructors/access/"+J+"/resend"}).done(function(M){if(M.success){var L="/content/one-dot-com/one-dot-com/us/en/support/instructor-access-request/resend-registration-instructions.html";
window.open(L,"_self")
}}).fail(function(L){p("error")
})
})
}if(localStorage.getItem("requestId")){var y=localStorage.getItem("requestId");
y="Request ID: "+y;
$(".request-access-id-text").append("<p>"+y+"</p>");
localStorage.removeItem("requestId")
}$(".begin-registration-text a").click(function(O){O.preventDefault();
var J=$(this).attr("href");
var K=window.location.href;
var L=/requestId=([^&]+)/.exec(K);
if(L!=null){var M=L[1];
var N=M?M:"";
$.ajax({type:"GET",contentType:"application/json",dataType:"JSON",url:HEProxyServer+"/api/instructors/access/"+N}).done(function(X){productMapping=X;
var W=X.accessCode;
var V=[];
V=W.split("-");
var U="?accesscode_acc_code_1="+V[0];
var T="&accesscode_acc_code_2="+V[1];
var S="&accesscode_acc_code_3="+V[2];
var R="&accesscode_acc_code_4="+V[3];
var Q="&accesscode_acc_code_5="+V[4];
var P="&accesscode_acc_code_6="+V[5];
J=J+U+T+S+R+Q+P;
window.open(J,"_self")
})
}else{window.open(J,"_self")
}})
}if(typeof HE==="undefined"){var HE={}
}HE.repLocatorMethods={repLocatorResults:function(h){$("#representatives-list").remove();
$(".rep-locator-results").show();
$(".rep-locator-results").append('<div id="representatives-list"></div>');
if($(".rep-locator-results").find(".find-rep-results-arrow").length==0){$(".rep-locator-results").prepend('<span class="find-rep-results-arrow"></span>')
}for(var e=0;
e<h.representatives.length;
e++){var d="";
var f="";
var c="";
var b="";
var a="";
var g="";
if(h.representatives[e].disciplineName&&h.representatives[e].disciplineName!="null"){d=h.representatives[e].disciplineName
}if(h.representatives[e].firstName&&h.representatives[e].firstName!="null"){f=h.representatives[e].firstName
}if(h.representatives[e].lastName&&h.representatives[e].lastName!="null"){c=h.representatives[e].lastName
}if(h.representatives[e].phoneNumber&&h.representatives[e].phoneNumber!="null"){b=h.representatives[e].phoneNumber
}if(h.representatives[e].contactEmail&&h.representatives[e].contactEmail!="null"){a=h.representatives[e].contactEmail
}$("#representatives-list").prepend('<p class="discipline">'+d+"</p><h3>"+f+" "+c+"</h3><p>"+b+'</p><a class="email" href="mailto:'+a+'">'+a+"</a>")
}},officeResult:function(m){$("#representatives-list").remove();
if($(".rep-locator-results").find(".find-rep-results-arrow").length==0){$(".rep-locator-results").prepend('<span class="find-rep-results-arrow"></span>')
}$(".rep-locator-zip-code").removeClass("active").removeClass("is-visible").hide();
$(".rep-locator-results").show();
$(".rep-locator-results").append('<div id="representatives-list"></div>');
var j="";
var d="";
var c="";
var n="";
var g="";
var h="";
var b="";
var f="";
var a="";
var e="";
var l="";
if(m.officeName&&m.officeName!="null"){j=m.officeName
}if(m.address1&&m.address1!="null"){d=m.address1
}if(m.address2&&m.address2!="null"){c=m.address2
}if(m.phoneNumber&&m.phoneNumber!="null"){n="Tel.: ";
for(var k=0;
k<m.phoneNumber.length;
k++){if(k!=0){n=n+", "+m.phoneNumber[k]
}else{n=n+m.phoneNumber[k]
}}}if(m.contactEmail&&m.contactEmail!="null"){l="Email: ";
g=m.contactEmail
}if(m.city&&m.city!="null"){h=m.city
}if(m.state&&m.state!="null"){b=m.state
}if(m.country&&m.country!="null"){f=m.country
}if(m.postalCode&&m.postalCode!="null"){a=m.postalCode
}if(m.fax&&m.fax!="null"){e="FAX: "+m.fax
}$("#representatives-list").prepend('<span class="discipline">'+j+"</span><span>"+d+"</span><span> "+c+"</span><span>"+h+"</span><span>"+b+"</span><span>"+f+"</span><span>"+a+"</span><span>"+n+"</span><span>"+e+'</span><a class="email" href="mailto:'+g+'">'+l+g+"</a>");
$("#representatives-list span").css("display","block");
$(".rep-locator-zip-code").removeClass("active")
},startOver:function(a){$(".rep-locator .rep-locator-customer-type-box").show();
$(".rep-locator-results").hide();
$(".rep-locator-zip-code").addClass("active is-visible").show();
$(".rep-locator-zip-code").nextAll().hide();
$(".rep-locator-error-message").html("<p>We have no schools that match your search criteria. Please try again using a different zip or postal code.</p>").css("display","none");
$('input[name="postCode"]').val("");
$(".dept-dropdown").removeClass("active");
$(".country-dropdown").prepend('<span class="find-rep-arrow"></span>')
}};
function repLocator(){var d=$(".rep-locator");
var b={countries:[]};
$(".rep-req-form").hide();
if(d.length){$(window).keydown(function(l){if(l.keyCode==13){l.preventDefault();
return false
}});
if($('select[name="country"]').value==""){$(".country-dropdown").addClass("active");
$(".country-dropdown").prepend('<span class="find-rep-arrow"></span>')
}$('input[name="postCode"]').keyup(function(l){if(l.keyCode==13){$(".rep-locator-button").click()
}});
$.ajax({dataType:"json",url:"/us/etc/clientlibs/one-dot-com/one-dot-com/us/json/country.json"}).done(function(l){b=l
});
var a={lines:13,length:28,width:14,radius:42,scale:1,corners:1,color:"#000",opacity:0.25,rotate:0,direction:1,speed:1,trail:60,fps:20,zIndex:2000000000,className:"spinner",top:"50%",left:"50%",shadow:false,hwaccel:false,position:"fixed"};
$("body").attr("id","rep-locator");
var f=document.getElementById("rep-locator");
var k=new Spinner(a).spin(f);
$(".spinner").hide();
$.ajax({type:"POST",dataType:"JSON",url:window.location.pathname.replace(".html",".genericlist.json"),data:{type:"one-dot-com/one-dot-com/higher-ed/countries"}}).done(function(n){var m=n.list||[];
var l=$('.rep-locator select[name="country"]');
$.each(m,function(p,o){o=m[p].label;
p=m[p].value;
l.append($("<option></option>").attr("value",p).text(o))
});
$('.rep-locator select[name="country"]').val("US");
$('.rep-locator select[name="country"]').trigger("change");
$(".startOver").show()
}).fail(function(l){console.log("error")
});
$('.rep-locator select[name="country"]').change(function(){if($(this).val()!=""){if($('.rep-locator select[name="country"]').val()=="CA"){window.location.href="https://www.pearson.com/ca/en/contact-us/higher-education.html"
}$(".rep-locator-zip-code").nextAll().hide();
$('.rep-locator select[name="institutionId"]').parents(".dropdown-list");
$(".rep-locator-error-message").css("display","none");
$(".rep-locator-success-message").css("display","none");
$('input[name="postCode"]').val("");
$(".country-dropdown").removeClass("active");
$(".rep-locator-zip-code").addClass("active").addClass("is-visible").show();
$(".rep-locator-zip-code").prepend('<span class="find-rep-arrow"></span>');
var n={country:this.value};
var m=false;
for(var l=0;
l<b.countries.length;
l++){if(n.country==b.countries[l].countryID){m=true;
HE.repLocatorMethods.officeResult(b.countries[l]);
return
}}if(!m){$.ajax({type:"GET",dataType:"json",data:n,url:HEProxyServer+"/api/representatives"}).done(function(o){if(o.representatives.length){HE.repLocatorMethods.repLocatorResults(o)
}else{$(".rep-locator .rep-locator-customer-type-box").show();
$(".rep-locator-results").hide()
}}).fail(function(o){console.log("error")
})
}}else{HE.repLocatorMethods.startOver()
}});
$(".startOver a").click(function(l){l.preventDefault();
$('.rep-locator select[name="country"]').val("US");
$(".rep-locator .country-dropdown").removeClass("active");
$(".rep-locator-zip-code").show();
HE.repLocatorMethods.startOver()
});
$(".rep-locator-button").click(function(t){t.preventDefault();
$('.rep-locator input[name="postCode"]').val($('.rep-locator input[name="postCode"]').val().replace(/ +?/g,"").replace(/-/g,""));
var o=$('.rep-locator input[name="postCode"]'),v=o.val(),n=o.val().substring(0,3),m=$(".rep-locator-zip-code"),l=$(".schools-dropdown"),p=$(".dept-dropdown"),r=$(".rep-locator-results"),s=$(".rep-locator-error-message"),u=$('.rep-locator select[name="institutionId"]');
if(v.length>2&&DMCP.FormValidator.validateField(o)){m.nextAll().hide();
u.nextAll().hide();
p.removeClass("active");
r.hide();
s.css("display","none");
$(".rep-locator-success-message").css("display","none");
$(".rep-req-form").hide();
if($('.rep-locator select[name="country"]').val()!="US"){var q={country:$('.rep-locator select[name="country"]').val(),postCode:n};
$.ajax({type:"GET",dataType:"json",data:q,url:HEProxyServer+"/api/institutions",}).done(function(y){if(y.institutions.length>0){var w=$('.rep-locator select[name="institutionId"] option:first-child').html();
u.html('<option value="">'+w+"</option>");
for(var x=0;
x<y.institutions.length;
x++){$('.rep-locator select[name="institutionId"]').append('<option value="'+y.institutions[x].id+'">'+y.institutions[x].name+"</option>")
}m.removeClass("hide-siblings active");
$(".rep-req-form").hide();
l.addClass("active").show().prepend('<span class="find-rep-arrow"></span>').nextAll().hide()
}else{s.html("<p>We have no schools that match your search criteria. Please try again using a different zip or postal code.</p>").css("display","block")
}}).fail(function(w){console.log(w)
})
}else{$(".spinner").show();
var q={zipcode:n};
$.ajax({type:"POST",url:h.pmc2onecrmApiUrl+"/lookup/institution",data:JSON.stringify(q),dataType:"json",contentType:"application/json",headers:{apikey:h.apiKey}}).done(function(y){$(".spinner").hide();
if(y.records.length>0){console.log("YEY!");
var w=$('.rep-locator select[name="institutionId"] option:first-child').html();
u.html('<option value="">'+w+"</option>");
for(var x=0;
x<y.records.length;
x++){$('.rep-locator select[name="institutionId"]').append('<option value="'+y.records[x].Id+'" Segment-Calculated-c="'+y.records[x].Segment_Calculated__c+'" Account-Sheer-ID-c="'+y.records[x].Account_Sheer_ID__c+'">'+y.records[x].Name+"</option>")
}$('.rep-locator select[name="institutionId"]').append('<option value="school-not-listed" data-segment="Managed">School not listed</option>');
m.removeClass("hide-siblings active");
$(".rep-req-form").hide();
$('.rep-locator select[name="departmentId"]').removeAttr("disabled");
$('.rep-locator select[name="disciplineId"]').removeAttr("disabled");
l.addClass("active").show().prepend('<span class="find-rep-arrow"></span>').nextAll().hide()
}else{$(".spinner").hide();
s.html("<p>We have no schools that match your search criteria. Please try again using a different zip or postal code.</p>").css("display","block")
}}).fail(function(w){console.log(w)
})
}}else{m.nextAll().hide();
u.nextAll();
p.removeClass("active");
r.hide();
$(".rep-req-form").hide();
s.css("display","none").html("<p>Please enter a valid zip or postal code</p>").css("display","block");
o.parent().addClass("has-error")
}});
$('.rep-locator select[name="institutionId"]').change(function(){var l;
console.log($(".form.section.rep-req-form").next());
if($('.rep-locator select[name="institutionId"]').val()==="school-not-listed"){$(".form.section.rep-req-form").next().hide()
}if($('.rep-locator select[name="institutionId"]').val()!=="school-not-listed"){$(".form.section.rep-req-form").next().show()
}var m=$(this).val();
$(".rep-req-form").hide();
$('.rep-locator select[name="departmentId"]').removeAttr("disabled");
$('.rep-locator select[name="disciplineId"]').removeAttr("disabled");
if($('.rep-locator select[name="country"]').val()!="US"){$.ajax({type:"GET",dataType:"json",url:HEProxyServer+"/api/institutions/"+m+"/departments"}).done(function(w){if(w.departments.length){$(".rep-locator .rep-locator-customer-type-box").show();
$(".rep-locator-results").hide();
$(".rep-req-form").hide();
var t=$('.rep-locator select[name="departmentId"] option:first-child').html();
$('.rep-locator select[name="departmentId"]').html('<option value="">'+t+"</option>");
for(var v=0;
v<w.departments.length;
v++){$('.rep-locator select[name="departmentId"]').append('<option value="'+w.departments[v].id+'">'+w.departments[v].name+"</option>")
}$(".schools-dropdown").removeClass("active");
$(".dept-dropdown").addClass("active").show();
$(".dept-dropdown").nextAll().hide();
$(".dept-dropdown").prepend('<span class="find-rep-arrow"></span>')
}else{var u={country:$('.rep-locator select[name="country"]').val(),postCode:$('.rep-locator input[name="postCode"]').val(),institutionId:$('.rep-locator select[name="institutionId"]').val()};
$.ajax({type:"GET",dataType:"json",data:u,url:HEProxyServer+"/api/representatives"}).done(function(x){HE.repLocatorMethods.repLocatorResults(x)
}).fail(function(x){console.log("error")
})
}}).fail(function(t){console.log("error")
})
}else{var r=function(t){return'<div id="school-not-listed">'+t.map(function(u){return'<div class="default text-field section"><div class=""><label for="not-listed-'+u+'" class="control-label">'+u+'<span class="form-field-required" style="float: none; visibility: visible; margin-left: 5px;">*</span></label><span class="error-message"></span><input id="not-listed-'+u+'" name="not-listed-'+u+'" type="text" class="form-control"  required="" aria-required="true" data-required-msg="" aria-invalid="true" /></div></div>'
}).join("")+"</div>"
};
if($('.rep-locator select[name="institutionId"]').val()==="school-not-listed"&&$("#school-not-listed").length===0){var p=document.querySelector("form.forms");
var n=r(["Institution","Department","Discipline"]);
var s=document.createRange().createContextualFragment(n);
p.appendChild(s);
$(".rep-req-form").show();
$(".dept-dropdown, .descipline-dropdown").css("display","none");
$('.rep-locator input[name="not-listed-Institution"]').attr("maxlength","255");
$('.rep-locator input[name="not-listed-Department"], .rep-locator input[name="not-listed-Discipline"]').attr("maxlength","80");
$.ajax({type:"POST",dataType:"JSON",url:window.location.pathname.replace(".html",".genericlist.json"),data:{type:"one-dot-com/one-dot-com/higher-ed/role"}}).done(function(x){var u=x;
var w=u.list;
var t=$('.rep-req-form select[name="role"]');
var v;
$.each(w,function(z,y){y=w[z].label;
z=w[z].value;
if(z!="Other"){t.append($("<option></option>").attr("value",z).text(y))
}else{v={key:y,value:z}
}});
if(v){t.append($("<option></option>").attr("value",v.value).text(v.key))
}}).fail(function(t){console.log(t)
});
var o=$('.rep-locator select[name="country"]').val();
$('.rep-req-form select[name="country"]').val(o);
$('.rep-req-form select[name="country"]').attr("disabled","disabled");
$.ajax({type:"POST",dataType:"JSON",url:window.location.pathname.replace(".html",".genericlist.json"),data:{type:"state/"+o}}).done(function(w){var u=w;
if(u.list){$('input[name="state"]').parents(".text-field").detach();
$('select[name="state"]').attr("required",true);
var v=u.list;
var t=$('select[name="state"]');
$.each(v,function(z,y){y=v[z].label;
z=v[z].value;
var A=z;
var x=A.split("-",2);
t.append($("<option></option>").attr("value",x[1]).text(y))
})
}else{$('select[name="state"]').parents(".dropdown-list").detach();
$('select[name="state"]').attr("required",false)
}}).fail(function(t){console.log(t)
});
return
}$(".spinner").show();
if($("#school-not-listed").length){$("#school-not-listed").remove()
}var q={parentId:$('.rep-locator select[name="institutionId"]').val()};
$.ajax({type:"POST",url:h.pmc2onecrmApiUrl+"/lookup/department",data:JSON.stringify(q),dataType:"json",contentType:"application/json",headers:{apikey:h.apiKey}}).done(function(x){$(".rep-locator .rep-locator-customer-type-box").show();
$(".rep-locator-results").hide();
$(".rep-req-form").hide();
var u=$('.rep-locator select[name="departmentId"] option:first-child').html();
$('.rep-locator select[name="departmentId"]').html('<option value="">'+u+"</option>");
if(x.totalSize>0&&x.records[0].attributes.type=="Rep_Locator_Result__c"&&x.records[0].Disciplines__c){console.log("No Departments");
$('.rep-locator select[name="departmentId"]').append('<option value="" Segment-Calculated-c="'+x.records[0].Parent_Account__r.Segment_Calculated__c+'" selected="true">All Departments</option>');
$(".schools-dropdown").removeClass("active");
$('.rep-locator select[name="departmentId"]').attr("disabled","disabled");
$(".dept-dropdown").addClass("active").show();
$(".dept-dropdown").nextAll().hide();
$(".dept-dropdown").prepend('<span class="find-rep-arrow"></span>');
var w=$('.rep-locator select[name="disciplineId"] option:first-child').html();
$('.rep-locator select[name="disciplineId"]').html('<option value="">'+w+"</option>");
for(var v=0;
v<x.records.length;
v++){$('.rep-locator select[name="disciplineId"]').append('<option value="" Final-Specialty-c="'+x.records[v].Final_Specialty__c+'" Parent-Account-c="" Dept-Account-c="" Segment-Calculated-c="">'+x.records[v].Disciplines__c+"</option>")
}$(".dept-dropdown").removeClass("active");
$(".descipline-dropdown").addClass("active").show();
$(".descipline-dropdown").prepend('<span class="find-rep-arrow"></span>');
$(".spinner").hide()
}else{if(x.totalSize==0){console.log("department totalsize 0");
$('.rep-locator select[name="departmentId"]').append('<option value="" Segment-Calculated-c="" selected="true">All Departments</option>');
$(".schools-dropdown").removeClass("active");
$('.rep-locator select[name="departmentId"]').attr("disabled","disabled");
$(".dept-dropdown").addClass("active").show();
$(".dept-dropdown").nextAll().hide();
$(".dept-dropdown").prepend('<span class="find-rep-arrow"></span>');
var w=$('.rep-locator select[name="disciplineId"] option:first-child').html();
$('.rep-locator select[name="disciplineId"]').html('<option value="">'+w+"</option>");
$('.rep-locator select[name="disciplineId"]').append('<option value="" Final-Specialty-c="" Parent-Account-c="" Dept-Account-c="" Segment-Calculated-c="" selected ="true">All Disciplines</option>');
$(".dept-dropdown").removeClass("active");
$('.rep-locator select[name="disciplineId"]').attr("disabled","disabled");
$(".descipline-dropdown").addClass("active").show();
$(".descipline-dropdown").prepend('<span class="find-rep-arrow"></span>');
$(".rep-locator-success-message").css("display","none");
var t=$('.rep-locator select[name="institutionId"] option:selected').attr("Segment-Calculated-c");
if(t=="Managed"){h.displayForm()
}else{if(t=="Enterprise"||t=="Strategic"||t=="Emerging"){h.getRepLocator()
}}}else{console.log("Has departments");
for(var v=0;
v<x.records.length;
v++){$('.rep-locator select[name="departmentId"]').append('<option value="'+x.records[v].Id+'" Segment-Calculated-c="'+x.records[v].Segment_Calculated__c+'">'+x.records[v].Name+"</option>")
}$(".schools-dropdown").removeClass("active");
$(".dept-dropdown").addClass("active").show();
$(".dept-dropdown").nextAll().hide();
$(".dept-dropdown").prepend('<span class="find-rep-arrow"></span>');
$(".spinner").hide()
}}}).fail(function(t){$(".spinner").hide();
console.log("error")
})
}});
$('.rep-locator select[name="departmentId"]').change(function(){$(".rep-req-form").hide();
if($('.rep-locator select[name="country"]').val()!="US"){var l={country:$('.rep-locator select[name="country"]').val(),postCode:$('.rep-locator input[name="postCode"]').val(),institutionId:$('.rep-locator select[name="institutionId"]').val(),departmentId:$('.rep-locator select[name="departmentId"]').val()};
$.ajax({type:"GET",dataType:"json",data:l,url:HEProxyServer+"/api/representatives"}).done(function(n){console.log("success");
HE.repLocatorMethods.repLocatorResults(n)
}).fail(function(n){console.log("error")
})
}else{$(".spinner").show();
if($(this).val()!=""){var m={departmentId:$('.rep-locator select[name="departmentId"]').val(),parentId:$('.rep-locator select[name="institutionId"]').val()};
$.ajax({type:"POST",url:h.pmc2onecrmApiUrl+"/lookup/discipline",data:JSON.stringify(m),dataType:"json",contentType:"application/json",headers:{apikey:h.apiKey}}).done(function(q){$(".spinner").hide();
if(q.records.length>0){$(".rep-locator-results").hide();
var n=$('.rep-locator select[name="disciplineId"] option:first-child').html();
$('.rep-locator select[name="disciplineId"]').html('<option value="">'+n+"</option>");
for(var o=0;
o<q.records.length;
o++){var p=q.records[o].Final_Specialty__c!=null?q.records[o].Final_Specialty__c:"";
$('.rep-locator select[name="disciplineId"]').append('<option value="'+q.records[o].id+'" Final-Specialty-c="'+p+'" Parent-Account-c="'+q.records[o].Parent_Account__c+'" Dept-Account-c="'+q.records[o].Dept_Account__c+'" Segment-Calculated-c="'+q.records[o].Parent_Account__r.Segment_Calculated__c+'">'+q.records[o].Disciplines__c+"</option>")
}$(".dept-dropdown").removeClass("active");
$(".descipline-dropdown").addClass("active").show();
$(".descipline-dropdown").nextAll().hide();
$(".descipline-dropdown").prepend('<span class="find-rep-arrow"></span>')
}}).fail(function(n){$(".spinner").hide();
console.log("error")
})
}}});
var h={pmc2onecrmApiUrl:getGlobalProperty("pmc2onecrmApiUrl"),apiKey:getGlobalProperty("pmc2onecrmApiKey"),sheerIdApiUrl:getGlobalProperty("sheerIdApiUrl"),getRepLocator:function(){var l={parentId:$('.rep-locator select[name="institutionId"] option:selected').val(),departmentId:$('.rep-locator select[name="departmentId"] option:selected').val(),discipline:$('.rep-locator select[name="disciplineId"] option:selected').text(),speciality:[$('.rep-locator select[name="disciplineId"] option:selected').attr("final-specialty-c")!=null&&$('.rep-locator select[name="disciplineId"] option:selected').attr("final-specialty-c")!="null"?$('.rep-locator select[name="disciplineId"] option:selected').attr("final-specialty-c"):""]};
$.ajax({type:"POST",url:h.pmc2onecrmApiUrl+"/lookup/repLocator",data:JSON.stringify(l),dataType:"json",contentType:"application/json",headers:{apikey:h.apiKey}}).done(function(m){console.log("repLocator call success");
if(m.totalSize>0&&m.records[0].Rep_ID__r){h.repLocatorResults(m)
}else{h.displayForm();
$(".spinner").hide()
}}).fail(function(m){console.log("error");
$(".spinner").hide()
})
},repLocatorResults:function(p){$("#representatives-list").remove();
$(".rep-locator-results").show();
$(".rep-locator-results").append('<div id="representatives-list"></div>');
if($(".rep-locator-results").find(".find-rep-results-arrow").length==0){$(".rep-locator-results").prepend('<span class="find-rep-results-arrow"></span>')
}for(var o=0;
o<p.records.length;
o++){var n="";
var m="";
var l="";
if(p.records[o].Rep_ID__r!=null){if(p.records[o].Disciplines__c&&p.records[o].Disciplines__c!="null"){n=p.records[o].Disciplines__c
}if(p.records[o].Rep_ID__r.Name&&p.records[o].Rep_ID__r.Name!="null"){m=p.records[o].Rep_ID__r.Name
}if(p.records[o].Rep_ID__r.Email&&p.records[o].Rep_ID__r.Email!="null"){l=p.records[o].Rep_ID__r.Email
}$("#representatives-list").prepend('<p class="discipline">'+n+"</p><h3>"+m+'</h3><a class="email" href="mailto:'+l+'">'+l+"</a>")
}}$(".spinner").hide()
},leadProductCall:function(){var q="Rep Locator",p;
if($('.rep-locator select[name="departmentId"] option:selected').attr("Segment-Calculated-c")!="Managed"){q="Rep Locator-No Match"
}var l,m,n;
if($("select[name='institutionId']").val()==="school-not-listed"){q="Rep Locator-School not listed"
}if($("#school-not-listed").length){l=$("#school-not-listed").find("#not-listed-Institution").val();
m=$("#school-not-listed").find("#not-listed-Department").val();
n=$("#school-not-listed").find("#not-listed-Discipline").val();
p=""
}else{l=$('.rep-locator select[name="institutionId"] option:selected').text();
m=$('.rep-locator select[name="departmentId"] option:selected').text();
n=$('.rep-locator select[name="disciplineId"] option:selected').attr("final-specialty-c")!==null&&$('.rep-locator select[name="disciplineId"] option:selected').attr("final-specialty-c")!=="null"?$('.rep-locator select[name="disciplineId"] option:selected').attr("final-specialty-c"):"";
p=$('.rep-locator select[name="institutionId"] option:selected').val()
}var o={records:[{attributes:{type:"Lead",referenceId:"ref1"},Salutation:"",FirstName:$('.rep-req-form input[name="firstName"]').val(),LastName:$('.rep-req-form input[name="lastName"]').val(),Email:$('.rep-req-form input[name="emailAddress"]').val().trim().toLowerCase(),Phone:$('.rep-req-form input[name="officePhone"]').val(),Status:"Open",Street:$('.rep-req-form input[name="address1"]').val()+", "+$('.rep-req-form input[name="address2"]').val(),City:$('.rep-req-form input[name="city"]').val(),State:$('.rep-req-form select[name="state"] option:selected').text(),Country:$('.rep-req-form select[name="country"] option:selected').text(),PostalCode:$('.rep-req-form input[name="zipCode"]').val(),Parent_Account__c:p,Department__c:m,Account_Lookup__c:$('.rep-locator select[name="departmentId"] option:selected').val(),Contact_Lookup__c:"",Account_SheerID__c:$('.rep-locator select[name="disciplineId"] option:selected').attr("Account-Sheer-ID-c"),LeadSource:"Online/Web",Enquiry_Type__c:q,Account_Segment__c:$('.rep-locator select[name="institutionId"] option:selected').attr("Segment-Calculated-c"),Requested_Specialty__c:n,Business_Unit__c:"US Field Sales",Account_Record_Type__c:"Organisation",Organisation_Type1__c:"Higher Education",Role__c:"Educator",Role_Detail__c:$('.rep-req-form select[name="role"]').val(),Other_Role_Detail__c:$('.rep-req-form select[name="role"]').val()=="Other"?$('.rep-req-form input[name="other-role"]').val():"",Company:l,CurrencyIsoCode:"USD",Comments__c:$('.rep-req-form textarea[name="help-detail"]').val(),Global_Marketing_Unsubscribe__c:"true"}]};
console.table("lead payload: "+JSON.stringify(o));
$.ajax({type:"POST",url:h.pmc2onecrmApiUrl+"/lead",data:JSON.stringify(o),dataType:"json",contentType:"application/json",headers:{apikey:h.apiKey}}).done(function(r){console.log("lead call success",r);
if(r.hasErrors==false){h.pardonProspect($('.rep-req-form input[name="emailAddress"]').val())
}else{console.log("lead call failed")
}}).fail(function(r){console.error("lead Call error",r)
})
},pardonProspect:function(l){console.info("pardonProspect call email "+l.toString());
if(!l){return false
}$.ajax({type:"POST",url:h.pmc2onecrmApiUrl+"/prospect/"+l,dataType:"json",contentType:"application/json",headers:{apikey:h.apiKey}}).done(function(n){console.log("pardonProspect success",n);
g();
$(".rep-req-form").hide();
$(".rep-locator-success-message").css("display","block");
$(".spinner").hide();
var m="/us/en/contact-us/rep-request-submitted.html";
window.open(m,"_self")
}).fail(function(m){console.error("pardonProspect error",m)
})
},displayForm:function(){var l=$('.rep-locator select[name="country"]').val();
$('.rep-req-form select[name="country"]').val(l);
$('.rep-req-form select[name="country"]').attr("disabled","disabled");
$.ajax({type:"POST",dataType:"JSON",url:window.location.pathname.replace(".html",".genericlist.json"),data:{type:"state/"+l}}).done(function(p){var n=p;
if(n.list){$('input[name="state"]').parents(".text-field").detach();
$('select[name="state"]').attr("required",true);
var o=n.list;
var m=$('select[name="state"]');
$.each(o,function(s,r){r=o[s].label;
s=o[s].value;
var t=s;
var q=t.split("-",2);
m.append($("<option></option>").attr("value",q[1]).text(r))
})
}else{$('select[name="state"]').parents(".dropdown-list").detach();
$('select[name="state"]').attr("required",false)
}}).fail(function(m){console.log(m)
});
$.ajax({type:"POST",dataType:"JSON",url:window.location.pathname.replace(".html",".genericlist.json"),data:{type:"one-dot-com/one-dot-com/higher-ed/role"}}).done(function(q){var n=q;
var p=n.list;
var m=$('.rep-req-form select[name="role"]');
var o;
$.each(p,function(s,r){r=p[s].label;
s=p[s].value;
if(s!="Other"){m.append($("<option></option>").attr("value",s).text(r))
}else{o={key:r,value:s}
}});
if(o){m.append($("<option></option>").attr("value",o.value).text(o.key))
}}).fail(function(m){console.log(m)
});
$(".rep-req-form").show();
$(".other-role").hide();
$('select[name="role"]').change(function(){if($('select[name="country"]').val()=="US"&&$('select[name="role"]').val()=="Other"){$(".other-role").show()
}else{$(".other-role").hide()
}});
$(".spinner").hide()
}};
$(".rep-req-form .continue-button").on("click",function(m){$(".spinner").show();
if(DMCP.FormValidator.validateOnSubmit($(".rep-req-form"),m)){console.log("Rep form submission started");
h.leadProductCall()
}else{$(".spinner").hide();
console.log("lead payload: "+JSON.stringify(payload));
console.error("form not valid");
if($("#school-not-listed").length){var l=$("#school-not-listed").find("input[aria-invalid='true']").each(function(){$(this).parent().addClass("has-error")
})
}}});
$(".rep-req-form .previous-button").on("click",function(l){l.preventDefault();
g()
});
$('.rep-locator select[name="disciplineId"]').change(function(){$(".spinner").show();
$(".rep-locator-success-message").css("display","none");
var l=$('.rep-locator select[name="institutionId"] option:selected').attr("Segment-Calculated-c");
if(l=="Managed"){h.displayForm()
}else{if(l=="Enterprise"||l=="Strategic"||l=="Emerging"){h.getRepLocator()
}}});
function g(){$(".rep-req-form").find(":input").not(":button, :submit, :reset, :hidden, :checkbox, :radio").val("");
$(".rep-req-form").find(":checkbox, :radio").prop("checked",false);
$(".rep-locator-zip-code").nextAll().hide();
$('.rep-locator select[name="institutionId"]').parents(".dropdown-list");
$(".rep-locator-error-message").css("display","none");
$(".country-dropdown").removeClass("active");
$(".rep-locator-zip-code").addClass("active").addClass("is-visible").show();
$(".rep-locator-zip-code").prepend('<span class="find-rep-arrow"></span>');
$('.rep-locator select[name="country"]').val("US");
$('.rep-locator select[name="country"]').trigger("change");
$(".startOver").show()
}}$(".edit .rep-locator .rep-locator-results").show();
if($('.form-control[name="postCode"]').length>0){var e=$(".rep-locator-zip-code"),j=e.find('.form-control[name="postCode"]'),c=e.next(".text");
c.clone(true).insertAfter(j).removeClass("hide-siblings").addClass("buttonwrapper-clone");
c.remove();
j.next(".text").andSelf().wrapAll('<div class="clearfix form-control-group--input-plus-button"></div>');
e.addClass("is-visible")
}}var isMobile=false;
if(typeof HE==="undefined"){var HE={}
}var cookieName="X-HeProxy-AuthToken";
var cookieUName="X-HeProxy-LoggedinEmail";
var downloadFileUrl,downloadFileName,downloadResourceUrl;
HE.signInMethods={downloadResource:function(){var a=HEProxyServer+"/api/resources?X-HeProxy-AuthToken="+$.cookie(cookieName)+"&X-HeProxy-LoggedinEmail="+encodeURIComponent($.cookie(cookieUName))+"&path="+downloadFileName;
$.ajax({type:"POST",contentType:"application/json",url:a}).done(function(b){$(".sign-in-modal").hide();
$(".sign-in-legal-acceptance").show();
HE.signInMethods.showModal($(".sign-in-legal-acceptance"));
downloadFileUrl=b.link+"&X-HeProxy-LoggedinEmail="+encodeURIComponent($.cookie(cookieUName))
}).fail(function(b){console.log(b)
})
},showPrice:function(){if($.cookie(cookieName)){$(".custom-item-renderer-item-card-net-price").hide();
$(".custom-item-renderer-item-card-net-price1").show()
}else{$(".custom-item-renderer-item-card-net-price1").hide();
$(".custom-item-renderer-item-card-net-price").show()
}},showModal:function(c){$(".sign-out-modal").after('<div class="sign-in-modal-overlay"></div>');
var f=(window.innerWidth-c.innerWidth())/2,e=(window.innerHeight-c.innerHeight())/2;
if(e<0){e=20
}$(".sign-in-error-message").hide();
$('span:contains("Session Timeout")').parents('[role="dialog"]').add('header[role="banner"]').add("main").add("footer").add(".servicecomponents").add(".pearson-data-layer").attr("aria-hidden","true");
c.addClass("current-dialog").attr("aria-hidden",false);
var j=$(".current-dialog"),d=j.find("a, object, :input, iframe, [tabindex]"),a=d.first()[0],b=d.last()[0],h=9;
j.on("keydown",function(k){if(k.key==="Tab"||k.keyCode===h){if(k.shiftKey){if(document.activeElement===a){b.focus();
k.preventDefault()
}}else{if(document.activeElement===b){a.focus();
k.preventDefault()
}}}});
a.focus();
if($("header").css("z-index")=="253"){isMobile=true
}if(isMobile){var g=$(document).scrollTop();
c.css("top",g)
}$("body > header").addClass("z-index-none")
},signOut:function(a){HE.signInMethods.showModal($(".sign-out-modal"));
a.remove();
$.removeCookie(cookieName,{expires:1,path:"/"});
$.removeCookie(cookieUName,{expires:1,path:"/"});
HE.signInMethods.showPrice()
},signOutButton:function(){var a='<div class="text sign-out-button"><p><a href="#">Sign out</a></p></div>';
$("body>header .sub-header >.sub-parsys").append(a);
$(".sign-out-button").show();
$(".sign-out-button").on("click",function(b){b.preventDefault();
HE.signInMethods.signOut($(this))
})
},closeModal:function(){$("body > header").removeClass("z-index-none");
$(".sign-in-modal-overlay").remove();
$(".sign-in-modal,.sign-in-legal-acceptance,.sign-out-modal").removeAttr("style").removeClass("current-dialog").attr("aria-hidden",true);
$('span:contains("Session Timeout")').parents('[role="dialog"]').add('header[role="banner"]').add("main").add("footer").add(".servicecomponents").add(".pearson-data-layer").removeAttr("aria-hidden")
},resourceDownload:function(){if($.cookie(cookieName)){HE.signInMethods.downloadResource()
}else{HE.signInMethods.showModal($(".sign-in-modal"));
$(".sign-in-modal").addClass("current-dialog")
}},userLogin:function(){var b={password:$(".sign-in-password").val(),username:$(".sign-in-username").val()};
var a=$(".sign-in-username").val();
$.ajax({type:"POST",contentType:"application/json",data:JSON.stringify(b),url:HEProxyServer+"/api/authenticate"}).done(function(e){$(".sign-in-error-message").hide();
HE.signInMethods.closeModal();
var c=new Date();
var d=30;
c.setTime(c.getTime()+(d*60*1000));
$.cookie(cookieName,e.token,{expires:c,path:"/"});
$.cookie(cookieUName,a,{expires:c,path:"/"});
HE.signInMethods.showPrice();
HE.signInMethods.signOutButton();
if($(".sign-in-modal").hasClass("item-card")){$(".sign-in-modal").removeClass("item-card")
}else{HE.signInMethods.downloadResource()
}}).fail(function(c){$(".sign-in-error-message").show()
})
}};
function signInModal(){$("#dialog__sign-in").parents(".custom-item-renderer").addClass("irc-dialog-wrapper");
$("#dialog__sign-in").add("#dialog__sign-in-legal-acceptance").add("#dialog__sign-out-modal").appendTo("body");
$(".irc-dialog-wrapper").remove();
var a=$(".program-page"),c=$(".product-page"),b=$(".custom-item-renderer-item-card-net-price");
if(a.length||c.length){if($.cookie(cookieName)){HE.signInMethods.signOutButton()
}$(".custom-item-renderer-download-resource-link").on("click",function(d){d.preventDefault();
$(".current-dialog-trigger").removeClass("current-dialog-trigger");
$(this).addClass("current-dialog-trigger");
downloadResourceUrl=$(this).attr("href");
downloadFileName=encodeURIComponent($(this).attr("data-downloadable-filename"));
HE.signInMethods.resourceDownload()
});
$(".instructor-sign-in").on("click",function(d){d.preventDefault();
$(".current-dialog-trigger").removeClass("current-dialog-trigger");
$(this).addClass("current-dialog-trigger");
HE.signInMethods.showModal($(".sign-in-modal"))
});
$(".sign-in-close-modal,.sign-in-legal-cancel").on("click",function(d){$(".sign-in-modal").removeClass("item-card").removeClass("current-dialog");
HE.signInMethods.closeModal();
$(".current-dialog-trigger").focus().removeClass("current-dialog-trigger")
});
$(document).on("keydown",function(d){if(d.keyCode===27){$(".sign-in-modal").removeClass("item-card").removeClass("current-dialog");
HE.signInMethods.closeModal();
$(".current-dialog-trigger").focus().removeClass("current-dialog-trigger")
}});
$(".sign-in-button").on("click",function(d){d.preventDefault();
HE.signInMethods.userLogin()
});
$(".sign-in-legal-accept").on("click",function(d){d.preventDefault();
window.open(downloadFileUrl,"_parent");
HE.signInMethods.closeModal();
$(".current-dialog-trigger").focus().removeClass("current-dialog-trigger");
if(typeof trackDownloads=="function"){trackDownloads(downloadResourceUrl)
}})
}if(b.length){HE.signInMethods.showPrice();
$(".custom-item-renderer-item-card-net-price a").on("click",function(d){d.preventDefault();
$(".sign-in-modal").addClass("item-card");
HE.signInMethods.showModal($(".sign-in-modal"));
$(".current-dialog-trigger").removeClass("current-dialog-trigger");
$(this).addClass("current-dialog-trigger")
});
if($(".custom-item-renderer-item-card-net-price1 #what-is-this").length>0){$('<div id="what-is-this-pop-up" class="pop-up-window"><div><p>Net price is Pearson’s wholesale price to college bookstores and other resellers.</p></div></div>').appendTo("body");
popUp($("#what-is-this"),$("#what-is-this-pop-up"))
}}}function signInPage(){var b=$(".sign-in-grid-section");
var c='<section class="margin-default default has-padding-top--30 column-control sign-out-grid-section default-rule no-border section bgcolor--grey-95 layout-default has-padding-horizontal--default" style="display: block;">	<div class="container">		<div class="row">			<div class="col-sm-2 col-xs-12">			</div>			<div class=" col-sm-8 col-xs-12">			</div>			<div class=" col-sm-2 col-xs-12">				<div class="default-btn-width default-padding default-type-size section default-btn-size bgcolor--default color-default text-default default-color default-type-weight default-type-family text sign-out-page-button mar-top-30 button-primary button-primary">					<p><a href="#">Sign out</a></p>				</div>			</div>		</div>	</div></section> ';
function a(){b.hide();
if($(".sign-out-grid-section").length==0){$(".par-main").prepend(c)
}$(".sign-out-grid-section").show();
$("html,body").scrollTop(0);
$(".sign-out-page-button").click(function(d){d.preventDefault();
$.removeCookie(cookieName,{expires:1,path:"/"});
$.removeCookie(cookieUName,{expires:1,path:"/"});
b.show();
$(".sign-out-grid-section").remove();
$("html,body").scrollTop(0)
})
}if(b.length){$(".sign-in-password input").attr("type","password");
if($.cookie(cookieName)){a()
}$(".sign-in-username input, .sign-in-password input").keyup(function(d){if(d.keyCode==13){$(".sign-in-page-button").click()
}});
$(".sign-in-page-button").click(function(f){f.preventDefault();
var d=$(".sign-in-username input").val();
var g={password:$(".sign-in-password input").val(),username:$(".sign-in-username input").val()};
$.ajax({type:"POST",contentType:"application/json",data:JSON.stringify(g),url:HEProxyServer+"/api/authenticate"}).done(function(j){$(".sign-in-page-error-message").hide();
var e=new Date();
var h=30;
e.setTime(e.getTime()+(h*60*1000));
$.cookie(cookieName,j.token,{expires:e,path:"/"});
$.cookie(cookieUName,d,{expires:e,path:"/"});
a()
}).fail(function(e){$(".sign-in-page-error-message").show()
})
})
}}function customFilter(){var a=$(".custom-dropdown-nav--sort");
if(a.length>0){a.each(function(){var c=$(this),b=$(".sortable-container");
sortable=b.find(">article, >div, >ul>li");
if(b.length>0){c.change(function(){var d=$(this).val();
if(d=="show-all"){sortable.show()
}else{sortable.hide();
sortable.each(function(){if($(this).hasClass(d)){$(this).show()
}})
}})
}})
}}function eventListTagTitle(){var a=GetURLParameter("tagId"),d=$(".event-list"),b=$(".title h1");
if(!(a==undefined)&&d.length>0){var c=a.split("/").slice(-1).pop();
b.text(c+" Events").css("text-transform","capitalize")
}}function GetURLParameter(a){var d=window.location.search.substring(1);
var c=d.split("&");
for(var b=0;
b<c.length;
b++){var e=c[b].split("=");
if(e[0]==a){return decodeURIComponent(e[1])
}}}function toggleCategory(){$(".category-child-list-level-2").removeClass("hide");
if($(window).width()<=768){$(".category-child-list-level-1 > li > a.category-child-list-has-child").click(function(a){a.preventDefault();
$(this).siblings("a.category-child-list-expand-collapse-button").toggleClass("fa-plus").toggleClass("fa-minus");
$(this).siblings("ul.category-child-list-level-2").slideToggle()
});
$("a.category-child-list-expand-collapse-button").click(function(a){a.preventDefault()
})
}$(".custom-item-renderer-contents div").removeAttr("style").removeAttr("mail_default");
$(".custom-item-renderer-contents p").removeAttr("style");
$(".custom-item-renderer-features-tab-pane-features-list p").removeAttr("style");
$(".custom-item-renderer-overview-tab-pane-overview-content div").removeAttr("style");
$(".custom-item-renderer-overview-tab-pane-overview-content p").removeAttr("style");
$(".custom-item-renderer-overview-tab-pane-overview-content p>a").removeAttr("style");
$(".custom-item-renderer-overview-tab-pane-overview-content p, .custom-item-renderer-overview-tab-pane-overview-content p>b, .custom-item-renderer-features-tab-pane p, .custom-item-renderer-contents p, .custom-item-renderer-contents p>b").each(function(){if($.trim($(this).text())==""&&$(this).children().length==0){$(this).hide()
}})
}function disciplinePages(){if($(".course-listing-filter").length>0&&$("#category-filter").length==0){$(".category-child-list-level-1").clone().appendTo(".course-listing-filter");
var b=$(".course-listing-filter ul.category-child-list-level-1"),a=$('<select class="custom-dropdown-nav--sort form-control" id="category-filter" />'),c=$(".title h1").text();
$(".course-listing-filter").prepend('<i></i><label for="category-filter" class="screenreader">Filter by Course</label>');
$(".course-listing-filter").wrapAll("<div class='dropdown-blue'/>");
a.append($("<option />").attr("value","show-all").html("All "+c+" Courses"));
b.children("li").each(function(d){var e=$(this).find("a").attr("href");
e=e.substring(e.lastIndexOf("/")+1,e.indexOf(".html"));
a.append($("<option />").attr("value",e).html($(this).find("a.category-child-list-has-child").html()))
});
$(".course-listing-filter > .category-child-list-level-1").replaceWith(a);
$(".category-child-list-level-1>li").each(function(){var d=$(this).find("a").attr("href");
d=d.substring(d.lastIndexOf("/")+1,d.indexOf(".html"));
$(this).addClass(d)
})
}if($(".category-child-list-level-1 > li").size()==1){$(".category-child-list-level-1").addClass("children-1")
}else{if($(".category-child-list-level-1 > li").size()==2){$(".category-child-list-level-1").addClass("children-2")
}else{if($(".category-child-list-level-1 > li").size()>=3){$(".category-child-list-level-1").addClass("children-3")
}}}$(".custom-item-renderer-featured .custom-item-renderer-packages-resource-title").each(function(){if($.trim($(this).text())==""&&$(this).children().length==0){$("h3#featured-packages").hide();
$('select#packages-dropdown-nav option[value="custom-item-renderer-featured"]').hide()
}});
$(".custom-item-renderer-digital .custom-item-renderer-packages-section").each(function(){if($.trim($(this).text())==""&&$(this).children().length==0){$("h3#digital").hide();
$('select#packages-dropdown-nav option[value="custom-item-renderer-digital"]').hide()
}});
$(".custom-item-renderer-paper .custom-item-renderer-packages-section").each(function(){if($.trim($(this).text())==""&&$(this).children().length==0){$("h3#paper").hide();
$('select#packages-dropdown-nav option[value="custom-item-renderer-paper"]').hide()
}});
$(".custom-item-renderer-packages .custom-item-renderer-packages-section").each(function(){if($.trim($(this).text())==""&&$(this).children().length==0){$("h3#additional-packages").hide();
$('select#packages-dropdown-nav option[value="custom-item-renderer-packages"]').hide()
}})
}(function(c,b){var a=function(g,d,e){var h;
return function f(){var l=this,k=arguments;
function j(){if(!e){g.apply(l,k)
}h=null
}if(h){clearTimeout(h)
}else{if(e){g.apply(l,k)
}}h=setTimeout(j,d||100)
}
};
jQuery.fn[b]=function(d){return d?this.bind("resize",a(d)):this.trigger(b)
}
})(jQuery,"smartresize");
$(document).ready(function(){var b=false,a=false,c=false,d=$(".menu-browse .child-page-list-level-1").css("display"),e=false;
if($("header").css("z-index")=="253"){b=true
}if($("header").css("z-index")=="254"){a=true
}if($("header").css("z-index")=="252"){c=true
}toggleCategory();
bookBag();
bookBagCheckout();
hoursOfService();
signInPage();
signInModal();
instructorAccessRequest();
repLocator();
disciplinePages();
directResponse();
customFilter();
eventListTagTitle()
});