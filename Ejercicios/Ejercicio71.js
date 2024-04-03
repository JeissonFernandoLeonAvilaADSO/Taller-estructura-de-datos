// Pide al usuario un número entero positivo
const numero = parseInt(prompt("Por favor, ingresa un número entero positivo:"))

function esPrimo(num) {
  if (num <= 1) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

if (esPrimo(numero)) {
  alert(`${numero} es un número primo.`)
} else {
  alert(`${numero} no es un número primo.`)
}
