minutos = (mins = parseInt(prompt("Ingrese cuantos minutos gasto en la llamada"))) => {
    let pago = 355 * mins
    R = pago + (pago * 0.20)
    return R
}

alert(`Usted debe un total de: ${minutos()}`)