var express = require('express');
var router = express.Router();//{mergeParams:true}

router.get('/categorias/stock/menor/:cantidadBusqueda', (req, res, next) => {
    req.db
    .find({'stock':{$lt:parseInt(req.params.cantidadBusqueda)}},{'categoria':1,'_id':0})
    .toArray((err, data) => {
        res.json(data);
    });
});


module.exports = router;