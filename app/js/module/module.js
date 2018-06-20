"use strict";

angular
  .module("app", ["ngRoute"])
  .config(($routeProvider) => {
    $routeProvider
      .when("/landing-page-component", {
        template: `<landing-page-component></landing-page-component>`
      })
      .when("/prepper-stats-component", {
        template: `<prepper-stats-component></prepper-stats-component>`
      })
      .when("/location-component", {
        template: `<location-component></location-component>`
      })
      .otherwise({ redirectTo: "/landing-page-component"});
  });

  //"ui.bootstrap"