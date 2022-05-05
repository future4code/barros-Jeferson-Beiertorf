//-----------------Exercícios de interpretação de código----------------------//
//----------EXERCÍCIO 01--------------//

//O que o código abaixo está fazendo? Qual o resultado impresso no console?
/*
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
O código está fazendo o loop, guardando o valor do i em valor,
posteriormente somando os valores, ficando: 0+1+2+3+4, resultando em 10

//----------EXERCÍCIO 02--------------//
//Leia o código abaixo:
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//a) O que vai ser impresso no console?
// Vai imprimir todos os números maiores que 18

//b) Se eu quisesse acessar o **índice** de cada elemento dessa lista,
 //o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

//----------EXERCÍCIO 03--------------//


//Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }





//-----------------Exercícios de escrita de código----------------------//

//----------EXERCÍCIO 01--------------//
//1. Pergunte ao usuário quantos bichinhos de estimação ele tem e 
//guarde esse dado em uma variável. 

    // let qtdePet = Number(prompt("Quantos pets você tem?"))
    // let nomesPet = []
//   a) Se a quantidade for 0, imprima no console
// "Que pena! Você pode adotar um pet!"
//  b) Se a quantidade for maior que 0, solicite que o usuário
// digite os nomes deles, um por um, e guarde esses nomes em um array
// c) Por fim, imprima o array com os nomes dos bichinhos no console
// 


//  if(qtdePet === 0){
//         console.log("Que pena! Você pode adotar um pet!");
//     }else {
//         for(let qtde = 0; qtde < qtdePet; qtde++){
//             let nomes = prompt("Digite o(s) nome(s) do(s) seu(s) pet(s), um por vez!")
//             nomesPet.push(nomes)
//         }
//     }
//    console.log(nomesPet);

//----------EXERCÍCIO 02--------------//
/*
2. Considere que você tenha acesso a um `array`  (chamado de 'array original')
 que é composto somente de números. Baseando-se nisso, crie uma função para
  cada um dos itens abaixo, realizando as operações pedidas:
   
  const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

a) Escreva um programa que **imprime** cada um dos valores do array original.

    for( let i = 0; i < arrayOriginal.length; i++ ){
        let elemento = arrayOriginal[i]   
        console.log(elemento);
    }

b) Escreva um programa que **imprime** cada um dos valores do 
array original divididos por 10

for(let valor of arrayOriginal){
    console.log(valor / 10);
}

c) Escreva um programa que **crie** um novo array contendo, somente,
 os números pares do array original e **imprima** esse novo array
  
let arrayPares = []
    for(let valor of arrayOriginal){
        if( valor % 2 === 0){
            arrayPares.push(valor)
        }
    }
console.log(arrayPares)

d) Escreva um programa que **crie** um novo array contendo strings,
 da seguinte forma: "O elemento do índex `i` é: `numero`". 
 Depois, **imprima** este novo array.

let novaArr =[]
let i = 0
for(let valor of arrayOriginal){
    novaArr.push(`O elemento do índex ${i} é: ${valor}`)
    i++
}
console.log(novaArr);

e) Escreva um programa que imprima no console o maior e o menor números
 contidos no array original



const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function qualMaiorNumeroArr(array){
    let maiorNumero = array[0]
    let menorNumero = array[0]
    for(let posicao = 0; posicao <array.length; posicao++){
        let numeroDoArr = array[posicao]
        if (numeroDoArr > maiorNumero){
            maiorNumero = numeroDoArr
        }if ( numeroDoArr < menorNumero){
            menorNumero = numeroDoArr
        }
    }
    return `O maior número é ${maiorNumero} e o menor número é ${menorNumero}`
}
console.log(qualMaiorNumeroArr(arrayOriginal));


*/



    















