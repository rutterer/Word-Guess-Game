

var wordChoices = ["knight", "squire", "joust", "hauberk", "helmet", "lance", "longsword", "lion", "dragon"];

var randoWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];

var mystWord = randoWord.split("");

var rightLetter = [];

var wrongLetter = [];

var correctWord = [];

var wins = 0;

var losses = 0;

var guessesLeft = 7;


document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guessesLeft").innerHTML = guessesLeft;

var generateUnderscore = function() {

    for (i = 0; i < mystWord.length; i++){
        correctWord.push("_");
    }
    
    return correctWord;
}

document.getElementById("game-space").append(generateUnderscore());
document.getElementById("game-space").innerHTML = correctWord.join(" ");

document.onkeyup = function (event) {
    var userGuess = event.key;

    if (mystWord.indexOf(userGuess) > -1) {
        rightLetter.push(userGuess)
    } 
    
    else if (mystWord.indexOf(userGuess) === -1) {
        wrongLetter.push(userGuess);
        document.getElementById("guesses").innerHTML = wrongLetter;
        guessesLeft--;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
    }

    for (j=0; j < correctWord.length; j++) {

         if (userGuess === mystWord[j]) {
             correctWord[j] = userGuess;
             document.getElementById("game-space").innerHTML = correctWord.join(" ");
         }
    }

    if (correctWord.indexOf("_") === -1){

        wins++;
        document.getElementById("wins").innerHTML = wins;
    }

    if (guessesLeft === 0) {
        losses++;
        
    }


}




