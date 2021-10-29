/*
 expressões são tudo akilo que você pode colocar em uma const ou var ou let
 quando vc precisar de ter apenas uma experssão  e ter que fazer alguma verificação
 em uma variável.. se usar um if ... isso já nao é mais expressao
 neste caso usar operador ternário.
essa expressao aki debaixo não é considerada uma expressao.
 const a = 2
 const b = 3 
 if(a > b){
     "A venceu"
 }else{
     "B venceu"
 }
 
*/
const grupoA = 100;
const grupoB = 300;
// isso aki em baixo é uma expressao
const vencedor = grupoA > grupoB ? "grupo A venceu" : "grupo B venceu"


const grupoVencedor = grupoA > 150 && "grupo A venceu" //isso tb é uma expressao
console.log(grupoVencedor)  // isso retorna false  
const areaQuadrado = l => l*l   //isso tb é uma expressao

const numeros = [2, 4, 7]
const total = numeros.filter(numero => numero >4)  //isso tb é uma expressao

