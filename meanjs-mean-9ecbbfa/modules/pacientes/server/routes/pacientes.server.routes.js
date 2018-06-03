'use strict';
var pacientesPolicy = require('../policies/pacientes.server.policy'),
  pacientes = require('../controllers/pacientes.server.controller');


module.exports = function(app) {
  // Routing logic   
  // ...
  app.route('/api/pacientes').all(pacientesPolicy.isAllowed)
    .get(pacientes.list)
    .post(pacientes.create);

  // Single article routes
  app.route('/api/pacientes/:pacienteId').all(pacientesPolicy.isAllowed)
    .get(pacientes.read)
    .put(pacientes.update)
    .delete(pacientes.delete);

  // Finish by binding the article middleware
  //app.param('pacienteId', pacientes.articleByID);
};
