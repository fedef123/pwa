const fs = require('fs');
const data = fs.appendFileSync('./texto.txt', "\n esto es nuevo contenido agregado al archivo de texto");
console.log(data);