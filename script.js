var startButtonEl = document.querySelector("#start");
var answerButtonsEl = document.querySelector("#answer-container"); // unused? delete?
var submitInitialsButtonEl = document.querySelector("#submit");
var goBackButtonEl = document.querySelector("#go-back");
var clearHighScoresButtonEl = document.querySelector("#clear-high-scores");
var rightWrongEl = document.querySelector("#right-wrong")
var scoreEl = document.querySelector("#score");
var score =0;
var starterCardEl = document.querySelector("#starter");
var questionCardEl = document.querySelector("#question-card");
var finishedCardEl = document.querySelector("#finished");
var highScoresCardEl = document.querySelector("#high-scores-card");
var highScoreLinkEl = document.querySelector("#high-scores-link");
var highScoresListEl = document.querySelector("#high-scores-list");
var allAnswersEl = document.querySelector("#answer-container");
var timerEl = document.getElementById("timer");
var timeLeft
var currentQuestionIndex = 0;
var initialsInput = document.querySelector("#initials");
var timeInterval
var questionArray = [
    {
        question: "What is HTML?",
        a1: "1. Hat Tom Mark Lion",
        a2: "2. HotTopicMarvelLocal",
        a3: "3. Hyper Text Markup Language",
        a4: "4. Hotel Train Monkey Link",
        correct: "3. Hyper Text Markup Language"},
    {
        question: "Commonly used data types do not include:",
        a1: "1. strings",
        a2: "2. booleans" ,
        a3: "3. alerts",
        a4: "4. numbers",
        correct: "3. alerts"},
    {
        question: "The condition in an if / else statement is enclosed with _______.",
        a1: "1. quotes",
        a2: "2. curly brackets",
        a3: "3. parenthesis",
        a4: "4. square brackets",
        correct: "3. parenthesis"},
    {
        question: "Arrays in JavaScript can be used to store _____.",
        a1: "1. numbers and strings",
        a2: "2. other arrays",
        a3: "3. booleans",
        a4: "4. all of the above",
        correct: "4. all of the above"},
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        a1: "1. commas",
        a2: "2. curly brackets",
        a3: "3. quotes",
        a4: "4. parenthesis",
        correct: "3. quotes"}
]

//Start the game - show the questions and hide the start information, start the counter
startButtonEl.addEventListener("click",function(event){
    event.stopPropagation();
    starterCardEl.setAttribute("style", "display:none;");
    questionCardEl.setAttribute("style", "display:flex;");
    countdown();
    questionCardPopulate();
}
)
// Timer
timerEl.setAttribute("style","color:purple");

function countdown() {
    timeLeft = 75;
    timeInterval = setInterval(function() {
        if (timeLeft >1) {    
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
    } else {
        timerEl.textContent= "";
        clearTimeout(timeInterval);
        alert("Time's up!");
        questionsOver();
        }
    }, 1000);
}

//Function to check if the answer is right or wrong and to add points or subtract time accordingly
allAnswersEl.addEventListener("click", answerCheck)

function answerCheck(event) {
    event.stopPropagation();
    var answerClicked = event.target;

    if (answerClicked.textContent == questionArray[currentQuestionIndex].correct){
        var setRightText = "Previous answer: Right!";
        rightWrongEl.setAttribute("style", "color:green");
        rightWrongEl.textContent = setRightText;
        score +=5;
        scoreEl.textContent = "Score: " + score;
    } else {
        var setWrongText = "Previous Answer: Wrong.";
        rightWrongEl.setAttribute("style", "color:red");
        rightWrongEl.textContent = setWrongText;
        timeLeft-=15;
    }

    if (currentQuestionIndex < questionArray.length-1){
        currentQuestionIndex ++
        questionCardPopulate ();
    } else {
        questionsOver();
        clearInterval(timeInterval);
    }
}

// hides question area and moves on to the End game page
function questionsOver(){
    questionCardEl.setAttribute("style", "display:none;");
    finishedCardEl.setAttribute("style", "display:flex;");
}
// Displays the questions and answer options one set at a time
function questionCardPopulate(){
    var questionHere = document.getElementById("question-here");
    var getQuestionText = questionArray[currentQuestionIndex].question;
    questionHere.textContent = getQuestionText;

    var firstAnswerHere = document.getElementById("choice-1");
    var getFirstAnswerText = questionArray[currentQuestionIndex].a1;
    firstAnswerHere.textContent = getFirstAnswerText;

    var secondAnswerHere = document.getElementById("choice-2");
    var getSecondAnswerText = questionArray[currentQuestionIndex].a2;
    secondAnswerHere.textContent = getSecondAnswerText;

    var thirdAnswerHere = document.getElementById("choice-3");
    var getThirdAnswerText = questionArray[currentQuestionIndex].a3;
    thirdAnswerHere.textContent = getThirdAnswerText;

    var fourthAnswerHere = document.getElementById("choice-4");
    var getFourthAnswerText = questionArray[currentQuestionIndex].a4;
    fourthAnswerHere.textContent = getFourthAnswerText;
}

var userScores = [];

// Appends list items to high scores list if any high scores are stored
function renderHighScores(){
    for (var i = 0; i < userScores.length; i++){
        var userScore = userScores[i];
        var li = document.createElement("li");
        li.textContent = userScore;
        li.setAttribute("data-index", i);
        highScoresListEl.appendChild(li);
    }
}

// Get stored high score table if available
function init() {
    var storedUserScores = JSON.parse(localStorage.getItem("userScores"));
    if (storedUserScores != null) {
        userScores = storedUserScores;
    }
    renderHighScores();
}

// Store high scores
function storeHighScores() {
    localStorage.setItem("userScores", JSON.stringify(userScores));
}

submitInitialsButtonEl.addEventListener("click", function(e){
    e.preventDefault();
    finishedCardEl.setAttribute("style", "display:none;");
    highScoresCardEl.setAttribute("style", "display:flex;");
    var userInitials = initialsInput.value.trim();
    if (userInitials ===""){
        return;
    }
    var newUserScore = userInitials + " " + score;
    userScores.push(newUserScore);
    score=0;
    storeHighScores();
    renderHighScores();
})

//Clear High Scores
clearHighScoresButtonEl.addEventListener("click", function(){
    localStorage.clear()
    highScoresListEl.textContent = "";
})

// Go Back
goBackButtonEl.addEventListener("click", function(){
location.reload(true);
})

// High Score link
highScoreLinkEl.addEventListener("click", function(){
    starterCardEl.setAttribute("style", "display:none;");
    highScoresCardEl.setAttribute("style", "display:flex;");
})

init()
