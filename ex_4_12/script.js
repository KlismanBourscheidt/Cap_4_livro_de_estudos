const prompt = require('prompt-sync')()
let moeda = Number(prompt('Digite o valor a ser depositado: '))

if(moeda >= 3){
    console.log(`total de R$3,00 seu troco é de R$${moeda%(3).toFixed(2)} e seu tempo de permanencia é de 120 minutos (2 horas)`)
}else if(moeda >= 1.75){
    console.log(`total de R$1,75 seu troco é de R$${moeda%(1.75).toFixed(2)} e seu tempo de permanencia é de 60 minutos (1 hora)`)
}else if(moeda >= 1){
    console.log(`total de R$1,00 seu troco é de R$${moeda%(1.00).toFixed(2)} e seu tempo de permanencia é de 30 minutos (30 minutos)`)
}else{
    console.log('Valor insuficiente')
}