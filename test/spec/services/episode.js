'use strict';

describe('Service: episode', function () {

  // load the service's module
  beforeEach(module('regereceptioApp'));

  // instantiate service
  var episode;
  beforeEach(inject(function (_episode_) {
    episode = _episode_;
  }));

  it('should do something', function () {
    expect(!!episode).toBe(true);
  });

});
