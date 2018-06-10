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
  Problema.findOne({ _id: req.params.problemaId }, function (err, problema){
    return res.json(problema);
  });
};

/**
 * Update a Problema
 */
exports.update = function (req, res) {
  
  

  if(!req.body.nombre) {
    return res.status(400).send({
        message: "El nombre no puede estar vacio."
    });
  }

  Problema.findOne({ _id: req.params.problemaId }, function (err, problema){
    if (err) {
        return res.status(422).send({
          message: errorHandler.getErrorMessage(err)
        });
    } else {
        problema.nombre = req.body.nombre;
        problema.save();
    }
    return res.json(problema);
  });


  
};

/**
 * Delete an Problema
 *   
 */
exports.delete = function (req, res) {
        
      
    
        /*Problema.find({id_problema:req.params.problemaId}).remove().exec(function (err, problema) {
          if (err) {
            return res.status(422).send({
              message: errorHandler.getErrorMessage(err)
            });
          } else {
            //res.json(problema);
          return res.json({ message: "Problema removido exitosamente" });

          }
        });*/

        Problema.findOneAndRemove({ _id: req.params.problemaId })
        .then(problema => {
          return res.json(problema);
        })
        .catch(err => {
          return res.json(err);
        });
      
  
};

/**
 * List of Problemas
 */
exports.list = function (req, res) {
  Problema.find().exec(function (err, problemas) {
    if (err) {
      return res.json({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(problemas);
    }
  });
};
