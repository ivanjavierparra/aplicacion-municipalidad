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
    Suceso.findOne({ _id: req.params.sucesoId }, function (err, suceso){
      return res.json(suceso);
    });
};

/**
 * Update a Suceso
 */
exports.update = function (req, res) {
    if(!req.body.nombre) {
      return res.status(400).send({
          message: "El nombre no puede estar vacio."
      });
    }

    Suceso.findOne({ _id: req.params.sucesoId }, function (err, suceso){
      if (err) {
          return res.status(422).send({
            message: errorHandler.getErrorMessage(err)
          });
      } else {
          suceso.nombre = req.body.nombre;
          suceso.id_suceso = req.body.id_suceso;
          suceso.save();
      }
      return res.json(suceso);
    });
};

/**
 * Delete an Suceso
 */
exports.delete = function (req, res) {
      
      /*Suceso.find({id_suceso:req.params.sucesoId}).remove().exec(function (err, suceso) {
        if (err) {
          return res.status(422).send({
            message: errorHandler.getErrorMessage(err)
          });
        } else {
          //res.json(suceso);
        return res.json({ message: "Suceso removido exitosamente" });

        }
      });*/
      Suceso.findOneAndRemove({ _id: req.params.sucesoId })
      .then(suceso => {
        return res.json(suceso);
      })
      .catch(err => {
        return res.json(err);
      });
};

/**
 * List of Sucesos
 */
exports.list = function (req, res) {
  Suceso.find().exec(function (err, sucesos) {
    if (err) {
      return res.json({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(sucesos);
    }
  });
};
