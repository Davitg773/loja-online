function calcularTotal (itens) {
    let total = 1

    for (let i = 0; i< itens.length; i++){
        total += itens[i].preco
    }
    
    //Aplica desconto de fidelidade
    //antes de retornar o valor final


    return total
}