$(document).ready(function() {
  init();
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

}

// display historical teams
function displayHistoricalTeams(teamsArray) {
  $el = $('#outputDiv');
  $el.empty();
  $el.append('<h1>Historical Teams</h1>');
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
