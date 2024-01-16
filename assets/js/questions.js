// Variables
var startButton = document.getElementById("start");
var timerDisplay = document.getElementById("time");
var questionsContainer = document.getElementById("questions");
var endScreenContainer = document.getElementById("end-screen");
var questionTitle = document.getElementById("question-title");
var choicesContainer = document.getElementById("choices");
var submitHighScoreButton = document.getElementById("submit");
var finalScoreDisplay = document.getElementById("final-score");

var timerInterval;
var remainingTime;
var scoreCard = [];
  
// Questions
var questions = [
    {
      question: "What is JavaScript?",
      choices: ["A programming language", "A document", "A type of coffee", "A country" ],
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
    remainingTime = 60;
    startTimer()    
    showQuestion();    
  }

  function startTimer() {
    // Sets timer
    timerInterval = setInterval(function() {
        remainingTime--;
      timerDisplay.textContent = remainingTime;
      if (remainingTime === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
}
  
  function showQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.question;
  
    // Clear previous choices
    choicesContainer.innerHTML = "";
  
    // Create buttons for choices
    for (var i = 0; i < currentQuestion.choices.length; i++) {
      var choiceButton = document.createElement("button");
      choiceButton.textContent = currentQuestion.choices[i];
      choiceButton.addEventListener("click", function () {
        // Check the answer and proceed to the next question
        // Deducts 10 seconds from the time if the answer is incorrect
        if (this.textContent != currentQuestion.correctAnswer){
            remainingTime -= 10;     
        } 
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
// log the final time in the scoreCard array
      scoreCard.push(remainingTime); 
      document.getElementById("questions").style.visibility = "hidden";
      endScreenContainer.style.display = "block";  
      finalScoreDisplay.textContent = remainingTime; 
       
    }
  }

  submitHighScoreButton.addEventListener("click", function() {
    var initials = document.querySelector("#initials").value;

    // Retrieve existing data from local storage
    var existingScoreCard = localStorage.getItem("scoreCard");
    var existingInitials = localStorage.getItem("savedInitials");

    // Parse existing data (if any) or initialize empty arrays
    var scoreCardArray = existingScoreCard ? JSON.parse(existingScoreCard) : [];
    var initialsArray = existingInitials ? JSON.parse(existingInitials) : [];

    // Update the data with the new values
    scoreCardArray.push(scoreCard);
    initialsArray.push(initials);

    // Store the updated data back in local storage
    localStorage.setItem("scoreCard", JSON.stringify(scoreCardArray));
    localStorage.setItem("savedInitials", JSON.stringify(initialsArray));

    window.location.href = "highscores.html";
});
