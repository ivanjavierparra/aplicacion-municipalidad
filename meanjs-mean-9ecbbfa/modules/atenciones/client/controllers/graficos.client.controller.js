(function () {
  'use strict';

  angular
    .module('core')
    .controller('GraficosController', GraficosController);

  /*function HelloController($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
    then(function(response) {
        $scope.greeting = response.data;
    });
  }*/

  function GraficosController($scope, $http) {
    $scope.data = {};
 
        $http.get('http://localhost:3000/api/problemas/')
            .then(function(response) {
                var longitud_problemas = Object.keys(response.data).length;
                var dict = {};
                var key;
                var len;
                var problemas = response.data;

                //diccionario cuya clave son los nombres de los problemas
                for(var i=0;i<longitud_problemas;i++){
                    key = problemas[i].nombre;
                    dict[key] = 0 ;
                }

                  $http.get('http://localhost:3000/api/atenciones/')
                  .then(function(response) {
                      var longitud_atenciones = Object.keys(response.data).length;
                      var atenciones = response.data;
  
                      //recorro las atenciones
                      for(var i=0;i<longitud_atenciones;i++){
                          var atencion_problema = atenciones[i].problema;
                          
                          //recorro los problemas
                          for(var j=0;j<longitud_problemas;j++){
                              var id = problemas[j].id_problema;
                              if(atencion_problema==id){
                                  var nombre = problemas[j].nombre;
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
                      
                      
                  }); //FIN TIPOS
              }); //FIN INFRACCIONES
  
    

  
  
      
    }
  
  /*
    $scope.data = {};
 
        $http.get('http://localhost:3000/api/problemas/')
            .then(function(response) {
                var longitud_problemas = Object.keys(response.data).length;
                var dict = {};
                var key;
                var len;
                var problemas = response.data;

                //diccionario cuya clave son los nombres de los problemas
                for(var i=0;i<longitud_problemas;i++){
                    key = problemas[i].nombre;
                    dict[key] = 0 ;
                }

                  $http.get('http://localhost:3000/api/atenciones/')
                  .then(function(response) {
                      var longitud_atenciones = Object.keys(response.data).length;
                      var atenciones = response.data;
  
                      //recorro las atenciones
                      for(var i=0;i<longitud_atenciones;i++){
                          var atencion_problema = atenciones[i].problema;
                          
                          //recorro los problemas
                          for(var j=0;j<longitud_problemas;j++){
                              var id = problemas[j].id_problema;
                              if(atencion_problema==id){
                                  var nombre = problemas[j].nombre;
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
                    console.log("label " + label);
                    $scope.labels.push(label);
                    $scope.datos_label.push($scope.graficos[label]);
                    }
                      
                      
                  }); //FIN TIPOS
              }); //FIN INFRACCIONES
      
    }
  */

}());
