let notas = []
while (true){
    let nota = parseInt(prompt("Ingrese una nota"))
    if (nota >= 0 && nota <= 5){
        notas.push(nota)
    } else {
        alert("Valor invalido")
    }

    if (notas.length === 5){
        break
    }
}

promedio = () =>{
    console.log(notas)
    sum = 0
    for (i in notas){
        sum += notas[i]
    }

    return sum / notas.length
}

alert(`El promedio final es de: ${promedio()}`)