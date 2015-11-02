(function () {
  'use strict';

  angular.module('randommet.answer')
    .controller('AnswerCtrl', AnswerCtrl);

  /** @ngInject */
  function AnswerCtrl(AnswerStorage, ListRandom, _, $scope, $translate) {
    var vm = this;
    vm.list = null;
    vm.chooserControl = {};
    vm.onChooserStart = choose;
    vm.choose = choose;

    $scope.$on('$ionicView.beforeEnter', onStart);

    function onStart() {
      vm.list = AnswerStorage.query({
        lang: $translate.use()
      }).$promise;
    }

    function choose() {
      vm.list.then(function (list) {
        var label = ListRandom.choose(list).label;
        vm.chooserControl.show(label);
      });

    }
  }
})();