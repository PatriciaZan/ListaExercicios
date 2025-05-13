// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')();

let num1 = Number(prompt('Digite o 1º numero: '))
let num2 = Number(prompt('Digite o 2º numero: '))
let num3 = Number(prompt('Digite o 3º numero: '))
let num4 = Number(prompt('Digite o 4º numero: '))
let num5 = Number(prompt('Digite o 5º numero: '))

let array = [num1, num2, num3, num4, num5]
let soma = 0

for(let i = 0; i < array.length; i++){
    soma += array[i]
}

console.log(`A soma é = ${soma}`);
