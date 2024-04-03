function longitud(cadena = prompt("Ingrese su cadena")) {
  if (cadena.length < 5) {
    alert("la cadena es menor a 5 caracteres")
  } else {
    alert("la cadena es mayor a 5 caracteres")
  }
};longitud()