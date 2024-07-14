function checkAnswer() {
    // The correct answer
    var correctAnswer = "4";

    // Get the user's selected answer
    var userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Get the feedback element
    var feedback = document.getElementById('feedback');

    // Check if the user's answer is correct and update the feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
