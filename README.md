
# Fashion Advise Web
#### Video Demo:  <https://youtu.be/xu-J3vJDURE>
#### Description:Fashion Advise Recommendation Website. You can check which body shape you are and which colour season you are. This will help you to choose best suitable clothing.

TODO

**Target audience are women who want to better understand their style.

How to test :

You will need you measurements of sholder, bust, waist and hips. For a test version let's use 97-90-60-90 which should return result - Reversed Triangle.
Next quiz is Colour palette where you select what is your eye colour, skin tone etc. Based on this the website will generate 4 possible result - Winter, Summer, Autumn or Spring. For the convienence and complexity I have made results in a way that you can print them or save as PDF.

Navigation is simple since the page main goal is to fill in quizes and get the results.

# Fashion Advice Web

#### Video Demo: [YouTube Link](https://youtu.be/xu-J3vJDURE)

#### Description:
Fashion Advice Recommendation Website. You can check which body shape you are and which color season you are. This will help you choose the best suitable clothing.

TODO

**Target audience are women who want to better understand their style.**

## How to Test:
You will need your measurements of shoulder, bust, waist, and hips. For a test version, let's use 97-90-60-90, which should return the result - Reversed Triangle.

Next quiz is the Color palette where you select what is your eye color, skin tone, etc. Based on this, the website will generate 4 possible results - Winter, Summer, Autumn, or Spring. For convenience and complexity, I have made results in a way that you can print them or save as PDF.

## Navigation:
Navigation is simple since the page's main goal is to fill in quizzes and get the results.

## Development Process:

### HTML

- **1st_page.html** - Here I display introduction text, marketing messages, and allow users to click on one of the buttons that will prompt them to the quiz.
- **fashion.html** - Here is the quiz where a woman should leave her body measurements, and in return, she will be able to get results on her body shape.

The HTML structure includes a navigation bar at the top, allowing users to navigate between different sections of the website. The main content of the page is wrapped in a "jumbotron" container, which provides a centered and visually appealing layout.

Within the container, there is a form with input fields for the woman's body measurements. The form includes fields for the unit of measurement (inches or centimeters), shoulder measurement, bust measurement, waist measurement, and hip measurement. Each input field is accompanied by a label to provide clear instructions to the user.

After entering the measurements, the woman can click on the "Calculate Body Shape" button, which triggers the submission of the form. The form submission is handled by the JavaScript code referenced at the bottom of the HTML file (<script src="script.js"></script>).

The resulting body shape calculation will be displayed in the <div id="result"> element below the form. This is where the calculated body shape information will be dynamically inserted using JavaScript.

By filling out the quiz and submitting the form, women will be able to obtain the results of their body shape, which can help them make more informed decisions when choosing clothing styles that best suit their body type.
- **Quiz.html** - Here a woman can submit a quiz, which will take her to the results that will give a color palette based on her answered questions about hair color, eye color, skin tone, etc.The HTML structure includes a "jumbotron" container that creates a centered and visually appealing layout for the quiz. The main content of the page is wrapped in a card element, which provides a shadowed background and a clean interface.

Within the card body, there is a container with the ID "quiz-container." This container holds the quiz questions and choices. The quiz starts with an image of a color palette, setting the context for the quiz. Below the image, there is a paragraph element with the ID "question" that will display the current quiz question.

The answer choices are dynamically generated within an unordered list with the ID "choices." The user will select their preferred answer by clicking on the corresponding choice. The quiz progresses to the next question when the user clicks on the "Next" button, which has the ID "submit-btn."

Once the user completes the quiz by answering all the questions, the results will be displayed in the "results" div. Initially, the results div is hidden (style="display: none;"), and it will become visible when the user completes the quiz. The results will provide the personalized color palette recommendations based on the user's answers.

The JavaScript code responsible for handling the quiz logic and generating the color palette results is included at the bottom of the HTML file (<script src="Quiz.js"></script>).

By submitting the quiz, women will be able to obtain a customized color palette that can assist them in choosing colors that complement their hair color, eye color, and skin tone. This personalized approach can help enhance their overall appearance and style.

- **winter.html** - Color quiz results for winter season. - **DOCTYPE Declaration:** The `<!DOCTYPE html>` declaration specifies that the document is an HTML5 document.

