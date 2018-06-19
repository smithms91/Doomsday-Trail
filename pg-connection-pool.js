"use strict";

const pg = require("pg");
const url = require("url");
try {
  require("dotenv").config();
} catch (error) {
  console.log(error);
}

const params = url.parse(process.env.DATABASE_URL);
const auth = params.auth.split(":");
const CONFIG = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split("/")[1],
        ssl: params.hostname !== "localhost"
      };

module.exports = new pg.Pool(CONFIG);