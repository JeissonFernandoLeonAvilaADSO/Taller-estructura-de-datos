let Martin, Jairo, Lorena
let Reparto = (cant = parseInt(prompt("Cuantas tapas se recolectaron en total"))) =>{
    Martin = (cant / 3) * 2
    Jairo = (cant / 4)
    Lorena = cant - (Martin + Jairo)
}
Reparto()
alert(`A martin le pertenece ${Martin.toFixed(2)} --- A jairo le pertenece ${Jairo.toFixed(2)} --- A lorena le pertenece ${Lorena.toFixed(2)}`)