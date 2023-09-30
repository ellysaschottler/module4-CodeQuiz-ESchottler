var startButton = document.querySelector("#start");
var answerButtons = document.querySelector("#answer-container");
var submitInitialsButton = document.querySelector("#submit");
var goBackButton = document.querySelector("#go-back");
var clearHighScoresButton = document.querySelector("#clear-high-scores");

var scoreEl = document.querySelector("#final-score");
scoreEl=0;

var timeLeft;

//Re-writing question/answer sets - nested arrays getting too confusing

var question1Array= [
    "What is HTML?",
    "1. Hat Tom Mark Lion",
    "2. HotTopicMarvelLocal",
    "3. Hyper Text Markup Language",
    "4. Hotel Train Monkey Link",
    3,  //index 3 is the correct answer
];
var question2Array= [
    "Commonly used data types do not include:",
    "1. strings",
    "2. booleans",
    "3. alerts",
    "4. numbers",
    3,
];
var question3Array= [
    "The condition in an if / else statement is enclosed with _______.",
    "1. quotes",
    "2. curly brackets",
    "3. parenthesis",
    "4. square brackets",
    2,
];
var question4Array= [
    "Arrays in JavaScript can be used to store _____.",
    "1. numbers and strings",
    "2. other arrays",
    "3. booleans",
    "4. all of the above",
    4,        
];
var question5Array= [
    "String values must be enclosed within ______ when being assigned to variables.",
    "1. commas",
    "2. curly brackets",
    "3. quotes",
    "4. parenthesis",
    3,
];


//Populating the question and answers - will make a function for each question and call one function after the next
var questionHere = document.getElementById("question-here");
var getQuestionText = question1Array[0];
questionHere.textContent = getQuestionText;

//Add text to buttons
var firstAnswerHere = document.getElementById("choice-1");
var getFirstAnswerText = question1Array[1];
firstAnswerHere.textContent = getFirstAnswerText;

var secondAnswerHere = document.getElementById("choice-2");
var getSecondAnswerText = question1Array[2];
secondAnswerHere.textContent = getSecondAnswerText;

var thirdAnswerHere = document.getElementById("choice-3");
var getThirdAnswerText = question1Array[3];
thirdAnswerHere.textContent = getThirdAnswerText;

var fourthAnswerHere = document.getElementById("choice-4");
var getFourthAnswerText = question1Array[4];
fourthAnswerHere.textContent = getFourthAnswerText;


//After a question/answer set is on the page we will need to click them and check right or wrong


// var rightWrongSpot = document.querySelector("#right-wrong"); // #right-wrong is now a class, have to change to ID in my html
// var rightWrongEl = document.createElement("li");
// rightWrongSpot.appendChild(rightWrongEl);

// answerButtons.addEventListener("click", function(event){
//     event.stopPropagation();
//     var answerClicked = event.target;

//     if (indexOf(answerClicked) === questionsArray.correctAnswer[1]){  // figure out how to grab the value of correct answer here
//         scoreEl+=5;
//         rightWrongEl.textContent= "Right!";
//     } else {
//         timeLeft-=15;
//         rightWrongEl.textContent= "Wrong!";
//     }  
// })

// create element for div id final-score


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










//Add data-set info to flag which one is correct



  
