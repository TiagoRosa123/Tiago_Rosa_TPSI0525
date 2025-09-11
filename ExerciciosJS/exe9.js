//Exercício 9: Escreva um programa que solicite um número ao utilizador até que o valor 
// deste esteja entre os valores 1 e 100.(Use o ciclo do ... while)

const prompt = require('prompt-sync')();

function solicitarNumero() {    
    let numero;
    do {
        const input = prompt("Digite um número entre 1 e 100:");
        numero = parseInt(input, 10);
        if (isNaN(numero) || numero < 1 || numero > 100) {
            console.log("Número inválido. Por favor, tente novamente.");
        }
    } while (isNaN(numero) || numero < 1 || numero > 100);
    console.log(`Número válido digitado: ${numero}`);
}
solicitarNumero();