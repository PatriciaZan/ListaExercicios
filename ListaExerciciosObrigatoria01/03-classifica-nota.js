//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

// Condição
// Aprovado acima de 7
// Recuperação entre 4 e 6
// Reprovado abaixo de 3

const prompt = require('prompt-sync')();


console.log(`Digite uma nota`);
let nota = Number(prompt("NOTA: "));

if(!Number.isNaN(nota)){
    if(nota >= 7 ) {
        console.log(`Aluno aprovado com nota: ${nota}`);
    } else if( nota < 7 && nota >= 4) {
        console.log(`Aluno em recuperação com nota: ${nota}`);
    } else{
        console.log(`Aluno reprovado com nota: ${nota}`);
    }
} else{
    console.log(`Nota ${nota} inválida`);
    
}
