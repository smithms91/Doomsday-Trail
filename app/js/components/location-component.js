"use strict";

const locationComponent = {
  templateUrl: "../templates/locations.template.html",
  controller: ["foodService", "$location", function(foodService, $location) {
      const vm = this;

      vm.currentLocation = foodService.returnLocations();
      vm.locationItems = foodService.randomizeFoods(foodService.returnCount());
     

      console.log(vm.foods);
      console.log(vm.locationItems);

      vm.putItemInBag = () => {
        //Take item from locationItems and put it in the Bag
      }

      vm.putItemBack = () => {
        //Take item from the bag and put it back into the locationItems
      }

      vm.nextPage = () => {
        vm.counter = foodService.incrementCount();
        if (vm.counter > vm.currentLocation.length) {
          //WE SEND THE PLAYER TO THE FINAL PAGE
        }
      }
  }]
};

angular
  .module("app")
  .component("locationComponent", locationComponent);