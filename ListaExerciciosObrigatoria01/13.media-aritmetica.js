// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 
// e fazer a média aritmética desses números.

const prompt = require('prompt-sync')();

console.log(`Informe os nuemros que deseja realizar a média aritmética.`);
console.log(`Informe 0 para finalizar.`);

let cont = 0
let numero
let media = 0

// Enquanto for diferente de 0 realize:
while( numero != 0){
    numero = Number(prompt(`Numero: `))
    media += numero
    cont++
}

let resultado = (media / (cont - 1)).toFixed(2)
console.log(`Sua média aritmética é: ${resultado}`);





