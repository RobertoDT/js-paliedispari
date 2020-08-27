// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


//1. chiedo all'utente di inserire un numero da 1 a 5
var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

//1.5 controllo se realmente ha inserito un numero da 1 a 5
while(numeroUtente > 5 || numeroUtente < 0){
  alert("Occhio all'inserimento");
  var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
}

//2. chiedo all'utente di scegliere tra pari e dispari (se pari inserisce p altrimenti d)
var sceltaUtente = prompt("Scegli p per pari o d per dispari");

//3. Genero un numero random da 1 a 5 per il computer usando una funzione
function random (){
  var numeroPc = Math.floor(Math.random() * 5) + 1;
  return numeroPc;
}

//4. Sommo il numero dell'utente con quello del computer
var numeroPc = random();
var somma = numeroUtente + numeroPc;
console.log("Il numero dell'utente è: " + numeroUtente);
console.log("il numero random è: " + numeroPc);
console.log("La somma vale: " + somma);

// 5. Verifico se la somma dei numeri è pari o dispari usando una funzione
function verifica (numUt, numPc){
  if ((numUt + numPc) % 2 == 0){
    return "p";
  } else{
    return "d";
  }
}

console.log(verifica(numeroUtente, numeroPc));

//6. In base alla scelta dell'utente sul pari o dispari dichiaro chi è il vincitore
if(verifica(numeroUtente, numeroPc) == sceltaUtente){
  alert("Ha vinto l'utente");
} else{
  alert("Ha vinto il pc");
}
