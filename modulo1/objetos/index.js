// ----------------------Exercícios de interpretação de código----------------------//
//  --------------EXERCÍCIO 01--------------  //


// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, // [0]
// 		{canal: "Canal Brasil", horario: "19h"}, // [1]
// 		{canal: "Globo", horario: "14h"} // [2]
// 	 ]
// }

// console.log(filme.elenco[0])
// // Matheus Nachtergaele
// console.log(filme.elenco[filme.elenco.length - 1])
// // Virginia Cavendish
// console.log(filme.transmissoesHoje[2])
// // {canal: "Globo", horario: "14h"}


//  --------------EXERCÍCIO 02--------------  //

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) O que vai ser impresso no console?
// {nome: "Juca", idade: 3, raca:"SRD"}, aqui ele vai imprimir os atributos do objeto.
// {nome:"Juba", idade: 3, raca:"SRD"}, aqui ele vai imprimir os atributos do objeto, trocando apenas o nome.
// {nome:"Jubo", idade: 3, raca:"SRD"}, aqui ele vai imprimir os atributos do objeto, trocando as letras "a" das strings pela letra "o".

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// A sintaxe SPREAD OPERATOR permite colocar o conteúdo de uma array em qualquer lugar dentro de uma segunda.
// podendo fazer com literais de objetos, colocar o conteúdo de um em qualquer lugar do outro.


//  --------------EXERCÍCIO 03--------------  //

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))


// a) O que vai ser impresso no console?
// false
// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// indefinido, pois não existe atribuição em "altura".



// ----------------------Exercícios de escrita de código----------------------//
//  --------------EXERCÍCIO 01--------------  //
//a).
// const pessoa1 = {
//     nome: "Jeferson",
//     apelidos: ["Jé", "Jeff", "Jefão"],
// }   
// function frase(pessoa1){
// return `Eu sou ${pessoa1.nome}, mas pode me chamar de: ${pessoa1.apelidos}`

// }
// console.log(frase(pessoa1));

// //b)
// const novoApelido = {
//     ...pessoa1,
//      apelidos: ["Eu", "Eu mesmo", "Só eu"]

// }
// console.log(frase(novoApelido))




// //  --------------EXERCÍCIO 02--------------  //


// //a).
// const priObj = {
//     nome: "Jeferson",
//     idade: 30,
//     profissao: "Mecânico"
// }

// const segObj ={
//     nome: "Samantha",
//     idade: 30,
//     profissao: "Professora"
// }

// //b).
// function entregArr(priObj, segObj){
//     let arrReturn = [priObj.nome, priObj.nome.length, priObj.idade, priObj.profissao, priObj.profissao.length,
//         segObj.nome, segObj.nome.length, segObj.idade, segObj.profissao, segObj.profissao.length]
    

//         return arrReturn
// }
//  console.log(entregArr(priObj, segObj));   


// //  --------------EXERCÍCIO 03--------------  //


// //a).
// let carrinho = []


// //b).
// const fruit1={
//     nome: "Laranja",
//     disponibilidade: true
// }
// const fruit2={
//     nome: "Mamão",
//     disponibilidade: false
// }
// const fruit3={
//     nome: "Banana",
//     disponibilidade: true
// }

// //c).
// function fruitChoose(fruta) {
//     carrinho.push(fruta)

// }
// fruitChoose(fruit1)
// fruitChoose(fruit2)
// fruitChoose(fruit3)

// //d).
// console.log(carrinho);

