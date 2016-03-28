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
      TABS_ANSWER: 'Oracolo',
      TABS_SETTINGS: 'Impostazioni',
      TABS_ANSWER_TITLE: 'Oracolo',
      ANSWER_ASK: 'Rispondi',
      ANSWER_HELPER: 'Pensa ad una domanda, poi premi "Rispondi" per sapere la risposta.',
      CHOOSE: 'Scegli',
      LIST_CHOOSE_TITLE: 'Scelta',
      LIST_CHOOSE_RECHOOSE: 'Riscegli',
      LIST_HELPER: 'Aggiungi gli elementi nella lista, RandomMet sceglierà l\'opzione migliore!',
      SETTINGS_ABOUT: 'Informazioni',
      ABOUT_TITLE: 'Info',
      ABOUT_MADE_WITH: 'Fatto con',
      ABOUT_BY: 'da',
      ABOUT_SHARE_SUBJECT: 'RandomMet - Shuffle your life!',
      ABOUT_SHARE_MESSAGE: 'RandomMet è disponibile sia su iOS che Android, cercala sullo store!'
    });
  }
})();