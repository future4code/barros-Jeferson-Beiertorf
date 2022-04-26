
// ------------Exercícios de interpretação de código------------//
//-------------------     EXERCÍCIO 01      -------------------//

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)
// // ---------FALSE, devido ao bool2 ser false
// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 
// // ---------False, devido ao bool2 ser false
// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)
// // ---------TRUE, último resultado impresso ficou TRUE, então ficaria TRUE && (TRUE pq um deles é TRUE e o outro é FALSE). Então ficou TRUE && TRUE.
// console.log("d. ", typeof resultado)
// // --------- BOOLEAN

//-------------------     EXERCÍCIO 02      -------------------//

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)
// // ------ está concatenando os dois valores, necessitando colocar em números inteiros

//-------------------     EXERCÍCIO 03      -------------------//
// para resolução deste código, o certo seria colocar o "Number" antes do prompt:

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)



// ------------Exercícios de escrita de código------------//
   //-------------------EXERCÍCIO 01-------------------//

// let idadeUsuario = Number(prompt("Qual sua idade?"))
// let idadeAmigo = Number(prompt("Qual idade do seu melhor amigo?"))

// let idadeMaior = idadeUsuario >  idadeAmigo

//  console.log(idadeMaior)
//  console.log(idadeUsuario - idadeAmigo)


//-------------------EXERCÍCIO 02-------------------//

// let numeroPar = prompt("Digite um número par")
// console.log(numeroPar % 2)
// se o usuário colocar apenas número par, a resposta será sempre 0, se o usuário colocar números ímpares, o resultado será sempre 1.


 //-------------------EXERCÍCIO 03-------------------//


//  let idade = prompt("Qual sua idade?")
//  let idadeMeses = 12 * idade
//  let idadeDias = 365 * idade
//  let idadeHoras = 24 * 365 * idade
//  console.log(idadeMeses)
//  console.log(idadeDias)
//  console.log(idadeHoras)


 //-------------------EXERCÍCIO 04-------------------//


//  let numero1 = prompt("Digite um número")
//  let numero2 = prompt("Digite outro número")

// console.log(`O primeiro numero é maior que segundo? ${numero1 > numero2}`)
// console.log(`O primeiro numero é igual ao segundo? ${numero1 === numero2}`)
// console.log(`O primeiro numero é divisível pelo segundo? ${(numero1%numero2) === 0}`)
// console.log(`O segundo numero é divisível pelo primeiro? ${(numero2%numero1) === 0}`)


 //-------------------DESAFIO-------------------//

//  1.)
 
//  a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

// (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
// (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

// let grauFahrenheit = 77
// let grauKelvin
// grauKelvin = (grauFahrenheit - 32) * (5/9) + 273.15
// console.log(`${grauKelvin}K`) 
// let grauCelsius = 80
// let celsiusFahrenheit = (grauFahrenheit) = (grauCelsius*(9/5)+32)
// console.log(`${celsiusFahrenheit}°F`)
// grauCelsius = 30
// console.log(`${grauFahrenheit}°F e ${grauKelvin}K`)
// grauCelsius = prompt("Quantos graus celsius está neste momento?")
// grauFahrenheit = (grauCelsius)*(9/5)+32
// grauKelvin = (grauFahrenheit - 32) * (5/9) + 273.15
// console.log(`Neste momento está ${grauCelsius}°C, ${grauFahrenheit}°F e ${grauKelvin}K `)


     