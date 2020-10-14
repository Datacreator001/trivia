const question = document.querySelector('#question');
const score = document.querySelector('#score');
const playerChoices = document.querySelectorAll('.choice');
playerChoices.forEach((choice) =>
	choice.addEventListener('click', checkanswer)
);
const questionNumber = document.querySelector('.hud-prefix');
console.log(questionNumber);
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
		choice1: 'chainsaw',
		choice2: 'kitchen knife',
		choice3: 'Both',
		answer: 'kitchen knife',
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
		question: 'What type of mask does the anatagonist wear in Scream?',
		choice1: 'GhostFace',
		choice2: 'ZombieFace',
		choice3: 'VanpireFace',
		answer: 'GhostFace',
	},
	{
		question: 'In which country did Halloween originate?',
		choice1: 'Australia',
		choice2: 'Italy',
		choice3: 'Ireland',
		answer: 'Ireland',
	},
	{
		question: 'What does the name Dracula mean?',
		choice1: 'Dark one',
		choice2: 'BloodSucker',
		choice3: 'Son of the Devil',
		answer: 'Son of the Devil',
	},
	{
		question: 'From which region in the world do pumpkins originate?',
		choice1: 'Central America',
		choice2: 'North America',
		choice3: 'asia',
		answer: 'Central America',
	},
	{
		question: 'When do vampires sleep?',
		choice1: 'At day',
		choice2: 'In the Morning',
		choice3: 'At Night',
		answer: 'At Night',
	},
];

let currentQuestion = 0;

function askQuestion() {
	question.innerText = questions[currentQuestion].question;
	playerChoices[0].innerText = questions[currentQuestion].choice1;
	playerChoices[1].innerText = questions[currentQuestion].choice2;
	playerChoices[2].innerText = questions[currentQuestion].choice3;
}

function checkanswer(e) {
	if (e.target.innerText === questions[currentQuestion].answer) {
		score.innerText = Number(score.innerText) + 1;
		currentQuestion = currentQuestion + 1;
		questionNumber.innerText = Number(questionNumber.innerText) + 1;
		askQuestion();
	} else if (e.target.innerText !== questions[currentQuestion].answer) {
        score.innerText = Number(score.innerText) - 1;
        const selectedChoice= e.target
        const selectedAnswer= selectedChoice.innerText
        let classToApply = selectedAnswer==currentQuestion.answer ? 'correct' :
        'incorrect'
        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(classToApply)
            askQuestion()
        },1000)
	} 

}

askQuestion();
