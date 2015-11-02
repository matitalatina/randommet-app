(function () {
  'use strict';
  angular.module('randommet.components.randomizers')
    .factory('ListRandom', ListRandom);

  /** @ngInject */
  function ListRandom(_) {
    var factoryObj = {
      choose: choose
    };

    return factoryObj;

    function choose(list) {
      return _.sample(list);
    }

  }


})();