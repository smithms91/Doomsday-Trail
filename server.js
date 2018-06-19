"use strict";

const express = require("express");
const bodyParser = require("body-parser");
// const mainRoute = require("./routes/main-route");
const app = express();


app.use(bodyParser.json());
// app.use("/", mainRoute);
app.use(express.static(__dirname + "/app"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
