//Exercícios 15: Elabore um programa que escreva no ecrã todas as linhas de código ASCII(0 a 255) e o código correspondente. Dispor de 20 em 20 com a condição de continuação ou saída do programa.
const prompt = require('prompt-sync')();

function mostrarCodigoASCII() {
    for (let i = 0; i <= 255; i++) {
        const char = String.fromCharCode(i);
        process.stdout.write(`${i}: ${char}  `);
        if ((i + 1) % 20 === 0) {
            console.log(''); 
            const continuar = prompt("Pressione Enter para continuar ou 's' para sair: ");
            if (continuar.toLowerCase() === 's') {
                break;
            }
        }
    }
    console.log('');
}
mostrarCodigoASCII();