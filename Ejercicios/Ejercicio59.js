function seleccionarJugadores(edad = parseInt(prompt("Ingrese su edad")), estatura = parseInt(prompt("Ingrese su estatura en centimetros")), peso = parseInt(prompt("Ingrese su peso en kilos"))) {
    if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
        alert("¡Felicidades! Eres apto para formar parte del equipo de baloncesto.")
    } else {
        alert("Lo siento, no cumples con los requisitos para la selección.")
    }
}; seleccionarJugadores()


