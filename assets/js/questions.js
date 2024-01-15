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

  var currentQuestionIndex = 0;

// Start the timer and asks the first question
  startButton.addEventListener("click", startGame);
  
  function startGame() {
    document.getElementById("start-screen").style.visibility = "hidden";
    questionsContainer.style.display = "block";
    showQuestion();    
  }
  
  function showQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.question;
  
    // Clear previous choices
    choicesContainer.innerHTML = "";
  
    // Create buttons for choices
    // if the answer clicked was incorrect then subtract time from the clock
    for (var i = 0; i < currentQuestion.choices.length; i++) {
      var choiceButton = document.createElement("button");
      choiceButton.textContent = currentQuestion.choices[i];
      choiceButton.addEventListener("click", function () {
        console.log("User selected:", this.textContent);
        // Check the answer and proceed to the next question   
        showNextQuestion();
      });
      choicesContainer.appendChild(choiceButton);
    }
  }

  
  function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      // You've reached the end of the questions, handle quiz completion or other logic here
      console.log("Quiz completed!");
    }
  }
  
//     * The quiz should end when all questions are answered or the timer reaches 0.
  
//     * When the game ends, it should display their score and give the user the ability to save their initials and their score