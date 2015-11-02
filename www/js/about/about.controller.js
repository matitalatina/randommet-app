(function () {
  'use strict';

  angular.module('randommet.about')
    .controller('AboutCtrl', AboutCtrl);

  /** @ngInject */
  function AboutCtrl($scope) {
    var vm = this;
    $scope.$on('$ionicView.beforeEnter', onStart);

    function onStart() {
      window.sr = new scrollReveal({
        mobile: true
      });
    }
  }
})();