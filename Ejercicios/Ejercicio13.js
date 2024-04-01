let sum = 0
let i = 0
while (i < 4){
    let n = parseInt(prompt(`Ingrese el numero del valor(${i + 1})`))
    sum += n
    i++
}

alert(`La media de la cantidad de numeros ingresados (${i}) es de ${sum / i}`)