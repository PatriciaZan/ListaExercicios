// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

console.log(`selecione uma das opções`);
console.log(`1 - Tela Inicial`);
console.log(`2 - Catálogo`);
console.log(`3 - Informações`);

let opcao = prompt("Opção: ");

switch(opcao){
    case '1': 
        console.log(`Opção Selecionada ${opcao}`);
        console.log(`Bem Vindo a Tela Inicial!`);
        break
    case '2':
        console.log(`Opção Selecionada ${opcao}`);
        console.log(`Explore nosso Catálogo`);
        break
    case '3':
        console.log(`Opção Selecionada ${opcao}`);
        console.log(`Todas informações aqui disponíveis`);
        break
    default:
        console.log(`Opção inválida!`);
        
        
}




