'use strict';
var sucesosPolicy = require('../policies/sucesos.server.policy'),
   sucesos = require('../controllers/sucesos.server.controller');


module.exports = function(app) {
  // Routing logic   
  // ...
  app.route('/api/sucesos').all(sucesosPolicy.isAllowed)
    .get(sucesos.list)
    .post(sucesos.create);

  // Single article routes
  app.route('/api/sucesos/:sucesoId').all(sucesosPolicy.isAllowed)
    .get(sucesos.read)
    .put(sucesos.update)
    .delete(sucesos.delete);

  // Finish by binding the article middleware
  //app.param('pacienteId', pacientes.articleByID);
};
