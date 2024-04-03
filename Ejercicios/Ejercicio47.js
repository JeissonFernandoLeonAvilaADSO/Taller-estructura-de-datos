
let lista = []
lista.push(parseInt(prompt("Ingrese el primer valor")))
lista.push(parseInt(prompt("Ingrese el segundo valor")))
lista.push(parseInt(prompt("Ingrese el tercer valor")))
let mayor = Math.max(...lista)
let menor = Math.min(...lista)

if (mayor === menor) {
    alert(`${mayor} y ${menor} son iguales`)
} else {
    alert(`El numero mayor es ${mayor} y el numero menor es ${menor}`)
}