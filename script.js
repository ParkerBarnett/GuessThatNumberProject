// Check the link in Console in Chrome Dev Tools
// console.log("Hello World");

// Cael's Cat variable
let cat = "😸";

// Guess That Number
// Message to be used throughout the project
const enterNumText = 'Please enter a number greater than zero:';

// For restarting the game
let restartGame = true;

// For storing the range of the number to be guessed
let rangeNum;

// For storing the number of attempts the user has left
let lives; 

// For storing the user's guess
let guess;

// For storing the user's response to play again or not play again
let playAgain;

// Starting alert message
alert('Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game');

// Game restarts as long as restartGame has a value of true
while (restartGame) {
    // Asks the user to enter a number to set the upper bound for the random number that will be created.
    rangeNum = prompt('Please enter a maximum number for the range');

    // Using parseInt to attempt to convert the user's response into a number value
    rangeNum = parseInt(rangeNum)
    
    // Verifies the user's entry for a range number is a number greater than zero
    // NOTE: All numbers, positive or negative, have a default boolean value of true, EXCEPT for zero, which has a default boolean value of false
    while (!rangeNum || rangeNum < 1) {
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum);
    }

    // Create the random number using the range number entered by the user
    randomNum = Math.floor(Math.random() * rangeNum) + 1;
    console.log(randomNum);
    
    // Prompts user to enter a number of attempts (lives) allowed (e.g. the number of guesses)
    lives = parseInt(prompt('Please enter a number of attempts allowed:'));
    console.log(lives);

    // Verifying the user's entry for a numbers of attempts allowed is a number greater than zero and equal to or less than the range they set
    while (!lives || lives < 1 || lives > rangeNum) {
        lives = parseInt(prompt('Please enter a number of attempts allowed again:'));
        console.log(lives);
    }

    // Asks the user to enter a guess in the range they set
    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${lives} live(s) left.`);

    // Continue looping until the user guesses the correct number or runs out of attempts. NOTE: As loop is set up, the BREAK keyword is run
    while (true){

        // Displays the number when a code word is entered
        if (guess === 'pickle') {
            alert(`Pssst... the number is ${randomNum}`)
            guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${lives} live(s) left.`);
        }

        // Tries to covert the user's guess into a number 
        guess = parseInt(guess);

        // Verify the user's guess is a number greater than zero and less than or equal to the range they set
        while (!guess || guess < 1 || guess > rangeNum) {
            guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`))
        }

        // Remove  a life
        lives--;

        // if else
        if (guess === randomNum) {
            alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`);
            break;
            // Check if the user has any lives left. If not, then the came ends and the number is displayed to the user.
        } else if (lives === 0) {
            alert(`Sorry but you have run out of lives. The number was ${randomNum}`)
            break;
            // Checks to see if the guess was to low and prompts to user to answer again.
        } else if (guess < randomNum) {
            guess = prompt(`Too low. You have ${lives} live(s) left.`);
        // Cael's Cat cheat code
        // } else if (guess == cat) {
        //     lives += 2;
        //     guess = prompt(`You found Cael's Cat. You gained an extra life. You have ${lives} live(s) left.`)
        // The only other possibility is the user's guess was too high so the user is prompted again. 
        } else {
            guess = prompt(`Too high. You have ${lives} live(s) left.`);
        }
    }
    
    // Ask the user with option to play again
    playAgain = prompt('Would you like to play again. Y for yes. N for no.');
    
    // Loop continues until user submits a valid response
    while(true){
        // Check if the user's answer is no (eg. N for no)
        if (playAgain.toUpperCase() === 'N'){
            alert('Thanks for playing!');
            restartGame = false;
            break;
        // Check if the users answer is yes (e.g. Y for yes) 
        } else if (playAgain.toUpperCase() === 'Y'){
            // The game restarts
            break;
        } else {
            playAgain = prompt('Please enter Y or N');
        }
    }
};