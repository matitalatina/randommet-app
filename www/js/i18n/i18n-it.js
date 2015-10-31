(function () {
  'use strict';
  angular.module('randommet.i18n')
    .config(config);

  /** @ngInject */
  function config($translateProvider) {
    $translateProvider.translations('it', {
      APP_NAME: 'RandomMet',
      TABS_LIST: 'Lista',
      TABS_ITEM_NEW_PLACEHOLDER: 'Nuovo elemento...',
      TABS_ITEM_EDIT_PLACEHOLDER: 'Rimuovi elemento',
      CHOOSE: 'Scegli'
    });
  }
})();