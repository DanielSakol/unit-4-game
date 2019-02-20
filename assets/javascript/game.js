
var targetNumber = 53;

$("#number-to-guess").text(targetNumber);

var counter = 0;

//array of crystals
var numberOptions = [5, 2, 10, 7]

//for loop
for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    alert("New score: " + counter);

    if (counter === targetNumber) {
        alert("You win!");
      }
  
      else if (counter >= targetNumber) {
        alert("You lose!!");
      }
  
    });