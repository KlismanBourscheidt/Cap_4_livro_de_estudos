const prompt = require("prompt-sync")()
const bairro = prompt("Bairro de entrega: ")
let taxaEntrega
switch(bairro){
    case 'centro':
        taxaEntrega = 5.00
        break
    case 'Hauer':
    case 'Boqueirao':
        taxaEntrega = 7.00
        break
    case 'Agua Verde':
        taxaEntrega = 10.00
        break
    default:
        taxaEntrega = 8.00
}

console.log(`Taxa R$${taxaEntrega.toFixed(2)}`)