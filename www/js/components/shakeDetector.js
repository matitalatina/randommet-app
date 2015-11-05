(function () {
  'use strict';
  angular.module('randommet.components')
    .factory('ShakeDetector', ShakeDetector);

  /** @ngInject */
  function ShakeDetector($window) {
    var shakeEvent = new Shake({
      threshold: 15, // optional shake strength threshold
      timeout: 500 // optional, determines the frequency of event generation
    });

    var factoryObj = {
      addListener: addListener,
      removeListener: removeListener
    };

    onStart();

    return factoryObj;

    function onStart() {
      shakeEvent.start();
    }

    function addListener(callback) {
      $window.addEventListener('shake', callback, false);
    }

    function removeListener(callback) {
      $window.removeEventListener('shake', callback, false);
    }

  }


})();