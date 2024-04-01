velocidad = (km, mins) => {
    seg = mins * 60
    met = km * 1000
    vel = met / seg
    return vel
}

kmt = parseInt(prompt("Ingrese cuantos kilometros recorrio el proyectil"))
mints = parseInt(prompt(`Ingrese en cuantos minutos recorrio ${kmt}km`))

alert(`El proyectil iba a una velocidad de ${velocidad(kmt, mints)}m/s`)