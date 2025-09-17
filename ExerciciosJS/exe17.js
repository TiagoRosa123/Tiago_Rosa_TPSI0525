//Exercícios 17: Elabore um programa que determine os múltiplos de 5 mas não múltiplos de 3 …. De 1 a 1000 deve ser a sequência.
const prompt = require('prompt-sync')();
function mostrarMultiplos() {
    console.log("Múltiplos de 5 mas não múltiplos de 3 entre 1 e 1000:");
    for (let i = 1; i <= 1000; i++) {
        if (i % 5 === 0 && i % 3 !== 0) {
            process.stdout.write(i + " ");
        }
    }
    console.log(''); 
}
mostrarMultiplos();