let inversa = (cadena = prompt("Ingrese la cadena")) => {
  cadInversa = ""
  for (i = cadena.length; i >= 0; i--) {
    cadInversa += cadena.charAt(i)
  }
  console.log(cadena)
  console.log(cadInversa)
}; inversa()