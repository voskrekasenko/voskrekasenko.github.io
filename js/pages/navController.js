!function(){"use strict";function e(e){var t=document.querySelector(".hamburger");t.addEventListener("click",function(){t.classList.toggle("is-active")}),e.blured=!1,e.toggleBlur=function(){e.blured=!e.blured}}angular.module("app").controller("navController",e),e.$inject=["$scope","$state","$rootScope"]}();