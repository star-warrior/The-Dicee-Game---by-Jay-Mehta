
// Player names

var player1 = prompt ("Name of player 1 ?")

var player = prompt ("Name of player 2 ?")

// Change names

document.querySelectorAll("p")[0].innerHTML = player1 ;

document.querySelectorAll("p")[1].innerHTML = player ;

// For first Dice

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

// for second dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

// winner announcement

if (randomNumber1 > randomNumber2 ) {
  document.querySelector ("h1").innerHTML = "🚩 " + player1 + " Wins.";
}

else if (randomNumber1 < randomNumber2 ) {
  document.querySelector ("h1").innerHTML = player + " Wins.🚩";
}

else if ( randomNumber1 = randomNumber2 ) {
  document.querySelector ("h1").innerHTML = "🚩Draw.🚩";
}
