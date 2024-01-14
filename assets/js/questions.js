// Variables
var startButton = document.getElementById("start");
var timerDisplay = document.getElementById("time");
var questionsContainer = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choicesContainer = document.getElementById("choices");
  
// Questions
var questions = [
    {
      question: "What is JavaScript?",
      choices: ["A programming language", "A type of coffee", "A fruit"],
      correctAnswer: "A programming language",
    },

    {
        question: "Commonly used data types DO NOT include?",
        choices: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts",
      },

      {
        question: "The condition in an if/else statement is enclosed within ______.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correctAnswer: "parentheses",
      },

      {
        question: "Arrays in Javascript can be used to store?",
        choices: ["A number of strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above",
      },

      {
        question: "String values must be enclosed within ____ when being assigned to variables",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        correctAnswer: "quotes",
      },
  ];
