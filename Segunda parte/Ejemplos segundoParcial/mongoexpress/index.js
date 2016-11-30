var MongoClient = require( 'mongodb' ).MongoClient;
var express = require('express');
var app = express();
var rutas = require('./rutas');
var productos = require('./rutas/productos');
var categorias = require('./rutas/categorias');
var bodyParser = require('body-parser');
var cors = require('cors');
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());
app.use(cors());
MongoClient.connect('mongodb://localhost:27017/2doParcial', (err, db) => {
    if (err)
        throw err;

    app.use((req, res, next) => {
        req.db = db.collection('productos');
        next();
    });

    app.use((req,res,next) => {
        var date = Date();
        console.log('Fecha:',date);
        next();
    })

    app.use('/',rutas);
    app.use('/',productos);
    app.use('/',categorias);
    // app.get('/', (req, res, next) => {
    //     res.json({msj: "hola"});
    // });

    app.listen(3333, ()=>{
        console.log('Servidor iniciado...');
    });
});
