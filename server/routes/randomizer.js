var express = require('express');
var router = express.Router();

// ***************************
// *** Randomizer function ***
// ***************************

// *** WARNING
// !!! Returns "newTeams" array, to be appended to DOM; !!!
// !!! Appending this into DOM will require a for loop !!!
// ***

// *** INPUTS !!!
// students will be stored as an array already
// var studentArray = require("./initialData.js");
// console.log(studentArray);

// number of teams desired will be stored already
//var numTeams = require("./public/scripts/client.js");
//console.log(numTeams);
// *** !!!

// *** COMPLETE FUNCTION:
function generateNewTeam(numTeams, studentArray) {
  studentArray = shuffleArray(studentArray);
  var newTeams = createTeamsArray(numTeams, studentArray);
  console.log(newTeams);
  return newTeams;
}
// ***

// *** SUB-FUNCTION #1
// * randomize student order within studentArray
function shuffleArray(studentArray)
{
  // placeholder variable
  var temp;
  // for loop to go through each person in studentArray
  for(var i = 0; i < studentArray.length; i ++)
  {
    // here is the randomizer
    var j = Math.floor(Math.random() * (i + 1));
    // placeholder set up
    temp = studentArray[i];
    // put one item into that new place
    studentArray[i] = studentArray[j];
    // finish the swap
    studentArray[j] = temp;
  }
  // prove it works
  return studentArray;
}
// ***

// *** SUB-FUNCTION #2
// * take studentArray and chop in a loop:

// a new array of arrays


function createTeamsArray(numTeams, studentArray) {
  var newTeams = [];
  // how many would be in each team if even
  var howMany = Math.floor(studentArray.length / numTeams);

  // to be able to modify studentArray without permanently doing so
  var studentsInFunction = studentArray;

  // for loop to go through each team item within newTeams
  for(var i = 0; i < numTeams; i++) {
    // set each new team empty initially
    newTeams[i] = [];

    // for loop to add new person item within each team __up to even__
    for(var j = 0; j < howMany; j++)
    {
      // confirms not undefined, but allows for modulo leftovers
      if(studentsInFunction[0])
      {
        // sets the item within the teams within newTeams to be the first item in
        //    studentsInFunction array, and uses the new first item as next item
        //    for team within newTeams
        newTeams[i][j] = studentsInFunction[0];

        // removes item 0 from array
        studentsInFunction.shift();
      }
    }
  }
  // if uneven teams, then add leftovers fairly
  if(studentsInFunction[0])
  {
    for(i = 0; i < newTeams.length; i++)
    {
      // confirms not undefined
      if(studentsInFunction[0])
      {
        newTeams[i].push(studentsInFunction[0]);

        // removes item 0 from array
        studentsInFunction.shift();
      }
    }
  }
  return newTeams;
}
// ***

// *** WARNING
// !!! Returns "newTeams" array, to be appended to DOM; !!!
// !!! appending this into DOM will require a for loop !!!
// ***

// ***************************
// *** Randomizer function ***
// ***************************

module.exports = generateNewTeam;
