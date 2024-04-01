exp = (a, b, c) => {
    R = (a+7*c) / (b+2-a) + 2*b
    return R
}

let a = prompt("Digite el valor a")
let b = prompt("Digite el valor b")
let c = prompt("Digite el valor c")

alert(`El resultado de la expresion es de ${exp(a, b, c)}`)