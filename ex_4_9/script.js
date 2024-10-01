const prompt = require("prompt-sync")() // adiciona pacote prompt-sync
const numero = Number(prompt("Digite um numero (centena)")) // le o numero
if(numero < 100 || numero >= 1000){
    console.log("Erro... deve ser uma centena")
    return
}

const num1 = Math.floor(numero / 100) //obtem numero 1
const sobra = numero % 100 //o que sobra (dezena)
const num2 = Math.floor(sobra / 10) //obtem numero 2
const num3 = sobra % 10 //obtem numero 3

console.log(`Invertido ${num3}${num2}${num1}`) //exibe o numero invertido