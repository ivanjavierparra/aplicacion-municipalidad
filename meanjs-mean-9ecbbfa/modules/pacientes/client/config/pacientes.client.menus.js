(function () {
  'use strict';

  angular
    .module('pacientes')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Pacientes',
      state: 'pacientes',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'pacientes', {
      title: 'List Pacientes',
      state: 'pacientes.list',
      roles: ['*']
    });
  }
}());
