const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
if(process.env.NODE_ENV == 'production'){
	mongoose.connect('mongodb://heroku_gd8f4gl0:ttrv6b904r8vk28l9e8b5ee7he@ds239128.mlab.com:39128/heroku_gd8f4gl0');
}
else{
	mongoose.connect("mongodb://localhost/reactroute");
}

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
