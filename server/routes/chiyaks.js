var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var ChiyaksSchema = mongoose.Schema({
  first : String,
  last : String
});


var chiyaks = mongoose.model('chiyaks', ChiyaksSchema);


module.exports = router;
