// funtamentos
// var nome = "valor"
var minhaVariavel = "Ola, mundo!";

console.log(minhaVariavel)

// variaveis e tipos de dados
var meuNumero = 10;

console.log(meuNumero);

console.log(meuNumero + 5);

console.log("10" + 5);

console.log(typeof meuNumero);

var booleano = true; // false

console.log(typeof booleano);

var meuObjeto = {};
var meuArray = [];
var meuNull = null;
var meuUndefined = undefined  

console.log(typeof meuObjeto)

// let e const
// novas formas de declarar variaveis
let x = 10;
const y = 5;

console.log(typeof x);

console.log(x,y);

// Operadores arimeticos 
console,log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// Operadores de comparacao 
console.log(x == y);
console.log(x != y);

console.log("5" === 5);
console.log("5" == 5);
console.log("5" !== 5);

//Operadores logicos
//AND &&
//OR ||
console.log(10 > 5 && 20 > 5);
console.log(10 > 5 && 20 < 5);
console.log(10 < 5 && 20 < 5);

console.log(10 > 5 || 20 > 5);
console.log(10 > 5 || 20 < 5);
console.log(10 < 5 || 20 < 5);

//conversao de tipos 
const meuNumero2 = "123"

const meuNumeroConvertido = Number(meuNumero2);

console.log(meuNumeroConvertido);
console.log(typeof meuNumeroConvertido);

//estrutura de condicao - if else, else if 

const idade = 10

if(idade < 13) {
    console.log("Crianca");
} else if(idade < 20) {
    console.log("Adolescente")
}else {
    console.log("adulto");
}

if (true) {
    console.log("isso executa");
} else {
    console.log("isso agora e executado!")
}

// Switch
const fruta = "banana"

switch(fruta) {
    case "banana":
        console.log("banana e a fruta!");
        break;
case "maca":
    console.log("maca e a fruta!");
    break;
    default:
        console.log("fruta nao encontrada!");
}

// Estruturas de repeticao
// 1, 2, 3, 4, 5, 6... => dependendo de uma condicao

// contador, condicao de limide, incremento 
for(let i = 0; i < 5; i ++) {
    // concatenacao
    console.log("O valor de i e:" + i);
}

// while
let i = 0;

while(k < 5) {
    console.log("O valor de k: " + K);
    i++;
}

// do while
let j = 0;

do {

    console.log("O valor de j e:" + j);

    j++;
} while(j < 5);

// funcoes
// function nome(arg1, arg2) { corpo }
function cumorimentar(nome) { 
    console.log("Ola!" + nome);
}

// invocacao = nome()
cumorimentar("kaique");

// escopo de variaveis
let cor = "azul";

function mostrarcor() {
    let cor = "verde";

    console.log(cor);
}

console.log(cor);

mostrarCor();

// hoisting = icamanto
testeHoisting();
function testeHoisting() {
    console.log("Deu certo!");
}

// arrow function
const testeArrow = () => console.log("isso tambem e uma funcao.");

testeArrow();

// truthy e falsy
const minhaVariavel1 = "" // falsy
const minhaVariavel2 = "Algum texto"

if(minhaVariavel1) {
    console.log("E verdadeiro!");
} else {
    console.log("E falsa!");
}

if(minhaVariavel2) {
    console.log("E verdadeiro! 2");
} else {
    console.log("E falsa! 2");
}

// array, listas 
const numeros = [1, 2, 3, 4, 5]
console.log(numeros);

console.log(numeros[0])

console.log(numeros[2])

numeros.push(6);

console.log(numeros);

// prototype => OBJETO -> objeto2
// Array => nossos arrays
numeros.pop();

console.log(numeros);

// strings
const minhaVariavel = "ola, mundo!";

// concatenacao = +
const minhaString = minhaStringNova + "como voce esta?";

console.log(minhaString3);

// interpolacao
const minhaString4 = `${minhaStringNova}como voce esta?`;
console.log(minhaString4);

console.log(minhaaString4.length); // qtd de caracteres
console.log(minhaString4[5]);
console.log(minhaaString4.toUpperCase())

// data e hora
const agora = Date();
console.log(agora);

const natal = new Date(2023, 11, 25);
console.log(natal);

// Math
console.log(Math.PI);

console.log(Math.round(3.6));

console.log(Math.sqrt(16));

console.log(Math.pow(2, 3));