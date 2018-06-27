"use strict";

const endComponent = {
    templateUrl: `../templates/end.template.html`,
    controller: ["foodService", "$location", function(foodService, $location) {
        const vm = this;
        vm.endBag = foodService.getBagItems();
        vm.userStuff = foodService.getUserStats();
        //vm.sex for end character
        vm.sex = vm.userStuff.sex
        vm.totalCal = 0;
        

        for (let i = 0; i < vm.endBag.length; i++) {
            vm.totalCal += vm.endBag[i].cal;
        }
        vm.totalDays = Math.floor(vm.totalCal / Number(vm.userStuff.result));

        console.log(vm.userStuff);
        console.log(vm.totalDays);
        console.log(vm.endBag);

       
    }]
}


angular.module("app").component("endComponent", endComponent);