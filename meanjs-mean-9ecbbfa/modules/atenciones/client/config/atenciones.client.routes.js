(function () {
  'use strict';

  angular
    .module('atenciones.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('atenciones', {
        abstract: true,
        url: '/atenciones',
        template: '<ui-view/>'
      })
      .state('atenciones.list', {
        url: '',
        templateUrl: '/modules/atenciones/client/views/list-atenciones.client.view.html',
        controller: 'AtencionesListController',
        controllerAs: 'vm'
      })
      .state('atenciones.view', {
        url: '/:atencionId',
        templateUrl: '/modules/atenciones/client/views/view-atencion.client.view.html',
        controller: 'AtencionesController',
        controllerAs: 'vm',
        resolve: {
          atencionResolve: getAtencion
        },
        data: {
          pageTitle: '{{ atencionResolve.lugar }}'
        }
      });
  }

  getAtencion.$inject = ['$stateParams', 'AtencionesService'];

  function getAtencion($stateParams, AtencionesService) {
    return AtencionesService.get({
      atencionId: $stateParams.atencionId
    }).$promise;
  }
}());
