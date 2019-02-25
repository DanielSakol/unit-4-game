$( document ).ready(function() {

const targetNumber = 33;
let counter = 0;
let winCounter= 0;
let lossCounter= 0;

// $("#number-to-guess").text(targetNumber);

//array of crystals numbers and crystals
//const numberOptions = [5, 2, 10, 7];
//const crystals = ["crystal-1", "crystal-2", "crystal-3", "crystal-4"];

//for loop 4 times?
/* for (let i = 0; i < crystals.length; i++) {
    const imageCrystal = $("#crystal-1");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    
    $("#crystals").append(imageCrystal);
}
//crystal 2
for (let i = 0; i < crystals.length; i++) {
  const imageCrystal = $("#crystal-2");
      
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);
  
  $("#crystals").append(imageCrystal);
}
//crystal 3
for (let i = 0; i < crystals.length; i++) {
  const imageCrystal = $("#crystal-3");
      
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);
  
  $("#crystals").append(imageCrystal);
}
//crystal 4
for (let i = 0; i < crystals.length; i++) {
  const imageCrystal = $("#crystal-4");
      
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);
  
  $("#crystals").append(imageCrystal);
}
 */


//onclick
$(".crystal-image").on("click", function() {
console.log("got here");
//this statment
    let crystalValue = $(this).attr("data-crystalvalue");
    crystalValue = parseInt(crystalValue);
//counter (every click adds to counter)
    counter += crystalValue;
    $("#current-score").text(counter).append(document.createTextNode( " = SCORE... Click Again!" ) );;

//win if statement
//alert("New score: " + counter);

if (counter === targetNumber) {
  winCounter ++;
  alert("Nailed it! 33! You win!");
  $("#wins").text(winCounter);
  counter = 0;
  $("#current-score").text(counter).append(document.createTextNode( " ...Let's Try Again!" ) );
  $( "#wins" ).append(document.createTextNode( " WINS" ) );
}

else if (counter >= targetNumber) {
  lossCounter ++;  
  alert("You lose!!");
  $("#losses").text(lossCounter);
  counter = 0;
  $("#current-score").text(counter).append(document.createTextNode( " ...Let's Try Again!" ) );
  $( "#losses" ).append(document.createTextNode( " LOSSES" ) );

  }

});

});