// keeping track of quiz state
var currentQuestionIndex = 0
var time = questions.length * 15;
var timerID;

// DOM elements
var startBtn = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var timerElement = document.querySelector("#time");
var questionChoices = document.querySelector("choices");

//Starting the quiz
function startQuiz() {
    var sratScreen = document.querySelector("#start-screen");
    startScreen.setAttribute("class", "hide");
    questionsElement.removeAttribute("class");
    getCurrentQuestion();
}

//Get current question and choices
function getCurrentQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleElement = document.querySelector("#question-title");
    titleElement.textContent = currentQuestion.title;
    questionChoices.textContent = "";

    for (var i=0; i < currentQuestion.choice.length; i++) {
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", currentQuestion.choice[i]);

        questionChoices.appendChild(choiceNode);
    }
}

//All my questions for the quiz
var questions = [
    {
        title: ""
    }
]

//Add event listener for click to start the quiz
startBtn.addEventListener("click", startQuiz);
