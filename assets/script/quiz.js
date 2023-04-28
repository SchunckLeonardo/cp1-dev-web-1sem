let perguntas = [
    {
        pergunta: "Qual é o seu tipo de vinho favorito: branco, tinto ou rosé?"
    }
    ,
    {
        pergunta: "Você prefere vinhos secos ou suaves?"
    }
    ,
    {
        pergunta: "Qual é a sua uva preferida para vinhos brancos?"
    }
    ,
    {
        pergunta: "Qual é a sua uva preferida para vinhos tintos?"
    }
    ,
    {
        pergunta: "Você prefere vinhos com sabor frutado ou amadeirado?"
    }
    ,
    {
        pergunta: "Qual país você considera que produz os melhores vinhos?"
    }
    ,
    {
        pergunta: "Qual é o teor alcoólico que você prefere em um vinho?"
    }
    ,
    {
        pergunta: "Você prefere vinhos envelhecidos ou jovens?"
    }
    ,
    {
        pergunta: "Qual é a região produtora de vinhos que você mais gosta?"
    }
    ,
    {
        pergunta: "Qual é o melhor vinho que você já experimentou?"
    }
]
const divRespostas = document.querySelectorAll(".respostas")

divRespostas.forEach((pergunta, i) => {
    const resposta = prompt(`${perguntas[i].pergunta}`)

    const respostaFormatada = resposta.toLowerCase()
    .replace(/(?:^|\s)\S/g, (letra) => letra.toUpperCase())

    pergunta.innerHTML = `
        <h3>${perguntas[i].pergunta}</h3>
        <p>${respostaFormatada}</p>
    `
})