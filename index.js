
var http = require('http');
var server = http.createServer((req,res) =>{
    res.end("fefe");
});

//ejercicio 1

/* function saludar() {
    const date = new Date();
    let hour = date.getHours();

        if(hour >= 6 && hour <= 12){
            console.log("Buenos dias!");
        }else if(hour >= 13 && hour <= 19){
            console.log("Buenas tardes");
        }else {
            console.log("Buenas noches");
        }
};


saludar(); */

//ejercicio 2

/* var num = Math.random();
var num2 = Math.random();
var num3 = Math.random();
var num4 = Math.random();

let objeto = {
    id: Math.floor(num*10),
    title: "Producto " + Math.floor(num2*10),
    price: num3*10000, 
    thumbnail: "Foto " + Math.floor(num4*10)
}

console.log(objeto); */

server.listen(8080, ()=>{
    console.log(`Servidor corriendo en el puerto ${server.address().port}` );
});


