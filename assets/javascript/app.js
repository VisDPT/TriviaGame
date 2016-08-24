$(document).ready(function(){


//=================GLOBALs ========================
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
		question:"Which city is known for its gondolas?",  
		allAnswers:["Venice", "Paris", "Madrid", "Athens"],
		correctAnswer: "Venice",
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
	
	//function for on click to empty and run questions
	$('#startButtons').on("click", function(){
		 $('#startButtons').empty(); 
		console.log("Ready, set, go");
		runQuestions();
	})
}

function runQuestions(){
	run();
	$('#mainQuestion').append("<h3>" + question1.question + "</h3>");
	$('#allTheAnswers').append("<p>" + question1.allAnswers[0] + "</p>"+
							   "<p>" + question1.allAnswers[1] + "</p>"+
						   	   "<p>" + question1.allAnswers[2] + "</p>"+
							   "<p>" + question1.allAnswers[3] + "</p>");
	
}

//------------------------Timer FUNCTIONS------------
var number = 10;// Set our number counter to 30.

function run(){
    counter = setInterval(decrement, 1000)    
}

        
function decrement(){
    number--;// Decrease number by one.
    $('#timeLeft').html('<h2>' + number + '</h2>');// Show the number            // Once number hits zero...
    if (number === 0){
    	stop();
    	console.log('Time Up!')// test/debug
    }
}

function stop(){
    clearInterval(counter);// Clears our "counter" interval
}


//====================== PROCESS ===================

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