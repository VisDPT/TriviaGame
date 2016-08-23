$(document).ready(function(){


//=================GLOBALs ========================
var questions = "";
var answer= "";

var question1 = {
		question:"Which city has the Burj Khalifa?",  
		allAnswers:["Paris", "NYC", "Dubai", "Muscat"],
		correctAnswer: "Dubai",
}

var question2 = {
		question:"Which city has the Taj Mahal?",  
		allAnswers:["Mumbai", "Agra", "Dubai", "Muscat"],
		correctAnswer: "Agra",
}

var question3 = {
		question:"Which city has an Incan citadel set high in the Andes Mountains in Peru",  
		allAnswers:["Mexico City", "Agra", "Dubai", "Muscat"],
		correctAnswer: "Agra",
}

var question4 = {
		question:"The is of the coast of which city?",  
		allAnswers:["Mexico City", "Belize City", "Bridgetown", "Kingston", "Muscat"],
		correctAnswer: "Belize City",
}

var questionsArray = [question1, question2, question3, question4];

//=====================FUNCTIONS ===================
function startButton () {
	var startButton = $('<button> START PLAYING! </button>');
	$('#startButtons').append(startButton);
	$('#startButtons').on("click", function(){//on click,
		$('#startButtons').empty(); //empties
		$('#mainQuestion').append("<h3>" + question1.question + "</h3>");
		$('#allTheAnswers').append("<p>" + question1.allAnswers[0] + "</p>"+
									"<p>" + question1.allAnswers[1] + "</p>"+
									"<p>" + question1.allAnswers[2] + "</p>"+
									"<p>" + question1.allAnswers[3] + "</p>");
		
		
		console.log("Ready, set, go");
		})
}



//======================START BUTTON ===================

startButton();
	














})

/*You'll create a trivia game that shows only one question until the player answers it or their time runs out.

If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

The scenario is similar for wrong answers and time-outs.

If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page). */



// Create html skeleton
		// Instruct the user how to play

	// Setup the game
		// Start Button starts game
		// Screen Displays 
				//time remaining for question
				//multiple choice answers
				//hover effects and click over answers

		//user clicks answer
			//display for right answer
			//display for wrong answer
		//RESET
			// to new question after few secs
			//seconds reset
			//and display new question
		//at end of game, displays:
			// timer stops
			// Correct Answers
			//incorrect answers
			//unanswered
			//START OVER BUTTON - that does not reload page