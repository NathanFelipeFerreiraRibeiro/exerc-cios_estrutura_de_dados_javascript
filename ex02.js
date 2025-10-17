const prompt = require('prompt-sync')({sigint: true});

const TAMANHO = 5;
let numero = [];

console.log(`Preencha o array com ${TAMANHO} números:\n`);

for(let i = 1; i <= TAMANHO; i++) {
    let scanf = prompt(`Digite o valor para a posição [${i}]: `);

    let scanfnumero = parseInt(scanf);

    numero.push(scanfnumero);
}

console.log('Antes: ', numero);

for(let i = 0, j = numero.length; i < j; i++, j--) {
    let aux;

    aux = numero[i];
    numero[i]= numero[j];
    numero[j] = aux;
    trocou = true;
}

console.log('Depois: ', numero);