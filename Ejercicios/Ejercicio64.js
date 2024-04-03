
let numero = parseInt(prompt("Por favor, ingresa un número entero positivo:"))
let impares = ""

for (let i = 1; i <= numero; i++) {

  if (i % 2 !== 0) {
    impares += i
    if (i < numero) {
      impares += ", "
    }
  }
}

// Muestra los números impares separados por coma
alert(`Números impares hasta ${numero}: ${impares}`)
