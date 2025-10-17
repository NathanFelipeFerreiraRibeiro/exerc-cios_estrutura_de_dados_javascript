const prompt = require('prompt-sync')({sigint: true});

const TAMANHO = 5;
let numero = [];

console.log(`Preencha o array com ${TAMANHO} números:\n`);

for(let i = 1; i <= TAMANHO; i++) {
    let scanf = prompt(`Digite o valor para a posição [${i}]: `);

    let scanfnumero = parseInt(scanf);

    numero.push(scanfnumero);
}

console.log('Array: ' + numero);

let soma = 0;

for(let i = 0; i < numero.length; i++) {
    soma += numero[i];
}

console.log('Soma: ' + soma);