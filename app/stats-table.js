(function() {
  'use strict';
  
  angular
    .module('sewa.directives.statsTable', [
      'sewa.toolkit.constants'
    ])
    .component('statsTable', {
      bindings: {
        unit: '='
      },
      templateUrl: 'app/stats-table.template.html',
      controller: StatsController,
      controllerAs: 'stats'
    });

  StatsController.$inject = ['$scope'];

  function StatsController($scope) {
    var vm = this;

    // bindable variables
    vm.unit = vm.unit || {};
  }
})();
