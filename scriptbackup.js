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

// old version of check right/wrong:
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




// rewrote question array again and function to populate them to be reusable:
// function question1(){
//     //Populating the question and answers - 
//     var questionHere = document.getElementById("question-here");
//     var getQuestionText = question1Array[0];
//     questionHere.textContent = getQuestionText;

//     //Add text to buttons
//     var firstAnswerHere = document.getElementById("choice-1");
//     var getFirstAnswerText = question1Array[1];
//     firstAnswerHere.textContent = getFirstAnswerText;

//     var secondAnswerHere = document.getElementById("choice-2");
//     var getSecondAnswerText = question1Array[2];
//     secondAnswerHere.textContent = getSecondAnswerText;

//     var thirdAnswerHere = document.getElementById("choice-3");
//     var getThirdAnswerText = question1Array[3];
//     thirdAnswerHere.textContent = getThirdAnswerText;

//     var fourthAnswerHere = document.getElementById("choice-4");
//     var getFourthAnswerText = question1Array[4];
//     fourthAnswerHere.textContent = getFourthAnswerText;

//     var setRight1 = thirdAnswerHere.setAttribute("data-right", "Right")
//     return
// }

// function question2(){
//     //Populating the question and answers - 
//     var questionHere = document.getElementById("question-here");
//     var getQuestionText = question2Array[0];
//     questionHere.textContent = getQuestionText;
    
//     //Add text to buttons
//     var firstAnswerHere = document.getElementById("choice-1");
//     var getFirstAnswerText = question2Array[1];
//     firstAnswerHere.textContent = getFirstAnswerText;
    
//     var secondAnswerHere = document.getElementById("choice-2");
//     var getSecondAnswerText = question2Array[2];
//     secondAnswerHere.textContent = getSecondAnswerText;
    
//     var thirdAnswerHere = document.getElementById("choice-3");
//     var getThirdAnswerText = question2Array[3];
//     thirdAnswerHere.textContent = getThirdAnswerText;
    
//     var fourthAnswerHere = document.getElementById("choice-4");
//     var getFourthAnswerText = question2Array[4];
//     fourthAnswerHere.textContent = getFourthAnswerText;
    
//     var setRight1 = thirdAnswerHere.setAttribute("data-right", "Right")
//     return
// }

// function question3(){
//     //Populating the question and answers - 
//     var questionHere = document.getElementById("question-here");
//     var getQuestionText = question3Array[0];
//     questionHere.textContent = getQuestionText;
        
//      //Add text to buttons
//     var firstAnswerHere = document.getElementById("choice-1");
//     var getFirstAnswerText = question3Array[1];
//     firstAnswerHere.textContent = getFirstAnswerText;
        
//     var secondAnswerHere = document.getElementById("choice-2");
//     var getSecondAnswerText = question3Array[2];
//     secondAnswerHere.textContent = getSecondAnswerText;
        
//     var thirdAnswerHere = document.getElementById("choice-3");
//     var getThirdAnswerText = question3Array[3];
//         thirdAnswerHere.textContent = getThirdAnswerText;
        
//     var fourthAnswerHere = document.getElementById("choice-4");
//     var getFourthAnswerText = question3Array[4];
//     fourthAnswerHere.textContent = getFourthAnswerText;
        
//     var setRight1 = secondAnswerHere.setAttribute("data-right", "Right")      
//     return 
// }    
// function question4(){
//     //Populating the question and answers - 
//     var questionHere = document.getElementById("question-here");
//     var getQuestionText = question4Array[0];
//     questionHere.textContent = getQuestionText;
    
//     //Add text to buttons
//     var firstAnswerHere = document.getElementById("choice-1");
//     var getFirstAnswerText = question4Array[1];
//     firstAnswerHere.textContent = getFirstAnswerText;
    
//     var secondAnswerHere = document.getElementById("choice-2");
//     var getSecondAnswerText = question4Array[2];
//     secondAnswerHere.textContent = getSecondAnswerText;
    
