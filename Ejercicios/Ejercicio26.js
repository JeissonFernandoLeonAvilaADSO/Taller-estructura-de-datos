conversion = (c = parseInt(prompt("Ingrese una cantidad de grados centigrados"))) =>{
    return ((9/5) * c ) + 32
}

alert(`el resultado en grados Fahrenheit:  ${conversion()}`)