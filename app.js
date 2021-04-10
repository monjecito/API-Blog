'use strict'

//Carga de modulos de NODE para crear servidor
var express = require('express');
var bodyparser = require('body-parser');

//Ejecutar express
var app = express();

//Cargar ficheros de rutas
var article_routes = require('./routes/article');

//Cargar Middlewares
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Añadir prefijos a las rutas
app.use('/api', article_routes);

//Ruta o metodo de prueba
app.get('/probando', (req, res) => {
    console.log('Hola mundo');

    return res.status(200).send({
        nombre: 'API Rest del Blog',
        autor: 'Diego Monje'
    });
});
//Exportar modulo(fichero actual)
module.exports = app;
