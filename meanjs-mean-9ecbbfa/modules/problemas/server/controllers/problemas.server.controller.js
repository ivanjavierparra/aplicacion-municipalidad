'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Problema = mongoose.model('Problema'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  _ = require('lodash');

/**
 * Create a Problema
 */
exports.create = function (req, res) {
  var problema = new Problema({
    nombre: req.body.nombre,
    id_problema: req.body.id_problema
  });

  problema.save(function (err) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(problema);
    }
  });
};

/**
 * Show the current Problema
 */
exports.read = function (req, res) {

};

/**
 * Update a Problema
 */
exports.update = function (req, res) {

};

/**
 * Delete an Problema
 */
exports.delete = function (req, res) {
  var problema = req.params.problemaId;
  
  console.log("Buenas:" + problema);

 /* Problema.findByIdAndRemove(req.params.problemaId, (err, problema) => {  
    // As always, handle any potential errors:
    if (err) return res.status(500).send(err);
    // We'll create a simple object to send back with a message and the id of the document that was removed
    // You can really do this however you want, though.
    const response = {
        message: "Problema successfully deleted",
        id: problema._id
    };
    return res.status(200).send(response);
});*/
  
Problema.find({id_problema:req.params.problemaId}).remove().exec(function (err, problemas) {
  if (err) {
    return res.status(422).send({
      message: errorHandler.getErrorMessage(err)
    });
  } else {
    res.json(problemas);
  }
});

};

/**
 * List of Problemas
 */
exports.list = function (req, res) {
  Problema.find().exec(function (err, problemas) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(problemas);
    }
  });
};
