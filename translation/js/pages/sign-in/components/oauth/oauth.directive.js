/**
 * @name Oauth directive
 * @author Morteza Tavanarad
 * @contributors []
 * @since 8/13/2016
 * @copyright Binary Ltd
 */

(function(){
  'use strict';

  angular
    .module('binary.pages.signin.components.oauth')
    .directive('oauth', Oauth);

  function Oauth(){
    var directive = {
      restrict: 'E',
      scope: {},
      templateUrl: 'js/pages/sign-in/components/oauth/oauth.template.html',
      controller: "OauthController",
      controllerAs: "vm",
      bindToController: true
    };

    return directive;
  }
})();
