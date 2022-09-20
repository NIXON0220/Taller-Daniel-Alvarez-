function calcularValor(dias){
    let valor = 75000;
    let subtotal = dias * valor;
    return subtotal;

}

function descuento(subtotal){
    let descuento = 0;
    if (subtotal > 100000) {
        descuento = subtotal * 0.1;
    }
    return descuento;
}