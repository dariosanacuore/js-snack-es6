/**
 * Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo oppure in console la bici con peso minore.
 */


const biciclette = [
    { nome: "Bianchi Oltre XR4", peso: 7.2 },
    { nome: "Specialized Tarmac SL7", peso: 6.8 },
    { nome: "Trek Émonda SLR", peso: 6.7 },
    { nome: "Cannondale SuperSix EVO", peso: 7.0 },
    { nome: "Pinarello Dogma F", peso: 6.9 }
];

let min = biciclette[0].peso;
for (let i = 0; i < biciclette.length; i++) {
    //console.log(biciclette[i].nome);
    if (biciclette[i].peso < min) {
        min = biciclette[i].peso;
    }
}
console.log(`Il peso minore è: ${min}`);


/**
 * Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */

const squadre = [
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 }
];
const newArray = [];

for (let i = 0; i < squadre.length; i++) {
    let curRandomNum = Math.floor(Math.random() * 10) + 1;
    //console.log(curRandomNum);
    squadre[i].puntiFatti = curRandomNum;
    squadre[i].falliSubiti = curRandomNum;
}
console.log(squadre);

for (let i = 0; i < squadre.length; i++) {
    newArray.push(squadre[i].nome);
    newArray.push(squadre[i].falliSubiti);
}
console.log(newArray);