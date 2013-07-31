'use strict';

angular.module('regereceptioApp')
  .controller('NavigationCtrl', function ($scope, $location, replicator) {
    $scope.title = 'Regereceptio';
    
    $scope.entries = [{
      title: 'Start',
      href: '/'
    }, {
      title: 'Themen',
      href: '/topic'
    }, {
      title: 'Sendungen',
      href: '/episode'
    }, {
      title: 'Synchronisieren',
      href: '/replicate'
    }];
    
    $scope.location = $location;
    
  });
