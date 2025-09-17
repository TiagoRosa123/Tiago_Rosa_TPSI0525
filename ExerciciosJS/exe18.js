//Exercícios 18: Elabore um programa que leia uma entrada e diga quantos números perfeitos existem. 
// Exemplo de numero perfeito em que somando todos os divisores ele da o numero inicial. 6=3+2+1 .

const prompt = require('prompt-sync')();
function contarNumerosPerfeitos() {
    let countPerfeitos = 0;
    let limite = parseInt(prompt("Digite o limite superior para verificar números perfeitos: "));
    for (let num = 1; num <= limite; num++) {
        let somaDivisores = 0;
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                somaDivisores += i;
            }
        }
        if (somaDivisores === num) {
            countPerfeitos++;
            console.log(`Número perfeito encontrado: ${num}`);
        }
    }
    console.log(`Total de números perfeitos entre 1 e ${limite}: ${countPerfeitos}`);
}
contarNumerosPerfeitos();

