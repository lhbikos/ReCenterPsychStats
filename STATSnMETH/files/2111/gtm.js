
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"219",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.location.href,b=\/([a-zA-Z0-9_\\.-]+)@([\\da-zA-Z\\.-]+)\\.([a-zA-Z\\.]{2,6})\/;b.test(a)\u0026\u0026(a=a.replace(\/([a-zA-Z0-9_\\.-]+)@([\\da-zA-Z\\.-]+)\\.([a-zA-Z\\.]{2,6})\/,\"\"));return a})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",1],8,16],";return 0\u003C$(a).closest(\".checkbox\").closest(\"#search-filters\").length\u0026\u0026$(a).is(\"input\")?!0:!1}catch(b){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",1],8,16],";if(0\u003C$(a).closest(\".checkbox\").closest(\"#search-filters\").length)return $(a).closest(\".checkbox\").find(\"label\").text().trim()}catch(b){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",1],8,16],";if(0\u003C$(a).closest(\".checkbox\").closest(\"#search-filters\").length)return $(a).closest(\".checkbox\").prevAll(\"h3:first\").text().trim()}catch(b){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=4;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(a){a=[{name:\"EMAIL\",regex:\/[^\\\/]{4}@[^\\\/]{4}\/gi,group:\"\"},{name:\"EMAIL_ADDR\",regex:\/((email=)|(emailConfirm=)|(emailconfirm=)|(email.*=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"SEARCH\",regex:\/((full=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"NAME\",regex:\/((first_name=)|(last_name=)|(n=)|(i=)|(v=)|(l=)|(e=)|(middle_name=)|(username=)|(name=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"PROVIDER_ID\",regex:\/((provider_id=)|(partner_key=)|(userid=)|(user=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"PASSWORD\",regex:\/((password=)|(passwd=)|(passwordConfirm=)|(passwordconfirm=)|(pass.*=)|(pass=)|(pw=))[^\u0026\\\/\\?]+\/gi,\ngroup:\"$1\"}];var c=",["escape",["macro",6],8,16],",b=c;a.forEach(function(a){b=b.replace(a.regex,a.group+\"[REMOVED]\")});return b})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"TotBookPages_Hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"PrintLimitPg_Hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"Quota_remPg_Hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"TotChapTop_Hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ChapExceedTop_Hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"TotChapSecond_Hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ChapExceedSecond_Hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"LCSubjectHeading_MET"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"PQOne_Site"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"NumSyndeticsElements_hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"DRMFreeTitle_MET"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"SiteID_User"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"PatID_User"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"SignStatus_User"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"SessionID_Session"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"BookTitle_Hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"Publisher_Hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"DocumentID_Hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"SessionID_Hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"TOCAvail_Hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"Site_Name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"LoginType_User"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"AuthTypeHQ_User"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"AccessibilityMode_Session"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"SubscriptionCustomer_User"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"TitleAccessType_Hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"EbookISBN_Hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"PrintISBN_Hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"LCSubjectHeading_Hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"LCSubjectHeadingArray_Hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"Institution_Session"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"Institution_Hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"SyndeticsAUTHOR_hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"SyndeticsRCL_hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"SyndeticsSIMILAR_hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"SyndeticsPATRONREVIEWS_hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"SyndeticsAWARDS_hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"SyndeticsTAGS_hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"DRMFreeTitle_Hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"PQOne_Site"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"PQOne_Site_session"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"SyndeticsALTMETRICS_hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ReaderType_Hit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ReaderType_Session"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",53],
      "vtp_defaultValue":"UA-69343401-3",
      "vtp_map":["list",["map","key","ebookcentral.proquest.com","value","UA-69343401-3"],["map","key","dev-ebookcentral.ebrary.com","value","UA-69343401-2"],["map","key","ebookcentral-t.ebrary.com","value","UA-69343401-2"],["map","key","ebookcentral-t.ebrary.com.ezproxy01-t.ebrary.com","value","UA-69343401-2"],["map","key","pm-ebookcentral.proquest.com","value","UA-69343401-2"],["map","key","pm-ebookcentral-proquest-com.ezproxy.pqebooks.com","value","UA-69343401-2"],["map","key","rohinidev.ebrary.com:8090","value","UA-69343401-2"],["map","key","2018r8nightly.dev.int.proquest.com","value","UA-69343401-2"],["map","key","pqonedev-ebookcentral.proquest.com","value","UA-69343401-2"],["map","key","pqone-ebookcentral.pre.int.proquest.com","value","UA-69343401-2"],["map","key","2018r10nightly.dev.int.proquest.com","value","UA-69343401-2"],["map","key","2018r11nightly.dev.int.proquest.com","value","UA-69343401-2"],["map","key","2018r12nightly.dev.int.proquest.com","value","UA-69343401-2"],["map","key","2018r13nightly.dev.int.proquest.com","value","UA-69343401-2"],["map","key","ebookcentralepub-t.ebrary.com","value","UA-69343401-2"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ID"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"CLASSES"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"docID",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"title"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"TEXT"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list","reader.action"],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__d",
      "vtp_elementSelector":["macro",55],
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"class",
      "vtp_attributeName":"modal-open",
      "vtp_selectorType":"CSS"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b=ga.getAll(),c;var a=0;for(c=b.length;a\u003Cc;a+=1)if(b[a].get(\"trackingId\")===",["escape",["macro",54],8,16],")return b[a].get(\"clientId\")}catch(d){}return\"false\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"e_printError"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagesRemaining"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagesPrinted"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"printDocId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ChapExceedSecond_MET"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"TotChapSecond_MET"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ChapExceedTop_MET"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"TotChapTop_MET"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"Quota_remPg_MET"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"PrintLimitPg_MET"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"TotBookPages_MET"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__ctv"
    },{
      "function":"__r"
    },{
      "function":"__cid"
    },{
      "function":"__hid"
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleRatio",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",0]],["map","fieldName","customTask","value",["macro",5]],["map","fieldName","cookieDomain","value","auto"],["map","fieldName","location","value",["macro",7]]],
      "vtp_metric":["list",["map","index","2","metric",["macro",9]],["map","index","3","metric",["macro",10]],["map","index","4","metric",["macro",11]],["map","index","5","metric",["macro",12]],["map","index","6","metric",["macro",13]],["map","index","7","metric",["macro",14]],["map","index","8","metric",["macro",15]],["map","index","9","metric",["macro",16]],["map","index","12","metric",["macro",17]],["map","index","10","metric",["macro",18]],["map","index","11","metric",["macro",19]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",20]],["map","index","3","dimension",["macro",21]],["map","index","5","dimension",["macro",22]],["map","index","6","dimension",["macro",23]],["map","index","7","dimension",["macro",24]],["map","index","8","dimension",["macro",25]],["map","index","9","dimension",["macro",26]],["map","index","10","dimension",["macro",27]],["map","index","11","dimension",["macro",12]],["map","index","12","dimension",["macro",13]],["map","index","13","dimension",["macro",14]],["map","index","14","dimension",["macro",15]],["map","index","15","dimension",["macro",9]],["map","index","16","dimension",["macro",10]],["map","index","17","dimension",["macro",11]],["map","index","18","dimension",["macro",28]],["map","index","19","dimension",["macro",29]],["map","index","20","dimension",["macro",30]],["map","index","21","dimension",["macro",31]],["map","index","22","dimension",["macro",32]],["map","index","23","dimension",["macro",33]],["map","index","24","dimension",["macro",34]],["map","index","25","dimension",["macro",35]],["map","index","26","dimension",["macro",36]],["map","index","27","dimension",["macro",37]],["map","index","28","dimension",["macro",38]],["map","index","29","dimension",["macro",39]],["map","index","1","dimension",["macro",40]],["map","index","30","dimension",["macro",18]],["map","index","31","dimension",["macro",41]],["map","index","32","dimension",["macro",42]],["map","index","33","dimension",["macro",43]],["map","index","34","dimension",["macro",44]],["map","index","35","dimension",["macro",45]],["map","index","36","dimension",["macro",46]],["map","index","37","dimension",["macro",47]],["map","index","64","dimension",["macro",48]],["map","index","70","dimension",["macro",49]],["map","index","71","dimension",["macro",50]],["map","index","72","dimension",["macro",51]],["map","index","73","dimension",["macro",52]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Top Nav",
      "vtp_eventLabel":["macro",56],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":4
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Top Nav",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Search",
      "vtp_eventLabel":"Search Button",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":5
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Filter",
      "vtp_eventLabel":["template",["macro",4]," - ",["macro",3]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":6
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Available for Online Reading Link",
      "vtp_eventLabel":"Available for Online Reading Text Link",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":7
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Full Book Download",
      "vtp_eventLabel":"Full Book Download",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":8
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Login Submit",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":10
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"FormPopup",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"DownloadDeviceType",
      "vtp_eventLabel":["macro",61],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":11
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Book Conversion",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Full Book Download",
      "vtp_eventLabel":"Download Book",
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":13
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Available for Full Download Link",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":14
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Chapter Download Button",
      "vtp_eventLabel":"Chapter Download Button",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":15
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Book Conversion",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Print PDF",
      "vtp_eventLabel":"Print PDF",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":16
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Description Tab",
      "vtp_eventLabel":"Description Tab Click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":18
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Add To Bookshelf Button",
      "vtp_eventLabel":"Add To Bookshelf Button",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":19
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Conversions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Add To Bookshelf",
      "vtp_eventLabel":"Add To Bookshelf",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":20
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Return to Search Link",
      "vtp_eventLabel":"Return to Search Text Link",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":21
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Form Completion",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Join Ebook Central",
      "vtp_eventLabel":"Join Ebook Central Form Submission",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":22
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Share Link Button",
      "vtp_eventLabel":"Share Link Button",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Cite Book Button",
      "vtp_eventLabel":"Cite Book Button",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":24
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Conversions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Export Citation",
      "vtp_eventLabel":"Export Citation Refworks",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":25
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Conversions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Export Citation",
      "vtp_eventLabel":"Export Citation EndNote\/Citavi",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":26
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Read Online Button",
      "vtp_eventLabel":"Read Online Button Click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":27
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Table Of Contents Tab",
      "vtp_eventLabel":"Table Of Contents Tab Click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":28
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Full Book Download",
      "vtp_eventLabel":"Full Book Download",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":29
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Copy Button",
      "vtp_eventLabel":"Copy Button Click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":31
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Share Link",
      "vtp_eventLabel":"Share Link Button Click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":32
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Add to Bookshelf Button",
      "vtp_eventLabel":"Add to Bookshelf Button Click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":34
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Copy Citation",
      "vtp_eventLabel":"Copy Citation Button Click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":35
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Highlight Button",
      "vtp_eventLabel":"Highlight Button Click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":36
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Add Note Save",
      "vtp_eventLabel":"Add Note Save",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":37
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Save Bookmark",
      "vtp_eventLabel":"Save Bookmark Click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":38
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Zoom Out",
      "vtp_eventLabel":"Zoom Out Click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":39
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Zoom In",
      "vtp_eventLabel":"Zoom In Click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":40
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Zoom To Width",
      "vtp_eventLabel":"Zoom To Width",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":41
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Zoom To Height",
      "vtp_eventLabel":"Zoom To Height\/Page",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":42
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Next Page",
      "vtp_eventLabel":"Next Page Button Click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":43
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Previous Page",
      "vtp_eventLabel":"Previous Page Button Click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":44
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Book Details Left Nav",
      "vtp_eventLabel":"Book Details Left Nav",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":45
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"TOC Left Nav",
      "vtp_eventLabel":"TOC Left Nav",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":47
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Annotation Left Nav",
      "vtp_eventLabel":"Annotation Left Nav",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":48
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Search Left Nav",
      "vtp_eventLabel":"Search Left Nav",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":49
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Full Book Download",
      "vtp_eventLabel":"Book Details Full Download Button Click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":50
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Search Results Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Full Book Download",
      "vtp_eventLabel":"Full Book Download",
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":51
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Search Results Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Read Online Button",
      "vtp_eventLabel":"Read Online Button",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":52
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Search Results Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Details Button",
      "vtp_eventLabel":"Details Page Button",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":53
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Search Results Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Add To Bookshelf",
      "vtp_eventLabel":"Add To Bookshelf Button",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Top Nav",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Bookshelf",
      "vtp_eventLabel":"Bookshelf Button",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":55
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Chapter Download Button",
      "vtp_eventLabel":"Chapter Download Button",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":56
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Print Button",
      "vtp_eventLabel":"Print Button Click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":57
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Search Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Chapter Download",
      "vtp_eventLabel":"Chapter Download Button",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":58
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Book Conversion",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Chapter Download\/Print OpenPDF",
      "vtp_eventLabel":"Chapter Download\/Print OpenPDF",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":59
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Book Conversion",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","1","metric","1"]],
      "vtp_enableLinkId":false,
      "vtp_eventAction":"ReaderPageFiveMinutes",
      "vtp_eventLabel":"ReaderPageFiveMinutes",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":62
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Book Conversion",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Copy Text",
      "vtp_eventLabel":"Copy Text",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":63
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Time",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","1","metric","1"]],
      "vtp_enableLinkId":false,
      "vtp_eventAction":"ReaderPageFiveMinutes",
      "vtp_eventLabel":"ReaderPageFiveMinutes",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":64
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Book Conversion",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Chapter Download",
      "vtp_eventLabel":"Chapter Download",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":65
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"EBC Reader Sidebar",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Attempt to Use",
      "vtp_eventLabel":"Download Book",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":66
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"SearchWithinBook",
      "vtp_eventLabel":["macro",65],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":67
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"SearchWithinBook",
      "vtp_eventLabel":["macro",65],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":70
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Reader Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"ChapterDL\/Print Limit Exceeded",
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":74
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Chapter Exceeds Limit",
      "vtp_eventLabel":"Chapter Exceeds Limit",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":80
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"TOC Online Reading Link",
      "vtp_eventLabel":"TOC Online Reading Link",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":81
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Continue as guest",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Guest Step 1",
      "vtp_eventLabel":"Guest Step 1",
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":83
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Continue as guest",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Guest Start Over",
      "vtp_eventLabel":"Guest Start Over",
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":84
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Continue as guest",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Guest Step 2",
      "vtp_eventLabel":"Guest Step 2",
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":85
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Enrichment",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","10","metric",["macro",18]]],
      "vtp_eventAction":"SyndeticsLoad",
      "vtp_eventLabel":"Syndetics Loaded",
      "vtp_dimension":["list",["map","index","30","dimension",["macro",18]],["map","index","31","dimension",["macro",41]],["map","index","32","dimension",["macro",42]],["map","index","33","dimension",["macro",43]],["map","index","34","dimension",["macro",44]],["map","index","35","dimension",["macro",45]],["map","index","36","dimension",["macro",46]],["map","index","71","dimension",["macro",50]]],
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":88
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Enrichment",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"SyndeticsClickthrough",
      "vtp_eventLabel":"Syndetics Clickthrough",
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":89
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Enrichment",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"SyndeticsInteraction",
      "vtp_eventLabel":"Syndetics Interaction",
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":90
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Book Conversion",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"DRMFree Full Book Download",
      "vtp_eventLabel":"Download PDF",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_metric":["list",["map","index","11","metric",["macro",19]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":91
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Book Conversion",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","11","metric",["macro",19]]],
      "vtp_eventAction":"DRMFree Full Book Download",
      "vtp_eventLabel":"Download EPUB",
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":93
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Download PDF",
      "vtp_eventLabel":"Download PDF TOC",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":94
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Search Results Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Add to Bookshelf",
      "vtp_eventLabel":"Add to Bookshelf",
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":95
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"EBC Reader Sidebar",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Attempt to Use",
      "vtp_eventLabel":"Add to Bookshelf",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":97
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"EBC Detail Left Use Panel",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Attempt to Use",
      "vtp_eventLabel":"Request",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":98
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"EBC Reader Toolbar",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Attempt to Use",
      "vtp_eventLabel":"Add Note",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":99
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"EBC Reader Toolbar",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Doc Navigation",
      "vtp_eventLabel":"Go to Page",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":100
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"EBC Reader Sidebar",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"ToC Search Within",
      "vtp_eventLabel":"Sidebar Search Button",
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":101
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"EBC Detail ToC",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Use",
      "vtp_eventLabel":"Download chapter confirmation",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":102
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"EBC Reader Toolbar",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Doc Navigation",
      "vtp_eventLabel":"Next Page",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":103
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"EBC Reader Toolbar",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Doc Navigation",
      "vtp_eventLabel":"Previous Page",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":104
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Reader",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Type",
      "vtp_eventLabel":["macro",51],
      "vtp_dimension":["list",["map","index","72","dimension",["macro",51]],["map","index","73","dimension",["macro",52]]],
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":105
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"EBC Detail Availability",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Online Use",
      "vtp_eventLabel":"Read this book link",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":106
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_6",
      "tag_id":107
    },{
      "function":"__cl",
      "tag_id":108
    },{
      "function":"__cl",
      "tag_id":109
    },{
      "function":"__cl",
      "tag_id":110
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_21",
      "tag_id":111
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_22",
      "tag_id":112
    },{
      "function":"__cl",
      "tag_id":113
    },{
      "function":"__fsl",
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_26",
      "tag_id":114
    },{
      "function":"__fsl",
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_27",
      "tag_id":115
    },{
      "function":"__cl",
      "tag_id":116
    },{
      "function":"__cl",
      "tag_id":117
    },{
      "function":"__cl",
      "tag_id":118
    },{
      "function":"__cl",
      "tag_id":119
    },{
      "function":"__cl",
      "tag_id":120
    },{
      "function":"__cl",
      "tag_id":121
    },{
      "function":"__cl",
      "tag_id":122
    },{
      "function":"__cl",
      "tag_id":123
    },{
      "function":"__cl",
      "tag_id":124
    },{
      "function":"__cl",
      "tag_id":125
    },{
      "function":"__cl",
      "tag_id":126
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_67",
      "tag_id":127
    },{
      "function":"__cl",
      "tag_id":128
    },{
      "function":"__cl",
      "tag_id":129
    },{
      "function":"__cl",
      "tag_id":130
    },{
      "function":"__cl",
      "tag_id":131
    },{
      "function":"__fsl",
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_88",
      "tag_id":132
    },{
      "function":"__cl",
      "tag_id":133
    },{
      "function":"__cl",
      "tag_id":134
    },{
      "function":"__cl",
      "tag_id":135
    },{
      "function":"__cl",
      "tag_id":136
    },{
      "function":"__cl",
      "tag_id":137
    },{
      "function":"__cl",
      "tag_id":138
    },{
      "function":"__cl",
      "tag_id":139
    },{
      "function":"__cl",
      "tag_id":140
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_110",
      "tag_id":141
    },{
      "function":"__cl",
      "tag_id":142
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_116",
      "tag_id":143
    },{
      "function":"__cl",
      "tag_id":144
    },{
      "function":"__cl",
      "tag_id":145
    },{
      "function":"__cl",
      "tag_id":146
    },{
      "function":"__cl",
      "tag_id":147
    },{
      "function":"__cl",
      "tag_id":148
    },{
      "function":"__cl",
      "tag_id":149
    },{
      "function":"__cl",
      "tag_id":150
    },{
      "function":"__cl",
      "tag_id":151
    },{
      "function":"__cl",
      "tag_id":152
    },{
      "function":"__cl",
      "tag_id":153
    },{
      "function":"__cl",
      "tag_id":154
    },{
      "function":"__cl",
      "tag_id":155
    },{
      "function":"__cl",
      "tag_id":156
    },{
      "function":"__cl",
      "tag_id":157
    },{
      "function":"__cl",
      "tag_id":158
    },{
      "function":"__cl",
      "tag_id":159
    },{
      "function":"__cl",
      "tag_id":160
    },{
      "function":"__cl",
      "tag_id":161
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_166",
      "tag_id":162
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_170",
      "tag_id":163
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_172",
      "tag_id":164
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_173",
      "tag_id":165
    },{
      "function":"__cl",
      "tag_id":166
    },{
      "function":"__cl",
      "tag_id":167
    },{
      "function":"__cl",
      "tag_id":168
    },{
      "function":"__cl",
      "tag_id":169
    },{
      "function":"__cl",
      "tag_id":170
    },{
      "function":"__cl",
      "tag_id":171
    },{
      "function":"__cl",
      "tag_id":172
    },{
      "function":"__cl",
      "tag_id":173
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_195",
      "tag_id":174
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_196",
      "tag_id":175
    },{
      "function":"__cl",
      "tag_id":176
    },{
      "function":"__cl",
      "tag_id":177
    },{
      "function":"__cl",
      "tag_id":178
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"306000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"2125197_209",
      "tag_id":179
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_216",
      "tag_id":180
    },{
      "function":"__cl",
      "tag_id":181
    },{
      "function":"__cl",
      "tag_id":182
    },{
      "function":"__cl",
      "tag_id":183
    },{
      "function":"__cl",
      "tag_id":184
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_227",
      "tag_id":185
    },{
      "function":"__cl",
      "tag_id":186
    },{
      "function":"__cl",
      "tag_id":187
    },{
      "function":"__cl",
      "tag_id":188
    },{
      "function":"__cl",
      "tag_id":189
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_235",
      "tag_id":190
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_236",
      "tag_id":191
    },{
      "function":"__cl",
      "tag_id":192
    },{
      "function":"__cl",
      "tag_id":193
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_253",
      "tag_id":194
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_254",
      "tag_id":195
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_255",
      "tag_id":196
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_256",
      "tag_id":197
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_257",
      "tag_id":198
    },{
      "function":"__cl",
      "tag_id":199
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_259",
      "tag_id":200
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_260",
      "tag_id":201
    },{
      "function":"__cl",
      "tag_id":202
    },{
      "function":"__cl",
      "tag_id":203
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_263",
      "tag_id":204
    },{
      "function":"__cl",
      "tag_id":205
    },{
      "function":"__cl",
      "tag_id":206
    },{
      "function":"__cl",
      "tag_id":207
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"display",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2125197_289",
      "tag_id":208
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_307",
      "tag_id":209
    },{
      "function":"__cl",
      "tag_id":210
    },{
      "function":"__cl",
      "tag_id":211
    },{
      "function":"__cl",
      "tag_id":212
    },{
      "function":"__cl",
      "tag_id":213
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_315",
      "tag_id":214
    },{
      "function":"__cl",
      "tag_id":215
    },{
      "function":"__cl",
      "tag_id":216
    },{
      "function":"__cl",
      "tag_id":217
    },{
      "function":"__cl",
      "tag_id":218
    },{
      "function":"__cl",
      "tag_id":219
    },{
      "function":"__cl",
      "tag_id":220
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_329",
      "tag_id":221
    },{
      "function":"__cl",
      "tag_id":222
    },{
      "function":"__cl",
      "tag_id":223
    },{
      "function":"__cl",
      "tag_id":224
    },{
      "function":"__cl",
      "tag_id":225
    },{
      "function":"__cl",
      "tag_id":226
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_350",
      "tag_id":227
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){dataLayer.push({event:\"fiveMinutesReader\"})},306E3);\u003C\/script\u003E  ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EjQuery(document).delegate(\"#searchInBookTermInToc, #searchInBookTerm\",\"keypress\",function(a){a=a.which||a.keyCode;13===a\u0026\u0026dataLayer.push({event:\"e_enterKeyPressed\"})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar LCSubjectHeadingArray_Dim=void 0==",["escape",["macro",38],8,16],"?\"\":",["escape",["macro",38],8,16],";if(\"\"!=LCSubjectHeadingArray_Dim)for(var i=0;i\u003CLCSubjectHeadingArray_Dim.length;i++)dataLayer.push({eventCat:\"Custom Dimension Event\",eventAct:\"Subject Headings\",eventLbl:LCSubjectHeadingArray_Dim[i],eventVal:0,nonInteraction:1,LCSubjectHeadingArray_Hit:LCSubjectHeadingArray_Dim[i],LCSubjectHeading_MET:1,event:\"eventtracker\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":86
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"gtm.js"
    },{
      "function":"_css",
      "arg0":["macro",55],
      "arg1":"#toolBarLayoutRegion button"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"gtm.click"
    },{
      "function":"_css",
      "arg0":["macro",1],
      "arg1":"#nav-bar-links \u003E ul \u003E li \u003E a"
    },{
      "function":"_cn",
      "arg0":["macro",57],
      "arg1":"search.action"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_195($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"availableOnlineReadId"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"detail.action"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"ga_availability_read_online_link"
    },{
      "function":"_re",
      "arg0":["macro",59],
      "arg1":"tool_download.*"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_22($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"ga_detail_bt_download"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_254($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",59],
      "arg1":"login_button"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"continueButton"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_27($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"downloadBookButton"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_6($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"reader.action"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"search.action"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_216($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"ga_download_step3_final_download"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_260($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",59],
      "arg1":"wizardLauncher.*"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_21($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"ga_availability_download_link"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_259($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"toolChapterDownload"
    },{
      "function":"_re",
      "arg0":["macro",59],
      "arg1":"printOpenPDF"
    },{
      "function":"_cn",
      "arg0":["macro",57],
      "arg1":"#description-tab"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_67($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"addtoshelftxt"
    },{
      "function":"_re",
      "arg0":["macro",59],
      "arg1":"tool_addbookshelf.*"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"icon-bookshelf-add"
    },{
      "function":"_css",
      "arg0":["macro",1],
      "arg1":"button[id*=\"tool_addbookshelf\"] \u003E span"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"ga_detail_bt_add_bsk"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_255($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"add_to_my_folder"
    },{
      "function":"_css",
      "arg0":["macro",1],
      "arg1":"div#search-return a"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"join-form"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_88($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",1],
      "arg1":"#share_link"
    },{
      "function":"_css",
      "arg0":["macro",1],
      "arg1":"button#share_link \u003E span.button-label"
    },{
      "function":"_css",
      "arg0":["macro",1],
      "arg1":"button#share_link \u003E span.icon-link.icon-in-button"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"ga_detail_bt_share_link"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_256($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"citebooktxt"
    },{
      "function":"_css",
      "arg0":["macro",1],
      "arg1":"#citeModalBtn"
    },{
      "function":"_css",
      "arg0":["macro",1],
      "arg1":"#citeModalBtn \u003E span.button-label"
    },{
      "function":"_css",
      "arg0":["macro",1],
      "arg1":"#citeModalBtn \u003E span.icon-book-cite.icon-in-button"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"ga_detail_bt_cite"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_257($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",1],
      "arg1":"#citationRefWorks"
    },{
      "function":"_css",
      "arg0":["macro",1],
      "arg1":"#citationEndNoteCitavi"
    },{
      "function":"_css",
      "arg0":["macro",1],
      "arg1":"#readerReadBtnId \u003E span.button-label"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"readerReadBtnId"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_110($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",1],
      "arg1":"#readerReadBtnId \u003E icon-book-open.icon-in-button"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"ga_detail_bt_readonline"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_253($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",57],
      "arg1":"#toc-tab"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_116($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"toolDownload"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"toolCopy"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"toolLink"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"icon-link"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"toolAddToBookshelf"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"toolCite"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"icon-book-cite"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"toolHighlight"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"noteTextSave"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"toolBookmark"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"icon-page-zoom-out"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"icon-page-zoom-in"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"tool-fitToWidth"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"tool-fitToHeight"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"tool-pager-next"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"tool-pager-prev"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"bookDetails"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_166($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"bookToc"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_170($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"bookNotes"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_172($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"bookSearch"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_173($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",1],
      "arg1":"#bookDetailDownload \u003E span.button-label"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"ga_dlbookresults"
    },{
      "function":"_re",
      "arg0":["macro",59],
      "arg1":"tool_readonline.*"
    },{
      "function":"_re",
      "arg0":["macro",59],
      "arg1":"tool_details.*"
    },{
      "function":"_cn",
      "arg0":["macro",57],
      "arg1":"bookshelf.action"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_196($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",1],
      "arg1":"button[id*=\"tool_chapterdownload\"] \u003E span"
    },{
      "function":"_re",
      "arg0":["macro",59],
      "arg1":"tool_chapterdownload.*"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"chaptdltxt"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"icon-chapter-download"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"[id*=\"tool_chapterdownload\"]"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"toolPrint"
    },{
      "function":"_cn",
      "arg0":["macro",63],
      "arg1":"fiveMinutesReader"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"fiveMinutesReader"
    },{
      "function":"_cn",
      "arg0":["macro",64],
      "arg1":"modalDone"
    },{
      "function":"_cn",
      "arg0":["macro",64],
      "arg1":"modalCancel"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"chapterOpenPDF"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"ga_chapter_pdf_download_ready"
    },{
      "function":"_cn",
      "arg0":["macro",64],
      "arg1":"bookDetailDownload"
    },{
      "function":"_css",
      "arg0":["macro",1],
      "arg1":"#bookDetailDownload \u003E span.icon-download"
    },{
      "function":"_re",
      "arg0":["macro",64],
      "arg1":"searchWithInBook*"
    },{
      "function":"_cn",
      "arg0":["macro",64],
      "arg1":"searchWithInBookSubmit"
    },{
      "function":"_cn",
      "arg0":["macro",63],
      "arg1":"e_enterKeyPressed"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"e_enterKeyPressed"
    },{
      "function":"_cn",
      "arg0":["macro",63],
      "arg1":"e_printError"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"e_printError"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"ga_toc_download_pdf_exceeds_limits"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"ga_toc_read_online_button"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_263($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"ga_toc_chapter_title_link"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_307($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",1],
      "arg1":".ga_signin_step1_bt_guest"
    },{
      "function":"_css",
      "arg0":["macro",1],
      "arg1":"#ebc-guest-start-over"
    },{
      "function":"_css",
      "arg0":["macro",1],
      "arg1":".ga_signin_step3_bt_cnt_guest"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"syndeticsLoad"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"SyndeticsClickthrough"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"SyndeticsInteraction"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"pdfFullDownloadButton"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"epubFullDownloadButton"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"ga_toc_download_pdf"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_315($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",55],
      "arg1":"ga_search_bsk_button"
    },{
      "function":"_cn",
      "arg0":["macro",64],
      "arg1":"bookDetailBookShelf"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"ga_detail_bt_request"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_329($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"toolNote"
    },{
      "function":"_cn",
      "arg0":["macro",63],
      "arg1":"e_gotopageenterKeyPressed"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"e_gotopageenterKeyPressed"
    },{
      "function":"_re",
      "arg0":["macro",64],
      "arg1":"searchWithInBookToc"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"ga_epub_reader_toolbar_next_page_btn"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"ga_epub_reader_toolbar_prev_page_btn"
    },{
      "function":"_re",
      "arg0":["macro",51],
      "arg1":"pdf|epub",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",64],
      "arg1":"readBrowseId"
    },{
      "function":"_re",
      "arg0":["macro",58],
      "arg1":"(^$|((^|,)2125197_350($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",59],
      "arg1":"mjlogin_form"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"form-device-type"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"\/reader.action"
    }],
  "rules":[
    [["if",0],["add",0,204,81,82,83,84,85,86,87,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201]],
    [["if",1,2],["add",1]],
    [["if",3,4,5,6],["add",2]],
    [["if",2,7],["add",3]],
    [["if",2,8,9],["add",4]],
    [["if",2,10],["add",4]],
    [["if",5,9,11,12],["add",5]],
    [["if",5,13,14],["add",5]],
    [["if",2,9,15],["add",6]],
    [["if",16,17,18],["add",7]],
    [["if",5,9,19,20],["add",8]],
    [["if",2,19,21],["add",8]],
    [["if",5,19,22,23],["add",8]],
    [["if",5,24,25],["add",8]],
    [["if",5,9,26,27],["add",9]],
    [["if",5,28,29],["add",9]],
    [["if",2,21,30],["add",10]],
    [["if",2,9,31],["add",11]],
    [["if",2,21,31],["add",11]],
    [["if",5,9,32,33],["add",12]],
    [["if",2,9,34],["add",13]],
    [["if",2,9,35],["add",13]],
    [["if",2,9,36],["add",13]],
    [["if",2,9,37],["add",13]],
    [["if",5,38,39],["add",13]],
    [["if",2,40],["add",14]],
    [["if",2,9,41],["add",15]],
    [["if",17,42,43],["add",16]],
    [["if",2,9,44],["add",17]],
    [["if",2,9,45],["add",17]],
    [["if",2,9,46],["add",17]],
    [["if",5,47,48],["add",17]],
    [["if",2,49],["add",18]],
    [["if",2,50],["add",18]],
    [["if",2,51],["add",18]],
    [["if",2,52],["add",18]],
    [["if",5,53,54],["add",18]],
    [["if",2,55],["add",19]],
    [["if",2,56],["add",20]],
    [["if",2,9,57],["add",21]],
    [["if",5,9,58,59],["add",21]],
    [["if",2,9,60],["add",21]],
    [["if",5,61,62],["add",21]],
    [["if",5,9,63,64],["add",22]],
    [["if",2,21,65],["add",23]],
    [["if",2,21,66],["add",24]],
    [["if",2,21,67],["add",25]],
    [["if",2,21,68],["add",25]],
    [["if",2,21,69],["add",26]],
    [["if",2,21,36],["add",26]],
    [["if",2,21,70],["add",27]],
    [["if",2,21,71],["add",27]],
    [["if",2,21,72],["add",28]],
    [["if",2,21,73],["add",29]],
    [["if",2,21,74],["add",30]],
    [["if",2,21,75],["add",31]],
    [["if",2,21,76],["add",32]],
    [["if",2,21,77],["add",33]],
    [["if",2,21,78],["add",34]],
    [["if",2,21,79],["add",35]],
    [["if",2,21,80],["add",36]],
    [["if",5,21,81,82],["add",37]],
    [["if",5,21,83,84],["add",38]],
    [["if",5,21,85,86],["add",39]],
    [["if",5,21,87,88],["add",40]],
    [["if",2,21,89],["add",41]],
    [["if",2,11,22],["add",42]],
    [["if",2,90],["add",42]],
    [["if",2,22,91],["add",43]],
    [["if",2,22,92],["add",44]],
    [["if",2,22,35],["add",45]],
    [["if",3,5,93,94],["add",46]],
    [["if",2,9,95],["add",47]],
    [["if",2,9,96],["add",47]],
    [["if",2,97],["add",47]],
    [["if",2,9,98],["add",47]],
    [["if",2,99],["add",47]],
    [["if",2,21,100],["add",48]],
    [["if",2,22,96],["add",49]],
    [["if",2,22,31],["add",50]],
    [["if",101,102],["add",51,53]],
    [["if",2,21,103],["add",52]],
    [["if",2,21,104],["add",52]],
    [["if",2,9,105],["add",54]],
    [["if",2,21,105],["add",54]],
    [["if",2,106],["add",54,76]],
    [["if",2,89],["add",55]],
    [["if",2,107],["add",55]],
    [["if",2,108],["add",55]],
    [["if",2,109],["add",56]],
    [["if",2,110],["add",56]],
    [["if",111,112],["add",57]],
    [["if",113,114],["add",58]],
    [["if",2,115],["add",59]],
    [["if",5,116,117],["add",60]],
    [["if",5,118,119],["add",60]],
    [["if",2,120],["add",61]],
    [["if",2,121],["add",62]],
    [["if",2,122],["add",63]],
    [["if",123],["add",64]],
    [["if",124],["add",65]],
    [["if",125],["add",66]],
    [["if",2,126],["add",67]],
    [["if",2,127],["add",68]],
    [["if",5,128,129],["add",69]],
    [["if",2,130],["add",70]],
    [["if",2,131],["add",71]],
    [["if",2,36],["add",71]],
    [["if",5,132,133],["add",72]],
    [["if",2,134],["add",73]],
    [["if",135,136],["add",74]],
    [["if",2,137],["add",75]],
    [["if",2,138],["add",77]],
    [["if",2,139],["add",78]],
    [["if",21,140,141],["add",79]],
    [["if",5,142,143],["add",80]],
    [["if",0,144],["add",88]],
    [["if",0,145],["add",89]],
    [["if",0,146],["add",153,202,203]]]
},
"runtime":[
[],[]
]



};
var aa,ba=this||self,ca=/^[\w+/_-]+[=]{0,2}$/,da=null,ha=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var ia=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ja=function(){this.Ha={};this.Lc=!1;this.ie={}};ja.prototype.get=function(a){return this.Ha["dust."+a]};ja.prototype.set=function(a,b){this.Lc||(a="dust."+a,this.ie.hasOwnProperty(a)||(this.Ha[a]=b))};ja.prototype.has=function(a){return this.Ha.hasOwnProperty("dust."+a)};var ka=function(a){var b=[],c;for(c in a.Ha)a.Ha.hasOwnProperty(c)&&b.push(c.substr(5));return b};
ja.prototype.remove=function(a){a="dust."+a;this.Lc||this.ie.hasOwnProperty(a)||delete this.Ha[a]};ja.prototype.Og=function(){this.Lc=!0};var la=function(a){this.Ka=new ja;this.s=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ia(b)?this.s[Number(b)]=a[Number(b)]:this.Ka.set(b,a[b]))};aa=la.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.s.length;c++){var d=this.s[c];null===d||void 0===d?b.push(""):d instanceof la?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!ia(b))throw Error("RangeError: Length property must be a valid integer.");this.s.length=Number(b)}else ia(a)?this.s[Number(a)]=b:this.Ka.set(a,b)};aa.get=function(a){return"length"==a?this.length():ia(a)?this.s[Number(a)]:this.Ka.get(a)};aa.length=function(){return this.s.length};aa.Ic=function(){for(var a=ka(this.Ka),b=0;b<this.s.length;b++)a.push(b+"");return new la(a)};aa.remove=function(a){ia(a)?delete this.s[Number(a)]:this.Ka.remove(a)};aa.pop=function(){return this.s.pop()};
aa.push=function(a){return this.s.push.apply(this.s,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.s.shift()};aa.splice=function(a,b,c){return new la(this.s.splice.apply(this.s,arguments))};aa.unshift=function(a){return this.s.unshift.apply(this.s,Array.prototype.slice.call(arguments))};aa.has=function(a){return ia(a)&&this.s.hasOwnProperty(a)||this.Ka.has(a)};la.prototype.unshift=la.prototype.unshift;la.prototype.splice=la.prototype.splice;la.prototype.shift=la.prototype.shift;
la.prototype.push=la.prototype.push;la.prototype.pop=la.prototype.pop;la.prototype.remove=la.prototype.remove;la.prototype.getKeys=la.prototype.Ic;la.prototype.get=la.prototype.get;la.prototype.set=la.prototype.set;var ma=function(){},na=function(a){return"function"==typeof a},f=function(a){return"string"==typeof a},oa=function(a){return"number"==typeof a&&!isNaN(a)},pa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ra=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},sa=function(a,b){if(a&&pa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},ta=function(a,b){if(!oa(a)||
!oa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},va=function(a,b){for(var c=new ua,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},wa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},xa=function(a){return Math.round(Number(a))||0},ya=function(a){return"false"==String(a).toLowerCase()?!1:!!a},za=function(a){var b=[];if(pa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Aa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Ba=function(){return(new Date).getTime()},ua=function(){this.prefix="gtm.";this.values={}};ua.prototype.set=function(a,b){this.values[this.prefix+a]=b};ua.prototype.get=function(a){return this.values[this.prefix+a]};ua.prototype.contains=function(a){return void 0!==this.get(a)};
var Ca=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Fa=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ga=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ha=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ia=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ja=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c};var Ka=function(a,b){ja.call(this);this.pe=a;this.ng=b};ha(Ka,ja);var La=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof Ka))throw Error("Attempting to execute non-function "+b[0]+".");return c.Tb.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.Qh;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};Ka.prototype.toString=function(){return this.pe};Ka.prototype.getName=function(){return this.pe};Ka.prototype.getName=Ka.prototype.getName;Ka.prototype.Ic=function(){return new la(ka(this))};
Ka.prototype.getKeys=Ka.prototype.Ic;Ka.prototype.Tb=function(a,b){var c=this;a.de().Lh();return this.ng.apply({evaluate:function(d){var e=a;return pa(d)?La(e,d):d},Sh:function(d){for(var e=a,g,h=0;h<d.length;h++)g=La(e,d[h]);return g},getName:function(){return c.getName()},de:function(){return a.de()},Rb:function(){return a}},Array.prototype.slice.call(arguments,1))};Ka.prototype.invoke=Ka.prototype.Tb;
Ka.prototype.lh=function(a,b){try{return this.Tb.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};Ka.prototype.safeInvoke=Ka.prototype.lh;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ma=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Na=function(a){if(null==a)return String(a);var b=Ma.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Oa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Pa=function(a){if(!a||"object"!=Na(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Oa(a,"constructor")&&!Oa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Oa(a,b)},u=function(a,b){var c=b||("array"==Na(a)?[]:{}),d;for(d in a)if(Oa(a,d)){var e=a[d];"array"==Na(e)?("array"!=Na(c[d])&&(c[d]=[]),c[d]=u(e,c[d])):Pa(e)?(Pa(c[d])||(c[d]={}),c[d]=u(e,c[d])):c[d]=e}return c};
var Qa=[],Ra={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Sa=function(a){return Ra[a]},Ta=/[\x00\x22\x26\x27\x3c\x3e]/g;var Xa=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,ab={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},bb=function(a){return ab[a]};
Qa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Xa,bb)+"'"}};var jb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,kb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},mb=function(a){return kb[a]};Qa[16]=function(a){return a};var ob;
var pb=[],qb=[],sb=[],tb=[],ub=[],vb={},wb,xb,yb,zb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ab=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=vb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[void 0!==d?g:g.substr(4)]=a[g]);return void 0!==d?d(e):ob(c,e,b)},Cb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Bb(a[e],b,c));
return d},Db=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=vb[b];return c?c.priorityOverride||0:0},Bb=function(a,b,c){if(pa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Bb(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=pb[g];if(!h||b.Nc(h))return;c[g]=!0;try{var k=Cb(h,b,c);k.vtp_gtmEventId=b.id;d=Ab(k,b);yb&&(d=yb.$f(d,k))}catch(w){b.oe&&b.oe(w,Number(g)),d=!1}c[g]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Bb(a[l],b,c)]=Bb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var n=Bb(a[p],b,c);xb&&(m=m||n===xb.Ab);d.push(n)}return xb&&m?xb.cg(d):d.join("");case "escape":d=Bb(a[1],b,c);if(xb&&pa(a[1])&&"macro"===a[1][0]&&xb.Kg(a))return xb.Wg(d);d=String(d);for(var t=2;t<a.length;t++)Qa[a[t]]&&(d=Qa[a[t]](d));return d;case "tag":var q=a[1];if(!tb[q])throw Error("Unable to resolve tag reference "+q+".");return d={$d:a[2],
index:q};case "zb":var r={arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=Eb(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Eb=function(a,b,c){try{return wb(Cb(a,b,c))}catch(d){JSON.stringify(a)}return null};var Fb=function(){var a=function(b){return{toString:function(){return b}}};return{qd:a("convert_case_to"),rd:a("convert_false_to"),sd:a("convert_null_to"),td:a("convert_true_to"),ud:a("convert_undefined_to"),Eh:a("debug_mode_metadata"),ka:a("function"),pf:a("instance_name"),qf:a("live_only"),rf:a("malware_disabled"),sf:a("metadata"),Gh:a("original_vendor_template_id"),tf:a("once_per_event"),Nd:a("once_per_load"),Od:a("setup_tags"),Pd:a("tag_id"),Qd:a("teardown_tags")}}();var Gb=null,Jb=function(a){function b(n){for(var t=0;t<n.length;t++)d[n[t]]=!0}var c=[],d=[];Gb=Hb(a);for(var e=0;e<qb.length;e++){var g=qb[e],h=Ib(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],p=0;p<tb.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},Ib=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Gb(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=Gb(e[g]);if(null===h)return null;
if(h)return!1}return!0},Hb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Eb(sb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var Mb=function(a,b){var c=new Ka(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.evaluate(d[e]);return b.apply(this,d)});c.Og();return c};for(var Nb="floor ceil round max min abs pow sqrt".split(" "),Ob=0;Ob<Nb.length;Ob++)Math.hasOwnProperty(Nb[Ob]);(function(){var a={};return a})();var C=window,D=document,Pb=navigator,Qb=D.currentScript&&D.currentScript.src,Rb=function(a,b){var c=C[a];C[a]=void 0===c?b:c;return C[a]},Sb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Tb=function(a,b,c){var d=D.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Sb(d,b);c&&(d.onerror=c);var e;if(null===da)b:{var g=ba.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ca.test(k)){da=k;break b}}da=""}e=da;e&&d.setAttribute("nonce",e);var l=D.getElementsByTagName("script")[0]||D.body||D.head;l.parentNode.insertBefore(d,l);return d},Ub=function(){if(Qb){var a=Qb.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Vb=function(a,b){var c=D.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=D.body&&D.body.lastChild||
D.body||D.head;d.parentNode.insertBefore(c,d);Sb(c,b);void 0!==a&&(c.src=a);return c},Wb=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Xb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Yb=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},F=function(a){C.setTimeout(a,0)},Zb=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},$b=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},ac=function(a){var b=D.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},bc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},cc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var H={Za:"_ee",ic:"event_callback",Qa:"event_timeout",H:"gtag.config",S:"allow_ad_personalization_signals",U:"cookie_expires",Oa:"cookie_update",za:"session_duration"};var rc=/[A-Z]+/,sc=/\s/,tc=function(a){if(f(a)&&(a=Aa(a),!sc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(rc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],h:d}}}}},vc=function(a){for(var b={},c=0;c<a.length;++c){var d=tc(a[c]);d&&(b[d.id]=d)}uc(b);var e=[];wa(b,function(g,h){e.push(h)});return e};
function uc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.h[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var wc={},xc=null,yc=Math.random();wc.m="GTM-MWPR6C";wc.Eb="aa0";var zc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},Ac="www.googletagmanager.com/gtm.js";var Bc=Ac,Cc=null,Dc=null,Ec=null,Fc="//www.googletagmanager.com/a?id="+wc.m+"&cv=219",Gc={},Hc={},Ic=function(){var a=xc.sequence||0;xc.sequence=a+1;return a};var Jc={},Kc=function(a,b){Jc[a]=Jc[a]||[];Jc[a][b]=!0},Lc=function(a){for(var b=[],c=Jc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Mc=function(){return"&tc="+tb.filter(function(a){return a}).length},Xc=function(){Oc&&(C.clearTimeout(Oc),Oc=void 0);void 0===Pc||Qc[Pc]&&!Rc||(Sc[Pc]||Tc.Mg()||0>=Uc--?(Kc("GTM",1),Sc[Pc]=!0):(Tc.hh(),Wb(Vc()),Qc[Pc]=!0,Wc=Rc=""))},Vc=function(){var a=Pc;if(void 0===a)return"";var b=Lc("GTM"),c=Lc("TAGGING");return[Yc,Qc[a]?"":"&es=1",Zc[a],b?"&u="+b:"",c?"&ut="+c:"",Mc(),Rc,Wc,"&z=0"].join("")},$c=function(){return[Fc,"&v=3&t=t","&pid="+ta(),"&rv="+wc.Eb].join("")},ad="0.005000">
Math.random(),Yc=$c(),bd=function(){Yc=$c()},Qc={},Rc="",Wc="",Pc=void 0,Zc={},Sc={},Oc=void 0,Tc=function(a,b){var c=0,d=0;return{Mg:function(){if(c<a)return!1;Ba()-d>=b&&(c=0);return c>=a},hh:function(){Ba()-d>=b&&(c=0);c++;d=Ba()}}}(2,1E3),Uc=1E3,cd=function(a,b){if(ad&&!Sc[a]&&Pc!==a){Xc();Pc=a;Rc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Zc[a]="&e="+c+"&eid="+a;Oc||(Oc=C.setTimeout(Xc,500))}},dd=function(a,b,c){if(ad&&!Sc[a]&&b){a!==Pc&&(Xc(),Pc=a);var d=String(b[Fb.ka]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Rc=Rc?Rc+"."+e:"&tr="+e;Oc||(Oc=C.setTimeout(Xc,500));2022<=Vc().length&&Xc()}};var ed={},fd=new ua,gd={},hd={},kd={name:"dataLayer",set:function(a,b){u(Ja(a,b),gd);id()},get:function(a){return jd(a,2)},reset:function(){fd=new ua;gd={};id()}},jd=function(a,b){if(2!=b){var c=fd.get(a);if(ad){var d=ld(a);c!==d&&Kc("GTM",5)}return c}return ld(a)},ld=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:nd(d)},nd=function(a){for(var b=gd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var qd=function(a,b){hd.hasOwnProperty(a)||(fd.set(a,b),u(Ja(a,b),gd),id())},id=function(a){wa(hd,function(b,c){fd.set(b,c);u(Ja(b,void 0),gd);u(Ja(b,c),gd);a&&delete hd[b]})},rd=function(a,b,c){ed[a]=ed[a]||{};var d=1!==c?ld(b):fd.get(b);"array"===Na(d)||"object"===Na(d)?ed[a][b]=u(d):ed[a][b]=d},sd=function(a,b){if(ed[a])return ed[a][b]};var td=function(){var a=!1;return a};var L=function(a,b,c,d){return(2===ud()||d||"http:"!=C.location.protocol?a:b)+c},ud=function(){var a=Ub(),b;if(1===a)a:{var c=Bc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=D.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Jd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Kd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Ld={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Md="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Od=function(a){var b=jd("gtm.whitelist");b&&Kc("GTM",9);var c=b&&Ia(za(b),Kd),d=jd("gtm.blacklist");d||(d=jd("tagTypeBlacklist"))&&Kc("GTM",3);
d?Kc("GTM",8):d=[];Nd()&&(d=za(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=ra(za(d),"google")&&Kc("GTM",2);var e=d&&Ia(za(d),Ld),g={};return function(h){var k=h&&h[Fb.ka];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Hc[k]||[],m=a(k,l);if(b){var p;if(p=m)a:{if(0>ra(c,k))if(l&&0<l.length)for(var n=0;n<l.length;n++){if(0>
ra(c,l[n])){Kc("GTM",11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var t=!1;if(d){var q=0<=ra(e,k);if(q)t=q;else{var r=va(e,l||[]);r&&Kc("GTM",10);t=r}}var v=!m||t;v||!(0<=ra(l,"sandboxedScripts"))||c&&-1!==ra(c,"sandboxedScripts")||(v=va(e,Md));return g[k]=v}},Nd=function(){return Jd.test(C.location&&C.location.hostname)};var Pd={$f:function(a,b){b[Fb.qd]&&"string"===typeof a&&(a=1==b[Fb.qd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Fb.sd)&&null===a&&(a=b[Fb.sd]);b.hasOwnProperty(Fb.ud)&&void 0===a&&(a=b[Fb.ud]);b.hasOwnProperty(Fb.td)&&!0===a&&(a=b[Fb.td]);b.hasOwnProperty(Fb.rd)&&!1===a&&(a=b[Fb.rd]);return a}};var Qd={active:!0,isWhitelisted:function(){return!0}},Rd=function(a){var b=xc.zones;!b&&a&&(b=xc.zones=a());return b};var Sd=!1,Td=0,Ud=[];function Vd(a){if(!Sd){var b=D.createEventObject,c="complete"==D.readyState,d="interactive"==D.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Sd=!0;for(var e=0;e<Ud.length;e++)F(Ud[e])}Ud.push=function(){for(var g=0;g<arguments.length;g++)F(arguments[g]);return 0}}}function Wd(){if(!Sd&&140>Td){Td++;try{D.documentElement.doScroll("left"),Vd()}catch(a){C.setTimeout(Wd,50)}}}var Xd=function(a){Sd?a():Ud.push(a)};var Yd={},Zd={},$d=function(a,b,c,d){if(!Zd[a]||zc[b]||"__zone"===b)return-1;var e={};Pa(d)&&(e=u(d,e));e.id=c;e.status="timeout";return Zd[a].tags.push(e)-1},ae=function(a,b,c,d){if(Zd[a]){var e=Zd[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function be(a){for(var b=Yd[a]||[],c=0;c<b.length;c++)b[c]();Yd[a]={push:function(d){d(wc.m,Zd[a])}}}
var ee=function(a,b,c){Zd[a]={tags:[]};na(b)&&ce(a,b);c&&C.setTimeout(function(){return be(a)},Number(c));return de(a)},ce=function(a,b){Yd[a]=Yd[a]||[];Yd[a].push(Fa(function(){return F(function(){b(wc.m,Zd[a])})}))};function de(a){var b=0,c=0,d=!1;return{add:function(){c++;return Fa(function(){b++;d&&b>=c&&be(a)})},Jf:function(){d=!0;b>=c&&be(a)}}};var fe=function(){function a(d){return!oa(d)||0>d?0:d}if(!xc._li&&C.performance&&C.performance.timing){var b=C.performance.timing.navigationStart,c=oa(kd.get("gtm.start"))?kd.get("gtm.start"):0;xc._li={cst:a(c-b),cbt:a(Dc-b)}}};var je=!1,ke=function(){return C.GoogleAnalyticsObject&&C[C.GoogleAnalyticsObject]},le=!1;
var me=function(a){C.GoogleAnalyticsObject||(C.GoogleAnalyticsObject=a||"ga");var b=C.GoogleAnalyticsObject;if(C[b])C.hasOwnProperty(b)||Kc("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);C[b]=c}fe();return C[b]},ne=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=ke();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var pe=function(){},oe=function(){return C.GoogleAnalyticsObject||"ga"};var re=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var se=/:[0-9]+$/,te=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},we=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ue(a.protocol)||ue(C.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:C.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||C.location.hostname).replace(se,"").toLowerCase());var g=b,h,k=ue(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=ve(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(se,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||Kc("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=ra(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=te(h,e,void 0));break;case "extension":var p=a.pathname.split(".");h=1<p.length?p[p.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},ue=function(a){return a?a.replace(":","").toLowerCase():""},ve=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
xe=function(a){var b=D.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Kc("TAGGING",1),c="/"+c);var d=b.hostname.replace(se,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var De=function(a){};function Ce(a,b){a.containerId=wc.m;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function Ee(a,b,c,d){var e=tb[a],g=Fe(a,b,c,d);if(!g)return null;var h=Bb(e[Fb.Od],c,[]);if(h&&h.length){var k=h[0];g=Ee(k.index,{L:g,V:1===k.$d?b.terminate:g,terminate:b.terminate},c,d)}return g}
function Fe(a,b,c,d){function e(){if(g[Fb.rf])k();else{var w=Cb(g,c,[]),y=$d(c.id,String(g[Fb.ka]),Number(g[Fb.Pd]),w[Fb.sf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var B=Ba()-A;dd(c.id,tb[a],"5");ae(c.id,y,"success",B);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var B=Ba()-A;dd(c.id,tb[a],"6");ae(c.id,y,"failure",B);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;dd(c.id,g,"1");var z=function(B){var E=Ba()-A;De(B);dd(c.id,g,"7");ae(c.id,y,"exception",E);x||(x=!0,k())};var A=Ba();try{Ab(w,c)}catch(B){z(B)}}}var g=tb[a],h=b.L,k=b.V,l=b.terminate;if(c.Nc(g))return null;var m=Bb(g[Fb.Qd],c,[]);if(m&&m.length){var p=m[0],n=Ee(p.index,{L:h,V:k,terminate:l},c,d);if(!n)return null;h=n;k=2===p.$d?l:n}if(g[Fb.Nd]||g[Fb.tf]){var t=g[Fb.Nd]?ub:c.sh,q=h,r=k;if(!t[a]){e=Fa(e);var v=Ge(a,t,e);h=v.L;k=v.V}return function(){t[a](q,r)}}return e}
function Ge(a,b,c){var d=[],e=[];b[a]=He(d,e,c);return{L:function(){b[a]=Ie;for(var g=0;g<d.length;g++)d[g]()},V:function(){b[a]=Je;for(var g=0;g<e.length;g++)e[g]()}}}function He(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ie(a){a()}function Je(a,b){b()};var Me=function(a,b){for(var c=[],d=0;d<tb.length;d++)if(a.jb[d]){var e=tb[d];var g=b.add();try{var h=Ee(d,{L:g,V:g,terminate:g},a,d);h?c.push({He:d,we:Db(e),kg:h}):(Ke(d,a),g())}catch(l){g()}}b.Jf();c.sort(Le);for(var k=0;k<c.length;k++)c[k].kg();return 0<c.length};function Le(a,b){var c,d=b.we,e=a.we;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.He,k=b.He;g=h>k?1:h<k?-1:0}return g}
function Ke(a,b){if(!ad)return;var c=function(d){var e=b.Nc(tb[d])?"3":"4",g=Bb(tb[d][Fb.Od],b,[]);g&&g.length&&c(g[0].index);dd(b.id,tb[d],e);var h=Bb(tb[d][Fb.Qd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Ne=!1,Oe=function(a,b,c,d,e){if("gtm.js"==b){if(Ne)return!1;Ne=!0}cd(a,b);var g=ee(a,d,e);rd(a,"event",1);rd(a,"ecommerce",1);rd(a,"gtm");var h={id:a,name:b,Nc:Od(c),jb:[],sh:[],oe:function(p){Kc("GTM",6);De(p)}};h.jb=Jb(h);var k=Me(h,g);
if(!k)return k;for(var l=0;l<h.jb.length;l++)if(h.jb[l]){var m=tb[l];if(m&&!zc[String(m[Fb.ka])])return!0}return!1};var Qe=function(a,b,c,d,e){var g=this;this.eventModel=a;this.containerConfig=c||{};this.targetConfig=b||{};this.containerConfig=c||{};this.lb=d||{};this.globalConfig=e||{};this.getWithConfig=function(h){if(void 0!==g.eventModel[h])return g.eventModel[h];if(void 0!==g.targetConfig[h])return g.targetConfig[h];if(void 0!==g.containerConfig[h])return g.containerConfig[h];if(void 0!==g.lb[h])return g.lb[h];if(void 0!==g.globalConfig[h])return g.globalConfig[h]}};var Re={},Se=["G"];Re.Je="";var Te=Re.Je.split(",");function Ue(){var a=xc;return a.gcq=a.gcq||new Ve}
var We=function(a,b,c){Ue().register(a,b,c)},Xe=function(a,b,c,d){Ue().push("event",[b,a],c,d)},Ye=function(a,b){Ue().push("config",[a],b)},Ze={},$e=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.lb={};this.xe=null;this.je=!1},af=function(a,b,c,d,e){this.type=a;this.Ie=b;this.N=c||"";this.Ib=d;this.defer=e},Ve=function(){this.Wd={};this.fe={};this.eb=[]},bf=function(a,b){var c=tc(b);return a.Wd[c.containerId]=a.Wd[c.containerId]||new $e},cf=function(a,b,c,d){if(d.N){var e=
bf(a,d.N),g=e.xe;if(g){var h=u(c),k=u(e.targetConfig[d.N]),l=u(e.containerConfig),m=u(e.lb),p=u(a.fe),n=new Qe(h,k,l,m,p);try{3===g.length?g(b,d.Ie,n):4===g.length&&g(d.N,b,d.Ie,n)}catch(t){}}}};
Ve.prototype.register=function(a,b,c){if(3!==bf(this,a).status){bf(this,a).xe=b;bf(this,a).status=3;c&&(bf(this,a).lb=c);var d=tc(a),e=Ze[d.containerId];if(void 0!==e){var g=xc[d.containerId].bootstrap,h=jd("gtm.uniqueEventId"),k=d.prefix,l=Ba()-g;if(ad&&!Sc[h]){h!==Pc&&(Xc(),Pc=h);var m=k+"."+Math.floor(g-e)+"."+Math.floor(l);Wc=Wc?Wc+","+m:"&cl="+m}delete Ze[d.containerId]}this.flush()}};
Ve.prototype.push=function(a,b,c,d){var e=Math.floor(Ba()/1E3);if(c){var g=tc(c),h;if(h=g){var k;if(k=1===bf(this,c).status)a:{var l=g.prefix;k=!0}h=k}if(h&&(bf(this,c).status=2,this.push("require",[],g.containerId),Ze[g.containerId]=Ba(),!td())){var m=encodeURIComponent(g.containerId);Tb(("http:"!=C.location.protocol?"https:":
"http:")+("//www.googletagmanager.com/gtag/js?id="+m+"&l=dataLayer&cx=c"))}}this.eb.push(new af(a,e,c,b,d));d||this.flush()};
Ve.prototype.flush=function(a){for(var b=this;this.eb.length;){var c=this.eb[0];if(c.defer)c.defer=!1,this.eb.push(c);else switch(c.type){case "require":if(3!==bf(this,c.N).status&&!a)return;break;case "set":wa(c.Ib[0],function(l,m){u(Ja(l,m),b.fe)});break;case "config":var d=c.Ib[0],e=!!d[H.yb];delete d[H.yb];var g=bf(this,c.N),h=tc(c.N),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.N]={});g.je&&e||cf(this,H.H,d,c);g.je=!0;k?u(d,g.containerConfig):u(d,g.targetConfig[c.N]);break;
case "event":cf(this,c.Ib[1],c.Ib[0],c)}this.eb.shift()}};var df=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},gf=function(a,b,c,d){var e=ef(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=ff(e,function(g){return g.Nb},b);if(1===e.length)return e[0].id;e=ff(e,function(g){return g.kb},c);return e[0]?e[0].id:void 0}};
function hf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=df(b,e).indexOf(c)}
var lf=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var p=l;p&&1200<p.length&&(p=p.substring(0,1200));l=p;m=a+"="+l}var n=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":n=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===n){for(var v=jf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!kf(y,t)&&hf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else n&&"none"!=n&&(m+="; domain="+n),k=!kf(n,t)&&hf(m,a,l)}return k};function ff(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function ef(a,b){for(var c=[],d=df(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Nb:1*k[0]||1,kb:1*k[1]||1}))}}return c}
var mf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,nf=/(^|\.)doubleclick\.net$/i,kf=function(a,b){return nf.test(document.location.hostname)||"/"===b&&mf.test(a)},jf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;nf.test(e)||mf.test(e)||a.push("none");return a};var of="".split(/,/),qf=null,rf={},sf={},tf,uf=function(a,b){var c={event:a};b&&(c.eventModel=u(b),b[H.ic]&&(c.eventCallback=b[H.ic]),b[H.Qa]&&(c.eventTimeout=b[H.Qa]));return c};
var Af={config:function(a){},
event:function(a){var b=a[1];if(f(b)&&!(3<a.length)){var c;if(2<a.length){if(!Pa(a[2])&&void 0!=a[2])return;c=a[2]}var d=uf(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){3===a.length&&(void 0).Uh().Kh(a[1],a[2])},set:function(a){var b;2==a.length&&Pa(a[1])?b=u(a[1]):3==a.length&&f(a[1])&&(b={},Pa(a[2])||pa(a[2])?b[a[1]]=u(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},Bf={policy:!0};var Df=function(a){return Cf?D.querySelectorAll(a):null},Ef=function(a,b){if(!Cf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!D.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Ff=!1;if(D.querySelectorAll)try{var Gf=D.querySelectorAll(":root");Gf&&1==Gf.length&&Gf[0]==D.documentElement&&(Ff=!0)}catch(a){}var Cf=Ff;var Nf=function(a){if(Mf(a))return a;this.zh=a};Nf.prototype.sg=function(){return this.zh};var Mf=function(a){return!a||"object"!==Na(a)||Pa(a)?!1:"getUntrustedUpdateValue"in a};Nf.prototype.getUntrustedUpdateValue=Nf.prototype.sg;var Of=!1,Pf=[];function Qf(){if(!Of){Of=!0;for(var a=0;a<Pf.length;a++)F(Pf[a])}}var Rf=function(a){Of?F(a):Pf.push(a)};var Sf=[],Tf=!1,Uf=function(a){return C["dataLayer"].push(a)},Vf=function(a){var b=xc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},Xf=function(a){var b=a._clear;wa(a,function(g,h){"_clear"!==g&&(b&&qd(g,void 0),qd(g,h))});Cc||(Cc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Ic(),a["gtm.uniqueEventId"]=d,qd("gtm.uniqueEventId",d));Ec=c;var e=Wf(a);
Ec=null;switch(c){case "gtm.init":Kc("GTM",19),e&&Kc("GTM",20)}return e};function Wf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=xc.zones;d=e?e.checkState(wc.m,c):Qd;return d.active?Oe(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var Yf=function(){for(var a=!1;!Tf&&0<Sf.length;){Tf=!0;delete gd.eventModel;id();var b=Sf.shift();if(null!=b){var c=Mf(b);if(c){var d=b;b=Mf(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=jd(h,1);if(pa(k)||Pa(k))k=u(k);hd[h]=k}}try{if(na(b))try{b.call(kd)}catch(v){}else if(pa(b)){var l=b;if(f(l[0])){var m=
l[0].split("."),p=m.pop(),n=l.slice(1),t=jd(m.join("."),2);if(void 0!==t&&null!==t)try{t[p].apply(t,n)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&f(b[0])){var r=Af[b[0]];if(r&&(!c||!Bf[b[0]])){b=r(b);break a}}b=void 0}if(!b){Tf=!1;continue}}a=Xf(b)||a}}finally{c&&id(!0)}}Tf=!1}
return!a},Zf=function(){var a=Yf();try{var b=wc.m,c=C["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},$f=function(){var a=Rb("dataLayer",[]),b=Rb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Xd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Rf(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<xc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Nf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Sf.push.apply(Sf,d);if(300<this.length)for(Kc("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Yf()&&h};Sf.push.apply(Sf,a.slice(0));F(Zf)};var ag;var wg={};wg.Ab=new String("undefined");
var xg=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===wg.Ab?b:a[d]);return c.join("")}};xg.prototype.toString=function(){return this.resolve("undefined")};xg.prototype.valueOf=xg.prototype.toString;wg.wf=xg;wg.xc={};wg.cg=function(a){return new xg(a)};var yg={};wg.ih=function(a,b){var c=Ic();yg[c]=[a,b];return c};wg.Xd=function(a){var b=a?0:1;return function(c){var d=yg[c];if(d&&"function"===typeof d[b])d[b]();yg[c]=void 0}};wg.Kg=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};wg.Wg=function(a){if(a===wg.Ab)return a;var b=Ic();wg.xc[b]=a;return'google_tag_manager["'+wc.m+'"].macro('+b+")"};wg.Pg=function(a,b,c){a instanceof wg.wf&&(a=a.resolve(wg.ih(b,c)),b=ma);return{Kc:a,L:b}};var zg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Zb(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Ag=function(a){xc.hasOwnProperty("autoEventsSettings")||(xc.autoEventsSettings={});var b=xc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Bg=function(a,b,c){Ag(a)[b]=c},Cg=function(a,b,c,d){var e=Ag(a),g=Ca(e,b,d);e[b]=c(g)},Dg=function(a,b,c){var d=Ag(a);return Ca(d,b,c)};var Eg=function(){for(var a=Pb.userAgent+(D.cookie||"")+(D.referrer||""),b=a.length,c=C.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ba()/1E3)].join(".")},Hg=function(a,b,c,d){var e=Fg(b);return gf(a,e,Gg(c),d)},Ig=function(a,b,c,d){var e=""+Fg(c),g=Gg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},Fg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Gg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Jg=["1"],Kg={},Og=function(a,b,c,d){var e=Lg(a);Kg[e]||Mg(e,b,c)||(Ng(e,Eg(),b,c,d),Mg(e,b,c))};function Ng(a,b,c,d,e){var g=Ig(b,"1",d,c);lf(a,g,c,d,0==e?void 0:new Date(Ba()+1E3*(void 0==e?7776E3:e)))}function Mg(a,b,c){var d=Hg(a,b,c,Jg);d&&(Kg[a]=d);return d}function Lg(a){return(a||"_gcl")+"_au"};var Pg=function(){for(var a=[],b=D.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({hd:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].hd]||(g[a[h].hd]=[]),g[a[h].hd].push({timestamp:k[1],pg:k[2]}))}return g};function Qg(){for(var a=Rg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Sg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Rg,Tg,Ug=function(a){Rg=Rg||Sg();Tg=Tg||Qg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,p=(h&15)<<2|k>>6,n=k&63;e||(n=64,d||(p=64));b.push(Rg[l],Rg[m],Rg[p],Rg[n])}return b.join("")},Vg=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=Tg[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Rg=Rg||Sg();Tg=Tg||
Qg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Wg;function Xg(a,b){if(!a||b===D.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var ah=function(){var a=Yg,b=Zg,c=$g(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Xb(D,"mousedown",d);Xb(D,"keyup",d);Xb(D,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},$g=function(){var a=Rb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var bh=/(.*?)\*(.*?)\*(.*)/,ch=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,dh=/^(?:www\.|m\.|amp\.)+/,eh=/([^?#]+)(\?[^#]*)?(#.*)?/,fh=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,hh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Ug(String(d))))}var e=b.join("*");return["1",gh(e),e].join("*")},gh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Wg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Wg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Wg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},jh=function(){return function(a){var b=xe(C.location.href),c=b.search.replace("?",""),d=te(c,"_gl",!0)||"";a.query=ih(d)||{};var e=we(b,"fragment").match(fh);a.fragment=ih(e&&e[3]||
"")||{}}},kh=function(){var a=jh(),b=$g();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ga(c,d.query),Ga(c,d.fragment));return c},ih=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=bh.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],p=0;p<b;++p)if(m===gh(k,p)){l=!0;break a}l=!1}if(l){for(var n={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)n[t[q]]=Vg(t[q+1]);return n}}}}catch(r){}};
function lh(a,b,c){function d(m){var p=m,n=fh.exec(p),t=p;if(n){var q=n[2],r=n[4];t=n[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=eh.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function mh(a,b,c){for(var d={},e={},g=$g().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Xg(k.domains,b)&&(k.fragment?Ga(e,k.callback()):Ga(d,k.callback()))}if(Ha(d)){var l=hh(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var p=a.childNodes||[],n=!1,t=0;t<p.length;t++){var q=p[t];if("_gl"===q.name){q.setAttribute("value",l);n=!0;break}}if(!n){var r=D.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=lh(l,a.action);re.test(v)&&(a.action=v)}}}else nh(l,a,!1)}if(!c&&Ha(e)){var w=hh(e);nh(w,a,!0)}}function nh(a,b,c){if(b.href){var d=lh(a,b.href,void 0===c?!1:c);re.test(d)&&(b.href=d)}}
var Yg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||mh(e,e.hostname,!1)}}catch(h){}},Zg=function(a){try{if(a.action){var b=we(xe(a.action),"host");mh(a,b,!0)}}catch(c){}},oh=function(a,b,c,d){ah();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};$g().decorators.push(e)},ph=function(){var a=D.location.hostname,b=ch.exec(D.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(dh,""),l=e.replace(dh,""),m;if(!(m=k===l)){var p="."+l;m=k.substring(k.length-p.length,k.length)===p}return m},qh=function(a,b){return!1===a?!1:a||b||ph()};var rh={};var sh=/^\w+$/,th=/^[\w-]+$/,uh=/^~?[\w-]+$/,vh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function wh(a){return a&&"string"==typeof a&&a.match(sh)?a:"_gcl"}var yh=function(){var a=xe(C.location.href),b=we(a,"query",!1,void 0,"gclid"),c=we(a,"query",!1,void 0,"gclsrc"),d=we(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||te(e,"gclid",void 0);c=c||te(e,"gclsrc",void 0)}return xh(b,c,d)};
function xh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(th))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==rh.gtm_3pds?0:rh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}var Ah=function(a){var b=yh();zh(b,a)};
function zh(a,b,c){function d(n,t){var q=Bh(n,e);q&&lf(q,t,h,g,l,!0)}b=b||{};var e=wh(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Vb?7776E3:b.Vb;c=c||Ba();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),p=function(n){return["GCL",m,n].join(".")};a.aw&&(!0===b.ki?d("aw",p("~"+a.aw[0])):d("aw",p(a.aw[0])));a.dc&&d("dc",p(a.dc[0]));a.gf&&d("gf",p(a.gf[0]));a.ha&&d("ha",p(a.ha[0]))}
var Dh=function(a,b,c,d,e){for(var g=kh(),h=wh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==vh[l]){var m=Bh(l,h),p=g[m];if(p){var n=Math.min(Ch(p),Ba()),t;b:{for(var q=n,r=df(m,D.cookie),v=0;v<r.length;++v)if(Ch(r[v])>q){t=!0;break b}t=!1}t||lf(m,p,c,d,0==e?void 0:new Date(n+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};zh(xh(g.gclid,g.gclsrc),w)},Bh=function(a,b){var c=vh[a];if(void 0!==c)return b+c},Ch=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Eh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Fh=function(a,b,c,d,e){if(pa(b)){var g=wh(e);oh(function(){for(var h={},k=0;k<a.length;++k){var l=Bh(a[k],g);if(l){var m=df(l,D.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Gh=function(a){return a.filter(function(b){return uh.test(b)})},Hh=function(a){for(var b=["aw","dc"],c=wh(a&&a.prefix),d={},e=0;e<b.length;e++)vh[b[e]]&&(d[b[e]]=vh[b[e]]);wa(d,function(g,h){var k=df(c+h,D.cookie);if(k.length){var l=k[0],m=Ch(l),p={};p[g]=[Eh(l)];zh(p,a,m)}})};var Ih=/^\d+\.fls\.doubleclick\.net$/;function Jh(a){var b=xe(C.location.href),c=we(b,"host",!1);if(c&&c.match(Ih)){var d=we(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Kh(a,b){if("aw"==a||"dc"==a){var c=Jh("gcl"+a);if(c)return c.split(".")}var d=wh(b);if("_gcl"==d){var e;e=yh()[a]||[];if(0<e.length)return e}var g=Bh(a,d),h;if(g){var k=[];if(D.cookie){var l=df(g,D.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var p=Eh(l[m]);p&&-1===ra(k,p)&&k.push(p)}h=Gh(k)}else h=k}else h=k}else h=[];return h}
var Lh=function(){var a=Jh("gac");if(a)return decodeURIComponent(a);var b=Pg(),c=[];wa(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].pg);g=Gh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Mh=function(a,b,c,d,e){Og(b,c,d,e);var g=Kg[Lg(b)],h=yh().dc||[],k=!1;if(g&&0<h.length){var l=xc.joined_au=xc.joined_au||{},m=b||"_gcl";if(!l[m])for(var p=0;p<h.length;p++){var n="https://adservice.google.com/ddm/regclk",t=n=n+"?gclid="+h[p]+"&auiddc="+g;Pb.sendBeacon&&Pb.sendBeacon(t)||Wb(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Lg(b),r=Kg[q];r&&Ng(q,r,c,d,e)}};var Nh;if(3===wc.Eb.length)Nh="g";else{var Oh="G";Nh=Oh}
var Ph={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Nh,OPT:"o"},Qh=function(a){var b=wc.m.split("-"),c=b[0].toUpperCase(),d=Ph[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===wc.Eb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+wc.Eb+e};var Vh=["input","select","textarea"],Wh=["button","hidden","image","reset","submit"],Yh=function(a){var b=a.tagName.toLowerCase();return!sa(Vh,function(c){return c===b})||"input"===b&&sa(Wh,function(c){return c===a.type.toLowerCase()})?!1:!0},Zh=function(a){return a.form?a.form.tagName?a.form:D.getElementById(a.form):bc(a,["form"],100)},$h=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(Yh(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var ci=!!C.MutationObserver,di=void 0,ei=function(a){if(!di){var b=function(){var c=D.body;if(c)if(ci)(new MutationObserver(function(){for(var e=0;e<di.length;e++)F(di[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Xb(c,"DOMNodeInserted",function(){d||(d=!0,F(function(){d=!1;for(var e=0;e<di.length;e++)F(di[e])}))})}};di=[];D.body?b():F(b)}di.push(a)};
var wi=function(){var a=D.body,b=D.documentElement||a&&a.parentElement,c,d;if(D.compatMode&&"BackCompat"!==D.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};Kc("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},xi=function(a){var b=wi(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},yi=function(a){if(D.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!C.getComputedStyle)return!0;var c=C.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),g=Math.min(h,g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=C.getComputedStyle(d,null))}return!1};var zi=[],Ai=!(!C.IntersectionObserver||!C.IntersectionObserverEntry),Bi=function(a,b,c){for(var d=new C.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var g=0;g<zi.length;g++)if(!zi[g])return zi[g]=d,g;return zi.push(d)-1},Ci=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},p={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Ba()};F(function(){return a(p)})}for(var e=[],g=[],h=0;h<b.length;h++)e.push(0),g.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=xi(b[k]);if(l>e[k])for(;g[k]<c.length-1&&l>=c[g[k]+1];)d(b[k],l),g[k]++;else if(l<e[k])for(;0<=g[k]&&l<=c[g[k]];)d(b[k],l),g[k]--;e[k]=l}}},Di=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Ai){var e=!1;F(function(){e||Ci(a,b,c)()});return Bi(function(g){e=!0;for(var h={Ma:0};h.Ma<g.length;h={Ma:h.Ma},h.Ma++)F(function(k){return function(){return a(g[k.Ma])}}(h))},b,c)}return C.setInterval(Ci(a,b,c),1E3)},Ei=function(a){Ai?0<=a&&a<zi.length&&zi[a]&&(zi[a].disconnect(),zi[a]=void 0):C.clearInterval(a)};var Gi=C.clearTimeout,Hi=C.setTimeout,M=function(a,b,c){if(td()){b&&F(b)}else return Tb(a,b,c)},Ii=function(){return C.location.href},Ji=function(a){return we(xe(a),"fragment")},Ki=function(a){return ve(xe(a))},Li=null;
var Mi=function(a,b){return jd(a,b||2)},Ni=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Uf(a)},Oi=function(a,b){C[a]=b},W=function(a,b,c){b&&(void 0===C[a]||c&&!C[a])&&(C[a]=b);return C[a]},Pi=function(a,b,c){return df(a,b,void 0===c?!0:!!c)},Qi=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Vb:d};Ah(e);Hh(e)},Ri=function(a,b,c,d,e){Fh(a,b,c,d,e);},Si=function(a,b){if(td()){b&&F(b)}else Vb(a,b)},Ti=function(a){return!!Dg(a,"init",!1)},Ui=function(a){Bg(a,"init",!0)},Vi=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Bc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&wa(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});M(L("https://","http://",d))},Wi=function(a,b){var c=a[b];
return c};var Yi=wg.Pg;
var Zi=new ua,$i=function(a,b){function c(h){var k=xe(h),l=we(k,"protocol"),m=we(k,"host",!0),p=we(k,"port"),n=we(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,n]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},aj=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&pa(c)){for(var d=0;d<c.length;d++)if(aj({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var p;p=String(b).split(",");
return 0<=ra(p,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Zi.get(q);r||(r=new RegExp(c,t),Zi.set(q,r));n=r.test(b)}catch(v){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return $i(b,c)}return!1};var cj={},dj=function(){if(C._gtmexpgrp&&C._gtmexpgrp.hasOwnProperty(1))return C._gtmexpgrp[1];void 0===cj[1]&&(cj[1]=Math.floor(2*Math.random()));return cj[1]};var ej=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var fj={},gj=encodeURI,X=encodeURIComponent,hj=Wb;var ij=function(a,b){if(!a)return!1;var c=we(xe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var jj=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};fj.Lg=function(){var a=!1;return a};var Tj=function(){var a=C.gaGlobal=C.gaGlobal||{};a.hid=a.hid||ta();return a.hid};var Ck=window,Dk=document,Ek=function(a){var b=Ck._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Ck["ga-disable-"+a])return!0;try{var c=Ck.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=df("AMP_TOKEN",Dk.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Dk.getElementById("__gaOptOutExtension")?!0:!1};var Hk=function(a){return"_"===a.charAt(0)},Ik=function(a){wa(a,function(c){Hk(c)&&delete a[c]});var b=a[H.zb]||{};wa(b,function(c){Hk(c)&&delete b[c]})};var Lk=function(a,b,c){Xe(b,c,a)},Mk=function(a,b,c){Xe(b,c,a,!0)},Ok=function(a,b){},Nk=function(a,b){};
var Z={a:{}};
Z.a.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.b="ctv";Z.__ctv.g=!0;Z.__ctv.priorityOverride=0})(function(){return"219"})}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();

Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.b="d";Z.__d.g=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=Df(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=D.getElementById(a.vtp_elementId);b&&(c=d?Zb(b,d):$b(b));return Aa(String(b&&c))})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(sd(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=Mi("gtm.referrer",1)||D.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?we(xe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Ki(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=zg(c,"gtm.click");Ni(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!Ti("cl")){var c=W("document");Xb(c,"click",a,!0);Ui("cl")}F(b.vtp_gtmOnSuccess)})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return ta(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Mi("gtm.url",1))||Ii();var d=b[a("vtp_component")];if(!d||"URL"==d)return Ki(String(c));var e=xe(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?pa(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var p=0;p<m.length;p++){var n=we(e,"QUERY",void 0,void 0,m[p]);if(void 0!=n&&(!l||""!==n)){g=n;break a}}g=void 0}else g=we(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Mi(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.tl=["google"],function(){function a(b){return function(){if(b.Sc&&b.Uc>=b.Sc)b.Mc&&W("self").clearInterval(b.Mc);else{b.Uc++;var c=(new Date).getTime();Ni({event:b.Z,"gtm.timerId":b.Mc,"gtm.timerEventNumber":b.Uc,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Sc,"gtm.timerStartTime":b.Ge,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Ge,"gtm.triggers":b.xh})}}}(function(b){Z.__tl=b;Z.__tl.b="tl";Z.__tl.g=!0;Z.__tl.priorityOverride=0})(function(b){F(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{Z:b.vtp_eventName,Uc:0,interval:Number(b.vtp_interval),Sc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),xh:String(b.vtp_uniqueTriggerId||"0"),Ge:(new Date).getTime()};c.Mc=W("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var p=d.vtp_gaSettings;u(jj(p.vtp_fieldsToSet,"fieldName","value"),g);u(jj(p.vtp_contentGroup,"index","group"),h);u(jj(p.vtp_dimension,"index","dimension"),k);u(jj(p.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;p.vtp_fieldsToSet=void 0;p.vtp_contentGroup=void 0;p.vtp_dimension=void 0;p.vtp_metric=void 0;var n=u(p);d=u(d,n)}u(jj(d.vtp_fieldsToSet,"fieldName","value"),g);u(jj(d.vtp_contentGroup,
"index","group"),h);u(jj(d.vtp_dimension,"index","dimension"),k);u(jj(d.vtp_metric,"index","metric"),l);var t=me(d.vtp_functionName);if(na(t)){var q="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,q=r+"."):(r="gtm"+Ic(),q=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(T){var P=[].slice.call(arguments,0);P[0]=q+P[0];t.apply(window,P)},x=function(T,P){return void 0===P?P:T(P)},z=function(T,P){if(P)for(var qa in P)P.hasOwnProperty(qa)&&y("set",T+qa,P[qa])},A=function(){},B=function(T,P,qa){var Ya=0;if(T)for(var Da in T)if(T.hasOwnProperty(Da)&&(qa&&v[Da]||!qa&&void 0===v[Da])){var Za=w[Da]?ya(T[Da]):T[Da];"anonymizeIp"!=Da||Za||(Za=void 0);P[Da]=Za;Ya++}return Ya},E={name:r};B(g,E,!0);t("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",Qh(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(T,P){void 0!==d[P]&&y("set",T,d[P])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var G={};B(g,G,!1)&&y("set",G);var J;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var T=g&&g.hitCallback;na(T)&&T();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),A());var N={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(xa,d.vtp_eventValue||
e.value)};B(J,N,!1);y("send",N);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),A());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var Y=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:Y})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ea="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ea})}J?y("send","pageview",J):y("send","pageview");}if(!a){var fa=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(fa="internal/"+fa);a=!0;var Ea=L("https:","http:","//www.google-analytics.com/"+fa,g&&g.forceSSL);M(Ea,function(){var T=ke();T&&T.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else F(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();



Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0;Z.__cid.priorityOverride=0})(function(){return wc.m})}();


Z.a.aev=["google"],function(){function a(q,r){var v=sd(q,"gtm");if(v)return v[r]}function b(q,r,v,w){w||(w="element");var y=q+"."+r,x;if(p.hasOwnProperty(y))x=p[y];else{var z=a(q,w);if(z&&(x=v(z),p[y]=x,n.push(y),35<n.length)){var A=n.shift();delete p[A]}}return x}function c(q,r,v){var w=a(q,t[r]);return void 0!==w?w:v}function d(q,r){if(!q)return!1;var v=e(Ii());pa(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<r.length;y++)if(r[y]instanceof RegExp){if(r[y].test(q))return!1}else{var x=
r[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!ij(q,w)}function e(q){m.test(q)||(q="http://"+q);return we(xe(q),"HOST",!0)}function g(q,r,v){switch(q){case "SUBMIT_TEXT":return b(r,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":var w=b(r,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(r,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(r,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return Zb(q,"value");case "button":return $b(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var r=0,v=0;v<q.elements.length;v++)Yh(q.elements[v])&&r++;return r}}function l(q,r,v){var w=a(q,"interactedFormField");return w&&Zb(w,r)||v}var m=/^https?:\/\//i,p={},n=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(q){var r=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(r,"element");return y&&y.tagName||
v;case "TEXT":return b(r,w,$b)||v;case "URL":var x;a:{var z=String(a(r,"elementUrl")||v||""),A=xe(z),B=String(q.vtp_component||"URL");switch(B){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,q.vtp_affiliatedDomains);break a;default:x=we(A,B,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(r,w,v);else{var G=q.vtp_attribute,J=a(r,"element");E=J&&Zb(J,G)||v||""}return E;case "MD":var N=q.vtp_mdValue,V=b(r,"MD",si);return N&&V?vi(V,N)||
v:V||v;case "FORM":return g(String(q.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();

Z.a.fsl=[],function(){function a(){var e=W("document"),g=c(),h=HTMLFormElement.prototype.submit;Xb(e,"click",function(k){var l=k.target;if(l&&(l=bc(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Zb(l,"value")){var m;(m=l.form?l.form.tagName?l.form:D.getElementById(l.form):bc(l,["form"],100))&&g.store(m,l)}},!1);Xb(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,p=b(l)&&!m,n=g.get(l),t=!0;if(d(l,function(){if(t){var q;
n&&(q=e.createElement("input"),q.type="hidden",q.name=n.name,q.value=n.value,l.appendChild(q));h.call(l);q&&l.removeChild(q)}},m,p,n))t=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var g=e.target;return g&&"_self"!==g&&"_parent"!==g&&"_top"!==g?!1:!0}function c(){var e=[],g=function(h){return sa(e,function(k){return k.form===
h})};return{store:function(h,k){var l=g(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=g(h);return k?k.button:null}}}function d(e,g,h,k,l){var m=Dg("fsl",h?"nv.mwt":"mwt",0),p;p=h?Dg("fsl","nv.ids",[]):Dg("fsl","ids",[]);if(!p.length)return!0;var n=zg(e,"gtm.formSubmit",p),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);n["gtm.elementUrl"]=t;l&&(n["gtm.formSubmitElement"]=l);if(k&&m){if(!Ni(n,Vf(g),m))return!1}else Ni(n,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.b=
"fsl";Z.__fsl.g=!0;Z.__fsl.priorityOverride=0})(function(e){var g=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(n){return Math.max(k,n)};Cg("fsl","mwt",m,0);h||Cg("fsl","nv.mwt",m,0)}var p=function(n){n.push(l);return n};Cg("fsl","ids",p,[]);h||Cg("fsl","nv.ids",p,[]);Ti("fsl")||(a(),Ui("fsl"));F(e.vtp_gtmOnSuccess)})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=jj(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();


Z.a.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.b="hid";Z.__hid.g=!0;Z.__hid.priorityOverride=0})(function(){return wg.Ab})}();

Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=D.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var p=k.getAttribute("data-gtmsrc");p&&(m.src=p,Sb(m,l));d.insertBefore(m,null);p||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var n=
[];k.firstChild;)n.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,n,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){F(h)}}}var c=function(d){if(D.body){var e=
d.vtp_gtmOnFailure,g=Yi(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.Kc,k=g.L;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(D.body,ac(h),k,e)()}else Hi(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();







Z.a.lcl=[],function(){function a(){var c=W("document"),d=0,e=function(g){var h=g.target;if(h&&3!==g.which&&(!g.timeStamp||g.timeStamp!==d)){d=g.timeStamp;h=bc(h,["a","area"],100);if(!h)return g.returnValue;var k=g.defaultPrevented||!1===g.returnValue,l=Dg("lcl",k?"nv.mwt":"mwt",0),m;m=k?Dg("lcl","nv.ids",[]):Dg("lcl","ids",[]);if(m.length){var p=zg(h,"gtm.linkClick",m);if(b(g,h,c)&&!k&&l&&h.href){var n=W((Wi(h,"target")||"_self").substring(1)),t=!0;if(Ni(p,Vf(function(){t&&n&&(n.location.href=Wi(h,
"href"))}),l))t=!1;else return g.preventDefault&&g.preventDefault(),g.returnValue=!1}else Ni(p,function(){},l||2E3);return!0}}};Xb(c,"click",e,!1);Xb(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var g=Wi(d,"href"),h=g.indexOf("#"),k=Wi(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=Ki(g),m=Ki(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=
0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,g=Number(c.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(g,m)};Cg("lcl","mwt",k,0);e||Cg("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};Cg("lcl","ids",l,[]);e||Cg("lcl","nv.ids",l,[]);Ti("lcl")||(a(),Ui("lcl"));F(c.vtp_gtmOnSuccess)})}();
Z.a.evl=["google"],function(){function a(g,h){this.element=g;this.uid=h}function b(){var g=Number(Mi("gtm.start"))||0;return(new Date).getTime()-g}function c(g,h,k,l){function m(){if(!yi(g.target)){h.has(e.Db)||h.set(e.Db,""+b());h.has(e.vc)||h.set(e.vc,""+b());var n=0;h.has(e.Gb)&&(n=Number(h.get(e.Gb)));n+=100;h.set(e.Gb,""+n);if(n>=k){var t=zg(g.target,"gtm.elementVisibility",[h.uid]),q=xi(g.target);t["gtm.visibleRatio"]=Math.round(1E3*q)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(h.get(e.vc));
t["gtm.visibleLastTime"]=Number(h.get(e.Db));Ni(t);l()}}}if(!h.has(e.$a)&&(0==k&&m(),!h.has(e.Aa))){var p=W("self").setInterval(m,100);h.set(e.$a,p)}}function d(g){g.has(e.$a)&&(W("self").clearInterval(Number(g.get(e.$a))),g.remove(e.$a))}var e={$a:"polling-id-",vc:"first-on-screen-",Db:"recent-on-screen-",Gb:"total-visible-time-",Aa:"has-fired-"};a.prototype.has=function(g){return!!this.element.getAttribute("data-gtm-vis-"+g+this.uid)};a.prototype.get=function(g){return this.element.getAttribute("data-gtm-vis-"+
g+this.uid)};a.prototype.set=function(g,h){this.element.setAttribute("data-gtm-vis-"+g+this.uid,h)};a.prototype.remove=function(g){this.element.removeAttribute("data-gtm-vis-"+g+this.uid)};(function(g){Z.__evl=g;Z.__evl.b="evl";Z.__evl.g=!0;Z.__evl.priorityOverride=0})(function(g){function h(){var y=!1,x=null;if("CSS"===l){try{x=Df(m)}catch(G){}y=!!x&&v.length!=x.length}else if("ID"===l){var z=D.getElementById(m);z&&(x=[z],y=1!=v.length||v[0]!==z)}x||(x=[],y=0<v.length);if(y){for(var A=0;A<v.length;A++){var B=
new a(v[A],q);d(B)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&Ei(w);0<v.length&&(w=Di(k,v,[t]))}}function k(y){var x=new a(y.target,q);y.intersectionRatio>=t?x.has(e.Aa)||c(y,x,n,"ONCE"===r?function(){for(var z=0;z<v.length;z++){var A=new a(v[z],q);A.set(e.Aa,"1");d(A)}Ei(w);if(p&&di)for(var B=0;B<di.length;B++)di[B]===h&&di.splice(B,1)}:function(){x.set(e.Aa,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===r&&x.has(e.Aa)&&(x.remove(e.Aa),x.remove(e.Gb)),x.remove(e.Db))}var l=g.vtp_selectorType,m;"ID"===
l?m=String(g.vtp_elementId):"CSS"===l&&(m=String(g.vtp_elementSelector));var p=!!g.vtp_useDomChangeListener,n=g.vtp_useOnScreenDuration&&Number(g.vtp_onScreenDuration)||0,t=(Number(g.vtp_onScreenRatio)||50)/100,q=g.vtp_uniqueTriggerId,r=g.vtp_firingFrequency,v=[],w=-1;h();p&&ei(h);F(g.vtp_gtmOnSuccess)})}();

var al={};al.macro=function(a){if(wg.xc.hasOwnProperty(a))return wg.xc[a]},al.onHtmlSuccess=wg.Xd(!0),al.onHtmlFailure=wg.Xd(!1);al.dataLayer=kd;al.callback=function(a){Gc.hasOwnProperty(a)&&na(Gc[a])&&Gc[a]();delete Gc[a]};al.Of=function(){xc[wc.m]=al;Ga(Hc,Z.a);xb=xb||wg;yb=Pd};
al.Gg=function(){rh.gtm_3pds=!0;xc=C.google_tag_manager=C.google_tag_manager||{};if(xc[wc.m]){var a=xc.zones;a&&a.unregisterChild(wc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)pb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)tb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)sb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],n={},t=0;t<p.length;t++)n[p[t][0]]=Array.prototype.slice.call(p[t],1);qb.push(n)}vb=Z;wb=aj;al.Of();$f();Sd=!1;Td=0;if("interactive"==D.readyState&&!D.createEventObject||"complete"==D.readyState)Vd();else{Xb(D,"DOMContentLoaded",Vd);Xb(D,"readystatechange",Vd);if(D.createEventObject&&D.documentElement.doScroll){var q=!0;try{q=!C.frameElement}catch(y){}q&&Wd()}Xb(C,"load",Vd)}Of=!1;"complete"===D.readyState?Qf():
Xb(C,"load",Qf);a:{if(!ad)break a;C.setInterval(bd,864E5);}
Dc=(new Date).getTime();}};(0,al.Gg)();

})()
