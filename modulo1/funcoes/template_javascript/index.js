// ---------------------Exercícios de interpretação de código---------------//
// ================ECERCÍCIO 01======================//


//a). function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) O que vai ser impresso no console?
// 10
// 50
// -----------------------------------------------------------------------------
// b). O que aconteceria se retirasse os dois `console.log`
//  e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? 
//  O que apareceria no console?
//  ele iria executar  função normal, porém não iria imprimir no console

// ================ECERCÍCIO 02======================//
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a). Explique o que essa função faz e qual é sua utilidade
//     vai pedir um texto pro usuário, se tiver a palavra "cenoura" no texto,
//     a funçãoo vai colocar todas as letras da palavra em minúsculo ajudando o includes a procurar pela palavra no texto
//     retornando TRUE se a palavra existir no texto ou FALSE se não haver a palavra no texto

//-------------------------------------------------------------

// b). Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura`    TRUE
//      ii.  `CENOURA é bom pra vista`  TRUE
//      iii. `Cenouras crescem na terra`  TRUE

// ---------------------Exercícios de escrita de código------------------//
// ================ECERCÍCIO 01======================//

// a). A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 


// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."


// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você.
//  Lembrando que a função não possui entradas, apenas imprime essa mensagem.

//  function sobreEu(){
//     let minhaVida = "Me chamo Jeferson, tenho 30 anos, moro em Alvorada/RS e sou estudante da Labenu"
//     return minhaVida
//  }
// console.log(sobreEu())

//------------------------------------------------------------------

// b).  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
//  o nome (string), a idade (number), a cidade (string) e uma profissão (string).
//  Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
//  Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

// function dadosPessoa(nome, idade, endereço, profissão) {    
//     let dadosPessoais = `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissão}.`
//    return dadosPessoais
// }
// console.log(dadosPessoa("Jeferson", 30, "Rio Grande do Sul", "Mecânico Automotivo"))

// ================ECERCÍCIO 02======================//

//a). a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. 
//Invoque a função e imprima no console o resultado.

// function doisNum(num1, num2){
//     let somaNum = num1 + num2
//     return somaNum
// }
//     console.log(doisNum(16, 10))
//--------------------------------------------------------
//b). Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

// function numMaior(num1, num2){
//    let numeroMaior = num1 >= num2
//     return numeroMaior
// }
// console.log(numMaior(6, 5))

//---------------------------------------------------
// c). Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// function numPar(num1){
//     return num1 % 2 === 0
// }
// console.log(numPar(7));
// console.log(numPar(8));
//---------------------------------------------------
//d). Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, 
//      juntamente com uma versão dela em letras maiúsculas.

// let msgUsuario = "Olá, meu nome é Jeferson e sou estudante da Labenu."
// function frase(texto){
//     let textoTam = texto.length
//     let textoMaior = texto.toUpperCase()
   

//     return textoMaior + " "+ textoTam + " caracteres"

// }

// console.log(frase(msgUsuario))
 


// ================ECERCÍCIO 03======================//

//Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
//  Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento.
//  Por fim, mostre no console o resultado das operações:

// let num1 = Number(prompt("Digite um número"))
// let num2 = Number(prompt("Digito outro número"))

// function somaNum(numero1, numero2){
//     let somaDosNum = numero1 + numero2
//     return somaDosNum
// }
// console.log(somaNum(num1, num2))

// function subNum(numero1, numero2){
//     let subDosNum = numero1 - numero2
//     return subDosNum
// }
// console.log(subNum(num1, num2))

// function multNum(numero1, numero2){
//     let multDosNum = numero1 * numero2
//     return multDosNum
// }
// console.log(multNum(num1, num2))

// function divNum(numero1, numero2){
//     let divDosNum = numero1 / numero2
//     return divDosNum
// }
// console.log(divNum(num1, num2))


// ---------------------====DESAFIOS====------------------//

// a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
// const escola = () => 'Labenu'
// console.log(escola())
 //---------------------------------------------------------

// b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** 
// Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo

// const soma = (num1, num2) => num1 + num2
// console.log(soma(20, 13))

// ================DESAFIO 02======================//
//Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa.
// Retorne este valor, invoque a função e imprima o resultado no console. 

// const pitagoras = (cateto1, cateto2) => {
//     let hipotenusa = (cateto1 * cateto1) + (cateto2 * cateto2)
//     hipotenusa = Math.sqrt(hipotenusa)
//     return  hipotenusa
// }
// console.log(pitagoras(9, 12));