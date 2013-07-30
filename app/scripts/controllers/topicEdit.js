'use strict';

angular.module('regereceptioApp')
  .controller('TopiceditCtrl', function ($scope, $routeParams, pouch, $location) {
    var id = $routeParams.id;
    pouch.get(id)
    .then(function (doc) {
      $scope.topic = doc;
    });
    
    $scope.save = function () {
      pouch.put($scope.topic)
      .then(function (data) {
        console.log(data);
        if (data.ok) {
          $location.path("/topic");
        } else {
          throw new Error("Data don't saved. " + JSON.stringify(data));
        }
      });
    }
  });