/* global toastr:false, moment:false, _:false, particlesJS:false */
(function () {
  'use strict';

  angular
    .module('randommet')
    //.constant('toastr', toastr)
    //.constant('moment', moment)
    .constant('particlesJS', particlesJS)
    .constant('_', _)
    .constant('BACKEND', {
      //API: 'http://localhost:9010',
      API: 'http://192.168.2.35:9010'
    });;

})();