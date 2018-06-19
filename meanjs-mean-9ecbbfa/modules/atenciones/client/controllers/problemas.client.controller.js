(function () {
  'use strict';

  angular
    .module('core')
    .controller('ProblemasController', ProblemasController);

  function ProblemasController($http, $scope) {
      $scope.data = {};
      $scope.filtrar = ($event) => {
          if(!$scope.data.problema){
              console.log("no se ha ingresado nada en el combo");
          }
          else{
              var cadena = 'http://localhost:3000/api/problemas/' + $scope.data.problema + '';
              $http.get(cadena)
                .then(function(response) {
                      var longitud = Object.keys(response.data).length;
                      var id_problema_seleccionado = response.data.id_problema;

                      $http.get('http://localhost:3000/api/atenciones')
                          .then(function(response) {
                              var longitud = Object.keys(response.data).length;
                              var dict = {};
                              var key;
                              var len;
                              var datos = response.data;
                              
                              //armo un diccionaario, cuya clave son los años desde 2000 hasta 2018, inicializado cada par en cero.
                              $scope.grafico = {};
                              $scope.grafico["2010"] = 0;
                              $scope.grafico["2011"] = 0;
                              $scope.grafico["2012"] = 0;
                              $scope.grafico["2013"] = 0;
                              $scope.grafico["2014"] = 0;
                              $scope.grafico["2015"] = 0;
                              $scope.grafico["2016"] = 0;
                              $scope.grafico["2017"] = 0;
                              $scope.grafico["2018"] = 0;

                              //recorro las atenciones
                              for(var i=0;i<longitud;i++){
                                if(response.data[i].problema == id_problema_seleccionado){
                                    var fecha = response.data[i].fecha.toString().substring(0,4);
                                    var año = parseInt(fecha);
                                    if((año>2009)&&(año<2019)){
                                      $scope.grafico[fecha] = $scope.grafico[fecha] + 1;
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

                          });
                });
          }
    }

    //cargo el combo con los problemas
    $http.get('http://localhost:3000/api/problemas')
        .then(function(response) {
              var longitud = Object.keys(response.data).length;
              $scope.problemas = [longitud];
              for(var i=0;i<longitud;i++){
                $scope.problemas[i] = response.data[i];
              }
    });
  }
}());

