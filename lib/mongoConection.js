"use strict";

const mongoose = require('mongoose');
const con = mongoose.connection;

con.on('error', function(err){
    console.log(err);
});

con.once('open',function(){
    console.log('Concetado a Mongo DB');
});

mongoose.connect('mongodb://localhost:27017/anuncios');