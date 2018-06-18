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

  const getFoodItems = (foodDatabase) => {
    for (let i = 0; i < foodDatabase.length; i++) {
      $http({
            method: "GET",
            url: `https://trackapi.nutritionix.com/v2/search/instant?query=${foodDatabase}`,
            headers: {
              'Content-Type':'application/json', 
              'x-app-id':'41610192', 
              'x-app-key':'13bc79b7f7a28a177da940ede4565591'
          }
      }).then((response) => {
        finalFoodDetails.push(response.data);
      });

    }
    console.log(finalFoodDetails);
    return finalFoodDetails;
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


    // FOR NOW, COMMENT THIS OUT, IN CASE WE USE A DATABASE
  // const addStudent = (newStudent) => {
  //   return $http({
  //     method: "POST",
  //     url: "/portal/students",
  //     data: newStudent  
  //   })
  // };

  // const deleteStudent = (id) => {
  //   return $http({
  //     method: "DELETE",
  //     url: "/portal/students/" + id
  //   });
  // };

  // const updateStudent = (student) => {
  //   return $http({
  //     method: "PUT",
  //     url: "/portal/students/" + student.id,
  //     data: student
  //   });
  // };


    // 

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