//----------------------Exercícios de interpretação de código---------------------//
//---------------EXERCÍCIO 01------------------//

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

//a) O que vai ser impresso no console?
/*o "Item" vai mostar 3 listas com o nome e apelido de cada um,
 o "index" vai mostrar a posição de item no array,
e o array vai mostrar o número de array que tem */


//---------------EXERCÍCIO 02------------------//


// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

//a) O que vai ser impresso no console?
/*Um lista somente com os nomes*/


//---------------EXERCÍCIO 03------------------//

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)


//a) O que vai ser impresso no console?

/* um array contendo nome e apelido que não tenha a palavra "Chijo".*/


//----------------------Exercícios de escrita de código---------------------//
//---------------EXERCÍCIO 01------------------//

/*Dado o seguinte array de cachorrinhos que são clientes de um pet shop,
realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:*/

/*
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 

 /*a) Crie um novo array que contenha apenas o nome dos doguinhos

 const nomePet = pets.map((pet)=>{
console.log(pet.nome);
})

 b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)
 
const racaPet = pets.map((raca)=>{
    if(raca.raca === "Salsicha"){
        console.log(raca);
    }
})

 c) Crie um novo array que possuirá mensagens para enviar para
  todos os clientes que são poodles.
  A mensagem deve ser: 
  "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

  const racaPet = pets.map((raca)=>{
    if(raca.raca === "Poodle"){
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${raca.nome}!`);
    }
})

//---------------EXERCÍCIO 02------------------//

/*Dado o seguinte array de produtos,
realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:*/
/*
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

a) Crie um novo array que contenha apenas o nome de cada item

const produto = produtos.map((itens)=>{
    return itens.nome
})
console.log(produto);

b) Crie um novo array que contenha um objeto com o nome e o preço de cada item,
 aplicando 5% de desconto em todos eles

function mapear(produto){
    let desconto = produto.preco - (produto.preco * 0.05)
    return {"Nome": produto.nome, "Preço": desconto.toFixed(2)}
}
let novoArray= produtos.map(mapear)
console.log(novoArray);

c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

 const produto = produtos.map((itens)=>{
    if(itens.categoria === "Bebidas"){
        console.log(itens);
    }
})


d) Crie um novo array que contenha apenas os objetos cujo nome contenha
 a palavra "Ypê"

 function filtrarProduto(produto){
    return produto.nome.includes("Ypê")
 }
let produtoYpe = produtos.filter(filtrarProduto)
console.log(produtoYpe);

e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]".
 Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"  

 function filtrarProduto(produto){
    return produto.nome.includes("Ypê")

}
function criarFrase(produto){
    let frase = `Compre ${produto.nome} por ${produto.preco}`
    return frase
}
let array = produtos.filter(filtrarProduto)

array= array.map(criarFrase)
console.log(array);

*/





























