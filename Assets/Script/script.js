// variables for DOM manipulation
var quiz = document.getElementById("quiz");
var answerEl = document.querySelectorAll(".answer");
var questionEl = document.getElementById("question");
// var optionA = document.getElementById("option-a");
// var optionB = document.getElementById("option-b");
// var optionC = document.getElementById("option-c");
// var optionD = document.getElementById("option-d");
var submitBtn = document.getElementById("submit");
var starBtnEl = document.getElementById("startBtn")
var counterEl = document.getElementById("counter");
var openerEL = document.querySelector(".quiz-opener");
var hideEl = document.querySelector(".hide");
// variables to control quiz state
var  questionIndex = 0
var time = 75
var counterId;
// object to store questions, options, and answers
var quizDataObj = [
    {
        quote: "What does CSS stand for?",
        choices: ["Coding Style Statistics","Cascading Style Sheets","Coding Style Sheets","Cascading Stat Sheets"],
        correct: "Cascading Style Sheets",
    },
    {
        quote: "What does HTML stand for?",
        choices: ["Hypertext Multi Language", "History of Translating Markup Languages","Hypertext Markup Language","Hypertext Markup Linguistics",],
        correct: "Hypertext Markup Language",
    },
    {
        quote: "How do you call an id in CSS?",
        choices: ["#",".","%","*"],
        correct: "#",
    },
    {
        quote: "How do you call a class in CSS?",
        choices: ["#","%",".","!"],
        correct: ".",
    },
    {
        quote: "What year was javascript created?",
        choices: ["1998","2001","1979","1995"],
        correct: "1995",
    }
]

// To DO:
// create timer function
function countdown() {
    // decrement time by 1
    time--;
    counterEl.textContent = time;
    if (time <= 0) {
        endQuiz();
    }
}
startQuiz;
console.log(time);
// create start quiz function
function startQuiz() {
    // start timer
    counterId = setInterval(countdown, 1000)
    counterEl.textContent = time;
    openerEL.setAttribute("style", "display:none;");
    hideEl.removeAttribute("style","display:hide;");
    loadQuestion;
}
starBtnEl.addEventListener("click", startQuiz)

function loadQuestion(index) {
    startQuiz;
    var quoteEl = 
    
}
// create a function for event listener clicking a question
function nextQuestion() {
    
}
// create end quiz function
function endQuiz() {}
// create function for high scores and store to local storage
function scoreData() {}
// function to select quiz questions and answers 


