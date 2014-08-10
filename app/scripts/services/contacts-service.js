'use strict';

/**
 * @ngdoc service
 * @name ionicPlaygroundApp.ContactsService
 * @description
 * # ContactsService
 * Service in the ionicPlaygroundApp.
 */
angular.module('ionicPlaygroundApp')
  .service('ContactsService', function ContactsService($http, $filter, $q) {
    this.contacts = [];
    this.contactDetails = {};
    this.favorites = [];

    this.getAllContacts = function () {
      if (this.contacts.length) {
        return $q.when(this.contacts);
      }
      var that = this;
      $http({
        method: 'GET',
        url: 'res/contacts.json'
      }).then(function (results) {
        results = $filter('orderBy')(results.data.results, 'user.name.last');
        var lastLetter = '';
        angular.forEach(results, function (result) {
          var currentLetter = result.user.name.last.charAt(0);
          if (lastLetter !== currentLetter) {
            that.contacts.push({divider: true, letter: currentLetter});
          }
          lastLetter = result.user.name.last.charAt(0);
          that.contacts.push(result);
        });
      });
    };

    this.getFavorites = function () {
      if (this.favorites.length) {
        return $q.when(this.favorites);
      }
      var that = this;
      $http({
        method: 'GET',
        url: 'http://api.randomuser.me/?results=20'
      }).then(function (results) {
        results = $filter('orderBy')(results.data.results, 'user.name.last');
        var lastLetter = '';
        angular.forEach(results, function (result) {
          var currentLetter = result.user.name.last.charAt(0);
          if (lastLetter !== currentLetter) {
            that.favorites.push({divider: true, letter: currentLetter});
          }
          lastLetter = result.user.name.last.charAt(0);
          that.favorites.push(result);
        });
      });
    };

    this.getContactDetails = function (id) {
      var that = this;
      var deferred = $q.defer();
      angular.forEach(this.contacts, function (contact) {
        if(contact.seed === id){
          that.contactDetails = contact;
          deferred.resolve(contact);
          return contact;
        }
      });
      return deferred.promise;
    };
  });
