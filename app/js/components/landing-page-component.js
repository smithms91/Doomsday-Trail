"use strict";

const landingPageComponent = {
    // templateUrl: "../templates/landing-page.template.html",
    templateUrl: `../templates/landing-page.template.html`,
    controller: ["foodService", "$location", function(foodService, $location) {
        const vm = this;
        foodService.getFoodItemsFromDB();
        angular.element(document.body).addClass("animate-background");

        vm.popup = false;
        vm.tempFoodArray;
        // for (let i = 0; i < vm.foodDatabase.length; i++) {
        //     vm.tempFoodArray.push(foodService.getFoodItems(vm.foodDatabase[i]));
        // }
        // console.log(vm.foodArray);

        vm.close = () => {
            vm.popup = false;
        }

        vm.nextPage = () => {
            angular.element(document.body).removeClass("animate-background");           
            $location.path("/prepper-stats-component");
        };

        vm.aboutGame = () => {
            if (vm.popup == true) {
                vm.popup = false;
            } else {
                vm.popup = true;
            }
        }



        //Konami Code //
        let allowedKeys = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down',
            65: 'a',
            66: 'b'
          };
        
          // the 'official' Konami Code sequence
        let konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
        // a variable to remember the 'position' the user has reached so far.
        let konamiCodePosition = 0;
        
        // add keydown event listener
        document.addEventListener('keydown', function(e) {
        // get the value of the key code from the key map
            let key = allowedKeys[e.keyCode];
        // get the value of the required key from the konami code
            let requiredKey = konamiCode[konamiCodePosition];
        
        // compare the key with the required key
            if (key == requiredKey) {
            
                // move to the next key in the konami code sequence
                konamiCodePosition++;
            
                // if the last key is reached, activate cheats
                if (konamiCodePosition == konamiCode.length) {
                activateCheats();
                konamiCodePosition = 0;
                }
            } else {
                konamiCodePosition = 0;
            }
        });
        
        function activateCheats() {
            alert("cheats activated");
        }

        // vm.makeTheCall = () => {
        //     console.log("make the call button working")
        //     vm.tempFoodArray = foodService.getFoodItems();
        // };

        // SAVE THIS FOR LATER USE, IN CASE WE WANT TO ADD MORE FOOD.
        // vm.pushToDB = (food) => {
        //     console.log(food);
        //     for (let i = 0; i < food.length; i++) {
        //         foodService.addFoodItemsToDB(food[i]);
        //     }
        // };
    }]
}

angular.module("app").component("landingPageComponent", landingPageComponent);

