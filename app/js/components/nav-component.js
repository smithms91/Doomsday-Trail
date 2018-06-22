"use strict";

const navComponent = {
    templateUrl: `../templates/nav.template.html`,
    controller: ["foodService", "$location", function(foodService, $location) {
        const vm = this;

        vm.resetGame = () => {
            clearTimeout(pageTimeout);
            foodService.resetCount();
            foodService.resetBag();
            angular.element(document.body).addClass("animate-background");
        }
    }]
}


angular.module("app").component("navComponent", navComponent);