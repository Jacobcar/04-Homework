const startbutton = document.getElementById("startbtn"); 
const nextButton = document.getElementById("nextbtn");
const quizquestionsElement = documet.getElementById("quizquestions");
const questionElement = document.getElementById("question");
// setup for the functions further down

startbutton.addEventListener("click", startQuiz)
// to make my start button work

let scrambleQuestions, currentQuestion
// to randomize the questions after start.

function startQuiz() {
    console.log("start!")
    scrambleQuestions = questions.sort(()=> Math.random() - .5)
    currentQuestion = 0
// to start the quiz with randomized questions
}

function nextQuestion() {
    showQuestion(scrambleQuestions[currentQuestion])
}
// the next button to move on after time ran out(backup for the timer)

function showQuestion(question) {
    questionElement.innerText =question.question
    question.answers.forEach(answer => {
        const button =document.createElement("button")
        button.innerText = answer.text
        button.classList.add("ques-btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonElement.appendchild(button)
    });
}
// to make the question show after answering the previous one

function ResetPage() {
    nextButton.classList.add("hidden")
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}
// so it doesn't show the same page twice.

// function selectAnswer(e) {}
// trial for when the questions were answered correct or incorrect, didn't quite work out.

const questions = [
    {
        question: "what does <script></script> do?",
        answers: [
            { text: "link the .js",correct: true },
            { text: "link the .css", correct:false},
            { text: "link the .html", correcrt:false},
            { text: "link the .md", correct:false},
        ]
    },
    { question: "what is a common resource for coding questions?",
    answers: [
        { text: "w4schools",correct: false},
        { text: "w3schools",correct: true},
        { text: "w2schools",correct: false},
        { text: "w1schools",correct: false},
      ]
    },
    {
        question: "which one of the following is a coding language?",
        answers: [
            {text: "cobra",correct: false},
            {text: "viper",correct: false},
            {text: "python",correct: true},
            {text: "bushmaster",correct: false},
        ]
    }
]
// the code of the hour, the questions & answers themselves

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + "1:00" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var  sixtySeconds= 60 * 1,
        display = $('#time');
    startTimer(sixtySeconds, display);
});
// triedout this timer from mdn & stack.




