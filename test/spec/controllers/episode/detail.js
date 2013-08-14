'use strict';

describe('Controller: EpisodeDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('regereceptioApp'));

  var EpisodeDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EpisodeDetailCtrl = $controller('EpisodeDetailCtrl', {
      $scope: scope
    });
  }));
  /*
  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
  */
});
