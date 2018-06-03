'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Problema Schema
 */
var ProblemaSchema = new Schema({
  // Problema model fields
  // ...
  id_problema: {
    type: Number,
    required: 'Se necesita el id',
    trim: true
  },
  nombre: {
    type: String,
    required: 'Se necesita el nombre',
    trim: true
  }
});

mongoose.model('Problema', ProblemaSchema);
