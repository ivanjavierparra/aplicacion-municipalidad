(function () {
  'use strict';

  angular
    .module('core')
    .controller('DenunciasController', DenunciasController);

  

  function DenunciasController($scope, $http) {
    

        $http.get('http://localhost:8080/api/denuncias/tipos/')
            .then(function(response) {
                var longitud_tipos_denuncias = Object.keys(response.data).length;
                var dict = {};
                var key;
                var len;
                var tipos_denuncias = response.data;

                
                for(var i=0;i<longitud_tipos_denuncias;i++){
                  key = tipos_denuncias[i].nombre;
                  dict[key] = 0 ;
                }


                $http.get('http://localhost:8080/api/denuncias/')
                .then(function(response) {
                    var longitud_denuncias = Object.keys(response.data).length;
                    var denuncias = response.data;
                    //dict = new Array(len);

                    //recorro las denuncias
                    for(var i=0;i<longitud_denuncias;i++){
                        var id_tipo = denuncias[i].tipo_denuncia;
                        
                        //recorro los tipos de denuncias
                        for(var j=0;j<longitud_tipos_denuncias;j++){
                            var id = tipos_denuncias[j].id;
                            if(id_tipo==id){
                                var nombre = tipos_denuncias[j].nombre;
                                dict[nombre] = dict[nombre] + 1;
                                break;
                            }
                        }
                    }
                    

                    $scope.graficos = dict;
                    
                    
                });
            });

      
    }//fin DenunciasController


    
  

  

  

  
  

}());
