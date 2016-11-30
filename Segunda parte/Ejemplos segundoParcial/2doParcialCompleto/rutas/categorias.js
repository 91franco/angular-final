var express = require('express');
var router = express.Router();//{mergeParams:true}


router.get('/categorias', (req, res, next) => {
     req.db
    .find({},{'categoria':1,'_id':0})
    .toArray((err, data) => {
        res.json(data);
    });
});

router.get('/categorias/:categoriaBuscada', (req, res, next) => {
     req.db
    .find({'categoria.nombre':req.params.categoriaBuscada},{'categoria':1,'_id':0})
    .toArray((err, data) => {
        res.json(data);
    });
});

router.get('/categorias/stock/menor/:stockMenorBuscado', (req, res, next) => {
    req.db
    .find({'stock':{$lt:parseInt(req.params.stockMenorBuscado)}},{'categoria':1,'_id':0})
    .toArray((err, data) => {
        res.json(data);
    });
});


module.exports = router;