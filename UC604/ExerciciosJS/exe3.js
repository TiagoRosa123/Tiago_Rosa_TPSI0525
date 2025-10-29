//Exercício 3: Ler a nota de 10 alunos, calcular a media e mostrar essa média.
const prompt = require('prompt-sync')();

function calcularMedia() { 
    const notas = [];
    let soma = 0;
    let count = 0;
    const totalAlunos = 10;

    while (count < totalAlunos) {
        const input = prompt(`Digite a nota do ${count + 1}º aluno:`);
        const nota = parseFloat(input);
        if (!isNaN(nota) && nota >= 0 && nota <= 20) {
            notas.push(nota);
            soma += nota;
            count++;
        } else {
            console.log("Entrada inválida. Por favor, digite uma nota entre 0 e 20.");
        }
    }

    const media = soma / totalAlunos;
    console.log("Notas dos Alunos:", notas);
    console.log(notas.join(", "));
    console.log("Média das Notas:", media.toFixed(2));
}
calcularMedia();
