// script.js

document.getElementById('rollButton').addEventListener('click', rollDice);

function rollDice() {
    const diceImage = document.getElementById('diceImage');
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    diceImage.src = `dice${diceNumber}.png`;
}
