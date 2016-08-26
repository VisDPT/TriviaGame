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

var answersCorrect = 0;
var answersIncorrect =0;

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
    	$('#mainQuestion').empty();
		$('#allTheAnswers').empty();
		$('#timeLeft').empty();
		answersIncorrect = answersIncorrect+1; //adds 1 to answers correct
		console.log('answers incorrect:' + answersIncorrect);
    	$('#mainQuestion').append('<p> Times Up! The correct answer was:' 
    								+ questionsArray[i].correctAnswer 
    								+ '</p>');
    	//i=+1;
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
						   	   '<p id= "buttonCorrect">' + questionsArray[i].allAnswers[2] + '</p>'+
							   '<p class= "button">' + questionsArray[i].allAnswers[3] + '</p>');
//}

//function checkAnswer(){
	$('.button').on("click", function(){
		stop();  //stops timer
    	$('#mainQuestion').empty(); //clears the question
		$('#allTheAnswers').empty();//clears the answers
		$('#mainQuestion').append('<p id=correctAnswer> SORRY, WRONG ANSWER. The correct answer was:'
									+ ' ' 
									+ questionsArray[i].correctAnswer 
									+ '</p>')
		answersCorrect=answersCorrect+1; //adds 1 to answers correct
		console.log('answers correct: ' + answersCorrect);

		setTimeout(clearMainBox, 3000);
		//i+=1;

	})

	$('#buttonCorrect').on("click", function(){
		stop();  //stops timer
    	$('#mainQuestion').empty(); //clears the question
		$('#allTheAnswers').empty();//clears the answers
		$('#mainQuestion').append('<p>YOU GUESSED RIGHT!!! YOU ARE A GLOBE TROTTER!</p>');
		answersIncorrect = answersIncorrect+1; //adds 1 to answers correct
		console.log('answers incorrect:' + answersIncorrect);

		setTimeout(clearMainBox, 3000);
		//i+=1;
	})
}




//=====================START BUTTON FUNCTIONS ===================
function startButton () {
	var startButton = $('<button> START PLAYING! </button>');
	$('#startButtons').append(startButton);
	
	//function for on click to empty and run questions
	$('#startButtons').on("click", function(){
		$('#startButtons').empty();
		$('#timeLeft').html('<h4> Time Remaining: '); 
		console.log("Ready, set, go");		
		runQuestions(); ///calls the runQuestions
		
		
	})
}
//============================ PROCESS ==========================
startButton();



});