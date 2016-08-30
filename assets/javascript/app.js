$(document).ready(function(){

//=================GLOBALs ========================
var questionsArray = [
{		question:"Which city has the Burj Khalifa?",  
		allAnswers:["Paris", "NYC", "Dubai", "Muscat"],
		correctAnswer: "Dubai",
		image: '<img src="assets/images/Burj_Khalifa.jpg"/; height= 250px; width =250px;>',
},

{		question:"Which city is known for its gondolas?",  
		allAnswers:["Paris", "Madrid", "Venice",  "Athens"],
		correctAnswer: "Venice",
		image: '<img src="assets/images/gondola.jpg"/; height= 200px; width =300px;>',
},

{		question:"Which city is known for its Eiffel Tower?",  
		allAnswers:[ "Madrid", "Venice", "Paris", "Athens"],
		correctAnswer: "Paris",
		image: '<img src="assets/images/Eiffel_tower.jpg"/; height= 250px; width =300px;>',		
},
{		question:"Which city has parts of the Great Wall of China?",  
		allAnswers:[ "Hong Kong", "Seoul", "Beijing", "Manila"],
		correctAnswer: "Beijing",
		image: '<img src="assets/images/greatwall.jpg"/; height= 250px; width =300px;>',		
},

{		question:"The Great Blue Hole is off the coast of which city?",  
		allAnswers:["Mexico City",  "Bridgetown", "Belize City", "Kingston"],
		correctAnswer: "Belize City",
		image: '<img src="assets/images/Belize.jpg"/; height= 250px; width =300px;>',
}];

var answersCorrect=0;
var answersIncorrect=0;
var unanswered =0;
var i=0;

//=================== Interval Function ======================

var number = 15;// Seconds

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
    								+ '</p>'
    								+'<p>'
    								+questionsArray[i].image 
    								+ '</p>');
    	unanswered++;
		console.log('unanswered: ' + unanswered);
		setTimeout (clearMainBox, 3000);
		setTimeout(gameReset, 3000);
		
    }
}

function stop(){
    clearInterval(counter);// Clears our "counter" interval
}

//=====================FUNCTIONS ===================
function clearMainBox(){
    	$('#mainQuestion').empty();
		$('#allTheAnswers').empty();
		//$('#timeLeft').empty();
}

function runQuestions(){
	//run();
	if (i<questionsArray.length){
	$('#mainQuestion').append('<h3>' + questionsArray[i].question + '</h3>');
	$('#allTheAnswers').append('<p class= "button">' + questionsArray[i].allAnswers[0] + '</p>'+
							   '<p class= "button">' + questionsArray[i].allAnswers[1] + '</p>'+
						   	   '<p id= "buttonCorrect">' + questionsArray[i].correctAnswer + '</p>'+
							   '<p class= "button">' + questionsArray[i].allAnswers[3] + '</p>');
}
	else{
	stop();
	setTimeout (clearMainBox, 3000);
	$('#timeLeft').empty();
	$('#mainQuestion').append('<p> Unanswered: ' + unanswered + '</p>'
								+'<p> Correct Answers: ' + answersCorrect + '</p>'
								+'<p> Incorrect Answers: ' + answersIncorrect + '</p>');
	setTimeout (startButton, 3000);
	}
}






function checkAnswer(){
	$('.button').on("click", function(){
		stop();  //stops timer
    	$('#mainQuestion').empty(); //clears the question
		$('#allTheAnswers').empty();//clears the answers
		$('#mainQuestion').append('<p id=correctAnswer> SORRY, WRONG ANSWER. The correct answer was:'
									+ ' ' 
									+ questionsArray[i].correctAnswer 
									+ '</p>'
									+'<p>'
    								+questionsArray[i].image 
    								+ '</p>')
		
			answersIncorrect++;  
			console.log('answers incorrect: ' + answersIncorrect);
			setTimeout (clearMainBox, 3000);
			setTimeout(gameReset, 3000);	
	})

	$('#buttonCorrect').on("click", function(){
		stop();  //stops timer
    	$('#mainQuestion').empty();  
		$('#allTheAnswers').empty(); 
		$('#mainQuestion').append('<p>YOU GUESSED RIGHT!!! YOU ARE A GLOBE TROTTER!</p>'
									+'<p>'
    								+questionsArray[i].image 
    								+ '</p>');
		
			answersCorrect++;  
			console.log('answers correct:' + answersCorrect);
			setTimeout (clearMainBox, 3000);
			setTimeout(gameReset, 3000);
				
	})
}

function gameReset(){
	if (i<questionsArray.length){
	number=15;
	i++;
	runQuestions();
	run();
	checkAnswer();
} else {
	stop();
	setTimeout (clearMainBox, 3000);
	$('#timeLeft').empty();

	$('#mainQuestion').append('<p> Unanswered: ' + unanswered + '</p>'
								+'<p> Correct Answers: ' + answersCorrect + '</p>'
								+'<p> Incorrect Answers: ' + answersIncorrect + '</p>');
	setTimeout (startButton, 3000);

	

}

}



function displayEndResult(){
	if (i>4)
	stop();
	setTimeout (clearMainBox, 3000);
	$('#mainQuestion').append('<p> Unanswered: ' + unanswered + '</p>'
								+'<p> Correct Answers: ' + correctAnswer + '</p>'
								+'<p> Incorrect Answers: ' + incorrectAnswer + '</p>')
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
		run();
		checkAnswer();
	})
}
//============================ PROCESS ==========================
startButton();	
//displayEndResult();


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