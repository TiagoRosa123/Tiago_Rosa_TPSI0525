//Exercício 14: Altere o programa anterior para que mostre todas as tabuadas de 1 a 100. (ciclos for).

const prompt = require('prompt-sync')();

function mostrarTodasTabuadas() {
    for (let num = 1; num <= 100; num++) {
        console.log(`Tabuada do ${num}:`);
        for (let i = 1; i <= 10; i++) {
            const resultado = num * i;
            console.log(`${num} x ${i} = ${resultado}`);
        }
        console.log(''); 
    }
}
mostrarTodasTabuadas();
