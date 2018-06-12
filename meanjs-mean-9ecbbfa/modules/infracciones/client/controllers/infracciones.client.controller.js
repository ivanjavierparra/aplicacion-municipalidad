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

        $http.get('http://localhost:8000/api/infracciones')
            .then(function(response) {
                var longitud = Object.keys(response.data).length;
                var dict = {};
                var key;
                var len;
                var datos = response.data;

                $http.get('http://localhost:8000/api/infracciones/tipos')
                .then(function(response) {
                    len = Object.keys(response.data).length;
                    //dict = new Array(len);

                    //creo un diccionario: clave=id del tipo de infraccion ; valor = 0
                    for(var i=0;i<len;i++){
                      key = parseInt(response.data[i].id);
                      dict[key] = 0 ;
                    }

                    //recorro mis infracciones, y las acumulo en mi diccionario
                    for(var j=0;j<longitud;j++){
                      //aca comparo las fechas
                      var fecha = new Date(datos[j].fecha);
                      fecha = fecha.getTime();
                      //console.log("fecha: " + fecha.getTime());
                      if((fecha>=fdesde)&&(fecha<=fhasta)){
                          key = parseInt(datos[j].tipo_id);
                          dict[key] = dict[key] + 1;
                      }
                    }

                    //creo un nuevo diccionario, clave = nombre del tipo de infraccion ;  valor= valor del diccionario anterior
                    var resultado = {};
                    for (key in dict) {
                      // Hacer algo con la clave key
                      for(var i=0;i<len;i++){
                        if(response.data[i].id==key){
                          resultado[response.data[i].nombre] = dict[key];
                        }
                      }
                    }

                    //creo un nuevo diccionario, clave = nombre del tipo de infraccion ;  valor= valor del diccionario anterior
                    $scope.graficos = {};
                    for (key in dict) {
                      // Hacer algo con la clave key
                      for(var i=0;i<len;i++){
                        if(response.data[i].id==key){
                          $scope.graficos[response.data[i].nombre] = dict[key];
                        }
                      }
                    }

                    
                    $scope.labels = [];
                    $scope.datos_label = [];
                    
                    var label;
                    
                    for (label in $scope.graficos){
                      console.log("label " + label);
                      $scope.labels.push(label);
                      $scope.datos_label.push($scope.graficos[label]);
                    }
                    
                    
                }); //FIN TIPOS
            }); //FIN INFRACCIONES

      }//fin else
    }//fin filtrar


    
  }

  

  

  
  

}());
