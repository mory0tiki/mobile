/**
 * @name states configs
 * @author Morteza Tavanarad
 * @contributors []
 * @since 01/15/2017
 * @copyright Binary Ltd
 */

(function() {
  'use strict';

  angular
    .module('binary')
    .config(States);

  States.$inject = ['$stateProvider', '$urlRouterProvider'];

  function States($stateProvider, $urlRouterProvider){

    var home = {
      name: 'home',
      url: '/home',
      //component: 'bgHome'
      template: "<bg-home></bg-home>"
    };

    $stateProvider.state(home);
    $urlRouterProvider.otherwise('/home');

  }
})();