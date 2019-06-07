const http = require("http");

// Creamos el servidor:
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    let salida = {
      nombre: "Kevin",
      edad: 23,
      url: req.url
    };

    res.write(JSON.stringify(salida));
    //res.write("Hola mundo");
    res.end();
  })
  .listen(8080); // <-- configuramos el puerto que estará escuchando.

console.log("Escuchando el puerto 8080");
