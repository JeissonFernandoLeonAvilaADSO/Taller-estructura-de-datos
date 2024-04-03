let cantidadInvertida = parseFloat(prompt("Ingresa la cantidad a invertir (en pesos):"))
let tasaInteresAnual = parseFloat(prompt("Ingresa la tasa de interés anual (%):"))
let numeroAns = parseInt(prompt("Ingresa el número de años:"))
for (let i = 1; i <= numeroAns; i++) {
  const capitalObtenido = cantidadInvertida * Math.pow(1 + tasaInteresAnual / 100, i)
  alert(`Año ${i}: Capital obtenido = $${capitalObtenido.toFixed(2)}`)
}
