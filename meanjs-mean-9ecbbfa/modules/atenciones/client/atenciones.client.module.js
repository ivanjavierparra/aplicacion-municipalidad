(function (app) {
  'use strict';

  app.registerModule('atenciones', ['core']);// The core module is required for special route handling; see /core/client/config/core.client.routes
  app.registerModule('atenciones.admin', ['core.admin']);
  app.registerModule('atenciones.admin.routes', ['core.admin.routes']);
  app.registerModule('atenciones.services');
  app.registerModule('atenciones.routes', ['ui.router', 'core.routes', 'atenciones.services']);
}(ApplicationConfiguration));
