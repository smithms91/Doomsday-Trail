"use strict";

const endComponent = {
    templateUrl: `../templates/end.template.html`,
    controller: ["foodService", "$location", function(foodService, $location) {
        const vm = this;
        vm.endBag = foodService.getBagItems();
        vm.userStuff = foodService.getUserStats();
        vm.username = vm.userStuff.username;
        //vm.sex for end character
        if (vm.userStuff.sex === 'male') {
            vm.addClass = 'jumping-male';
        } else if (vm.userStuff.sex === 'female') {
            vm.addClass = 'jumping-female';
        }
        vm.totalCal = 0;
        console.log(vm.userStuff.username);        

        for (let i = 0; i < vm.endBag.length; i++) {
            vm.totalCal += vm.endBag[i].cal;
        }
        vm.totalDays = Math.ceil(vm.totalCal / Number(vm.userStuff.result));

        console.log(vm.userStuff);
        console.log(vm.totalDays);
        console.log(vm.endBag);

       
    }]
}


angular.module("app").component("endComponent", endComponent);