/* vamos começar pelo REST  <  isso mesmo "-é o resto", o que sobra..
então, essa pratica se aplica  com aqueles tres pontinho ali.
 isso é pra ser usado quando se tem 2 ou mais parametros, pois o primeiro
 parametro vira uma constante, em seguida tudo o RESTO vira um array.
 aki abaixo "origamid" é o parametro exclusivo e o resto vai pra um arrray chamado "clientes"    isso se chama REST 
*/
 function showList (empresa, ...clientes){
     console.log(empresa)
     console.log(clientes)
 }
 showList("Origamid", "jao", "maria")

 /*
SPREAD  -  espalha .... na verdade, interpreta.
quando há uma diferença de tipo de valores, tipo:  Number != Text  ou pra dizer
quando vc precisa mexer com numeros e eles estão em um array que apresenta conflito
de type... entao o  SPREAD   é uma 'tecla SAP' (desculpe o termo mas é pra ficar facil)

funciona assim como segue abaixo:
 */

//let numeros = [1 ,3 , 39, 43, 38222]
//console.log(Math.max(numeros))  //*Math.max é um operador matemático que trata numeros, porem 'numeros' é um array e isso pra 'math' é o fim da picada, pois ele nao é capaz de olhar os numeros la dentro, ele fala que é NaN .. o SPREAD é o decoder do array...  

let numeros = [1 ,3 , 39, 43, 38222]
console.log(Math.max(...numeros))
//olha lá no console se nao tem por acaso o 38222 .   então ja sabe né? problemas numericos desse tipo pedem SPREAD!   


//aqui em baixo vemos que uma lista de 'li' pode ser vista no console como parecido com array -  o modo de seleção ajudou nisso
    const items = document.querySelectorAll("li")
//   console.log(items)
//AKI ABAIXO os 'li' estão passando no console como elementos PARECIDOs de array
items.forEach(item => {
    console.log(item)   //forEach funciona bem com esse tipo de objeto (li), se for um outro metodo que por exemplo ŕocura criar um novo array ex. 'map'(mapear itens) ... daih nao daria. retornando erro.
})

//eu posso também criar um array dos 'li'  como abaixo :
const coisas = document.querySelectorAll("li")

//e abaixo uma outra forma  de colocar itens dentro de um array
//[...coisas].map(coisa =>{
  //  console.log(coisa)
//}) 

//abaixo vamos ver uma clonagem de objeto com a funçao SPREAD
const carro = {cor: "preto", ano: 2, taxa: 20000}
const cloneCarro = {...carro}
 

class Transporte {
    constructor(){
        this.terrestre = true
    }
    andar(){
        console.log('andou')
    }
}

class Carro extends Transporte {
    constructor(cor, portas){
        super()
        this.cor = cor
        this.portas = portas
    }
}

const carrow = new Carro("vermelho", 4)

const carroClonado = {...carrow} 

console.log(carrow)    //aqui o objeto aparece completo com o atributo Carro
console.log(carroClonado) //aki ..foram clonados em uma nova const apenas os elementos em array
//no console, o prototipo carrow é tipo 'transporte' conforme declarado
// ja o carroClonado ele tem prototipo 'object'    - forma de diferenciar ambos!
//a const carrow recebe parâmetros originais que podem se extender por níveis
//a const carroClonado só recebe um array superficial de informações e ja não abrange por exempl, a funçao  andar(), que é prototipa de Transporte