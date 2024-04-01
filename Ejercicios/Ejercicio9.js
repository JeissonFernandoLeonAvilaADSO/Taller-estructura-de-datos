let edad = prompt("Ingrese su edad")
let pago

switch (true) {
    case edad < 4 && edad >= 0:
        pago = 0
        break;

    case edad >= 4 && edad < 18:
        pago = 4
        break;

    case edad >= 18:
        pago = 10
        break;
        
    default:
        alert("Invalido")
        break;
}

alert(`El valor a pagar es de ${pago}`)
