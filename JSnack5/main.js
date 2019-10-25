// Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.

var numeri, utente;

numeri = [];

for (var i = 0; i < 6; i++){

  utente = parseInt(prompt("Interisci un numero"))

  if(utente % 2 == 0){
    console.log("pari");
  } else{
    console.log("dispari");
    numeri.push(utente);
  }
}

document.getElementById('risultato').innerHTML = numeri;
