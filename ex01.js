// const PROMPT = require('prompt-sync')({signit: true});
const prompt = require('prompt-sync')({sigint: true});

const TAMANHO = 5;
let numero = [];

console.log('Preencha o array com ${TAMANHO} números:');

for(let i = 1; i <= TAMANHO; i++) {
    let scanf = prompt('Digite o valor para a posição [${i}]: ');

    let scanfnumero = parseInt(scanf);

    numero.push(scanfnumero);
}

console.log('Array preenchido:' + numero);

sort(numero);

if(trocou) {
    console.log('Array após a primeira passada de ordenação (partial sort):', numero);
} else {
    console.log('O array já estava ordenado ou as trocas não foram suficientes.');
}


function sort (numero) {
    for (let i = 0; i < numero.length; i++) {
    let aux;
    for (let i = 0; i < numero.length; i++) {
        if (numero[i] < numero[i-1]) {        
            aux = numero[i];
            numero[i] = numero[i-1];
            numero[i-1] = aux;
            trocou = true;
        }
    }
}
}