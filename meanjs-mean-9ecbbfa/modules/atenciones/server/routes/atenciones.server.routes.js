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

  // Finish by binding the article middleware
  //app.param('pacienteId', pacientes.articleByID);
};
