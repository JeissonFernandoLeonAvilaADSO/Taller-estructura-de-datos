const numero = parseInt(prompt("Por favor, ingresa un número entero positivo:"))
let cuentaAtras = ""
for (let i = numero; i >= 0; i--) {
  cuentaAtras += i

  if (i > 0) {
    cuentaAtras += ", "
  }
}

alert(`Cuenta atrás hasta ${numero}: ${cuentaAtras}`)
