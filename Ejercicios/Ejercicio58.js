function obtenerSignoZodiacal(mes = prompt("Ingresa el nombre del mes (en español):").toLowerCase) {
    if (mesMinusculas === "enero") {
        console.log("Tu signo zodiacal es Capricornio o Acuario.");
    } else if (mesMinusculas === "febrero") {
        console.log("Tu signo zodiacal es Acuario o Piscis.");
    } else if (mesMinusculas === "marzo") {
        console.log("Tu signo zodiacal es Piscis o Aries.");
    } else if (mesMinusculas === "abril") {
        console.log("Tu signo zodiacal es Aries o Tauro.");
    } else if (mesMinusculas === "mayo") {
        console.log("Tu signo zodiacal es Tauro o Géminis.");
    } else if (mesMinusculas === "junio") {
        console.log("Tu signo zodiacal es Géminis o Cáncer.");
    } else if (mesMinusculas === "julio") {
        console.log("Tu signo zodiacal es Cáncer o Leo.");
    } else if (mesMinusculas === "agosto") {
        console.log("Tu signo zodiacal es Leo o Virgo.");
    } else if (mesMinusculas === "septiembre") {
        console.log("Tu signo zodiacal es Virgo o Libra.");
    } else if (mesMinusculas === "octubre") {
        console.log("Tu signo zodiacal es Libra o Escorpio.");
    } else if (mesMinusculas === "noviembre") {
        console.log("Tu signo zodiacal es Escorpio o Sagitario.");
    } else if (mesMinusculas === "diciembre") {
        console.log("Tu signo zodiacal es Sagitario o Capricornio.");
    } else {
        console.log("Mes no válido. Ingresa un mes válido en español.");
    }
}; obtenerSignoZodiacal(mesIngresado);
