const formulario = document.querySelector(".formulario")
const verificaContato = document.querySelector(".verificar-contato")
const inputs = document.querySelectorAll(".contato")

formulario.addEventListener("submit", e => {
    e.preventDefault()

    inputs.forEach(inp => {
        let respostas = inp.value

        if(respostas == "") {
            verificaContato.innerHTML = `
                <h3 class="erro">Verifique se os dados estão corretos</h3>
            `
        } else {
            verificaContato.innerHTML = `
                <h3 class="certo">Em breve entraremos em contato</h3>
            `
        }
        inp.value = ""
    })
})