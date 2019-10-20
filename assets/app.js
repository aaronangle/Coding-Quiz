//Variables from the HTML elements
var start = document.getElementById('start')
var mainContent = document.getElementById('main-content')
var questionDisplay = document.getElementById('questionDisplay')
var questionList = document.getElementById('questionList')
var questionHeading = document.getElementById('questionHeading')
var option1 = document.getElementById('option1')
var option2 = document.getElementById('option2')
var option3 = document.getElementById('option3')
var option4 = document.getElementById('option4')
var results = document.getElementById('results')
var submit = document.getElementById('submit')
var textBox = document.getElementById('textBox')
var enterScore = document.getElementById('enterScore')
var highScoreContainer = document.getElementById('highScoreContainer')
var highScoreList = document.getElementById('highScoreList')
var highScoreHeading = document.getElementById('highScoreHeading')
var clearScore = document.getElementById('clearScore')
var returnHome = document.getElementById('returnHome')
var time = document.getElementById('time')
var finalScore = document.getElementById('finalScore')

//Self made variables
var questionIndex = 0;
var timer = 50;
var scoreList = []

//Activated when the start button is clicked
function startIt() {
    mainContent.style.display = 'none';
    questionDisplay.style.display = 'flex';
    renderQuestion();
}
//Countdown timer for the quiz
function countDown() {
    setInterval(() => {
        timer--
        time.textContent = timer
        localStorage.setItem('time', timer)
    }, 1000);
}
//This will display the questions in order each time it is called upon
function renderQuestion() {
    results.textContent = ""
    var currentQuestion = questions[questionIndex];

    for (var i = 0; i < currentQuestion.options.length; i++) {
        questionHeading.textContent = currentQuestion.question;
        option1.textContent = questions[questionIndex].options[0];
        option2.textContent = questions[questionIndex].options[1];
        option3.textContent = questions[questionIndex].options[2];
        option4.textContent = questions[questionIndex].options[3];
    }
}

function initialize() {
    //get stored list from localStorage
    //Parse the JSON string to an object
    var storedScoreList = JSON.parse(localStorage.getItem("ScoreList"))

    //if todos were retrieved from the localStorage, update the array for it
    if (storeScoreList !== null) {
        scoreList = storedScoreList
    }
    renderScoreList();
}
function submitIt() {
    //get the value of the submit and push it to the array
    var theTime = localStorage.getItem("time")
    var userName = textBox.value.trim();
    var name = userName + "   " + theTime;

    if (userName) {
        initialize();
        highScoreContainer.style.display = "flex";

        enterScore.style.display = 'none';
        highScoreHeading.textContent = "Highscores"
        clearScore.textContent = "Clear Scores"
        returnHome.textContent = "Go Back"

        scoreList.push(name)

        storeScoreList();
        renderScoreList();
    } else {
        alert("Please enter your initials into the textBox")
    }

}

function storeScoreList() {
    //stringify and set the scorelist to the local storage and the scorelist array
    localStorage.setItem("ScoreList", JSON.stringify(scoreList))

}
function renderScoreList() {
    highScoreList.innerHTML = ""

    //render a new li for each score
    for (let i = 0; i < scoreList.length; i++) {
        var listItem = scoreList[i];

        var li = document.createElement("li");
        li.textContent = listItem;
        li.setAttribute("data-index", i);

        highScoreList.appendChild(li)

    }
}

function clearScores() {
    scoreList = []
    storeScoreList();
    renderScoreList();
}

function homePage() {
    window.location.href = "index.html"
}
function viewScore() {

    window.location.href = "score.html"

}

if (questionList) {
    questionList.addEventListener("click", function (event) {
        var element = event.target

        var currentQuestion = questions[questionIndex];

        for (let i = 0; i < 1; i++) {
            console.log(questionIndex)
            questionIndex++
            if (element.textContent === currentQuestion.answer && questionIndex < questions.length) {
                results.textContent = "Correct!"
                console.log(results.textContent)
                timer = timer + 5
                setTimeout(() => {
                    renderQuestion();
                }, 1000);
            }
            else if (questionIndex < questions.length) {
                results.textContent = "Sorry, that's not correct."
                timer = timer - 5
                setTimeout(() => {
                    renderQuestion();
                }, 1000);
            }
            else {
                if (element.textContent === currentQuestion.answer) {
                    results.textContent = "Correct!"
                    timer = timer + 5
                    setTimeout(() => {
                        window.location.href = "score.html"
                    }, 1000);
                } else {
                    results.textContent = "Sorry, that's not correct"
                    timer = timer - 5

                }
            }

        }
    })
}

//Array to hold the questions which are stored as objects
var questions = [
    {
        label: "Question1",
        question: "Which one is not a programming language?",
        options: [
            "JavaScript",
            "Java",
            "CoffeeScript",
            "CaffeineScript"
        ],
        answer: "CaffeineScript"

    },
    {
        label: "Question 2",
        question: "Commonly used data types do not include:",
        options: [
            "Strings",
            "Alerts",
            "Booleans",
            "Numbers"
        ],
        answer: "Alerts"
    },
    {
        label: "Question 3",
        question: "What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Hope There's Much Learned",
            "Hi There My Love",
            "Help The Meerkats Learn!"
        ],
        answer: "Hypertext Markup Language"

    },
    {
        label: "Question 4",
        question: "How do you call a function?",
        options: [
            "Heeeere, function, function",
            "myFunction();",
            "myFunction;",
            "execute: myFunction;"
        ],
        answer: "myFunction();"

    },
    {
        label: "Question 5",
        question: "Who was the creator of JavaScript?",
        options: [
            "Yukihior Matsumo",
            "Rasmus Lerdorf",
            "John Resig",
            "Brendan Eich"
        ],
        answer: "Brendan Eich"
    }

]
//If the final score text is available write the final score to it
if (finalScore) {
    var timeDisplay = localStorage.getItem('time')
    finalScore.textContent = timeDisplay
}


