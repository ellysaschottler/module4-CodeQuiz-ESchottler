var startButton = document.querySelector("#start");
var answerButtons = document.querySelector("#answer-container");
var submitInitialsButton = document.querySelector("#submit");
var goBackButton = document.querySelector("#go-back");
var clearHighScoresButton = document.querySelector("#clear-high-scores");
var rightWrong = document.querySelectorAll(".right-wrong")
var scoreEl = document.querySelector("#final-score");
scoreEl=0;
var starterCard = document.querySelector("#starter");
var questionCard = document.querySelector("#question-card");
var finishedCard = document.querySelector("#finished");
var highScoresCard = document.querySelector("#high-scores");

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


startButton.addEventListener("click",function(event){
    event.stopPropagation();
    starterCard.setAttribute("style", "display:none;");
    questionCard.setAttribute("style", "display:flex;");
    countdown();
    question1();
    answerCheck(event);
    question2();
    answerCheck(event);
    question3();
    answerCheck();
    question4();
    answerCheck();
    question5();
    answerCheck();
}
)



function question1(){
    //Populating the question and answers - 
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

    var setRight1 = thirdAnswerHere.setAttribute("data-right", "Right")
    return
}

function question2(){
    //Populating the question and answers - 
    var questionHere = document.getElementById("question-here");
    var getQuestionText = question2Array[0];
    questionHere.textContent = getQuestionText;
    
    //Add text to buttons
    var firstAnswerHere = document.getElementById("choice-1");
    var getFirstAnswerText = question2Array[1];
    firstAnswerHere.textContent = getFirstAnswerText;
    
    var secondAnswerHere = document.getElementById("choice-2");
    var getSecondAnswerText = question2Array[2];
    secondAnswerHere.textContent = getSecondAnswerText;
    
    var thirdAnswerHere = document.getElementById("choice-3");
    var getThirdAnswerText = question2Array[3];
    thirdAnswerHere.textContent = getThirdAnswerText;
    
    var fourthAnswerHere = document.getElementById("choice-4");
    var getFourthAnswerText = question2Array[4];
    fourthAnswerHere.textContent = getFourthAnswerText;
    
    var setRight1 = thirdAnswerHere.setAttribute("data-right", "Right")
    return
}

function question3(){
    //Populating the question and answers - 
    var questionHere = document.getElementById("question-here");
    var getQuestionText = question3Array[0];
    questionHere.textContent = getQuestionText;
        
     //Add text to buttons
    var firstAnswerHere = document.getElementById("choice-1");
    var getFirstAnswerText = question3Array[1];
    firstAnswerHere.textContent = getFirstAnswerText;
        
    var secondAnswerHere = document.getElementById("choice-2");
    var getSecondAnswerText = question3Array[2];
    secondAnswerHere.textContent = getSecondAnswerText;
        
    var thirdAnswerHere = document.getElementById("choice-3");
    var getThirdAnswerText = question3Array[3];
        thirdAnswerHere.textContent = getThirdAnswerText;
        
    var fourthAnswerHere = document.getElementById("choice-4");
    var getFourthAnswerText = question3Array[4];
    fourthAnswerHere.textContent = getFourthAnswerText;
        
    var setRight1 = secondAnswerHere.setAttribute("data-right", "Right")      
    return 
}    
function question4(){
    //Populating the question and answers - 
    var questionHere = document.getElementById("question-here");
    var getQuestionText = question4Array[0];
    questionHere.textContent = getQuestionText;
    
    //Add text to buttons
    var firstAnswerHere = document.getElementById("choice-1");
    var getFirstAnswerText = question4Array[1];
    firstAnswerHere.textContent = getFirstAnswerText;
    
    var secondAnswerHere = document.getElementById("choice-2");
    var getSecondAnswerText = question4Array[2];
    secondAnswerHere.textContent = getSecondAnswerText;
    
    var thirdAnswerHere = document.getElementById("choice-3");
    var getThirdAnswerText = question4Array[3];
    thirdAnswerHere.textContent = getThirdAnswerText;
    
    var fourthAnswerHere = document.getElementById("choice-4");
    var getFourthAnswerText = question4Array[4];
    fourthAnswerHere.textContent = getFourthAnswerText;
    
    var setRight1 = fourthAnswerHere.setAttribute("data-right", "Right") 
    return
}
function question5(){
    //Populating the question and answers - 
    var questionHere = document.getElementById("question-here");
    var getQuestionText = question5Array[0];
    questionHere.textContent = getQuestionText;
    
    //Add text to buttons
    var firstAnswerHere = document.getElementById("choice-1");
    var getFirstAnswerText = question5Array[1];
    firstAnswerHere.textContent = getFirstAnswerText;
    
    var secondAnswerHere = document.getElementById("choice-2");
    var getSecondAnswerText = question5Array[2];
    secondAnswerHere.textContent = getSecondAnswerText;
    
    var thirdAnswerHere = document.getElementById("choice-3");
    var getThirdAnswerText = question5Array[3];
    thirdAnswerHere.textContent = getThirdAnswerText;
    
    var fourthAnswerHere = document.getElementById("choice-4");
    var getFourthAnswerText = question5Array[4];
    fourthAnswerHere.textContent = getFourthAnswerText;
    
    var setRight1 = thirdAnswerHere.setAttribute("data-right", "Right") 
    return
}


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


