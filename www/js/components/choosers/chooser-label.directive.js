(function () {
  'use strict';

  angular
    .module('randommet.components')
    .directive('rmChooserLabel', rmChooserLabel);

  function rmChooserLabel() {
    var directive = {
      restrict: 'E',
      templateUrl: 'js/components/choosers/chooser-label.html',
      scope: {
        control: '=',
        onStart: '='
      },
      controller: ChooserLabelController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ChooserLabelController() {
      var animationTime = 500;
      var vm = this;
      vm.selection = {
        inverted: false,
        pre: {
          label: ''
        },
        post: {
          label: ''
        }
      };

      vm.internalControl = vm.control || {};

      onStart();

      function onStart() {
        vm.internalControl.show = _.throttle(show, animationTime, {
          leading: true,
          trailing: false
        });
        if (vm.onStart) {
          vm.onStart();
        }
      }

      function show(label) {
        var inverted = vm.selection.inverted;
        var pre = (inverted) ? vm.selection.post : vm.selection.pre;
        var post = (inverted) ? vm.selection.pre : vm.selection.post;

        post.label = label;
        vm.selection.inverted = !inverted;
      }

    }

  }




})();