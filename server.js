// initializes body-parser, express, and path Node.js packages
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

// initializes server
var app = express();
var PORT = process.env.PORT || 8080;

// sets up data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// loads static files
app.use(express.static("./app/public"));

// routes files
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// starts server
app.listen(PORT, function() {
  console.log("This app is listening on PORT: " + PORT);
});