//Function to check if the answer is right or wrong and to add points or subtract time accordingly

function answerCheck(){
var allAnswers = document.querySelector("#answer-container");

allAnswers.addEventListener("click", function(event){
    event.stopPropagation();
    var answerClicked = event.target;

    if (answerClicked.dataset.right == "Right"){
        var setRightText = "Right!";
        // could add a color change here with rightwrong.setAttribute("style, "color:green");
        rightWrong.textContent = setRightText;
        scoreEl+=5;
    } else {
        var setWrongText = "Wrong.";
// could add a color change here with rightwrong.setAttribute("style, "color:red");
        rightWrong.textContent = setWrongText;
        timeLeft-=15;
    }
})
}

//Rewriting questions as a larger array to loop through
var questionArray = [
    {
        question: "What is HTML?",
        a1: "1. Hat Tom Mark Lion",
        a2: "2. HotTopicMarvelLocal",
        a3: "3. Hyper Text Markup Language",
        a4: "4. Hotel Train Monkey Link",
        correct: 3},
    {
        question: "Commonly used data types do not include:",
        a1: "1. strings",
        a2: "2. booleans" ,
        a3: "3. alerts",
        a4: "4. numbers",
        correct:3},
    {
        question: "The condition in an if / else statement is enclosed with _______.",
        a1: "1. quotes",
        a2: "2. curly brackets",
        a3: "3. parenthesis",
        a4: "4. square brackets",
        correct: 2},
    {
        question: "Arrays in JavaScript can be used to store _____.",
        a1: "1. numbers and strings",
        a2: "2. other arrays",
        a3: "3. booleans",
        a4: "4. all of the above",
        correct: 4},
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        a1: "1. commas",
        a2: "2. curly brackets",
        a3: "3. quotes",
        a4: "4. parenthesis",
        correct: 3}
    ]


    function questionsPopulate(){
        //Populating the question and answers - 
        var questionHere = document.getElementById("question-here");
        var getQuestionText = questionArray[i].question;
        questionHere.textContent = getQuestionText;
    
        //Add text to buttons
        var firstAnswerHere = document.getElementById("choice-1");
        var getFirstAnswerText = questionArray[i].a1;
        firstAnswerHere.textContent = getFirstAnswerText;
    
        var secondAnswerHere = document.getElementById("choice-2");
        var getSecondAnswerText = questionArray[i].a2;
        secondAnswerHere.textContent = getSecondAnswerText;
    
        var thirdAnswerHere = document.getElementById("choice-3");
        var getThirdAnswerText = questionArray[i].a3;
        thirdAnswerHere.textContent = getThirdAnswerText;
    
        var fourthAnswerHere = document.getElementById("choice-4");
        var getFourthAnswerText = questionArray[i].a4;
        fourthAnswerHere.textContent = getFourthAnswerText;
    
        var setRight1 = thirdAnswerHere.setAttribute("data-right", "Right")
        return
    }