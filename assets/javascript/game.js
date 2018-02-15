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
    
  });