# module4-CodeQuiz-ESchottler
A responsive coding quiz.


Todo notes: 
    use math.max() to get a high score?
    use display:block / display:none to switch between cards?
    set all except the starter to display none, then switch as we go
    

    X a timer counting down starting at 75 seconds
    X if answer wrong, 15 second time penalty
    X if correct add 5 pts to score 

    on click event of start button
      x start timer when clicked
        display first question object with it's possible answers
     on click event to check if correct or incorrect was clicked,
        if correct, display correct 
        if correct, store points for correct answer 
        if incorrect display incorrect
        if incorrect -15 seconds from the timer
        also move on to display the next question
     on click event for last question
        display end game items
        stop timer

    end game functions
        store input initials with score
        display initials with score on high scores page
        go back button takes back to the starter
        clear high scores empties the stored data


note: if we need to add form input to the page directly, see api day 2 at 1hr30min.
note: activity 26 is supposed to be helpful for this assignment
note: see activity 22 for local storage
    
    consider event bubbling when handling on click for answer - click anywhere in the answer div and it will check answer and move on to the next question/stage of the quiz. use e.stopPropagation() to stop bubbling if needed.
    