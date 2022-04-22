// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // pedir ao usuário altura e largura com prompt e depois multiplicar esses valores
  let alt = Number(prompt("Diga qual altura"))
  let larg = Number(prompt("Diga qual largura"))
  let area = alt * larg

  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  // pedir ao usuário o ano atual, o ano de nascimento e diminuir um pelo outro
  let anoAtu = Number(prompt("Qual o ano atual?"))
  let anoNasc = Number(prompt("Qual ano que você nasceu?"))
  let idade = anoAtu - anoNasc

console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // calcular o IMC = Peso ÷ (Altura × Altura)

  let imc = peso / (altura * altura)
  return imc

  console.log(imc)


}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // pedir informações do usuário com prompt e formar uma string com as variaveis
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
let nome = prompt("Qual seu nome?")
let idade = Number(prompt("Quantos anos você tem?"))
let email = prompt("Qual seu email?")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
   // perguntar ao usuário três cores
   let cor1 = prompt("Diga a primeira cor favorita")
   let cor2 = prompt("Diga a segunda cor favorita")
   let cor3 = prompt("Diga a terceira cor favorita")
   let cores = [cor1, cor2, cor3]
   console.log(cores);
 }



// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let letraMai = string.toUpperCase()
  return letraMai

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let valorIng = custo / valorIngresso
  return valorIng
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let str1 = string1.length
  let str2 = string2.length
   return str1 === str2 

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  let primeiro = array[0]
  return primeiro 


}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let ultimo = array.pop()
  return ultimo
 
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let ultNum = array.length -1
  let novoArr = array.splice(0, 1, array[ultNum])
  array.splice(ultNum, 1 , novoArr[0])
  return array 
  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let str1 = string1.toLowerCase()
  let str2 = string2.toLowerCase()
   return str1 === str2 

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}