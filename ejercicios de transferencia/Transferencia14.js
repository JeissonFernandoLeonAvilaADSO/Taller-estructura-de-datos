let inverso = (lista = []) => {
  cant = parseInt(prompt("Ingrese una cantidad de numeros a ingresar"))
  listaInversa = []
  for (i = 0; i < cant; i++){
    lista.push(num = parseInt(prompt(`Ingrese el numero ${i + 1}`)))
  }

  for (item of lista) {
      if (item >= 0) {
      listaInversa.push(item - (item * 2))
    } else {
      listaInversa.push(item - (item * 2))
    }
  }

  console.log(lista)
  console.log(listaInversa)
}; console.log(inverso())
