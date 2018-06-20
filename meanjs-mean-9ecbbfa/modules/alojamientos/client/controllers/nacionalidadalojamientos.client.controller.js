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
  
              //diccionario cuya clave son las nacionalidades
              for(var i=0;i<longitud_nacionalidad;i++){
                key = nacionalidades[i].nombre;
                dict[key] = 0 ;
              }
                          
              $http.get('http://localhost:8000/api/turistas')
                  .then(function(response) {
              
                      var longitud_turistas = Object.keys(response.data).length;
                      var turistas = response.data;
  
                      $http.get('http://localhost:8000/api/estadias')
                          .then(function(response) {
                                  var longitud_estadias = Object.keys(response.data).length;
                                  var estadias = response.data;
                                  for(var i=0;i<longitud_estadias;i++){
                                    var turista_id = estadias[i].turista_id;
                                    var fecha = estadias[i].fecha_desde.toString().substring(0,4);
                                    var year = parseInt(fecha);
                        
                                    if((year>2009)&&(year<2019)){
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
                    
                                $scope.datos_alojamientos = dict;
                                
                                






                  
                        });//fin get estadias
  
                });//fin get turistas
  
  
          });//fin get nacionalidades de los turistas en alojamientos
  
         
      
    }//fin tipoalojamientoscontroller
  
    
  
    /*

              $scope.densityData = [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638];
              $scope.gravityData = [4000, 4000, 3000, 5000, 2000, 600, 1200, 1000];
              $scope.labels = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
              $scope.series = ['Alojamientos', 'Excursiones'];

    */
  
    
    
  
  }());
  