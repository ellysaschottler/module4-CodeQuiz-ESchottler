var rightWrong = document.querySelector(".right-wrong");
rightWrong.textContent = "right!";
rightWrong.setAttribute("style", "background-color:green; color:white;")



function append Right! or Wrong! 

var rightEl = document.createElement("li")
var wrongEl = document.createElement("li")

rightEl.textContent= "Right!";
wrongEl.textContent= "Wrong."

rightEl.setAttribute("style", "background-color:green; color:white");
wrongEl.setAttribute("style", "background-color:orange; color black");

if (on click item class is right){ 
document."#right-wrong".appendChild(rightEl);

}else{
document."#right-wrong".appendChild(wrongEl);
}



// function timesUp (){
//     alert("Game over, time's up!");

// }
// var gameOver = setTimeout(timesUp, 75000)


// countdown from 75 seconds (still need to add ability to penalize 15 seconds on wrong answers)
var timerEl = document.getElementById("timer");
timerEl.setAttribute("style","color:purple");

function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function() {
        if (timeLeft >1) {    
            timerEl.textContent = timeLeft + "seconds";
            timeLeft--;
    } else {
        timerEl.textContent= "";
        clearTimeout(timeInterval);
        alert("Time's up!");
// replace alert Times up with function to go to the high-scores page to submit score.  
        }
    }, 1000);
}

