$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var triviaData = [
		{

			question:"Whos was the lead singer of the band Queen?",
			choices:["Donald Trump", "Pink", "lil Wayne", "Freddie Mercury"],
			answer: "Freddie Mercury"
		},

		{
			question:"What was the highest selling album of the 1980's?",
			choices:["Take my time", "Thriller -Michael Jackson", "Turn back", "Point of Entry"],
			answer: "Thriller -Michael Jackson"

		},

		{
			question1:"In 2012, Psy got the record for most YouTube views ever, passing what artist who previusly held the record?",
			choices:["Justin Bieber", "Madonna", "Eminem", "Selena Gomez"],
			answer: "Justin Bieber"
		},

		{
			question:"Whos is the most successfil UK solo artist in the US?",
			choices:["Gordon ramsy", "Adele", "Elton John", "Ed Sheeran"],
			answer: "Elton John"
		},

		{
			question:"What was Jimi Hendrix's real name?",
			choices:["James Marshall Hendrix", "Robinson Garcia", "Jeemay drix", "JimJim Hendo"],
			answer: "James Marshall Hendrix"
		}
		];

// var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + triviaData[questionSelection].question + "</h3>");
  $("#buttonA").text(triviaData[questionSelection].choices[0]).show();
  $("#buttonB").text(triviaData[questionSelection].choices[1]).show();
  $("#buttonC").text(triviaData[questionSelection].choices[2]).show();
  $("#buttonD").text(triviaData[questionSelection].choices[3]).show();
//  getAnswer();  
//  nextQuestion(index);
}

//function nextQuestion() {
//	index = index++;
//	console.log(index);
//}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(answerchoice === triviaData[questionSelection].answer){
 	console.log("correct")
 } else{
 	console.log("wrong")
 }
 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


//	$('#start').click(countdownTimer.start);
});