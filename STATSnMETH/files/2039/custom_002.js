/*
* 
*	Orbis Cascade Alliance Central Package
*	Environment: Production
*	Last updated: 20191226
*	
*	Included customizations:
*		Hide/show Summit institutions (updated 20180701)
*		Insert custom action (updated 20181107)
*		Send SMS (updated 20181107)
*   Custom model window for peer-review and open access badges (updated 20191226)
*   Toggle advanced search in mobile display (updated 20181009)
*   Favorite signin warning (updated 20190702)
*   
*/




(function(){
  "use strict";
  'use strict';

  var app = angular.module('centralCustom', ['angularLoad']);

/* Custom action */
  
  angular.module('customActions', []);

/* eslint-disable max-len */
angular.module('customActions').component('customAction', {
    bindings: {
        name: '@',
        label: '@',
        icon: '@',
        iconSet: '@',
        link: '@',
        index: '<'
    },
    require: {
        prmActionCtrl: '^prmActionList'
    },
    controller: ['customActions', function (customActions) {
        var _this = this;

        this.$onInit = function () {
            _this.action = {
                name: _this.name,
                label: _this.label,
                index: _this.index,
                icon: {
                    icon: _this.icon,
                    iconSet: _this.iconSet,
                    type: 'svg'
                },
                onToggle: customActions.processLinkTemplate(_this.link, _this.prmActionCtrl.item)
            };
            customActions.removeAction(_this.action, _this.prmActionCtrl);
            customActions.addAction(_this.action, _this.prmActionCtrl);
        };

    }]
});

/* eslint-disable max-len */
angular.module('customActions').factory('customActions', function () {
    return {
        /**
         * Adds an action to the actions menu, including its icon.
         * @param  {object} action  action object
         * @param  {object} ctrl    instance of prmActionCtrl
         */
        // TODO coerce action.index to be <= requiredActionsList.length
        addAction: function addAction(action, ctrl) {
            if (!this.actionExists(action, ctrl)) {
                this.addActionIcon(action, ctrl);
                ctrl.actionListService.requiredActionsList.splice(action.index, 0, action.name);
                ctrl.actionListService.actionsToIndex[action.name] = action.index;
                ctrl.actionListService.onToggle[action.name] = action.onToggle;
                ctrl.actionListService.actionsToDisplay.unshift(action.name);
            }
        },
        /**
         * Removes an action from the actions menu, including its icon.
         * @param  {object} action  action object
         * @param  {object} ctrl    instance of prmActionCtrl
         */
        removeAction: function removeAction(action, ctrl) {
            if (this.actionExists(action, ctrl)) {
                this.removeActionIcon(action, ctrl);
                delete ctrl.actionListService.actionsToIndex[action.name];
                delete ctrl.actionListService.onToggle[action.name];
                var i = ctrl.actionListService.actionsToDisplay.indexOf(action.name);
                ctrl.actionListService.actionsToDisplay.splice(i, 1);
                i = ctrl.actionListService.requiredActionsList.indexOf(action.name);
                ctrl.actionListService.requiredActionsList.splice(i, 1);
            }
        },
        /**
         * Registers an action's icon.
         * Called internally by addAction().
         * @param  {object} action  action object
         * @param  {object} ctrl    instance of prmActionCtrl
         */
        addActionIcon: function addActionIcon(action, ctrl) {
            ctrl.actionLabelNamesMap[action.name] = action.label;
            ctrl.actionIconNamesMap[action.name] = action.name;
            ctrl.actionIcons[action.name] = action.icon;
        },
        /**
         * Deregisters an action's icon.
         * Called internally by removeAction().
         * @param  {object} action  action object
         * @param  {object} ctrl    instance of prmActionCtrl
         */
        removeActionIcon: function removeActionIcon(action, ctrl) {
            delete ctrl.actionLabelNamesMap[action.name];
            delete ctrl.actionIconNamesMap[action.name];
            delete ctrl.actionIcons[action.name];
        },
        /**
         * Check if an action exists.
         * Returns true if action is part of actionsToIndex.
         * @param  {object} action  action object
         * @param  {object} ctrl    instance of prmActionCtrl
         * @return {bool}
         */
        actionExists: function actionExists(action, ctrl) {
            return ctrl.actionListService.actionsToIndex.hasOwnProperty(action.name);
        },
        /**
         * Process a link into a function to call when the action is clicked.
         * The function will open the processed link in a new tab.
         * Will replace {pnx.xxx.xxx} expressions with properties from the item.
         * @param  {string}    link    the original link string from the html
         * @param  {object}    item    the item object obtained from the controller
         * @return {function}          function to call when the action is clicked
         */
        processLinkTemplate: function processLinkTemplate(link, item) {
            var processedLink = link;
            var pnxProperties = link.match(/\{(pnx\..*?)\}/g) || [];
            pnxProperties.forEach(function (property) {
                var value = property.replace(/[{}]/g, '').split('.').reduce(function (o, i) {
                    try {
                        var h = /(.*)(\[\d\])/.exec(i);
                        if (h instanceof Array) {
                            return o[h[1]][h[2].replace(/[^\d]/g, '')];
                        }
                        return o[i];
                    } catch (e) {
                        return '';
                    }
                }, item);
                processedLink = processedLink.replace(property, value);
            });
            return function () {
                return window.open(processedLink, '_blank');
            };
        }
    };
}); // Custom action

/* Send SMS */

angular.module('sendSms', ['ngMaterial', 'primo-explore.components', 'customActions']);

/* eslint-disable max-len */
angular.module('sendSms').component('ocaSendSms', {
    bindings: {
        item: '<',
        finishedSmsEvent: '&'
    },
    template: '\n  <div class="send-actions-content-item" layout="row">\n      <md-content layout-wrap layout-padding layout-fill>\n          <form name="smsForm" novalidate layout="column" layout-align="center center" (submit)="$ctrl.sendSms($event);">\n              <div layout="row" class="layout-full-width" layout-align="center center">\n                  <div flex="20" flex-sm="10" hide-xs></div>\n                  <div class="form-focus service-form" layout-padding flex>\n                      <div layout-margin>\n                          <div layout="column">\n                              <h4 class="md-subhead">Standard message and data rates may apply.</h4>\n                              <md-input-container class="underlined-input md-required"><label>Phone number:</label>\n                                  <input ng-model="$ctrl.phoneNumber" name="phoneNumber" type="text" required ng-pattern="::$ctrl.telRegEx">\n                                  <div ng-messages="smsForm.phoneNumber.$error">\n                                      <div ng-message="pattern, required ">phone number is invalid</div>\n                                  </div>\n                              </md-input-container>\n                              <md-input-container class="md-required"><label>Carrier:</label>\n                                <md-select ng-model="$ctrl.carrier" name="carrier" placeholder="Select a carrier" required>\n                                  <md-option ng-repeat="(carrier, address) in carriers" value="{{ address }}">\n                                    {{ carrier }}\n                                  </md-option>\n                                </md-select>\n                                <div ng-messages="smsForm.carrier.$error">\n                                    <div ng-message="required">please select a carrier</div>\n                                </div>\n                              </md-input-container>\n                              <md-input-container class="underlined-input" ng-if="$ctrl.isCaptcha">\n                                  <div vc-recaptcha key="$ctrl.getCaptchaPublicKey()" on-success="$ctrl.setResponse(response)"></div>\n                                  <span class="recaptcha-error-info" ng-show="smsForm.$submitted && (smsForm.recaptchaResponse.$invalid || smsForm.$error.recaptcha.length)">\n                                    <span translate="captcha.notselected"></span>\n                                  </span>\n                              </md-input-container>\n                          </div>\n                      </div>\n                  </div>\n                  <div flex="20" flex-sm="10" hide-xs></div>\n              </div>\n              <div layout="row">\n                  <div layout="row" layout-align="center" layout-fill>\n                      <md-button type="submit" class="button-with-icon button-large button-confirm" aria-label="Send the result by SMS">\n                          <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="send"></prm-icon><span translate="email.popup.link.send"></span></md-button>\n                  </div>\n              </div>\n          </form>\n      </md-content>\n  </div>\n  <prm-send-email ng-hide="true"></prm-send-email>\n  <oca-send-sms-after parent-ctrl="$ctrl"></oca-send-sms-after>',
    controller: ['$scope', 'smsOptions', function ($scope, smsOptions) {
        var _this = this;

        this.$onInit = function () {
            $scope.$watch('$$childTail.$ctrl', function (ctrl) {
                return _this.sendEmailService = ctrl.sendEmailService;
            });
            $scope.carriers = smsOptions.smsCarriers;
            _this.carrier = _this.phoneNumber = '';
            _this.telRegEx = /^\d{3}( |-)?\d{3}( |-)?\d{4}$/;
        };
        this.validate = function () {
            return _this.telRegEx.test(_this.phoneNumber) && _this.carrier;
        };
        this.isCaptcha = function () {
            return window.appConfig['system-configuration']['Activate Captcha [Y/N]'] == 'Y';
        };
        this.getCaptchaPublicKey = function () {
            return window.appConfig['system-configuration']['Public Captcha Key'];
        };
        this.setResponse = function (response) {
            return _this.gCaptchaResponse = response;
        };
        this.sendSms = function () {
            if (_this.validate()) {
                _this.sendEmailService.sendEmail([_this.phoneNumber + '@' + _this.carrier], // addresses
                '', // subject
                '', // note
                [_this.item], // items
                _this.gCaptchaResponse // captcha
                ).then(function (msg) {
                    return console.log('sms successfully sent', msg);
                }).catch(function (err) {
                    return console.error('sms sending failed', err);
                }).finally(function () {
                    return _this.finishedSmsEvent();
                });
            }
        };
    }]
}).run(['$templateCache', 'smsOptions', function ($templateCache, smsOptions) {
    $templateCache.put('components/search/actions/actionContainer/action-container.html', '\n  <oca-send-sms ng-if="($ctrl.actionName===\'' + smsOptions.smsAction.name + '\')" finished-sms-event="$ctrl.throwCloseTabsEvent()" item="::$ctrl.item"></oca-send-sms>\n  <prm-send-email ng-if="($ctrl.actionName===\'E-mail\')" (finished-email-event)="$ctrl.throwCloseTabsEvent()" [item]="::$ctrl.item" [toggleform]="::$ctrl.toggleActionCotent" [user]="::\'\'"></prm-send-email>\n  <prm-citation ng-if="($ctrl.actionName===\'Citation\')" [item]="::$ctrl.item" [on-toggle]="::$ctrl.onToggle"></prm-citation>\n  <prm-permalink ng-if="($ctrl.actionName===\'Permalink\')" [item]="::$ctrl.item" [on-toggle]="::$ctrl.onToggle"></prm-permalink>\n  <prm-print-item ng-if="($ctrl.actionName===\'Print\')" (close-tabs-event)="$ctrl.throwCloseTabsEvent()" [item]="::$ctrl.item" [on-toggle]="::$ctrl.onToggle"></prm-print-item>\n  <prm-endnote ng-if="($ctrl.actionName===\'EndNote\')" (close-tabs-event)="$ctrl.throwCloseTabsEvent()" [item]="::$ctrl.item" [on-toggle]="::$ctrl.onToggle"></prm-endnote>\n  <prm-easybib ng-if="($ctrl.actionName===\'EasyBib\')" (close-tabs-event)="$ctrl.throwCloseTabsEvent()" [item]="::$ctrl.item" [on-toggle]="::$ctrl.onToggle"></prm-easybib>\n  <prm-refworks ng-if="($ctrl.actionName===\'RefWorks\')" (close-tabs-event)="$ctrl.throwCloseTabsEvent()" [item]="::$ctrl.item" [on-toggle]="::$ctrl.onToggle"></prm-refworks>\n  <prm-export-ris ng-if="($ctrl.actionName===\'RISPushTo\')" [item]="::$ctrl.item" [on-toggle]="::$ctrl.onToggle"></prm-export-ris>\n  <prm-action-container-after parent-ctrl="$ctrl"></prm-action-container-after>');
}]);

/* eslint-disable max-len */
angular.module('sendSms').component('smsAction', {
    require: {
        prmActionCtrl: '^prmActionList'
    },
    controller: ['customActions', 'smsOptions', function (customActions, smsOptions) {
        var _this2 = this;

        this.$onInit = function () {
            customActions.removeAction(smsOptions.smsAction, _this2.prmActionCtrl);
            customActions.addAction(smsOptions.smsAction, _this2.prmActionCtrl);
        };
    }]
});

angular.module('sendSms').value('smsOptions', {
    smsAction: {
        name: 'send_sms',
        label: 'SMS',
        index: 9,
        icon: {
            icon: 'ic_smartphone_24px',
            iconSet: 'hardware',
            type: 'svg'
        }
    },
    smsCarriers: {
        'ATT': 'txt.att.net',
        'T-Mobile': 'tmomail.net',
        'Virgin': 'vmobl.com',
        'Sprint': 'messaging.sprintpcs.com',
        'Nextel': 'messaging.nextel.com',
        'Verizon': 'vtext.com',
        'Cricket': 'mms.mycricket.com',
        'Qwest': 'qwestmp.com',
        'Project Fi': 'msg.fi.google.com'
    }
}); /* Send SMS */

    /*
     * Toggle institutions (hide/show summit libraries)
     * https://github.com/alliance-pcsg/primo-explore-toggle-institutions
     */

angular
  .module('toggleInstitutions', [])
  .component('toggleInstitutions', {
      bindings: {
          startHidden: '<'
      },
      template: '<md-button class="md-raised" ng-click="$ctrl.toggleLibs()" id="summitButton" aria-controls="summitLinks" aria-expanded=false aria-label="Show/Hide Summit Libraries"> {{$ctrl.showLibs ? hide_label : show_label}} <span aria-hidden=true>{{$ctrl.showLibs ? "&laquo;" : "&raquo;"}}</span></md-button>',
      controller: ['$scope', 'showHideMoreInstOptions', function ($scope, showHideMoreInstOptions) {
          this.$onInit = function () {
              if (showHideMoreInstOptions.default_state == 'hidden') this.showLibs = this.startHidden === false ? true : false
              if (showHideMoreInstOptions.default_state == 'visible') this.showLibs = this.startHidden === false ? true : true
              this.button = angular.element(document.querySelector('prm-alma-more-inst-after button'))
              this.tabs = angular.element(document.querySelector('prm-alma-more-inst md-tabs'))
              this.tabs.attr('id', 'summitLinks')
              this.button.parent().after(this.tabs)
              if (!this.showLibs) this.tabs.addClass('hide')

              $scope.show_label = showHideMoreInstOptions.show_label;
              $scope.hide_label = showHideMoreInstOptions.hide_label;
          }
          this.toggleLibs = function () {
              this.showLibs = !this.showLibs
              this.tabs.hasClass('hide') ?
              this.tabs.removeClass('hide') && this.button.attr('aria-expanded', true) :
              this.tabs.addClass('hide') && this.button.attr('aria-expanded', false)
          }
      }]
  })
angular.module('toggleInstitutions').value('showHideMoreInstOptions', {
    default_state: 'hidden',
    show_label: 'Show Summit Libraries',
    hide_label: 'Hide Summit Libraries'
}); /* hide/show */

// Begin Badges modal module
angular
  .module('badgesModal', [])
  .component('badgesModal', {
    template: '<md-button ng-if="$ctrl.inBadges" ng-click="$ctrl.showBadgeInfo($event, $ctrl.view_code, $ctrl.infoFile)" class="badgeButton" aria-label="{{$ctrl.badgeTooltip}}"><md-tooltip>{{$ctrl.badgeTooltip}}</md-tooltip><md-icon md-svg-icon="{{$ctrl.infoIcon}}"></md-icon></md-button>',
    controller: function ($scope, $mdDialog, $location, badgeOptions) {
      
      // Badge types
      this.badgeTypes = [
        {
          definition: 'peer-reviewed',
          file: 'peer_review.html',
          options: badgeOptions.peer_review
        },
        {
          definition: 'open-access',
          file: 'open_access.html',
          options: badgeOptions.open_access
        }
      ];
      
      // Initialization
      this.$onInit = function () {
        this.view_code = $location.search().vid;
        this.infoIcon = badgeOptions.info_icon;
        this.inBadges = false;
        var icon_definition = $scope.$parent.$parent.$ctrl.iconDefinition;
        angular.forEach($scope.$ctrl.badgeTypes, function(badge) {
          if (icon_definition == badge.definition && badge.options.show_icon) {
            $scope.$ctrl.inBadges = true;
            $scope.$ctrl.badgeTooltip = badge.options.tooltip;
            $scope.$ctrl.infoFile = badge.file;
          }
        });
      }
      
      // Badge info dialog
      this.showBadgeInfo = function showBadgeInfo($event, view_code, info_file) {
        $mdDialog.show({
          templateUrl: 'custom/' + view_code + '/html/' + info_file,
          controller: badgeDialogController
        });
        function badgeDialogController($scope, $mdDialog) {
          $scope.closeBadgeInfo = function () {
            $mdDialog.hide();
          }
        }
        $event.stopPropagation();
      }
      
    }
  })
  .value('badgeOptions', {
    info_icon: 'primo-ui:help-circle-outline',
    peer_review: {
      show_icon: true,
      tooltip: 'What is peer review?'
    },
    open_access: {
      show_icon: true,
      tooltip: 'What is open access?'
    }
  });
  
// END Badges modal module
  

// Toggle Advanced Fields module
angular
.module('toggleAdvancedFields', [])
.component('toggleAdvancedFields', {
    template: '<md-button class="md-raised" ng-click="$ctrl.toggleFields()" id="advancedFieldsButton" aria-controls="advancedFields" aria-expanded=false aria-label="Show/Hide Advanced Fields">{{$ctrl.advancedFieldsButtonLabel}}</md-button>',
    controller: function ($scope, $window, advancedFieldsOptions) {
        this.$onInit = function () {

            // Declare button and field variables
            this.button = angular.element(document.getElementById('advancedFieldsButton'));
            this.fields = angular.element(document.querySelector('prm-advanced-search md-card:nth-child(2)'));
            this.fields.attr('id', 'advancedFields');

            // Show/hide button and fields on initialization and window resize
            this.setInitDisplay();
            if (advancedFieldsOptions.show_button_for == 'mobile') {
                angular.element($window).bind('resize', function () {
                    $scope.$ctrl.setInitDisplay();
                });
            }

        }

        // Set initial display of button and fields based on default options and window size
        this.setInitDisplay = function () {
            if (advancedFieldsOptions.show_button_for == 'all' || $window.innerWidth < 600) {
                this.showHideFields('hide');
                this.button.removeClass('hide');
            }
            else {
                this.showHideFields('show');
                this.button.addClass('hide');
            }
        }

        // Toggle fields on button click
        this.toggleFields = function () {
            this.fields.hasClass('hide') ? this.showHideFields('show') : this.showHideFields('hide');
        }

        // Show or hide fields
        this.showHideFields = function (show_hide) {
            switch (show_hide) {
                case 'show':
                    this.fields.removeClass('hide');
                    this.advancedFieldsButtonLabel = advancedFieldsOptions.hide_label;
                    this.button.attr('aria-expanded', true);
                    break;
                case 'hide':
                    this.fields.addClass('hide');
                    this.advancedFieldsButtonLabel = advancedFieldsOptions.show_label;
                    this.button.attr('aria-expanded', false);
                    break;
            }
        }

    }
});
    // Set default values for toggleAdvancedFields module
    // show_button_for can be 'mobile' or 'all'
angular.module('toggleAdvancedFields').value('advancedFieldsOptions', {
    show_button_for: 'mobile',
    show_label: 'Show Additional Fields',
    hide_label: 'Hide Additional Fields'
});  /* toggle advanced fields */

    //Favorites Warning module
angular
.module('showFavoritesWarning', [])
.run(["$rootScope", function ($rootScope) {
    $rootScope.view = false;
}])
.value('globalFavVars', {
    favWarnBarTxt: 'Sign in to make your favorites list permanent',
    favWarnModalTitleText: 'Sign in to make your favorites list permanent',
    favWarnModalHoverText: 'Add to my favorites',
    favWarnModalContentText: 'You can create a favorites list as a Guest, but to save a list permanently you must be signed in.',
})
.controller('prmFavoritesToolBarAfterCtrl', function ($scope, $rootScope, favSession, globalFavVars) {
    $scope.favWarning = favSession.getData();
    /*Upon initialization of the app the favSession value will be null, so we need to give it a value
	based on global variables set by the institution in their custom.js file*/
    if ($scope.favWarning === null) {
        favSession.setData('true');
        $scope.favWarning = favSession.getData();
    }
    /*Use the favWarningOnClick function to stop favorites warnings from appearing when dismiss button is clicked*/
    $scope.favWarningOnClick = function () {
        favSession.setData('false');
        $scope.favWarning = favSession.getData();
        $rootScope.view = false;
    };
    /*If the user is a guest then the isLoggedIn variable is set to 'false'*/
    let rootScope = $scope.$root;
    let uSMS = rootScope.$$childHead.$ctrl.userSessionManagerService;
    let jwtData = uSMS.jwtUtilService.getDecodedToken();
    if (jwtData.userGroup === "GUEST") {
        $scope.isLoggedIn = 'false';
    }
    else {
        $scope.isLoggedIn = 'true';
    }
    /*Set the rootScope view variable depending on session data and if the user is logged in*/
    if ($scope.favWarning === 'true' && $scope.isLoggedIn === 'false') {
        $rootScope.view = true;
    }
    $scope.favWarningBarText = globalFavVars.favWarnBarTxt;  //Variable for storing institution's custom text to display in warning bar
})
.factory("favSession", function ($window, $rootScope) {
    angular.element($window).on('storage', function (event) {
        if (event.key === 'showFavWarning') {
            $rootScope.$apply();
        }
    });
    /*Functions for setting and getting session data*/
    return {
        setData: function (val) {
            $window.sessionStorage && $window.sessionStorage.setItem('showFavWarning', val);
            return this;
        },
        getData: function () {
            return $window.sessionStorage && $window.sessionStorage.getItem('showFavWarning');
        }
    };
})
.component('showFavoritesWarning', {
    bindings: {},
    controller: 'prmFavoritesToolBarAfterCtrl',
    template: '<div ng-controller="prmFavoritesToolBarAfterCtrl" id="fav-bar" ng-show="$root.view" class="bar alert-bar">' +
					'<p style="text-align: center; padding:.4em">' +
					'<span id="fav-bar-text" ng-bind-html="favWarningBarText"></span>' +
					'<prm-authentication [is-logged-in]="$ctrl.userName().length > 0">' +
						'<button class="button-with-icon zero-margin md-button md-primoExplore-theme md-ink-ripple" type="button" ng-transclude="">' +
							'<prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="sign-in">' +
								'<md-icon md-svg-icon="primo-ui:sign-in" alt="" class="md-primoExplore-theme" aria-hidden="true"></md-icon>' +
							'</prm-icon>' +
							'<span translate="eshelf.signin.title">Sign in</span>' +
						'</button>' +
					'</prm-authentication>' +
					'<button class="dismiss-alert-button zero-margin md-button md-primoExplore-theme md-ink-ripple button-with-icon" ng-click="favWarningOnClick()">' +
						'<prm-icon icon-type="svg" svg-icon-set="navigation" icon-definition="ic_close_24px">' +
							'<md-icon md-svg-icon="navigation:ic_close_24px" alt="" class="md-primoExplore-theme" aria-hidden="true"></md-icon>' +
						'</prm-icon>' +
						'DISMISS' +
					'</button>' +
					'</p>' +
				'</div>'
})
.controller('prmSaveToFavoritesButtonAfterCtrl', function ($scope, $mdDialog, $rootScope, favSession, globalFavVars) {
    $scope.status = ' ';
    $scope.customFullscreen = false;
    $scope.favWarning = favSession.getData();  //Pull session data to determine if favorites warning modal should be displayed
    /*Upon initialization of the app the favSession value will be null, so we need to give it a value
	based on global variables set by the institution in their custom.js file*/
    if ($scope.favWarning === null) {

        favSession.setData('true');
        $scope.favWarning = favSession.getData();
    }
    /*If the user is a guest then the isLoggedIn variable is set to 'false'*/
    let rootScope = $scope.$root;
    let uSMS = rootScope.$$childHead.$ctrl.userSessionManagerService;
    let jwtData = uSMS.jwtUtilService.getDecodedToken();
    if (jwtData.userGroup === "GUEST") {
        $scope.isLoggedIn = 'false';
    }
    else {
        $scope.isLoggedIn = 'true';
    }
    /*Set the rootScope view variable depending on session data, if the user is logged in*/
    if ($scope.favWarning === 'true' && $scope.isLoggedIn === 'false') {
        $rootScope.view = true;
    }

    $scope.favWarnModalHoverDisplay = globalFavVars.favWarnModalHoverText;

    $scope.favWarningOnClick = function () {
        favSession.setData('false');
        $scope.favWarning = favSession.getData();
        $rootScope.view = false;
    };
    /*Function to display favorites warning modal when favorites icon is clicked*/
    $scope.showFavWarningModal = function (ev) {
        $mdDialog.show({
            template: '<md-dialog>' +
                           '<md-dialog-content>' +
                               '<md-toolbar id="fav-modal-header">' +
                                   '<div class="md-toolbar-tools">' +
                                       '<h2 class="flex"><p id="fav-modal-header-text" ng-bind-html="favWarnModalTitleDisplay"></p></h2>' +
                                   '</div>' +
                               '</md-toolbar>' +
                               '<div id="fav-modal-content" class="md-dialog-content">' +
                                   '<p id="fav-modal-content-text" ng-bind-html="favWarnModalContentDisplay"></p>' +
                                   '<p style="text-align: center">' +
                                       '<prm-authentication>' +
                                           '<button class="button-with-icon zero-margin md-button md-primoExplore-theme md-ink-ripple" type="button" ng-transclude="">' +
                                               '<prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="sign-in">' +
                                                   '<md-icon md-svg-icon="primo-ui:sign-in" alt="" class="md-primoExplore-theme" aria-hidden="true"></md-icon>' +
                                               '</prm-icon>' +
                                               '<span translate="eshelf.signin.title">Sign in</span>' +
                                           '</button>' +
                                       '</prm-authentication>' +
                                       '<button class="dismiss-alert-button zero-margin md-button md-primoExplore-theme md-ink-ripple button-with-icon" ng-click="favModalClose(); favWarningOnClick()">' +
                                           '<prm-icon icon-type="svg" svg-icon-set="navigation" icon-definition="ic_close_24px">' +
                                               '<md-icon md-svg-icon="navigation:ic_close_24px" alt="" class="md-primoExplore-theme" aria-hidden="true"></md-icon>' +
                                           '</prm-icon>' +
                                           'DISMISS' +
                                       '</button></p>' +
                               '</div>' +
                           '</md-dialog-content>' +
                       '</md-dialog>',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen,
            controller: function favModalDialogCtrl($scope, $mdDialog, $state, favSession, globalFavVars) {
                $scope.favModalClose = function () {
                    $mdDialog.hide();
                }
                $scope.favWarnModalTitleDisplay = globalFavVars.favWarnModalTitleText;
                $scope.favWarnModalContentDisplay = globalFavVars.favWarnModalContentText;
            }
        })
    };
})
.component('favOverlay', {  //This component is an element that sits over the favorites icon when the modal warning functionality is enabled.
    controller: 'prmSaveToFavoritesButtonAfterCtrl',
    template: '<div>' +
				'<md-tooltip md-delay="400"><p ng-bind-html="favWarnModalHoverDisplay"></p></md-tooltip>' +
				'<button class="md-icon-button custom-button pin-button md-button md-primoExplore-theme md-ink-ripple pinned" style="margin-top: -40px; position: absolute; cursor: pointer"  ng-disabled="$ctrl.isFavoritesDisabled()" ng-show="$root.view" ng-click="showFavWarningModal($event); favWarningOnClick()">' +
					'<prm-icon class="rotate-25" icon-type="svg" svg-icon-set="primo-ui" icon-definition="prm_pin">' +
						'<md-icon md-svg-icon="primo-ui:prm_pin" alt="" class="md-primoExplore-theme" aria-hidden="true">' +
							'<svg id="prm_pin" width="100%" height="100%" viewBox="0 0 24 24" y="0" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">' +
								'<path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z"></path>' +
							'</svg>' +
						'</md-icon>' +
					'</prm-icon>' +
				'</button>' +
			'</div>'
});

// End Favorites signin warning 

})();