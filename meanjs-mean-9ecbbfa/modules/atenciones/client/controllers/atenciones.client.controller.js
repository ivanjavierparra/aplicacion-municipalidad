(function () {
  'use strict';

  angular
    .module('core')
    .controller('AtencionesController', AtencionesController);

  /*function HelloController($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
    then(function(response) {
        $scope.greeting = response.data;
    });
  }*/

  function AtencionesController($scope, $http) {
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


            $scope.graficos = {};
            for (key in dict) {
              // Hacer algo con la clave key
              for(var i=0;i<len;i++){
                if(response.data[i].id_problema==key){
                  $scope.graficos[response.data[i].nombre] = dict[key];
                }
              }
            }
            
           // for (var i = 0, l = $scope.datos.length; i < l; i++) {
             // $scope.telephone[i.toString()] = $scope.phone[i];
           // }

            
            $scope.saludo = "Hola Mundo!";
            $scope.datos1= datos[0].problema;
            $scope.prob = resultado;

            $scope.labels = ["Sleeping", "Designing", "Coding", "Cycling"];
            $scope.data = [20, 40, 5, 35];
            $scope.options = {
              elements: {
                arc: {
                  borderWidth: 0
                }
              },
              legend: {
                display: true,
                position: 'bottom',
                labels: {
                //  fontColor: layoutColors.defaultText
                }
              }
            };

        });

        


        
    });
  }

  

  

  
  

}());
