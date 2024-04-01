class Pizza {
    constructor(tipo, ingredientes) {
        this.tipo = tipo;
        this.ingredientes = ingredientes;
    }

    get obtenerTipo() {
        return this.tipo;
    }

    get obtenerIngred() {
        return this.ingredientes;
    }
}

let eleccion = parseInt(prompt("¿Qué tipo de pizza deseas? 1. Vegetariana -- 2. No vegetariana"))
let ingred

if (eleccion === 1){
    eleccion = "vegetariana"
} else {
    eleccion = "no vegetariana"
}

switch (eleccion) {
    case "vegetariana":
        let elecIngred = prompt("¿Qué tipo de ingrediente para pizza vegetariana deseas? 1. Pimiento --- 2. Tofu")
        switch (elecIngred) {
            case "1":
                ingred = "Pimiento"
                break
            case "2":
                ingred = "Tofu"
                break
        }
        break;

    case "no vegetariana":
        let elecIngredNoVeg = prompt("¿Qué tipo de ingrediente para pizza NO vegetariana deseas? 1. Peperoni --- 2. Jamón --- 3. Salmón")
        switch (elecIngredNoVeg) {
            case "1":
                ingred = "Peperoni"
                break
            case "2":
                ingred = "Jamón"
                break
            case "3":
                ingred = "Salmón"
                break
        }
        break
}

let pizza = new Pizza(eleccion, ingred)
console.log(pizza)
alert(`Su orden es de una pizza ${pizza.obtenerTipo} con el tipo de ingrediente ${pizza.obtenerIngred}`)

