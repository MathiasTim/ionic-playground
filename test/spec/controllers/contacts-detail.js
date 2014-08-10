'use strict';

describe('Controller: ContactsDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('ionicPlaygroundApp'));

  var ContactsDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactsDetailCtrl = $controller('ContactsDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
