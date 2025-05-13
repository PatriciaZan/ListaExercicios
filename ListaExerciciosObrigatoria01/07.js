// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

let numeroMacas = Number(prompt('Quantas maçãs irá comprar? : '))

// Checa se são numeros
if(!Number.isNaN(numeroMacas) ){
    // checa se são inteiros, não tem como comprar 1.5 maças
    if(numeroMacas % 1 !== 0){
        console.log('Inválido');

    } else{
        numeroMacas < 12 ? console.log(`O Valor total das ${numeroMacas} maçãs é R$ ${(numeroMacas * 0.30).toFixed(2)}`) : 
                           console.log(`O Valor total das ${numeroMacas} maçãs é R$$${(numeroMacas* 0.25).toFixed(2)}`)
    }

} else{
    console.log('Numero inválido');
}



// CODIGO ANTIGO 
// if(!Number.isNaN(numeroMacas)){
//     if(numeroMacas < 12){
//         //console.log((numeroMacas.toFixed(0)));
//         let valorFinal = ((numeroMacas.toFixed(0)) * 0.30).toFixed(2);
//         console.log(valorFinal);
//     } else{
//         let valorFinal = ((numeroMacas.toFixed(0)) * 0.25).toFixed(2)
//         console.log(valorFinal); 
//     }
// } else{
//     console.log('Numero inválido');
    
// }