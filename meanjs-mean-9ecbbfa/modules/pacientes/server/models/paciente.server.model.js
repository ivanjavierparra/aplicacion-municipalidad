'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Paciente Schema
 */
var PacienteSchema = new Schema({
  // Paciente model fields
  // ...
  dni: {
    type: Number,
    required: 'El dni del paciente es necesario'
  },
  nombre: {
    type: String,
    default: 'Anónimo',
    trim: true,
  },
  apellido: {
    type: String,
    default: 'Anónimo',
    trim: true
  },
  nacionalidad: {
    type: String,
    default: 'Argentino',
    trim: true
  },
  fechaNacimiento: {
    type: Date,
    default: Date.now()
  },
  sexo:{
     type: String, enum: ['masculino', 'femenino'] 
  }
});

mongoose.model('Paciente', PacienteSchema);
