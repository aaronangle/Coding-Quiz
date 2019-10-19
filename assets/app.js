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
var questionIndex = 0;
var scores = []

start.addEventListener('click', function () {
    mainContent.style.display = 'none';
    renderQuestion();
})

function renderQuestion() {
    results.textContent = ""
    var currentQuestion = questions[questionIndex];

    console.log(currentQuestion.question);
    for (var i = 0; i < currentQuestion.options.length; i++) {
        questionHeading.textContent = currentQuestion.question;
        option1.textContent = questions[questionIndex].options[0];
        option2.textContent = questions[questionIndex].options[1];
        option3.textContent = questions[questionIndex].options[2];
        option4.textContent = questions[questionIndex].options[3];

    }
}

questionList.addEventListener('click', function (event) {
    var element = event.target
    console.log(element)
    if (questionIndex === 0) {

        option4.dataset.answer = 'true'
        if (element.matches("li#option4")) {
            console.log('clickar')
            results.textContent = "Correct!"
            questionIndex++
            setTimeout(() => {
                renderQuestion();
            }, 1000);

        } else {
            results.textContent = "Sorry, that's not correct."
            questionIndex++
            setTimeout(() => {
                renderQuestion();
            }, 1000);
        }
    }
    else if (questionIndex === 1) {
        if (element.matches("li#option3")) {
            console.log('clickar')
            results.textContent = "Correct!"
            questionIndex++
            setTimeout(() => {
                renderQuestion();
            }, 1000);

        } else {
            results.textContent = "Sorry, that's not correct."
            questionIndex++
            setTimeout(() => {
                renderQuestion();
            }, 1000);
        }
    }
    else if (questionIndex === 2) {
        if (element.matches("li#option1")) {
            console.log('clickar')
            results.textContent = "Correct!"
            questionIndex++
            setTimeout(() => {
                renderQuestion();
            }, 1000);

        } else {
            results.textContent = "Sorry, that's not correct."
            questionIndex++
            setTimeout(() => {
                renderQuestion();
            }, 1000);
        }
    }
    else if (questionIndex === 3) {
        if (element.matches("li#option2")) {
            console.log('clickar')
            results.textContent = "Correct!"
            questionIndex++
            setTimeout(() => {
                window.location.href = "score.html"
            }, 1000);

        } else {
            results.textContent = "Sorry, that's not correct."
            questionIndex++
            setTimeout(() => {
                window.location.href = "score.html"
            }, 1000);
        }
    }


})


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
            "Booleans",
            "Alerts",
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
        answer: "Hypertext Markup Language"

    }

]

function submitIt() {


    //get the value of the submit and push it to the array
    initials = textBox.value
    if (initials) {
        enterScore.style.display = 'none';
        //create a list item with the value of input box in it
        //append the list item to the unordered lsit



    } else {
        alert("Please enter your initials into the textBox")
    }
    //create the go back button
    //create the clear highscore button
}




