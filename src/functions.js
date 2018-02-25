var numAttempt=8


const hangSteps = [
 `






 `,
 `






 _______`,
 `
    |
    |
    |
    |
    |
    |
 ___|___`,
 `   ____________
    |
    |
    |
    |
    |
    |
 ___|___`,
 `   ____________
    |/
    |
    |
    |
    |
    |
 ___|___`,
 `   ____________
    |/      |
    |
    |
    |
    |
    |
 ___|___`,
 `   ____________
    |/      |
    |      (_)
    |      \\|/
    |       |
    |      / \\
    |
 ___|___`
]



function wrongGuessCount(word, guesses) {
 return guesses
 .filter(guess => word.indexOf(guess) === -1)
 .length

}

function showGuess(word, guesses) {
 return word
 .split('')
 .map(letter => (guesses.includes(letter)? letter: '_'))
 .join('')

}

function isWinner(word, guesses) {
 return word.split('').join('')===showGuess(word,guesses)
}


const readline = require('readline')
const rl = readline.createInterface({input:process.stdin, output:process.stdout})

 function exit(){
 rl.close()
 process.exit()}


function next(word, guesses) {
   // check if lost
   if (wrongGuessCount(word,guesses)>numAttempt)
   {console.log("You lose")
   exit()}

   // check if won
   if (isWinner(word, guesses))
   {console.log("You win")
   exit()}


   // ask for the next letter
   rl.question('next letter? ', answer => {
     console.log('player wrote:', answer)
     console.log(showGuess(word, guesses))
       showGuess(word, guesses.concat(answer))
       next(word, guesses.concat(answer))


     console.log (" ")
       var x=wrongGuessCount(word, guesses)
       if (x===0) {console.log(hangSteps[0])}
       if (x===1) {console.log(hangSteps[1])}
       if (x===2) {console.log(hangSteps[2])}
       if (x===3) {console.log(hangSteps[3])}
       if (x===4) {console.log(hangSteps[4])}
       if (x===5) {console.log(hangSteps[5])}
       if (x>6) {console.log(hangSteps[6])}

   })
}
next('hello', [])
