// Exercício 2
// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. 
//    O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

// Exemplos
// npm run start add 2 2
// // "Resposta: 4"
// npm run start sub 10 2
// // "Resposta: 8"
// npm run start mult 50 2
// // "Resposta: 100"
// npm run start div 100 2
// // "Resposta: 50"

let n1 = Number(process.argv[2])
let n2 = Number(process.argv[3])


const sum = n1 + n2 
    console.log(`O resultado da soma é: ${sum}`);

const sub = n1 - n2
    console.log(`O resultado da subtração é: ${sub}`);

const mult = n1 * n2
    console.log(`O resultado da multiplicação é: ${mult}`);

const div = n1 / n2
    console.log(`O resultado da divisão é: ${div}`);