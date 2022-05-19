// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}
retornaTamanhoArray(array)
// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return   array.sort((a,b)=> a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let pares = function(item){
      return item % 2 === 0
  }
  return array.filter(pares)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const numerosPares = function(item){
      return item % 2 === 0
  }
  const multiplica = function(item2){
      return item2 * item2
  }
  return array.filter(numerosPares).map(multiplica)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let numeroMaior = 0 
    for( let i = 0; i < array.length; i++ ){
        let numeroArray = array[i]
        if( numeroArray > numeroMaior){
            numeroMaior = numeroArray
        }
    }
    return  numeroMaior 
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  if(num1>num2){
      maior = num1
      menor = num2
  }else{
      maior = num2
      menor = num1
  }
let divisivel = maior % menor === 0 
let diferenca = maior - menor
result= {maiorNumero: maior, maiorDivisivelPorMenor: divisivel, diferenca: diferenca}
return result
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n){ 
    let numerosPares = []
    for (let i = 0; numerosPares.length < n; i++) {
        if( i % 2 === 0){
        numerosPares.push(i)
        }
    }
    return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
        return "Equilátero"
    }
    if ((ladoA === ladoB && ladoB !== ladoC) || (ladoB === ladoC && ladoC !== ladoA) || (ladoA === ladoC && ladoA !== ladoB)){
        return "Isósceles"
    }
    if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let ordenado = array.sort((a,b)=> a - b)
  let segundoMenor = ordenado[1]
  let segundoMaior = ordenado[array.length -2]
  return [segundoMaior, segundoMenor]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const anonimo = {nome:"ANÔNIMO"}
   const novoObjeto = {...pessoa, ...anonimo}
   return novoObjeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const autorizadas = []
   for( let pessoa of pessoas){
       if((pessoa.idade > 14 && pessoa.idade <60) && pessoa.altura >= 1.5){
           autorizadas.push(pessoa)
       }
    } 
   return autorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const naoAutorizadas = []
    for( let pessoa of pessoas){
        if((pessoa.idade <= 14 || pessoa.idade >= 60) || pessoa.altura <= 1.5){
            naoAutorizadas.push(pessoa)
        }
     } 
    return naoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for ( conta of contas){
        for( let i = 0; i < conta.compras.length; i++){
            conta.saldoTotal = conta.saldoTotal - conta.compras[i]
        }
        conta.compras = []
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
     consultas.sort(function(a,b){return (a.nome > b.nome)? 1 : ((b.nome > a.nome)? -1 :0)})
     return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    for(let i = 0; i < 3; i++)
    consultas.sort(function(a,b){
        return (a.dataDaConsulta.split("/")[i] > b.dataDaConsulta.split("/")[i])? 1 : ((b.dataDaConsulta.split("/")[i] > a.dataDaConsulta.split("/")[i])? -1 :0)})
    return consultas
}