//     var thirdAnswerHere = document.getElementById("choice-3");
//     var getThirdAnswerText = question4Array[3];
//     thirdAnswerHere.textContent = getThirdAnswerText;
    
//     var fourthAnswerHere = document.getElementById("choice-4");
//     var getFourthAnswerText = question4Array[4];
//     fourthAnswerHere.textContent = getFourthAnswerText;
    
//     var setRight1 = fourthAnswerHere.setAttribute("data-right", "Right") 
//     return
// }
// function question5(){
//     //Populating the question and answers - 
//     var questionHere = document.getElementById("question-here");
//     var getQuestionText = question5Array[0];
//     questionHere.textContent = getQuestionText;
    
//     //Add text to buttons
//     var firstAnswerHere = document.getElementById("choice-1");
//     var getFirstAnswerText = question5Array[1];
//     firstAnswerHere.textContent = getFirstAnswerText;
    
//     var secondAnswerHere = document.getElementById("choice-2");
//     var getSecondAnswerText = question5Array[2];
//     secondAnswerHere.textContent = getSecondAnswerText;
    
//     var thirdAnswerHere = document.getElementById("choice-3");
//     var getThirdAnswerText = question5Array[3];
//     thirdAnswerHere.textContent = getThirdAnswerText;
    
//     var fourthAnswerHere = document.getElementById("choice-4");
//     var getFourthAnswerText = question5Array[4];
//     fourthAnswerHere.textContent = getFourthAnswerText;
    
//     var setRight1 = thirdAnswerHere.setAttribute("data-right", "Right") 
//     return
// }

//Re-writing question/answer sets - nested arrays getting too confusing
// question arrays are formated: [0]=question, [1]=the first answer option,  same for [2], [3], [4]; [5]= the index of the correct answer
// var question1Array= [
//     "What is HTML?",
//     "1. Hat Tom Mark Lion",
//     "2. HotTopicMarvelLocal",
//     "3. Hyper Text Markup Language",
//     "4. Hotel Train Monkey Link",
//     3,
// ];
// var question2Array= [
//     "Commonly used data types do not include:",
//     "1. strings",
//     "2. booleans",
//     "3. alerts",
//     "4. numbers",
//     3, 
// ];
// var question3Array= [
//     "The condition in an if / else statement is enclosed with _______.",
//     "1. quotes",
//     "2. curly brackets",
//     "3. parenthesis",
//     "4. square brackets",
//     2, 
// ];
// var question4Array= [
//     "Arrays in JavaScript can be used to store _____.",
//     "1. numbers and strings",
//     "2. other arrays",
//     "3. booleans",
//     "4. all of the above",
//     4, 
// ];
// var question5Array= [
//     "String values must be enclosed within ______ when being assigned to variables.",
//     "1. commas",
//     "2. curly brackets",
//     "3. quotes",
//     "4. parenthesis",
//     3, 
// ];

//////// Storage and highscore backup
//Store initials
submitInitialsButtonEl.addEventListener("click", function(e){
    e.preventDefault();
    localStorage.setItem("initials", initialsInput.value)
    localStorage.setItem("finalScore", finalScore.value)
    finishedCardEl.setAttribute("style", "display:none;");
    highScoresCardEl.setAttribute("style", "display:flex;");
   })

// Post score in final score
var postScoreEl = document.createElement("li");
postScoreEl.textContent = localStorage.getItem("score")
finalScoreEl.appendChild(postScoreEl)


// create 
// var initialsScores = {
//     KM: "45",
//     BB: "33",
//     JJ: "22",
// }

// //stringify to store it
// var initialsScoresString = JSON.stringify(initialsScores);

// localStorage.setItem("userKey", initialsScoresString)
// var initialsScoresObj = localStorage.getItem("userKey");

// //turn to object so we can use it
// var initialsScoreNewObj = JSON.parse(initialsScoresObj);
// highScoresList.textContent = initialsScoreNewObj

var postInitials = localStorage.getItem("initials");
var postScore = localStorage.getItem("score");

highScoresListEl.textContent= "Initials: " + postInitials + " Score: "+ postScore;
