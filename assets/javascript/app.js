
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var myQuestions = [
	{
		question:"In what month do we vote the President?",
		correctAns:'c',
		selectAnswer:{
			a:"January", b:"June", c:"November"
		}
	},

	{
		question:"Who is the first President?",
		correctAns:'c',
		selectAnswer:{
			a:"Abraham Lincoln", b:"George W. Bush", c:"Gorge Washington"
		}
	},

	{
		question:"What war was Eisenhower in before he was elected President?",
		correctAns:'a',
		selectAnswer:{
			a:"World War II", b:"Mexican War", c:"World War I"
		}
	},
	{
		question:"What is one of the longest River in the country?",
		correctAns:'b',
		selectAnswer:{
			a:"Ohio River", b:"Mississippi River", c:"Colorado River"
		}
	},

	
]
$("#submit").on("click", function() {
	// loop thru the answers by getting the questions one by one
for (var i=0;i < myQuestions.length;i++){
	$("#results").append("<br>"+(i+1)+"."+myQuestions[i].question+"<br>");
	console.log(myQuestions[i].question);
	// lets set a container variables for user answers and correct answers
	var uAns='';
	var correct=0;

	// now lets loop thru the selection with a ratio button

	// for (var x=0;x<myQuestions[i].selectAnswer.length;x++){
	// 	console.log(myQuestions[i].selectAnswer[x]);
	//}
	for (letters in myQuestions[i].selectAnswer){
		//$("#results").append(myQuestions[i].selectAnswer[letters]+"<br>");
		console.log(myQuestions[i].selectAnswer[letters]);

		$("#results").append("<label> <input type='radio' name='question"+i+ "' value='" +letters+"'>"+myQuestions[i].selectAnswer[letters] + "</label><br>");


	// 			'<label> '+
	// 				+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
	// 				+ letter + ': '
	// 				+ myQuestions[i].selectAnswer[letter]
	// 				+ '</label>');
	}

}
 
 })
