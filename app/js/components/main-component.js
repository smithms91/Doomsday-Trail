"use strict";

const mainComponent = {
    template: `
    
    `,
    controller: function() {
        const vm = this;

        vm.foodItems = foodService.getFoodItems();
        console.log(vm.foodItems);
    }
}

angular.module("app").component("mainComponent", mainComponent);