(function () {
  'use strict';

  angular.module('randommet.list')
    .controller('ListChooseCtrl', ListChooseCtrl);

  /** @ngInject */
  function ListChooseCtrl(ListStorage, ListRandom, _, $scope, Counter, ShakeDetector, Vibrator) {
    var vm = this;
    var counterId = 'list';
    var animationTime = 500;
    vm.ui = {
      countNumber: 0
    };
    vm.list = null;
    vm.chooserControl = {};
    vm.onChooserStart = choose;
    vm.choose = _.throttle(choose, animationTime, {
      trailing: false
    });

    $scope.$on('$ionicView.beforeEnter', onStart);
    $scope.$on('$ionicView.beforeLeave', onLeave);

    function onStart() {
      vm.list = ListStorage.query();
      vm.ui.countNumber = Counter.get(counterId);
      ShakeDetector.addListener(onShake);
    }

    function choose() {
      var label = ListRandom.choose(vm.list).label;
      vm.chooserControl.show(label);
      vm.ui.countNumber = Counter.add(counterId);
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