- **Head Section:** The `<head>` section contains metadata and external resources used in the document. It includes the following:
  - The `<title>` element sets the title of the page to "Winter Color Palette Result".
  - The `<link>` element links an external CSS file named "seasons.css" to style the HTML content.

- **Body Section:** The `<body>` section contains the visible content of the page. It includes the following elements:

  - **Result Container:** The `<div>` element with the class "result-container" acts as a container for the Winter color palette result.
    - The `<h1>` heading displays the text "Winter Color Palette Result".
    - The `<div>` element with the class "summary" contains a paragraph describing the Winter color palette and its characteristics.
    - The `<img>` element displays an image of the Winter color palette with the `src` attribute set to "winter.png" and the `alt` attribute set to "Winter Image".
    - The `<div>` element with the class "buttons" contains two buttons:
      - The "Print Results" button with the `id` attribute set to "print-btn".
      - The "Save as PDF" button with the `id` attribute set to "save-pdf-btn".

- **JavaScript Files:** The following JavaScript files are included at the end of the HTML body section:
  - "html2pdf.min.js": This script provides functionality to convert HTML to PDF.
  - "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js": This script is a library that enables PDF generation from HTML.
  - "winter.js": This script contains JavaScript code to handle click events for printing and saving the result as a PDF.
- **autumn.html** - Color quiz results for autumn season.
- **summer.html** - Color quiz results for summer season.
- **spring.html** - Color quiz results for spring season.

### CSS

- **bootstrap.css** - for formatting and better style. This is the best solution I found for HTML website styling.
- **Quiz.css** - style of the quiz. Here is an explanation of the code:

Body Styles:

font-family: Sets the font family for the entire body of the page to "Arial" or any available sans-serif font.
background-color: Sets the background color of the body to "#f2f2f2", a light gray color.
Heading Styles:

text-align: Centers the text alignment for heading elements (h1 and h2).
Quiz Container Styles:

max-width: Sets the maximum width of the quiz container to 500 pixels.
margin: Centers the quiz container horizontally by setting the left and right margins to "auto".
padding: Adds 20 pixels of padding inside the quiz container.
border: Sets a 1 pixel solid border around the quiz container with the color "#ccc" (light gray).
border-radius: Adds a 5 pixel border radius to round the corners of the quiz container.
background-color: Sets the background color of the quiz container to "#fff" (white).
Choices List Styles:

list-style-type: Removes the default bullet points from the choices list.
padding: Removes any padding from the choices list.
Choice Item Styles:

margin-bottom: Adds a 10 pixel margin at the bottom of each choice item.
Submit Button Styles:

display: Sets the display property of the submit button to "block", making it a block-level element.
margin: Centers the submit button horizontally by setting the left and right margins to "auto".
- **styles.css** - styling of the body shape quiz website.
- **seasons.css** - styling for the four color result HTML.

### JavaScript

- **script.js** - JavaScript logic for the quiz. I am taking the user's input and then calculating the body proportions which can be found online. After the calculation, I display the result of the body type and which celebrity the person is alike based on the body shape. Here is a breakdown of the script:

Celebrities Dictionary: The script starts by defining a dictionary called celebrities_type_dict. It associates body shapes (keys) with an array of celebrity names (values) who have a similar body shape.

Quiz Questions and Answers: The script contains an array named quizData that stores the quiz questions, answer choices, and corresponding seasons. Each quiz question object has properties for the question itself, an array of choices, and an array of seasons associated with each choice.

Variables: The script declares several variables for tracking the quiz progress and storing the user's body shape and color palette.

DOM Elements: The script retrieves various elements from the HTML document using their IDs. These elements include the body shape form, result div, quiz container, question element, choices element, and submit button.

Form Submission Event: The script sets up an event listener for the form submission of the body shape form. When the form is submitted, the event listener callback function calculates the body shape based on the input values provided by the user. It compares the measurements and determines the body shape using conditional statements. The calculated body shape is stored in the bodyShape variable. The script also retrieves the corresponding celebrities from the celebrities_type_dict based on the body shape and displays them in the result div. Additionally, the quiz container is made visible by setting its display property to "block," and the loadQuestion function is called to load the first quiz question.

Load Question and Choices: The loadQuestion function is responsible for displaying the current quiz question and its associated choices. It retrieves the current quiz object from the quizData array based on the currentQuestion index. The question text is set to the question element, and the choices are dynamically created as list items with radio inputs for selection.

