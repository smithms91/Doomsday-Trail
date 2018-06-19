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

let foodTempDB = [];


gulp.task("pullAllFromAPI", () => {
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
        'x-app-id':'41610192', 
        'x-app-key':'13bc79b7f7a28a177da940ede4565591'
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
        
        console.log(foodTempDB[0].foods[0].food_name);
      
    });
  });
  }
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


});

app.post("/datapost", (request, response) => {
  pool.query("INSERT INTO table(name, calories, img) VALUES($1::text, $2::int, $3::text)", [request.body.name, request.body.calories, request.body.img]).then(() => {
    pool.query("SELECT * FROM table ORDER BY id").then((result) => {
      response.send(result.rows);
    });
  });
});

app.get("/data", (request, response) => {
  response.send(foodTempDB);
});

gulp.task("runServer", ["pullAllFromAPI"], () => {
  const port = 3000;
  app.listen(port, () => console.log(`Server is listening on port ${port}`));
});

