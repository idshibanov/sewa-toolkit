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
      'traits' : []
    });
    
    vm.templates = [];
    
    vm.saveTemplates = function () {
      SaveLoadService.saveJson(vm.templates);
    };
    
    vm.loadTemplates = function (file) {
      if (file) {
        SaveLoadService.loadFile(file, $scope)
          .then(function(result) {
            var json = SaveLoadService.parseJson(result);
            if (json) vm.templates = json;
          });
      }
    };
    
    $scope.$on("createdOrUpdateUnit", function(ev, id, unit) {
      if (_.has(vm.templates, id)) {
        vm.templates[id] = unit;
      } else {
        $scope.$broadcast("savedUnit", vm.templates.push(unit) - 1);
      }
    });
  }

})();