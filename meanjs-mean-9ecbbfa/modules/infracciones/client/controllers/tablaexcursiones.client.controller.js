(function () {
  'use strict';

  angular
    .module('core')
    .controller('TablaexcursionesController', TablaexcursionesController);

  /*function HelloController($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
    then(function(response) {
        $scope.greeting = response.data;
    });
  }*/

  function TablaexcursionesController($scope, $http) {
    $http.get('http://localhost:8080/api/excursiones/')
    .then(function(response) {
        var longitud_excursiones = Object.keys(response.data).length;
        var excursiones = response.data;
        
        $http.get('http://localhost:8080/api/empresas/')
        .then(function(response) {
          var longitud_empresas = Object.keys(response.data).length;
          var empresas = response.data;
          
          $http.get('http://localhost:8080/api/tiposexcursiones/')
          .then(function(response) {
            var longitud_tipos_excursiones = Object.keys(response.data).length;
            var tipos_excursiones = response.data;
            $scope.graficos = [];

              for(var i=0;i<longitud_excursiones;i++){
                  var id_empresa = excursiones[i].empresa;
                  var id_tipo_excursion = excursiones[i].tipo;
                  var cantidad = 1;
                  var j;

                  for(j = i + 1; j<longitud_excursiones; j++){
                      if((excursiones[j].empresa==id_empresa)&&(excursiones[j].tipo==id_tipo_excursion)){
                        cantidad = cantidad + 1;
                      }
                  }

                 console.log("dsadasdsadsds" + cantidad + " id_empresa: " + id_empresa + " id_tipo: " + id_tipo_excursion);
                    
                  

                  var nombre_empresa;
                  //obtengo el nombre de la empresa
                  for(var z=0;z<longitud_empresas;z++){
                    if(empresas[z].id==id_empresa){
                      nombre_empresa = empresas[z].nombre;
                      break;
                    }
                  }

                  var nombre_tipo_excursion;
                  //obtengo el nombre de tipo excursion
                  for(var z=0;z<longitud_tipos_excursiones;z++){
                    if(tipos_excursiones[z].id==id_tipo_excursion){
                      nombre_tipo_excursion = tipos_excursiones[z].nombre;
                      break;
                    }
                  }

                  //controlo que no lo haya agregado
                  var bandera = false;
                  var grafico;

                  for(grafico in $scope.graficos){
                      if((grafico.empresa==nombre_empresa)&&(grafico.tipo==nombre_tipo_excursion)){
                        bandera = true;
                      }
                  }

                  if(!bandera){
                      var item = {
                        "empresa" : nombre_empresa,
                        "tipo" : nombre_tipo_excursion,
                        "cantidad" : cantidad
                      };
                      $scope.graficos.push(item);
                      bandera = false;
                  }
              } 
          });
          


          

          

          
           

        });

        

       

        
        
        
        

        
    });
  }

  

  

  
  

}());
