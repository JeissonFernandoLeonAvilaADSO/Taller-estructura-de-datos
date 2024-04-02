const libros = 10000, cuadernos = 7550, lapiceros = 5550
let cant1 = parseInt(prompt("Cuantos libros se vendieron en el dia"))
let cant2 = parseInt(prompt("Cuantos cuadernos se vendieron en el dia"))
let cant3 = parseInt(prompt("Cuantos lapiceros se vendieron en el dia"))
if (isNaN(cant1) || isNaN(cant2) || isNaN(cant3)){
    alert("Valores Invalidos")
} else {
    alert(`El monto total vendido entre los 3 productos es de $${(cant1 * libros) + (cant2 * cuadernos) + (cant3 * lapiceros)}`) 
}