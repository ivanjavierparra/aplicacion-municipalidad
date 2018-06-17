'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Atencion = mongoose.model('Atencion'),
  Paciente = mongoose.model('Paciente'),
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
        return res.json({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        return res.json(atencion);
      }
    });
};

/**
 * Show the current Atencione
 */
exports.read = function (req, res) {
  Atencion.findOne({ _id: req.params.atencionId }, function (err, paciente){
      return res.json(paciente);
  });
};

/**
 * Update a Atencione
 */
exports.update = function (req, res) {
  Atencion.findOne({ _id: req.params.atencionId }, function (err, atencion){
    if (err) {
        return res.status(422).send({
          message: errorHandler.getErrorMessage(err)
        });
    } else {
        if(!atencion) return res.json([]); //no encontro el objeto atenciond
        if(req.body.fecha) atencion.fecha = req.body.fecha;
        if(req.body.paciente) atencion.paciente = req.body.paciente;
        if(req.body.doctor) atencion.doctor = req.body.doctor;
        if(req.body.lugar) atencion.lugar = req.body.lugar;
        if(req.body.descripcion) atencion.descripcion = req.body.descripcion;
        if(req.body.muerto) atencion.muerto = req.body.muerto;
        if(req.body.suceso) atencion.suceso = req.body.suceso;
        if(req.body.problema) atencion.problema = req.body.problema;
        atencion.save();
    }
    return res.json(atencion);
  });


     /* Atencion.findOneAndUpdate({ id_atencion: req.params.atencionId })
      .then(atencion => {
        console.log("Buenas" + atencion.paciente + " " + atencion.fecha)
        if(req.body.fecha) atencion.fecha = req.body.fecha;
        if(req.body.paciente) atencion.paciente = req.body.paciente;
        if(req.body.doctor) atencion.doctor = req.body.doctor;
        if(req.body.lugar) atencion.lugar = req.body.lugar;
        if(req.body.descripcion) atencion.descripcion = req.body.descripcion;
        if(req.body.muerto) atencion.muerto = req.body.muerto;
        if(req.body.suceso) atencion.suceso = req.body.suceso;
        if(req.body.problema) atencion.problema = req.body.problema;
        atencion.save();
        return res.json(atencion);
      })
      .catch(err => {
        return res.json(err);
      });*/





};

/**
 * Delete an Atenciones
 */
exports.delete = function (req, res) {
  /*Atencion.find({id_atencion:req.params.atencionId}).remove().exec(function (err, atencion) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      //res.json(atencion);
      console.log("Atencion a borrar: " + atencion);
    return res.json({ message: "Atencion removido exitosamente" });

    }
  });*/


  /*Atencion.findOne({ id_atencion: req.params.atencionId }).remove( function (err, atencion){
    if (err) {
        return res.status(422).send({
          message: errorHandler.getErrorMessage(err)
        });
    } else {
        
        console.log("buenas " + atencion[0] + "/" + atencion[1])
        return res.json(atencion);
    }
    
  });*/

    Atencion.findOneAndRemove({ _id: req.params.atencionId })
    .then(atencion => {
      return res.json(atencion);
    })
    .catch(err => {
      return res.json(err);
    });


};

/**
 * List of Atenciones
 */
exports.list = function (req, res) {
    Atencion.find().exec(function (err, atenciones) {
      if (err) {
        return res.json({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        res.json(atenciones);
      }
    });
};

/**
 * List of Atenciones
 */
exports.readproblema = function (req, res) {
  Atencion.find({ problema : req.params.problemaId }).exec(function (err, atenciones) {
    if (err) {
      return res.json({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      return res.json(atenciones);
    }
  });
};


/**
 * List of Atenciones
 */
exports.readsuceso = function (req, res) {
  Atencion.find({ suceso : req.params.sucesoId }).exec(function (err, atenciones) {
    if (err) {
      return res.json({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      return res.json(atenciones);
    }
  });
};

exports.readpaciente = function (req, res) {
  Atencion.find({ paciente : req.params.pacienteId}).exec(function (err, atenciones) {
    if (err) {
      return res.json({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
     return res.json(atenciones);
    }
  });
};


exports.readPacienteAtendido = function (req, res) {
  Atencion.find({ _id : req.params.atencionId }).exec(function (err, atenciones) {
    if (err) {
      res.json({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
        console.log("################## "  +  atenciones );
        console.log("################## "  +  atenciones.paciente );
        

        Paciente.find({ _id : atenciones.paciente }).exec(function (err, pacientes) {
            if (err) {
              res.json({
                message: errorHandler.getErrorMessage(err)
              });
            } else {
              console.log("################## "  +  pacientes );
              res.json(pacientes);
            }  
        
        });
    }
  });
};