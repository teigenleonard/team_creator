var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var TeamSchema = mongoose.Schema({
  date: Date,
  teamsArray: Array
});

var Teams = mongoose.model('teams', TeamSchema);

router.get("/", function(req, res) {
    Teams.find(function(err, allTeams) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.send(allTeams);
    });
});


router.post("/", function(req, res) {
    var teamsToSave = new Teams();
    teamsToSave.date = new Date();
    teamsToSave.teamsArray = req.body.teamsArray;
    teamsToSave.save(function(err, savedTeam) {
        if (err) {
            console.log('error posting teams', err);
            res.sendStatus(500);
        }
        res.send(savedTeam);
    });
});



module.exports = router;
