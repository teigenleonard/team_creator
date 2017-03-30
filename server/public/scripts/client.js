// ARRAYS FOR TESTING PURPOSES
var team1 = [{first: 'Teigen', last: 'Leonard'}, {first: 'Topher', last: 'Keller'}, {first: 'Claudia', last: 'Calderas'}, {first: 'Emily', last: 'Hoang'}, {first: 'Dan', last: 'Zera'}];
var team2 = [{first: 'Craig', last: 'Baird'}, {first: 'Lisa', last: 'Schoofs'}, {first: 'Anisa', last: 'Abdulkadir'}, {first: 'Betsy', last: 'Rowley'}];
var team3 = [{first: 'Logan', last: 'Kelly'}, {first: 'Keith', last: 'Tomlinson'}, {first: 'Anna', last: 'Springfield'}, {first: 'Olga', last: 'Engels'}];
var team4 = [{first: 'Y Paul', last: 'Sussman'}, {first: 'Bri', last: 'Dickman'}, {first: 'Kevin', last: 'Dahlberg'}, {first: 'Erin', last: 'Kinnen'}];
var testArray = [team1, team2, team3, team4];
var historicalTest = [team1, team2, team3, team4, team4, team3, team2, team1, team2, team3, team4, team1, team3, team2, team1, team4];

$(document).ready(function() {
  // REMOVE THIS FUNCTION CALL WHEN READY TO TEST FULL FUNCTIONALITY
  // JUST USING THIS TO TEST THE REST OF CLIENT.JS FUNCTIONALITY
  displayHistoricalTeams(historicalTest);
  // displayNewTeams(testArray);
  // UNCOMMENT init() WHEN READY TO TEST FULL FUNCTIONALITY
  // init();
});

// INITIALIZE THE DOCUMENT
function init() {
  addEventListeners();
}

// EVENT LISTENERS
function addEventListeners() {
  // generate button
  $('#generateTeams').on('click', getNewTeams);
  // old teams button
  $('#showHistory').on('click', getHistoricalTeams);
}
// DOM FUNCTIONS
// display newly generated teams
function displayNewTeams(teamsArray) {
  $el = $('#outputDiv');
  $el.empty();
  $el.append('<h1>New Teams</h1>');
  displayTeams($el, teamsArray);
  // for (var i = 0; i < teamsArray.length; i++) {
  //   var teamNumber = i + 1; // 1-index team numbers
  //   var team = teamsArray[i]; // pull individual team out of teamsArray
  //   // each team will be displayed in its own table
  //   $el.append('<div class="col-xs-3"><table class="table"></table></div>');
  //   var $table = $el.children().last().children().first();
  //   // table header displays "Team #"
  //   $table.append('<thead><tr><th>Team ' + teamNumber + '</th></tr></thead><tbody></tbody>');
  //   // each team member is displayed on their own row
  //   team.forEach(function(person) {
  //     var name = person.first + ' ' + person.last;
  //     $table.append('<tr><td>' + name + '</tr></td>');
  //   });
  // } // end loop through teamsArray
} // end displayNewTeams()

// display historical teams
function displayHistoricalTeams(teamsArray) {
  $el = $('#outputDiv');
  $el.empty();
  $el.append('<h1>Historical Teams</h1>');
  displayTeams($el, teamsArray);
  // for (var i = 0; i < teamsArray.length; i++) {
  //   var teamNumber = i + 1; // 1-index team numbers
  //   var team = teamsArray[i]; // pull individual team out of teamsArray
  //   // each team will be displayed in its own table
  //   $el.append('<div class="col-xs-3"><table class="table"></table></div>');
  //   var $table = $el.children().last().children().first();
  //   // table header displays "Team #"
  //   $table.append('<thead><tr><th>Team ' + teamNumber + '</th></tr></thead><tbody></tbody>');
  //   // each team member is displayed on their own row
  //   team.forEach(function(person) {
  //     var name = person.first + ' ' + person.last;
  //     $table.append('<tr><td>' + name + '</tr></td>');
  //   });
  // } // end loop through teamsArray
}

function displayTeams($el, teamsArray) {
  for (var i = 0; i < teamsArray.length; i++) {
    var teamNumber = i + 1; // 1-index team numbers
    var team = teamsArray[i]; // pull individual team out of teamsArray
    // each team will be displayed in its own table
    $el.append('<div class="col-xs-3"><table class="table"></table></div>');
    var $table = $el.children().last().children().first();
    // table header displays "Team #"
    $table.append('<thead><tr><th>Team ' + teamNumber + '</th></tr></thead><tbody></tbody>');
    // each team member is displayed on their own row
    team.forEach(function(person) {
      var name = person.first + ' ' + person.last;
      $table.append('<tr><td>' + name + '</tr></td>');
    });
  } // end loop through teamsArray
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
      displayNewTeams(res);
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
      displayHistoricalTeams(res);
    } // end success
  }); // end ajax
} // end getHistoricalTeams()
