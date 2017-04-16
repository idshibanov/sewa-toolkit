(function () {
  'use strict';

  angular
    .module('sewa.toolkit.force.controller', [
      'sewa.toolkit.service',
      'sewa.toolkit.constants',
      'sewa.saveload.service'
    ])
    .controller('ForceController', ForceController);

  ForceController.$inject = ['_', '$scope', 'TOOLKIT_CONSTANTS', 'ToolkitService', 'SaveLoadService'];

  function ForceController(_, $scope, TOOLKIT_CONSTANTS, ToolkitService, SaveLoadService) {
    var vm = this;
    
    vm.reference = TOOLKIT_CONSTANTS;
  }

})();