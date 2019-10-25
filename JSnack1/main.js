
var num1, num2;

num1 = parseInt(prompt("Inserisci il primo numero"));
num2 = parseInt(prompt("Inserisci il secondo numero"));

if (num1 > num2){
  document.getElementById('risultato').innerHTML = num1;
} else if (num1 < num2){
  document.getElementById('risultato').innerHTML = num2;
} else{
  document.getElementById('risultato').innerHTML = "i due numeri sono pari";
}
