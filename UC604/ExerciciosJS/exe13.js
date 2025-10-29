//Exercício 13: Elabore um programa que leia um número e mostre a tabuada. (multiplicar de 1 a 10)
const prompt = require('prompt-sync')();

function mostrarTabuada() { 
    const input = prompt("Digite um número inteiro positivo para ver a tabuada:");
    const numero = parseInt(input, 10);

    if (isNaN(numero) || numero <= 0) {
        console.log("Por favor, digite um número inteiro positivo.");
        return;
    }
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}
mostrarTabuada();