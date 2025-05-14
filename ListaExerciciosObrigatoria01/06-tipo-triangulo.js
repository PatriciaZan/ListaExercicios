// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')();

console.log('Informe três lados de um triângulo:');
let ladoA= Number(prompt('Lado A: '))
let ladoB= Number(prompt('Lado B: '))
let ladoC= Number(prompt('Lado C: '))

console.log(ladoA, ladoB, ladoC);

// Primeiro verifica se são todos numeros validos e não contém string
if(Number.isNaN(ladoA + ladoB + ladoC)){
    console.log('Algum valor inválido!');

  // Verifica se é um triangulo válido
} else if(ladoA + ladoB > ladoC || ladoB + ladoC > ladoA || ladoA + ladoC > ladoB){
    //console.log('Triangulo');
    if(ladoA == ladoB && ladoB == ladoC){
        console.log(`Todos os lados são iguais => EQUILÁTERO`);
    } else if(ladoA == ladoB || ladoB == ladoC){
        console.log(`Dois lados são iguais => ISÓSCELES`);
    } else{
        console.log(`Nenhum lado é igual => ESCALENO`);
    }
} 
    



