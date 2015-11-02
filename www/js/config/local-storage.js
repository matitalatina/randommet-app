(function () {
  'use strict';

  angular.module('randommet')
    .config(function (localStorageServiceProvider) {
      localStorageServiceProvider
        .setPrefix('randommet');
    });
})();