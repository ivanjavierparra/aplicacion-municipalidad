(function () {
  'use strict';

  angular
    .module('core')
    .controller('GraficosController', GraficosController);
    
  /*function HelloController($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
    then(function(response) {
        $scope.greeting = response.data;
    });
  }*/

  function GraficosController($scope, $http) {
    $http.get('http://localhost:3000/api/atenciones')
    .then(function(response) {
        var longitud = Object.keys(response.data).length;
        var dict = {};
        var key;
        var len;
        var datos = response.data;

        $http.get('http://localhost:3000/api/problemas')
        .then(function(response) {
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

            $scope.labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
            $scope.data = [12, 19, 3, 5, 2, 3];
            $scope.backgroundColor = [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ];
            $scope.borderColor =  [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ] ;
            $scope.borderWidth = 1;
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