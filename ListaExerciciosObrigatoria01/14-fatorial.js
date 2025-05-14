// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')();

console.log('Calcule o fatorial de um número.');
let numero = Number(prompt('Informe um número: '));

let fatorial = 1
for(let i = 1; i <= numero; i++){
    fatorial = fatorial * i;
}

console.log(`O fatorial é: ${fatorial}`);

