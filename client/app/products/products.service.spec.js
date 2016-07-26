'use strict';

describe('Service: products', function () {

  // load the service's module
  beforeEach(module('meanshopApp'));

  // instantiate service
  var products;
  beforeEach(inject(function (_Products_) {
    products = _Products_;
  }));

  it('should do something', function () {
    expect(!!products).toBe(true);
  });

});
