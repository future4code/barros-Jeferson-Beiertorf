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
  // Escreva uma função que pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa,
  //  e o ano em que sua carteira de identidade foi emitida (nessa ordem).
  //  A função deve imprimir no console um booleano (true ou false) que indica se a carteira precisa ser renovada ou não.
  //  A carteira precisa ser renovada segundo os seguintes critérios:
// - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos
  let anoAtual = Number(prompt("Qual ano atual?"))
  let anoNasc = Number(prompt("Que ano você nasceu?"))
  let anoId = Number(prompt("Em qual ano sua carteira de identidade foi emitida?"))

  let idade = anoAtual - anoNasc
  let novaId = anoAtual - anoId
  let validacao = false
  
  if (idade <= 20 && novaId >= 5){
    validacao = true
  }
  if (idade > 20 && idade <= 50 && novaId >= 10){
      validacao = true
  }
  if (idade > 50 && novaId >= 15){
      validacao = true
  }
  console.log(validacao)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui 

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui]
}