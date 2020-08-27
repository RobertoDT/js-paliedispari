// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//1. Chiedere all'utente di inserire una parola
var parola = prompt("Inserisci una parola");

var appoggio = "";


//3. creo funzione
function palindroma(parola){
  for(var i = (parola.length)-1; i >= 0; i--){
    //popolo la variabile vuota ad ogni ciclo ma lo faccio con la parola al contrario
    appoggio = appoggio + parola.charAt(i);
  }
  if(parola == appoggio){
    console.log("La parola è palindroma");
  } else{
    console.log("La parola NON è palindroma");
  }
}

palindroma(parola);
