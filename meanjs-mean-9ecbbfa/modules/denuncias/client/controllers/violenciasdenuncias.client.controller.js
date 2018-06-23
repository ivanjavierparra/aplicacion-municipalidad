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
  
          $http.get('http://localhost:3000/api/atenciones/')
          .then(function(response) {
              var longitud_atenciones = Object.keys(response.data).length;
              var dict = {};
              var key;
              var atenciones = response.data;
          
              $scope.muertes = {};
              $scope.muertes["2010"] = 0;
              $scope.muertes["2011"] = 0;
              $scope.muertes["2012"] = 0;
              $scope.muertes["2013"] = 0;
              $scope.muertes["2014"] = 0;
              $scope.muertes["2015"] = 0;
              $scope.muertes["2016"] = 0;
              $scope.muertes["2017"] = 0;
              $scope.muertes["2018"] = 0;
      
              for(var i=0;i<longitud_atenciones;i++){
                  if(atenciones[i].suceso == 1){//el 1 es violencia de genero
                      var fecha = atenciones[i].fecha.toString().substring(0,4);
                      var year = parseInt(fecha);
          
                      if((year>2009)&&(year<2019)){
                          
                            if(atenciones[i].muerto){
                                $scope.muertes[fecha] = $scope.muertes[fecha] + 1;
                            }
                            
                      
                      }
                  }
              }
  
              
              $scope.labels = [];
              $scope.datos_denuncias = [];
              
              var label;
              
              for (label in $scope.grafico){
                $scope.labels.push(label);
                $scope.datos_denuncias.push($scope.grafico[label]);
              }
      
  
              $scope.datos_muertes = [];
              
              var i;
              
              for (i in $scope.muertes){
                $scope.datos_muertes.push($scope.muertes[i]);
              }
  
              $scope.series = ["Muertes","Denuncias"];
      
              $scope.options = {
                scales: {
                  yAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: 'Cantidad de Muertes/Denuncias'
                    }
                  }],
                  xAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: 'Años'
                    }
                  }]
                }     
              }
  
          });
          
      });
    }
  
    
  
  
    
  
    
  
    
  
    
    
  
  }());
  
  