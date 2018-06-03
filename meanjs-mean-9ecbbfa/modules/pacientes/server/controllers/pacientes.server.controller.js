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
    fechaNacimiento: req.body.fecha,
    sexo: req.body.sexo
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
      Paciente.findOne({ dni: req.params.pacienteId }, function (err, paciente){
          return res.json(paciente);
      });
};

/**
 * Update a Paciente
 */
exports.update = function (req, res) {
    

    Paciente.findOne({ dni: req.params.pacienteId }, function (err, paciente){
      if (err) {
          return res.status(422).send({
            message: errorHandler.getErrorMessage(err)
          });
      } else {
          if(req.body.nombre) paciente.nombre = req.body.nombre;
          if(req.body.apellido) paciente.apellido = req.body.apellido;
          if(req.body.nacionalidad) paciente.nacionalidad = req.body.nacionalidad;
          if(req.body.fecha) paciente.fechaNacimiento = req.body.fecha;
          if(req.body.sexo) paciente.sexo = req.body.sexo;
          paciente.save();
      }
      return res.json(paciente);
    });



};

/**
 * Delete an Paciente
 */
exports.delete = function (req, res) {
    Paciente.find({dni:req.params.pacienteId}).remove().exec(function (err, paciente) {
      if (err) {
        return res.status(422).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        //res.json(paciente);
      return res.json({ message: "Paciente removido exitosamente" });

      }
    });
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
