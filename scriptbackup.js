// Script before tutoring session - saved to avoid getting confused by comments by tutor

// create element for div id final-score
var scoreEl = document.querySelector("#final-score");
scoreEl=0;

//Trying to display right or wrong after an answer option 1

var rightEl = document.createElement("li")
var wrongEl = document.createElement("li")

rightEl.textContent= "Right!";
wrongEl.textContent= "Wrong."

rightEl.setAttribute("style", "background-color:green; color:white");
wrongEl.setAttribute("style", "background-color:orange; color black");

rightEl.addEventListener("click", function(){
    document.".right-wrong".appendChild(rightEl);
    scoreEl+=5;
    //pseudo code line above
})

wrongEl.addEventListener("click", function(){
    document.".right-wrong".appendChild(wrongEl);
    timeLeft-=15;
    //pseudo code line above
})


var timerEl = document.getElementById("timer");
timerEl.setAttribute("style","color:purple");

function countdown() {
    var timeLeft = 75;
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




//Rewrote array as multiple smaller arrays - keeping incase the other way doesn't work:

// var questionsArray= [
//     {
//         question: "What is HTML?",
//         correctAnswer: 2,  //index 2 of possible answers
//         possibleAnswers: [
//             "1. Hat Tom Mark Lion",
//             "2. HotTopicMarvelLocal",
//             "3. Hyper Text Markup Language",
//             "4. Hotel Train Monkey Link"
//         ]
//     },
//     {
//         question: "Commonly used data types do not include:",
//         correctAnswer: 2,
//         possibleAnswers: [
//             "1. strings",
//             "2. booleans",
//             "3. alerts",
//             "4. numbers"
//         ]
//     },
//     {
//         question:"The condition in an if / else statement is enclosed with _______.",
//         correctAnswer: 1,
//         possibleAnswers: [
//             "1. quotes",
//             "2. curly brackets",
//             "3. parenthesis",
//             "4. square brackets"
//         ]
//     },
//     {
//         question: "Arrays in JavaScript can be used to store _____.",
//         correctAnswer: 3,
//         possibleAnswers: [
//             "1. numbers and strings",
//             "2. other arrays",
//             "3. booleans",
//             "4. all of the above"
//         ]
//     },
//     {
//         question: "String values must be enclosed within ______ when being assigned to variables.",
//         correctAnswer: 2,
//         possibleAnswers: [
//             "1. commas",
//             "2. curly brackets",
//             "3. quotes",
//             "4. parenthesis"
//         ]
//     }    
// ]


// switched to creating the button's/question spot in html instead of creating each element I will be adding text to each element.
// code here in case I change my mind again:
//Write a function to write this content using the questionsArray each time a question is answered.

// //Create question
// var questionCard = document.getElementById("question-card");
// var questionHereEl = document.createElement("h2");
// questionHereEl.textContent= (`${currentQuestion.question}`);
// questionCard.appendChild(questionHereEl);

// //Add styling
// var contentDivEl = document.createElement("div")
// contentDivEl.className = "content";
// contentDivEl.idName = "answer-container";
// questionHereEl.appendChild(contentDivEl);

// //Creates answer 1
// var answerButton1El = document.createElement("button");
// answerButton1El.textContent= (`${currentQuestion.possibleAnswers[0]}`)
// contentDivEl.appendChild(answerButton1El)

// //Creates answer 2
// var answerButton2El = document.createElement("button");
// answerButton2El.textContent= (`${currentQuestion.possibleAnswers[1]}`)
// contentDivEl.appendChild(answerButton2El)

// //Creates answer 3
// var answerButton3El = document.createElement("button");
// answerButton3El.textContent= (`${currentQuestion.possibleAnswers[2]}`)
// contentDivEl.appendChild(answerButton3El)

// //Creates answer 4
// var answerButton4El = document.createElement("button");
// answerButton4El.textContent= (`${currentQuestion.possibleAnswers[3]}`)
// contentDivEl.appendChild(answerButton4El)