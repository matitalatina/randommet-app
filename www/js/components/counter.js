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
      counters = localStorageService.get('counter') || {};
    }
    
    function add(counterId) {
      if (counters[counterId] === undefined) {
        counters[counterId] = 0
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
      localStorageService.set('counter', counters);
      return counters;
    }

  }

})();