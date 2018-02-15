// Execute this code when the DOM has fully loaded.
$(document).ready(function() {

//Current guess number
    var yourMatchingNumber = 0;
  
// Generates the random "target number" we will try to reach.
    var randomNum = randomNumGen();
  
    // Setting up our starting variables.
    var wins = 0;
    var losses = 0;
    var crystals;
  
// Function that generates random values for our crystals and returns our crystals object.
    function randomNumCrystals() {
        // Object of crystals
        return {
          red: {
            points: Math.floor(Math.random() * 12) + 1,
            imageUrl: "assets/images/red.png"
          },
          blue: {
            points: Math.floor(Math.random() * 12) + 1,
            imageUrl: "assets/images/blue.png"
          },
          yellow: {
            points: Math.floor(Math.random() * 12) + 1,
            imageUrl: "assets/images/yellow.png"
          },
          green: {
            points: Math.floor(Math.random() * 12) + 1,
            imageUrl: "assets/images/green.png"
          }
        };
      }
    
// random number generator function
      function randomNumGen() {
        return Math.floor(Math.random() * 102) + 19;
      }
//reset game function
      function setGame() {
        yourMatchingNumber = 0;
        crystals = randomNumCrystals();
        randomNum = randomNumGen();
        $("#random-area").text(randomNum);
      }
    
// Function that handles updating the page.
      function updateDom(didUserWin) {
        $("#win-area").empty();
    
//If user won
        if (didUserWin === true) {
// Show victory message, restart the game, and render the new "current guess" number.
          $("#win-area").append($("<p>").text("You won!!"));
          setGame();
          renderMatchingNumber();
        }
// If the user lost...
        else if (didUserWin === false) {
          $("#win-area").append($("<p>").text("You lost!!"));
          setGame();
          renderMatchingNumber();
        }
    
// Building win/loss display and appending it to the page.
        var wSpan = $("<span>").text(wins);
        var lSpan = $("<span>").text(losses);
    
        var pWins = $("<p>").text("Wins: ");
        var pLosses = $("<p>").text("Losses: ");
    
        pWins.append(wSpan);
        pLosses.append(lSpan);
    
        $("#win-area").append(pWins);
        $("#win-area").append(pLosses);
      }
    
  });