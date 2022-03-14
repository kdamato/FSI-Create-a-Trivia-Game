//Window Prompt-Enter Player Username
let userName = window.prompt('Please enter your name:')
//JS code for score tracker
let userScore = 0


//JS code for questions window prompts, answer selection, correct answer tracker and correct answer score
for(let i = 0; i < questions.length; i++){
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
    if(userAnswer === question.correctAnswer){
        userScore = userScore + 10
    }
}

//Window Prompt-alert for final score
window.alert('Your score is: '+userScore)