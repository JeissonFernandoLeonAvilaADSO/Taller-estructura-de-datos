function calcularPago(horasTrabajadas = parseFloat(prompt("Ingresa el total de horas trabajadas:")), tipoEmpleado = prompt("¿Es el empleado de planta o administrativo?").toLowerCase()) {
    const tarifaPlanta = 20000;
    const tarifaAdministrativo = 10000;

    let pagoTotal = 0;

    if (tipoEmpleado === 'planta') {
        pagoTotal = horasTrabajadas * tarifaPlanta;
    } else if (tipoEmpleado === 'administrativo') {
        pagoTotal = horasTrabajadas * tarifaAdministrativo;
    } else {
        return "Tipo de empleado no válido. Debe ser 'planta' o 'administrativo'.";
    }

    return `El pago total para un empleado ${tipoEmpleado} por ${horasTrabajadas} horas trabajadas es: $${pagoTotal.toFixed(2)}`;
}; console.log(calcularPago());