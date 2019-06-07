const express = require("express");
const app = express();
const hbs = require("hbs");

require("./hbs/helpers");

const port = process.env.PORT || 3000; // process.env.PORT localmente no existe, en ese caso utiliza el puerto 3000

app.use(express.static(__dirname + "/public")); // Todo lo que esté en el folder /public será de dominio publico

// Express hbs engine
hbs.registerPartials(__dirname + "/views/parciales");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    // Cualquier petición get renderizará el home
    res.render("home", {
        nombre: "kevin vega"
    }); // <-- renderiza el archivo home.hbs
});

app.get("/about", (req, res) => {
    res.render("about"); // <-- renderiza el archivo home.hbs
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});