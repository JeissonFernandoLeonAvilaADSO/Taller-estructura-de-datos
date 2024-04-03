let mayor = (cadena = []) => {
  cant = parseInt(prompt("Cuantos numeros desea ingresar"))
  numMayor = 0
  for (i = 0; i < cant; i++) {
    n = parseInt(prompt(`Ingrese el numero (${i})`))
    cadena.push(n)
  }
  for (item of cadena) {
    if (item > numMayor) {
      numMayor = item
    }
  }
  console.log(cadena)
  return numMayor
}; console.log(`El numero mayor de la lista es: ${mayor()}`)