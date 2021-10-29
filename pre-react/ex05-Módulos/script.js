/*
 modulos de codigos que cumprem funções .
 a designação de modulo será declarada na tag do html
  <script type="module" src="script.js">
  e tb é importante exibir com o Live Server

  declarações que são marcadas com 'export'
  serão recebidas aki via 'import{}'
  
*/
import { areaQuadrado, perimetroQadrado } from "./quadrado.js";
import numeroAleatorio from "./numeroAleatorio.js"
import Circulo from "./circulo.js"
 console.log(perimetroQadrado(8))  //console vai retornar 32
 console.log(Circulo.area(5))