$(document).ready(function(){

//=================GLOBALs ========================
var questionsArray = [
{		question:"Which city has the Burj Khalifa?",  
		allAnswers:["Paris", "NYC", "Dubai", "Muscat"],
		correctAnswer: "Dubai",
},


{		question:"Which city is known for its gondolas?",  
		allAnswers:["Paris", "Madrid", "Venice",  "Athens"],
		correctAnswer: "Venice",
},

{		question:"The Great Blue Hole is off the coast of which city?",  
		allAnswers:["Mexico City", "Bridgetown", "Belize City", "Muscat"],
		correctAnswer: "Belize City",
}];

var answersCorrect=0;
var answersIncorrect=0;
var i=0;
//=================== Interval Function ======================

var number = 10;// Seconds

function run(){
    counter = setInterval(decrement, 1000)    
}
      
function decrement(){
    number--;// Decrease number by one.
    $('#timeLeft').html('<h4> Time Remaining: ' 
    					+ number 
    					+ ' seconds <h4>');// Show the number            
    if (number === 0){
    	stop();
    	clearMainBox();
    	console.log('Time Up!');// test/debug
    	$('#mainQuestion').append('<p> Times Up! The correct answer was:' 
    								+ questionsArray[i].correctAnswer 
    								+ '</p>');
    	answersIncorrect=answersIncorrect+1; //adds 1 to answers incorrect
		console.log('answers incorrect: ' + answersIncorrect);

		number=10;
		i++;
		runQuestions();
		checkAnswer();
		
    }
}

function stop(){
    clearInterval(counter);// Clears our "counter" interval
}

//=====================FUNCTIONS ===================
function clearMainBox(){
    	$('#mainQuestion').empty();
		$('#allTheAnswers').empty();
		$('#timeLeft').empty();
}

function runQuestions(){
	run();
	$('#mainQuestion').append('<h3>' + questionsArray[i].question + '</h3>');
	$('#allTheAnswers').append('<p class= "button">' + questionsArray[i].allAnswers[0] + '</p>'+
							   '<p class= "button">' + questionsArray[i].allAnswers[1] + '</p>'+
						   	   '<p id= "buttonCorrect">' + questionsArray[i].correctAnswer + '</p>'+
							   '<p class= "button">' + questionsArray[i].allAnswers[3] + '</p>');
}

function checkAnswer(){
	$('.button').on("click", function(){
		stop();  //stops timer
    	$('#mainQuestion').empty(); //clears the question
		$('#allTheAnswers').empty();//clears the answers
		$('#mainQuestion').append('<p id=correctAnswer> SORRY, WRONG ANSWER. The correct answer was:'
									+ ' ' 
									+ questionsArray[i].correctAnswer 
									+ '</p>')
		answersIncorrect=answersIncorrect+1; //adds 1 to answers incorrect
		console.log('answers incorrect: ' + answersIncorrect);
		//setTimeout(clearMainBox, 4000);		
		number=10;
		i++;
		runQuestions();
		checkAnswer();
	})

	$('#buttonCorrect').on("click", function(){
		stop();  //stops timer
    	$('#mainQuestion').empty(); //clears the question
		$('#allTheAnswers').empty();//clears the answers
		$('#mainQuestion').append('<p>YOU GUESSED RIGHT!!! YOU ARE A GLOBE TROTTER!</p>');
		answersCorrect = answersCorrect+1; //adds 1 to answers correct
		console.log('answers correct:' + answersCorrect);
		//setTimeout(clearMainBox, 4000);

		number=10;
		//run();
		i++;
		runQuestions();
		checkAnswer();

	})

}




//=====================START BUTTON FUNCTIONS ===================
function startButton () {
	var startButton = $('<button> START PLAYING! </button>');
	$('#startButtons').append(startButton);
	
	//function for on click to empty and run questions
	$('#startButtons').on("click", function(){
		$('#startButtons').remove();
		$('#timeLeft').html('<h4> Time Remaining: '); 
		console.log("Ready, set, go");		
		runQuestions(); ///calls the runQuestions
		checkAnswer();
		//checkAnswer();
	})
}
//============================ PROCESS ==========================
startButton();	
});


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

