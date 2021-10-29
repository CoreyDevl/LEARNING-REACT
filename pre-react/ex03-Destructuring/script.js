/*
Quando temos nessecidade de usar muitos dados contidos num array ou objeto
(como está exemplificado abaixo):


function handleMouseMove(event){
    const clientX = event.clientX
    const clientY = event.clientY
    console.log(clientX, clientY)
}

document.documentElement.addEventListener("mousemove", handleMouseMove)
-------------
vamos adotar o padrao abaixo

function handleMouseMove(event){
    const {clientX, clientY} = event;
 
    console.log(clientX, clientY)
}

document.documentElement.addEventListener("mousemove", handleMouseMove)
-------------

na verdade vamos passar o parametro de desestruturação diretamente no (argumento) como abaixo mostra:

function handleMouseMove({clientX, clientY}){
    console.log(clientX, clientY)
}

document.documentElement.addEventListener("mousemove", handleMouseMove)

ISSO É BOM PORQUE NAO FORAM CRIADAS CONSTANTES COM OS DADOS.
--------------------------------------------------
agora , aki em baixo, vemos um array simples e atribuimos um elemento 
fruta1  ..de forma bem simples.


const frutas = ["banana", "uva"]
const fruta1 = frutas[0]
console.log(fruta1)


POOOOOOOREM   ,    esse mesmo codigo, pode ser expressado de maneira destrutural:

const frutas = ["banana", "uva"]
const [fruta1] = frutas
console.log(fruta1)  <-   tem que aparecer banana ...né =)

se eu declarar no 'destructure'  tipo   
const [fruta1, fruta2, fruta3  .... ]
a alocação de elementos aos nomes é de forma ordenada do indice 0 pra frente.

ABAIXO AGORA UM EXEMPLO sem frutas..
*/
const useState = ["blue", function(color){
    useState[0] = color
}]

const [color, setColor] = useState

setColor("red")
console.log(useState)    //a cor era blu.... ERA  -  enfim isso é destructuring