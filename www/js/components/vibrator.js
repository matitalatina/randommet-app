(function () {
  'use strict';
  angular.module('randommet.components')
    .factory('Vibrator', Vibrator);

  /** @ngInject */
  function Vibrator(navigator) {
    var vibrationIsSupported = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    var defaultVibration = [100, 10, 100];
    var factoryObj = {
      vibrate: vibrate
    };

    return factoryObj;

    function vibrate(directive) {
      if (vibrationIsSupported) {
        if (directive) {
          navigator.vibrate(directive);
        } else {
          navigator.vibrate(defaultVibration);
        }
      }
    }

  }


})();