'use strict';

/**
 * @ngdoc function
 * @name ionicPlaygroundApp.controller:ContactsDetailCtrl
 * @description
 * # ContactsDetailCtrl
 * Controller of the ionicPlaygroundApp
 */
angular.module('ionicPlaygroundApp')
  .controller('ContactsDetailCtrl', function ($scope, ContactsService) {
    $scope.detail = ContactsService.contactDetails;
  });
