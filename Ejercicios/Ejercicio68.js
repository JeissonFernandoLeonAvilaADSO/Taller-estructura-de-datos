
for (let i = 1; i <= 10; i++) {
    let fila = "";
    for (let j = 1; j <= 10; j++) {
      const producto = i * j;
      fila += `${producto}  `;
    }
    console.log(fila);
}
