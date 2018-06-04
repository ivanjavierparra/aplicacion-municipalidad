(function () {
  'use strict';

  angular
    .module('core')
    .controller('HelloController', HelloController);

  /*function HelloController($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
    then(function(response) {
        $scope.greeting = response.data;
    });
  }*/

  function HelloController($scope, $http) {
    $http.get('http://localhost:3000/api/atenciones').
    then(function(response) {
        var longitud = Object.keys(response.data).length;
        var dict = {};
        var key;
        var len;
        var datos = response.data;

        $http.get('http://localhost:3000/api/problemas').
        then(function(response) {
            len = Object.keys(response.data).length;
            //dict = new Array(len);
            for(var i=0;i<len;i++){
              key = parseInt(response.data[i].id_problema);
              dict[key] = 0 ;
            }

            for(var j=0;j<longitud;j++){
              key = parseInt(datos[j].problema);
              dict[key] = dict[key] + 1;
            }

            var resultado = {};
            for (key in dict) {
              // Hacer algo con la clave key
              for(var i=0;i<len;i++){
                if(response.data[i].id_problema==key){
                  resultado[response.data[i].nombre] = dict[key];
                }
              }
            }
            
            $scope.saludo = "Hola Mundo!";
            $scope.atenciones = datos[0].problema;
            $scope.problemas = resultado;


        });

        


        
    });
  }

  

}());
