(function () {
  'use strict';

  angular
    .module('core')
    .controller('InfraccionesController', InfraccionesController);

  

  function InfraccionesController($scope, $http) {
    $http.get('http://localhost:8000/api/infracciones').
    then(function(response) {
        var longitud = Object.keys(response.data).length;
        var dict = {};
        var key;
        var len;
        var datos = response.data;

        $http.get('http://localhost:8000/api/tipo_infracciones').
        then(function(response) {
            len = Object.keys(response.data).length;
            //dict = new Array(len);

            //creo un diccionario: clave=id del tipo de infraccion ; valor = 0
            for(var i=0;i<len;i++){
              key = parseInt(response.data[i].id);
              dict[key] = 0 ;
            }

            //recorro mis infracciones, y las acumulo en mi diccionario
            for(var j=0;j<longitud;j++){
              key = parseInt(datos[j].tipo_id);
              dict[key] = dict[key] + 1;
            }

            //creo un nuevo diccionario, clave = nombre del tipo de infraccion ;  valor= valor del diccionario anterior
            var resultado = {};
            for (key in dict) {
              // Hacer algo con la clave key
              for(var i=0;i<len;i++){
                if(response.data[i].id==key){
                  resultado[response.data[i].nombre] = dict[key];
                }
              }
            }


            $scope.graficos = {};
            for (key in dict) {
              // Hacer algo con la clave key
              for(var i=0;i<len;i++){
                if(response.data[i].id==key){
                  $scope.graficos[response.data[i].nombre] = dict[key];
                }
              }
            }
            
          
            
           

        });

        


        
    });
  }

  

  

  
  

}());
