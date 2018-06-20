"use strict";
function foodService($http) {
  // Declare the functions to make GET, POST, PUT, and DELETE requests from this service.
  let foodDatabaseItems = [];
  let bugOutBag = [];
  let foodsAtLocation = [];
  let count = 2;
  let bagSize = 6;
  let user = {};
  
  let locations = [
    {
      name: "Home", 
      foodSize: 6,
      img: "/img/home.jpg",
      intro_message: "Doomsday has arrived. Major cities have been hit by electromagnetic pulse bombs, and shut off the grid. The world is dark, and people are losing their minds. You look out the window at the carnage ensuing, and realize there is an angry mob of people coming towards your house! You have a short amount of time to look through your pantry and grab whatever you need to survive for as long as you can.",
      timer: 10,
      timermessage: "The front door busts open and several rioters crash through. Realizing you are out of time, you make a break for your backdoor with whatever items you might have grabbed."
    },
    {
      name: "Gas Station",
      foodSize: 8,
      img: "/img/gas-station.jpg",
      message: "You just found this gas station... it is pretty picked over but lets see what you can use. You have 15 seconds to get in and get out.",
      timer: 8,
      timerMessage: "You have to go! Take what you have on you and make a run for it!"
    },
    {
      name: "Super Market", 
      foodSize: 10, 
      img: "/img/super-market.jpg",
      message: "You made it to the Super Market! Thankfully there are some supplies left. Make quick decisions and GTF out",
      timer: 6,
      timerMessage: "Time is out! You have to get to Adam's bunker now! Hopefully you made good choice of whats in your bag."
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
  
  const resetLocation = () => {
    foodsAtLocation = [];
    count++;
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
    resetLocation,
    pushUserStats
  };
}

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