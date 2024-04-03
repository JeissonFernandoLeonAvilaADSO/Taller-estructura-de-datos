const notaEstudiante = parseFloat(prompt("Ingrese su nota en un rango de 0 a 10")); // Cambia la nota según tus necesidades

if (notaEstudiante >= 0 && notaEstudiante <= 10){
    if (nota >= 9.1 && nota <= 10) {
        alert("Excelente (A)")
    } else if (nota >= 8.1 && nota < 9) {
        alert("Muy bien (A)")
    } else if (nota >= 7.5 && nota < 8) {
        alert("Bien (A)")
    } else {
        alert("No Aprobado (NA)")
    }
} else {
    alert("la nota no esta dentro del rango permitido")
}