Update Score: The script defines an updateScore function that takes a season as an argument and increments the score for that season in the score object.

Submit Button Click Event: The script sets up an event listener for the submit button click event. When the button is clicked, the event listener callback function checks if a choice has been selected. If a choice is selected, it retrieves the selected answer and updates the score using the updateScore function. The currentQuestion index is incremented, and if there are more questions remaining, the loadQuestion function is called to load the next question. Otherwise, if all questions have been answered, the showQuizResults function is called.

Show Quiz Results: The showQuizResults function determines the color palette based on the selected answers' scores or color analysis. In the provided code, the color palette is determined by comparing the scores for each season (spring, summer, autumn, winter). The season with the highest score is considered the dominant season for the user's color palette. Depending on the dominant season, the script redirects the user to a corresponding HTML page (e.g., spring.html, summer.html) that provides more information about the color palette associated with that season.


- **Quiz.js** - For seasonal colors, I am using this JavaScript logic that assigns a value to each question and afterwards sums the result and displays the result based on the summed result.  Here is a breakdown of the code:

Quiz Questions and Answers: The script declares an array called quizData that stores the quiz questions, answer choices, and corresponding seasons. Each quiz question object contains a question property for the question itself, a choices array for the available choices, and a season array for the seasons associated with each choice.

Variables: The script declares the currentQuestion and colorPalette variables to keep track of the current question index and the determined color palette, respectively.

DOM Elements: The script retrieves various elements from the HTML document using their IDs. These elements include the quiz container, question element, choices element, and submit button.

Load Question and Choices: The loadQuestion function is responsible for displaying the current quiz question and its associated choices. It retrieves the current quiz object from the quizData array based on the currentQuestion index. The question text is set to the question element, and the choices are dynamically created as list items with radio inputs for selection.

Score Object: The script defines a score object that keeps track of the score for each season. It has properties for each season (spring, summer, autumn, winter), which are initially set to 0.

Update Score: The script defines an updateScore function that takes a season as an argument and increments the score for that season in the score object.

Submit Button Click Event: The script sets up an event listener for the submit button click event. When the button is clicked, the event listener callback function checks if a choice has been selected. If a choice is selected, it retrieves the selected answer's index and the current quiz object. It updates the score using the updateScore function based on the selected answer's associated season. The currentQuestion index is incremented, and if there are more questions remaining, the loadQuestion function is called to load the next question. Otherwise, if all questions have been answered, the showQuizResults function is called.

Show Quiz Results: The showQuizResults function determines the color palette based on the selected answers' scores. It compares the scores for each season and determines the season with the highest score. The corresponding color palette is assigned to the colorPalette variable, and the script redirects the user to a specific HTML page (e.g., spring.html, summer.html) based on the determined color palette.

Window Load Event: The script sets up a window load event listener. When the window is loaded, the event listener callback function is executed. It shows the quiz section by setting the quiz container's display property to "block" and calls the loadQuestion function to load the first question.

- **winter.js** - Allows to print results or create PDF for winter season. Here is an explanation of the code:

Print Button Click Event: The script sets up an event listener for the click event on the print button. When the print button is clicked, the callback function is executed, which calls the window.print() method. This method triggers the print functionality of the browser, allowing the user to print the content of the page.

Save as PDF Button Click Event: The script sets up an event listener for the click event on the save as PDF button. When the button is clicked, the callback function is executed. Inside the function, the script uses the html2pdf library to convert the content of a specific element to a PDF and save it.

The filename variable stores the name of the PDF file ("winter_color_palette_result.pdf").
The element variable is set to the result container element on the page (identified by the CSS class ".result-container").
The html2pdf() method is called, and the following options are set:

margin: Specifies the margins of the PDF document.
filename: Sets the name of the generated PDF file.
image: Defines the type and quality of the images in the PDF (JPEG format with quality 1).
html2canvas: Configures the HTML to canvas conversion, setting the scale and enabling letter rendering.
Finally, the from(element) method is called to specify the element to convert to PDF, and the save() method is invoked to initiate the PDF generation and save it to the user's device.
- **summer.js** - Allows to print results or create PDF for summer season.
- **spring.js** - Allows to print results or create PDF for spring season.
- **autumn.js** - Allows to print results or create PDF for autumn season.
