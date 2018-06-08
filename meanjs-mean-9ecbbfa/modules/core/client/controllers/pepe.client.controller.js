(function () {
  'use strict';

  angular
    .module('core')
    .controller('PepeController', PepeController);

  function PepeController() {
    var vm = this;
    vm.title = "Hola Mundo";
  }
}());
