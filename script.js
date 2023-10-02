var startButtonEl = document.querySelector("#start");
var answerButtonsEl = document.querySelector("#answer-container"); // unused? delete?
var submitInitialsButtonEl = document.querySelector("#submit");
var goBackButtonEl = document.querySelector("#go-back");
var clearHighScoresButtonEl = document.querySelector("#clear-high-scores");
var rightWrongEl = document.querySelector("#right-wrong")
var scoreEl = document.querySelectorAll(".score");
var score =0;
var starterCardEl = document.querySelector("#starter");
var questionCardEl = document.querySelector("#question-card");
var finishedCardEl = document.querySelector("#finished");
var highScoresCardEl = document.querySelector("#high-scores");
var allAnswersEl = document.querySelector("#answer-container");
var timerEl = document.getElementById("timer");
var timeLeft;
var currentQuestionIndex = 0;
var initialsEl = document.querySelector("#initials");
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
        question: "The condition in an if  else statement is enclosed with _______.",
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

//Start the game

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
    var timeInterval = setInterval(function() {
        if (timeLeft >1) {    
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
    } else {
        timerEl.textContent= "";
        clearTimeout(timeInterval);
        alert("Time's up!");;
        questionsOver()
        }
    }, 1000);
}

//Function to check if the answer is right or wrong and to add points or subtract time accordingly

allAnswersEl.addEventListener("click", answerCheck)

function answerCheck(event) {
    event.stopPropagation();
    var answerClicked = event.target;

    if (answerClicked.textContent == questionArray[currentQuestionIndex].correct){
        var setRightText = "Right!";
        rightWrongEl.setAttribute("style", "color:green");
        rightWrongEl.textContent = setRightText;
        score +=5;
        scoreEl.textContent = score;
    } else {
        var setWrongText = "Wrong.";
        rightWrongEl.setAttribute("style", "color:red");
        rightWrongEl.textContent = setWrongText;
        timeLeft-=15;
    }

    if (currentQuestionIndex < questionArray.length){
        currentQuestionIndex ++
        questionCardPopulate ()
    } else {
        questionsOver()
    }
}
function questionsOver() {
    questionCardEl.setAttribute("style", "display:none;");
    finishedCardEl.setAttribute("style", "display:flex;");
}


// if (currentQuestionIndex < questionArray.length){
//     currentQuestionIndex ++
//     questionCardPopulate ()
// } else {
// questionCardEl.setAttribute("style", "display:none;");
// finishedCardEl.setAttribute("style", "display:flex;");
// }

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

//Store initials
submitInitialsButtonEl.addEventListener("click", function(e){
    e.preventDefault();
    localStorage.setItem("initials", initialsEl.value)  
})

// Post initials
var postInitialsEl = document.createElement("li");
    
postInitialsEl.textContent = localStorage.getItem("initials")
highScoresCardEl.appendChild(postInitialsEl)

//Clear High Scores
clearHighScoresButtonEl.addEventListener("click", function(){
    localStorage.clear()

})