(function () {
  'use strict';

  angular
    .module('atenciones')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Atenciones',
      state: 'atenciones',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'atenciones', {
      title: 'List Atenciones',
      state: 'atenciones.list',
      roles: ['*']
    });
  }
}());
