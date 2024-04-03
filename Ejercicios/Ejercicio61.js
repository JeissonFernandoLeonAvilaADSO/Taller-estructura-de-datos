
const cantidadAlumnos = parseInt(prompt("Ingresa la cantidad de alumnos:"))
let notaAlta = 0
let notaBaja = 100
let cantidadMaximaNotas = 0
let cantidadA = 0
let cantidadB = 0
let cantidadC = 0
let cantidadD = 0

for (let i = 1; i <= cantidadAlumnos; i++) {
    const nota = parseFloat(prompt(`Ingresa la nota del alumno ${i}:`))
    if (nota > notaAlta) {
        notaAlta = nota
    }
    if (nota < notaBaja) {
        notaBaja = nota
    }
    if (nota === 100) {
        cantidadMaximaNotas++
    } else if (nota >= 90) {
        cantidadA++
    } else if (nota >= 80) {
        cantidadB++
    } else if (nota >= 70) {
        cantidadC++
    } else if (nota >= 60) {
        cantidadD++
    }
}

console.log(`Nota más alta: ${notaAlta}`)
console.log(`Nota más baja: ${notaBaja}`)
console.log(`Cantidad de alumnos con máxima nota (100): ${cantidadMaximaNotas}`)
console.log(`Cantidad de alumnos con calificación A: ${cantidadA}`)
console.log(`Cantidad de alumnos con calificación B: ${cantidadB}`)
console.log(`Cantidad de alumnos con calificación C: ${cantidadC}`)
console.log(`Cantidad de alumnos con calificación D: ${cantidadD}`)

