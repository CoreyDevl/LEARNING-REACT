/*
 ARRAY:  MAP  FILTER  E REDUCE
 VAMOS MANIPULAR ARRAYS - esses métodos citados NAO MODIFICAM O ORIGINAL ARRAY - eles criam novos arrays
 
*/
const preços = [
    "crédito", 
    "R$ 200",
    "R$ 400",
    "contas pagar",
    "R$ 300",
    "R$ 400",
    "meus dados"
]

//tomamos uma nova const e com ela aplicamos o filtro..
//porem é só uma filtragem e o valor atribuido é UNDEFINED ou FALSE como default
  // const preçosFiltro = preços.filter(function(preço){
//   console.log(preço)
    //})

//se quisermos que a const preçosFiltro tenha valores precisamos declarar esses como TRUE
/* tudo isso que segue abaixo é um bom filtro  e pode ainda ser reduzido conforme  vai depois 

const preçosFiltro = preços.filter(function(preço){
     
    if(preço.includes("R$")){
        return true
    }else{
        return false
    }
    return true
})
console.log(preçosFiltro)


--------------------------------------
vamos ver como isso fica refatorado:
  */
const preçosFiltro = preços.filter(preço => preço.includes("R$"))
console.log(preçosFiltro)

// vamos ver abaixo o uso da função map - que se nao tiver um retorno tb retornaq undefined 
const preçoNumeros = preçosFiltro.map(function(preço){
    return preço.replace("R$ ", "") //esse comando é bacana replace vai ser util! se no caso " preço.replace", fosse escrito com '+' antes do texto, a string é convertida em número operáveis!  "+preço.replace"  ou envolver com Number(preço.replace)
 })


// essa função pode ser reduzida em arrow 
/*
abaixo vamos usar a função REDUCE
*/
const total = preçoNumeros.reduce(function(anterior, atual){
    console.log(anterior, atual)
    return anterior + atual
},0) // esse fator '0'  é o fator 'anterior' e que será calculado, se ele não tiver aki  será 0 e começará a soma de itens. - reduce é somar tudo e ter um valor unico.

console.log(total)