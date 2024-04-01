let lista = []
let cant = parseInt(prompt("Cuantos productos desea agregar?"))

for (i = 0; i < cant; i++){
    producto = parseInt(prompt(`Ingrese el valor del producto ${i}`))

    if(/^[^a-zA-Z]+$/.test(producto)){
        lista.push(producto)
    } else {
        alert("Ingrese un valor de producto valido")
        i--
    }

}
console.log(lista)

let aplicarDescuento = () =>{
    lista[0] = lista[0] - (lista[0] * 0.05)
    lista[1] = lista[1] - (lista[1] * 0.05)
    lista[lista.length - 1] = lista[lista.length - 1] - (lista[lista.length - 1] * 0.02)
    lista[lista.length - 2] = lista[lista.length - 2] - (lista[lista.length - 2] * 0.02)
}

aplicarDescuento()
console.log(lista)
