'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Sucesos Schema
 */
var SucesoSchema = new Schema({
  // Sucesos model fields
  // ...
  id_suceso: {
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

mongoose.model('Suceso', SucesoSchema);
