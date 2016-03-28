(function () {
  'use strict';

  angular.module('randommet')
    .config(function (localStorageServiceProvider) {
      localStorageServiceProvider
        .setStorageType('localStorage')
        .setPrefix('randommet');
    });
})();