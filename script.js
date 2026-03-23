window.addEventListener('load', gerarTexto())

function gerarTexto() {
    let indexTexto = Number.parseInt((Math.random() * 10) / 3)
    let texto
    switch (indexTexto) {
        case 0:
            texto = "Décadas depois do Programa Apollo, ainda é possível seguir os passos dos astronautas que pisaram na Lua. Isso porque na Lua não há atmosfera - portanto, não existe a possibilidade de ocorrer erosão pelo vento ou pela chuva."
        break
        case 1:
            texto = "Diferentemente do que muita gente pensa, não foram escravos que construíram as pirâmides do Egito, mas camponeses recrutados para trabalhar em obras públicas. Além da fé na divindade do faraó, o que motivava essas pessoas eram pequenas recompensas, como comida e bebida."
        break
        case 2:
            texto = "Na lista das profissões que não existem mais, uma das mais interessantes, sem dúvida alguma, é a de despertador humano. Essa profissão surgiu na Europa durante a Revolução Industrial. Um das formas de bater na janela do cliente era lançando ervilhas com um canudinho."
        break
        case 3:
            texto = "O arquipélago japonês é composto por milhares de ilhas, mas as quatro maiores (Honshu, Hokkaido, Kyushu, Shikoku) concentram a maior parte da população e das atividades. Há também regiões montanhosas, muitas ilhas costeiras, e variações de altitude que influenciam o clima local."
        break
    }
}