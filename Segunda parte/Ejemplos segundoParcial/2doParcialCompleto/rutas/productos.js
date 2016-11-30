var express = require('express');
var router = express.Router();//{mergeParams:true}



router.get('/productos', (req, res, next) => {
     req.db
     //para buscar sin parametros se pone find()
    .find()
    .toArray((err, data) => {
        res.json(data);
    });
});

router.get('/productos/marca/:marcaBusqueda', (req, res, next) => {
    req.db
    //en el metodo find 'marca' es el nombre del campo de la base de datos
    //y req.params.marca es el dato que le paso en el get :marcaBusqueda
    .find({'marca':req.params.marcaBusqueda})
    .toArray((err, data) => {
        res.json(data);
    });
});

router.get('/productos/precio/mayor/:precioMayorBuscado', (req, res, next) => {
    req.db
    //para buscar algo mayor se utiliza $gt
    //para que ande el $gt tenemos que hacer parseInt que transforma el parametro en int
    //para que ande con una funcion se debe poner todo dentro de {} por ejemplo {$gt:parseInt(req.params.precioMayorBuscado)}
    .find({'precio':{$gt:parseInt(req.params.precioMayorBuscado)}})
    .toArray((err, data) => {
        res.json(data);
    });
});

router.get('/productos/stock/menor/:stockMenorBuscado', (req, res, next) => {
    req.db
    //para buscar algo menor se utiliza $lt:
    //para que ande el $lt tenemos que hacer parseInt que transforma el parametro en int
    //para que ande con una funcion se debe poner todo dentro de {} por ejemplo {$lt:parseInt(req.params.precioMayorBuscado)}
    .find({'stock':{$lt:parseInt(req.params.stockMenorBuscado)}})
    .toArray((err, data) => {
        res.json(data);
    });
});

router.post('/productos/cargar', (req, res, next) => {
    req.db
    .insert(req.body);
});


module.exports = router;