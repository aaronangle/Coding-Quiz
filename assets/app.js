//Variables from the HTML elements
var start = document.getElementById('start');
var mainContent = document.getElementById('main-content');
var questionDisplay = document.getElementById('questionDisplay');
var questionList = document.getElementById('questionList');
var questionHeading = document.getElementById('questionHeading');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var results = document.getElementById('results');
var submit = document.getElementById('submit');
var textBox = document.getElementById('textBox');
var enterScore = document.getElementById('enterScore');
var highScoreContainer = document.getElementById('highScoreContainer');
var highScoreList = document.getElementById('highScoreList');
var highScoreHeading = document.getElementById('highScoreHeading');
var clearScore = document.getElementById('clearScore');
var returnHome = document.getElementById('returnHome');
var time = document.getElementById('time');
var finalScore = document.getElementById('finalScore');

//Self made variables
var questionIndex = 0;
var timer = 50;
var scoreList = [];

//Activated when the start button is clicked
function startIt() {
    mainContent.style.display = 'none';
    questionDisplay.style.display = 'flex';
    renderQuestion();
}
//Countdown timer for the quiz
function countDown() {
    setInterval(() => {
        timer--;
        time.textContent = timer;
        localStorage.setItem('time', timer);
    }, 1000);
}
//This will display the questions in order each time it is called upon
function renderQuestion() {
    results.textContent = "";
    var currentQuestion = questions[questionIndex];
    //For loop to render each option for the listed question
    for (var i = 0; i < currentQuestion.options.length; i++) {
        questionHeading.textContent = currentQuestion.question;
        option1.textContent = questions[questionIndex].options[0];
        option2.textContent = questions[questionIndex].options[1];
        option3.textContent = questions[questionIndex].options[2];
        option4.textContent = questions[questionIndex].options[3];
    }
}
//If the question list is truthy
if (questionList) {
    //add an event listener to the entire question list
    questionList.addEventListener("click", function (event) {
        //target where the user clicks
        var element = event.target;
        //Current question is set to the questionindex
        var currentQuestion = questions[questionIndex];
        //Will run 1 time each time the question list is clicked
        for (let i = 0; i < 1; i++) {
            //Adds one to the question index so a new question will be grabbed from the question array
            questionIndex++;
            //if the element clicked is equal to the answer display content
            if (element.textContent === currentQuestion.answer && questionIndex < questions.length) {
                results.textContent = "Correct!";
                timer = timer + 5;
                setTimeout(() => {
                    renderQuestion();
                }, 1000);
            }
            //if the user clicks on the wrong place
            else if (questionIndex < questions.length) {
                results.textContent = "Sorry, that's not correct.";
                timer = timer - 5;
                setTimeout(() => {
                    renderQuestion();
                }, 1000);
            }
            //This is for when the user is on the last question so it will redirect to the high score page
            else {
                if (element.textContent === currentQuestion.answer) {
                    results.textContent = "Correct!";
                    timer = timer + 5;
                    setTimeout(() => {
                        window.location.href = "score.html";
                    }, 1000);
                } else {
                    results.textContent = "Sorry, that's not correct";
                    timer = timer - 5;
                    setTimeout(() => {
                        window.location.href = "score.html";
                    }, 1000);
                }

            }

        }
    })
}
//If the return home button is truthy then call the function of initialize
if (returnHome) {
    initialize();
}
//Initialize the highscore list
function initialize() {
    //get stored list from localStorage
    //Parse the JSON string to an object
    var storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

    //if scorelist were retrieved from the localStorage, update the array for it
    if (storedScoreList !== null) {
        scoreList = storedScoreList;
    }
    renderScoreList();
}
//Renders the highs score list and appends it to the page
function renderScoreList() {
    //Sets the text of the list to nothing so the list doesnt repeat itself when new item is added
    highScoreList.innerHTML = "";
    //render a new li for each score
    for (let i = 0; i < scoreList.length; i++) {
        var listItem = scoreList[i];

        var li = document.createElement("li");
        li.textContent = listItem;
        //Set a data-index so each score can be targeted individually
        li.setAttribute("data-index", i);

        //Create a button and append it to the list
        var button = document.createElement("button")
        button.textContent = "Remove"
        button.setAttribute("class", "buttonRemove")

        li.appendChild(button)
        highScoreList.appendChild(li);
    }
}
//If the highScoreList is truthy then add an event listener to it which can individually remove scores from the list based on the data-index number
if (highScoreList) {
    highScoreList.addEventListener("click", function (event) {
        var element = event.target
        //looks for where the user clicks and if it matches the button element
        if (element.matches("button")) {
            //Data-index was assinged to the button on creation 
            var index = element.parentElement.getAttribute("data-index")
            //Will remove the individual score from the array via the splice method
            scoreList.splice(index, 1);
            //Runs the functions to render and store the scores
            storeScoreList();
            renderScoreList();
        }
    })
}
//If the final score text is available write the final score to it
if (finalScore) {
    var timeDisplay = localStorage.getItem('time');
    finalScore.textContent = timeDisplay;
}
//Function for when a name is submitted into the input
function submitIt() {
    event.preventDefault()
    //get the value of the submit and push it to the array
    var theTime = localStorage.getItem("time");
    var userName = textBox.value.trim();
    var name = userName + "   " + theTime;
    name.toString();
    //if the username is empty an alert will be sent
    if (userName === "") {
        alert("Please enter your initials into the textBox");
    } else {
        //Sets up the score list display
        highScoreContainer.style.display = "flex";
        enterScore.style.display = 'none';
        highScoreHeading.textContent = "Highscores";
        clearScore.textContent = "Clear Scores";
        returnHome.textContent = "Go Back";
        //pushes the username and score to the scoreList array
        scoreList.push(name);
        //Runs the function to store and render the score list
        storeScoreList();
        renderScoreList();
    }
}
//Sends the score list to the local storage
function storeScoreList() {
    //stringify and set the scorelist to the local storage and the scorelist array
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}
//empties the scorelist array and renders the new empty list to the page
function clearScores() {
    scoreList = [];
    storeScoreList();
    renderScoreList();
}
//goes to the homepage on click
function homePage() {
    window.location.href = "index.html";
}
//Goes to the score list on click
function viewScore() {
    window.location.href = "score.html";
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


