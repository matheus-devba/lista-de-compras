import { verificarListaVazia } from "./verificar-lista-vazia.js"

const listaDeCompras = document.getElementById("lista-de-compras")

const excluirItem = (elemento) => {
    let comfirmacao = confirm("Tem certeza que deseja excluir esse item?")

    if (comfirmacao) {
        elemento.remove()

        verificarListaVazia(listaDeCompras)

    }
}

export {excluirItem}