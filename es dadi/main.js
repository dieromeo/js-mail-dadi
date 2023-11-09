'use strict';

const bottoneInizio = document.getElementById('start-button'); // salvo il bottone per scatenare un evento al click
const risutato = document.getElementById('result');

bottoneInizio.addEventListener('click', function () {

    const valoreDadiUtente = Math.floor(Math.random() * 6 + 1); // creo due variabili per il valore dei dadi
    const valoreDadiPc = Math.floor(Math.random() * 6 + 1);

    if (valoreDadiUtente > valoreDadiPc) { // vince l'utente
        risutato.innerHTML = "Hai vinto con un tiro di: " + valoreDadiUtente;
    }
    else if (valoreDadiUtente === valoreDadiPc) { // pareggio
        risutato.innerHTML = "Hai pareggiato, tira ancora";
    }
    else { // vince il pc
        risutato.innerHTML = "Ha vinto il pc con un tiro di: " + valoreDadiPc;
    }
})