area = (b, a) => {
    R = b * a
    return R
}
base = parseInt(prompt("Ingrese la base"))
altura = parseInt(prompt("Ingrese la altura"))

alert(`El area del rectangulo es de ${area(base, altura)}`)