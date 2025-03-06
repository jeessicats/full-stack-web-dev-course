let yourName = prompt("What is your name?");
let theirName = prompt("What is their name?");

let randomNumber = Math.random();
let loveScore = Math.floor((randomNumber * 100) + 1);

if (loveScore === 100) {
  alert("🎉 Jackpot! Your love score is: " + loveScore + "%! You and " + theirName + " are basically a love legend!");
} else if (loveScore >= 75) {
  alert("🔥 Hot stuff! Your love score is: " + loveScore + "%! " + theirName + " might just be your perfect partner in crime!");
} else if (loveScore >= 50) {
  alert("✨ It's a work in progress! Your love score is: " + loveScore + "%! Keep the vibe going with " + theirName + ".");
} else {
  alert("😅 Awkward... Your love score is: " + loveScore + "%. Maybe the stars are on a coffee break?");
}