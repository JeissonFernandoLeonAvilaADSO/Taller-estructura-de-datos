let pass = prompt("Compruebe su contraseña, esta debe tener entre 8 y 12 caracteres, y al menos una mayúscula, una minúscula, y un dígito.")
let i = 0
let confirm
while(true){
    if (i != 0){
        pass = prompt("Digite otra contraseña, recuerde que debe tener entre 8 y 12 caracteres, y al menos una mayúscula, una minúscula, y un dígito.")
    }
    console.log(pass)
    console.log(pass.length)
    if (pass.length >= 8 && pass.length <= 12){
        console.log("verificacion 1 completa")
        if(/[A-Z]/.test(pass)){
            console.log("verificacion 2 completa")
            if(/[a-z]/.test(pass)){
                console.log("verificacion 3 completa")
                if(/[0-9]/.test(pass)){
                    console.log("verificacion 4 completa")
                    alert("Felicidades, su contraseña es segura")
                    alert(`contraseña: ${pass} --- Intentos: ${i + 1}`)
                    break
                } else {
                    alert("Su contraseña debe tener al menos un digito(numero)")
                }
            } else {
                alert("Su contraseña debe tener al menos una minuscula")
            }
        } else {
            alert("Su contraseña debe tener al menos una mayuscula")
        }
    } else {
        alert("Su contraseña debe tener entre 8 y 12 caracteres")
    }
    i++
}