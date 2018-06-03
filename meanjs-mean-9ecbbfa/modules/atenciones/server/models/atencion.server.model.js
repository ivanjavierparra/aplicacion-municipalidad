'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Atencion Schema
 */
var AtencionSchema = new Schema({
  // Atencion model fields
  // ...
  id_atencion: {
    type: Number,
    required: 'Se necesita el id',
    trim: true
  },
  fecha: {
    type: Date,
    required: 'Se necesita la fecha',
    trim: true
  },
  paciente: {
    type: Number,
    default: 1,
    trim: true
  },
  doctor: {
    type: String,
    default: 'Juan Perez',
    trim: true
  },
  lugar: {
    type: String,
    default: 'Clínica San Miguel',
    trim: true
  },
  descripcion: {
    type: String,
    default: 'No hay descripcion',
    trim: true
  },
  muerto: {
    type: Boolean,
    default: false
  },
  suceso: {
    type: Number,
    required: 'Se necesita el id del suceso',
    trim: true
  },
  problema: {
    type: Number,
    required: 'Se necesita el id del problema',
    trim: true
  },
});

mongoose.model('Atencion', AtencionSchema);
