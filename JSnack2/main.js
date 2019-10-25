var p1, p2, p1l, p2l;

p1 = prompt("Inserisci la prima parola");
p2 = prompt("Inserisci la seconda parola");

p1l = p1.length;
p2l = p2.length;

if (p1l < p2l){
  document.getElementById('corta').innerHTML = p1 + ": è la parola piu corta";
  document.getElementById('lunga').innerHTML = p2 + ": è la parola lunga";
} else if (p1l > p2l){
  document.getElementById('lunga').innerHTML = p1 + ": è la parola lunga";
  document.getElementById('corta').innerHTML = p2 + ": è la parola piu corta";
} else{
  document.getElementById('lunga').innerHTML = p1 + ", " + p2 + " = " + " le parole sono lunghe uguali";
}
