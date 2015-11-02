(function () {
  'use strict';
  angular.module('randommet.list')
    .factory('ListStorage', ListStorage);

  /** @ngInject */
  function ListStorage(localStorageService) {
    var listLocalKey = 'list';

    var factoryObj = {
      post: post,
      query: query
    };

    return factoryObj;

    function post(list) {
      localStorageService.set(listLocalKey, list);
      return list;
    }

    function query() {
      return localStorageService.get(listLocalKey) || [];
    }
  }
})();