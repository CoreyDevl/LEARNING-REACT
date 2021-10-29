/**
quando escrevemos export  antes de uma função, a função é 
habilitada a ser usada como módulo em outro arquivo.
o outro arquivo vai receber dentro de uma declaração 
' import{ } 
 */

export function areaQuadrado(l){
    return l*l
}

export function perimetroQadrado(l){
    return l*4
}