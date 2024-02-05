var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuariosModel');

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', { layout: 'admin/layout' });
});

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.render('admin/login', { layout: 'admin/layout' });
});

router.post('/', async (req, res, next) => {
  try {
    console.log(req.body);
    var user = req.body.usuario;
    var pas = req.body.clave;
    var data = await usuariosModel.getUser(user, pas);

    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect('/admin/productos');
    } else {
      res.render('admin/login', { layout: 'admin/layout', error: true});
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;