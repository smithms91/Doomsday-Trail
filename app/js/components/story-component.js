"use strict";

const storyComponent = {
    templateUrl: `../templates/story.template.html`,
    controller: ["foodService", "$location", function(foodService, $location) {
        const vm = this;
        foodService.getFoodItemsFromDB();
        vm.counter = foodService.returnCount();
        vm.message = foodService.returnLocations();
        console.log(vm.message);

        vm.nextPage = () => {
            $location.path("/location-component");
        }
    }]
}


angular.module("app").component("storyComponent", storyComponent);