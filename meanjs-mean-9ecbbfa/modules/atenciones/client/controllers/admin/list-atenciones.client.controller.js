(function () {
  'use strict';

  angular
    .module('atenciones.admin')
    .controller('AtencionesAdminListController', AtencionesAdminListController);

  AtencionesAdminListController.$inject = ['AtencionesService'];

  function AtencionesAdminListController(AtencionesService) {
    var vm = this;

    vm.atenciones = AtencionesService.query();
  }
}());
