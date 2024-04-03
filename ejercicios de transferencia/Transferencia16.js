function convertirNumeroATexto(numero) {
  switch (numero) {
    case 0:
      return "cero";
    case 1:
      return "uno";
    case 2:
      return "dos";
    case 3:
      return "tres";
    case 4:
      return "cuatro";
    case 5:
      return "cinco";
    default:
      return "Número fuera de rango";
  }
}
console.log(convertirNumeroATexto(3));
console.log(convertirNumeroATexto(5));
console.log(convertirNumeroATexto(7));
