(function () {
  'use strict';

  angular
    .module('atenciones.admin.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('admin.atenciones', {
        abstract: true,
        url: '/atenciones',
        template: '<ui-view/>'
      })
      .state('admin.atenciones.list', {
        url: '',
        templateUrl: '/modules/atenciones/client/views/admin/list-atenciones.client.view.html',
        controller: 'AtencionesAdminListController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        }
      })
      .state('admin.atenciones.create', {
        url: '/create',
        templateUrl: '/modules/atenciones/client/views/admin/form-atencion.client.view.html',
        controller: 'AtencionesAdminController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        },
        resolve: {
          atencionResolve: newAtencion
        }
      })
      .state('admin.atenciones.edit', {
        url: '/:atencionId/edit',
        templateUrl: '/modules/atenciones/client/views/admin/form-atencion.client.view.html',
        controller: 'AtencionesAdminController',
        controllerAs: 'vm',
        data: {
          roles: ['admin'],
          pageTitle: '{{ atencionResolve.lugar }}'
        },
        resolve: {
          atencionResolve: getAtencion
        }
      });
  }

  getAtencion.$inject = ['$stateParams', 'AtencionesService'];

  function getAtencion($stateParams, AtencionesService) {
    return AtencionesService.get({
      atencionId: $stateParams.atencionId
    }).$promise;
  }

  newAtencion.$inject = ['AtencionesService'];

  function newAtencion(AtencionesService) {
    return new AtencionesService();
  }
}());
