(function () {
  'use strict';

  angular
    .module('core')
    .controller('NacionalidadExcursionesController', NacionalidadExcursionesController);

  

  function NacionalidadExcursionesController($scope, $http) {
    

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
                  
                      });//fin get estadias

              

              $scope.graficos = dict;
            
        });//fin get nacionalidades
    
  }//fin tipoalojamientoscontroller

  

  

  
  

}());
