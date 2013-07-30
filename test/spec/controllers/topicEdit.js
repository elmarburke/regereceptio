'use strict';

describe('Controller: TopiceditCtrl', function () {

  // load the controller's module
  beforeEach(module('regereceptioApp'));

  var TopiceditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopiceditCtrl = $controller('TopiceditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
