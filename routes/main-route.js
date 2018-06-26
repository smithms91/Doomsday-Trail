"use strict";

const express = require("express");
const mainRouter = express.Router();
const pg = require("pg");
const pool = require("../pg-connection-pool");


mainRouter.get("/storedata", (request, response) => {
    pool.query("SELECT * FROM fooddatabase ORDER BY id").then((result) => {
      response.send(result.rows);
<<<<<<< HEAD
      pool.end();
=======
      // will done() work?
      // done();
>>>>>>> 6bf8f63f3856f20a76ae1f4cd35cb283a299659b
    });
});

mainRouter.post("/storedata", (request, response) => {
  console.log(request.body);
  pool.query("INSERT INTO fooddatabase(food_name, cal, img, protein, fat, carbs, serving_qty, serving_unit, serving_weight_grams) VALUES($1::text, $2::float, $3::text, $4::float, $5::float, $6::float, $7::int, $8::text, $9::float)", [request.body.data.foods[0].food_name, request.body.data.foods[0].nf_calories, request.body.data.foods[0].photo.highres, request.body.data.foods[0].nf_protein, request.body.data.foods[0].nf_total_fat, request.body.data.foods[0].nf_total_carbohydrate, request.body.data.foods[0].serving_qty, request.body.data.foods[0].serving_unit, request.body.data.foods[0].serving_weight_grams]).then(() => {
    pool.query("SELECT * FROM fooddatabase ORDER BY id").then((result) => {
      response.send(result.rows);
<<<<<<< HEAD
      pool.end();
=======
      // will done() work?
      // done();
>>>>>>> 6bf8f63f3856f20a76ae1f4cd35cb283a299659b
    });
  });
});

mainRouter.put("/", (request, response) => {
  console.log("blah");
});

mainRouter.delete("/", (request, response) => {
  console.log("blah");
});

module.exports = mainRouter;