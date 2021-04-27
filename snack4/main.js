// Chiedo all'utente la mail
var nomeUtente = prompt("Si prega di inserire il propio nome");

// Creo un array con gli utenti consentiti
var utentiConsentiti = ["deadpool", "capamerica", "vision", "yoyo"]
utentiConsentiti.push("falcon");

// Controllo il nome utente è presente in lista
var messaggio = utentiConsentiti.includes(nomeUtente);

if (messaggio == true){
    messaggio = "Il tuo accesso è stato eseguito correttamente.";
}else{
    messaggio = "Il nome utente non è presente nel Database";
}

console.log(messaggio);
// Stampo un messaggio sull'esito del controllo

