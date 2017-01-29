"use strict";

const MSG_ERROR = {
    "NO_TOKEN":{"es":'No se ha enviado el token', "eng":'No token provided'},
    "INVALID_TOKEN":{"es":'Token Inválido', "eng":'Invalid Token'},
    "AUT_INCORRECT":{"es":'Usuario o contraseña incorrectos', "eng":'Incorrect user or password'},
    "NO_DATA_USU":{"es":'Debes ingresar email y clave', "eng":'You must enter username and password'},
    "NO_DATA_USU_C":{"es":'Debes ingresar nombre, email y clave', "eng":'You must enter name, email and password'}
};

module.exports = {
    jwt:{
        secret:'10b83d6b442047e80b208ab8420703c3f068600e95174849764d5ab1a1760ec3',
        expiraEn:'2 days'
    },

    traducir:function(l, msg){
        console.log(l, msg);

        if(MSG_ERROR[msg][l])
            return MSG_ERROR[msg][l];
        
        return msg;
    }
};