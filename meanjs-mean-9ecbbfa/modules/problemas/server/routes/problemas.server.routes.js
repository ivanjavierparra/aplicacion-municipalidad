'use strict';
var problemasPolicy = require('../policies/problemas.server.policy'),
   problemas = require('../controllers/problemas.server.controller');


module.exports = function(app) {
  // Routing logic   
  // ...
  app.route('/api/problemas').all(problemasPolicy.isAllowed)
    .get(problemas.list)
    .post(problemas.create);

  // Single article routes
  app.route('/api/problemas/:problemaId').all(problemasPolicy.isAllowed)
    .get(problemas.read)
    .put(problemas.update)
    .delete(problemas.delete);

  // Finish by binding the article middleware
  //app.param('pacienteId', pacientes.articleByID);
};
