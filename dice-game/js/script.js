// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Generare due numeri casuali da 1 a 6
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber, "giocatore");
const computerNumber = Math.floor(Math.random() * 6) + 1;
console.log(computerNumber, "computer");

// SE primo numero è maggiore del secondo
if (userNumber > computerNumber) {
    alert("You won!")
} else if (userNumber < computerNumber) {
    alert("You lost!")
} else {
    alert("Even!")
}