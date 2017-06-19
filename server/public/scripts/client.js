// ARRAYS FOR TESTING PURPOSES
var team1 = [{first: 'Teigen', last: 'Leonard'}, {first: 'Topher', last: 'Keller'}, {first: 'Claudia', last: 'Calderas'}, {first: 'Emily', last: 'Hoang'}, {first: 'Dan', last: 'Zera'}];
var team2 = [{first: 'Craig', last: 'Baird'}, {first: 'Lisa', last: 'Schoofs'}, {first: 'Anisa', last: 'Abdulkadir'}, {first: 'Betsy', last: 'Rowley'}];
var team3 = [{first: 'Logan', last: 'Kelly'}, {first: 'Keith', last: 'Tomlinson'}, {first: 'Anna', last: 'Springfield'}, {first: 'Olga', last: 'Engels'}];
var team4 = [{first: 'Y Paul', last: 'Sussman'}, {first: 'Bri', last: 'Dickman'}, {first: 'Kevin', last: 'Dahlberg'}, {first: 'Erin', last: 'Kinnen'}];
var testArray = [team1, team2, team3, team4];
var historicalTest = [team1, team2, team3, team4, team4, team3, team2, team1, team2, team3, team4, team1, team3, team2, team1, team4];

$(document).ready(function() {
  // REMOVE THE NEXT 2 FUNCTION CALLS WHEN READY TO TEST FULL FUNCTIONALITY
  // JUST USING THIS TO TEST THE REST OF CLIENT.JS FUNCTIONALITY

  displayTeams(historicalTest, true);
  displayTeams(testArray, false);
  // UNCOMMENT init() WHEN READY TO TEST FULL FUNCTIONALITY
  //init();
});

// INITIALIZE THE DOCUMENT
function init() {
  // addEventListeners();
}

  //displayTeams(historicalTest, true);
  //displayTeams(testArray, false);
  // UNCOMMENT init() WHEN READY TO TEST FULL FUNCTIONALITY
  addEventListeners();

// EVENT LISTENERS
function addEventListeners() {
  // generate button
  $('#generateTeams').on('click', function(event) {
    event.preventDefault();
    getNewTeams();
  });

  // old teams button
  $('#showHistory').on('click', function(event) {
    event.preventDefault();
    getHistoricalTeams();
  });
}

// DOM FUNCTIONS
// display array of teams
function displayTeams(teamsArray, isHistoricalData) {
  // decide on heading text based on which set of data we're receiving
  var heading = isHistoricalData ? (heading = 'Historical Teams') : (heading = 'New Teams');
  var teams = teamsArray.length; // total number of teams to display
  var teamsPerRow = 4;
  var rows = Math.ceil(teams / teamsPerRow);
  var teamNumber = 1;
  $el = $('#outputDiv');
  $el.empty(); // empty the outputDiv
  $el.append('<h1>' + heading + '</h1>'); // display the appropriate header
  while (rows > 0) {
    $el.append('<div class="row"></div>');
    var $row = $el.children().last();
    var count = 0;
    while (count < teamsPerRow && teamNumber <= teams) { // if we still have teams to print, continue
      var team = teamsArray[teamNumber - 1]; // pull individual team out of teamsArray (zero indexed)
      // create a table to hold the team that spans a quarter of the page
      $row.append('<div class="col-xs-3"><table class="table table-bordered table-striped"></table></div>');
      var $table = $row.children().last().children().first();
      // table header displays "Team #"
      $table.append('<thead><tr><th><span class= "glyphicon glyphicon-user"></span> Team ' + teamNumber + '</th></tr></thead><tbody></tbody>');
      // each team member is displayed on their own table row
      team.forEach(function(person) {
        var name = person.first + ' ' + person.last;
        $table.append('<tr><td>' + name + '</tr></td>');
      });
      count++; // increment counter for how many teams are displayed in the current row
      teamNumber++; // increment team counter to display in table header & verify we have not reached the end of the array
    } // end teamsPerRow hile-loop
    rows--; // decrement rows counter
  } // end rows while-loop
}

function displayHistoricalTeams(historicalArray) {
  console.log(historicalArray);
  for (var i = 0; i < historicalArray.length; i++) {
    var currentTeamSet = historicalArray[i];
    console.log('current team set:', currentTeamSet);
    displayTeams(currentTeamSet.teamsArray, true);
  }
}

// AJAX CALLS
// get newly generated teams
function getNewTeams() {
  console.log('numTeams:', $('#numberOfTeams').val());
  $.ajax({
    type: 'GET',
    url: '/new/' + $('#numberOfTeams').val(),
    //data: {numTeams: $('#numberOfTeams').val()},
    success: function(res) {
      console.log('server response on /new route:', res);
      // dispaly new teams on the DOM
      // res = [[{Team1-Member1}, {T1-M2}, {T1-M3}], [{Team2-Member1}, {T2-M2}, {T2-M3}], [team3], [team4]];
      displayTeams(res, false);
      postTeam(res);
    } // end success
  }); // end ajax
} // end getNewTeams()

// get historical teams
function getHistoricalTeams() {
  console.log('show history clicked');
  $.ajax({
    type: 'GET',
    url: '/old',
    success: function(res) {
      console.log('server response on /old route:', res);
      // display old teams on the DOM
      //displayTeams(res, true);
      displayHistoricalTeams(res);
    } // end success
  }); // end ajax
} // end getHistoricalTeams()

function postTeam(teamsArray) {
  $.ajax({
    type: 'POST',
    url: '/old',
    data: {teamsArray: teamsArray},
    success: function(res) {
      console.log('we survived and posted:', res);
    }
  });
}
