(function () {
  'use strict';

  angular
    .module('atenciones.admin')
    .controller('AtencionesAdminController', AtencionesAdminController);

  AtencionesAdminController.$inject = ['$scope', '$state', '$window', 'atencionResolve', 'Authentication', 'Notification'];

  function AtencionesAdminController($scope, $state, $window, atencion, Authentication, Notification) {
    var vm = this;

    vm.atencion = atencion;
    vm.authentication = Authentication;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing atencion
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.atencion.$remove(function () {
          $state.go('admin.atenciones.list');
          Notification.success({ message: '<i class="glyphicon glyphicon-ok"></i> Article deleted successfully!' });
        });
      }
    }

    // Save Article
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.atencionForm');
        return false;
      }

      // Create a new article, or update the current instance
      vm.atencion.createOrUpdate()
        .then(successCallback)
        .catch(errorCallback);

      function successCallback(res) {
        $state.go('admin.atenciones.list'); // should we send the User to the list or the updated Article's view?
        Notification.success({ message: '<i class="glyphicon glyphicon-ok"></i> Article saved successfully!' });
      }

      function errorCallback(res) {
        Notification.error({ message: res.data.message, title: '<i class="glyphicon glyphicon-remove"></i> Article save error!' });
      }
    }
  }
}());
