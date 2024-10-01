const prompt = require("prompt-sync")()// adiciona pacotes prompt-sync
const pessoas = Number(prompt("Digite a quantidade de pessoas presentes: "))
const peixes = Number(prompt("Quantidade de peixes obtidos na pecaria: "))

let pagar
if(peixes <= pessoas){
    pagar = pessoas*20
}else{
    pagar = (pessoas * 20) + ((peixes - pessoas)* 12)
}

console.log(`Pagar R$${pagar.toFixed(2)}`)