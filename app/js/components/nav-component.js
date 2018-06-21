"use strict";

const navComponent = {
    templateUrl: `../templates/nav.template.html`,
    controller: ["foodService", "$location", function(foodService, $location) {
        const vm = this;

        vm.resetGame = () => {
            foodService.resetCount();
            foodService.resetBag();
        }

    }]
}


angular.module("app").component("navComponent", navComponent);