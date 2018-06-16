(function () {
  'use strict';

  angular
    .module('pacientes.admin')
    .controller('PacientesAdminController', PacientesAdminController);

  PacientesAdminController.$inject = ['$scope', '$state', '$window', 'pacienteResolve', 'Authentication', 'Notification'];

  function PacientesAdminController($scope, $state, $window, paciente, Authentication, Notification) {
    var vm = this;

    vm.paciente = paciente;
    vm.authentication = Authentication;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Article
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.paciente.$remove(function () {
          $state.go('admin.pacientes.list');
          Notification.success({ message: '<i class="glyphicon glyphicon-ok"></i> Paciente deleted successfully!' });
        });
      }
    }

    // Save Article
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.pacienteForm');
        return false;
      }

      // Create a new article, or update the current instance
      vm.paciente.createOrUpdate()
        .then(successCallback)
        .catch(errorCallback);

      function successCallback(res) {
        $state.go('admin.pacientes.list'); // should we send the User to the list or the updated paciente's view?
        Notification.success({ message: '<i class="glyphicon glyphicon-ok"></i> paciente saved successfully!' });
      }

      function errorCallback(res) {
        Notification.error({ message: res.data.message, title: '<i class="glyphicon glyphicon-remove"></i> paciente save error!' });
      }
    }
  }
}());
