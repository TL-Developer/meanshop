'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor(Auth, $scope) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;

    $scope.menu = [
      {
        'title':'Home',
        'state': 'main'
      },
      {
        'title': 'Products',
        'state': 'products'
      }
    ];
  }

}

angular.module('meanshopApp')
  .controller('NavbarController', NavbarController);
