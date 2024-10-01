const prompt = require("prompt-sync")() //adiciona o comando node.js
const valor = Number(prompt("Digite o valor total da compra:")) // recebe o valor total da compra
const aux = Math.floor(valor / 20) //aux = numero de parcelas sem condicao
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux //operador ternário
const valorParcela = valor / parcelas //cálculo do vlaor da parcela
console.log(`Pode pagar em ${parcelas}x de R${valorParcela.toFixed(2)}`)