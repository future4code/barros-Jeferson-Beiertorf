//------------Exercícios de interpretação de código--------------//
        //----------------EXERCÍCIO 01---------------//

//         const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }


// a) Explique o que o código faz. Qual o teste que ele realiza? 
// -> O código pede a um número ao usuário,
//     caso o número seja PAR, ele passa no teste, caso seja impar ele NÃO PASSA no teste.

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// -> Para números PARES
// c) Para que tipos de números a mensagem é "Não passou no teste"?
// -> Para números ÍMPARES


        //----------------EXERCÍCIO 02---------------//

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
//  -> O código pede ao usuário para escolher uma fruta,
//      dada a fruta ele imprimi uma mensagem com o nome da fruta e o preço. 

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// -> "O preço da fruta Maçã é R$2.25"

// c) Considere que um usuário queira comprar uma `Pêra`, 
// qual seria a mensagem impressa no console se retirássemos 
// o `break` que está logo acima do `default` 
// (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// ->  "O preço da fruta Pêra é R$5", pois o preco do default está sobrepondo o preco da Pêra.


        //----------------EXERCÍCIO 03---------------//


//         const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
// -> recebendo um valor do usuário para atribuir a variável NUMERO.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? 
//E se fosse o número -10?
// -> Se o número digitado for 10, a resposta seria "Esse número passou no teste",
//      caso o número for -10, não aparece nada.
// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// -> Aparecerá e mensagem de que a variável "mensagem" ficou indefinida.


//------------Exercícios de escrita de código--------------//
     //----------------EXERCÍCIO 01---------------//
    

//1. Faça um programa que pergunta ao usuário qual a idade dele e 
//  imprima no console se ele/ela pode dirigir (apenas maiores de idade).

// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir.
//  Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

// let idade = Number(prompt("Qual sua idade?"))
// if (idade>=18){
//     console.log("Você pode dirigir!")
// }else{
//     console.log("Você não pode dirigir!");
// }


     //----------------EXERCÍCIO 02---------------//

//Agora faça um programa que verifica que turno do dia um aluno estuda.
//  Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno).
//  Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!".
//   Utilize o bloco if/else

// let turno = prompt(`Qual turno você estuda?
//  Digite "m" para Matutino, "v" para Vespertino ou "n" para Noturno`)
// if (turno === "m"){
//     console.log("Bom dia!");
// }else if (turno === "v"){
//     console.log("Boa tarde!");
// }else if (turno === "n"){
//     console.log("Boa noite!");
// }else{
//     console.log("Digite corretamente uma das opções.");
// }

     //----------------EXERCÍCIO 03---------------//
// Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// let turno = prompt(`Qual turno você estuda?
// Digite "m" para Matutino, "v" para Vespertino ou "n" para Noturno`)
// switch(turno){
//  case "m":
//      console.log("Bom dia!");  
//      break
//  case "v":
//      console.log("Boa tarde!");
//      break
//  case "n":
//      console.log("Boa noite!");
//      break
//  default:
//      console.log("Digite corretamente uma das opções.");
// }


     //----------------EXERCÍCIO 04---------------//

    //  Considere a situação: você vai ao cinema com um amigo ou amiga,
    //   porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia
    //    e se o ingresso está abaixo de 15 reais.
    //     Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir
    //      e outra pergunta sobre o preço do ingresso, então verifique se
    //       seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem:
    //        "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// let genero = prompt("Qual o gênero do filme?")
// let preco = Number(prompt("Quanto custa o ingresso?"))

// if (genero === "fantasia" && preco < 15){
//     console.log("Bom filme!");
// }else{
//     console.log("Escolha outro filme :(");
// }



//------------------------DESAFIOS----------------------------//
     //----------------DESAFIO 01---------------//

// Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!",
//  pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e
//  imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]",
//   trocando [LANCHINHO] pelo que o usuário colocou no input.


// let genero = prompt("Qual o gênero do filme?")
// let preco = Number(prompt("Quanto custa o ingresso?"))
// let lanche = prompt("Gostaria de algo pra comer?")

// if (genero === "fantasia" && preco < 15){
//     console.log(`Bom filme!
//     Aproveite o ${lanche.slice(-1) === "a" ? "sua" : "seu"} ${lanche} `);
// }else{
//     console.log("Escolha outro filme :(");
// }

//     //----------------DESAFIO 02---------------//
// ----------------  EM DESENVOLVIMENTO  -------------------//

//2. Você foi contratado para criar um sistema de vendas
//  de ingressos de jogos de um estádio de futebol.

//  Para esta compra, o usuário deve fornecer algumas informações:
// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos

// O seu sistema deve solicitar estas informações ao usuário, através do `prompt` .
//  Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso
//   e o valor total que o usuário tem que pagar 
//   (ou seja, o valor unitário do ingresso multiplicado pela quantidade).
// Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. 
//  Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos,
//  mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)

// let nome = prompt("Qual seu nome completo?")
// let tipoJogo = prompt(`Qual tipo de jogo?
// IN = Internacional
// DO = Doméstico`)
/*let etapaJogo = prompt(`Qual etapa?
SF = Semi-Final
DT = Decisão do terceiro lugar
FI = Final`)
let categoria = prompt(`Escolha a categoria 1,2,3 ou 4`)
// let qtdIng = prompt("Quantos ingressos?")

// SF = CAT1 R$1320.00 = CAT2 R$880.00 = CAT3 R$550.00 = CAT4 R$ 220.00
// DT = CAT1 R$660.00 = CAT2 R$440.00 = CAT3 R$330.00 = CAT4 R$ 170.00 
// FI = CAT1 R$1980.00 = CAT2 R$1320.00 = CAT3 R$880.00 = CAT4 R$ 330.00 
function sf(categoria){
    if(categoria === "1"){
        categoria = 1320.00
    }else if(categoria === "2"){
        categoria = 880.00
    }else if(categoria === "3"){
        categoria = 550.00
    }else{
        categoria = 220.00
    }return categoria
}
console.log(etapaJogo);
console.log(sf(categoria));


// ---Dados da compra--- 
// Nome do cliente:  Soter Padua 
// Tipo do jogo:  Nacional 
// Etapa do jogo:  Final 
// Categoria:  1 
// Quantidade de Ingressos:  10 ingressos 
// ---Valores--- 
// Valor do ingresso:  R$ 1980
// Valor total:  R$ 19800





// ---Dados da compra--- 
// Nome do cliente:  Soter Padua 
// Tipo do jogo:  Internacional 
// Etapa do jogo:  Final 
// Categoria:  1 
// Quantidade de Ingressos:  10 ingressos 
// ---Valores--- 
// Valor do ingresso:  U$ 482.92682926829275
// Valor total:  U$ 4829.2682926829275



// ----------------  EM DESENVOLVIMENTO  -------------------//
















