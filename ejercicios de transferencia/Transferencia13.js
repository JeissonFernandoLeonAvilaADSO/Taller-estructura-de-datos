cadenaNueva = (cadena = prompt("Ingrese un texto")) => {
  r = ""
  for (i = 0; i < cadena.length; i++) {
    if (/[aeiou]/i.test(cadena.charAt(i))) {
      console.log("nada")
    } else {
      console.log(cadena.charAt(i))
      r += cadena.charAt(i)
    }
  }
  console.log(`cadema inicial: ${cadena}`)
  return r
}; console.log(`la cadena sin vocales: ${cadenaNueva()}`)