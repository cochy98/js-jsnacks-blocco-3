/**
 *
 *
    Crea due tag div con due id diversi:
    un div avrà il testo colorato di rosso mentre l'altro di verde.
    Partendo da un array di numeri, creo una funzione che controlla se siano pari o dispari.
    Se sono pari li stampo nell'div "rosso",
    se sono dispari li stampo nell'div "verde".
 *
 */


// ? FUNZIONI DEL MIO PROGRAMMA    
/*  
    La funzione aggiunge una classe ad un elemento HTML già creato.
    Accetta in ingresso due stringhe, il nome dell'elemento a cui aggiungere la classe (element) e il nome della classe
*/
function addClass (element, className){
    element.classList.add(className);
}

/* La seguente funzione restituisce 'true' se il numero è pari, altrimenti 'false' */
function isEven (number){
    if (number % 2 === 0){
        return true;
    }
    return false;
}
// ? /FUNZIONI DEL MIO PROGRAMMA 

/* Mi richiamo i due div creati nell'html tramite id */
const divRed = document.getElementById('div-red');
const divGreen = document.getElementById('div-green');

/* Gli vado ad aggiungere una classe, tramite una funzione creata home-made */
addClass (divRed, 'text-red');
addClass (divGreen, 'text-green');

/* Array con numeri pari e dispary */
const numbers = [2, 4, 7, 11, 23, 20, 62, 55, 72, 15, 17];

for (let i = 0; i < numbers.length; i++){
    if( isEven(numbers[i]) ){
        divRed.innerHTML += ` ${numbers[i]} `;
    } else{
        divGreen.innerHTML += ` ${numbers[i]} `;
    }
}