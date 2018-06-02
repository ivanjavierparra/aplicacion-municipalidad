'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Paciente = mongoose.model('Paciente'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  _ = require('lodash');

/**
 * Create a Paciente
 */
exports.create = function (req, res) {
  var paciente = new Paciente({
    dni: req.body.dni,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    nacionalidad: req.body.nacionalidad, 
    fechaNacimiento: req.body.fecha 
  });

  paciente.save(function (err) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(paciente);
    }
  });

};

/**
 * Show the current Paciente
 */
exports.read = function (req, res) {

};

/**
 * Update a Paciente
 */
exports.update = function (req, res) {

};

/**
 * Delete an Paciente
 */
exports.delete = function (req, res) {

};

/**
 * List of Pacientes
 */
exports.list = function (req, res) {
  Paciente.find().exec(function (err, clientes) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(clientes);
    }
  });
};
