//Exercício 5: Elabore um programa que escreve os primeiros 10.000 números inteiros no ecrã.
function mostrarDezMilNumeros() {
    const numeros = [];
    for (let i = 1; i <= 10000; i++) {
        numeros.push(i);
    }
    console.log("Primeiros 10.000 Números Inteiros:", numeros);
    console.log(numeros.join(", "));
}
mostrarDezMilNumeros();