const prompt = require("prompt-sync")()
var a = Number(prompt('Digite o numero do primeiro lado do triangulo: '))
var b = Number(prompt('Digite o numero do segundo lado do triangulo: '))
var c = Number(prompt('Digite o numero do terceiro lado do triangulo: '))

if(a == b && b == c){
    console.log('Este é um triangulo equilatero')
}else if(a == b || b == c || a == c){
    console.log('Este é um triangulo isóceles')
}else{
    console.log('este é um triangulo Escaleno')
}