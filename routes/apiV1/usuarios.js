"use strict";

const express = require('express');
const router = express.Router();
const sha256 = require('sha256');

const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
const config = require('../../conf/config');

router.post('/autenticar', function(req, res, next) {
    var email = req.body.email;
    var clave = req.body.pass;

    if(email && clave){
        //Convertir la clave a SHA256
        clave = sha256(clave);

        const filtro = {};
        filtro.email = email;
        filtro.clave = clave;

        Usuario.find(filtro).exec(function(err, usuario){
            if(err)
                throw err;

            if(usuario.length == 0){
                res.json({succes:false, "error": 'AUT_INCORRECT'});
            }else{
                const token = jwt.sign({_id:usuario._id}, config.jwt.secret,{
                    expiresIn: config.jwt.expiraEn
                });

                res.json({succes:true, "token": token});    
            }
        });
    }else {
        res.json({succes:false, error: 'NO_DATA_USU'});
    }
});

router.post('/crear', function(req, res, next){
    var nombre = req.body.nombre;
    var email = req.body.email;
    var clave = req.body.pass;

    if(nombre && email && clave){        
        var usuario = new Usuario(req.body);
        usuario.clave = sha256(clave);
        usuario.save(function(err, u){
            if(err)throw err;

            res.json({succes:true, usuario: req.body});
        });
    }else{
        res.json({succes:false, error: 'NO_DATA_USU_C'});
    }
});

module.exports = router;