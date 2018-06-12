(function () {
  'use strict';

  angular
    .module('core')
    .controller('CrecimientoExcursionesController', CrecimientoExcursionesController);

  

  function CrecimientoExcursionesController($scope, $http) {
    

    $http.get('http://localhost:8080/api/excursiones')
        .then(function(response) {
            var longitud_excursiones = Object.keys(response.data).length;
            var dict = {};
            var key;
            var len;
            var excursiones = response.data;

          
            
            //necesito el id de violencia de genero asi hago el get...

            

            //solucion
            //armo un diccionaario, cuya clave son los años desde 2000 hasta 2018, inicializado cada par en cero.
            $scope.graficos = {};
            $scope.graficos["2010"] = 0;
            $scope.graficos["2011"] = 0;
            $scope.graficos["2012"] = 0;
            $scope.graficos["2013"] = 0;
            $scope.graficos["2014"] = 0;
            $scope.graficos["2015"] = 0;
            $scope.graficos["2016"] = 0;
            $scope.graficos["2017"] = 0;
            $scope.graficos["2018"] = 0;
            
            
            
            for(var i=0;i<longitud_excursiones;i++){
              var fecha = excursiones[i].fecha.toString().substring(0,4);
              var year = parseInt(fecha);

                if((year>2009)&&(year<2019)){
                
                    $scope.graficos[fecha] = $scope.graficos[fecha] + 1;
                
                
              }
            }

            
        });//fin get
    
  }//fin tipoalojamientoscontroller

  

  

  
  

}());
