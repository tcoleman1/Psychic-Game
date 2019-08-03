var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        
        
var userGuessText = document.getElementById("userguess-text");
var computerChoiceText = document.getElementById("computerchoice-Text");
var totalWins = document.getElementById("totalwins-text");
var totalLoses = document.getElementById("totalloses-text");
var guessesLeft = document.getElementById("guessesleft-text");
var lettersGuessedText = document.getElementById("lettersguessed-text");
  
  
      var userScore = 0;
      var computerScore = 0;
      var numberOfGuesses = 5;
      var lettersGuessed = [];


    document.onkeyup = function (event) {

    

    var userGuess = event.key;

    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
       

        if (userGuess === computerGuess) {
     

            userScore++;

            numberOfGuesses--;

            lettersGuessed.push(userGuess);
        }

        else  { 
           
            computerScore++;

           numberOfGuesses--;

           lettersGuessed.push(userGuess);
           
           if(numberOfGuesses === 0){

             userScore = 0;
             computerScore = 0;
             lettersGuessed = [];
             numberOfGuesses = 5;

         }
           }
        
    userGuessText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "Computer chose: " + computerGuess;
    totalWins.textContent = "Wins: " + userScore;
    totalLoses.textContent = "Loses: " + computerScore;
    guessesLeft.textContent = "Guesses Left: " + numberOfGuesses;
    lettersGuessedText.textContent = "Letters you guessed so far: " + lettersGuessed;


        };























