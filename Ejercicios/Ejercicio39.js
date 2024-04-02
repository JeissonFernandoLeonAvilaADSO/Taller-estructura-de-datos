const precio = parseInt(prompt("Estableza un precio por m^2"))
let calcular = (tam = parseFloat(prompt("Ingrese el tamaño del cuadro (Se tomara en m^2)"))) => precio * tam
alert(`El total a pagar por la pintura es de $${calcular().toFixed(2)}`)