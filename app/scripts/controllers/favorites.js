'use strict';

/**
 * @ngdoc function
 * @name ionicPlaygroundApp.controller:FavoritesCtrl
 * @description
 * # FavoritesCtrl
 * Controller of the ionicPlaygroundApp
 */
angular.module('ionicPlaygroundApp')
  .controller('FavoritesCtrl', function ($scope, ContactsService) {
    $scope.favorites = ContactsService.favorites;
  });
