(function () {
  'use strict';
  angular.module('randommet.components.randomizers')
    .factory('ListRandom', ListRandom);

  /** @ngInject */
  function ListRandom() {
    var factoryObj = {
      choose: choose
    };

    return factoryObj;

    function choose(list) {

    }

  }


})();