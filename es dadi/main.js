'use strict';

const buttonStart = document.getElementById('start-button'); // salvo il bottone per scatenare un evento al click

buttonStart.addEventListener('click', function () {

    const valoreDadiUtente = Math.floor(Math.random() * 6 + 1); // creo due variabili per il valore dei dadi
    const valoreDadiPc = Math.floor(Math.random() * 6 + 1);

    if (valoreDadiUtente > valoreDadiPc) { // vince l'utente
        console.log('hai vinto con un tiro di: ', valoreDadiUtente);
    }
    else if (valoreDadiUtente === valoreDadiPc) { // pareggio
        console.log('avete pareggiato, tira ancora');
    }
    else { // vince il pc
        console.log('vince il pc con un tiro di: ', valoreDadiPc);
    }
})