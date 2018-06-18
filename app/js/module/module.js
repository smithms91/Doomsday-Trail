"use strict";

angular
  .module("app", ["ngRoute"])
  .config(($routeProvider) => {
    $routeProvider
      .when("/main-component", {
        template: `<main-component></main-component>`
      })
      .when("/second-component", {
        template: `<second-component></second-component>`
      })
      .otherwise({ redirectTo: "/main-component"});
  });