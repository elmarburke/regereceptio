'use strict';

angular.module('regereceptioApp')
  .controller('ReplicateIndexCtrl', function ($scope, replicator, pouchClient, $window) {
    $scope.replicateTo = function (remoteDb, newReplicate) {
      replicator.addSync(remoteDb, newReplicate);
    };
    $scope.resetDatabase = function () {
        pouchClient.destroy('regereceptio')
        .then(function(data) {
            $window.alert("Reload!");
            $window.location.href = '/replicate'
        });
    }
  });
