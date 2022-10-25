//EXERCÍCIO 1

//a) Como fazemos para acessar os parâmetros passados na linha de comando para o Node?
//       R: Utilizando o comando "process.argv[ Indice ]"

//b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
//          "Olá, (Nome)! Você tem (sua idade) anos."

const user = process.argv[2]
const age = Number(process.argv[3])
const newAge = age +7

console.log(`Olá, ${user}! Você tem ${age} anos.`);


// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

console.log(`Olá, ${user}! Você tem ${age} anos. Em sete anos você terá ${newAge}`);