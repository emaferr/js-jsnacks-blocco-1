var word_1 = prompt("Inserisci una parola");
var word_2 = prompt("Inserisci un'altra parola");

// Il software stampa il maggiore
if(word_1.length === word_2.length){
    console.log("Le parole sono uguali riprova");
}else if (word_1.length > word_2.length){
    console.log(word_2, word_1);
}else {
    console.log(word_1, word_2);
}