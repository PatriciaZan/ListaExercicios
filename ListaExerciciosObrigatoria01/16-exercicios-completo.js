// Aqui se encontram todos os exercícios realizados nesta lista de atividades 01
// Recomenda-se APENAS leitura nesse arquivo e não a execução.
// Podem haver leves diferenças em nomes de variáveis ao comparar os arquivos(devido á conflitos de exercícios). 
// Lógica permanece a mesma.

const prompt = require('prompt-sync')();
// ##### 01 ########################################################################
// 1. Escreva um programa que recebe um número inteiro
// e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

console.log('Digite um número para verificar se ele é PAR ou ÍMPAR');
let numero = Number(prompt("NÚMERO: "));

// Checa se o número é valido
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

// ##### 02 ########################################################################
// 2. Crie um programa que classifica a idade de uma pessoa em categorias 
// (criança,adolescente, adulto, idoso) com base no valor fornecido, 
// utilizando uma estrutura de controle if-else.

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

// ##### 03 ########################################################################
//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

// Condição
// Aprovado acima de 7
// Recuperação entre 4 e 6
// Reprovado abaixo de 3

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

// ##### 04 ########################################################################
// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

console.log(`selecione uma das opções`);
console.log(`1 - Tela Inicial`);
console.log(`2 - Catálogo`);
console.log(`3 - Informações`);

let opcao = prompt("Opção: ");

switch(opcao){
    case '1': 
        console.log(`Opção Selecionada ${opcao}`);
        console.log(`Bem Vindo(a) a Tela Inicial!`);
        break
    case '2':
        console.log(`Opção Selecionada ${opcao}`);
        console.log(`Explore nosso Catálogo`);
        break
    case '3':
        console.log(`Opção Selecionada ${opcao}`);
        console.log(`Todas as informações aqui disponíveis`);
        break
    default:
        console.log(`Opção inválida!`);    
}

// ##### 05 ########################################################################
// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

let altura = prompt("Qual a sua altura? (Em Metros) : ");
let peso = prompt('Qual o seu peso? (Em kg): ')
let IMC = ((+peso / ((+altura) * (+altura))) * 10000).toFixed(2);

// console.log(typeof(+altura));
// console.log(typeof(+peso));
// console.log(typeof(+IMC));
// console.log(IMC);

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

// ##### 06 ########################################################################
// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

console.log('Informe três lados de um triângulo:');
let ladoA= Number(prompt('Lado A: '));
let ladoB= Number(prompt('Lado B: '));
let ladoC= Number(prompt('Lado C: '));

console.log(ladoA, ladoB, ladoC);

// Primeiro verifica se são todos numeros válidos e não contém strings
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

// ##### 07 ########################################################################
// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let numeroMacas = Number(prompt('Quantas maçãs irá comprar? : '));

// Checa se são números
if(!Number.isNaN(numeroMacas)){
    // Checa se são inteiros, não tem como comprar 1.5 maças...
    if(numeroMacas % 1 !== 0){
        console.log('Inválido');
    } else{
        numeroMacas < 12 ? 
            console.log(`O Valor total das ${numeroMacas} maçãs é R$ ${(numeroMacas * 0.30).toFixed(2)}`) : 
            console.log(`O Valor total das ${numeroMacas} maçãs é R$$${(numeroMacas* 0.25).toFixed(2)}`);
    }
} else{
    console.log('Numero inválido');
}

// ##### 08 ########################################################################
// 8. Escreva um algoritmo para ler 2 valores 
// (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

let num1 = Number(prompt('Número 1: '));
let num2 = Number(prompt('Número 2: '));

// FORMA 1
let crescente = []
if(!Number.isNaN(num1, num2)){
    num1 < num2 ? crescente = [num1, num2] : crescente = [num2, num1];
    console.log(`Forma 1: ${crescente}`);
}

// FORMA 2
let crescente2 = [num1, num2]
crescente2.sort((a, b) => a - b);
console.log(`Forma 2: ${crescente2}`);

// ##### 09 ########################################################################
// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.
for(let i = 10; i > 0; i--){
    console.log(i);
}

// ##### 10 ########################################################################
//10. Escreva um algoritmo para ler um número inteiro e
//  escrevê-lo na tela 10 vezes.

// PELO PROMPT
const number = prompt('Informe um número inteiro: ')
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

// ##### 11 ########################################################################
// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.
let numero1 = Number(prompt('Digite o 1º número: '));
let numero2 = Number(prompt('Digite o 2º número: '));
let numero3 = Number(prompt('Digite o 3º número: '));
let numero4 = Number(prompt('Digite o 4º número: '));
let numero5 = Number(prompt('Digite o 5º número: '));

let array = [numero1, numero2, numero3, numero4, numero5]
let soma = 0

for(let i = 0; i < array.length; i++){
    soma += array[i]
}
console.log(`A soma é = ${soma}`);

// ##### 12 ########################################################################
// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário 
// (de 1 a 10) utilizando um loop for.

let numeroEscolhido = Number(prompt("Qual tabuada você deseja? : "));

for(let i = 1; i <= 10; i++){
    console.log(`${numeroEscolhido} X ${i} = ${numeroEscolhido * i}`);
}

// ##### 13 ########################################################################
// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 
// e fazer a média aritmética desses números.

console.log(`Informe os números que deseja realizar a média aritmética.`);
console.log(`Informe 0 para finalizar.`);

let cont = 0
let numeroInformado
let media = 0

// Enquanto for diferente de 0 realize:
while( numeroInformado != 0){
    numeroInformado = Number(prompt(`Número: `))
    media += numeroInformado
    cont++
}

let resultado = (media / (cont - 1)).toFixed(2)
console.log(`Sua média aritmética é: ${resultado}`);

// ##### 14 ########################################################################
// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

console.log('Calcule o fatorial de um número.');
let numeroFatorial = Number(prompt('Informe um número: '))

let fatorial = 1
for(let i = 1; i <= numeroFatorial; i++){
    fatorial = fatorial * i
}
console.log(`O fatorial é: ${fatorial}`);

// ##### 15 ########################################################################
// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

function fibonacci(){
    let a = 0, b = 1, temp
    console.log(a);
    console.log(b);

    for(let i = 3; i <= 10; i++){
        temp = a + b
        console.log(temp);
        a = b 
        b= temp
    }
}
fibonacci()
