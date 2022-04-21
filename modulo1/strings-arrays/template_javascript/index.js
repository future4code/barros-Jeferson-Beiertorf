//----------------------------Exercícios de interpretação de código-------------------------------//
//--------------------EXERCÍCIO 01-------------------------//

// let array
// console.log('a. ', array)
// // a. indefinido, pois não foi atribuido valor a variável

// array = null
// console.log('b. ', array)
// // b. nulo 
// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// // c. 11, contém 11 elementos na lista
// let i = 0
// console.log('d. ', array[i])
// // d. 3, pois foi atribuito o elemento 0 da array, que no caso é o 3
// array[i+1] = 19
// console.log('e. ', array)
// // e. aqui ele vai substituir o valor do elemento seguinte ao 3 (i+1), fazendo então com que o 4 se torne a ser 19 agora
// // ficando então a lista como [3,19,5,6,7,8,9,10,11,12,13] Com 11 elementos
// const valor = array[i+6]
// console.log('f. ', valor)]
// // f. 9, pois o i tem o valor de 3, somado ao 6, fica 9

//--------------------EXERCÍCIO 02-------------------------//

//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// //"Subi num ônibus em Marrocos"
// // "SUBI NUM ÔNIBUS EM MIRROCOS"  (27)



//----------------------------Exercícios de escrita de código-------------------------------//
//--------------------EXERCÍCIO 01-------------------------//

// let nome
// let email
// nome = prompt("Qual seu nome?")
// email = prompt("Qual seu email?")
// console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`);

//--------------------EXERCÍCIO 02-------------------------//

// let listacomida
// listacomida = ["Pizza", "Churrasco", "Lasanha", "Panqueca", "Strogonof"]
// console.log(listacomida);

// console.log(`Essas são as minhas comidas preferidas:
// ${listacomida[0]}
// ${listacomida[1]}
// ${listacomida[2]}
// ${listacomida[3]}
// ${listacomida[4]}`)

// segcomi = listacomida[1]
// comidapreferida =prompt("Qual sua comida preferida?")
// listacomida[1] = comidapreferida
// console.log(listacomida);

//--------------------EXERCÍCIO 03-------------------------//

// let listaDeTarefas = []

//  let tarefa1 = prompt("Diga a primeira tarefa")
//  let tarefa2 = prompt("Diga a segunda tarefa")
//  let tarefa3 = prompt("Diga a terceira tarefa")
//   listaDeTarefas = [tarefa1, tarefa2, tarefa3]
//   console.log(listaDeTarefas);

//  indi = Number(prompt("Qual tarefa você já fez?"))
//  listaDeTarefas.splice(indi, 1)
//  console.log(listaDeTarefas);

//--------------------DESAFIO 01-------------------------//
// let frase = prompt("Digite uma frase")
// let fraseDig = frase.split(" ")
// console.log(fraseDig);

//--------------------DESAFIO 02-------------------------//

// let lista = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
// let pos = lista.indexOf("Abacaxi")
// console.log(pos, lista.length);
