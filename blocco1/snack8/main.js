// Chiedi un numero di 4 cifre all’utente e 

var numeroUtente = Number(prompt("Inserisci un numero di quattro cifre"));

// calcola la somma di tutte le cifre che compongono il numero.

var num = numeroUtente;
var sum = 0;

while ( num > 0 ) { 
    sum += (num % 10)|0; 
    num /= 10; 
}

document.write(sum);






