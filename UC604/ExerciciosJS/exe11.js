/*Exercício 11: Elabore um ciclo for para produzir o seguinte output.
1
22
333
4444
55555*/

for (let i = 1; i <= 5; i++) {
    let linha = '';
    for (let j = 1; j <= i; j++) {
        linha += i;
    }
    console.log(linha);
}
