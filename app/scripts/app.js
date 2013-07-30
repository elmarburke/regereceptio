'use strict';

angular.module('regereceptioApp', ["pouchdb-ng", "localStorage"])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/topic', {
        templateUrl: 'views/topic.html',
        controller: 'TopicCtrl'
      })
      .when('/topic/:id/edit', {
        templateUrl: 'views/topicEdit.html',
        controller: 'TopiceditCtrl'
      })
      .when('/replicate/', {
        templateUrl: 'views/replicate/index.html',
        controller: 'ReplicateIndexCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

Array.prototype.indexOfObject = function (prop, propVal) {
  var indexes = [];
  this.forEach(function (item, index) {
    if (item[prop] && item[prop] == propVal) {
      indexes.push(index);
    }
  });
  
  return indexes;
}