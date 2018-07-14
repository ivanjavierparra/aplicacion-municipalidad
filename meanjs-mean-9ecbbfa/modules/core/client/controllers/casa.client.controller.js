(function () {
  'use strict';

  angular
    .module('core')
    .controller('CasaController', CasaController);

  

  function CasaController($scope, $http, $location) {
    var vm = this;
    vm.title = "Hola Mundo";
    

    $scope.go = function ( path ) {
      $location.path( path );
      
    };
  }

}());
