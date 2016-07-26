'use strict';

angular.module('meanshopApp')
  .factory('Products', function () {
    // Service logic
    // ...

    var _products = [
      {
        _id: 1,
        price: 123.45,
        quantify: 10,
        description: 'lorem ipsum dolor sit amet'
      },
      {
        _id: 2,
        price: 123.45,
        quantify: 10,
        description: 'lorem ipsum dolor sit amet'
      },
      {
        _id: 3,
        price: 123.45,
        quantify: 10,
        description: 'lorem ipsum dolor sit amet'
      },
      {
        _id: 4,
        price: 123.45,
        quantify: 10,
        description: 'lorem ipsum dolor sit amet'
      },
      {
        _id: 5,
        price: 123.45,
        quantify: 10,
        description: 'lorem ipsum dolor sit amet'
      }
    ];

    // Public API here
    return _products;
  });
