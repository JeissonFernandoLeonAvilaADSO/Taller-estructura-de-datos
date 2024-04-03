function calcularArea() {
    let figura = prompt("¿Qué figura geométrica deseas calcular? (Escribe 'T' para triángulo o 'C' para círculo):").toLowerCase()
    if (figura === 't') {
        let base = parseFloat(prompt("Ingresa la longitud de la base del triángulo:"))
        let altura = parseFloat(prompt("Ingresa la altura del triángulo:"))
        let areaTriangulo = (base * altura) / 2
        alert(`El área del triángulo es: ${areaTriangulo}`)
    } else if (figura === 'c') {
        let radio = parseFloat(prompt("Ingresa el radio del círculo:"))
        let areaCirculo = Math.PI * radio ** 2
        alert(`El área del círculo es: ${areaCirculo}`)
    } else {
        alert("Opción no válida. Por favor, ingresa 'T' para triángulo o 'C' para círculo.")
    }
}; calcularArea()


