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

// EVENT LISTENERS
function addEventListeners() {
  // generate button
  $('#generateTeams').on('click', getNewTeams);
  // old teams button
  $('#showHistory').on('click', getHistoricalTeams);
}

// DOM FUNCTIONS
// display array of teams
function displayTeams(teamsArray, isHistoricalData) {
  // decide on heading text based on which set of data we're receiving
  var heading = isHistoricalData ? (heading = 'Historical Teams') : (heading = 'New Teams');
  var teams = teamsArray.length;
  console.log(teamsArray);
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
      $table.append('<thead><tr><th><span class= "glyphicon glyphicon-user"></span>  Team ' + teamNumber + '</th></tr></thead><tbody></tbody>');
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

// AJAX CALLS
// get newly generated teams
function getNewTeams() {
  $.ajax({
    type: 'GET',
    url: '/new',
    success: function(res) {
      console.log('server response on /new route:', res);
      // dispaly new teams on the DOM
      // res = [[{Team1-Member1}, {T1-M2}, {T1-M3}], [{Team2-Member1}, {T2-M2}, {T2-M3}], [team3], [team4]];
      displayTeams(res, false);
    } // end success
  }); // end ajax
} // end getNewTeams()

// get historical teams
function getHistoricalTeams() {
  $.ajax({
    type: 'GET',
    url: '/old',
    success: function(res) {
      console.log('server response on /old route:', res);
      // display old teams on the DOM
      displayTeams(res, true);
    } // end success
  }); // end ajax
} // end getHistoricalTeams()
