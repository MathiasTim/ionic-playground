'use strict';

/**
 * @ngdoc filter
 * @name ionicPlaygroundApp.filter:uppercaseLetter
 * @function
 * @description
 * # uppercaseLetter
 * Filter in the ionicPlaygroundApp.
 */
angular.module('ionicPlaygroundApp')
  .filter('uppercaseLetter', function () {
    return function (input, index) {
      index = index || 0;
      return input.charAt(index).toUpperCase() + input.slice(index + 1);
    };
  });
