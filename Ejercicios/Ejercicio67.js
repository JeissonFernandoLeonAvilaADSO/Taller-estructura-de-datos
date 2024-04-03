const altura = parseInt(prompt("ingresa un número entero positivo para la altura del triángulo:"));

for (let i = 1; i <= altura; i++) {
  let linea = "";
  for (let j = 1; j <= i; j++) {
    linea += "*";
  }
  console.log(linea);
}
