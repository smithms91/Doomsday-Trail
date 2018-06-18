"use strict";

const secondComponent = {
    templateUrl: `../templates/prepper-stats.template.html`,
    controller: ["foodService", "$location", function(foodService, $location) {
        const vm = this;

    }]
}

angular.module("app").component("secondComponent", secondComponent);