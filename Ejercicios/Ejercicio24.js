let parametro = /\d*\./

cadena = ["2.3e-1", "-3e2", "23", "3.2", "23000.3"]
cadenaFlot = []
for (i in cadena){
    console.log(cadena[i])
    if (parametro.test(cadena[i])){
        console.log("correcto")
        cadenaFlot.push(parseFloat(cadena[i]))
    } else {
        console.log("incorrecto")
    }
}
console.log(cadenaFlot)