'use strict';

describe('Filter: uppercaseLetter', function () {

  // load the filter's module
  beforeEach(module('ionicPlaygroundApp'));

  // initialize a new instance of the filter before each test
  var uppercaseLetter;
  beforeEach(inject(function ($filter) {
    uppercaseLetter = $filter('uppercaseLetter');
  }));

  it('should return the input prefixed with "uppercaseLetter filter:"', function () {
    var text = 'angularjs';
    expect(uppercaseLetter(text)).toBe('uppercaseLetter filter: ' + text);
  });

});
