(function () {
  'use strict';

  angular
    .module('core')
    .controller('NacionalidadAlojamientosController', NacionalidadAlojamientosController);

  

  function NacionalidadAlojamientosController($scope, $http) {
    

    $http.get('http://localhost:8000/api/turistas/nacionalidades')
        .then(function(response) {
            var longitud_nacionalidad = Object.keys(response.data).length;
            var dict = {};
            var key;
            var len;
            var nacionalidades = response.data;

          
            //$scope.graficos = {};
            //armo un diccionario, cuya clave son las nacionalidades, inicializado cada par en cero.
            for(var i=0;i<longitud_nacionalidad;i++){
              key = nacionalidades[i].nombre;
              dict[key] = 0 ;
            }
            
           // $scope.graficos = dict;
            
            
            $http.get('http://localhost:8000/api/turistas')
                .then(function(response) {
            
                    var longitud_turistas = Object.keys(response.data).length;
                    var turistas = response.data;

                    //console.log("entre a turistas...");
                    $http.get('http://localhost:8000/api/estadias')
                        .then(function(response) {
                         // console.log("entre a estadias...");
                                var longitud_estadias = Object.keys(response.data).length;
                                var estadias = response.data;
                                for(var i=0;i<longitud_estadias;i++){
                                  var turista_id = estadias[i].turista_id;

                                  var fecha = estadias[i].fecha_desde.toString().substring(0,4);
                                  var year = parseInt(fecha);
                                  //console.log("año: " + año);
                      
                                  if((year>2009)&&(year<2019)){
                                        //console.log("entre");
                                        // recorro los turistas para obtener nacionalidad_id
                                        for(var j=0;j<longitud_turistas;j++){
                                              if(turista_id==turistas[j].id){
                                                    // recorro las nacionalidades para obtener el nombre
                                                    for(var k=0;k<longitud_nacionalidad;k++){
                                                        if(turistas[j].nacionalidad_id==nacionalidades[k].id){
                                                            var nombre = nacionalidades[k].nombre;
                                                            dict[nombre] = dict[nombre] + 1;// aca sumo cantidad_turistas_alojados
                                                            //console.log("nombre: " + nombre);
                                                            break;
                                                        }
                                                    }
                                                    break;
                                              }
                                        }
                                    
                                  }
                              }
                  
                      });//fin get estadias

              });//fin get turistas

              $scope.graficos = dict;
            
        });//fin get nacionalidades
    
  }//fin tipoalojamientoscontroller

  

  

  
  

}());
