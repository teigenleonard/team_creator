var express = require('express');
var router = express.Router();
var randomizer = require('./randomizer.js');

var mongoose = require('mongoose');

var ChiyaksSchema = mongoose.Schema({
    first: String,
    last: String
});


var Chiyaks = mongoose.model('chiyaks', ChiyaksSchema);


router.get("/:numTeams", function(req, res) {
    var numTeams = parseInt(req.params.numTeams);
    var teams = [];
    console.log(numTeams);
    Chiyaks.find(function(err, allChiyaks) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        teams = randomizer(numTeams, allChiyaks);
        res.send(teams);
    });
});


router.post("/", function(req, res) {

    var chiyak = new Chiyaks();
    chiyak.first = req.body.first;
    chiyak.last = req.body.last;
    Chiyaks.save(function(err, savedChiyak) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }

        res.send(savedChiyak);
    });
});

module.exports = router;
