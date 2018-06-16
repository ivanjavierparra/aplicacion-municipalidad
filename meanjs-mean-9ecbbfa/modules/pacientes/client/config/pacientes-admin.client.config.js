(function () {
  'use strict';

  // Configuring the Pacientes Admin module
  angular
    .module('pacientes.admin')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(Menus) {
    Menus.addSubMenuItem('topbar', 'admin', {
      title: 'Manage Pacientes',
      state: 'admin.pacientes.list'
    });
  }
}());
