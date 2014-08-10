'use strict';

/**
 * @ngdoc function
 * @name ionicPlaygroundApp.controller:ContactsCtrl
 * @description
 * # ContactsCtrl
 * Controller of the ionicPlaygroundApp
 */
angular.module('ionicPlaygroundApp')
  .controller('ContactsCtrl', function ($scope, ContactsService) {
    $scope.contacts = ContactsService.contacts;

    $scope.getItemHeight = function(item, index) {
      //Make evenly indexed items be 10px taller, for the sake of example
      return (index % 2) === 0 ? 50 : 60;
    };
  });
