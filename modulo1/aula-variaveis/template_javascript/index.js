
//-------Exercícios de interpretação de código----------//
    //------------- EXERCÍCIO 01-------------//

let a = 10
let b = 10

console.log(b)
// 10

b = 5
console.log(a, b)
// 10, 5
    //------------- EXERCÍCIO 02-------------//
let a = 10
let b = 20

c = a
b = c
a = b

console.log(a, b, c)
// 10 10 10   C pega valor  de A que é 10, B pega valor de C que pegou valor de A que é 10, A pegou valor de B que pegou o valor de C que pegou o valor de A que é 10

    //------------- EXERCÍCIO 03-------------//

let horasTrabalhadasDia = prompt("Quantas horas você trabalha por dia?")
let salarioPorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${horasTrabalhadasDia/salarioPorDia} por hora`)

//-------Exercícios de escrita de código----------//
    //------------- EXERCÍCIO 01-------------//

let nome 
let idade 
console.log(typeof nome, typeof idade)
// vai ser impresso indefinido para as duas variáveis devido a não ter definido um valor para cada uma 

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")

console.log(typeof nome, typeof idade)

// notei que agora apareceu string e string, devido aos valores terem sido defenidos no momento em que foi escrito algo na caixa de diálogo

console.log(`Olá, ${nome} você tem ${idade} anos.`)

    //------------- EXERCÍCIO 02-------------//

    let frio = prompt("Você gosta de frio?")
    console.log("Você gosta de frio?", frio)
    let chuva = prompt("Você gosta de chuva?")
    console.log("Você gosta de chuva?", chuva)
    let sol = prompt("Você gosta de sol?")
    console.log("Você gosta de sol?", sol)


//------------- EXERCÍCIO 03-------------//

    let a = 10
    let b = 25
    console.log(a, b)
    c = a
    a = b
    b = c 
    
    console.log(a, b)
// C recebe o valor de 10 do A, A recebe o valor de B que é 25, B recebe o valor de C que recebeu valor do A que é 10,
// final das contas A ficou com o valor de 25 do B e B ficou com o valoro de 10 do A

//----------------------DESAFIO----------------------//

x = prompt("Digite um número")
y = prompt("Digite outro número")
alert(`O resultado da soma dos números é ${x + y}`)
alert(`O resultado da multiplicação dos números é ${x * y}`)

