// Get a random number between 1 and 6 for each dice
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Concatenate the random number with the path to the image to get the image path
let randomDiceImage1 = "/images/dice" + randomNumber1 + ".png";
let randomDiceImage2 = "/images/dice" + randomNumber2 + ".png";

// Set the image path to the image element in the HTML
document.querySelector(".img1").setAttribute("src", randomDiceImage1);
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

// Change the title based on the result of the dice roll
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").textContent = "Draw!";
}