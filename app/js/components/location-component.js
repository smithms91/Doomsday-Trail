"use strict";

const locationComponent = {
  templateUrl: "../templates/locations.template.html",
  controller: ["foodService", "$location", "$route", "$scope", function(foodService, $location, $route, $scope) {
      const vm = this;

      
      foodService.getFoodItemsFromDB();
      vm.currentLocation = foodService.returnLocations();
      vm.counter = foodService.returnCount();
      vm.locationItems = foodService.randomizeFoods(vm.counter);
      vm.bagItems = foodService.getBagItems();
      vm.currentMessage = vm.currentLocation[vm.counter].message;
      vm.timeleft = vm.currentLocation[vm.counter].timer;

      vm.currentUser = angular.copy(foodService.getUserStats());
      console.log(vm.currentUser);

      if (vm.currentUser.sex === "male") {
        vm.timerAnimation = `animation: walk-east-male .5s steps(10) infinite,forward ${vm.currentLocation[vm.counter].timer}s linear;`;
        vm.userClass = "male";
      } else if (vm.currentUser.sex === "female") {
        vm.timerAnimation = `animation: walk-east-female .5s steps(10) infinite,forward ${vm.currentLocation[vm.counter].timer}s linear;`;
        vm.userClass = "female";
      }

      // document.body.style.backgroundImage = `url(${vm.currentLocation[vm.counter].img})`;


      vm.moveToBag = (index) => {
        foodService.moveLocationItemToBag(index).bag;
      }

      vm.moveToLocation = (index) => {
        foodService.moveBagItemToLocation(index).locations;
      }

      vm.moveToNextLocation = () => {
        foodService.resetLocation();
        clearInterval(vm.downloadTimer);
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

    // timeleft = 10;
    vm.downloadTimer = setInterval(function(){
      vm.timeleft--;
      document.getElementById("countdowntimer").innerHTML = vm.timeleft;
      if (vm.timeleft <= 0) {
        vm.moveToNextLocation();
      }
    },1000);
  
    $scope.$on('$destroy', function() {
      clearInterval(vm.downloadTimer);
    });

      // vm.pageTimeout = setTimeout(vm.moveToNextLocation, vm.currentLocation[vm.counter].timer * 1000);
  }]
};

angular
  .module("app")
  .component("locationComponent", locationComponent);