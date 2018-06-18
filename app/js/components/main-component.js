"use strict";

const mainComponent = {
    // templateUrl: "../templates/landing-page.template.html",
    templateUrl: `../templates/landing-page.template.html`,
    controller: ["foodService", "$location", function(foodService, $location) {
        const vm = this;
        vm.tempFoodArray = [];
        
        // for (let i = 0; i < vm.foodDatabase.length; i++) {
        //     vm.tempFoodArray.push(foodService.getFoodItems(vm.foodDatabase[i]));
        // }
        // console.log(vm.foodArray);

        vm.nextPage = () => {
            $location.path("/prepper-stats-component");
        }

        vm.getRandomFoods = (page) => {
          
        }
    }]
}

angular.module("app").component("mainComponent", mainComponent);