const listaCompradosContainer = document.getElementById("container-comprados");

const mensagemListaVazia = document.getElementById ("mensagem-lista-vazia")
export function verificarListaVazia (lista) {
    if (lista.childElementCount === 0) {
        mensagemListaVazia.style.display = "block"
    }else {
        mensagemListaVazia.style.display = "none"
        listaCompradosContainer.style.display = "block"

    }
}