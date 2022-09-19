"use strict";

/*
4. (Conditional statements, loops, perhaps functions). Write a simple number guessing game. The
computer first draws a random integer in the range 1-100. The number is not shown to the player.
Instead, the computer asks the user to guess the number. After a guess the computer indicates
whether the guess was correct, too small or too large. The user is repeatedly asked to guess until the
answer is correct. Then, the program should tell how many guesses the user needed. For generating
a random integer, you can use, e.g., Math.floor(low + Math.random() * (high - low + 1));
*/

let randomNumber = Math.floor(1 + Math.random() * (100 - 1 + 1));
//alert(randomNumber);
let counter = 0;

guessingGame(randomNumber);

function guessingGame(number){
    let guessedNumber = prompt("Guess a number!", '');
    let randomNumber = Number(number);
   // let guessedNumber = Number(guessedNumber);
    
    if (guessedNumber < randomNumber){
        alert("too small");
        counter +=1;
        guessingGame(randomNumber);
    }
    else if (guessedNumber > randomNumber){
        alert("too large");
        counter += 1;
        guessingGame(randomNumber);
    }
    else if(guessedNumber == randomNumber) {
        counter += 1;
        return alert("Congratulations! " + guessedNumber + " is correct. " + counter + " guesses needed.");  
    }
    
}