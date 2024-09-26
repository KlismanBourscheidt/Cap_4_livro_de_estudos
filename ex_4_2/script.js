//criando a referencia html
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// criando um ouvinte para o evento "submit"
frm.addEventListener("submit", (e)=>{
    e.preventDefault() // evita o envio do submit

    const nome = frm.inNome.value //recebe as informacoes de entrada
    const masculino = frm.inMasculino.cheked
    const altura = Number(frm.inAltura.value)

    let peso // declarando a variavel peso
    if(masculino){
       peso = 22*Math.pow(altura,2) // Math.pow eleva ao quadrado
    }else{
       peso = 21*Math.pow(altura,2)
    }


    //apresenta a resposta (altera o conteudo do elemento h3 da pagina)
    resp.innerText = `${nome} : Seu peso ideal é ${peso.toFixed(3)}kg`
})


// criando um ouvinte para o reset button
frm.addEventListener("reset", ()=>{
    resp.innerText = "" // limpa conteudo h3
})