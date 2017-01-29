"use strict";

const jwt = require('jsonwebtoken');
const config = require('../conf/config');

//Middelware de autenticación
module.exports = function(){
    return function(req, res, next){
        const token = req.body.token || req.query.token || req.get('x-access-token');

        if(!token){
            next(new Error('NO_TOKEN'));
        }

        jwt.verify(token, config.jwt.secret, function(err, decoded){
            if(err)
                return next(new Error('INVALID_TOKEN'));

            req.decoded = decoded;
            next();
        });
    }
};