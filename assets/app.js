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
var questionIndex = 0;


start.addEventListener('click', function () {
    mainContent.style.display = 'none';
    renderQuestion();
})


function renderQuestion() {
    results.textContent = ""
    var currentQuestion = questions[questionIndex];
    var answer = currentQuestion.answer;

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


questionHeading.addEventListener('click', function () {
    questionHeading.textContent = 'Not today JR'
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






// var todo = document.getElementById('todo')
// function grabText() {
//     var text = todoText.value
//     console.log(text)
// }

// function renderAnswers() {
//     for
// }
