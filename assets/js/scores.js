document.addEventListener("DOMContentLoaded", function() {
    // Retrieve existing data from local storage
    var existingScoreCard = localStorage.getItem("scoreCard");
    var existingInitials = localStorage.getItem("savedInitials");

    // Parse existing data (if any) or initialize empty arrays
    var scoreCardArray = existingScoreCard ? JSON.parse(existingScoreCard) : [];
    var initialsArray = existingInitials ? JSON.parse(existingInitials) : [];

    // Display scores
    displayScores(scoreCardArray, initialsArray);

    var clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", function() {
        // Clear the scores from local storage and reset the display
        localStorage.removeItem("scoreCard");
        localStorage.removeItem("savedInitials");
        displayScores([], []); // Display an empty list
    });
});

// Function to display scores
function displayScores(scoreCardArray, initialsArray) {
    // Clear existing list content
    var highScoresList = document.getElementById("highscores");
    highScoresList.innerHTML = "";

    // Append scores to the list
    for (var i = 0; i < scoreCardArray.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = initialsArray[i] + ": " + scoreCardArray[i];
        highScoresList.appendChild(listItem);
    }
}