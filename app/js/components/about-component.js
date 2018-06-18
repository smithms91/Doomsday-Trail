"use strict";

const aboutComponent = {
    templateUrl: `../templates/nav.template.html`,
    controller: ["foodService", "$location", function(foodService, $location) {
        const vm = this;



    }]
}


angular.module("app").component("aboutComponent", aboutComponent);