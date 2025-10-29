//Exercício 12: Elabore um programa que leia quantos números quer que se efetue a soma, subtrações,
//  divisões, multiplicações e no fim por meio de um acumulador diga
//quantas operações foram efetuadas. Exemplo introduzindo o número 60 o programa deve apresentar 60 a somar, 
// dividir multiplicar e subtrair por todos os números menores que ele.

const prompt = require('prompt-sync')();

function calcularOperacoes() { 
    const input = prompt("Digite um número inteiro positivo:");
    const numero = parseInt(input, 10); 
    if (isNaN(numero) || numero <= 0) {
        console.log("Por favor, digite um número inteiro positivo.");
        return;
    }   
    let soma = 0;
    let subtracao = numero;
    let multiplicacao = 1;
    let divisao = numero;
    let operacoesCount = 0;
    for (let i = 1; i < numero; i++) {
        soma += i;
        subtracao -= i;
        multiplicacao *= i; 
        if (i !== 0) {
            divisao /= i;
        }
        operacoesCount += 4; 
    }
    console.log(`Resultados das operações com números menores que ${numero}:`);
    console.log(`Soma: ${soma}`);
    console.log(`Subtração: ${subtracao}`);
    console.log(`Multiplicação: ${multiplicacao}`);
    console.log(`Divisão: ${divisao}`);
    console.log(`Total de operações efetuadas: ${operacoesCount}`);
}
calcularOperacoes();