const express = require('express');
const port = 3002;

const bodyParser = require('body-parser');
const routes = require('./routes/routes')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app); //servidor con bodyParser

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`El servidor escucha en el puerto ${server.address().port}`);
});

app.get('/', function(req, res) {
    res.send('Una API basica desde Express');
});

app.get('/saludo', function(req, res) {
    res.send('Hola desdde la API');
});

app.get('/despedida', function(req, res) {
    res.send('Adios desdde la API');
});

app.listen(3000, function() {
    console.log('Aplicacion ejemplo, escuchando el puerto 3000!');
});
