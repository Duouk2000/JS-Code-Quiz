// Variables
var startButton = document.getElementById("start");
var timerDisplay = document.getElementById("time");
var questionsContainer = document.getElementById("questions");
var endScreenContainer = document.getElementById("end-screen");
var questionTitle = document.getElementById("question-title");
var choicesContainer = document.getElementById("choices");
var submitHighScoreButton = document.getElementById("submit");
var finalScoreDisplay = document.getElementById("final-score");

// Audio elements for correct and incorrect sounds
var correctSound = new Audio("./assets/sfx/correct.wav");
var incorrectSound = new Audio("./assets/sfx/incorrect.wav");

// Variables for the timer
var timerInterval;
var remainingTime;

// Stores the quiz scores
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

  // Event listener for starting the quiz
  startButton.addEventListener("click", startGame);
  // Function to start the quiz
  function startGame() {
    // Hide the start screen
    document.getElementById("start-screen").style.visibility = "hidden";
    // Display the questions container
    questionsContainer.style.display = "block";
    // Set the initial time for the timer
    remainingTime = 30;
    // Start the timer
    startTimer()    
    // Show the first question
    showQuestion();    
  }

  // Function to start the timer
  function startTimer() {
    // Sets timer to update every second
    timerInterval = setInterval(function() {
        // Decrement remaining time  
        remainingTime--;     
      // Check if remaining time is less than or equal to 0
      if (remainingTime <= 0) {
        remainingTime = 0; // Set remaining time to 0
        clearInterval(timerInterval);
      }
      // Update the timer display with the current remaining time
      timerDisplay.textContent = remainingTime;
    }, 1000);
}
  
  // Function to display a question
  function showQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.question;
  
    // Clear previous choices
    choicesContainer.innerHTML = "";
  
    // Create buttons for answer choices
    for (var i = 0; i < currentQuestion.choices.length; i++) {
      var choiceButton = document.createElement("button");
      choiceButton.textContent = currentQuestion.choices[i];
      choiceButton.addEventListener("click", function () {
        // Check the answer and proceed to the next question
        // Deduct 10 seconds from the timer if the answer is incorrect & play incorrect sound
        if (this.textContent != currentQuestion.correctAnswer){            
            incorrectSound.play();
            remainingTime -= 10;
          } else {
            // Play correct sound if answer is correct
            correctSound.play();
          }
          showNextQuestion();
        });
        choicesContainer.appendChild(choiceButton);
      }
    }
  
  // Function to move to the next question
  function showNextQuestion() {
    currentQuestionIndex++;
    // Check if remaining time is less than 0 and set it to 0
    if (remainingTime < 0) {
        remainingTime = 0;
    }

    if (currentQuestionIndex < questions.length) {
      // Display the next question
      showQuestion();
    } else {
      // log the final time in the scoreCard array
      scoreCard.push(remainingTime); 
      // Hide the questions container
      document.getElementById("questions").style.visibility = "hidden";
      // Display the end screen container
      endScreenContainer.style.display = "block";
      // Show the final score
      finalScoreDisplay.textContent = remainingTime;        
    }
  }

  // Event listener for submitting high scores
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

    // Sort the scoreCard array in descending order
    scoreCardArray.sort(function(a, b) {
        return b - a;
    });

    // Store the updated data back in local storage
    localStorage.setItem("scoreCard", JSON.stringify(scoreCardArray));
    localStorage.setItem("savedInitials", JSON.stringify(initialsArray));

    // Redirect to the high scores page
    window.location.href = "highscores.html";
});
