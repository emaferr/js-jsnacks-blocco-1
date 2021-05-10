// Creo array vuoto
var risultato = [];

// Chiedo sei volte il numero se dispari lo inserisco nell'array

var a;

for (var i = 0; i < 6; i++){
  a = parseInt(prompt('inserisci un numero'));
  if (a % 2 == 0) {
    risultato += "";
  } else {
    risultato += a;
  }
}

console.log(risultato);