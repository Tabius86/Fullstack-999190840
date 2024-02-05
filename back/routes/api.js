var express = require("express");
var router = express.Router();
var productosModel = require("./../models/productosModel");
var cloudinary = require("cloudinary").v2;
var nodemailer = require("nodemailer");

router.get("/productos", async function (req, res, next) {
  let productos = await productosModel.getProductos();
  productos = productos.map((productos) => {
    if (productos.id_img) {
      const imagen = cloudinary.url(productos.id_img, {
        width: 960,
        height: 200,
        crop: "fill",
      });
      return { ...productos, imagen };
    } else {
      return { ...productos, imagen: "" };
    }
  });
  res.json(productos);
});

router.post("/contacto", async (req, res) => {
  const mail = {
    to: "tabodequilmes@gmail.com",
    subject: "Prueba contacto Web",
    html: `${req.body.nombre} nos dejo su casilla de correo: ${req.body.email}<br> y nos dejo el siguiente comentario: ${req.body.mensaje}`
  };
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  await transport.sendMail(mail);
  console.log("La info enviada en mail es: ", mail)
  res.status(201).json({
    error: false,
    message: "Mensaje enviado",
  });
});

module.exports = router;
