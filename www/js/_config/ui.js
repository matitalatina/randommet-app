(function () {
  'use strict';
  angular.module('randommet')
    .config(function ($ionicConfigProvider) {
      $ionicConfigProvider.tabs.position("bottom");
      $ionicConfigProvider.tabs.style("standard");
      $ionicConfigProvider.navBar.alignTitle("center");
      $ionicConfigProvider.scrolling.jsScrolling(false);
    });
})();