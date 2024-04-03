function calcularCompra(productos = [25000, 35000, 42000, 18000, 55000]) {
    const porcentajeIVA = 0.19
    let subtotal = 0

    for (const producto of productos) {
        subtotal += producto
    }

    let iva = subtotal * porcentajeIVA
    let total = subtotal + iva

    alert(`Subtotal: $${subtotal.toFixed(2)}`)
    alert(`IVA (19%): $${iva.toFixed(2)}`)
    alert(`Total: $${total.toFixed(2)}`)
}; calcularCompra()
