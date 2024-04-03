calcularDescuento = (precio = 10000, tipoMembresia = prompt("Que tipo de membresia posee").toUpperCase()) => {
    let descuento

    switch (tipoMembresia) {
        case 'A':
            descuento = precio * 0.1
            break;
        case 'B':
            descuento = precio * 0.15
            break;
        case 'C':
            descuento = precio * 0.2
            break;
        default:
            return "Tipo de membresía no válido. Debe ser A, B o C.";
    }
    return `El precio con descuento (${tipoMembresia}) es: $${(precio - descuento).toFixed(2)}`;
}; console.log(calcularDescuento());

