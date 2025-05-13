// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.


const prompt = require('prompt-sync')();
let altura = prompt("Qual a sua altura? (Em Metros) : ");
let peso = prompt('Qual o seu peso? (Em kg): ')

let IMC = ((+peso / ((+altura) * (+altura))) * 10000).toFixed(2);

// console.log(typeof(+altura));
// console.log(typeof(+peso));
// console.log(typeof(+IMC));
//console.log(IMC);

if(IMC <= 18.5){
    console.log(`Seu IMC é ${IMC}`);
    console.log(`Abaixo do Normal`);
} else if(IMC >= 18.6 && IMC <= 24.9){
    console.log(`Seu IMC é ${IMC}`);
    console.log(`Normal`);
} else if(IMC >= 25 && IMC <=29.9){
    console.log(`Seu IMC é ${IMC}`);
    console.log(`Sobrepeso`);
} else if(IMC >= 30 && IMC <= 34.9){
    console.log(`Seu IMC é ${IMC}`);
    console.log(`Obesidade grau I`);
} else if(IMC >= 35 && IMC <= 39.9){
    console.log(`Seu IMC é ${IMC}`);
    console.log(`Obesidade grau II`);
} else{
    console.log(`Seu IMC é ${IMC}`);
    console.log(`Obesidade grau III`);
}





// Referência dos valores IMC se encontram em:
// -> https://abeso.org.br/obesidade-e-sindrome-metabolica/calculadora-imc/