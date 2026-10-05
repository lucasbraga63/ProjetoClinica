const cardsServico = document.querySelectorAll(".card")

cardsServico.forEach((card) => {
    card.addEventListener("click", () => {
        const informacoesCard = card.querySelector(".InformacaoCard")

        if (informacoesCard.style.display == "none") {
            informacoesCard.style.display = "flex"
        } else {
            informacoesCard.style.display = "none"
        }
    })
})