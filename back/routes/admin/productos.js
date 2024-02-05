var express = require('express');
var productos = require('../../models/productosModel')
var router = express.Router();
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


router.get('/', async function(req, res, next) {
  var prod = await productos.getProductos();
  prod = prod.map(producto =>{
    if (producto.id_img){
      const imagen = cloudinary.image(producto.id_img, {
        width: 100,
        height: 100,
        crop: 'fill'
      });
      return {...producto, imagen}
    }else {
      return {...producto, imagen: ''}
    }
  });
  res.render('./admin/productos', {layout: 'admin/layout', user: req.session.nombre, prod});
});

router.get('/nuevo', async function(req, res, next) {
  res.render('./admin/nuevo', {layout: 'admin/layout'});
});

router.post('/nuevo', async function(req, res, next) {
  try {
    var id_img = '';
    if (req.files && Object.keys(req.files).length > 0){
      imagen = req.files.imagen;
      id_img = (await uploader(imagen.tempFilePath)).public_id;
    }
    if (req.body.descripcion != "" && req.body.precio != "" && req.body.cantidad != "") {
      await productos.insertProductos({...req.body, id_img});
      res.redirect('/admin/productos')
    } else {
      res.render('./admin/nuevo', { layout: 'admin/layout', error : true, message : 'Todos los valores son necesarios'})
    }
  } catch (error) {
    console.log(error)
    res.render('./admin/nuevo', { layout: 'admin/layout', error : true, message : 'No se cargo el producto'})
  }
});

router.get('/eliminar/:codigo', async function(req, res, next) {
  var id = req.params.codigo;
  var producto = await productos.getProducto(id);
  if (producto.id_img) {
    await (destroy(producto.id_img));
  }
  await productos.deleteProductos(id);
  res.redirect('/admin/productos');
});

router.get('/actualizar/:codigo', async function(req, res, next) {
  var id = req.params.codigo;
  var datosproducto = await productos.getProducto(id);
  res.render('./admin/actualizar', {
    layout: 'admin/layout', datosproducto
  })
});

router.post('/actualizar', async function(req, res, next) {
  try {
    let id_img = req.body.img_original;
    let borrar_img_vieja = false;
    if (req.body.img_delete === "1"){
      id_img = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        id_img = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }
    var producto = {
      codigo: req.body.codigo,
      descripcion: req.body.descripcion,
      cantidad: req.body.cantidad,
      precio: req.body.precio,
      id_img
    }
    console.log(producto)
    await productos.updateProductos(req.body.codigo, producto);
    res.redirect('/admin/productos');
  } catch (error) {
    console.log(error);
    res.render('admin/actualizar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico el producto'
    })
  }
});

module.exports = router;