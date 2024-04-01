volEpsi = (a = parseInt(prompt("Ingrese el valor de la altura")), b = parseInt(prompt("Ingrese el valor de la base")), c = parseInt(prompt("Ingrese el valor del ancho"))) => {
    return (4/3) * Math.PI * a * b * c
}

alert(`el volumen del epsiloide es de (${volEpsi(a, b, c)})`)