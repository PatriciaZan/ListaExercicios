// 1. Escreva um programa que recebe um número inteiro 
// e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
const prompt = require('prompt-sync')();

console.log('Digite um numero para verificar se ele é PAR ou ÍMPAR');
let numero = Number(prompt("NÚMERO: "));

// Checa se o numero é valido
if(!Number.isNaN(numero)){
    // Se sim, checa se PAR ou IMPAR
    if(numero % 2 === 0){
        console.log(`O número ${numero} é PAR`);
    }else{
        console.log(`O número ${numero} é ÍMPAR`);
    }
// Se não retorna o 'erro'
} else{
    console.log(`O número ${numero} é inválido!`); 
}
