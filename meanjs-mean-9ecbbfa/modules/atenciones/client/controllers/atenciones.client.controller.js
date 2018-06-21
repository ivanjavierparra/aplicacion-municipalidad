(function () {
  'use strict';

  angular
    .module('atenciones')
    .controller('AtencionesController', AtencionesController);

  AtencionesController.$inject = ['$scope', 'atencionResolve', 'Authentication','$http'];

  function AtencionesController($scope, atencion, Authentication,$http) {
    var vm = this;

    

    $http.get('http://localhost:3000/api/problemas/')
            .then(function(response) {

              vm.atencion = atencion;
              vm.authentication = Authentication;

              var longitud_problemas = Object.keys(response.data).length;
              var problemas = response.data;

              

              for(var i=0;i<longitud_problemas;i++){
                if(vm.atencion.problema==problemas[i].id_problema){
                  vm.problema = problemas[i].nombre;
                  break;
                }
              }

              if(vm.atencion.muerto){
                vm.muerto = "Si";
              }
              else{
                vm.muerto = "No";
              }


              $http.get('http://localhost:3000/api/sucesos/')
                .then(function(response) {
                   var longitud_sucesos = Object.keys(response.data).length;
                   var sucesos = response.data;

                    for(var i=0;i<longitud_sucesos;i++){
                      if(vm.atencion.suceso==sucesos[i].id_suceso){
                          vm.suceso = sucesos[i].nombre;
                          break;
                      }
                    }

                    $http.get('http://localhost:3000/api/pacientes/')
                    .then(function(response) {
                      var longitud_pacientes = Object.keys(response.data).length;
                      var pacientes = response.data;

                      for(var i=0;i<longitud_pacientes;i++){
                        if(vm.atencion.paciente==pacientes[i]._id){
                          vm.paciente = pacientes[i].nombre + " " + pacientes[i].apellido;
                          break;
                        }
                      }
                    });

                });




            });

  }
}());
