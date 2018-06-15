"use strict";
function foodService($http) {
  // Declare the functions to make GET, POST, PUT, and DELETE requests from this service.

  const getFoodItems = () => {
    return $http({
      method: "GET",
      url: "https://nutritionix-api.p.mashape.com/v1_1/search/chicken?fields=item_name%2Cnf_calories%2Cnf_total_fat"
    }).then((response) => {
        console.log(response.data);
        return response.data;
    });
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

