let sum = (lista = []) => {
  suma = 0
  cant = parseInt(prompt("Ingrese la cantidad de numeros a registrar"))
  for (i = 0; i < cant; i++) {
    n = parseInt(prompt(`Ingrese el numero ${i + 1}`))
    lista.push(n)
  }

  for (numero of lista) {
    if (numero >= 0) {
      suma += numero
    }
  }
  return suma
}; console.log(`El resultado de la suma es de ${sum()}`)