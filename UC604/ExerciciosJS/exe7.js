//Exercício 7: Faça um algoritmo que gere a seguinte série: 10, 20, 30, 40, ..... 980, 990, 1000.
const prompt = require('prompt-sync')();

function gerarSerie() {
    const serie = [];   
    for (let i = 10; i <= 1000; i += 10) {
        serie.push(i);
    }
    console.log("Série Gerada (10, 20, ..., 1000):", serie);
}
gerarSerie();

