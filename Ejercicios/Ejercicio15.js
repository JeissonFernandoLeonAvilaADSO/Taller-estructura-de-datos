area = (r) => {
    let R = Math.PI * Math.pow(r, 2)
    return R
}

long = (r) => {
    let R = 2 * Math.PI * r
    return R
}
radio = parseFloat(prompt("Ingrese el radio de la cirunferencia"))

alert(`La longituda del circulo es de (${long(radio)}) y el radio del circulo es de (${area(radio)})`)

