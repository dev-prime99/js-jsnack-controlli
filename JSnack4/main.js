// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var cognomi = ["gatsby", "luca", "paolo", "giovanni", "lucio" ];

var utente = (prompt("Inserisci il tuo cognome")).toLowerCase();

var ok = false;

var i = 0;

while (i < cognomi.length) {

  if (utente == cognomi[i]){
    ok = true;
    console.log("ok");
  } else{
    console.log("non ok");
  }
  i++;
}

if (ok == true){
  document.getElementById('ok').innerHTML = "puoi entrare";
} else{
  document.getElementById('ok').innerHTML = "non sei stato invitato";
}
