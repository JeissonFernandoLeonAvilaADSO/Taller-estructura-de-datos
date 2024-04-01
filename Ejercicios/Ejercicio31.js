distancia = (x1 = parseFloat(prompt("Ingrese el valor x del punto 1")), y1 = parseFloat(prompt("Ingrese el valor y del punto 1")), x2 = parseFloat(prompt("Ingrese el valor x del punto 2")), y2 = parseFloat(prompt("Ingrese el valor y del punto 2"))) =>{
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
}

alert(`La distancia entre el punto A y el punto B es de ${distancia()}`)