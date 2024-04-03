let verificacion = (cadena = prompt("Ingrese un numero con 4 a 6 caracteres")) => {
  if (cadena.length >= 4 && cadena.length <= 6) {
    if (/[^0-9]/g.test(cadena)) {
      console.log(false)
    } else {
      console.log(true)
    }
  } else {
    console.log("cantidad de caracteres incorrectos")
  }
}; verificacion()