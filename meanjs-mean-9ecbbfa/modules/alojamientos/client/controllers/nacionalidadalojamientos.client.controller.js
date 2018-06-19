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
                                                          console.log("NOMBRE: " + nombre + " , VALOR: " + dict[nombre])
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
                  
                              $scope.grafico_a = dict;

                              $scope.labels_a = [];
                              $scope.datos_a = [];
                              
                              var indice_a;
                              
                              for (indice_a in $scope.grafico_a){
                                $scope.labels_a.push(indice_a);
                                $scope.datos_a.push($scope.grafico_a[indice_a]);
                              }
                
                              console.log("alojamientos nacionalidad: " + $scope.labels_a);
                              console.log("alojamientos nacionalidad: " + $scope.datos_a);
                
                      });//fin get estadias

              });//fin get turistas


        });//fin get nacionalidades

        $http.get('http://127.0.0.1:8080/api/turistas/nacionalidades/')
        .then(function(response) {
            var longitud_nacionalidad = Object.keys(response.data).length;
            var dict_2 = {};
            var key;
            var len;
            var nacionalidades = response.data;

          
            //$scope.graficos = {};
            //armo un diccionario, cuya clave son las nacionalidades, inicializado cada par en cero.
            for(var i=0;i<longitud_nacionalidad;i++){
              key = nacionalidades[i].nombre;
              dict_2[key] = 0 ;
            }
            
            
                    //console.log("entre a turistas...");
                    $http.get('http://127.0.0.1:8080/api/excursiones/')
                        .then(function(response) {
                         // console.log("entre a estadias...");
                                var longitud_excursiones = Object.keys(response.data).length;
                                var excursiones = response.data;


                                for(var i=0;i<longitud_excursiones;i++){
                                    

                                    var fecha = excursiones[i].fecha.toString().substring(0,4);
                                    var year = parseInt(fecha);
                                    //console.log("año: " + año);
                        
                                    if((year>2009)&&(year<2019)){
                                            //console.log("entre");
                                            // recorro las excursiones para obtener nacionalidad_id
                                            for(var j=0;j<excursiones[i].turistas.length;j++){
                                                //console.log("turista: " + excursiones[i].turistas[j].nombre )
                                                var id_nacionalidad = excursiones[i].turistas[j].nacionalidad;
                                                
                                                //recorro las nacionalidades para encontrar su nombre
                                                for(var k=0;k<longitud_nacionalidad;k++){
                                                    //
                                                    if(nacionalidades[k].id == id_nacionalidad){
                                                        var nombre = nacionalidades[k].nombre;
                                                        //console.log("nacionalidad: " + nacionalidades[k].nombre);
                                                        dict_2[nombre] = dict_2[nombre] + 1;
                                                        break;
                                                    }
                                                }
                                            }
                                        
                                    }
                                }
                  
                      });//fin get excursiones
              
              $scope.graficos = dict_2;
              $scope.labels = [];
              $scope.datos_e = [];
              
              var indice_e;
              
              for (indice_e in $scope.graficos){
                $scope.labels.push(indice_e);
                $scope.datos_e.push($scope.graficos[indice_e]);
              }
  
              console.log("excursiones nacionalidad: " + $scope.labels);
              console.log("excursiones nacionalidad: " + $scope.datos_e);

            
        });//fin get nacionalidades

    
  }//fin tipoalojamientoscontroller

  

  

  
  

}());
