//10. Escreva um algoritmo para ler um número inteiro e
//  escrevê-lo na tela 10 vezes.

// PELO PROMPT
const prompt = require('prompt-sync')();
const number = prompt('Informe um numero inteiro: ')
for(let i = 1; i <= 10; i++){
    console.log(`${i} - ${number}`);
}

// FORMA 2
// Número passado direto na chamada da função.
function repete(num){
    console.log('--- Forma 2 ----');
        for(let i = 1; i <= 10; i++){
        console.log(`${i} - ${num}`);
    }
}
repete(21)