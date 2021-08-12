var quiz = document.getElementById("#quiz");
var answerEl = document.getElementById("answer");
var questionEl = document.getElementById("question");
var optionA = document.getElementById("option-a");
var optionB = document.getElementById("option-b");
var optionC = document.getElementById("option-c");
var optionD = document.getElementById("option-d");
var submitBtn = document.getElementById("#sub,it");
var quizDataObj = [
    {
        question: "What does CSS stand for?",
        a: "Coding Style Statistics",
        b: "Cascading Style Sheets",
        c: "Coding Style Sheets",
        d: "Cascading Stat Sheets",
        correct: "b",
    }
    {
        question: "What does HTML stand for?",
        a: "Hypertext Multi Language",
        b: "History of Translating Markup Languages",
        c: "Hypertext Markup Language",
        d: "Hypertext Markup Linguistics",
        correct: "c",
    }
    {
        question: "How do you call an id in CSS?",
        a: "#",
        b: ".",
        c: "%",
        d: "*",
        correct: "a",
    }
    {
        question: "How do you call a class in CSS?",
        a: "#",
        b: "%",
        c: ".",
        d: "!",
        correct: "c",
    }
    {
        question: "What year was javascript created?",
        a: "1998",
        b: "2001",
        c: "1979",
        d: "1995",
        correct: "d",
    }
]