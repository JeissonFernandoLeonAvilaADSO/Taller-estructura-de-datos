let cadena = prompt("Ingrese un texto")
let letra = prompt("Ingrese la letra que desea encontrar (si se ingresa mas de una letra se tomara solo la primera)")
cant = 0
for (let i = 0; i < cadena.length; i++){
    if (cadena.charAt(i) === letra.charAt(0)){
        cant++
    }
}
alert(`se encontraron ${cant} de letras (${letra.charAt(0)})`)