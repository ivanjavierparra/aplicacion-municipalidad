(function () {
  'use strict';

  angular
    .module('pacientes.admin')
    .controller('PacientesAdminListController', PacientesAdminListController);

  PacientesAdminListController.$inject = ['PacientesService'];

  function PacientesAdminListController(PacientesService) {
    var vm = this;

    vm.pacientes = PacientesService.query();
  }
}());
