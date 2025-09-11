//Exercício 10: Elabore um programa que lê um número e escreve quantos divisores ele possui.
const prompt = require('prompt-sync')();

function contarDivisores() {
    const input = prompt("Digite um número inteiro:");
    const numero = parseInt(input, 10);
    if (isNaN(numero) || numero <= 0) {
        console.log("Por favor, digite um número inteiro positivo.");
        return;
    }
    let count = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            count++;
        }
    }
    console.log(`O número ${numero} possui ${count} divisores.`);
}
contarDivisores();