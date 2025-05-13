// 2. Crie um programa que classifica a idade de uma pessoa em categorias 
// (criança,adolescente, adulto, idoso) com base no valor fornecido, 
// utilizando uma estrutura de controle if-else.

const prompt = require('prompt-sync')();

console.log(`Digite uma idade`);
let idade = Number(prompt("IDADE: "));

// Criança = idade < 12
// Adolescente = idade >= 14 && idade < 25
// Adulto = idade >= 25 && idade < 70
// Idoso = idade > 70

if(!Number.isNaN(idade)){
    if(idade >= 70){
        console.log(`A pessoa é idosa, sua idade: ${idade}`);
    }else if (idade >= 25 && idade < 70){
        console.log(`A pessoa é adulta, sua idade: ${idade}`);
    }else if(idade >= 14 && idade < 25){
        console.log(`A pessoa é adolescente, sua idade: ${idade}`);
    } else if(idade < 14){
        console.log(`É uma criança, sua idade: ${idade}`);
    }

} else{
    console.log(`A idade ${idade} é inválida!`); 
}