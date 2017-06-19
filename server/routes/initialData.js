var mongoose = require("mongoose");

// Defines HOW Documents will be saved to the Database
var ChiyakSchema = mongoose.Schema({
  first : String,
  last: String,
});

//var Chiyak = mongoose.model("chiyaks", ChiyakSchema);

var TeamSchema = mongoose.Schema({
  teamnumber: Number,
  first : String,
  last: String,
  date: Date
});

//var Team = mongoose.model("teams", TeamSchema);

var chiCohort = [{first: 'Teigen', last: 'Leonard'},
                {first: 'Topher', last: 'Keller'},
                {first: 'Claudia', last: 'Calderas'},
                {first: 'Emily', last: 'Hoang'},
                {first: 'Dan', last: 'Zera'},
                {first: 'Craig', last: 'Baird'},
                {first: 'Lisa', last: 'Schoofs'},
                {first: 'Anisa', last: 'Abdulkadir'},
                {first: 'Betsy', last: 'Rowley'},
                {first: 'Logan', last: 'Kelly'},
                {first: 'Keith', last: 'Tomlinson'},
                {first: 'Anna', last: 'Springfield'},
                {first: 'Olga', last: 'Engels'},
                {first: 'Y Paul', last: 'Sussman'},
                {first: 'Bri', last: 'Dickman'},
                {first: 'Kevin', last: 'Dahlberg'},
                {first: 'Erin', last: 'Kinnen'}];

var sampleHistoric = [{teamnumber: 1, first: 'Teigen', last: 'Leonard', date: '2017-03-28'},
                      {teamnumber: 1, first: 'Topher', last: 'Keller', date: '2017-03-28'},
                      {teamnumber: 1, first: 'Claudia', last: 'Calderas', date: '2017-03-28'},
                      {teamnumber: 1, first: 'Emily', last: 'Hoang', date: '2017-03-28'},
                      {teamnumber: 1, first: 'Dan', last: 'Zera', date: '2017-03-28'},
                      {teamnumber: 2, first: 'Craig', last: 'Baird', date: '2017-03-28'},
                      {teamnumber: 2, first: 'Lisa', last: 'Schoofs', date: '2017-03-28'},
                      {teamnumber: 2, first: 'Anisa', last: 'Abdulkadir', date: '2017-03-28'},
                      {teamnumber: 2, first: 'Betsy', last: 'Rowley', date: '2017-03-28'},
                      {teamnumber: 3, first: 'Logan', last: 'Kelly', date: '2017-03-28'},
                      {teamnumber: 3, first: 'Keith', last: 'Tomlinson', date: '2017-03-28'},
                      {teamnumber: 3, first: 'Anna', last: 'Springfield', date: '2017-03-28'},
                      {teamnumber: 3, first: 'Olga', last: 'Engels', date: '2017-03-28'},
                      {teamnumber: 4, first: 'Y Paul', last: 'Sussman', date: '2017-03-28'},
                      {teamnumber: 4, first: 'Bri', last: 'Dickman', date: '2017-03-28'},
                      {teamnumber: 4, first: 'Kevin', last: 'Dahlberg', date: '2017-03-28'},
                      {teamnumber: 4, first: 'Erin', last: 'Kinnen', date: '2017-03-28'}];


function createData() {
  console.log("Populating Database..");

  // chiyaks collection
  for (var i = 0; i < chiCohort.length; i++) {
    var student = new Chiyak();
    student.first = chiCohort[i].first;
    student.last = chiCohort[i].last;
    student.save();
  }
  // teams collection
  for (var j = 0; j < sampleHistoric.length; j++) {
    var row = new Team();
    row.teamnumber = sampleHistoric[j].teamnumber;
    row.first = sampleHistoric[j].first;
    row.last = sampleHistoric[j].last;
    row.date = sampleHistoric[j].date;
    row.save();
  }
}

module.exports = createData;
