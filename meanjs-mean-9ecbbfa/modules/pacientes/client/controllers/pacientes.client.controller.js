(function () {
  'use strict';

  angular
    .module('pacientes')
    .controller('PacientesController', PacientesController);

  PacientesController.$inject = ['$scope', 'pacienteResolve', 'Authentication'];

  function PacientesController($scope, paciente, Authentication) {
    var vm = this;

    vm.paciente = paciente;
    vm.authentication = Authentication;

  }
}());
