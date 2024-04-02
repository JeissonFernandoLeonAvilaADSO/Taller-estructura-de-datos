
let fraseInvertida = (frase = prompt("Que frase me representa como programador")) => {
    console.log(frase)
    nuevaCadena = ""
    for (i = frase.length - 1; i >= 0; i--){
        nuevaCadena += frase.charAt(i)
    }
    return nuevaCadena
}
console.log(fraseInvertida())