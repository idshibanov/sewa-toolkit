(function() {
  'use strict';

  angular
    .module('sewa.toolkit', [
      'toastr',
      'ngAnimate',
      'ngSanitize',
      'ui.bootstrap',
      'sewa.toolkit.controller'
    ])
    .constant('_', window._)
    .constant('SEWA', {
      'param': 'value'
    })
    .config(sewaToolkitConfig);

  sewaToolkitConfig.$inject = [
    'toastrConfig'
  ];

  function sewaToolkitConfig(toastrConfig) {
    angular.extend(toastrConfig, {
      positionClass: 'toast-bottom-right',
      autoDismiss: true,
      closeButton: true,
      tapToDismiss: true,
      timeOut: 2500
    });
  }

})();