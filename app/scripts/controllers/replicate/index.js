'use strict';

angular.module('regereceptioApp')
  .controller('ReplicateIndexCtrl', function ($scope, replicator, pouchClient, $window) {
    $scope.replicateTo = function (remoteDb, newReplicate) {
      replicator.addSync(remoteDb, newReplicate);
    };
    $scope.resetDatabase = function () {
      
      if ($window.confirm('Alle Daten werden gelöscht und die Seite neu geladen.')) {
        pouchClient.destroy('regereceptio')
        .then(function(data) {
            $window.location.href = '/replicate'
        });
      }
      
    }
  });
