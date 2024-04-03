let cadena = prompt("Ingrese una cadena")
let verificacion = (cadena) => {
  let cont = 0;
  cadena = cadena.toLowerCase();
  if(cadena.length <= 3) { return 1; } 
  cadena = cadena.replace(/(?:[^laeiouáéíóúü]es|ed|[^laeiouáéíóúü]e)$/, '');
  cadena = cadena.replace(/^y/, '');
  return cadena.match(/[aeiouáéíóúü]{1,2}/g).length;
};console.log(`Hay ${verificacion(cadena)} sílabas en la cadena (${cadena})`);
