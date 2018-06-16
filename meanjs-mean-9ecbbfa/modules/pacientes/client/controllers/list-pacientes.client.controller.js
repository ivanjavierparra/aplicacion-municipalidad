(function () {
  'use strict';

  angular
    .module('pacientes')
    .controller('PacientesListController', PacientesListController);

  PacientesListController.$inject = ['PacientesService'];

  function PacientesListController(PacientesService) {
    var vm = this;

    vm.pacientes = PacientesService.query();
  }
}());
