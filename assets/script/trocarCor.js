const botoes = document.querySelectorAll('.fa-solid')
const titulo = document.querySelector(".titulo-pagina")

botoes.forEach(btn => {
    btn.addEventListener("click", e => {
        let contemClass = e.srcElement.classList

        if(contemClass.contains("laranja")) {
            document.body.style.backgroundColor = "#EB5E55"
            titulo.style.color = "#fff"
        } else if(contemClass.contains("branco")) {
            document.body.style.backgroundColor = "#C6D8D3"
            titulo.style.color = "#000"
        } else {
            document.body.style.backgroundColor = "#3A3335"
            titulo.style.color = "#fff"
        }
    })
})