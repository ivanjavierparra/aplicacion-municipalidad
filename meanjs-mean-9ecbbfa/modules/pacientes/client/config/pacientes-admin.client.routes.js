(function () {
  'use strict';

  angular
    .module('pacientes.admin.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('admin.pacientes', {
        abstract: true,
        url: '/pacientes',
        template: '<ui-view/>'
      })
      .state('admin.pacientes.list', {
        url: '',
        templateUrl: '/modules/pacientes/client/views/admin/list-pacientes.client.view.html',
        controller: 'PacientesAdminListController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        }
      })
      .state('admin.pacientes.create', {
        url: '/create',
        templateUrl: '/modules/pacientes/client/views/admin/form-paciente.client.view.html',
        controller: 'PacientesAdminController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        },
        resolve: {
          pacienteResolve: newPaciente
        }
      })
      .state('admin.pacientes.edit', {
        url: '/:pacienteId/edit',
        templateUrl: '/modules/pacientes/client/views/admin/form-paciente.client.view.html',
        controller: 'PacientesAdminController',
        controllerAs: 'vm',
        data: {
          roles: ['admin'],
          pageTitle: '{{ pacienteResolve.title }}'
        },
        resolve: {
          pacienteResolve: getPaciente
        }
      });
  }

  getPaciente.$inject = ['$stateParams', 'PacientesService'];

  function getPaciente($stateParams, PacientesService) {
    return PacientesService.get({
      pacienteId: $stateParams.pacienteId
    }).$promise;
  }

  newPaciente.$inject = ['PacientesService'];

  function newPaciente(PacientesService) {
    return new PacientesService();
  }
}());
