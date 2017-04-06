// Create questions with arrays
var questionsArray = [Q1, Q2]

var Q1 = {
	"Question": "Which FCS team upset Michigan in the Big House in 2007?",
	"option1": "Montana State",
	"option2": "Northern Iowa",
	"option3": "Appalachian State",
	"option4": "Southeast Missouri State",
};

//Send Q1 to HTML


var Q2 = {
	"Question": "Where did perennial backup Charlie Batch go to college?",
	"option1": "Ohio",
	"option2": "Idaho",
	"option3": "Nebraska",
	"option4": "Eastern Michigan",
};

// Pseudocode
// Link HTML to app.js
// Create timeouts to automate next question
// create if statements that generate different pages based on if the answer is right or wrong

var questionsContainer = $('#questionsCol')[0];
console.log(questionsContainer);

// Puts text on the dom
questionsContainer.innerHTML = "Whatever you want"

var timeRemainingContainer = $('#timeRemaining')[0];
console.log(timeRemainingContainer);

// Puts text on the dom
//$(timeRemainingContainer).text("Stuff") 

// Create Clock
var timeLeft = 30;
var elem = document.getElementById('timeRemaining');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    nextQuestion();
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }}

// When time is up, call next question (array)





