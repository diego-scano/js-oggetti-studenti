// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà

console.log('ESERCIZIO 1');

var studente = {
  'nome': 'Diego',
  'cognome': 'Scano',
  'eta': 31
}

for(var key in studente) {
  console.log(key + ': ' + studente[key]);
}


// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

console.log('ESERCIZIO 2');

var studenti = [
  studente1 = {
    'nome': 'Diego',
    'cognome': 'Scano'
  },
  studente2 = {
    'nome': 'Ajeje',
    'cognome': 'Brazorf'
  },
  studente3 = {
    'nome': 'Pinco',
    'cognome': 'Pallo'
  }
]

var persona;
for(x = 0; x < studenti.length; x++) {
  console.log('Studente ' + (x + 1))
  persona = studenti[x];

  for(var key in persona) {
    console.log(key + ': ' + persona[key]);
  }
}


// Dare la possibilità all'utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età

console.log('ESERCIZIO 3');

var nuovoStudente = {};

nuovoStudente.nome = prompt('Inserisci nome studente');
nuovoStudente.cognome = prompt('Inserisci cognome studente');
nuovoStudente.eta = prompt('Inserisci età studente');

studenti.push(nuovoStudente);

console.log(studenti);
