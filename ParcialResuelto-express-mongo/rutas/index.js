var express = require('express');

var router = express.Router();


router.get('/users',(req,res,next) =>{
	console.log("users");
	req.json();
	
	.db
	.find()
	.toArray(err,data) =>{
		res.json(data);
	});


});


module.exports = router;