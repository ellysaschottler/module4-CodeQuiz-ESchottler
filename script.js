var scoreEl = document.querySelector("#final-score");
scoreEl=0;

var timeLeft;


var questions= [
    {
        question: "What is HTML?",
        correctAnswer: 2,  //index 2 of possible answers
        possibleAnswers: [
            "1. Hat Tom Mark Lion",
            "2. HotTopicMarvelLocal",
            "3. Hyper Text Markup Language",
            "4. Hotel Train Monkey Link"
        ]
    },
    {
        question: "Commonly used data types do not include:",
        correctAnswer: 2,
        possibleAnswers: [
            "1. strings",
            "2. booleans",
            "3. alerts",
            "4. numbers"
        ]
    },
    {
        question:"The condition in an if / else statement is enclosed with _______.",
        correctAnswer: 1,
        possibleAnswers: [
            "1. quotes",
            "2. curly brackets",
            "3. parenthesis",
            "4. square brackets"
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        correctAnswer: 3,
        possibleAnswers: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above"
        ]
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        correctAnswer: 2,
        possibleAnswers: [
            "1. commas",
            "2. curly brackets",
            "3. quotes",
            "4. parenthesis"
        ]
    }    
]

//After these are on the page we will need to click them and check right or wrong
var answers = document.querySelector("#answer-container");


var rightWrongSpot = document.querySelector("#right-wrong"); // #right-wrong is now a class, have to change to ID in my html
var rightWrongEl = document.createElement("li");
rightWrongSpot.appendChild(rightWrongEl);

answers.addEventListener("click", function(event){
    var answerClicked = event.target;

    if (indexOf(answerClicked) === questions[1]){  // figure out how to grab the value of correct answer here
        scoreEl+=5;
        rightWrongEl.textContent= "Right!";
    } else {
        timeLeft-=15;
        rightWrongEl.textContent= "Wrong!";
    }  
})


// create element for div id final-score


console.log("Correct: ", )
var startBtn = document.querySelector('#start');
var singleBtn = document.querySelector('button');
var allButtons = document.querySelectorAll('button');  // --> [<butoon id="start">Start, <button]

// Grab Reference to each BUtton 

var choiceContainer = document.getElementById('answer-container')
var btn1 = document.getElementById('choice-1')
var btn2 = document.getElementById('choice-2')

choiceContainer.addEventListener("click", function(event){
    // prefvent the default behavior
    event.stopPropagation();
    console.log("Event Target: ", event.target)
    console.log("Event Value: ", event.target.textContent)
    console.log("Event Target: ", event.target.value)
    //  document.".right-wrong".appendChild(wrongEl);
    timeLeft-=15;
    //pseudo code line above
})
/*
btn1.addEventListener("click", function(event){
    console.log("Event Target: ", event.target)
    //  document.".right-wrong".appendChild(wrongEl);
    timeLeft-=15;
    //pseudo code line above
})
btn2.addEventListener("click", function(event){
    console.log("Event Target: ", event.target)
  //  document.".right-wrong".appendChild(wrongEl);
    timeLeft-=15;
//pseudo code line above
})
*/


// Timer

var timerEl = document.getElementById("timer");
timerEl.setAttribute("style","color:purple");

function countdown() {
    timeLeft = 75;
    var timeInterval = setInterval(function() {
        if (timeLeft >1) {    
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
    } else {
        timerEl.textContent= "";
        clearTimeout(timeInterval);
        alert("Time's up!");
// replace alert Times up with function to go to the high-scores page to submit score.  
        }
    }, 1000);
}

// tested countdown - function works: countdown()

