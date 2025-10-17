const prompt = require('prompt-sync')({sigint: true});

const TAMANHO = 6;
let numero = [];

console.log(`Preencha o array com ${TAMANHO} números:\n`);

for(let i = 1; i <= TAMANHO; i++) {
    let scanf = prompt(`Digite o valor para a posição [${i}]: `);

    let scanfnumero = parseInt(scanf);

    numero.push(scanfnumero);
}

console.log('Array: ' + numero);

let impar = 0, par = 0;

for(let i = 0; i < numero.length; i++) {
    if(numero[i] % 2 === 0) {
        par++;
    } else {
        impar++;
    }
}

console.log('Par: ' + par);
console.log('Impar: ' + impar);