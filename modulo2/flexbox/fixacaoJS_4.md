
~~~javascript

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let qtde = []
  
  for(let i = 0; i < arrayDeNumeros.length; i++){
    if(numeroEscolhido === arrayDeNumeros[i]){
      qtde.push(arrayDeNumeros[i])
    }
  }
  
  if(qtde.length > 0){
    return `O número ${numeroEscolhido} aparece ${qtde.length}x`
  }else {
    return "Número não encontrado"
  }
}

~~~ 




