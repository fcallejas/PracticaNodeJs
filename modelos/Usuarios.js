"use strict";

const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    nombre:String,
    email:String,
    clave:String
});

usuarioSchema.index({ email: 1 });

mongoose.model('Usuario', usuarioSchema);