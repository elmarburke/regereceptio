'use strict';

describe('Service: replicator', function () {

  // load the service's module
  beforeEach(module('regereceptioApp'));

  // instantiate service
  var replicator;
  beforeEach(inject(function (_replicator_) {
    replicator = _replicator_;
  }));

  it('should do something', function () {
    expect(!!replicator).toBe(true);
  });

});
