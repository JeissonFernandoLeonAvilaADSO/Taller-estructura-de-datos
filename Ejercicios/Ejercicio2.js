let contra1 = prompt("Registre su contraseña")
let param = /^[0-9a-z]+$/i

if (param.test(contra1)){
    let contra2 = prompt("Verifique su contraseña")
    if(contra2.includes(contra1)){
        alert("Contraseña correcta")
    }else {
        alert("Contraseña incorrecta")
    }
} else {
    alert("Solamente ingresar alfanumericos del (0) al (9) y de la (A) a la (Z)")
}





