//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

var numeri, i, utente;

numeri = 0;

i = 0;

//      FOR

while(i < 5){
  utente = parseInt(prompt("Inserisci un numero"));
  numeri = numeri + utente;
  console.log(numeri);
  i++;
}

/*      WHILE

for (i = 0; i < 5; i++){
  utente = parseInt(prompt("Inserisci un numero"));
  numeri = numeri + utente;
  console.log(numeri);
}
*/

document.getElementById('risultato').innerHTML = numeri;
