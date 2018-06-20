"use strict";
function foodService($http) {
  // Declare the functions to make GET, POST, PUT, and DELETE requests from this service.
  let finalFoodDetails = [];
  let bugOutBag = [];
  let foodsAtLocation = [];
  
  let foodWordlist = [
    "Cheese",
    "Eggs",
    "Milk",
    "Bananas",
    "Cereal",
    "Chicken", 
    "Canned food - soup",
    "Marshmallows",
    "Apple",
    "Banana",
    "Onion",
    "Potato",
    "Canned Food - Beans",
    "Tomatoes",
    "Peanut Butter",
    "Tub of Lard",
    "Pop",
    "Candy Bar",
    "Oranges",
    "Loaf of Bread",
    "Rice",
    "Canned Food - Tuna",
    "Canned Food - Tomato Sauce",
    "Instant Ramen",
    "Hot Dogs",
    "Pretzels",
    "Bag of Peanuts",
    "Bag of Almonds",
    "Trail Mix",
    "Beef Jerky Bag",
    "Carrots",
    "Twinkies",
    "Chips",
    "Cucumbers",
    "Popcorn",
    "Celery",
    "Avocado",
    "Broccoli"
    ];

  let locations = [
    {name: "Home", foodSize: 6, img: "/img/home.jpg"},
    {name: "Gas Station", foodSize: 8, img: "/img/gas-station.jpg"},
    {name: "Super Market", foodSize: 10, img: "/img/super-market.jpg"}
    ];

  const getFoodItems = () => {
    for (let i = 0; i < foodWordlist.length; i++) {
      $http.post('https://trackapi.nutritionix.com/v2/natural/nutrients', 
        { 'query': `${foodWordlist[i]}`,
          // 'query': 'cheese',
          'timezone': 'US/Eastern'
        },        
        { headers: {
          'Content-Type':'application/json', 
            // TONY ID 41610192
          'x-app-id':'182d0921', 
          'x-app-key':'b2570b50f16f5c4d418dec4629a97a97'
        }
      }).then((response) => {
        console.log(response);
        finalFoodDetails.push(response);
      });
    }
    return finalFoodDetails;

    // return $http({
    //   method: "GET",
    //   url: "/portal/storedata"
    // });
  };

  

  const addFoodItemsToDB = (fooditem) => {
      console.log(fooditem);
      return $http({
        method: "POST",
        url: "/portal/storedata",
        data: fooditem
      });  
  };

  const randomizeFoods = (page) => {
    for (let i = 0; i < locations[page].foodsize; i++) {
      foodsAtLocation.push(foodWordlist[Math.floor(Math.random() * foodWordlist.length)]);
    }
    return foodsAtLocation;
  }

  const getBagItems = () => {
    return bugOutBag;
  }

  const addBagItem = (newItem) => {
    bugOutBag.push(newItem);
    return bugOutBag;
  }
  
  const moveBagItemToLocation = (index) => {
    tempLocationItems.push(bugOutBag[index]);
    bugOutBag.splice(index, 1);
    return {
      locations: tempLocationItems,
      bag: bugOutBag
    }
  }

  const moveLocationItemToBag = (index) => {
    bugOutBag.push(tempLocationItems[index]);
    tempLocationItems.splice(index, 1);
    return {
      locations: tempLocationItems,
      bag: bugOutBag
    }
  }

  return {
    getFoodItems,
    randomizeFoods,
    addFoodItemsToDB,
    getBagItems,
    addBagItem,
    randomizeFoods,
    moveBagItemToLocation,
    moveLocationItemToBag
  };
}

angular
  .module("app")
  .factory("foodService", foodService);





    // return $http({
    //   method: "GET",
    //   url: "https://trackapi.nutritionix.com/v2/search/instant?query=cheese",
    //   headers: {
    //     'Content-Type':'application/json', 
    //     'x-app-id':'41610192', 
    //     'x-app-key':'13bc79b7f7a28a177da940ede4565591'
    //   }
    // }).then((response) => {
    //     console.log(response.data);
    //     return response.data;
    // });


    // THIS CODE IS FOR ADDING ITEMS. WE CAN SET UP THE ARRAY WITH NEW FOODS AND USE THIS TO
    // CALL THE API AND STORE MORE DATA TO OUR DATABASE.
    // for (let i = 0; i < foodWordlist.length; i++) {
    //   $http.post('https://trackapi.nutritionix.com/v2/natural/nutrients', 
    //     { 'query': `${foodWordlist[i]}`,
    //       // 'query': 'cheese',
    //       'timezone': 'US/Eastern'
    //     },        
    //     { headers: {
    //       'Content-Type':'application/json', 
    //         // TONY ID 41610192
    //       'x-app-id':'182d0921', 
    //       'x-app-key':'b2570b50f16f5c4d418dec4629a97a97'
    //     }
    //   }).then((response) => {
    //     console.log(response);
    //     finalFoodDetails.push(response);
    //   });
    // }
    // return finalFoodDetails;