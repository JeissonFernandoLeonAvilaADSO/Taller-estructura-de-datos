/*
Escribir un programa que pida al usuario dos números y muestre por pantalla su división, si 
el divisor es cero el programa debe mostrar un error, se debe manejar mediante 
excepciones y el mensaje debe ser personalizado
*/    



try {
    let v1 = prompt("Ingrese un primer valor")
    let v2 = prompt("Ingrese un segundo valor")
    if(v2 <= 0){
        throw new Error("No se puede dividir por cero")
    } else {
        alert(`division entre ${v1}/${v2}`)

        alert(`resultado ${v1/v2}`)
    }

} catch (error) {
    console.error("Error:", error.message)
}

