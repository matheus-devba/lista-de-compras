const checkbox = document.getElementById("checkbox");
const containerSugestoes = document.getElementById("lista-sugestoes");
const botaoEnviar = document.getElementById("adicionar-botao");
const inputSugestao = document.getElementById("input-item");
const mensagemInicial = document.getElementById("mensagem-inicial");

// Função para verificar e atualizar a exibição da mensagem inicial
function atualizarMensagemInicial() {
    if (containerSugestoes.childElementCount > 1) { // > 1 porque o `<p>` inicial é um filho da `ul`
        mensagemInicial.style.display = "none";
    } else {
        mensagemInicial.style.display = "block";
    }
}

// Inicializa o estado da mensagem
atualizarMensagemInicial();

checkbox.addEventListener("click", (e) => {
    if (checkbox.checked) {
        console.log("Checkbox clicado!");
    }
});

botaoEnviar.addEventListener("click", (e) => {
    e.preventDefault();

    const sugestao = inputSugestao.value.trim();
    if (sugestao === "") {
        alert("Por favor, insira uma sugestão!");
        return;
    }

    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");

    containerItemLista.classList.add("lista-item");
    containerItemLista.innerHTML = `<h3>${sugestao}</h3>`;

    itemDaLista.appendChild(containerItemLista);
    containerSugestoes.appendChild(itemDaLista);

    // Atualiza a visibilidade da mensagem inicial
    atualizarMensagemInicial();

    // Limpa o campo de entrada
    inputSugestao.value = "";
});
