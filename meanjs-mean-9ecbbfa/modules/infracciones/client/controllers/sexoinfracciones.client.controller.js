(function () {
  'use strict';

  angular
    .module('core')
    .controller('SexoInfraccionesController', SexoInfraccionesController);

  

  function SexoInfraccionesController($scope, $http) {
    $http.get('http://localhost:8000/api/infracciones')
    .then(function(response) {
        var longitud = Object.keys(response.data).length;
        var dict = {};
        var key;
        var len;
        var datos = response.data;//infracciones

        $http.get('http://localhost:8000/api/infractores')
        .then(function(response) {
            len = Object.keys(response.data).length;
            //dict = new Array(len);

            //creo un diccionario: clave=id del tipo de infraccion ; valor = 0
            $scope.graficos = {};
            $scope.graficos["masculino"] = 0;
            $scope.graficos["femenino"] = 0;
            
            

            //recorro mis infracciones, y las acumulo en mi diccionario
            for(var j=0;j<longitud;j++){
              for(var i=0;i<len;i++){
                  if(datos[j].infractor_id == response.data[i].id){
                        if(response.data[i].sexo == "masculino"){
                          $scope.graficos["masculino"] = $scope.graficos["masculino"] + 1;
                        }else{
                          $scope.graficos["femenino"] = $scope.graficos["femenino"] + 1;
                        }
                        
                  }
              }
            }

            


            
          
            
           

        });

        


        
    });
  }

  

  

  
  

}());
