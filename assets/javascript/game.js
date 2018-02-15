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
    
// Function to render our crystals to the page.
      function renderCrystals() {
        for (var key in crystals) {
          var crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>");
          var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystals[key].imageUrl);
          crystalDiv.append(crystalImg);
          $("#crystal-area").append(crystalDiv);
        }
      }
    
// Function to update our "current guess" number. 
      function updateMatchingNumber(crystal) {
        yourMatchingNumber += crystals[crystal.attr("data-name")].points;
      }
    
// Function that will render your "current guess" number to the page.
      function renderMatchingNumber() {
        var scoreNumDiv = $("<div id='score-number'>").text(yourMatchingNumber);
        $("#score-area").html();
        $("#score-area").html(scoreNumDiv);
      }
    
// Call our functions to start the game!
      setGame();
      updateDom();
      renderCrystals();
      renderMatchingNumber();
    
// Here we create an on.click event for the crystals.
      $(".crystals-button").on("click", function(event) {
        updateMatchingNumber($(this));
        renderMatchingNumber();
    
        if (yourMatchingNumber === randomNum) {
          wins++;
          setGame();
          updateDom(true);
        }
        else if (yourMatchingNumber > randomNum) {
          losses++;
          setGame();
          updateDom(false);
        }
      });
    
  });