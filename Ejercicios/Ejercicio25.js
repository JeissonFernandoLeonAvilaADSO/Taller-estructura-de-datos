total = (precIni = parseInt(prompt("Ingrese el precio del producto"))) =>{
    return precIni - (precIni * 0.1)
}

alert(`El precio del producto con el descuento del 10% es de ${total()}`)