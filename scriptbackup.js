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

