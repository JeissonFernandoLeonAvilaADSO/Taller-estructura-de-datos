class Empleado{
    constructor(nombre, hrs, pagoHrs){
        this.nombre = nombre
        this.hrs = hrs
        this.pagoHrs = pagoHrs
    }

    get obtenerHoras(){
        return this.hrs
    }

    get obtenerPagoHoras(){
        return this.pagoHrs
    }
}

let empleado = new Empleado(prompt("Ingrese su nombre"), parseInt(prompt("Ingrese sus horas realizadas")), parseInt(prompt("Ingrese su pago por hora realizada")))
const pagoTotal = empleado.obtenerHoras * empleado.obtenerPagoHoras;
alert(`El pago total para ${empleado.nombre} es de $${pagoTotal}`);
console.log(empleado)