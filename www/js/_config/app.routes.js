(function () {
  'use strict';
  angular.module('randommet')

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.list', {
      url: '/list',
      views: {
        'tab-list': {
          templateUrl: 'js/list/list.html',
          controller: 'ListCtrl as lc'
        }
      }
    })

    .state('tab.list-choose', {
      url: '/list-choose',
      views: {
        'tab-list': {
          templateUrl: 'js/list/list-choose.html',
          controller: 'ListChooseCtrl as lcc'
        }
      }
    })

    .state('tab.answer', {
      url: '/answer',
      views: {
        'tab-answer': {
          templateUrl: 'js/answer/answer.html',
          controller: 'AnswerCtrl as ac'
        }
      }
    })

    .state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'js/settings/settings.html',
          controller: 'SettingsCtrl as sc'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'tab-settings': {
          templateUrl: 'js/about/about.html',
          controller: 'AboutCtrl as ac'
        }
      }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/list');

  });
})();