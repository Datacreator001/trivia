const question= document.querySelector('#question')
const score= document.querySelector('#score')
const playerChoices=document.querySelectorAll('.choice')
playerChoices.forEach((choice) => choice.addEventListener('click', checkanswer));

let questions = [
    {
        question: 'How much did Americans spend on Halloween in 2019?',
		choice1: '$200bil',
		choice2: '$200mil',
		choice3: '$2.6bill',
		answer: '$2.6bill',
	},
	{
        question: 'Did Micheal Myers use a kitchen knife or a chainsaw?',
		choice1: 'yes',
		choice2: 'no',
		choice3: 'Both',
		answer: 'yes',
	},
	{
        question: 'Which tool does Jason Voorhees uses to claim his victims?',
		choice1: 'Machete',
		choice2: 'Gun',
		choice3: 'Scissors',
		answer: 'Machete',
	},
    
	{
		question: 'Can vampires live in the sun?',
		choice1: 'yes',
		choice2: 'no',
		choice3: 'maybe',
		answer: 'no',
	},
	{
		question: 'Which month is halloween celebrated in?',
		choice1: 'Dec',
		choice2: 'Oct',
		choice3: 'Jan',
		answer: 'Oct',
	},
	{
		question: 'How much did Americans spend on Halloween in 2019?',
		choice1: '$200bil',
		choice2: '$200mil',
		choice3: '$2.6bill',
		answer: '2.6bill',
	},
	{
		question: 'How much did Americans spend on Halloween in 2019?',
		choice1: '$200bil',
		choice2: '$200mil',
		choice3: '$2.6bill',
		answer: '2.6bill',
	},
	{
		question: 'How much did Americans spend on Halloween in 2019?',
		choice1: '$200bil',
		choice2: '$200mil',
		choice3: '$2.6bill',
		answer: '2.6bill',
	},
	{
		question: 'How much did Americans spend on Halloween in 2019?',
		choice1: '$200bil',
		choice2: '$200mil',
		choice3: '$2.6bill',
		answer: '2.6bill',
	},
	{
		question: 'How much did Americans spend on Halloween in 2019?',
		choice1: '$200bil',
		choice2: '$200mil',
		choice3: '$2.6bill',
		answer: '2.6bill',
	},
];

let currentQuestion= 0

function askQuestion() {
  question.innerText = questions[currentQuestion].question; 
  playerChoices[0].innerText=questions[currentQuestion].choice1
  playerChoices[1].innerText=questions[currentQuestion].choice2
  playerChoices[2].innerText=questions[currentQuestion].choice3
} 

function checkanswer(e) {
    
    if (e.target.innerText===questions[currentQuestion].answer) {
        score.innerText = Number(score.innerText) + 1;
        currentQuestion= currentQuestion+1
        askQuestion()
        
    }
}

askQuestion()
