var express = require('express');
var router = express.Router();
var Pregunta = require('../model/pregunta');
require('mongoose-query-random');

router.get('/', function(req, res, next) {

		/*Pregunta.find().random(10,true,function(err,data) {
			res.json(data);
		})*/
		Pregunta.find(function(err,data) {
			res.json(data);
		})
  	
});

router.post('/',function(req,res, next) {

	var p = new Pregunta(req.body);
	p.save(function(err){
		if(err){
			console.log(err);
		}
		res.json(p);

	});
})

module.exports = router;