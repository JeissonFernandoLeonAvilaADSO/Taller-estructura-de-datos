const input = 'texto con texto entre comillas "texto entre comillas" y también "comillas \\"escapadas\\"".';
console.log(input.match(/"((?:[^"\\]|\\.)*)"/g)); // ["texto entre comillas", "comillas \"escapadas\""]


