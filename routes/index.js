var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Aquí encontrarás algunos de los científicos y matemáticos destacados en el mundo de la ciencia y de la programación. Esperamos te sorprendas.' });
//});

router.get ('/', function(req, res){

        return res.send ('Aquí encontrarás algunos de los científicos y matemáticos destacados en el mundo de la ciencia y de la programación. Esperamos te sorprendas.')
})

module.exports = router;
