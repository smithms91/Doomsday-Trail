"use strict";

const express = require("express");
const mainRouter = express.Router();
const pg = require("pg");
const pool = require("../pg-connection-pool");

mainRouter.get("/storedata", (request, response) => {
    pool.query("SELECT * FROM fooddatabase ORDER BY id").then((result) => {
      response.send(result.rows);
    });
});

mainRouter.post("/storedata", (request, response) => {
    console.log(request);
    console.log(response);
  pool.query("INSERT INTO fooddatabase(food_name, cal, img) VALUES($1::text, $2::int, $3::text)", [request.body.data.foods[0].food_name, request.body.data.foods[0].nf_calories, request.body.data.foods[0].photo.highres]).then(() => {
    pool.query("SELECT * FROM fooddatabase ORDER BY id").then((result) => {
      response.send(result.rows);
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