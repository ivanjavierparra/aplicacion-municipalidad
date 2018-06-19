(function () {
  'use strict';

  angular
    .module('core')
    .controller('SexoInfraccionesController', SexoInfraccionesController);

  

  function SexoInfraccionesController($scope, $http) {
    $http.get('http://localhost:8000/api/infracciones')
    .then(function(response) {
        var longitud_infracciones = Object.keys(response.data).length;
        var dict = {};
        var key;
        var len;
        var infracciones = response.data;//infracciones

        $http.get('http://localhost:8000/api/infractores')
        .then(function(response) {
            var longitud_infractores = Object.keys(response.data).length;
            var infractores = response.data;
            //dict = new Array(len);

            //creo un diccionario: clave=id del tipo de infraccion ; valor = 0
            $scope.graficos = {};
            $scope.graficos["masculino"] = 0;
            $scope.graficos["femenino"] = 0;
            
            $scope.graficosMasculino = {};
            $scope.graficosMasculino["2010"] = 0;
            $scope.graficosMasculino["2011"] = 0;
            $scope.graficosMasculino["2012"] = 0;
            $scope.graficosMasculino["2013"] = 0;
            $scope.graficosMasculino["2014"] = 0;
            $scope.graficosMasculino["2015"] = 0;
            $scope.graficosMasculino["2016"] = 0;
            $scope.graficosMasculino["2017"] = 0;
            $scope.graficosMasculino["2018"] = 0;
            
            $scope.graficosFemenino = {};
            $scope.graficosFemenino["2010"] = 0;
            $scope.graficosFemenino["2011"] = 0;
            $scope.graficosFemenino["2012"] = 0;
            $scope.graficosFemenino["2013"] = 0;
            $scope.graficosFemenino["2014"] = 0;
            $scope.graficosFemenino["2015"] = 0;
            $scope.graficosFemenino["2016"] = 0;
            $scope.graficosFemenino["2017"] = 0;
            $scope.graficosFemenino["2018"] = 0;


            //recorro mis infracciones, y las acumulo en mi diccionario
            for(var i=0;i<longitud_infracciones;i++){
                //recorro los infractores

                var fecha = infracciones[i].fecha.toString().substring(0,4);
                var year = parseInt(fecha);

                if((year>2009)&&(year<2019)){
                  
                    for(var j=0;i<longitud_infractores+10;j++){
                        if(infracciones[i].infractor_id == infractores[j].id){
                              if(infractores[j].sexo == "masculino"){
                                $scope.graficos["masculino"] = $scope.graficos["masculino"] + 1;
                                $scope.graficosMasculino[fecha] = $scope.graficosMasculino[fecha] + 1;
                              }
                              if(infractores[j].sexo == "femenino"){
                                $scope.graficos["femenino"] = $scope.graficos["femenino"] + 1;
                                $scope.graficosFemenino[fecha] = $scope.graficosFemenino[fecha] + 1;
                              }
                              break;
                        }
                     }
                }
            }



            $scope.labels = [];
            $scope.datos_label = [];
            
            var label;
            
            for (label in $scope.graficos){
              $scope.labels.push(label);
              $scope.datos_label.push($scope.graficos[label]);
            }
            

            $scope.labels_m = [];
            $scope.datos_label_m = [];
            
            var label_m;
            
            for (label_m in $scope.graficosMasculino){
              $scope.labels_m.push(label_m);
              $scope.datos_label_m.push($scope.graficosMasculino[label_m]);
            }

            
            $scope.labels_f = [];
            $scope.datos_label_f = [];
            
            var label_f;
            
            for (label_f in $scope.graficosFemenino){
              $scope.labels_f.push(label_f);
              $scope.datos_label_f.push($scope.graficosFemenino[label_f]);
            }

            $scope.series = ["Masculino", "Femenino"];
           

        });

        
 

        
    });
  }

  

  

  
  

}());
