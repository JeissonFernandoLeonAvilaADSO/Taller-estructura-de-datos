promFn = (parc1 = parseInt(prompt("Ingrese el valor del parcial 1")), parc2 = parseInt(prompt("Ingrese el valor del parcial 2")), parc3 = parseInt(prompt("Ingrese el valor del parcial 3")), exmFn = parseInt(prompt("Ingrese el valor del examen final")), tbrFn = parseInt(prompt("Ingrese el valor del trabajo final"))) =>{
    return (((parc1 + parc2 + parc3) / 3) * 0.55) + (exmFn * 0.3) + (tbrFn * 0.15)
}
alert(`El promedio final es de: ${promFn()}`)