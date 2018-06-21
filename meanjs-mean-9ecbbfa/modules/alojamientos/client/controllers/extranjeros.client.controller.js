(function () {
  'use strict';

  angular
    .module('core')
    .controller('ExtranjerosController', ExtranjerosController);

  

  function ExtranjerosController($scope, $http) {
    

    $http.get('http://localhost:8000/api/turistas/nacionalidades')
          .then(function(response) {
              var longitud_nacionalidades_alojamientos = Object.keys(response.data).length;
              var diccionario_alojamientos = {};
              var diccionario_estadias = {};
              var key;
              var len;
              var nacionalidades = response.data;
  
              //diccionario cuya clave son las nacionalidades
              for(var i=0;i<longitud_nacionalidades_alojamientos;i++){
                key = nacionalidades[i].nombre;
                diccionario_alojamientos[key] = 0 ;
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
                                                      for(var k=0;k<longitud_nacionalidades_alojamientos;k++){
                                                          if(turistas[j].nacionalidad_id==nacionalidades[k].id){
                                                            var nombre = nacionalidades[k].nombre;
                                                            
                                                            diccionario_alojamientos[nombre] = diccionario_alojamientos[nombre] + 1;// aca sumo cantidad_turistas_alojados
                                                              //console.log("nombre: " + nombre);
                                                              break;
                                                          }
                                                      }
                                                      break;
                                                }
                                          }
                                      
                                    }
                                }
                    
                                
                                
                              
                               /* ###### aca empieza excursiones ##### */

                               $http.get('http://localhost:8080/api/turistas/nacionalidades/')
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
                                    
                                    
                                    
                                            //console.log("entre a turistas...");
                                            $http.get('http://localhost:8080/api/excursiones/')
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
                                                                                dict[nombre] = dict[nombre] + 1;
                                                                                break;
                                                                            }
                                                                        }
                                                                    }
                                                                
                                                            }
                                                        }



                                                        //console.log("que hay en: " + JSON.stringify(diccionario_alojamientos));
                                
                                
                                                        //console.log("valor: " + diccionario_alojamientos["argentino"]);

                                                        //console.log("valor: " + JSON.stringify(dict));


                                                        /*  aca empieza la logica del grafico  */

                                                        $scope.labels = [];
                                                        $scope.alojamientos = [];
                                                        $scope.excursiones = [];

                                                        //lleno mis labels
                                                        for(key in diccionario_alojamientos){
                                                            $scope.labels.push(key);
                                                        }
                                                        var existe = false;
                                                        for(key in diccionario_estadias){
                                                            for(var i=0;i<$scope.labels.length;i++){
                                                                if($cope.labels[i]==key){
                                                                    existe = true;
                                                                    break;
                                                                }
                                                            }
                                                            if(!existe){
                                                                $scope.labels.push(key);
                                                                existe = false;
                                                            }
                                                        }


                                                        var key_alojamiento;
                                                        var key_estadia;
                                                        existe = false;


                                                        //ahora voy recorriendo y armando los datos de mi grafico
                                                        for(var i=0;i<$scope.labels.length;i++){
                                                                existe = false;

                                                                for(key_alojamiento in diccionario_alojamientos){
                                                                    if(key_alojamiento==$scope.labels[i]){
                                                                        existe = true;
                                                                        break;
                                                                    }
                                                                }
                                                                
                                                                
                                                                if(existe){
                                                                    $scope.alojamientos.push(diccionario_alojamientos[key_alojamiento]);
                                                                }
                                                                else{
                                                                    $scope.alojamientos.push(0);
                                                                }

                                                                
                                                                //ahora recorro mis estadias
                                                                existe = false;
                                                                for(key_estadia in dict){
                                                                    if(key_estadia==$scope.labels[i]){
                                                                        existe = true;
                                                                        break;
                                                                    }
                                                                }
                                                                if(existe){
                                                                    $scope.excursiones.push(dict[key_estadia]);
                                                                }
                                                                else{
                                                                    $scope.excursiones.push(0);
                                                                }

                                                        }

                                                        //$scope.alojamientos = [4,4,4,4,4,4,4]
                                                        //$scope.excursiones = [10,10,10,10,10,10,10]
                                                        $scope.series = ['Alojamientos', 'Excursiones'];


                                                        
                                        
                                            });//fin get excursiones

                                    

                                    
                                    
                                });//fin get nacionalidades de excursiones


                  
                        });//fin get estadias
  

                });//fin get turistas
  
                

               

              

                

               
                        
                        
                      

                //$scope.alojamientos = [4,4,4,4,4,4,4]
                //$scope.excursiones = [10,10,10,10,10,10,10]
                //$scope.series = ['Alojamientos', 'Excursiones'];


          });//fin get nacionalidades de los turistas en alojamientos
    
  }//fin tipoalojamientoscontroller

  

  

  
  

}());


               //$scope.alojamientos = [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638];
              //$scope.excursiones = [4000, 4000, 3000, 5000, 2000, 600, 1200, 1000];
              //$scope.labels = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
              //$scope.series = ['Alojamientos', 'Excursiones'];


