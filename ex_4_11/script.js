const prompt = require('prompt-sync')()
var velocidade = Number(prompt('Digite a velocidade em que estava: '))
var radar = Number(prompt('Digite a velocidade máxima permitida para o radar: '))

let totalVelocidade = (radar*0.20)

if(velocidade <= radar){
    console.log('Sem multa')
}else if(velocidade <= radar + totalVelocidade){
    console.log('Multa Leve')
}else if(velocidade >= radar + totalVelocidade){
    console.log('Multa grave')
}else{
    console.log('Digite um numero valido')
}
console.log(totalVelocidade)