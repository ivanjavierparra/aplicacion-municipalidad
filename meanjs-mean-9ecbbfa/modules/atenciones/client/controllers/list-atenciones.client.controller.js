(function () {
  'use strict';

  angular
    .module('atenciones')
    .controller('AtencionesListController', AtencionesListController);

  AtencionesListController.$inject = ['AtencionesService'];

  function AtencionesListController(AtencionesService) {
    var vm = this;

    vm.atenciones = AtencionesService.query();
  }
}());
