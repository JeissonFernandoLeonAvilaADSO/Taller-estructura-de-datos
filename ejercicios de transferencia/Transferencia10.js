function piramide(numPisos = parseInt(prompt("Cuantos pisos desesa ingresar"))) {
    for (let i = 0; i < numPisos; i++) {
        let piso = '';
        for (let j = 0; j < numPisos - i - 1; j++) {
            piso += ' ';
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            piso += '*';
        }
        console.log(piso);
    }
}; piramide()

