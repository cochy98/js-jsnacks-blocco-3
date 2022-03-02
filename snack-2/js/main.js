/**
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera N array, ognuno formato da 10 numeri casuali tra 4 e 4532.
    Ogni volta che ne crei uno, stampalo a schermo.
 */

let userNumber = parseInt(prompt('Quanti array vuoi creare?'));
// controllo se ho inserito un numero
while (isNaN(userNumber)){
    userNumber = parseInt(prompt('Quanti array vuoi creare?'));
}

// imposto un limite massimo di array pari a 100
if(userNumber >= 100){
    userNumber = 100;
}

for (let i = 0; i < userNumber; i++){
    const tempArray = [];
    while (tempArray.length < 10){
        tempArray.push( Math.floor(Math.random() * 4528) + 4 );
    }
    console.log(tempArray);
}