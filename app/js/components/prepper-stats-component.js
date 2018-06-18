"use strict";
console.log("prepper stats component connected")
const prepperStatsComponent = {
    
    templateUrl: `../templates/prepper-stats.template.html`,
    controller: ["foodService", "$location", function(foodService, $location) {
        const vm = this;
        vm.result = 0;
        
        vm.calsPerDay = () => {
          console.log("testing");

          vm.finalheight = vm.height * 2.54;
          vm.finalweight = vm.weight / 2.2;
            if (vm.sex === "male") {
                vm.result = Math.round(66.47 + (13.75 * vm.finalweight) + (5.0 * vm.finalheight - (6.75 * vm.age)));
            } else if (vm.sex === "female") {
                vm.result = Math.round(665.09 + (9.56 * vm.finalweight) + (1.84 * vm.finalheight - (4.67 * vm.age)));
            }
            console.log(vm.sex);
            console.log(vm.result);
          }
    }]
}

angular.module("app").component("prepperStatsComponent", prepperStatsComponent);