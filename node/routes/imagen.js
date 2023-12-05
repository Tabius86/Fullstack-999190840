var express = require('express');
var router = express.Router();

/* Devuelve una imagen. */
router.get('/', function(req, res){
    res.sendFile( __dirname + '/imagen.jpg');
}); 

module.exports = router;