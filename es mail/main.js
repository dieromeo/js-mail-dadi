'use strict';

const emailArray = ["tizio@gmail.com", "caio@gmail.com", "mariorossi@gmail.com", "claudior2@gmail.com", "filippo@libero.it"]; // array con email da confrontare
const emailUtente = prompt("inserisci la tua email"); // variabile che salva la  mail inserita dall'utente
console.log(emailUtente);
let controllo = null; // variabile di controllo per restituire sono un errore nel caso in cui la mail non ci sia

for (let i = 0; i < emailArray.length; i++) {
    if (emailUtente === emailArray[i]) {
        controllo = emailArray[i];
        console.log("La mail inserita corrisponde, accesso consentito")
    }
}

if (controllo === null) {
    console.log('Errore');
}


