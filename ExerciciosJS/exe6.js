//Exercício 6: Crie um algoritmo que mostre os 10 primeiros números primos.
const prompt = require('prompt-sync')();

function isPrimo(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

let count = 0;
let num = 2;
let primos = [];

while (count < 10) {
  if (isPrimo(num)) {
    primos.push(num);
    count++;
  }
  num++;
}

console.log("Os 10 primeiros números primos são:");
console.log(primos.join(", "));

