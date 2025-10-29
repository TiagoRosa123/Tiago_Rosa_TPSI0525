// Exercício 4: Crie um algoritmo que leia um número inteiro, e diga se ele é um número primo ou não
const prompt = require('prompt-sync')();

function verificarNumeroPrimo() {
    const input = prompt("Digite um número inteiro:");
    const numero = parseInt(input, 10);
    if (isNaN(numero) || numero < 2) {
        console.log("Por favor, digite um número inteiro maior ou igual a 2.");
        return;
    }
    let Primo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            Primo = false;
            break;
        }
    }
    if (Primo) {
        console.log(`${numero} é um número primo.`);
    } else {
        console.log(`${numero} não é um número primo.`);
    }
}
verificarNumeroPrimo();







