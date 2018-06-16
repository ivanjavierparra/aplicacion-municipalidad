(function () {
  'use strict';

  angular
    .module('atenciones')
    .controller('AtencionesController', AtencionesController);

  AtencionesController.$inject = ['$scope', 'atencionResolve', 'Authentication'];

  function AtencionesController($scope, atencion, Authentication) {
    var vm = this;

    vm.atencion = atencion;
    vm.authentication = Authentication;

  }
}());
