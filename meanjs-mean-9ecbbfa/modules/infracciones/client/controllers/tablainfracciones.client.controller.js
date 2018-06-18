(function () {
  'use strict';

  angular
    .module('core')
    .controller('TablainfraccionesController', TablainfraccionesController);

  /*function HelloController($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
    then(function(response) {
        $scope.greeting = response.data;
    });
  }*/

  function TablainfraccionesController($scope, $http) {
    $http.get('http://localhost:8000/api/infracciones')
    .then(function(response) {
        var longitud_infracciones = Object.keys(response.data).length;
        var infracciones = response.data;
        $scope.infracciones = [];
        for(var i=0;i<longitud_infracciones;i++){
          var fecha = infracciones[i].fecha.toString().substring(0,4);
          var year = parseInt(fecha);

            if((year>2009)&&(year<2019)){
            
               //$scope.infracciones[fecha] = $scope.infracciones[fecha] + 1;
               var item = {
                 "fecha" : year,
                 "pagada" : infracciones[i].pagada
               };
               $scope.infracciones.push(item);
          }

          
       }

        $scope.contadorInfracciones = {};
        $scope.contadorInfracciones["2010"] = 0;
        $scope.contadorInfracciones["2011"] = 0;
        $scope.contadorInfracciones["2012"] = 0;
        $scope.contadorInfracciones["2013"] = 0;
        $scope.contadorInfracciones["2014"] = 0;
        $scope.contadorInfracciones["2015"] = 0;
        $scope.contadorInfracciones["2016"] = 0;
        $scope.contadorInfracciones["2017"] = 0;
        $scope.contadorInfracciones["2018"] = 0;
        
        $scope.contadorPagadas = {};
        $scope.contadorPagadas["2010"] = 0;
        $scope.contadorPagadas["2011"] = 0;
        $scope.contadorPagadas["2012"] = 0;
        $scope.contadorPagadas["2013"] = 0;
        $scope.contadorPagadas["2014"] = 0;
        $scope.contadorPagadas["2015"] = 0;
        $scope.contadorPagadas["2016"] = 0;
        $scope.contadorPagadas["2017"] = 0;
        $scope.contadorPagadas["2018"] = 0;

        
        for(var i=0;i<$scope.infracciones.length;i++){
            var year = $scope.infracciones[i].fecha.toString();
            
            $scope.contadorInfracciones[year] = $scope.contadorInfracciones[year] + 1;
            if($scope.infracciones[i].pagada==0){
              $scope.contadorPagadas[year] = $scope.contadorPagadas[year] + 1;
            }
        }
        
        
        $scope.graficos = [];

        var item_2010 = {
          "fecha" : 2010,
          "cantidad" : $scope.contadorInfracciones["2010"],
          "pagada" : $scope.contadorPagadas["2010"]
        };

        var item_2011 = {
          "fecha" : 2011,
          "cantidad" : $scope.contadorInfracciones["2011"],
          "pagada" : $scope.contadorPagadas["2011"]
        };
        
        var item_2012 = {
          "fecha" : 2012,
          "cantidad" : $scope.contadorInfracciones["2012"],
          "pagada" : $scope.contadorPagadas["2012"]
        };

        var item_2013 = {
          "fecha" : 2013,
          "cantidad" : $scope.contadorInfracciones["2013"],
          "pagada" : $scope.contadorPagadas["2013"]
        };

        var item_2014 = {
          "fecha" : 2014,
          "cantidad" : $scope.contadorInfracciones["2014"],
          "pagada" : $scope.contadorPagadas["2014"]
        };

        var item_2015 = {
          "fecha" : 2015,
          "cantidad" : $scope.contadorInfracciones["2015"],
          "pagada" : $scope.contadorPagadas["2015"]
        };

        var item_2016 = {
          "fecha" : 2016,
          "cantidad" : $scope.contadorInfracciones["2016"],
          "pagada" : $scope.contadorPagadas["2016"]
        };

        var item_2017 = {
          "fecha" : 2017,
          "cantidad" : $scope.contadorInfracciones["2017"],
          "pagada" : $scope.contadorPagadas["2017"]
        };

        var item_2018 = {
          "fecha" : 2018,
          "cantidad" : $scope.contadorInfracciones["2018"],
          "pagada" : $scope.contadorPagadas["2018"]
        };

        $scope.graficos.push(item_2010);
        $scope.graficos.push(item_2011);
        $scope.graficos.push(item_2012);
        $scope.graficos.push(item_2013);
        $scope.graficos.push(item_2014);
        $scope.graficos.push(item_2015);
        $scope.graficos.push(item_2016);
        $scope.graficos.push(item_2017);
        $scope.graficos.push(item_2018);
    });
  }

  

  

  
  

}());
