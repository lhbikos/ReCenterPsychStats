
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"220",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.location.href,b=\/([a-zA-Z0-9_\\.-]+)@([\\da-zA-Z\\.-]+)\\.([a-zA-Z\\.]{2,6})\/;b.test(a)\u0026\u0026(a=a.replace(\/([a-zA-Z0-9_\\.-]+)@([\\da-zA-Z\\.-]+)\\.([a-zA-Z\\.]{2,6})\/,\"\"));return a})();"]
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
      "vtp_javascript":["template","(function(a){a=[{name:\"EMAIL\",regex:\/[^\\\/]{4}@[^\\\/]{4}\/gi,group:\"\"},{name:\"EMAIL_ADDR\",regex:\/((email=)|(emailConfirm=)|(emailconfirm=)|(email.*=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"SEARCH\",regex:\/((full=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"NAME\",regex:\/((first_name=)|(last_name=)|(n=)|(i=)|(v=)|(l=)|(e=)|(middle_name=)|(username=)|(name=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"PROVIDER_ID\",regex:\/((provider_id=)|(partner_key=)|(userid=)|(user=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"PASSWORD\",regex:\/((password=)|(passwd=)|(passwordConfirm=)|(passwordconfirm=)|(pass.*=)|(pass=)|(pw=))[^\u0026\\\/\\?]+\/gi,\ngroup:\"$1\"}];var c=",["escape",["macro",3],8,16],",b=c;a.forEach(function(a){b=b.replace(a.regex,a.group+\"[REMOVED]\")});return b})();"]
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
      "convert_case_to":1,
      "vtp_component":"QUERY",
      "vtp_queryKey":"pq-origsite",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",50],
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
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
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
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",54],8,16],";return 0\u003C$(a).closest(\".checkbox\").closest(\"#search-filters\").length\u0026\u0026$(a).is(\"input\")?!0:!1}catch(b){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",54],8,16],";if(0\u003C$(a).closest(\".checkbox\").closest(\"#search-filters\").length)return $(a).closest(\".checkbox\").prevAll(\"h3:first\").text().trim()}catch(b){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",54],8,16],";if(0\u003C$(a).closest(\".checkbox\").closest(\"#search-filters\").length)return $(a).closest(\".checkbox\").find(\"label\").text().trim()}catch(b){}})();"]
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
      "vtp_elementSelector":["macro",52],
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"class",
      "vtp_attributeName":"modal-open",
      "vtp_selectorType":"CSS"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b=ga.getAll(),c;var a=0;for(c=b.length;a\u003Cc;a+=1)if(b[a].get(\"trackingId\")===",["escape",["macro",51],8,16],")return b[a].get(\"clientId\")}catch(d){}return\"false\"})();"]
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
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",1]],["map","fieldName","customTask","value",["macro",2]],["map","fieldName","cookieDomain","value","auto"],["map","fieldName","location","value",["macro",4]]],
      "vtp_metric":["list",["map","index","2","metric",["macro",5]],["map","index","3","metric",["macro",6]],["map","index","4","metric",["macro",7]],["map","index","5","metric",["macro",8]],["map","index","6","metric",["macro",9]],["map","index","7","metric",["macro",10]],["map","index","8","metric",["macro",11]],["map","index","9","metric",["macro",12]],["map","index","12","metric",["macro",13]],["map","index","10","metric",["macro",14]],["map","index","11","metric",["macro",15]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",16]],["map","index","3","dimension",["macro",17]],["map","index","5","dimension",["macro",18]],["map","index","6","dimension",["macro",19]],["map","index","7","dimension",["macro",20]],["map","index","8","dimension",["macro",21]],["map","index","9","dimension",["macro",22]],["map","index","10","dimension",["macro",23]],["map","index","11","dimension",["macro",8]],["map","index","12","dimension",["macro",9]],["map","index","13","dimension",["macro",10]],["map","index","14","dimension",["macro",11]],["map","index","15","dimension",["macro",5]],["map","index","16","dimension",["macro",6]],["map","index","17","dimension",["macro",7]],["map","index","18","dimension",["macro",24]],["map","index","19","dimension",["macro",25]],["map","index","20","dimension",["macro",26]],["map","index","21","dimension",["macro",27]],["map","index","22","dimension",["macro",28]],["map","index","23","dimension",["macro",29]],["map","index","24","dimension",["macro",30]],["map","index","25","dimension",["macro",31]],["map","index","26","dimension",["macro",32]],["map","index","27","dimension",["macro",33]],["map","index","28","dimension",["macro",34]],["map","index","29","dimension",["macro",35]],["map","index","1","dimension",["macro",36]],["map","index","30","dimension",["macro",14]],["map","index","31","dimension",["macro",37]],["map","index","32","dimension",["macro",38]],["map","index","33","dimension",["macro",39]],["map","index","34","dimension",["macro",40]],["map","index","35","dimension",["macro",41]],["map","index","36","dimension",["macro",42]],["map","index","37","dimension",["macro",43]],["map","index","64","dimension",["macro",44]],["map","index","70","dimension",["macro",45]],["map","index","71","dimension",["macro",46]],["map","index","72","dimension",["macro",47]],["map","index","73","dimension",["macro",48]],["map","index","67","dimension",["macro",49]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",51],
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
      "vtp_eventLabel":["macro",53],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_eventLabel":["template",["macro",58]," - ",["macro",59]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_eventLabel":["macro",62],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_eventLabel":["macro",66],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",51],
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
      "vtp_eventLabel":["macro",66],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_metric":["list",["map","index","10","metric",["macro",14]]],
      "vtp_eventAction":"SyndeticsLoad",
      "vtp_eventLabel":"Syndetics Loaded",
      "vtp_dimension":["list",["map","index","30","dimension",["macro",14]],["map","index","31","dimension",["macro",37]],["map","index","32","dimension",["macro",38]],["map","index","33","dimension",["macro",39]],["map","index","34","dimension",["macro",40]],["map","index","35","dimension",["macro",41]],["map","index","36","dimension",["macro",42]],["map","index","71","dimension",["macro",46]]],
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_metric":["list",["map","index","11","metric",["macro",15]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",51],
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
      "vtp_metric":["list",["map","index","11","metric",["macro",15]]],
      "vtp_eventAction":"DRMFree Full Book Download",
      "vtp_eventLabel":"Download EPUB",
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
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
      "vtp_eventLabel":["macro",47],
      "vtp_dimension":["list",["map","index","72","dimension",["macro",47]],["map","index","73","dimension",["macro",48]]],
      "vtp_trackingId":["macro",51],
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
      "vtp_trackingId":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":106
    },{
      "function":"__ua",
      "metadata":["map"],
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
      "vtp_eventLabel":"Epub Download Button",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":366
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_6",
      "tag_id":367
    },{
      "function":"__cl",
      "tag_id":368
    },{
      "function":"__cl",
      "tag_id":369
    },{
      "function":"__cl",
      "tag_id":370
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_21",
      "tag_id":371
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_22",
      "tag_id":372
    },{
      "function":"__cl",
      "tag_id":373
    },{
      "function":"__fsl",
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_26",
      "tag_id":374
    },{
      "function":"__fsl",
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_27",
      "tag_id":375
    },{
      "function":"__cl",
      "tag_id":376
    },{
      "function":"__cl",
      "tag_id":377
    },{
      "function":"__cl",
      "tag_id":378
    },{
      "function":"__cl",
      "tag_id":379
    },{
      "function":"__cl",
      "tag_id":380
    },{
      "function":"__cl",
      "tag_id":381
    },{
      "function":"__cl",
      "tag_id":382
    },{
      "function":"__cl",
      "tag_id":383
    },{
      "function":"__cl",
      "tag_id":384
    },{
      "function":"__cl",
      "tag_id":385
    },{
      "function":"__cl",
      "tag_id":386
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_67",
      "tag_id":387
    },{
      "function":"__cl",
      "tag_id":388
    },{
      "function":"__cl",
      "tag_id":389
    },{
      "function":"__cl",
      "tag_id":390
    },{
      "function":"__cl",
      "tag_id":391
    },{
      "function":"__fsl",
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_88",
      "tag_id":392
    },{
      "function":"__cl",
      "tag_id":393
    },{
      "function":"__cl",
      "tag_id":394
    },{
      "function":"__cl",
      "tag_id":395
    },{
      "function":"__cl",
      "tag_id":396
    },{
      "function":"__cl",
      "tag_id":397
    },{
      "function":"__cl",
      "tag_id":398
    },{
      "function":"__cl",
      "tag_id":399
    },{
      "function":"__cl",
      "tag_id":400
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_110",
      "tag_id":401
    },{
      "function":"__cl",
      "tag_id":402
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_116",
      "tag_id":403
    },{
      "function":"__cl",
      "tag_id":404
    },{
      "function":"__cl",
      "tag_id":405
    },{
      "function":"__cl",
      "tag_id":406
    },{
      "function":"__cl",
      "tag_id":407
    },{
      "function":"__cl",
      "tag_id":408
    },{
      "function":"__cl",
      "tag_id":409
    },{
      "function":"__cl",
      "tag_id":410
    },{
      "function":"__cl",
      "tag_id":411
    },{
      "function":"__cl",
      "tag_id":412
    },{
      "function":"__cl",
      "tag_id":413
    },{
      "function":"__cl",
      "tag_id":414
    },{
      "function":"__cl",
      "tag_id":415
    },{
      "function":"__cl",
      "tag_id":416
    },{
      "function":"__cl",
      "tag_id":417
    },{
      "function":"__cl",
      "tag_id":418
    },{
      "function":"__cl",
      "tag_id":419
    },{
      "function":"__cl",
      "tag_id":420
    },{
      "function":"__cl",
      "tag_id":421
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_166",
      "tag_id":422
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_170",
      "tag_id":423
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_172",
      "tag_id":424
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_173",
      "tag_id":425
    },{
      "function":"__cl",
      "tag_id":426
    },{
      "function":"__cl",
      "tag_id":427
    },{
      "function":"__cl",
      "tag_id":428
    },{
      "function":"__cl",
      "tag_id":429
    },{
      "function":"__cl",
      "tag_id":430
    },{
      "function":"__cl",
      "tag_id":431
    },{
      "function":"__cl",
      "tag_id":432
    },{
      "function":"__cl",
      "tag_id":433
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_195",
      "tag_id":434
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_196",
      "tag_id":435
    },{
      "function":"__cl",
      "tag_id":436
    },{
      "function":"__cl",
      "tag_id":437
    },{
      "function":"__cl",
      "tag_id":438
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"306000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"2125197_209",
      "tag_id":439
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_216",
      "tag_id":440
    },{
      "function":"__cl",
      "tag_id":441
    },{
      "function":"__cl",
      "tag_id":442
    },{
      "function":"__cl",
      "tag_id":443
    },{
      "function":"__cl",
      "tag_id":444
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_227",
      "tag_id":445
    },{
      "function":"__cl",
      "tag_id":446
    },{
      "function":"__cl",
      "tag_id":447
    },{
      "function":"__cl",
      "tag_id":448
    },{
      "function":"__cl",
      "tag_id":449
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_235",
      "tag_id":450
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_236",
      "tag_id":451
    },{
      "function":"__cl",
      "tag_id":452
    },{
      "function":"__cl",
      "tag_id":453
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_253",
      "tag_id":454
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_254",
      "tag_id":455
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_255",
      "tag_id":456
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_256",
      "tag_id":457
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_257",
      "tag_id":458
    },{
      "function":"__cl",
      "tag_id":459
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_259",
      "tag_id":460
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_260",
      "tag_id":461
    },{
      "function":"__cl",
      "tag_id":462
    },{
      "function":"__cl",
      "tag_id":463
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_263",
      "tag_id":464
    },{
      "function":"__cl",
      "tag_id":465
    },{
      "function":"__cl",
      "tag_id":466
    },{
      "function":"__cl",
      "tag_id":467
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"display",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2125197_289",
      "tag_id":468
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_307",
      "tag_id":469
    },{
      "function":"__cl",
      "tag_id":470
    },{
      "function":"__cl",
      "tag_id":471
    },{
      "function":"__cl",
      "tag_id":472
    },{
      "function":"__cl",
      "tag_id":473
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_315",
      "tag_id":474
    },{
      "function":"__cl",
      "tag_id":475
    },{
      "function":"__cl",
      "tag_id":476
    },{
      "function":"__cl",
      "tag_id":477
    },{
      "function":"__cl",
      "tag_id":478
    },{
      "function":"__cl",
      "tag_id":479
    },{
      "function":"__cl",
      "tag_id":480
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_329",
      "tag_id":481
    },{
      "function":"__cl",
      "tag_id":482
    },{
      "function":"__cl",
      "tag_id":483
    },{
      "function":"__cl",
      "tag_id":484
    },{
      "function":"__cl",
      "tag_id":485
    },{
      "function":"__cl",
      "tag_id":486
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_350",
      "tag_id":487
    },{
      "function":"__cl",
      "tag_id":488
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
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar LCSubjectHeadingArray_Dim=void 0==",["escape",["macro",34],8,16],"?\"\":",["escape",["macro",34],8,16],";if(\"\"!=LCSubjectHeadingArray_Dim)for(var i=0;i\u003CLCSubjectHeadingArray_Dim.length;i++)dataLayer.push({eventCat:\"Custom Dimension Event\",eventAct:\"Subject Headings\",eventLbl:LCSubjectHeadingArray_Dim[i],eventVal:0,nonInteraction:1,LCSubjectHeadingArray_Hit:LCSubjectHeadingArray_Dim[i],LCSubjectHeading_MET:1,event:\"eventtracker\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":86
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_css",
      "arg0":["macro",52],
      "arg1":"#toolBarLayoutRegion button"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_css",
      "arg0":["macro",54],
      "arg1":"#nav-bar-links \u003E ul \u003E li \u003E a"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"search.action"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_195($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"availableOnlineReadId"
    },{
      "function":"_cn",
      "arg0":["macro",61],
      "arg1":"detail.action"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"ga_availability_read_online_link"
    },{
      "function":"_re",
      "arg0":["macro",60],
      "arg1":"tool_download.*"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_22($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"ga_detail_bt_download"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_254($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",60],
      "arg1":"login_button"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"continueButton"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_27($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"downloadBookButton"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_6($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",61],
      "arg1":"reader.action"
    },{
      "function":"_cn",
      "arg0":["macro",61],
      "arg1":"search.action"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_216($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"ga_download_step3_final_download"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_260($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",60],
      "arg1":"wizardLauncher.*"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_21($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"ga_availability_download_link"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_259($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"toolChapterDownload"
    },{
      "function":"_re",
      "arg0":["macro",60],
      "arg1":"printOpenPDF"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"#description-tab"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_67($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"addtoshelftxt"
    },{
      "function":"_re",
      "arg0":["macro",60],
      "arg1":"tool_addbookshelf.*"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"icon-bookshelf-add"
    },{
      "function":"_css",
      "arg0":["macro",54],
      "arg1":"button[id*=\"tool_addbookshelf\"] \u003E span"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"ga_detail_bt_add_bsk"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_255($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"add_to_my_folder"
    },{
      "function":"_css",
      "arg0":["macro",54],
      "arg1":"div#search-return a"
    },{
      "function":"_cn",
      "arg0":["macro",63],
      "arg1":"join-form"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_88($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",54],
      "arg1":"#share_link"
    },{
      "function":"_css",
      "arg0":["macro",54],
      "arg1":"button#share_link \u003E span.button-label"
    },{
      "function":"_css",
      "arg0":["macro",54],
      "arg1":"button#share_link \u003E span.icon-link.icon-in-button"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"ga_detail_bt_share_link"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_256($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"citebooktxt"
    },{
      "function":"_css",
      "arg0":["macro",54],
      "arg1":"#citeModalBtn"
    },{
      "function":"_css",
      "arg0":["macro",54],
      "arg1":"#citeModalBtn \u003E span.button-label"
    },{
      "function":"_css",
      "arg0":["macro",54],
      "arg1":"#citeModalBtn \u003E span.icon-book-cite.icon-in-button"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"ga_detail_bt_cite"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_257($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",54],
      "arg1":"#citationRefWorks"
    },{
      "function":"_css",
      "arg0":["macro",54],
      "arg1":"#citationEndNoteCitavi"
    },{
      "function":"_css",
      "arg0":["macro",54],
      "arg1":"#readerReadBtnId \u003E span.button-label"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"readerReadBtnId"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_110($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",54],
      "arg1":"#readerReadBtnId \u003E icon-book-open.icon-in-button"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"ga_detail_bt_readonline"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_253($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"#toc-tab"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_116($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"toolDownload"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"toolCopy"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"toolLink"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"icon-link"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"toolAddToBookshelf"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"toolCite"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"icon-book-cite"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"toolHighlight"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"noteTextSave"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"toolBookmark"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"icon-page-zoom-out"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"icon-page-zoom-in"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"tool-fitToWidth"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"tool-fitToHeight"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"tool-pager-next"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"tool-pager-prev"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"bookDetails"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_166($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"bookToc"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_170($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"bookNotes"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_172($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"bookSearch"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_173($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",54],
      "arg1":"#bookDetailDownload \u003E span.button-label"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"ga_dlbookresults"
    },{
      "function":"_re",
      "arg0":["macro",60],
      "arg1":"tool_readonline.*"
    },{
      "function":"_re",
      "arg0":["macro",60],
      "arg1":"tool_details.*"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"bookshelf.action"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_196($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",54],
      "arg1":"button[id*=\"tool_chapterdownload\"] \u003E span"
    },{
      "function":"_re",
      "arg0":["macro",60],
      "arg1":"tool_chapterdownload.*"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"chaptdltxt"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"icon-chapter-download"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"[id*=\"tool_chapterdownload\"]"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"toolPrint"
    },{
      "function":"_cn",
      "arg0":["macro",64],
      "arg1":"fiveMinutesReader"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"fiveMinutesReader"
    },{
      "function":"_cn",
      "arg0":["macro",65],
      "arg1":"modalDone"
    },{
      "function":"_cn",
      "arg0":["macro",65],
      "arg1":"modalCancel"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"chapterOpenPDF"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"ga_chapter_pdf_download_ready"
    },{
      "function":"_cn",
      "arg0":["macro",65],
      "arg1":"bookDetailDownload"
    },{
      "function":"_css",
      "arg0":["macro",54],
      "arg1":"#bookDetailDownload \u003E span.icon-download"
    },{
      "function":"_re",
      "arg0":["macro",65],
      "arg1":"searchWithInBook*"
    },{
      "function":"_cn",
      "arg0":["macro",65],
      "arg1":"searchWithInBookSubmit"
    },{
      "function":"_cn",
      "arg0":["macro",64],
      "arg1":"e_enterKeyPressed"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_enterKeyPressed"
    },{
      "function":"_cn",
      "arg0":["macro",64],
      "arg1":"e_printError"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_printError"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"ga_toc_download_pdf_exceeds_limits"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"ga_toc_read_online_button"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_263($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"ga_toc_chapter_title_link"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_307($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",54],
      "arg1":".ga_signin_step1_bt_guest"
    },{
      "function":"_css",
      "arg0":["macro",54],
      "arg1":"#ebc-guest-start-over"
    },{
      "function":"_css",
      "arg0":["macro",54],
      "arg1":".ga_signin_step3_bt_cnt_guest"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"syndeticsLoad"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"SyndeticsClickthrough"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"SyndeticsInteraction"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"pdfFullDownloadButton"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"epubFullDownloadButton"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"ga_toc_download_pdf"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_315($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",52],
      "arg1":"ga_search_bsk_button"
    },{
      "function":"_cn",
      "arg0":["macro",65],
      "arg1":"bookDetailBookShelf"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"ga_detail_bt_request"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_329($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"toolNote"
    },{
      "function":"_cn",
      "arg0":["macro",64],
      "arg1":"e_gotopageenterKeyPressed"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"e_gotopageenterKeyPressed"
    },{
      "function":"_re",
      "arg0":["macro",65],
      "arg1":"searchWithInBookToc"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"ga_epub_reader_toolbar_next_page_btn"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"ga_epub_reader_toolbar_prev_page_btn"
    },{
      "function":"_re",
      "arg0":["macro",47],
      "arg1":"pdf|epub",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",65],
      "arg1":"readBrowseId"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"(^$|((^|,)2125197_350($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",52],
      "arg1":"ga_reader_toolbar_book_download_btn"
    },{
      "function":"_cn",
      "arg0":["macro",60],
      "arg1":"mjlogin_form"
    },{
      "function":"_cn",
      "arg0":["macro",63],
      "arg1":"form-device-type"
    },{
      "function":"_cn",
      "arg0":["macro",61],
      "arg1":"\/reader.action"
    }],
  "rules":[
    [["if",0],["add",0,206,82,83,84,85,86,87,88,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203]],
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
    [["if",2,144],["add",81]],
    [["if",0,145],["add",89]],
    [["if",0,146],["add",90]],
    [["if",0,147],["add",154,204,205]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={Lf:!0},fa={};try{fa.__proto__=ea;da=fa.Lf;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=ca,ia=this||self,ja=/^[\w+/_-]+[=]{0,2}$/,ka=null;var ma=function(){},na=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},oa=function(a){return"number"==typeof a&&!isNaN(a)},pa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},qa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},sa=function(a,b){if(a&&pa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},va=function(a,b){if(!oa(a)||
!oa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},xa=function(a,b){for(var c=new wa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ya=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Aa=function(a){return Math.round(Number(a))||0},Ca=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Da=function(a){var b=[];if(pa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ea=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Fa=function(){return(new Date).getTime()},wa=function(){this.prefix="gtm.";this.values={}};wa.prototype.set=function(a,b){this.values[this.prefix+a]=b};wa.prototype.get=function(a){return this.values[this.prefix+a]};
var Ha=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ia=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ja=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ka=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},La=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ma=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Oa=function(a){var b=
[];ya(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Pa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Qa=function(a){if(null==a)return String(a);var b=Pa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Sa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ta=function(a){if(!a||"object"!=Qa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Sa(a,"constructor")&&!Sa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Sa(a,b)},n=function(a,b){var c=b||("array"==Qa(a)?[]:{}),d;for(d in a)if(Sa(a,d)){var e=a[d];"array"==Qa(e)?("array"!=Qa(c[d])&&(c[d]=[]),c[d]=n(e,c[d])):Ta(e)?(Ta(c[d])||(c[d]={}),c[d]=n(e,c[d])):c[d]=e}return c};
var Ua=[],Va={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Wa=function(a){return Va[a]},Ya=/[\x00\x22\x26\x27\x3c\x3e]/g;var bb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,cb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},db=function(a){return cb[a]};
Ua[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(bb,db)+"'"}};var lb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,mb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},ob=function(a){return mb[a]};Ua[16]=function(a){return a};var qb;
var rb=[],sb=[],tb=[],ub=[],vb=[],wb={},xb,yb,zb,Ab=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Bb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=wb[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):qb(c,e,b)},Db=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Cb(a[e],b,c));
return d},Fb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=wb[b];return c?c.priorityOverride||0:0},Cb=function(a,b,c){if(pa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Cb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=rb[f];if(!h||b.Zc(h))return;c[f]=!0;try{var k=Db(h,b,c);k.vtp_gtmEventId=b.id;d=Bb(k,b);zb&&(d=zb.jg(d,k))}catch(y){b.Fe&&b.Fe(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Cb(a[l],b,c)]=Cb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var r=Cb(a[p],b,c);yb&&(m=m||r===yb.Kb);d.push(r)}return yb&&m?yb.mg(d):d.join("");case "escape":d=Cb(a[1],b,c);if(yb&&pa(a[1])&&"macro"===a[1][0]&&yb.Kg(a))return yb.ah(d);d=String(d);for(var t=2;t<a.length;t++)Ua[a[t]]&&(d=Ua[a[t]](d));return d;case "tag":var q=a[1];if(!ub[q])throw Error("Unable to resolve tag reference "+q+".");return d={se:a[2],
index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var w=Gb(u,b,c),v=!!a[4];return v||2!==w?v!==(1===w):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Gb=function(a,b,c){try{return xb(Db(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Hb=function(){var a=function(b){return{toString:function(){return b}}};return{Cd:a("convert_case_to"),Dd:a("convert_false_to"),Ed:a("convert_null_to"),Fd:a("convert_true_to"),Gd:a("convert_undefined_to"),Gh:a("debug_mode_metadata"),wa:a("function"),jf:a("instance_name"),pf:a("live_only"),rf:a("malware_disabled"),sf:a("metadata"),Hh:a("original_vendor_template_id"),wf:a("once_per_event"),Md:a("once_per_load"),Ud:a("setup_tags"),Wd:a("tag_id"),Xd:a("teardown_tags")}}();var Ib=null,Lb=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Ib=Jb(a);for(var e=0;e<sb.length;e++){var f=sb[e],h=Kb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],p=0;p<ub.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},Kb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Ib(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Ib(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Jb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Gb(tb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var C={ab:"_ee",Lc:"_syn",Jh:"_uei",Ac:"event_callback",Jb:"event_timeout",I:"gtag.config",fa:"allow_ad_personalization_signals",Bc:"restricted_data_processing",Za:"allow_google_signals",ia:"cookie_expires",Ib:"cookie_update",$a:"session_duration",ka:"user_properties",va:"transport_url",N:"ads_data_redaction"};C.Ce=[C.fa,C.Za,C.Ib];C.Ge=[C.ia,C.Jb,C.$a];var E=window,F=document,fc=navigator,gc=F.currentScript&&F.currentScript.src,hc=function(a,b){var c=E[a];E[a]=void 0===c?b:c;return E[a]},ic=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},jc=function(a,b,c){var d=F.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;ic(d,b);c&&(d.onerror=c);var e;if(null===ka)b:{var f=ia.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ja.test(k)){ka=k;break b}}ka=""}e=ka;e&&d.setAttribute("nonce",e);var l=F.getElementsByTagName("script")[0]||F.body||F.head;l.parentNode.insertBefore(d,l);return d},kc=function(){if(gc){var a=gc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},lc=function(a,b){var c=F.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=F.body&&F.body.lastChild||
F.body||F.head;d.parentNode.insertBefore(c,d);ic(c,b);void 0!==a&&(c.src=a);return c},mc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},nc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},oc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){E.setTimeout(a,0)},pc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},qc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},rc=function(a){var b=F.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},sc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},tc=function(a){fc.sendBeacon&&fc.sendBeacon(a)||mc(a)},uc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var vc={},I=function(a,b){vc[a]=vc[a]||[];vc[a][b]=!0},wc=function(a){for(var b=[],c=vc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var xc=[];function yc(){var a=hc("google_tag_data",{});a.ics||(a.ics={entries:{},set:zc,update:Ac,addListener:Bc,notifyListeners:Dc,active:!1});return a.ics}
function zc(a,b,c,d,e,f){var h=yc();h.active=!0;if(void 0!=b){var k=h.entries,l=k[a]||{},m=l.region,p=c&&g(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(p===e||(p===d?m!==e:!p&&!m)){var r=!!(f&&0<f&&void 0===l.update),t={region:p,initial:"granted"===b,update:l.update,quiet:r};k[a]=t;r&&E.setTimeout(function(){k[a]===t&&t.quiet&&(t.quiet=!1,Ec(a),Dc(),I("TAGGING",2))},f)}}}
function Ac(a,b){var c=yc();c.active=!0;if(void 0!=b){var d=Fc(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var h=Fc(a);f.quiet?(f.quiet=!1,Ec(a)):h!==d&&Ec(a)}}function Bc(a,b){xc.push({me:a,wg:b})}function Ec(a){for(var b=0;b<xc.length;++b){var c=xc[b];pa(c.me)&&-1!==c.me.indexOf(a)&&(c.Ne=!0)}}function Dc(){for(var a=0;a<xc.length;++a){var b=xc[a];if(b.Ne){b.Ne=!1;try{b.wg.call()}catch(c){}}}}
var Fc=function(a){var b=yc().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},Gc=function(a){return!(yc().entries[a]||{}).quiet},Hc=function(){return yc().active},Ic=function(a,b){yc().addListener(a,b)},Jc=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Gc(b[e]))return!0;return!1}if(c()){var d=!1;Ic(b,function(){d||c()||(d=!0,a())})}else a()},Kc=function(a,b){if(!1===Fc(b)){var c=!1;Ic([b],function(){!c&&Fc(b)&&(a(),c=!0)})}};var Lc=[C.o,C.H],Mc=function(a){var b=a[C.nh];b&&I("GTM",40);var c=a[C.th];c&&I("GTM",41);for(var d=pa(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<Lc.length;f++){var h=Lc[f],k=a[Lc[f]],l=d[e];yc().set(h,k,l,"US","US-WA",c)}},Nc=function(a){for(var b=0;b<Lc.length;b++){var c=Lc[b],d=a[Lc[b]];yc().update(c,d)}yc().notifyListeners()},Oc=function(a){var b=Fc(a);return void 0!=b?b:!0},Pc=function(){for(var a=[],b=0;b<Lc.length;b++){var c=Fc(Lc[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},Qc=function(a){Kc(a,C.o)},Rc=function(a,b){Jc(a,b)};var Tc=function(a){return Sc?F.querySelectorAll(a):null},Uc=function(a,b){if(!Sc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!F.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Vc=!1;if(F.querySelectorAll)try{var Wc=F.querySelectorAll(":root");Wc&&1==Wc.length&&Wc[0]==F.documentElement&&(Vc=!0)}catch(a){}var Sc=Vc;var jd={},kd=null,ld=Math.random();jd.s="GTM-MWPR6C";jd.Ob="640";jd.Ld="";var md={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},od="www.googletagmanager.com/gtm.js";
var pd=od,qd=null,rd=null,sd=null,td="//www.googletagmanager.com/a?id="+jd.s+"&cv=220",ud={},vd={},wd=function(){var a=kd.sequence||0;kd.sequence=a+1;return a};
var xd=function(){return"&tc="+ub.filter(function(a){return a}).length},Ad=function(){yd||(yd=E.setTimeout(zd,500))},zd=function(){yd&&(E.clearTimeout(yd),yd=void 0);void 0===Bd||Cd[Bd]&&!Dd&&!Ed||(Fd[Bd]||Gd.Mg()||0>=Hd--?(I("GTM",1),Fd[Bd]=!0):(Gd.ih(),mc(Id()),Cd[Bd]=!0,Jd=Kd=Ed=Dd=""))},Id=function(){var a=Bd;if(void 0===a)return"";var b=wc("GTM"),c=wc("TAGGING");return[Ld,Cd[a]?"":"&es=1",Md[a],b?"&u="+b:"",c?"&ut="+c:"",xd(),Dd,Ed,Kd,Jd,"&z=0"].join("")},Nd=function(){return[td,"&v=3&t=t","&pid="+
va(),"&rv="+jd.Ob].join("")},Od="0.005000">Math.random(),Ld=Nd(),Pd=function(){Ld=Nd()},Cd={},Dd="",Ed="",Jd="",Kd="",Bd=void 0,Md={},Fd={},yd=void 0,Gd=function(a,b){var c=0,d=0;return{Mg:function(){if(c<a)return!1;Fa()-d>=b&&(c=0);return c>=a},ih:function(){Fa()-d>=b&&(c=0);c++;d=Fa()}}}(2,1E3),Hd=1E3,Qd=function(a,b){if(Od&&!Fd[a]&&Bd!==a){zd();Bd=a;Jd=Dd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Md[a]="&e="+c+"&eid="+a;Ad()}},Rd=function(a,b,c){if(Od&&!Fd[a]&&
b){a!==Bd&&(zd(),Bd=a);var d,e=String(b[Hb.wa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Dd=Dd?Dd+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(wb[h]?"1":"2")+d;Jd=Jd?Jd+"."+k:"&ti="+k;Ad();2022<=Id().length&&zd()}},Sd=function(a,b,c){if(Od&&!Fd[a]){a!==Bd&&(zd(),Bd=a);var d=c+b;Ed=Ed?Ed+
"."+d:"&epr="+d;Ad();2022<=Id().length&&zd()}};var Td={},Ud=new wa,Vd={},Wd={},Zd={name:"dataLayer",set:function(a,b){n(Ma(a,b),Vd);Xd()},get:function(a){return Yd(a,2)},reset:function(){Ud=new wa;Vd={};Xd()}},Yd=function(a,b){if(2!=b){var c=Ud.get(a);if(Od){var d=$d(a);c!==d&&I("GTM",5)}return c}return $d(a)},$d=function(a){var b=a.split("."),c=!1,d=void 0;return c?d:ae(b)},ae=function(a){for(var b=Vd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var be=function(a,b){Wd.hasOwnProperty(a)||(Ud.set(a,b),n(Ma(a,b),Vd),Xd())},Xd=function(a){ya(Wd,function(b,c){Ud.set(b,c);n(Ma(b,void 0),Vd);n(Ma(b,c),Vd);a&&delete Wd[b]})},ce=function(a,b,c){Td[a]=Td[a]||{};var d=1!==c?$d(b):Ud.get(b);"array"===Qa(d)||"object"===Qa(d)?Td[a][b]=n(d):Td[a][b]=d},de=function(a,b){if(Td[a])return Td[a][b]},ee=function(a,b){Td[a]&&delete Td[a][b]};var he=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var ie=/:[0-9]+$/,je=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},me=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ke(a.protocol)||ke(E.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:E.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||E.location.hostname).replace(ie,"").toLowerCase());return le(a,b,c,d,e)},le=function(a,b,c,d,e){var f,h=ke(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=ne(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(ie,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||I("TAGGING",1);
f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=qa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=je(f,e,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},ke=function(a){return a?a.replace(":","").toLowerCase():""},ne=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");
b=0>c?a.href:a.href.substr(0,c)}return b},oe=function(a){var b=F.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||I("TAGGING",1),c="/"+c);var d=b.hostname.replace(ie,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},pe=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=p}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),
e=oe(a),f=a.split(/[?#]/)[0],h=e.search,k=e.hash;"?"===h[0]&&(h=h.substring(1));"#"===k[0]&&(k=k.substring(1));h=c(h);k=c(k);""!==h&&(h="?"+h);""!==k&&(k="#"+k);var l=""+f+h+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function qe(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var re={},se=function(a){return void 0==re[a]?!1:re[a]};var ue=function(a,b,c,d){return te(d)?qe(a,String(b||document.cookie),c):[]},xe=function(a,b,c,d,e){if(te(e)){var f=ve(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=we(f,function(h){return h.Tb},b);if(1===f.length)return f[0].id;f=we(f,function(h){return h.yb},c);return f[0]?f[0].id:void 0}}};function ye(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=ue(b,f,!1,d).indexOf(c)}
var Ce=function(a,b,c){function d(q,u,w){if(null==w)return delete h[u],q;h[u]=w;return q+"; "+u+"="+w}function e(q,u){if(null==u)return delete h[u],q;h[u]=!0;return q+"; "+u}if(!te(c.Ca))return 2;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=ze(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.Th);f=d(f,"samesite",
c.Yh);c.Zh&&(f=e(f,"secure"));var l=c.domain;if("auto"===l){for(var m=Ae(),p=0;p<m.length;++p){var r="none"!==m[p]?m[p]:void 0,t=d(f,"domain",r);t=e(t,c.flags);if(!Be(r,c.path)&&ye(t,a,b,c.Ca))return 0}return 1}l&&"none"!==l&&(f=d(f,"domain",l));f=e(f,c.flags);return Be(l,c.path)?1:ye(f,a,b,c.Ca)?0:1},De=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Ce(a,b,c)};
function we(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function ve(a,b,c){for(var d=[],e=ue(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),Tb:1*l[0]||1,yb:1*l[1]||1}))}}return d}
var ze=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Ee=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Fe=/(^|\.)doubleclick\.net$/i,Be=function(a,b){return Fe.test(document.location.hostname)||"/"===b&&Ee.test(a)},Ae=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Fe.test(e)||Ee.test(e)||a.push("none");
return a},te=function(a){if(!se("gtag_cs_api")||!a||!Hc())return!0;if(!Gc(a))return!1;var b=Fc(a);return null==b?!0:!!b};var Ge=function(){for(var a=fc.userAgent+(F.cookie||"")+(F.referrer||""),b=a.length,c=E.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Fa()/1E3)].join(".")},Je=function(a,b,c,d,e){var f=He(b);return xe(a,f,Ie(c),d,e)},Ke=function(a,b,c,d){var e=""+He(c),f=Ie(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},He=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Ie=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Le(a,b,c){var d,e=a.wb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Fa())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Me=["1"],Ne={},Re=function(a){var b=Oe(a.prefix);Ne[b]||Pe(b,a.path,a.domain)||(Qe(b,Ge(),a),Pe(b,a.path,a.domain))};function Qe(a,b,c){var d=Ke(b,"1",c.domain,c.path),e=Le(c);e.Ca="ad_storage";De(a,d,e)}function Pe(a,b,c){var d=Je(a,b,c,Me,"ad_storage");d&&(Ne[a]=d);return d}function Oe(a){return(a||"_gcl")+"_au"};function Se(){for(var a=Te,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Ue(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Te,Ve;function We(a){Te=Te||Ue();Ve=Ve||Se();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,p=(h&15)<<2|k>>6,r=k&63;e||(r=64,d||(p=64));b.push(Te[l],Te[m],Te[p],Te[r])}return b.join("")}
function Xe(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=Ve[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Te=Te||Ue();Ve=Ve||Se();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Ye;var bf=function(){var a=Ze,b=$e,c=af(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){nc(F,"mousedown",d);nc(F,"keyup",d);nc(F,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},cf=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};af().decorators.push(f)},df=function(a,b,c){for(var d=af().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a,p=!!h.sameHost;if(l&&(p||m!==F.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[r])||p&&0<=l[r].indexOf(m)){k=!0;break a}k=!1}if(k){var t=h.placement;void 0==t&&(t=h.fragment?2:1);t===b&&Ja(e,h.callback())}}return e},af=function(){var a=hc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var ef=/(.*?)\*(.*?)\*(.*)/,ff=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,gf=/^(?:www\.|m\.|amp\.)+/,hf=/([^?#]+)(\?[^#]*)?(#.*)?/;function jf(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var lf=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(We(String(d))))}var e=b.join("*");return["1",kf(e),e].join("*")},kf=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ye)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Ye=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Ye[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},nf=function(){return function(a){var b=oe(E.location.href),c=b.search.replace("?",""),d=je(c,"_gl",!0)||"";a.query=mf(d)||{};var e=me(b,"fragment").match(jf("_gl"));a.fragment=mf(e&&e[3]||"")||{}}},of=function(a){var b=nf(),c=af();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Ja(d,e.query),a&&Ja(d,e.fragment));return d},mf=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=ef.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],p=0;p<b;++p)if(m===kf(k,p)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=Xe(t[q+1]);return r}}}}catch(u){}};
function pf(a,b,c,d){function e(p){var r=p,t=jf(a).exec(r),q=r;if(t){var u=t[2],w=t[4];q=t[1];w&&(q=q+u+w)}p=q;var v=p.charAt(p.length-1);p&&"&"!==v&&(p+="&");return p+m}d=void 0===d?!1:d;var f=hf.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function qf(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=df(b,1,c),e=df(b,2,c),f=df(b,3,c);if(Ka(d)){var h=lf(d);c?rf("_gl",h,a):sf("_gl",h,a,!1)}if(!c&&Ka(e)){var k=lf(e);sf("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){sf(m,p,r,void 0);break a}if("form"===r.tagName.toLowerCase()){rf(m,p,r);break a}}"string"==typeof r&&pf(m,p,r,void 0)}}
function sf(a,b,c,d){if(c.href){var e=pf(a,b,c.href,void 0===d?!1:d);he.test(e)&&(c.href=e)}}
function rf(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=F.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=pf(a,b,c.action);he.test(m)&&(c.action=m)}}}
var Ze=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||qf(e,e.hostname)}}catch(h){}},$e=function(a){try{if(a.action){var b=me(oe(a.action),"host");qf(a,b)}}catch(c){}},tf=function(a,b,c,d){bf();cf(a,b,"fragment"===c?2:1,!!d,!1)},uf=function(a,b){bf();cf(a,[le(E.location,"host",!0)],b,!0,!0)},vf=function(){var a=F.location.hostname,b=ff.exec(F.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(gf,""),l=e.replace(gf,""),m;if(!(m=k===l)){var p="."+l;m=k.substring(k.length-p.length,k.length)===p}return m},wf=function(a,b){return!1===a?!1:a||b||vf()};var xf=/^\w+$/,yf=/^[\w-]+$/,zf=/^~?[\w-]+$/,Af={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Bf=function(){if(!se("gtag_cs_api")||!Hc())return!0;var a=Fc("ad_storage");return null==a?!0:!!a},Cf=function(a,b){Gc("ad_storage")?Bf()?a():Kc(a,"ad_storage"):b?I("TAGGING",3):Jc(function(){Cf(a,!0)},["ad_storage"])},Ff=function(a){var b=[];if(!F.cookie)return b;var c=ue(a,F.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=Df(c[d]);e&&-1===qa(b,e)&&b.push(e)}return Ef(b)};
function Gf(a){return a&&"string"==typeof a&&a.match(xf)?a:"_gcl"}
var If=function(){var a=oe(E.location.href),b=me(a,"query",!1,void 0,"gclid"),c=me(a,"query",!1,void 0,"gclsrc"),d=me(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||je(e,"gclid",void 0);c=c||je(e,"gclsrc",void 0)}return Hf(b,c,d)},Hf=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(yf))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":se("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Kf=function(a){var b=If();Cf(function(){return Jf(b,a)})};
function Jf(a,b,c){function d(m,p){var r=Lf(m,e);r&&(De(r,p,f),h=!0)}b=b||{};var e=Gf(b.prefix);c=c||Fa();var f=Le(b,c,!0);f.Ca="ad_storage";var h=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.ci?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return h}
var Nf=function(a,b){var c=of(!0);Cf(function(){for(var d=Gf(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Af[f]){var h=Lf(f,d),k=c[h];if(k){var l=Math.min(Mf(k),Fa()),m;b:{for(var p=l,r=ue(h,F.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(Mf(r[t])>p){m=!0;break b}m=!1}if(!m){var q=Le(b,l,!0);q.Ca="ad_storage";De(h,k,q)}}}}Jf(Hf(c.gclid,c.gclsrc),b)})},Lf=function(a,b){var c=Af[a];if(void 0!==c)return b+c},Mf=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Df(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Of=function(a,b,c,d,e){if(pa(b)){var f=Gf(e),h=function(){for(var k={},l=0;l<a.length;++l){var m=Lf(a[l],f);if(m){var p=ue(m,F.cookie,void 0,"ad_storage");p.length&&(k[m]=p.sort()[p.length-1])}}return k};Cf(function(){tf(h,b,c,d)})}},Ef=function(a){return a.filter(function(b){return zf.test(b)})},Pf=function(a,b){for(var c=Gf(b.prefix),d={},e=0;e<a.length;e++)Af[a[e]]&&(d[a[e]]=Af[a[e]]);Cf(function(){ya(d,function(f,h){var k=ue(c+h,F.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=Mf(l),
p={};p[f]=[Df(l)];Jf(p,b,m)}})})};function Qf(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Rf=function(){function a(e,f,h){h&&(e[f]=h)}var b=["aw","dc"];if(Hc()){var c=If();if(Qf(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);uf(function(){return d},3);uf(function(){var e={};return e._up="1",e},1)}}},Sf=function(){var a;if(Bf()){for(var b=[],c=F.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({sd:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].sd]||(h[b[k].sd]=[]),h[b[k].sd].push({timestamp:l[1],yg:l[2]}))}a=h}else a={};return a};var Tf=/^\d+\.fls\.doubleclick\.net$/;function Uf(a,b){Gc(C.o)?Oc(C.o)?a():Qc(a):b?I("GTM",42):Rc(function(){Uf(a,!0)},[C.o])}function Vf(a){var b=oe(E.location.href),c=me(b,"host",!1);if(c&&c.match(Tf)){var d=me(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Wf(a,b,c){if("aw"==a||"dc"==a){var d=Vf("gcl"+a);if(d)return d.split(".")}var e=Gf(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Oc(C.o)&&c,h;h=If()[a]||[];if(0<h.length)return f?["0"]:h}var k=Lf(a,e);return k?Ff(k):[]}
var Xf=function(a){var b=Vf("gac");if(b)return!Oc(C.o)&&a?"0":decodeURIComponent(b);var c=Sf(),d=[];ya(c,function(e,f){for(var h=[],k=0;k<f.length;k++)h.push(f[k].yg);h=Ef(h);h.length&&d.push(e+":"+h.join(","))});return d.join(";")},Yf=function(a,b){var c=If().dc||[];Uf(function(){Re(b);var d=Ne[Oe(b.prefix)],e=!1;if(d&&0<c.length){var f=kd.joined_au=kd.joined_au||{},h=b.prefix||"_gcl";if(!f[h])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;tc(l);e=f[h]=
!0}}null==a&&(a=e);if(a&&d){var m=Oe(b.prefix),p=Ne[m];p&&Qe(m,p,b)}})};var Zf=/[A-Z]+/,$f=/\s/,ag=function(a){if(g(a)&&(a=Ea(a),!$f.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Zf.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],B:d}}}}},cg=function(a){for(var b={},c=0;c<a.length;++c){var d=ag(a[c]);d&&(b[d.id]=d)}bg(b);var e=[];ya(b,function(f,h){e.push(h)});return e};
function bg(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.B[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var dg=function(){var a=!1;return a};var fg=function(a,b,c,d){return(2===eg()||d||"http:"!=E.location.protocol?a:b)+c},eg=function(){var a=kc(),b;if(1===a)a:{var c=pd;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=F.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var tg=function(a){return Oc(C.o)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=pe(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var ug=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),vg={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},wg={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},xg="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var zg=function(a){var b=Yd("gtm.whitelist");b&&I("GTM",9);var c=b&&La(Da(b),vg),d=Yd("gtm.blacklist");d||(d=Yd("tagTypeBlacklist"))&&I("GTM",3);d?
I("GTM",8):d=[];yg()&&(d=Da(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=qa(Da(d),"google")&&I("GTM",2);var e=d&&La(Da(d),wg),f={};return function(h){var k=h&&h[Hb.wa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=vd[k]||[],m=a(k,l);if(b){var p;if(p=m)a:{if(0>qa(c,k))if(l&&0<l.length)for(var r=
0;r<l.length;r++){if(0>qa(c,l[r])){I("GTM",11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var t=!1;if(d){var q=0<=qa(e,k);if(q)t=q;else{var u=xa(e,l||[]);u&&I("GTM",10);t=u}}var w=!m||t;w||!(0<=qa(l,"sandboxedScripts"))||c&&-1!==qa(c,"sandboxedScripts")||(w=xa(e,xg));return f[k]=w}},yg=function(){return ug.test(E.location&&E.location.hostname)};var Ag={jg:function(a,b){b[Hb.Cd]&&"string"===typeof a&&(a=1==b[Hb.Cd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Hb.Ed)&&null===a&&(a=b[Hb.Ed]);b.hasOwnProperty(Hb.Gd)&&void 0===a&&(a=b[Hb.Gd]);b.hasOwnProperty(Hb.Fd)&&!0===a&&(a=b[Hb.Fd]);b.hasOwnProperty(Hb.Dd)&&!1===a&&(a=b[Hb.Dd]);return a}};var Cg={active:!0,isWhitelisted:function(){return!0}},Dg=function(a){var b=kd.zones;!b&&a&&(b=kd.zones=a());return b};var Eg=function(){};var Fg=!1,Gg=0,Hg=[];function Ig(a){if(!Fg){var b=F.createEventObject,c="complete"==F.readyState,d="interactive"==F.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Fg=!0;for(var e=0;e<Hg.length;e++)G(Hg[e])}Hg.push=function(){for(var f=0;f<arguments.length;f++)G(arguments[f]);return 0}}}function Jg(){if(!Fg&&140>Gg){Gg++;try{F.documentElement.doScroll("left"),Ig()}catch(a){E.setTimeout(Jg,50)}}}var Kg=function(a){Fg?a():Hg.push(a)};var Lg={},Mg={},Ng=function(a,b,c,d){if(!Mg[a]||md[b]||"__zone"===b)return-1;var e={};Ta(d)&&(e=n(d,e));e.id=c;e.status="timeout";return Mg[a].tags.push(e)-1},Og=function(a,b,c,d){if(Mg[a]){var e=Mg[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Pg(a){for(var b=Lg[a]||[],c=0;c<b.length;c++)b[c]();Lg[a]={push:function(d){d(jd.s,Mg[a])}}}
var Sg=function(a,b,c){Mg[a]={tags:[]};na(b)&&Qg(a,b);c&&E.setTimeout(function(){return Pg(a)},Number(c));return Rg(a)},Qg=function(a,b){Lg[a]=Lg[a]||[];Lg[a].push(Ia(function(){return G(function(){b(jd.s,Mg[a])})}))};function Rg(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ia(function(){b++;d&&b>=c&&Pg(a)})},Xf:function(){d=!0;b>=c&&Pg(a)}}};var Tg=function(){function a(d){return!oa(d)||0>d?0:d}if(!kd._li&&E.performance&&E.performance.timing){var b=E.performance.timing.navigationStart,c=oa(Zd.get("gtm.start"))?Zd.get("gtm.start"):0;kd._li={cst:a(c-b),cbt:a(rd-b)}}};var Xg={},Yg=function(){return E.GoogleAnalyticsObject&&E[E.GoogleAnalyticsObject]},Zg=!1;
var $g=function(a){E.GoogleAnalyticsObject||(E.GoogleAnalyticsObject=a||"ga");var b=E.GoogleAnalyticsObject;if(E[b])E.hasOwnProperty(b)||I("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);E[b]=c}Tg();return E[b]},ah=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Yg();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ch=function(a){},bh=function(){return E.GoogleAnalyticsObject||"ga"};function ih(a,b,c,d){var e=ub[a],f=jh(a,b,c,d);if(!f)return null;var h=Cb(e[Hb.Ud],c,[]);if(h&&h.length){var k=h[0];f=ih(k.index,{D:f,C:1===k.se?b.terminate:f,terminate:b.terminate},c,d)}return f}
function jh(a,b,c,d){function e(){if(f[Hb.rf])k();else{var v=Db(f,c,[]),y=Ng(c.id,String(f[Hb.wa]),Number(f[Hb.Wd]),v[Hb.sf]),x=!1;v.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Fa()-B;Rd(c.id,ub[a],"5");Og(c.id,y,"success",z);h()}};v.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Fa()-B;Rd(c.id,ub[a],"6");Og(c.id,y,"failure",z);k()}};v.vtp_gtmTagId=f.tag_id;
v.vtp_gtmEventId=c.id;Rd(c.id,f,"1");var A=function(){var z=Fa()-B;Rd(c.id,f,"7");Og(c.id,y,"exception",z);x||(x=!0,k())};var B=Fa();try{Bb(v,c)}catch(z){A(z)}}}var f=ub[a],h=b.D,k=b.C,l=b.terminate;if(c.Zc(f))return null;var m=Cb(f[Hb.Xd],c,[]);if(m&&m.length){var p=m[0],r=ih(p.index,{D:h,C:k,terminate:l},c,d);if(!r)return null;h=r;k=2===p.se?l:r}if(f[Hb.Md]||f[Hb.wf]){var t=f[Hb.Md]?vb:c.rh,q=h,u=k;if(!t[a]){e=Ia(e);var w=kh(a,t,e);h=w.D;k=w.C}return function(){t[a](q,u)}}return e}
function kh(a,b,c){var d=[],e=[];b[a]=lh(d,e,c);return{D:function(){b[a]=mh;for(var f=0;f<d.length;f++)d[f]()},C:function(){b[a]=nh;for(var f=0;f<e.length;f++)e[f]()}}}function lh(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function mh(a){a()}function nh(a,b){b()};var qh=function(a,b){for(var c=[],d=0;d<ub.length;d++)if(a.xb[d]){var e=ub[d];var f=b.add();try{var h=ih(d,{D:f,C:f,terminate:f},a,d);h?c.push({Ve:d,Oe:Fb(e),ug:h}):(oh(d,a),f())}catch(l){f()}}b.Xf();c.sort(ph);for(var k=0;k<c.length;k++)c[k].ug();return 0<c.length};function ph(a,b){var c,d=b.Oe,e=a.Oe;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Ve,k=b.Ve;f=h>k?1:h<k?-1:0}return f}
function oh(a,b){if(!Od)return;var c=function(d){var e=b.Zc(ub[d])?"3":"4",f=Cb(ub[d][Hb.Ud],b,[]);f&&f.length&&c(f[0].index);Rd(b.id,ub[d],e);var h=Cb(ub[d][Hb.Xd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var rh=!1,sh=function(a,b,c,d,e){if("gtm.js"==b){if(rh)return!1;rh=!0}Qd(a,b);var f=Sg(a,d,e);ce(a,"event",1);ce(a,"ecommerce",1);ce(a,"gtm");var h={id:a,name:b,Zc:zg(c),xb:[],rh:[],Fe:function(){I("GTM",6)}};h.xb=Lb(h);var k=qh(h,f);"gtm.js"!==b&&"gtm.sync"!==b||ch(jd.s);if(!k)return k;for(var l=0;l<h.xb.length;l++)if(h.xb[l]){var m=ub[l];if(m&&!md[String(m[Hb.wa])])return!0}return!1};function uh(a,b){}function vh(a,b){return wh()?uh(a,b):void 0}
function wh(){var a=!1;return a};var xh=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.D=function(){};this.C=function(){};this.eventId=void 0},yh=function(a){var b=new xh;b.eventModel=a;return b},zh=function(a,b){a.targetConfig=b;return a},Ah=function(a,b){a.containerConfig=b;return a},Bh=function(a,b){a.h=b;return a},Ch=function(a,b){a.globalConfig=b;return a},Dh=function(a,b){a.D=b;return a},Eh=function(a,b){a.C=b;return a};
xh.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Fh=function(a){function b(e){ya(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];ya(c,function(e){d.push(e)});return d};var Gh;if(3===jd.Ob.length)Gh="g";else{var Hh="G";Gh=Hh}
var Ih={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Gh,OPT:"o"},Jh=function(a){var b=jd.s.split("-"),c=b[0].toUpperCase(),d=Ih[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===jd.Ob.length){var h="w";f="2"+h}else f="";return f+d+jd.Ob+e};function Kh(){var a=!1;a=Hc();return a}
function Lh(a,b,c){function d(r){var t;kd.reported_gclid||(kd.reported_gclid={});t=kd.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var u=[],w=function(B,z){z&&u.push(B+"="+encodeURIComponent(z))},v="https://www.google.com";if(Hc()){var y=Oc(C.o);w("gcs",Pc());r&&w("gcu","1");w("rnd",p);if((!f||h&&"aw.ds"!==h)&&Oc(C.o)){var x=Ff("_gcl_aw");w("gclaw",x.join("."))}w("url",String(E.location).split(/[?#]/)[0]);w("dclid",Mh(b,k));!y&&b&&(v="https://pagead2.googlesyndication.com")}
"1"===of(!1)._up&&w("gtm_up","1");w("gclid",Mh(b,f));w("gclsrc",h);w("gtm",Jh(!c));var A=v+"/pagead/landing?"+u.join("&");tc(A)}}var e=If(),f=e.gclid||"",h=e.gclsrc,k=e.dclid||"",l=!a&&(!f||h&&"aw.ds"!==h?!1:!0),m=Kh();if(l||m){var p=""+Ge();m?Rc(function(){d();Oc(C.o)||Qc(function(){return d(!0)})},[C.o]):d()}}
function Mh(a,b){var c=a&&!Oc(C.o);if(b&&c)return"0";return b}var Pi={},Qi=["G","GP"];Pi.Xe="";var Ri=Pi.Xe.split(",");function Si(){var a=kd;return a.gcq=a.gcq||new Ti}
var Ui=function(a,b,c){Si().register(a,b,c)},Vi=function(a,b,c,d){Si().push("event",[b,a],c,d)},Wi=function(a,b){Si().push("config",[a],b)},Xi={},Yi=function(a){return!0},Zi=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.h=!1},$i=function(a,b,c,d,e){this.type=a;this.m=b;this.ba=c||
"";this.h=d;this.i=e},Ti=function(){this.m={};this.i={};this.h=[]},aj=function(a,b){var c=ag(b);return a.m[c.containerId]=a.m[c.containerId]||new Zi},bj=function(a,b,c){if(b){var d=ag(b);if(d&&1===aj(a,b).status&&Yi(d.prefix)){aj(a,b).status=2;var e={};Od&&(e.timeoutId=E.setTimeout(function(){I("GTM",38);Ad()},3E3));a.push("require",[e],d.containerId);Xi[d.containerId]=Fa();if(dg()){}else{var h="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=E.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+h),l=vh(c,h)||k;jc(l)}}}},cj=function(a,b,c,d){if(d.ba){var e=aj(a,d.ba),
f=e.m;if(f){var h=n(c),k=n(e.targetConfig[d.ba]),l=n(e.containerConfig),m=n(e.i),p=n(a.i),r=Yd("gtm.uniqueEventId"),t=ag(d.ba).prefix,q=Eh(Dh(Ch(Bh(Ah(zh(yh(h),k),l),m),p),function(){Sd(r,t,"2");}),function(){Sd(r,t,"3");});try{Sd(r,t,"1");f(d.ba,b,d.m,q)}catch(u){
Sd(r,t,"4");}}}};
Ti.prototype.register=function(a,b,c){if(3!==aj(this,a).status){aj(this,a).m=b;aj(this,a).status=3;c&&(aj(this,a).i=c);var d=ag(a),e=Xi[d.containerId];if(void 0!==e){var f=kd[d.containerId].bootstrap,h=d.prefix.toUpperCase();kd[d.containerId]._spx&&(h=h.toLowerCase());var k=Yd("gtm.uniqueEventId"),l=h,m=Fa()-f;if(Od&&!Fd[k]){k!==Bd&&(zd(),Bd=k);var p=l+"."+Math.floor(f-e)+"."+Math.floor(m);Kd=Kd?Kd+","+p:"&cl="+p}delete Xi[d.containerId]}this.flush()}};
Ti.prototype.push=function(a,b,c,d){var e=Math.floor(Fa()/1E3);bj(this,c,b[0][C.va]||this.i[C.va]);this.h.push(new $i(a,e,c,b,d));d||this.flush()};
Ti.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==aj(this,c.ba).status&&!a)return;Od&&E.clearTimeout(c.h[0].timeoutId);break;case "set":ya(c.h[0],function(l,m){n(Ma(l,m),b.i)});break;case "config":var d=c.h[0],e=!!d[C.jc];delete d[C.jc];var f=aj(this,c.ba),h=ag(c.ba),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.ba]={});f.h&&e||cj(this,C.I,d,c);f.h=!0;delete d[C.ab];k?n(d,f.containerConfig):
n(d,f.targetConfig[c.ba]);break;case "event":cj(this,c.h[1],c.h[0],c)}this.h.shift()}};var dj=["HA","GF","GP","G"],ej="G".split(/,/);ej.push("DC");ej.push("UA");ej.push("AW");var fj=!1;
fj=!0;var gj=null,hj={},ij={},jj,kj=!1;function lj(a,b){var c={event:a};b&&(c.eventModel=n(b),b[C.Ac]&&(c.eventCallback=b[C.Ac]),b[C.Jb]&&(c.eventTimeout=b[C.Jb]));return c}
var qj={config:function(a){},event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ta(a[2])&&void 0!=a[2])return;c=a[2]}var d=lj(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return kj=!0,{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Ta(a[1])?
b=n(a[1]):3==a.length&&g(a[1])&&(b={},Ta(a[2])||pa(a[2])?b[a[1]]=n(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};var rj={policy:!0};var sj=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},uj=function(a){var b=tj(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var vj=!1,wj=[];function xj(){if(!vj){vj=!0;for(var a=0;a<wj.length;a++)G(wj[a])}}var yj=function(a){vj?G(a):wj.push(a)};var Qj=function(a){if(Pj(a))return a;this.h=a};Qj.prototype.Cg=function(){return this.h};var Pj=function(a){return!a||"object"!==Qa(a)||Ta(a)?!1:"getUntrustedUpdateValue"in a};Qj.prototype.getUntrustedUpdateValue=Qj.prototype.Cg;var Rj=[],Sj=!1,Tj=function(a){return E["dataLayer"].push(a)},Uj=function(a){var b=kd["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Vj(a){var b=a._clear;ya(a,function(f,h){"_clear"!==f&&(b&&be(f,void 0),be(f,h))});qd||(qd=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=wd(),a["gtm.uniqueEventId"]=d,be("gtm.uniqueEventId",d));sd=c;var e=Wj(a);sd=null;switch(c){case "gtm.init":I("GTM",19),e&&I("GTM",20)}return e}
function Wj(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=kd.zones;d=e?e.checkState(jd.s,c):Cg;return d.active?sh(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Xj(){for(var a=!1;!Sj&&0<Rj.length;){Sj=!0;delete Vd.eventModel;Xd();var b=Rj.shift();if(null!=b){var c=Pj(b);if(c){var d=b;b=Pj(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Yd(h,1);if(pa(k)||Ta(k))k=n(k);Wd[h]=k}}try{if(na(b))try{b.call(Zd)}catch(w){}else if(pa(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),p=m.pop(),r=l.slice(1),t=Yd(m.join("."),2);if(void 0!==t&&null!==t)try{t[p].apply(t,r)}catch(w){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&g(b[0])){var u=qj[b[0]];if(u&&(!c||!rj[b[0]])){b=u(b);break a}}b=void 0}if(!b){Sj=!1;continue}}a=Vj(b)||a}}finally{c&&Xd(!0)}}Sj=!1}
return!a}function Yj(){var a=Xj();try{sj(E["dataLayer"],jd.s)}catch(b){}return a}
var ak=function(){var a=hc("dataLayer",[]),b=hc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Kg(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});yj(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<kd.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Qj(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Rj.push.apply(Rj,d);if(300<
this.length)for(I("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return Xj()&&h};Rj.push.apply(Rj,a.slice(0));Zj()&&G(Yj)},Zj=function(){var a=!0;return a};var bk={};bk.Kb=new String("undefined");
var ck=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===bk.Kb?b:a[d]);return c.join("")}};ck.prototype.toString=function(){return this.h("undefined")};ck.prototype.valueOf=ck.prototype.toString;bk.Ff=ck;bk.Kc={};bk.mg=function(a){return new ck(a)};var dk={};bk.jh=function(a,b){var c=wd();dk[c]=[a,b];return c};bk.ne=function(a){var b=a?0:1;return function(c){var d=dk[c];if(d&&"function"===typeof d[b])d[b]();dk[c]=void 0}};bk.Kg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};bk.ah=function(a){if(a===bk.Kb)return a;var b=wd();bk.Kc[b]=a;return'google_tag_manager["'+jd.s+'"].macro('+b+")"};bk.Ug=function(a,b,c){a instanceof bk.Ff&&(a=a.h(bk.jh(b,c)),b=ma);return{Xc:a,D:b}};var ek=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||pc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},fk=function(a){kd.hasOwnProperty("autoEventsSettings")||(kd.autoEventsSettings={});var b=kd.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},gk=function(a,b,c){fk(a)[b]=c},hk=function(a,b,c,d){var e=fk(a),f=Ha(e,b,d);e[b]=c(f)},ik=function(a,b,c){var d=fk(a);return Ha(d,b,c)};var jk=["input","select","textarea"],kk=["button","hidden","image","reset","submit"],lk=function(a){var b=a.tagName.toLowerCase();return!sa(jk,function(c){return c===b})||"input"===b&&sa(kk,function(c){return c===a.type.toLowerCase()})?!1:!0},mk=function(a){return a.form?a.form.tagName?a.form:F.getElementById(a.form):sc(a,["form"],100)},nk=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(lk(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var ok=!!E.MutationObserver,pk=void 0,qk=function(a){if(!pk){var b=function(){var c=F.body;if(c)if(ok)(new MutationObserver(function(){for(var e=0;e<pk.length;e++)G(pk[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;nc(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<pk.length;e++)G(pk[e])}))})}};pk=[];F.body?b():G(b)}pk.push(a)};
var Bk=function(){var a=F.body,b=F.documentElement||a&&a.parentElement,c,d;if(F.compatMode&&"BackCompat"!==F.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};I("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Ck=function(a){var b=Bk(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,0)+
Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},Dk=function(a){if(F.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!E.getComputedStyle)return!0;var c=E.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=E.getComputedStyle(d,null))}return!1};var Ek=[],Fk=!(!E.IntersectionObserver||!E.IntersectionObserverEntry),Gk=function(a,b,c){for(var d=new E.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Ek.length;f++)if(!Ek[f])return Ek[f]=d,f;return Ek.push(d)-1},Hk=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},p={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Fa()};G(function(){return a(p)})}for(var e=[],f=[],h=0;h<b.length;h++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=Ck(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},Ik=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Fk){var e=!1;G(function(){e||Hk(a,b,c)()});return Gk(function(f){e=!0;for(var h={Wa:0};h.Wa<f.length;h={Wa:h.Wa},h.Wa++)G(function(k){return function(){return a(f[k.Wa])}}(h))},b,c)}return E.setInterval(Hk(a,b,c),1E3)},Jk=function(a){Fk?0<=a&&a<Ek.length&&Ek[a]&&(Ek[a].disconnect(),Ek[a]=void 0):E.clearInterval(a)};var Lk=E.clearTimeout,Mk=E.setTimeout,K=function(a,b,c){if(dg()){b&&G(b)}else return jc(a,b,c)},Nk=function(){return E.location.href},Ok=function(a){return me(oe(a),"fragment")},Pk=function(a){return ne(oe(a))},Q=function(a,b){return Yd(a,b||2)},Qk=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Tj(a)):d=Tj(a);return d},Rk=function(a,b){E[a]=b},R=function(a,b,c){b&&(void 0===E[a]||c&&!E[a])&&(E[a]=
b);return E[a]},Sk=function(a,b,c){return ue(a,b,void 0===c?!0:!!c)},Tk=function(a,b){if(dg()){b&&G(b)}else lc(a,b)},Uk=function(a){return!!ik(a,"init",!1)},Vk=function(a){gk(a,"init",!0)},Wk=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":pd;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";K(fg("https://","http://",c))},Xk=function(a,b){var c=a[b];return c};
var Yk=bk.Ug;function ul(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var vl=new wa;function wl(a,b){function c(h){var k=oe(h),l=me(k,"protocol"),m=me(k,"host",!0),p=me(k,"port"),r=me(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function xl(a){return yl(a)?1:0}
function yl(a){var b=a.arg0,c=a.arg1;if(a.any_of&&pa(c)){for(var d=0;d<c.length;d++)if(xl({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(t){}}e=!1}return e;case "_ew":return ul(b,c);case "_eq":return String(b)==String(c);
case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var k;k=String(b).split(",");return 0<=qa(k,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var l;var m=a.ignore_case?"i":void 0;try{var p=String(c)+m,r=vl.get(p);r||(r=new RegExp(c,m),vl.set(p,r));l=r.test(b)}catch(t){l=!1}return l;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return wl(b,c)}return!1};var zl=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Al={},Bl=encodeURI,S=encodeURIComponent,Cl=mc;var Dl=function(a,b){if(!a)return!1;var c=me(oe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var El=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Al.Lg=function(){var a=!1;return a};function Wm(){return E.gaGlobal=E.gaGlobal||{}}var Xm=function(){var a=Wm();a.hid=a.hid||va();return a.hid};var hn=window,jn=document,kn=function(a){var b=hn._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===hn["ga-disable-"+a])return!0;try{var c=hn.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=qe("AMP_TOKEN",String(jn.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return jn.getElementById("__gaOptOutExtension")?!0:!1};function nn(a,b){delete b.eventModel[C.ab];if(a!==C.I){var c=b.getWithConfig(C.bc);if(pa(c)){I("GTM",26);for(var d={},e=0;e<c.length;e++){var f=c[e],h=b.getWithConfig(f);void 0!==h&&(d[f]=h)}b.eventModel=d}}pn(b.eventModel)}var pn=function(a){ya(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[C.ka]||{};ya(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var sn=function(a,b,c){Vi(b,c,a)},tn=function(a,b,c){Vi(b,c,a,!0)},vn=function(a,b){};
function un(a,b){}var W={a:{}};W.a.ctv=["google"],function(){(function(a){W.__ctv=a;W.__ctv.b="ctv";W.__ctv.g=!0;W.__ctv.priorityOverride=0})(function(){return"220"})}();

W.a.jsm=["customScripts"],function(){(function(a){W.__jsm=a;W.__jsm.b="jsm";W.__jsm.g=!0;W.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=R("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();W.a.d=["google"],function(){(function(a){W.__d=a;W.__d.b="d";W.__d.g=!0;W.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=Tc(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=F.getElementById(a.vtp_elementId);b&&(d?c=pc(b,d):c=qc(b));return Ea(String(b&&c))})}();
W.a.e=["google"],function(){(function(a){W.__e=a;W.__e.b="e";W.__e.g=!0;W.__e.priorityOverride=0})(function(a){return String(de(a.vtp_gtmEventId,"event"))})}();
W.a.f=["google"],function(){(function(a){W.__f=a;W.__f.b="f";W.__f.g=!0;W.__f.priorityOverride=0})(function(a){var b=Q("gtm.referrer",1)||F.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?me(oe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Pk(String(b)):String(b)})}();
W.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=ek(c,"gtm.click");Qk(d)}}(function(b){W.__cl=b;W.__cl.b="cl";W.__cl.g=!0;W.__cl.priorityOverride=0})(function(b){if(!Uk("cl")){var c=R("document");nc(c,"click",a,!0);Vk("cl")}G(b.vtp_gtmOnSuccess)})}();
W.a.r=["google"],function(){(function(a){W.__r=a;W.__r.b="r";W.__r.g=!0;W.__r.priorityOverride=0})(function(a){return va(a.vtp_min,a.vtp_max)})}();
W.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){W.__u=b;W.__u.b="u";W.__u.g=!0;W.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Q("gtm.url",1);c=c||Nk();var d=b[a("vtp_component")];if(!d||"URL"==d)return Pk(String(c));var e=oe(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?pa(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var p=0;p<m.length;p++){var r=me(e,"QUERY",void 0,void 0,m[p]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=me(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
W.a.v=["google"],function(){(function(a){W.__v=a;W.__v.b="v";W.__v.g=!0;W.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Q(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
W.a.tl=["google"],function(){function a(b){return function(){if(b.bd&&b.dd>=b.bd)b.Yc&&R("self").clearInterval(b.Yc);else{b.dd++;var c=(new Date).getTime();Qk({event:b.R,"gtm.timerId":b.Yc,"gtm.timerEventNumber":b.dd,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.bd,"gtm.timerStartTime":b.Ue,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Ue,"gtm.triggers":b.vh})}}}(function(b){W.__tl=b;W.__tl.b="tl";W.__tl.g=!0;W.__tl.priorityOverride=0})(function(b){G(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{R:b.vtp_eventName,dd:0,interval:Number(b.vtp_interval),bd:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),vh:String(b.vtp_uniqueTriggerId||"0"),Ue:(new Date).getTime()};c.Yc=R("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
W.a.ua=["google"],function(){var a,b={},c=function(e){Rc(function(){d(e)},[C.H,C.o])},d=function(e){var f={},h={},k={},l={},m={};if(e.vtp_gaSettings){var p=e.vtp_gaSettings;n(El(p.vtp_fieldsToSet,"fieldName","value"),h);n(El(p.vtp_contentGroup,"index","group"),k);n(El(p.vtp_dimension,"index","dimension"),l);n(El(p.vtp_metric,"index","metric"),m);e.vtp_gaSettings=null;p.vtp_fieldsToSet=void 0;p.vtp_contentGroup=void 0;p.vtp_dimension=void 0;p.vtp_metric=void 0;var r=n(p);e=n(e,r)}n(El(e.vtp_fieldsToSet,
"fieldName","value"),h);n(El(e.vtp_contentGroup,"index","group"),k);n(El(e.vtp_dimension,"index","dimension"),l);n(El(e.vtp_metric,"index","metric"),m);Oc(C.H)||(h.storage="none"),Oc(C.o)||(h.allowAdFeatures=!1,h.storeGac=!1);var t=$g(e.vtp_functionName);if(na(t)){var q="",u="";e.vtp_setTrackerName&&"string"==typeof e.vtp_trackerName?""!==e.vtp_trackerName&&(u=e.vtp_trackerName,q=u+"."):(u="gtm"+wd(),
q=u+".");var w={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0},v={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,
storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},y=function(O){var P=[].slice.call(arguments,0);P[0]=q+P[0];t.apply(window,P)},x=function(O,P){return void 0===P?P:O(P)},A=function(O,P){if(P)for(var Ba in P)P.hasOwnProperty(Ba)&&y("set",O+Ba,P[Ba])},B=function(){},
z=function(O,P,Ba){var Ra=0;if(O)for(var za in O)if(O.hasOwnProperty(za)&&(Ba&&w[za]||!Ba&&void 0===w[za])){var Na=v[za]?Ca(O[za]):O[za];"anonymizeIp"!=za||Na||(Na=void 0);P[za]=Na;Ra++}return Ra},D={name:u};z(h,D,!0);t("create",
e.vtp_trackingId||f.trackingId,D);y("set","&gtm",Jh(!0));Hc()&&y("set","&gcs",Pc());e.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,P){void 0!==e[P]&&y("set",O,e[P])})("nonInteraction","vtp_nonInteraction");A("contentGroup",
k);A("dimension",l);A("metric",m);var H={};z(h,H,!1)&&y("set",H);var M;e.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=h&&h.hitCallback;na(O)&&O();e.vtp_gtmOnSuccess()});if("TRACK_EVENT"==e.vtp_trackType){e.vtp_enableEcommerce&&
(y("require","ec","ec.js"),B());var N={hitType:"event",eventCategory:String(e.vtp_eventCategory||f.category),eventAction:String(e.vtp_eventAction||f.action),eventLabel:x(String,e.vtp_eventLabel||f.label),eventValue:x(Aa,e.vtp_eventValue||f.value)};z(M,N,!1);y("send",N);}else if("TRACK_SOCIAL"==e.vtp_trackType){}else if("TRACK_TRANSACTION"==e.vtp_trackType){}else if("TRACK_TIMING"==e.vtp_trackType){}else if("DECORATE_LINK"==e.vtp_trackType){}else if("DECORATE_FORM"==e.vtp_trackType){}else if("TRACK_DATA"==e.vtp_trackType){}else{e.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());if(e.vtp_doubleClick||"DISPLAY_FEATURES"==e.vtp_advertisingFeaturesType){var U="_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:U})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==e.vtp_advertisingFeaturesType){var ra="_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");y("require","adfeatures",{cookieName:ra})}M?y("send","pageview",M):y("send","pageview");}if(!a){var ua=e.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";e.vtp_useInternalVersion&&!e.vtp_useDebugVersion&&(ua="internal/"+ua);a=!0;var Ga=vh(h._x_19,"/analytics.js"),
la=fg("https:","http:","//www.google-analytics.com/"+ua,h&&h.forceSSL);K("analytics.js"===ua&&Ga?Ga:la,function(){var O=Yg();O&&O.loaded||e.vtp_gtmOnFailure();},e.vtp_gtmOnFailure)}}else G(e.vtp_gtmOnFailure)};W.__ua=c;W.__ua.b="ua";W.__ua.g=!0;W.__ua.priorityOverride=0}();



W.a.cid=["google"],function(){(function(a){W.__cid=a;W.__cid.b="cid";W.__cid.g=!0;W.__cid.priorityOverride=0})(function(){return jd.s})}();


W.a.aev=["google"],function(){function a(q,u){var w=de(q,"gtm");if(w)return w[u]}function b(q,u,w,v){v||(v="element");var y=q+"."+u,x;if(p.hasOwnProperty(y))x=p[y];else{var A=a(q,v);if(A&&(x=w(A),p[y]=x,r.push(y),35<r.length)){var B=r.shift();delete p[B]}}return x}function c(q,u,w){var v=a(q,t[u]);return void 0!==v?v:w}function d(q,u){if(!q)return!1;var w=e(Nk());pa(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var v=[w],y=0;y<u.length;y++)if(u[y]instanceof RegExp){if(u[y].test(q))return!1}else{var x=
u[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;v.push(e(x))}}return!Dl(q,v)}function e(q){m.test(q)||(q="http://"+q);return me(oe(q),"HOST",!0)}function f(q,u,w){switch(q){case "SUBMIT_TEXT":return b(u,"FORM."+q,h,"formSubmitElement")||w;case "LENGTH":var v=b(u,"FORM."+q,k);return void 0===v?w:v;case "INTERACTED_FIELD_ID":return l(u,"id",w);case "INTERACTED_FIELD_NAME":return l(u,"name",w);case "INTERACTED_FIELD_TYPE":return l(u,"type",w);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");
return void 0===y?w:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?w:x;default:return w}}function h(q){switch(q.tagName.toLowerCase()){case "input":return pc(q,"value");case "button":return qc(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var u=0,w=0;w<q.elements.length;w++)lk(q.elements[w])&&u++;return u}}function l(q,u,w){var v=a(q,"interactedFormField");return v&&pc(v,u)||w}var m=/^https?:\/\//i,p={},r=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){W.__aev=q;W.__aev.b="aev";W.__aev.g=!0;W.__aev.priorityOverride=0})(function(q){var u=q.vtp_gtmEventId,w=q.vtp_defaultValue,v=q.vtp_varType;switch(v){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||
w;case "TEXT":return b(u,v,qc)||w;case "URL":var x;a:{var A=String(a(u,"elementUrl")||w||""),B=oe(A),z=String(q.vtp_component||"URL");switch(z){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,q.vtp_affiliatedDomains);break a;default:x=me(B,z,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===q.vtp_attribute)D=c(u,v,w);else{var H=q.vtp_attribute,M=a(u,"element");D=M&&pc(M,H)||w||""}return D;case "MD":var N=q.vtp_mdValue,Z=b(u,"MD",xk);return N&&Z?Ak(Z,N)||
w:Z||w;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),u,w);default:return c(u,v,w)}})}();


W.a.fsl=[],function(){function a(){var e=R("document"),f=c(),h=HTMLFormElement.prototype.submit;nc(e,"click",function(k){var l=k.target;if(l&&(l=sc(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&pc(l,"value")){var m;l.form?l.form.tagName?m=l.form:m=F.getElementById(l.form):m=sc(l,["form"],100);m&&f.store(m,l)}},!1);nc(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,p=b(l)&&!m,r=f.get(l),t=!0;if(d(l,function(){if(t){var q;
r&&(q=e.createElement("input"),q.type="hidden",q.name=r.name,q.value=r.value,l.appendChild(q));h.call(l);q&&l.removeChild(q)}},m,p,r))t=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(h){return sa(e,function(k){return k.form===
h})};return{store:function(h,k){var l=f(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=f(h);return k?k.button:null}}}function d(e,f,h,k,l){var m=ik("fsl",h?"nv.mwt":"mwt",0),p;p=h?ik("fsl","nv.ids",[]):ik("fsl","ids",[]);if(!p.length)return!0;var r=ek(e,"gtm.formSubmit",p),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);r["gtm.elementUrl"]=t;l&&(r["gtm.formSubmitElement"]=l);if(k&&m){if(!Qk(r,Uj(f),m))return!1}else Qk(r,function(){},m||2E3);return!0}(function(e){W.__fsl=e;W.__fsl.b=
"fsl";W.__fsl.g=!0;W.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(r){return Math.max(k,r)};hk("fsl","mwt",m,0);h||hk("fsl","nv.mwt",m,0)}var p=function(r){r.push(l);return r};hk("fsl","ids",p,[]);h||hk("fsl","nv.ids",p,[]);Uk("fsl")||(a(),Vk("fsl"));G(e.vtp_gtmOnSuccess)})}();W.a.smm=["google"],function(){(function(a){W.__smm=a;W.__smm.b="smm";W.__smm.g=!0;W.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=El(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



W.a.hid=["google"],function(){(function(a){W.__hid=a;W.__hid.b="hid";W.__hid.g=!0;W.__hid.priorityOverride=0})(function(){return bk.Kb})}();
W.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=F.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var p=k.getAttribute("data-gtmsrc");p&&(m.src=p,ic(m,l));d.insertBefore(m,null);p||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(t){G(h)}}}var c=function(d){if(F.body){var e=
d.vtp_gtmOnFailure,f=Yk(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Xc,k=f.D;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(F.body,rc(h),k,e)()}else Mk(function(){c(d)},
200)};W.__html=c;W.__html.b="html";W.__html.g=!0;W.__html.priorityOverride=0}();






W.a.lcl=[],function(){function a(){var c=R("document"),d=0,e=function(f){var h=f.target;if(h&&3!==f.which&&!(f.Jg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;h=sc(h,["a","area"],100);if(!h)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=ik("lcl",k?"nv.mwt":"mwt",0),m;m=k?ik("lcl","nv.ids",[]):ik("lcl","ids",[]);if(m.length){var p=ek(h,"gtm.linkClick",m);if(b(f,h,c)&&!k&&l&&h.href){var r=String(Xk(h,"rel")||""),t=!!sa(r.split(" "),function(w){return"noreferrer"===w.toLowerCase()});
t&&I("GTM",36);var q=R((Xk(h,"target")||"_self").substring(1)),u=!0;if(Qk(p,Uj(function(){var w;if(w=u&&q){var v;a:if(t){var y;try{y=new MouseEvent(f.type)}catch(x){if(!c.createEvent){v=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Jg=!0;f.target.dispatchEvent(y);v=!0}else v=!1;w=!v}w&&(q.location.href=Xk(h,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Qk(p,function(){},l||2E3);return!0}}};nc(c,"click",e,!1);nc(c,"auxclick",e,!1)}
function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=Xk(d,"href"),h=f.indexOf("#"),k=Xk(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=Pk(f),m=Pk(e.location);return l!==m}return!0}(function(c){W.__lcl=c;W.__lcl.b="lcl";W.__lcl.g=!0;W.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||
0>=f)f=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};hk("lcl","mwt",k,0);e||hk("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};hk("lcl","ids",l,[]);e||hk("lcl","nv.ids",l,[]);Uk("lcl")||(a(),Vk("lcl"));G(c.vtp_gtmOnSuccess)})}();
W.a.evl=["google"],function(){function a(){var f=Number(Q("gtm.start"))||0;return(new Date).getTime()-f}function b(f,h,k,l){function m(){if(!Dk(f.target)){h.has(d.Nb)||h.set(d.Nb,""+a());h.has(d.Dc)||h.set(d.Dc,""+a());var r=0;h.has(d.Pb)&&(r=Number(h.get(d.Pb)));r+=100;h.set(d.Pb,""+r);if(r>=k){var t=ek(f.target,"gtm.elementVisibility",[h.h]),q=Ck(f.target);t["gtm.visibleRatio"]=Math.round(1E3*q)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(h.get(d.Dc));t["gtm.visibleLastTime"]=Number(h.get(d.Nb));
Qk(t);l()}}}if(!h.has(d.eb)&&(0==k&&m(),!h.has(d.Ha))){var p=R("self").setInterval(m,100);h.set(d.eb,p)}}function c(f){f.has(d.eb)&&(R("self").clearInterval(Number(f.get(d.eb))),f.i(d.eb))}var d={eb:"polling-id-",Dc:"first-on-screen-",Nb:"recent-on-screen-",Pb:"total-visible-time-",Ha:"has-fired-"},e=function(f,h){this.element=f;this.h=h};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.h)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.h)};e.prototype.set=function(f,h){this.element.setAttribute("data-gtm-vis-"+f+this.h,h)};e.prototype.i=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.h)};(function(f){W.__evl=f;W.__evl.b="evl";W.__evl.g=!0;W.__evl.priorityOverride=0})(function(f){function h(){var y=!1,x=null;if("CSS"===l){try{x=Tc(m)}catch(H){}y=!!x&&w.length!=x.length}else if("ID"===l){var A=F.getElementById(m);A&&(x=[A],y=1!=w.length||w[0]!==A)}x||(x=[],y=0<w.length);if(y){for(var B=0;B<w.length;B++){var z=
new e(w[B],q);c(z)}w=[];for(var D=0;D<x.length;D++)w.push(x[D]);0<=v&&Jk(v);0<w.length&&(v=Ik(k,w,[t]))}}function k(y){var x=new e(y.target,q);y.intersectionRatio>=t?x.has(d.Ha)||b(y,x,r,"ONCE"===u?function(){for(var A=0;A<w.length;A++){var B=new e(w[A],q);B.set(d.Ha,"1");c(B)}Jk(v);if(p&&pk)for(var z=0;z<pk.length;z++)pk[z]===h&&pk.splice(z,1)}:function(){x.set(d.Ha,"1");c(x)}):(c(x),"MANY_PER_ELEMENT"===u&&x.has(d.Ha)&&(x.i(d.Ha),x.i(d.Pb)),x.i(d.Nb))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var p=!!f.vtp_useDomChangeListener,r=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,q=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,w=[],v=-1;h();p&&qk(h);G(f.vtp_gtmOnSuccess)})}();


var wn={};wn.macro=function(a){if(bk.Kc.hasOwnProperty(a))return bk.Kc[a]},wn.onHtmlSuccess=bk.ne(!0),wn.onHtmlFailure=bk.ne(!1);wn.dataLayer=Zd;wn.callback=function(a){ud.hasOwnProperty(a)&&na(ud[a])&&ud[a]();delete ud[a]};function xn(){kd[jd.s]=wn;Ja(vd,W.a);yb=yb||bk;zb=Ag}
function yn(){re.gtm_3pds=!0;kd=E.google_tag_manager=E.google_tag_manager||{};if(kd[jd.s]){var a=kd.zones;a&&a.unregisterChild(jd.s);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)rb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)ub.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)tb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],r={},t=0;t<p.length;t++)r[p[t][0]]=Array.prototype.slice.call(p[t],1);sb.push(r)}wb=W;xb=xl;xn();ak();Fg=!1;Gg=0;if("interactive"==F.readyState&&!F.createEventObject||"complete"==F.readyState)Ig();
else{nc(F,"DOMContentLoaded",Ig);nc(F,"readystatechange",Ig);if(F.createEventObject&&F.documentElement.doScroll){var q=!0;try{q=!E.frameElement}catch(y){}q&&Jg()}nc(E,"load",Ig)}vj=!1;"complete"===F.readyState?xj():nc(E,"load",xj);a:{if(!Od)break a;E.setInterval(Pd,
864E5);}rd=(new Date).getTime();}}
(function(a){a()})(yn);

})()
