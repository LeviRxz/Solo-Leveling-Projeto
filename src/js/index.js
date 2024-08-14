
//pegar o elemento html dos botoes.
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

//indentificar o clique no botao
botoesCarrossel.forEach((botao, indice) => {
botao.addEventListener("click", () => {
    //desmarcar o botao anterior.
    desativarBotaoSelecionado();

    //marcar o botao selecionado.
    marcarBotaoSelecionado(botao);

    //esconder a imagem anterior.
    esconderImagemAtiva();

    //fazer aparecer a imagem correspondente ao clique.
    mostrarImagemDeFundo(indice);

    //esconder a informação anterior.
    esconderInformacoesAtivas();

    //mostrar informação do personagem selecionado.
    mostrarInformacoes(indice);
});
});

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
const informacoesAtiva = document.querySelector(".informacoes.ativa");
informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
const imagemAtiva = document.querySelector(".ativa");
imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
const botaoSelecionado = document.querySelector(".selecionado");
botaoSelecionado.classList.remove("selecionado");
}
