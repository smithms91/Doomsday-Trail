"use strict";

const gulp = require("gulp");
const pool = require("pg");
const express = require("express");
const bodyParser = require("body-parser");
const get = require('simple-get');

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/app"));

let foodWordlist = [
  "Cheese",
  "Eggs",
  // "Milk",
  // "Bananas",
  // "Cereal",
  // "Chicken", 
  // "Canned food - soup",
  // "Marshmallows",
  // "Apple",
  // "Banana",
  // "Onion",
  // "Potato",
  // "Canned Food - Beans",
  // "Tomatoes",
  // "Peanut Butter",
  // "Tub of Lard",
  // "Pop",
  // "Candy Bar",
  // "Oranges",
  // "Loaf of Bread",
  // "Rice",
  // "Canned Food - Tuna",
  // "Canned Food - Tomato Sauce",
  // "Instant Ramen",
  // "Hot Dogs",
  // "Pretzels",
  // "Bag of Peanuts",
  // "Bag of Almonds",
  // "Trail Mix",
  // "Beef Jerky Bag",
  // "Carrots",
  // "Twinkies",
  // "Chips",
  // "Cucumbers",
  // "Popcorn",
  // "Celery",
  // "Avocado",
  "Broccoli"
  ];

let foodTempDB = [];


gulp.task("pullAllFromAPI", () => {
  console.log(foodWordlist);
  for (let i = 0; i < foodWordlist.length; i++) {
    get({
      url : 'https://trackapi.nutritionix.com/v2/natural/nutrients',
      method: 'POST',
      body: {
        'query': `${foodWordlist[i]}`,
        // 'query': 'cheese',
        'timezone': 'US/Eastern',
      },        
      headers: {
        'Content-Type':'application/json', 
          // TONY ID 41610192
        'x-app-id':'182d0921', 
        'x-app-key':'b2570b50f16f5c4d418dec4629a97a97'
      },
      // return object as a JSON
      json: true
    }, function (err, res) {
      if (err) throw err;

      res.setTimeout(10000);
      // console.log(res.headers);
    
      res.on('data', function (data) {

        // data comes back as a blob so we are converting it below 
        let somedata = data.toString('utf8');
        let finaldata = JSON.parse(somedata);
        foodTempDB.push(finaldata);
        // console.log('got a chunk of the response: ' + data);
        // console.log(finaldata);
    });
  });
  }
  console.log(finaldata);
});

gulp.task("pullOneFromAPI", () => {
  // process.stdin.resume();
  // process.stdin.setEncoding('utf8');
  // var util = require('util');

  // process.stdin.on('data', function (text) {
  //   console.log('received data:', util.inspect(text));
  //   if (text === 'quit\n') {
  //     done();
  //   }
  // });

  // function done() {
  //   console.log('Now that process.stdin is paused, there is nothing more to do.');
  //   process.exit();
  // }
  // Type in an item to grab
  // make API call
  // store item to temp
});


gulp.task("pushToDB", () => {
    console.log("pushing to DB");
    for (let i = 0; i < foodTempDB.length; i++) {
      console.log(foodTempDB);
      console.log(foodTempDB[i].foods[i].food_name);
    }
});

app.post("/datapost", (request, response) => {
  pool.query("INSERT INTO fooddatabase(food_name, cal, img) VALUES($1::text, $2::int, $3::text)", [foodTempDB[i].foods[i].food_name, request.body.calories, request.body.img]).then(() => {
    pool.query("SELECT * FROM fooddatabase ORDER BY id").then((result) => {
      response.send(result.rows);
    });
  });
});

app.get("/data", (request, response) => {
  response.send(foodTempDB);
});

gulp.task("runServer", ["pullAllFromAPI", "pushToDB"], () => {
  console.log(foodTempDB);
  const port = 9999;
  app.listen(port, () => console.log(`Server is listening on port ${port}`));
});

