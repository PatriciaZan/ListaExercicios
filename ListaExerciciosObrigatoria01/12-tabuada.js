// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário 
// (de 1 a 10) utilizando um loop for.

const prompt = require('prompt-sync')();

let numeroEscolhido = Number(prompt("Qual tabuada você deseja? : "))

for(let i = 1; i <= 10; i++){
    console.log(`${numeroEscolhido} X ${i} = ${numeroEscolhido * i}`);
}