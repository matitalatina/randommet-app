(function () {
  'use strict';

  angular.module('randommet.about')
    .controller('AboutCtrl', AboutCtrl);

  /** @ngInject */
  function AboutCtrl($scope, window, $translate, $q) {
    var vm = this;
    $scope.$on('$ionicView.beforeEnter', onStart);
    vm.shareApp = shareApp;

    function onStart() {
      window.sr = new scrollReveal({
        mobile: true
      });
    }

    function shareApp() {
      if (window.cordova && window.plugins.socialsharing) {
        $translate(['ABOUT_SHARE_SUBJECT', 'ABOUT_SHARE_MESSAGE']).then(function (translations) {
          console.log(translations)
          window.plugins.socialsharing.share(decodeURIComponent(translations.ABOUT_SHARE_MESSAGE), decodeURIComponent(translations.ABOUT_SHARE_SUBJECT));
        });
      }
    }
  }
})();