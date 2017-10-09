'use strict';

describe('Service: balanceServices', function () {

  // load the service's module
  beforeEach(module('anApp'));

  // instantiate service
  var balanceServices;
  beforeEach(inject(function (_balanceServices) {
    balanceServices = _balanceServices;
  }));

  it('should do something', function () {
    expect(!!balanceServices).toBe(true);
  });

});

