
let entrada = prompt("Escribe algo (o escribe 'salir' para terminar):");

while (entrada.toLowerCase() !== "salir") {
  console.log(entrada);
  entrada = prompt("Escribe algo más (o escribe 'salir' para terminar):");
}

alert("Terminado");
