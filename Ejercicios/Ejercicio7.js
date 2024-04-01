/*

los tramos impositivos para la declaración de la renta en un determinado país son:
a. entre 10000 y 20000 ---- 5%
b. entre 20000 y 35000 ---- 10%
c. entre 35000 y 60000 ---- 20%
d. más de 60000 ---- 45%
escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el tipo 
de impositivo que le corresponde.

*/

let renta = prompt("Ingrese su renta anual");
let total;

switch (true) {
    case renta >= 10000 && renta < 20000:
        total = renta + (renta * 0.05);
        alert(`Se le ha aplicado un impuesto del 5%, por lo que deberá pagar un total de ${total}`);
        break;

    case renta >= 20000 && renta < 35000:
        total = renta + (renta * 0.1);
        alert(`Se le ha aplicado un impuesto del 10%, por lo que deberá pagar un total de ${total}`);
        break;

    case renta >= 35000 && renta < 60000:
        total = renta + (renta * 0.2);
        alert(`Se le ha aplicado un impuesto del 20%, por lo que deberá pagar un total de ${total}`);
        break;

    case renta >= 60000:
        total = renta + (renta * 0.45);
        alert(`Se le ha aplicado un impuesto del 45%, por lo que deberá pagar un total de ${total}`);
        break;

    default:
        total = renta;
        alert(`No se le han aplicado impuestos. Su total es de ${total}`);
}


