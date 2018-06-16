(function () {
  'use strict';

  angular
    .module('pacientes.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('pacientes', {
        abstract: true,
        url: '/pacientes',
        template: '<ui-view/>'
      })
      .state('pacientes.list', {
        url: '',
        templateUrl: '/modules/pacientes/client/views/list-pacientes.client.view.html',
        controller: 'PacientesListController',
        controllerAs: 'vm'
      })
      .state('pacientes.view', {
        url: '/:pacienteId',
        templateUrl: '/modules/pacientes/client/views/view-paciente.client.view.html',
        controller: 'PacientesController',
        controllerAs: 'vm',
        resolve: {
          pacienteResolve: getPaciente
        },
        data: {
          pageTitle: '{{ pacienteResolve.nombre }}'
        }
      });
  }

  getPaciente.$inject = ['$stateParams', 'PacientesService'];

  function getPaciente($stateParams, PacientesService) {
    return PacientesService.get({
      pacienteId: $stateParams.pacienteId
    }).$promise;
  }
}());
