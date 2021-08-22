// variables for DOM manipulation
var quiz = document.getElementById("quiz");
var answerEl = document.querySelectorAll(".answer");
var questionEl = document.getElementById("question");
var submitBtn = document.getElementById("submit");
var starBtnEl = document.getElementById("startBtn")
var counterEl = document.getElementById("counter");
var openerEL = document.querySelector(".quiz-opener");
var hideEl = document.querySelector(".hide");
var qchoicesEl = document.getElementById("qchoices");
// variables to control quiz state
var questionIndex = 0
var time = 75
var counterId;
var scoreData = 0;
// object to store questions, options, and answers
var quizDataObj = [
    {
        quote: "What does CSS stand for?",
        choices: ["Coding Style Statistics", "Cascading Style Sheets", "Coding Style Sheets", "Cascading Stat Sheets"],
        correct: "Cascading Style Sheets",
    },
    {
        quote: "What does HTML stand for?",
        choices: ["Hypertext Multi Language", "History of Translating Markup Languages", "Hypertext Markup Language", "Hypertext Markup Linguistics",],
        correct: "Hypertext Markup Language",
    },
    {
        quote: "How do you call an id in CSS?",
        choices: ["#", ".", "%", "*"],
        correct: "#",
    },
    {
        quote: "How do you call a class in CSS?",
        choices: ["#", "%", ".", "!"],
        correct: ".",
    },
    {
        quote: "What year was javascript created?",
        choices: ["1998", "2001", "1979", "1995"],
        correct: "1995",
    }
]
console.log(quizDataObj);
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
    hideEl.removeAttribute("style", "display:none;");
    loadQuestion();    
}

starBtnEl.addEventListener("click", startQuiz);

function loadQuestion() {
    // variable to store the question displyed on screen
    var currentQuestion = quizDataObj[questionIndex];
    // update h2 element with current question
    questionEl.textContent = currentQuestion.quote;
    // forEach to loop through array of choices 
    currentQuestion.choices.forEach(function (choice, index) {
        // creates buttons for question choices
        var buttons = document.createElement("li")
        var choiceBtn = document.createElement("button");
        // creates id for created buttons
        choiceBtn.setAttribute("id", "choice-style");
        // adds choices string to created buttons
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = index + 1 + ": " + choice;

        questionEl.appendChild(buttons);
        buttons.appendChild(choiceBtn);
    })
    
}


quizDataObj.forEach(loadQuestion);
// create a function for event listener clicking a question
function clickQuestion() {
    
    if (this.value !== quizDataObj[questionIndex].correct) {
        time -= 10;
        if(time < 0){
            time = 0
            endQuiz;
        }

        var feedbackEl = document.getElementById("feedback");
        feedbackEl.textContent = "Wrong Answer! You lose 10 seconds!";

    }
    else{
        feedbackEl.textContent = "Correct Answer!"
    }

    if(){}

}
// create end quiz function
function endQuiz() { }
// create function for high scores and store to local storage
function scoreData() { }
// function to select quiz questions and answers


