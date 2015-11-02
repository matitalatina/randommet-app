(function () {
  'use strict';

  angular.module('randommet.list')
    .controller('ListChooseCtrl', ListChooseCtrl);

  /** @ngInject */
  function ListChooseCtrl(ListStorage, ListRandom, _, $scope) {
    var vm = this;
    vm.list = null;
    vm.chooserControl = {};
    vm.onChooserStart = choose;
    vm.choose = choose;

    $scope.$on('$ionicView.beforeEnter', onStart);

    function onStart() {
      vm.list = ListStorage.query();
    }

    function choose() {
      var label = ListRandom.choose(vm.list).label;
      vm.chooserControl.show(label);
    }
  }
})();