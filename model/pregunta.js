
var mongoose = require('mongoose');

var Pregunta = mongoose.model('Pregunta', 
	{ 
		texto: String,
		opciones:[{texto:String,correcto:Boolean}]
	}

);


module.exports = Pregunta;