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
  $('#inputDiv').on('click', '#generate', getNewTeams);
  // old teams button
  $('#inputDiv').on('click', '#showOld', getHistoricalTeams);
}
// DOM FUNCTIONS
// display newly generated teams
function displayNewTeams(teamsArray) {

}

// display historical teams
function displayHistoricalTeams(teamsArray) {

}

// AJAX CALLS
// get newly generated teams
function getNewTeams() {
  $.ajax({
    type: 'GET',
    url: '/new',
    success: function(res) {
      console.log('server response on /new route:', res);
      displayNewTeams(res);
    }
  });
}

// get historical teams
function getHistoricalTeams() {
  $.ajax({
    type: 'GET',
    url: '/old',
    success: function(res) {
      console.log('server response on /old route:', res);
      displayHistoricalTeams(res);
    }
  });
}
