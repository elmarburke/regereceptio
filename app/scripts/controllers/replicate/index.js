'use strict';

angular.module('regereceptioApp')
  .controller('ReplicateIndexCtrl', function ($scope, replicator) {
    $scope.replicateTo = function (remoteDb, newReplicate) {
      replicator.addSync(remoteDb, newReplicate);
    };
  });
