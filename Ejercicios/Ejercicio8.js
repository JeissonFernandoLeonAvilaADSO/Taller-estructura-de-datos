let puntosEmpleado = 0.0
let dineroEmpealdo = 2400

for (let i = 0; i < 2; i++){
    console.log(puntosEmpleado)
    console.log(dineroEmpealdo)    

    while (true){
        puntosAdicionales = parseFloat(prompt("Ingrese los puntos del nivel actual"))
        if (puntosAdicionales === 0.0 || puntosAdicionales === 0.4 || puntosAdicionales >= 0.6){
            puntosEmpleado += puntosAdicionales
            dineroEmpealdo += 2400 + (2400 * puntosAdicionales)
            break
        } else {
            alert("Ingrese un valor entre las siguiente opciones (Inaceptable 0.0 --- Aceptable 0.4 --- Meritorio 0.6 o más)")
        }
    }
        
    if (i != 0){
        if(!(confirm(`Desea avanzar al siguiente nivel? (Nivel actual ${i + 1}/10)`))){
            break
        }
    }
    console.log(i)
}

alert(`Puntos del empleado: ${puntosEmpleado} --- Dinero del empleado: ${dineroEmpealdo}`)