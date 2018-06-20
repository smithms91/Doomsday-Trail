"use strict";
const mainComponent = {
    // templateUrl: "../templates/landing-page.template.html",
    templateUrl: `../templates/landing-page.template.html`,
    controller: ["foodService", "$location", function(foodService, $location) {
        const vm = this;
        vm.popup = false;
        vm.tempFoodArray;
        
        // for (let i = 0; i < vm.foodDatabase.length; i++) {
        //     vm.tempFoodArray.push(foodService.getFoodItems(vm.foodDatabase[i]));
        // }
        // console.log(vm.foodArray);

        vm.nextPage = () => {
            $location.path("/prepper-stats-component");
        }

        vm.aboutGame = () => {
            if (vm.popup == true) {
                vm.popup = false;
            } else {
                vm.popup = true;
            }
        }

        vm.getRandomFoods = (page) => {
          
        }

        vm.makeTheCall = () => {
            console.log("make the call button working")
            vm.tempFoodArray = foodService.getFoodItems();

            // foodService.getFoodItems().then((response) => {
            //     vm.tempFoodArray = response;
            //     console.log(vm.tempFoodArray);
            // });
        };

        // SAVE THIS FOR LATER USE, IN CASE WE WANT TO ADD MORE FOOD.
        vm.pushToDB = (food) => {
            console.log(food);
            for (let i = 0; i < food.length; i++) {
                foodService.addFoodItemsToDB(food[i]);
            }
        };
    }]
}

angular.module("app").component("mainComponent", mainComponent);

