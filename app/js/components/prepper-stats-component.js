"use strict";
console.log("prepper stats component connected");
const prepperStatsComponent = {
    
    templateUrl: `../templates/prepper-stats.template.html`,
    controller: ["foodService", "$location", function(foodService, $location) {
        const vm = this;
        vm.currentLocation = foodService.returnLocations();
        vm.counter = foodService.returnCount();
        vm.result = 0;
        
        vm.calsPerDay = () => {
          console.log("testing");

          vm.finalheight = vm.user.height * 2.54;
          vm.finalweight = vm.user.weight / 2.2;
            if (vm.user.sex === "male") {
                vm.user.result = Math.round(66.47 + (13.75 * vm.finalweight) + (5.0 * vm.finalheight - (6.75 * vm.user.age)));
            } else if (vm.user.sex === "female") {
                vm.user.result = Math.round(665.09 + (9.56 * vm.finalweight) + (1.84 * vm.finalheight - (4.67 * vm.user.age)));
            }
            console.log(vm.user.sex);
            console.log(vm.user.result);
        }

        vm.nextPage = (user) => {
            foodService.pushUserStats(user);
            $location.path("/story-component");
            angular.element(document.body).removeClass("animate-background");
        }
    }]
}

angular.module("app").component("prepperStatsComponent", prepperStatsComponent);