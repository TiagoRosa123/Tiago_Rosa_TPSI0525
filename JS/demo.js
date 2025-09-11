// npm install prompt -sync´

const prompt = require('prompt-sync')();

let nomeAdivinha = 'Tiago';

function adivinhaNome(nome){
   let nomeAdivinhado =prompt('introd nome a adivinhar: ');
    if(nomeAdivinha===nomeAdivinhado){
        console.log('Acertou o nome');
    }
    else{
        console.log('Errou o nome');
    }
}
adivinhaNome(nomeAdivinha);
