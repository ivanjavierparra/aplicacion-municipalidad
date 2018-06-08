(function () {
  'use strict';

  angular
    .module('core')
    .controller('GraphController', GraphController);

  function GraphController($scope) {
    $scope.title = "Graph";
  }
}());
