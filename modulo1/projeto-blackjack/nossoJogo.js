/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


// 1 - Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!".
//2 - Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?".
//3 - Se o usuário responder `cancel`, imprime uma mensagem no console "O jogo acabou".
//4 - Se o usuário responder `Ok`, o programa deve iniciar uma nova rodada.
console.log("Boas vindas ao jogo de Blackjack!");
if (confirm("Quer iniciar uma nova rodada?")){
//- **🃏**  Começando uma rodada
    
//A rodada consiste em sortear 2 cartas para cada jogador, definir a pontuação de cada jogador e informar o vencedor 
//(usuário ou computador), ou empate, caso as pontuações sejam iguais.

//5 - Nós preparamos um método que permite sortear uma carta. Ele já está pronto e você só precisa invocá-lo. 
//Cada carta sorteada é um objeto com duas propriedades:
// um texto que representa o que é escrito na carta; e um valor que mostra a pontuação da carta. 
let user = "Usuário"
let bot = "Computador"
let cardUser1 = comprarCarta()
let cardUser2 = comprarCarta()
let userSum = cardUser1.valor + cardUser2.valor
let cardBot1 = comprarCarta()
let cardBot2 = comprarCarta()
let botSum = cardBot1.valor + cardBot2.valor

//6 - O programa deve mostrar, no console, as cartas e pontuação de cada jogador no formato mostrado abaixo
console.log(`${user} - cartas: ${cardUser1.texto} ${cardUser2.texto}  - pontuação ${userSum}`);
console.log(`${bot} - cartas: ${cardBot1.texto} ${cardBot2.texto}  - pontuação ${botSum}`);
//7 - Além disso, deve indicar o vencedor ou um empate

if(userSum > botSum){
   console.log("O usuário ganhou!");
 }else if ( userSum < botSum){
    console.log("O computador ganhou!");
   }else if ( userSum === botSum){
    console.log("Os jogadores empataram!");
      }else{
    "ERROR404"
 }
 
}else{
   console.log("Fim de jogo!");
}







































