'use strict';

angular.module('regereceptioApp')
  .factory('replicator', function replicator($store, pouch, $rootScope) {
    var replicator = {};
    
    replicator.addSync = function (remoteDb, options) {
      if (options.continuous) {
        $rootScope.replicators.push({
          'remoteDb': remoteDb,
          'options': options
        });
      }
      
      replicator.startSync(remoteDb, options);
    };
    
    replicator.removeSync = function (index) {
      $rootScope.replicators = $rootScope.replicators.slice(index, 0);
    };
    
    var autostartSync = function () {
      
      $store.bind($rootScope, 'replicators');
      
      $rootScope.replicators.forEach(function (item) {
        replicator.startSync(item.remoteDb, item.options);
      });
      
    };
    
    replicator.startSync = function (remoteDb, options) {
      pouch.replicate.to(remoteDb, options);
      pouch.replicate.from(remoteDb, options);
    };
    
    autostartSync();
    
    return replicator;
  });
