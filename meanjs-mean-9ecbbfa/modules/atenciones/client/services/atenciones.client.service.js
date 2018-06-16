(function () {
  'use strict';

  angular
    .module('atenciones.services')
    .factory('AtencionesService', AtencionesService);

  AtencionesService.$inject = ['$resource', '$log'];

  function AtencionesService($resource, $log) {
    var Atencion = $resource('/api/atenciones/:atencionId', {
      atencionId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });

    angular.extend(Atencion.prototype, {
      createOrUpdate: function () {
        var atencion = this;
        return createOrUpdate(atencion);
      }
    });

    return Atencion;

    function createOrUpdate(atencion) {
      if (atencion._id) {
        return atencion.$update(onSuccess, onError);
      } else {
        return atencion.$save(onSuccess, onError);
      }

      // Handle successful response
      function onSuccess(atencion) {
        // Any required internal processing from inside the service, goes here.
      }

      // Handle error response
      function onError(errorResponse) {
        var error = errorResponse.data;
        // Handle error internally
        handleError(error);
      }
    }

    function handleError(error) {
      // Log error
      $log.error(error);
    }
  }
}());
