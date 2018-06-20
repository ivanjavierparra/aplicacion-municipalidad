(function () {
  'use strict';

  angular
    .module('core')
    .controller('TiposExcursionesController', TiposExcursionesController);

  

  function TiposExcursionesController($scope, $http) {
    $scope.data = {};
    $scope.filtrar = ($event) => {
      //console.log($scope);  
      //obtengo las fechas desde la view
      if((!$scope.data.fdesde) || (!$scope.data.fhasta)){
        console.log("no ingreso fecha");
      }
      else{
        //var fdesde = $scope.data.fdesde.toISOString();
        //var fhasta = $scope.data.fhasta.toISOString();
        var fdesde = $scope.data.fdesde.getTime();
        var fhasta = $scope.data.fhasta.getTime();
        console.log("fdesde: " + fdesde);
        console.log("fhasta: " + fhasta);
        //validar que fdesde < fhasta

        //fdesde = fdesde.substring(0,10);
        //fdesde = new Date(fdesde);
        //fhasta = fhasta.substring(0,10);

        $http.get('http://localhost:8080/api/tiposexcursiones/')
            .then(function(response) {
                var longitud_tipos_de_excursion = Object.keys(response.data).length;
                var dict = {};
                var key;
                var len;
                var tipos_de_excursion = response.data;

                

                for(var i=0;i<longitud_tipos_de_excursion;i++){
                  key = tipos_de_excursion[i].nombre;
                  dict[key] = 0 ;
                }
                

                $http.get('http://localhost:8080/api/excursiones/')
                    .then(function(response) {
                        var longitud_excursiones = Object.keys(response.data).length;
                        var excursiones = response.data;

                        //recorro excursiones
                        for(var i=0;i<longitud_excursiones;i++){
                              var fecha = new Date(excursiones[i].fecha);
                              fecha = fecha.getTime();
                              if((fecha>=fdesde)&&(fecha<=fhasta)){
                                    var tipo = excursiones[i].tipo;
                                    for(var j=0;j<longitud_tipos_de_excursion;j++){
                                      if(tipo==tipos_de_excursion[j].id){
                                          var nombre = tipos_de_excursion[j].nombre;
                                          var cantidad_turistas = excursiones[i].turistas.length;
                                          dict[nombre] = dict[nombre] + cantidad_turistas;
                                      }
                                    }
                              }
                        }
                        
                        
                        $scope.grafico = dict;

                        $scope.labels = [];
                        $scope.datos_label = [];
                        
                        var label;
                        
                        for (label in $scope.grafico){
                          $scope.labels.push(label);
                          $scope.datos_label.push($scope.grafico[label]);
                        }

                        

                        
                        
                    });//get excursiones
            });//get tipos de excursion

      }//fin else
    }//fin filtrar


    
  }

  

  

  
  

}());
