(function () {
  'use strict';

  angular
    .module('sewa.toolkit.balancer.controller', [
      'sewa.toolkit.service',
      'sewa.toolkit.constants',
      'sewa.saveload.service'
    ])
    .controller('UnitBalancerController', UnitBalancerController);

  UnitBalancerController.$inject = ['_', '$scope', 'TOOLKIT_CONSTANTS', 'ToolkitService', 'SaveLoadService'];

  function UnitBalancerController(_, $scope, TOOLKIT_CONSTANTS, ToolkitService, SaveLoadService) {
    var vm = this;
    
    vm.reference = TOOLKIT_CONSTANTS;
    
    //vm.combatlog = ToolkitService.runDuel(vm.unit, vm.unit2);
  }

})();