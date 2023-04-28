const vinhos = [
    {
        nomeVinho: "Vinho Tinto Gala 1 Malbec Tannat Verdot",
        precoVinho: 254.90,
        imgVinho: "https://images.tcdn.com.br/img/img_prod/584817/gala1malbectannatverdot_23_1_736b850fe19501c30205c98dda8abfb9.jpg"
    }
    ,
    {
        nomeVinho: "Vinho Tinto Rosso Conero Cúmaro Riserva",
        precoVinho: 349.00,
        imgVinho: "https://images.tcdn.com.br/img/img_prod/584817/rossoconerocumaroriserva_1567_1_74b1d9df09d913bcbf6c8cf6b8aa9a35.jpg"
    }
    ,
    {
        nomeVinho: "Espumante Lírica Brut",
        precoVinho: 116.91,
        imgVinho: "https://images.tcdn.com.br/img/img_prod/584817/113_120210909213209_113_1_0b085312f98b88825c74fb0fc55e7fad.jpg"
    }
    ,
    {
        nomeVinho: "Vinho Tinto Tetramythos Agiorgitiko",
        precoVinho: 130.41,
        imgVinho: "https://images.tcdn.com.br/img/img_prod/584817/tetramythosagiorgitiko_736_1_50b8e472d075f7e7b33783a0a980163b.jpg",
    }
    ,
    {
        nomeVinho: "Vinho Branco Terranoble Reserva Chardonnay",
        precoVinho: 101.16,
        imgVinho: "https://images.tcdn.com.br/img/img_prod/584817/terranoblechardonnayreserva_1227_1_99cffc27c164e56470cfe175381d0cf7.jpg"
    }

]

const listaVinhos = document.querySelectorAll(".vinho div")

listaVinhos.forEach((lista, indice) => {
    lista.innerHTML = `
        <h3>${vinhos[indice].nomeVinho}</h3>
        <img src="${vinhos[indice].imgVinho}">
        <p>${vinhos[indice].precoVinho.toFixed(2)}</p>

        <button>Comprar</button>
    `
})