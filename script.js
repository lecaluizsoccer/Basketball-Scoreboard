// getting the DOM elements

let homeScore = document.getElementById("score-home")
let guestScore = document.getElementById("score-guest")

// set scores to zero

let homeScoreCount = 0
let guestScoreCount = 0;

// home display

function updateHomeScore(points){
    homeScoreCount += points;
    homeScore.textContent = homeScoreCount;
}

// guest display

function updateGuestScore(points) {
  guestScoreCount += points;
  guestScore.textContent = guestScoreCount;
}