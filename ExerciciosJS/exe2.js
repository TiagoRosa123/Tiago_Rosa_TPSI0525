//Exercício 2: Ler 10 números, e determinar se o número par e número impar.
const prompt = require('prompt-sync')();

function verificarParImpar() {
    const numeros = [];
    const numerosPares = [];
    const numerosImpares = [];
    let count = 0;

    while (count < 10) {
        const input = prompt(`Digite o ${count + 1}º número:`);
        const numero = parseInt(input, 10);
        if (!isNaN(numero)) {
            numeros.push(numero);
            if (numero % 2 === 0) {
                numerosPares.push(numero);
            } else {
                numerosImpares.push(numero);
            }
            count++;
        } else {
            console.log("Entrada inválida. Por favor, digite um número válido.");
        }
    }

    console.log("Números Digitados:", numeros);
    console.log("Números Pares:", numerosPares);
    console.log("Números Ímpares:", numerosImpares);
}
verificarParImpar();
