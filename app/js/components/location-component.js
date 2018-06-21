"use strict";

const locationComponent = {
  templateUrl: "../templates/locations.template.html",
  controller: ["foodService", "$location", "$route", function(foodService, $location, $route) {
      const vm = this;
      vm.currentLocation = foodService.returnLocations();
      vm.counter = foodService.returnCount();
      vm.locationItems = foodService.randomizeFoods(vm.counter);
      vm.bagItems = foodService.getBagItems();

      // THIS IS WHEN ANIMATION ENDS DO SOMETHING 
      // vm.man = document.querySelector(".man_box");
      // vm.man.addEventListener("animationend", () => {
      //   $location.path("/story-component");
      //   foodService.resetLocation();
      //   vm.man.style.display = "none";
      //   // vm.moveToNextLocation();
      // });

      vm.moveToBag = (index) => {
        foodService.moveLocationItemToBag(index).bag;
        // vm.bagItems = foodService.moveLocationItemToBag(index).bag;
      }

      vm.moveToLocation = (index) => {
        foodService.moveBagItemToLocation(index).locations;
        // vm.locationItems = foodService.moveBagItemToLocation(index).locations;
      }

      vm.moveToNextLocation = () => {
        foodService.resetLocation();
        clearTimeout(pageTimeout);
        if ( vm.counter < vm.currentLocation.length - 1) {
          console.log(vm.counter);
          $route.reload();
          $location.path("/story-component");

       } else if (vm.counter >= vm.currentLocation.length - 1) {
          console.log(vm.counter);
          $route.reload();
          $location.path("/end-component");
        } 
        // vm.onPageReload();
        //WE SEND THE PLAYER TO THE FINAL PAGE
      }

      vm.timerAnimation = `animation:forward ${vm.currentLocation[vm.counter].timer}s linear;`;
      let pageTimeout = setTimeout(vm.moveToNextLocation, vm.currentLocation[vm.counter].timer * 1000);
  }]
};

angular
  .module("app")
  .component("locationComponent", locationComponent);