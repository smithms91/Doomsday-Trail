"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mainRoute = require("./routes/main-route");

app.use("/portal", mainRoute);
app.use(bodyParser.json());
app.use(express.static(__dirname + "/app"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
