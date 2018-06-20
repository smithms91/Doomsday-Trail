"use strict";

const locationComponent = {
  templateUrl: "../templates/locations.template.html",
  controller: ["foodService", "$location", "$route", function(foodService, $location, $route) {
      const vm = this;
      vm.currentLocation = foodService.returnLocations();
      vm.locationItems = foodService.randomizeFoods(foodService.returnCount());
      vm.bagItems = foodService.getBagItems();
      vm.counter = foodService.returnCount();

      // THIS IS WHEN ANIMATION ENDS DO SOMETHING 
      vm.man = document.querySelector(".man");
      vm.man.addEventListener("animationend", () => {
        vm.man.style.display = "none";
        vm.moveToNextLocation();
      });

      console.log(vm.locationItems);
      console.log(vm.bagItems);

      vm.putItemInBag = () => {
        //Take item from locationItems and put it in the Bag
      }

      vm.putItemBack = () => {
        //Take item from the bag and put it back into the locationItems
      }

      vm.moveToBag = (index) => {
        vm.bagItems = foodService.moveLocationItemToBag(index).bag;
      }

      vm.moveToLocation = (index) => {
        vm.locationItems = foodService.moveBagItemToLocation(index).locations;
      }

      vm.moveToNextLocation = () => {
        foodService.resetLocation();
        $route.reload();
        alert(vm.currentLocation[vm.counter].intro_message);
        // vm.onPageReload();
        //WE SEND THE PLAYER TO THE FINAL PAGE
      }

      vm.timerAnimation = `background:url(../img/running_man8.png);width:128px;height:150px;animation:walk-east 1s steps(8) infinite, forward ${vm.currentLocation[vm.counter].timer}s linear;`;
  }]
};

angular
  .module("app")
  .component("locationComponent", locationComponent);