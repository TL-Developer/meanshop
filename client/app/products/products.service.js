'use strict';

angular.module('meanshopApp')
  .factory('Products', function () {
    // Service logic
    // ...

    var _last_id = 5;

    var _example_products = [
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
    return {
      query: function(){
        return _example_products;
      },

      get: function(params){
        var result = {};
        angular.forEach(_example_products, function(product){
          if(product._id == params.id){
            return this.product = product;
          }
        }, result);
        return result.product;
      },

      delete: function(params){
        angular.forEach(_example_products, function(product, index){
          if(product._id == params._id) {
            console.log(product, index);
            _example_products.splice(index, 1);
            return;
          }
        });
      },

      create: function(product){
        product.id = ++_last_id;
        _example_products.push(product);
      },

      update: function(product){
        var item = this.get(product);
        if(!item) return false;

        item.title = product.title;
        item.price = product.price;
        item.quantify = product.quantify;
        item.description = product.description;

        return true;
      }
    };
  });
