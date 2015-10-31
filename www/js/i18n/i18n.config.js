(function () {
  'use strict';
  angular.module('randommet.i18n')
    .config(config);

  /** @ngInject */
  function config($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('sanitize');
    $translateProvider.preferredLanguage('it');
  }
})();