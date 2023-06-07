// Define the celebrities dictionary
var celebrities_type_dict = {
  "Inverted Triangle": ["Angelina Jolie", "Cameron Diaz", "Catherine Zeta-Jones", "Renee Zellweger", "Drew Barrymore"],
  "Triangle": ["Jennifer Lopez", "Rihanna", "Shakira", "Christina Hendricks", "Adele"],
  "Circle": ["Queen Latifah", "Oprah Winfrey", "Melissa McCarthy", "Rebel Wilson", "Adele"],
  "Rectangle": ["Gwyneth Paltrow", "Kate Middleton", "Keira Knightley", "Cameron Russell", "Olivia Wilde"],
  "Hourglass": ["Scarlett Johansson", "Sofia Vergara", "Beyonce", "Kim Kardashian", "Salma Hayek"]
};

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
var bodyShape = "";
var colorPalette = "";

// DOM elements
var bodyShapeForm = document.getElementById("bodyShapeForm");
var resultDiv = document.getElementById("result");
var quizContainer = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit-btn");

// Form submission event
bodyShapeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Perform body shape calculation
  var unit = document.getElementById("unit").value;
  var shoulder = parseFloat(document.getElementById("shoulder").value);
  var bust = parseFloat(document.getElementById("bust").value);
  var waist = parseFloat(document.getElementById("waist").value);
  var hips = parseFloat(document.getElementById("hips").value);

  if (unit === "centimeters") {
    shoulder /= 2.54;
    bust /= 2.54;
    waist /= 2.54;
    hips /= 2.54;
  }

  if (shoulder > hips + 2 || bust > hips + 4) {
    bodyShape = "Inverted Triangle";
  } else if (hips > shoulder + 2 || hips > bust + 4) {
    bodyShape = "Triangle";
  } else if (waist > bust + 2 || waist > hips + 2) {
    bodyShape = "Circle";
  } else if (Math.abs(shoulder - hips) < 8 && Math.abs(bust - hips) < 8 && Math.abs(waist - hips) < 8) {
    bodyShape = "Rectangle";
  } else if (Math.abs(shoulder - hips) < 8 && Math.abs(bust - hips) < 8 && Math.abs(waist - hips) >= 8) {
    bodyShape = "Hourglass";
  } else {
    bodyShape = "Body shape is not clearly defined.";
  }

  var celebrities = celebrities_type_dict[bodyShape] || [];
  resultDiv.textContent = 'Your body shape is ' + bodyShape + '. Celebrities with a similar body shape include: ' + celebrities.join(', ') + '.';

  // Show the quiz section
  // Show the quiz section
  quizContainer.style.display = "block";
  loadQuestion();
});

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

// Example: Assume the color palette is determined based on the number of selected answers in each category
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
    var selectedAnswer = currentQuiz.choices[answerIndex];

    // Update the score or perform color analysis based on the selected answer
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
  // Determine the color palette based on the score or color analysis
  var colorPalette;




  // Determine the color palette based on the selectedCounts
  // Example: The color palette corresponds to the category with the highest count
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

