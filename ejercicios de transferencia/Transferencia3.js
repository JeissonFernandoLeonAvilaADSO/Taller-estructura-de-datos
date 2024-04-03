function mayor(n1 = parseInt(prompt("Ingrese el primer valor")), n2 = parseInt(prompt("Ingrese el segundo valor"))) {
  if (n1 > n2) {
    return n1
  } else {
    return n2
  }
};alert(`El numero mayor es ${mayor()}`)