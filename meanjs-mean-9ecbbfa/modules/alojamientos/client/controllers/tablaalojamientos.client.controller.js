(function () {
  'use strict';

  angular
    .module('core')
    .controller('TablaalojamientosController', TablaalojamientosController);

  /*function HelloController($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
    then(function(response) {
        $scope.greeting = response.data;
    });
  }*/

  function TablaalojamientosController($scope, $http) {
    $http.get('http://localhost:8000/api/estadias')
    .then(function(response) {
        var longitud_estadias = Object.keys(response.data).length;
        var estadias = response.data;
        
        $http.get('http://localhost:8000/api/alojamientos')
        .then(function(response) {
          var longitud_alojamientos = Object.keys(response.data).length;
          var alojamientos = response.data;
          var dict = {};
          var key;


          //armo mi diccionarios: key=id_alojamiento; value=contador de estadias.
          for(var i=0;i<longitud_alojamientos;i++){
            
              key = parseInt(alojamientos[i].id);
              dict[key] = 0 ;
            
          }

          

          //cuento estadias
          for(var i=0;i<longitud_estadias;i++){
            var fecha = estadias[i].fecha_desde.toString().substring(0,4);
            var year = parseInt(fecha);
  
              if((year>2009)&&(year<2019)){
                  //console.log("entre");
                  key = parseInt(estadias[i].alojamiento_id);
                  dict[key] = dict[key] + 1;
              }
           }

           $scope.diccionario = dict;
           

           $scope.graficos = [];

           //armo respuesta
           for (key in dict) {
                 if(dict[key]!=0){//solo considero hoteles con estadias...
                     //recorro alojamientos
                     for(var i=0;i<longitud_alojamientos;i++){
                       if(alojamientos[i].id==key){
                          var item = {
                            "alojamiento" : alojamientos[i].nombre,
                            "categoria" : alojamientos[i].categoria,
                            "cantidad" : dict[key]
                          };
                          $scope.graficos.push(item);
                       }
                     }
                 }
           }

        });

        

       

        
        
        
        

        
    });
  }

  

  

  
  

}());
