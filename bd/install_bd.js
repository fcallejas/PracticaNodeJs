"use strict";

const mongoose = require('mongoose');
const sha256 = require('sha256');
require('../lib/mongoConection');
require('../modelos/anuncios');
require('../modelos/usuarios');
const fs = require('fs');

const Anuncio = mongoose.model('Anuncio');
const Usuario = mongoose.model('Usuario');

//Eliminar las colecciones
Anuncio.remove({},function(err){
    if(err){
        console.error(err);
        return;
    }

    console.log('Colección de Anuncios Removida');
});

Usuario.remove({},function(err){
    if(err){
        console.error(err);
        return;
    }

    console.log('Colección de Usuarios Removida');
});

//Crear un usuario genérico
var usuario = new Usuario({nombre:"Usuario Pruebas", email:"pruebas@pruebas.com", clave:sha256('pruebas')});
usuario.save(function(err, u){
    if(err)throw err;
    console.log('Usuario de pruebas', u);
});

var dataAnuncios;
fs.readFile('./bd/anuncios.json','utf8',function(err, data){
    if(err){
        console.error('Error al cargar el archivo', err);
        throw err;
    }

    dataAnuncios = JSON.parse(data);

    Anuncio.collection.insertMany(dataAnuncios.anuncios, function(err, r){
        if(err){
            console.error('Error al insertar los anuncions', err);
            throw err;
        }

        console.log('Registros insertados', r.insertedCount);
    });
});