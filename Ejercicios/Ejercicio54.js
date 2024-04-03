const lista = [10, 2, 3, 4, 5, 6];
let acum = lista[0];

for (let i = 1; i < lista.length - 1; i++) {
    if (lista[i - 1] >= lista[i]) {
        acum -= lista[i];
    } else {
        console.log("La operación no es posible realizarla");
        break;
    }
}
console.log(acum);
