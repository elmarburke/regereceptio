'use strict';

describe('Controller: ReplicateIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('regereceptioApp'));

  var ReplicateIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReplicateIndexCtrl = $controller('ReplicateIndexCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
