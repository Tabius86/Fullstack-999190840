var express = require('express');
var router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

/* Devuelve un msj con los datos pasados en la URL o mediante un GET con postman u otro similar. */
/*Usar nombre=valor */
router.get('/', (req, res) => {
    usuario = req.query;
    res.send('Hola: ' + Object.values(usuario));
  });

router.post('/', (req, res) => {
    res.send('Hola: ' + req.body);
});

module.exports = router;