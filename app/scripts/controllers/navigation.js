'use strict';

angular.module('regereceptioApp')
  .controller('NavigationCtrl', function ($scope, $location) {
    $scope.title = "Regereceptio";
    
    $scope.entries = [{
      title: 'Home',
      href: '/'
    }, {
      title: 'Topics',
      href: '/topic'
    }, {
      title: 'Replicate',
      href: '/replicate/'
    }];
    
    $scope.location = $location;
    
  });
