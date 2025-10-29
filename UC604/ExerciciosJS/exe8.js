//Exercício 8: Faça um algoritmo que gere a seguinte série: 10, 20, 30, 40, ..... 980, 990, 1000.
// e outro a fazer 15,25, 35, 985, 995.(dois ciclos)
const prompt = require('prompt-sync')();

function gerarSerieDez() { 
    const serieDez = [];   
    for (let i = 10; i <= 1000; i += 10) {
        serieDez.push(i);
    }
    console.log("Série Gerada (10, 20, ..., 1000):", serieDez);
}
function gerarSerieQuinze() {
    const serieQuinze = [];
    for (let i = 15; i <= 995; i += 10) {
        serieQuinze.push(i);
    }   
    console.log("Série Gerada (15, 25, ..., 995):", serieQuinze);
}
gerarSerieDez();
gerarSerieQuinze();