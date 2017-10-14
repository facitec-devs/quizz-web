var express = require('express');
var router = express.Router();
var Pregunta = require('../model/pregunta');
require('mongoose-query-random');

/* GET home page. */
router.get('/', function(req, res, next) {
	Pregunta.find().random(10,true,function(err, data){
		res.render('index', { title: 'Quizz',data: data });
	})
  
});

module.exports = router;
