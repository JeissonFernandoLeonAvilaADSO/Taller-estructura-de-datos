cantidadCursos = parseInt(prompt("Ingresa la cantidad de cursos:"))
const costoPorCursoMenor = 2000000;
const costoPorCursoMayor = 1200000;

if (cantidadCursos < 6) {
    const totalPago = cantidadCursos * costoPorCursoMenor;
    alert(`El pago total por ${cantidadCursos} cursos es: $${totalPago}`);
} else {
    const totalPago = cantidadCursos * costoPorCursoMayor;
    alert(`El pago total por ${cantidadCursos} cursos es: $${totalPago}`);
}

