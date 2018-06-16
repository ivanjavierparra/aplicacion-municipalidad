(function () {
  'use strict';

  angular
    .module('pacientes.services')
    .factory('PacientesService', PacientesService);

  PacientesService.$inject = ['$resource', '$log'];

  function PacientesService($resource, $log) {
    var Paciente = $resource('/api/pacientes/:pacienteId', {
      pacienteId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });

    angular.extend(Paciente.prototype, {
      createOrUpdate: function () {
        var Paciente = this;
        return createOrUpdate(Paciente);
      }
    });

    return Paciente;

    function createOrUpdate(paciente) {
      if (paciente._id) {
        return paciente.$update(onSuccess, onError);
      } else {
        return paciente.$save(onSuccess, onError);
      }

      // Handle successful response
      function onSuccess(paciente) {
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
