
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"221",
  
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":28
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
      "vtp_eventLabel":"Full Download",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_enableTransportUrl":true,
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
      "vtp_eventCategory":"EBC Reader Toolbar",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Attempt to Use",
      "vtp_eventLabel":"Full Download",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":366
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Context Menu",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Attempt to Use",
      "vtp_eventLabel":"Copy",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":378
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Context Menu",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Use",
      "vtp_eventLabel":"Highlight Yellow",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":379
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Context Menu",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Use",
      "vtp_eventLabel":"Highlight Blue",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":380
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Context Menu",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Use",
      "vtp_eventLabel":"Highlight Pink",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":381
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Context Menu",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Attempt to Use",
      "vtp_eventLabel":"Notes",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":382
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"EBC Copy Overlay",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Use",
      "vtp_eventLabel":"Copy to Clipboard",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":383
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_6",
      "tag_id":384
    },{
      "function":"__cl",
      "tag_id":385
    },{
      "function":"__cl",
      "tag_id":386
    },{
      "function":"__cl",
      "tag_id":387
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_21",
      "tag_id":388
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_22",
      "tag_id":389
    },{
      "function":"__cl",
      "tag_id":390
    },{
      "function":"__fsl",
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_26",
      "tag_id":391
    },{
      "function":"__fsl",
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_27",
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
      "function":"__cl",
      "tag_id":401
    },{
      "function":"__cl",
      "tag_id":402
    },{
      "function":"__cl",
      "tag_id":403
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_67",
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
      "function":"__fsl",
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_88",
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
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_110",
      "tag_id":418
    },{
      "function":"__cl",
      "tag_id":419
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_116",
      "tag_id":420
    },{
      "function":"__cl",
      "tag_id":421
    },{
      "function":"__cl",
      "tag_id":422
    },{
      "function":"__cl",
      "tag_id":423
    },{
      "function":"__cl",
      "tag_id":424
    },{
      "function":"__cl",
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
      "function":"__cl",
      "tag_id":434
    },{
      "function":"__cl",
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
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_166",
      "tag_id":439
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_170",
      "tag_id":440
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_172",
      "tag_id":441
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_173",
      "tag_id":442
    },{
      "function":"__cl",
      "tag_id":443
    },{
      "function":"__cl",
      "tag_id":444
    },{
      "function":"__cl",
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
      "function":"__cl",
      "tag_id":450
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_195",
      "tag_id":451
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_196",
      "tag_id":452
    },{
      "function":"__cl",
      "tag_id":453
    },{
      "function":"__cl",
      "tag_id":454
    },{
      "function":"__cl",
      "tag_id":455
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"306000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"2125197_209",
      "tag_id":456
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_216",
      "tag_id":457
    },{
      "function":"__cl",
      "tag_id":458
    },{
      "function":"__cl",
      "tag_id":459
    },{
      "function":"__cl",
      "tag_id":460
    },{
      "function":"__cl",
      "tag_id":461
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_227",
      "tag_id":462
    },{
      "function":"__cl",
      "tag_id":463
    },{
      "function":"__cl",
      "tag_id":464
    },{
      "function":"__cl",
      "tag_id":465
    },{
      "function":"__cl",
      "tag_id":466
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_235",
      "tag_id":467
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_236",
      "tag_id":468
    },{
      "function":"__cl",
      "tag_id":469
    },{
      "function":"__cl",
      "tag_id":470
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_253",
      "tag_id":471
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_254",
      "tag_id":472
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_255",
      "tag_id":473
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_256",
      "tag_id":474
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_257",
      "tag_id":475
    },{
      "function":"__cl",
      "tag_id":476
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_259",
      "tag_id":477
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_260",
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
      "vtp_uniqueTriggerId":"2125197_263",
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
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"display",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"2125197_289",
      "tag_id":485
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_307",
      "tag_id":486
    },{
      "function":"__cl",
      "tag_id":487
    },{
      "function":"__cl",
      "tag_id":488
    },{
      "function":"__cl",
      "tag_id":489
    },{
      "function":"__cl",
      "tag_id":490
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_315",
      "tag_id":491
    },{
      "function":"__cl",
      "tag_id":492
    },{
      "function":"__cl",
      "tag_id":493
    },{
      "function":"__cl",
      "tag_id":494
    },{
      "function":"__cl",
      "tag_id":495
    },{
      "function":"__cl",
      "tag_id":496
    },{
      "function":"__cl",
      "tag_id":497
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_329",
      "tag_id":498
    },{
      "function":"__cl",
      "tag_id":499
    },{
      "function":"__cl",
      "tag_id":500
    },{
      "function":"__cl",
      "tag_id":501
    },{
      "function":"__cl",
      "tag_id":502
    },{
      "function":"__cl",
      "tag_id":503
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2125197_350",
      "tag_id":504
    },{
      "function":"__cl",
      "tag_id":505
    },{
      "function":"__cl",
      "tag_id":506
    },{
      "function":"__cl",
      "tag_id":507
    },{
      "function":"__cl",
      "tag_id":508
    },{
      "function":"__cl",
      "tag_id":509
    },{
      "function":"__cl",
      "tag_id":510
    },{
      "function":"__cl",
      "tag_id":511
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
      "function":"_eq",
      "arg0":["macro",65],
      "arg1":"contextCopy"
    },{
      "function":"_eq",
      "arg0":["macro",65],
      "arg1":"contextHighlightYellow"
    },{
      "function":"_eq",
      "arg0":["macro",65],
      "arg1":"contextHighlightBlue"
    },{
      "function":"_eq",
      "arg0":["macro",65],
      "arg1":"contextHighlightPink"
    },{
      "function":"_eq",
      "arg0":["macro",65],
      "arg1":"contextNote"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"ga_copyToClipboard"
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
    [["if",0],["add",0,218,88,89,90,91,92,93,94,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215]],
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
    [["if",2,145],["add",82]],
    [["if",2,146],["add",83]],
    [["if",2,147],["add",84]],
    [["if",2,148],["add",85]],
    [["if",2,149],["add",86]],
    [["if",2,150],["add",87]],
    [["if",0,151],["add",95]],
    [["if",0,152],["add",96]],
    [["if",0,153],["add",160,216,217]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={Nf:!0},ha={};try{ha.__proto__=fa;ea=ha.Nf;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ia=da,ja=function(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},la=this||self,na=/^[\w+/_-]+[=]{0,2}$/,oa=null,pa=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a},qa=function(a){return a};var sa=function(){},ta=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},ua=function(a){return"number"==typeof a&&!isNaN(a)},wa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},xa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ya=function(a,b){if(a&&wa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},za=function(a,b){if(!ua(a)||
!ua(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ba=function(a,b){for(var c=new Aa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ca=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Da=function(a){return Math.round(Number(a))||0},Ea=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Fa=function(a){var b=[];if(wa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ga=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Ha=function(){return(new Date).getTime()},Aa=function(){this.prefix="gtm.";this.values={}};Aa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Aa.prototype.get=function(a){return this.values[this.prefix+a]};
var Ia=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ja=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ka=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},La=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ma=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Na=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Oa=function(a){var b=
[];Ca(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Pa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Qa=function(a){if(null==a)return String(a);var b=Pa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ra=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Sa=function(a){if(!a||"object"!=Qa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ra(a,"constructor")&&!Ra(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ra(a,b)},m=function(a,b){var c=b||("array"==Qa(a)?[]:{}),d;for(d in a)if(Ra(a,d)){var e=a[d];"array"==Qa(e)?("array"!=Qa(c[d])&&(c[d]=[]),c[d]=m(e,c[d])):Sa(e)?(Sa(c[d])||(c[d]={}),c[d]=m(e,c[d])):c[d]=e}return c};var Ta=function(a){if(void 0==a||wa(a)||Sa(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};
var Va=[],Wa={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Xa=function(a){return Wa[a]},Ya=/[\x00\x22\x26\x27\x3c\x3e]/g;var bb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,cb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},db=function(a){return cb[a]};
Va[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(bb,db)+"'"}};var mb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,pb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},qb=function(a){return pb[a]};Va[16]=function(a){return a};var sb;
var tb=[],ub=[],vb=[],wb=[],xb=[],yb={},zb,Ab,Bb,Cb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=yb[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.de&&b.de(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):sb(c,e,b)},Gb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Fb(a[e],b,c));return d},Hb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";
var c=yb[b];return c?c.priorityOverride||0:0},Fb=function(a,b,c){if(wa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Fb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=tb[f];if(!h||b.jd(h))return;c[f]=!0;try{var k=Gb(h,b,c);k.vtp_gtmEventId=b.id;d=Cb(k,b);Bb&&(d=Bb.ng(d,k))}catch(y){b.Ae&&b.Ae(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Fb(a[l],b,c)]=Fb(a[l+1],b,c);return d;case "template":d=
[];for(var p=!1,n=1;n<a.length;n++){var r=Fb(a[n],b,c);Ab&&(p=p||r===Ab.Ob);d.push(r)}return Ab&&p?Ab.qg(d):d.join("");case "escape":d=Fb(a[1],b,c);if(Ab&&wa(a[1])&&"macro"===a[1][0]&&Ab.Sg(a))return Ab.oh(d);d=String(d);for(var t=2;t<a.length;t++)Va[a[t]]&&(d=Va[a[t]](d));return d;case "tag":var q=a[1];if(!wb[q])throw Error("Unable to resolve tag reference "+q+".");return d={me:a[2],index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Ib(u,b,c),w=!!a[4];return w||
2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Ib=function(a,b,c){try{return zb(Gb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Jb=function(){var a=function(b){return{toString:function(){return b}}};return{cf:a("consent"),Jd:a("convert_case_to"),Kd:a("convert_false_to"),Ld:a("convert_null_to"),Md:a("convert_true_to"),Nd:a("convert_undefined_to"),Lh:a("debug_mode_metadata"),qa:a("function"),lf:a("instance_name"),rf:a("live_only"),tf:a("malware_disabled"),uf:a("metadata"),Nh:a("original_vendor_template_id"),yf:a("once_per_event"),Pd:a("once_per_load"),Td:a("setup_tags"),Ud:a("tag_id"),Vd:a("teardown_tags")}}();var Kb=null,Nb=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Kb=Lb(a);for(var e=0;e<ub.length;e++){var f=ub[e],h=Mb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var p=[],n=0;n<wb.length;n++)c[n]&&!d[n]&&(p[n]=!0);return p},Mb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Kb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Kb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Lb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Ib(vb[c],a));return b[c]}};var Ob={ng:function(a,b){b[Jb.Jd]&&"string"===typeof a&&(a=1==b[Jb.Jd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Jb.Ld)&&null===a&&(a=b[Jb.Ld]);b.hasOwnProperty(Jb.Nd)&&void 0===a&&(a=b[Jb.Nd]);b.hasOwnProperty(Jb.Md)&&!0===a&&(a=b[Jb.Md]);b.hasOwnProperty(Jb.Kd)&&!1===a&&(a=b[Jb.Kd]);return a}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var C={Ya:"_ee",Sc:"_syn",Qh:"_uei",Oh:"_pci",Bc:"event_callback",Nb:"event_timeout",ja:"gtag.config"};C.fa="allow_ad_personalization_signals";C.Qc="restricted_data_processing";C.fb="allow_google_signals";C.ba="cookie_expires";C.yc="cookie_update";C.vb="session_duration";C.ma="user_properties";C.Fa="transport_url";C.N="ads_data_redaction";C.o="ad_storage";
C.L="analytics_storage";C.bf="region";C.df="wait_for_update";C.Ue=[C.fa,C.fb,C.yc];C.Ve=[C.ba,C.Nb,C.vb];var nc={},oc=function(a,b){nc[a]=nc[a]||[];nc[a][b]=!0},pc=function(a){for(var b=[],c=nc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var qc=function(a){oc("GTM",a)};function rc(a){if(Error.captureStackTrace)Error.captureStackTrace(this,rc);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}pa(rc,Error);rc.prototype.name="CustomError";var sc=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");rc.call(this,d+c[e])};pa(sc,rc);sc.prototype.name="AssertionError";var tc=function(a,b){throw new sc("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var uc=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},vc=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var wc;var xc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var yc;a:{var zc=la.navigator;if(zc){var Ac=zc.userAgent;if(Ac){yc=Ac;break a}}yc=""}var Bc=function(a){return-1!=yc.indexOf(a)};var Dc=function(a,b,c){this.h=c===Cc?a:""};Dc.prototype.toString=function(){return"SafeHtml{"+this.h+"}"};var Ec=function(a){if(a instanceof Dc&&a.constructor===Dc)return a.h;var b=typeof a;tc("expected object of type SafeHtml, got '"+a+"' of type "+("object"!=b?b:a?Array.isArray(a)?"array":b:"null"));return"type_error:SafeHtml"},Cc={},Fc=new Dc(la.trustedTypes&&la.trustedTypes.emptyHTML||"",0,Cc);var Gc={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Hc=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=Ec(Fc);return!c.parentElement}),Jc=function(a,b){if(a.tagName&&Gc[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(Hc())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Ec(b)};var Kc=function(a){var b;if(void 0===wc){var c=null,d=la.trustedTypes;if(d&&d.createPolicy){try{c=d.createPolicy("goog#html",{createHTML:qa,createScript:qa,createScriptURL:qa})}catch(f){la.console&&la.console.error(f.message)}wc=c}else wc=c}var e=(b=wc)?b.createHTML(a):a;return new Dc(e,null,Cc)};var E=window,G=document,Lc=navigator,Mc=G.currentScript&&G.currentScript.src,Nc=function(a,b){var c=E[a];E[a]=void 0===c?b:c;return E[a]},Oc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Pc=function(a,b,c){var d=G.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Oc(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=la.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&na.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=G.getElementsByTagName("script")[0]||G.body||G.head;l.parentNode.insertBefore(d,l);return d},Qc=function(){if(Mc){var a=Mc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Rc=function(a,b){var c=G.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=G.body&&G.body.lastChild||
G.body||G.head;d.parentNode.insertBefore(c,d);Oc(c,b);void 0!==a&&(c.src=a);return c},Sc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Tc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Uc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},H=function(a){E.setTimeout(a,0)},Vc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Wc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Xc=function(a){var b=G.createElement("div");Jc(b,Kc("A<div>"+a+"</div>"));b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Yc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},Zc=function(a){Lc.sendBeacon&&Lc.sendBeacon(a)||Sc(a)},$c=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var ad={},bd=function(a){return void 0==ad[a]?!1:ad[a]};var cd=[];function dd(){var a=Nc("google_tag_data",{});a.ics||(a.ics={entries:{},set:ed,update:fd,addListener:gd,notifyListeners:hd,active:!1});return a.ics}
function ed(a,b,c,d,e,f){var h=dd();h.active=!0;if(void 0!=b){var k=h.entries,l=k[a]||{},p=l.region,n=c&&g(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(n===e||(n===d?p!==e:!n&&!p)){var r=!!(f&&0<f&&void 0===l.update),t={region:n,initial:"granted"===b,update:l.update,quiet:r};k[a]=t;r&&E.setTimeout(function(){k[a]===t&&t.quiet&&(t.quiet=!1,id(a),hd(),oc("TAGGING",2))},f)}}}
function fd(a,b){var c=dd();c.active=!0;if(void 0!=b){var d=jd(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var h=jd(a);f.quiet?(f.quiet=!1,id(a)):h!==d&&id(a)}}function gd(a,b){cd.push({fe:a,Bg:b})}function id(a){for(var b=0;b<cd.length;++b){var c=cd[b];wa(c.fe)&&-1!==c.fe.indexOf(a)&&(c.Ie=!0)}}function hd(a){for(var b=0;b<cd.length;++b){var c=cd[b];if(c.Ie){c.Ie=!1;try{c.Bg({ee:a})}catch(d){}}}}
var jd=function(a){var b=dd().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},kd=function(a){return!(dd().entries[a]||{}).quiet},ld=function(){return bd("gtag_cs_api")?dd().active:!1},md=function(a,b){dd().addListener(a,b)},nd=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!kd(b[e]))return!0;return!1}if(c()){var d=!1;md(b,function(e){d||c()||(d=!0,a(e))})}else a({})},od=function(a,b){if(!1===jd(b)){var c=!1;md([b],function(d){!c&&jd(b)&&(a(d),c=!0)})}};var pd=[C.o,C.L],qd=function(a){var b=a[C.bf];b&&qc(40);var c=a[C.df];c&&qc(41);for(var d=wa(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<pd.length;f++){var h=pd[f],k=a[pd[f]],l=d[e];dd().set(h,k,l,"US","US-WA",c)}},rd=function(a,b){for(var c=0;c<pd.length;c++){var d=pd[c],e=a[pd[c]];dd().update(d,e)}dd().notifyListeners(b)},sd=function(a){var b=jd(a);return void 0!=b?b:!0},td=function(){for(var a=[],b=0;b<pd.length;b++){var c=jd(pd[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},ud=function(a,b){nd(a,b)};var wd=function(a){return vd?G.querySelectorAll(a):null},xd=function(a,b){if(!vd)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!G.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},yd=!1;if(G.querySelectorAll)try{var zd=G.querySelectorAll(":root");zd&&1==zd.length&&zd[0]==G.documentElement&&(yd=!0)}catch(a){}var vd=yd;var Pd={},I=null,Qd=Math.random();Pd.B="GTM-MWPR6C";Pd.Sb="9g1";Pd.Mh="";var Rd={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Sd={__paused:!0,__tg:!0},Td;for(Td in Rd)Rd.hasOwnProperty(Td)&&(Sd[Td]=!0);var Ud="www.googletagmanager.com/gtm.js";
var Vd=Ud,Wd=Ea(""),Xd=null,Yd=null,Zd="//www.googletagmanager.com/a?id="+Pd.B+"&cv=221",$d={},ae={},be=function(){var a=I.sequence||1;I.sequence=a+1;return a};
var ce=function(){return"&tc="+wb.filter(function(a){return a}).length},fe=function(){2022<=de().length&&ee()},he=function(){ge||(ge=E.setTimeout(ee,500))},ee=function(){ge&&(E.clearTimeout(ge),ge=void 0);void 0===ie||je[ie]&&!ke&&!le||(me[ie]||ne.Ug()||0>=oe--?(qc(1),me[ie]=!0):(ne.vh(),Sc(de()),je[ie]=!0,pe=qe=re=le=ke=""))},de=function(){var a=ie;if(void 0===a)return"";var b=pc("GTM"),c=pc("TAGGING");return[se,je[a]?"":"&es=1",te[a],b?"&u="+b:"",c?"&ut="+c:"",ce(),ke,le,re?re:"",qe,pe,"&z=0"].join("")},
ue=function(){return[Zd,"&v=3&t=t","&pid="+za(),"&rv="+Pd.Sb].join("")},ve="0.005000">Math.random(),se=ue(),we=function(){se=ue()},je={},ke="",le="",pe="",qe="",re="",ie=void 0,te={},me={},ge=void 0,ne=function(a,b){var c=0,d=0;return{Ug:function(){if(c<a)return!1;Ha()-d>=b&&(c=0);return c>=a},vh:function(){Ha()-d>=b&&(c=0);c++;d=Ha()}}}(2,1E3),oe=1E3,xe=function(a,b){if(ve&&!me[a]&&ie!==a){ee();ie=a;pe=ke="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";te[a]="&e="+c+"&eid="+
a;he()}},ye=function(a,b,c){if(ve&&!me[a]&&b){a!==ie&&(ee(),ie=a);var d,e=String(b[Jb.qa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;ke=ke?ke+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(yb[h]?"1":"2")+d;pe=pe?pe+"."+k:"&ti="+k;he();fe()}},ze=function(a,b,c){if(ve&&!me[a]){a!==ie&&(ee(),ie=
a);var d=c+b;le=le?le+"."+d:"&epr="+d;he();fe()}},Ae=function(a,b,c){};var Be={},Ce=new Aa,De={},Ee={},He={name:"dataLayer",set:function(a,b){m(Na(a,b),De);Fe()},get:function(a){return Ge(a,2)},reset:function(){Ce=new Aa;De={};Fe()}},Ge=function(a,b){if(2!=b){var c=Ce.get(a);ve&&c!==Ie(a.split("."))&&qc(5);return c}return Ie(a.split("."))},Ie=function(a){for(var b=De,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b},Je=function(a,b){Ee.hasOwnProperty(a)||(Ce.set(a,b),m(Na(a,b),De),Fe())},Fe=function(a){Ca(Ee,function(b,c){Ce.set(b,
c);m(Na(b,void 0),De);m(Na(b,c),De);a&&delete Ee[b]})},Ke=function(a,b,c){Be[a]=Be[a]||{};var d=1!==c?Ie(b.split(".")):Ce.get(b);"array"===Qa(d)||"object"===Qa(d)?Be[a][b]=m(d):Be[a][b]=d},Le=function(a,b){if(Be[a])return Be[a][b]},Me=function(a,b){Be[a]&&delete Be[a][b]};var Pe={},Qe=function(a,b){if(E._gtmexpgrp&&E._gtmexpgrp.hasOwnProperty(a))return E._gtmexpgrp[a];void 0===Pe[a]&&(Pe[a]=Math.floor(Math.random()*b));return Pe[a]};var Re=/:[0-9]+$/,Se=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Ve=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Te(a.protocol)||Te(E.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:E.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||E.location.hostname).replace(Re,"").toLowerCase());return Ue(a,b,c,d,e)},Ue=function(a,b,c,d,e){var f,h=Te(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=We(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(Re,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||oc("TAGGING",
1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=xa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Se(f,e,void 0));break;case "extension":var p=a.pathname.split(".");f=1<p.length?p[p.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Te=function(a){return a?a.replace(":","").toLowerCase():""},We=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");
b=0>c?a.href:a.href.substr(0,c)}return b},Xe=function(a){var b=G.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||oc("TAGGING",1),c="/"+c);var d=b.hostname.replace(Re,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Ye=function(a){function b(p){var n=p.split("=")[0];return 0>d.indexOf(n)?p:n+"=0"}function c(p){return p.split("&").map(b).filter(function(n){return void 0!=n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),
e=Xe(a),f=a.split(/[?#]/)[0],h=e.search,k=e.hash;"?"===h[0]&&(h=h.substring(1));"#"===k[0]&&(k=k.substring(1));h=c(h);k=c(k);""!==h&&(h="?"+h);""!==k&&(k="#"+k);var l=""+f+h+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function Ze(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var af=function(a,b,c,d){return $e(d)?Ze(a,String(b||document.cookie),c):[]},df=function(a,b,c,d,e){if($e(e)){var f=bf(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=cf(f,function(h){return h.Xb},b);if(1===f.length)return f[0].id;f=cf(f,function(h){return h.Ab},c);return f[0]?f[0].id:void 0}}};function ef(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=af(b,f,!1,d).indexOf(c)}
var jf=function(a,b,c){function d(q,u,v){if(null==v)return delete h[u],q;h[u]=v;return q+"; "+u+"="+v}function e(q,u){if(null==u)return delete h[u],q;h[u]=!0;return q+"; "+u}if(!$e(c.Ha))return 2;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=ff(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.Zh);f=d(f,"samesite",
c.ei);c.fi&&(f=e(f,"secure"));var l=c.domain;if("auto"===l){for(var p=gf(),n=0;n<p.length;++n){var r="none"!==p[n]?p[n]:void 0,t=d(f,"domain",r);t=e(t,c.flags);if(!hf(r,c.path)&&ef(t,a,b,c.Ha))return 0}return 1}l&&"none"!==l&&(f=d(f,"domain",l));f=e(f,c.flags);return hf(l,c.path)?1:ef(f,a,b,c.Ha)?0:1},kf=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return jf(a,b,c)};
function cf(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function bf(a,b,c){for(var d=[],e=af(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),Xb:1*l[0]||1,Ab:1*l[1]||1}))}}return d}
var ff=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},lf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,mf=/(^|\.)doubleclick\.net$/i,hf=function(a,b){return mf.test(document.location.hostname)||"/"===b&&lf.test(a)},gf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;mf.test(e)||lf.test(e)||a.push("none");
return a},$e=function(a){if(!bd("gtag_cs_api")||!a||!ld())return!0;if(!kd(a))return!1;var b=jd(a);return null==b?!0:!!b};var nf=function(){for(var a=Lc.userAgent+(G.cookie||"")+(G.referrer||""),b=a.length,c=E.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ha()/1E3)].join(".")},qf=function(a,b,c,d,e){var f=of(b);return df(a,f,pf(c),d,e)},rf=function(a,b,c,d){var e=""+of(c),f=pf(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},of=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},pf=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function sf(a,b,c){var d,e=a.xb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ha())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var tf=["1"],uf={},yf=function(a){var b=vf(a.prefix);uf[b]||wf(b,a.path,a.domain)||(xf(b,nf(),a),wf(b,a.path,a.domain))};function xf(a,b,c){var d=rf(b,"1",c.domain,c.path),e=sf(c);e.Ha="ad_storage";kf(a,d,e)}function wf(a,b,c){var d=qf(a,b,c,tf,"ad_storage");d&&(uf[a]=d);return d}function vf(a){return(a||"_gcl")+"_au"};function zf(){for(var a=Af,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Bf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Af,Cf;function Df(a){Af=Af||Bf();Cf=Cf||zf();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,p=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(Af[l],Af[p],Af[n],Af[r])}return b.join("")}
function Ef(a){function b(l){for(;d<a.length;){var p=a.charAt(d++),n=Cf[p];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(p))throw Error("Unknown base64 encoding at char: "+p);}return l}Af=Af||Bf();Cf=Cf||zf();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Ff;var Jf=function(){var a=Gf,b=Hf,c=If(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Tc(G,"mousedown",d);Tc(G,"keyup",d);Tc(G,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Kf=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};If().decorators.push(f)},Lf=function(a,b,c){for(var d=If().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,p=a,n=!!h.sameHost;if(l&&(n||p!==G.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(p)){k=!0;break a}}else if(0<=p.indexOf(l[r])||n&&0<=l[r].indexOf(p)){k=!0;break a}k=!1}if(k){var t=h.placement;void 0==t&&(t=h.fragment?2:1);t===b&&Ka(e,h.callback())}}return e},If=function(){var a=Nc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Mf=/(.*?)\*(.*?)\*(.*)/,Nf=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Of=/^(?:www\.|m\.|amp\.)+/,Pf=/([^?#]+)(\?[^#]*)?(#.*)?/;function Qf(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Sf=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Df(String(d))))}var e=b.join("*");return["1",Rf(e),e].join("*")},Rf=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ff)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Ff=d;for(var l=4294967295,p=0;p<c.length;p++)l=l>>>8^Ff[(l^c.charCodeAt(p))&255];return((l^-1)>>>0).toString(36)},Uf=function(){return function(a){var b=Xe(E.location.href),c=b.search.replace("?",""),d=Se(c,"_gl",!0)||"";a.query=Tf(d)||{};var e=Ve(b,"fragment").match(Qf("_gl"));a.fragment=Tf(e&&e[3]||"")||{}}},Vf=function(a){var b=Uf(),c=If();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Ka(d,e.query),a&&Ka(d,e.fragment));return d},Tf=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Mf.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var p=h[2],n=0;n<b;++n)if(p===Rf(k,n)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=Ef(t[q+1]);return r}}}}catch(u){}};
function Wf(a,b,c,d){function e(n){var r=n,t=Qf(a).exec(r),q=r;if(t){var u=t[2],v=t[4];q=t[1];v&&(q=q+u+v)}n=q;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+p}d=void 0===d?!1:d;var f=Pf.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",p=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function Xf(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Lf(b,1,c),e=Lf(b,2,c),f=Lf(b,3,c);if(La(d)){var h=Sf(d);c?Yf("_gl",h,a):Zf("_gl",h,a,!1)}if(!c&&La(e)){var k=Sf(e);Zf("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var p=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Zf(p,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Yf(p,n,r);break a}}"string"==typeof r&&Wf(p,n,r,void 0)}}
function Zf(a,b,c,d){if(c.href){var e=Wf(a,b,c.href,void 0===d?!1:d);xc.test(e)&&(c.href=e)}}
function Yf(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=G.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var p=Wf(a,b,c.action);xc.test(p)&&(c.action=p)}}}
var Gf=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Xf(e,e.hostname)}}catch(h){}},Hf=function(a){try{if(a.action){var b=Ve(Xe(a.action),"host");Xf(a,b)}}catch(c){}},$f=function(a,b,c,d){Jf();Kf(a,b,"fragment"===c?2:1,!!d,!1)},ag=function(a,b){Jf();Kf(a,[Ue(E.location,"host",!0)],b,!0,!0)},bg=function(){var a=G.location.hostname,b=Nf.exec(G.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Of,""),l=e.replace(Of,""),p;if(!(p=k===l)){var n="."+l;p=k.substring(k.length-n.length,k.length)===n}return p},cg=function(a,b){return!1===a?!1:a||b||bg()};var dg=/^\w+$/,eg=/^[\w-]+$/,fg=/^~?[\w-]+$/,gg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},hg=function(){if(!bd("gtag_cs_api")||!ld())return!0;var a=jd("ad_storage");return null==a?!0:!!a},ig=function(a,b){kd("ad_storage")?hg()?a():od(a,"ad_storage"):b?oc("TAGGING",3):nd(function(){ig(a,!0)},["ad_storage"])},lg=function(a){var b=[];if(!G.cookie)return b;var c=af(a,G.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=jg(c[d]);e&&-1===xa(b,e)&&b.push(e)}return kg(b)};
function mg(a){return a&&"string"==typeof a&&a.match(dg)?a:"_gcl"}
var og=function(){var a=Xe(E.location.href),b=Ve(a,"query",!1,void 0,"gclid"),c=Ve(a,"query",!1,void 0,"gclsrc"),d=Ve(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Se(e,"gclid",void 0);c=c||Se(e,"gclsrc",void 0)}return ng(b,c,d)},ng=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(eg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":bd("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},qg=function(a){var b=og();ig(function(){pg(b,a)})};
function pg(a,b,c){function d(l,p){var n=rg(l,e);n&&kf(n,p,f)}b=b||{};var e=mg(b.prefix);c=c||Ha();var f=sf(b,c,!0);f.Ha="ad_storage";var h=Math.round(c/1E3),k=function(l){return["GCL",h,l].join(".")};a.aw&&(!0===b.ji?d("aw",k("~"+a.aw[0])):d("aw",k(a.aw[0])));a.dc&&d("dc",k(a.dc[0]));a.gf&&d("gf",k(a.gf[0]));a.ha&&d("ha",k(a.ha[0]));a.gp&&d("gp",k(a.gp[0]))}
var tg=function(a,b){var c=Vf(!0);ig(function(){for(var d=mg(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==gg[f]){var h=rg(f,d),k=c[h];if(k){var l=Math.min(sg(k),Ha()),p;b:{for(var n=l,r=af(h,G.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(sg(r[t])>n){p=!0;break b}p=!1}if(!p){var q=sf(b,l,!0);q.Ha="ad_storage";kf(h,k,q)}}}}pg(ng(c.gclid,c.gclsrc),b)})},rg=function(a,b){var c=gg[a];if(void 0!==c)return b+c},sg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function jg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var ug=function(a,b,c,d,e){if(wa(b)){var f=mg(e),h=function(){for(var k={},l=0;l<a.length;++l){var p=rg(a[l],f);if(p){var n=af(p,G.cookie,void 0,"ad_storage");n.length&&(k[p]=n.sort()[n.length-1])}}return k};ig(function(){$f(h,b,c,d)})}},kg=function(a){return a.filter(function(b){return fg.test(b)})},vg=function(a,b){for(var c=mg(b.prefix),d={},e=0;e<a.length;e++)gg[a[e]]&&(d[a[e]]=gg[a[e]]);ig(function(){Ca(d,function(f,h){var k=af(c+h,G.cookie,void 0,"ad_storage");if(k.length){var l=k[0],p=sg(l),
n={};n[f]=[jg(l)];pg(n,b,p)}})})};function wg(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var xg=function(){function a(e,f,h){h&&(e[f]=h)}var b=["aw","dc"];if(ld()){var c=og();if(wg(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);ag(function(){return d},3);ag(function(){var e={};return e._up="1",e},1)}}},yg=function(){var a;if(hg()){for(var b=[],c=G.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Cd:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].Cd]||(h[b[k].Cd]=[]),h[b[k].Cd].push({timestamp:l[1],Dg:l[2]}))}a=h}else a={};return a};var zg=/^\d+\.fls\.doubleclick\.net$/;function Ag(a,b){kd(C.o)?sd(C.o)?a():od(a,C.o):b?qc(42):ud(function(){Ag(a,!0)},[C.o])}function Bg(a){var b=Xe(E.location.href),c=Ve(b,"host",!1);if(c&&c.match(zg)){var d=Ve(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Cg(a,b,c){if("aw"==a||"dc"==a){var d=Bg("gcl"+a);if(d)return d.split(".")}var e=mg(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!sd(C.o)&&c,h;h=og()[a]||[];if(0<h.length)return f?["0"]:h}var k=rg(a,e);return k?lg(k):[]}
var Dg=function(a){var b=Bg("gac");if(b)return!sd(C.o)&&a?"0":decodeURIComponent(b);var c=yg(),d=[];Ca(c,function(e,f){for(var h=[],k=0;k<f.length;k++)h.push(f[k].Dg);h=kg(h);h.length&&d.push(e+":"+h.join(","))});return d.join(";")},Eg=function(a,b){var c=og().dc||[];Ag(function(){yf(b);var d=uf[vf(b.prefix)],e=!1;if(d&&0<c.length){var f=I.joined_au=I.joined_au||{},h=b.prefix||"_gcl";if(!f[h])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;Zc(l);e=f[h]=
!0}}null==a&&(a=e);if(a&&d){var p=vf(b.prefix),n=uf[p];n&&xf(p,n,b)}})};var Fg=/[A-Z]+/,Gg=/\s/,Hg=function(a){if(g(a)&&(a=Ga(a),!Gg.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Fg.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],C:d}}}}},Jg=function(a){for(var b={},c=0;c<a.length;++c){var d=Hg(a[c]);d&&(b[d.id]=d)}Ig(b);var e=[];Ca(b,function(f,h){e.push(h)});return e};
function Ig(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.C[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Kg=function(){var a=!1;return a};var Mg=function(a,b,c,d){return(2===Lg()||d||"http:"!=E.location.protocol?a:b)+c},Lg=function(){var a=Qc(),b;if(1===a)a:{var c=Vd;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=G.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var ah=function(a){return sd(C.o)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=Ye(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},bh=function(){var a;if(!(a=Wd)){var b;if(!0===E._gtmdgs)b=!0;else{var c=Lc&&Lc.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return 0;var d=Da("-1");return Qe(1,100)<=d?Qe(2,2):0};var ch=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),dh={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},eh={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},fh="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var hh=function(a){var b;b||(b=Ge("gtm.whitelist"));b&&qc(9);
var c=b&&Ma(Fa(b),dh),d;d||(d=Ge("gtm.blacklist"));d||(d=Ge("tagTypeBlacklist"))&&qc(3);d?qc(8):d=[];gh()&&(d=Fa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=xa(Fa(d),"google")&&qc(2);var e=d&&Ma(Fa(d),eh),f={};return function(h){var k=
h&&h[Jb.qa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=ae[k]||[],p=a(k,l);if(b){var n;if(n=p)a:{if(0>xa(c,k))if(l&&0<l.length)for(var r=0;r<l.length;r++){if(0>xa(c,l[r])){qc(11);n=!1;break a}}else{n=!1;break a}n=!0}p=n}var t=!1;if(d){var q=0<=xa(e,k);if(q)t=q;else{var u=Ba(e,l||[]);u&&qc(10);t=u}}var v=!p||t;v||!(0<=xa(l,"sandboxedScripts"))||c&&-1!==xa(c,"sandboxedScripts")||(v=Ba(e,fh));return f[k]=v}},gh=function(){return ch.test(E.location&&E.location.hostname)};var ih={active:!0,isAllowed:function(){return!0}},jh=function(a){var b=I.zones;return b?b.checkState(Pd.B,a):ih},kh=function(a){var b=I.zones;!b&&a&&(b=I.zones=a());return b};var lh=function(){};var mh=!1,nh=0,oh=[];function ph(a){if(!mh){var b=G.createEventObject,c="complete"==G.readyState,d="interactive"==G.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){mh=!0;for(var e=0;e<oh.length;e++)H(oh[e])}oh.push=function(){for(var f=0;f<arguments.length;f++)H(arguments[f]);return 0}}}function qh(){if(!mh&&140>nh){nh++;try{G.documentElement.doScroll("left"),ph()}catch(a){E.setTimeout(qh,50)}}}var rh=function(a){mh?a():oh.push(a)};var sh={},th={},uh=function(a,b,c,d){if(!th[a]||Sd[b]||"__zone"===b)return-1;var e={};Sa(d)&&(e=m(d,e));e.id=c;e.status="timeout";return th[a].tags.push(e)-1},vh=function(a,b,c,d){if(th[a]){var e=th[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function wh(a){for(var b=sh[a]||[],c=0;c<b.length;c++)b[c]();sh[a]={push:function(d){d(Pd.B,th[a])}}}
var zh=function(a,b,c){th[a]={tags:[]};ta(b)&&xh(a,b);c&&E.setTimeout(function(){return wh(a)},Number(c));return yh(a)},xh=function(a,b){sh[a]=sh[a]||[];sh[a].push(Ja(function(){return H(function(){b(Pd.B,th[a])})}))};function yh(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ja(function(){b++;d&&b>=c&&wh(a)})},Zf:function(){d=!0;b>=c&&wh(a)}}};var Ah=function(){function a(d){return!ua(d)||0>d?0:d}if(!I._li&&E.performance&&E.performance.timing){var b=E.performance.timing.navigationStart,c=ua(He.get("gtm.start"))?He.get("gtm.start"):0;I._li={cst:a(c-b),cbt:a(Yd-b)}}};var Eh={},Fh=function(){return E.GoogleAnalyticsObject&&E[E.GoogleAnalyticsObject]},Gh=!1;
var Hh=function(a){E.GoogleAnalyticsObject||(E.GoogleAnalyticsObject=a||"ga");var b=E.GoogleAnalyticsObject;if(E[b])E.hasOwnProperty(b)||qc(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);E[b]=c}Ah();return E[b]},Ih=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Fh();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Kh=function(a){},Jh=function(){return E.GoogleAnalyticsObject||"ga"},Lh=function(a,b){return function(){var c=Fh(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var h=f.get("hitPayload"),k=f.get("hitCallback"),l=0>h.indexOf("&tid="+b);l&&(f.set("hitPayload",h.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",h,!0),f.set("hitCallback",k,!0),f.set("_x_19",void 0,!0),e(f))})}}};function Qh(a,b,c,d){var e=wb[a],f=Rh(a,b,c,d);if(!f)return null;var h=Fb(e[Jb.Td],c,[]);if(h&&h.length){var k=h[0];f=Qh(k.index,{H:f,F:1===k.me?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Rh(a,b,c,d){function e(){if(f[Jb.tf])k();else{var w=Gb(f,c,[]);var A=uh(c.id,String(f[Jb.qa]),Number(f[Jb.Ud]),w[Jb.uf]),B=!1;w.vtp_gtmOnSuccess=function(){if(!B){B=!0;var F=Ha()-D;ye(c.id,wb[a],"5");vh(c.id,A,"success",
F);h()}};w.vtp_gtmOnFailure=function(){if(!B){B=!0;var F=Ha()-D;ye(c.id,wb[a],"6");vh(c.id,A,"failure",F);k()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;ye(c.id,f,"1");var z=function(){var F=Ha()-D;ye(c.id,f,"7");vh(c.id,A,"exception",F);B||(B=!0,k())};var D=Ha();try{Cb(w,c)}catch(F){z(F)}}}var f=wb[a],h=b.H,k=b.F,l=b.terminate;if(c.jd(f))return null;var p=Fb(f[Jb.Vd],c,[]);if(p&&p.length){var n=p[0],r=Qh(n.index,{H:h,F:k,terminate:l},c,d);if(!r)return null;h=r;k=2===n.me?l:r}if(f[Jb.Pd]||f[Jb.yf]){var t=f[Jb.Pd]?xb:c.Dh,q=h,u=k;if(!t[a]){e=Ja(e);
var v=Sh(a,t,e);h=v.H;k=v.F}return function(){t[a](q,u)}}return e}function Sh(a,b,c){var d=[],e=[];b[a]=Th(d,e,c);return{H:function(){b[a]=Uh;for(var f=0;f<d.length;f++)d[f]()},F:function(){b[a]=Vh;for(var f=0;f<e.length;f++)e[f]()}}}function Th(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Uh(a){a()}function Vh(a,b){b()};var Yh=function(a,b){for(var c=[],d=0;d<wb.length;d++)if(a.ya[d]){var e=wb[d];var f=b.add();try{var h=Qh(d,{H:f,F:f,terminate:f},a,d);h?c.push({Re:d,Je:Hb(e),yg:h}):(Wh(d,a),f())}catch(l){f()}}b.Zf();c.sort(Xh);for(var k=0;k<c.length;k++)c[k].yg();return 0<c.length};function Xh(a,b){var c,d=b.Je,e=a.Je;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Re,k=b.Re;f=h>k?1:h<k?-1:0}return f}
function Wh(a,b){if(!ve)return;var c=function(d){var e=b.jd(wb[d])?"3":"4",f=Fb(wb[d][Jb.Td],b,[]);f&&f.length&&c(f[0].index);ye(b.id,wb[d],e);var h=Fb(wb[d][Jb.Vd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Zh=!1,$h=function(a,b,c,d){if("gtm.js"==b){if(Zh)return!1;Zh=!0}var e=jh(a),f=!1;if(!e.active){var h=!0;if("gtm.js"===b){for(var k=0;k<wb.length;k++)if(Rd[String(wb[k][String(Jb.qa)])]){qc(50);break}}if(h)return!1}xe(a,b);var l=zh(a,c,d);Ke(a,"event",
1);Ke(a,"ecommerce",1);Ke(a,"gtm");var p={id:a,name:b,jd:hh(e.isAllowed),ya:[],Dh:[],Ae:function(){qc(6)},de:function(u){ve&&(Ta(u)||Ae(a,"input",u))}};p.ya=Nb(p);var t=Yh(p,l);"gtm.js"!==b&&"gtm.sync"!==b||Kh(Pd.B);if(!t)return t;for(var q=0;q<p.ya.length;q++)if(p.ya[q]&&wb[q]&&!Sd[String(wb[q][Jb.qa])])return!0;return!1};function ai(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Xe(""+c+b).href}}function bi(a,b){return ci()?ai(a,b):void 0}function ci(){var a=!1;return a};var di=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.H=function(){};this.F=function(){};this.eventId=void 0},ei=function(a){var b=new di;b.eventModel=a;return b},fi=function(a,b){a.targetConfig=b;return a},gi=function(a,b){a.containerConfig=b;return a},hi=function(a,b){a.h=b;return a},ii=function(a,b){a.globalConfig=b;return a},ji=function(a,b){a.H=b;return a},ki=function(a,b){a.F=b;return a};
di.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var li=function(a){function b(e){Ca(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ca(c,function(e){d.push(e)});return d};var mi;if(3===Pd.Sb.length)mi="g";else{var ni="G";mi=ni}
var oi={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:mi,OPT:"o"},pi=function(a){var b=Pd.B.split("-"),c=b[0].toUpperCase(),d=oi[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Pd.Sb.length){var h="w";f="2"+h}else f="";return f+d+Pd.Sb+e};var qi=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var ri=function(){return Bc("iPhone")&&!Bc("iPod")&&!Bc("iPad")};Bc("Opera");Bc("Trident")||Bc("MSIE");Bc("Edge");!Bc("Gecko")||-1!=yc.toLowerCase().indexOf("webkit")&&!Bc("Edge")||Bc("Trident")||Bc("MSIE")||Bc("Edge");-1!=yc.toLowerCase().indexOf("webkit")&&!Bc("Edge")&&Bc("Mobile");Bc("Macintosh");Bc("Windows");Bc("Linux")||Bc("CrOS");var si=la.navigator||null;si&&(si.appVersion||"").indexOf("X11");Bc("Android");ri();Bc("iPad");Bc("iPod");ri()||Bc("iPad")||Bc("iPod");yc.toLowerCase().indexOf("kaios");var ti=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(k){e=!1}if(e)return c;var f;a:{try{var h=c.parent;if(h&&h!=c){f=h;break a}}catch(k){}f=null}if(!(c=f))break}return null};var ui=function(){};var vi=function(a,b){this.i=a;this.h=null;this.I={};this.da=0;this.ka=void 0===b?500:b;this.m=null};ja(vi,ui);var xi=function(a){return"function"===typeof a.i.__tcfapi||null!=wi(a)};
vi.prototype.addEventListener=function(a){var b={},c=vc(function(){return a(b)}),d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.ka),e=function(f,h){clearTimeout(d);f?(b=f,b.internalErrorState=void 0!==b.tcString&&"string"!==typeof b.tcString||void 0!==b.gdprApplies&&"boolean"!==typeof b.gdprApplies||void 0!==b.listenerId&&"number"!==typeof b.listenerId||void 0!==b.addtlConsent&&"string"!==typeof b.addtlConsent?2:b.cmpStatus&&"error"!==b.cmpStatus?0:3,h&&0===b.internalErrorState||
(b.tcString="tcunavailable",h||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{yi(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),d=0),c()}};vi.prototype.removeEventListener=function(a){a&&a.listenerId&&yi(this,"removeEventListener",null,a.listenerId)};
var Ai=function(a,b,c){if(!a.purpose||!a.vendor)return!1;var d=zi(a.vendor.consents,void 0===c?"755":c);return d&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:d&&zi(a.purpose.consents,b)},Bi=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var h=e;if(0===h)return!1;var k=c;2===c?(k=0,2===h&&(k=1)):3===c&&(k=1,1===h&&(k=0));return 0===k?Ai(a,b,d):1===k?
a.purpose&&a.vendor?zi(a.purpose.legitimateInterests,b)&&zi(a.vendor.legitimateInterests,void 0===d?"755":d):!1:!0},zi=function(a,b){return!(!a||!a[b])},yi=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(wi(a)){Ci(a);var f=++a.da;a.I[f]=c;if(a.h){var h={};a.h.postMessage((h.__tcfapiCall={command:b,version:2,callId:f,parameter:d},h),"*")}}else c({},!1)},wi=function(a){if(a.h)return a.h;a.h=ti(a.i,"__tcfapiLocator");return a.h},Ci=function(a){a.m||
(a.m=function(b){try{var c,d;"string"===typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.I[c.callId](c.returnValue,c.success)}catch(e){}},qi(a.i,a.m))};var Di={1:0,3:0,4:0,7:3,9:3,10:3};function Ei(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var Fi=Ei("",550),Gi=Ei("",500);function Hi(){var a=I.tcf||{};return I.tcf=a}
var Ii=function(a,b){this.m=a;this.h=b;this.i=Ha();},Ji=function(a){},Ki=function(a){},Qi=function(){var a=Hi(),b=new vi(E,3E3),c=new Ii(b,a);if((Li()?!0===E.gtag_enable_tcf_support:!1!==E.gtag_enable_tcf_support)&&!a.active&&("function"===typeof E.__tcfapi||xi(b))){a.active=!0;a.Bb={};Mi();var d=setTimeout(function(){Ni(a);Oi(a);d=null},Gi);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Ni(a),Oi(a),Ji(c);else{var f;if(!1===e.gdprApplies)f=Pi(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var h={},k;for(k in Di)Di.hasOwnProperty(k)&&("1"===k?h["1"]=!1===e.gdprApplies||"error"===e.cmpStatus||0!==e.internalErrorState||"loaded"===e.cmpStatus&&("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus)?!1===e.gdprApplies||"tcunavailable"===e.tcString?!0:bd("tcf_restrictions")?Bi(e,"1",0):Ai(e,"1"):!1:h[k]=Bi(e,k,Di[k]));f=h}f&&(a.tcString=e.tcString||"tcempty",a.Bb=f,Oi(a),Ji(c))}}),
Ki(c)}catch(e){d&&(clearTimeout(d),d=null),Ni(a),Oi(a)}}};function Ni(a){a.type="e";a.tcString="tcunavailable";a.Bb=Pi()}function Mi(){var a={};qd((a.ad_storage="denied",a.wait_for_update=Fi,a))}var Li=function(){var a=!1;a=!0;return a};function Pi(){var a={},b;for(b in Di)Di.hasOwnProperty(b)&&(a[b]=!0);return a}function Oi(a){var b={};rd((b.ad_storage=a.Bb["1"]?"granted":"denied",b))}
var Ri=function(){var a=Hi();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Si=function(){var a=Hi();return a.active?a.tcString||"":""},Ti=function(a){if(!Di.hasOwnProperty(String(a)))return!0;var b=Hi();return b.active&&b.Bb?!!b.Bb[String(a)]:!0};function Ui(a,b,c){function d(r){var t;I.reported_gclid||(I.reported_gclid={});t=I.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var u=[],v=function(B,z){z&&u.push(B+"="+encodeURIComponent(z))},w="https://www.google.com";if(ld()){var y=sd(C.o);v("gcs",td());r&&v("gcu","1");v("rnd",n);if((!f||h&&"aw.ds"!==h)&&sd(C.o)){var x=lg("_gcl_aw");v("gclaw",x.join("."))}v("url",String(E.location).split(/[?#]/)[0]);v("dclid",Vi(b,k));!y&&b&&(w="https://pagead2.googlesyndication.com")}
v("gdpr_consent",Si());"1"===Vf(!1)._up&&v("gtm_up","1");v("gclid",Vi(b,f));v("gclsrc",h);v("gtm",pi(!c));var A=w+"/pagead/landing?"+u.join("&");Zc(A)}}var e=og(),f=e.gclid||"",h=e.gclsrc,k=e.dclid||"",l=!a&&(!f||h&&"aw.ds"!==h?!1:!0),p=ld();if(l||p){var n=""+nf();p?ud(function(){d();sd(C.o)||od(function(r){return d(!0,r.ee)},C.o)},[C.o]):d()}}function Vi(a,b){var c=a&&!sd(C.o);return b&&c?"0":b}var Wi=function(a){if(G.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!E.getComputedStyle)return!0;var c=E.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=E.getComputedStyle(d,
null))}return!1};
var Xi=function(){var a=G.body,b=G.documentElement||a&&a.parentElement,c,d;if(G.compatMode&&"BackCompat"!==G.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};qc(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Yi=function(a){var b=Xi(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var Zi=[],$i=!(!E.IntersectionObserver||!E.IntersectionObserverEntry),aj=function(a,b,c){for(var d=new E.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Zi.length;f++)if(!Zi[f])return Zi[f]=d,f;return Zi.push(d)-1},bj=function(a,b,c){function d(k,l){var p={top:0,bottom:0,right:0,left:0,width:0,height:0},n={boundingClientRect:k.getBoundingClientRect(),
intersectionRatio:l,intersectionRect:p,isIntersecting:0<l,rootBounds:p,target:k,time:Ha()};H(function(){return a(n)})}for(var e=[],f=[],h=0;h<b.length;h++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=Yi(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},cj=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if($i){var e=!1;H(function(){e||
bj(a,b,c)()});return aj(function(f){e=!0;for(var h={Wa:0};h.Wa<f.length;h={Wa:h.Wa},h.Wa++)H(function(k){return function(){return a(f[k.Wa])}}(h))},b,c)}return E.setInterval(bj(a,b,c),1E3)},dj=function(a){$i?0<=a&&a<Zi.length&&Zi[a]&&(Zi[a].disconnect(),Zi[a]=void 0):E.clearInterval(a)};var ej=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),fj=["SCRIPT","IMG","SVG","PATH"];function gj(a){var b;if(a===G.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var h=0;h<f.childElementCount;h++)if(f.children[h]===a){e=h+1;break a}e=-1}else e=1}d=gj(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
var hj=function(){var a=[],b=G.body;if(b)for(var c=b.querySelectorAll("*"),d=0;d<c.length;d++){var e=c[d];0<=fj.indexOf(e.tagName.toUpperCase())||0===e.childElementCount&&a.push(e)}for(var f=[],h=0;h<a.length;h++){var k=a[h],l=k.textContent;k.value&&(l=k.value);l&&l.match(ej)&&f.push(k)}for(var p=[],n=0;n<f.length;n++){var r=f[n];p.push({querySelector:gj(r),tagName:r.tagName,isVisible:!Wi(r),type:1})}return p};var Qj=function(){var a=!0;Ti(7)&&Ti(9)&&Ti(10)||(a=!1);var b=!0;b&&!Pj()&&(a=!1);return a},Pj=function(){var a=!0;Ti(3)&&Ti(4)||(a=!1);return a};function kk(){var a=I;return a.gcq=a.gcq||new lk}
var mk=function(a,b,c){kk().register(a,b,c)},nk=function(a,b,c,d){kk().push("event",[b,a],c,d)},ok=function(a,b){kk().push("config",[a],b)},pk=function(a,b,c){kk().push("get",[a,b],c)},qk={},rk=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.h=!1},sk=function(a,b,c,d,e){this.type=a;this.m=b;this.aa=c||"";this.h=d;this.i=e},lk=function(){this.m={};this.i={};this.h=[]},tk=function(a,b){var c=Hg(b);return a.m[c.containerId]=a.m[c.containerId]||new rk},
uk=function(a,b,c){if(b){var d=Hg(b);if(d&&1===tk(a,b).status){tk(a,b).status=2;var e={};ve&&(e.timeoutId=E.setTimeout(function(){qc(38);he()},3E3));a.push("require",[e],d.containerId);qk[d.containerId]=Ha();if(Kg()){}else{var h="/gtag/js?id="+
encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=E.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+h),l=bi(c,h)||k;Pc(l)}}}},vk=function(a,b,c,d){if(d.aa){var e=tk(a,d.aa),f=e.m;if(f){var h=m(c),k=m(e.targetConfig[d.aa]),l=m(e.containerConfig),p=m(e.i),n=m(a.i),r=Ge("gtm.uniqueEventId"),t=Hg(d.aa).prefix,q=ki(ji(ii(hi(gi(fi(ei(h),k),l),p),n),function(){ze(r,t,"2");}),function(){
ze(r,t,"3");});try{ze(r,t,"1");f(d.aa,b,d.m,q)}catch(u){ze(r,t,"4");}}}};
lk.prototype.register=function(a,b,c){if(3!==tk(this,a).status){tk(this,a).m=b;tk(this,a).status=3;c&&(tk(this,a).i=c);var d=Hg(a),e=qk[d.containerId];if(void 0!==e){var f=I[d.containerId].bootstrap,h=d.prefix.toUpperCase();I[d.containerId]._spx&&(h=h.toLowerCase());var k=Ge("gtm.uniqueEventId"),l=h,p=Ha()-f;if(ve&&!me[k]){k!==ie&&(ee(),ie=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(p);qe=qe?qe+","+n:"&cl="+n}delete qk[d.containerId]}this.flush()}};
lk.prototype.push=function(a,b,c,d){var e=Math.floor(Ha()/1E3);uk(this,c,b[0][C.Fa]||this.i[C.Fa]);this.h.push(new sk(a,e,c,b,d));d||this.flush()};
lk.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==tk(this,c.aa).status&&!a)return;ve&&E.clearTimeout(c.h[0].timeoutId);break;case "set":Ca(c.h[0],function(n,r){m(Na(n,r),b.i)});break;case "config":var d=c.h[0],e=!!d[C.Mb];delete d[C.Mb];var f=tk(this,c.aa),h=Hg(c.aa),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.aa]={});f.h&&e||vk(this,C.ja,d,c);f.h=!0;delete d[C.Ya];k?m(d,f.containerConfig):
m(d,f.targetConfig[c.aa]);break;case "event":vk(this,c.h[1],c.h[0],c);break;case "get":}this.h.shift()}};var wk=!1,xk=[];function yk(){if(!wk){wk=!0;for(var a=0;a<xk.length;a++)H(xk[a])}}var zk=function(a){wk?H(a):xk.push(a)};var Ak="HA GF G UA AW DC".split(" "),Bk=!1,Ck={},Dk=!1;function Ek(a,b){var c={event:a};b&&(c.eventModel=m(b),b[C.Bc]&&(c.eventCallback=b[C.Bc]),b[C.Nb]&&(c.eventTimeout=b[C.Nb]));return c}function Fk(){return Bk}
var Ik={config:function(a){},event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Sa(a[2])&&
void 0!=a[2])return;c=a[2]}var d=Ek(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return Dk=!0,Fk(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Sa(a[1])?b=m(a[1]):3==a.length&&g(a[1])&&(b={},Sa(a[2])||wa(a[2])?b[a[1]]=m(a[2]):b[a[1]]=a[2]);if(b){
b._clear=!0;return b}},consent:function(a){function b(){Fk()&&m(a[2],{subcommand:a[1]})}if(3===a.length){qc(39);var c=be(),d=a[1];"default"===d?(b(),qd(a[2])):"update"===d&&(b(),rd(a[2],c))}}};var Jk={policy:!0};var Kk=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Mk=function(a){var b=Lk(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var dl=function(a){if(cl(a))return a;this.h=a};dl.prototype.Ig=function(){return this.h};var cl=function(a){return!a||"object"!==Qa(a)||Sa(a)?!1:"getUntrustedUpdateValue"in a};dl.prototype.getUntrustedUpdateValue=dl.prototype.Ig;var el=[],fl=!1,gl=function(a){return E["dataLayer"].push(a)},hl=function(a){var b=I["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function il(a){var b=a._clear;Ca(a,function(f,h){"_clear"!==f&&(b&&Je(f,void 0),Je(f,h))});Xd||(Xd=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=be(),a["gtm.uniqueEventId"]=d,Je("gtm.uniqueEventId",d));var e=$h(a["gtm.uniqueEventId"],a.event,a.eventCallback,a.eventTimeout)?!0:!1;switch(c){case "gtm.init":qc(19),e&&qc(20)}return e}
function jl(){for(var a=!1;!fl&&0<el.length;){fl=!0;delete De.eventModel;Fe();var b=el.shift();if(null!=b){var c=cl(b);if(c){var d=b;b=cl(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Ge(h,1);if(wa(k)||Sa(k))k=m(k);Ee[h]=k}}try{if(ta(b))try{b.call(He)}catch(w){}else if(wa(b)){var l=
b;if(g(l[0])){var p=l[0].split("."),n=p.pop(),r=l.slice(1),t=Ge(p.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,r)}catch(w){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{var u=b;if(u.length&&g(u[0])){var v=Ik[u[0]];if(v&&(!c||!Jk[u[0]])){b=v(u);break a}}b=void 0}if(!b){fl=!1;continue}}a=il(b)||a}}finally{c&&Fe(!0)}}fl=!1}
return!a}function kl(){var a=jl();try{Kk(E["dataLayer"],Pd.B)}catch(b){}return a}
var ml=function(){var a=Nc("dataLayer",[]),b=Nc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};rh(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});zk(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<I.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new dl(arguments[f])}else e=[].slice.call(arguments,0);var h=c.apply(a,e);el.push.apply(el,e);if(300<
this.length)for(qc(4);300<this.length;)this.shift();var k="boolean"!==typeof h||h;return jl()&&k};var d=a.slice(0);el.push.apply(el,d);ll()&&H(kl)},ll=function(){var a=!0;return a};var nl={};nl.Ob=new String("undefined");
var ol=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===nl.Ob?b:a[d]);return c.join("")}};ol.prototype.toString=function(){return this.h("undefined")};ol.prototype.valueOf=ol.prototype.toString;nl.Gf=ol;nl.Pc={};nl.qg=function(a){return new ol(a)};var pl={};nl.wh=function(a,b){var c=be();pl[c]=[a,b];return c};nl.he=function(a){var b=a?0:1;return function(c){var d=pl[c];if(d&&"function"===typeof d[b])d[b]();pl[c]=void 0}};nl.Sg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};nl.oh=function(a){if(a===nl.Ob)return a;var b=be();nl.Pc[b]=a;return'google_tag_manager["'+Pd.B+'"].macro('+b+")"};nl.fh=function(a,b,c){a instanceof nl.Gf&&(a=a.h(nl.wh(b,c)),b=sa);return{gd:a,H:b}};var ql=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Vc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},rl=function(a){I.hasOwnProperty("autoEventsSettings")||(I.autoEventsSettings={});var b=I.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},sl=function(a,b,c){rl(a)[b]=c},tl=function(a,b,c,d){var e=rl(a),f=Ia(e,b,d);e[b]=c(f)},ul=function(a,b,c){var d=rl(a);return Ia(d,b,c)};var vl=["input","select","textarea"],wl=["button","hidden","image","reset","submit"],xl=function(a){var b=a.tagName.toLowerCase();return!ya(vl,function(c){return c===b})||"input"===b&&ya(wl,function(c){return c===a.type.toLowerCase()})?!1:!0},yl=function(a){return a.form?a.form.tagName?a.form:G.getElementById(a.form):Yc(a,["form"],100)},zl=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(xl(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var Al=!!E.MutationObserver,Bl=void 0,Cl=function(a){if(!Bl){var b=function(){var c=G.body;if(c)if(Al)(new MutationObserver(function(){for(var e=0;e<Bl.length;e++)H(Bl[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Tc(c,"DOMNodeInserted",function(){d||(d=!0,H(function(){d=!1;for(var e=0;e<Bl.length;e++)H(Bl[e])}))})}};Bl=[];G.body?b():H(b)}Bl.push(a)};var Ol=E.clearTimeout,Pl=E.setTimeout,K=function(a,b,c){if(Kg()){b&&H(b)}else return Pc(a,b,c)},Ql=function(){return new Date},Rl=function(){return E.location.href},Sl=function(a){return Ve(Xe(a),"fragment")},Tl=function(a){return We(Xe(a))},Ul=function(a,b){return Ge(a,b||2)},Vl=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=gl(a)):d=gl(a);return d},Wl=function(a,b){E[a]=b},P=function(a,b,c){b&&
(void 0===E[a]||c&&!E[a])&&(E[a]=b);return E[a]},Xl=function(a,b,c){return af(a,b,void 0===c?!0:!!c)},Yl=function(a,b,c){return 0===kf(a,b,c)},Zl=function(a,b){if(Kg()){b&&H(b)}else Rc(a,b)},$l=function(a){return!!ul(a,"init",!1)},am=function(a){sl(a,"init",!0)},bm=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Vd;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";K(Mg("https://","http://",c))},cm=function(a,
b){var c=a[b];return c},dm=function(a,b,c){ve&&(Ta(a)||Ae(c,b,a))};
var em=nl.fh;function Bm(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Cm=new Aa;function Dm(a,b){function c(h){var k=Xe(h),l=Ve(k,"protocol"),p=Ve(k,"host",!0),n=Ve(k,"port"),r=Ve(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,p,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Em(a){return Fm(a)?1:0}
function Fm(a){var b=a.arg0,c=a.arg1;if(a.any_of&&wa(c)){for(var d=0;d<c.length;d++){var e=m(a,{});m({arg1:c[d],any_of:void 0},e);if(Em(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var h=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var k=0;k<h.length;k++)if(b[h[k]]){f=b[h[k]](c);break a}}catch(q){}}f=!1}return f;case "_ew":return Bm(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=xa(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var n=a.ignore_case?"i":void 0;try{var r=String(c)+n,t=Cm.get(r);t||(t=new RegExp(c,n),Cm.set(r,t));p=t.test(b)}catch(q){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Dm(b,c)}return!1};var Gm={},Hm=encodeURI,Y=encodeURIComponent,Im=Sc;var Jm=function(a,b){if(!a)return!1;var c=Ve(Xe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Km=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Gm.Tg=function(){var a=!1;return a};function ko(){return E.gaGlobal=E.gaGlobal||{}}var lo=function(){var a=ko();a.hid=a.hid||za();return a.hid},mo=function(a,b){var c=ko();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var vo=window,wo=document,xo=function(a){var b=vo._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===vo["ga-disable-"+a])return!0;try{var c=vo.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Ze("AMP_TOKEN",String(wo.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return wo.getElementById("__gaOptOutExtension")?!0:!1};function Ao(a){delete a.eventModel[C.Ya];Co(a.eventModel)}
var Co=function(a){Ca(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[C.ma]||{};Ca(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Fo=function(a,b,c){nk(b,c,a)},Go=function(a,b,c){nk(b,c,a,!0)},Io=function(a,b){};
function Ho(a,b){}var Z={a:{}};Z.a.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.b="ctv";Z.__ctv.g=!0;Z.__ctv.priorityOverride=0})(function(){return"221"})}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=P("google_tag_manager");var d=c&&c.e&&c.e(b);dm(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();

Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.b="d";Z.__d.g=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=wd(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=G.getElementById(a.vtp_elementId);b&&(d?c=Vc(b,d):c=Wc(b));return Ga(String(b&&c))})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Le(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=Ul("gtm.referrer",1)||G.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Ve(Xe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Tl(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=ql(c,"gtm.click");Vl(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!$l("cl")){var c=P("document");Tc(c,"click",a,!0);am("cl")}H(b.vtp_gtmOnSuccess)})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return za(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Ul("gtm.url",1);c=c||Rl();var d=b[a("vtp_component")];if(!d||"URL"==d)return Tl(String(c));var e=Xe(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],p;h?wa(k)?p=k:p=String(k).replace(/\s+/g,
"").split(","):p=[String(k)];for(var n=0;n<p.length;n++){var r=Ve(e,"QUERY",void 0,void 0,p[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Ve(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Ul(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;dm(d,"v",a.vtp_gtmEventId);return d})}();
Z.a.tl=["google"],function(){function a(b){return function(){if(b.md&&b.od>=b.md)b.hd&&P("self").clearInterval(b.hd);else{b.od++;var c=Ql().getTime();Vl({event:b.P,"gtm.timerId":b.hd,"gtm.timerEventNumber":b.od,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.md,"gtm.timerStartTime":b.Qe,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Qe,"gtm.triggers":b.Gh})}}}(function(b){Z.__tl=b;Z.__tl.b="tl";Z.__tl.g=!0;Z.__tl.priorityOverride=0})(function(b){H(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{P:b.vtp_eventName,od:0,interval:Number(b.vtp_interval),md:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Gh:String(b.vtp_uniqueTriggerId||"0"),Qe:Ql().getTime()};c.hd=P("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.a.ua=["google"],function(){function a(n,r){if(ld()&&!d[n]){var t=function(){var q=Fh(),u="gtm"+be(),v=l(r),w={name:u};k(v,w,!0);q("create",n,w);q(function(){q.remove(u)})};od(t,C.L);od(t,C.o);d[n]=!0}}var b,c={},d={},e=function(n){ud(function(){p(n)},[C.L,C.o])},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0},h={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},k=function(n,r,t){var q=0;if(n)for(var u in n)if(n.hasOwnProperty(u)&&(t&&f[u]||!t&&void 0===f[u])){var v=h[u]?Ea(n[u]):n[u];"anonymizeIp"!=u||v||(v=void 0);r[u]=v;q++}return q},l=
function(n){var r={};n.vtp_gaSettings&&m(Km(n.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),r);m(Km(n.vtp_fieldsToSet,"fieldName","value"),r);sd(C.L)||(r.storage="none");sd(C.o)||(r.allowAdFeatures=!1,r.storeGac=!1);Qj()||(r.allowAdFeatures=!1);Pj()||(r.allowAdPersonalizationSignals=!1);n.vtp_transportUrl&&(r._x_19=n.vtp_transportUrl);return r},p=function(n){function r(ma,
R){void 0!==R&&D("set",ma,R)}var t={},q={},u={},v={};if(n.vtp_gaSettings){var w=n.vtp_gaSettings;m(Km(w.vtp_contentGroup,"index","group"),q);m(Km(w.vtp_dimension,"index","dimension"),u);m(Km(w.vtp_metric,"index","metric"),v);var y=m(w);y.vtp_fieldsToSet=void 0;y.vtp_contentGroup=void 0;y.vtp_dimension=void 0;y.vtp_metric=void 0;n=m(n,y)}m(Km(n.vtp_contentGroup,"index","group"),q);m(Km(n.vtp_dimension,"index","dimension"),u);m(Km(n.vtp_metric,"index","metric"),v);var x=l(n),A=Hh(n.vtp_functionName);
if(ta(A)){var B="",z="";n.vtp_setTrackerName&&"string"==typeof n.vtp_trackerName?""!==n.vtp_trackerName&&(z=n.vtp_trackerName,B=z+"."):(z="gtm"+be(),B=z+".");var D=function(ma){var R=[].slice.call(arguments,0);R[0]=B+R[0];A.apply(window,R)},F=function(ma,R){return void 0===R?R:ma(R)},J=function(ma,R){if(R)for(var Ua in R)R.hasOwnProperty(Ua)&&D("set",ma+Ua,R[Ua])},O=function(){},T={name:z};k(x,T,!0);var V=n.vtp_trackingId||t.trackingId;A("create",V,T);D("set","&gtm",pi(!0));ld()&&(D("set","&gcs",td()),a(V,n));x._x_19&&(null==Mc&&delete x._x_19,x._x_20&&!c[z]&&(c[z]=!0,A(Lh(z,String(x._x_20)))));n.vtp_enableRecaptcha&&
D("require","recaptcha","recaptcha.js");(function(ma,R){void 0!==n[R]&&D("set",ma,n[R])})("nonInteraction","vtp_nonInteraction");J("contentGroup",q);J("dimension",u);J("metric",v);var ra={};k(x,ra,!1)&&D("set",ra);var M;n.vtp_enableLinkId&&D("require","linkid","linkid.js");D("set","hitCallback",function(){var ma=x&&x.hitCallback;
ta(ma)&&ma();n.vtp_gtmOnSuccess()});if("TRACK_EVENT"==n.vtp_trackType){n.vtp_enableEcommerce&&(D("require","ec","ec.js"),O());var N={hitType:"event",eventCategory:String(n.vtp_eventCategory||t.category),eventAction:String(n.vtp_eventAction||t.action),eventLabel:F(String,n.vtp_eventLabel||t.label),eventValue:F(Da,n.vtp_eventValue||t.value)};k(M,N,!1);D("send",N);}else if("TRACK_SOCIAL"==
n.vtp_trackType){}else if("TRACK_TRANSACTION"==n.vtp_trackType){}else if("TRACK_TIMING"==n.vtp_trackType){}else if("DECORATE_LINK"==n.vtp_trackType){}else if("DECORATE_FORM"==n.vtp_trackType){}else if("TRACK_DATA"==n.vtp_trackType){}else{n.vtp_enableEcommerce&&(D("require","ec","ec.js"),O());if(n.vtp_doubleClick||"DISPLAY_FEATURES"==n.vtp_advertisingFeaturesType){var ka="_dc_gtm_"+String(n.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");D("require","displayfeatures",void 0,{cookieName:ka})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==n.vtp_advertisingFeaturesType){var kc="_dc_gtm_"+String(n.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","adfeatures",{cookieName:kc})}M?D("send","pageview",M):D("send","pageview");}if(!b){var Db=
n.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";n.vtp_useInternalVersion&&!n.vtp_useDebugVersion&&(Db="internal/"+Db);b=!0;var Ad=bi(x._x_19,"/analytics.js"),nb=Mg("https:","http:","//www.google-analytics.com/"+Db,x&&!!x.forceSSL);K("analytics.js"===Db&&Ad?Ad:nb,function(){var ma=Fh();ma&&ma.loaded||n.vtp_gtmOnFailure();},n.vtp_gtmOnFailure)}}else H(n.vtp_gtmOnFailure)};Z.__ua=e;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();




Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0;Z.__cid.priorityOverride=0})(function(){return Pd.B})}();


Z.a.aev=["google"],function(){function a(q,u){var v=Le(q,"gtm");if(v)return v[u]}function b(q,u,v,w){w||(w="element");var y=q+"."+u,x;if(n.hasOwnProperty(y))x=n[y];else{var A=a(q,w);if(A&&(x=v(A),n[y]=x,r.push(y),35<r.length)){var B=r.shift();delete n[B]}}return x}function c(q,u,v){var w=a(q,t[u]);return void 0!==w?w:v}function d(q,u){if(!q)return!1;var v=e(Rl());wa(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++)if(u[y]instanceof RegExp){if(u[y].test(q))return!1}else{var x=
u[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!Jm(q,w)}function e(q){p.test(q)||(q="http://"+q);return Ve(Xe(q),"HOST",!0)}function f(q,u,v){switch(q){case "SUBMIT_TEXT":return b(u,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return Vc(q,"value");case "button":return Wc(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var u=0,v=0;v<q.elements.length;v++)xl(q.elements[v])&&u++;return u}}function l(q,u,v){var w=a(q,"interactedFormField");return w&&Vc(w,u)||v}var p=/^https?:\/\//i,n={},r=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(q){var u=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||
v;case "TEXT":return b(u,w,Wc)||v;case "URL":var x;a:{var A=String(a(u,"elementUrl")||v||""),B=Xe(A),z=String(q.vtp_component||"URL");switch(z){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,q.vtp_affiliatedDomains);break a;default:x=Ve(B,z,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===q.vtp_attribute)D=c(u,w,v);else{var F=q.vtp_attribute,J=a(u,"element");D=J&&Vc(J,F)||v||""}return D;case "MD":var O=q.vtp_mdValue,T=b(u,"MD",Jl);return O&&T?Ml(T,O)||
v:T||v;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),u,v);default:var V=c(u,w,v);dm(V,"aev",q.vtp_gtmEventId);return V}})}();

Z.a.fsl=[],function(){function a(){var e=P("document"),f=c(),h=HTMLFormElement.prototype.submit;Tc(e,"click",function(k){var l=k.target;if(l&&(l=Yc(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Vc(l,"value")){var p;l.form?l.form.tagName?p=l.form:p=G.getElementById(l.form):p=Yc(l,["form"],100);p&&f.store(p,l)}},!1);Tc(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var p=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!p,r=f.get(l),t=!0;if(d(l,function(){if(t){var q;
r&&(q=e.createElement("input"),q.type="hidden",q.name=r.name,q.value=r.value,l.appendChild(q));h.call(l);q&&l.removeChild(q)}},p,n,r))t=!1;else return p||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),p=!0;d(k,function(){p&&h.call(k)},!1,l)&&(h.call(k),p=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(h){return ya(e,function(k){return k.form===
h})};return{store:function(h,k){var l=f(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=f(h);return k?k.button:null}}}function d(e,f,h,k,l){var p=ul("fsl",h?"nv.mwt":"mwt",0),n;n=h?ul("fsl","nv.ids",[]):ul("fsl","ids",[]);if(!n.length)return!0;var r=ql(e,"gtm.formSubmit",n),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);r["gtm.elementUrl"]=t;l&&(r["gtm.formSubmitElement"]=l);if(k&&p){if(!Vl(r,hl(f),p))return!1}else Vl(r,function(){},p||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.b=
"fsl";Z.__fsl.g=!0;Z.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var p=function(r){return Math.max(k,r)};tl("fsl","mwt",p,0);h||tl("fsl","nv.mwt",p,0)}var n=function(r){r.push(l);return r};tl("fsl","ids",n,[]);h||tl("fsl","nv.ids",n,[]);$l("fsl")||(a(),am("fsl"));H(e.vtp_gtmOnSuccess)})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Km(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;dm(d,"smm",a.vtp_gtmEventId);return d})}();




Z.a.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.b="hid";Z.__hid.g=!0;Z.__hid.priorityOverride=0})(function(){return nl.Ob})}();
Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var p=G.createElement("script");p.async=!1;p.type="text/javascript";p.id=k.id;p.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(p.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(p.src=n,Oc(p,l));d.insertBefore(p,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(t){H(h)}}}var c=function(d){if(G.body){var e=
d.vtp_gtmOnFailure,f=em(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.gd,k=f.H;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(G.body,Xc(h),k,e)()}else Pl(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();






Z.a.lcl=[],function(){function a(){var c=P("document"),d=0,e=function(f){var h=f.target;if(h&&3!==f.which&&!(f.Rg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;h=Yc(h,["a","area"],100);if(!h)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=ul("lcl",k?"nv.mwt":"mwt",0),p;p=k?ul("lcl","nv.ids",[]):ul("lcl","ids",[]);if(p.length){var n=ql(h,"gtm.linkClick",p);if(b(f,h,c)&&!k&&l&&h.href){var r=String(cm(h,"rel")||""),t=!!ya(r.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&qc(36);var q=P((cm(h,"target")||"_self").substring(1)),u=!0;if(Vl(n,hl(function(){var v;if(v=u&&q){var w;a:if(t){var y;try{y=new MouseEvent(f.type)}catch(x){if(!c.createEvent){w=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Rg=!0;f.target.dispatchEvent(y);w=!0}else w=!1;v=!w}v&&(q.location.href=cm(h,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Vl(n,function(){},l||2E3);return!0}}};Tc(c,"click",e,!1);Tc(c,"auxclick",e,!1)}function b(c,
d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=cm(d,"href"),h=f.indexOf("#"),k=cm(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=Tl(f),p=Tl(e.location);return l!==p}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;
var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(p){return Math.max(f,p)};tl("lcl","mwt",k,0);e||tl("lcl","nv.mwt",k,0)}var l=function(p){p.push(h);return p};tl("lcl","ids",l,[]);e||tl("lcl","nv.ids",l,[]);$l("lcl")||(a(),am("lcl"));H(c.vtp_gtmOnSuccess)})}();
Z.a.evl=["google"],function(){function a(){var f=Number(Ul("gtm.start"))||0;return Ql().getTime()-f}function b(f,h,k,l){function p(){if(!Wi(f.target)){h.has(d.Rb)||h.set(d.Rb,""+a());h.has(d.Cc)||h.set(d.Cc,""+a());var r=0;h.has(d.Tb)&&(r=Number(h.get(d.Tb)));r+=100;h.set(d.Tb,""+r);if(r>=k){var t=ql(f.target,"gtm.elementVisibility",[h.h]),q=Yi(f.target);t["gtm.visibleRatio"]=Math.round(1E3*q)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(h.get(d.Cc));t["gtm.visibleLastTime"]=Number(h.get(d.Rb));
Vl(t);l()}}}if(!h.has(d.Za)&&(0==k&&p(),!h.has(d.Na))){var n=P("self").setInterval(p,100);h.set(d.Za,n)}}function c(f){f.has(d.Za)&&(P("self").clearInterval(Number(f.get(d.Za))),f.i(d.Za))}var d={Za:"polling-id-",Cc:"first-on-screen-",Rb:"recent-on-screen-",Tb:"total-visible-time-",Na:"has-fired-"},e=function(f,h){this.element=f;this.h=h};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.h)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.h)};e.prototype.set=function(f,h){this.element.setAttribute("data-gtm-vis-"+f+this.h,h)};e.prototype.i=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.h)};(function(f){Z.__evl=f;Z.__evl.b="evl";Z.__evl.g=!0;Z.__evl.priorityOverride=0})(function(f){function h(){var y=!1,x=null;if("CSS"===l){try{x=wd(p)}catch(F){qc(46)}y=!!x&&v.length!=x.length}else if("ID"===l){var A=G.getElementById(p);A&&(x=[A],y=1!=v.length||v[0]!==A)}x||(x=[],y=0<v.length);if(y){for(var B=0;B<v.length;B++){var z=
new e(v[B],q);c(z)}v=[];for(var D=0;D<x.length;D++)v.push(x[D]);0<=w&&dj(w);0<v.length&&(w=cj(k,v,[t]))}}function k(y){var x=new e(y.target,q);y.intersectionRatio>=t?x.has(d.Na)||b(y,x,r,"ONCE"===u?function(){for(var A=0;A<v.length;A++){var B=new e(v[A],q);B.set(d.Na,"1");c(B)}dj(w);if(n&&Bl)for(var z=0;z<Bl.length;z++)Bl[z]===h&&Bl.splice(z,1)}:function(){x.set(d.Na,"1");c(x)}):(c(x),"MANY_PER_ELEMENT"===u&&x.has(d.Na)&&(x.i(d.Na),x.i(d.Tb)),x.i(d.Rb))}var l=f.vtp_selectorType,p;"ID"===l?p=String(f.vtp_elementId):
"CSS"===l&&(p=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,r=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,q=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],w=-1;h();n&&Cl(h);H(f.vtp_gtmOnSuccess)})}();


var Jo={};Jo.macro=function(a){if(nl.Pc.hasOwnProperty(a))return nl.Pc[a]},Jo.onHtmlSuccess=nl.he(!0),Jo.onHtmlFailure=nl.he(!1);Jo.dataLayer=He;Jo.callback=function(a){$d.hasOwnProperty(a)&&ta($d[a])&&$d[a]();delete $d[a]};function Ko(){I[Pd.B]=Jo;Ka(ae,Z.a);Ab=Ab||nl;Bb=Ob}
function Lo(){ad.gtm_3pds=!0;ad.gtag_cs_api=!0;I=E.google_tag_manager=E.google_tag_manager||{};Qi();if(I[Pd.B]){var a=I.zones;a&&a.unregisterChild(Pd.B);
}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)tb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)wb.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)vb.push(h[k]);for(var l=b.rules||[],p=0;p<l.length;p++){for(var n=l[p],r={},t=0;t<n.length;t++)r[n[t][0]]=Array.prototype.slice.call(n[t],1);ub.push(r)}yb=Z;zb=Em;Ko();ml();mh=!1;nh=0;if("interactive"==G.readyState&&!G.createEventObject||
"complete"==G.readyState)ph();else{Tc(G,"DOMContentLoaded",ph);Tc(G,"readystatechange",ph);if(G.createEventObject&&G.documentElement.doScroll){var q=!0;try{q=!E.frameElement}catch(y){}q&&qh()}Tc(E,"load",ph)}wk=!1;"complete"===G.readyState?yk():Tc(E,"load",yk);a:{
if(!ve)break a;E.setInterval(we,864E5);}Yd=(new Date).getTime();}}
(function(a){a()})(Lo);

})()
