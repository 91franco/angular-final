var express = require('express');
var router = express.Router();//{mergeParams:true}

router.get('/productos', (req, res, next) => {

    req.db
    .find()
    .toArray((err, data) => {
        res.json(data);
    });
});

router.get('/productos/marca/:marcaBusqueda', (req, res, next) => {
    //en el metodo find 'marca' es el nombre del campo de la base de datos
    //y req.params.marca es el dato que le paso en el get :marcaBusqueda
    req.db
    .find({'marca':req.params.marcaBusqueda})
    .toArray((err, data) => {
        res.json(data);
    });
});

router.get('/productos/precio/mayor/:precioBusqueda', (req, res, next) => {
    req.db
    .find({'precio':{$gt:parseInt(req.params.precioBusqueda)}})
    .toArray((err, data) => {
        res.json(data);
    });
});

router.get('/productos/stock/menor/:cantidadBusqueda', (req, res, next) => {
    req.db
    .find({'stock':{$lt:parseInt(req.params.cantidadBusqueda)}})
    .toArray((err, data) => {
        res.json(data);
    });
});



router.post('/productos/cargar', (req, res, next) => {
    
    req.db
    .insert(req.body);   
});

module.exports = router;