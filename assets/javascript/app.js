$(document).ready(function(){


//=================GLOBALs ========================
var questionsArray = [
{		question:"Which city has the Burj Khalifa?",  
		allAnswers:["Paris", "NYC", "Dubai", "Muscat"],
		correctAnswer: "Dubai",
},

{		question:"Which city has the Taj Mahal?",  
		allAnswers:["Mumbai", "Agra", "Dubai", "Muscat"],
		correctAnswer: "Agra",
},

{		question:"Which city is known for its gondolas?",  
		allAnswers:["Venice", "Paris", "Madrid", "Athens"],
		correctAnswer: "Venice",
},

{		question:"The Great Blue Hole is off the coast of which city?",  
		allAnswers:["Mexico City", "Belize City", "Bridgetown", "Kingston", "Muscat"],
		correctAnswer: "Belize City",
}];






//multidimensional array
//=====================FUNCTIONS ===================
function startButton () {
	var startButton = $('<button> START PLAYING! </button>');
	$('#startButtons').append(startButton);
	
	//function for on click to empty and run questions
	$('#startButtons').on("click", function(){
		 $('#startButtons').empty();
		 $('#timeLeft').html('<h4> Time Remaining: '); 
		console.log("Ready, set, go");		
		runQuestions();
		checkAnswer();
	})
}


function runQuestions(){
	run();
	$('#mainQuestion').append('<h3>' + questionsArray[0].question + '</h3>');
	$('#allTheAnswers').append('<p class= "button">' + questionsArray[0].allAnswers[0] + '</p>'+
							   '<p class= "button">' + questionsArray[0].allAnswers[1] + '</p>'+
						   	   '<p id= "buttonCorrect">' + questionsArray[0].correctAnswer + '</p>'+
							   '<p class= "button">' + questionsArray[0].allAnswers[3] + '</p>');
}

function checkAnswer(){
	$('.button').on("click", function(){
		stop();  //stops timer
    	$('#mainQuestion').empty(); //clears the question
		$('#allTheAnswers').empty();//clears the answers
		$('#mainQuestion').append('<p id=correctAnswer> SORRY, WRONG ANSWER. The correct answer was:'+ ' ' + questionsArray[0].correctAnswer + '</p>')
		
	})

	$('#buttonCorrect').on("click", function(){
		stop();  //stops timer
    	$('#mainQuestion').empty(); //clears the question
		$('#allTheAnswers').empty();//clears the answers
		$('#mainQuestion').append('<p>YOU GUESSED RIGHT!!! YOU ARE A GLOBE TROTTER!</p>');
		

	})
}


//------------Simple timer for after the answer displayed---------

//------------------------Timer FUNCTIONS------------
var number = 10;// Set our number counter to 30.

function run(){
    counter = setInterval(decrement, 1000)    
}

        
function decrement(){
    number--;// Decrease number by one.
    $('#timeLeft').html('<h4> Time Remaining: ' + number + ' seconds <h4>');// Show the number            
    if (number === 0){
    	stop();
    	$('#mainQuestion').empty();
		$('#allTheAnswers').empty();
		$('#timeLeft').empty();
    	console.log('Time Up!');// test/debug
    	$('#mainQuestion').append('<p> Times Up! The correct answer was:' + questionsArray[0].correctAnswer + '</p>');
    }
}

function stop(){
    clearInterval(counter);// Clears our "counter" interval
}


//====================== PROCESS ===================

startButton();
	

});

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



/*
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
*/