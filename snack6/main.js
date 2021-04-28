// Chiedo numero Utente
var numeroUtente = Number(prompt("Inserisci un numero"));

// Stampo il cubo dei primi n numeri

var n = [];

 for (var i = 1; i <= numeroUtente; i++){
     n += Math.pow(i, 3) + "<br>";
 }

 document.write(n);
