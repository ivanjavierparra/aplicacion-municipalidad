(function () {
  'use strict';

  angular
    .module('core')
    .controller('SucesosController', SucesosController);

  

  function SucesosController($scope, $http) {
    $http.get('http://localhost:3000/api/atenciones').
    then(function(response) {
        var longitud = Object.keys(response.data).length;
        var dict = {};
        var key;
        var len;
        var datos = response.data;

       
        
        //necesito el id de violencia de genero asi hago el get...

        

        //solucion
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
        
        
        $scope.longitud = longitud;
        for(var i=0;i<longitud;i++){
           var fecha = response.data[i].fecha.toString().substring(0,4);
           var year = parseInt(fecha);

             if((year>2009)&&(year<2019)){
             if(response.data[i].muerto){
                $scope.grafico[fecha] = $scope.grafico[fecha] + 1;
             }
             
           }
        }

        
    });
  }

  


  

  

  

  
  

}());

