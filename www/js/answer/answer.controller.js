(function () {
  'use strict';

  angular.module('randommet.answer')
    .controller('AnswerCtrl', AnswerCtrl);

  /** @ngInject */
  function AnswerCtrl(AnswerStorage, ListRandom, _, $scope, $translate, Counter, Vibrator, ShakeDetector) {
    var vm = this;
    var counterId = 'anwser';
    var animationTime = 500;
    vm.ui = {
      countNumber: null
    };

    vm.list = null;
    vm.chooserControl = {};
    vm.choose = _.throttle(choose, animationTime, {
      trailing: false
    });

    $scope.$on('$ionicView.beforeEnter', onStart);
    $scope.$on('$ionicView.beforeLeave', onLeave);

    function onStart() {
      ShakeDetector.addListener(onShake);
      Counter.reset(counterId);
      vm.ui.countNumber = Counter.get(counterId);
      if (vm.chooserControl.reset) {
        vm.chooserControl.reset();
      }
      vm.list = AnswerStorage.query({
        lang: $translate.use()
      }).$promise;
    }

    function choose() {
      vm.list.then(function (list) {
        var label = ListRandom.choose(list).label;
        vm.chooserControl.show(label);
        vm.ui.countNumber = Counter.add(counterId);
      });
    }

    function onShake() {
      $scope.$apply(function () {
        choose();
        Vibrator.vibrate();
      });
    }

    function onLeave() {
      ShakeDetector.removeListener(onShake);
    }
  }
})();