var express = require('express');
var router = express.Router();//{mergeParams:true}



router.get('/catalogo', (req, res, next) => {
    res.download("./pdf/catalogo.pdf");
});




module.exports = router;