"use strict";

const aboutComponent = {
    templateUrl: `../templates/about.template.html`,
    controller: ["foodService", "$location", function(foodService, $location) {
        const vm = this;

    }]
}


angular.module("app").component("aboutComponent", aboutComponent);