// 8. Escreva um algoritmo para ler 2 valores 
// (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

let num1 = Number(prompt('Número 1: '));
let num2 = Number(prompt('Número 2: '));

// FORMA 1
let crescente = []
if(!Number.isNaN(num1, num2)){
    num1 < num2 ? crescente = [num1, num2] : crescente = [num2, num1];
    console.log(`Forma 1: ${crescente}`);
}

// FORMA 2
let crescente2 = [num1, num2];
crescente2.sort((a, b) => a - b);
console.log(`Forma 2: ${crescente2}`);




