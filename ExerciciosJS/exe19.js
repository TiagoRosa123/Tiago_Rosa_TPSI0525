//Exercícios 19:Escreva um programa que mostre os primeiros 60 números da serie bonatchi. 1, 1, 2, 3, 5, 8, 13, 21.
//Como se constrói.1+1=2 1+2=3 2+3=5
const prompt = require('prompt-sync')();
function mostrarSerieFibonacci() {
    let n1 = 1, n2 = 1, proximo;
    console.log("Primeiros 60 números da série Fibonacci:");
    process.stdout.write(n1 + " " + n2 + " ");
    for (let i = 3; i <= 60; i++) {
        proximo = n1 + n2;
        process.stdout.write(proximo + " ");
        n1 = n2;
        n2 = proximo;
    }
    console.log('');
}
mostrarSerieFibonacci();
