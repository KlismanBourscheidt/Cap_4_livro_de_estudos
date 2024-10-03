const prompt = require("prompt-sync")(); // chamamos a funcao do node js
const numero = Number(prompt('digite um numero para saber se é par ou impar: ')); // recebemos os dados

let calculo = numero % 2; // calculo com o módulo

if(calculo == 0){
    console.log(`${numero} é par`); // conferimos se o resultado for zero para saber se é par ou impar
}else{
    console.log(`${numero} é impar`);
}
console.log(calculo)

let resultado = calculo == 0 ? 'par' : 'impar'; // a mesma situacao que a estrutura if...else acima , mas com operador ternario 
// variavel = (condicao == 0) ?('se') 'par' :(se não) 'impar'
console.log(resultado)