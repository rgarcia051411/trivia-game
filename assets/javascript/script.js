function counter(){
        gitCounter = setInterval(decrement,1000);
    };
    var number = 5;
    function decrement()
    {
        console.log("number",number);
        number--;
        $("#timer").text("remaining time:" + number);
        //if once number hits zero
        if (number === 0)
        {
            clearInterval(gitCounter);
            console.log("outoftime");
        };    
    }






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


			var correct = 0;
    		var incorrect = 0;
    		var answerQuestion = 0;
   
    








