(function () {
    "use strict";
    'use strict';
    
var app = angular.module('viewCustom', ['angularLoad']);
var applocal = angular.module('viewCustom', ['angularLoad']);



    /****************************************************************************************************/

        /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

        /*var app = angular.module('centralCustom', ['angularLoad']);*/

    /****************************************************************************************************/

});

/* Hide Other Institutions Holdings */ 

var app = angular.module('viewCustom', ['toggleInstitutions']);

app.component('prmAlmaMoreInstAfter', { template: '<toggle-institutions />' });

app.constant('showHideMoreInstOptions', {
        default_state: "hidden",
        show_label: "Show Summit Libraries",
        hide_label: "Hide Summit Libraries"
});
