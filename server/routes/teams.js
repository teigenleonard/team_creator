var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var TeamSchema = mongoose.Schema({
  teamnumber: Number,
  first : String,
  last: String,
  date: Date
});

var Teams = mongoose.model('teams', TeamsSchema);

router.get("/", function(req, res) {
    teams.find(function(err, allTeams) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.send(allTeams);
    });
});


router.post("/", function(req, res) {

    var team = new Teams();
    team.teamnumber = req.body.teamnumber;
    team.first = req.body.first;
    team.last = req.body.last;
    team.date = req.body.date;
    team.save(function(err, savedTeam) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }

        res.send(savedTeam);
    });
});



module.exports = router;
