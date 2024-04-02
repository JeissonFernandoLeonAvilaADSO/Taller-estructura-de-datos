
let conversion = (tipo1 = parseInt(prompt("Que moneda base desea convertir: 1. pesos ---  2. Dolares  ---  3. Euros")), tipo2 = parseInt(prompt("hacia que moneda desea convertir: 1. pesos ---  2. Dolares  ---  3. Euros"))) => {
    switch (true) {
        case tipo1 === 1:
            pesos = parseInt(prompt("Ingrese la cantidad de pesos que desea convertir"))
            switch (true) {
                case tipo2 === 2:
                    alert(`El valor de conversion de ${pesos} pesos a Dolares es de ${pesos * 0.00026}`)
                    break
                case tipo2 === 3:
                    alert(`El valor de conversion de ${pesos} pesos a Euros es de ${pesos * 0.00024}`)
                    break
            
                default:
                    alert(`El valor de conversion de ${pesos} pesos a pesos es de ${pesos}`)
                    break
            }

        case tipo1 === 2:
            Dllr = parseInt(prompt("Ingrese la cantidad de dolares que desea convertir"))
            switch (true) {
                case tipo2 === 1:
                    alert(`El valor de conversion de ${Dllr} dolares a pesos es de ${Dllr * 3800}`)
                    break
                case tipo2 === 3:
                    alert(`El valor de conversion de ${Dllr} dolares a euros es de ${Dllr * 0.93}`)
                    break
            
                default:
                    alert(`El valor de conversion de ${Dllr} dolares a dolares es de ${Dllr}`)
                    break
            }

        case tipo1 === 3:
            Eur = parseInt(prompt("Ingrese la cantidad de euros que desea convertir"))
            switch (true) {
                case tipo2 === 1:
                    alert(`El valor de conversion de ${Eur} euros a pesos es de ${Eur * 4100}`)
                    break

                case tipo2 === 2:
                    alert(`El valor de conversion de ${Eur} euros a dolares es de ${Eur * 1.08}`)
                    break
            
                default:
                    alert(`El valor de conversion de ${Eur} euros a euros es de ${Eur}`)
                    break
            }

        case tipo2 <= 0 || tipo2 > 3: 
            alert("Seleccion de opcion invalida")
            break
    }
}; conversion()

