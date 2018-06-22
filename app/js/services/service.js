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
      message: "Doomsday has arrived. Major cities have been hit by electromagnetic pulse bombs, and shut off the grid. The world is dark, and people are losing their minds. You look out the window at the carnage ensuing, and realize there is an angry mob of people coming towards your house! You have a short amount of time to look through your pantry and grab whatever you need to survive for as long as you can. Your bag can only hold about six items, and time is of the essence, because when the guy reaches the edge of the screen, he bugs out with whatever is in your Bug Out bag. Add and remove items from your bag by clicking on their boxes. Make wise decisions and choose quickly, because its time to Bug Out!",
      timer: 15,
      timermessage: "The front door busts open and several rioters crash through. Realizing you are out of time, you make a break for your backdoor with whatever items you might have grabbed."
    },
    {
      name: "Gas Station",
      foodSize: 8,
      img: "/img/gas-station.jpg",
      message: "You escape down the street from your home, passing disabled cars all around you. You walk for an hour, before finally come across the nearest gas station. It already looks pretty picked over but you take cover within as you hear gun shots in the distance. They sound like they are getting closer.",
      timer: 12,
      timerMessage: "The glass shatters, and bullets rip through the wall behind you. You see several people attacking each other and decide in your best interests to make a break for it."
    },
    {
      name: "Supermarket", 
      foodSize: 10, 
      img: "/img/super-market.jpg",
      message: "You feel you have been aimlessly running, not even aware of where you are anymore. By some subconscious decision, you find yourself at the supermarket, where glass has been broken out, destroyed baskets litter the parking lot, and a darkness blankets the inside. Several lone people scatter from various openings, and the sounds of a distant uproar seem to be approaching fast. Perhaps there is something inside that you can take with you before the inevitable arrives.",
      timer: 9,
      timerMessage: "The uproar becomes deafening, and you see hundreds of people marching towards the dilapidated grocery store. They are wielding guns, bats, pitchforks, and other elements that would most likely not end well for you. You decide its best to bug out before they find you."
      }
    ];
  // loading foods from our database when landing page loads
  const getFoodItemsFromDB = () => {
    $http({
      method: "GET",
      url: "/portal/storedata"
    }).then((response) => {
      foodDatabaseItems = response;
      console.log(foodDatabaseItems);
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
    console.log("clicked");
    if ( bugOutBag.length < bagSize ){
      bugOutBag.push(foodsAtLocation[index]);
      foodsAtLocation.splice(index, 1);
      return {
        locations: foodsAtLocation,
        bag: bugOutBag
      }
    } else {
      alert("No more room in your bag fool");
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
    user = userStats;
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


  // const addFoodItemsToDB = (fooditem) => {
  //     console.log(fooditem);
  //     return $http({
  //       method: "POST",
  //       url: "/portal/storedata",
  //       data: fooditem
  //     });  
  // };

  // OUR RANDOM FOODWORD LIST THAT WE NEED FOR THE FUNCTION ABOVE
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