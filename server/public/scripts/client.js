$(document).ready(function() {
  console.log("jquery sourced");
});

// INITIALIZE THE DOCUMENT
function init() {
  addEventListeners();
}

// EVENT LISTENERS
function addEventListeners() {
  // generate button
  $('#inputDiv').on('click', '#generate', function() {

  });
  // old teams button
  $('#inputDiv').on('click', '#showOld', getHistoricalTeams);
}
// DOM FUNCTIONS
// display newly generated teams

// display historical teams

// AJAX CALLS
// get newly generated teams

// get historical teams
function getHistoricalTeams() {
  $.ajax({
    type: 'GET',
    url: '/old',
    success: function(res) {
      console.log('server response on ')
    }
  })
}
