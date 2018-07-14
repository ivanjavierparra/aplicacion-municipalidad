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
      })
      .state('estado3', {
        url: '/#',
        templateUrl: '/modules/atenciones/client/views/hola.client.view.html'
      /*  template:  ` <div class="row">
        <div ng-app ng-controller="TablamuertesController">
            <div class="container-fluid">
                <div class="col-md-8">
                    <div class="card">
                        <div class="header">
                            <h4 class="title">Causas de Muertes más Frecuentes</h4>
                            <p class="category">Desde 2010 a 2018</p>
                        </div>
                        <div class="content table-responsive table-full-width">
                            <table class="table table-hover table-striped">
                                <thead>
                                    <th>ID</th>
                                    <th>Problema de Salud</th>
                                    <th>Cantidad de Muertes</th>
                                </thead>
                                <tbody ng-repeat="(key,value) in graficos">
                                    <tr>
                                        <td>{{$index+1}}</td>
                                        <td>{{key}}</td>
                                        <td>{{value}}</td>
                                    </tr>
                                </tbody>
                            </table>
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`*/
          
        
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
