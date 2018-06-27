"use strict";
function foodService($http) {
  // Declare the functions to make GET, POST, PUT, and DELETE requests from this service.
  let foodDatabaseItems = [];
  let bugOutBag = [];
  let foodsAtLocation = [];
  let count = 0;
  let bagSize = 6;
  let user = {};
  
  let locations = [
    {
      name: "Home", 
      foodSize: 6,
      img: "/img/home.jpg",
      message: "Doomsday has arrived. The country is being ravaged by attacks on the power grid, causing mass panic. Carnage ensues outside of your house, as mobs and looters pillage the area. Time is of the essense, and looters are approaching your home. You grab a bag with limited space, and load up what little you have left in your pantry. Add and remove items from your bag by clicking on their boxes before your character 'bugs out' and moves to the next area. Make wise decisions and choose quickly!",
      timer: 10,
      timermessage: "The front door busts open and several rioters crash through! You better make a break for it before they find you!"
    },
    {
      name: "the Gas Station",
      foodSize: 8,
      img: "/img/gas-station-dark.jpg",
      message: "You escape down the street from your home, passing disabled cars all around you. You walk for an hour, before finally come across the nearest gas station. It already looks pretty picked over but you take cover within as you hear gun shots in the distance. They sound like they are getting closer.",
      timer: 8,
      timerMessage: "The glass shatters, and bullets rip through the wall behind you. You see several people attacking each other and decide in your best interests to make a break for it."
    },
    {
      name: "Supermarket", 
      foodSize: 10, 
      img: "/img/empty-shelf.jpg",
      message: "You feel you have been aimlessly running, not even aware of where you are anymore. By some subconscious decision, you find yourself at the supermarket, where glass has been broken out, destroyed baskets litter the parking lot, and a darkness blankets the inside. Several lone people scatter from various openings, and the sounds of a distant uproar seem to be approaching fast. Perhaps there is something inside that you can take with you before the inevitable arrives.",
      timer: 6,
      timerMessage: "The uproar becomes deafening, and you see hundreds of people marching towards the dilapidated grocery store. They are wielding guns, bats, pitchforks, and other elements that would most likely not end well for you. You decide its best to bug out before they find you."
      }
    ];
  // loading foods from our database when landing page loads
  const getFoodItemsFromDB = () => {
    $http({
      method: "GET",
      url: "/portal/storedata"
    }).then((response) => {  
      // cant put a string in this console.log with an object  
      // console.log(response);  
      foodDatabaseItems = response;
    });
  };



// call returnFoodItems from any component
  const returnFoodItems = () => {
    return foodDatabaseItems;
  }
  
  const returnLocations = () => {
    return locations;
  }

  const randomizeFoods = (page) => {
    for (let i = 0; i < locations[page].foodSize; i++) {
      foodsAtLocation.push(foodDatabaseItems.data[Math.floor(Math.random() * foodDatabaseItems.data.length)]);
    }
    return foodsAtLocation;
  }

  const getBagItems = () => {
    return bugOutBag;
  }

  const moveBagItemToLocation = (index) => {
    foodsAtLocation.push(bugOutBag[index]);
    bugOutBag.splice(index, 1);
    return {
      locations: foodsAtLocation,
      bag: bugOutBag
    }
  }

  const moveLocationItemToBag = (index) => {
    if ( bugOutBag.length < bagSize ){
      bugOutBag.push(foodsAtLocation[index]);
      foodsAtLocation.splice(index, 1);
      return {
        locations: foodsAtLocation,
        bag: bugOutBag
      }
    } else {
      alert("You can only hold 6 items at a time!");
      return {
        locations: foodsAtLocation,
        bag: bugOutBag
      }
    }
  }

  const returnCount = () => {
    return count;
  }

  const incrementCount = () => {
    return count++;
  }

  const resetCount = () => {
    count = 0;
  }
  
  const resetLocation = () => {
    foodsAtLocation = [];
    count++;
  }

  const resetBag = () => {
    bugOutBag = [];
  }

  const pushUserStats = (userStats) => {
    console.log(userStats);
    user = angular.copy(userStats);
  }
  
  const getUserStats = () => {
    return user;
  }

  return {
    returnFoodItems,
    getFoodItemsFromDB,
    randomizeFoods,
    getBagItems,
    randomizeFoods,
    moveBagItemToLocation,
    moveLocationItemToBag,
    returnLocations,
    returnCount,
    incrementCount,
    resetCount,
    resetLocation,
    resetBag,
    pushUserStats,
    getUserStats
  }
};

angular
  .module("app")
  .factory("foodService", foodService);


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
    //         
    //       'x-app-id':'182d82d0921', 
    //       'x-app-key':'b2570b50f16f5c4d418dec4629a97a97'
    //     }
    //   }).then((response) => {
    //     console.log(response);
    //     finalFoodDetails.push(response);
    //   });
    // return finalFoodDetails;
    // }


  // const addFoodItemsToDB = (fooditem) => {
  //     console.log(fooditem);
  //     return $http({
  //       method: "POST",
  //       url: "/portal/storedata",
  //       data: fooditem
  //     });  
  // };

  // Random food list for us to loop through 
  // let foodWordlist = [
  //   "Cheese",
  //   "Eggs",
  //   "Milk",
  //   "Bananas",
  //   "Cereal",
  //   "Chicken", 
  //   "Canned food - soup",
  //   "Marshmallows",
  //   "Apple",
  //   "Banana",
  //   "Onion",
  //   "Potato",
  //   "Canned Food - Beans",
  //   "Tomatoes",
  //   "Peanut Butter",
  //   "Tub of Lard",
  //   "Pop",
  //   "Candy Bar",
  //   "Oranges",
  //   "Loaf of Bread",
  //   "Rice",
  //   "Canned Food - Tuna",
  //   "Canned Food - Tomato Sauce",
  //   "Instant Ramen",
  //   "Hot Dogs",
  //   "Pretzels",
  //   "Bag of Peanuts",
  //   "Bag of Almonds",
  //   "Trail Mix",
  //   "Beef Jerky Bag",
  //   "Carrots",
  //   "Twinkies",
  //   "Chips",
  //   "Cucumbers",
  //   "Popcorn",
  //   "Celery",
  //   "Avocado",
  //   "Broccoli"
  //   ];
  //