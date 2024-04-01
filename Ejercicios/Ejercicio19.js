r = parseInt(prompt("Ingrese el radio del cilindro"))
a = parseInt(prompt("Ingrese la altura del cilindro"))
areaCir = (r, a) =>{
    return 2 * Math.PI * r * (a + r)
}

volCir = (r, a) =>{
    return Math.PI * Math.pow(r, 2) * a
}

alert(`el volumen del cilindro es de (${volCir(r, a)}) y el area del cilindro es de (${areaCir(r, a)})`)