"use strict";

const mainComponent = {
    template: `
        <button ng-click="$ctrl.nextPage();">Bug Out</button>
        <div ng-repeat="food in $ctrl.foodResult">
        <p>{{ food.branded[0].food_name }}</p>
        <p>{{ food.branded[0].nf_calories }} calories.</p>
        <img ng-src="{{ food.branded[0].photo.thumb }}">
    `,
    controller: ["foodService", "$location", function(foodService, $location) {
        const vm = this;

        vm.foodDatabase = ["cheese", "eggs",];

        vm.foodResult = foodService.getFoodItems(vm.foodDatabase);
        console.log(vm.foodResult);

        vm.nextPage = () => {
            $location.path("/second-component");
        }
    }]
}

angular.module("app").component("mainComponent", mainComponent);