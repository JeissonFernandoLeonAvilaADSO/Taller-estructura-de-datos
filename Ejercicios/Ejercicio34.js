
let radio = parseFloat(prompt("Ingrese el radio del depósito (en metros):"))
let altura = parseFloat(prompt("Ingrese la altura del depósito (en metros):"))
let caudalLitrosPorSegundo = parseFloat(prompt("Ingrese el caudal (en litros por segundo):"))

let volumen = Math.PI * Math.pow(radio, 2) * altura
let tiempoSegundos = volumen / caudalLitrosPorSegundo
let tiempoMinutos = tiempoSegundos / 60

alert(`El tiempo estimado para llenar el depósito es de ${tiempoMinutos.toFixed(2)} minutos.`)