'use strict';
var atencionesPolicy = require('../policies/atenciones.server.policy'),
   atenciones = require('../controllers/atenciones.server.controller');


module.exports = function(app) {
  // Routing logic   
  // ...
  app.route('/api/atenciones').all(atencionesPolicy.isAllowed)
    .get(atenciones.list)
    .post(atenciones.create);

  // Single article routes
  app.route('/api/atenciones/:atencionId').all(atencionesPolicy.isAllowed)
    .get(atenciones.read)
    .put(atenciones.update)
    .delete(atenciones.delete);

  app.route('/api/atenciones/problemas/:problemaId')
    .get(atenciones.readproblema)
  
  app.route('/api/atenciones/sucesos/:sucesoId')
    .get(atenciones.readsuceso)

  app.route('/api/atenciones/pacientes/:pacienteId')
    .get(atenciones.readpaciente)
  
  app.route('/api/atenciones/:atencionId/pacientes')
    .get(atenciones.readPacienteAtendido)
  
  // Finish by binding the article middleware
  //app.param('pacienteId', pacientes.articleByID);
};
