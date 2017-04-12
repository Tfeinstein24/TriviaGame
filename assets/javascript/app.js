// Create questions with arrays

var Q1 = {
	"Question": "Which FCS team upset Michigan in the Big House in 2007?",
	"option1": "Montana State",
	"option2": "Northern Iowa",
	"option3": "Appalachian State",
	"option4": "Southeast Missouri State",
};


var Q2 = {
	"Question": "Where did perennial backup Charlie Batch go to college?",
	"option1": "Ohio",
	"option2": "Idaho",
	"option3": "Nebraska",
	"option4": "Eastern Michigan",
};

var Q3 = {
	"Question": "Who played in the famous Kick-Six Game?",
	"option1": "Alabama-LSU",
	"option2": "Alabama-Florida",
	"option3": "Alabama-Auburn",
	"option4": "Alabama-Georgia",
};

var Q4 = {
	"Question": "What is the home of the Air Raid offense?",
	"option1": "Texas Tech",
	"option2": "California",
	"option3": "Washington State",
	"option4": "Oregon",
};

var Q5 = {
	"Question": "Which school touches a rock before they run on the field?",
	"option1": "LSU",
	"option2": "Clemson",
	"option3": "South Carolina",
	"option4": "Georgia",
};

var nextQuestion = [Q1, Q2, Q3, Q4, Q5];

// Create wins and losses
var correct = 0;
var wrong = 0;

// Pseudocode
// Link HTML to app.js
// Create timeouts to automate next question
// create if statements that generate different pages based on if the answer is right or wrong

var questionsContainer = $('#questionsCol');

// Send Q1 to HTML
//function parameters
var questionSetter = function(q_num) {
	// if(nextQuestion.length <= q_num){
	// 	return false;
	// }
questionsContainer.html("<p>"+"<h5>"+nextQuestion[q_num].Question+"</h5>"+"<br><br>"+ "<button class='btn'>" +nextQuestion[q_num].option1+"</button>"+"<br><br>"+"<button class='btn'>"+nextQuestion[q_num].option2+"</button>"+"<br><br>"+"<button class='btn'>"+nextQuestion[q_num].option3+"</button>"+"<br><br>"+"<button class='btn'>"+nextQuestion[q_num].option4+"</button>"+"</p>")
	$(".btn").on("click", function(event){
	console.log(event.target.innerText);
	if (event.target.innerText === Q1.option3) {
		correct++;
		console.log(correct);
		alert("Correct!");
		timeLeft = 1;
	}

	else if (event.target.innerText === Q1.option1) {
		wrong++;
		console.log(wrong);
		alert("Wrong!");
		timeLeft = 1;
		}

		else if (event.target.innerText === Q1.option2) {
		wrong++;
		console.log(wrong);
		alert("Wrong!");
		timeLeft = 1;
		}

		else if (event.target.innerText === Q1.option4) {
		wrong++;
		console.log(wrong);
		alert("Wrong!");
		timeLeft = 1;
		}

	if (event.target.innerText === Q2.option4) {
		correct++;
		console.log(correct);
		alert("Correct!");
		timeLeft = 1;
		}

		else if (event.target.innerText === Q2.option1) {
		wrong++;
		console.log(wrong);
		alert("Wrong!");
		timeLeft = 1;
		}

		else if (event.target.innerText === Q2.option2) {
		wrong++;
		console.log(wrong);
		alert("Wrong!");
		timeLeft = 1;
		}

		else if (event.target.innerText === Q2.option3) {
		wrong++;
		console.log(wrong);
		alert("Wrong!");
		timeLeft = 1;
		}

	if (event.target.innerText === Q3.option3) {
		correct++;
		alert("Correct!");
		timeLeft = 1;
	}

	else if (event.target.innerText === Q3.option1) {
		wrong++;
		console.log(wrong);
		alert("Wrong!");
		timeLeft = 1;
		}

		else if (event.target.innerText === Q3.option2) {
		wrong++;
		console.log(wrong);
		alert("Wrong!");
		timeLeft = 1;
		}

		else if (event.target.innerText === Q3.option4) {
		wrong++;
		console.log(wrong);
		alert("Wrong!");
		timeLeft = 1;
		}


	if (event.target.innerText === Q4.option1) {
		correct++;
		alert("Correct!");
		timeLeft = 1;
	}

	else if (event.target.innerText === Q4.option2) {
		wrong++;
		console.log(wrong);
		alert("Wrong!");
		timeLeft = 1;
		}

		else if (event.target.innerText === Q4.option3) {
		wrong++;
		console.log(wrong);
		alert("Wrong!");
		timeLeft = 1;
		}

		else if (event.target.innerText === Q4.option4) {
		wrong++;
		console.log(wrong);
		alert("Wrong!");
		timeLeft = 1;
		}

	if (event.target.innerText === Q5.option2) {
		correct++;
		alert("Correct!");
		timeLeft = 1;
		$("#wins").innerHTML(correct);
		$("#losses").innerHTML(wrong);
	}

	else if (event.target.innerText === Q5.option1) {
		wrong++;
		console.log(wrong);
		alert("Wrong!");
		timeLeft = 1;
		}

		else if (event.target.innerText === Q5.option3) {
		wrong++;
		console.log(wrong);
		alert("Wrong!");
		timeLeft = 1;
		}

		else if (event.target.innerText === Q5.option4) {
		wrong++;
		console.log(wrong);
		alert("Wrong!");
		timeLeft = 1;
		}

	})
	return true;
};





// Time Container
var timeRemainingContainer = $('#timeRemaining')[0];
console.log(timeRemainingContainer);

// Puts text on the dom
//$(timeRemainingContainer).text("Stuff") 

// Create Clock
var timeLeft = 0;
var elem = document.getElementById('timeRemaining');
var timerId = setInterval(countdown, 1000);
var iter = 0;

// Reset Clock
var resetTimer = function() {
	timeLeft = 20;
	elem = document.getElementById('timeRemaining');
	timerId = setInterval(countdown, 1000);
}

// Run Timer

function countdown() {
  if (timeLeft == 0) {
  	clearInterval(timerId);
  	if(questionSetter(iter)){
  		resetTimer();
  	}
    
    console.log(resetTimer);
    iter++;
} 
  else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }};




// When time is up, call next question (array)