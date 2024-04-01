suma = (a, b) => {
    R = a + b
    return R
}

resta = (a, b) => {
    R = a - b
    return R
}

division = (a, b) => {
    R = a / b
    return R
}

let elec = parseInt(prompt("Elija una opcion: 1. sumar --- 2. restar --- 3. dividir"))
let val1 = parseInt(prompt("Ingrese el primer valor"))
let val2 = parseInt(prompt("Ingrese el segundo valor"))

switch (elec) {
    case 1:
        alert(`El resultado de sumar (${val1} + ${val2}) es ${suma(val1, val2)}`)
        break;

    case 2:
        alert(`El resultado de restar (${val1} - ${val2}) es ${resta(val1, val2)}`)
        break;

    case 3:
        alert(`El resultado de dividir (${val1} / ${val2}) es ${division(val1, val2)}`)
        break;

    default: 
        alert("No se ha ingresado una operacion valida")
        break;
}