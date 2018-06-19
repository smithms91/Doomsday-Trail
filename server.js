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


// postgres://lcehcyetvnqzhm:daaef64f38e9695607e0420b0f0628b49b41b5918946525d9d397e0555fa3e1e@ec2-50-19-86-139.compute-1.amazonaws.com:5432/dfge3la2d6fqkn