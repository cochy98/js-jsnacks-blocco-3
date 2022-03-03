/* 
    Creo un'altra funzione che controlla che la somma di due numeri x & y sia pari

    sommaPari(24214, 12451241)  ==> true se la somma mi da un numero pari
                                ==> false se la somma mi da un numero dispari
*/

/* La seguente funzione restituisce 'true' se il numero è pari, altrimenti 'false' */
function isEven (number){
    if (number % 2 === 0){
        return true;
    }
    return false;
}

/* La seguente funzione restituisce 'true' se la somma è pari, altrimenti 'false' */
function sumEven (num1, num2){
    const sum = num1 + num2;
    return isEven (sum);
}


const userNum1 = parseInt(prompt('inserisci numero 1'));
const userNum2 = parseInt(prompt('inserisci numero 2'));
console.log(`La somma dei due numeri è un numero pari? --> ${sumEven (userNum1, userNum2)}`);