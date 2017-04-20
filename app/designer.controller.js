(function () {
  'use strict';

  angular
    .module('sewa.toolkit.designer.controller', [
      'sewa.toolkit.service',
      'sewa.toolkit.constants',
      'sewa.saveload.service'
    ])
    .controller('UnitDesignerController', UnitDesignerController);

  UnitDesignerController.$inject = ['_', '$scope', 'TOOLKIT_CONSTANTS', 'ToolkitService', 'SaveLoadService'];

  function UnitDesignerController(_, $scope, TOOLKIT_CONSTANTS, ToolkitService, SaveLoadService) {
    var vm = this;
    
    vm.slotStatus = {};    
    vm.reference = TOOLKIT_CONSTANTS;
    
    vm.selectedTemplate = 'infantry';
    
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
  }

})();