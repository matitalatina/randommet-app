(function () {
  'use strict';

  /**
   * Services that persists and retrieves TODOs from localStorage.
   */

  angular.module('randommet.answer')
    .factory('AnswerStorage', AnswerStorage);

  /** @ngInject */
  function AnswerStorage($resource) {

    return $resource('resources/answers/:lang.js', {}, {
      query: {
        method: 'GET',
        isArray: true
      }
    });

  }

})();