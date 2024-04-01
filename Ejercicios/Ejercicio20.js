function resolverEcuacion(a, b, c) {
    const discriminante = b * b - 4 * a * c

    if (discriminante > 0) {
        const raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a)
        const raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a)
        return [raiz1, raiz2]
    } else if (discriminante === 0) {
        const raizUnica = -b / (2 * a)
        return [raizUnica]
    } else {
        return [] // No hay soluciones reales
    }
}

let a = parseInt(prompt("Ingrese el valor a"))
let b = parseInt(prompt("Ingrese el valor b"))
let c = parseInt(prompt("Ingrese el valor c"))

const raices = resolverEcuacion(a, b, c)
console.log("Raíces reales:", raices)
