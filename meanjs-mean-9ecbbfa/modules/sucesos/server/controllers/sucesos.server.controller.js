'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Suceso = mongoose.model('Suceso'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  _ = require('lodash');

/**
 * Create a Suceso
 */
exports.create = function (req, res) {
  var suceso = new Suceso({
    nombre: req.body.nombre,
    id_suceso: req.body.id_suceso
  });

  suceso.save(function (err) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(suceso);
    }
  });
};

/**
 * Show the current Suceso
 */
exports.read = function (req, res) {

};

/**
 * Update a Suceso
 */
exports.update = function (req, res) {

};

/**
 * Delete an Suceso
 */
exports.delete = function (req, res) {

};

/**
 * List of Sucesos
 */
exports.list = function (req, res) {
  Suceso.find().exec(function (err, sucesos) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(sucesos);
    }
  });
};
