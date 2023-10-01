var startButton = document.querySelector("#start");
var answerButtons = document.querySelector("#answer-container");
var submitInitialsButton = document.querySelector("#submit");
var goBackButton = document.querySelector("#go-back");
var clearHighScoresButton = document.querySelector("#clear-high-scores");
var rightWrong = document.querySelectorAll(".right-wrong")
var scoreEl = document.querySelector("#final-score");
scoreEl=0;

var timeLeft;

//Re-writing question/answer sets - nested arrays getting too confusing
// question arrays are formated: [0]=question, [1]=the first answer option,  same for [2], [3], [4]; [5]= the index of the correct answer
var question1Array= [
    "What is HTML?",
    "1. Hat Tom Mark Lion",
    "2. HotTopicMarvelLocal",
    "3. Hyper Text Markup Language",
    "4. Hotel Train Monkey Link",
    3,
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



//After a question/answer set is on the page we will need to click them and check right or wrong

// maybe add data-right="Right" to correct answer button
var allAnswers = document.querySelector".answer-container";

allAnswers.addEventListener("click", function(event){
    event.stopPropagation();
    var answerClicked = event.target;
    var answerRight = answerClicked.dataset.right;  // still need to add data-right="Right" to each right answer
    if (answerRight == "Right"){
        var setRightText = "Right!";
        rightWrong.textContent = setRightText;
    } else {
        var setWrongText = "Wrong.";
        rightWrong.textContent = setWrongText;
    }
})

