(function () {
  'use strict';

  angular
    .module('core')
    .controller('AlertasController', AlertasController);

  /*function HelloController($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
    then(function(response) {
        $scope.greeting = response.data;
    });
  }*/

  function AlertasController($scope, $http) {
    $scope.alerts = [
      { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
      { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    ];
  
    $scope.addAlert = function() {
      $scope.alerts.push({msg: 'Another alert!'});
    };
  
    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };
    
  }

  

  

  
  

}());
