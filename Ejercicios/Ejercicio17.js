esfera = (r = parseInt(prompt("Ingrese el radio de la esfera"))) =>{
    return (4/3) * Math.PI * Math.pow(r, 3)
}

alert(`El volumen de la esfera es de ${esfera()}`)