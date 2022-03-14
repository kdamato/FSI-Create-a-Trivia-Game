//Window Prompt to enter and save name of player
let userName = window.prompt('Please enter your name:')

//window prompt for questions and answer selection-correct answer JS coding at bottom
for(let i = 0; i < questions.length; i++){
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
    if(userAnswer === question.correctAnswer){
        console.log('Correct')
    }
}