!function(){"use strict";function e(e){var o=document.querySelector(".hamburger");o.addEventListener("click",function(){e.blured=!1,o.classList.toggle("is-active")&&(e.blured=!0)}),e.$on("$stateChangeSuccess",function(){document.body.scrollTop=document.documentElement.scrollTop=0})}angular.module("app").controller("navController",e),e.$inject=["$scope","$state","$rootScope"]}();