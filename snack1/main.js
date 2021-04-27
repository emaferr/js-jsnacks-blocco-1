// L'utente inserisce due numeri in successione, con due prompt.
var number_1 = Number(prompt("Inserisci un numero"));
var number_2 = Number(prompt("Inserisci un'altro numero"));

// Il software stampa il maggiore
if(number_1 === number_2){
    console.log("Same number! Try again");
}else if (number_1 > number_2){
    console.log(number_1);
}else {
    console.log(number_2);
}