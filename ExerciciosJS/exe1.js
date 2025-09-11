//Exercício 1: Crie um algoritmo que mostre os 30 primeiros números ímpares e pares.

function mostrarNumerosParesEImpares() {
    const numerosPares = [];
    const numerosImpares = [];

    let numero = 1;
    while (numerosPares.length < 30 || numerosImpares.length <30) {
        if (numero % 2 === 0 && numerosPares.length < 30) {
            numerosPares.push(numero);
        }else if (numero % 2 !== 0 && numerosImpares.length < 30) {
            numerosImpares.push(numero);
        }
        numero++;
    }
    console.log("Números Pares:", numerosPares);
    console.log("Números Ímpares:", numerosImpares);
}
mostrarNumerosParesEImpares();