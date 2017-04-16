(function () {
  'use strict';

  angular
    .module('sewa.toolkit.controller', [
      'sewa.toolkit.service',
      'sewa.saveload.service'
    ])
    .controller('ToolkitController', ToolkitController);

  ToolkitController.$inject = ['_', '$scope', 'ToolkitService', 'SaveLoadService'];

  function ToolkitController(_, $scope, ToolkitService, SaveLoadService) {
    var vm = this;
    
    vm.equipment = ToolkitService.getEquipmentList();
    
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
    
    vm.saveTemplates = function () {
      SaveLoadService.saveJson(vm.unit);
    };
    
    vm.loadTemplates = function (file) {
      if (file) {
        SaveLoadService.loadFile(file, $scope)
          .then(function(result) {
            vm.unit3 = SaveLoadService.parseJson(result);
            console.log(vm.unit3);
          });
      }
    };
  }

})();