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
      'template' : 'infantry'
    };
    vm.unitID = null;
    
    // controller functions
    resetTemplate();
    vm.selectItem = selectItem;
    vm.saveCurrent = saveCurrent;
    vm.resetTemplate = resetTemplate;
    
    function selectItem(slot, equipment) {
      vm.current.equipment[slot] = equipment;
    }
    
    function saveCurrent() {
      $scope.$emit("createdOrUpdateUnit", vm.unitID, ToolkitService.generateUnitDefinition(vm.current));
    }
    
    function resetTemplate() {
      vm.current.race = 'high_men';
      vm.current.name = vm.reference.races['high_men'].name + " " + vm.reference.templates[vm.current.template].name;
      vm.current.experience = 50;
      vm.current.traits = [];
      vm.current.equipment = angular.copy(TOOLKIT_CONSTANTS.templates[vm.current.template].equipment);
      regenerateUnit();
    }
    
    function regenerateUnit() {
      vm.unit = ToolkitService.generateUnitDefinition(vm.current);
    };
    
    $scope.$on("savedUnit", function(ev, id) {
      vm.unitID = id;
    });
    
    $scope.$watch('designer.current.template', function(newValue, oldValue) {
      if ( newValue !== oldValue ) {
        resetTemplate();
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