//Exercícios 16: Elabore um programa que constitua a média de 30 números pares que sejam introduzidos. Validando a entrada de números inteiros entre 1 e 50.
const prompt = require('prompt-sync')();
function calcularMediaPares() {
    let soma = 0;
    let count = 0;
    while (count < 30) {
        let numero = parseInt(prompt(`Digite o ${count + 1}º número par (entre 1 e 50): `));
        if (numero >= 1 && numero <= 50 && numero % 2 === 0) {
            soma += numero;
            count++;
        } else {
            console.log("Número inválido. Por favor, insira um número par entre 1 e 50.");
        }
    }
    let media = soma / 30;
    console.log(`A média dos 30 números pares é: ${media}`);
}
calcularMediaPares();