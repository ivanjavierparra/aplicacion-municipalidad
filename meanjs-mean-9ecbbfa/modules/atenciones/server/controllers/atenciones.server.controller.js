'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Atencion = mongoose.model('Atencion'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  _ = require('lodash');

/**
 * Create a Atenciones
 */
exports.create = function (req, res) {
    var atencion = new Atencion({
      id_atencion: req.body.id_atencion,
      fecha: req.body.fecha,
      paciente: req.body.paciente,
      doctor: req.body.doctor,
      lugar: req.body.lugar,
      descripcion: req.body.descripcion,
      muerto: req.body.muerto,
      suceso: req.body.suceso,
      problema: req.body.problema

    });

    atencion.save(function (err) {
      if (err) {
        return res.status(422).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        res.json(atencion);
      }
    });
};

/**
 * Show the current Atencione
 */
exports.read = function (req, res) {

};

/**
 * Update a Atencione
 */
exports.update = function (req, res) {

};

/**
 * Delete an Atencione
 */
exports.delete = function (req, res) {

};

/**
 * List of Atenciones
 */
exports.list = function (req, res) {
    Atencion.find().exec(function (err, atenciones) {
      if (err) {
        return res.status(422).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        res.json(atenciones);
      }
    });
};
