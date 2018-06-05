(function () {
  'use strict';

  angular
    .module('core')
    .controller('TiposAlojamientosController', TiposAlojamientosController);

  

  function TiposAlojamientosController($scope, $http) {
    $http.get('http://localhost:8000/api/estadias').
    then(function(response) {
        var longitud = Object.keys(response.data).length;
        var dict = {};
        var key;
        var len;
        var datos = response.data;

        $http.get('http://localhost:8000/api/alojamientos').
        then(function(response) {
            len = Object.keys(response.data).length;
            


            //creo mi diccionario de categorias de estadias
            for(var i=0;i<len;i++){
              key = parseInt(response.data[i].id);
              dict[key] = 0 ;
            }


            //recorro mis estadias
            for(var j=0;j<longitud;j++){
              key = parseInt(datos[j].alojamiento_id);
              dict[key] = dict[key] + 1;
            }


            //cambio la clave por el nombre de la categoria
            var resultado = {};
            for (key in dict) {
              // Hacer algo con la clave key
              for(var i=0;i<len;i++){
                if(response.data[i].id==key){
                  resultado[response.data[i].categoria] = dict[key];
                }
              }
            }



            $scope.graficos = {};
            for (key in dict) {
              // Hacer algo con la clave key
              for(var i=0;i<len;i++){
                if(response.data[i].id==key){
                  $scope.graficos[response.data[i].categoria] = dict[key];
                }
              }
            }
            
           // for (var i = 0, l = $scope.datos.length; i < l; i++) {
             // $scope.telephone[i.toString()] = $scope.phone[i];
           // }

            
            $scope.saludo = "Hola Mundo!";
            $scope.datos1= datos[0].problema;
            $scope.prob = resultado;
            

        });

        


        
    });
  }

  

  

  
  

}());
