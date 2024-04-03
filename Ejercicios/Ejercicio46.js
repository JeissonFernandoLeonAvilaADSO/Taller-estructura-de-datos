let numMayor = (lista = []) => {
    let mayor = 0
    lista.push(parseInt(prompt("Ingrese el primer valor")))
    lista.push(parseInt(prompt("Ingrese el segundo valor")))
    lista.push(parseInt(prompt("Ingrese el tercer valor")))
    for (item of lista){
         if (item > mayor){
            mayor = item
         }
    }
    return mayor
}
alert(`El numero mayor es ${numMayor()}`)