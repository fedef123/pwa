const fs = require('fs');

fs.mkdir('./carpeta', error =>{
    if (error){
        console.log('error', error);
    }else{
        console.log('carpeta creada');
    };
});

const data = fs.readFileSync('./texto.txt',  'utf8');
console.log(data);