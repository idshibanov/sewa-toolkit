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
    
    // designer variables
    vm.current = {
      'template' : 'infantry',
      'race' : 'high_men',
      'name' : '',
      'experience' : 50,
      'traits' : []
    };
    vm.current.equipment = angular.copy(TOOLKIT_CONSTANTS.templates[vm.current.template].equipment);
    
    // controller functions
    regenerateUnit();
    vm.selectItem = selectItem;
    
    function selectItem(slot, equipment) {
      vm.current.equipment[slot] = equipment;
    }
    
    function regenerateUnit() {
      vm.unit = ToolkitService.generateUnitDefinition(vm.current);
    };    
    
    $scope.$watch('designer.current.template', function(newValue, oldValue) {
      if ( newValue !== oldValue ) {
        vm.current.equipment = angular.copy(TOOLKIT_CONSTANTS.templates[vm.current.template].equipment);
        regenerateUnit();
      }
    });
    
    $scope.$watchGroup(['designer.current.race'], function(newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
      if ( newValue !== oldValue ) {
        regenerateUnit();
      }
    });
    
    $scope.$watchCollection('designer.current.equipment', function(newValue, oldValue) {
      if ( newValue !== oldValue ) {
        regenerateUnit();
      }
    });
  }

})();