//criando referencias para o JS dentro do html
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// criando um ouvite,  gerando evento para o submit
frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    //obtem e converte o conteudo do campo inHoraBrasil
    const horaBrasil = Number(frm.inHoraBrasil.value)
    let horaFranca = horaBrasil+5
    if (horaFranca > 24){
        horaFranca = horaFranca -24
    }

    resp.innerText = `Hora na franca ${horaFranca.toFixed(2)}`
})