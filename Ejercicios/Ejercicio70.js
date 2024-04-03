
const contraseñaGuardada = prompt("Por favor, ingresa la contraseña:")
let contraseñaIngresada = prompt("Por favor, ingresa la anteriormente digitada")

while (contraseñaIngresada !== contraseñaGuardada) {
  contraseñaIngresada = prompt("Contraseña incorrecta. Inténtalo de nuevo:")
}
alert("Contraseña correcta");
