// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// Chiedere all'utente la sua mail
const userEmail = prompt("Qual è la tua email?");
console.log(userEmail);

const availableEmails = ["lorem@gmail.com", "ipsum@libero.it", "dolor@hotmail.com", "pincopallino@live.it", "booleanuser@gmail.com"];

let emailResult = false;

for (let i = 0; i < availableEmails.length; i++) {
    const currentEmail = availableEmails[i];
    console.log(currentEmail);

    // SE l'email inserita dall'utente è presente nella array
    if (currentEmail === userEmail) {
        emailResult = true;
    }
}

if (emailResult) {
    alert("Login valido!")
} else {
    alert("Login fallito, riprova!")
}
