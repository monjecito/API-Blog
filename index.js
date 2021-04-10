//CONEXION BD Y CREACION DEL SERVIDOR
'use strict'

var mongoose = require('mongoose');
var app=require('./app');
var port=3900;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('La conexión a la BD es correctaaaaaaaaa');

        //Creacion servidor y ponerme a escuchar las peticiones HTTP
        app.listen(port,()=>{
            console.log('Servidor corriendo en http://localhost:'+port); 
        });
    });