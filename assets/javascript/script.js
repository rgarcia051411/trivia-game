// var questionArea = $('#trivia-area');
var counterStart = 30;





// Trivia Question
// ==============================

var triviaData = [
		{

			question:"Whos was the lead singer of the band Queen?",
			choices:["Donald Trump", "Pink", "lil Wayne", "Freddie Mercury"],
			anser: "Freddie Mercury"
		},

		{
			question:"What was the highest selling album of the 1980's?",
			choices:["Take my time", "Thriller -Michael Jackson", "Turn back", "Point of Entry"],
			anser: "Thriller -Michael Jackson"

		},

		{
			question1:"In 2012, Psy got the record for most YouTube views ever, passing what artist who previusly held the record?",
			choices:["Justin Bieber", "Madonna", "Eminem", "Selena Gomez"],
			anser: "Justin Bieber"
		},

		{
			question1:"Whos is the most successfil UK solo artist in the US?",
			choices:["Gordon ramsy", "Adele", "Elton John", "Ed Sheeran"],
			anser: "Elton John"
		},

		{
			question1:"What was Jimi Hendrix's real name?",
			choices:["James Marshall Hendrix", "Robinson Garcia", "Jeemay drix", "JimJim Hendo"],
			anser: "James Marshall Hendrix"
		}
		];


// Declare game variable
// var game = {
// 	question: questions,
// 	currentQuesion: 0,
// 	counter: counterStart,
// 	correct: 0;
// 	incorrect:
// }



// Functions
// ===========================

function game(){
	var questions = triviaData;
	var currentQuesion = 0;
	correct = 0;
	incorrect = 0;
	countdown();

}

function countDownTimer(){
	counterStart--;
	$('#countDownTimer').html(counter)
	console.log(counter);
}
countDownTimer();



