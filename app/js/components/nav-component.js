"use strict";

const navComponent = {

    templateUrl: `../templates/nav.template.html`,
    controller: ["foodService", "$location", function(foodService, $location) {
        const vm = this;

        vm.resetGame = () => {
            console.log("yo");
            foodService.resetCount();
            foodService.resetBag();
            angular.element(document.body).removeAttr("style");
            angular.element(document.body).addClass("animate-background");
            // angular.element(document.body).style.backgroundImage("url:'../img/linkhere.png'");
        }
    }]
}


angular.module("app").component("navComponent", navComponent);