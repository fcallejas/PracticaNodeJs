"use strict";

const mongoose = require('mongoose');

const anuncioSchema = mongoose.Schema({
    nombre:String,
    venta:Boolean,
    precio:Number,
    foto:String,
    tags:[String]
});

anuncioSchema.statics.list = function(filtro,limit,skip,campos,sort,cb){
    const query = Anuncio.find(filtro);
    
    if(limit)
        query.limit(limit);

    if(skip)
        query.skip(skip);
    
    if(campos)
        query.select(campos);

    if(sort)
        query.sort(sort);
    
    query.exec(cb);
};

const Anuncio = mongoose.model('Anuncio', anuncioSchema);