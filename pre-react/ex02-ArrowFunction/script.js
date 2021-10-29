/* arrow functions
-esse é o formato de origem:

function upperName(name){
    return name.toUpperCase()
}
----------------------------------------
-esse é uma refatoração simples 

const upperName = function(name){
    return name.toUpperCase()
}

----------------------------------------
-esse é uma refatoração simples (o 'name, saiu do parenteses, mas se forem dois parametros o parenteses fica  ex:   (name, number)  )

const upperName = name => {
    return name.toUpperCase()
}

----------------------------------------
-essa é a forma final arrow function - de forma simples
se o metodo aplicado for apeans 1 ...posso tirar os brachets
e o 'return' 

const upperName =  name => name.toUpperCase()
const countLetters = word => word.length;    
 console.log(countLetters("word"))

A autocitação THIS terá endereçamento em níveis.
se uma função gerar uma hieranquia de funções o THIS quando usado nao cita o 
novo objeto, senão que uma imediata função queo contém.
AAAAAA NAO SER que usemos uma arrow function.
veremos abaixo:
 
class Menu {
    constructor(menu){
this.menuElement = document.querySelector(menu);
this.activeClass = "active"
    }
    addActiveEvent(){
        this.menuElement.addEventListener("click", function(event){
            event.target.classList.add(this.activeClass); // aki é onde o THIS nao coleta dados acima da função(event) - mas se ali for arrow function, então o THIS consegue fazer referencia ao objeto THIS la de cima.
        })
    }
}
const menu = new Menu(".principal")
menu.addActiveEvent()

então abaixo vai o formato com arrow function:
*/

class Menu {
    constructor(menu){
this.menuElement = document.querySelector(menu);
this.activeClass = "active"
    }
    addActiveEvent(){
        this.menuElement.addEventListener("click",  event => {
            event.target.classList.add(this.activeClass); // aki é onde o THIS nao coleta dados acima da função(event) - mas se ali for arrow function, então o THIS consegue fazer referencia ao objeto THIS la de cima.
        })
    }
}
const menu = new Menu(".principal")
menu.addActiveEvent()