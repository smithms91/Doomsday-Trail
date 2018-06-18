"use strict";

const navComponent = {
    templateUrl: `../templates/nav.template.html`,
    controller: ["foodService", "$location", function(foodService, $location) {
        const vm = this;



    }]
}


angular.module("app").component("navComponent", navComponent);