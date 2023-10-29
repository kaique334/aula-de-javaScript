// Exercicios de fundamentos
// Exercicio 1: ola, mundo!
// cria um script que imprima "Ola Mundo!" no console

console.log("Ola Mundo!");

const minhaVariavel = "ola mundo!";

// Exercicio 2: Conversao de tipos 
// Dado o valor de uma string "1234", converta-o em um numero e o exiba o tipo da variavel no console.

const valorString = "1234"
const valorNumber = Number(valorString);

console.log(typeof valorNumber);

// exercicio 3: Manipulacao de strings "javaScript e incrivel", escreva um codigo que conte quantos caracteres a string tem e quantas palavras existem na frase
const minhaString = "javaScript e incrivel"
const numeroDeCaracteres = minhaString.length
const numeroDepalavras = minhaString.split(" ").length

console.log(`O numero de carecteres e: ${numeroDeCaracteres}`);
console.log(`O numero de palavras e: ${numeroDepalavras}`);

// Exercicio 4: loops e Arrays 
// Crie um array com cinco nomes. Use um loop for para imprimir cada nome no console.
const nomes = ["Ana", "joao", "Carlos", "Maria", "kaique"];

for(let i = 0; i < nomes.length; i++) {
console.log(nomes[i]);

}

// Exercicios 5 funcaes, strings e Math...