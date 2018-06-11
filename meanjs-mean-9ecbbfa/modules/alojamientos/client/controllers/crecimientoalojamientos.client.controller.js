(function () {
  'use strict';

  angular
    .module('core')
    .controller('CrecimientoAlojamientosController', CrecimientoAlojamientosController);

  

  function CrecimientoAlojamientosController($scope, $http) {
    

    $http.get('http://localhost:8000/api/estadias')
        .then(function(response) {
            var longitud = Object.keys(response.data).length;
            var dict = {};
            var key;
            var len;
            var datos = response.data;

          
            
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
            
            
            
            for(var i=0;i<longitud;i++){
              var fecha = response.data[i].fecha_desde.toString().substring(0,4);
              var year = parseInt(fecha);

                if((year>2009)&&(year<2019)){
                
                    $scope.graficos[fecha] = $scope.graficos[fecha] + 1;
                
                
              }
            }

            
        });//fin get
    
  }//fin tipoalojamientoscontroller

  

  

  
  

}());
