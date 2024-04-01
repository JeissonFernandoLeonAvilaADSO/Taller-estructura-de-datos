/*
Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo y el 
nombre, el grupo A está formado por las mujeres con un nombre anterior a la M y los 
hombres con un nombre posterior a la N y el grupo B por el resto, escribir un programa que 
pregunte al usuario su nombre y sexo y muestre por pantalla el grupo al que corresponde
*/

let grupoA = []
let grupoB = []

let cant = prompt("Cuantos alumnos desea registrar")


for (let i = 0; i < cant; i++){
    let alumno = {
        nombre: "",
        edad: "",
        sexo: ""
    }

    alumno.nombre = prompt(`Ingres el nombre del alumno (${i+1})`).toLowerCase()
    alumno.edad = prompt(`Ingres la edad del alumno (${i+1})`)
    alumno.sexo = prompt(`Ingrese el sexo del alumno (${i+1}) [Hombre - Mujer]`).toLowerCase()


    if (/^[a-zA-Z]+$/.test(alumno.nombre) && /^[0-9]+$/.test(alumno.edad)) {
        if (/[a-m]/i.test(alumno.nombre.charAt(0)) && alumno.sexo === "mujer") {
            grupoA.push(alumno);

        } else if (/[n-z]/i.test(alumno.nombre.charAt(0)) && alumno.sexo === "hombre") {
            grupoA.push(alumno);

        } else {
            grupoB.push(alumno);

        }
    } else {
        alert("Valores inválidos");

    }
    
}

console.log(grupoA)
console.log(grupoB)
