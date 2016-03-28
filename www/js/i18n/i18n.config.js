(function () {
  'use strict';
  angular.module('randommet.i18n')
    .config(config);

  /** @ngInject */
  function config($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('it');
  }
})();