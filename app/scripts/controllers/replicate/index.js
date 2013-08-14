'use strict';

angular.module('regereceptioApp')
  .controller('ReplicateIndexCtrl', function ($scope, replicator, pouchClient, $window) {
    
    $scope.replicateTo = function (remoteDb, newReplicate) {
      replicator.addSync(remoteDb, newReplicate);
    };
    
    $scope.resetDatabase = function () {
      
      if ($window.confirm('Alle Daten werden gelöscht und die Seite neu geladen.')) {
        pouchClient.destroy('regerecepito')
        .then(function(data) {
            $window.location.href = '/replicate';
        });
      }
      
    };
    
    $scope.removeReplicator = function (index) {
      replicator.removeSync(index);
      if ($window.confirm('Die Replizierung endet erst mit erneutem laden der Seite. \nJetzt neu laden?')) {
        $window.location.href = '/replicate';
      }
    };
  });
