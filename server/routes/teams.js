var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var TeamsSchema = mongoose.Schema({
  team : Array
});

var teams = mongoose.model('teams', TeamsSchema);

module.exports = router;
