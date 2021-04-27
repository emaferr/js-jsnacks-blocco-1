// Chiedere in input 10 numeri e sommare solo quelli positivi.

var somma = 0;
var n;

for (var i = 0; i < 10; i++){
  n = parseInt(prompt('Inserisci un numero '));
  if (n > 0){
    somma += n;
  }
}

console.log(somma);



// Il progamma stampa la somma di tutti i numeri