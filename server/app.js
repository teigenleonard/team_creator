// ARRAYS FOR TESTING PURPOSES
var team1 = [{first: 'Teigen', last: 'Leonard'}, {first: 'Topher', last: 'Keller'}, {first: 'Claudia', last: 'Calderas'}, {first: 'Emily', last: 'Hoang'}, {first: 'Dan', last: 'Zera'}];
var team2 = [{first: 'Craig', last: 'Baird'}, {first: 'Lisa', last: 'Schoofs'}, {first: 'Anisa', last: 'Abdulkadir'}, {first: 'Betsy', last: 'Rowley'}];
var team3 = [{first: 'Logan', last: 'Kelly'}, {first: 'Keith', last: 'Tomlinson'}, {first: 'Anna', last: 'Springfield'}, {first: 'Olga', last: 'Engels'}];
var team4 = [{first: 'Y Paul', last: 'Sussman'}, {first: 'Bri', last: 'Dickman'}, {first: 'Kevin', last: 'Dahlberg'}, {first: 'Erin', last: 'Kinnen'}];
var testArray = [team1, team2, team3, team4];

//General Modules
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

//Route Imports

//Database Variables
var mongoose = require("mongoose");
//var mongoURI = "mongodb://localhost:27017/Employees";
//var MongoDB = mongoose.connect(mongoURI).connection;

//error connecting to the database
//MongoDB.on("error", function(err){
//  console.log("Mongo Connection Error :" + err);
//});

//If we successfully hooked up to the database, let us know!
//MongoDB.once("open", function(){
//  console.log("Tots connected to Mongo, meow.");
//});

//Set the port
app.set("port", (process.env.PORT || 5000));

//Middleware hookups
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("server/public/"));

//Routes
app.get("/", function(req,res){
  res.sendFile(path.resolve("server/public/views/index.html"));
});

//Listen
app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});
