(function () {
  'use strict';
  angular.module('randommet.components')
    .factory('Counter', Counter);

  /** @ngInject */
  function Counter(localStorageService) {
    var counterLocalKey = 'counter';
    var counters = null;

    var factoryObj = {
      add: add,
      get: get,
      reset: reset
    };

    onStart();

    return factoryObj;

    function onStart() {
      counters = localStorageService.get(counterLocalKey) || {};
      save();
    }

    function add(counterId) {
      if (counters[counterId] === undefined || counters[counterId] === null) {
        counters[counterId] = 0;
      }

      counters[counterId] += 1;
      save();

      return counters[counterId];
    }

    function get(counterId) {
      return counters[counterId] || 0;
    }

    function reset(counterId) {
      counters[counterId] = 0;
      save();

      return 0;
    }

    function save() {
      localStorageService.set(counterLocalKey, counters);
      return counters;
    }

  }

})();