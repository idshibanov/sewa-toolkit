(function () {
  'use strict';

  angular
    .module('sewa.toolkit')
    .controller('ToolkitController', ToolkitController);

  ToolkitController.$inject = ['$scope'];

  function ToolkitController($scope) {
    var vm = this;
    
    vm.status = {
      isopen: false
    };
  }

})();