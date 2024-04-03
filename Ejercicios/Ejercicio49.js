let areaRect = (largo = parseFloat(prompt("Ingresa el largo del rectángulo:")), ancho = parseFloat(prompt("Ingresa el ancho del rectángulo:"))) => {
    if (largo > 0 && ancho > 0) {
        let area = largo * ancho;
        alert(`El área del rectángulo es: ${area}`)
    } else {
        alert("Los lados deben ser valores positivos.")
    }
};areaRect()