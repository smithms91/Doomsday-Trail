"use strict";

const navComponent = {

    templateUrl: `../templates/nav.template.html`,
    controller: ["foodService", "$location", function(foodService, $location) {
        const vm = this;

        vm.resetGame = () => {
            console.log("yo");
            foodService.resetBag();
            foodService.resetLocation();
            foodService.resetCount();
            angular.element(document.body).removeAttr("style");
            angular.element(document.body).addClass("animate-background");
            // angular.element(document.body).style.backgroundImage("url:../img/linkhere.png");
        }

        vm.aboutGame = () => {
            if (vm.popup == true) {
                vm.popup = false;
            } else {
                vm.popup = true;
            }
        }

        vm.close = () => {
            vm.popup = false;
        }
    }]
}


angular.module("app").component("navComponent", navComponent);