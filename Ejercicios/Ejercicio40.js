let cant = parseInt(prompt("Cuantas personas desea entrevistar"))
let lista = []
for (i = 0; i < cant; i++){
    yrNac = parseInt(prompt("Ingrese el su año de nacimiento"))
    fechaAct = new Date()
    edad = fechaAct.getFullYear() - yrNac
    if (yrNac > fechaAct.getFullYear()){
        alert("No puede ser mayor que el año actual")
    } else {
        lista.push(edad)
        console.log(edad)
    }
}
console.log(lista)