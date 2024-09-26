const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

// criando um ouvindo para o evento submit

frm.addEventListener('submit' , (e) =>{
    e.preventDefault() // evita envio do form

    const nome = frm.inNome.value // recebe dados do ID inNome HTML
    const nota1 = Number(frm.inNota1.value) // recebe dados ID inNota1 HTML
    const nota2 = Number(frm.inNota2.value) // recebe dados ID inNota2 HTML
    const media = (nota1+nota2)/2

    resp1.innerText = `Média das notas ${media.toFixed(2)}`

    //criando as condicoes
    if(media >= 7){ // se media for maior (>) ou igual a 7 então faca isto
        //alterar o texto e estilo da cor do elemento resp2
        resp2.innerText = `Parabens ${nome}! Voce foi aprovado(a)`
        resp2.style.color = "blue" // elemento que altera cor
    } else if(media >= 4){ 
        //coloca mais uma condicao
        resp2.innerText = `Atencao ${nome}, voce ainda esta em exame`
        resp2.style.color = "green" // elemento que altera cor
    } else{ 
        // caso retorne um valor falso deve retornar esta informacao (SE NAO)
        resp2.innerText = `Ops, ${nome}... voce foi reprovado`
        resp2.style.color = "red" // elemento que altera cor
    }
})