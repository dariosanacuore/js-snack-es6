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


