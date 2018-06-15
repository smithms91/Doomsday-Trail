"use strict";
function foodService($http) {
  // Declare the functions to make GET, POST, PUT, and DELETE requests from this service.
  let finalFoodDetails = [];

  const getFoodItems = (foodDatabase) => {
    for (let i = 0; i < foodDatabase.length; i++) {
      $http({
            method: "GET",
            url: `https://trackapi.nutritionix.com/v2/search/instant?query=${foodDatabase[i]}`,
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


  return {
    getFoodItems
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