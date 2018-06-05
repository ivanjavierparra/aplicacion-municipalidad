(function () {
  'use strict';

  angular
    .module('core')
    .controller('ProblemasController', ProblemasController);

  

  function ProblemasController($scope, $http) {
    $http.get('http://localhost:3000/api/atenciones').
    then(function(response) {
        var longitud = Object.keys(response.data).length;
        var dict = {};
        var key;
        var len;
        var datos = response.data;

        $http.get('http://localhost:3000/api/problemas').
        then(function(response) {
              longitud = Object.keys(response.data).length;
              $scope.problemas = [longitud];
              for(var i=0;i<longitud;i++){
                $scope.problemas[i] = response.data[i];
              }
        });
        
        //necesito el id del problema asi hago el get...

        

        //solucion
        //armo un diccionaario, cuya clave son los años desde 2000 hasta 2018, inicializado cada par en cero.
        $scope.grafico = {};
        $scope.grafico["2010"] = 0;
        $scope.grafico["2011"] = 0;
        $scope.grafico["2012"] = 0;
        $scope.grafico["2013"] = 0;
        $scope.grafico["2014"] = 0;
        $scope.grafico["2015"] = 0;
        $scope.grafico["2016"] = 0;
        $scope.grafico["2017"] = 0;
        $scope.grafico["2018"] = 0;

        
        for(var i=0;i<longitud;i++){
           var fecha = response.data[i].fecha.toString().substring(0,4);
           var año = parseInt(fecha);
           if((año>2009)&&(año<2019)){
             $scope.grafico[fecha] = $scope.grafico[fecha] + 1;
           }
        }

        
    });
  }

  function hola($scope, $http){
    $scope.hola = false;
    if($scope.hola)$scope.hola = false;
    else $scope.hola = true;
  }


  

  

  

  
  

}());

