(function () {
  'use strict';

  angular
    .module('randommet.components')
    .directive('rmParticles', rmParticles);

  /** @ngInject */
  function rmParticles(particlesJS, _) {
    var directive = {
      restrict: 'A',
      scope: false,
      link: function (scope, element, attrs) {
        var randomNumber = _.random(0, 100000);
        var particleId = 'particles-js' + randomNumber;
        element[0].setAttribute('id', particleId);
        particlesJS.load(particleId, 'resources/particlesjs-config.json');
      }
    };

    return directive;
  }
})();