"use strict";

const storyComponent = {
    templateUrl: `../templates/story.template.html`,
    controller: ["foodService", "$location", function(foodService, $location) {
        const vm = this;
        foodService.getFoodItemsFromDB();
        vm.counter = foodService.returnCount();
        vm.message = foodService.returnLocations();
        console.log(vm.message);
        // document.body.style.backgroundImage = "url('../img/story-building-background.png')";

        vm.nextPage = () => {
            $location.path("/location-component");
        }
       
        // angular.element(document.querySelector(".text")).append(vm.message[vm.counter].message);

     }]
}


angular.module("app").component("storyComponent", storyComponent);