"use strict";

angular
  .module("app", ["ngRoute"])
  .config(($routeProvider) => {
    $routeProvider
      .when("/", {
        template: `<main-component></main-component>`
      })
      .otherwise({ redirectTo: "/main-component"});
  });