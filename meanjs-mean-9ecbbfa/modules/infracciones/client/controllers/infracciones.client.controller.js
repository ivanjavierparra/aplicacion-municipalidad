(function () {
  'use strict';

  angular
    .module('core')
    .controller('InfraccionesController', InfraccionesController);

  

  function InfraccionesController($scope, $http) {
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

        $http.get('http://localhost:8000/api/infracciones/tipos')
            .then(function(response) {
                var longitud_tipos_infracciones = Object.keys(response.data).length;
                var dict = {};
                var key;
                var len;
                var tipos_infracciones = response.data;

                //diccionario cuya clave son los nombres de los problemas
                for(var i=0;i<longitud_tipos_infracciones;i++){
                  key = tipos_infracciones[i].nombre;
                  dict[key] = 0 ;
                }

                $http.get('http://localhost:8000/api/infracciones/')
                  .then(function(response) {
                      var longitud_infracciones = Object.keys(response.data).length;
                      var infracciones = response.data;
  
                      //recorro las infracciones
                      for(var i=0;i<longitud_infracciones;i++){
                          var id_tipo_infraccion = infracciones[i].tipo_id;
                          
                          //recorro los tipos de infracciones
                          for(var j=0;j<longitud_tipos_infracciones;j++){
                              var id = tipos_infracciones[j].id;
                              if(id_tipo_infraccion==id){
                                  var nombre = tipos_infracciones[j].nombre;
                                  dict[nombre] = dict[nombre] + 1;
                                  break;
                              }
                          }
                      }



                    $scope.graficos = dict;
  
                      
                    $scope.labels = [];
                    $scope.datos_label = [];
                    
                    var label;
                    
                    
                    for (label in $scope.graficos){
                    $scope.labels.push(label);
                    $scope.datos_label.push($scope.graficos[label]);
                    }
                      
                    console.log(JSON.stringify($scope.labels));


                    $scope.series = ["soborno", "buenas"];
                    

                    console.log(JSON.stringify($scope.series));
                  }); //FIN TIPOS

                
            }); //Fin get tipo infracciones

      }//fin else
    }//fin filtrar

    
    
    
  }

  

  

  
  

}());
