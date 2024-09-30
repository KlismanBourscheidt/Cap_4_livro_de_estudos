//criando referencia para o documento Js
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//criando o fofoqueiro do addEventListener
frm.addEventListener("submit", (e)=>{
    e.preventDefault() //evita envio do form

    const numero = Number(frm.inNumero.value) //recebe a informacao do HTMl e converte em numero
    const raiz = Math.sqrt(numero)  //calcula a raiz quadrada do valor informado
    if(Number.isInteger(raiz)){ //se valor da raiz for um numero inteiro
        resp.innerText = `Raiz ${raiz}` //mostrar a raiz
        resp.style.color = "green"
    }else{
        resp.innerText = `Não há raiz exata para ${numero}`
        resp.style.color = "red"
    }
})