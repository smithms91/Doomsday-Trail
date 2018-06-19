"use strict";

angular
  .module("app", ["ngRoute"])
  .config(($routeProvider) => {
    $routeProvider
      .when("/main-component", {
        template: `<main-component></main-component>`
      })
      .when("/prepper-stats-component", {
        template: `<prepper-stats-component></prepper-stats-component>`
      })
      .otherwise({ redirectTo: "/main-component"});
  });

  //"ui.bootstrap"