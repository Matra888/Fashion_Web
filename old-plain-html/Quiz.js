// Quiz questions and answers
var quizData = [
  {
    question: "What is your skin undertone?",
    choices: [
      "Cool (pink, red, or bluish undertones)",
      "Warm (yellow, peachy, or golden undertones)",
      "Neutral (a mix of warm and cool undertones)"
    ],
    season: ["winter", "autumn", "spring"]
  },
  {
    question: "What is your hair color?",
    choices: [
      "Blonde or light brown",
      "Red or dark brown",
      "Black or dark brown",
      "Brunette with golden highlights"
    ],
    season: ["summer", "autumn", "winter", "spring"]
  },
  {
    question: "What are your eye colors?",
    choices: [
      "Blue, gray, or green",
      "Brown or hazel",
      "Dark brown or black",
      "Amber, golden brown, or green"
    ],
    season: ["winter", "spring", "autumn", "summer"]
  },
  {
    question: "What are your favorite clothing colors?",
    choices: [
      "Pastels, blues, and purples",
      "Earthy tones and warm neutrals",
      "Bold, jewel tones",
      "Rich and vibrant colors"
    ],
    season: ["winter", "autumn", "summer", "spring"]
  }
];

// Variables
var currentQuestion = 0;
var colorPalette = "";

// DOM elements
var quizContainer = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit-btn");

window.onload = function() {
  // Show the quiz section
  quizContainer.style.display = "block";
  loadQuestion();
};

// Load question and choices
function loadQuestion() {
  var currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;
  choicesEl.innerHTML = "";

  currentQuiz.choices.forEach(function (choice, index) {
    var choiceItem = document.createElement("li");
    var radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "choice";
    radioInput.value = index;
    choiceItem.appendChild(radioInput);
    choiceItem.appendChild(document.createTextNode(choice));
    choicesEl.appendChild(choiceItem);
  });
}

// Score object for color palette calculation
var score = {
  spring: 0,
  summer: 0,
  autumn: 0,
  winter: 0
};

// Update score
function updateScore(season) {
  score[season]++;
}

// Submit button click event
submitBtn.addEventListener("click", function () {
  var selectedChoice = document.querySelector('input[name="choice"]:checked');

  if (selectedChoice) {
    var answerIndex = parseInt(selectedChoice.value);
    var currentQuiz = quizData[currentQuestion];

    // Update the score based on the selected answer
    updateScore(currentQuiz.season[answerIndex]);

    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showQuizResults();
    }
  }
});

// Show quiz results
// Show quiz results
function showQuizResults() {
  // Determine the color palette based on the score
  var maxCount = Math.max(score.spring, score.summer, score.autumn, score.winter);
  if (score.spring === maxCount) {
    colorPalette = "Spring colors";
    window.location.href = "spring.html"; // Redirect to spring.html
  } else if (score.summer === maxCount) {
    colorPalette = "Summer colors";
    window.location.href = "summer.html"; // Redirect to summer.html
  } else if (score.autumn === maxCount) {
    colorPalette = "Autumn colors";
    window.location.href = "autumn.html"; // Redirect to autumn.html
  } else if (score.winter === maxCount) {
    colorPalette = "Winter colors";
    window.location.href = "winter.html"; // Redirect to winter.html
  }
}

// Start the quiz once the window is loaded
window.onload = function() {
  // Show the quiz section
  quizContainer.style.display = "block";
  loadQuestion();
};
