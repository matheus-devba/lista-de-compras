import { data } from "./criar-item-da-lista.js"

export const editarItem = (elemento) => {
    data()
    let novoItem = prompt("Digite o novo nome do item: ")

    if (novoItem != null && novoItem.trim() != "") {
        const itemTexto = elemento.querySelector("#item-titulo")
        itemTexto.textContent = novoItem


        const estavaComprado = elemento.querySelector(".input-checkbox").checked

        if (estavaComprado) {
            elemento.querySelector(".input-checkbox").checked = true
            elemento.querySelector(".checkbox-customizado").classList.add("checked")
            itemTextoAtualizado.style.textDecoration = "line-through"
        }
        let novaData = data()
        let dataAtual = elemento.querySelector(".texto-data")
        dataAtual.textContent = novaData

       
        
    }

}