import { criarItemDaLista } from "./criar-item-da-lista.js";
import { verificarListaVazia } from "./verificar-lista-vazia.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");


export function adicionarItem(evento) {

    evento.preventDefault()
    if (item.value === "") {
        alert("Insira um item válido")
        return
    }
    const itemDaLista = criarItemDaLista(item.value)
    listaDeCompras.appendChild(itemDaLista)
    verificarListaVazia(listaDeCompras)
    item.value = ""
}
