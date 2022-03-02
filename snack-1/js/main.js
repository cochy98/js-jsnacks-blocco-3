/**
 *
 *
    Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
    Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 200.
 *  per chi ha finito: crea due liste, entrambe devono arrivare almeno a 200, in una ci metti i numeri inseriti pari e  nell'altra i dispari
 */

let numbers = [];
let pari = [];
let dispari = [];

let sum = 0;

while (sum < 200){
  const number = parseInt( prompt('Inserisci un numero') );
  numbers.push(number);

  sum += number;
  console.log(`Somma attuale: ${sum}`);

  if (number % 2 == 0){
    pari.push(number);
  } else{
    dispari.push(number);
  }
}

console.log(`Somma totale: ${sum}`);
console.log(`I numeri inseriti nell'array numbers sono: ${numbers}`);
console.log(`I numeri inseriti nell'array pari sono: ${pari}`);
console.log(`I numeri inseriti nell'array dispari sono: ${dispari}`);