let edadMadre = (edadMadre = parseInt(prompt("Ingrese la edad de la madre")), edadHijo = parseInt(prompt("Ingrese la edad del hijo"))) => {
    while (true){
        
        if (edadMadre >= 14 && edadMadre <= 45 && edadMadre > edadHijo){
            return edadMadre - edadHijo
        } else {
            alert("La madre no esta en condiciones biologicas de tener un hijo")
            edadMadre = parseInt(prompt("Ingrese la edad de la madre"))
            edadHijo = parseInt(prompt("Ingrese la edad del hijo"))
        }
    }
}
alert(`La edad de la madre cuando tuvo a su hijo es de ${edadMadre()}`)