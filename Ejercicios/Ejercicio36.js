elec = prompt("Desea calcular por proporcion de: 1. Harina   2. Cacao")
cant = parseInt(prompt("Cuantos gramos de proporcion desea agregar"))
switch (elec) {
    case "1":
        harina = cant
        cacao = (cant / 10)
        alert(`se calcularon que por ${harina} gramos de harina se necesitan ${cacao}`)
        break;

    case "2":
        cacao = cant
        harina = (cant * 10)
        alert(`se calcularon que por ${cacao} gramos de cacao se necesitan ${harina}`)
        break;

    default:
        console.log(3)
}