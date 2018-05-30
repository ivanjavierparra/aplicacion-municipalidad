var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pacienteSchema = new Schema({
 dni: { type: Number },
 name: { type: String },
 nacionalidad: { type: String },
});

var medicoSchema = new Schema({
 name: { type: String },
 matricula: { type: Number },
});

var clientSchema = new Schema({
 name: { type: String },
 email: { type: String },
 genre: { type: String, enum: ['male', 'female'] },
 paciente: pacienteSchema,
 medico: medicoSchema
});

module.exports = clientSchema;
