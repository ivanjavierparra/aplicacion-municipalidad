(function () {
  'use strict';

  angular
    .module('core')
    .controller('ViolenciasDenunciasController', ViolenciasDenunciasController);

  

  function ViolenciasDenunciasController($scope, $http) {
    $http.get('http://localhost:8080/api/denuncias/')
    .then(function(response) {
        var longitud_denuncias = Object.keys(response.data).length;
        var dict = {};
        var key;
        var len;
        var denuncias = response.data;

       
        
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
        
        
        //recorro las denuncias
        for(var i=0;i<longitud_denuncias;i++){
            if(response.data[i].tipo_denuncia == 1){//el 1 es violencia de genero
                var fecha = response.data[i].fecha.toString().substring(0,4);
                var year = parseInt(fecha);
    
                if((year>2009)&&(year<2019)){
                    
                    $scope.grafico[fecha] = $scope.grafico[fecha] + 1;
                
                }
            }
        }

        
    });
  }

  


  

  

  

  
  

}());

