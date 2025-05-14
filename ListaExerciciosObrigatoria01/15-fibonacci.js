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