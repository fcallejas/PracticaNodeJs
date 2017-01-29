"use strict";

var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Anuncio = mongoose.model('Anuncio');

const jwtAuth = require('../../lib/jwtAuth');

router.use(jwtAuth());

//Recuperar los anuncios de BD
router.get('/', function(req, res, next) {
  //Filtros de la Api
  const tags = req.query.tag;
  const venta = req.query.venta;
  const precio = req.query.precio;
  const nombre = req.query.nombre;

  //Ordenar, filtrar y paginación
  const limit = (req.query.limit)?parseInt(req.query.limit):0;
  const skip = (req.query.skip)?parseInt(req.query.skip):0;
  const campos = (req.query.fields)?req.query.fields:null;
  const sort = req.query.sort;

  const filtro = {};

  if(tags)
    filtro.tags = tags;

  if(venta != null)
    filtro.venta = venta;

  if(precio){
    var arrPrecio = precio.split('-');

    if(arrPrecio.length == 1)
      filtro.precio = arrPrecio[0];
    else if(arrPrecio[0] != '' && arrPrecio[1] != '')
      filtro.precio = { '$gte': arrPrecio[0], '$lte': arrPrecio[1] };
    else if(arrPrecio[0] != '' && arrPrecio[1] == '')
      filtro.precio = { '$gte': arrPrecio[0] };
    else if(arrPrecio[0] == '' && arrPrecio[1] != '')
      filtro.precio = { '$lte': arrPrecio[1] };
  }

  if(nombre)
    filtro.nombre = new RegExp('.*'+ nombre + ".*", "i");

  Anuncio.list(filtro, limit, skip, campos, sort, function(err, docs){
      if(err)
        throw err;

      res.json({succes:true, data: docs});
  });
});

router.get('/tags', function(req, res, next) {
  const tags = {"tags":['lifestyle','motor','work','mobile']};
  res.json({succes:true, data: tags});
});

module.exports = router;