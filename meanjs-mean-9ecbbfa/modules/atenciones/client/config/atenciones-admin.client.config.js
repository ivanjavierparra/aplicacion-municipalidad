(function () {
  'use strict';

  // Configuring the Articles Admin module
  angular
    .module('atenciones.admin')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(Menus) {
    Menus.addSubMenuItem('topbar', 'admin', {
      title: 'Gestionar Atenciones',
      state: 'admin.atenciones.list'
    });
  }
}());
