!function(){"use strict";angular.module("app",["ui.router"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(t,e,l){l.html5Mode(!0),e.otherwise("/"),t.state("layout",{"abstract":!1,templateUrl:"html/pages/layout.html",controller:"navController"}).state("layout.home",{url:"/",templateUrl:"html/pages/home/home.html",controller:"homeCtrl"}).state("layout.services",{url:"/services",templateUrl:"html/pages/services/services.html",controller:("servicesCtrl",["$scope",function(t){t.$parent.flag="services",t.$parent.footer=!0,t.$parent.logo=!0}])}).state("layout.nodejs",{url:"/nodejs",templateUrl:"html/pages/nodejs/nodejs.html",controller:("nodejsCtrl",["$scope",function(t){t.$parent.flag="nodejs",t.$parent.footer=!0,t.$parent.logo=!0}])}).state("layout.capabilities",{url:"/capabilities",templateUrl:"html/pages/capabilities/capabilities.html",controller:"capabilitiesCtrl"}).state("layout.works",{url:"/works",templateUrl:"html/pages/works/works.html",controller:("worksCtrl",["$scope",function(t){t.$parent.flag="works",t.$parent.footer=!0,t.$parent.logo=!0}])}).state("layout.contact",{url:"/contact",templateUrl:"html/pages/contact/contact.html",controller:"contactCtrl"})}])}();