consumoUsuario = parseFloat(prompt("Ingresa el monto del consumo:"))
    const limiteDescuento = 130000;
    if (consumo > limiteDescuento) {
        let totalConDescuento = consumo - (consumo * 0.15);
        alert(`Total a pagar con descuento: $${totalConDescuento.toFixed(2)}`)
    } else {
        alert(`Total a pagar sin descuento: $${consumo.toFixed(2)}`)
    }