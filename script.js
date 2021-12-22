const startbtn = document.getElementById("startbtn");
const quizquestionsElement = documet.getElementById("quizquestions");

startbtn.addEventListener("click", startbtn)

function startbtn() {
    console.log("start!")

}

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
























// const startBtn = document.createElement("start-btn");