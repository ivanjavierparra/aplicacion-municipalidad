(function () {
  'use strict';

  angular
    .module('core')
    .controller('TiposAlojamientosController', TiposAlojamientosController);

  

  function TiposAlojamientosController($scope, $http) {
    $scope.data = {};
    $scope.filtrar = ($event) => {
      //console.log($scope);  
      //console.log($scope.data.fdesde);
      //console.log($scope.data.fhasta);
      if((!$scope.data.fdesde) || (!$scope.data.fhasta)){
        console.log("no ingreso fecha");
        return;
      }
      var fdesde = $scope.data.fdesde.getTime();
      var fhasta = $scope.data.fhasta.getTime();

      $http.get('http://localhost:8000/api/estadias')
        .then(function(response) {
            var longitud = Object.keys(response.data).length;
            var dict = {};
            var key;
            var len;
            var datos = response.data;

            $http.get('http://localhost:8000/api/alojamientos')
                .then(function(response) {
                    len = Object.keys(response.data).length;
                    
                    $scope.grafico = {};
                    $scope.grafico["5 Estrellas"] = 0;
                    $scope.grafico["4 Estrellas"] = 0;
                    $scope.grafico["3 Estrellas"] = 0;
                    $scope.grafico["2 Estrellas"] = 0;
                    $scope.grafico["1 Estrellas"] = 0;
                    $scope.grafico["Apart Hotel"] = 0;
                    $scope.grafico["Motel"] = 0;

                    //recorro las estadias
                    for(var i=0;i<longitud;i++){
                        //console.log(datos[i].fecha_desde);
                        var fecha_estadia = datos[i].fecha_desde;
                        fecha_estadia = new Date(fecha_estadia);
                        fecha_estadia = fecha_estadia.getTime();
                        if((fecha_estadia>=fdesde)&&(fecha_estadia<=fhasta)){
                          var id_alojamiento = datos[i].alojamiento_id;
                          //recorro los alojamientos
                          for(var j=0;j<len;j++){
                              if(response.data[j].id==id_alojamiento){
                                  var categoria = response.data[j].categoria;
                                  $scope.grafico[categoria] = $scope.grafico[categoria] + 1; //aca: si son varios turistas, aca sumo la cant de turistas.
                              }
                          }
                        }
                        
                    }

                    
                    $scope.labels = [];
                    $scope.datos_label = [];
                    
                    var label;
                    
                    for (label in $scope.grafico){
                      $scope.labels.push(label);
                      $scope.datos_label.push($scope.grafico[label]);
                    }



                });//fin get alojamientos

        });//fin get estadias

        
    }//fin filtrar

  }//fin tipoalojamientoscontroller

  

  

  
  

}());
