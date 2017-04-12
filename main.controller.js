(function () {
  'use strict';

  angular
    .module('sewa.toolkit.controller', ['sewa.toolkit.service'])
    .controller('ToolkitController', ToolkitController);

  ToolkitController.$inject = ['$scope', 'ToolkitService', '_'];

  function ToolkitController($scope, ToolkitService, _) {
    var vm = this;
    
    vm.status = {
      isopen: false
    };
    
    vm.unit = ToolkitService.generateUnitDefinition({
      'template' : 'infantry',
      'race' : 'high_men',
      'name' : 'High Men Swordman',
      'experience' : 50,
      'equipment' : {
        'primary' : 'common_sword',
        'secondary' : 'large_shield',
        'armour' : 'light'
      },
      'traits' : {
        'large_shield' : 1,
      }
    });
    vm.unit2 = ToolkitService.generateUnitDefinition({
      'template' : 'infantry',
      'race' : 'high_men',
      'name' : 'High Men Swordman',
      'experience' : 50,
      'equipment' : {
        'primary' : 'common_sword',
        'secondary' : 'large_shield',
        'armour' : 'light'
      },
      'traits' : {
        'large_shield' : 1,
      }
    });
    console.log(vm.unit);
    
    vm.combatlog = ToolkitService.runDuel(vm.unit, vm.unit2);
    
    function initiateMelee(aUnit, dUnit, env) {
      
    }
  }

})();