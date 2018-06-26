"use strict";

const locationComponent = {
  templateUrl: "../templates/locations.template.html",
  controller: ["foodService", "$location", "$route", function(foodService, $location, $route) {
      const vm = this;
      vm.currentLocation = foodService.returnLocations();
      vm.counter = foodService.returnCount();
      vm.locationItems = foodService.randomizeFoods(vm.counter);
      vm.bagItems = foodService.getBagItems();
      // Added vm.currentMessage to add message to template.html 
      vm.currentMessage = vm.currentLocation[vm.counter].message;


      // document.body.style.backgroundImage = `url(${vm.currentLocation[vm.counter].img})`;



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
        clearTimeout(vm.pageTimeout);
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

      // $ctrl.pageTimeOut($ctrl.moveToNextLocation)

      // vm.pageTimeOut = (functionToRun) => {

      // }

      vm.timerAnimation = `animation:forward ${vm.currentLocation[vm.counter].timer}s linear;`;
      vm.pageTimeout = setTimeout(vm.moveToNextLocation, vm.currentLocation[vm.counter].timer * 1000);
  }]
};

angular
  .module("app")
  .component("locationComponent", locationComponent);