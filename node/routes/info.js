var express = require('express');
var router = express.Router();

/* Devuelve la info del curso. */
router.get('/', function(req, res, next) {
  res.send('Tarea Modulo 4 Unidad 3 - Curso 999190840');
});

module.exports = router;