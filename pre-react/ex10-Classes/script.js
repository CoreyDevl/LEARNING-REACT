/*
classes são formas de organizar o codeigo em pequenos objeto
É comum que os nomes de classes comecem com letras maiusculas
as classes se abrem (parecendo até com CSS)
aki abaixo tem um exemplo de uma classe aberta
repara que o 'constructor()' é uma função inerente à açao de abrir nova classe.
class NomeClasse { 
    constructor(){ 
        
     }
 }

vamos fazer o exercicio então 
*/
// criei a classe  - pra passar propriedades dentro dele usaremos o 'this'
 class SmoothScroll {
     constructor(links){
    this.linkElements = document.querySelectorAll(links)
    this.addClickEvent();
     }
     handleClick(event){
        event.preventDefault()
        const href = event.currentTarget.getAttribute("href")
        
        const section = document.querySelector(href)
         window.scrollTo({

             top: section.offsetTop - (window.innerHeight - section.clientHeight)/2,
            //isso acima é o top centralizado 'na mãnha'
             // top: section.offsetTop, <-isso é top no alto
            
             behavior: "smooth"
         })
     }
     addClickEvent(){
         this.linkElements.forEach(link => {
             link.addEventListener("click", this.handleClick)
         })
     }
}




//depois  quero extender a classe e integrar mais parametros em SmoothScroll
class ActiveSmoothScroll extends SmoothScroll{
    constructor(links, sections){
    super(links);

    this.sectionElements = document.querySelectorAll(sections)

    this.handleScroll = this.handleScroll.bind(this)
    this.activeNavScroll()

    }
    handleScroll(){
        this.sectionElements.forEach((section, i) => {
            if(window.pageYOffset > section.offsetTop - window.innerHeight * 0.5){
                this.linkElements[i].classList.add("active");
            }else{
                this.linkElements[i].classList.remove("active")
                console.log('deu')
            }
        });
       
    }
    activeNavScroll(){
        window.addEventListener("scroll", this.handleScroll)
    }
}

//aki abaixo eu ja vou executar a classe:
// sim...tem que ter o 'new'  é uma ordem pra criar a classe. o 'scroll' é o objeto
// e se liga só: ainda vo passar um SELETOR CSS[] dentro do parâmetro "a"
//dizendo que a regra vale pra Href^="#" ( ' ^= ' <- isso é pra informar condiçao )
const scroll = new ActiveSmoothScroll("a[Href^='#']"); 


//'bind' linka o 'this' relacionado a classe 'smoothControl' de forma permanente
// a  handleclick(event)