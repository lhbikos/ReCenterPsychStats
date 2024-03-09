
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
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={Ef:!0},ha={};try{ha.__proto__=ea;da=ha.Ef;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=ca,ka=this||self,ma=/^[\w+/_-]+[=]{0,2}$/,oa=null;var pa=function(){},qa=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},ra=function(a){return"number"==typeof a&&!isNaN(a)},sa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},n=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ta=function(a,b){if(a&&sa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},wa=function(a,b){if(!ra(a)||
!ra(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a,b){for(var c=new xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},C=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},za=function(a){return Math.round(Number(a))||0},Aa=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ba=function(a){var b=[];if(sa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ca=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Da=function(){return(new Date).getTime()},xa=function(){this.prefix="gtm.";this.values={}};xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};xa.prototype.get=function(a){return this.values[this.prefix+a]};
var Fa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ga=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ha=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ia=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ja=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ka=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},La=function(a){var b=
[];C(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ma=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Na=function(a){if(null==a)return String(a);var b=Ma.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Oa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Pa=function(a){if(!a||"object"!=Na(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Oa(a,"constructor")&&!Oa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Oa(a,b)},D=function(a,b){var c=b||("array"==Na(a)?[]:{}),d;for(d in a)if(Oa(a,d)){var e=a[d];"array"==Na(e)?("array"!=Na(c[d])&&(c[d]=[]),c[d]=D(e,c[d])):Pa(e)?(Pa(c[d])||(c[d]={}),c[d]=D(e,c[d])):c[d]=e}return c};
var Qa=[],Ra={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Sa=function(a){return Ra[a]},Ta=/[\x00\x22\x26\x27\x3c\x3e]/g;var Xa=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Ya={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Za=function(a){return Ya[a]};
Qa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Xa,Za)+"'"}};var jb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,kb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},lb=function(a){return kb[a]};Qa[16]=function(a){return a};var ob;
var pb=[],qb=[],rb=[],sb=[],tb=[],ub={},vb,wb,xb,yb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},zb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=ub[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):ob(c,e,b)},Cb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Bb(a[e],b,c));
return d},Db=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=ub[b];return c?c.priorityOverride||0:0},Bb=function(a,b,c){if(sa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Bb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=pb[f];if(!h||b.Uc(h))return;c[f]=!0;try{var k=Cb(h,b,c);k.vtp_gtmEventId=b.id;d=zb(k,b);xb&&(d=xb.cg(d,k))}catch(y){b.Be&&b.Be(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Bb(a[l],b,c)]=Bb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var r=Bb(a[p],b,c);wb&&(m=m||r===wb.Gb);d.push(r)}return wb&&m?wb.fg(d):d.join("");case "escape":d=Bb(a[1],b,c);if(wb&&sa(a[1])&&"macro"===a[1][0]&&wb.Fg(a))return wb.Xg(d);d=String(d);for(var u=2;u<a.length;u++)Qa[a[u]]&&(d=Qa[a[u]](d));return d;case "tag":var q=a[1];if(!sb[q])throw Error("Unable to resolve tag reference "+q+".");return d={ne:a[2],
index:q};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Eb(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Eb=function(a,b,c){try{return vb(Cb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Fb=function(){var a=function(b){return{toString:function(){return b}}};return{xd:a("convert_case_to"),yd:a("convert_false_to"),zd:a("convert_null_to"),Ad:a("convert_true_to"),Bd:a("convert_undefined_to"),Fh:a("debug_mode_metadata"),va:a("function"),cf:a("instance_name"),hf:a("live_only"),kf:a("malware_disabled"),lf:a("metadata"),Gh:a("original_vendor_template_id"),rf:a("once_per_event"),Id:a("once_per_load"),Qd:a("setup_tags"),Sd:a("tag_id"),Td:a("teardown_tags")}}();var Gb=null,Jb=function(a){function b(r){for(var u=0;u<r.length;u++)d[r[u]]=!0}var c=[],d=[];Gb=Hb(a);for(var e=0;e<qb.length;e++){var f=qb[e],h=Ib(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],p=0;p<sb.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},Ib=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Gb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Gb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Hb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Eb(rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var F=window,G=document,ec=navigator,fc=G.currentScript&&G.currentScript.src,gc=function(a,b){var c=F[a];F[a]=void 0===c?b:c;return F[a]},hc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},ic=function(a,b,c){var d=G.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;hc(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=ka.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ma.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=G.getElementsByTagName("script")[0]||G.body||G.head;l.parentNode.insertBefore(d,l);return d},jc=function(){if(fc){var a=fc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},kc=function(a,b){var c=G.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=G.body&&G.body.lastChild||
G.body||G.head;d.parentNode.insertBefore(c,d);hc(c,b);void 0!==a&&(c.src=a);return c},lc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},mc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},nc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},I=function(a){F.setTimeout(a,0)},oc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},pc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},qc=function(a){var b=G.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},rc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},sc=function(a){ec.sendBeacon&&ec.sendBeacon(a)||lc(a)},tc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var vc=function(a){return uc?G.querySelectorAll(a):null},wc=function(a,b){if(!uc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!G.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},xc=!1;if(G.querySelectorAll)try{var yc=G.querySelectorAll(":root");yc&&1==yc.length&&yc[0]==G.documentElement&&(xc=!0)}catch(a){}var uc=xc;var J={ra:"_ee",Jh:"_uci",yc:"event_callback",Fb:"event_timeout",D:"gtag.config",aa:"allow_ad_personalization_signals",zc:"restricted_data_processing",Za:"allow_google_signals",ba:"cookie_expires",Eb:"cookie_update",$a:"session_duration",ja:"user_properties"};J.we=[J.aa,J.Za,J.Eb];J.ye=[J.ba,J.Fb,J.$a];var Qc=/[A-Z]+/,Rc=/\s/,Sc=function(a){if(g(a)&&(a=Ca(a),!Rc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Qc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],s:d}}}}},Uc=function(a){for(var b={},c=0;c<a.length;++c){var d=Sc(a[c]);d&&(b[d.id]=d)}Tc(b);var e=[];C(b,function(f,h){e.push(h)});return e};
function Tc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.s[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Vc={},Wc=null,Xc=Math.random();Vc.w="GTM-MWPR6C";Vc.Kb="432";var Yc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Zc="www.googletagmanager.com/gtm.js";var $c=Zc,ad=null,bd=null,cd=null,dd="//www.googletagmanager.com/a?id="+Vc.w+"&cv=220",ed={},fd={},gd=function(){var a=Wc.sequence||0;Wc.sequence=a+1;return a};var hd={},jd=function(a,b){hd[a]=hd[a]||[];hd[a][b]=!0},kd=function(a){for(var b=[],c=hd[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var ld=function(){return"&tc="+sb.filter(function(a){return a}).length},od=function(){md||(md=F.setTimeout(nd,500))},nd=function(){md&&(F.clearTimeout(md),md=void 0);void 0===pd||qd[pd]&&!rd&&!sd||(td[pd]||ud.Hg()||0>=vd--?(jd("GTM",1),td[pd]=!0):(ud.gh(),lc(wd()),qd[pd]=!0,xd=yd=sd=rd=""))},wd=function(){var a=pd;if(void 0===a)return"";var b=kd("GTM"),c=kd("TAGGING");return[zd,qd[a]?"":"&es=1",Ad[a],b?"&u="+b:"",c?"&ut="+c:"",ld(),rd,sd,yd,xd,"&z=0"].join("")},Bd=function(){return[dd,"&v=3&t=t",
"&pid="+wa(),"&rv="+Vc.Kb].join("")},Cd="0.005000">Math.random(),zd=Bd(),Dd=function(){zd=Bd()},qd={},rd="",sd="",xd="",yd="",pd=void 0,Ad={},td={},md=void 0,ud=function(a,b){var c=0,d=0;return{Hg:function(){if(c<a)return!1;Da()-d>=b&&(c=0);return c>=a},gh:function(){Da()-d>=b&&(c=0);c++;d=Da()}}}(2,1E3),vd=1E3,Ed=function(a,b){if(Cd&&!td[a]&&pd!==a){nd();pd=a;xd=rd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Ad[a]="&e="+c+"&eid="+a;od()}},Fd=function(a,b,c){if(Cd&&
!td[a]&&b){a!==pd&&(nd(),pd=a);var d,e=String(b[Fb.va]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;rd=rd?rd+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(ub[h]?"1":"2")+d;xd=xd?xd+"."+k:"&ti="+k;od();2022<=wd().length&&nd()}},Gd=function(a,b,c){if(Cd&&!td[a]){a!==pd&&(nd(),pd=a);var d=c+b;sd=
sd?sd+"."+d:"&epr="+d;od();2022<=wd().length&&nd()}};var Hd={},Id=new xa,Jd={},Kd={},Nd={name:"dataLayer",set:function(a,b){D(Ka(a,b),Jd);Ld()},get:function(a){return Md(a,2)},reset:function(){Id=new xa;Jd={};Ld()}},Md=function(a,b){if(2!=b){var c=Id.get(a);if(Cd){var d=Od(a);c!==d&&jd("GTM",5)}return c}return Od(a)},Od=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:Qd(d)},Qd=function(a){for(var b=Jd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Sd=function(a,b){Kd.hasOwnProperty(a)||(Id.set(a,b),D(Ka(a,b),Jd),Ld())},Ld=function(a){C(Kd,function(b,c){Id.set(b,c);D(Ka(b,void 0),Jd);D(Ka(b,c),Jd);a&&delete Kd[b]})},Td=function(a,b,c){Hd[a]=Hd[a]||{};var d=1!==c?Od(b):Id.get(b);"array"===Na(d)||"object"===Na(d)?Hd[a][b]=D(d):Hd[a][b]=d},Ud=function(a,b){if(Hd[a])return Hd[a][b]},Vd=function(a,b){Hd[a]&&delete Hd[a][b]};var Wd=function(){var a=!1;return a};var Q=function(a,b,c,d){return(2===Xd()||d||"http:"!=F.location.protocol?a:b)+c},Xd=function(){var a=jc(),b;if(1===a)a:{var c=$c;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=G.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var le=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),me={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ne={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},oe="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var qe=function(a){var b=Md("gtm.whitelist");b&&jd("GTM",9);var c=b&&Ja(Ba(b),me),d=Md("gtm.blacklist");d||(d=Md("tagTypeBlacklist"))&&jd("GTM",3);
d?jd("GTM",8):d=[];pe()&&(d=Ba(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=n(Ba(d),"google")&&jd("GTM",2);var e=d&&Ja(Ba(d),ne),f={};return function(h){var k=h&&h[Fb.va];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=fd[k]||[],m=a(k,l);if(b){var p;if(p=m)a:{if(0>n(c,k))if(l&&0<l.length)for(var r=
0;r<l.length;r++){if(0>n(c,l[r])){jd("GTM",11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var u=!1;if(d){var q=0<=n(e,k);if(q)u=q;else{var t=ya(e,l||[]);t&&jd("GTM",10);u=t}}var v=!m||u;v||!(0<=n(l,"sandboxedScripts"))||c&&-1!==n(c,"sandboxedScripts")||(v=ya(e,oe));return f[k]=v}},pe=function(){return le.test(F.location&&F.location.hostname)};var re={cg:function(a,b){b[Fb.xd]&&"string"===typeof a&&(a=1==b[Fb.xd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Fb.zd)&&null===a&&(a=b[Fb.zd]);b.hasOwnProperty(Fb.Bd)&&void 0===a&&(a=b[Fb.Bd]);b.hasOwnProperty(Fb.Ad)&&!0===a&&(a=b[Fb.Ad]);b.hasOwnProperty(Fb.yd)&&!1===a&&(a=b[Fb.yd]);return a}};var se={active:!0,isWhitelisted:function(){return!0}},te=function(a){var b=Wc.zones;!b&&a&&(b=Wc.zones=a());return b};var ue=function(){};var ve=!1,we=0,xe=[];function ye(a){if(!ve){var b=G.createEventObject,c="complete"==G.readyState,d="interactive"==G.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ve=!0;for(var e=0;e<xe.length;e++)I(xe[e])}xe.push=function(){for(var f=0;f<arguments.length;f++)I(arguments[f]);return 0}}}function ze(){if(!ve&&140>we){we++;try{G.documentElement.doScroll("left"),ye()}catch(a){F.setTimeout(ze,50)}}}var Ae=function(a){ve?a():xe.push(a)};var Be={},Ce={},De=function(a,b,c,d){if(!Ce[a]||Yc[b]||"__zone"===b)return-1;var e={};Pa(d)&&(e=D(d,e));e.id=c;e.status="timeout";return Ce[a].tags.push(e)-1},Ee=function(a,b,c,d){if(Ce[a]){var e=Ce[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Fe(a){for(var b=Be[a]||[],c=0;c<b.length;c++)b[c]();Be[a]={push:function(d){d(Vc.w,Ce[a])}}}
var Ie=function(a,b,c){Ce[a]={tags:[]};qa(b)&&Ge(a,b);c&&F.setTimeout(function(){return Fe(a)},Number(c));return He(a)},Ge=function(a,b){Be[a]=Be[a]||[];Be[a].push(Ga(function(){return I(function(){b(Vc.w,Ce[a])})}))};function He(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ga(function(){b++;d&&b>=c&&Fe(a)})},Pf:function(){d=!0;b>=c&&Fe(a)}}};var Je=function(){function a(d){return!ra(d)||0>d?0:d}if(!Wc._li&&F.performance&&F.performance.timing){var b=F.performance.timing.navigationStart,c=ra(Nd.get("gtm.start"))?Nd.get("gtm.start"):0;Wc._li={cst:a(c-b),cbt:a(bd-b)}}};var Ne={},Oe=function(){return F.GoogleAnalyticsObject&&F[F.GoogleAnalyticsObject]},Pe=!1;
var Qe=function(a){F.GoogleAnalyticsObject||(F.GoogleAnalyticsObject=a||"ga");var b=F.GoogleAnalyticsObject;if(F[b])F.hasOwnProperty(b)||jd("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);F[b]=c}Je();return F[b]},Re=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Oe();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Te=function(a){},Se=function(){return F.GoogleAnalyticsObject||"ga"};var Ve=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var We=/:[0-9]+$/,Xe=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},$e=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ye(a.protocol)||Ye(F.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:F.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||F.location.hostname).replace(We,"").toLowerCase());var f=b,h,k=Ye(a.protocol);f&&(f=String(f).toLowerCase());switch(f){case "url_no_fragment":h=Ze(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(We,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||jd("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=n(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Xe(h,e,void 0));break;case "extension":var p=a.pathname.split(".");h=1<p.length?p[p.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},Ye=function(a){return a?a.replace(":","").toLowerCase():""},Ze=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
af=function(a){var b=G.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||jd("TAGGING",1),c="/"+c);var d=b.hostname.replace(We,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function ff(a,b,c,d){var e=sb[a],f=gf(a,b,c,d);if(!f)return null;var h=Bb(e[Fb.Qd],c,[]);if(h&&h.length){var k=h[0];f=ff(k.index,{C:f,B:1===k.ne?b.terminate:f,terminate:b.terminate},c,d)}return f}
function gf(a,b,c,d){function e(){if(f[Fb.kf])k();else{var w=Cb(f,c,[]),y=De(c.id,String(f[Fb.va]),Number(f[Fb.Sd]),w[Fb.lf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Da()-B;Fd(c.id,sb[a],"5");Ee(c.id,y,"success",z);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Da()-B;Fd(c.id,sb[a],"6");Ee(c.id,y,"failure",z);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;Fd(c.id,f,"1");var A=function(){var z=Da()-B;Fd(c.id,f,"7");Ee(c.id,y,"exception",z);x||(x=!0,k())};var B=Da();try{zb(w,c)}catch(z){A(z)}}}var f=sb[a],h=b.C,k=b.B,l=b.terminate;if(c.Uc(f))return null;var m=Bb(f[Fb.Td],c,[]);if(m&&m.length){var p=m[0],r=ff(p.index,{C:h,B:k,terminate:l},c,d);if(!r)return null;h=r;k=2===p.ne?l:r}if(f[Fb.Id]||f[Fb.rf]){var u=f[Fb.Id]?tb:c.ph,q=h,t=k;if(!u[a]){e=Ga(e);var v=hf(a,u,e);h=v.C;k=v.B}return function(){u[a](q,t)}}return e}
function hf(a,b,c){var d=[],e=[];b[a]=jf(d,e,c);return{C:function(){b[a]=kf;for(var f=0;f<d.length;f++)d[f]()},B:function(){b[a]=lf;for(var f=0;f<e.length;f++)e[f]()}}}function jf(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function kf(a){a()}function lf(a,b){b()};var of=function(a,b){for(var c=[],d=0;d<sb.length;d++)if(a.ub[d]){var e=sb[d];var f=b.add();try{var h=ff(d,{C:f,B:f,terminate:f},a,d);h?c.push({Qe:d,Le:Db(e),ng:h}):(mf(d,a),f())}catch(l){f()}}b.Pf();c.sort(nf);for(var k=0;k<c.length;k++)c[k].ng();return 0<c.length};function nf(a,b){var c,d=b.Le,e=a.Le;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Qe,k=b.Qe;f=h>k?1:h<k?-1:0}return f}
function mf(a,b){if(!Cd)return;var c=function(d){var e=b.Uc(sb[d])?"3":"4",f=Bb(sb[d][Fb.Qd],b,[]);f&&f.length&&c(f[0].index);Fd(b.id,sb[d],e);var h=Bb(sb[d][Fb.Td],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var pf=!1,qf=function(a,b,c,d,e){if("gtm.js"==b){if(pf)return!1;pf=!0}Ed(a,b);var f=Ie(a,d,e);Td(a,"event",1);Td(a,"ecommerce",1);Td(a,"gtm");var h={id:a,name:b,Uc:qe(c),ub:[],ph:[],Be:function(){jd("GTM",6)}};h.ub=Jb(h);var k=of(h,f);"gtm.js"!==b&&"gtm.sync"!==b||Te(Vc.w);if(!k)return k;for(var l=0;l<h.ub.length;l++)if(h.ub[l]){var m=sb[l];if(m&&!Yc[String(m[Fb.va])])return!0}return!1};var rf=[];function sf(){var a=gc("google_tag_data",{});a.ics||(a.ics={entries:{},set:tf,update:uf,addListener:vf,notifyListeners:wf,active:!1});return a.ics}function tf(a,b,c,d,e){var f=sf();f.active=!0;if(void 0!=b){var h=f.entries,k=h[a]||{},l=k.region,m=c&&g(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();m!==e&&(m===d?l===e:m||l)||(h[a]={region:m,initial:"granted"===b,update:k.update})}}
function uf(a,b){var c=sf();c.active=!0;if(void 0!=b){var d=xf(a),e=c.entries;e[a]=e[a]||{};e[a].update="granted"===b;if(xf(a)!==d)for(var f=0;f<rf.length;++f){var h=rf[f];sa(h.he)&&-1!==h.he.indexOf(a)&&(h.Ke=!0)}}}function vf(a,b){rf.push({he:a,pg:b})}function wf(){for(var a=0;a<rf.length;++a){var b=rf[a];if(b.Ke){b.Ke=!1;try{b.pg.call()}catch(c){}}}}
var xf=function(a){var b=sf().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},yf=function(){return sf().active},zf=function(a,b){sf().addListener(a,b)},Af=function(a,b){if(!1===xf(b)){var c=!1;zf([b],function(){!c&&xf(b)&&(a(),c=!0)})}};var Bf=[J.i,J.J],Cf=function(a){var b=xf(a);return void 0!=b?b:!0},Df=function(){for(var a=[],b=0;b<Bf.length;b++){var c=xf(Bf[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+a.join("")},Ef=function(a,b){zf(a,b)};var Gf=/^https?:\/\/www\.googletagmanager\.com/;function Hf(){var a;return a}function Jf(a,b){}
function If(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function Kf(){var a=!1;return a};var Lf=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.C=function(){};this.B=function(){}},Mf=function(a){var b=new Lf;b.eventModel=a;return b},Nf=function(a,b){a.targetConfig=b;return a},Of=function(a,b){a.containerConfig=b;return a},Pf=function(a,b){a.h=b;return a},Qf=function(a,b){a.globalConfig=b;return a},Rf=function(a,b){a.C=b;return a},Sf=function(a,b){a.B=b;return a};
Lf.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Tf=function(a){function b(e){C(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];C(c,function(e){d.push(e)});return d};function Uf(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Vf={},Wf=function(a){return void 0==Vf[a]?!1:Vf[a]};var Yf=function(a,b,c,d){return Xf(d)?Uf(a,String(b||document.cookie),c):[]},ag=function(a,b,c,d,e){if(Xf(e)){var f=Zf(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=$f(f,function(h){return h.Sb},b);if(1===f.length)return f[0].id;f=$f(f,function(h){return h.vb},c);return f[0]?f[0].id:void 0}}};function bg(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Yf(b,f,!1,d).indexOf(c)}
var fg=function(a,b,c){function d(q,t,v){if(null==v)return delete h[t],q;h[t]=v;return q+"; "+t+"="+v}function e(q,t){if(null==t)return delete h[t],q;h[t]=!0;return q+"; "+t}if(!Xf(c.Ca))return!1;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=cg(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.Th);f=d(f,"samesite",
c.Zh);c.$h&&(f=e(f,"secure"));f=e(f,c.flags);var l=c.domain;if("auto"===l){for(var m=dg(),p=0;p<m.length;++p){var r="none"!==m[p]?m[p]:void 0,u=d(f,"domain",r);if(!eg(r,c.path)&&bg(u,a,b,c.Ca))return!0}return!1}l&&"none"!==l&&(f=d(f,"domain",l));return eg(l,c.path)?!1:bg(f,a,b,c.Ca)},gg=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return fg(a,b,c)};
function $f(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Zf(a,b,c){for(var d=[],e=Yf(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),Sb:1*l[0]||1,vb:1*l[1]||1}))}}return d}
var cg=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},hg=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ig=/(^|\.)doubleclick\.net$/i,eg=function(a,b){return ig.test(document.location.hostname)||"/"===b&&hg.test(a)},dg=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;ig.test(e)||hg.test(e)||a.push("none");
return a},Xf=function(a){if(!Wf("gtag_cs_api")||!a||!yf())return!0;var b=xf(a);return null==b?!0:!!b};var jg=function(){for(var a=ec.userAgent+(G.cookie||"")+(G.referrer||""),b=a.length,c=F.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Da()/1E3)].join(".")},mg=function(a,b,c,d,e){var f=kg(b);return ag(a,f,lg(c),d,e)},ng=function(a,b,c,d){var e=""+kg(c),f=lg(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},kg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},lg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function og(a,b,c){var d,e=a.tb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Da())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};function pg(){for(var a=rg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function sg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var rg,tg;function ug(a){rg=rg||sg();tg=tg||pg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,p=(h&15)<<2|k>>6,r=k&63;e||(r=64,d||(p=64));b.push(rg[l],rg[m],rg[p],rg[r])}return b.join("")}
function vg(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=tg[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}rg=rg||sg();tg=tg||pg();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var wg;var Ag=function(){var a=xg,b=yg,c=zg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){mc(G,"mousedown",d);mc(G,"keyup",d);mc(G,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Bg=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};zg().decorators.push(f)},Cg=function(a,b,c){for(var d=zg().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a;if(l&&(h.sameHost||m!==G.location.hostname))for(var p=0;p<l.length;p++)if(l[p]instanceof RegExp){if(l[p].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[p])){k=!0;break a}k=!1}if(k){var r=h.placement;void 0==r&&(r=h.fragment?2:1);r===b&&Ha(e,h.callback())}}return e},zg=function(){var a=gc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Dg=/(.*?)\*(.*?)\*(.*)/,Eg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Fg=/^(?:www\.|m\.|amp\.)+/,Gg=/([^?#]+)(\?[^#]*)?(#.*)?/;function Hg(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Jg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(ug(String(d))))}var e=b.join("*");return["1",Ig(e),e].join("*")},Ig=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=wg)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}wg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^wg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Lg=function(){return function(a){var b=af(F.location.href),c=b.search.replace("?",""),d=Xe(c,"_gl",!0)||"";a.query=Kg(d)||{};var e=$e(b,"fragment").match(Hg("_gl"));a.fragment=Kg(e&&e[3]||"")||{}}},Mg=function(){var a=Lg(),b=zg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ha(c,d.query),Ha(c,d.fragment));return c},Kg=function(a){var b;
b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Dg.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],p=0;p<b;++p)if(m===Ig(k,p)){l=!0;break a}l=!1}if(l){for(var r={},u=k?k.split("*"):[],q=0;q<u.length;q+=2)r[u[q]]=vg(u[q+1]);return r}}}}catch(t){}};
function Ng(a,b,c,d){function e(p){var r=p,u=Hg(a).exec(r),q=r;if(u){var t=u[2],v=u[4];q=u[1];v&&(q=q+t+v)}p=q;var w=p.charAt(p.length-1);p&&"&"!==w&&(p+="&");return p+m}d=void 0===d?!1:d;var f=Gg.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function Og(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Cg(b,1,c),e=Cg(b,2,c),f=Cg(b,3,c);if(Ia(d)){var h=Jg(d);c?Pg("_gl",h,a):Qg("_gl",h,a,!1)}if(!c&&Ia(e)){var k=Jg(e);Qg("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Qg(m,p,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Pg(m,p,r);break a}}"string"==typeof r&&Ng(m,p,r,void 0)}}
function Qg(a,b,c,d){if(c.href){var e=Ng(a,b,c.href,void 0===d?!1:d);Ve.test(e)&&(c.href=e)}}
function Pg(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=G.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Ng(a,b,c.action);Ve.test(m)&&(c.action=m)}}}
var xg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Og(e,e.hostname)}}catch(h){}},yg=function(a){try{if(a.action){var b=$e(af(a.action),"host");Og(a,b)}}catch(c){}},Rg=function(a,b,c,d){Ag();Bg(a,b,"fragment"===c?2:1,!!d,!1)},Sg=function(a){Ag();Bg(a,[F.location.hostname],3,!0,!0)},Tg=function(){var a=G.location.hostname,b=Eg.exec(G.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Fg,""),l=e.replace(Fg,""),m;if(!(m=k===l)){var p="."+l;m=k.substring(k.length-p.length,k.length)===p}return m},Ug=function(a,b){return!1===a?!1:a||b||Tg()};var Vg=/^\w+$/,Wg=/^[\w-]+$/,Xg=/^~?[\w-]+$/,Yg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Zg=function(a){var b;if(Wf("gtag_cs_api")&&yf()){var c=xf("ad_storage");b=null==c?!0:!!c}else b=!0;b?a():Af(a,"ad_storage")};function $g(a){return a&&"string"==typeof a&&a.match(Vg)?a:"_gcl"}
var bh=function(){var a=af(F.location.href),b=$e(a,"query",!1,void 0,"gclid"),c=$e(a,"query",!1,void 0,"gclsrc"),d=$e(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Xe(e,"gclid",void 0);c=c||Xe(e,"gclsrc",void 0)}return ah(b,c,d)},ah=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Wg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Wf("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},dh=function(a){var b=bh();Zg(function(){return ch(b,a)})};
function ch(a,b,c){function d(m,p){var r=eh(m,e);r&&(gg(r,p,f),h=!0)}b=b||{};var e=$g(b.prefix);c=c||Da();var f=og(b,c,!0);f.Ca="ad_storage";var h=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.di?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return h}
var gh=function(a,b){var c=Mg();Zg(function(){for(var d=$g(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Yg[f]){var h=eh(f,d),k=c[h];if(k){var l=Math.min(fh(k),Da()),m;b:{for(var p=l,r=Yf(h,G.cookie,void 0,"ad_storage"),u=0;u<r.length;++u)if(fh(r[u])>p){m=!0;break b}m=!1}if(!m){var q=og(b,l,!0);q.Ca="ad_storage";gg(h,k,q)}}}}ch(ah(c.gclid,c.gclsrc),b)})},eh=function(a,b){var c=Yg[a];if(void 0!==c)return b+c},fh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function hh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var ih=function(a,b,c,d,e){if(sa(b)){var f=$g(e),h=function(){for(var k={},l=0;l<a.length;++l){var m=eh(a[l],f);if(m){var p=Yf(m,G.cookie,void 0,"ad_storage");p.length&&(k[m]=p.sort()[p.length-1])}}return k};Zg(function(){Rg(h,b,c,d)})}},jh=function(a){return a.filter(function(b){return Xg.test(b)})},kh=function(a,b){for(var c=$g(b.prefix),d={},e=0;e<a.length;e++)Yg[a[e]]&&(d[a[e]]=Yg[a[e]]);Zg(function(){C(d,function(f,h){var k=Yf(c+h,G.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=fh(l),
p={};p[f]=[hh(l)];ch(p,b,m)}})})},lh=function(){var a=["","aw.ds"],b=bh(),c=b.gclid,d=b.gclsrc||"";c&&-1!==a.indexOf(d)&&Sg(function(){var e={gclid:c};d&&(e.gclsrc=d);return e})};function mh(){var a=!1;return a}
function nh(a){function b(l){var m;Wc.reported_gclid||(Wc.reported_gclid={});m=Wc.reported_gclid;var p=d+(l?"gcu":"gcs");if(!m[p]){m[p]=!0;var r=[],u=function(t,v){v&&r.push(t+"="+encodeURIComponent(v))},q=d;u("gclid",q);u("gclsrc",e);sc("https://www.google.com/pagead/landing?"+r.join("&"))}}var c=bh(),d=c.gclid||"",e=c.gclsrc,f=!a&&
(!d||e&&"aw.ds"!==e?!1:!0),h=mh();if(f||h){var k=""+jg();b();}};var oh;if(3===Vc.Kb.length)oh="g";else{var ph="G";oh=ph}
var qh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:oh,OPT:"o"},rh=function(a){var b=Vc.w.split("-"),c=b[0].toUpperCase(),d=qh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Vc.Kb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+Vc.Kb+e};var Bh=["1"],Ch={},Gh=function(a){var b=Dh(a.prefix);Ch[b]||Eh(b,a.path,a.domain)||(Fh(b,jg(),a),Eh(b,a.path,a.domain))};function Fh(a,b,c){var d=ng(b,"1",c.domain,c.path),e=og(c);e.Ca="ad_storage";gg(a,d,e)}function Eh(a,b,c){var d=mg(a,b,c,Bh,"ad_storage");d&&(Ch[a]=d);return d}function Dh(a){return(a||"_gcl")+"_au"};var Hh=function(){for(var a=[],b=G.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({md:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].md]||(f[a[h].md]=[]),f[a[h].md].push({timestamp:k[1],rg:k[2]}))}return f};var Ih=/^\d+\.fls\.doubleclick\.net$/;function Jh(a){Cf("ad_storage")?a():Af(a,"ad_storage")}function Kh(a){var b=af(F.location.href),c=$e(b,"host",!1);if(c&&c.match(Ih)){var d=$e(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Lh(a,b){if("aw"==a||"dc"==a){var c=Kh("gcl"+a);if(c)return c.split(".")}var d=$g(b);if("_gcl"==d){var e;e=bh()[a]||[];if(0<e.length)return e}var f=eh(a,d),h;if(f){var k=[];if(G.cookie){var l=Yf(f,G.cookie,void 0,"ad_storage");if(l&&0!=l.length){for(var m=0;m<l.length;m++){var p=hh(l[m]);p&&-1===n(k,p)&&k.push(p)}h=jh(k)}else h=k}else h=k}else h=[];return h}
var Mh=function(){var a=Kh("gac");if(a)return decodeURIComponent(a);var b=Hh(),c=[];C(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].rg);f=jh(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},Nh=function(a,b){var c=bh().dc||[];Jh(function(){Gh(b);var d=Ch[Dh(b.prefix)],e=!1;if(d&&0<c.length){var f=Wc.joined_au=Wc.joined_au||{},h=b.prefix||"_gcl";if(!f[h])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;sc(l);e=f[h]=!0}}null==a&&(a=
e);if(a&&d){var m=Dh(b.prefix),p=Ch[m];p&&Fh(m,p,b)}})};var Hi={},Ii=["G","GP"];Hi.Se="";var Ji=Hi.Se.split(",");function Ki(){var a=Wc;return a.gcq=a.gcq||new Li}
var Mi=function(a,b,c){Ki().register(a,b,c)},Ni=function(a,b,c,d){Ki().push("event",[b,a],c,d)},Oi=function(a,b){Ki().push("config",[a],b)},Pi={},Qi=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.m={};this.o=null;this.h=!1},Ri=function(a,b,c,d,e){this.type=a;this.o=b;this.U=c||"";this.h=d;this.m=e},Li=function(){this.m={};this.o={};this.h=[]},Si=function(a,b){var c=Sc(b);return a.m[c.containerId]=a.m[c.containerId]||new Qi},Ti=function(a,b,c,d){if(d.U){var e=Si(a,d.U),
f=e.o;if(f){var h=D(c),k=D(e.targetConfig[d.U]),l=D(e.containerConfig),m=D(e.m),p=D(a.o),r=Md("gtm.uniqueEventId"),u=Sc(d.U).prefix,q=Sf(Rf(Qf(Pf(Of(Nf(Mf(h),k),l),m),p),function(){Gd(r,u,"2");}),function(){Gd(r,u,"3");});try{Gd(r,u,"1");f(d.U,b,d.o,q)}catch(t){
Gd(r,u,"4");}}}};
Li.prototype.register=function(a,b,c){if(3!==Si(this,a).status){Si(this,a).o=b;Si(this,a).status=3;c&&(Si(this,a).m=c);var d=Sc(a),e=Pi[d.containerId];if(void 0!==e){var f=Wc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Wc[d.containerId]._spx&&(h=h.toLowerCase());var k=Md("gtm.uniqueEventId"),l=h,m=Da()-f;if(Cd&&!td[k]){k!==pd&&(nd(),pd=k);var p=l+"."+Math.floor(f-e)+"."+Math.floor(m);yd=yd?yd+","+p:"&cl="+p}delete Pi[d.containerId]}this.flush()}};
Li.prototype.push=function(a,b,c,d){var e=Math.floor(Da()/1E3);a:if(c){var f=Sc(c),h;if(h=f){var k;if(k=1===Si(this,c).status)b:{var l=f.prefix;k=!0}h=k}if(h)if(Si(this,c).status=2,this.push("require",[],f.containerId),Pi[f.containerId]=Da(),Wd()){}else{var p=encodeURIComponent(f.containerId),r=("http:"!=F.location.protocol?"https:":"http:")+"//www.googletagmanager.com";
ic(r+"/gtag/js?id="+p+"&l=dataLayer&cx=c")}}this.h.push(new Ri(a,e,c,b,d));d||this.flush()};
Li.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.m)c.m=!1,this.h.push(c);else switch(c.type){case "require":if(3!==Si(this,c.U).status&&!a)return;break;case "set":C(c.h[0],function(l,m){D(Ka(l,m),b.o)});break;case "config":var d=c.h[0],e=!!d[J.bc];delete d[J.bc];var f=Si(this,c.U),h=Sc(c.U),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.U]={});f.h&&e||Ti(this,J.D,d,c);f.h=!0;delete d[J.ra];k?D(d,f.containerConfig):D(d,f.targetConfig[c.U]);break;
case "event":Ti(this,c.h[1],c.h[0],c)}this.h.shift()}};var Ui=["GP","G"],Vi="G".split(/,/);Vi.push("GF");Vi.push("HA");var Wi=!1;Wi=!0;var Xi=null,Yi={},Zi={},$i;function aj(a,b){var c={event:a};b&&(c.eventModel=D(b),b[J.yc]&&(c.eventCallback=b[J.yc]),b[J.Fb]&&(c.eventTimeout=b[J.Fb]));return c}
var gj={config:function(a){},event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Pa(a[2])&&void 0!=a[2])return;c=a[2]}var d=aj(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Pa(a[1])?b=D(a[1]):3==a.length&&
g(a[1])&&(b={},Pa(a[2])||sa(a[2])?b[a[1]]=D(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};
var hj={policy:!0};var ij=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},kj=function(a){var b=jj(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var lj=!1,mj=[];function nj(){if(!lj){lj=!0;for(var a=0;a<mj.length;a++)I(mj[a])}}var oj=function(a){lj?I(a):mj.push(a)};var Gj=function(a){if(Fj(a))return a;this.h=a};Gj.prototype.wg=function(){return this.h};var Fj=function(a){return!a||"object"!==Na(a)||Pa(a)?!1:"getUntrustedUpdateValue"in a};Gj.prototype.getUntrustedUpdateValue=Gj.prototype.wg;var Hj=[],Ij=!1,Jj=function(a){return F["dataLayer"].push(a)},Kj=function(a){var b=Wc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Lj(a){var b=a._clear;C(a,function(f,h){"_clear"!==f&&(b&&Sd(f,void 0),Sd(f,h))});ad||(ad=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=gd(),a["gtm.uniqueEventId"]=d,Sd("gtm.uniqueEventId",d));cd=c;var e=Mj(a);cd=null;switch(c){case "gtm.init":jd("GTM",19),e&&jd("GTM",20)}return e}
function Mj(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Wc.zones;d=e?e.checkState(Vc.w,c):se;return d.active?qf(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Nj(){for(var a=!1;!Ij&&0<Hj.length;){Ij=!0;delete Jd.eventModel;Ld();var b=Hj.shift();if(null!=b){var c=Fj(b);if(c){var d=b;b=Fj(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Md(h,1);if(sa(k)||Pa(k))k=D(k);Kd[h]=k}}try{if(qa(b))try{b.call(Nd)}catch(v){}else if(sa(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),p=m.pop(),r=l.slice(1),u=Md(m.join("."),2);if(void 0!==u&&null!==u)try{u[p].apply(u,r)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&g(b[0])){var t=gj[b[0]];if(t&&(!c||!hj[b[0]])){b=t(b);break a}}b=void 0}if(!b){Ij=!1;continue}}a=Lj(b)||a}}finally{c&&Ld(!0)}}Ij=!1}
return!a}function Oj(){var a=Nj();try{ij(F["dataLayer"],Vc.w)}catch(b){}return a}
var Qj=function(){var a=gc("dataLayer",[]),b=gc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Ae(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});oj(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Wc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Gj(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Hj.push.apply(Hj,d);if(300<
this.length)for(jd("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return Nj()&&h};Hj.push.apply(Hj,a.slice(0));Pj()&&I(Oj)},Pj=function(){var a=!0;return a};var Rj={};Rj.Gb=new String("undefined");
var Sj=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Rj.Gb?b:a[d]);return c.join("")}};Sj.prototype.toString=function(){return this.h("undefined")};Sj.prototype.valueOf=Sj.prototype.toString;Rj.Af=Sj;Rj.Gc={};Rj.fg=function(a){return new Sj(a)};var Tj={};Rj.hh=function(a,b){var c=gd();Tj[c]=[a,b];return c};Rj.ie=function(a){var b=a?0:1;return function(c){var d=Tj[c];if(d&&"function"===typeof d[b])d[b]();Tj[c]=void 0}};Rj.Fg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Rj.Xg=function(a){if(a===Rj.Gb)return a;var b=gd();Rj.Gc[b]=a;return'google_tag_manager["'+Vc.w+'"].macro('+b+")"};Rj.Pg=function(a,b,c){a instanceof Rj.Af&&(a=a.h(Rj.hh(b,c)),b=pa);return{Sc:a,C:b}};var Uj=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||oc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Vj=function(a){Wc.hasOwnProperty("autoEventsSettings")||(Wc.autoEventsSettings={});var b=Wc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Wj=function(a,b,c){Vj(a)[b]=c},Xj=function(a,b,c,d){var e=Vj(a),f=Fa(e,b,d);e[b]=c(f)},Yj=function(a,b,c){var d=Vj(a);return Fa(d,b,c)};var Zj=["input","select","textarea"],ak=["button","hidden","image","reset","submit"],bk=function(a){var b=a.tagName.toLowerCase();return!ta(Zj,function(c){return c===b})||"input"===b&&ta(ak,function(c){return c===a.type.toLowerCase()})?!1:!0},ck=function(a){return a.form?a.form.tagName?a.form:G.getElementById(a.form):rc(a,["form"],100)},dk=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(bk(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var ek=!!F.MutationObserver,fk=void 0,gk=function(a){if(!fk){var b=function(){var c=G.body;if(c)if(ek)(new MutationObserver(function(){for(var e=0;e<fk.length;e++)I(fk[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;mc(c,"DOMNodeInserted",function(){d||(d=!0,I(function(){d=!1;for(var e=0;e<fk.length;e++)I(fk[e])}))})}};fk=[];G.body?b():I(b)}fk.push(a)};
var rk=function(){var a=G.body,b=G.documentElement||a&&a.parentElement,c,d;if(G.compatMode&&"BackCompat"!==G.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};jd("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},sk=function(a){var b=rk(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},tk=function(a){if(G.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!F.getComputedStyle)return!0;var c=F.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=F.getComputedStyle(d,null))}return!1};var uk=[],vk=!(!F.IntersectionObserver||!F.IntersectionObserverEntry),wk=function(a,b,c){for(var d=new F.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<uk.length;f++)if(!uk[f])return uk[f]=d,f;return uk.push(d)-1},xk=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},p={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Da()};I(function(){return a(p)})}for(var e=[],f=[],h=0;h<b.length;h++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=sk(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},yk=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(vk){var e=!1;I(function(){e||xk(a,b,c)()});return wk(function(f){e=!0;for(var h={Wa:0};h.Wa<f.length;h={Wa:h.Wa},h.Wa++)I(function(k){return function(){return a(f[k.Wa])}}(h))},b,c)}return F.setInterval(xk(a,b,c),1E3)},zk=function(a){vk?0<=a&&a<uk.length&&uk[a]&&(uk[a].disconnect(),uk[a]=void 0):F.clearInterval(a)};var Bk=F.clearTimeout,Ck=F.setTimeout,S=function(a,b,c){if(Wd()){b&&I(b)}else return ic(a,b,c)},Dk=function(){return F.location.href},Ek=function(a){return $e(af(a),"fragment")},Fk=function(a){return Ze(af(a))},W=function(a,b){return Md(a,b||2)},Gk=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Jj(a)):d=Jj(a);return d},Hk=function(a,b){F[a]=b},X=function(a,b,c){b&&(void 0===F[a]||c&&!F[a])&&(F[a]=
b);return F[a]},Ik=function(a,b,c){return Yf(a,b,void 0===c?!0:!!c)},Jk=function(a,b){if(Wd()){b&&I(b)}else kc(a,b)},Kk=function(a){return!!Yj(a,"init",!1)},Lk=function(a){Wj(a,"init",!0)},Mk=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":$c;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(Q("https://","http://",c))},Nk=function(a,b){var c=a[b];return c};
var Ok=Rj.Pg;var kl=new xa;function ll(a,b){function c(h){var k=af(h),l=$e(k,"protocol"),m=$e(k,"host",!0),p=$e(k,"port"),r=$e(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function ml(a){return nl(a)?1:0}
function nl(a){var b=a.arg0,c=a.arg1;if(a.any_of&&sa(c)){for(var d=0;d<c.length;d++)if(ml({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var p;p=String(b).split(",");return 0<=n(p,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var r;var u=a.ignore_case?"i":void 0;try{var q=String(c)+u,t=kl.get(q);t||(t=new RegExp(c,u),kl.set(q,t));r=t.test(b)}catch(v){r=!1}return r;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ll(b,
c)}return!1};var ol=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var pl={},ql=encodeURI,Y=encodeURIComponent,rl=lc;var sl=function(a,b){if(!a)return!1;var c=$e(af(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var tl=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};pl.Gg=function(){var a=!1;return a};var Gm=function(){var a=F.gaGlobal=F.gaGlobal||{};a.hid=a.hid||wa();return a.hid};var Rm=window,Sm=document,Tm=function(a){var b=Rm._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Rm["ga-disable-"+a])return!0;try{var c=Rm.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Uf("AMP_TOKEN",String(Sm.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Sm.getElementById("__gaOptOutExtension")?!0:!1};
var Wm=function(a){C(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[J.ja]||{};C(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var $m=function(a,b,c){Ni(b,c,a)},an=function(a,b,c){Ni(b,c,a,!0)},cn=function(a,b){};
function bn(a,b){}var Z={a:{}};
Z.a.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.b="ctv";Z.__ctv.g=!0;Z.__ctv.priorityOverride=0})(function(){return"220"})}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.b="d";Z.__d.g=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=vc(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=G.getElementById(a.vtp_elementId);b&&(d?c=oc(b,d):c=pc(b));return Ca(String(b&&c))})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Ud(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=W("gtm.referrer",1)||G.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?$e(af(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Fk(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Uj(c,"gtm.click");Gk(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!Kk("cl")){var c=X("document");mc(c,"click",a,!0);Lk("cl")}I(b.vtp_gtmOnSuccess)})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return wa(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=W("gtm.url",1);c=c||Dk();var d=b[a("vtp_component")];if(!d||"URL"==d)return Fk(String(c));var e=af(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?sa(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var p=0;p<m.length;p++){var r=$e(e,"QUERY",void 0,void 0,m[p]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=$e(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=W(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.tl=["google"],function(){function a(b){return function(){if(b.Xc&&b.Zc>=b.Xc)b.Tc&&X("self").clearInterval(b.Tc);else{b.Zc++;var c=(new Date).getTime();Gk({event:b.ca,"gtm.timerId":b.Tc,"gtm.timerEventNumber":b.Zc,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Xc,"gtm.timerStartTime":b.Pe,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Pe,"gtm.triggers":b.th})}}}(function(b){Z.__tl=b;Z.__tl.b="tl";Z.__tl.g=!0;Z.__tl.priorityOverride=0})(function(b){I(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{ca:b.vtp_eventName,Zc:0,interval:Number(b.vtp_interval),Xc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),th:String(b.vtp_uniqueTriggerId||"0"),Pe:(new Date).getTime()};c.Tc=X("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var p=d.vtp_gaSettings;D(tl(p.vtp_fieldsToSet,"fieldName","value"),f);D(tl(p.vtp_contentGroup,"index","group"),h);D(tl(p.vtp_dimension,"index","dimension"),k);D(tl(p.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;p.vtp_fieldsToSet=void 0;p.vtp_contentGroup=void 0;p.vtp_dimension=void 0;p.vtp_metric=void 0;var r=D(p);d=D(d,r)}D(tl(d.vtp_fieldsToSet,"fieldName","value"),f);D(tl(d.vtp_contentGroup,
"index","group"),h);D(tl(d.vtp_dimension,"index","dimension"),k);D(tl(d.vtp_metric,"index","metric"),l);var u=Qe(d.vtp_functionName);if(qa(u)){var q="",t="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(t=d.vtp_trackerName,q=t+"."):(t="gtm"+gd(),q=t+".");var v={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},
y=function(O){var M=[].slice.call(arguments,0);M[0]=q+M[0];u.apply(window,M)},x=function(O,M){return void 0===M?M:O(M)},A=function(O,M){if(M)for(var ua in M)M.hasOwnProperty(ua)&&y("set",O+ua,M[ua])},B=function(){},z=function(O,M,ua){var Ob=0;if(O)for(var Ea in O)if(O.hasOwnProperty(Ea)&&(ua&&v[Ea]||!ua&&void 0===v[Ea])){var ab=w[Ea]?Aa(O[Ea]):
O[Ea];"anonymizeIp"!=Ea||ab||(ab=void 0);M[Ea]=ab;Ob++}return Ob},E={name:t};z(f,E,!0);u("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",rh(!0));d.vtp_enableRecaptcha&&y("require","recaptcha",
"recaptcha.js");(function(O,M){void 0!==d[M]&&y("set",O,d[M])})("nonInteraction","vtp_nonInteraction");A("contentGroup",h);A("dimension",k);A("metric",l);var H={};z(f,H,!1)&&y("set",H);var K;d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=f&&f.hitCallback;qa(O)&&O();d.vtp_gtmOnSuccess()});
if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());var R={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(za,d.vtp_eventValue||e.value)};z(K,R,!1);y("send",R);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var na="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require",
"displayfeatures",void 0,{cookieName:na})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ia="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ia})}K?y("send","pageview",K):y("send","pageview");}if(!a){var va=
d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(va="internal/"+va);a=!0;var cb=Q("https:","http:","//www.google-analytics.com/"+va,f&&f.forceSSL);S(cb,function(){var O=Oe();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else I(d.vtp_gtmOnFailure)};
Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();



Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0;Z.__cid.priorityOverride=0})(function(){return Vc.w})}();


Z.a.aev=["google"],function(){function a(q,t){var v=Ud(q,"gtm");if(v)return v[t]}function b(q,t,v,w){w||(w="element");var y=q+"."+t,x;if(p.hasOwnProperty(y))x=p[y];else{var A=a(q,w);if(A&&(x=v(A),p[y]=x,r.push(y),35<r.length)){var B=r.shift();delete p[B]}}return x}function c(q,t,v){var w=a(q,u[t]);return void 0!==w?w:v}function d(q,t){if(!q)return!1;var v=e(Dk());sa(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<t.length;y++)if(t[y]instanceof RegExp){if(t[y].test(q))return!1}else{var x=
t[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!sl(q,w)}function e(q){m.test(q)||(q="http://"+q);return $e(af(q),"HOST",!0)}function f(q,t,v){switch(q){case "SUBMIT_TEXT":return b(t,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":var w=b(t,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(t,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(t,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return oc(q,"value");case "button":return pc(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var t=0,v=0;v<q.elements.length;v++)bk(q.elements[v])&&t++;return t}}function l(q,t,v){var w=a(q,"interactedFormField");return w&&oc(w,t)||v}var m=/^https?:\/\//i,p={},r=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(q){var t=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(t,"element");return y&&y.tagName||
v;case "TEXT":return b(t,w,pc)||v;case "URL":var x;a:{var A=String(a(t,"elementUrl")||v||""),B=af(A),z=String(q.vtp_component||"URL");switch(z){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,q.vtp_affiliatedDomains);break a;default:x=$e(B,z,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(t,w,v);else{var H=q.vtp_attribute,K=a(t,"element");E=K&&oc(K,H)||v||""}return E;case "MD":var R=q.vtp_mdValue,V=b(t,"MD",nk);return R&&V?qk(V,R)||
v:V||v;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),t,v);default:return c(t,w,v)}})}();

Z.a.fsl=[],function(){function a(){var e=X("document"),f=c(),h=HTMLFormElement.prototype.submit;mc(e,"click",function(k){var l=k.target;if(l&&(l=rc(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&oc(l,"value")){var m;l.form?l.form.tagName?m=l.form:m=G.getElementById(l.form):m=rc(l,["form"],100);m&&f.store(m,l)}},!1);mc(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,p=b(l)&&!m,r=f.get(l),u=!0;if(d(l,function(){if(u){var q;
r&&(q=e.createElement("input"),q.type="hidden",q.name=r.name,q.value=r.value,l.appendChild(q));h.call(l);q&&l.removeChild(q)}},m,p,r))u=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(h){return ta(e,function(k){return k.form===
h})};return{store:function(h,k){var l=f(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=f(h);return k?k.button:null}}}function d(e,f,h,k,l){var m=Yj("fsl",h?"nv.mwt":"mwt",0),p;p=h?Yj("fsl","nv.ids",[]):Yj("fsl","ids",[]);if(!p.length)return!0;var r=Uj(e,"gtm.formSubmit",p),u=e.action;u&&u.tagName&&(u=e.cloneNode(!1).action);r["gtm.elementUrl"]=u;l&&(r["gtm.formSubmitElement"]=l);if(k&&m){if(!Gk(r,Kj(f),m))return!1}else Gk(r,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.b=
"fsl";Z.__fsl.g=!0;Z.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(r){return Math.max(k,r)};Xj("fsl","mwt",m,0);h||Xj("fsl","nv.mwt",m,0)}var p=function(r){r.push(l);return r};Xj("fsl","ids",p,[]);h||Xj("fsl","nv.ids",p,[]);Kk("fsl")||(a(),Lk("fsl"));I(e.vtp_gtmOnSuccess)})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=tl(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.b="hid";Z.__hid.g=!0;Z.__hid.priorityOverride=0})(function(){return Rj.Gb})}();
Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=G.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var p=k.getAttribute("data-gtmsrc");p&&(m.src=p,hc(m,l));d.insertBefore(m,null);p||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(u){I(h)}}}var c=function(d){if(G.body){var e=
d.vtp_gtmOnFailure,f=Ok(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Sc,k=f.C;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(G.body,qc(h),k,e)()}else Ck(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();






Z.a.lcl=[],function(){function a(){var c=X("document"),d=0,e=function(f){var h=f.target;if(h&&3!==f.which&&!(f.Eg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;h=rc(h,["a","area"],100);if(!h)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=Yj("lcl",k?"nv.mwt":"mwt",0),m;m=k?Yj("lcl","nv.ids",[]):Yj("lcl","ids",[]);if(m.length){var p=Uj(h,"gtm.linkClick",m);if(b(f,h,c)&&!k&&l&&h.href){var r=String(Nk(h,"rel")||""),u=!!ta(r.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
u&&jd("GTM",36);var q=X((Nk(h,"target")||"_self").substring(1)),t=!0;if(Gk(p,Kj(function(){var v;if(v=t&&q){var w;a:if(u){var y;try{y=new MouseEvent(f.type)}catch(x){if(!c.createEvent){w=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Eg=!0;f.target.dispatchEvent(y);w=!0}else w=!1;v=!w}v&&(q.location.href=Nk(h,"href"))}),l))t=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Gk(p,function(){},l||2E3);return!0}}};mc(c,"click",e,!1);mc(c,"auxclick",e,!1)}
function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=Nk(d,"href"),h=f.indexOf("#"),k=Nk(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=Fk(f),m=Fk(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||
0>=f)f=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};Xj("lcl","mwt",k,0);e||Xj("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};Xj("lcl","ids",l,[]);e||Xj("lcl","nv.ids",l,[]);Kk("lcl")||(a(),Lk("lcl"));I(c.vtp_gtmOnSuccess)})}();
Z.a.evl=["google"],function(){function a(f,h){this.element=f;this.uid=h}function b(){var f=Number(W("gtm.start"))||0;return(new Date).getTime()-f}function c(f,h,k,l){function m(){if(!tk(f.target)){h.has(e.Jb)||h.set(e.Jb,""+b());h.has(e.Bc)||h.set(e.Bc,""+b());var r=0;h.has(e.Lb)&&(r=Number(h.get(e.Lb)));r+=100;h.set(e.Lb,""+r);if(r>=k){var u=Uj(f.target,"gtm.elementVisibility",[h.uid]),q=sk(f.target);u["gtm.visibleRatio"]=Math.round(1E3*q)/10;u["gtm.visibleTime"]=k;u["gtm.visibleFirstTime"]=Number(h.get(e.Bc));
u["gtm.visibleLastTime"]=Number(h.get(e.Jb));Gk(u);l()}}}if(!h.has(e.cb)&&(0==k&&m(),!h.has(e.Ha))){var p=X("self").setInterval(m,100);h.set(e.cb,p)}}function d(f){f.has(e.cb)&&(X("self").clearInterval(Number(f.get(e.cb))),f.h(e.cb))}var e={cb:"polling-id-",Bc:"first-on-screen-",Jb:"recent-on-screen-",Lb:"total-visible-time-",Ha:"has-fired-"};a.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.uid)};a.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.uid)};a.prototype.set=function(f,h){this.element.setAttribute("data-gtm-vis-"+f+this.uid,h)};a.prototype.h=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.uid)};(function(f){Z.__evl=f;Z.__evl.b="evl";Z.__evl.g=!0;Z.__evl.priorityOverride=0})(function(f){function h(){var y=!1,x=null;if("CSS"===l){try{x=vc(m)}catch(H){}y=!!x&&v.length!=x.length}else if("ID"===l){var A=G.getElementById(m);A&&(x=[A],y=1!=v.length||v[0]!==A)}x||(x=[],y=0<v.length);if(y){for(var B=0;B<v.length;B++){var z=
new a(v[B],q);d(z)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&zk(w);0<v.length&&(w=yk(k,v,[u]))}}function k(y){var x=new a(y.target,q);y.intersectionRatio>=u?x.has(e.Ha)||c(y,x,r,"ONCE"===t?function(){for(var A=0;A<v.length;A++){var B=new a(v[A],q);B.set(e.Ha,"1");d(B)}zk(w);if(p&&fk)for(var z=0;z<fk.length;z++)fk[z]===h&&fk.splice(z,1)}:function(){x.set(e.Ha,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===t&&x.has(e.Ha)&&(x.h(e.Ha),x.h(e.Lb)),x.h(e.Jb))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var p=!!f.vtp_useDomChangeListener,r=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,u=(Number(f.vtp_onScreenRatio)||50)/100,q=f.vtp_uniqueTriggerId,t=f.vtp_firingFrequency,v=[],w=-1;h();p&&gk(h);I(f.vtp_gtmOnSuccess)})}();


var dn={};dn.macro=function(a){if(Rj.Gc.hasOwnProperty(a))return Rj.Gc[a]},dn.onHtmlSuccess=Rj.ie(!0),dn.onHtmlFailure=Rj.ie(!1);dn.dataLayer=Nd;dn.callback=function(a){ed.hasOwnProperty(a)&&qa(ed[a])&&ed[a]();delete ed[a]};function en(){Wc[Vc.w]=dn;Ha(fd,Z.a);wb=wb||Rj;xb=re}
function fn(){Vf.gtm_3pds=!0;Wc=F.google_tag_manager=F.google_tag_manager||{};if(Wc[Vc.w]){var a=Wc.zones;a&&a.unregisterChild(Vc.w)}else{for(var b=data.resource||{},c=b.macros||
[],d=0;d<c.length;d++)pb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)sb.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],r={},u=0;u<p.length;u++)r[p[u][0]]=Array.prototype.slice.call(p[u],1);qb.push(r)}ub=Z;vb=ml;en();Qj();ve=!1;we=0;if("interactive"==G.readyState&&!G.createEventObject||"complete"==G.readyState)ye();else{mc(G,"DOMContentLoaded",ye);mc(G,"readystatechange",ye);if(G.createEventObject&&G.documentElement.doScroll){var q=
!0;try{q=!F.frameElement}catch(y){}q&&ze()}mc(F,"load",ye)}lj=!1;"complete"===G.readyState?nj():mc(F,"load",nj);a:{if(!Cd)break a;F.setInterval(Dd,864E5);}bd=(new Date).getTime();}}
fn();

})()
