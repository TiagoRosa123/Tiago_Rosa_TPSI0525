let nome = 'Tiago'; // String literal
let num = 1233; // Number literal
let flag = true; // Boolean literal
let variavel; // Undefined
let typenull = null; // Null
let lista = [];
let bool = true
let array = [100];


console.log(typeof(lista));

//cast varavel types string to boolean
nome=''
bool = Boolean(nome)
console.log((bool))

nome='Tiago'
bool = Boolean(nome)
console.log((bool))

//NaN - Not a Number

num = 'abc'
num = Number(num)
console.log(num)
console.log(typeof(num))


//Array
array[0] = 'Tiago';
array.push(lista[0]);
array[2]=23;
console.log(array);

//cast string para number (int, float)
num = parseInt(nome);
console.log('parse int', num);


num = parseFloat(4, 5);
console.log('parse float', num);
console.log(typeof(num));


//Nan = isNaN  